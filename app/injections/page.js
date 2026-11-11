import Link from 'next/link'
import {
  Activity,
  AlertCircle,
  BadgeDollarSign,
  Building2,
  CalendarCheck,
  ClipboardCheck,
  Droplets,
  FlaskConical,
  Flame,
  Footprints,
  MessageCircle,
  Stethoscope,
  Sun,
  Syringe,
  UserCheck,
  Zap,
} from 'lucide-react'
import InjectionsFAQAccordion from './InjectionsFAQAccordion'
import { injectionsFaqs, faqAnswerText } from './injectionsFaqs'

export const metadata = {
  title: 'Vitamin & B12 Injections in Oklahoma City',
  description:
    'Vitamin, B12 & wellness injections in Oklahoma City at Ebenezer Health Clinic. $50 per injection, provider-evaluated, walk-ins welcome. Cash-pay. Book or call (405) 349-8188.',
  alternates: {
    canonical: 'https://www.ebenezerhealthclinic.com/injections',
  },
}

// ─── Schema ───────────────────────────────────────────────────────────────────

const injectionsPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  '@id': 'https://www.ebenezerhealthclinic.com/injections#webpage',
  name: 'Vitamin & B12 Injections in Oklahoma City | Ebenezer Health Clinic',
  description:
    'Vitamin and B12 injections in Oklahoma City at Ebenezer Health Clinic. Given after a brief provider evaluation. Walk-ins welcome. Cash-pay, no insurance required.',
  url: 'https://www.ebenezerhealthclinic.com/injections',
  about: {
    '@type': 'MedicalProcedure',
    name: 'Vitamin Injection Therapy',
    procedureType: 'https://schema.org/TherapeuticProcedure',
    description:
      'In-person vitamin and B12 injections given after a brief provider evaluation at our Oklahoma City clinic. Supportive wellness injections, not a treatment or cure for any medical condition.',
  },
  provider: { '@id': 'https://www.ebenezerhealthclinic.com/#dr-susan-george' },
  areaServed: {
    '@type': 'City',
    name: 'Oklahoma City',
    containedIn: { '@type': 'State', name: 'Oklahoma' },
  },
  offers: [
    {
      '@type': 'Offer',
      name: 'IM Injection',
      priceCurrency: 'USD',
      price: '50',
      description:
        'In-person injection visit including brief provider evaluation. Cash-pay, no insurance required.',
    },
  ],
}

const injectionsFAQSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: injectionsFaqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faqAnswerText(faq),
    },
  })),
}

// ─── Page content ─────────────────────────────────────────────────────────────

const heroBadges = [
  { icon: Building2, label: 'In-Person Services' },
  { icon: Footprints, label: 'Walk-Ins Welcome' },
  { icon: ClipboardCheck, label: 'Provider Evaluation Required' },
]

const injections = [
  {
    icon: Zap,
    title: 'Vitamin B12 Shot',
    paragraphs: [
      'Vitamin B12 is an essential nutrient that helps maintain healthy nerve function, supports red blood cell production, and contributes to normal energy metabolism.',
      'Vitamin B12 injections are used to treat B12 deficiency and may help improve symptoms such as fatigue when those symptoms are caused by low B12 levels.',
      'At Ebenezer Health Clinic in Oklahoma City, our provider evaluates your health history and individual needs to determine whether a Vitamin B12 injection is appropriate.',
    ],
  },
  {
    icon: Activity,
    title: 'B-Complex Injection',
    paragraphs: [
      'B vitamins play important roles in normal cellular function, energy metabolism, and nervous system health. A B-Complex injection provides supplemental B vitamins that contribute to these essential processes.',
      'B-Complex injections may be considered when supplementation is clinically appropriate. Additional B vitamins do not necessarily improve energy or wellness in individuals who already have adequate vitamin levels.',
      'Our provider will review your health needs before recommending treatment.',
    ],
  },
  {
    icon: Flame,
    title: 'Lipotropic (MIC) Injection',
    paragraphs: [
      'Lipotropic (MIC) injections contain compounds associated with normal fat metabolism. These formulations commonly include methionine, inositol, and choline, although the specific ingredients should be confirmed with the clinic.',
      'These nutrients participate in metabolic processes, but there is limited clinical evidence that MIC injections independently produce meaningful weight loss or improve body composition.',
      'At Ebenezer Health Clinic, Lipotropic injections are offered following a provider evaluation and should not be considered a replacement for balanced nutrition, physical activity, or evidence-based weight management.',
    ],
  },
  {
    icon: Sun,
    title: 'Vitamin D Injection',
    paragraphs: [
      'Vitamin D supports calcium absorption, bone health, muscle function, and normal immune system activity.',
      'Vitamin D supplementation may be recommended for patients with an identified deficiency or specific clinical needs. Whether an injection is appropriate depends on individual health factors, including existing vitamin D levels and medical history.',
      'At Ebenezer Health Clinic in Oklahoma City, our provider assesses your needs before administering Vitamin D injections.',
    ],
  },
]

