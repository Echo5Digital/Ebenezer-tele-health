import Link from 'next/link'
import Image from 'next/image'
import {
  Pill, Syringe, Layers, ShieldCheck, Info, AlertCircle,
  CalendarCheck, ClipboardList, MessageCircle, MonitorSmartphone,
  MapPin, Phone, Mail,
} from 'lucide-react'
import BirthControlFAQAccordion from './BirthControlFAQAccordion'
import Testimonials from '@/components/Testimonials'

export const metadata = {
  title: 'Birth Control Oklahoma City',
  description:
    'Birth control care in the Oklahoma City area, including pills, Depo-Provera, patches, IUD insertion and removal, and Nexplanon insertion and removal.',
  alternates: {
    canonical: 'https://www.ebenezerhealthclinic.com/womens-health/birth-control',
  },
}

// ─── Schema ───────────────────────────────────────────────────────────────────
// One @graph, cross-linked by @id, consistent with other service sub-pages
// (see app/iv-therapy/myers-cocktail/page.js for the pattern).

const SITE = 'https://www.ebenezerhealthclinic.com'
const PAGE_URL = `${SITE}/womens-health/birth-control`

const birthControlSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalWebPage',
      '@id': `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: 'Birth Control Oklahoma City | Ebenezer Health Clinic',
      headline: 'Birth Control in Oklahoma City',
      description:
        'Birth control care in the Oklahoma City area, including pills, Depo-Provera, patches, IUD insertion and removal, and Nexplanon insertion and removal.',
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
      name: 'Birth Control & Contraceptive Care',
      description:
        'Personalized birth control consultations covering oral contraceptives, Depo-Provera shots, birth control patches, IUD insertion and removal, and Nexplanon insertion and removal.',
      provider: { '@id': `${SITE}/#organization` },
      areaServed: { '@type': 'City', name: 'Oklahoma City' },
    },
    {
      '@type': 'FAQPage',
      '@id': `${PAGE_URL}#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What birth control options does Ebenezer Health Clinic offer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We offer oral contraceptives, Depo-Provera shots, birth control patches, IUD insertion and removal, and Nexplanon insertion and removal.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you offer birth control pills?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Oral contraceptives are available as one of our birth control options. Your provider can discuss whether this method may be appropriate for you based on your individual health needs.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you offer Depo-Provera shots?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Depo-Provera is available as an injectable contraceptive option following appropriate clinical evaluation.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you provide IUD insertion and removal?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Ebenezer Health Clinic provides both IUD insertion and removal. IUD insertion is covered by insurance only.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you provide Nexplanon insertion and removal?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Both Nexplanon insertion and removal are available. Nexplanon insertion is covered by insurance only.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I get birth control through telehealth?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Appropriate birth control consultations and follow-up care may be available through telehealth throughout Oklahoma. Procedures such as IUD and Nexplanon insertion or removal require an in-person appointment.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I know which birth control method is right for me?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Your provider can review your health history, medications, previous birth control experience, preferences, and other relevant factors before discussing options that may be appropriate for you.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need to complete a questionnaire before my appointment?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We recommend completing the Women’s Health Questionnaire before your appointment so your provider has relevant information about your health history, medications, menstrual and reproductive health, and current and previous birth control methods.',
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
        { '@type': 'ListItem', position: 3, name: 'Birth Control', item: PAGE_URL },
      ],
    },
  ],
}

const considerationFactors = [
  'Medical history',
  'Current medications and supplements',
  'Allergies',
  'Menstrual and reproductive history',
  'Current birth control method',
  'Previous birth control methods',
  'Your experience with your current method',
  'Individual preferences and reproductive goals',
]

const consultationSteps = [
  {
    icon: CalendarCheck,
    step: '1',
    title: 'Schedule Your Appointment',
    desc: 'Book your birth control consultation with Ebenezer Health Clinic.',
  },
  {
    icon: ClipboardList,
    step: '2',
    title: "Complete Your Women’s Health Questionnaire",
    desc: 'Collects your medical history, medications, menstrual and reproductive health, pregnancy history, and birth control history.',
  },
  {
    icon: MessageCircle,
    step: '3',
    title: 'Discuss Your Needs',
    desc: 'Talk with your provider about your current method, past experiences, preferences, concerns and goals.',
  },
  {
    icon: ShieldCheck,
    step: '4',
    title: 'Review Your Options',
    desc: 'Your provider discusses available options based on your needs and clinical evaluation.',
  },
]

const whyChoosePoints = [
  {
    title: 'Personalized Contraceptive Care',
    description: 'Your birth control options are considered in the context of your individual health history, preferences, and needs.',
  },
  {
    title: 'Multiple Birth Control Options',
    description: 'We offer oral contraceptives, Depo-Provera shots, patches, IUD services, and Nexplanon services.',
  },
  {
    title: 'Insertion & Removal Services',
    description: 'IUD and Nexplanon insertion and removal services are available in person.',
  },
  {
    title: 'Convenient Access',
    description: 'Appropriate birth control consultations and follow-up care may be available through telehealth throughout Oklahoma.',
  },
  {
    title: 'Comprehensive Women’s Health Care',
    description: 'Birth control services are part of our broader approach to women’s health, allowing patients to discuss related menstrual, reproductive, and other health concerns with their provider.',
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

export default function BirthControlPage() {
  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(birthControlSchema) }}
      />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden -mt-[112px] sm:-mt-[128px] lg:-mt-[144px] pt-[112px] sm:pt-[128px] lg:pt-[144px]"
      >
        <Image
          src="/womens-health-birth-control.webp"
          alt="Birth control consultation at Ebenezer Health Clinic in Oklahoma City"
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
              <span style={{ color: 'var(--primary)' }}>Birth Control</span>
            </nav>

            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--primary)' }}
            >
              Women&apos;s Health &middot; Birth Control &middot; Oklahoma City
            </span>

            <h1
              className="text-4xl md:text-5xl font-bold mb-5 leading-tight"
              style={{ color: 'var(--navy)' }}
            >
              Birth Control in Oklahoma City
            </h1>

            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4 max-w-2xl">
              Choosing the right birth control is a personal healthcare decision. At Ebenezer
              Health Clinic, we provide personalized birth control consultations to help you
              understand your options and choose a method based on your health needs,
              preferences, and reproductive goals.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl">
              Our birth control services include{' '}
              <strong style={{ color: 'var(--navy)' }}>
                oral contraceptives, Depo-Provera shots, birth control patches, IUD insertion
                and removal, and Nexplanon insertion and removal
              </strong>
              .
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto text-center"
              >
                Schedule a Birth Control Consultation
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

      {/* ── PERSONALIZED BIRTH CONTROL CARE ─────────────────────────── */}
      <section
        className="relative overflow-hidden"
        aria-labelledby="personalized-care-heading"
      >
        <Image
          src="/answer_block.webp"
          alt="Soft clinic-blue background for the personalized birth control care section"
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
              Personalized Birth Control Care
            </h2>
            <div className="flex items-center gap-2 mb-6" aria-hidden="true">
              <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
              <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
              <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
            </div>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
              There is no single birth control method that works for everyone. Your medical
              history, menstrual and reproductive health, current medications, previous
              contraceptive experience, lifestyle, preferences, and future plans can all
              influence which option may be appropriate.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              At Ebenezer Health Clinic, we take an individualized approach to contraceptive
              care. During your consultation, you can discuss your needs and concerns, learn
              about available options, and work with your provider to determine an appropriate
              next step.
            </p>
          </div>
        </div>
      </section>

      {/* ── BIRTH CONTROL OPTIONS WE OFFER ──────────────────────────── */}
      <section className="bg-white" aria-labelledby="options-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="mb-10 md:mb-14 max-w-3xl">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--primary)' }}
            >
              Our Services
            </span>
            <h2
              id="options-heading"
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ color: 'var(--navy)' }}
            >
              Birth Control Options We Offer
            </h2>
            <div className="flex items-center gap-2" aria-hidden="true">
              <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
              <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
              <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mb-6">
            {/* Oral Contraceptives */}
            <div
              className="rounded-2xl p-7 md:p-8 flex flex-col h-full"
              style={{
                backgroundColor: 'rgba(151,206,204,0.08)',
                border: '1px solid rgba(26,166,183,0.12)',
              }}
            >
              <div
                className="flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: 'rgba(26,166,183,0.12)' }}
                aria-hidden="true"
              >
                <Pill className="h-5 w-5" style={{ color: 'var(--primary)' }} />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--navy)' }}>
                Oral Contraceptives
              </h3>
              <p className="text-base text-gray-600 leading-relaxed mb-3">
                Oral contraceptives, commonly known as birth control pills, are available for
                patients seeking an oral birth control option.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                During your consultation, we can discuss your health history, current
                medications, previous contraceptive experience, and preferences to determine
                whether an oral contraceptive may be appropriate for you.
              </p>
            </div>

            {/* Depo-Provera Shots */}
            <div
              className="rounded-2xl p-7 md:p-8 flex flex-col h-full"
              style={{
                backgroundColor: 'rgba(151,206,204,0.08)',
                border: '1px solid rgba(26,166,183,0.12)',
              }}
            >
              <div
                className="flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: 'rgba(26,166,183,0.12)' }}
                aria-hidden="true"
              >
                <Syringe className="h-5 w-5" style={{ color: 'var(--primary)' }} />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--navy)' }}>
                Depo-Provera Shots
              </h3>
              <p className="text-base text-gray-600 leading-relaxed mb-3">
                Depo-Provera is available for patients interested in an injectable birth
                control option.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                Your provider can discuss this method with you and determine whether it may be
                appropriate based on your individual health history and clinical evaluation.
              </p>
            </div>

            {/* Birth Control Patches */}
            <div
              className="rounded-2xl p-7 md:p-8 flex flex-col h-full"
              style={{
                backgroundColor: 'rgba(151,206,204,0.08)',
                border: '1px solid rgba(26,166,183,0.12)',
              }}
            >
              <div
                className="flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: 'rgba(26,166,183,0.12)' }}
                aria-hidden="true"
              >
                <Layers className="h-5 w-5" style={{ color: 'var(--primary)' }} />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--navy)' }}>
                Birth Control Patches
              </h3>
              <p className="text-base text-gray-600 leading-relaxed mb-3">
                Birth control patches provide another contraceptive option for eligible
                patients.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                During your consultation, your provider can discuss this option and help
                determine whether it fits your health needs and preferences.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {/* IUD Insertion & Removal */}
            <div
              className="rounded-2xl p-7 md:p-8 flex flex-col h-full"
              style={{
                background: 'linear-gradient(135deg, rgba(26,166,183,0.06) 0%, rgba(151,206,204,0.18) 100%)',
                border: '1px solid rgba(26,166,183,0.20)',
              }}
            >
              <div
                className="flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: 'rgba(26,166,183,0.14)' }}
                aria-hidden="true"
              >
                <ShieldCheck className="h-5 w-5" style={{ color: 'var(--primary)' }} />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--navy)' }}>
                IUD Insertion &amp; Removal
              </h3>
              <p className="text-base text-gray-600 leading-relaxed mb-3">
                Ebenezer Health Clinic provides both{' '}
                <strong style={{ color: 'var(--navy)' }}>IUD insertion and IUD removal</strong>{' '}
                services.
              </p>
              <p className="text-base text-gray-600 leading-relaxed mb-3">
                If you are considering an IUD, your provider can discuss your health history,
                contraceptive needs, and relevant considerations before determining whether an
                IUD may be appropriate. If you already have an IUD and would like it removed,
                you can schedule an in-person appointment for removal and discuss your ongoing
                birth control needs.
              </p>
              <div
                className="rounded-xl p-3.5 flex items-start gap-2.5 mb-4"
                style={{ backgroundColor: 'rgba(255,255,255,0.70)', border: '1px solid rgba(26,166,183,0.18)' }}
                role="note"
              >
                <Info className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: 'var(--primary)' }} aria-hidden="true" />
                <p className="text-sm text-gray-700">
                  Important: IUD insertion is covered by insurance only.
                </p>
              </div>
              <Link
                href="/contact"
                className="btn-outline text-sm px-5 py-2.5 mt-auto self-start"
              >
                Ask About IUD Services
              </Link>
            </div>

            {/* Nexplanon Insertion & Removal */}
            <div
              className="rounded-2xl p-7 md:p-8 flex flex-col h-full"
              style={{
                background: 'linear-gradient(135deg, rgba(26,166,183,0.06) 0%, rgba(151,206,204,0.18) 100%)',
                border: '1px solid rgba(26,166,183,0.20)',
              }}
            >
              <div
                className="flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: 'rgba(26,166,183,0.14)' }}
                aria-hidden="true"
              >
                <ShieldCheck className="h-5 w-5" style={{ color: 'var(--primary)' }} />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--navy)' }}>
                Nexplanon Insertion &amp; Removal
              </h3>
              <p className="text-base text-gray-600 leading-relaxed mb-3">
                Ebenezer Health Clinic also provides{' '}
                <strong style={{ color: 'var(--navy)' }}>Nexplanon insertion and removal</strong>.
                If you are considering Nexplanon, your provider can discuss your contraceptive
                goals and relevant health information before determining whether the implant
                may be appropriate. Patients who already have Nexplanon can also schedule an
                appointment for removal.
              </p>
              <div
                className="rounded-xl p-3.5 flex items-start gap-2.5 mb-4"
                style={{ backgroundColor: 'rgba(255,255,255,0.70)', border: '1px solid rgba(26,166,183,0.18)' }}
                role="note"
              >
                <Info className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: 'var(--primary)' }} aria-hidden="true" />
                <p className="text-sm text-gray-700">
                  Important: Nexplanon insertion is covered by insurance only.
                </p>
              </div>
              <Link
                href="/contact"
                className="btn-outline text-sm px-5 py-2.5 mt-auto self-start"
              >
                Ask About Nexplanon
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHICH BIRTH CONTROL OPTION IS RIGHT FOR ME ──────────────── */}
      <section
        aria-labelledby="which-option-heading"
        style={{ backgroundColor: 'var(--cream)' }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h2
                id="which-option-heading"
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ color: 'var(--navy)' }}
              >
                Which Birth Control Option Is Right for Me?
              </h2>
              <div className="flex items-center gap-2 mb-6" aria-hidden="true">
                <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
                <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
                <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
              </div>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
                Choosing birth control involves more than selecting a contraceptive method from
                a list. During your consultation, your provider may consider several factors
                relevant to your individual health.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Your consultation gives you an opportunity to ask questions, discuss concerns,
                and better understand the birth control options available to you.
              </p>
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
                Your provider may consider
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                {considerationFactors.map((item) => (
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

      {/* ── WHAT TO EXPECT AT YOUR CONSULTATION ─────────────────────── */}
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
              What to Expect at Your Birth Control Consultation
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

          <div className="flex flex-col sm:flex-row sm:items-stretch gap-3">
            <Link
              href="/contact"
              className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto flex items-center justify-center text-center"
            >
              Book Your Consultation
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

      {/* ── IN-PERSON & TELEHEALTH CONSULTATIONS ────────────────────── */}
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
                In-Person &amp; Telehealth Birth Control Consultations
              </h2>
              <p className="text-base text-gray-600 leading-relaxed mb-1">
                Ebenezer Health Clinic provides convenient access to birth control care for
                women throughout Oklahoma. Appropriate birth control consultations and
                follow-up visits may be available through secure telehealth across Oklahoma.
                Services requiring a physical procedure&mdash;including{' '}
                <strong style={{ color: 'var(--navy)' }}>
                  IUD insertion, IUD removal, Nexplanon insertion, and Nexplanon removal
                </strong>
                &mdash;require an in-person appointment. If you are unsure whether your visit
                can be completed virtually, contact our team before scheduling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── IUD & NEXPLANON INSURANCE INFORMATION ───────────────────── */}
      <section
        aria-labelledby="insurance-heading"
        style={{ backgroundColor: 'rgba(254,242,242,0.60)' }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-16">
          <div className="flex flex-col items-center text-center">
            <div
              className="w-full max-w-2xl rounded-2xl p-8 md:p-10"
              style={{
                backgroundColor: '#ffffff',
                border: '2px solid rgba(239,68,68,0.25)',
                boxShadow: '0 4px 24px rgba(239,68,68,0.08)',
              }}
            >
              <div className="flex flex-col items-center gap-3 mb-5">
                <div
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full"
                  style={{ backgroundColor: 'rgba(239,68,68,0.10)' }}
                  aria-hidden="true"
                >
                  <AlertCircle className="h-6 w-6 text-red-500" />
                </div>
                <h2
                  id="insurance-heading"
                  className="text-2xl md:text-3xl font-bold text-gray-800"
                >
                  IUD &amp; Nexplanon Insurance Information
                </h2>
              </div>
              <div
                className="h-px w-16 mx-auto mb-5"
                style={{ backgroundColor: 'rgba(239,68,68,0.25)' }}
                aria-hidden="true"
              />
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6">
                IUD and Nexplanon insertions are covered by insurance only. If you are
                interested in either service, contact Ebenezer Health Clinic to discuss
                insurance and appointment requirements.
              </p>
              <Link
                href="/contact"
                className="btn-primary text-base px-7 py-3.5 inline-block"
              >
                Contact Us About IUD or Nexplanon
              </Link>
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
              Why Choose Ebenezer Health Clinic for Birth Control?
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
                patient&apos;s health history, concerns, preferences, and goals.
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
          alt="Light teal background pattern for the birth control frequently asked questions"
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
              Birth Control FAQs
            </h2>
          </div>

          <BirthControlFAQAccordion />
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

      {/* ── BIRTH CONTROL CARE IN THE OKC AREA ──────────────────────── */}
      <section aria-labelledby="serving-heading" style={{ backgroundColor: 'rgba(151,206,204,0.10)' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-3xl">
            <h2
              id="serving-heading"
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: 'var(--navy)' }}
            >
              Birth Control Care in the Oklahoma City Area
            </h2>
            <div className="flex items-center gap-2 mb-6" aria-hidden="true">
              <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
              <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
              <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
            </div>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
              Ebenezer Health Clinic provides personalized birth control care from our Bethany
              location serving Oklahoma City and surrounding communities.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
              Appropriate consultations and follow-up care may also be available through
              telehealth for patients throughout Oklahoma.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Whether you are exploring birth control for the first time, considering changing
              your current method, or need IUD or Nexplanon insertion or removal, our team can
              help you understand the next steps.
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
              <Link href="/womens-health#pcos" className="hover:opacity-80">PCOS Management</Link>
              <span aria-hidden="true" className="text-gray-300">|</span>
              <Link href="/womens-health#menstrual-irregularities" className="hover:opacity-80">Menstrual Irregularities</Link>
              <span aria-hidden="true" className="text-gray-300">|</span>
              <Link href="/womens-health#pap-smears" className="hover:opacity-80">Pap Smears</Link>
              <span aria-hidden="true" className="text-gray-300">|</span>
              <Link href="/womens-health#std-testing" className="hover:opacity-80">STD Testing &amp; Management</Link>
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
            Schedule Your Birth Control Consultation
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Ready to discuss your birth control options? Schedule a consultation with Ebenezer
            Health Clinic to discuss{' '}
            <strong>oral contraceptives, Depo-Provera, birth control patches, IUDs, or
            Nexplanon</strong>{' '}
            and determine an appropriate option based on your individual needs.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="btn-primary text-base px-8 py-3.5 w-full sm:w-auto"
            >
              Schedule a Birth Control Consultation
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
            Ebenezer Health Clinic &middot; Birth Control Oklahoma City &middot; Telehealth statewide
            &middot; (405) 349-8188 &middot; ebenezerhealthclinic.com
          </p>
        </div>
      </section>
    </>
  )
}
