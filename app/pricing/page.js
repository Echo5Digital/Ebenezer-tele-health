import Link from 'next/link'
import { CheckCircle2, Info } from 'lucide-react'
import PricingFAQAccordion from './PricingFAQAccordion'

export const metadata = {
  title: {
    absolute: 'Pricing | Cash-Pay Medical Clinic in Oklahoma City | Ebenezer Health Clinic',
  },
  description:
    "Cash-pay pricing at our Oklahoma City clinic — weight loss $100/month, women's health from $50, minor illness from $50, plus primary care, injections & IV therapy. No insurance needed.",
  alternates: {
    canonical: 'https://www.ebenezerhealthclinic.com/pricing',
  },
  robots: { index: true, follow: true },
}

// ─── Pricing data ─────────────────────────────────────────────────────────────

const SERVICES = [
  {
    name: 'Weight Loss Management',
    featured: true,
    rows: [
      {
        type: 'Monthly Program',
        price: '$100/month',
        included:
          'Includes initial labs and prescriptions sent to Lilly Direct Pharmacy.',
        includedNote: 'Weight loss medication is billed separately to the patient.',
      },
    ],
  },
  {
    name: "Women's Health",
    featured: false,
    rows: [
      {
        type: 'Televisit',
        price: '$50',
        included:
          'Secure video visit, symptom review, prescriptions sent to your preferred pharmacy when appropriate.',
      },
      {
        type: 'In-Person Initial Visit',
        price: '$75',
        included:
          'Comprehensive symptom review, lab orders included, lab interpretation, personalized treatment plan.',
      },
      {
        type: 'In-Person Follow-Up',
        price: '$50',
        included:
          'Ongoing assessment, lab review and monitoring, treatment adjustments, continued support.',
      },
    ],
  },
  {
    name: 'Minor Illness Treatment',
    featured: false,
    rows: [
      {
        type: 'Televisit',
        price: '$50',
        included:
          'Same-day video evaluation, treatment recommendations, prescriptions when appropriate.',
      },
      {
        type: 'In-Person (Without Testing)',
        price: '$50',
        included:
          'Same-day in-clinic evaluation, treatment recommendations, prescriptions when appropriate.',
      },
      {
        type: 'In-Person (With Testing)',
        price: '$80 – $100',
        included:
          'In-clinic evaluation plus testing (e.g. rapid strep, flu, UTI), treatment recommendations, prescriptions when appropriate.',
      },
    ],
  },
]

const CASH_PAY_BENEFITS = [
  {
    title: 'No Surprise Bills',
    body: 'Your price is confirmed at booking. What you see is exactly what you pay. Always.',
  },
  {
    title: 'No Pre-Authorization',
    body: 'Skip the insurance delays. Book today, see a provider today.',
  },
  {
    title: 'No Insurance Denials',
    body: 'Your care is between you and your provider, not an insurance adjuster.',
  },
  {
    title: 'HSA / FSA Accepted',
    body: 'In most cases, telehealth visits qualify. Check with your plan administrator.',
  },
]

// ─── Schema ───────────────────────────────────────────────────────────────────

const pricingPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Pricing | Cash-Pay Medical Clinic in Oklahoma City | Ebenezer Health Clinic',
  url: 'https://www.ebenezerhealthclinic.com/pricing',
  mainEntity: {
    '@type': 'ItemList',
    name: 'Ebenezer Health Clinic Services and Pricing',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Weight Loss Monthly Program',
        priceCurrency: 'USD',
        price: '100',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '100',
          priceCurrency: 'USD',
          unitCode: 'MON',
        },
        description:
          'Includes initial labs and prescriptions sent to Lilly Direct Pharmacy. Weight loss medication is billed separately to the patient.',
      },
      {
        '@type': 'Offer',
        name: "Women's Health Televisit",
        priceCurrency: 'USD',
        price: '50',
        description:
          'Secure video visit, symptom review, prescriptions sent to your preferred pharmacy when appropriate.',
      },
      {
        '@type': 'Offer',
        name: "Women's Health In-Person Initial Visit",
        priceCurrency: 'USD',
        price: '75',
        description:
          'Comprehensive symptom review, lab orders included, lab interpretation, personalized treatment plan.',
      },
      {
        '@type': 'Offer',
        name: "Women's Health In-Person Follow-Up",
        priceCurrency: 'USD',
        price: '50',
        description:
          'Ongoing assessment, lab review and monitoring, treatment adjustments, continued support.',
      },
      {
        '@type': 'Offer',
        name: 'Minor Illness Televisit',
        priceCurrency: 'USD',
        price: '50',
        description:
          'Same-day video evaluation, treatment recommendations, prescriptions when appropriate.',
      },
      {
        '@type': 'Offer',
        name: 'Minor Illness In-Person (Without Testing)',
        priceCurrency: 'USD',
        price: '50',
        description:
          'Same-day in-clinic evaluation, treatment recommendations, prescriptions when appropriate.',
      },
      {
        '@type': 'Offer',
        name: 'Minor Illness In-Person (With Testing)',
        priceCurrency: 'USD',
        priceSpecification: {
          '@type': 'PriceSpecification',
          minPrice: '80',
          maxPrice: '100',
          priceCurrency: 'USD',
        },
        description:
          'In-clinic evaluation plus testing (e.g. rapid strep, flu, UTI), treatment recommendations, prescriptions when appropriate.',
      },
    ],
  },
}

const pricingFAQSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does telehealth cost without insurance in Oklahoma?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Women's health televisits are $50, weight loss is $100/month, and minor illness televisits are $50. No insurance required.",
      },
    },
    {
      '@type': 'Question',
      name: 'How much does semaglutide cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The $100/month program fee covers initial labs and prescriptions sent to Lilly Direct Pharmacy. The weight loss medication itself is billed separately to the patient and depends on the option chosen after evaluation. We'll be upfront about cost before prescribing.",
      },
    },
    {
      '@type': 'Question',
      name: 'Are there hidden fees?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The listed visit prices are your total visit cost.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use an HSA/FSA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Often yes. Check with your plan administrator.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is in-person the same price as online?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "For most visits, yes. Minor illness and women's health televisits and standard in-person visits are both $50. In-person minor illness visits that require testing range from $80 to $100.",
      },
    },
  ],
}

// ─── Pricing row sub-component ────────────────────────────────────────────────

function PricingRow({ row, isLast }) {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-[1.5fr_0.75fr_2.25fr] gap-3 sm:gap-0 px-6 py-5 bg-white${
        !isLast ? ' border-b border-gray-50' : ''
      }`}
    >
      {/* Visit Type */}
      <div className="sm:flex sm:items-start sm:pr-5 sm:pt-0.5">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 sm:hidden mb-1">
            Visit Type
          </p>
          <p className="text-sm font-semibold text-gray-800">{row.type}</p>
        </div>
      </div>

      {/* Price */}
      <div className="sm:flex sm:items-start sm:pr-5 sm:pt-0.5">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 sm:hidden mb-1">
            Price
          </p>
          <p
            className="text-2xl font-bold leading-none"
            style={{ color: 'var(--primary)' }}
          >
            {row.price}
          </p>
        </div>
      </div>

      {/* What's Included */}
      <div className="sm:flex sm:items-start sm:pt-0.5">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 sm:hidden mb-1">
            What&apos;s Included
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            {row.included}
            {row.includedNote && (
              <span
                className="ml-1 text-xs font-semibold"
                style={{ color: 'var(--primary)' }}
              >
                ({row.includedNote})
              </span>
            )}
          </p>
        </div>
      </div>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PricingPage() {
  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingFAQSchema) }}
      />

      {/* ════════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden border-b border-gray-100 -mt-[112px] sm:-mt-[128px] lg:-mt-[144px] pt-[112px] sm:pt-[128px] lg:pt-[144px]"
        style={{
          backgroundImage: "url('/pricing_banner.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Teal-tinted overlay — keeps image visible, matches brand color */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(151,206,204,0.20) 0%, rgba(255,255,255,0.75) 65%)',
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <div className="max-w-3xl">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--primary)' }}
            >
              Pricing
            </span>
            <h1
              className="text-4xl md:text-5xl font-bold mb-5 leading-tight"
              style={{ color: 'var(--navy)' }}
            >
              Transparent Pricing: Oklahoma City Clinic &amp; Telehealth
            </h1>

            {/* Quick-scan price chips */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3 mt-7">
              {[
                { label: 'Weight Loss', price: '$100/month' },
                { label: "Women's Health", price: 'From $50' },
                { label: 'Minor Illness', price: 'From $50' },
              ].map((chip) => (
                <div
                  key={chip.label}
                  className="flex items-center justify-between sm:justify-start gap-2 rounded-full px-4 py-2"
                  style={{
                    backgroundColor: 'rgba(151,206,204,0.18)',
                    border: '1px solid rgba(26,166,183,0.18)',
                  }}
                >
                  <span className="text-xs font-medium text-gray-600">
                    {chip.label}
                  </span>
                  <span
                    className="text-sm font-bold"
                    style={{ color: 'var(--primary)' }}
                  >
                    {chip.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          ANSWER BLOCK
      ════════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        aria-label="Telehealth cost without insurance in Oklahoma"
        style={{
          backgroundImage: 'url(/block_bg.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(255,255,255,0.38)' }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-12">
          <div
            className="max-w-3xl border-l-4 pl-5 md:pl-6"
            style={{ borderColor: 'var(--primary)' }}
          >
            <p
              className="hero-answer-line text-base md:text-lg leading-relaxed"
              style={{ color: '#1AA6B7' }}
            >
              Ebenezer Health Clinic is a cash-pay medical clinic in Oklahoma
              City with transparent pricing and no insurance required.{' '}
              <strong style={{ color: 'var(--primary)' }}>
                Women&apos;s health from $50
              </strong>
              ,{' '}
              <strong style={{ color: 'var(--primary)' }}>
                weight loss $100/month
              </strong>
              ,{' '}
              <strong style={{ color: 'var(--primary)' }}>
                minor illness from $50
              </strong>
              . Primary care, injections, and IV therapy pricing below.
              The weight loss program fee includes initial labs and
              prescriptions sent to Lilly Direct Pharmacy; the weight-loss
              medication itself is billed separately to the patient. See our{' '}
              <Link href="/iv-therapy" className="font-semibold" style={{ color: 'var(--primary)' }}>
                IV Therapy &amp; Myers&apos; Cocktail menu &rarr;
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          BODY PARAGRAPH
      ════════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        aria-label="About telehealth cost without insurance in Oklahoma"
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
                Wondering what telehealth costs without insurance in Oklahoma?
                We keep it simple. As a cash-pay clinic serving OKC and the
                whole state, we show you the price before you book. No
                surprise bills, no billing runaround, just{' '}
                <strong style={{ color: 'var(--primary)' }}>
                  affordable medical care in Oklahoma City
                </strong>{' '}
                and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          OUR PRICING
      ════════════════════════════════════════════════════════ */}
      <section
        className="bg-gray-50"
        aria-labelledby="pricing-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">

          {/* Section heading */}
          <div className="mb-10">
            <h2
              id="pricing-heading"
              className="text-3xl md:text-4xl font-bold mb-2"
              style={{ color: 'var(--navy)' }}
            >
              Our Pricing
            </h2>
            <p className="text-gray-600">
              Flat-fee per visit. No hidden costs. No insurance required.
            </p>
          </div>

          {/* Service tables */}
          <div className="flex flex-col gap-8">
            {SERVICES.map((service) => (
              <article
                key={service.name}
                className="rounded-2xl overflow-hidden shadow-sm"
                aria-label={`${service.name} pricing`}
                style={{
                  border: service.featured
                    ? '1.5px solid rgba(26,166,183,0.35)'
                    : '1px solid rgba(26,166,183,0.12)',
                }}
              >
                {/* Service header bar */}
                <div
                  className="px-6 py-4 flex items-center justify-between gap-4 flex-wrap"
                  style={{
                    background: service.featured
                      ? 'linear-gradient(135deg, #1AA6B7 0%, #1AA6B7 100%)'
                      : 'linear-gradient(135deg, rgba(26,166,183,0.88) 0%, rgba(26,166,183,0.94) 100%)',
                  }}
                >
                  <h3 className="text-lg md:text-xl font-bold text-white">
                    {service.name}
                  </h3>
                  {service.featured && (
                    <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold text-white bg-white/20 border border-white/30 whitespace-nowrap">
                      Most Popular
                    </span>
                  )}
                </div>

                {/* Column headers — visible on sm+ only */}
                <div
                  className="hidden sm:grid sm:grid-cols-[1.5fr_0.75fr_2.25fr] px-6 py-3 border-b border-gray-100"
                  style={{ backgroundColor: 'rgba(26,166,183,0.04)' }}
                >
                  {['Visit Type', 'Price', "What's Included"].map((col) => (
                    <p
                      key={col}
                      className="text-[11px] font-bold uppercase tracking-widest"
                      style={{ color: 'rgba(26,166,183,0.55)' }}
                    >
                      {col}
                    </p>
                  ))}
                </div>

                {/* Rows */}
                {service.rows.map((row, idx) => (
                  <PricingRow
                    key={row.type}
                    row={row}
                    isLast={idx === service.rows.length - 1}
                  />
                ))}
              </article>
            ))}
          </div>

          {/* Totals note */}
          <div
            className="mt-8 rounded-xl p-5 flex items-start gap-3"
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
            <p className="text-sm text-gray-700 leading-relaxed">
              Prices listed are your <strong>total cost</strong> for each
              visit. No hidden fees, no additional charges. Payment is due at
              the time of booking. We accept cash, credit, and debit cards. As telehealth services are provided remotely, payment is currently accepted via credit and debit cards only.
            </p>
          </div>

          {/* Pharmacy note */}
          <div
            className="mt-4 rounded-xl p-5 flex items-start gap-3"
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
            <p className="text-sm text-gray-700 leading-relaxed">
              For televisit patients, prescriptions can be sent to 24-hour
              pharmacies, primarily Walgreens and CVS.
            </p>
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          SEMAGLUTIDE COST
      ════════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden border-t border-gray-100"
        aria-labelledby="semaglutide-heading"
        style={{
          backgroundImage: "url('/semaglitude.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(255,255,255,0.55)' }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <div className="max-w-3xl">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--primary)' }}
            >
              Weight Loss Medication
            </span>
            <h2
              id="semaglutide-heading"
              className="text-3xl md:text-4xl font-bold mb-5"
              style={{ color: 'var(--navy)' }}
            >
              Semaglutide Cost in Oklahoma
            </h2>
            <p className="text-gray-800 leading-relaxed">
              If GLP-1 or semaglutide medication is part of your plan, it is
              billed separately from your visit fee. Semaglutide cost in
              Oklahoma depends on your evaluation and the option you and your
              provider choose together. We&apos;ll be transparent about costs
              before anything is prescribed.
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          WHY CASH-PAY?
      ════════════════════════════════════════════════════════ */}
      <section
        className="bg-white"
        aria-labelledby="cash-pay-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left: copy */}
            <div>
              <span
                className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: 'var(--primary)' }}
              >
                No Insurance Needed
              </span>
              <h2
                id="cash-pay-heading"
                className="text-3xl md:text-4xl font-bold mb-5"
                style={{ color: 'var(--navy)' }}
              >
                Why Cash-Pay?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                For many patients, our flat fees cost less than an insured
                urgent care copay, and you skip the billing complexity
                entirely.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We&apos;re working toward accepting insurance as the practice
                grows and will update this page when that&apos;s available.
              </p>
            </div>

            {/* Right: benefit cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CASH_PAY_BENEFITS.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl p-5 flex flex-col gap-3"
                  style={{
                    backgroundColor: 'rgba(151,206,204,0.12)',
                    border: '1px solid rgba(26,166,183,0.10)',
                  }}
                >
                  <CheckCircle2
                    className="h-5 w-5 flex-shrink-0"
                    style={{ color: 'var(--primary)' }}
                    aria-hidden="true"
                  />
                  <div>
                    <p
                      className="text-sm font-semibold mb-1"
                      style={{ color: 'var(--navy)' }}
                    >
                      {item.title}
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          PRICING FAQs
      ════════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        aria-labelledby="pricing-faq-heading"
        style={{
          backgroundImage: "url('/body_bg2.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Cream overlay — keeps content legible, matches home page FAQ */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(232,247,247,0.52)' }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">

          <div className="mb-10">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--primary)' }}
            >
              FAQ
            </span>
            <h2
              id="pricing-faq-heading"
              className="text-3xl md:text-4xl font-bold"
              style={{ color: 'var(--navy)' }}
            >
              Frequently Asked Questions About Pricing
            </h2>
          </div>

          <PricingFAQAccordion />

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          CTA — matches home page FinalCTA style
      ════════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: '#ffffff' }}
        aria-labelledby="pricing-cta-heading"
      >
        {/* Decorative circles — identical to FinalCTA component */}
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
            id="pricing-cta-heading"
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: 'var(--primary)' }}
          >
            Ready to Book Your Visit?
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Flat-fee pricing. No insurance needed. Secure video visits for
            patients across all of Oklahoma.
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
              aria-label="Call Ebenezer Health Clinic at (405) 349-8188"
            >
              Call (405) 349-8188
            </a>
          </div>

          {/* NAP reinforcement — matches FinalCTA */}
          <p className="mt-10 text-sm text-gray-500">
            Ebenezer Health Clinic &middot; Oklahoma City, OK &middot; (405)&nbsp;349-8188 &middot; ebenezerhealthclinic.com
          </p>
        </div>
      </section>
    </>
  )
}
