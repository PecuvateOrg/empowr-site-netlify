import Link from "next/link";
import { LINKS } from "@/lib/links";
import ReviewsCarousel from "@/components/ReviewsCarousel";

const OFFER_CARDS = [
  {
    label: "Sessions for Children",
    body: "Using fun games and engaging drills, our roller skating sessions help children build confidence, develop new skills, stay active, and make friends in a safe, supportive, and encouraging environment.",
  },
  {
    label: "Sessions for Adults",
    body: "Whether you're a complete beginner or looking to refine your skills, our adult sessions use structured coaching, drills, and practical exercises to help you build confidence, improve your skating, and become part of a supportive community.",
  },
  {
    label: "Sessions for All Ages",
    body: "Bringing generations together through roller skating, our all-ages sessions combine fun activities, games, and skill-building exercises to create an inclusive environment where everyone can learn, connect, and enjoy skating together.",
  },
];

const ROUTE_CARDS = [
  {
    heading: "Support Our Work",
    body: "Give monthly or one-time to fund Empowr programmes and activities in the community.",
    cta: "Become a Hero",
    // Explicit ask — tier chooser, same tab. See planning/layout/nav.md.
    href: LINKS.heroesplatform,
    external: true,
    sameTab: true,
  },
  {
    heading: "See Our Impact",
    body: "Reports, statistics, and evidence of our work — held to public account as a registered CIC.",
    cta: "Our Impact",
    href: "/impact",
    external: false,
  },
  {
    heading: "Work With Us",
    body: "Practitioners and facilitators who want to deliver programmes with Empowr.",
    cta: "Find Out More",
    href: "/work-with-us",
    external: false,
  },
  {
    heading: "Partner With Us",
    body: "Schools, organisations, and commissioners interested in working with Empowr at a strategic level.",
    cta: "Find Out More",
    href: "/partner-with-us",
    external: false,
  },
];


export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-blue text-white overflow-hidden">
        <video
          src="/hero-banner2-sharp.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[200%] w-auto"
        />
        <div className="absolute inset-0 bg-blue/65" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-14 md:py-28 lg:py-36 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight max-w-3xl mx-auto mb-6">
            Live by growing. Grow by learning. Learn by doing.
          </h1>
          <p className="text-lg md:text-xl text-blue-light max-w-2xl mx-auto leading-relaxed mb-10">
            We design and deliver{" "}
            <Link href={LINKS.experientialLearning} className="underline underline-offset-2 hover:text-white transition-colors">
              experiential learning
            </Link>{" "}
            programmes that improve long-term mental, physical, and emotional
            wellbeing — for people of every age.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={LINKS.booking}
              target="_blank"
              rel="noopener"
              className="bg-white text-blue font-semibold px-7 py-3 rounded-full hover:bg-blue-pale transition-colors"
            >
              Book a Session
            </a>
            <a
              href={LINKS.heroesplatform}
              rel="noopener"
              className="border-2 border-white text-white font-semibold px-7 py-3 rounded-full hover:bg-white/10 transition-colors"
            >
              Support Our Work
            </a>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="bg-cream py-12 md:py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-3">
              Everyone is welcome here.
            </h2>
            <p className="text-mid text-lg max-w-xl mx-auto">
              Empowr works with people of all ages and backgrounds. Whether
              you&apos;re stepping on skates for the first time or looking to
              push your limits — there&apos;s a session for you.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {OFFER_CARDS.map((card) => (
              <div
                key={card.label}
                className="bg-warm-white rounded-2xl p-7 border border-border flex flex-col"
              >
                <h3 className="text-lg font-bold text-black mb-3">{card.label}</h3>
                <p className="text-mid text-sm leading-relaxed flex-1">{card.body}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a
              href={LINKS.booking}
              target="_blank"
              rel="noopener"
              className="bg-blue text-white font-semibold px-8 py-3.5 rounded-full hover:bg-blue-dark transition-colors inline-block"
            >
              Book a Session
            </a>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="bg-blue-pale py-12 md:py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-3">
              Thousands of people. One community.
            </h2>
            <p className="text-mid text-lg max-w-xl mx-auto">
              Since February 2022, Empowr has been showing up. Our mission is
              to <em>empowr</em>{" "}as many people as possible — here&apos;s our
              reach so far.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { stat: "10,000+", label: "Participant attendances" },
              { stat: "428", label: "Sessions delivered" },
              { stat: "500+", label: "Hours of paid & volunteer work" },
              { stat: "2", label: "Countries reached" },
            ].map(({ stat, label }) => (
              <div
                key={label}
                className="bg-white rounded-2xl p-7 border border-border flex flex-col"
              >
                <span className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-blue mb-3">
                  {stat}
                </span>
                <span className="text-mid text-sm leading-snug">{label}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted mt-6 text-center">
            Figures from our 2024–25 Annual Report — one year&apos;s output.
          </p>
          <div className="mt-4 flex flex-wrap gap-3 justify-center">
            <Link
              href="/impact"
              className="text-sm font-semibold text-blue bg-white border border-blue/30 px-5 py-2.5 rounded-full hover:bg-blue-pale hover:border-blue/60 transition-colors"
            >
              See our full impact →
            </Link>
            <Link
              href="/history"
              className="text-sm font-semibold text-blue bg-white border border-blue/30 px-5 py-2.5 rounded-full hover:bg-blue-pale hover:border-blue/60 transition-colors"
            >
              Explore our history →
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-warm-white py-12 md:py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-3">
              See what others say
            </h2>
            <p className="text-mid text-lg max-w-xl mx-auto">
              Real people. Real sessions. Here&apos;s what our community thinks.
            </p>
          </div>
          <ReviewsCarousel />
        </div>
      </section>

      {/* Get Involved Routes */}
      <section className="bg-cream py-12 md:py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4 text-center">
            Get Involved
          </h2>
          <p className="text-mid text-lg max-w-xl mx-auto mb-14 text-center">
            There are several ways to connect with, support, and be part of
            Empowr.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ROUTE_CARDS.map((card) => (
              <div
                key={card.heading}
                className="bg-warm-white rounded-2xl p-7 border border-border flex flex-col"
              >
                <h3 className="text-lg font-bold text-black mb-3">
                  {card.heading}
                </h3>
                <p className="text-mid text-sm leading-relaxed flex-1 mb-6">
                  {card.body}
                </p>
                {card.external ? (
                  <a
                    href={card.href}
                    target={"sameTab" in card && card.sameTab ? undefined : "_blank"}
                    rel="noopener"
                    className="bg-blue text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-blue-dark transition-colors text-center"
                  >
                    {card.cta}
                  </a>
                ) : (
                  <Link
                    href={card.href}
                    className="bg-blue text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-blue-dark transition-colors text-center"
                  >
                    {card.cta}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