const onRequestTreatments = [
  {
    icon: Droplets,
    title: 'Glutathione Injection',
    paragraphs: [
      "Glutathione is a naturally occurring antioxidant found in the body. It plays an important role in protecting cells against oxidative damage and supporting the body's natural antioxidant defense system.",
      'Although glutathione contributes to normal cellular protection, clinical evidence supporting glutathione injections for improved energy, skin appearance, or general wellness remains limited.',
      'At Ebenezer Health Clinic in Oklahoma City, Glutathione injections may be available on request following a medical evaluation. Our provider will discuss whether this treatment is appropriate for your individual needs.',
    ],
    details: [
      { label: 'Availability', value: 'On Request' },
      { label: 'Pricing', value: 'Contact the Clinic' },
    ],
  },
  {
    icon: FlaskConical,
    title: 'Alpha-Lipoic Acid (ALA)',
    paragraphs: [
      'Alpha-Lipoic Acid (ALA) is a naturally occurring compound involved in cellular energy production and antioxidant activity. It participates in normal metabolic processes and helps protect cells from oxidative stress.',
      'ALA has been studied for its potential role in managing diabetic nerve discomfort, although research findings have been mixed. Its benefits for general wellness have not been established.',
      'At Ebenezer Health Clinic, Alpha-Lipoic Acid treatment may be available on request, subject to provider evaluation. Our healthcare provider will assess your medical history and determine whether this option is appropriate.',
    ],
    details: [
      { label: 'Availability', value: 'On Request' },
      { label: 'Administration Method and Pricing', value: 'Confirm During Consultation' },
    ],
  },
]

const whyChoose = [
  {
    icon: Stethoscope,
    title: 'Provider-Guided Care',
    text: 'Every injection visit includes a medical assessment to determine whether the requested treatment is appropriate for your health needs.',
  },
  {
    icon: Building2,
    title: 'Convenient In-Person Visits',
    text: 'Our vitamin and wellness injections are provided in person at our Oklahoma City clinic. Walk-ins are welcome, and patients may also schedule an appointment in advance.',
  },
  {
    icon: BadgeDollarSign,
    title: 'Transparent Cash-Pay Pricing',
    text: 'Our regularly offered vitamin injections cost $50 each. No insurance is required. Pricing for additional on-request treatments is confirmed before administration.',
  },
  {
    icon: UserCheck,
    title: 'Individualized Treatment Recommendations',
    text: 'Not every vitamin or wellness injection is appropriate for every patient. We consider your medical history, existing health concerns, and clinical needs before recommending treatment.',
  },
]

const visitSteps = [
  {
    icon: Building2,
    title: 'Step 1: Visit Our Clinic',
    text: 'Walk into our Oklahoma City clinic or schedule an injection appointment in advance. All injections are administered in person.',
  },
  {
    icon: ClipboardCheck,
    title: 'Step 2: Complete a Medical Assessment',
    text: 'Our healthcare provider reviews your health history, current medications, relevant medical concerns, and treatment needs. Additional evaluation or testing may be recommended when clinically appropriate.',
  },
  {
    icon: MessageCircle,
    title: 'Step 3: Discuss Your Treatment Options',
    text: 'Based on your assessment, our provider explains which injections may be appropriate, including their intended purpose, potential risks, and limitations.',
  },
  {
    icon: Syringe,
    title: 'Step 4: Receive Your Injection',
    text: 'If treatment is appropriate, the injection is administered by a qualified healthcare professional using appropriate clinical procedures.',
  },
  {
    icon: CalendarCheck,
    title: 'Step 5: Receive Follow-Up Guidance',
    text: 'Our team provides relevant aftercare instructions and explains whether further evaluation or follow-up may be needed.',
  },
]

