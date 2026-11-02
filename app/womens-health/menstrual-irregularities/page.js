import Link from 'next/link'
import Image from 'next/image'
import {
  Activity, ShieldCheck, Info, CalendarCheck, ClipboardList,
  MessageCircle, ClipboardCheck, Repeat, MonitorSmartphone,
  MapPin, Phone, Mail, ArrowRight,
} from 'lucide-react'
import MenstrualIrregularitiesFAQAccordion from './MenstrualIrregularitiesFAQAccordion'
import Testimonials from '@/components/Testimonials'

export const metadata = {
  title: 'Menstrual Irregularities Oklahoma City',
  description:
    'Care for irregular, missed, heavy or painful periods in the Oklahoma City area. Personalized women’s health care with Oklahoma telehealth available.',
  alternates: {
    canonical: 'https://www.ebenezerhealthclinic.com/womens-health/menstrual-irregularities',
  },
}

// ─── Schema ───────────────────────────────────────────────────────────────────
// One @graph, cross-linked by @id, consistent with other service sub-pages
// (see app/womens-health/pcos-management/page.js for the pattern).

const SITE = 'https://www.ebenezerhealthclinic.com'
const PAGE_URL = `${SITE}/womens-health/menstrual-irregularities`

const menstrualIrregularitiesSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalWebPage',
      '@id': `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: 'Menstrual Irregularities Oklahoma City | Ebenezer Health Clinic',
      headline: 'Menstrual Irregularities Care in Oklahoma City',
      description:
        'Care for irregular, missed, heavy or painful periods in the Oklahoma City area. Personalized women’s health care with Oklahoma telehealth available.',
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
      name: 'Menstrual Irregularities Care',
      description:
        'Personalized evaluation and management of menstrual irregularities, including irregular, missed, absent, heavy, or painful periods, based on individual symptoms and health history.',
      provider: { '@id': `${SITE}/#organization` },
      areaServed: { '@type': 'City', name: 'Oklahoma City' },
    },
    {
      '@type': 'FAQPage',
      '@id': `${PAGE_URL}#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What are considered menstrual irregularities?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Menstrual irregularities can include changes in the timing, frequency, duration, or characteristics of your period. Examples may include irregular, missed, absent, heavy, painful, or otherwise changing menstrual cycles.',
          },
        },
        {
          '@type': 'Question',
          name: 'When should I discuss irregular periods with a healthcare provider?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'If you have noticed changes in your usual menstrual pattern or have concerns about irregular, missed, absent, heavy, or painful periods, schedule a consultation to discuss your symptoms and health history.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can PCOS be associated with irregular periods?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Some patients with PCOS experience menstrual irregularities. Ebenezer Health Clinic provides PCOS management as a separate women’s health service.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I discuss heavy periods at Ebenezer Health Clinic?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. If your menstrual flow has become heavy or has changed from your usual pattern, you can discuss your concerns during a women’s health appointment.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I schedule an appointment for painful periods?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Painful menstrual cycles are among the concerns you can discuss with your provider during a women’s health consultation.',
          },
        },
        {
          '@type': 'Question',
          name: 'What information should I have for my appointment?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Information about your cycle regularity, typical cycle length, period duration and flow, last menstrual period, medications, medical history, birth control history, and related symptoms can help your provider understand your concerns.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can menstrual health appointments be completed through telehealth?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Appropriate consultations and follow-up visits may be available through telehealth throughout Oklahoma. Depending on your individual concerns, an in-person evaluation may be recommended.',
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
        { '@type': 'ListItem', position: 3, name: 'Menstrual Irregularities', item: PAGE_URL },
      ],
    },
  ],
}

const menstrualConcerns = [
  'Irregular periods',
  'Missed periods',
  'Absent periods',
  'Heavy menstrual flow',
  'Painful periods',
  'Changes in cycle length',
  'Changes in how long your period lasts',
  'Menstrual changes that are different from your usual pattern',
]

const otherHealthTopics = [
  'Mood changes',
  'Weight gain',
  'Acne',
  'Hair or skin thinning',
  'Abnormal or increased hair growth',
  'Hot flashes or night sweats',
  'Headaches or migraines before your cycle',
  'Sleep concerns',
  'Heavy or painful cycles',
  'Absent cycles',
]

const questionnaireTopics = [
  'Medical history',
  'Medications and supplements',
  'Menstrual history',
  'Cycle regularity',
  'Typical cycle length',
  'Period duration and flow',
  'Painful periods',
  'Last menstrual period',
  'Pregnancy and reproductive history',
  'Birth control history',
  'Hormone-related symptoms',
  'Family health history',
  'Additional concerns',
]

const consultationSteps = [
  {
    icon: CalendarCheck,
    step: '1',
    title: 'Schedule Your Consultation',
    desc: 'Schedule a women’s health appointment with Ebenezer Health Clinic to discuss your menstrual concerns.',
  },
  {
    icon: ClipboardList,
    step: '2',
    title: "Complete Your Women’s Health Questionnaire",
    desc: 'Covers your medical history, medications, menstrual history, cycle regularity, period duration and flow, and related concerns.',
  },
  {
    icon: MessageCircle,
    step: '3',
    title: 'Discuss Your Menstrual History & Symptoms',
    desc: 'Talk with your provider about what has changed, how long you have noticed the changes, and any other symptoms or health concerns.',
  },
  {
    icon: ClipboardCheck,
    step: '4',
    title: 'Review the Next Steps',
    desc: 'Your provider can review your individual health information and discuss appropriate next steps based on your clinical evaluation.',
  },
]

const whyChoosePoints = [
  {
    title: 'Individualized Women’s Health Care',
    description: 'Your care is based on your individual symptoms, health history, and concerns.',
  },
  {
    title: 'Care for Menstrual Concerns',
    description: 'Discuss irregular, missed, absent, heavy, painful, or changing menstrual cycles with your provider.',
  },
  {
    title: 'Related Women’s Health Services',
    description: 'Patients can also access PCOS management, birth control care, menopause care, Pap smears, and STD testing and management.',
  },
  {
    title: 'Convenient Access',
    description: 'In-person care is available in the Oklahoma City area, with telehealth throughout Oklahoma for appropriate visits.',
  },
  {
    title: 'Ongoing Support',
    description: 'Follow-up care is available when your menstrual concerns require continued management.',
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

const relatedLinks = [
  { name: "Women's Health", href: '/womens-health', image: '/Ebenezerhealthclinic.webp' },
  { name: 'PCOS Management', href: '/womens-health/pcos-management', image: '/Womens-health-pcos-management.webp' },
  { name: 'Birth Control', href: '/womens-health/birth-control', image: '/womens-health-birth-control.webp' },
  { name: 'Menopause Care', href: '/womens-health/menopause-care', image: '/womens-health-menopause-care.webp' },
]

export default function MenstrualIrregularitiesPage() {
  return (
    <div className="wh-sub-page">
      {/*
        Page-scoped pink design system, matching /womens-health.
        Only affects elements inside .wh-sub-page — shared components
        (Header, Testimonials, Accordion primitives) keep their
        default site styling everywhere else.
      */}
      <style suppressHydrationWarning>{`
        .wh-sub-page {
          --wh-pink: #C2255C;
          --wh-pink-dark: #9E1C49;
          --wh-rose: #F3C9D4;
          --wh-rose-soft: #FBEAEF;
          --wh-cream: #FFF9FB;
          --wh-beige: #FDF1F4;
          --wh-charcoal: #2B2224;
        }
        .wh-sub-page .hover\\:text-primary:hover { color: var(--wh-pink) !important; }
        .wh-sub-page .text-primary { color: var(--wh-pink) !important; }
        .wh-sub-page .text-navy { color: var(--wh-charcoal) !important; }
        .wh-sub-page .btn-primary {
          background-color: var(--wh-pink);
        }
        .wh-sub-page .btn-primary:hover {
          background-color: var(--wh-pink-dark);
        }
        .wh-sub-page .btn-outline {
          border-color: var(--wh-pink);
          color: var(--wh-pink);
        }
        .wh-sub-page .btn-outline:hover {
          background-color: var(--wh-pink);
          color: #ffffff;
        }

        /*
          Testimonials — shared site-wide component, hardcoded teal.
          Overridden here so only this page shows the pink/rose palette;
          every other page using <Testimonials /> is unaffected.
        */
        .wh-sub-page section[aria-labelledby="testimonials-heading"] {
          background-color: var(--wh-pink) !important;
        }
        .wh-sub-page section[aria-labelledby="testimonials-heading"] span[style*="color: rgb(151, 206, 204)"] {
          color: rgba(255,255,255,0.78) !important;
        }
        .wh-sub-page section[aria-labelledby="testimonials-heading"] figure {
          border-color: rgba(194,37,92,0.14) !important;
          box-shadow: 0 2px 18px rgba(194,37,92,0.08) !important;
        }
        .wh-sub-page section[aria-labelledby="testimonials-heading"] figure > figcaption {
          border-top-color: rgba(194,37,92,0.10) !important;
        }
        .wh-sub-page section[aria-labelledby="testimonials-heading"] figure img,
        .wh-sub-page section[aria-labelledby="testimonials-heading"] figure > figcaption > div[style*="background-color"] {
          border-color: rgba(194,37,92,0.30) !important;
          background-color: var(--wh-pink) !important;
        }
        .wh-sub-page section[aria-labelledby="testimonials-heading"] button[aria-label="Previous reviews"],
        .wh-sub-page section[aria-labelledby="testimonials-heading"] button[aria-label="Next reviews"] {
          color: var(--wh-pink) !important;
        }
      `}</style>

      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(menstrualIrregularitiesSchema) }}
      />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden -mt-[112px] sm:-mt-[128px] lg:-mt-[144px] pt-[112px] sm:pt-[128px] lg:pt-[144px]"
      >
        <Image
          src="/womens-health-menstrual-irregularities.webp"
          alt="Menstrual irregularities consultation at Ebenezer Health Clinic in Oklahoma City"
          fill
          priority
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, rgba(255,255,255,0.94) 0%, rgba(255,255,255,0.80) 48%, rgba(194,37,92,0.30) 100%)',
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
              <span style={{ color: 'var(--wh-pink)' }}>Menstrual Irregularities</span>
            </nav>

            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--wh-pink)' }}
            >
              Women&apos;s Health &middot; Menstrual Irregularities &middot; Oklahoma City
            </span>

            <h1
              className="text-4xl md:text-5xl font-bold mb-5 leading-tight"
              style={{ color: 'var(--wh-charcoal)' }}
            >
              Menstrual Irregularities Care in Oklahoma City
            </h1>

            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4 max-w-2xl">
              Changes in your menstrual cycle can be frustrating, uncomfortable, or
              concerning&mdash;especially when you are not sure why they are happening.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4 max-w-2xl">
              At Ebenezer Health Clinic, we provide personalized care for{' '}
              <strong style={{ color: 'var(--wh-charcoal)' }}>
                menstrual irregularities in the Oklahoma City area
              </strong>
              , helping patients discuss changes in their periods, related symptoms, and
              individual women&apos;s health concerns.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl">
              Appropriate consultations and follow-up care may also be available through
              telehealth throughout Oklahoma.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto text-center"
              >
                Schedule a Women&apos;s Health Consultation
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

      {/* ── PERSONALIZED CARE FOR MENSTRUAL CHANGES ─────────────────── */}
      <section
        className="relative overflow-hidden"
        aria-labelledby="personalized-care-heading"
      >
        <Image
          src="/answer_block.webp"
          alt="Soft clinic-blue background for the personalized menstrual care section"
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
              style={{ color: 'var(--wh-pink)' }}
            >
              Our Approach
            </span>
            <h2
              id="personalized-care-heading"
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ color: 'var(--wh-charcoal)' }}
            >
              Personalized Care for Menstrual Changes
            </h2>
            <div className="flex items-center gap-2 mb-6" aria-hidden="true">
              <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--wh-pink)' }} />
              <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(194,37,92,0.25)' }} />
              <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(194,37,92,0.12)' }} />
            </div>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
              Menstrual cycles can vary from person to person, and changes in your usual cycle
              may occur for different reasons.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
              If your periods have become irregular, frequently missed, absent, heavier than
              usual, painful, or otherwise different from what you normally experience, a
              healthcare consultation can help determine the appropriate next steps.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              At Ebenezer Health Clinic, we take an individualized approach by considering
              your menstrual history, symptoms, medical history, medications, and other
              relevant health information.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHAT ARE MENSTRUAL IRREGULARITIES ───────────────────────── */}
      <section className="bg-white" aria-labelledby="concerns-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span
                className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: 'var(--wh-pink)' }}
              >
                Symptoms &amp; Concerns
              </span>
              <h2
                id="concerns-heading"
                className="text-3xl md:text-4xl font-bold mb-3"
                style={{ color: 'var(--wh-charcoal)' }}
              >
                What Are Menstrual Irregularities?
              </h2>
              <div className="flex items-center gap-2 mb-6" aria-hidden="true">
                <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--wh-pink)' }} />
                <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(194,37,92,0.25)' }} />
                <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(194,37,92,0.12)' }} />
              </div>
              <p className="text-base text-gray-600 leading-relaxed mb-4">
                Menstrual irregularities refer to changes or concerns involving the timing,
                frequency, duration, or characteristics of your menstrual cycle.
              </p>
              <p className="text-base text-gray-600 leading-relaxed mb-6">
                Because menstrual changes can vary considerably between patients, your
                individual symptoms and health history are important when determining the
                appropriate next steps.
              </p>
              <Link
                href="/contact"
                className="btn-primary text-base px-7 py-3.5 inline-block"
              >
                Talk to a Provider About Your Periods
              </Link>
            </div>

            <div
              className="rounded-2xl p-7 md:p-8"
              style={{
                backgroundColor: 'rgba(243,201,212,0.08)',
                border: '1px solid rgba(194,37,92,0.12)',
              }}
            >
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-5"
                style={{ color: 'var(--wh-pink)' }}
              >
                You may want to discuss your menstrual health if you are experiencing
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                {menstrualConcerns.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Activity
                      className="h-5 w-5 mt-0.5 flex-shrink-0"
                      style={{ color: 'var(--wh-pink)' }}
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

      {/* ── IRREGULAR OR MISSED PERIODS ──────────────────────────────── */}
      <section
        aria-labelledby="irregular-missed-heading"
        style={{ backgroundColor: 'var(--wh-cream)' }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-3xl">
            <h2
              id="irregular-missed-heading"
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: 'var(--wh-charcoal)' }}
            >
              Irregular or Missed Periods
            </h2>
            <div className="flex items-center gap-2 mb-6" aria-hidden="true">
              <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--wh-pink)' }} />
              <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(194,37,92,0.25)' }} />
              <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(194,37,92,0.12)' }} />
            </div>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
              If your menstrual cycle has become unpredictable or you are frequently missing
              periods, it may be helpful to discuss those changes with a healthcare provider.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              During your visit, your provider can review your menstrual history, including
              whether your cycles are typically regular, how long your cycles usually last,
              when your last menstrual period occurred, and other symptoms or concerns you
              may be experiencing.
            </p>
          </div>
        </div>
      </section>

      {/* ── HEAVY OR PAINFUL PERIODS ─────────────────────────────────── */}
      <section className="bg-white" aria-labelledby="heavy-painful-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-3xl">
            <h2
              id="heavy-painful-heading"
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: 'var(--wh-charcoal)' }}
            >
              Heavy or Painful Periods
            </h2>
            <div className="flex items-center gap-2 mb-6" aria-hidden="true">
              <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--wh-pink)' }} />
              <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(194,37,92,0.25)' }} />
              <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(194,37,92,0.12)' }} />
            </div>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
              Changes in menstrual flow or pain can also be an important reason to seek
              women&apos;s health care.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
              If you are experiencing{' '}
              <strong style={{ color: 'var(--wh-charcoal)' }}>
                heavy periods, painful menstrual cycles, or changes in your usual flow
              </strong>
              , tell your provider about what you have noticed and how your cycle has
              changed.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Your individual evaluation will help determine what next steps may be
              appropriate.
            </p>
          </div>
        </div>
      </section>

      {/* ── MENSTRUAL IRREGULARITIES & PCOS (strongest contextual link) ── */}
      <section aria-labelledby="pcos-heading" style={{ backgroundColor: 'rgba(243,201,212,0.10)' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-16">
          <div
            className="rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10"
            style={{
              background: 'linear-gradient(135deg, rgba(194,37,92,0.06) 0%, rgba(243,201,212,0.18) 100%)',
              border: '1px solid rgba(194,37,92,0.20)',
            }}
          >
            <div
              className="flex-shrink-0 h-14 w-14 rounded-full flex items-center justify-center"
              style={{ backgroundColor: 'rgba(194,37,92,0.14)' }}
              aria-hidden="true"
            >
              <Activity className="h-7 w-7" style={{ color: 'var(--wh-pink)' }} />
            </div>
            <div className="flex-1">
              <h2
                id="pcos-heading"
                className="text-2xl md:text-3xl font-bold mb-2"
                style={{ color: 'var(--wh-charcoal)' }}
              >
                Menstrual Irregularities &amp; PCOS
              </h2>
              <p className="text-base text-gray-600 leading-relaxed mb-1">
                Menstrual irregularities can be one of the concerns experienced by some
                patients with{' '}
                <strong style={{ color: 'var(--wh-charcoal)' }}>
                  polycystic ovary syndrome (PCOS)
                </strong>
                .
              </p>
              <p className="text-base text-gray-600 leading-relaxed mb-4">
                If you have already been diagnosed with PCOS or have other concerns that may
                be associated with PCOS, discuss them during your appointment. Ebenezer
                Health Clinic also provides dedicated{' '}
                <strong style={{ color: 'var(--wh-charcoal)' }}>PCOS Management</strong> for patients
                who need ongoing support.
              </p>
              <Link
                href="/womens-health/pcos-management"
                className="btn-primary text-sm px-6 py-3 inline-flex items-center gap-1.5"
              >
                Learn About PCOS Management
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── MENSTRUAL CHANGES & OTHER WOMEN'S HEALTH CONCERNS ────────── */}
      <section className="bg-white" aria-labelledby="other-concerns-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h2
                id="other-concerns-heading"
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ color: 'var(--wh-charcoal)' }}
              >
                Menstrual Changes &amp; Other Women&apos;s Health Concerns
              </h2>
              <div className="flex items-center gap-2 mb-6" aria-hidden="true">
                <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--wh-pink)' }} />
                <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(194,37,92,0.25)' }} />
                <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(194,37,92,0.12)' }} />
              </div>
              <p className="text-base text-gray-600 leading-relaxed mb-4">
                Your menstrual cycle is only one part of your overall health history.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                Experiencing these symptoms does not by itself identify their cause. Sharing
                them with your provider helps provide a more complete picture of your health
                concerns.
              </p>
            </div>

            <div
              className="rounded-2xl p-7 md:p-8"
              style={{
                background: 'linear-gradient(135deg, rgba(194,37,92,0.06) 0%, rgba(243,201,212,0.18) 100%)',
                border: '1px solid rgba(194,37,92,0.20)',
              }}
            >
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-5"
                style={{ color: 'var(--wh-pink)' }}
              >
                Our Women&apos;s Health Questionnaire includes questions about concerns such as
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                {otherHealthTopics.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <ShieldCheck
                      className="h-5 w-5 mt-0.5 flex-shrink-0"
                      style={{ color: 'var(--wh-pink)' }}
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

      {/* ── WHAT TO EXPECT AT YOUR MENSTRUAL HEALTH VISIT ───────────── */}
      <section
        className="relative overflow-hidden"
        aria-labelledby="what-to-expect-heading"
        style={{ backgroundColor: 'var(--wh-cream)' }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-3xl mb-10 md:mb-14">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--wh-pink)' }}
            >
              Your Visit
            </span>
            <h2
              id="what-to-expect-heading"
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ color: 'var(--wh-charcoal)' }}
            >
              What to Expect at Your Menstrual Health Visit
            </h2>
            <div className="flex items-center gap-2" aria-hidden="true">
              <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--wh-pink)' }} />
              <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(194,37,92,0.25)' }} />
              <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(194,37,92,0.12)' }} />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 items-stretch">
            {consultationSteps.map(({ icon: Icon, step, title, desc }) => (
              <div
                key={step}
                className="rounded-2xl p-6 flex flex-col h-full"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.80)',
                  border: '1px solid rgba(194,37,92,0.12)',
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center text-sm font-bold text-white"
                    style={{ backgroundColor: 'var(--wh-pink)' }}
                    aria-hidden="true"
                  >
                    {step}
                  </div>
                  <Icon className="h-5 w-5" style={{ color: 'var(--wh-pink)' }} aria-hidden="true" />
                </div>
                <h3 className="text-base font-semibold mb-1.5" style={{ color: 'var(--wh-charcoal)' }}>
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
              backgroundColor: 'rgba(255,255,255,0.80)',
              border: '1px solid rgba(194,37,92,0.12)',
            }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-5"
              style={{ color: 'var(--wh-pink)' }}
            >
              The questionnaire collects information about your
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
              {questionnaireTopics.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <ShieldCheck
                    className="h-5 w-5 mt-0.5 flex-shrink-0"
                    style={{ color: 'var(--wh-pink)' }}
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

      {/* ── ONGOING CARE FOR MENSTRUAL IRREGULARITIES ───────────────── */}
      <section className="bg-white" aria-labelledby="ongoing-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="flex flex-col md:flex-row items-start gap-6 md:gap-10 max-w-4xl">
            <div
              className="flex-shrink-0 h-14 w-14 rounded-full flex items-center justify-center"
              style={{ backgroundColor: 'rgba(194,37,92,0.10)' }}
              aria-hidden="true"
            >
              <Repeat className="h-7 w-7" style={{ color: 'var(--wh-pink)' }} />
            </div>
            <div>
              <h2
                id="ongoing-heading"
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ color: 'var(--wh-charcoal)' }}
              >
                Ongoing Care for Menstrual Irregularities
              </h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
                Some menstrual concerns may require follow-up, particularly when symptoms
                persist or change over time.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Follow-up visits allow you to discuss changes in your menstrual pattern, new
                symptoms, questions, or other women&apos;s health concerns with your provider.
                The type and frequency of follow-up will depend on your individual healthcare
                needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── IN-PERSON & TELEHEALTH MENSTRUAL HEALTH CARE ────────────── */}
      <section aria-labelledby="telehealth-heading" style={{ backgroundColor: 'rgba(243,201,212,0.10)' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div
            className="rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10"
            style={{ backgroundColor: '#ffffff', border: '1px solid rgba(194,37,92,0.18)' }}
          >
            <div
              className="flex-shrink-0 h-14 w-14 rounded-full flex items-center justify-center"
              style={{ backgroundColor: 'rgba(194,37,92,0.10)' }}
              aria-hidden="true"
            >
              <MonitorSmartphone className="h-7 w-7" style={{ color: 'var(--wh-pink)' }} />
            </div>
            <div className="flex-1">
              <h2
                id="telehealth-heading"
                className="text-2xl md:text-3xl font-bold mb-2"
                style={{ color: 'var(--wh-charcoal)' }}
              >
                In-Person &amp; Telehealth Menstrual Health Care
              </h2>
              <p className="text-base text-gray-600 leading-relaxed">
                Ebenezer Health Clinic provides in-person women&apos;s health care from our
                Bethany location serving Oklahoma City and surrounding communities.
                Appropriate consultations and follow-up appointments for menstrual concerns
                may also be available through{' '}
                <strong style={{ color: 'var(--wh-charcoal)' }}>
                  secure telehealth throughout Oklahoma
                </strong>
                . Some concerns may require an in-person visit. Our team can help determine
                the appropriate appointment type when you schedule.
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
          style={{ backgroundColor: 'rgba(253,241,244,0.94)' }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="mb-10 md:mb-14 max-w-2xl">
            <h2
              id="why-heading"
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ color: 'var(--wh-charcoal)' }}
            >
              Why Choose Ebenezer Health Clinic?
            </h2>
            <div className="flex items-center gap-2" aria-hidden="true">
              <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--wh-pink)' }} />
              <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(194,37,92,0.25)' }} />
              <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(194,37,92,0.12)' }} />
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
                  borderLeft: '3px solid var(--wh-pink)',
                  boxShadow: '0 2px 18px rgba(194,37,92,0.09)',
                }}
              >
                <div
                  className="flex-shrink-0 h-11 w-11 rounded-xl flex items-center justify-center text-sm font-bold"
                  style={{ backgroundColor: 'rgba(194,37,92,0.10)', color: 'var(--wh-pink)' }}
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="min-w-0">
                  <p className="font-semibold leading-snug" style={{ color: 'var(--wh-charcoal)' }}>
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
                style={{ color: 'var(--wh-charcoal)' }}
              >
                Meet Dr. Susan George, DNP, APRN, BC-ADM
              </h2>
              <div className="flex items-center gap-2 mb-6" aria-hidden="true">
                <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--wh-pink)' }} />
                <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(194,37,92,0.25)' }} />
                <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(194,37,92,0.12)' }} />
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
                  backgroundColor: 'rgba(243,201,212,0.08)',
                  border: '1px solid rgba(194,37,92,0.12)',
                }}
              >
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-4"
                  style={{ color: 'var(--wh-pink)' }}
                >
                  Credentials
                </p>
                <ul className="space-y-3">
                  {providerCredentials.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <ShieldCheck
                        className="h-5 w-5 mt-0.5 flex-shrink-0"
                        style={{ color: 'var(--wh-pink)' }}
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
                  border: '1px solid rgba(194,37,92,0.12)',
                  boxShadow: '0 8px 40px rgba(194,37,92,0.12)',
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
          alt="Light teal background pattern for the menstrual irregularities frequently asked questions"
          fill
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(253,241,244,0.88)' }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center mb-12">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--wh-pink)' }}
            >
              FAQ
            </span>
            <h2
              id="faq-heading"
              className="text-3xl md:text-4xl font-bold"
              style={{ color: 'var(--wh-charcoal)' }}
            >
              Menstrual Irregularities FAQs
            </h2>
          </div>

          <MenstrualIrregularitiesFAQAccordion />
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
                style={{ color: 'var(--wh-charcoal)' }}
              >
                Visit Ebenezer Health Clinic
              </h2>
              <div className="flex items-center gap-2 mb-6" aria-hidden="true">
                <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--wh-pink)' }} />
                <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(194,37,92,0.25)' }} />
                <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(194,37,92,0.12)' }} />
              </div>

              <div
                className="rounded-2xl p-7 md:p-8"
                style={{
                  backgroundColor: 'rgba(243,201,212,0.08)',
                  border: '1px solid rgba(194,37,92,0.12)',
                }}
              >
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--wh-pink)' }} aria-hidden="true" />
                    <div>
                      <p className="font-semibold" style={{ color: 'var(--wh-charcoal)' }}>
                        Ebenezer Health Clinic
                      </p>
                      <p className="text-sm text-gray-600 mt-0.5">
                        7415 NW 23rd Street, Bethany, OK 73008
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--wh-pink)' }} aria-hidden="true" />
                    <div>
                      <p className="font-semibold" style={{ color: 'var(--wh-charcoal)' }}>Phone</p>
                      <a
                        href="tel:+14053498188"
                        className="text-sm text-gray-600 mt-0.5 hover:text-primary transition-colors"
                      >
                        (405) 349-8188
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--wh-pink)' }} aria-hidden="true" />
                    <div>
                      <p className="font-semibold" style={{ color: 'var(--wh-charcoal)' }}>Email</p>
                      <a
                        href="mailto:ebenezerhealth@outlook.com"
                        className="text-sm text-gray-600 mt-0.5 hover:text-primary transition-colors break-all"
                      >
                        ebenezerhealth@outlook.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <ShieldCheck className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--wh-pink)' }} aria-hidden="true" />
                    <div>
                      <p className="font-semibold" style={{ color: 'var(--wh-charcoal)' }}>In-Person Care</p>
                      <p className="text-sm text-gray-600 mt-0.5">Oklahoma City area</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <ShieldCheck className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--wh-pink)' }} aria-hidden="true" />
                    <div>
                      <p className="font-semibold" style={{ color: 'var(--wh-charcoal)' }}>Telehealth</p>
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
              style={{ border: '1px solid rgba(194,37,92,0.15)' }}
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

      {/* ── MENSTRUAL IRREGULARITIES CARE IN THE OKC AREA ───────────── */}
      <section aria-labelledby="serving-heading" style={{ backgroundColor: 'rgba(243,201,212,0.10)' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-3xl">
            <h2
              id="serving-heading"
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: 'var(--wh-charcoal)' }}
            >
              Menstrual Irregularities Care in the Oklahoma City Area
            </h2>
            <div className="flex items-center gap-2 mb-6" aria-hidden="true">
              <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--wh-pink)' }} />
              <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(194,37,92,0.25)' }} />
              <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(194,37,92,0.12)' }} />
            </div>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
              Ebenezer Health Clinic provides personalized women&apos;s health care from our
              Bethany location, serving Oklahoma City and surrounding communities.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
              If you are concerned about irregular, missed, absent, heavy, painful, or
              changing periods, schedule an appointment to discuss your symptoms and
              determine appropriate next steps.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Telehealth is also available throughout Oklahoma for appropriate consultations
              and follow-up care.
            </p>
          </div>
        </div>
      </section>

      {/* ── RELATED / INTERNAL LINKS ─────────────────────────────────── */}
      <section className="bg-white" aria-labelledby="related-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-16">
          <div className="flex items-center gap-3 mb-8">
            <div
              className="h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: 'rgba(194,37,92,0.12)' }}
              aria-hidden="true"
            >
              <Info className="h-5 w-5" style={{ color: 'var(--wh-pink)' }} />
            </div>
            <h2 id="related-heading" className="text-base font-semibold" style={{ color: 'var(--wh-charcoal)' }}>
              Related Women&apos;s Health Services
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 mb-6 items-stretch">
            {relatedLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="wh-card group flex h-full flex-col overflow-hidden rounded-[1.5rem]"
                style={{ boxShadow: '0 4px 18px rgba(43,34,36,0.08)' }}
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden flex-shrink-0">
                  <Image
                    src={link.image}
                    alt={link.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div
                  className="flex-1 px-3 py-3 sm:py-4 flex items-center justify-center gap-1.5"
                  style={{ backgroundColor: 'var(--wh-pink)' }}
                >
                  <span className="text-xs sm:text-sm font-semibold text-white leading-snug text-center">
                    {link.name}
                  </span>
                  <ArrowRight
                    className="h-3.5 w-3.5 flex-shrink-0 text-white transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </div>
              </Link>
            ))}
          </div>

          <div className="flex justify-center">
            <Link href="/contact" className="btn-outline text-sm px-5 py-2.5 inline-block">
              Book / Contact
            </Link>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: 'var(--wh-cream)' }}
        aria-labelledby="final-cta-heading"
      >
        <div
          className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 h-72 w-72 rounded-full opacity-10 pointer-events-none"
          style={{ backgroundColor: 'var(--wh-pink)' }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 h-48 w-48 rounded-full opacity-10 pointer-events-none"
          style={{ backgroundColor: 'var(--wh-pink)' }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <h2
            id="final-cta-heading"
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: 'var(--wh-pink)' }}
          >
            Schedule a Consultation for Menstrual Concerns
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            You do not have to wait until menstrual changes become more disruptive before
            discussing them with a healthcare provider. If you have concerns about your
            periods or have noticed a change in your usual menstrual pattern, schedule a
            women&apos;s health consultation with Ebenezer Health Clinic.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="btn-primary text-base px-8 py-3.5 w-full sm:w-auto"
            >
              Schedule a Women&apos;s Health Consultation
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
            Ebenezer Health Clinic &middot; Menstrual Irregularities Oklahoma City &middot; Telehealth statewide
            &middot; (405) 349-8188 &middot; ebenezerhealthclinic.com
          </p>
        </div>
      </section>
    </div>
  )
}
