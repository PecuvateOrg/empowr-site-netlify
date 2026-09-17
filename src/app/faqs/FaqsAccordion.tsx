"use client";

import { useState } from "react";
import Link from "next/link";
import type { ReactNode } from "react";
import { LINKS } from "@/lib/links";

const linkClass =
  "text-blue underline hover:text-blue-dark transition-colors";

type Faq = { question: string; answer: ReactNode };
type FaqSection = { title: string; items: Faq[] };

const FAQ_SECTIONS: FaqSection[] = [
  {
    title: "About Empowr",
    items: [
      {
        question: "What is a Community Interest Company (CIC)?",
        answer: (
          <>
            <p>
              A Community Interest Company (CIC) is a type of company
              specifically designed to benefit the community rather than
              private shareholders. Any profits are reinvested back into the
              community purpose — not distributed to owners.
            </p>
            <p className="mt-3">
              CICs are regulated by the{" "}
              <a
                href="https://www.gov.uk/government/organisations/office-of-the-regulator-of-community-interest-companies"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                CIC Regulator
              </a>{" "}
              and are required to submit annual reports — called CIC 34 reports
              — demonstrating how their work has benefited the community. These
              reports are publicly available.
            </p>
          </>
        ),
      },
      {
        question: "Why did Empowr become a CIC?",
        answer: (
          <>
            <p>
              As a community interest company, our primary goal is to reinvest
              our surpluses back into the company or community, rather than
              maximizing profits for shareholders or owners.
            </p>
            <p className="mt-3">
              Being a CIC sets us apart from charities and traditional
              businesses, giving us the flexibility to undertake a diverse
              range of projects and activities without being bound by the same
              regulations and limitations. Our commitment to serving our
              community remains our top priority, and we strive to create a
              positive impact through all our initiatives.
            </p>
          </>
        ),
      },
      {
        question: "What does Empowr CIC actually do?",
        answer: (
          <>
            <p>
              Empowr is a health activities provider based in SE London,
              founded in 2021. Our mission is to promote lifelong wellbeing
              through experiential learning — doing new things, in motion,
              with others.
            </p>
            <p className="mt-3">
              Right now our main delivery is roller skating: weekly sessions,
              structured lessons, courses, camps, and community events for
              children and adults. Skating is the medium, not the mission —
              over time our programmes will expand into other activities built
              on the same approach. See{" "}
              <Link href="/our-work" className={linkClass}>
                Our Work
              </Link>{" "}
              for what we deliver today.
            </p>
          </>
        ),
      },
      {
        question: "What is experiential learning?",
        answer: (
          <>
            <p>
              Experiential learning is the principle that doing — not watching
              or passively studying — is the most effective mechanism for
              physical and mental wellbeing. New experiences form new neural
              connections, movement and challenge together improve how the
              body handles stress, and regular novel challenges build the
              adaptability to navigate setbacks.
            </p>
            <p className="mt-3">
              It's the method behind every programme we run. Read the full
              science and evidence base on our{" "}
              <Link href="/experiential-learning" className={linkClass}>
                Experiential Learning
              </Link>{" "}
              page.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Programmes",
    items: [
      {
        question: "What is EELA?",
        answer: (
          <>
            <p>
              EELA — Empowr Experiential Learning Activities — is the
              framework that every Empowr programme sits under. Each activity
              is organised as a named sub-programme with its own dedicated
              team, all built on the same experiential learning approach.
            </p>
            <p className="mt-3">
              The currently active sub-programme is MoveWell (movement &
              wellness — home of our skating programmes), with further
              sub-programmes covering creativity, outdoor exploration,
              body-mind skills, and collaboration planned. Visit{" "}
              <a
                href="https://eela.empowrcic.org/?utm_source=empowr-main&utm_medium=internal"
                target="_blank"
                rel="noopener"
                className={linkClass}
              >
                eela.empowrcic.org
              </a>{" "}
              for current sessions and programmes.
            </p>
          </>
        ),
      },
      {
        question: "What is ECCP?",
        answer: (
          <>
            <p>
              The Empowr Certified Coaching Programme (ECCP) is our coaching
              certification pathway — it develops members and
              practitioners into certified coaches who can deliver sessions
              across Empowr programmes. It has three levels: Foundation,
              Practitioner, and Advanced Coach.
            </p>
            <p className="mt-3">
              ECCP is currently in its pilot phase. If you're a practitioner
              interested in coaching with us, you can register interest on the{" "}
              <Link href="/eccp" className={linkClass}>
                ECCP page
              </Link>
              .
            </p>
          </>
        ),
      },
      {
        question: "What ages do you work with?",
        answer: (
          <>
            <p>
              Our sessions run in two streams: Kidz Space for children and
              young people, and Adults & Teens sessions. Age ranges vary by
              individual session, lesson, course, and camp.
            </p>
            <p className="mt-3">
              For current age ranges, schedules, and availability, check the
              individual session pages at{" "}
              <a
                href="https://eela.empowrcic.org/?utm_source=empowr-main&utm_medium=internal"
                target="_blank"
                rel="noopener"
                className={linkClass}
              >
                eela.empowrcic.org
              </a>
              .
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Sessions & Booking",
    items: [
      {
        question: "How do I book a session?",
        answer: (
          <>
            <p>
              Sessions are booked online through the individual session pages
            at{" "}
              <a
                href="https://eela.empowrcic.org/?utm_source=empowr-main&utm_medium=internal"
                target="_blank"
                rel="noopener"
                className={linkClass}
              >
                eela.empowrcic.org
              </a>
              . Payment in advance is required to secure a place. Walk-ins are
              accepted at some sessions but charged an additional fee, and all
              payments are cashless — we can't take cash on the day.
            </p>
            <p className="mt-3">
              Before a first session you'll also need to complete a risk
              waiver and photography consent form — links are in the footer of
              this site. Not sure which session is right for you? Take the
              quiz at{" "}
              <a
                href="https://start.empowrcic.org/quiz?utm_source=empowr-main&utm_medium=internal"
                target="_blank"
                rel="noopener"
                className={linkClass}
              >
                start.empowrcic.org/quiz
              </a>
              .
            </p>
          </>
        ),
      },
      {
        question: "What do I need to bring to a skating session?",
        answer: (
          <>
            <p>
              Protective gear and quad skates are required for structured
              lessons, courses, and camps: a properly fitted helmet (not a
              bike helmet), knee pads, elbow pads, wrist guards, and your own
              quad roller skates. Members arriving without this can't take
              part in a structured lesson, course, or camp.
            </p>
            <p className="mt-3">
              Open-skate and social sessions — Skate Jam, Roller Disco, and
              Roller Skate Events — don't require this kit list; protective
              gear is recommended but not mandatory there, and Skate Jam
              welcomes both quads and inline skates.
            </p>
            <p className="mt-3">
              Skate hire is available at some sessions — included at the
              Roller Disco, and available on request at camps with advance
              notice. Check the individual session page for details.
            </p>
          </>
        ),
      },
      {
        question: "What is your cancellation and refund policy?",
        answer: (
          <>
            {/*
              Rewritten 2026-09-17. This answer previously read "All bookings
              are final. Member-initiated cancellations, transfers, and
              refunds — including no-shows — are not available by default."
              That was the v1.1 position, and Terms & Conditions v1.2 /
              Programme Policies v1.2 reversed it on 2026-09-02 — so for two
              weeks this page denied customers rights the published policy
              had already granted them. Self-serve cancellation shipped
              2026-09-02 and self-serve date moves 2026-09-17.

              Derived from the KB, which is the source of truth for session
              policy: vaults/EMPOWR CIC/entities/sessions.md, "Cancellation &
              Refund Policy". Do not edit this answer from memory — re-read
              that section, and note the move right is per-offering.
            */}
            <p>
              Members cancel and move their own bookings from their account at{" "}
              <a
                href="https://members.empowrcic.org"
                className={linkClass}
                target="_blank"
                rel="noopener"
              >
                members.empowrcic.org
              </a>{" "}
              — no email, no staff involvement.
            </p>
            <p className="mt-3">
              <strong>Cancelling.</strong> Cancel at least 48 hours before the
              session starts and we'll refund the full amount to the card used
              to pay. Inside 48 hours a booking can't be cancelled and no
              refund is due, including no-shows.
            </p>
            <p className="mt-3">
              <strong>Moving to another date.</strong> Most single-session
              bookings can be moved once to another date of the same
              programme, at least 48 hours ahead and subject to availability.
              Bookings can't be moved to a different programme or transferred
              to another person. Your session page and your account both show
              whether a particular booking can be moved.
            </p>
            <p className="mt-3">
              <strong>Courses</strong> (Beginners Foundation, Prep to Street
              Skate) can be cancelled up to 48 hours before the course begins.
              Individual classes inside a course can't be moved or cancelled
              separately — they're sold as a block.
            </p>
            <p className="mt-3">
              <strong>Exceptions.</strong> Roller Quad Camp bookings are
              strictly non-refundable and non-exchangeable whatever notice is
              given. All Ages Roller Disco tickets are non-refundable and
              non-transferable, with no refund or make-up for a missed
              session.
            </p>
            <p className="mt-3">
              Refunds go back to the original card, usually within 5–10
              working days. Anything falling outside these rules can still be
              raised via our{" "}
              <Link href="/contact" className={linkClass}>
                contact form
              </Link>
              , and remains at Empowr's discretion.
            </p>
            <p className="mt-3">
              If we have to cancel a session (weather, venue, or staffing),
              we'll offer an alternative date. For the full terms, see our{" "}
              <Link href="/legal/terms-and-conditions" className={linkClass}>
                Terms & Conditions
              </Link>{" "}
              and{" "}
              <Link href="/legal/programme-policies" className={linkClass}>
                Programme Policies
              </Link>
              .
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Getting Involved",
    items: [
      {
        question: "How can I get involved beyond attending sessions?",
        answer: (
          <>
            <p>
              Empowr's community is built on three roles. Champions support on
              the ground — volunteer marshals who help manage sessions and
              carry the culture. Ambassadors represent Empowr outwards, in
              their own networks, schools, and communities. Heroes sustain the
              work through donations and ongoing support.
            </p>
            <p className="mt-3">
              See the{" "}
              <Link href="/get-involved" className={linkClass}>
                Get Involved
              </Link>{" "}
              page to find the path that fits you.
            </p>
          </>
        ),
      },
      {
        question: "How do donations work?",
        answer: (
          <>
            <p>
              Donations are made through our Heroes platform at{" "}
              <a
                href={LINKS.heroesplatform}
                target="_blank"
                rel="noopener"
                className={linkClass}
              >
                hero.empowrcic.org
              </a>
              . As a CIC, every surplus is reinvested into delivery — coaching,
              equipment, venue hire, and community outreach — never
              distributed to owners.
            </p>
          </>
        ),
      },
      {
        question: "Can my school or organisation work with Empowr?",
        answer: (
          <>
            <p>
              Yes — we partner in four ways: schools and education providers
              (enrichment, curriculum support, holiday provision),
              organisations and charities commissioning programmes for their
              beneficiaries, commissioners and funders working with us at a
              strategic level, and venues with spaces to activate.
            </p>
            <p className="mt-3">
              Start on the{" "}
              <Link href="/partner-with-us" className={linkClass}>
                Partner With Us
              </Link>{" "}
              page.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Impact & Accountability",
    items: [
      {
        question: "What impact has Empowr had?",
        answer: (
          <>
            <p>
              In the year ending October 2025, Empowr delivered around 10,000
              participant attendances across 428 sessions and 700+ hours of
              activity — double the previous year. Our 2023 reporting found
              that 4 out of 5 participants reported mental health and
              wellbeing improvements.
            </p>
            <p className="mt-3">
              These figures come from our CIC 34 annual reports, filed with
              the CIC Regulator and publicly available. See the full picture
              on our{" "}
              <Link href="/impact" className={linkClass}>
                Impact
              </Link>{" "}
              page.
            </p>
          </>
        ),
      },
      {
        question: "How is Empowr governed?",
        answer: (
          <>
            <p>
              Empowr CIC is governed by a Board of Directors responsible for
              protecting the mission, guiding strategic growth, and holding
              leadership to account. As a Community Interest Company we file
              public CIC 34 annual reports demonstrating community benefit,
              and all profits are reinvested into the organisation's purpose.
            </p>
          </>
        ),
      },
    ],
  },
];

function FaqItem({
  question,
  answer,
}: {
  question: string;
  answer: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-base font-semibold text-black">{question}</span>
        <span
          className={`shrink-0 w-6 h-6 flex items-center justify-center rounded-full border border-border text-blue transition-transform duration-200 ${open ? "rotate-45" : ""}`}
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 16 16"
            fill="none"
            className="w-3 h-3"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="8" y1="2" x2="8" y2="14" />
            <line x1="2" y1="8" x2="14" y2="8" />
          </svg>
        </span>
      </button>
      {open && (
        <div className="pb-5 text-mid leading-relaxed text-base">{answer}</div>
      )}
    </div>
  );
}

export default function FaqsAccordion() {
  return (
    <div className="space-y-12">
      {FAQ_SECTIONS.map((section) => (
        <section key={section.title}>
          <h2 className="text-xl md:text-2xl font-extrabold text-black mb-4">
            {section.title}
          </h2>
          <div className="bg-warm-white rounded-2xl border border-border px-8">
            {section.items.map((faq) => (
              <FaqItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