const importantParagraphs = [
  'All injection treatments at Ebenezer Health Clinic require a medical assessment to determine whether they are appropriate for your individual health needs.',
  'Vitamins, minerals, and antioxidants play important roles in normal body functions. However, these physiological roles do not guarantee additional health benefits from injections when nutrient levels are already adequate.',
  'Vitamin B12 injections may be medically indicated to treat B12 deficiency. However, evidence supporting many other wellness injections for improving energy, skin appearance, immunity, or overall wellness remains limited.',
  'Injection treatments are not substitutes for routine medical care, balanced nutrition, or evidence-based treatment of underlying medical conditions.',
  'Our healthcare provider will review potential benefits, risks, and treatment considerations before recommending any injection.',
]

// ─── Small presentational helpers ─────────────────────────────────────────────

function AccentBars({ center = false }) {
  return (
    <div
      className={`flex items-center gap-2 mb-5 ${center ? 'justify-center' : ''}`}
      aria-hidden="true"
    >
      <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
      <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
      <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
    </div>
  )
}

function IconBadge({ icon: Icon, size = 'md' }) {
  const box = size === 'lg' ? 'h-14 w-14' : 'h-12 w-12'
  return (
    <div
      className={`inline-flex ${box} flex-shrink-0 items-center justify-center rounded-xl`}
      style={{ backgroundColor: 'rgba(26,166,183,0.12)' }}
      aria-hidden="true"
    >
      <Icon className="h-6 w-6" style={{ color: 'var(--primary)' }} />
    </div>
  )
}

