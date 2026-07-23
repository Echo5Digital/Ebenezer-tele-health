import Link from 'next/link'
import { CheckCircle2, Info, AlertCircle, Stethoscope } from 'lucide-react'
import PrimaryCareFAQAccordion from './PrimaryCareFAQAccordion'

export const metadata = {
  title: 'Primary Care Clinic in Oklahoma City',
  description:
    'Primary care in Oklahoma City for you and your family. Walk-ins welcome or by appointment. Cash-pay, no insurance required. Book or call (405) 349-8188.',
  alternates: {
    canonical: 'https://www.ebenezerhealthclinic.com/primary-care',
  },
}

// ─── Schema ───────────────────────────────────────────────────────────────────

const primaryCarePageSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  name: 'Primary Care Clinic in Oklahoma City | Ebenezer Health Clinic',
  description:
    'Primary care in Oklahoma City for individuals and families, including routine checkups, preventive care, and support for everyday health concerns. Walk-ins welcome. Cash-pay, no insurance required.',
  url: 'https://www.ebenezerhealthclinic.com/primary-care',
  about: {
    '@type': 'MedicalProcedure',
    name: 'Primary Care',
    procedureType: 'https://schema.org/TherapeuticProcedure',
    description:
      'Routine checkups and wellness visits, preventive care and screenings, evaluation of common health concerns, guidance on healthy living, and referrals when a specialist is the right next step.',
  },
  provider: { '@id': 'https://www.ebenezerhealthclinic.com/#dr-susan-george' },
  areaServed: { '@type': 'City', name: 'Oklahoma City', containedIn: { '@type': 'State', name: 'Oklahoma' } },
  offers: [
    {
      '@type': 'Offer',
      name: 'Primary Care Visit',
      priceCurrency: 'USD',
      description:
        'Walk-in or scheduled primary care visit. Cash-pay pricing, no insurance required. Contact clinic for current pricing.',
    },
  ],
}

const primaryCareFAQSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do you take walk-ins for primary care?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Walk in to our Oklahoma City clinic or book ahead.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need insurance for primary care?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "No. We're a cash-pay clinic. No insurance required.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can I have a telehealth primary care visit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Some primary care needs can be handled by telehealth; others are best in person. We'll guide you.",
      },
    },
    {
      '@type': 'Question',
      name: 'Who will I see for my primary care visit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A credentialed provider: Dr. Susan George, DNP, APRN, or a member of our care team.',
      },
    },
  ],
}

