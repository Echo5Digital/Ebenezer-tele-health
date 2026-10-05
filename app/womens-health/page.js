import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle2, ShieldCheck, Info, MapPin, Phone, Mail } from 'lucide-react'
import WomensHealthFAQAccordion from './WomensHealthFAQAccordion'
import Testimonials from '@/components/Testimonials'

export const metadata = {
  title: "Women’s Health Clinic Oklahoma City",
  description:
    "Women’s health care in the Oklahoma City area for birth control, PCOS, irregular periods, menopause, Pap smears and STD testing. In-person and Oklahoma telehealth available.",
  alternates: {
    canonical: 'https://www.ebenezerhealthclinic.com/womens-health',
  },
}

const womensHealthPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  name: "Women's Health Clinic Oklahoma City | Ebenezer Health Clinic",
  description:
    "Women's health care in the Oklahoma City area for birth control, PCOS, irregular periods, menopause, Pap smears and STD testing. In-person and Oklahoma telehealth available.",
  url: 'https://www.ebenezerhealthclinic.com/womens-health',
  about: {
    '@type': 'MedicalProcedure',
    name: "Women's Health Care",
    procedureType: 'https://schema.org/TherapeuticProcedure',
    description:
      "Comprehensive women's health services including birth control and contraceptive care, PCOS management, menstrual irregularities, menopause treatment, Pap smears, and STD testing and management. In-person care in the Oklahoma City area, with telehealth available throughout Oklahoma for appropriate services.",
  },
  provider: { '@id': 'https://www.ebenezerhealthclinic.com/#dr-susan-george' },
  areaServed: { '@type': 'State', name: 'Oklahoma' },
  availableService: [
    { '@type': 'MedicalTherapy', name: 'Birth Control & Contraceptive Care' },
    { '@type': 'MedicalTherapy', name: 'PCOS Management' },
    { '@type': 'MedicalTherapy', name: 'Menstrual Irregularities' },
    { '@type': 'MedicalTherapy', name: 'Menopause Care' },
    { '@type': 'MedicalProcedure', name: 'Pap Smears & Women’s Health Screening' },
    { '@type': 'MedicalTherapy', name: 'STD Testing & Management' },
  ],
  offers: [
    {
      '@type': 'Offer',
      name: "Women's Health Televisit",
      priceCurrency: 'USD',
      price: '50',
      description:
        'Secure video visit, symptom review, and prescriptions sent to your preferred pharmacy when appropriate.',
    },
    {
      '@type': 'Offer',
      name: "Women's Health In-Person Initial Visit",
      priceCurrency: 'USD',
      price: '75',
      description:
        'Comprehensive symptom review, lab orders included, lab interpretation, and personalized treatment plan.',
    },
    {
      '@type': 'Offer',
      name: "Women's Health In-Person Follow-Up Visit",
      priceCurrency: 'USD',
      price: '50',
      description:
        'Ongoing assessment, lab review and monitoring, treatment adjustments, and continued support.',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "What women’s health services does Ebenezer Health Clinic provide?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We provide birth control services, PCOS management, care for menstrual irregularities, menopause treatment, Pap smears, and STD testing and management.',
      },
    },
    {
      '@type': 'Question',
      name: 'What birth control options are available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Birth control services include oral contraceptives, Depo-Provera shots, patches, IUD insertion and removal, and Nexplanon insertion and removal. IUD and Nexplanon insertions are covered by insurance only.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide PCOS management?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Ebenezer Health Clinic provides individualized PCOS management based on your symptoms, medical history and health needs.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can you help with irregular periods?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We evaluate and manage menstrual irregularities, including concerns about irregular, absent, heavy or painful periods.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide menopause treatment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Hormonal and non-hormonal menopause treatment options are available for qualified patients based on clinical evaluation. Pellet insertion will also be available beginning in December 2026 for qualified patients.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer Pap smears?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Pap smears are available as part of our women's health services.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide STD testing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Ebenezer Health Clinic provides STD testing and management based on your individual needs and clinical evaluation.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can I receive women’s health care through telehealth?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Telehealth is available throughout Oklahoma for women’s health services that can appropriately be provided virtually. Some services, examinations, screenings and procedures require an in-person visit.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I complete my questionnaire before my appointment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. You can complete the Women's Health Questionnaire before your visit. If you prefer, the clinic can assist you with completing it during your initial intake or free consultation call.",
      },
    },
    {
      '@type': 'Question',
      name: 'What if I am experiencing a medical emergency?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ebenezer Health Clinic does not provide emergency medical services. If you are experiencing a medical emergency, call 911 or go to the nearest emergency room.',
      },
    },
  ],
}

