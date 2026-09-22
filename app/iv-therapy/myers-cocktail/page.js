import Link from 'next/link'
import { Droplets, Leaf, HeartPulse, Users, Info, AlertCircle, CalendarCheck, UserCheck, MonitorSmartphone } from 'lucide-react'
import MyersCocktailFAQAccordion from './MyersCocktailFAQAccordion'

export const metadata = {
  title: "Myers' Cocktail IV in Oklahoma City",
  description:
    "Myers' Cocktail IV in Oklahoma City at Ebenezer Health Clinic — B vitamins, vitamin C, magnesium & calcium. Full $250 / half $150. Free telehealth consult. (405) 349-8188.",
  alternates: {
    canonical: 'https://www.ebenezerhealthclinic.com/iv-therapy/myers-cocktail',
  },
}

// ─── Schema ───────────────────────────────────────────────────────────────────
// One @graph, cross-linked by @id, so this page's entities connect into the
// same knowledge graph as the rest of the site (see components/SchemaMarkup.jsx
// for the shared #organization / #dr-susan-george / #website nodes).

const SITE = 'https://www.ebenezerhealthclinic.com'
const PAGE_URL = `${SITE}/iv-therapy/myers-cocktail`

const myersCocktailSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalWebPage',
      '@id': `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Myers' Cocktail IV in Oklahoma City | Ebenezer Health Clinic",
      headline: "Myers' Cocktail IV in Oklahoma City",
      description:
        "Myers' Cocktail IV in Oklahoma City at Ebenezer Health Clinic — B vitamins, vitamin C, magnesium and calcium. Full strength $250, half strength $150. Free telehealth consultation available.",
      isPartOf: { '@id': `${SITE}/iv-therapy#webpage` },
      about: { '@id': `${PAGE_URL}#procedure` },
      mainEntity: { '@id': `${PAGE_URL}#procedure` },
      provider: { '@id': `${SITE}/#organization` },
      areaServed: [
        { '@type': 'City', name: 'Oklahoma City' },
        { '@type': 'City', name: 'Bethany' },
        { '@type': 'State', name: 'Oklahoma' },
      ],
      medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patients' },
    },
    {
      '@type': 'MedicalProcedure',
      '@id': `${PAGE_URL}#procedure`,
      name: "Myers' Cocktail IV Therapy",
      procedureType: 'TherapeuticProcedure',
      description:
        "The Myers' Cocktail IV at Ebenezer Health Clinic is a vitamin-and-mineral IV blend with B vitamins, vitamin C, magnesium, and calcium. It provides hydration and nutrient support after a provider evaluation. It is not a treatment or cure for any illness and does not replace medical care.",
      bodyLocation: 'Intravenous',
      provider: { '@id': `${SITE}/#organization` },
      areaServed: { '@type': 'City', name: 'Oklahoma City' },
      offers: [
        {
          '@type': 'Offer',
          name: "Myers' Cocktail IV - Full Strength",
          price: '250',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          url: PAGE_URL,
          seller: { '@id': `${SITE}/#organization` },
        },
        {
          '@type': 'Offer',
          name: "Myers' Cocktail IV - Half Strength",
          price: '150',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          url: PAGE_URL,
          seller: { '@id': `${SITE}/#organization` },
        },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${PAGE_URL}#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: "What is a Myers' Cocktail?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "A Myers' Cocktail is a well-known IV blend of B vitamins, vitamin C, magnesium, and calcium, used to replenish fluids and nutrients as part of a wellness routine.",
          },
        },
        {
          '@type': 'Question',
          name: "How much does a Myers' Cocktail cost in Oklahoma City?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Full strength is $250 and half strength is $150. Services are cash-pay and no insurance is required.',
          },
        },
        {
          '@type': 'Question',
          name: 'Where is it given?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "The Myers' Cocktail IV is given in person at Ebenezer Health Clinic's Oklahoma City-area clinic. The IV is not given by telehealth; only the optional consultation is online.",
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need an appointment?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Patients may walk in or book ahead for a confirmed time.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is the telehealth consultation free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Patients can book a free telehealth consultation to talk with the provider by secure video. Patients only pay if they choose to come in for a session.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does it cure illness or hangovers?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "No. The Myers' Cocktail IV provides hydration and nutrient support after a provider evaluation. It is not a treatment or cure for any condition and does not replace medical care.",
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: 'IV Therapy', item: `${SITE}/iv-therapy` },
        { '@type': 'ListItem', position: 3, name: "Myers' Cocktail IV", item: PAGE_URL },
      ],
    },
  ],
}

