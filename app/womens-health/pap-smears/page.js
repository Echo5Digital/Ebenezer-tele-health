import Link from 'next/link'
import Image from 'next/image'
import {
  ClipboardCheck, ShieldCheck, Info, CalendarCheck, ClipboardList,
  MessageCircle, Stethoscope, Repeat, Building2,
  MapPin, Phone, Mail,
} from 'lucide-react'
import PapSmearsFAQAccordion from './PapSmearsFAQAccordion'
import Testimonials from '@/components/Testimonials'

export const metadata = {
  title: 'Pap Smear Oklahoma City',
  description:
    'Schedule a Pap smear in the Oklahoma City area at Ebenezer Health Clinic. Personalized women’s health screening and care from our Bethany location.',
  alternates: {
    canonical: 'https://www.ebenezerhealthclinic.com/womens-health/pap-smears',
  },
}

// ─── Schema ───────────────────────────────────────────────────────────────────
// One @graph, cross-linked by @id, consistent with other service sub-pages
// (see app/womens-health/menopause-care/page.js for the pattern).

const SITE = 'https://www.ebenezerhealthclinic.com'
const PAGE_URL = `${SITE}/womens-health/pap-smears`

const papSmearsSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalWebPage',
      '@id': `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: 'Pap Smear Oklahoma City | Ebenezer Health Clinic',
      headline: 'Pap Smears in Oklahoma City',
      description:
        'Schedule a Pap smear in the Oklahoma City area at Ebenezer Health Clinic. Personalized women’s health screening and care from our Bethany location.',
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
      '@type': 'MedicalProcedure',
      '@id': `${PAGE_URL}#service`,
      name: 'Pap Smear',
      procedureType: 'https://schema.org/NoninvasiveProcedure',
      description:
        'A cervical screening procedure in which cells are collected from the cervix for evaluation, performed in person as part of personalized women’s health care.',
      bodyLocation: 'Cervix',
      provider: { '@id': `${SITE}/#organization` },
      areaServed: { '@type': 'City', name: 'Oklahoma City' },
    },
    {
      '@type': 'FAQPage',
      '@id': `${PAGE_URL}#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Does Ebenezer Health Clinic provide Pap smears?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Pap smears are available as part of Ebenezer Health Clinic’s women’s health services in the Oklahoma City area.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is a Pap smear?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A Pap smear is a cervical screening procedure in which cells are collected from the cervix for evaluation.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I know if I am due for a Pap smear?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Individual screening needs can vary. If you are unsure when your last Pap smear was or whether you are due for screening, schedule a consultation to review your history and appropriate next steps.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I get a Pap smear through telehealth?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. A Pap smear requires an in-person procedure. Appointments are available at our Bethany location serving the Oklahoma City area.',
          },
        },
        {
          '@type': 'Question',
          name: 'What information should I provide before my appointment?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Your medical history, medications, menstrual and reproductive history, birth control history, sexual health information, and previous Pap smear information may be relevant to your visit.',
          },
        },
        {
          '@type': 'Question',
          name: 'What if I have other women’s health concerns?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Let your provider know about any additional concerns. Ebenezer Health Clinic also provides birth control care, PCOS management, care for menstrual irregularities, menopause care, and STD testing and management.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need to complete the Women’s Health Questionnaire?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We recommend completing the questionnaire before your appointment. It provides relevant information about your medical and women’s health history and asks when you had your last Pap smear.',
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
        { '@type': 'ListItem', position: 3, name: 'Pap Smears', item: PAGE_URL },
      ],
    },
  ],
}

const questionnaireTopics = [
  'Medical history',
  'Current medications and supplements',
  'Allergies',
  'Menstrual history',
  'Last menstrual period',
  'Pregnancy and reproductive history',
  'Birth control history',
  'Sexual health history',
  'Previous STI history and screening',
  'Date of your last Pap smear',
  'Other women’s health concerns',
]

const consultationSteps = [
  {
    icon: CalendarCheck,
    step: '1',
    title: 'Schedule Your Appointment',
    desc: 'Book an in-person women’s health appointment at Ebenezer Health Clinic.',
  },
  {
    icon: ClipboardList,
    step: '2',
    title: "Complete Your Women’s Health Questionnaire",
    desc: 'Complete the questionnaire before your appointment so your provider has relevant information about your health history.',
  },
  {
    icon: MessageCircle,
    step: '3',
    title: 'Review Your Health & Screening History',
    desc: 'Discuss your health history, menstrual and reproductive information, and previous Pap smear history.',
  },
  {
    icon: Stethoscope,
    step: '4',
    title: 'Complete Your Pap Smear',
    desc: 'The Pap smear is performed during your in-person appointment.',
  },
  {
    icon: ClipboardCheck,
    step: '5',
    title: 'Discuss Appropriate Follow-Up',
    desc: 'Your provider will discuss appropriate next steps based on your individual screening and healthcare needs.',
  },
]

const relatedServices = [
  'Birth control',
  'PCOS management',
  'Menstrual irregularities',
  'Menopause care',
  'STD testing and management',
]

const whyChoosePoints = [
  {
    title: 'Personalized Care',
    description: 'Your screening care is considered in the context of your individual health history and needs.',
  },
  {
    title: 'Convenient Oklahoma City Area Location',
    description: 'Pap smears are available at our Bethany clinic serving Oklahoma City and surrounding communities.',
  },
  {
    title: 'Broader Women’s Health Services',
    description: 'Patients can access Pap smears alongside other women’s health services, including birth control, PCOS management, menstrual care, menopause care, and STD testing and management.',
  },
  {
    title: 'Clear Follow-Up',
    description: 'Your provider can discuss appropriate next steps based on your individual screening and healthcare needs.',
  },
  {
    title: 'Telehealth for Appropriate Services',
    description: 'Although Pap smears must be completed in person, appropriate women’s health consultations and follow-up care may be available through telehealth throughout Oklahoma.',
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

export default function PapSmearsPage() {
  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(papSmearsSchema) }}
      />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden -mt-[112px] sm:-mt-[128px] lg:-mt-[144px] pt-[112px] sm:pt-[128px] lg:pt-[144px]"
      >
        <Image
          src="/womens-health-pap-smears.png"
          alt="Pap smear women's health screening at Ebenezer Health Clinic in Oklahoma City"
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
              <span style={{ color: 'var(--primary)' }}>Pap Smears</span>
            </nav>

            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--primary)' }}
            >
              Women&apos;s Health &middot; Pap Smears &middot; Oklahoma City
            </span>

            <h1
              className="text-4xl md:text-5xl font-bold mb-5 leading-tight"
              style={{ color: 'var(--navy)' }}
            >
              Pap Smears in Oklahoma City
            </h1>

            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4 max-w-2xl">
              Routine women&apos;s health screening is an important part of staying informed
              about your health. At Ebenezer Health Clinic, we provide{' '}
              <strong style={{ color: 'var(--navy)' }}>
                Pap smears in the Oklahoma City area
              </strong>{' '}
              as part of our women&apos;s health services.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl">
              Whether you are due for a Pap smear or are unsure when your last screening was,
              our team can help you discuss your screening history and appropriate next
              steps.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto text-center"
              >
                Schedule a Pap Smear
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

      {/* ── PAP SMEARS & WOMEN'S HEALTH SCREENING ───────────────────── */}
      <section
        className="relative overflow-hidden"
        aria-labelledby="screening-heading"
      >
        <Image
          src="/answer_block.webp"
          alt="Soft clinic-blue background for the Pap smears and women's health screening section"
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
              id="screening-heading"
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ color: 'var(--navy)' }}
            >
              Pap Smears &amp; Women&apos;s Health Screening
            </h2>
            <div className="flex items-center gap-2 mb-6" aria-hidden="true">
              <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
              <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
              <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
            </div>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
              Ebenezer Health Clinic provides Pap smears as part of our personalized approach
              to women&apos;s health care.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
              Before your visit, we gather relevant information about your medical,
              menstrual, reproductive, and screening history. Our Women&apos;s Health
              Questionnaire also asks when you had your last Pap smear.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Your provider can review this information with you and discuss appropriate care
              based on your individual health history and needs.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHAT IS A PAP SMEAR ──────────────────────────────────────── */}
      <section className="bg-white" aria-labelledby="what-is-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-3xl">
            <h2
              id="what-is-heading"
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: 'var(--navy)' }}
            >
              What Is a Pap Smear?
            </h2>
            <div className="flex items-center gap-2 mb-6" aria-hidden="true">
              <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
              <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
              <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
            </div>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
              A Pap smear is a cervical screening procedure in which cells are collected from
              the cervix for evaluation.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
              The purpose of screening is to identify cervical cell changes that may require
              further evaluation or follow-up.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Your individual screening needs and timing should be discussed with your
              healthcare provider based on your health history and other relevant factors.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHEN SHOULD I SCHEDULE A PAP SMEAR ──────────────────────── */}
      <section aria-labelledby="when-heading" style={{ backgroundColor: 'var(--cream)' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-3xl">
            <h2
              id="when-heading"
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: 'var(--navy)' }}
            >
              When Should I Schedule a Pap Smear?
            </h2>
            <div className="flex items-center gap-2 mb-6" aria-hidden="true">
              <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
              <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
              <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
            </div>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
              Screening needs can differ between patients.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6">
              If you believe you are due for cervical screening, cannot remember when you
              last had a Pap smear, or have questions about your screening history, schedule
              a women&apos;s health appointment. During your visit, your provider can review
              relevant health information and discuss the appropriate next steps for you.
            </p>
            <Link
              href="/contact"
              className="btn-primary text-base px-7 py-3.5 inline-block"
            >
              Schedule Your Women&apos;s Health Visit
            </Link>
          </div>
        </div>
      </section>

      {/* ── PREPARING FOR YOUR PAP SMEAR APPOINTMENT ─────────────────── */}
      <section className="bg-white" aria-labelledby="preparing-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h2
                id="preparing-heading"
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ color: 'var(--navy)' }}
              >
                Preparing for Your Pap Smear Appointment
              </h2>
              <div className="flex items-center gap-2 mb-6" aria-hidden="true">
                <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
                <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
                <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
              </div>
              <p className="text-base text-gray-600 leading-relaxed mb-4">
                Before your appointment, you will have an opportunity to provide information
                about your health and women&apos;s health history.
              </p>
              <p className="text-base text-gray-600 leading-relaxed mb-6">
                Providing accurate information helps your provider better understand your
                individual healthcare needs.
              </p>
              <Link
                href="/contact"
                className="btn-primary text-base px-7 py-3.5 inline-block"
              >
                Complete Women&apos;s Health Questionnaire
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
                Our Women&apos;s Health Questionnaire includes information such as
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
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
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT TO EXPECT AT YOUR PAP SMEAR VISIT ──────────────────── */}
      <section
        className="relative overflow-hidden"
        aria-labelledby="what-to-expect-heading"
        style={{ backgroundColor: 'var(--cream)' }}
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
              What to Expect at Your Pap Smear Visit
            </h2>
            <div className="flex items-center gap-2" aria-hidden="true">
              <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
              <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
              <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-10 items-stretch">
            {consultationSteps.map(({ icon: Icon, step, title, desc }) => (
              <div
                key={step}
                className="rounded-2xl p-6 flex flex-col h-full"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.80)',
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

          <div className="flex flex-col sm:flex-row sm:items-stretch gap-3">
            <Link
              href="/contact"
              className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto flex items-center justify-center text-center"
            >
              Schedule a Pap Smear
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

      {/* ── PAP SMEARS REQUIRE AN IN-PERSON APPOINTMENT ─────────────── */}
      <section className="bg-white" aria-labelledby="in-person-heading">
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
              <Building2 className="h-7 w-7" style={{ color: 'var(--primary)' }} />
            </div>
            <div className="flex-1">
              <h2
                id="in-person-heading"
                className="text-2xl md:text-3xl font-bold mb-2"
                style={{ color: 'var(--navy)' }}
              >
                Pap Smears Require an In-Person Appointment
              </h2>
              <p className="text-base text-gray-600 leading-relaxed mb-1">
                Pap smears require a physical procedure and therefore{' '}
                <strong style={{ color: 'var(--navy)' }}>cannot be completed through telehealth</strong>.
              </p>
              <p className="text-base text-gray-600 leading-relaxed mb-4">
                Pap smear appointments are available in person at Ebenezer Health
                Clinic&apos;s Bethany location serving Oklahoma City and surrounding
                communities. Telehealth may still be available for other appropriate
                women&apos;s health consultations and follow-up care throughout Oklahoma.
              </p>
              <Link
                href="/contact"
                className="btn-primary text-sm px-6 py-3 inline-flex items-center gap-1.5"
              >
                Schedule an In-Person Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── PAP SMEARS AS PART OF YOUR WOMEN'S HEALTH CARE ──────────── */}
      <section aria-labelledby="broader-care-heading" style={{ backgroundColor: 'rgba(151,206,204,0.10)' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h2
                id="broader-care-heading"
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ color: 'var(--navy)' }}
              >
                Pap Smears as Part of Your Women&apos;s Health Care
              </h2>
              <div className="flex items-center gap-2 mb-6" aria-hidden="true">
                <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
                <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
                <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
              </div>
              <p className="text-base text-gray-600 leading-relaxed mb-4">
                Women&apos;s health needs often extend beyond a single screening.
              </p>
              <p className="text-base text-gray-600 leading-relaxed mb-6">
                If you have another women&apos;s health concern in addition to needing a Pap
                smear, let our team know when scheduling your appointment.
              </p>
              <Link
                href="/womens-health"
                className="btn-primary text-base px-7 py-3.5 inline-block"
              >
                Explore Women&apos;s Health Services
              </Link>
            </div>

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
                Patients can also access services including
              </p>
              <ul className="space-y-4">
                {relatedServices.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <ShieldCheck
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
              Why Choose Ebenezer Health Clinic for Women&apos;s Health Screening?
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

          {/* Strongest related link: main Women's Health page */}
          <div className="text-center">
            <Link href="/womens-health" className="btn-primary text-base px-8 py-3.5">
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
                patient&apos;s health history, concerns, and healthcare needs.
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
          alt="Light teal background pattern for the Pap smear frequently asked questions"
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
              Pap Smear FAQs
            </h2>
          </div>

          <PapSmearsFAQAccordion />
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

      {/* ── PAP SMEARS IN THE OKC AREA ───────────────────────────────── */}
      <section aria-labelledby="serving-heading" style={{ backgroundColor: 'rgba(151,206,204,0.10)' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-3xl">
            <h2
              id="serving-heading"
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: 'var(--navy)' }}
            >
              Pap Smears in the Oklahoma City Area
            </h2>
            <div className="flex items-center gap-2 mb-6" aria-hidden="true">
              <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
              <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
              <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
            </div>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Ebenezer Health Clinic provides Pap smears from our Bethany location,
              conveniently serving women in Oklahoma City and surrounding communities. If you
              are due for a Pap smear, cannot remember when you were last screened, or want
              to discuss your screening history, schedule an in-person appointment with our
              team.
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
              <Link href="/womens-health" className="hover:opacity-80 underline">Women&apos;s Health</Link>
              <span aria-hidden="true" className="text-gray-300">|</span>
              <Link href="/womens-health/birth-control" className="hover:opacity-80">Birth Control</Link>
              <span aria-hidden="true" className="text-gray-300">|</span>
              <Link href="/womens-health/pcos-management" className="hover:opacity-80">PCOS Management</Link>
              <span aria-hidden="true" className="text-gray-300">|</span>
              <Link href="/womens-health/menstrual-irregularities" className="hover:opacity-80">Menstrual Irregularities</Link>
              <span aria-hidden="true" className="text-gray-300">|</span>
              <Link href="/womens-health/menopause-care" className="hover:opacity-80">Menopause Care</Link>
              <span aria-hidden="true" className="text-gray-300">|</span>
              <Link href="/womens-health#std-testing" className="hover:opacity-80">STD Testing &amp; Management</Link>
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
            Schedule Your Pap Smear
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Stay proactive about your women&apos;s health. Schedule your Pap smear at
            Ebenezer Health Clinic and discuss your screening history, questions, and other
            women&apos;s health concerns with your provider.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="btn-primary text-base px-8 py-3.5 w-full sm:w-auto"
            >
              Schedule a Pap Smear
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
            Ebenezer Health Clinic &middot; Pap Smear Oklahoma City &middot; Telehealth statewide
            &middot; (405) 349-8188 &middot; ebenezerhealthclinic.com
          </p>
        </div>
      </section>
    </>
  )
}