const birthControlServices = [
  'Oral contraceptives',
  'Depo-Provera shots',
  'Birth control patches',
  'IUD insertion',
  'Nexplanon insertion',
  'IUD removal',
  'Nexplanon removal',
]

const menopauseConcerns = [
  'Hot flashes',
  'Night sweats',
  'Mood changes',
  'Vaginal dryness',
  'Sleep difficulties',
  'Other menopause-related symptoms',
]

const steps = [
  {
    number: '01',
    title: 'Book Your Visit',
    description: 'Schedule your women’s health appointment online or call (405) 349-8188.',
  },
  {
    number: '02',
    title: 'Complete Your Women’s Health Questionnaire',
    description:
      'Complete our Women’s Health Questionnaire before your appointment. If you prefer, our team can help complete it with you during your initial intake or free consultation call.',
  },
  {
    number: '03',
    title: 'Meet With Your Provider',
    description:
      'Meet with your provider in person or through secure telehealth, depending on the service you need. Discuss your symptoms, health history, concerns and goals.',
  },
  {
    number: '04',
    title: 'Get Your Personalized Care Plan',
    description:
      'Following your clinical evaluation, your provider will discuss appropriate next steps, which may include treatment options, testing, prescriptions, monitoring or follow-up care.',
  },
]

const pricingTelevisitFeatures = [
  'Secure video visit with Dr. Susan George',
  'Symptom review and consultation',
  'Prescriptions sent to your preferred pharmacy when appropriate',
]

const pricingInitialFeatures = [
  'Comprehensive symptom review',
  'Lab orders included',
  'Lab interpretation',
  'Personalized treatment plan',
]

const pricingFollowupFeatures = [
  'Ongoing assessment',
  'Lab review and monitoring',
  'Treatment adjustments',
  'Continued support',
]

const whyPoints = [
  {
    title: 'Personalized Care',
    description:
      'Your symptoms, medical history and individual health goals are considered when developing your care plan.',
  },
  {
    title: "Women’s Health-Focused Care",
    description:
      "Access care for birth control, PCOS, menstrual irregularities, menopause, Pap smears, STD testing and other women’s health concerns.",
  },
  {
    title: 'Convenient Access',
    description:
      'Visit the clinic in person in the Oklahoma City area or use telehealth for appropriate services throughout Oklahoma.',
  },
  {
    title: 'Private & Respectful Care',
    description:
      "Discuss sensitive women's health concerns in a professional and respectful clinical environment.",
  },
  {
    title: 'Evidence-Based Approach',
    description:
      'Care and treatment recommendations are based on your individual clinical evaluation and health needs.',
  },
  {
    title: 'Ongoing Support',
    description:
      'When appropriate, follow-up care allows your provider to monitor your progress and adjust your treatment plan.',
  },
]

const providerCredentials = [
  'Doctor of Nursing Practice (DNP)',
  'Advanced Practice Registered Nurse (APRN)',
  'Board Certified in Advanced Diabetes Management (BC-ADM)',
  "Women's Health Provider",
  'In-person care in the Oklahoma City area',
  'Telehealth throughout Oklahoma',
]

const featuredLinks = [
  { name: 'Birth Control', href: '#birth-control', image: '/womens-health-birth-control.webp' },
  { name: 'PCOS Management', href: '#pcos', image: '/Womens-health-pcos-management.webp' },
  { name: 'Menstrual Irregularities', href: '#menstrual-irregularities', image: '/womesn-health-menstrual-irregularities.webp' },
  { name: 'Menopause Care', href: '#menopause', image: '/womens-health-menopause-care.webp' },
  { name: 'Pap Smears', href: '#pap-smears', image: '/womens-health-pap-smears.png' },
  { name: 'STD Testing & Management', href: '#std-testing', image: '/womens-health-std-testing.png' },
]

const servingAreas = ['Oklahoma City', 'Bethany', 'Edmond', 'Norman', 'Moore', 'Tulsa']

