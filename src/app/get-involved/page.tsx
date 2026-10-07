import type { Metadata } from "next";
import Link from "next/link";
import { LINKS } from "@/lib/links";

export const metadata: Metadata = {
  title: "Get Involved | Empowr CIC",
  description:
    "Support Empowr, partner with us, work with us, or join the community — find the right route for you.",
};

const ROUTES = [
  {
    heading: "Support Our Work",
    body: "Give monthly or one-time to fund Empowr programmes and activities in the community. Every contribution helps us reach more people.",
    cta: "Become a Hero",
    // Explicit ask — land on the tier chooser, not the Heroes mission page.
    href: LINKS.heroesplatform,
    external: true,
    // Empowr-owned destination — keep the Referer header so cross-property
    // traffic stays attributable in analytics. See noreferrer note below.
    empowrOwned: true,
    // Conversion path, not a reference link — keep it in the same tab so the
    // visitor commits to the journey rather than spawning a background tab.
    sameTab: true,
    accent: "bg-blue text-white",
    ctaClass:
      "bg-white text-blue font-semibold px-6 py-3 rounded-full hover:bg-blue-pale transition-colors",
  },
  {
    heading: "Partner With Us",
    body: "For schools, community organisations, commissioners, and anchor institutions interested in working with Empowr at an organisational level.",
    cta: "Find Out More",
    href: "/partner-with-us",
    external: false,
    empowrOwned: true,
    accent: "bg-warm-white border border-border text-black",
    ctaClass:
      "bg-blue text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-dark transition-colors",
  },
  {
    heading: "Work With Us",
    body: "For practitioners, facilitators, coaches, and community workers interested in delivering work with Empowr.",
    cta: "Find Out More",
    href: "/work-with-us",
    external: false,
    empowrOwned: true,
    accent: "bg-warm-white border border-border text-black",
    ctaClass:
      "bg-blue text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-dark transition-colors",
  },
  {
    heading: "Join the Community",
    body: "For individuals who want to participate in Empowr programmes — skating sessions, courses, camps, and more.",
    cta: "Join on WhatsApp",
    href: LINKS.socialWhatsApp,
    external: true,
    // Third party — keep noreferrer.
    empowrOwned: false,
    accent: "bg-warm-white border border-border text-black",
    ctaClass:
      "bg-blue text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-dark transition-colors",
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-blue text-white">
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-20 lg:py-28">
          <p className="text-blue-light text-sm font-semibold uppercase tracking-widest mb-4">
            Get Involved
          </p>
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight max-w-2xl">
            There is more than one way to be part of the team
          </h1>
        </div>
      </section>

      {/* Route Cards */}
      <section className="bg-cream py-12 md:py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ROUTES.map((route) => (
              <div
                key={route.heading}
                className={`rounded-2xl p-8 flex flex-col ${route.accent}`}
              >
                <h2 className="text-2xl font-extrabold mb-4">{route.heading}</h2>
                <p
                  className={`text-lg leading-relaxed flex-1 mb-8 ${
                    route.accent.includes("bg-blue") ? "text-blue-light" : "text-mid"
                  }`}
                >
                  {route.body}
                </p>
                {route.external ? (
                  <a
                    href={route.href}
                    target={"sameTab" in route && route.sameTab ? undefined : "_blank"}
                    rel={route.empowrOwned ? "noopener" : "noopener noreferrer"}
                    className={`self-start ${route.ctaClass}`}
                  >
                    {route.cta}
                  </a>
                ) : (
                  <Link href={route.href} className={`self-start ${route.ctaClass}`}>
                    {route.cta}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spirit of Involvement */}
      <section className="bg-warm-white border-t border-border py-12 md:py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-6">
                Whatever your role, you&apos;re part of the same thing
              </h2>
              <div className="space-y-5 text-mid text-lg leading-relaxed">
                <p>
                  Whether you give, partner, deliver, or participate —
                  involvement at Empowr is not transactional. Every person who
                  engages, in any capacity, is contributing to the same mission:
                  a community that believes wellbeing is a way of life and that
                  real growth happens through experience.
                </p>
                <p>
                  We work with people of every age, across schools, community
                  venues, and public spaces. The right route for you depends on
                  who you are and what you bring. What stays the same, regardless
                  of your route in, is the community you are joining.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                {
                  heading: "Growth never stops",
                  body: "Empowr is built on the belief that learning through experience is the most powerful form of development — and that it belongs to everyone, at every age.",
                },
                {
                  heading: "Community is the work",
                  body: "The people who surround Empowr are not customers or contractors in the conventional sense. They are part of a movement that takes belonging seriously.",
                },
                {
                  heading: "Every form of involvement matters",
                  body: "A donation funds a session. A partnership opens a door. A practitioner holds the space. A participant shows up. All of it is the work.",
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
    </>
  );
}
