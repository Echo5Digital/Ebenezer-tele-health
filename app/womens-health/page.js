import Link from 'next/link'
import { CheckCircle2, ArrowRight, ShieldCheck, Info, Scale, Thermometer } from 'lucide-react'
import WomensHealthFAQAccordion from './WomensHealthFAQAccordion'

export const metadata = {
  title: "Women's Health Telehealth Oklahoma City | Ebenezer Telehealth",
  description:
    "Discreet, compassionate women's health telehealth in Oklahoma. Birth control, UTIs, hormonal health, PCOS, menopause & more. Led by Dr. Susan George, DNP, APRN. Cash-pay, no insurance needed.",
  alternates: {
    canonical: 'https://ebenezertelehealth.com/womens-health',
  },
}

const conditions = [
  'Birth control consultation & management',
  'Urinary tract infections (UTIs)',
  'Hormonal imbalances & irregular cycles',
  'PCOS (Polycystic Ovary Syndrome)',
  'Vaginal infections (yeast, bacterial vaginosis)',
  'Menopause & perimenopause symptom management',
  'Postpartum support & recovery',
  'Thyroid health monitoring',
  'Sexual health & dysfunction',
  'Mood changes related to hormones',
  'PMS & PMDD management',
  'Preventive care guidance',
]

const pricingFeatures = [
  'Comprehensive symptom review & full health history',
  'Lab orders included when clinically appropriate',
  'Personalized treatment plan from Dr. Susan George',
  'Electronic prescriptions sent to your preferred pharmacy',
]

const steps = [
  {
    number: '01',
    title: 'Book Your Visit',
    description:
      'Book online or call (405) 349-8188 — same-day and next-day appointments often available.',
  },
  {
    number: '02',
    title: 'Complete Your Intake',
    description:
      'Fill out a brief health intake covering your symptoms, history, and current medications.',
  },
  {
    number: '03',
    title: 'Meet Dr. George by Video',
    description:
      'Connect securely with Dr. Susan George, DNP, APRN, for a thorough, private evaluation.',
  },
  {
    number: '04',
    title: 'Receive Your Treatment Plan',
    description:
      'Get prescriptions, lab orders, or personalized recommendations sent promptly after your visit.',
  },
]

const whyPoints = [
  "Discuss sensitive health topics from the comfort and privacy of your own home — no waiting room, no awkward encounters.",
  "Led by Dr. Susan George, a women's health specialist — not a generalist. She understands the nuance of women's health needs.",
  "Transparent $150 initial visit — no insurance required, no surprise billing, no hidden fees.",
  "Lab orders and prescriptions sent directly to a lab or pharmacy near you, anywhere in Oklahoma.",
]

