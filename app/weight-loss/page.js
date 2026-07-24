import Link from 'next/link'
import Image from 'next/image'
import {
  CheckCircle2,
  ArrowRight,
  Info,
  HeartHandshake,
  Thermometer,
  Scale,
  MapPin,
  ShieldCheck,
  Syringe,
} from 'lucide-react'
import WeightLossFAQAccordion from './WeightLossFAQAccordion'

export const metadata = {
  title: 'Weight Loss Clinic in Oklahoma City',
  description:
    'Medical weight loss clinic in Oklahoma City. Semaglutide and GLP-1 plans, in-person or online statewide. Board Certified provider. From $250. Call (405) 349-8188.',
  alternates: {
    canonical: 'https://www.ebenezerhealthclinic.com/weight-loss',
  },
}

const pricingInitialFeatures = [
  'Full health and metabolic evaluation',
  'Personalized weight-loss plan',
  'Lab orders when needed',
]

const pricingFollowUpFeatures = [
  'Progress review',
  'Dose adjustments if you\'re on medication',
  'Ongoing support',
]

const whoForReasons = [
  'Difficulty losing weight despite diet and exercise',
  'Interest in GLP-1 medications like semaglutide',
  'Insulin resistance or metabolic syndrome',
  'Wanting a real provider, not a faceless online pill mill',
]

const steps = [
  {
    number: '01',
    title: 'Book Your Consultation',
    description: 'Schedule online or call (405) 349-8188.',
  },
  {
    number: '02',
    title: 'Complete Your Intake',
    description:
      'Share your health history, goals, and any prior weight-loss experience.',
  },
  {
    number: '03',
    title: 'Meet Dr. George by Video',
    description: 'Secure video visit for a comprehensive metabolic evaluation.',
  },
  {
    number: '04',
    title: 'Receive Your Plan',
    description:
      'Personalized program and follow-up schedule. If medication is prescribed, it is arranged through a licensed pharmacy.',
  },
  {
    number: '05',
    title: 'Follow Up Regularly',
    description:
      '$50/visit for monitoring, dose adjustments, and ongoing support.',
  },
]

const oklahomaCities = [
  { name: 'Oklahoma City', href: '/weight-loss-okc' },
  { name: 'Tulsa', href: '/weight-loss-tulsa' },
  { name: 'Moore', href: '/weight-loss-moore' },
  { name: 'Owasso', href: '/weight-loss-owasso' },
]

// ─── Schema ───────────────────────────────────────────────────────────────────

const weightLossPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  name: 'Weight Loss Clinic in Oklahoma City: Medical Weight Loss',
  description:
    'Medical weight loss clinic in Oklahoma City. Semaglutide and GLP-1 plans when medically appropriate, available in person on Saturdays in OKC or online statewide. Board Certified provider. From $250. Medication billed separately.',
  url: 'https://www.ebenezerhealthclinic.com/weight-loss',
  mainEntityOfPage: 'https://www.ebenezerhealthclinic.com/weight-loss',
  specialty: 'Endocrinology',
  about: {
    '@type': 'MedicalProcedure',
    name: 'Medical Weight Loss Management',
    procedureType: 'https://schema.org/TherapeuticProcedure',
    description:
      'Medically supervised weight loss program including GLP-1/semaglutide evaluation and management when appropriate, personalized plans, and ongoing monitoring. Available in person on Saturdays in Oklahoma City and via telehealth statewide. Led by Dr. Susan George, DNP, APRN, BC-ADM.',
  },
  provider: { '@id': 'https://www.ebenezerhealthclinic.com/#dr-susan-george' },
  areaServed: [
    { '@type': 'City', name: 'Oklahoma City', containedInPlace: { '@type': 'State', name: 'Oklahoma' } },
    { '@type': 'State', name: 'Oklahoma' },
  ],
  offers: [
    {
      '@type': 'Offer',
      name: 'Weight Loss Initial Consultation',
      description:
        'Full health and metabolic evaluation, personalized weight-loss plan, and lab orders when needed. Medication, if prescribed, is billed separately.',
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
        'Progress review, dose adjustments if on medication, and ongoing support. Medication costs are billed separately.',
      priceCurrency: 'USD',
      price: '50',
      availability: 'https://schema.org/InStock',
    },
  ],
}

const weightLossFAQSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do you prescribe semaglutide for weight loss in Oklahoma?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When medically appropriate, yes. Eligibility depends on your health history and a provider evaluation.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does the program cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Initial consultation is $250–$300; follow-ups are $50. Medication, if prescribed, is billed separately.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a weight loss clinic near me in OKC?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. In person on Saturdays in Oklahoma City, and online statewide.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I do medical weight loss entirely online?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, across Oklahoma.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is this a quick fix?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. It\'s a medically supervised program with real follow-up.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if medication isn\'t right for me?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We\'ll tell you honestly and focus on the approach that fits your health.',
      },
    },
  ],
}

