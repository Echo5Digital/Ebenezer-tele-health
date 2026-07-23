import Link from 'next/link'
import { AlertCircle, Video } from 'lucide-react'
import TelehealthFAQAccordion from './TelehealthFAQAccordion'

export const metadata = {
  title: 'Telehealth & Televisits in Oklahoma',
  description:
    'See a provider by telehealth anywhere in Oklahoma with Ebenezer Health Clinic. Online medical care for weight loss, women\'s health and minor illness. (405) 349-8188.',
  alternates: {
    canonical: 'https://www.ebenezerhealthclinic.com/telehealth',
  },
}

// ─── Schema ───────────────────────────────────────────────────────────────────

const telehealthPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  name: 'Telehealth & Televisits in Oklahoma | Ebenezer Health Clinic',
  description:
    'Telehealth and televisits across Oklahoma. Online medical care for weight loss, women\'s health, and minor illnesses. Connect with our provider by secure video from anywhere in the state.',
  url: 'https://www.ebenezerhealthclinic.com/telehealth',
  provider: { '@id': 'https://www.ebenezerhealthclinic.com/#dr-susan-george' },
  areaServed: { '@type': 'State', name: 'Oklahoma' },
}

const telehealthFAQSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is a televisit like seeing a doctor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. You receive a real evaluation, diagnosis, treatment plan, and prescriptions when appropriate from a licensed provider.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where in Oklahoma can I use telehealth?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Anywhere in the state, as long as you're in Oklahoma at the time of your visit.",
      },
    },
    {
      '@type': 'Question',
      name: "What if I'd rather be seen in person?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Walk in to our Oklahoma City clinic anytime we're open.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need insurance for a telehealth visit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Cash-pay, transparent pricing.',
      },
    },
  ],
}