export default function WomensHealthPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden -mt-[96px] sm:-mt-[112px] lg:-mt-[128px] pt-[96px] sm:pt-[112px] lg:pt-[128px]"
        style={{
          backgroundImage: "url('/women_health.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Mobile: uniform light overlay for readability */}
        <div
          className="absolute inset-0 lg:hidden"
          style={{ backgroundColor: 'rgba(255,255,255,0.93)' }}
          aria-hidden="true"
        />
        {/* Desktop: white-ish left (text readable) → teal-tinted right (image shows) */}
        <div
          className="absolute inset-0 hidden lg:block"
          style={{
            background:
              'linear-gradient(to right, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.86) 48%, rgba(3,93,87,0.38) 100%)',
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Content anchored to the left */}
            <div>
              {/* Breadcrumb */}
              <nav
                className="flex items-center gap-2 text-sm text-gray-500 mb-6"
                aria-label="Breadcrumb"
              >
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
                <span aria-hidden="true">/</span>
                <span style={{ color: 'var(--primary)' }}>Women&apos;s Health</span>
              </nav>

              {/* Label */}
              <span
                className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: 'var(--primary)' }}
              >
                Women&apos;s Health Telehealth
              </span>

              <h1
                className="text-4xl md:text-5xl font-bold mb-5"
                style={{ color: 'var(--navy)' }}
              >
                Women&apos;s Health Care — Virtual, Private &amp; Personalized
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed mb-6 max-w-2xl">
                Discreet, compassionate virtual care for the health issues that
                matter most to you. Led by Dr. Susan George, DNP, APRN — a
                women&apos;s health specialist serving women across Oklahoma from
                the comfort and privacy of home.
              </p>

              {/* HIPAA badge */}
              <div
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold mb-8"
                style={{
                  backgroundColor: 'rgba(153,217,217,0.40)',
                  color: 'var(--primary-dark)',
                }}
              >
                <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                Private, discreet &amp; HIPAA-secure
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

            {/* Empty right col — image visible on desktop */}
            <div className="hidden lg:block" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* ── AEO ANSWER BLOCK ─────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage: "url('/answer_block.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, rgba(255,255,255,0.88) 0%, rgba(255,255,255,0.78) 48%, rgba(3,93,87,0.28) 100%)',
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div
            className="max-w-3xl border-l-4 pl-5 md:pl-6"
            style={{ borderColor: 'var(--primary)' }}
          >
            <p
              className="hero-answer-line text-base md:text-lg leading-relaxed"
              style={{ color: '#035D57' }}
            >
              Ebenezer Telehealth provides women&apos;s health telehealth
              services across Oklahoma, led by Dr. Susan George, DNP, APRN. We
              offer confidential, cash-pay virtual visits for birth control,
              UTIs, hormonal health, PCOS, menopause, and more — from the
              privacy of your own home.
            </p>
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
              Women&apos;s Health Conditions We Treat Online
            </h2>
            {/* Decorative accent line — matches WhyChooseUs pattern */}
            <div className="flex items-center gap-2 mb-5" aria-hidden="true">
              <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
              <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(3,93,87,0.25)' }} />
              <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(3,93,87,0.12)' }} />
            </div>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl leading-relaxed">
              Dr. Susan George brings focused women&apos;s health expertise to
              every virtual visit. She carefully reviews your symptoms, medical
              history, and relevant health factors to provide informed,
              individualized care — all through the convenience of a secure
              video visit.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start">

            {/* Conditions list — styled card for visual balance */}
            <div
              className="rounded-2xl p-7 md:p-8 h-full"
              style={{
                backgroundColor: 'rgba(153,217,217,0.08)',
                border: '1px solid rgba(3,93,87,0.12)',
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
                  backgroundColor: 'rgba(153,217,217,0.15)',
                  border: '1px solid rgba(3,93,87,0.15)',
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
                    What your initial visit includes
                  </h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Your $150 initial visit includes a thorough symptom review
                  and health history, lab orders when clinically appropriate,
                  lab result interpretation, and a personalized treatment plan.
                  Dr. George takes time to listen and understand your full
                  picture before recommending any next steps.
                </p>
              </div>

              <div
                className="rounded-2xl p-6"
                style={{
                  backgroundColor: 'rgba(153,217,217,0.10)',
                  border: '1px solid rgba(3,93,87,0.12)',
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <ShieldCheck
                    className="h-5 w-5 flex-shrink-0"
                    style={{ color: 'var(--primary)' }}
                    aria-hidden="true"
                  />
                  <h3
                    className="text-base font-semibold"
                    style={{ color: 'var(--navy)' }}
                  >
                    Your privacy is our priority
                  </h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Every visit is conducted via a HIPAA-compliant, encrypted
                  video platform. You speak only with Dr. Susan George — no
                  rotating staff, no third-party networks. Sensitive health
                  conversations stay strictly between you and your provider.
                </p>
              </div>

              <div
                className="rounded-2xl p-6"
                style={{
                  backgroundColor: 'rgba(3,93,87,0.04)',
                  border: '1px solid rgba(3,93,87,0.12)',
                }}
              >
                <h3
                  className="text-base font-semibold mb-2"
                  style={{ color: 'var(--navy)' }}
                >
                  Cash-pay. No insurance required.
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">
                  You&apos;ll know your full cost before you book — $150 initial
                  visit, $50 follow-ups. No surprise bills, no insurance claims,
                  no pre-authorization delays.
                </p>
                <Link href="/contact" className="btn-primary text-sm">
                  Book a Women&apos;s Health Visit
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
              Simple, Transparent Pricing
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-xl mx-auto">
              No insurance required. No hidden fees. Know your cost before you
              book.
            </p>
          </div>

          <div className="max-w-lg mx-auto">
            {/* Pricing card */}
            <div
              className="rounded-2xl p-8 border"
              style={{
                background:
                  'linear-gradient(135deg, rgba(3,93,87,0.06) 0%, rgba(153,217,217,0.18) 100%)',
                borderColor: 'rgba(3,93,87,0.30)',
              }}
            >
              <div className="mb-6">
                <h3
                  className="text-xl font-semibold mb-1"
                  style={{ color: 'var(--navy)' }}
                >
                  Initial Women&apos;s Health Visit
                </h3>
                <p className="text-sm text-gray-600">
                  Comprehensive evaluation, lab orders when appropriate, and a
                  personalized treatment plan.
                </p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span
                    className="text-5xl font-bold"
                    style={{ color: 'var(--primary)' }}
                  >
                    $150
                  </span>
                  <span className="text-sm text-gray-500">initial visit</span>
                </div>
                <p className="mt-1 text-sm text-gray-400">
                  Follow-up visits $50 — no additional consultation fee
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
                backgroundColor: 'rgba(153,217,217,0.15)',
                border: '1px solid rgba(3,93,87,0.20)',
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
        style={{ backgroundColor: '#035D57' }}
        aria-labelledby="how-it-works-heading"
      >
        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(3,93,87,0.40)' }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">

          {/* Heading */}
          <div className="text-center mb-12 md:mb-14">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: '#99D9D9' }}
            >
              How It Works
            </span>
            <h2
              id="how-it-works-heading"
              className="text-3xl md:text-4xl font-bold mb-5"
              style={{ color: '#ffffff' }}
            >
              How a Women&apos;s Health Visit Works
            </h2>
            <p
              className="text-base md:text-lg max-w-2xl mx-auto"
              style={{ color: 'rgba(255,255,255,0.90)' }}
            >
              Getting women&apos;s health care online is simple, private, and
              often available same or next day. Book your visit, complete your
              intake, and connect with Dr. George by secure video — from
              anywhere in Oklahoma.
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
                    style={{ backgroundColor: 'rgba(153,217,217,0.22)' }}
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
                style={{ color: '#99D9D9' }}
              >
                call (405) 349-8188
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ── WHY VIRTUAL WOMEN'S HEALTH CARE ──────────────────────── */}
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
              Why Choose Virtual Women&apos;s Health Care?
            </h2>

            {/* Decorative accent line */}
            <div className="flex items-center gap-2 mb-6" aria-hidden="true">
              <div
                className="h-[3px] w-10 rounded-full"
                style={{ backgroundColor: 'var(--primary)' }}
              />
              <div
                className="h-[3px] w-4 rounded-full"
                style={{ backgroundColor: 'rgba(3,93,87,0.25)' }}
              />
              <div
                className="h-[3px] w-2 rounded-full"
                style={{ backgroundColor: 'rgba(3,93,87,0.12)' }}
              />
            </div>

            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
              Women&apos;s health is personal. Many patients feel more
              comfortable discussing sensitive topics — birth control, menstrual
              concerns, hormonal health, sexual health — in the privacy of their
              own home rather than a clinical waiting room. Telehealth removes
              the barriers of geography, scheduling, and discomfort, making it
              easier to get the specialized care you need on your own terms.
            </p>

            <ul className="space-y-3.5" role="list">
              {whyPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <div
                    className="flex-shrink-0 mt-0.5 h-5 w-5 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(3,93,87,0.10)' }}
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
              Women&apos;s Health Telehealth — FAQs
            </h2>
          </div>

          <WomensHealthFAQAccordion />

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
        aria-labelledby="wh-other-services-heading"
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
              id="wh-other-services-heading"
              className="text-3xl md:text-4xl font-bold"
              style={{ color: 'var(--navy)' }}
            >
              Explore Our Other Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Weight Loss card */}
            <article
              className="bg-white rounded-2xl p-7 flex flex-col gap-5 hover:-translate-y-0.5 transition-all duration-200"
              style={{
                border: '1px solid rgba(3,93,87,0.12)',
                boxShadow: '0 2px 16px rgba(3,93,87,0.07)',
              }}
            >
              <div
                className="inline-flex h-12 w-12 items-center justify-center rounded-xl"
                style={{ backgroundColor: 'rgba(3,93,87,0.08)' }}
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
                      backgroundColor: 'rgba(153,217,217,0.30)',
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

            {/* Minor Illness card */}
            <article
              className="bg-white rounded-2xl p-7 flex flex-col gap-5 hover:-translate-y-0.5 transition-all duration-200"
              style={{
                border: '1px solid rgba(3,93,87,0.12)',
                boxShadow: '0 2px 16px rgba(3,93,87,0.07)',
              }}
            >
              <div
                className="inline-flex h-12 w-12 items-center justify-center rounded-xl"
                style={{ backgroundColor: 'rgba(3,93,87,0.08)' }}
                aria-hidden="true"
              >
                <Thermometer className="h-6 w-6" style={{ color: 'var(--primary)' }} />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3
                    className="text-xl font-semibold leading-snug"
                    style={{ color: 'var(--navy)' }}
                  >
                    Minor Illness Treatment
                  </h3>
                  <span
                    className="flex-shrink-0 inline-flex items-center rounded-full px-3 py-1 text-xs font-bold"
                    style={{
                      backgroundColor: 'rgba(153,217,217,0.30)',
                      color: 'var(--primary)',
                    }}
                  >
                    $50/visit
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-gray-600">
                  Feel better without leaving home. Get evaluated and treated
                  online for sinus infections, colds, UTIs, allergies, and
                  other minor illnesses — often same day.
                </p>
              </div>
              <Link
                href="/minor-illness"
                className="inline-flex items-center gap-1.5 text-sm font-semibold group"
                style={{ color: 'var(--primary)' }}
                aria-label="Learn more about Minor Illness Treatment"
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
            Ready for Compassionate Women&apos;s Health Care?
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Private, specialized telehealth for women across Oklahoma. $150
            initial visit — no insurance required, no waiting room.
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
