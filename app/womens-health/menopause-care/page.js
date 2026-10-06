import Link from 'next/link'
import Image from 'next/image'
import {
  Flame, ShieldCheck, Info, CalendarCheck, ClipboardList,
  MessageCircle, ClipboardCheck, Repeat, MonitorSmartphone, Sparkles,
  MapPin, Phone, Mail,
} from 'lucide-react'
import MenopauseCareFAQAccordion from './MenopauseCareFAQAccordion'
import Testimonials from '@/components/Testimonials'

export const metadata = {
  title: 'Menopause Treatment Oklahoma City',
  description:
    'Personalized menopause care in Oklahoma City with hormonal and non-hormonal treatment options. In-person care and Oklahoma telehealth available.',
  alternates: {
    canonical: 'https://www.ebenezerhealthclinic.com/womens-health/menopause-care',
  },
}

// ─── Schema ───────────────────────────────────────────────────────────────────
// One @graph, cross-linked by @id, consistent with other service sub-pages
// (see app/womens-health/menstrual-irregularities/page.js for the pattern).

const SITE = 'https://www.ebenezerhealthclinic.com'
const PAGE_URL = `${SITE}/womens-health/menopause-care`

const menopauseCareSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalWebPage',
      '@id': `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: 'Menopause Treatment Oklahoma City | Ebenezer Health Clinic',
      headline: 'Menopause Care in Oklahoma City',
      description:
        'Personalized menopause care in Oklahoma City with hormonal and non-hormonal treatment options. In-person care and Oklahoma telehealth available.',
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
      name: 'Menopause Care',
      description:
        'Personalized menopause management, including hormonal and non-hormonal treatment options, based on individual symptoms and clinical evaluation.',
      provider: { '@id': `${SITE}/#organization` },
      areaServed: { '@type': 'City', name: 'Oklahoma City' },
    },
    {
      '@type': 'FAQPage',
      '@id': `${PAGE_URL}#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Does Ebenezer Health Clinic provide menopause care?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Ebenezer Health Clinic provides personalized menopause management for patients in the Oklahoma City area, with appropriate telehealth care available throughout Oklahoma.',
          },
        },
        {
          '@type': 'Question',
          name: 'What menopause symptoms can I discuss with my provider?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can discuss symptoms and concerns such as hot flashes, night sweats, mood changes, vaginal dryness, sleep problems, menstrual changes, and other women’s health concerns.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you offer hormonal treatment for menopause?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Hormonal treatment options may be available for qualified patients following an individual clinical evaluation.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you offer non-hormonal menopause treatment?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Ebenezer Health Clinic also offers non-hormonal treatment options for appropriate patients.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will Ebenezer Health Clinic offer pellet insertion?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Starting in December 2026, pellet insertion is expected to be available for qualified patients. Eligibility will be determined through individual clinical evaluation.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can menopause care be provided through telehealth?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Appropriate menopause consultations and follow-up appointments may be available through telehealth throughout Oklahoma. Certain evaluations, treatments, or procedures may require an in-person visit.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need to complete a questionnaire before my appointment?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We recommend completing the Women’s Health Questionnaire before your visit. It includes questions about your medical history, menstrual and reproductive health, medications, menopause symptoms, hormone therapy, lifestyle, family history, and other concerns.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will I need follow-up appointments?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Follow-up needs vary depending on your symptoms, treatment approach, and individual healthcare needs. Your provider will discuss an appropriate follow-up plan with you.',
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
        { '@type': 'ListItem', position: 3, name: 'Menopause Care', item: PAGE_URL },
      ],
    },
  ],
}

const menopauseSymptoms = [
  'Hot flashes',
  'Night sweats',
  'Mood changes',
  'Vaginal dryness',
  'Sleep problems',
]

const questionnaireTopics = [
  'Medical history',
  'Current medications and supplements',
  'Menstrual and reproductive history',
  'Current symptoms',
  'Menopause-related concerns',
  'Previous or current hormone therapy',
  'Lifestyle',
  'Family health history',
  'Other women’s health concerns',
]

const consultationSteps = [
  {
    icon: CalendarCheck,
    step: '1',
    title: 'Schedule Your Appointment',
    desc: 'Book a menopause or women’s health consultation with Ebenezer Health Clinic.',
  },
  {
    icon: ClipboardList,
    step: '2',
    title: "Complete Your Women’s Health Questionnaire",
    desc: 'Covers your medical history, medications, menstrual history, current symptoms, hormone therapy, and lifestyle.',
  },
  {
    icon: MessageCircle,
    step: '3',
    title: 'Discuss Your Symptoms',
    desc: 'Talk with your provider about the symptoms or changes you have noticed and how they are affecting you.',
  },
  {
    icon: ClipboardCheck,
    step: '4',
    title: 'Review Treatment Options',
    desc: 'Your provider can discuss hormonal and non-hormonal approaches that may be appropriate based on your evaluation.',
  },
  {
    icon: Repeat,
    step: '5',
    title: 'Follow Up as Recommended',
    desc: 'Menopause care may involve follow-up appointments to discuss symptoms, concerns, or changes in your treatment plan.',
  },
]

const whyChoosePoints = [
  {
    title: 'Individualized Care',
    description: 'Your symptoms, medical history, preferences, and individual health needs are considered when discussing menopause management.',
  },
  {
    title: 'Hormonal & Non-Hormonal Options',
    description: 'Treatment is not limited to one approach. Hormonal and non-hormonal options are available for appropriate patients.',
  },
  {
    title: 'Ongoing Support',
    description: 'Follow-up care allows your treatment approach to be reviewed as your symptoms or healthcare needs change.',
  },
  {
    title: 'Comprehensive Women’s Health Care',
    description: 'Patients can also access care for menstrual irregularities, birth control, PCOS, Pap smears, and STD testing and management.',
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

export default function MenopauseCarePage() {
  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(menopauseCareSchema) }}
      />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden -mt-[112px] sm:-mt-[128px] lg:-mt-[144px] pt-[112px] sm:pt-[128px] lg:pt-[144px]"
      >
        <Image
          src="/womens-health-menopause-care.webp"
          alt="Menopause care consultation at Ebenezer Health Clinic in Oklahoma City"
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
              <span style={{ color: 'var(--primary)' }}>Menopause Care</span>
            </nav>

            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--primary)' }}
            >
              Women&apos;s Health &middot; Menopause Care &middot; Oklahoma City
            </span>

            <h1
              className="text-4xl md:text-5xl font-bold mb-5 leading-tight"
              style={{ color: 'var(--navy)' }}
            >
              Menopause Care in Oklahoma City
            </h1>

            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4 max-w-2xl">
              Menopause can bring physical, hormonal, and emotional changes that affect women
              differently. If symptoms are interfering with your comfort, sleep, mood, or
              everyday life, personalized care can help you understand your options.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4 max-w-2xl">
              At Ebenezer Health Clinic, we provide{' '}
              <strong style={{ color: 'var(--navy)' }}>
                menopause care in the Oklahoma City area
              </strong>
              , including hormonal and non-hormonal treatment options based on individual
              clinical evaluation.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl">
              Appropriate menopause consultations and follow-up care may also be available
              through telehealth throughout Oklahoma.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto text-center"
              >
                Schedule a Menopause Consultation
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

      {/* ── PERSONALIZED MENOPAUSE CARE ──────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        aria-labelledby="personalized-care-heading"
      >
        <Image
          src="/answer_block.webp"
          alt="Soft clinic-blue background for the personalized menopause care section"
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
              Personalized Menopause Care
            </h2>
            <div className="flex items-center gap-2 mb-6" aria-hidden="true">
              <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
              <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
              <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
            </div>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
              Every woman&apos;s experience with menopause is different. Some women experience
              mild changes, while others may have symptoms that significantly affect their
              comfort or daily routine.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
              At Ebenezer Health Clinic, menopause care begins with understanding your
              symptoms, health history, medications, concerns, and individual goals.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Your provider can discuss available treatment approaches and help determine an
              appropriate plan based on your individual evaluation.
            </p>
          </div>
        </div>
      </section>

      {/* ── MENOPAUSE SYMPTOMS WE CAN DISCUSS ───────────────────────── */}
      <section className="bg-white" aria-labelledby="symptoms-heading">
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
                id="symptoms-heading"
                className="text-3xl md:text-4xl font-bold mb-3"
                style={{ color: 'var(--navy)' }}
              >
                Menopause Symptoms We Can Discuss
              </h2>
              <div className="flex items-center gap-2 mb-6" aria-hidden="true">
                <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
                <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
                <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
              </div>
              <p className="text-base text-gray-600 leading-relaxed mb-4">
                Menopause may be associated with a variety of symptoms and changes. The
                questionnaire also captures other hormone-related concerns that may be
                relevant to your overall women&apos;s health evaluation.
              </p>
              <p className="text-base text-gray-600 leading-relaxed mb-6">
                Symptoms vary from person to person. Experiencing one or more of these
                concerns does not by itself determine the cause, which is why an
                individualized healthcare evaluation is important.
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
                Our Women&apos;s Health Questionnaire specifically asks about
              </p>
              <ul className="space-y-4">
                {menopauseSymptoms.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Flame
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

      {/* ── HORMONAL & NON-HORMONAL MENOPAUSE TREATMENT ─────────────── */}
      <section aria-labelledby="treatment-heading" style={{ backgroundColor: 'var(--cream)' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-3xl mb-10 md:mb-14">
            <h2
              id="treatment-heading"
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: 'var(--navy)' }}
            >
              Hormonal &amp; Non-Hormonal Menopause Treatment
            </h2>
            <div className="flex items-center gap-2 mb-6" aria-hidden="true">
              <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
              <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
              <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
            </div>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
              Ebenezer Health Clinic offers{' '}
              <strong style={{ color: 'var(--navy)' }}>
                both hormonal and non-hormonal approaches to menopause care
              </strong>
              . The appropriate treatment depends on your individual symptoms, medical
              history, current medications, health considerations, and clinical evaluation.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Your provider will discuss relevant options with you and help determine an
              approach suited to your individual healthcare needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            <div
              className="rounded-2xl p-7 md:p-8 flex flex-col h-full"
              style={{
                backgroundColor: 'rgba(255,255,255,0.85)',
                border: '1px solid rgba(26,166,183,0.15)',
                boxShadow: '0 2px 20px rgba(26,166,183,0.07)',
              }}
            >
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--navy)' }}>
                Hormonal Treatment Options
              </h3>
              <p className="text-base text-gray-600 leading-relaxed mb-3">
                Hormonal treatment may be considered for qualified patients as part of
                individualized menopause care.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                Before recommending a treatment approach, your provider will review relevant
                health information and discuss your symptoms and concerns. Not every patient
                will be an appropriate candidate for the same treatment, so recommendations
                are made following individual clinical evaluation.
              </p>
            </div>

            <div
              className="rounded-2xl p-7 md:p-8 flex flex-col h-full"
              style={{
                background: 'linear-gradient(135deg, rgba(26,166,183,0.06) 0%, rgba(151,206,204,0.18) 100%)',
                border: '1px solid rgba(26,166,183,0.20)',
              }}
            >
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--navy)' }}>
                Non-Hormonal Treatment Options
              </h3>
              <p className="text-base text-gray-600 leading-relaxed mb-3">
                Hormonal treatment is not the only approach to menopause management. Ebenezer
                Health Clinic also offers{' '}
                <strong style={{ color: 'var(--navy)' }}>non-hormonal treatment options</strong>{' '}
                for appropriate patients.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                Your provider can discuss available approaches based on your symptoms,
                preferences, health history, and individual needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMING DECEMBER 2026 – PELLET INSERTION (small callout) ─── */}
      <section className="bg-white" aria-labelledby="pellet-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-12">
          <div
            className="max-w-3xl mx-auto rounded-2xl p-6 md:p-7 flex flex-col sm:flex-row items-start gap-4 sm:gap-5"
            style={{
              backgroundColor: 'rgba(26,166,183,0.08)',
              border: '1px solid rgba(26,166,183,0.20)',
            }}
          >
            <div
              className="flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center"
              style={{ backgroundColor: 'rgba(26,166,183,0.14)' }}
              aria-hidden="true"
            >
              <Sparkles className="h-5 w-5" style={{ color: 'var(--primary)' }} />
            </div>
            <div>
              <p
                id="pellet-heading"
                className="text-sm font-semibold uppercase tracking-wide mb-2"
                style={{ color: 'var(--primary)' }}
              >
                Coming December 2026 &ndash; Pellet Insertion
              </p>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                Beginning <strong style={{ color: 'var(--navy)' }}>December 2026</strong>,
                Ebenezer Health Clinic plans to offer{' '}
                <strong style={{ color: 'var(--navy)' }}>
                  pellet insertion for qualified patients
                </strong>
                . Pellet insertion will not automatically be appropriate for every patient.
                Eligibility and treatment options will be determined through an individual
                clinical evaluation.
              </p>
              <Link
                href="/contact"
                className="text-sm font-semibold underline"
                style={{ color: 'var(--primary)' }}
              >
                Ask About Menopause Treatment Options
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── MENOPAUSE & CHANGES IN YOUR MENSTRUAL CYCLE (strongest link) ── */}
      <section aria-labelledby="menstrual-heading" style={{ backgroundColor: 'rgba(151,206,204,0.10)' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-16">
          <div
            className="rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10"
            style={{
              background: 'linear-gradient(135deg, rgba(26,166,183,0.06) 0%, rgba(151,206,204,0.18) 100%)',
              border: '1px solid rgba(26,166,183,0.20)',
            }}
          >
            <div
              className="flex-shrink-0 h-14 w-14 rounded-full flex items-center justify-center"
              style={{ backgroundColor: 'rgba(26,166,183,0.14)' }}
              aria-hidden="true"
            >
              <Repeat className="h-7 w-7" style={{ color: 'var(--primary)' }} />
            </div>
            <div className="flex-1">
              <h2
                id="menstrual-heading"
                className="text-2xl md:text-3xl font-bold mb-2"
                style={{ color: 'var(--navy)' }}
              >
                Menopause &amp; Changes in Your Menstrual Cycle
              </h2>
              <p className="text-base text-gray-600 leading-relaxed mb-1">
                Changes in menstrual patterns may occur as women approach menopause.
              </p>
              <p className="text-base text-gray-600 leading-relaxed mb-4">
                If you are experiencing changes in your periods alongside symptoms such as
                hot flashes, night sweats, sleep problems, mood changes, or vaginal dryness,
                discuss those concerns with your healthcare provider. Ebenezer Health Clinic
                also provides dedicated care for{' '}
                <strong style={{ color: 'var(--navy)' }}>Menstrual Irregularities</strong>{' '}
                when menstrual changes require further evaluation or ongoing management.
              </p>
              <Link
                href="/womens-health/menstrual-irregularities"
                className="btn-primary text-sm px-6 py-3 inline-flex items-center gap-1.5"
              >
                Learn About Menstrual Irregularities Care
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT TO EXPECT AT YOUR MENOPAUSE CONSULTATION ───────────── */}
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
              What to Expect at Your Menopause Consultation
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
              The questionnaire collects relevant information about your
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
              Schedule Your Consultation
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

      {/* ── ONGOING MENOPAUSE MANAGEMENT ─────────────────────────────── */}
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
                Ongoing Menopause Management
              </h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
                Menopause care does not necessarily end after one appointment. Symptoms and
                healthcare needs can change over time.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Follow-up care provides an opportunity to discuss how you are feeling, raise
                new concerns, and review your treatment approach with your provider. The
                frequency and type of follow-up will depend on your individual healthcare
                needs and treatment plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── IN-PERSON & TELEHEALTH MENOPAUSE CARE ───────────────────── */}
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
                In-Person &amp; Telehealth Menopause Care
              </h2>
              <p className="text-base text-gray-600 leading-relaxed mb-1">
                Ebenezer Health Clinic provides in-person women&apos;s health care from our
                Bethany location serving Oklahoma City and surrounding communities.
                Appropriate menopause consultations and follow-up appointments may also be
                available through{' '}
                <strong style={{ color: 'var(--navy)' }}>
                  secure telehealth throughout Oklahoma
                </strong>
                .
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                Some evaluations, treatments, or procedures may require an in-person
                appointment. Our team can help determine the appropriate appointment type
                when you schedule.{' '}
                <strong style={{ color: 'var(--navy)' }}>
                  Pellet insertion, once available, will require an in-person appointment.
                </strong>
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
              Why Choose Ebenezer Health Clinic for Menopause Care?
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
                patient&apos;s health history, symptoms, concerns, preferences, and goals.
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
          alt="Light teal background pattern for the menopause care frequently asked questions"
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
              Menopause Care FAQs
            </h2>
          </div>

          <MenopauseCareFAQAccordion />
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

      {/* ── MENOPAUSE CARE IN THE OKC AREA ──────────────────────────── */}
      <section aria-labelledby="serving-heading" style={{ backgroundColor: 'rgba(151,206,204,0.10)' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-3xl">
            <h2
              id="serving-heading"
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: 'var(--navy)' }}
            >
              Menopause Care in the Oklahoma City Area
            </h2>
            <div className="flex items-center gap-2 mb-6" aria-hidden="true">
              <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
              <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
              <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
            </div>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
              Ebenezer Health Clinic provides personalized menopause care from our Bethany
              location, serving women throughout Oklahoma City and surrounding communities.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
              Appropriate menopause consultations and follow-up appointments may also be
              available through telehealth for patients throughout Oklahoma.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              If menopause symptoms are affecting your comfort or daily life, schedule a
              consultation to discuss your concerns and available treatment options.
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
              <Link href="/womens-health/menstrual-irregularities" className="hover:opacity-80">Menstrual Irregularities</Link>
              <span aria-hidden="true" className="text-gray-300">|</span>
              <Link href="/womens-health#pap-smears" className="hover:opacity-80">Pap Smears</Link>
              <span aria-hidden="true" className="text-gray-300">|</span>
              <Link href="/womens-health/birth-control" className="hover:opacity-80">Birth Control</Link>
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
            Schedule Your Menopause Consultation
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Menopause is a highly individual experience, and your care should reflect your
            specific symptoms, health history, preferences, and needs. Schedule a
            consultation with Ebenezer Health Clinic to discuss{' '}
            <strong>hormonal and non-hormonal menopause treatment options</strong> and develop
            an individualized approach to your care.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="btn-primary text-base px-8 py-3.5 w-full sm:w-auto"
            >
              Schedule a Menopause Consultation
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
            Ebenezer Health Clinic &middot; Menopause Treatment Oklahoma City &middot; Telehealth statewide
            &middot; (405) 349-8188 &middot; ebenezerhealthclinic.com
          </p>
        </div>
      </section>
    </>
  )
}
