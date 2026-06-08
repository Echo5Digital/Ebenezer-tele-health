import Link from 'next/link'
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
  title: 'Medical Weight Loss Clinic in Oklahoma | Ebenezer Telehealth',
  description:
    'Medically supervised weight loss in Oklahoma — semaglutide, GLP-1 medications & personalized plans. Led by a Board Certified provider. From $250. Book online.',
  alternates: {
    canonical: 'https://ebenezertelehealth.com/weight-loss',
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

const whoForReasons = [
  'Difficulty losing weight despite diet and exercise',
  'Interest in GLP-1 medications like semaglutide',
  'Insulin resistance or metabolic syndrome',
  'Wanting a real provider — not a faceless online pill mill',
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
      'Personalized program, medication shipped directly to you, and follow-up schedule.',
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
  name: 'Medical Weight Loss Clinic in Oklahoma',
  description:
    'Medically supervised weight loss in Oklahoma — semaglutide, GLP-1 medications & personalized plans. Led by a Board Certified provider. From $250.',
  url: 'https://ebenezertelehealth.com/weight-loss',
  mainEntityOfPage: 'https://ebenezertelehealth.com/weight-loss',
  specialty: 'Endocrinology',
  about: {
    '@type': 'MedicalProcedure',
    name: 'Medical Weight Loss Management',
    procedureType: 'https://schema.org/TherapeuticProcedure',
    description:
      'Medically supervised weight loss program including GLP-1/semaglutide medication management, personalized plans, and ongoing monitoring led by Dr. Susan George, DNP, APRN, BC-ADM.',
  },
  provider: { '@id': 'https://ebenezertelehealth.com/#dr-susan-george' },
  areaServed: { '@type': 'State', name: 'Oklahoma' },
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

const weightLossFAQSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do you prescribe semaglutide for weight loss in Oklahoma?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Ebenezer Telehealth evaluates for semaglutide and other GLP-1 receptor agonist medications when clinically appropriate. Medications are shipped directly to you.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does the weight loss program cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Initial consultation is $250–$300 and includes evaluation, personalized weight-loss plan, medication management, and medications shipped to you. Follow-up visits are $50.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need insurance for weight loss treatment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Ebenezer Telehealth is cash-pay with transparent pricing. You will know the full cost before you book.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where in Oklahoma can I access the weight loss program?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Anywhere in Oklahoma — including OKC, Tulsa, Moore, Owasso, Edmond, Norman, Lawton, and rural communities — as long as you are in Oklahoma at the time of your visit.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is Ebenezer Telehealth different from a med spa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dr. George is a Board Certified Doctor of Nursing Practice with metabolic expertise — not an aesthetics provider. Your care is medically supervised with real follow-up, dose titration, and ongoing monitoring.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if weight loss medication is not right for me?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We will tell you. Not every patient is a candidate for GLP-1 therapy. We evaluate honestly and recommend the best path for your health.',
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
        className="relative bg-white -mt-[96px] sm:-mt-[112px] lg:-mt-[128px] pt-[96px] sm:pt-[112px] lg:pt-[128px]"
        style={{
          background:
            'linear-gradient(135deg, rgba(153,217,217,0.12) 0%, #ffffff 60%)',
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
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
              Medical Weight Loss Clinic — Online Care Across Oklahoma
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed mb-6 max-w-2xl">
              A medically supervised, evidence-based weight-loss program —
              including GLP-1 medication management — delivered by secure video
              from anywhere in Oklahoma. Overseen by Dr. Susan George, DNP,
              APRN, BC-ADM, who is Board Certified in Advanced Diabetes
              Management.
            </p>

            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold mb-8"
              style={{
                backgroundColor: 'rgba(153,217,217,0.40)',
                color: 'var(--primary-dark)',
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
              'linear-gradient(135deg, rgba(153,217,217,0.25) 0%, rgba(255,255,255,0.72) 60%)',
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
              Ebenezer Telehealth is a medical weight loss clinic serving
              patients across Oklahoma through secure telehealth visits. We
              offer medically supervised weight-loss programs — including
              semaglutide and other GLP-1 medications — with personalized care
              plans, responsible medication management, and ongoing support, led
              by Dr. Susan George, DNP, APRN, BC-ADM. Initial consultations
              start at $250.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHAT IS MEDICAL WEIGHT LOSS ──────────────────────────── */}
      <section className="bg-white" aria-labelledby="what-is-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">

          <div className="mb-10 md:mb-14">
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
              What Is Medical Weight Loss at Ebenezer Telehealth?
            </h2>
            <div className="flex items-center gap-2 mb-5" aria-hidden="true">
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
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6">
                Medical weight loss is a clinically guided approach to losing
                weight under the supervision of a licensed healthcare provider —
                not a quick fix, a fad diet, or a med-spa gimmick. At Ebenezer
                Telehealth, Dr. George evaluates your metabolic health, medical
                history, and goals, then builds a personalized plan that may
                include GLP-1 medications (such as semaglutide), lifestyle
                guidance, and ongoing monitoring.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                Because Dr. George is Board Certified in Advanced Diabetes
                Management, you get genuine metabolic expertise — the clinical
                knowledge to manage insulin resistance, metabolic syndrome, and
                the hormonal factors that make weight loss harder than willpower
                alone.
              </p>
            </div>

            <div
              className="rounded-2xl p-8"
              style={{
                backgroundColor: 'rgba(153,217,217,0.15)',
                border: '1px solid rgba(3,93,87,0.15)',
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl flex-shrink-0"
                  style={{ backgroundColor: 'rgba(3,93,87,0.10)' }}
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
                behind weight gain — insulin resistance, hormonal factors, and
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Initial Consultation Card */}
            <div
              className="rounded-2xl p-8 border flex flex-col"
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
                  Initial Consultation
                </h3>
                <p className="text-sm text-gray-600">
                  Your first visit — comprehensive evaluation and program setup.
                </p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span
                    className="text-5xl font-bold"
                    style={{ color: 'var(--primary)' }}
                  >
                    $250
                  </span>
                  <span className="text-sm text-gray-500">– $300</span>
                </div>
                <p className="mt-1 text-sm text-gray-400">per visit</p>
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

            {/* Follow-Up Visits Card */}
            <div
              className="rounded-2xl p-8 border flex flex-col"
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
                  Follow-Up Visits
                </h3>
                <p className="text-sm text-gray-600">
                  Ongoing monitoring, dose adjustments, and support.
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
                  Regular follow-ups recommended
                </p>
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
          <div className="max-w-4xl mx-auto">
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
                All visits are by <strong>secure video</strong> from anywhere
                in Oklahoma. Prescriptions and medications are sent directly to
                you. We operate on a <strong>cash-pay basis</strong> — no
                insurance required, no hidden fees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SEMAGLUTIDE & GLP-1 ──────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        aria-labelledby="glp1-heading"
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            <div>
              <span
                className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: 'var(--primary)' }}
              >
                GLP-1 Medications
              </span>
              <h2
                id="glp1-heading"
                className="text-3xl md:text-4xl font-bold mb-3"
                style={{ color: 'var(--navy)' }}
              >
                Semaglutide and GLP-1 Weight Loss Medications in Oklahoma
              </h2>
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

              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-5 font-medium">
                Yes — Ebenezer Telehealth prescribes semaglutide and other
                GLP-1 receptor agonist medications for weight loss when
                medically appropriate, delivered to patients across Oklahoma.
              </p>
              <p className="text-base text-gray-600 leading-relaxed mb-5">
                GLP-1 medications work by mimicking a natural hormone that
                regulates appetite and blood sugar. They&apos;ve shown
                significant results in clinical trials, but they&apos;re not
                for everyone — and they&apos;re most effective when combined
                with a supervised clinical plan, not prescribed in isolation.
                Dr. George evaluates whether GLP-1 therapy is right for you
                based on your health profile, not a one-size-fits-all
                questionnaire.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                We use pharmaceutical-grade semaglutide, with medications
                shipped directly to you. Your dosing is managed and titrated by
                Dr. George through regular follow-up visits.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <div
                className="rounded-2xl p-6"
                style={{
                  backgroundColor: 'rgba(153,217,217,0.15)',
                  border: '1px solid rgba(3,93,87,0.15)',
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Syringe
                    className="h-5 w-5 flex-shrink-0"
                    style={{ color: 'var(--primary)' }}
                    aria-hidden="true"
                  />
                  <h3
                    className="text-base font-semibold"
                    style={{ color: 'var(--navy)' }}
                  >
                    How GLP-1 Medications Work
                  </h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  GLP-1 receptor agonists mimic a gut hormone that signals
                  satiety to the brain, slows gastric emptying, and helps
                  regulate blood sugar — making it easier to eat less and lose
                  weight with real metabolic support behind you.
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
                  Not a One-Size-Fits-All Prescription
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">
                  Not every patient is a candidate for GLP-1 therapy. Dr.
                  George evaluates your full health profile — medical history,
                  current medications, labs, and goals — before recommending
                  any medication. If semaglutide isn&apos;t right for you,
                  she&apos;ll tell you and recommend the best path forward.
                </p>
                <Link href="/contact" className="btn-primary text-sm">
                  Get Evaluated for GLP-1 Therapy
                </Link>
              </div>
            </div>
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
                  style={{ backgroundColor: 'rgba(3,93,87,0.25)' }}
                />
                <div
                  className="h-[3px] w-2 rounded-full"
                  style={{ backgroundColor: 'rgba(3,93,87,0.12)' }}
                />
              </div>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
                Our program is designed for adults across Oklahoma who want a
                medically guided approach to weight loss — whether you&apos;ve
                struggled with diets, have metabolic health concerns, or want
                clinical support and accountability. Common reasons patients
                come to us include:
              </p>
              <ul className="space-y-4" role="list">
                {whoForReasons.map((reason) => (
                  <li key={reason} className="flex items-start gap-3">
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
                backgroundColor: 'rgba(153,217,217,0.10)',
                border: '1px solid rgba(3,93,87,0.12)',
              }}
            >
              <h3
                className="text-xl font-semibold mb-4"
                style={{ color: 'var(--navy)' }}
              >
                When Telehealth Isn&apos;t Enough
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                If your situation requires care beyond telehealth scope — such
                as bariatric surgery evaluation, complex in-person assessment,
                or additional labs — we&apos;ll tell you clearly and help you
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
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: '#035D57' }}
        aria-labelledby="provider-heading"
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(3,93,87,0.40)' }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: '#99D9D9' }}
            >
              Your Provider
            </span>
            <h2
              id="provider-heading"
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ color: '#ffffff' }}
            >
              Led by a Board Certified Provider
            </h2>
            <p
              className="text-base md:text-lg leading-relaxed mb-8"
              style={{ color: 'rgba(255,255,255,0.90)' }}
            >
              Your weight-loss care is led by{' '}
              <strong style={{ color: '#ffffff' }}>
                Dr. Susan George, DNP, APRN, BC-ADM
              </strong>{' '}
              — a Doctor of Nursing Practice who is Board Certified in Advanced
              Diabetes Management. That certification means real expertise in
              the metabolic science behind weight gain and weight loss — insulin
              resistance, hormonal factors, and medication management — not just
              writing scripts.
            </p>

            {/* Quote */}
            <blockquote
              className="rounded-2xl p-8 text-left"
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.12)',
              }}
            >
              <p
                className="text-lg md:text-xl italic leading-relaxed mb-4"
                style={{ color: 'rgba(255,255,255,0.95)' }}
              >
                &ldquo;Weight loss is a medical issue, not a willpower issue.
                Every patient deserves a plan built around their actual health
                — not a one-size-fits-all prescription.&rdquo;
              </p>
              <footer
                className="text-sm font-semibold"
                style={{ color: '#99D9D9' }}
              >
                — Dr. Susan George, DNP, APRN, BC-ADM
              </footer>
            </blockquote>
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
              Five steps from initial consultation to ongoing support — all via
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
                  border: '1px solid rgba(3,93,87,0.12)',
                  boxShadow: '0 2px 12px rgba(3,93,87,0.06)',
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
        style={{ backgroundColor: 'var(--cream)' }}
        aria-labelledby="serving-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
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
                  style={{ backgroundColor: 'rgba(3,93,87,0.25)' }}
                />
                <div
                  className="h-[3px] w-2 rounded-full"
                  style={{ backgroundColor: 'rgba(3,93,87,0.12)' }}
                />
              </div>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Ebenezer Telehealth serves patients in every part of Oklahoma —
                including Oklahoma City, Tulsa, Moore, Owasso, Edmond, Norman,
                Lawton, Stillwater, Broken Arrow, and rural communities. No
                long drives. No waiting rooms. Just real medical weight loss
                care from wherever you are.
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
                      border: '1px solid rgba(3,93,87,0.12)',
                      boxShadow: '0 2px 8px rgba(3,93,87,0.06)',
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
              Weight Loss Telehealth — FAQs
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
                border: '1px solid rgba(3,93,87,0.12)',
                boxShadow: '0 2px 16px rgba(3,93,87,0.07)',
              }}
            >
              <div
                className="inline-flex h-12 w-12 items-center justify-center rounded-xl"
                style={{ backgroundColor: 'rgba(3,93,87,0.08)' }}
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
                      backgroundColor: 'rgba(153,217,217,0.30)',
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
            Medically supervised weight loss across Oklahoma — GLP-1
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
            349-8188 &middot; ebenezertelehealth.com
          </p>
        </div>
      </section>
    </>
  )
}
