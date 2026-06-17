import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle2, ShieldCheck, Info, Award } from 'lucide-react'
import WomensHealthFAQAccordion from './WomensHealthFAQAccordion'

export const metadata = {
  title: "Women's Health Telehealth in Oklahoma | Ebenezer Telehealth",
  description:
    "Online women's health care across Oklahoma — birth control, PCOS, menopause & hormones. See Dr. Susan George, DNP, APRN. Cash-pay from $150. Book online.",
  alternates: {
    canonical: 'https://ebenezertelehealth.com/womens-health',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can I get birth control online in Oklahoma?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Ebenezer Telehealth provides contraceptive counseling and prescriptions by secure video across Oklahoma. We offer all hormonal and non-hormonal options — including pills, patches, rings, injections, IUDs, and implants — with prescriptions sent electronically to your preferred pharmacy.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you treat PCOS and menopause online?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Both are core services at Ebenezer Telehealth. We offer comprehensive PCOS management including hormonal and metabolic assessment and medication management, and individualized menopause and perimenopause care with hormonal and non-hormonal options and ongoing symptom tracking.',
      },
    },
    {
      '@type': 'Question',
      name: "Do I need insurance for a women's health visit?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "No. We are cash-pay with transparent pricing — $150 initial visit, $50 follow-up. You will know your full cost before you book. No surprise bills, no insurance claims, no pre-authorization delays. We are in the process of becoming credentialed with major insurance plans.",
      },
    },
    {
      '@type': 'Question',
      name: "Where in Oklahoma can I be seen for women's health?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Anywhere in Oklahoma — including Oklahoma City, Tulsa, Edmond, Norman, Lawton, and rural communities — as long as you're in Oklahoma at the time of your visit. Telehealth removes geographic barriers so women across metro and rural Oklahoma can access specialized care.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can you send prescriptions to my pharmacy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Prescriptions are sent electronically to any pharmacy in Oklahoma when appropriate. After your virtual visit, Dr. Susan George will send any prescriptions directly to your preferred pharmacy so you can pick them up without extra steps.',
      },
    },
    {
      '@type': 'Question',
      name: "Are women's health visits private?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. All visits are HIPAA-compliant and confidential, conducted via an encrypted, secure video platform. You speak only with Dr. Susan George — no rotating staff, no third-party networks. Your health information is never shared without your explicit consent.',
      },
    },
  ],
}

const conditions = [
  'Birth control and contraception counseling',
  'PCOS (polycystic ovary syndrome) management',
  'Menopause and perimenopause symptoms',
  'Hormonal imbalances affecting mood, energy, and cycles',
  'Irregular or painful periods',
  'Prescription management and follow-up care',
]

const birthControlServices = [
  'Pills, patches, and rings',
  'Emergency contraception counseling',
  'Ongoing prescription management and follow-up',
]

const menopauseServices = [
  'Hormone therapy when clinically appropriate',
  'Non-hormonal medications and alternatives',
  'Lifestyle and nutrition guidance',
  'Ongoing symptom tracking and plan adjustments',
]

const menopauseSymptoms = [
  'Hot flashes and night sweats',
  'Mood changes and sleep disturbances',
  'Weight or metabolic shifts',
]

const pcosServices = [
  'Evaluation of menstrual irregularities and symptoms',
  'Metabolic and hormonal assessment',
  'Medication management — cycle regulation and insulin-sensitizing options',
  'Weight-management strategies',
]

const steps = [
  {
    number: '01',
    title: 'Book Your Visit',
    description: 'Book online or call (405) 349-8188.',
  },
  {
    number: '02',
    title: 'Complete Your Intake',
    description:
      'Complete a quick, private intake about your symptoms and history.',
  },
  {
    number: '03',
    title: 'Meet Dr. George by Video',
    description: 'Meet Dr. George by secure video from anywhere in Oklahoma.',
  },
  {
    number: '04',
    title: 'Get Your Plan',
    description:
      'Get your evaluation, any needed lab orders, and prescriptions sent to your pharmacy.',
  },
]

