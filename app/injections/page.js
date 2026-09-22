import Link from 'next/link'
import { CheckCircle2, Info, AlertCircle, Syringe } from 'lucide-react'
import InjectionsFAQAccordion from './InjectionsFAQAccordion'

export const metadata = {
  title: 'Vitamin & B12 Injections in Oklahoma City',
  description:
    'Vitamin, B12 & wellness injections in Oklahoma City at Ebenezer Health Clinic. Provider-evaluated, walk-ins welcome. Cash-pay. Book or call (405) 349-8188.',
  alternates: {
    canonical: 'https://www.ebenezerhealthclinic.com/injections',
  },
}

// ─── Schema ───────────────────────────────────────────────────────────────────

const injectionsPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  name: 'Vitamin & B12 Injections in Oklahoma City | Ebenezer Health Clinic',
  description:
    'Vitamin and B12 injections in Oklahoma City at Ebenezer Health Clinic. Given after a brief provider evaluation. Walk-ins welcome. Cash-pay, no insurance required.',
  url: 'https://www.ebenezerhealthclinic.com/injections',
  about: {
    '@type': 'MedicalProcedure',
    name: 'Vitamin Injection Therapy',
    procedureType: 'https://schema.org/TherapeuticProcedure',
    description:
      'In-person vitamin and B12 injections given after a brief provider evaluation at our Oklahoma City clinic. Supportive wellness injections, not a treatment or cure for any medical condition.',
  },
  provider: { '@id': 'https://www.ebenezerhealthclinic.com/#dr-susan-george' },
  areaServed: {
    '@type': 'City',
    name: 'Oklahoma City',
    containedIn: { '@type': 'State', name: 'Oklahoma' },
  },
  offers: [
    {
      '@type': 'Offer',
      name: 'Vitamin Injection Visit',
      priceCurrency: 'USD',
      description:
        'In-person injection visit including brief provider evaluation. Cash-pay, no insurance required. Contact clinic for current pricing.',
    },
  ],
}

const injectionsFAQSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where are injections given?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "In person at our Oklahoma City clinic. Walk-ins welcome. Injections aren't available by telehealth.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need an appointment for an injection?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Walk in, or book ahead if you prefer.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does a vitamin injection cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Injections are cash-pay. Contact the clinic for current per-injection pricing. No insurance required.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do injections treat medical conditions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "No. They're supportive wellness injections given after a provider evaluation, not a treatment or cure.",
      },
    },
  ],
}

