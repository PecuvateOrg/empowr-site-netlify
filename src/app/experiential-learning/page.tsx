import type { Metadata } from 'next'
import Link from 'next/link'
import { LINKS } from '@/lib/links'
import ExperientialLearningTabs from '@/components/ExperientialLearningTabs'

export const metadata: Metadata = {
  title: 'Experiential Learning & Wellbeing | Empowr CIC',
  description:
    "Empowr CIC's philosophy and framework for experiential learning — what EELA is, why it works, and the research that backs it.",
}

export default function ExperientialLearningPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-blue text-white">
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-20 lg:py-28 text-center">
          <p className="text-blue-light text-xs font-semibold uppercase tracking-widest mb-4">
            Our Philosophy
          </p>
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight max-w-3xl mx-auto mb-6">
            People learn and grow best through doing.
          </h1>
          <p className="text-blue-light text-lg leading-relaxed max-w-2xl mx-auto">
            Empowr designs all its programmes through EELA — the Empowr Experiential Learning
            Activities framework. This page explains what that means, why it works, and what
            the research says.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="bg-cream py-12 md:py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <ExperientialLearningTabs reportUrl={LINKS.experientialLearningReport} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3">Ready to be part of it?</h2>
          <p className="text-blue-light mb-8 max-w-xl mx-auto leading-relaxed">
            Join a session, explore our programmes, or help fund the work that this research supports.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/our-work"
              className="bg-white text-blue font-semibold px-6 py-3 rounded-full hover:bg-blue-pale transition-colors"
            >
              See Our Programmes
            </Link>
            <a
              href={LINKS.booking}
              target="_blank"
              rel="noopener"
              className="border-2 border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-colors"
            >
              Join a Session
            </a>
            <a
              href={LINKS.heroesplatform}
              rel="noopener"
              className="border-2 border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-colors"
            >
              Support Our Work
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
