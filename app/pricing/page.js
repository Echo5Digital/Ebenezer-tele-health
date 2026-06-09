import Link from 'next/link'
import { CheckCircle2, Info } from 'lucide-react'
import PricingFAQAccordion from './PricingFAQAccordion'

export const metadata = {
  title: 'Telehealth Pricing | Ebenezer Telehealth — Oklahoma',
  description:
    "Transparent cash-pay telehealth pricing. Weight loss from $250, women's health from $150, minor illness $50. No insurance required. See full pricing.",
  alternates: {
    canonical: 'https://ebenezertelehealth.com/pricing',
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
        type: 'Initial Consultation',
        price: '$250–$300',
        included:
          'Comprehensive evaluation, personalized weight-loss plan, medication management (including semaglutide/GLP-1 when appropriate), medications shipped to you, lab orders when needed.',
      },
      {
        type: 'Follow-Up Visit',
        price: '$50',
        included:
          'Progress review, dose titration, side-effect monitoring, nutrition guidance, ongoing support.',
      },
    ],
  },
  {
    name: "Women's Health",
    featured: false,
    rows: [
      {
        type: 'Initial Visit',
        price: '$150',
        included:
          'Comprehensive symptom review, lab orders included, lab interpretation, personalized treatment plan.',
      },
      {
        type: 'Follow-Up Visit',
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
        type: 'Visit',
        price: '$50',
        included:
          'Same-day evaluation, treatment recommendations, prescriptions when appropriate.',
      },
    ],
  },
]

const CASH_PAY_BENEFITS = [
  {
    title: 'No Surprise Bills',
    body: 'Your price is confirmed at booking. What you see is exactly what you pay — always.',
  },
  {
    title: 'No Pre-Authorization',
    body: 'Skip the insurance delays. Book today, see a provider today.',
  },
  {
    title: 'No Insurance Denials',
    body: 'Your care is between you and your provider — not an insurance adjuster.',
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
  name: 'Telehealth Pricing — Ebenezer Telehealth',
  url: 'https://ebenezertelehealth.com/pricing',
  mainEntity: {
    '@type': 'ItemList',
    name: 'Ebenezer Telehealth Services and Pricing',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Weight Loss Initial Consultation',
        priceCurrency: 'USD',
        priceSpecification: {
          '@type': 'PriceSpecification',
          minPrice: '250',
          maxPrice: '300',
        },
        description:
          'Comprehensive evaluation, personalized weight-loss plan, medication management (including semaglutide/GLP-1 when appropriate), medications shipped to you, lab orders when needed.',
      },
      {
        '@type': 'Offer',
        name: 'Weight Loss Follow-Up Visit',
        priceCurrency: 'USD',
        price: '50',
        description:
          'Progress review, dose titration, side-effect monitoring, nutrition guidance, ongoing support.',
      },
      {
        '@type': 'Offer',
        name: "Women's Health Initial Visit",
        priceCurrency: 'USD',
        price: '150',
        description:
          'Comprehensive symptom review, lab orders included, lab interpretation, personalized treatment plan.',
      },
      {
        '@type': 'Offer',
        name: "Women's Health Follow-Up Visit",
        priceCurrency: 'USD',
        price: '50',
        description:
          'Ongoing assessment, lab review and monitoring, treatment adjustments, continued support.',
      },
      {
        '@type': 'Offer',
        name: 'Minor Illness Visit',
        priceCurrency: 'USD',
        price: '50',
        description:
          'Same-day evaluation, treatment recommendations, prescriptions when appropriate.',
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
      name: 'Do I need insurance for Ebenezer Telehealth?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. All visits are cash-pay with flat pricing. No insurance is needed.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there any hidden fees?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The prices listed are your total cost for the visit.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does semaglutide cost through Ebenezer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The initial weight loss consultation ($250–$300) includes medication management and medications shipped to you. Follow-up visits for ongoing management are $50.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use an HSA or FSA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In most cases, yes. Telehealth visits typically qualify. Check with your plan administrator.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will Ebenezer Telehealth accept insurance in the future?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We are working toward credentialing with major insurance plans and will announce availability when ready.',
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
          <p className="text-sm text-gray-600 leading-relaxed">{row.included}</p>
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
        className="relative overflow-hidden border-b border-gray-100 -mt-[96px] sm:-mt-[112px] lg:-mt-[128px] pt-[96px] sm:pt-[112px] lg:pt-[128px]"
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
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
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
              Transparent Telehealth Pricing&nbsp;— Know Your Cost Before You
              Book
            </h1>

            {/* Answer-first AEO/GEO paragraph */}
            <p className="text-lg text-gray-600 leading-relaxed hero-answer-line">
              Ebenezer Telehealth offers transparent, flat-fee cash-pay pricing
              for all telehealth visits. Weight loss initial consultations are{' '}
              <strong className="font-semibold text-gray-800">$250–$300</strong>
              , women&apos;s health initial visits are{' '}
              <strong className="font-semibold text-gray-800">$150</strong>, and
              minor illness visits are{' '}
              <strong className="font-semibold text-gray-800">$50</strong>. No
              insurance is required, and there are no surprise bills.
            </p>

            {/* Quick-scan price chips */}
            <div className="flex flex-wrap gap-3 mt-7">
              {[
                { label: 'Weight Loss', price: '$250–$300' },
                { label: "Women's Health", price: '$150' },
                { label: 'Minor Illness', price: '$50' },
                { label: 'Follow-Up (any)', price: '$50' },
              ].map((chip) => (
                <div
                  key={chip.label}
                  className="flex items-center gap-2 rounded-full px-4 py-2"
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
              visit — no hidden fees, no additional charges. Payment is due at
              the time of booking. We accept cash, credit, and debit cards. As telehealth services are provided remotely, payment is currently accepted via credit and debit cards only.
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
                Cash-pay means you know exactly what you&apos;ll pay before your
                visit — no surprise bills, no pre-authorization, no insurance
                denials. For many patients, our flat fees are less than an
                insured urgent care copay, and you skip the billing complexity
                entirely.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We are currently a cash-pay practice. We are in the process of
                becoming credentialed with major insurance plans and will update
                this page when insurance options become available.
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
              aria-label="Call Ebenezer Telehealth at (405) 349-8188"
            >
              Call (405) 349-8188
            </a>
          </div>

          {/* NAP reinforcement — matches FinalCTA */}
          <p className="mt-10 text-sm text-gray-500">
            Ebenezer Telehealth &middot; Oklahoma City, OK &middot; (405)&nbsp;349-8188 &middot; ebenezertelehealth.com
          </p>
        </div>
      </section>
    </>
  )
}