export default function MyersCocktailPage() {
  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(myersCocktailSchema) }}
      />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden -mt-[112px] sm:-mt-[128px] lg:-mt-[144px] pt-[112px] sm:pt-[128px] lg:pt-[144px]"
      >
        {/* Background image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/MyersCocktailIVinOklahomaCity.png')",
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
              'linear-gradient(105deg, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0.58) 40%, rgba(255,255,255,0.35) 65%, rgba(255,255,255,0.05) 100%)',
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
              <Link href="/iv-therapy" className="hover:text-primary transition-colors">
                IV Therapy
              </Link>
              <span aria-hidden="true">/</span>
              <span style={{ color: 'var(--primary)' }}>Myers&apos; Cocktail</span>
            </nav>

            {/* Label */}
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--primary)' }}
            >
              IV Therapy · Myers&apos; Cocktail · Oklahoma City
            </span>

            <h1
              className="text-4xl md:text-5xl font-bold mb-5"
              style={{ color: 'var(--navy)' }}
            >
              Myers&apos; Cocktail IV in Oklahoma City
            </h1>

            {/* Walk-in badge */}
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold mb-6"
              style={{
                backgroundColor: 'rgba(151,206,204,0.40)',
                color: 'var(--navy)',
              }}
            >
              <Droplets className="h-4 w-4" aria-hidden="true" />
              In-person only · Walk-ins welcome
            </div>

            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8 max-w-xl">
              A classic vitamin-and-mineral IV blend, given after a provider evaluation at our
              Oklahoma City-area clinic. Not sure if it&apos;s right for you? Start with a free
              telehealth consultation.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto"
              >
                Book Myers&apos; Cocktail
              </Link>
              <Link
                href="/telehealth"
                className="btn-outline text-base px-7 py-3.5 w-full sm:w-auto"
              >
                Free Telehealth Consultation
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
          backgroundImage: "url('/answer_block.webp')",
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
                Ebenezer Health Clinic offers the Myers&apos; Cocktail IV in Oklahoma City — a
                well-known blend of B vitamins, vitamin C, magnesium, and calcium given in person
                after a provider evaluation. It&apos;s available in full strength ($250) or half
                strength ($150), cash-pay, with walk-ins welcome and a free telehealth
                consultation to help you decide. Serving Oklahoma City and the Bethany area.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTRO ─────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        aria-label="Myers Cocktail IV Oklahoma City"
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
                The{' '}
                <strong style={{ color: 'var(--primary)' }}>Myers&apos; Cocktail</strong>{' '}
                is one of the best-known IV formulations, named after the physician who developed
                it. At our{' '}
                <strong style={{ color: 'var(--primary)' }}>Oklahoma City-area clinic</strong>,
                it&apos;s given in a comfortable setting after a brief provider evaluation to
                make sure it&apos;s appropriate for you. Walk in or book ahead — and if
                you&apos;d like to talk it through first, book a free telehealth consultation
                from home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT'S IN IT / NUTSHELL HIGHLIGHTS ───────────────────────── */}
      <section className="bg-white" aria-labelledby="whats-in-it-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="mb-10 md:mb-14">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--primary)' }}
            >
              What We Offer
            </span>
            <h2
              id="whats-in-it-heading"
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ color: 'var(--navy)' }}
            >
              What&apos;s in a Myers&apos; Cocktail?
            </h2>
            <div className="flex items-center gap-2 mb-5" aria-hidden="true">
              <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
              <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
              <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
            </div>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl leading-relaxed">
              A blend of B vitamins (including B-complex), vitamin C, magnesium, and calcium,
              delivered as an IV to replenish fluids and nutrients as part of a wellness routine.
              Many people choose it simply to rehydrate and top up nutrient intake.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: Leaf, title: 'B Vitamins, Vitamin C, Magnesium & Calcium' },
              { icon: HeartPulse, title: 'Provider-Evaluated for Your Safety' },
              { icon: Users, title: 'Walk-Ins Welcome or Book Ahead' },
            ].map(({ icon: Icon, title }) => (
              <div
                key={title}
                className="rounded-2xl p-6 flex items-start gap-4"
                style={{
                  backgroundColor: 'rgba(151,206,204,0.08)',
                  border: '1px solid rgba(26,166,183,0.12)',
                }}
              >
                <div
                  className="flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(26,166,183,0.12)' }}
                  aria-hidden="true"
                >
                  <Icon className="h-5 w-5" style={{ color: 'var(--primary)' }} />
                </div>
                <p className="text-sm font-semibold leading-snug" style={{ color: 'var(--navy)' }}>
                  {title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ───────────────────────────────────────────────── */}
      <section
        aria-labelledby="pricing-heading"
        style={{ backgroundColor: 'rgba(151,206,204,0.08)' }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--primary)' }}
            >
              Pricing
            </span>
            <h2
              id="pricing-heading"
              className="text-3xl md:text-4xl font-bold"
              style={{ color: 'var(--navy)' }}
            >
              Myers&apos; Cocktail Pricing in OKC
            </h2>
          </div>

          <div
            className="max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-sm"
            style={{ backgroundColor: '#ffffff', border: '1px solid rgba(26,166,183,0.15)' }}
          >
            <table className="w-full text-left">
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(26,166,183,0.15)' }}>
                  <th className="px-6 py-4 text-sm font-semibold" style={{ color: 'var(--navy)' }}>
                    Option
                  </th>
                  <th className="px-6 py-4 text-sm font-semibold" style={{ color: 'var(--navy)' }}>
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid rgba(26,166,183,0.10)' }}>
                  <td className="px-6 py-4 text-gray-700">Full strength</td>
                  <td className="px-6 py-4 font-bold" style={{ color: 'var(--primary)' }}>$250</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-700">Half strength</td>
                  <td className="px-6 py-4 font-bold" style={{ color: 'var(--primary)' }}>$150</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="max-w-2xl mx-auto mt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <p className="text-sm italic text-gray-500">
              Cash-pay only. No insurance required. Given in person after a provider evaluation.
            </p>
            <Link
              href="/pricing"
              className="text-sm font-semibold underline whitespace-nowrap"
              style={{ color: 'var(--primary)' }}
            >
              See all pricing →
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHAT TO EXPECT ────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        aria-labelledby="what-to-expect-heading"
        style={{
          backgroundImage: "url('/in-person-online.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(255,255,255,0.93) 0%, rgba(232,247,247,0.82) 100%)',
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
              <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
              <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
              <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
            </div>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-10">
              A relaxed in-clinic visit: a brief provider evaluation, then your IV, monitored by
              our team. Walk in when it works for you, or book ahead for a confirmed time.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              {[
                { icon: CalendarCheck, step: '1', title: 'Start online or walk in', desc: 'Book a free telehealth consultation first, or come straight to the clinic.' },
                { icon: UserCheck, step: '2', title: 'Brief provider evaluation', desc: 'We confirm the right option for you.' },
                { icon: Droplets, step: '3', title: 'Your IV, monitored by our team', desc: 'Given in a comfortable setting at our Oklahoma City clinic.' },
              ].map(({ icon: Icon, step, title, desc }) => (
                <div
                  key={step}
                  className="rounded-2xl p-6"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.75)',
                    border: '1px solid rgba(26,166,183,0.15)',
                  }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center text-sm font-bold text-white"
                      style={{ backgroundColor: 'var(--primary)' }}
                      aria-hidden="true"
                    >
                      {step}
                    </div>
                    <Icon className="h-5 w-5" style={{ color: 'var(--primary)' }} aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-semibold mb-1.5" style={{ color: 'var(--navy)' }}>
                    {title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto"
              >
                Book Myers&apos; Cocktail
              </Link>
              <Link
                href="/contact"
                className="btn-outline text-base px-7 py-3.5 w-full sm:w-auto"
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

      {/* ── FREE TELEHEALTH CONSULTATION ─────────────────────────── */}
      <section aria-labelledby="telehealth-heading" style={{ backgroundColor: 'rgba(151,206,204,0.10)' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-16">
          <div
            className="rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10"
            style={{ backgroundColor: '#ffffff', border: '1px solid rgba(26,166,183,0.18)' }}
          >
            <div
              className="flex-shrink-0 h-14 w-14 rounded-full flex items-center justify-center"
              style={{ backgroundColor: 'rgba(26,166,183,0.10)' }}
              aria-hidden="true"
            >
              <MonitorSmartphone className="h-7 w-7" style={{ color: 'var(--primary)' }} />
            </div>
            <div className="flex-1">
              <h2
                id="telehealth-heading"
                className="text-2xl md:text-3xl font-bold mb-2"
                style={{ color: 'var(--navy)' }}
              >
                Prefer to Talk First? Free Telehealth Consultation
              </h2>
              <p className="text-base text-gray-600 leading-relaxed mb-1">
                Not sure whether the Myers&apos; Cocktail is right for you? Book a{' '}
                <strong style={{ color: 'var(--navy)' }}>free telehealth consultation</strong>{' '}
                and meet our provider by secure video — no charge, no pressure. You only pay if
                you come in for a session.
              </p>
              <Link
                href="/telehealth"
                className="text-sm font-semibold underline"
                style={{ color: 'var(--primary)' }}
              >
                Learn about telehealth →
              </Link>
            </div>
            <Link
              href="/telehealth"
              className="btn-primary text-base px-7 py-3.5 w-full md:w-auto flex-shrink-0"
            >
              Free Telehealth Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* ── IMPORTANT: PLEASE READ ────────────────────────────────── */}
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
                  Important — Please Read
                </h2>
              </div>

              {/* Divider */}
              <div
                className="h-px w-16 mx-auto mb-5"
                style={{ backgroundColor: 'rgba(239,68,68,0.25)' }}
                aria-hidden="true"
              />

              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                The Myers&apos; Cocktail IV at Ebenezer Health Clinic provides hydration and
                nutrient support. It is{' '}
                <strong className="text-red-600">not a treatment or cure for any illness</strong>{' '}
                and does not replace medical care. Whether it&apos;s appropriate depends on a
                provider evaluation. It is{' '}
                <strong className="text-red-600">not for medical emergencies</strong> — for
                severe dehydration, a high fever, difficulty breathing, or another urgent concern,{' '}
                <strong className="text-red-600">
                  seek in-person medical or emergency care right away.
                </strong>
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/contact"
                className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto"
              >
                Book Myers&apos; Cocktail
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
              Frequently Asked Questions
            </h2>
          </div>

          <MyersCocktailFAQAccordion />

          {/* CTAs below FAQ */}
          <div className="text-center mt-10">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto"
              >
                Book Myers&apos; Cocktail
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

      {/* ── RELATED / INTERNAL LINKS ──────────────────────────────── */}
      <section className="bg-white" aria-labelledby="related-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-16">
          <div
            className="rounded-2xl p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-5 md:gap-8"
            style={{
              backgroundColor: 'rgba(151,206,204,0.08)',
              border: '1px solid rgba(26,166,183,0.12)',
            }}
          >
            <div className="flex items-center gap-3 flex-shrink-0">
              <div
                className="h-10 w-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: 'rgba(26,166,183,0.12)' }}
                aria-hidden="true"
              >
                <Info className="h-5 w-5" style={{ color: 'var(--primary)' }} />
              </div>
              <h2 id="related-heading" className="text-base font-semibold" style={{ color: 'var(--navy)' }}>
                Related IV Therapy Services
              </h2>
            </div>
            <nav
              className="flex flex-wrap items-center gap-x-2 gap-y-2 text-sm font-semibold"
              aria-label="Related IV therapy links"
              style={{ color: 'var(--primary)' }}
            >
              <Link href="/iv-therapy" className="hover:opacity-80">IV Therapy</Link>
              <span aria-hidden="true" className="text-gray-300">|</span>
              <Link href="/iv-therapy/beauty-blend" className="hover:opacity-80">Beauty Blend IV</Link>
              <span aria-hidden="true" className="text-gray-300">|</span>
              <Link href="/injections" className="hover:opacity-80">Injections</Link>
              <span aria-hidden="true" className="text-gray-300">|</span>
              <Link href="/pricing" className="hover:opacity-80">Pricing</Link>
              <span aria-hidden="true" className="text-gray-300">|</span>
              <Link href="/telehealth" className="hover:opacity-80">Telehealth</Link>
              <span aria-hidden="true" className="text-gray-300">|</span>
              <Link href="/contact" className="hover:opacity-80">Book / Contact</Link>
            </nav>
          </div>
        </div>
      </section>

    </>
  )
}
