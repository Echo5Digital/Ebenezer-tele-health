import Link from 'next/link'
import Image from 'next/image'
import {
  ShieldCheck, Info, CalendarCheck, ClipboardList,
  MessageCircle, Stethoscope, Repeat, Building2, Lock,
  MapPin, Phone, Mail,
} from 'lucide-react'
import StdTestingFAQAccordion from './StdTestingFAQAccordion'
import Testimonials from '@/components/Testimonials'

export const metadata = {
  title: 'STD Testing Oklahoma City',
  description:
    'Confidential STD testing and management in the Oklahoma City area. Schedule women’s health care at Ebenezer Health Clinic in Bethany, Oklahoma.',
  alternates: {
    canonical: 'https://www.ebenezerhealthclinic.com/womens-health/std-testing',
  },
}

// ─── Schema ───────────────────────────────────────────────────────────────────
// One @graph, cross-linked by @id, consistent with other service sub-pages
// (see app/womens-health/pap-smears/page.js for the pattern).

const SITE = 'https://www.ebenezerhealthclinic.com'
const PAGE_URL = `${SITE}/womens-health/std-testing`

const stdTestingSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalWebPage',
      '@id': `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: 'STD Testing Oklahoma City | Ebenezer Health Clinic',
      headline: 'STD Testing & Management in Oklahoma City',
      description:
        'Confidential STD testing and management in the Oklahoma City area. Schedule women’s health care at Ebenezer Health Clinic in Bethany, Oklahoma.',
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
      name: 'STD Testing & Management',
      description:
        'Confidential STD testing and management based on individual health history, concerns, and clinical evaluation.',
      provider: { '@id': `${SITE}/#organization` },
      areaServed: { '@type': 'City', name: 'Oklahoma City' },
    },
    {
      '@type': 'FAQPage',
      '@id': `${PAGE_URL}#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Does Ebenezer Health Clinic offer STD testing?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Ebenezer Health Clinic provides STD testing and management as part of its women’s health services.',
          },
        },
        {
          '@type': 'Question',
          name: 'When should I consider STD testing?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You may want to discuss testing if you have concerns about a possible STD, are experiencing symptoms that concern you, have a previous STD history, are unsure when you were last screened, or simply want to discuss your sexual health with a healthcare provider.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which STDs does Ebenezer Health Clinic test for?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The clinic has confirmed that STD testing is available but has not specified individual tests or testing panels. Please contact our team if you need a particular test so we can confirm availability.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you provide STD management?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. The clinic provides STD testing and management. The appropriate care and follow-up depend on your individual clinical situation.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I get tested even if I do not have symptoms?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'If you have questions about STD screening, you can schedule an appointment to discuss your individual situation and appropriate testing with your provider.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is STD testing available through telehealth?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Testing that requires specimen collection or other physical services requires an appropriate in-person arrangement. Telehealth may be available for certain consultations and follow-up care throughout Oklahoma.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need to complete a questionnaire?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We recommend completing the Women’s Health Questionnaire before your appointment. It collects relevant health information, including sexual health history, previous STD history, and your last STD screening.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I discuss birth control during the same type of women’s health care?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Birth control is another service available through Ebenezer Health Clinic. Let the clinic know about your concerns when scheduling so the appropriate visit can be arranged.',
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
        { '@type': 'ListItem', position: 3, name: 'STD Testing & Management', item: PAGE_URL },
      ],
    },
  ],
}

const testingReasons = [
  'You want to discuss STD screening',
  'You have concerns about a possible STD',
  'You have symptoms or changes that concern you',
  'You have a history of an STD',
  'You are unsure when you were last screened',
  'You have questions about your sexual health',
  'You need management or follow-up care',
]

const overlapTopics = [
  'Menstrual and reproductive health',
  'Birth control',
  'Previous STD history',
  'Previous STD screening',
  'Other women’s health concerns',
]

const questionnaireTopics = [
  'Medical history',
  'Current medications and supplements',
  'Allergies',
  'Menstrual and reproductive history',
  'Birth control history',
  'Sexual health',
  'Previous STD history',
  'Last STD screening',
  'Other women’s health concerns',
]

const consultationSteps = [
  {
    icon: CalendarCheck,
    step: '1',
    title: 'Schedule Your Appointment',
    desc: 'Schedule a women’s health appointment and let our team know you would like to discuss STD testing or management.',
  },
  {
    icon: ClipboardList,
    step: '2',
    title: "Complete Your Women’s Health Questionnaire",
    desc: 'Covers your medical history, sexual health, previous STD history, and last STD screening.',
  },
  {
    icon: MessageCircle,
    step: '3',
    title: 'Discuss Your Concerns',
    desc: 'Talk with your provider about why you are seeking testing, relevant health history, symptoms, or previous screening.',
  },
  {
    icon: Stethoscope,
    step: '4',
    title: 'Determine Appropriate Testing',
    desc: 'Your provider can discuss what testing may be appropriate based on your individual evaluation.',
  },
  {
    icon: Repeat,
    step: '5',
    title: 'Review Management & Follow-Up',
    desc: 'When additional management or follow-up is needed, your provider can discuss appropriate next steps with you.',
  },
]

const whyChoosePoints = [
  {
    title: 'Confidential, Respectful Care',
    description: 'Discuss sexual health concerns in a professional healthcare setting focused on your individual needs.',
  },
  {
    title: 'Testing & Management',
    description: 'Care extends beyond screening when appropriate management or follow-up is needed.',
  },
  {
    title: 'Individualized Evaluation',
    description: 'Testing and next steps are based on your individual health information and concerns.',
  },
  {
    title: 'Comprehensive Women’s Health Services',
    description: 'Patients can also access birth control care, PCOS management, menstrual health care, menopause care, and Pap smears.',
  },
  {
    title: 'Convenient Oklahoma City Area Location',
    description: 'In-person care is available from our Bethany clinic, with telehealth throughout Oklahoma for appropriate consultations and follow-up care.',
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

export default function StdTestingPage() {
  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(stdTestingSchema) }}
      />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden -mt-[112px] sm:-mt-[128px] lg:-mt-[144px] pt-[112px] sm:pt-[128px] lg:pt-[144px]"
      >
        <Image
          src="/womens-health-std-testing.png"
          alt="Confidential STD testing and women's health care at Ebenezer Health Clinic in Oklahoma City"
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
              <span style={{ color: 'var(--primary)' }}>STD Testing &amp; Management</span>
            </nav>

            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--primary)' }}
            >
              Women&apos;s Health &middot; STD Testing &amp; Management &middot; Oklahoma City
            </span>

            <h1
              className="text-4xl md:text-5xl font-bold mb-5 leading-tight"
              style={{ color: 'var(--navy)' }}
            >
              STD Testing &amp; Management in Oklahoma City
            </h1>

            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4 max-w-2xl">
              If you have concerns about a sexually transmitted disease (STD), want to
              discuss testing, or need ongoing management, confidential and professional care
              is available at Ebenezer Health Clinic.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl">
              We provide{' '}
              <strong style={{ color: 'var(--navy)' }}>
                STD testing and management in the Oklahoma City area
              </strong>{' '}
              as part of our women&apos;s health services. Your provider can review your
              health history and concerns and discuss appropriate testing and next steps
              based on your individual needs.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto text-center"
              >
                Schedule STD Testing
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

      {/* ── CONFIDENTIAL STD TESTING & CARE ─────────────────────────── */}
      <section
        className="relative overflow-hidden"
        aria-labelledby="confidential-heading"
      >
        <Image
          src="/answer_block.webp"
          alt="Soft clinic-blue background for the confidential STD testing and care section"
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
              id="confidential-heading"
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ color: 'var(--navy)' }}
            >
              Confidential STD Testing &amp; Care
            </h2>
            <div className="flex items-center gap-2 mb-6" aria-hidden="true">
              <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
              <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
              <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
            </div>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
              Sexual health is an important part of overall health, and discussing STD
              concerns with a healthcare provider should feel straightforward and respectful.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
              At Ebenezer Health Clinic, we provide individualized care for patients seeking
              STD testing or management. During your visit, you can discuss your concerns,
              relevant health history, previous STD history or screening, and any symptoms or
              questions you may have.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Your provider can then determine appropriate next steps based on your
              individual clinical evaluation.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHEN SHOULD YOU CONSIDER STD TESTING ────────────────────── */}
      <section className="bg-white" aria-labelledby="when-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span
                className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: 'var(--primary)' }}
              >
                Is It Time?
              </span>
              <h2
                id="when-heading"
                className="text-3xl md:text-4xl font-bold mb-3"
                style={{ color: 'var(--navy)' }}
              >
                When Should You Consider STD Testing?
              </h2>
              <div className="flex items-center gap-2 mb-6" aria-hidden="true">
                <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
                <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
                <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
              </div>
              <p className="text-base text-gray-600 leading-relaxed mb-4">
                There are different reasons someone may want to discuss STD testing with a
                healthcare provider.
              </p>
              <p className="text-base text-gray-600 leading-relaxed mb-6">
                You do not need to determine what testing you need before scheduling your
                appointment. Your provider can discuss your concerns and appropriate next
                steps with you.
              </p>
              <Link
                href="/contact"
                className="btn-primary text-base px-7 py-3.5 inline-block"
              >
                Schedule a Sexual Health Visit
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
                You may choose to schedule an appointment if
              </p>
              <ul className="space-y-4">
                {testingReasons.map((item) => (
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

      {/* ── STD TESTING BASED ON YOUR INDIVIDUAL NEEDS ──────────────── */}
      <section aria-labelledby="individual-heading" style={{ backgroundColor: 'var(--cream)' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-3xl">
            <h2
              id="individual-heading"
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: 'var(--navy)' }}
            >
              STD Testing Based on Your Individual Needs
            </h2>
            <div className="flex items-center gap-2 mb-6" aria-hidden="true">
              <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
              <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
              <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
            </div>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
              STD testing is not necessarily the same for every patient.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6">
              Your provider can consider your individual health information, sexual health
              history, previous STD history, last screening, symptoms, and concerns when
              discussing appropriate testing. Because the clinic has not specified individual
              laboratory tests or screening panels for this service, patients should contact
              Ebenezer Health Clinic if they have questions about the availability of a
              particular test.
            </p>
            <Link
              href="/contact"
              className="btn-outline text-base px-7 py-3.5 inline-block"
            >
              Ask About STD Testing
            </Link>
          </div>
        </div>
      </section>

      {/* ── STD MANAGEMENT & FOLLOW-UP CARE ─────────────────────────── */}
      <section className="bg-white" aria-labelledby="management-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
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
                id="management-heading"
                className="text-2xl md:text-3xl font-bold mb-2"
                style={{ color: 'var(--navy)' }}
              >
                STD Management &amp; Follow-Up Care
              </h2>
              <p className="text-base text-gray-600 leading-relaxed mb-1">
                Ebenezer Health Clinic provides both{' '}
                <strong style={{ color: 'var(--navy)' }}>STD testing and management</strong>.
              </p>
              <p className="text-base text-gray-600 leading-relaxed mb-4">
                If testing or your health history indicates that additional care is needed,
                your provider can discuss appropriate management and follow-up based on your
                individual situation. Follow-up needs can vary from patient to patient.
              </p>
              <Link
                href="/contact"
                className="btn-primary text-sm px-6 py-3 inline-flex items-center gap-1.5"
              >
                Schedule an Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── STD TESTING AS PART OF WOMEN'S HEALTH CARE ──────────────── */}
      <section aria-labelledby="broader-care-heading" style={{ backgroundColor: 'rgba(151,206,204,0.10)' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h2
                id="broader-care-heading"
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ color: 'var(--navy)' }}
              >
                STD Testing as Part of Women&apos;s Health Care
              </h2>
              <div className="flex items-center gap-2 mb-6" aria-hidden="true">
                <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
                <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
                <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
              </div>
              <p className="text-base text-gray-600 leading-relaxed mb-4">
                Sexual health concerns can overlap with other areas of women&apos;s health.
              </p>
              <p className="text-base text-gray-600 leading-relaxed mb-6">
                Ebenezer Health Clinic also provides birth control care, PCOS management,
                care for menstrual irregularities, menopause care, and Pap smears.
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
                During your visit, you can also discuss
              </p>
              <ul className="space-y-4">
                {overlapTopics.map((item) => (
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

      {/* ── WHAT TO EXPECT AT YOUR STD TESTING VISIT ─────────────────── */}
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
              What to Expect at Your STD Testing Visit
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
              The questionnaire includes information about your
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
              If needed, our team can assist you with completing the questionnaire during
              your initial intake or free consultation call.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-stretch gap-3">
            <Link
              href="/contact"
              className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto flex items-center justify-center text-center"
            >
              Schedule STD Testing
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

      {/* ── IN-PERSON STD TESTING IN THE OKC AREA ───────────────────── */}
      <section aria-labelledby="in-person-heading" style={{ backgroundColor: 'var(--cream)' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div
            className="rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10"
            style={{ backgroundColor: '#ffffff', border: '1px solid rgba(26,166,183,0.18)' }}
          >
            <div
              className="flex-shrink-0 h-14 w-14 rounded-full flex items-center justify-center"
              style={{ backgroundColor: 'rgba(26,166,183,0.10)' }}
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
                In-Person STD Testing in the Oklahoma City Area
              </h2>
              <p className="text-base text-gray-600 leading-relaxed mb-1">
                STD testing that requires specimen collection or other in-person services
                should be scheduled at Ebenezer Health Clinic&apos;s Bethany location serving
                Oklahoma City and surrounding communities.
              </p>
              <p className="text-base text-gray-600 leading-relaxed mb-4">
                Appropriate consultations or follow-up care may also be available through{' '}
                <strong style={{ color: 'var(--navy)' }}>
                  secure telehealth throughout Oklahoma
                </strong>
                , depending on the patient&apos;s individual needs. Contact our team if you
                are unsure whether your appointment should be scheduled in person or
                virtually.
              </p>
              <Link
                href="/contact"
                className="btn-primary text-sm px-6 py-3 inline-flex items-center gap-1.5"
              >
                Schedule an Appointment
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
              Why Choose Ebenezer Health Clinic for STD Testing &amp; Management?
            </h2>
            <div className="flex items-center gap-2" aria-hidden="true">
              <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
              <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
              <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
            </div>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5" role="list">
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
          alt="Light teal background pattern for the STD testing frequently asked questions"
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
              STD Testing FAQs
            </h2>
          </div>

          <StdTestingFAQAccordion />
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

      {/* ── STD TESTING IN THE OKC AREA ──────────────────────────────── */}
      <section aria-labelledby="serving-heading" style={{ backgroundColor: 'rgba(151,206,204,0.10)' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-3xl">
            <h2
              id="serving-heading"
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: 'var(--navy)' }}
            >
              STD Testing in the Oklahoma City Area
            </h2>
            <div className="flex items-center gap-2 mb-6" aria-hidden="true">
              <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
              <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
              <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
            </div>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
              Ebenezer Health Clinic provides STD testing and management from our Bethany
              location, serving women in Oklahoma City and surrounding communities.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
              If you have concerns about your sexual health, want to discuss testing, or need
              follow-up care, schedule an appointment with our team.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Appropriate consultations and follow-up care may also be available through
              telehealth throughout Oklahoma.
            </p>
          </div>
        </div>
      </section>

      {/* ── RELATED / INTERNAL LINKS (strongest: Women's Health, Birth Control, Pap Smears) ── */}
      <section className="bg-white" aria-labelledby="related-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-16">
          <div
            className="rounded-2xl p-8 md:p-10"
            style={{
              backgroundColor: 'rgba(151,206,204,0.08)',
              border: '1px solid rgba(26,166,183,0.12)',
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: 'rgba(26,166,183,0.12)' }}
                aria-hidden="true"
              >
                <Info className="h-5 w-5" style={{ color: 'var(--primary)' }} />
              </div>
              <h2 id="related-heading" className="text-base font-semibold" style={{ color: 'var(--navy)' }}>
                Related Women&apos;s Health Services
              </h2>
            </div>

            {/* Strongest links — featured as buttons */}
            <div className="flex flex-wrap gap-3 mb-5">
              <Link href="/womens-health" className="btn-primary text-sm px-5 py-2.5">
                Women&apos;s Health
              </Link>
              <Link href="/womens-health/birth-control" className="btn-primary text-sm px-5 py-2.5">
                Birth Control
              </Link>
              <Link href="/womens-health/pap-smears" className="btn-primary text-sm px-5 py-2.5">
                Pap Smears
              </Link>
            </div>

            {/* Additional related links */}
            <nav
              className="flex flex-wrap items-center gap-x-2 gap-y-2 text-sm font-semibold"
              aria-label="Additional related women's health links"
              style={{ color: 'var(--primary)' }}
            >
              <Link href="/womens-health/pcos-management" className="hover:opacity-80">PCOS Management</Link>
              <span aria-hidden="true" className="text-gray-300">|</span>
              <Link href="/womens-health/menstrual-irregularities" className="hover:opacity-80">Menstrual Irregularities</Link>
              <span aria-hidden="true" className="text-gray-300">|</span>
              <Link href="/womens-health/menopause-care" className="hover:opacity-80">Menopause Care</Link>
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
          <div
            className="inline-flex h-12 w-12 items-center justify-center rounded-full mb-5"
            style={{ backgroundColor: 'rgba(26,166,183,0.10)' }}
            aria-hidden="true"
          >
            <Lock className="h-6 w-6" style={{ color: 'var(--primary)' }} />
          </div>
          <h2
            id="final-cta-heading"
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: 'var(--primary)' }}
          >
            Schedule STD Testing &amp; Management
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Taking care of your sexual health starts with having access to professional,
            respectful care. If you have questions about STD testing, are concerned about
            symptoms, or need ongoing management, schedule an appointment with Ebenezer
            Health Clinic.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="btn-primary text-base px-8 py-3.5 w-full sm:w-auto"
            >
              Schedule STD Testing
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
            Ebenezer Health Clinic &middot; STD Testing Oklahoma City &middot; Telehealth statewide
            &middot; (405) 349-8188 &middot; ebenezerhealthclinic.com
          </p>
        </div>
      </section>
    </>
  )
}
