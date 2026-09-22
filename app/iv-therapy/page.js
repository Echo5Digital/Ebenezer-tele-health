import Link from 'next/link'
import { Info, AlertCircle, Droplets, Video, Sparkles, Syringe } from 'lucide-react'
import IVTherapyFAQAccordion from './IVTherapyFAQAccordion'

export const metadata = {
  title: "IV Therapy & Myers' Cocktail in Oklahoma City",
  description:
    "IV therapy, Myers' Cocktail & IM injections in Oklahoma City at Ebenezer Health Clinic. Free telehealth consultation, walk-ins welcome, cash-pay. Call (405) 349-8188.",
  keywords: [
    'IV therapy Oklahoma City',
    'IV hydration OKC',
    "Myers' cocktail Oklahoma City",
    'vitamin IV therapy OKC',
    'IM injections OKC',
    'IV fluids Oklahoma City',
  ],
  alternates: {
    canonical: 'https://www.ebenezerhealthclinic.com/iv-therapy',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.ebenezerhealthclinic.com/iv-therapy',
    siteName: 'Ebenezer Health Clinic',
    title: "IV Therapy & Myers' Cocktail in Oklahoma City | Ebenezer Health Clinic",
    description:
      "IV therapy, Myers' Cocktail & IM injections in Oklahoma City at Ebenezer Health Clinic. Free telehealth consultation, walk-ins welcome, cash-pay. Call (405) 349-8188.",
    images: ['/iv-therapy-hydration.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "IV Therapy & Myers' Cocktail in Oklahoma City | Ebenezer Health Clinic",
    description:
      "IV therapy, Myers' Cocktail & IM injections in Oklahoma City at Ebenezer Health Clinic. Free telehealth consultation, walk-ins welcome, cash-pay. Call (405) 349-8188.",
    images: ['/iv-therapy-hydration.webp'],
  },
}

// ─── Schema ───────────────────────────────────────────────────────────────────

const ivTherapySchemaGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalWebPage',
      '@id': 'https://www.ebenezerhealthclinic.com/iv-therapy#webpage',
      url: 'https://www.ebenezerhealthclinic.com/iv-therapy',
      name: "IV Therapy & Myers' Cocktail in Oklahoma City | Ebenezer Health Clinic",
      headline: 'IV Therapy & Hydration in Oklahoma City',
      description:
        "IV therapy, Myers' Cocktail and IM injections in Oklahoma City at Ebenezer Health Clinic. Free telehealth consultation, walk-ins welcome, cash-pay. Call (405) 349-8188.",
      about: [
        { '@type': 'MedicalTherapy', name: 'IV Therapy' },
        { '@type': 'MedicalTherapy', name: 'IV Hydration' },
        { '@type': 'MedicalTherapy', name: "Myers' Cocktail" },
        { '@type': 'MedicalTherapy', name: 'IM Nutrient Injections' },
      ],
      mainEntity: { '@id': 'https://www.ebenezerhealthclinic.com/#clinic' },
      isPartOf: {
        '@type': 'WebSite',
        '@id': 'https://www.ebenezerhealthclinic.com/#website',
        url: 'https://www.ebenezerhealthclinic.com',
        name: 'Ebenezer Health Clinic',
      },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: 'https://www.ebenezerhealthclinic.com/iv-therapy-hydration.webp',
      },
      medicalAudience: {
        '@type': 'MedicalAudience',
        audienceType: 'Patients',
      },
      offers: [
        {
          '@type': 'Offer',
          name: "Immune Support IV (Myers' Cocktail) - Full Strength",
          priceCurrency: 'USD',
          price: '250',
          availability: 'https://schema.org/InStock',
          url: 'https://www.ebenezerhealthclinic.com/iv-therapy',
          seller: { '@id': 'https://www.ebenezerhealthclinic.com/#clinic' },
        },
        {
          '@type': 'Offer',
          name: "Immune Support IV (Myers' Cocktail) - Half Strength",
          priceCurrency: 'USD',
          price: '150',
          availability: 'https://schema.org/InStock',
          url: 'https://www.ebenezerhealthclinic.com/iv-therapy',
          seller: { '@id': 'https://www.ebenezerhealthclinic.com/#clinic' },
        },
        {
          '@type': 'Offer',
          name: 'Beauty Blend IV - Full Strength',
          priceCurrency: 'USD',
          price: '250',
          availability: 'https://schema.org/InStock',
          url: 'https://www.ebenezerhealthclinic.com/iv-therapy',
          seller: { '@id': 'https://www.ebenezerhealthclinic.com/#clinic' },
        },
        {
          '@type': 'Offer',
          name: 'Beauty Blend IV - Half Strength',
          priceCurrency: 'USD',
          price: '150',
          availability: 'https://schema.org/InStock',
          url: 'https://www.ebenezerhealthclinic.com/iv-therapy',
          seller: { '@id': 'https://www.ebenezerhealthclinic.com/#clinic' },
        },
        {
          '@type': 'Offer',
          name: 'IM Injection',
          priceCurrency: 'USD',
          price: '50',
          availability: 'https://schema.org/InStock',
          url: 'https://www.ebenezerhealthclinic.com/iv-therapy',
          seller: { '@id': 'https://www.ebenezerhealthclinic.com/#clinic' },
        },
      ],
    },
    {
      '@type': 'MedicalClinic',
      '@id': 'https://www.ebenezerhealthclinic.com/#clinic',
      name: 'Ebenezer Health Clinic',
      url: 'https://www.ebenezerhealthclinic.com',
      telephone: '+1-405-349-8188',
      priceRange: '$$',
      description:
        "Ebenezer Health Clinic provides in-person IV therapy, Myers' Cocktail, IM nutrient injections, women's health, weight loss, and other medical services for patients in the Oklahoma City and Bethany area.",
      address: {
        '@type': 'PostalAddress',
        streetAddress: '7415 NW 23rd St',
        addressLocality: 'Bethany',
        addressRegion: 'OK',
        postalCode: '73008',
        addressCountry: 'US',
      },
      areaServed: [
        { '@type': 'City', name: 'Oklahoma City' },
        { '@type': 'City', name: 'Bethany' },
        { '@type': 'State', name: 'Oklahoma' },
      ],
      medicalSpecialty: ['PrimaryCare', 'WomensHealth', 'Nutrition'],
      makesOffer: [
        { '@type': 'Offer', name: 'IV Therapy' },
        { '@type': 'Offer', name: "Myers' Cocktail" },
        { '@type': 'Offer', name: 'IM Nutrient Injections' },
        { '@type': 'Offer', name: 'Free Telehealth Consultation' },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.ebenezerhealthclinic.com/iv-therapy#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What IV therapy options do you offer in Oklahoma City?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Ebenezer Health Clinic offers an Immune Support IV, also known as Myers' Cocktail, and a Beauty Blend IV, each available in full or half strength, plus IM nutrient injections. Each option is given after a provider evaluation.",
          },
        },
        {
          '@type': 'Question',
          name: 'How much does IV therapy cost?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Immune Support IV and Beauty Blend IV are $250 for full strength or $150 for half strength. IM injections are $50. Services are cash-pay and no insurance is required.',
          },
        },
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
          name: 'Is the telehealth consultation really free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Patients can meet the provider by secure video at no charge to discuss whether IV therapy or a nutrient injection is right for them. Patients only pay if they choose to come in for a session.',
          },
        },
        {
          '@type': 'Question',
          name: 'Where is IV therapy given?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'IV therapy is given in person at Ebenezer Health Clinic in the Oklahoma City-area clinic. IVs and injections are not given by telehealth; only the optional consultation is online.',
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
          name: 'Does IV therapy cure illness or hangovers?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. IV therapy provides hydration and nutrient support after a provider evaluation. It is not a treatment or cure for any condition and does not replace medical care.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is IV therapy safe for everyone?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Not always. That is why every IV and injection is preceded by a provider evaluation to confirm whether it is appropriate.',
          },
        },
      ],
    },
  ],
}

