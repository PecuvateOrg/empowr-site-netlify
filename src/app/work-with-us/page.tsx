import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work With Us | Empowr CIC",
  description:
    "Work with Empowr CIC across sessions, operations, management, and volunteering. Find the right role for you.",
};

const ROLES = [
  {
    heading: "Session Delivery",
    body: "Practitioners, facilitators, and coaches who deliver Empowr programmes in schools, community venues, and public spaces. The Empowr Certified Coach Programme (ECCP) is the pathway in.",
    cta: "Find Out More",
    href: "/eccp" as const,
    message: null,
    external: false,
  },
  {
    heading: "Operations & Coordination",
    body: "Programme coordination, logistics, admin, and community-facing support. The people who keep Empowr running well behind the scenes.",
    cta: "Express Interest",
    href: "/contact" as const,
    message: "Hi, I'd like to express my interest in supporting Empowr CIC with operations and coordination.",
    external: false,
  },
  {
    heading: "Management & Leadership",
    body: "Strategic support, project management, and organisational development. Help shape the direction and infrastructure of a growing CIC.",
    cta: "Express Interest",
    href: "/contact" as const,
    message: "Hi, I'd like to express my interest in supporting Empowr CIC in a management or leadership capacity.",
    external: false,
  },
  {
    heading: "Volunteering",
    body: "Contribute time in any capacity — event support, mentoring, community outreach, or skills-based volunteering. Every hour counts.",
    cta: "Express Interest",
    href: "/contact" as const,
    subject: "Volunteering",
    message: "Hi, I'd like to find out about volunteering with Empowr CIC.",
    external: false,
  },
];

export default function WorkWithUsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-blue text-white">
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-20 lg:py-28 text-center">
          <p className="text-blue-light text-xs font-semibold uppercase tracking-widest mb-4">
            Work With Us
          </p>
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight max-w-2xl mx-auto">
            Welcoming anyone who wishes to support us on our mission
          </h1>
        </div>
      </section>

      {/* Roles */}
      <section className="bg-cream py-12 md:py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-mid text-lg max-w-2xl mb-14 space-y-4 text-center mx-auto">
            <p>
              We&apos;re always on the lookout for passionate individuals to
              join our team and make a positive impact on the community. Empowr
              needs people across sessions, operations, leadership, and
              volunteering — people who believe in the power of hands-on
              experience to transform people&apos;s lives and who lead with
              values, not just skills.
            </p>
            <p>
              Whether you want to become a staff member, an Empowr Champion, a
              facilitator, or collaborate with us as a creative, there is a
              place for you here — reach out and explore the possibilities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ROLES.map((role) => (
              <div
                key={role.heading}
                className="bg-warm-white rounded-2xl p-8 border border-border flex flex-col"
              >
                <h2 className="text-2xl font-extrabold text-black mb-4">
                  {role.heading}
                </h2>
                <p className="text-mid text-lg leading-relaxed flex-1 mb-8">
                  {role.body}
                </p>
                {role.external ? (
                  <a
                    href={role.href}
                    className="self-start bg-blue text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-dark transition-colors"
                  >
                    {role.cta}
                  </a>
                ) : (
                  <Link
                    href={role.message ? { pathname: role.href, query: { subject: role.subject ?? "Work With Us", message: role.message } } : role.href}
                    className="self-start bg-blue text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-dark transition-colors"
                  >
                    {role.cta}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What working with Empowr means */}
      <section className="bg-warm-white border-t border-border py-12 md:py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-6">
                We invest in the people who represent us
              </h2>
              <div className="space-y-5 text-mid text-lg leading-relaxed">
                <p>
                  Working with Empowr is not just a role — it is a relationship.
                  We take seriously the responsibility of bringing people into a
                  CIC whose work directly affects communities. That means being
                  clear about what we expect, transparent about how we operate,
                  and genuinely invested in the people who show up for us.
                </p>
                <p>
                  Whether you are delivering a session, coordinating a
                  programme, or giving a few hours of your time — you are
                  representing something that matters. We will make sure you
                  understand what that is before any work begins.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                {
                  heading: "Values before credentials",
                  body: "We care more about what you believe than what you have done. Skills can be developed — a genuine commitment to community cannot.",
                },
                {
                  heading: "You join a community, not a roster",
                  body: "The people who work with Empowr are part of the same movement as the people we serve. There is no us-and-them here.",
                },
                {
                  heading: "Quality is non-negotiable",
                  body: "The people we work with deserve a consistently excellent experience. We will always prioritise that over scale or convenience.",
                },
              ].map((point) => (
                <div
                  key={point.heading}
                  className="border-l-4 border-blue pl-6 py-1"
                >
                  <h3 className="font-bold text-black mb-1">{point.heading}</h3>
                  <p className="text-mid text-sm leading-relaxed">{point.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue text-white py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ready to start the conversation?
          </h2>
          <p className="text-blue-light text-lg max-w-xl mx-auto mb-10">
            No formal application — just reach out and tell us who you are and
            how you would like to be involved.
          </p>
          <Link
            href={{ pathname: "/contact", query: { subject: "Work With Us", message: "Hi, I'd like to get in touch about working with Empowr CIC. Here's a bit about who I am and how I'd like to be involved:" } }}
            className="bg-white text-blue font-semibold px-8 py-4 rounded-full hover:bg-blue-pale transition-colors text-lg"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  );
}