export default function WeightLossPage() {
  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(weightLossPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(weightLossFAQSchema) }}
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
        {/* Mobile overlay — flat white for readability */}
        <div
          className="absolute inset-0 lg:hidden"
          style={{ backgroundColor: 'rgba(255,255,255,0.88)' }}
          aria-hidden="true"
        />
        {/* Desktop overlay — teal gradient, content left / image visible right */}
        <div
          className="absolute inset-0 hidden lg:block"
          style={{
            background:
              'linear-gradient(to right, rgba(255,255,255,0.94) 0%, rgba(255,255,255,0.82) 48%, rgba(151,206,204,0.35) 100%)',
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
              <span style={{ color: 'var(--primary)' }}>Weight Loss</span>
            </nav>

            {/* Label */}
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--primary)' }}
            >
              Medical Weight Loss Clinic
            </span>

            <h1
              className="text-4xl md:text-5xl font-bold mb-5"
              style={{ color: 'var(--navy)' }}
            >
              Weight Loss Clinic in Oklahoma City: Medical Weight Loss
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed mb-6 max-w-2xl">
              A medically supervised, evidence-based weight-loss program
              including GLP-1 medication management, delivered by secure video
              from anywhere in Oklahoma. Overseen by Dr. Susan George, DNP,
              APRN, BC-ADM, who is Board Certified in Advanced Diabetes
              Management.
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
              GLP-1 &amp; Semaglutide Available. From $250
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

      {/* ── AEO ANSWER BLOCK ─────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage: "url('/answer_block.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'right center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(151,206,204,0.25) 0%, rgba(255,255,255,0.72) 60%)',
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
              style={{ color: '#1AA6B7' }}
            >
              Ebenezer Telehealth is a weight loss clinic in Oklahoma City
              offering medically supervised weight loss in person and by
              telehealth across Oklahoma. Our GLP-1 weight loss program in
              Oklahoma may include semaglutide when appropriate, led by a Board
              Certified provider. Initial consultations start at $250;
              medication, if prescribed, is billed separately.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHAT IS MEDICAL WEIGHT LOSS ──────────────────────────── */}
      <section className="bg-white" aria-labelledby="what-is-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <span
                className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: 'var(--primary)' }}
              >
                Our Approach
              </span>
              <h2
                id="what-is-heading"
                className="text-3xl md:text-4xl font-bold mb-3"
                style={{ color: 'var(--navy)' }}
              >
                What Is Medical Weight Loss in OKC?
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
                Medical weight loss is a clinically guided approach to losing
                weight under the care of a licensed provider, not a fad diet
                or a one-size-fits-all program. At our Oklahoma City weight loss
                clinic, we look at your full picture: your health history, your
                metabolism, and what&apos;s gotten in the way before. Our
                provider is Board Certified in Advanced Diabetes Management,
                which means real understanding of the metabolic and hormonal
                factors like insulin resistance that make weight loss harder
                than willpower alone.
              </p>
            </div>

            <div
              className="rounded-2xl p-8"
              style={{
                backgroundColor: 'rgba(151,206,204,0.15)',
                border: '1px solid rgba(26,166,183,0.15)',
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl flex-shrink-0"
                  style={{ backgroundColor: 'rgba(26,166,183,0.10)' }}
                  aria-hidden="true"
                >
                  <ShieldCheck
                    className="h-5 w-5"
                    style={{ color: 'var(--primary)' }}
                  />
                </div>
                <h3
                  className="text-xl font-semibold"
                  style={{ color: 'var(--navy)' }}
                >
                  Why BC-ADM Certification Matters
                </h3>
              </div>
              <p className="text-gray-600 mb-5 leading-relaxed text-sm md:text-base">
                The Board Certified in Advanced Diabetes Management (BC-ADM)
                credential represents real expertise in the metabolic science
                behind weight gain: insulin resistance, hormonal factors, and
                medication management. Commercially marketed programs
                don&apos;t account for your individual health history,
                metabolism, or medications. Dr. George does.
              </p>
              <Link href="/contact" className="btn-primary text-sm">
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SEMAGLUTIDE & GLP-1 (NEW) ────────────────────────────── */}
      <section
        className="relative overflow-hidden"
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
          style={{ backgroundColor: 'rgba(232,247,247,0.60)' }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-4xl">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--primary)' }}
            >
              Semaglutide &amp; GLP-1
            </span>
            <h2
              id="semaglutide-heading"
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ color: 'var(--navy)' }}
            >
              Semaglutide and GLP-1{' '}
              <br />
              Weight Loss in Oklahoma
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
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-5">
              Ebenezer Telehealth may prescribe semaglutide and other GLP-1
              medications for weight loss in Oklahoma City and statewide when
              it&apos;s medically appropriate for you. GLP-1 weight loss
              medications work with your body&apos;s natural appetite and
              blood-sugar signals, and they&apos;ve shown meaningful results for
              many people. They aren&apos;t right for everyone, though.
              Whether they&apos;re a fit depends on your health history and a
              provider evaluation.
            </p>
            <p className="text-base text-gray-700 leading-relaxed mb-8">
              If you&apos;ve searched &ldquo;semaglutide near me,&rdquo;
              here&apos;s the honest version: we&apos;ll talk through whether
              GLP-1 therapy makes sense for you rather than handing everyone the
              same prescription. If medication is part of your plan, its cost is
              billed separately from your visit.
            </p>
            <Link href="/contact" className="btn-primary text-base px-7 py-3.5">
              Get Evaluated for GLP-1 Therapy
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED / PRICING ────────────────────────────── */}
      <section
        id="pricing"
        style={{ backgroundColor: 'var(--cream)' }}
        aria-labelledby="whats-included-heading"
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
              id="whats-included-heading"
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: 'var(--navy)' }}
            >
              What&apos;s Included in Your Weight Loss Program
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-xl mx-auto">
              No insurance required. No hidden fees. Every visit includes
              everything listed below at a transparent price.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Initial Consultation Card */}
            <div
              className="rounded-2xl p-7 md:p-8 border flex flex-col"
              style={{
                background:
                  'linear-gradient(135deg, rgba(26,166,183,0.06) 0%, rgba(151,206,204,0.18) 100%)',
                borderColor: 'rgba(26,166,183,0.30)',
              }}
            >
              <h3
                className="text-lg font-semibold mb-1"
                style={{ color: 'var(--navy)' }}
              >
                Initial Consultation
              </h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span
                  className="text-5xl font-bold"
                  style={{ color: 'var(--primary)' }}
                >
                  $250
                </span>
                <span className="text-sm text-gray-500">– $300</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {pricingInitialFeatures.map((feature) => (
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
                className="btn-primary text-base w-full text-center"
              >
                Book Your Consultation
              </Link>
            </div>

            {/* Follow-Up Visits Card */}
            <div
              className="rounded-2xl p-7 md:p-8 border flex flex-col"
              style={{
                backgroundColor: 'rgba(255,255,255,0.85)',
                borderColor: 'rgba(26,166,183,0.20)',
              }}
            >
              <h3
                className="text-lg font-semibold mb-1"
                style={{ color: 'var(--navy)' }}
              >
                Follow-Up Visits
              </h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span
                  className="text-5xl font-bold"
                  style={{ color: 'var(--primary)' }}
                >
                  $50
                </span>
                <span className="text-sm text-gray-500">per visit</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {pricingFollowUpFeatures.map((feature) => (
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
                className="btn-outline text-base w-full text-center"
              >
                Book Your Consultation
              </Link>
            </div>
          </div>

          {/* Medication note */}
          <div className="max-w-3xl mx-auto">
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
                <strong>Medication</strong> is billed separately if prescribed.
                We operate on a <strong>cash-pay basis</strong> with no insurance
                required, no hidden fees.
              </p>
            </div>

            <div className="mt-6 text-center">
              <Link
                href="/pricing"
                className="inline-flex items-center gap-1.5 text-base font-semibold group"
                style={{ color: 'var(--primary)' }}
              >
                See pricing
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── IN PERSON OR ONLINE ──────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        aria-labelledby="in-person-heading"
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
              'linear-gradient(to right, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.75) 45%, rgba(255,255,255,0.20) 100%)',
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--primary)' }}
            >
              In Person or Online
            </span>
            <h2
              id="in-person-heading"
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ color: 'var(--navy)' }}
            >
              A Weight Loss Clinic Near You: In OKC or Online
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
              See us in person on Saturdays in Oklahoma City, or start entirely
              online from anywhere in Oklahoma, including Tulsa, Moore, Owasso,
              Edmond, Norman, and rural communities.
            </p>
            <Link
              href="/weight-loss-okc"
              className="inline-flex items-center gap-1.5 text-base font-semibold group"
              style={{ color: 'var(--primary)' }}
            >
              Weight Loss Clinic in Oklahoma City
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHO IS THIS FOR ──────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        aria-labelledby="who-for-heading"
        style={{
          backgroundImage: "url('/weight_loss_img.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(255,255,255,0.78)' }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            <div>
              <span
                className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: 'var(--primary)' }}
              >
                Who We Serve
              </span>
              <h2
                id="who-for-heading"
                className="text-3xl md:text-4xl font-bold mb-3"
                style={{ color: 'var(--navy)' }}
              >
                Is Medical Weight Loss Right for You?
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
                Our program is designed for adults across Oklahoma who want a
                medically guided approach to weight loss. If you&apos;ve
                struggled with diets, have metabolic health concerns, or want
                clinical support and accountability. Common reasons patients
                come to us include:
              </p>
              <ul className="space-y-4" role="list">
                {whoForReasons.map((reason) => (
                  <li key={reason} className="flex items-start gap-3">
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
                    <span className="text-gray-700 leading-relaxed">
                      {reason}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="rounded-2xl p-8"
              style={{
                backgroundColor: 'rgba(151,206,204,0.10)',
                border: '1px solid rgba(26,166,183,0.12)',
              }}
            >
              <h3
                className="text-xl font-semibold mb-4"
                style={{ color: 'var(--navy)' }}
              >
                When Telehealth Isn&apos;t Enough
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                If your situation requires care beyond telehealth scope, such
                as bariatric surgery evaluation, complex in-person assessment,
                or additional labs, we&apos;ll tell you clearly and help you
                find the right next step. We don&apos;t push patients into
                programs that aren&apos;t right for them.
              </p>
              <div className="mt-6">
                <Link href="/contact" className="btn-primary text-sm">
                  See If You Qualify
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MEET YOUR PROVIDER ───────────────────────────────────── */}
      <section className="bg-white" aria-labelledby="provider-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Text content */}
            <div>
              <span
                className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: 'var(--primary)' }}
              >
                Your Provider
              </span>
              <h2
                id="provider-heading"
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ color: 'var(--navy)' }}
              >
                Dr. Susan George, DNP, APRN, BC-ADM
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

              <p className="text-base text-gray-600 leading-relaxed mb-8">
                Your weight-loss care is led by Dr. Susan George, a Doctor of
                Nursing Practice and Advanced Practice Registered Nurse who is
                Board Certified in Advanced Diabetes Management (BC-ADM). That
                certification means real metabolic expertise: insulin
                resistance, hormonal factors, and medication management. Not
                just writing scripts. She delivers evidence-based, personalized
                care to patients across Oklahoma with integrity and compassion.
              </p>

              {/* Quote */}
              <blockquote
                className="relative rounded-2xl p-6"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(26,166,183,0.06) 0%, rgba(151,206,204,0.15) 100%)',
                  border: '1px solid rgba(26,166,183,0.15)',
                }}
              >
                <span
                  className="absolute top-4 left-5 text-5xl font-serif leading-none select-none"
                  style={{ color: 'rgba(26,166,183,0.20)' }}
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <p
                  className="relative text-base md:text-lg italic leading-relaxed pl-6"
                  style={{ color: 'var(--navy)' }}
                >
                  Weight loss is a medical issue, not a willpower issue. Every
                  patient deserves a plan built around their actual health,
                  not a one-size-fits-all prescription.
                </p>
                <footer className="mt-3 pl-6">
                  <cite
                    className="text-sm font-semibold not-italic"
                    style={{ color: 'var(--primary)' }}
                  >
                    Dr. Susan George, DNP, APRN, BC-ADM
                  </cite>
                </footer>
              </blockquote>
            </div>

            {/* Doctor photo */}
            <div className="flex justify-center lg:justify-end">
              <div
                className="relative w-full max-w-sm lg:max-w-none overflow-hidden rounded-2xl"
                style={{
                  border: '1px solid rgba(26,166,183,0.12)',
                  boxShadow: '0 8px 40px rgba(26,166,183,0.12)',
                }}
              >
                <Image
                  src="/dr-susan-george-oklahoma-telehealth.webp"
                  alt="Dr. Susan George, DNP, APRN — Medical Weight Loss Doctor at Ebenezer Telehealth, Oklahoma"
                  width={520}
                  height={620}
                  className="w-full h-auto object-cover"
                  priority={false}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── HOW TO START ─────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        aria-labelledby="how-to-start-heading"
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

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center mb-12 md:mb-14">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--primary)' }}
            >
              How It Works
            </span>
            <h2
              id="how-to-start-heading"
              className="text-3xl md:text-4xl font-bold mb-5"
              style={{ color: 'var(--navy)' }}
            >
              How to Start Your Weight Loss Program
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Five steps from initial consultation to ongoing support, all via
              secure video from anywhere in Oklahoma.
            </p>
          </div>

          {/* Steps grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-12">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl p-6 flex flex-col gap-4"
                style={{
                  background: 'rgba(255,255,255,0.88)',
                  border: '1px solid rgba(26,166,183,0.12)',
                  boxShadow: '0 2px 12px rgba(26,166,183,0.06)',
                }}
              >
                <div
                  className="inline-flex h-12 w-12 items-center justify-center rounded-xl text-lg font-bold flex-shrink-0"
                  style={{
                    backgroundColor: 'var(--primary)',
                    color: '#ffffff',
                  }}
                >
                  {step.number}
                </div>
                <h3
                  className="text-sm font-semibold leading-snug"
                  style={{ color: 'var(--navy)' }}
                >
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              href="/contact"
              className="btn-primary text-base px-8 py-3.5"
            >
              Book Your Consultation
            </Link>
            <p className="mt-3 text-sm text-gray-600">
              or{' '}
              <a
                href="tel:+14053498188"
                className="font-semibold"
                style={{ color: 'var(--primary)' }}
              >
                call (405) 349-8188
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ── SERVING ALL OF OKLAHOMA ──────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: '#ffffff' }}
        aria-labelledby="serving-heading"
      >
        {/* Background image — pinned to the far right */}
        <div
          className="absolute inset-0 hidden lg:block"
          style={{
            backgroundImage: "url('/weight_loss_bg.webp')",
            backgroundSize: 'auto 100%',
            backgroundPosition: 'right center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.18,
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            <div>
              <span
                className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: 'var(--primary)' }}
              >
                Service Area
              </span>
              <h2
                id="serving-heading"
                className="text-3xl md:text-4xl font-bold mb-3"
                style={{ color: 'var(--navy)' }}
              >
                Weight Loss Telehealth Across Oklahoma
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
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Ebenezer Telehealth serves patients in every part of Oklahoma,
                including Oklahoma City, Tulsa, Moore, Owasso, Edmond, Norman,
                Lawton, Stillwater, Broken Arrow, and rural communities. No
                long drives. No waiting rooms. Real medical weight loss care
                from wherever you are.
              </p>
            </div>

            <div>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: 'var(--primary)' }}
              >
                Weight Loss Clinic Near You
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {oklahomaCities.map((city) => (
                  <Link
                    key={city.name}
                    href={city.href}
                    className="flex items-center gap-3 rounded-xl px-5 py-4 bg-white hover:-translate-y-0.5 transition-all duration-200 group"
                    style={{
                      border: '1px solid rgba(26,166,183,0.12)',
                      boxShadow: '0 2px 8px rgba(26,166,183,0.06)',
                    }}
                  >
                    <MapPin
                      className="h-4 w-4 flex-shrink-0"
                      style={{ color: 'var(--primary)' }}
                      aria-hidden="true"
                    />
                    <span
                      className="text-sm font-semibold flex-1"
                      style={{ color: 'var(--navy)' }}
                    >
                      Weight Loss Clinic in {city.name}
                    </span>
                    <ArrowRight
                      className="h-4 w-4 flex-shrink-0 transition-transform group-hover:translate-x-1"
                      style={{ color: 'var(--primary)' }}
                      aria-hidden="true"
                    />
                  </Link>
                ))}
              </div>
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
              Weight Loss Telehealth FAQs
            </h2>
          </div>

          <WeightLossFAQAccordion />

          {/* CTAs below FAQ */}
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

      {/* ── OTHER SERVICES ───────────────────────────────────────── */}
      <section
        style={{ backgroundColor: 'var(--cream)' }}
        aria-labelledby="wl-other-services-heading"
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
              id="wl-other-services-heading"
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
                  menopause, hormonal health, and more, led by a provider who
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

            {/* Minor Illness card */}
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
                    Minor Illness Treatment
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
                  Feel better without leaving home. Get evaluated and treated
                  online for sinus infections, colds, UTIs, allergies, and
                  other minor illnesses, often same day.
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
        aria-labelledby="wl-final-cta-heading"
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
            id="wl-final-cta-heading"
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: 'var(--primary)' }}
          >
            Ready to Start Your Weight Loss Journey?
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Medically supervised weight loss across Oklahoma. GLP-1
            medications, personalized plans, and real follow-up care. Starting
            at $250.
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
            349-8188 &middot; ebenezerhealthclinic.com
          </p>
        </div>
      </section>
    </>
  )
}