export default function PrimaryCarePage() {
  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(primaryCarePageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(primaryCareFAQSchema) }}
      />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden -mt-[96px] sm:-mt-[112px] lg:-mt-[128px] pt-[96px] sm:pt-[112px] lg:pt-[128px]"
      >
        {/* Background image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/primary-care-hero.webp')",
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
              <span style={{ color: 'var(--primary)' }}>Primary Care</span>
            </nav>

            {/* Label */}
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--primary)' }}
            >
              Primary Care · Oklahoma City
            </span>

            <h1
              className="text-4xl md:text-5xl font-bold mb-5"
              style={{ color: 'var(--navy)' }}
            >
              Primary Care Clinic in Oklahoma City
            </h1>

            {/* Walk-in badge */}
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold mb-8"
              style={{
                backgroundColor: 'rgba(151,206,204,0.40)',
                color: 'var(--navy)',
              }}
            >
              <Stethoscope className="h-4 w-4" aria-hidden="true" />
              Walk-ins welcome · No appointment needed
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto"
              >
                Book Primary Care
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
                Ebenezer Health Clinic provides primary care in Oklahoma City for individuals
                and families, including routine checkups, preventive care, and support for
                everyday health concerns. Walk-ins are welcome or you can book ahead.
                Cash-pay pricing, no insurance required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── BODY PARAGRAPH ───────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        aria-label="Primary care clinic Oklahoma City"
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
                Having a provider who knows you makes health simpler. As a{' '}
                <strong style={{ color: 'var(--primary)' }}>
                  primary care clinic in Oklahoma City
                </strong>
                , we&apos;re here for the everyday things: checkups, preventive care,
                common concerns, and guidance on staying well. Walk in when it&apos;s
                convenient, or schedule a visit that fits your day. You&apos;ll see a
                credentialed provider who takes the time to listen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT PRIMARY CARE INCLUDES ────────────────────────────── */}
      <section className="bg-white" aria-labelledby="what-included-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">

          {/* Section header */}
          <div className="mb-10 md:mb-14">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--primary)' }}
            >
              Services
            </span>
            <h2
              id="what-included-heading"
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ color: 'var(--navy)' }}
            >
              What Primary Care Includes
            </h2>
            <div className="flex items-center gap-2 mb-5" aria-hidden="true">
              <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
              <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
              <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
            </div>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl leading-relaxed">
              Primary care covers the full range of everyday health needs for individuals and families.
              Our credentialed provider takes the time to understand your health and guide you
              toward the right next steps.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start">

            {/* Included services list */}
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
                What&apos;s included in a primary care visit
              </p>
              <ul className="space-y-4">
                {[
                  'Routine checkups and wellness visits',
                  'Preventive care and screenings',
                  'Evaluation of common health concerns',
                  'Guidance on healthy living',
                  'Referrals when a specialist is the right next step',
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
                  Not sure if your concern fits primary care? Call us and we&apos;ll
                  help you figure out the right type of visit.
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
                    Walk-in or by appointment
                  </h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Walk-in primary care in OKC means you can be seen when it fits
                  your schedule. No long waits for an appointment weeks out.
                  Prefer to plan ahead? Book online or by phone and we&apos;ll
                  confirm your slot.
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
                  Simple, transparent pricing with no insurance claims, no hidden
                  fees, and no surprise bills. You know the cost before your visit.
                </p>
                <Link href="/pricing" className="btn-primary text-sm">
                  See Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WALK-IN PRIMARY CARE ──────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        aria-labelledby="walk-in-heading"
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
              Walk-In Primary Care · OKC
            </span>
            <h2
              id="walk-in-heading"
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ color: 'var(--navy)' }}
            >
              Walk-In Primary Care in OKC
            </h2>
            <div className="flex items-center gap-2 mb-6" aria-hidden="true">
              <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
              <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
              <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
            </div>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6">
              No long waits for an appointment weeks out. As a{' '}
              <strong style={{ color: 'var(--navy)' }}>
                walk-in primary care option in Oklahoma City
              </strong>
              , we make it easy to be seen when you need to be.
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

      {/* ── SIMPLE CASH-PAY PRICING ───────────────────────────────── */}
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
              Simple Cash-Pay Pricing
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-xl mx-auto">
              Primary care visits are cash-pay, with no insurance required.{' '}
              <Link
                href="/pricing"
                className="font-semibold underline underline-offset-2"
                style={{ color: 'var(--primary)' }}
              >
                See pricing →
              </Link>
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
                  Primary Care Visit
                </h3>
                <p className="text-sm text-gray-600">
                  Walk-in or scheduled visit with your provider. Includes evaluation,
                  guidance, and referrals when needed. No insurance required.
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  'Credentialed provider: DNP, APRN',
                  'Routine checkups and preventive screenings',
                  'Evaluation of common health concerns',
                  'Referrals when specialist care is needed',
                  'No insurance claims or surprise bills',
                ].map((feature) => (
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
                Book Primary Care
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
                claims, no surprise bills. Pricing is confirmed before your visit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHEN TO SEEK EMERGENCY CARE ──────────────────────────── */}
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
                  When to Seek Emergency Care
                </h2>
              </div>

              {/* Divider */}
              <div
                className="h-px w-16 mx-auto mb-5"
                style={{ backgroundColor: 'rgba(239,68,68,0.25)' }}
                aria-hidden="true"
              />

              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Primary care is not for emergencies. For chest pain, difficulty
                breathing, severe bleeding, or any life-threatening symptoms,{' '}
                <strong className="text-red-600">call 911</strong> or go to your
                nearest emergency room immediately.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/contact"
                className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto"
              >
                Book Primary Care
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
              Primary Care FAQs
            </h2>
          </div>

          <PrimaryCareFAQAccordion />

          {/* CTAs below FAQ */}
          <div className="text-center mt-10">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto"
              >
                Book Primary Care
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