const pricingInitialFeatures = [
  'Comprehensive symptom review and full health history',
  'Lab orders included when clinically appropriate',
  'Lab result interpretation',
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
    title: "A provider who specializes in women's health",
    description: 'Every visit is with Dr. George — not a generalist.',
  },
  {
    title: 'Care from anywhere in Oklahoma',
    description: 'Metro or rural, no long drives required.',
  },
  {
    title: 'Transparent cash pricing',
    description: '$150 initial · $50 follow-up · no surprise bills.',
  },
  {
    title: 'Private, secure, HIPAA-compliant visits',
    description: 'Confidential, encrypted video — every time.',
  },
  {
    title: 'Compassionate, dignified, faith-driven care',
    description: null,
  },
]

export default function WomensHealthPage() {
  return (
    <>
      {/* JSON-LD FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden -mt-[96px] sm:-mt-[112px] lg:-mt-[128px] pt-[96px] sm:pt-[112px] lg:pt-[128px]"
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
                Women&apos;s Health Telehealth —{' '}
                <span className="block sm:inline">
                  Care for Women Across Oklahoma
                </span>
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed mb-6 max-w-2xl">
                Compassionate, evidence-based virtual care for birth control,
                PCOS, menopause, and hormonal health — from anywhere in
                Oklahoma. See a provider who specializes in women&apos;s health,
                with transparent cash pricing and no insurance hurdles.
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
                  Book Your Visit
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

      {/* ── AEO ANSWER BLOCK ─────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
      >
        {/* Background image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/answer_block3.webp')",
            backgroundSize: 'cover',
            backgroundPosition: 'center 65%',
            backgroundRepeat: 'no-repeat',
            opacity: 0.2,
          }}
          aria-hidden="true"
        />
        {/* Desktop: white on left for text readability, clear on right so image shows */}
        <div
          className="absolute inset-0 hidden lg:block"
          style={{
            background:
              'linear-gradient(to right, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.80) 22%, rgba(255,255,255,0.05) 44%, transparent 58%, transparent 100%)',
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div
            className="max-w-2xl border-l-4 pl-5 md:pl-6"
            style={{ borderColor: 'var(--primary)' }}
          >
            <p
              className="answer-line text-base md:text-lg leading-relaxed"
              style={{ color: '#1AA6B7' }}
            >
              Ebenezer Telehealth provides online women&apos;s health care to
              women across Oklahoma — including birth control, PCOS, menopause,
              and hormonal management — through secure video visits with
              Dr. Susan George, DNP, APRN, who specializes in women&apos;s health.
              Cash-pay visits start at $150.
            </p>
          </div>
        </div>
      </section>

      {/* ── BIRTH CONTROL & CONTRACEPTION ────────────────────────── */}
      <section
        id="birth-control"
        aria-labelledby="birth-control-heading"
        style={{ backgroundColor: 'var(--cream)' }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Text content */}
            <div>
              <h2
                id="birth-control-heading"
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ color: 'var(--navy)' }}
              >
                Online Birth Control Consultations in Oklahoma
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

              {/* Answer-first AEO block */}
              <div
                className="border-l-4 pl-4 mb-7"
                style={{ borderColor: 'var(--primary)' }}
              >
                <p
                  className="text-base md:text-lg font-medium leading-relaxed"
                  style={{ color: '#1AA6B7' }}
                >
                  Yes — you can get birth control online in Oklahoma through
                  Ebenezer Telehealth. We provide contraceptive counseling and
                  prescriptions by secure video, helping you choose the method
                  that fits your health, lifestyle, and goals.
                </p>
              </div>

              <p className="text-base text-gray-600 leading-relaxed">
                We offer comprehensive counseling on all hormonal and
                non-hormonal options. Our goal is to give you clear information
                so you can make confident decisions about your reproductive
                health.
              </p>
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

      {/* ── WHAT WE TREAT ────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white" aria-labelledby="conditions-heading">
        {/* Background image */}
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
          <div className="mb-10 md:mb-14">
            <h2
              id="conditions-heading"
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ color: 'var(--navy)' }}
            >
              Online Women&apos;s Health Care for Every Stage of Life
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
              We provide accessible, evidence-based telemedicine designed to
              support women through every stage of life — with personalized
              treatment, compassionate guidance, and convenient virtual visits
              that fit your schedule, wherever you are in Oklahoma.
            </p>
          </div>

          <div
            className="rounded-2xl p-7 md:p-8 max-w-2xl"
            style={{
              backgroundColor: 'rgba(151,206,204,0.08)',
              border: '1px solid rgba(26,166,183,0.12)',
            }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-5"
              style={{ color: 'var(--primary)' }}
            >
              Common reasons women see us online
            </p>
            <ul className="space-y-4">
              {conditions.map((condition) => (
                <li key={condition} className="flex items-start gap-3">
                  <CheckCircle2
                    className="h-5 w-5 mt-0.5 flex-shrink-0"
                    style={{ color: 'var(--primary)' }}
                    aria-hidden="true"
                  />
                  <span className="text-gray-700 leading-snug">{condition}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── MENOPAUSE MANAGEMENT ─────────────────────────────────── */}
      <section
        id="menopause"
        aria-labelledby="menopause-heading"
        style={{ backgroundColor: 'rgba(151,206,204,0.10)' }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Services card — left on desktop */}
            <div
              className="rounded-2xl p-7 md:p-8 order-2 lg:order-1"
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
                Your personalized plan may include
              </h3>
              <ul className="space-y-3 mb-7">
                {menopauseServices.map((item) => (
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
                className="rounded-xl p-4"
                style={{
                  backgroundColor: 'rgba(26,166,183,0.06)',
                  border: '1px solid rgba(26,166,183,0.12)',
                }}
              >
                <p
                  className="text-sm font-semibold mb-2"
                  style={{ color: 'var(--navy)' }}
                >
                  We commonly help with:
                </p>
                <ul className="space-y-1.5">
                  {menopauseSymptoms.map((symptom) => (
                    <li
                      key={symptom}
                      className="flex items-center gap-2 text-sm text-gray-700"
                    >
                      <span
                        className="h-1.5 w-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: 'var(--primary)' }}
                        aria-hidden="true"
                      />
                      {symptom}
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
                Menopause &amp; Hormone Management — Hormonal and Non-Hormonal
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

              {/* Answer-first AEO block */}
              <div
                className="border-l-4 pl-4 mb-7"
                style={{ borderColor: 'var(--primary)' }}
              >
                <p
                  className="text-base md:text-lg font-medium leading-relaxed"
                  style={{ color: '#1AA6B7' }}
                >
                  Menopause is a natural transition, but the symptoms can
                  disrupt daily life. We provide individualized virtual care
                  to help Oklahoma women manage menopause and perimenopause
                  comfortably — with hormonal or non-hormonal options based on
                  what&apos;s right for you.
                </p>
              </div>

              <p className="text-base text-gray-600 leading-relaxed">
                We evaluate symptoms, review lab results when needed, and build
                a personalized plan. Every recommendation is individualized —
                because no two women experience menopause the same way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PCOS MANAGEMENT ──────────────────────────────────────── */}
      <section
        id="pcos"
        aria-labelledby="pcos-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Text content */}
            <div>
              <h2
                id="pcos-heading"
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ color: 'var(--navy)' }}
              >
                PCOS Treatment &amp; Management Online
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

              {/* Answer-first AEO block */}
              <div
                className="border-l-4 pl-4 mb-7"
                style={{ borderColor: 'var(--primary)' }}
              >
                <p
                  className="text-base md:text-lg font-medium leading-relaxed"
                  style={{ color: '#1AA6B7' }}
                >
                  PCOS affects hormones, metabolism, and reproductive health.
                  Ebenezer Telehealth offers comprehensive virtual PCOS care to
                  Oklahoma women — helping you manage symptoms today and reduce
                  long-term health risks.
                </p>
              </div>

              <p className="text-base text-gray-600 leading-relaxed">
                Because Dr. George is also Board Certified in Advanced Diabetes
                Management (BC-ADM), you get genuine metabolic expertise — not
                a one-size-fits-all script. We build a sustainable,
                individualized plan for both short-term relief and long-term
                health.
              </p>
            </div>

            {/* PCOS services list */}
            <div
              className="rounded-2xl p-7 md:p-8"
              style={{
                backgroundColor: 'rgba(151,206,204,0.08)',
                border: '1px solid rgba(26,166,183,0.12)',
              }}
            >
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-5"
                style={{ color: 'var(--primary)' }}
              >
                Our PCOS services include
              </p>
              <ul className="space-y-4">
                {pcosServices.map((item) => (
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

      {/* ── HOW IT WORKS ─────────────────────────────────────────── */}
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
              How an Online Women&apos;s Health Visit Works
            </h2>
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

      {/* ── PRICING ──────────────────────────────────────────────── */}
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
              Simple, Transparent Pricing
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-xl mx-auto">
              No insurance needed. You&apos;ll always know the cost before you
              book.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Initial Visit Card */}
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
                Women&apos;s Health Initial Visit
              </h3>
              <p className="text-sm text-gray-600 mb-5">
                Comprehensive symptom review, lab orders, lab interpretation,
                and a personalized treatment plan.
              </p>
              <div className="flex items-baseline gap-2 mb-6">
                <span
                  className="text-5xl font-bold"
                  style={{ color: 'var(--primary)' }}
                >
                  $150
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
                className="btn-primary text-base w-full text-center"
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
                Women&apos;s Health Follow-Up Visit
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

          {/* Cash-pay note */}
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
              We currently operate{' '}
              <strong>cash-pay</strong>. Insurance options are coming as we
              expand — we are in the process of becoming credentialed with major
              insurance plans.
            </p>
          </div>
        </div>
      </section>

      {/* ── MEET YOUR PROVIDER ───────────────────────────────────── */}
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
                Meet Dr. Susan George, DNP, APRN
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
                Your women&apos;s health care is led by Dr. Susan George, a
                Doctor of Nursing Practice and Advanced Practice Registered
                Nurse who specializes in women&apos;s health and is Board
                Certified in Advanced Diabetes Management (BC-ADM). She
                delivers compassionate, faith-driven, evidence-based care to
                women across Oklahoma — with the integrity, dignity, and
                personal attention every patient deserves.
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
                  Every woman deserves honest, compassionate care she can
                  actually access — wherever she lives in Oklahoma.
                </p>
                <footer className="mt-3 pl-6">
                  <cite
                    className="text-sm font-semibold not-italic"
                    style={{ color: 'var(--primary)' }}
                  >
                    — Dr. Susan George, DNP, APRN, BC-ADM
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
                  alt="Dr. Susan George, DNP, APRN — Women's Health Doctor at Ebenezer Telehealth, Oklahoma"
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

      {/* ── WHY EBENEZER ─────────────────────────────────────────── */}
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
              Why Oklahoma Women Choose Ebenezer Telehealth
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

          {/* 2-col card grid — 5th card spans full width as a closing statement */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5" role="list">
            {whyPoints.map((point, index) => (
              <li
                key={point.title}
                className={`group flex gap-5 rounded-2xl p-6 md:p-7 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg${index === 4 ? ' sm:col-span-2 sm:max-w-[calc(50%-10px)]' : ''}`}
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
                  {point.description && (
                    <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                      {point.description}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
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
              className="text-3xl md:text-4xl font-bold"
              style={{ color: 'var(--navy)' }}
            >
              Women&apos;s Health Telehealth — FAQs
            </h2>
          </div>

          <WomensHealthFAQAccordion />
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: '#ffffff' }}
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
            Ready to See a Women&apos;s Health Provider Online?
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Compassionate, affordable women&apos;s health care for women across
            Oklahoma — without the wait.
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
            >
              Call (405) 349-8188
            </a>
          </div>

          <p className="mt-10 text-sm text-gray-500">
            Ebenezer Telehealth &middot; Serving women statewide across Oklahoma
            &middot; (405) 349-8188 &middot; ebenezertelehealth.com
          </p>
        </div>
      </section>
    </>
  )
}