export default function IVTherapyPage() {
  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ivTherapySchemaGraph) }}
      />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden -mt-[112px] sm:-mt-[128px] lg:-mt-[144px] pt-[112px] sm:pt-[128px] lg:pt-[144px]"
      >
        {/* Background image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/iv-therapy-hydration.webp')",
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
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
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
              <span style={{ color: 'var(--primary)' }}>IV Therapy</span>
            </nav>

            {/* Label */}
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--primary)' }}
            >
              IV Therapy &amp; Hydration · Oklahoma City
            </span>

            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 leading-tight"
              style={{ color: 'var(--navy)' }}
            >
              IV Therapy &amp; Hydration in Oklahoma City
            </h1>

            {/* Walk-in badge */}
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold mb-6"
              style={{
                backgroundColor: 'rgba(151,206,204,0.40)',
                color: 'var(--navy)',
              }}
            >
              <Droplets className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
              In-person only · Walk-ins welcome
            </div>

            <p
              className="text-base md:text-lg leading-relaxed mb-8 max-w-xl"
              style={{ color: 'var(--navy)' }}
            >
              Provider-evaluated IV hydration, Myers&apos; Cocktail, and nutrient
              injections at our Oklahoma City-area clinic. Not sure what you
              need? Start with a free telehealth consultation.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
              <Link
                href="/contact"
                className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto text-center"
              >
                Book IV Therapy
              </Link>
              <Link
                href="/contact"
                className="btn-outline text-base px-7 py-3.5 w-full sm:w-auto text-center"
              >
                Free Telehealth Consultation
              </Link>
              <a
                href="tel:+14053498188"
                className="btn-outline text-base px-7 py-3.5 w-full sm:w-auto text-center"
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
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <div className="flex justify-start">
            <div
              className="max-w-xl border-l-4 pl-5 md:pl-6"
              style={{ borderColor: 'var(--primary)' }}
            >
              <p
                className="hero-answer-line text-base md:text-lg leading-relaxed"
                style={{ color: '#1AA6B7' }}
              >
                Ebenezer Health Clinic offers IV therapy, Myers&apos; Cocktail, and
                IM nutrient injections in Oklahoma City. Every IV or injection is
                given in person after a provider evaluation. Options include an
                Immune Support (Myers&apos; Cocktail) IV and a Beauty Blend IV,
                each available in full or half strength, plus IM injections.
                Cash-pay, walk-ins welcome, and a free telehealth consultation is
                available to help you choose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── BODY PARAGRAPH ───────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        aria-label="IV hydration Oklahoma City"
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
                When you&apos;re run down or dehydrated,{' '}
                <strong style={{ color: 'var(--primary)' }}>
                  IV hydration
                </strong>{' '}
                can help you feel more like yourself. At our{' '}
                <strong style={{ color: 'var(--primary)' }}>
                  Oklahoma City-area clinic
                </strong>
                , IV therapy and nutrient injections are given in a comfortable
                setting after a provider evaluation to make sure they&apos;re
                appropriate for you. It&apos;s an in-person visit &mdash; walk
                in or book ahead. And if you&apos;re not sure which option
                fits, you can start with a free telehealth consultation from
                home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FREE TELEHEALTH CONSULTATION ─────────────────────────── */}
      <section className="bg-white" aria-labelledby="telehealth-consult-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div
            className="rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8"
            style={{
              backgroundColor: 'rgba(151,206,204,0.10)',
              border: '1px solid rgba(26,166,183,0.15)',
            }}
          >
            <div
              className="inline-flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl"
              style={{ backgroundColor: 'rgba(26,166,183,0.10)' }}
              aria-hidden="true"
            >
              <Video className="h-7 w-7" style={{ color: 'var(--primary)' }} />
            </div>
            <div className="flex-1">
              <h2
                id="telehealth-consult-heading"
                className="text-2xl md:text-3xl font-bold mb-3"
                style={{ color: 'var(--navy)' }}
              >
                Not Sure Where to Start? Book a Free Telehealth Consultation
              </h2>
              <p className="text-base text-gray-600 leading-relaxed mb-6 max-w-2xl">
                Book a <strong>free telehealth consultation</strong> and meet
                our provider by secure video to talk through your goals and
                whether IV therapy or a nutrient injection is right for you.
                There&apos;s no charge for the consultation &mdash; you only
                pay if you decide to come in for a session. It&apos;s the
                easy, no-pressure way to get started.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6">
                <Link href="/contact" className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto">
                  Book Your Free Consultation
                </Link>
                <Link
                  href="/telehealth"
                  className="text-sm font-semibold transition-colors"
                  style={{ color: 'var(--primary)' }}
                >
                  Learn about our telehealth visits &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── IV & INJECTION MENU ──────────────────────────────────── */}
      <section className="bg-white" aria-labelledby="iv-options-heading">
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
              id="iv-options-heading"
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ color: 'var(--navy)' }}
            >
              Our IV Therapy &amp; Injection Menu
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
              Each IV and injection is given in person after a brief provider
              evaluation to confirm it&apos;s appropriate for you. All services
              are cash-pay &mdash; no insurance required, no surprise bills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Immune Support IV — Myers' Cocktail */}
            <article
              className="rounded-2xl overflow-hidden flex flex-col"
              style={{
                backgroundColor: 'rgba(59,130,246,0.06)',
                border: '1px solid rgba(59,130,246,0.16)',
              }}
            >
              <div className="p-6 md:p-7 flex flex-col flex-1">
                <div className="flex items-start gap-3 mb-4">
                  <div
                    className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: 'rgba(59,130,246,0.15)' }}
                    aria-hidden="true"
                  >
                    <Droplets className="h-5 w-5" style={{ color: '#3B82F6' }} />
                  </div>
                  <h3
                    className="text-lg font-semibold leading-snug pt-1.5"
                    style={{ color: 'var(--navy)' }}
                  >
                    Immune Support IV <br className="hidden md:block" />
                    &mdash; Myers&apos; Cocktail
                  </h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  A classic IV blend of B vitamins, vitamin C, magnesium, and
                  calcium, chosen by people looking to replenish fluids and
                  nutrients as part of a wellness routine.
                </p>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div
                    className="rounded-xl px-4 py-3 text-center bg-white"
                    style={{ border: '1px solid rgba(59,130,246,0.18)' }}
                  >
                    <p className="text-xs text-gray-500 mb-1">Full Strength</p>
                    <p className="text-lg font-bold" style={{ color: '#3B82F6' }}>$250</p>
                  </div>
                  <div
                    className="rounded-xl px-4 py-3 text-center bg-white"
                    style={{ border: '1px solid rgba(59,130,246,0.18)' }}
                  >
                    <p className="text-xs text-gray-500 mb-1">Half Strength</p>
                    <p className="text-lg font-bold" style={{ color: '#3B82F6' }}>$150</p>
                  </div>
                </div>

                <Link
                  href="/iv-therapy/myers-cocktail"
                  className="mt-auto inline-flex items-center gap-1 text-sm font-semibold underline"
                  style={{ color: '#3B82F6' }}
                >
                  Learn more about the Myers&apos; Cocktail IV &rarr;
                </Link>
              </div>
            </article>

            {/* Beauty Blend IV */}
            <article
              className="rounded-2xl overflow-hidden flex flex-col"
              style={{
                backgroundColor: 'rgba(151,206,204,0.10)',
                border: '1px solid rgba(26,166,183,0.18)',
              }}
            >
              <div className="p-6 md:p-7 flex flex-col flex-1">
                <div className="flex items-start gap-3 mb-4">
                  <div
                    className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: 'rgba(26,166,183,0.15)' }}
                    aria-hidden="true"
                  >
                    <Sparkles className="h-5 w-5" style={{ color: 'var(--primary)' }} />
                  </div>
                  <h3
                    className="text-lg font-semibold leading-snug pt-1.5"
                    style={{ color: 'var(--navy)' }}
                  >
                    Beauty Blend IV <br className="hidden md:block" />
                    &mdash; Biotin, B-Complex &amp; Vitamin C
                  </h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  A nutrient IV featuring biotin, B-complex vitamins, and
                  vitamin C, chosen by people looking to support hydration and
                  nutrient intake as part of their routine.
                </p>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div
                    className="rounded-xl px-4 py-3 text-center bg-white"
                    style={{ border: '1px solid rgba(26,166,183,0.20)' }}
                  >
                    <p className="text-xs text-gray-500 mb-1">Full Strength</p>
                    <p className="text-lg font-bold" style={{ color: 'var(--primary)' }}>$250</p>
                  </div>
                  <div
                    className="rounded-xl px-4 py-3 text-center bg-white"
                    style={{ border: '1px solid rgba(26,166,183,0.20)' }}
                  >
                    <p className="text-xs text-gray-500 mb-1">Half Strength</p>
                    <p className="text-lg font-bold" style={{ color: 'var(--primary)' }}>$150</p>
                  </div>
                </div>

                <Link
                  href="/iv-therapy/beauty-blend"
                  className="mt-auto inline-flex items-center gap-1 text-sm font-semibold underline"
                  style={{ color: 'var(--primary)' }}
                >
                  Learn more about the Beauty Blend IV &rarr;
                </Link>
              </div>
            </article>

            {/* IM Injections */}
            <article
              className="rounded-2xl overflow-hidden flex flex-col"
              style={{
                backgroundColor: 'rgba(168,85,247,0.06)',
                border: '1px solid rgba(168,85,247,0.16)',
              }}
            >
              <div className="p-6 md:p-7 flex flex-col flex-1">
                <div className="flex items-start gap-3 mb-4">
                  <div
                    className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: 'rgba(168,85,247,0.15)' }}
                    aria-hidden="true"
                  >
                    <Syringe className="h-5 w-5" style={{ color: '#A855F7' }} />
                  </div>
                  <h3
                    className="text-lg font-semibold leading-snug pt-1.5"
                    style={{ color: 'var(--navy)' }}
                  >
                    IM Injections <br className="hidden md:block" />
                    &mdash; Quick Nutrient Support
                  </h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  Fast intramuscular (IM) injections for nutrient support,
                  given after a brief provider evaluation. In and out &mdash;
                  no IV drip required.
                </p>

                <div className="mt-auto">
                  <div
                    className="rounded-xl px-4 py-3 text-center bg-white"
                    style={{ border: '1px solid rgba(168,85,247,0.20)' }}
                  >
                    <p className="text-xs text-gray-500 mb-1">IM Injection</p>
                    <p className="text-lg font-bold" style={{ color: '#A855F7' }}>$50</p>
                  </div>
                </div>
              </div>
            </article>
          </div>

          <p className="text-sm text-gray-500 leading-relaxed italic text-center mt-6">
            Cash-pay only. Given in person after a provider evaluation.
            Looking for vitamin or B12 shots specifically? See our{' '}
            <Link href="/injections" className="font-semibold not-italic" style={{ color: 'var(--primary)' }}>
              Injections page &rarr;
            </Link>
          </p>

          {/* Info boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
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
                IVs and injections are given in person at our Oklahoma
                City-area clinic. They aren&apos;t available by telehealth
                &mdash; only the optional consultation is online. Walk in
                when it works for you, or book ahead for a confirmed time.
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
                Every IV or injection begins with a provider evaluation to
                make sure it&apos;s the right choice for you. Simple cash-pay
                pricing. No insurance required, no surprise bills.
              </p>
              <Link href="/contact" className="btn-primary text-sm">
                Book IV Therapy
              </Link>
            </div>
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
              What to Expect at Your Visit
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
              A relaxed in-clinic visit: a brief provider evaluation, then your
              IV or injection, monitored by our team. Walk in when it works
              for you, or book ahead for a confirmed time. Cash-pay pricing,
              no insurance required.
            </p>

            <ol className="flex flex-col gap-5 mb-9">
              {[
                {
                  title: 'Start online or walk in',
                  body: 'Book a free telehealth consultation first, or come straight to the clinic.',
                },
                {
                  title: 'Brief provider evaluation',
                  body: 'We confirm the right option for you.',
                },
                {
                  title: 'Your IV or injection',
                  body: 'Given in a comfortable setting, monitored by our team.',
                },
              ].map((step, idx) => (
                <li key={step.title} className="flex items-start gap-4">
                  <span
                    className="flex-shrink-0 inline-flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold"
                    style={{
                      backgroundColor: 'var(--primary)',
                      color: '#ffffff',
                    }}
                    aria-hidden="true"
                  >
                    {idx + 1}
                  </span>
                  <p className="text-base text-gray-700 leading-relaxed pt-0.5">
                    <strong style={{ color: 'var(--navy)' }}>{step.title}</strong>
                    {' — '}
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>

            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
              <Link
                href="/contact"
                className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto text-center"
              >
                Book IV Therapy
              </Link>
              <Link
                href="/contact"
                className="btn-outline text-base px-7 py-3.5 w-full sm:w-auto text-center"
              >
                Walk-Ins Welcome
              </Link>
              <a
                href="tel:+14053498188"
                className="btn-outline text-base px-7 py-3.5 w-full sm:w-auto text-center"
              >
                Call (405) 349-8188
              </a>
            </div>
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
                  Important: Please Read
                </h2>
              </div>

              {/* Divider */}
              <div
                className="h-px w-16 mx-auto mb-5"
                style={{ backgroundColor: 'rgba(239,68,68,0.25)' }}
                aria-hidden="true"
              />

              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                IV therapy and injections at Ebenezer Health Clinic provide
                hydration and nutrient support. They are{' '}
                <strong className="text-red-600">
                  not a treatment or cure for any illness
                </strong>{' '}
                and do not replace medical care. Whether IV therapy or an
                injection is appropriate depends on a provider evaluation.
                These services are{' '}
                <strong className="text-red-600">not for medical emergencies</strong>.{' '}
                If you have severe dehydration, a high fever, difficulty breathing,
                or another urgent concern,{' '}
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
                Book IV Therapy
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

      {/* ── RELATED LINKS ─────────────────────────────────────────── */}
      <section className="bg-white" aria-labelledby="related-links-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-12">
          <h2 id="related-links-heading" className="sr-only">
            Related Pages
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-semibold">
            <Link href="/iv-therapy/myers-cocktail" className="transition-colors" style={{ color: 'var(--primary)' }}>
              Myers&apos; Cocktail IV &rarr;
            </Link>
            <Link href="/iv-therapy/beauty-blend" className="transition-colors" style={{ color: 'var(--primary)' }}>
              Beauty Blend IV &rarr;
            </Link>
            <Link href="/pricing" className="transition-colors" style={{ color: 'var(--primary)' }}>
              See Full Pricing &rarr;
            </Link>
            <Link href="/injections" className="transition-colors" style={{ color: 'var(--primary)' }}>
              Vitamin &amp; B12 Injections &rarr;
            </Link>
            <Link href="/telehealth" className="transition-colors" style={{ color: 'var(--primary)' }}>
              Telehealth Visits &rarr;
            </Link>
            <Link href="/" className="transition-colors" style={{ color: 'var(--primary)' }}>
              All Services &rarr;
            </Link>
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
              IV Therapy FAQs
            </h2>
          </div>

          <IVTherapyFAQAccordion />

          {/* CTAs below FAQ */}
          <div className="text-center mt-10">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto"
              >
                Book IV Therapy
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
