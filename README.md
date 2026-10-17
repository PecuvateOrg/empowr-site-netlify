# Empowr Main Site

## About

### What it is
Empowr CIC's main website, at empowrcic.org.

### What it's for
To tell people who Empowr is, what it does and the difference it makes, and send each visitor — participant, parent, supporter or partner — to the right place.

### How it works
An information site: mission, programmes and impact, plus a contact form. Nothing is bought or booked here; visitors are routed to the right platform (booking, donations, the freelancer network) for that.

Public website for **Empowr CIC** — mission, programmes, impact, and audience routing. Replacing the previous Wix site. This is a narrative/information site, not transactional (no payments or bookings happen here).

Built with Next.js 16 (App Router), React 19, Tailwind CSS v4. Deployed on Netlify.

---

## Local Development

The Next.js app root is `src/` (not the project root — the project root holds `planning/`, `ops/`, and MWP docs alongside it).

```bash
cd src
npm install
npm run dev
```

Runs on `--hostname 0.0.0.0` so the dev server is reachable from other devices on the LAN.

Build for production:

```bash
npm run build
npm start
```

---

## Environment Variables

Two separate `.env.local` files are used, because Netlify's build `base` is `src/` but some vars are read from Netlify's own project-settings panel rather than a committed example file:

| Variable | Location | Purpose |
|---|---|---|
| `RESEND_API_KEY` | root `.env.local` (Netlify env vars at runtime) | Sends contact-form emails via Resend |
| `CONTACT_EMAIL` | root `.env.local` (Netlify env vars at runtime) | Inbox for General Enquiry, Partnership, and Media form submissions |
| `OPPORTUNITIES_EMAIL` | root `.env.local` (Netlify env vars at runtime) | Inbox for Work With Us enquiries |
| `CRM_API_BASE_URL` | `src/.env.local` | Base URL the contact-page chat embed proxies to (PecuvateCRM) |
| `CRM_CONTACT_API_URL` | `src/.env.local` | Contact-form → CRM channel endpoint |
| `CRM_CONTACT_API_KEY` | `src/.env.local` | Shared secret for the contact-form → CRM channel; must match PecuvateCRM's `CONTACT_FORM_SHARED_SECRET` — rotate both together |

All of the above must also be set in **Netlify > Site configuration > Environment variables** for production. See `src/.env.example` for the Resend/contact-routing template.

Note: the CRM chat embed and CRM contact-form routing were merged then reverted (2026-08-12) and are currently dormant — the `CRM_*` vars may not be wired into an active code path at any given time; check `src/` before assuming they're in use.

---

## Deployment

| Field | Value |
|---|---|
| Platform | Netlify |
| Netlify site name | `empowr-main-site` |
| Custom domain | `empowrcic.org` (and `www.empowrcic.org`) |
| Branch | `main` |
| Base directory | `src/` |
| Publish directory | `out` |
| DNS | AWS Route 53 |

Push to `main` — Netlify builds and deploys automatically. Use `/netlify-deploy` for first-time domain/DNS setup or changes to Route 53 records.

---

## Related Projects

| Project | Relation |
|---|---|
| Empowr Heroes (`../empowr-heroes-nextjs/`) | Donation platform — linked from Get Involved |
| LegalHub (`Pecuvate/PecuvateHub/LegalHub/`) | Hosts privacy and cookie policies linked from the footer |
| PecuvateCRM | Powers the (currently dormant) contact-page chat embed and contact-form routing |
