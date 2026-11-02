import type { Metadata } from "next";
import { LINKS } from "@/lib/links";

export const metadata: Metadata = {
  title: "Legal Policies | Empowr CIC",
  description:
    "Empowr CIC legal policies — privacy, cookies, terms, risk waiver, photography consent, and programme policies.",
};

const POLICIES = [
  {
    name: "Privacy Policy",
    desc: "How we collect, use, and protect your personal data in line with UK GDPR.",
    href: LINKS.privacyPolicy,
  },
  {
    name: "Cookie Policy",
    desc: "How we use cookies on this website and what that means for you.",
    href: LINKS.cookiePolicy,
  },
  {
    name: "Terms & Conditions",
    desc: "The terms that apply to use of this website and participation in Empowr programmes.",
    href: LINKS.termsAndConditions,
  },
  {
    name: "Risk Waiver",
    desc: "Acknowledgement of risks associated with physical activity and equipment use.",
    href: LINKS.riskWaiver,
  },
  {
    name: "Photography & Media Consent",
    desc: "How we use images and video of participants, including safeguarding for under-18s.",
    href: LINKS.photographyConsent,
  },
  {
    name: "Programme Policies",
    desc: "Session rules, code of conduct, and subscription terms for Empowr programmes.",
    href: LINKS.programmePolicies,
  },
];

export default function LegalPage() {
  return (
    <>
      <section className="bg-blue text-white">
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-20 lg:py-28">
          <p className="text-blue-light text-sm font-semibold uppercase tracking-widest mb-4">
            Legal
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight max-w-2xl mb-6">
            Policies &amp; Documents
          </h1>
          <p className="text-lg text-blue-light max-w-2xl leading-relaxed">
            All Empowr CIC legal policies are available below. These documents
            apply to use of this website and participation in Empowr programmes.
          </p>
        </div>
      </section>

      <section className="bg-cream py-12 md:py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {POLICIES.map((policy) => (
              <a
                key={policy.name}
                href={policy.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-warm-white rounded-2xl p-8 border border-border hover:border-blue/30 hover:shadow-sm transition-all flex flex-col"
              >
                <h2 className="text-lg font-bold text-black mb-3">
                  {policy.name}
                </h2>
                <p className="text-mid text-sm leading-relaxed flex-1 mb-6">
                  {policy.desc}
                </p>
                <span className="text-blue text-sm font-semibold">
                  Read policy →
                </span>
              </a>
            ))}
          </div>
          <p className="text-muted text-sm mt-12">
            Empowr CIC. Registered in England and Wales. Company number
            13660924.
          </p>
        </div>
      </section>
    </>
  );
}
