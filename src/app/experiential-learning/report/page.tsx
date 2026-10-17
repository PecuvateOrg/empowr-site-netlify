import type { Metadata } from 'next'
import Link from 'next/link'
import { LINKS } from '@/lib/links'

export const metadata: Metadata = {
  title: 'A Non-Medical Approach to Mental Health | Empowr CIC',
  description:
    "Empowr CIC's 2025 report on experiential learning as a proven, cost-effective approach to building resilience and promoting lifelong wellbeing.",
}

const CONTEXT_STATS = [
  { figure: '1 in 4', label: 'adults experience a mental health problem each year' },
  { figure: '8.7M', label: 'antidepressant prescriptions in England in 2023/24' },
  { figure: '+45%', label: 'rise in NHS mental health contacts since 2019' },
  { figure: '11.4', label: 'per 100,000 — suicide rate in 2023, highest since 1999' },
]

const EVIDENCE_ITEMS = [
  {
    icon: '🧠',
    label: 'Neuroplasticity',
    body: 'Repeated engagement in novel, hands-on activities leads to growth of new neural pathways and improved brain health.',
  },
  {
    icon: '💪',
    label: 'Resilience & Self-Efficacy',
    body: 'Real-world challenges foster confidence, adaptability, and coping strategies — skills protective against anxiety and depression.',
  },
  {
    icon: '🤝',
    label: 'Social Connection',
    body: 'Group-based experiential learning directly counteracts isolation — a recognised driver of poor mental health.',
  },
  {
    icon: '🌿',
    label: 'Physical Health Synergy',
    body: 'Movement-rich and outdoor-based programmes deliver simultaneous mental and physical benefits, reducing stress hormones and enhancing emotional regulation.',
  },
  {
    icon: '📈',
    label: 'Long-Term Impact',
    body: 'Participatory, experiential learning models in schools, communities, and workplaces improve mood, lower anxiety, and reduce healthcare reliance.',
  },
]

const ECONOMIC_ITEMS = [
  {
    icon: '💼',
    label: 'Greater Workforce Engagement',
    body: 'Individuals who stay mentally and physically active are more focused, adaptable, and productive — better able to maintain a healthy work-life balance.',
  },
  {
    icon: '🏥',
    label: 'Health System Relief',
    body: 'Improving mental resilience reduces reliance on NHS services — freeing resources for critical, acute care.',
  },
  {
    icon: '🌍',
    label: 'A More Resilient Population',
    body: 'A society built on continual learning and personal agency is more resilient in the face of social, economic, and technological change.',
  },
  {
    icon: '🔄',
    label: 'Indirect Public Benefit',
    body: 'The psychological effects of learning and achievement — increased dopamine and serotonin — naturally lead to more positive social behaviour and community contribution.',
  },
]