export default function TelehealthPage() {
  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(telehealthPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(telehealthFAQSchema) }}
      />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden -mt-[96px] sm:-mt-[112px] lg:-mt-[128px] pt-[96px] sm:pt-[112px] lg:pt-[128px]"
      >
        {/* Background image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/telehealth-hero.webp')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          aria-hidden="true"
        />
        {/* Overlay: solid left → transparent right so text is always legible */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(105deg, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.92) 40%, rgba(255,255,255,0.60) 65%, rgba(255,255,255,0.10) 100%)',
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-36 md:py-52">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <nav
              className="flex items-center gap-2 text-sm text-gray-500 mb-6"
              aria-label="Breadcrumb"
            >
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <span aria-hidden="true">/</span>
              <span style={{ color: 'var(--primary)' }}>Telehealth</span>
            </nav>

            {/* Label */}
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--primary)' }}
            >
              Telehealth &amp; Televisits · Statewide Oklahoma
            </span>

            <h1
              className="text-4xl md:text-5xl font-bold mb-5"
              style={{ color: 'var(--navy)' }}
            >
              Telehealth &amp; Televisits Across Oklahoma
            </h1>

            {/* Statewide badge */}
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold mb-8"
              style={{
                backgroundColor: 'rgba(151,206,204,0.40)',
                color: 'var(--navy)',
              }}
            >
              <Video className="h-4 w-4" aria-hidden="true" />
              Secure video visits · All of Oklahoma
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto"
              >
                Start a Televisit
              </Link>
              <a
                href="tel:+14053498188"
                className="btn-outline text-base px-7 py-3.5 w-full sm:w-auto"
              >
                Call (405) 349-8188
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── AEO ANSWER BLOCK ─────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage: "url('/answer_block3.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, rgba(255,255,255,0.82) 0%, rgba(255,255,255,0.60) 50%, rgba(151,206,204,0.18) 100%)',
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="flex justify-start">
            <div
              className="max-w-xl border-l-4 pl-5 md:pl-6"
              style={{ borderColor: 'var(--primary)' }}
            >
              <p
                className="hero-answer-line text-base md:text-lg leading-relaxed"
                style={{ color: '#1AA6B7' }}
              >
                Ebenezer Health Clinic offers telehealth (televisits) across Oklahoma
                for online medical care for weight loss, women&apos;s health, and minor
                illnesses. Connect with our provider by secure video from anywhere in
                the state, or visit our Oklahoma City clinic in person.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── BODY PARAGRAPH ───────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        aria-label="Telehealth Oklahoma online medical care"
        style={{
          backgroundImage: "url('/body_bg.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(232,247,247,0.52)' }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <div className="flex justify-center">
            <div
              className="max-w-2xl w-full rounded-2xl px-8 py-10 md:px-12 md:py-12 text-center shadow-sm"
              style={{
                backgroundColor: 'rgba(255,255,255,0.82)',
                border: '1px solid rgba(26,166,183,0.18)',
              }}
            >
              <p
                className="text-base md:text-lg leading-relaxed"
                style={{ color: 'var(--navy)' }}
              >
                Some visits don&apos;t need a trip to the clinic. With{' '}
                <strong style={{ color: 'var(--primary)' }}>
                  telehealth from Ebenezer Health Clinic
                </strong>
                , you can meet our provider by secure video from home, work, or
                anywhere in Oklahoma. It&apos;s the same trusted care, just more
                convenient for the things that work well online. Prefer to be seen
                in person? You&apos;re always welcome to walk in to our{' '}
                <strong style={{ color: 'var(--primary)' }}>
                  Oklahoma City clinic
                </strong>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WORKS WELL BY TELEVISIT ─────────────────────────── */}
      <section
        className="relative overflow-hidden"
        aria-labelledby="televisit-services-heading"
      >
        {/* Background image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/telehealth-televisit.webp')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          aria-hidden="true"
        />
        {/* Gradient: transparent left → solid white right (text side) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 35%, rgba(255,255,255,0.78) 55%, rgba(255,255,255,0.97) 72%, rgba(255,255,255,1) 100%)',
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          {/* Text shifted to right */}
          <div className="max-w-xl ml-auto">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--primary)' }}
            >
              Online Care
            </span>
            <h2
              id="televisit-services-heading"
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ color: 'var(--navy)' }}
            >
              What Works Well by Televisit
            </h2>
            <div className="flex items-center gap-2 mb-5" aria-hidden="true">
              <div
                className="h-[3px] w-10 rounded-full"
                style={{ backgroundColor: 'var(--primary)' }}
              />
              <div
                className="h-[3px] w-4 rounded-full"
                style={{ backgroundColor: 'rgba(26,166,183,0.25)' }}
              />
              <div
                className="h-[3px] w-2 rounded-full"
                style={{ backgroundColor: 'rgba(26,166,183,0.12)' }}
              />
            </div>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Weight-loss follow-ups and management, many women&apos;s health needs,
              and minor illnesses like sinus infections, UTIs, cold and flu. Some
              concerns are better handled in person. We&apos;ll tell you honestly,
              and you can visit the clinic.
            </p>
          </div>
        </div>
      </section>

      {/* ── HOW A TELEVISIT WORKS ─────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        aria-labelledby="how-it-works-heading"
        style={{
          backgroundImage: "url('/body_bg2.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(232,247,247,0.52)' }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-3xl">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--primary)' }}
            >
              How It Works
            </span>
            <h2
              id="how-it-works-heading"
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ color: 'var(--navy)' }}
            >
              How a Televisit Works
            </h2>
            <div className="flex items-center gap-2 mb-6" aria-hidden="true">
              <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
              <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
              <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
            </div>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
              Book online, complete a short intake, and meet your provider by secure
              video. Prescriptions are sent to your pharmacy when appropriate.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto"
              >
                Start a Televisit
              </Link>
              <a
                href="tel:+14053498188"
                className="btn-outline text-base px-7 py-3.5 w-full sm:w-auto"
              >
                Call (405) 349-8188
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHEN TO SEEK IN-PERSON OR EMERGENCY CARE ─────────────── */}
      <section
        aria-labelledby="emergency-care-heading"
        style={{ backgroundColor: 'rgba(254,242,242,0.60)' }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="flex flex-col items-center text-center">

            {/* Alert card */}
            <div
              className="w-full max-w-2xl rounded-2xl p-8 md:p-10 mb-8"
              style={{
                backgroundColor: '#ffffff',
                border: '2px solid rgba(239,68,68,0.30)',
                boxShadow: '0 4px 24px rgba(239,68,68,0.10)',
              }}
            >
              {/* Icon + heading */}
              <div className="flex flex-col items-center gap-3 mb-5">
                <div
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full"
                  style={{ backgroundColor: 'rgba(239,68,68,0.10)' }}
                  aria-hidden="true"
                >
                  <AlertCircle className="h-6 w-6 text-red-500" />
                </div>
                <h2
                  id="emergency-care-heading"
                  className="text-2xl md:text-3xl font-bold text-gray-800"
                >
                  When to Seek In-Person or Emergency Care
                </h2>
              </div>

              {/* Divider */}
              <div
                className="h-px w-16 mx-auto mb-5"
                style={{ backgroundColor: 'rgba(239,68,68,0.25)' }}
                aria-hidden="true"
              />

              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Telehealth isn&apos;t right for every situation. For anything that
                needs a physical exam or urgent attention, we&apos;ll direct you to
                in-person care. For emergencies,{' '}
                <strong className="text-red-600">call 911</strong>.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/contact"
                className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto"
              >
                Start a Televisit
              </Link>
              <a
                href="tel:+14053498188"
                className="btn-outline text-base px-7 py-3.5 w-full sm:w-auto"
              >
                Call (405) 349-8188
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        aria-labelledby="faq-heading"
        style={{
          backgroundImage: "url('/body_bg.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(232,247,247,0.52)' }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">

          <div className="text-center mb-12">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--primary)' }}
            >
              FAQ
            </span>
            <h2
              id="faq-heading"
              className="text-3xl md:text-4xl font-bold"
              style={{ color: 'var(--navy)' }}
            >
              Telehealth FAQs
            </h2>
          </div>

          <TelehealthFAQAccordion />

          {/* CTAs below FAQ */}
          <div className="text-center mt-10">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto"
              >
                Start a Televisit
              </Link>
              <a
                href="tel:+14053498188"
                className="btn-outline text-base px-7 py-3.5 w-full sm:w-auto"
              >
                Call (405) 349-8188
              </a>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