function CardTopAccent() {
  return (
    <div
      className="absolute inset-x-0 top-0 h-1"
      style={{ background: 'linear-gradient(90deg, var(--primary), var(--mint))' }}
      aria-hidden="true"
    />
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function InjectionsPage() {
  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(injectionsPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(injectionsFAQSchema) }}
      />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden -mt-[112px] sm:-mt-[128px] lg:-mt-[144px] pt-[112px] sm:pt-[128px] lg:pt-[144px]"
      >
        {/* Background image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/Injections-in-Oklahoma-City.webp')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          aria-hidden="true"
        />
        {/* White gradient: transparent on left → solid white on right (text side) */}
        <div
          className="absolute inset-0 hidden sm:block"
          style={{
            background:
              'linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 35%, rgba(255,255,255,0.75) 55%, rgba(255,255,255,0.97) 72%, rgba(255,255,255,1) 100%)',
          }}
          aria-hidden="true"
        />
        {/* Mobile: top-to-bottom white fade so text stays legible over a narrow crop of the photo */}
        <div
          className="absolute inset-0 sm:hidden"
          style={{
            background:
              'linear-gradient(to bottom, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.80) 28%, rgba(255,255,255,0.96) 42%, rgba(255,255,255,1) 58%)',
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28 md:py-40">
          <div className="max-w-xl ml-auto">
            {/* Breadcrumb */}
            <nav
              className="flex items-center gap-2 text-sm text-gray-500 mb-6"
              aria-label="Breadcrumb"
            >
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <span aria-hidden="true">/</span>
              <span style={{ color: 'var(--primary)' }}>Injections</span>
            </nav>

            <h1
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ color: 'var(--navy)' }}
            >
              Vitamin B12 &amp; Wellness Injections in Oklahoma City
            </h1>

            <p
              className="text-lg md:text-xl font-semibold leading-snug mb-4"
              style={{ color: 'var(--primary)' }}
            >
              Personalized Vitamin &amp; Wellness Injections at Ebenezer Health Clinic
            </p>

            {/* "hero-answer-line" is a speakable-schema target; do not rename */}
            <p className="hero-answer-line mb-3">
              Support your health with provider-guided vitamin and wellness injections at
              Ebenezer Health Clinic in Oklahoma City, OK. We offer Vitamin B12, B-Complex,
              Lipotropic (MIC), and Vitamin D injections, along with additional treatments
              available on request.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-6">
              Whether you are seeking treatment for a vitamin deficiency or exploring
              supplemental wellness options, our healthcare provider evaluates your individual
              health needs before recommending an injection.
            </p>

            {/* Highlights */}
            <ul className="flex flex-wrap gap-2 mb-8">
              {heroBadges.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
                  style={{
                    backgroundColor: 'rgba(151,206,204,0.40)',
                    color: 'var(--navy)',
                  }}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {label}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto"
              >
                Book an Injection Visit
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

      {/* ── INJECTIONS WE OFFER ───────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        aria-labelledby="injections-menu-heading"
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
          {/* Section header */}
          <div className="max-w-3xl mb-10 md:mb-14">
            <h2
              id="injections-menu-heading"
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ color: 'var(--navy)' }}
            >
              Vitamin &amp; Wellness Injections We Offer in Oklahoma City
            </h2>
            <AccentBars />
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-5">
              At Ebenezer Health Clinic, we provide a selection of vitamin and wellness
              injections based on individual health needs and clinical assessment. Our goal is
              to help patients make informed decisions about supplementation through
              professional medical guidance.
            </p>
            <div
              className="flex items-start gap-3 rounded-xl px-5 py-4"
              style={{
                backgroundColor: 'rgba(255,255,255,0.80)',
                border: '1px solid rgba(26,166,183,0.18)',
                borderLeft: '4px solid var(--primary)',
              }}
            >
              <BadgeDollarSign
                className="h-5 w-5 mt-0.5 flex-shrink-0"
                style={{ color: 'var(--primary)' }}
                aria-hidden="true"
              />
              <p className="text-base leading-relaxed" style={{ color: 'var(--navy)' }}>
                Our regularly offered injections are <strong>$50 each</strong>. Additional
                treatments may be available on request, with pricing and administration options
                confirmed during consultation.
              </p>
            </div>
          </div>

          {/* Injection cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {injections.map(({ icon, title, paragraphs }) => (
              <article
                key={title}
                className="relative flex flex-col h-full overflow-hidden rounded-2xl bg-white p-7 md:p-8 shadow-sm"
                style={{ border: '1px solid rgba(26,166,183,0.18)' }}
              >
                <CardTopAccent />
                <div className="flex items-center gap-4 mb-5">
                  <IconBadge icon={icon} />
                  <h3
                    className="text-xl font-bold leading-snug"
                    style={{ color: 'var(--navy)' }}
                  >
                    {title}
                  </h3>
                </div>
                <div className="space-y-3 text-[15px] text-gray-600 leading-relaxed mb-6">
                  {paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <div
                  className="mt-auto flex items-center justify-between gap-3 rounded-lg px-4 py-3"
                  style={{ backgroundColor: 'rgba(26,166,183,0.08)' }}
                >
                  <span
                    className="text-xs font-semibold uppercase tracking-widest"
                    style={{ color: 'var(--primary)' }}
                  >
                    Price
                  </span>
                  <span className="text-base font-bold" style={{ color: 'var(--navy)' }}>
                    $50 per injection
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── ADDITIONAL TREATMENTS ON REQUEST ──────────────────────── */}
      <section
        className="relative overflow-hidden bg-white"
        aria-labelledby="on-request-heading"
      >
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl mb-10 md:mb-14">
            <h2
              id="on-request-heading"
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ color: 'var(--navy)' }}
            >
              Additional Wellness Treatments Available on Request
            </h2>
            <AccentBars />
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
              Ebenezer Health Clinic also offers additional wellness treatments on request,
              subject to availability and medical assessment.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              These options are considered individually based on your health history, treatment
              goals, and provider recommendations. Administration methods and pricing will be
              confirmed before treatment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {onRequestTreatments.map(({ icon, title, paragraphs, details }) => (
              <article
                key={title}
                className="flex flex-col h-full rounded-2xl p-7 md:p-8"
                style={{
                  background: 'linear-gradient(160deg, #ffffff 0%, rgba(232,247,247,0.85) 100%)',
                  border: '2px dashed rgba(26,166,183,0.35)',
                }}
              >
                <div className="flex items-center gap-4 mb-5">
                  <IconBadge icon={icon} />
                  <h3
                    className="text-xl font-bold leading-snug"
                    style={{ color: 'var(--navy)' }}
                  >
                    {title} &mdash;{' '}
                    <span style={{ color: 'var(--primary)' }}>Available on Request</span>
                  </h3>
                </div>
                <div className="space-y-3 text-[15px] text-gray-600 leading-relaxed mb-6">
                  {paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <dl
                  className="mt-auto rounded-lg overflow-hidden"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.85)',
                    border: '1px solid rgba(26,166,183,0.18)',
                  }}
                >
                  {details.map(({ label, value }, index) => (
                    <div
                      key={label}
                      className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4 px-4 py-3"
                      style={
                        index > 0 ? { borderTop: '1px solid rgba(26,166,183,0.15)' } : undefined
                      }
                    >
                      <dt
                        className="text-xs font-semibold uppercase tracking-widest"
                        style={{ color: 'var(--primary)' }}
                      >
                        {label}
                      </dt>
                      <dd className="text-base font-bold sm:text-right" style={{ color: 'var(--navy)' }}>
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE ────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        aria-labelledby="why-choose-heading"
        style={{
          backgroundImage: "url('/answer_block2.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'left center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to left, rgba(255,255,255,0.82) 0%, rgba(255,255,255,0.60) 50%, rgba(151,206,204,0.18) 100%)',
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="lg:ml-auto lg:w-[64%]">
            <h2
              id="why-choose-heading"
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ color: 'var(--navy)' }}
            >
              Why Choose Ebenezer Health Clinic for Vitamin Injections?
            </h2>
            <AccentBars />
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
              At Ebenezer Health Clinic, we believe that wellness treatments should begin with
              an understanding of each patient&apos;s individual health needs.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-10">
              Our approach emphasizes professional medical assessment, clear communication, and
              responsible treatment recommendations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
              {whyChoose.map(({ icon, title, text }) => (
                <div
                  key={title}
                  className="flex flex-col rounded-2xl p-6 shadow-sm"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.92)',
                    border: '1px solid rgba(26,166,183,0.18)',
                  }}
                >
                  <div className="mb-4">
                    <IconBadge icon={icon} />
                  </div>
                  <h3
                    className="text-lg font-bold leading-snug mb-2"
                    style={{ color: 'var(--navy)' }}
                  >
                    {title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto"
            >
              Schedule Your Injection Visit
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHAT TO EXPECT ────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        aria-labelledby="what-to-expect-heading"
        style={{
          backgroundImage: "url('/minor-illness-same-day.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'bottom right',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          className="absolute inset-0 sm:hidden"
          style={{ backgroundColor: 'rgba(255,255,255,0.90)' }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 hidden sm:block"
          style={{
            background:
              'linear-gradient(90deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.86) 45%, rgba(255,255,255,0.10) 100%)',
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl">
            <h2
              id="what-to-expect-heading"
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ color: 'var(--navy)' }}
            >
              What to Expect During Your Injection Visit
            </h2>
            <AccentBars />
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-10">
              Getting a vitamin or wellness injection at Ebenezer Health Clinic involves a
              straightforward, provider-guided process.
            </p>

            {/* Timeline */}
            <div className="relative mb-10">
              <div
                className="absolute left-6 top-6 bottom-6 w-px"
                style={{ backgroundColor: 'rgba(26,166,183,0.30)' }}
                aria-hidden="true"
              />
              <ol className="relative flex flex-col gap-5">
                {visitSteps.map(({ icon: Icon, title, text }) => (
                  <li key={title} className="relative flex items-start gap-4 sm:gap-5">
                    <div
                      className="relative z-10 inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl text-white shadow-md"
                      style={{ backgroundColor: 'var(--primary)' }}
                      aria-hidden="true"
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <div
                      className="flex-1 rounded-2xl p-5 md:p-6 shadow-sm"
                      style={{
                        backgroundColor: 'rgba(255,255,255,0.94)',
                        border: '1px solid rgba(26,166,183,0.18)',
                      }}
                    >
                      <h3
                        className="text-lg font-bold leading-snug mb-1.5"
                        style={{ color: 'var(--navy)' }}
                      >
                        {title}
                      </h3>
                      <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed">{text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto"
              >
                Book an Injection Visit
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

      {/* ── IMPORTANT / COMPLIANCE NOTICE ────────────────────────── */}
      <section
        aria-labelledby="important-notice-heading"
        style={{ backgroundColor: 'rgba(254,242,242,0.60)' }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div
            className="mx-auto w-full max-w-3xl rounded-2xl p-7 md:p-10"
            style={{
              backgroundColor: '#ffffff',
              border: '2px solid rgba(239,68,68,0.30)',
              boxShadow: '0 4px 24px rgba(239,68,68,0.10)',
            }}
          >
            {/* Icon + heading */}
            <div className="flex flex-col items-center text-center gap-3 mb-5">
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
                Important Information About Vitamin &amp; Wellness Injections
              </h2>
            </div>

            {/* Divider */}
            <div
              className="h-px w-16 mx-auto mb-6"
              style={{ backgroundColor: 'rgba(239,68,68,0.25)' }}
              aria-hidden="true"
            />

            <div className="space-y-4">
              {importantParagraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base leading-relaxed text-gray-600 pl-4"
                  style={{ borderLeft: '3px solid rgba(239,68,68,0.30)' }}
                >
                  {paragraph}
                </p>
              ))}
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
            <h2
              id="faq-heading"
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ color: 'var(--navy)' }}
            >
              Frequently Asked Questions About Vitamin Injections in Oklahoma City
            </h2>
            <AccentBars center />
          </div>

          <InjectionsFAQAccordion />
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        aria-labelledby="final-cta-heading"
        style={{ background: 'linear-gradient(135deg, #0B3D47 0%, #1AA6B7 100%)' }}
      >
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <div
            className="inline-flex h-14 w-14 items-center justify-center rounded-xl mb-6"
            style={{ backgroundColor: 'rgba(255,255,255,0.14)' }}
            aria-hidden="true"
          >
            <Syringe className="h-7 w-7 text-white" />
          </div>
          <h2
            id="final-cta-heading"
            className="text-3xl md:text-4xl font-bold mb-5"
            style={{ color: '#ffffff' }}
          >
            Schedule Your Vitamin Injection Visit in Oklahoma City
          </h2>
          <p
            className="text-base md:text-lg leading-relaxed mb-4"
            style={{ color: 'rgba(255,255,255,0.92)' }}
          >
            Explore provider-guided vitamin and wellness injections at Ebenezer Health Clinic in
            Oklahoma City, Oklahoma.
          </p>
          <p
            className="text-base md:text-lg leading-relaxed mb-7"
            style={{ color: 'rgba(255,255,255,0.92)' }}
          >
            Whether you need a Vitamin B12 injection for an identified deficiency or want to
            learn more about additional treatment options, our healthcare team can help you
            understand what may be appropriate for your health needs.
          </p>

          <ul className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {['Walk-Ins Welcome', 'In-Person Visits', 'Provider Evaluation Required'].map(
              (label) => (
                <li
                  key={label}
                  className="rounded-full px-4 py-2 text-sm font-semibold"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.14)',
                    border: '1px solid rgba(255,255,255,0.28)',
                    color: '#ffffff',
                  }}
                >
                  {label}
                </li>
              ),
            )}
          </ul>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-[0.625rem] bg-white px-8 py-3.5 text-base font-semibold shadow-md transition-transform hover:-translate-y-0.5 w-full sm:w-auto"
              style={{ color: 'var(--navy)' }}
            >
              Book an Injection Visit
            </Link>
            <a
              href="tel:+14053498188"
              className="btn-ghost-white text-base px-8 py-3.5 w-full sm:w-auto"
            >
              Call (405) 349-8188
            </a>
          </div>

          <p
            className="mt-10 pt-6 text-sm leading-relaxed"
            style={{
              color: 'rgba(255,255,255,0.80)',
              borderTop: '1px solid rgba(255,255,255,0.20)',
            }}
          >
            All treatments are subject to medical assessment and availability. Nutrients&apos;
            normal roles in the body do not guarantee additional benefits from injections when
            nutrient levels are already adequate.
          </p>
        </div>
      </section>
    </>
  )
}
