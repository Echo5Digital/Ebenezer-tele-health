import Link from 'next/link'
import {
  CheckCircle2,
  ArrowRight,
  Info,
  HeartHandshake,
  Thermometer,
  Scale,
} from 'lucide-react'
import WeightLossLocationFAQAccordion from '@/components/WeightLossLocationFAQAccordion'

export const metadata = {
  title: 'Weight Loss Clinic in Oklahoma City, OK',
  description:
    'Medical weight loss in Oklahoma City, OK — semaglutide, GLP-1 meds & personalized plans via telehealth. Led by Dr. Susan George, DNP. From $250. Book online today.',
  alternates: {
    canonical: 'https://ebenezertelehealth.com/weight-loss-okc',
  },
}

const initialIncludes = [
  'Comprehensive health evaluation and metabolic assessment',
  'Personalized weight-loss plan',
  'Medication management (including GLP-1/semaglutide when appropriate)',
  'Weight-loss medications shipped directly to you',
  'Lab orders when needed',
]

const followUpIncludes = [
  'Progress review and dose titration',
  'Side-effect monitoring',
  'Nutrition guidance',
  'Ongoing support and plan adjustments',
]

const steps = [
  {
    number: '01',
    title: 'Book Your Visit',
    description: 'Schedule online or call (405) 349-8188.',
  },
  {
    number: '02',
    title: 'Complete Your Intake',
    description: 'Fill out your health history and goals from home.',
  },
  {
    number: '03',
    title: 'Meet Dr. George by Video',
    description: 'Secure video evaluation — no commute required.',
  },
  {
    number: '04',
    title: 'Get Your Plan + Meds',
    description:
      'Your personalized plan and medications shipped to you in Oklahoma City, OK.',
  },
]

const faqs = [
  {
    id: 'okc-faq-1',
    question: 'Can I see a weight loss doctor online in Oklahoma City?',
    answer:
      'Yes. Ebenezer Telehealth serves Oklahoma City and all of Oklahoma via secure telehealth.',
  },
  {
    id: 'okc-faq-2',
    question: 'Do you prescribe semaglutide to patients in Oklahoma City?',
    answer:
      'Yes, when medically appropriate. Medications are shipped directly to your address.',
  },
  {
    id: 'okc-faq-3',
    question: 'How much does it cost?',
    answer:
      'Initial consultation: $250–$300. Follow-ups: $50. Cash-pay, no insurance required.',
  },
]