export default function WomensHealthPage() {
  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(womensHealthPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── HERO ────────────────────────────────────── */}
      <section
        className="relative overflow-hidden -mt-[112px] sm:-mt-[128px] lg:-mt-[144px] pt-[112px] sm:pt-[128px] lg:pt-[144px]"
        style={{
          backgroundImage: "url('/women_health.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Mobile overlay */}
        <div
          className="absolute inset-0 lg:hidden"
          style={{ backgroundColor: 'rgba(255,255,255,0.93)' }}
          aria-hidden="true"
        />
        {/* Desktop gradient */}
        <div
          className="absolute inset-0 hidden lg:block"
          style={{
            background:
              'linear-gradient(to right, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.86) 48%, rgba(26,166,183,0.38) 100%)',
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2">
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
                <span style={{ color: 'var(--primary)' }}>
                  Women&apos;s Health
                </span>
              </nav>

              <h1
                className="text-4xl md:text-5xl font-bold mb-5 leading-tight"
                style={{ color: 'var(--navy)' }}
              >
                Women&apos;s Health Clinic in Oklahoma City{' '}
                <span className="block sm:inline">
                  In-Person &amp; Online
                </span>
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed mb-6 max-w-2xl">
                Compassionate, personalized women&apos;s health care for birth
                control, PCOS, menstrual irregularities, menopause, Pap
                smears, STD testing and more.
              </p>

              <p className="text-base text-gray-600 leading-relaxed mb-6 max-w-2xl">
                Visit Ebenezer Health Clinic in the Oklahoma City area or
                connect through secure telehealth from anywhere in Oklahoma.
              </p>

              <div
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold mb-8"
                style={{
                  backgroundColor: 'rgba(151,206,204,0.40)',
                  color: 'var(--navy)',
                }}
              >
                <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                Private, secure &amp; HIPAA-compliant
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto text-center"
                >
                  Book Your Women&apos;s Health Visit
                </Link>
                <a
                  href="tel:+14053498188"
                  className="btn-outline text-base px-7 py-3.5 w-full sm:w-auto text-center"
                >
                  Call (405) 349-8188
                </a>
              </div>
            </div>

            {/* Empty right col — image shows on desktop */}
            <div className="hidden lg:block" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* ── PERSONALIZED CARE INTRO ─────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage: "url('/answer_block.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        aria-labelledby="intro-heading"
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(255,255,255,0.85)' }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left — text */}
            <div>
              <h2
                id="intro-heading"
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ color: 'var(--navy)' }}
              >
                Personalized Women&apos;s Health Care for Every Stage of Life
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
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-5">
                Women&apos;s health needs change throughout life. At Ebenezer
                Health Clinic, we take time to understand your symptoms,
                medical history, concerns and health goals before developing
                an individualized care plan.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-5">
                Whether you need help choosing birth control, managing PCOS
                or irregular periods, navigating menopause, completing a Pap
                smear, or addressing concerns about sexually transmitted
                diseases, our goal is to provide accessible, respectful and
                evidence-based care.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                In-person appointments are available in the Oklahoma City
                area, with telehealth available throughout Oklahoma for
                services that can appropriately be provided virtually.
              </p>
            </div>

            {/* Right — trust-signal card */}
            <div
              className="rounded-2xl p-7 md:p-8"
              style={{
                background:
                  'linear-gradient(135deg, rgba(26,166,183,0.06) 0%, rgba(151,206,204,0.18) 100%)',
                border: '1px solid rgba(26,166,183,0.20)',
                boxShadow: '0 2px 20px rgba(26,166,183,0.07)',
              }}
            >
              <ul className="space-y-5">
                {[
                  {
                    label: 'In-Person Care',
                    detail: 'Oklahoma City area, by appointment',
                  },
                  {
                    label: 'Telehealth Statewide',
                    detail: 'Available throughout Oklahoma for appropriate services',
                  },
                  {
                    label: 'Respectful, Private Care',
                    detail: 'Evidence-based, individualized treatment plans',
                  },
                ].map((item) => (
                  <li key={item.label} className="flex items-start gap-4">
                    <CheckCircle2
                      className="h-5 w-5 mt-0.5 flex-shrink-0"
                      style={{ color: 'var(--primary)' }}
                      aria-hidden="true"
                    />
                    <div>
                      <p
                        className="font-semibold leading-snug"
                        style={{ color: 'var(--navy)' }}
                      >
                        {item.label}
                      </p>
                      <p className="text-sm text-gray-600 mt-0.5">
                        {item.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── WOMEN'S HEALTH SERVICES WE PROVIDE (section heading) ── */}
      <div style={{ backgroundColor: 'rgba(151,206,204,0.10)' }} aria-labelledby="services-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-16">
          <div className="text-center">
            <h2
              id="services-heading"
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: 'var(--navy)' }}
            >
              Women&apos;s Health Services We Provide
            </h2>
            <div className="flex items-center justify-center gap-2" aria-hidden="true">
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
          </div>
        </div>
      </div>

      {/* ── BIRTH CONTROL & CONTRACEPTIVE CARE ── */}
      <section
        id="birth-control"
        className="scroll-mt-24"
        aria-labelledby="birth-control-heading"
        style={{ backgroundColor: 'var(--cream)' }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              {/* Text content */}
              <div>
                <h3
                  id="birth-control-heading"
                  className="text-2xl md:text-3xl font-bold mb-4"
                  style={{ color: 'var(--navy)' }}
                >
                  Birth Control &amp; Contraceptive Care
                </h3>
                <p className="text-base text-gray-600 leading-relaxed mb-4">
                  Choosing the right birth control method is a personal
                  decision. Your health history, lifestyle, preferences and
                  reproductive goals can all play a role in determining which
                  option may be appropriate for you.
                </p>
                <p className="text-base text-gray-600 leading-relaxed mb-4">
                  Our provider can discuss available options with you and
                  help determine an appropriate method based on your
                  individual needs.
                </p>
                <div
                  className="rounded-xl p-4 flex items-start gap-3"
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
                    Please note: IUD and Nexplanon insertions are covered by
                    insurance only.
                  </p>
                </div>
              </div>

              {/* Services list */}
              <div
                className="rounded-2xl p-7 md:p-8"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.85)',
                  border: '1px solid rgba(26,166,183,0.15)',
                  boxShadow: '0 2px 20px rgba(26,166,183,0.07)',
                }}
              >
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-5"
                  style={{ color: 'var(--primary)' }}
                >
                  Our birth control services include
                </p>
                <ul className="space-y-4">
                  {birthControlServices.map((item) => (
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
              </div>
            </div>
          </div>
      </section>

      {/* ── PCOS MANAGEMENT & MENSTRUAL IRREGULARITIES ── */}
      <section
        className="scroll-mt-24 bg-white"
        aria-label="PCOS Management and Menstrual Irregularities"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
            {/* PCOS Management */}
            <div
              id="pcos"
              className="scroll-mt-24 rounded-2xl p-7 md:p-10 h-full"
              style={{
                backgroundColor: 'rgba(255,255,255,0.85)',
                border: '1px solid rgba(26,166,183,0.15)',
                boxShadow: '0 2px 20px rgba(26,166,183,0.07)',
              }}
            >
              <h3
                id="pcos-heading"
                className="text-2xl md:text-3xl font-bold mb-4"
                style={{ color: 'var(--navy)' }}
              >
                PCOS Management
              </h3>
              <p className="text-base text-gray-600 leading-relaxed mb-4">
                Polycystic ovary syndrome (PCOS) can affect menstrual cycles
                and other aspects of a woman&apos;s health.
              </p>
              <p className="text-base text-gray-600 leading-relaxed mb-4">
                Ebenezer Health Clinic provides individualized PCOS
                management based on your symptoms, medical history and
                health needs.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                Your visit may include a review of your menstrual patterns,
                medications, symptoms and other relevant health factors to
                help your provider determine appropriate next steps.
              </p>
            </div>

            {/* Menstrual Irregularities */}
            <div
              id="menstrual-irregularities"
              className="scroll-mt-24 rounded-2xl p-7 md:p-10 h-full"
              style={{
                background:
                  'linear-gradient(135deg, rgba(26,166,183,0.06) 0%, rgba(151,206,204,0.18) 100%)',
                border: '1px solid rgba(26,166,183,0.20)',
                boxShadow: '0 2px 20px rgba(26,166,183,0.07)',
              }}
            >
              <h3
                id="menstrual-heading"
                className="text-2xl md:text-3xl font-bold mb-4"
                style={{ color: 'var(--navy)' }}
              >
                Menstrual Irregularities
              </h3>
              <p className="text-base text-gray-600 leading-relaxed mb-4">
                Changes in your menstrual cycle can happen for many reasons.
                If you are experiencing irregular, absent, heavy or painful
                periods, our provider can evaluate your symptoms and medical
                history.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                Your visit may include a review of your menstrual cycle,
                reproductive history, current medications, symptoms and
                other factors that may be contributing to your concerns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MENOPAUSE CARE ───────────────────────── */}
      <section
        id="menopause"
        className="scroll-mt-24"
        aria-labelledby="menopause-heading"
        style={{ backgroundColor: 'rgba(151,206,204,0.10)' }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-stretch">
            {/* Concerns card — left on desktop */}
            <div className="order-2 lg:order-1 flex">
              <div
                className="rounded-2xl p-7 md:p-8 flex flex-col justify-center w-full"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.80)',
                  border: '1px solid rgba(26,166,183,0.15)',
                  boxShadow: '0 2px 20px rgba(26,166,183,0.07)',
                }}
              >
                <h3
                  className="text-base font-semibold uppercase tracking-wide mb-5"
                  style={{ color: 'var(--primary)' }}
                >
                  We can evaluate concerns including
                </h3>
                <ul className="space-y-3">
                  {menopauseConcerns.map((item) => (
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
              </div>
            </div>

            {/* Text content — right on desktop */}
            <div className="order-1 lg:order-2">
              <h2
                id="menopause-heading"
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ color: 'var(--navy)' }}
              >
                Menopause Care – Hormonal &amp; Non-Hormonal Treatments
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

              <p className="text-base text-gray-600 leading-relaxed mb-4">
                Menopause can bring changes that affect comfort, sleep, mood
                and everyday well-being.
              </p>
              <p className="text-base text-gray-600 leading-relaxed mb-7">
                Ebenezer Health Clinic provides both hormonal and
                non-hormonal treatment options for qualified patients based
                on individual needs and clinical evaluation. Treatment
                recommendations are individualized based on your symptoms,
                medical history and clinical evaluation.
              </p>

              {/* Coming December 2026 callout */}
              <div
                className="rounded-xl p-5"
                style={{
                  backgroundColor: 'rgba(26,166,183,0.08)',
                  border: '1px solid rgba(26,166,183,0.20)',
                }}
              >
                <p
                  className="text-sm font-semibold uppercase tracking-wide mb-2"
                  style={{ color: 'var(--primary)' }}
                >
                  Coming December 2026 – Pellet Insertion
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Starting in December 2026, pellet insertion will be
                  available for qualified patients. Eligibility and treatment
                  options will be determined following an individual
                  clinical evaluation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PAP SMEARS & SCREENING ───────────────── */}
      <section
        id="pap-smears"
        className="scroll-mt-24 bg-white"
        aria-labelledby="pap-smear-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-3xl">
            <h2
              id="pap-smear-heading"
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: 'var(--navy)' }}
            >
              Pap Smears &amp; Women&apos;s Health Screening
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
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
              Preventive screening is an important part of women&apos;s
              health care.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
              Ebenezer Health Clinic offers Pap smears as part of our
              women&apos;s health services.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Your provider can review your health history and previous
              screening information and discuss appropriate screening based
              on your individual needs.
            </p>
          </div>
        </div>
      </section>

      {/* ── STD TESTING & MANAGEMENT ──────────────── */}
      <section
        id="std-testing"
        className="scroll-mt-24"
        aria-labelledby="std-testing-heading"
        style={{ backgroundColor: 'var(--cream)' }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-3xl ml-auto text-left">
            <h2
              id="std-testing-heading"
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: 'var(--navy)' }}
            >
              STD Testing &amp; Management
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
              If you have concerns about a sexually transmitted disease
              (STD), Ebenezer Health Clinic provides STD testing and
              management in a private, professional and respectful clinical
              environment. Your provider can discuss your symptoms, sexual
              health history, previous testing and other relevant concerns
              and recommend appropriate testing and management.
            </p>
          </div>
        </div>
      </section>

      {/* ── IN-PERSON & TELEHEALTH ACROSS OKLAHOMA ──────── */}
      <section
        className="relative overflow-hidden bg-white"
        aria-labelledby="telehealth-heading"
      >
        <Image
          src="/womens-health-02.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center pointer-events-none"
          style={{ opacity: 1 }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div
            className="rounded-2xl p-7 md:p-10 max-w-3xl"
            style={{
              backgroundColor: 'rgba(255,255,255,0.90)',
              border: '1px solid rgba(26,166,183,0.15)',
              boxShadow: '0 2px 20px rgba(26,166,183,0.07)',
            }}
          >
            <h2
              id="telehealth-heading"
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: 'var(--navy)' }}
            >
              In-Person Women&apos;s Health Care &amp; Telehealth Across
              Oklahoma
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
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
              We make accessing women&apos;s health care more convenient.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
              Patients can visit Ebenezer Health Clinic in person in the
              Oklahoma City area. Appropriate consultations and follow-up
              services may also be available through secure telehealth for
              patients throughout Oklahoma.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Our goal is to make it easier to discuss your concerns,
              understand your options and receive individualized care.
            </p>
          </div>
        </div>
      </section>

      {/* ── HOW YOUR VISIT WORKS ───────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: '#1AA6B7' }}
        aria-labelledby="how-it-works-heading"
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(26,166,183,0.40)' }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center mb-12 md:mb-14">
            <h2
              id="how-it-works-heading"
              className="text-3xl md:text-4xl font-bold"
              style={{ color: '#ffffff' }}
            >
              How Your Women&apos;s Health Visit Works
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 items-stretch">
            {steps.map((step, index) => (
              <div key={step.number} className="relative flex flex-col gap-4 h-full">
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
                  {index === 1 && (
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 text-sm font-semibold rounded-lg px-4 py-2.5 mt-auto transition-colors"
                      style={{
                        backgroundColor: 'rgba(255,255,255,0.14)',
                        color: '#ffffff',
                      }}
                    >
                      Complete Women&apos;s Health Questionnaire
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/contact"
              className="btn-primary text-base px-8 py-3.5"
            >
              Book Your Visit
            </Link>
          </div>
        </div>
      </section>

      {/* ── MEET YOUR PROVIDER ───────────────── */}
      <section className="bg-white" aria-labelledby="provider-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Text content */}
            <div>
              <h2
                id="provider-heading"
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ color: 'var(--navy)' }}
              >
                Meet Dr. Susan George, DNP, APRN, BC-ADM
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

              <p className="text-base text-gray-600 leading-relaxed mb-4">
                Women&apos;s health care at Ebenezer Health Clinic is led by
                Dr. Susan George, DNP, APRN, BC-ADM.
              </p>
              <p className="text-base text-gray-600 leading-relaxed mb-4">
                Dr. George is a Doctor of Nursing Practice and Advanced
                Practice Registered Nurse who specializes in women&apos;s
                health and is Board Certified in Advanced Diabetes
                Management.
              </p>
              <p className="text-base text-gray-600 leading-relaxed mb-8">
                She provides personalized, evidence-based care with an
                emphasis on listening to patients, understanding their
                concerns and developing individualized approaches to care.
              </p>

              {/* Credentials */}
              <div
                className="rounded-2xl p-6"
                style={{
                  backgroundColor: 'rgba(151,206,204,0.08)',
                  border: '1px solid rgba(26,166,183,0.12)',
                }}
              >
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-4"
                  style={{ color: 'var(--primary)' }}
                >
                  Credentials
                </p>
                <ul className="space-y-3">
                  {providerCredentials.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2
                        className="h-5 w-5 mt-0.5 flex-shrink-0"
                        style={{ color: 'var(--primary)' }}
                        aria-hidden="true"
                      />
                      <span className="text-gray-700 leading-snug text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
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
                  alt="Dr. Susan George, DNP, APRN — Women's Health Doctor at Ebenezer Health Clinic, Oklahoma"
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

      {/* ── WHY WOMEN CHOOSE EBENEZER ────────────── */}
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
          style={{ backgroundColor: 'rgba(232,247,247,0.82)' }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          {/* Heading */}
          <div className="mb-10 md:mb-14 max-w-2xl">
            <h2
              id="why-heading"
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ color: 'var(--navy)' }}
            >
              Why Women Choose Ebenezer Health Clinic
            </h2>
            <div className="flex items-center gap-2" aria-hidden="true">
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
          </div>

          {/* 2-col card grid */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5" role="list">
            {whyPoints.map((point, index) => (
              <li
                key={point.title}
                className="group flex gap-5 rounded-2xl p-6 md:p-7 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.84)',
                  border: '1px solid rgba(255,255,255,0.92)',
                  borderLeft: '3px solid var(--primary)',
                  boxShadow: '0 2px 18px rgba(26,166,183,0.09)',
                }}
              >
                {/* Number badge */}
                <div
                  className="flex-shrink-0 h-11 w-11 rounded-xl flex items-center justify-center text-sm font-bold"
                  style={{
                    backgroundColor: 'rgba(26,166,183,0.10)',
                    color: 'var(--primary)',
                  }}
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Text */}
                <div className="min-w-0">
                  <p
                    className="font-semibold leading-snug"
                    style={{ color: 'var(--navy)' }}
                  >
                    {point.title}
                  </p>
                  <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── TESTIMONIALS (same component as home page) ───── */}
      <Testimonials />

      {/* ── PRICING ───────────────────────── */}
      <section
        id="pricing"
        style={{ backgroundColor: 'var(--cream)' }}
        aria-labelledby="pricing-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center mb-10">
            <h2
              id="pricing-heading"
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: 'var(--navy)' }}
            >
              Women&apos;s Health Pricing
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-xl mx-auto">
              We believe patients should understand the cost of care before
              their visit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Televisit Card */}
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
                Televisit
              </h3>
              <p className="text-sm text-gray-600 mb-5">
                Secure video visit, symptom review, and prescriptions sent to
                your pharmacy when appropriate.
              </p>
              <div className="flex items-baseline gap-2 mb-6">
                <span
                  className="text-5xl font-bold"
                  style={{ color: 'var(--primary)' }}
                >
                  $50
                </span>
                <span className="text-sm text-gray-500">televisit</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {pricingTelevisitFeatures.map((feature) => (
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
                Book Your Visit
              </Link>
            </div>

            {/* Initial Visit Card */}
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
                In-Person Initial Visit
              </h3>
              <p className="text-sm text-gray-600 mb-5">
                Comprehensive symptom review, lab orders included, lab
                interpretation, and a personalized treatment plan.
              </p>
              <div className="flex items-baseline gap-2 mb-6">
                <span
                  className="text-5xl font-bold"
                  style={{ color: 'var(--primary)' }}
                >
                  $75
                </span>
                <span className="text-sm text-gray-500">initial visit</span>
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
                className="btn-outline text-base w-full text-center"
              >
                Book Your Visit
              </Link>
            </div>

            {/* Follow-up Card */}
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
                In-Person Follow-Up Visit
              </h3>
              <p className="text-sm text-gray-600 mb-5">
                Ongoing assessment, lab review and monitoring, treatment
                adjustments, and continued support.
              </p>
              <div className="flex items-baseline gap-2 mb-6">
                <span
                  className="text-5xl font-bold"
                  style={{ color: 'var(--primary)' }}
                >
                  $50
                </span>
                <span className="text-sm text-gray-500">follow-up</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {pricingFollowupFeatures.map((feature) => (
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
                Book Your Visit
              </Link>
            </div>
          </div>

          {/* IUD/Nexplanon insurance note */}
          <div
            className="mt-8 max-w-3xl mx-auto rounded-xl p-5 flex items-start gap-3"
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
              IUD and Nexplanon insertions are covered by insurance only.
            </p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/pricing"
              className="btn-outline text-base px-7 py-3.5 w-full sm:w-auto text-center"
            >
              View Pricing
            </Link>
            <Link
              href="/contact"
              className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto text-center"
            >
              Book Your Visit
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────── */}
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
              className="text-3xl md:text-4xl font-bold"
              style={{ color: 'var(--navy)' }}
            >
              Women&apos;s Health FAQs
            </h2>
          </div>

          <WomensHealthFAQAccordion />
        </div>
      </section>

      {/* ── VISIT EBENEZER HEALTH CLINIC ─────────── */}
      <section className="bg-white" aria-labelledby="visit-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Location details */}
            <div>
              <h2
                id="visit-heading"
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ color: 'var(--navy)' }}
              >
                Visit Ebenezer Health Clinic
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

              <div
                className="rounded-2xl p-7 md:p-8"
                style={{
                  backgroundColor: 'rgba(151,206,204,0.08)',
                  border: '1px solid rgba(26,166,183,0.12)',
                }}
              >
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <MapPin
                      className="h-5 w-5 mt-0.5 flex-shrink-0"
                      style={{ color: 'var(--primary)' }}
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-semibold" style={{ color: 'var(--navy)' }}>
                        Ebenezer Health Clinic
                      </p>
                      <p className="text-sm text-gray-600 mt-0.5">
                        7415 NW 23rd Street, Bethany, OK 73008
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Phone
                      className="h-5 w-5 mt-0.5 flex-shrink-0"
                      style={{ color: 'var(--primary)' }}
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-semibold" style={{ color: 'var(--navy)' }}>
                        Phone
                      </p>
                      <a
                        href="tel:+14053498188"
                        className="text-sm text-gray-600 mt-0.5 hover:text-primary transition-colors"
                      >
                        (405) 349-8188
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Mail
                      className="h-5 w-5 mt-0.5 flex-shrink-0"
                      style={{ color: 'var(--primary)' }}
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-semibold" style={{ color: 'var(--navy)' }}>
                        Email
                      </p>
                      <a
                        href="mailto:ebenezerhealth@outlook.com"
                        className="text-sm text-gray-600 mt-0.5 hover:text-primary transition-colors break-all"
                      >
                        ebenezerhealth@outlook.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle2
                      className="h-5 w-5 mt-0.5 flex-shrink-0"
                      style={{ color: 'var(--primary)' }}
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-semibold" style={{ color: 'var(--navy)' }}>
                        In-Person Care
                      </p>
                      <p className="text-sm text-gray-600 mt-0.5">
                        Oklahoma City area
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle2
                      className="h-5 w-5 mt-0.5 flex-shrink-0"
                      style={{ color: 'var(--primary)' }}
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-semibold" style={{ color: 'var(--navy)' }}>
                        Telehealth
                      </p>
                      <p className="text-sm text-gray-600 mt-0.5">
                        Available throughout Oklahoma for appropriate services
                      </p>
                    </div>
                  </li>
                </ul>

                <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-8">
                  <a
                    href="https://www.google.com/maps/place/Ebenezer+Health+Clinic/@35.494042,-97.6437285,20.5z/data=!4m14!1m7!3m6!1s0x87b20f8f4f23cb79:0x2f141cb188297bec!2sEbenezer+Health+Clinic!8m2!3d35.494093!4d-97.643728!16s%2Fg%2F11zh1t3wkg!3m5!1s0x87b20f8f4f23cb79:0x2f141cb188297bec!8m2!3d35.494093!4d-97.643728!16s%2Fg%2F11zh1t3wkg?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline text-sm px-5 py-3 w-full sm:w-auto text-center"
                  >
                    Get Directions
                  </a>
                  <a
                    href="tel:+14053498188"
                    className="btn-outline text-sm px-5 py-3 w-full sm:w-auto text-center"
                  >
                    Call (405) 349-8188
                  </a>
                  <Link
                    href="/contact"
                    className="btn-primary text-sm px-5 py-3 w-full sm:w-auto text-center"
                  >
                    Book an Appointment
                  </Link>
                </div>
              </div>
            </div>

            {/* Google Map embed */}
            <div
              className="relative w-full min-h-[320px] lg:min-h-full rounded-2xl overflow-hidden"
              style={{ border: '1px solid rgba(26,166,183,0.15)' }}
            >
              <iframe
                src="https://www.google.com/maps?q=Ebenezer+Health+Clinic,+7415+NW+23rd+Street,+Bethany,+OK+73008&output=embed"
                title="Ebenezer Health Clinic location map"
                className="absolute inset-0 h-full w-full"
                style={{ border: 0, minHeight: '320px' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVING WOMEN ACROSS OKLAHOMA ────────── */}
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage: "url('/oklahoma-map-bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        aria-labelledby="serving-heading"
      >
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <h2
            id="serving-heading"
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: 'var(--navy)' }}
          >
            Serving Women Across Oklahoma
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
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mb-8">
            Ebenezer Health Clinic provides in-person women&apos;s health
            care in the Oklahoma City area and telehealth access for
            appropriate services throughout Oklahoma. Our telehealth
            services help make care accessible to women in communities
            including Oklahoma City, Bethany, Edmond, Norman, Moore, Tulsa
            and other areas across the state.
          </p>
          <div className="flex flex-wrap gap-3">
            {servingAreas.map((area) => (
              <span
                key={area}
                className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.85)',
                  color: 'var(--navy)',
                  border: '1px solid rgba(26,166,183,0.20)',
                }}
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED INTERNAL LINKS ───────────── */}
      <section style={{ backgroundColor: 'var(--cream)' }} aria-labelledby="explore-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-16">
          <h2
            id="explore-heading"
            className="text-xs font-semibold uppercase tracking-widest mb-8 text-center"
            style={{ color: 'var(--primary)' }}
          >
            Explore Women&apos;s Health Services
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
            {featuredLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group block overflow-hidden rounded-xl transition-transform duration-200 hover:-translate-y-1"
                style={{
                  boxShadow: '0 2px 14px rgba(26,166,183,0.12)',
                }}
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <Image
                    src={link.image}
                    alt={link.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div
                  className="px-3 py-3 sm:py-4 text-center"
                  style={{ backgroundColor: 'var(--navy)' }}
                >
                  <span className="text-xs sm:text-sm font-semibold text-white leading-snug">
                    {link.name}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: 'var(--cream)' }}
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
            Schedule Your Women&apos;s Health Visit
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Whether you need birth control, PCOS management, help with
            menstrual irregularities, menopause treatment, a Pap smear, or
            STD testing and management, Ebenezer Health Clinic is here to
            provide individualized women&apos;s health care. Take the next
            step and schedule your visit today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="btn-primary text-base px-8 py-3.5 w-full sm:w-auto"
            >
              Book Your Women&apos;s Health Visit
            </Link>
            <a
              href="tel:+14053498188"
              className="inline-flex items-center justify-center gap-2 text-gray-700 hover:text-primary font-semibold text-base transition-colors w-full sm:w-auto"
            >
              Call (405) 349-8188
            </a>
          </div>

          <p className="mt-10 text-sm text-gray-500">
            Ebenezer Health Clinic &middot; Women&apos;s Health Clinic in Oklahoma City &middot; Telehealth statewide
            &middot; (405) 349-8188 &middot; ebenezerhealthclinic.com
          </p>
        </div>
      </section>
    </>
  )
}