export default function InjectionsPage() {
  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(injectionsPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(injectionsFAQSchema) }}
      />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden -mt-[112px] sm:-mt-[128px] lg:-mt-[144px] pt-[112px] sm:pt-[128px] lg:pt-[144px]"
      >
        {/* Background image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/injection-hero.webp')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          aria-hidden="true"
        />
        {/* White gradient: transparent on left → solid white on right (text side) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 35%, rgba(255,255,255,0.75) 55%, rgba(255,255,255,0.97) 72%, rgba(255,255,255,1) 100%)',
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-36 md:py-52">
          <div className="max-w-xl ml-auto">
            {/* Breadcrumb */}
            <nav
              className="flex items-center gap-2 text-sm text-gray-500 mb-6"
              aria-label="Breadcrumb"
            >
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <span aria-hidden="true">/</span>
              <span style={{ color: 'var(--primary)' }}>Injections</span>
            </nav>

            {/* Label */}
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--primary)' }}
            >
              Vitamin &amp; Wellness Injections · Oklahoma City
            </span>

            <h1
              className="text-4xl md:text-5xl font-bold mb-5"
              style={{ color: 'var(--navy)' }}
            >
              Vitamin &amp; B12 Injections in Oklahoma City
            </h1>

            {/* Walk-in badge */}
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold mb-8"
              style={{
                backgroundColor: 'rgba(151,206,204,0.40)',
                color: 'var(--navy)',
              }}
            >
              <Syringe className="h-4 w-4" aria-hidden="true" />
              In-person only · Walk-ins welcome
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto"
              >
                Book an Injection Visit
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
          backgroundImage: "url('/answer_block2.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to left, rgba(255,255,255,0.82) 0%, rgba(255,255,255,0.60) 50%, rgba(151,206,204,0.18) 100%)',
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="flex justify-end">
            <div
              className="max-w-xl border-l-4 pl-5 md:pl-6"
              style={{ borderColor: 'var(--primary)' }}
            >
              <p
                className="hero-answer-line text-base md:text-lg leading-relaxed"
                style={{ color: '#1AA6B7' }}
              >
                Ebenezer Health Clinic offers vitamin and B12 injections in Oklahoma
                City, given after a brief provider evaluation. Injections are available
                in person at our OKC clinic. Walk-ins welcome. Part of a supportive
                wellness routine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── BODY PARAGRAPH ───────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        aria-label="Vitamin injections Oklahoma City"
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
                Sometimes a little support helps you feel more like yourself. At our{' '}
                <strong style={{ color: 'var(--primary)' }}>
                  Oklahoma City clinic
                </strong>
                , we offer vitamin and B12 injections after a quick provider
                check-in to make sure they&apos;re a good fit for you. It&apos;s a
                simple, in-person visit. Walk in or book ahead.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── INJECTIONS WE OFFER ───────────────────────────────────── */}
      <section className="bg-white" aria-labelledby="injections-menu-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">

          {/* Section header */}
          <div className="mb-10 md:mb-14">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--primary)' }}
            >
              What We Offer
            </span>
            <h2
              id="injections-menu-heading"
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ color: 'var(--navy)' }}
            >
              Injections We Offer
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
            <p className="text-base md:text-lg text-gray-600 max-w-3xl leading-relaxed">
              Each injection is given after a provider evaluation to confirm it&apos;s
              a good fit for you. Contact the clinic for our current injection menu
              and availability.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start">

            {/* Injection types list */}
            <div
              className="rounded-2xl p-7 md:p-8 h-full"
              style={{
                backgroundColor: 'rgba(151,206,204,0.08)',
                border: '1px solid rgba(26,166,183,0.12)',
              }}
            >
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-5"
                style={{ color: 'var(--primary)' }}
              >
                Available injections: contact us to confirm current menu
              </p>
              <ul className="space-y-4">
                {[
                  'Vitamin B12 injection',
                  'B-complex injection',
                  'Lipotropic (MIC) injection',
                  'Vitamin D injection',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      className="h-5 w-5 mt-0.5 flex-shrink-0"
                      style={{ color: 'var(--primary)' }}
                      aria-hidden="true"
                    />
                    <span className="text-gray-700 leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
              <div
                className="mt-6 pt-5"
                style={{ borderTop: '1px solid rgba(26,166,183,0.15)' }}
              >
                <p className="text-sm text-gray-500 leading-relaxed italic">
                  Each injection is given after a brief provider evaluation.
                  Contact us to confirm what&apos;s currently available.
                </p>
              </div>
            </div>

            {/* Info boxes */}
            <div className="flex flex-col gap-5">
              <div
                className="rounded-2xl p-6"
                style={{
                  backgroundColor: 'rgba(151,206,204,0.15)',
                  border: '1px solid rgba(26,166,183,0.15)',
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Info
                    className="h-5 w-5 flex-shrink-0"
                    style={{ color: 'var(--primary)' }}
                    aria-hidden="true"
                  />
                  <h3
                    className="text-base font-semibold"
                    style={{ color: 'var(--navy)' }}
                  >
                    In-person only
                  </h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Injections are given in person at our Oklahoma City clinic.
                  They are not available by telehealth. Walk in when it works for
                  you, or book ahead for a confirmed time.
                </p>
              </div>

              <div
                className="rounded-2xl p-6"
                style={{
                  backgroundColor: 'rgba(26,166,183,0.04)',
                  border: '1px solid rgba(26,166,183,0.12)',
                }}
              >
                <h3
                  className="text-base font-semibold mb-2"
                  style={{ color: 'var(--navy)' }}
                >
                  Provider-evaluated. Cash-pay.
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">
                  Every injection visit includes a quick provider check-in to make
                  sure it&apos;s the right choice for you. Simple cash-pay pricing.
                  No insurance required, no surprise bills.
                </p>
                <Link href="/contact" className="btn-primary text-sm">
                  Book an Injection Visit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT TO EXPECT ────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        aria-labelledby="what-to-expect-heading"
        style={{
          backgroundImage: "url('/minor-illness-same-day.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'bottom right',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(255,255,255,0.92) 0%, rgba(232,247,247,0.80) 100%)',
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-3xl">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--primary)' }}
            >
              Your Visit
            </span>
            <h2
              id="what-to-expect-heading"
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ color: 'var(--navy)' }}
            >
              What to Expect
            </h2>
            <div className="flex items-center gap-2 mb-6" aria-hidden="true">
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
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
              A brief visit at our Oklahoma City clinic: a short evaluation, then your
              injection. Cash-pay pricing, no insurance required.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto"
              >
                Walk-Ins Welcome
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

      {/* ── IMPORTANT / COMPLIANCE NOTICE ────────────────────────── */}
      <section
        aria-labelledby="important-notice-heading"
        style={{ backgroundColor: 'rgba(254,242,242,0.60)' }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="flex flex-col items-center text-center">

            {/* Notice card */}
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
                  id="important-notice-heading"
                  className="text-2xl md:text-3xl font-bold text-gray-800"
                >
                  Important
                </h2>
              </div>

              {/* Divider */}
              <div
                className="h-px w-16 mx-auto mb-5"
                style={{ backgroundColor: 'rgba(239,68,68,0.25)' }}
                aria-hidden="true"
              />

              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Vitamin and wellness injections are supportive and are{' '}
                <strong className="text-red-600">
                  not a treatment or cure for any medical condition
                </strong>
                , and they don&apos;t replace medical care. Whether an injection is
                appropriate for you depends on a provider evaluation. If you have a
                medical concern, we&apos;ll help you address it properly.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/contact"
                className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto"
              >
                Book an Injection Visit
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
              Vitamin Injections FAQs
            </h2>
          </div>

          <InjectionsFAQAccordion />

          {/* CTAs below FAQ */}
          <div className="text-center mt-10">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto"
              >
                Book an Injection Visit
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
