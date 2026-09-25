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
  title: 'Weight Loss Clinic in Moore, OK | Online & Nearby In-Person',
  description:
    'Weight loss clinic for Moore, OK: online visits statewide, plus in-person appointments a short drive away in Oklahoma City. $100/month. Call (405) 349-8188.',
  alternates: {
    canonical: 'https://www.ebenezerhealthclinic.com/weight-loss-moore',
  },
}

const programIncludes = [
  'Full health and metabolic evaluation',
  'Personalized weight-loss plan',
  'Initial labs included',
  'Prescriptions sent to Lilly Direct Pharmacy',
  'Ongoing monitoring and support',
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
    description: 'Secure video evaluation, no commute required.',
  },
  {
    number: '04',
    title: 'Get Your Plan + Meds',
    description:
      'Your personalized plan is ready after your visit. If medication is prescribed, it\'s arranged through a licensed pharmacy.',
  },
]

const faqs = [
  {
    id: 'moore-faq-1',
    question: 'Is there a weight loss clinic near Moore?',
    answer:
      'Online statewide, plus in-person Saturdays a short drive away in Oklahoma City.',
  },
  {
    id: 'moore-faq-2',
    question: 'Can I get semaglutide near Moore?',
    answer:
      'When medically appropriate, after evaluation.',
  },
  {
    id: 'moore-faq-3',
    question: 'What does it cost?',
    answer:
      '$100 per month, which includes initial labs and prescriptions sent to Lilly Direct Pharmacy. The weight loss medication itself is billed separately to the patient.',
  },
]

