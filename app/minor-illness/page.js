import Link from 'next/link'
import { CheckCircle2, ArrowRight, Clock, Info, AlertCircle, HeartHandshake, Scale } from 'lucide-react'
import MinorIllnessFAQAccordion from './MinorIllnessFAQAccordion'

export const metadata = {
  title: 'Online Minor Illness Treatment in Oklahoma | Ebenezer Telehealth',
  description:
    'Same-day virtual care for minor illnesses across Oklahoma — sinus infections, cold & flu, UTIs, allergies & more. $50 per visit. Book online or call today.',
  alternates: {
    canonical: 'https://ebenezertelehealth.com/minor-illness',
  },
}

const conditions = [
  'Sinus infections and sinusitis',
  'Cold and flu symptoms',
  'Urinary tract infections (UTIs)',
  'Allergies and seasonal symptoms',
  'Pink eye (conjunctivitis)',
  'Skin rashes and minor skin concerns',
  'Sore throat and upper respiratory infections',
  'Stomach and digestive issues',
]

const pricingFeatures = [
  'Same-day video visit with Dr. Susan George',
  'Thorough evaluation, diagnosis & treatment recommendations',
  'Electronic prescriptions sent to your preferred pharmacy',
  'No insurance needed — cash-pay transparency',
]

const steps = [
  {
    number: '01',
    title: 'Book Your Visit',
    description:
      'Book online or call (405) 349-8188 — same-day appointments often available.',
  },
  {
    number: '02',
    title: 'Describe Your Symptoms',
    description:
      'Complete a quick intake sharing your symptoms and relevant health history.',
  },
  {
    number: '03',
    title: 'Meet Dr. George by Video',
    description:
      'Connect securely with Dr. George, DNP, APRN, for evaluation and diagnosis.',
  },
  {
    number: '04',
    title: 'Get Your Treatment',
    description:
      'Prescriptions sent electronically to your preferred Oklahoma pharmacy.',
  },
]

const whyPoints = [
  'Skip the waiting room — get evaluated from your couch, often the same day you book.',
  '$50 vs. a typical urgent care copay — no surprise bills, no insurance required.',
  'Avoid exposure to other illnesses by staying home and getting care virtually.',
  'Prescriptions sent directly to your preferred pharmacy anywhere in Oklahoma.',
]

// ─── Schema ───────────────────────────────────────────────────────────────────

const minorIllnessPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  name: 'Online Minor Illness Treatment in Oklahoma',
  description:
    'Same-day virtual care for minor illnesses across Oklahoma — sinus infections, cold & flu, UTIs, allergies & more. $50 per visit.',
  url: 'https://ebenezertelehealth.com/minor-illness',
  about: {
    '@type': 'MedicalProcedure',
    name: 'Minor Illness Treatment',
    procedureType: 'https://schema.org/TherapeuticProcedure',
    description:
      'Same-day telehealth evaluation and treatment for common minor illnesses including sinus infections, UTIs, cold and flu, allergies, pink eye, rashes, and stomach issues.',
  },
  provider: { '@id': 'https://ebenezertelehealth.com/#dr-susan-george' },
  areaServed: { '@type': 'State', name: 'Oklahoma' },
  offers: [
    {
      '@type': 'Offer',
      name: 'Minor Illness Visit',
      priceCurrency: 'USD',
      price: '50',
      description:
        'Same-day telehealth evaluation, treatment recommendations, and prescriptions when appropriate.',
    },
  ],
}

const minorIllnessFAQSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can I be treated for a sinus infection online?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Most minor illnesses can be evaluated and treated by video. If Dr. George determines you need in-person care or testing, she'll guide you to the right facility.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can I get an antibiotic prescribed online?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, when clinically appropriate and within telemedicine scope. Prescriptions are sent electronically to your preferred pharmacy.',
      },
    },
    {
      '@type': 'Question',
      name: 'How fast can I be seen for a minor illness?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Same-day appointments are often available. Book online or call (405) 349-8188.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a minor illness visit cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '$50 per visit, cash-pay. No insurance needed.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where in Oklahoma do you treat minor illnesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Anywhere in Oklahoma — OKC, Tulsa, Edmond, Norman, Lawton, rural communities, and everywhere in between.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if my condition is more serious than expected?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If your symptoms require urgent or emergency care beyond telehealth, Dr. George will tell you clearly and help you find the right next step.',
      },
    },
  ],
}

