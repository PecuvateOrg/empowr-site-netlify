import { Resend } from "resend";

// Sites beyond empowrcic.org itself that are allowed to submit into this form
// cross-origin (browsers block this by default — CORS). Each one is another
// Empowr CIC property, not an arbitrary third party.
const ALLOWED_ORIGINS = [
  "https://eela.empowrcic.org",
  "https://empowr-eela.netlify.app",
  "https://members.empowrcic.org",
  "https://empowr-members.netlify.app",
];

function corsHeaders(requestOrigin: string | undefined): Record<string, string> {
  const allowOrigin =
    requestOrigin && ALLOWED_ORIGINS.includes(requestOrigin) ? requestOrigin : ALLOWED_ORIGINS[0];
  return {
    "Access-Control-Allow-Origin": allowOrigin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

const SUBJECT_ROUTING: Record<string, string> = {
  "Work With Us": process.env.OPPORTUNITIES_EMAIL ?? "",
};

const DEFAULT_TO = process.env.CONTACT_EMAIL ?? "";
const FROM = "Empowr CIC <noreply@empowrcic.org>";

// Only a short alphanumeric/hyphen token is accepted as a source attribution
// tag (e.g. "wix", "prospectus", "eccp") — anything else is silently dropped.
const SOURCE_PATTERN = /^[a-zA-Z0-9-]{1,32}$/;

function sanitiseSource(value: unknown): string {
  return typeof value === "string" && SOURCE_PATTERN.test(value) ? value : "";
}

// Deliberately simple — this only needs to catch garbage/bot-typed addresses
// before we send a "confirmation" to them (which bounces and damages the
// sending domain's reputation for every form sharing it). Real deliverability
// isn't checked; that's what the confirmation send itself is for.
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Set in Netlify's production context only, so preview and branch deploys have
// no secret and skip verification rather than failing closed. The widget still
// renders there (the sitekey is set in every context) and its token is simply
// ignored — that keeps previews testable without registering a Turnstile
// hostname for every deploy-preview URL.
const TURNSTILE_SECRET_KEY = process.env.TURNSTILE_SECRET_KEY ?? "";

// EELA (split 2026-09-27) and Members (2026-10-10) each have their own
// Turnstile widget, so their tokens must be checked against that widget's
// secret. They post here rather than verifying themselves, so this function
// holds every secret and picks one by request origin. Every cross-origin
// entry in ALLOWED_ORIGINS needs a row here: an origin without one would
// fall through to Main Site's secret and fail every submission. The same
// fall-through applies to an origin whose own secret is unset: it fails
// closed in production rather than skipping verification.
const ORIGIN_TURNSTILE_SECRETS: Record<string, string> = {
  "https://eela.empowrcic.org": process.env.EELA_TURNSTILE_SECRET_KEY ?? "",
  "https://empowr-eela.netlify.app": process.env.EELA_TURNSTILE_SECRET_KEY ?? "",
  "https://members.empowrcic.org": process.env.MEMBERS_TURNSTILE_SECRET_KEY ?? "",
  "https://empowr-members.netlify.app": process.env.MEMBERS_TURNSTILE_SECRET_KEY ?? "",
};

function turnstileSecretFor(origin: string | undefined): string {
  return (origin && ORIGIN_TURNSTILE_SECRETS[origin]) || TURNSTILE_SECRET_KEY;
}

// Same base URL the chat widget functions already read (chat-config.ts,
// chat-message.ts) — reused here rather than adding a second, redundant
// full-URL variable for the same host.
const CRM_API_BASE_URL = process.env.CRM_API_BASE_URL ?? "";

async function verifyTurnstile(token: unknown, remoteIp: string | undefined, origin: string | undefined): Promise<boolean> {
  const secret = turnstileSecretFor(origin);
  if (!secret) return true;
  if (typeof token !== "string" || !token) return false;

  try {
    const body = new URLSearchParams({ secret, response: token });
    if (remoteIp) body.set("remoteip", remoteIp);

    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
      signal: AbortSignal.timeout(8000),
    });
    const data = await res.json();
    return data.success === true;
  } catch (err) {
    console.error("[contact] Turnstile verification failed:", err);
    return false;
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Routes the submission into PecuvateCRM's Escalations dashboard as the primary
// path — falls back to a direct internal-notification email (below) if the CRM
// is unreachable or misconfigured, so a submission is never silently lost.
async function notifyCrm(fields: {
  name: string;
  email: string;
  subject: string;
  message: string;
  source: string;
}): Promise<boolean> {
  const apiKey = process.env.CRM_CONTACT_API_KEY;
  if (!CRM_API_BASE_URL || !apiKey) return false;

  try {
    const res = await fetch(`${CRM_API_BASE_URL}/api/channels/contact-form`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-contact-form-secret": apiKey,
      },
      body: JSON.stringify({ orgSlug: "empowr-cic", ...fields }),
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) {
      console.error("[contact] CRM notify returned", res.status, await res.text());
      return false;
    }
    return true;
  } catch (err) {
    console.error("[contact] CRM notify failed:", err);
    return false;
  }
}

export const handler = async (event: {
  httpMethod: string;
  body: string | null;
  headers?: Record<string, string | undefined>;
}) => {
  const origin = event.headers?.origin ?? event.headers?.Origin;
  const cors = corsHeaders(origin);

  // Preflight — browsers send this ahead of any cross-origin POST with a
  // JSON content type before they'll send the real request.
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers: cors, body: "" };
  }

  if (event.httpMethod !== "POST") {
    return { statusCode: 405, headers: cors, body: "Method Not Allowed" };
  }

  let name: string, email: string, subject: string, message: string, company: string, source: unknown, turnstileToken: unknown;
  try {
    ({ name, email, subject, message, company, source, turnstileToken } = JSON.parse(event.body ?? "{}"));
  } catch {
    return { statusCode: 400, headers: cors, body: JSON.stringify({ error: "Invalid request" }) };
  }

  const safeSource = sanitiseSource(source);

  // Honeypot — real users never fill this. If it's populated, it's a bot.
  // Return 200 so the bot thinks it succeeded and doesn't retry, but send nothing.
  if (company?.trim()) {
    console.warn("[contact] Honeypot triggered — dropping submission");
    return {
      statusCode: 200,
      headers: { ...cors, "Content-Type": "application/json" },
      body: JSON.stringify({ success: true }),
    };
  }

  if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
    return { statusCode: 400, headers: cors, body: JSON.stringify({ error: "Missing required fields" }) };
  }

  if (!EMAIL_PATTERN.test(email.trim())) {
    return { statusCode: 400, headers: cors, body: JSON.stringify({ error: "Invalid email address" }) };
  }

  // A real bot challenge, unlike the honeypot above — tells a genuine user to
  // retry rather than silently swallowing the submission. Volume from a bot
  // that got past the honeypot is what damaged the sending domain's shared
  // reputation for every form on it (2026-08-17 spam incident).
  const remoteIp = event.headers?.["x-nf-client-connection-ip"] ?? event.headers?.["client-ip"];
  const humanVerified = await verifyTurnstile(turnstileToken, remoteIp, origin);
  if (!humanVerified) {
    return { statusCode: 400, headers: cors, body: JSON.stringify({ error: "Verification failed — please try again" }) };
  }

  const crmDelivered = await notifyCrm({ name, email, subject, message, source: safeSource });

  const resend = new Resend(process.env.RESEND_API_KEY);

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");

  try {
    if (!crmDelivered) {
      const toEmail = SUBJECT_ROUTING[subject] || DEFAULT_TO;

      if (!toEmail) {
        console.error("[contact] CRM notify failed and no fallback destination email configured");
        return { statusCode: 500, headers: cors, body: JSON.stringify({ error: "Server configuration error" }) };
      }

      // Checked explicitly — the Resend SDK returns { error } rather than
      // throwing on API-level failures (rate limit, domain issue, etc.), so
      // an unchecked call here can fail silently while still reporting
      // success to the visitor. This is what let the 2026-08-17 spam-driven
      // deliverability hit go unnoticed for over a week: the team's copy
      // never arrived and nothing logged it.
      const { error: notifyError } = await resend.emails.send({
        from: FROM,
        to: toEmail,
        replyTo: email,
        subject: `[Website Enquiry] ${subject} — ${name}`,
        html: `
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
          <p><strong>Subject:</strong> ${safeSubject}</p>
          ${safeSource ? `<p><strong>Source:</strong> ${escapeHtml(safeSource)}</p>` : ""}
          <hr />
          <p>${safeMessage}</p>
        `,
      });

      if (notifyError) {
        // Neither the CRM nor this fallback reached the team — don't tell
        // the visitor it succeeded when nobody on our end will ever see it.
        console.error("[contact] Internal notification email failed:", notifyError);
        return { statusCode: 500, headers: cors, body: JSON.stringify({ error: "Failed to send message" }) };
      }
    }

    const { error: confirmError } = await resend.emails.send({
      from: FROM,
      to: email,
      subject: "We've received your message — Empowr CIC",
      html: `
        <p>Hi ${safeName},</p>
        <p>Thank you for getting in touch with Empowr CIC. We've received your message and will get back to you within 2 working days.</p>
        <p>The Empowr CIC team</p>
        <hr />
        <p style="color:#888;font-size:12px;">enquiries@empowrcic.org | empowrcic.org</p>
      `,
    });

    // Not fatal — the team's copy (CRM or the send above) already landed,
    // which is the part that matters. Just make the failure visible.
    if (confirmError) {
      console.error("[contact] Confirmation email to visitor failed:", confirmError);
    }

    return {
      statusCode: 200,
      headers: { ...cors, "Content-Type": "application/json" },
      body: JSON.stringify({ success: true }),
    };
  } catch (err) {
    console.error("[contact] Resend error:", err);
    return {
      statusCode: 500,
      headers: cors,
      body: JSON.stringify({ error: "Failed to send message" }),
    };
  }
};