// ─── Schema ───────────────────────────────────────────────────────────────────

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  name: 'Weight Loss Clinic in Oklahoma City, OK',
  description:
    'Medical weight loss in Oklahoma City, OK — semaglutide, GLP-1 medications & personalized plans via telehealth. Led by Dr. Susan George, DNP. From $250.',
  url: 'https://ebenezertelehealth.com/weight-loss-okc',
  provider: { '@id': 'https://ebenezertelehealth.com/#dr-susan-george' },
  about: {
    '@type': 'MedicalProcedure',
    name: 'Medical Weight Loss in Oklahoma City',
    procedureType: 'https://schema.org/TherapeuticProcedure',
  },
  areaServed: {
    '@type': 'City',
    name: 'Oklahoma City',
    containedInPlace: { '@type': 'State', name: 'Oklahoma' },
  },
  offers: [
    {
      '@type': 'Offer',
      name: 'Weight Loss Initial Consultation',
      description:
        'Comprehensive evaluation, personalized weight-loss plan, medication management including GLP-1/semaglutide when appropriate, medications shipped to you, and lab orders when needed.',
      priceCurrency: 'USD',
      price: '250',
      priceSpecification: {
        '@type': 'PriceSpecification',
        minPrice: '250',
        maxPrice: '300',
        priceCurrency: 'USD',
      },
      availability: 'https://schema.org/InStock',
    },
    {
      '@type': 'Offer',
      name: 'Weight Loss Follow-Up Visit',
      description:
        'Progress review, dose titration, side-effect monitoring, nutrition guidance, and ongoing support and plan adjustments.',
      priceCurrency: 'USD',
      price: '50',
      availability: 'https://schema.org/InStock',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
}

export default function WeightLossOKCPage() {
  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden -mt-[96px] sm:-mt-[112px] lg:-mt-[128px] pt-[96px] sm:pt-[112px] lg:pt-[128px]"
        style={{
          backgroundImage: "url('/location_bg.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(255,255,255,0.72)' }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <nav
              className="flex items-center gap-2 text-sm text-gray-500 mb-6 flex-wrap"
              aria-label="Breadcrumb"
            >
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <span aria-hidden="true">/</span>
              <Link
                href="/weight-loss"
                className="hover:text-primary transition-colors"
                style={{ color: 'var(--primary)' }}
              >
                Weight Loss
              </Link>
              <span aria-hidden="true">/</span>
              <span style={{ color: 'var(--navy)' }}>Oklahoma City</span>
            </nav>

            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--primary)' }}
            >
              Weight Loss Clinic — Oklahoma City, OK
            </span>

            <h1
              className="text-4xl md:text-5xl font-bold mb-5"
              style={{ color: 'var(--navy)' }}
            >
              Weight Loss Clinic in Oklahoma City — Online Medical Weight Loss
            </h1>

            {/* Answer-first AEO */}
            <div
              className="rounded-xl border px-6 py-5 mb-6"
              style={{
                borderColor: 'rgba(26,166,183,0.20)',
                backgroundColor: 'rgba(151,206,204,0.12)',
              }}
            >
              <p className="hero-answer-line">
                Ebenezer Telehealth provides medically supervised weight loss
                care to patients in Oklahoma City, OK through secure telehealth
                visits. Our program includes personalized plans, semaglutide
                and GLP-1 medication management, and ongoing support — led by
                Dr. Susan George, DNP, APRN, BC-ADM. Initial consultations
                start at $250.
              </p>
            </div>

            <p className="text-base text-gray-600 leading-relaxed mb-6 max-w-2xl">
              Looking for a weight loss clinic in Oklahoma City? Ebenezer
              Telehealth brings medical weight loss care directly to you — no
              drive, no waiting room. Dr. Susan George, a Board Certified
              provider specializing in metabolic health, evaluates your goals
              and health profile by secure video, builds a personalized plan,
              and manages your medication (including semaglutide and other GLP-1
              options when appropriate) with regular follow-up visits.
            </p>

            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold mb-8"
              style={{
                backgroundColor: 'rgba(151,206,204,0.40)',
                color: 'var(--navy)',
              }}
            >
              <Scale className="h-4 w-4" aria-hidden="true" />
              GLP-1 &amp; Semaglutide Available — From $250
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto"
              >
                Book Your Consultation
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

      {/* ── WHAT'S INCLUDED ──────────────────────────────────────── */}
      <section
        id="pricing"
        style={{ backgroundColor: 'var(--cream)' }}
        aria-labelledby="okc-included-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center mb-10">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--primary)' }}
            >
              Pricing &amp; What&apos;s Included
            </span>
            <h2
              id="okc-included-heading"
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: 'var(--navy)' }}
            >
              What&apos;s Included in Your Weight Loss Program
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-xl mx-auto">
              No insurance required. No hidden fees. Transparent pricing for
              every visit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Initial card */}
            <div
              className="rounded-2xl p-8 border flex flex-col"
              style={{
                background:
                  'linear-gradient(135deg, rgba(26,166,183,0.06) 0%, rgba(151,206,204,0.18) 100%)',
                borderColor: 'rgba(26,166,183,0.30)',
              }}
            >
              <h3
                className="text-xl font-semibold mb-1"
                style={{ color: 'var(--navy)' }}
              >
                Initial Consultation
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                Comprehensive evaluation and program setup.
              </p>
              <div className="flex items-baseline gap-2 mb-6">
                <span
                  className="text-5xl font-bold"
                  style={{ color: 'var(--primary)' }}
                >
                  $250
                </span>
                <span className="text-sm text-gray-500">– $300</span>
              </div>
              <ul className="space-y-3 flex-1">
                {initialIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2
                      className="h-4 w-4 mt-0.5 flex-shrink-0"
                      style={{ color: 'var(--primary)' }}
                      aria-hidden="true"
                    />
                    <span className="text-sm text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Follow-up card */}
            <div
              className="rounded-2xl p-8 border flex flex-col"
              style={{
                background:
                  'linear-gradient(135deg, rgba(26,166,183,0.06) 0%, rgba(151,206,204,0.18) 100%)',
                borderColor: 'rgba(26,166,183,0.30)',
              }}
            >
              <h3
                className="text-xl font-semibold mb-1"
                style={{ color: 'var(--navy)' }}
              >
                Follow-Up Visits
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                Ongoing monitoring, dose adjustments, and support.
              </p>
              <div className="flex items-baseline gap-2 mb-6">
                <span
                  className="text-5xl font-bold"
                  style={{ color: 'var(--primary)' }}
                >
                  $50
                </span>
                <span className="text-sm text-gray-500">per visit</span>
              </div>
              <ul className="space-y-3 flex-1 mb-8">
                {followUpIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2
                      className="h-4 w-4 mt-0.5 flex-shrink-0"
                      style={{ color: 'var(--primary)' }}
                      aria-hidden="true"
                    />
                    <span className="text-sm text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="btn-primary text-base w-full mt-auto"
              >
                Book Your Consultation
              </Link>
            </div>
          </div>

          {/* Cash-pay note */}
          <div
            className="max-w-4xl mx-auto mt-6 rounded-xl p-5 flex items-start gap-3"
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
              All visits are by <strong>secure video</strong> from anywhere in
              Oklahoma. Medications shipped directly to you.{' '}
              <strong>Cash-pay only</strong> — no insurance required.
            </p>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: '#1AA6B7' }}
        aria-labelledby="okc-how-heading"
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(26,166,183,0.40)' }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center mb-12 md:mb-14">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: '#97CECC' }}
            >
              How It Works
            </span>
            <h2
              id="okc-how-heading"
              className="text-3xl md:text-4xl font-bold mb-5"
              style={{ color: '#ffffff' }}
            >
              How It Works for Oklahoma City Patients
            </h2>
            <p
              className="text-base md:text-lg max-w-2xl mx-auto"
              style={{ color: 'rgba(255,255,255,0.90)' }}
            >
              Four steps from booking to your personalized plan — all via
              secure video, no commute required.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {steps.map((step, index) => (
              <div key={step.number} className="relative flex flex-col gap-4">
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
                    style={{ backgroundColor: 'var(--primary)', color: '#ffffff' }}
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

          <div className="text-center">
            <Link href="/contact" className="btn-primary text-base px-8 py-3.5">
              Book Your Consultation
            </Link>
            <p className="mt-3 text-sm" style={{ color: 'rgba(255,255,255,0.85)' }}>
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

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        aria-labelledby="okc-faq-heading"
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
              id="okc-faq-heading"
              className="text-3xl md:text-4xl font-bold"
              style={{ color: 'var(--navy)' }}
            >
              Frequently Asked Questions — Weight Loss in Oklahoma City
            </h2>
          </div>

          <WeightLossLocationFAQAccordion faqs={faqs} />

          <div className="text-center mt-10">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto"
              >
                Book Your Consultation
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

      {/* ── RELATED SERVICES ─────────────────────────────────────── */}
      <section
        style={{ backgroundColor: 'var(--cream)' }}
        aria-labelledby="okc-related-heading"
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
              id="okc-related-heading"
              className="text-3xl md:text-4xl font-bold"
              style={{ color: 'var(--navy)' }}
            >
              More From Ebenezer Telehealth
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Full weight loss program */}
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
                <h3
                  className="text-xl font-semibold leading-snug mb-2"
                  style={{ color: 'var(--navy)' }}
                >
                  Full Weight Loss Program
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  Learn everything about our medical weight loss program —
                  semaglutide, GLP-1 management, and what to expect at every
                  step.
                </p>
              </div>
              <Link
                href="/weight-loss"
                className="inline-flex items-center gap-1.5 text-sm font-semibold group"
                style={{ color: 'var(--primary)' }}
              >
                View program
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </article>

            {/* Women's Health */}
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
                <HeartHandshake
                  className="h-6 w-6"
                  style={{ color: 'var(--primary)' }}
                />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3
                    className="text-xl font-semibold leading-snug"
                    style={{ color: 'var(--navy)' }}
                  >
                    Women&apos;s Health
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
                  Virtual care for birth control, PCOS, menopause, and hormonal
                  health.
                </p>
              </div>
              <Link
                href="/womens-health"
                className="inline-flex items-center gap-1.5 text-sm font-semibold group"
                style={{ color: 'var(--primary)' }}
              >
                Learn more
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </article>

            {/* Minor Illness */}
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
                <Thermometer
                  className="h-6 w-6"
                  style={{ color: 'var(--primary)' }}
                />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3
                    className="text-xl font-semibold leading-snug"
                    style={{ color: 'var(--navy)' }}
                  >
                    Minor Illness
                  </h3>
                  <span
                    className="flex-shrink-0 inline-flex items-center rounded-full px-3 py-1 text-xs font-bold"
                    style={{
                      backgroundColor: 'rgba(151,206,204,0.30)',
                      color: 'var(--primary)',
                    }}
                  >
                    $50/visit
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-gray-600">
                  Same-day online care for UTIs, sinus infections, colds,
                  allergies, and more.
                </p>
              </div>
              <Link
                href="/minor-illness"
                className="inline-flex items-center gap-1.5 text-sm font-semibold group"
                style={{ color: 'var(--primary)' }}
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
        aria-labelledby="okc-final-cta"
      >
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
            id="okc-final-cta"
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: 'var(--primary)' }}
          >
            Ready to Start Your Weight Loss Journey in Oklahoma City?
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Medically supervised weight loss — GLP-1 medications, personalized
            plans, real follow-up. Starting at $250.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="btn-primary text-base px-8 py-3.5 w-full sm:w-auto"
            >
              Book Your Consultation
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