export default function MinorIllnessPage() {
  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(minorIllnessPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(minorIllnessFAQSchema) }}
      />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden -mt-[96px] sm:-mt-[112px] lg:-mt-[128px] pt-[96px] sm:pt-[112px] lg:pt-[128px]"
      >
        {/* Background image — mirrored horizontally */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/minor_ill.webp')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            transform: 'scaleX(-1)',
          }}
          aria-hidden="true"
        />
        {/* Teal-tinted overlay — matches brand color, image clearly visible */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(151,206,204,0.40) 0%, rgba(255,255,255,0.82) 60%)',
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
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
              <span style={{ color: 'var(--primary)' }}>Minor Illness</span>
            </nav>

            {/* Label */}
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--primary)' }}
            >
              Minor Illness Treatment
            </span>

            <h1
              className="text-4xl md:text-5xl font-bold mb-5"
              style={{ color: 'var(--navy)' }}
            >
              Online Treatment for Minor Illnesses — Same-Day Care in Oklahoma
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed mb-6 max-w-2xl">
              Feel better without leaving home. Get evaluated and treated online
              for common illnesses — sinus infections, cold and flu, UTIs,
              allergies, rashes, and more — often same day. $50 per visit, no
              insurance needed.
            </p>

            {/* Same-day badge */}
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold mb-8"
              style={{
                backgroundColor: 'rgba(151,206,204,0.40)',
                color: 'var(--navy)',
              }}
            >
              <Clock className="h-4 w-4" aria-hidden="true" />
              Same-day appointments often available
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto"
              >
                Book Your Visit
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
                Ebenezer Telehealth provides same-day online treatment for minor
                illnesses to patients across Oklahoma. Common conditions include
                sinus infections, cold and flu, UTIs, allergies, pink eye, rashes,
                and stomach issues. Visits are $50 cash-pay with Dr. George,
                DNP, APRN, and prescriptions are sent to your preferred pharmacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE TREAT ────────────────────────────────────────── */}
      <section className="bg-white" aria-labelledby="conditions-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">

          {/* Section header — full width */}
          <div className="mb-10 md:mb-14">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--primary)' }}
            >
              Conditions
            </span>
            <h2
              id="conditions-heading"
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ color: 'var(--navy)' }}
            >
              Minor Illnesses We Treat Online
            </h2>
            {/* Decorative accent line — matches WhyChooseUs pattern */}
            <div className="flex items-center gap-2 mb-5" aria-hidden="true">
              <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
              <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
              <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
            </div>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl leading-relaxed">
              We provide thorough evaluation and treatment for a wide range of
              minor illnesses through convenient telemedicine visits. During
              your appointment, Dr. George carefully assesses your condition by
              reviewing your symptoms, medical history, and any relevant
              details — allowing for informed clinical decisions while keeping
              care accessible and efficient.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start">

            {/* Conditions list — wrapped in a styled card for visual balance */}
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
                Common conditions we treat by video visit
              </p>
              <ul className="space-y-4">
                {conditions.map((condition) => (
                  <li key={condition} className="flex items-start gap-3">
                    <CheckCircle2
                      className="h-5 w-5 mt-0.5 flex-shrink-0"
                      style={{ color: 'var(--primary)' }}
                      aria-hidden="true"
                    />
                    <span className="text-gray-700 leading-snug">{condition}</span>
                  </li>
                ))}
              </ul>
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
                    When additional care is needed
                  </h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  If additional testing — such as lab work, imaging, or
                  in-person evaluation — is necessary, we&apos;ll guide you to
                  the appropriate facility and review results promptly. If your
                  condition requires urgent or emergency care beyond telehealth,
                  Dr. George will advise you clearly on the next steps.
                </p>
              </div>

              <div
                className="rounded-2xl p-6"
                style={{
                  backgroundColor: 'rgba(254,242,242,0.90)',
                  border: '1px solid rgba(239,68,68,0.15)',
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <AlertCircle
                    className="h-5 w-5 flex-shrink-0 text-red-500"
                    aria-hidden="true"
                  />
                  <h3 className="text-base font-semibold text-gray-800">
                    Emergency symptoms? Call 911.
                  </h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Telehealth is ideal for non-emergency illnesses. If you are
                  experiencing chest pain, difficulty breathing, severe
                  bleeding, or any other emergency symptoms, call 911 or go to
                  your nearest emergency room immediately.
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
                  Cash-pay. No insurance required.
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">
                  You&apos;ll know the full cost before you book. No hidden
                  fees, no insurance claims, no surprise bills. Just
                  straightforward care at a transparent price.
                </p>
                <Link href="/contact" className="btn-primary text-sm">
                  Book a Same-Day Visit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────────────────────── */}
      <section
        id="pricing"
        style={{ backgroundColor: 'var(--cream)' }}
        aria-labelledby="pricing-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">

          <div className="text-center mb-10">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--primary)' }}
            >
              Pricing
            </span>
            <h2
              id="pricing-heading"
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: 'var(--navy)' }}
            >
              Simple Pricing — $50 Per Visit
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-xl mx-auto">
              No insurance required. No hidden fees. You know the cost before
              you book.
            </p>
          </div>

          <div className="max-w-lg mx-auto">
            {/* Pricing card */}
            <div
              className="rounded-2xl p-8 border"
              style={{
                background:
                  'linear-gradient(135deg, rgba(26,166,183,0.06) 0%, rgba(151,206,204,0.18) 100%)',
                borderColor: 'rgba(26,166,183,0.30)',
              }}
            >
              <div className="mb-6">
                <h3
                  className="text-xl font-semibold mb-1"
                  style={{ color: 'var(--navy)' }}
                >
                  Minor Illness Visit
                </h3>
                <p className="text-sm text-gray-600">
                  Includes same-day virtual evaluation, treatment
                  recommendations, and prescriptions when appropriate and
                  within telemedicine scope.
                </p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span
                    className="text-5xl font-bold"
                    style={{ color: 'var(--primary)' }}
                  >
                    $50
                  </span>
                  <span className="text-sm text-gray-500">per visit</span>
                </div>
                <p className="mt-1 text-sm text-gray-400">
                  No follow-up required for most minor illnesses
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {pricingFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <CheckCircle2
                      className="h-4 w-4 mt-0.5 flex-shrink-0"
                      style={{ color: 'var(--primary)' }}
                      aria-hidden="true"
                    />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="btn-primary text-base w-full"
              >
                Book Your Visit
              </Link>
            </div>

            {/* Cash-pay note */}
            <div
              className="mt-6 rounded-xl p-5 flex items-start gap-3"
              style={{
                backgroundColor: 'rgba(151,206,204,0.15)',
                border: '1px solid rgba(26,166,183,0.20)',
              }}
              role="note"
            >
              <Info
                className="h-5 w-5 mt-0.5 flex-shrink-0"
                style={{ color: 'var(--primary)' }}
                aria-hidden="true"
              />
              <p className="text-sm text-gray-700">
                We operate on a <strong>cash-pay basis</strong>. No insurance
                claims, no surprise bills. The exact price is confirmed before
                you book.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: '#1AA6B7' }}
        aria-labelledby="how-it-works-heading"
      >
        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(26,166,183,0.40)' }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">

          {/* Heading */}
          <div className="text-center mb-12 md:mb-14">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: '#97CECC' }}
            >
              How It Works
            </span>
            <h2
              id="how-it-works-heading"
              className="text-3xl md:text-4xl font-bold mb-5"
              style={{ color: '#ffffff' }}
            >
              How a Minor Illness Visit Works
            </h2>
            <p
              className="text-base md:text-lg max-w-2xl mx-auto"
              style={{ color: 'rgba(255,255,255,0.90)' }}
            >
              Getting evaluated and treated online is simple. Book your visit,
              describe your symptoms, and meet Dr. George by secure video —
              often the same day. Prescriptions are sent directly to your
              preferred Oklahoma pharmacy.
            </p>
          </div>

          {/* Steps grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {steps.map((step, index) => (
              <div key={step.number} className="relative flex flex-col gap-4">
                {/* Desktop connector line */}
                {index < steps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] right-0 h-px"
                    style={{ backgroundColor: 'rgba(151,206,204,0.22)' }}
                    aria-hidden="true"
                  />
                )}
                <div
                  className="rounded-2xl p-6 flex flex-col gap-4 h-full"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.10)',
                  }}
                >
                  <div
                    className="inline-flex h-14 w-14 items-center justify-center rounded-xl text-xl font-bold"
                    style={{
                      backgroundColor: 'var(--primary)',
                      color: '#ffffff',
                    }}
                  >
                    {step.number}
                  </div>
                  <h3
                    className="text-base font-semibold leading-snug"
                    style={{ color: '#ffffff' }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: 'rgba(255,255,255,0.88)' }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              href="/contact"
              className="btn-primary text-base px-8 py-3.5"
            >
              Book Your Visit
            </Link>
            <p
              className="mt-3 text-sm"
              style={{ color: 'rgba(255,255,255,0.85)' }}
            >
              or{' '}
              <a
                href="tel:+14053498188"
                className="font-semibold"
                style={{ color: '#97CECC' }}
              >
                call (405) 349-8188
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ── WHY TELEHEALTH ───────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        aria-labelledby="why-heading"
        style={{
          backgroundImage: "url('/body_bg.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(232,247,247,0.80)' }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl">

            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--primary)' }}
            >
              Why Telehealth
            </span>

            <h2
              id="why-heading"
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ color: 'var(--navy)' }}
            >
              Why See an Online Doctor for a Minor Illness?
            </h2>

            {/* Decorative accent line */}
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
              When you&apos;re sick with a sinus infection, UTI, or cold, the
              last thing you want is to drive to a clinic, sit in a waiting
              room, and expose yourself to more illness. Telehealth lets you get
              evaluated and treated from your couch — often the same day you
              book — with a prescription sent directly to your pharmacy.
              It&apos;s faster, cheaper ($50 vs. a typical urgent care copay),
              and you skip the exposure and the commute.
            </p>

            <ul className="space-y-3.5" role="list">
              {whyPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <div
                    className="flex-shrink-0 mt-0.5 h-5 w-5 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(26,166,183,0.10)' }}
                    aria-hidden="true"
                  >
                    <CheckCircle2
                      className="h-3.5 w-3.5"
                      style={{ color: 'var(--primary)' }}
                    />
                  </div>
                  <span className="text-gray-700 leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
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
              Minor Illness Telehealth — FAQs
            </h2>
          </div>

          <MinorIllnessFAQAccordion />

          {/* CTAs below FAQ */}
          <div className="text-center mt-10">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto"
              >
                Book Your Visit
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

      {/* ── OTHER SERVICES ───────────────────────────────────────── */}
      <section
        style={{ backgroundColor: 'var(--cream)' }}
        aria-labelledby="other-services-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center mb-10 md:mb-12">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--primary)' }}
            >
              Also at Ebenezer
            </span>
            <h2
              id="other-services-heading"
              className="text-3xl md:text-4xl font-bold"
              style={{ color: 'var(--navy)' }}
            >
              Explore Our Other Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Women's Health card */}
            <article
              className="bg-white rounded-2xl p-7 flex flex-col gap-5 hover:-translate-y-0.5 transition-all duration-200"
              style={{
                border: '1px solid rgba(26,166,183,0.12)',
                boxShadow: '0 2px 16px rgba(26,166,183,0.07)',
              }}
            >
              <div
                className="inline-flex h-12 w-12 items-center justify-center rounded-xl"
                style={{ backgroundColor: 'rgba(26,166,183,0.08)' }}
                aria-hidden="true"
              >
                <HeartHandshake className="h-6 w-6" style={{ color: 'var(--primary)' }} />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3
                    className="text-xl font-semibold leading-snug"
                    style={{ color: 'var(--navy)' }}
                  >
                    Women&apos;s Health Telehealth
                  </h3>
                  <span
                    className="flex-shrink-0 inline-flex items-center rounded-full px-3 py-1 text-xs font-bold"
                    style={{
                      backgroundColor: 'rgba(151,206,204,0.30)',
                      color: 'var(--primary)',
                    }}
                  >
                    from $150
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-gray-600">
                  Discreet, compassionate virtual care for birth control, PCOS,
                  menopause, hormonal health, and more — led by a provider who
                  specializes in women&apos;s health.
                </p>
              </div>
              <Link
                href="/womens-health"
                className="inline-flex items-center gap-1.5 text-sm font-semibold group"
                style={{ color: 'var(--primary)' }}
                aria-label="Learn more about Women's Health Telehealth"
              >
                Learn more
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </article>

            {/* Weight Loss card */}
            <article
              className="bg-white rounded-2xl p-7 flex flex-col gap-5 hover:-translate-y-0.5 transition-all duration-200"
              style={{
                border: '1px solid rgba(26,166,183,0.12)',
                boxShadow: '0 2px 16px rgba(26,166,183,0.07)',
              }}
            >
              <div
                className="inline-flex h-12 w-12 items-center justify-center rounded-xl"
                style={{ backgroundColor: 'rgba(26,166,183,0.08)' }}
                aria-hidden="true"
              >
                <Scale className="h-6 w-6" style={{ color: 'var(--primary)' }} />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3
                    className="text-xl font-semibold leading-snug"
                    style={{ color: 'var(--navy)' }}
                  >
                    Medical Weight Loss Management
                  </h3>
                  <span
                    className="flex-shrink-0 inline-flex items-center rounded-full px-3 py-1 text-xs font-bold"
                    style={{
                      backgroundColor: 'rgba(151,206,204,0.30)',
                      color: 'var(--primary)',
                    }}
                  >
                    from $250
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-gray-600">
                  A medically supervised program built around your metabolic
                  health — including GLP-1 medication management — overseen by
                  Dr. George, BC-ADM certified.
                </p>
              </div>
              <Link
                href="/weight-loss"
                className="inline-flex items-center gap-1.5 text-sm font-semibold group"
                style={{ color: 'var(--primary)' }}
                aria-label="Learn more about Medical Weight Loss Management"
              >
                Learn more
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: '#ffffff' }}
        aria-labelledby="final-cta-heading"
      >
        {/* Decorative circles */}
        <div
          className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 h-72 w-72 rounded-full opacity-10 pointer-events-none"
          style={{ backgroundColor: 'var(--primary)' }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 h-48 w-48 rounded-full opacity-10 pointer-events-none"
          style={{ backgroundColor: 'var(--primary)' }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <h2
            id="final-cta-heading"
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: 'var(--primary)' }}
          >
            Ready to Feel Better Today?
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Same-day virtual care for minor illnesses across Oklahoma. $50 per
            visit — no insurance required, no waiting room.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="btn-primary text-base px-8 py-3.5 w-full sm:w-auto"
            >
              Book Your Visit
            </Link>
            <a
              href="tel:+14053498188"
              className="inline-flex items-center justify-center gap-2 text-gray-700 hover:text-primary font-semibold text-base transition-colors w-full sm:w-auto"
            >
              Call (405) 349-8188
            </a>
          </div>

          <p className="mt-10 text-sm text-gray-500">
            Ebenezer Telehealth &middot; Oklahoma City, OK &middot; (405)
            349-8188 &middot; ebenezertelehealth.com
          </p>
        </div>
      </section>
    </>
  )
}