export default function ExperientialLearningReportPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-blue text-white">
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
          <Link
            href={LINKS.experientialLearning}
            data-pdf-hide
            className="inline-flex items-center gap-1.5 text-blue-light text-sm font-semibold hover:text-white transition-colors mb-8"
          >
            ← Experiential Learning
          </Link>
          <p className="text-blue-light text-xs font-semibold uppercase tracking-widest mb-4">
            Empowr Report · 2025
          </p>
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-6">
            A Non-Medical Approach to Mental Health
          </h1>
          <p className="text-blue-light text-lg leading-relaxed">
            The UK is facing a mental health crisis that medication and therapy alone cannot solve.
            This report makes the case for experiential learning — a proven, cost-effective approach
            to building resilience and promoting lifelong wellbeing for people of all ages.
          </p>
          <a
            href={LINKS.experientialLearningReportPdf}
            download
            data-pdf-hide
            className="inline-flex items-center gap-2 mt-8 bg-white text-blue font-bold text-sm px-5 py-3 rounded-full hover:bg-blue-pale transition-colors"
          >
            Download the report (PDF)
          </a>
        </div>
      </section>

      {/* Body */}
      <section className="bg-cream py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-6 space-y-16">

          {/* Stats */}
          <div>
            <div className="grid grid-cols-2 gap-5">
              {CONTEXT_STATS.map((stat) => (
                <div key={stat.figure} className="bg-white rounded-2xl border border-border p-6 text-center">
                  <p className="text-3xl md:text-4xl font-extrabold text-blue mb-2">{stat.figure}</p>
                  <p className="text-muted text-sm leading-snug">{stat.label}</p>
                </div>
              ))}
            </div>
            <p className="text-muted text-xs mt-3">Sources: NHS Digital, ONS — see references below.</p>
          </div>

          <hr className="border-t border-border" />

          {/* The Problem */}
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue">The Problem</p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-black">
              When Medical Alone Isn&apos;t Enough
            </h2>
            <p className="text-mid text-lg leading-relaxed">
              While medical treatments are essential for many, the data tells a troubling story. There is a widening gap
              between demand and supply in NHS services — with long wait times and rising disability claims for mental
              ill-health. Antidepressant use has more than doubled since 2015, yet the prevalence of common mental health
              disorders continues to climb year on year.
            </p>
            <p className="text-mid text-lg leading-relaxed">
              Among young people, probable mental disorder prevalence nearly doubled between 2017 and 2023 — from 12.5%
              to 20.3% for 8–16 year olds, and from 10.1% to 23.3% for 17–19 year olds. These trends highlight an
              urgent need for complementary, non-medical strategies.
            </p>
          </div>

          <hr className="border-t border-border" />

          {/* The Science */}
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue">The Science</p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-black">
              Why Experiential Learning Works
            </h2>
            <div className="bg-blue-pale rounded-2xl p-6 border border-blue/10">
              <p className="text-mid leading-relaxed">
                <strong className="text-black">Experiential learning</strong> is a structured cycle in which
                individuals <em>do</em> (engage in purposeful, often novel activity), <em>reflect</em> (analyse
                the experience), <em>conceptualise</em> (draw general principles) and <em>apply</em> (transfer
                insights to new situations).
              </p>
            </div>
            <p className="text-mid text-lg leading-relaxed">
              Science shows that the brain, like the body, thrives on stimulation. Just as physical exercise
              strengthens muscles, engaging in challenging experiences triggers{' '}
              <strong className="text-black">neuroplasticity</strong> — forming new neural connections, boosting
              cognitive flexibility, and promoting emotional resilience. Without such mental exercise, neural
              pathways weaken, reducing our ability to adapt to and navigate life&apos;s complexities.
            </p>
            <p className="text-mid text-lg leading-relaxed">
              Through carefully designed experiential learning programmes, Empowr introduces individuals to fresh
              challenges that stimulate brain activity at a cellular level. This activation leads to the creation
              of new neural pathways, improving brain function, reducing stress hormones, and enhancing the
              body&apos;s natural ability to stay adaptable.
            </p>
            <p className="text-mid text-lg leading-relaxed">
              Without regular and meaningful stimulation, our neural connections weaken, and our ability to grow,
              cope, and thrive diminishes. That&apos;s why we create hands-on experiences that keep people
              thinking, moving, and connecting — nurturing sharper minds, stronger bodies, and deeper human
              connection.
            </p>
          </div>

          <hr className="border-t border-border" />

          {/* The Evidence */}
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue">The Evidence</p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-black">
              What the Research Shows
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {EVIDENCE_ITEMS.map((item) => (
                <div key={item.label} className="bg-white rounded-2xl border border-border p-6 flex flex-col gap-2">
                  <span className="text-2xl">{item.icon}</span>
                  <p className="font-bold text-black text-sm">{item.label}</p>
                  <p className="text-mid text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          <hr className="border-t border-border" />

          {/* The Economic Case */}
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue">The Economic Case</p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-black">
              A Smarter Investment in Society
            </h2>
            <p className="text-mid text-lg leading-relaxed">
              Humans — regardless of age — are wired to seek progress and thrive on accomplishment. Whether
              mastering a new skill, moving with more confidence, or simply showing up and trying again, these
              experiences have a measurable effect on brain health and emotional stability. As more people feel
              capable and fulfilled, their contribution to society naturally increases.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {ECONOMIC_ITEMS.map((item) => (
                <div key={item.label} className="bg-blue-pale rounded-2xl border border-blue/10 p-6">
                  <span className="text-2xl mb-3 block">{item.icon}</span>
                  <p className="font-bold text-black mb-2">{item.label}</p>
                  <p className="text-mid text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          <hr className="border-t border-border" />

          {/* Our Commitment */}
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue">Our Commitment</p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-black">
              Leading the Movement
            </h2>
            <p className="text-mid text-lg leading-relaxed">
              The statistics are clear: the UK is facing a mental health crisis that cannot be solved by
              medication and therapy alone. Experiential learning is a powerful yet under-utilised tool —
              scientifically proven to build resilience, foster connection, and promote lifelong wellbeing.
              Integrating it into communities, schools, and health systems offers tangible progress for the
              millions who are struggling.
            </p>
            <p className="text-mid text-lg leading-relaxed">
              Empowr is committed to leading this movement — because we believe in the potential for every
              individual to thrive through experience.
            </p>
          </div>

          <hr className="border-t border-border" />

          {/* References */}
          <details className="group">
            <summary className="cursor-pointer font-semibold text-black text-sm list-none flex items-center gap-2 select-none">
              <span className="text-blue transition-transform group-open:rotate-90 inline-block">▶</span>
              View Sources &amp; References
            </summary>
            <ol className="mt-4 space-y-2 text-muted text-sm leading-relaxed list-decimal pl-5">
              <li>
                Milicevic, A., Milton, I. &amp; O&apos;Loughlin, C. (2016). Experiential reflective learning as a
                foundation for emotional resilience. <em>International Journal of Educational Research, 80</em>, 25–36.
              </li>
              <li>
                Coventry, P. A. et al. (2021). Nature-based outdoor activities for mental and physical health: A
                systematic review and meta-analysis. <em>SSM — Population Health, 16</em>, 100934.
              </li>
              <li>
                Gummelt, G. et al. (2024). Experiential learning in mental health diversion: Interdisciplinary
                approaches using Kolb&apos;s learning theory.{' '}
                <em>Journal of Evidence-Based Social Work, 22</em>(2), 171–188.
              </li>
              <li>
                Reece, J. (2025). Evaluating the effectiveness of adventure therapy in anxiety-related disorders.{' '}
                <em>Journal of Counselling and Development, 103</em>(3), 321–340.
              </li>
              <li>
                Grassini, S. (2022). A systematic review and meta-analysis of nature walk as an intervention for
                anxiety and depression. <em>Journal of Clinical Medicine, 11</em>(6), 1731.
              </li>
              <li>
                NHS Business Services Authority (2024).{' '}
                <em>Mental Health Medicines Statistics 2023/24: Antidepressant Prescribing.</em>
              </li>
              <li>
                NHS Digital (2023).{' '}
                <em>Mental Health of Children and Young People in England, 2023 — Wave 4 Follow-up.</em>
              </li>
              <li>
                NHS England (2025).{' '}
                <em>Mental Health Services Monthly Statistics — November 2024 (Final).</em>
              </li>
              <li>
                NHS England (2019).{' '}
                <em>Mental Health Services Monthly Statistics — March 2019 (Final).</em>
              </li>
              <li>
                NHS England (2016).{' '}
                <em>Mental Health Services Monthly Statistics — November 2016 (Final).</em>
              </li>
              <li>
                Office for National Statistics (2024).{' '}
                <em>Suicides in England and Wales: 2023 Registrations.</em>
              </li>
              <li>
                King&apos;s Fund (2025). <em>Mental Health 360°: Service and Workforce Trends.</em>
              </li>
              <li>The Sunday Times (2025, 15 June). Antidepressant use doubles among teenagers.</li>
            </ol>
          </details>

        </div>
      </section>
    </>
  )
}