// ─── Schema ───────────────────────────────────────────────────────────────────

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  name: 'Weight Loss Clinic in Moore, OK | Online & Nearby In-Person',
  description:
    'Weight loss clinic for Moore, OK: online visits statewide anytime, plus in-person Saturday appointments a short drive away in Oklahoma City. Board Certified provider. $100/month, includes initial labs and prescriptions sent to Lilly Direct Pharmacy. Medication billed separately.',
  url: 'https://www.ebenezerhealthclinic.com/weight-loss-moore',
  provider: { '@id': 'https://www.ebenezerhealthclinic.com/#dr-susan-george' },
  about: {
    '@type': 'MedicalProcedure',
    name: 'Medical Weight Loss for Moore, OK Patients',
    procedureType: 'https://schema.org/TherapeuticProcedure',
    description:
      'Medically supervised weight loss led by Dr. Susan George, DNP, APRN, BC-ADM. Moore patients can start online from home or come in person on Saturdays at our nearby Oklahoma City location. GLP-1 options available when medically appropriate after provider evaluation. Medication billed separately.',
  },
  availableService: {
    '@type': 'MedicalTherapy',
    name: 'Medically Supervised Weight Loss near Moore, OK',
    description:
      'Medically supervised weight loss available to Moore, OK patients via telehealth or in-person at our Oklahoma City location, when medically appropriate after provider evaluation. Medication billed separately.',
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Moore',
      containedInPlace: { '@type': 'State', name: 'Oklahoma' },
    },
    {
      '@type': 'City',
      name: 'Oklahoma City',
      containedInPlace: { '@type': 'State', name: 'Oklahoma' },
    },
    {
      '@type': 'State',
      name: 'Oklahoma',
    },
  ],
  offers: [
    {
      '@type': 'Offer',
      name: 'Weight Loss Monthly Program',
      description:
        'Full health and metabolic evaluation, personalized weight-loss plan, initial labs, and prescriptions sent to Lilly Direct Pharmacy, with ongoing monitoring and support. Weight loss medication is billed separately to the patient.',
      priceCurrency: 'USD',
      price: '100',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '100',
        priceCurrency: 'USD',
        unitCode: 'MON',
      },
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

export default function WeightLossMoorePage() {
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
        className="relative overflow-hidden -mt-[112px] sm:-mt-[128px] lg:-mt-[144px] pt-[112px] sm:pt-[128px] lg:pt-[144px]"
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
              <span style={{ color: 'var(--navy)' }}>Moore</span>
            </nav>

            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--primary)' }}
            >
              Weight Loss Clinic · Moore, OK
            </span>

            <h1
              className="text-4xl md:text-5xl font-bold mb-5"
              style={{ color: 'var(--navy)' }}
            >
              Weight Loss Clinic in Moore, OK: Online &amp; Nearby In-Person
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
                Moore patients can access medically supervised weight loss with
                Ebenezer Health Clinic through secure online visits. And because
                we&apos;re just up the road in Oklahoma City, in-person Saturday
                appointments are an easy option too. Our Board Certified provider
                may include semaglutide or GLP-1 medications when appropriate.
                The program is $100 per month, which includes initial labs and
                prescriptions sent to Lilly Direct Pharmacy; the weight loss
                medication itself is billed separately to the patient.
              </p>
            </div>

            <p className="text-base text-gray-600 leading-relaxed mb-6 max-w-2xl">
              Moore is only a short drive from our Oklahoma City location, so
              you get the best of both: start online from home, or come see us
              in person on a Saturday in OKC. Either way, you get a real
              medical weight-loss plan from a Board Certified provider, not a
              cookie-cutter program.
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
              Medically Supervised Weight Loss · $100/month
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
        aria-labelledby="moore-included-heading"
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
              id="moore-included-heading"
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: 'var(--navy)' }}
            >
              What&apos;s Included in Your Moore Weight Loss Program
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-xl mx-auto">
              No insurance required. No hidden fees. Transparent pricing for
              every visit.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            {/* Monthly Program Card */}
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
                Weight Loss Program
              </h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span
                  className="text-5xl font-bold"
                  style={{ color: 'var(--primary)' }}
                >
                  $100
                </span>
                <span className="text-sm text-gray-500">per month</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {programIncludes.map((item) => (
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
                className="btn-primary text-base w-full text-center"
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
                <strong>Weight loss medication</strong> is billed separately
                to the patient. We operate on a <strong>cash-pay basis</strong>{' '}
                with no insurance required, no hidden fees.
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

      {/* ── ONLINE OR SHORT DRIVE AWAY ───────────────────────────── */}
      <section
        className="relative overflow-hidden"
        aria-labelledby="moore-access-heading"
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
              'linear-gradient(to right, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.80) 50%, rgba(232,247,247,0.40) 100%)',
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-2xl">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--primary)' }}
            >
              Online &amp; In-Person
            </span>
            <h2
              id="moore-access-heading"
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ color: 'var(--navy)' }}
            >
              Online or a Short Drive Away
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
              Online visits are available anytime across Oklahoma; in-person
              visits are Saturdays by appointment in nearby Oklahoma City.
            </p>
            <div className="mb-6">
              <Link
                href="/weight-loss"
                className="inline-flex items-center gap-1.5 text-base font-semibold group"
                style={{ color: 'var(--primary)' }}
              >
                See the full program
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4">
              <Link
                href="/contact"
                className="btn-primary text-base px-7 py-3.5"
              >
                Start Your Visit
              </Link>
              <Link
                href="/contact"
                className="text-base font-semibold"
                style={{ color: 'var(--primary)' }}
              >
                Ask About Saturday OKC Appointments
              </Link>
              <a
                href="tel:+14053498188"
                className="text-base font-semibold text-gray-700 hover:text-primary transition-colors"
              >
                Call (405) 349-8188
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: '#1AA6B7' }}
        aria-labelledby="moore-how-heading"
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
              id="moore-how-heading"
              className="text-3xl md:text-4xl font-bold mb-5"
              style={{ color: '#ffffff' }}
            >
              How It Works for Moore Patients
            </h2>
            <p
              className="text-base md:text-lg max-w-2xl mx-auto"
              style={{ color: 'rgba(255,255,255,0.90)' }}
            >
              Four steps from booking to your personalized plan, all via
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
        aria-labelledby="moore-faq-heading"
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
              id="moore-faq-heading"
              className="text-3xl md:text-4xl font-bold"
              style={{ color: 'var(--navy)' }}
            >
              Frequently Asked Questions: Weight Loss in Moore, OK
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
        aria-labelledby="moore-related-heading"
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
              id="moore-related-heading"
              className="text-3xl md:text-4xl font-bold"
              style={{ color: 'var(--navy)' }}
            >
              More From Ebenezer Health Clinic
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                  Learn everything about our medical weight loss program:
                  medically supervised weight loss and what to expect at every
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
                    from $50
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
                    from $50
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
        aria-labelledby="moore-final-cta"
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
            id="moore-final-cta"
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: 'var(--primary)' }}
          >
            Start Your Weight Loss Journey: Moore, OK Online &amp; In-Person
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Online or in-person in Oklahoma City, just up the road from Moore.
            Personalized, medically supervised weight loss with real follow-up.
            $100 per month.
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
            Ebenezerhealth Clinic &middot; Moore, OK &middot; (405) 349-8188
            &middot; ebenezerhealthclinic.com
          </p>
        </div>
      </section>
    </>
  )
}
