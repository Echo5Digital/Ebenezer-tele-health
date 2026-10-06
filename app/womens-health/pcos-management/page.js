import Link from 'next/link'
import Image from 'next/image'
import {
  Activity, ShieldCheck, Info, CalendarCheck, ClipboardList,
  MessageCircle, Repeat, MonitorSmartphone, Scale,
  MapPin, Phone, Mail,
} from 'lucide-react'
import PcosManagementFAQAccordion from './PcosManagementFAQAccordion'
import Testimonials from '@/components/Testimonials'

export const metadata = {
  title: 'PCOS Management Oklahoma City',
  description:
    'Personalized PCOS management in the Oklahoma City area for menstrual and hormonal concerns, with in-person care and Oklahoma telehealth.',
  alternates: {
    canonical: 'https://www.ebenezerhealthclinic.com/womens-health/pcos-management',
  },
}

// ─── Schema ───────────────────────────────────────────────────────────────────
// One @graph, cross-linked by @id, consistent with other service sub-pages
// (see app/womens-health/birth-control/page.js for the pattern).

const SITE = 'https://www.ebenezerhealthclinic.com'
const PAGE_URL = `${SITE}/womens-health/pcos-management`

const pcosManagementSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalWebPage',
      '@id': `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: 'PCOS Management Oklahoma City | Ebenezer Health Clinic',
      headline: 'PCOS Management in Oklahoma City',
      description:
        'Personalized PCOS management in the Oklahoma City area for menstrual and hormonal concerns, with in-person care and Oklahoma telehealth.',
      isPartOf: { '@id': `${SITE}/womens-health#webpage` },
      about: { '@id': `${PAGE_URL}#service` },
      mainEntity: { '@id': `${PAGE_URL}#service` },
      provider: { '@id': `${SITE}/#organization` },
      areaServed: [
        { '@type': 'City', name: 'Oklahoma City' },
        { '@type': 'City', name: 'Bethany' },
        { '@type': 'State', name: 'Oklahoma' },
      ],
      medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patients' },
    },
    {
      '@type': 'MedicalTherapy',
      '@id': `${PAGE_URL}#service`,
      name: 'PCOS Management',
      description:
        'Personalized management of polycystic ovary syndrome (PCOS), covering menstrual irregularities, hormonal symptoms, and weight-related concerns, based on individual evaluation.',
      provider: { '@id': `${SITE}/#organization` },
      areaServed: { '@type': 'City', name: 'Oklahoma City' },
    },
    {
      '@type': 'FAQPage',
      '@id': `${PAGE_URL}#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is PCOS?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'PCOS stands for polycystic ovary syndrome. It is a condition associated with hormonal and reproductive health concerns that can vary significantly from person to person.',
          },
        },
        {
          '@type': 'Question',
          name: 'What are common PCOS symptoms?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Patients with PCOS may experience concerns such as irregular or absent menstrual cycles, acne, weight changes, increased hair growth, or hair thinning. Symptoms vary, and these concerns can have causes other than PCOS.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can PCOS cause irregular periods?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Menstrual irregularities can occur with PCOS. If you are experiencing irregular, missed, absent, heavy, painful, or otherwise concerning menstrual changes, schedule an evaluation to discuss your symptoms.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does PCOS affect weight?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Some patients with PCOS experience weight-related concerns. Ebenezer Health Clinic can discuss these concerns as part of your overall care, and separate medical weight-loss services are also available for appropriate patients.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you offer ongoing PCOS management?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Ebenezer Health Clinic provides PCOS management and appropriate follow-up based on each patient’s individual needs.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I have a PCOS appointment through telehealth?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Appropriate PCOS consultations and follow-up visits may be available through telehealth throughout Oklahoma. Some concerns may require an in-person evaluation.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need to complete a questionnaire?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We recommend completing the Women’s Health Questionnaire before your visit. It provides your healthcare provider with relevant information about your medical history, menstrual and reproductive health, medications, symptoms, lifestyle, and other concerns.',
          },
        },
        {
          '@type': 'Question',
          name: 'What happens after my initial PCOS consultation?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Your next steps depend on your individual evaluation and healthcare needs. Your provider can discuss an appropriate management and follow-up plan with you.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: "Women's Health", item: `${SITE}/womens-health` },
        { '@type': 'ListItem', position: 3, name: 'PCOS Management', item: PAGE_URL },
      ],
    },
  ],
}

const commonConcerns = [
  'Irregular menstrual cycles',
  'Missed or absent periods',
  'Heavy or painful menstrual cycles',
  'Weight changes',
  'Acne',
  'Unwanted or increased hair growth',
  'Hair thinning',
  'Hormonal concerns',
]

const hormonalSymptomTopics = [
  'Acne',
  'Mood changes',
  'Weight gain',
  'Hair or skin thinning',
  'Abnormal or increased hair growth',
  'Heavy or painful menstrual cycles',
  'Absent menstrual cycles',
]

const questionnaireTopics = [
  'Medical history',
  'Current medications and supplements',
  'Menstrual history',
  'Menstrual cycle regularity',
  'Pregnancy and reproductive history',
  'Birth control history',
  'Hormone-related symptoms',
  'Lifestyle information',
  'Family health history',
  'Additional women’s health concerns',
]

const consultationSteps = [
  {
    icon: CalendarCheck,
    step: '1',
    title: 'Schedule Your Appointment',
    desc: 'Book a PCOS or women’s health consultation with Ebenezer Health Clinic.',
  },
  {
    icon: ClipboardList,
    step: '2',
    title: "Complete Your Women’s Health Questionnaire",
    desc: 'Covers your medical history, medications, menstrual history, reproductive history, hormone-related symptoms, and lifestyle information.',
  },
  {
    icon: MessageCircle,
    step: '3',
    title: 'Discuss Your Symptoms & Concerns',
    desc: 'Your provider will discuss the symptoms or changes that brought you in for care and review relevant health information.',
  },
  {
    icon: ShieldCheck,
    step: '4',
    title: 'Develop an Individualized Management Approach',
    desc: 'Based on your individual evaluation, your provider can discuss appropriate next steps and an ongoing management approach.',
  },
]

const whyChoosePoints = [
  {
    title: 'Individualized Care',
    description: 'PCOS symptoms and concerns vary. Your care begins with understanding your individual health history and needs.',
  },
  {
    title: 'Ongoing Support',
    description: 'PCOS management can involve continued follow-up as your symptoms and healthcare needs change.',
  },
  {
    title: 'Broader Women’s Health Services',
    description: 'Patients can also access care for menstrual irregularities, birth control, menopause, Pap smears, and STD testing and management.',
  },
  {
    title: 'Weight Management Support',
    description: 'For patients with separate weight-management needs, Ebenezer Health Clinic also offers a medically guided weight-loss program.',
  },
  {
    title: 'Convenient Access',
    description: 'In-person care is available in the Oklahoma City area, with telehealth throughout Oklahoma for appropriate services.',
  },
]

const providerCredentials = [
  'Doctor of Nursing Practice (DNP)',
  'Advanced Practice Registered Nurse (APRN)',
  'Board Certified in Advanced Diabetes Management (BC-ADM)',
  "Women's health care",
  'In-person care in the Oklahoma City area',
  'Telehealth throughout Oklahoma for appropriate services',
]

export default function PcosManagementPage() {
  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pcosManagementSchema) }}
      />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden -mt-[112px] sm:-mt-[128px] lg:-mt-[144px] pt-[112px] sm:pt-[128px] lg:pt-[144px]"
      >
        <Image
          src="/Womens-health-pcos-management.webp"
          alt="PCOS management consultation at Ebenezer Health Clinic in Oklahoma City"
          fill
          priority
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, rgba(255,255,255,0.94) 0%, rgba(255,255,255,0.80) 48%, rgba(26,166,183,0.30) 100%)',
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
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
              <Link href="/womens-health" className="hover:text-primary transition-colors">
                Women&apos;s Health
              </Link>
              <span aria-hidden="true">/</span>
              <span style={{ color: 'var(--primary)' }}>PCOS Management</span>
            </nav>

            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--primary)' }}
            >
              Women&apos;s Health &middot; PCOS Management &middot; Oklahoma City
            </span>

            <h1
              className="text-4xl md:text-5xl font-bold mb-5 leading-tight"
              style={{ color: 'var(--navy)' }}
            >
              PCOS Management in Oklahoma City
            </h1>

            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4 max-w-2xl">
              Polycystic ovary syndrome (PCOS) can affect menstrual health and may be
              associated with a range of hormonal and reproductive concerns. Because symptoms
              and healthcare needs can vary from person to person, individualized evaluation
              and ongoing management are important.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4 max-w-2xl">
              At Ebenezer Health Clinic, we provide{' '}
              <strong style={{ color: 'var(--navy)' }}>
                personalized PCOS management in the Oklahoma City area
              </strong>
              , with telehealth available throughout Oklahoma for appropriate visits.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl">
              Our goal is to understand your symptoms, health history, and individual
              concerns so we can develop an appropriate care plan with you.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto text-center"
              >
                Schedule a PCOS Consultation
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

      {/* ── PERSONALIZED PCOS CARE ──────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        aria-labelledby="personalized-care-heading"
      >
        <Image
          src="/answer_block.webp"
          alt="Soft clinic-blue background for the personalized PCOS care section"
          fill
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(255,255,255,0.85)' }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-3xl">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--primary)' }}
            >
              Our Approach
            </span>
            <h2
              id="personalized-care-heading"
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ color: 'var(--navy)' }}
            >
              Personalized PCOS Care
            </h2>
            <div className="flex items-center gap-2 mb-6" aria-hidden="true">
              <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
              <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
              <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
            </div>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
              PCOS does not look the same for every patient. Some patients may seek care
              because of menstrual changes, while others may have concerns about weight
              changes, acne, unwanted hair growth, hair thinning, or other symptoms.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
              At Ebenezer Health Clinic, PCOS management begins with understanding your
              individual health history and concerns rather than taking a one-size-fits-all
              approach.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Your provider can review relevant symptoms and health information and discuss
              an individualized approach to ongoing management.
            </p>
          </div>
        </div>
      </section>

      {/* ── COMMON CONCERNS ASSOCIATED WITH PCOS ────────────────────── */}
      <section className="bg-white" aria-labelledby="concerns-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span
                className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: 'var(--primary)' }}
              >
                Symptoms &amp; Concerns
              </span>
              <h2
                id="concerns-heading"
                className="text-3xl md:text-4xl font-bold mb-3"
                style={{ color: 'var(--navy)' }}
              >
                Common Concerns Associated With PCOS
              </h2>
              <div className="flex items-center gap-2 mb-6" aria-hidden="true">
                <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
                <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
                <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
              </div>
              <p className="text-base text-gray-600 leading-relaxed mb-4">
                Patients with PCOS can experience different combinations of symptoms and
                concerns.
              </p>
              <p className="text-base text-gray-600 leading-relaxed mb-6">
                Not everyone with PCOS experiences the same symptoms, and having one or more
                of these concerns does not necessarily mean you have PCOS. A clinical
                evaluation is important when determining the appropriate next steps.
              </p>
              <Link
                href="/contact"
                className="btn-primary text-base px-7 py-3.5 inline-block"
              >
                Talk to a Provider About Your Symptoms
              </Link>
            </div>

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
                These may include
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                {commonConcerns.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Activity
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
        </div>
      </section>

      {/* ── PCOS & IRREGULAR PERIODS ─────────────────────────────────── */}
      <section
        aria-labelledby="irregular-periods-heading"
        style={{ backgroundColor: 'var(--cream)' }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-3xl">
            <h2
              id="irregular-periods-heading"
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: 'var(--navy)' }}
            >
              PCOS &amp; Irregular Periods
            </h2>
            <div className="flex items-center gap-2 mb-6" aria-hidden="true">
              <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
              <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
              <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
            </div>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
              Menstrual irregularities are a common reason patients seek women&apos;s health
              care. If your periods have become irregular, frequently missed, absent,
              unusually heavy, or otherwise different from your normal cycle, discussing
              these changes with a healthcare provider can help determine what evaluation or
              management may be appropriate.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6">
              For patients with PCOS, understanding menstrual patterns can also be an
              important part of ongoing care. At Ebenezer Health Clinic, we consider your
              menstrual and reproductive history as part of your overall women&apos;s health
              evaluation.
            </p>
            <Link
              href="/contact"
              className="btn-outline text-base px-7 py-3.5 inline-block"
            >
              Schedule a Women&apos;s Health Visit
            </Link>
          </div>
        </div>
      </section>

      {/* ── PCOS & HORMONAL SYMPTOMS ─────────────────────────────────── */}
      <section className="bg-white" aria-labelledby="hormonal-symptoms-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h2
                id="hormonal-symptoms-heading"
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ color: 'var(--navy)' }}
              >
                PCOS &amp; Hormonal Symptoms
              </h2>
              <div className="flex items-center gap-2 mb-6" aria-hidden="true">
                <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
                <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
                <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
              </div>
              <p className="text-base text-gray-600 leading-relaxed mb-4">
                PCOS may be associated with symptoms that patients describe as hormonal
                changes.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                Discussing the symptoms you are experiencing helps your provider better
                understand your individual concerns and determine appropriate next steps.
              </p>
            </div>

            <div
              className="rounded-2xl p-7 md:p-8"
              style={{
                background: 'linear-gradient(135deg, rgba(26,166,183,0.06) 0%, rgba(151,206,204,0.18) 100%)',
                border: '1px solid rgba(26,166,183,0.20)',
              }}
            >
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-5"
                style={{ color: 'var(--primary)' }}
              >
                Our Women&apos;s Health Questionnaire asks about concerns such as
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                {hormonalSymptomTopics.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <ShieldCheck
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
        </div>
      </section>

      {/* ── PCOS & WEIGHT CONCERNS ───────────────────────────────────── */}
      <section aria-labelledby="weight-heading" style={{ backgroundColor: 'rgba(151,206,204,0.10)' }}>
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
              <Scale className="h-7 w-7" style={{ color: 'var(--primary)' }} />
            </div>
            <div className="flex-1">
              <h2
                id="weight-heading"
                className="text-2xl md:text-3xl font-bold mb-2"
                style={{ color: 'var(--navy)' }}
              >
                PCOS &amp; Weight Concerns
              </h2>
              <p className="text-base text-gray-600 leading-relaxed mb-1">
                Some patients seeking PCOS management may also have concerns about their
                weight. At Ebenezer Health Clinic, weight-related concerns can be discussed
                as part of your overall health evaluation. When appropriate, patients
                interested in additional weight-management support can also learn about our
                separate <strong style={{ color: 'var(--navy)' }}>Medical Weight Loss</strong>{' '}
                services.
              </p>
              <p className="text-base text-gray-600 leading-relaxed mb-4">
                PCOS management and medical weight loss are separate services, and any
                recommendations should be based on your individual health needs and clinical
                evaluation.
              </p>
              <Link
                href="/medical-weight-loss"
                className="text-sm font-semibold underline"
                style={{ color: 'var(--primary)' }}
              >
                Learn About Medical Weight Loss →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT TO EXPECT DURING YOUR PCOS VISIT ───────────────────── */}
      <section
        className="relative overflow-hidden bg-white"
        aria-labelledby="what-to-expect-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-3xl mb-10 md:mb-14">
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
              What to Expect During Your PCOS Visit
            </h2>
            <div className="flex items-center gap-2" aria-hidden="true">
              <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
              <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
              <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 items-stretch">
            {consultationSteps.map(({ icon: Icon, step, title, desc }) => (
              <div
                key={step}
                className="rounded-2xl p-6 flex flex-col h-full"
                style={{
                  backgroundColor: 'rgba(151,206,204,0.08)',
                  border: '1px solid rgba(26,166,183,0.12)',
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

          {/* Questionnaire topics */}
          <div
            className="rounded-2xl p-7 md:p-8 mb-10"
            style={{
              backgroundColor: 'rgba(151,206,204,0.08)',
              border: '1px solid rgba(26,166,183,0.12)',
            }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-5"
              style={{ color: 'var(--primary)' }}
            >
              The questionnaire covers areas including
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
              {questionnaireTopics.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <ShieldCheck
                    className="h-5 w-5 mt-0.5 flex-shrink-0"
                    style={{ color: 'var(--primary)' }}
                    aria-hidden="true"
                  />
                  <span className="text-gray-700 leading-snug text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-600 leading-relaxed mt-6">
              If needed, our team can help you complete the questionnaire during your initial
              intake or free consultation call.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-stretch gap-3">
            <Link
              href="/contact"
              className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto flex items-center justify-center text-center"
            >
              Schedule Your Appointment
            </Link>
            <Link
              href="/contact"
              className="btn-outline text-base px-7 py-3.5 w-full sm:w-auto flex items-center justify-center text-center"
            >
              Complete Women&apos;s Health Questionnaire
            </Link>
          </div>
        </div>
      </section>

      {/* ── ONGOING PCOS MANAGEMENT ──────────────────────────────────── */}
      <section aria-labelledby="ongoing-heading" style={{ backgroundColor: 'var(--cream)' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="flex flex-col md:flex-row items-start gap-6 md:gap-10 max-w-4xl">
            <div
              className="flex-shrink-0 h-14 w-14 rounded-full flex items-center justify-center"
              style={{ backgroundColor: 'rgba(26,166,183,0.10)' }}
              aria-hidden="true"
            >
              <Repeat className="h-7 w-7" style={{ color: 'var(--primary)' }} />
            </div>
            <div>
              <h2
                id="ongoing-heading"
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ color: 'var(--navy)' }}
              >
                Ongoing PCOS Management
              </h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
                PCOS management may require ongoing follow-up rather than a single
                appointment. Your care needs can change over time, particularly if your
                symptoms, menstrual patterns, medications, reproductive goals, or other
                health concerns change.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Follow-up visits give you an opportunity to discuss your progress, raise new
                concerns, and review your care plan with your provider. The specific
                frequency and type of follow-up will depend on your individual healthcare
                needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── IN-PERSON & TELEHEALTH PCOS CARE ─────────────────────────── */}
      <section className="bg-white" aria-labelledby="telehealth-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div
            className="rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10"
            style={{
              backgroundColor: 'rgba(151,206,204,0.08)',
              border: '1px solid rgba(26,166,183,0.12)',
            }}
          >
            <div
              className="flex-shrink-0 h-14 w-14 rounded-full flex items-center justify-center"
              style={{ backgroundColor: 'rgba(26,166,183,0.14)' }}
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
                In-Person &amp; Telehealth PCOS Care
              </h2>
              <p className="text-base text-gray-600 leading-relaxed">
                Ebenezer Health Clinic provides women&apos;s health care from our Bethany
                location serving the Oklahoma City area. Appropriate PCOS consultations and
                follow-up appointments may also be available through{' '}
                <strong style={{ color: 'var(--navy)' }}>
                  secure telehealth throughout Oklahoma
                </strong>
                , making ongoing care more accessible for patients who do not live near the
                clinic. Some concerns may require an in-person evaluation. Our team can help
                you determine the appropriate appointment type when scheduling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE EBENEZER HEALTH CLINIC ────────────────────────── */}
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
          <div className="mb-10 md:mb-14 max-w-2xl">
            <h2
              id="why-heading"
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ color: 'var(--navy)' }}
            >
              Why Choose Ebenezer Health Clinic for PCOS Management?
            </h2>
            <div className="flex items-center gap-2" aria-hidden="true">
              <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
              <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
              <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
            </div>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 mb-10" role="list">
            {whyChoosePoints.map((point, index) => (
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
                <div
                  className="flex-shrink-0 h-11 w-11 rounded-xl flex items-center justify-center text-sm font-bold"
                  style={{ backgroundColor: 'rgba(26,166,183,0.10)', color: 'var(--primary)' }}
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="min-w-0">
                  <p className="font-semibold leading-snug" style={{ color: 'var(--navy)' }}>
                    {point.title}
                  </p>
                  <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className="text-center">
            <Link href="/womens-health" className="btn-outline text-base px-7 py-3.5">
              Explore Our Women&apos;s Health Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── MEET DR. SUSAN GEORGE ───────────────────────────────────── */}
      <section className="bg-white" aria-labelledby="provider-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h2
                id="provider-heading"
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ color: 'var(--navy)' }}
              >
                Meet Dr. Susan George, DNP, APRN, BC-ADM
              </h2>
              <div className="flex items-center gap-2 mb-6" aria-hidden="true">
                <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
                <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
                <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
              </div>
              <p className="text-base text-gray-600 leading-relaxed mb-4">
                Women&apos;s health care at Ebenezer Health Clinic is led by{' '}
                <strong>Dr. Susan George, DNP, APRN, BC-ADM</strong>.
              </p>
              <p className="text-base text-gray-600 leading-relaxed mb-8">
                Dr. George provides individualized care with an emphasis on understanding each
                patient&apos;s health history, symptoms, concerns, and goals.
              </p>

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
                      <ShieldCheck
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
                  alt="Dr. Susan George, DNP, APRN — Women's Health Provider at Ebenezer Health Clinic, Oklahoma"
                  width={520}
                  height={620}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS (same component as home / womens-health page) ── */}
      <Testimonials />

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        aria-labelledby="faq-heading"
      >
        <Image
          src="/body_bg.webp"
          alt="Light teal background pattern for the PCOS management frequently asked questions"
          fill
          className="object-cover"
        />
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
              PCOS FAQs
            </h2>
          </div>

          <PcosManagementFAQAccordion />
        </div>
      </section>

      {/* ── VISIT EBENEZER HEALTH CLINIC ─────────────────────────────── */}
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
                <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
                <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
                <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
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
                    <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--primary)' }} aria-hidden="true" />
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
                    <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--primary)' }} aria-hidden="true" />
                    <div>
                      <p className="font-semibold" style={{ color: 'var(--navy)' }}>Phone</p>
                      <a
                        href="tel:+14053498188"
                        className="text-sm text-gray-600 mt-0.5 hover:text-primary transition-colors"
                      >
                        (405) 349-8188
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--primary)' }} aria-hidden="true" />
                    <div>
                      <p className="font-semibold" style={{ color: 'var(--navy)' }}>Email</p>
                      <a
                        href="mailto:ebenezerhealth@outlook.com"
                        className="text-sm text-gray-600 mt-0.5 hover:text-primary transition-colors break-all"
                      >
                        ebenezerhealth@outlook.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <ShieldCheck className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--primary)' }} aria-hidden="true" />
                    <div>
                      <p className="font-semibold" style={{ color: 'var(--navy)' }}>In-Person Care</p>
                      <p className="text-sm text-gray-600 mt-0.5">Oklahoma City area</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <ShieldCheck className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--primary)' }} aria-hidden="true" />
                    <div>
                      <p className="font-semibold" style={{ color: 'var(--navy)' }}>Telehealth</p>
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
                src="https://www.google.com/maps?q=Ebenezer+Health+Clinic,+7415+NW+23rd+Street,+Bethany,+OK+73008&t=k&output=embed"
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

      {/* ── PCOS MANAGEMENT IN THE OKC AREA ──────────────────────────── */}
      <section aria-labelledby="serving-heading" style={{ backgroundColor: 'rgba(151,206,204,0.10)' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-3xl">
            <h2
              id="serving-heading"
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: 'var(--navy)' }}
            >
              PCOS Management in the Oklahoma City Area
            </h2>
            <div className="flex items-center gap-2 mb-6" aria-hidden="true">
              <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
              <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
              <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
            </div>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
              Ebenezer Health Clinic provides personalized PCOS management from our Bethany
              location, conveniently serving women in Oklahoma City and surrounding
              communities.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
              Appropriate consultations and follow-up care may also be available through
              telehealth for patients throughout Oklahoma.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              If you are experiencing menstrual changes or other concerns that may be
              associated with PCOS, schedule a consultation to discuss your symptoms and next
              steps.
            </p>
          </div>
        </div>
      </section>

      {/* ── RELATED / INTERNAL LINKS ─────────────────────────────────── */}
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
                Related Women&apos;s Health Services
              </h2>
            </div>
            <nav
              className="flex flex-wrap items-center gap-x-2 gap-y-2 text-sm font-semibold"
              aria-label="Related women's health links"
              style={{ color: 'var(--primary)' }}
            >
              <Link href="/womens-health" className="hover:opacity-80">Women&apos;s Health</Link>
              <span aria-hidden="true" className="text-gray-300">|</span>
              <Link href="/womens-health#menstrual-irregularities" className="hover:opacity-80">Menstrual Irregularities</Link>
              <span aria-hidden="true" className="text-gray-300">|</span>
              <Link href="/womens-health/birth-control" className="hover:opacity-80">Birth Control</Link>
              <span aria-hidden="true" className="text-gray-300">|</span>
              <Link href="/medical-weight-loss" className="hover:opacity-80">Medical Weight Loss</Link>
              <span aria-hidden="true" className="text-gray-300">|</span>
              <Link href="/contact" className="hover:opacity-80">Book / Contact</Link>
            </nav>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: 'var(--cream)' }}
        aria-labelledby="final-cta-heading"
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
            id="final-cta-heading"
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: 'var(--primary)' }}
          >
            Schedule Your PCOS Consultation
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            If you have PCOS or are experiencing symptoms or menstrual changes that concern
            you, our team is here to help you take the next step. Schedule a consultation
            with Ebenezer Health Clinic for individualized women&apos;s health care and
            ongoing PCOS management.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="btn-primary text-base px-8 py-3.5 w-full sm:w-auto"
            >
              Schedule a PCOS Consultation
            </Link>
            <Link
              href="/contact"
              className="btn-outline text-base px-8 py-3.5 w-full sm:w-auto"
            >
              Complete Women&apos;s Health Questionnaire
            </Link>
          </div>
          <div className="mt-5">
            <a
              href="tel:+14053498188"
              className="inline-flex items-center justify-center gap-2 text-gray-700 hover:text-primary font-semibold text-base transition-colors"
            >
              Call (405) 349-8188
            </a>
          </div>

          <p className="mt-10 text-sm text-gray-500">
            Ebenezer Health Clinic &middot; PCOS Management Oklahoma City &middot; Telehealth statewide
            &middot; (405) 349-8188 &middot; ebenezerhealthclinic.com
          </p>
        </div>
      </section>
    </>
  )
}
