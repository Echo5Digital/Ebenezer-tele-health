import Link from 'next/link'
import Image from 'next/image'
import {
  Droplets,
  Syringe,
  FlaskConical,
  ClipboardList,
  ShieldCheck,
  MapPin,
  CheckCircle2,
  UserCheck,
  Sparkles,
} from 'lucide-react'
import Testimonials from '@/components/Testimonials'
import VitaminB12FAQAccordion from './VitaminB12FAQAccordion'

export const metadata = {
  title: 'Vitamin B12 Injections Oklahoma City',
  description:
    'Schedule Vitamin B12 injections in the Oklahoma City area at Ebenezer Health Clinic in Bethany, OK, with appropriate clinical screening before treatment.',
  keywords: [
    'Vitamin B12 Injections Oklahoma City',
    'B12 Injection Oklahoma City',
    'B12 Shots Oklahoma City',
    'Vitamin B12 Shots OKC',
    'B12 Injection OKC',
    'B12 Injections Bethany OK',
    'Vitamin Injection Oklahoma City',
  ],
  alternates: {
    canonical: 'https://www.ebenezerhealthclinic.com/iv-therapy/vitamin-b12-injections',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.ebenezerhealthclinic.com/iv-therapy/vitamin-b12-injections',
    siteName: 'Ebenezer Health Clinic',
    title: 'Vitamin B12 Injections Oklahoma City | Ebenezer Health Clinic',
    description:
      'Schedule Vitamin B12 injections in the Oklahoma City area at Ebenezer Health Clinic in Bethany, OK, with appropriate clinical screening before treatment.',
    images: ['/primary-care-hero.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vitamin B12 Injections Oklahoma City | Ebenezer Health Clinic',
    description:
      'Schedule Vitamin B12 injections in the Oklahoma City area at Ebenezer Health Clinic in Bethany, OK, with appropriate clinical screening before treatment.',
    images: ['/primary-care-hero.webp'],
  },
}

// ─── Schema ───────────────────────────────────────────────────────────────────

const SITE = 'https://www.ebenezerhealthclinic.com'
const PAGE_URL = `${SITE}/iv-therapy/vitamin-b12-injections`

const vitaminB12SchemaGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalWebPage',
      '@id': `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: 'Vitamin B12 Injections Oklahoma City | Ebenezer Health Clinic',
      headline: 'Vitamin B12 Injections in Oklahoma City',
      description:
        'Schedule Vitamin B12 injections in the Oklahoma City area at Ebenezer Health Clinic in Bethany, OK, with appropriate clinical screening before treatment.',
      isPartOf: { '@id': `${SITE}/iv-therapy#webpage` },
      about: { '@id': `${PAGE_URL}#procedure` },
      mainEntity: { '@id': `${PAGE_URL}#procedure` },
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
      '@id': `${PAGE_URL}#procedure`,
      name: 'Vitamin B12 Injection',
      procedureType: 'TherapeuticProcedure',
      description:
        'Vitamin B12 injections at Ebenezer Health Clinic are provided after a health and safety questionnaire and appropriate clinical evaluation to help determine whether treatment is suitable.',
      bodyLocation: 'Intramuscular',
      provider: { '@id': `${SITE}/#organization` },
      areaServed: { '@type': 'City', name: 'Oklahoma City' },
    },
    {
      '@type': 'FAQPage',
      '@id': `${PAGE_URL}#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Does Ebenezer Health Clinic offer Vitamin B12 injections?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Yes. Vitamin B12 injections are offered as part of Ebenezer Health Clinic's IV Hydration & Injections services.",
          },
        },
        {
          '@type': 'Question',
          name: 'Where can I get a B12 injection in the Oklahoma City area?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Vitamin B12 injections are available at Ebenezer Health Clinic's Bethany location serving Oklahoma City and surrounding communities.",
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need an appointment for a B12 injection?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Contact Ebenezer Health Clinic to schedule your injection and confirm current appointment availability.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need to complete a questionnaire?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Patients requesting an injection complete the IV/IM Injection Questionnaire so relevant health and safety information can be reviewed.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does completing the questionnaire guarantee that I can receive the injection?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Completing the questionnaire does not guarantee treatment and does not replace clinical evaluation.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I receive a B12 injection through telehealth?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. The injection itself requires an in-person visit.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you also provide IV hydration?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. IV hydration is available as a separate service through Ebenezer Health Clinic.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Ebenezer Health Clinic offer Glutathione injections?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Glutathione injections are available by special order upon request.',
          },
        },
        {
          '@type': 'Question',
          name: 'How often should I receive Vitamin B12 injections?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "The clinic has not provided a standard injection schedule for publication. Frequency should be discussed with the clinician based on the patient's individual circumstances.",
          },
        },
        {
          '@type': 'Question',
          name: 'How much does a Vitamin B12 injection cost?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Contact Ebenezer Health Clinic for current B12 injection pricing.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: 'IV Therapy', item: `${SITE}/iv-therapy` },
        { '@type': 'ListItem', position: 3, name: 'Vitamin B12 Injections', item: PAGE_URL },
      ],
    },
  ],
}

const considerationItems = [
  'Your reason for requesting the injection',
  'Current symptoms or concerns',
  'Symptom severity',
  'Medical history',
  'Allergies',
  'Previous reactions to injections or IV treatment',
  'Current medications',
  'Recent treatments',
  'Relevant health conditions',
  'Additional safety information',
]

const safetyScreeningItems = [
  'Allergies',
  'Previous reactions to injections or IVs',
  'Pregnancy, breastfeeding, or trying to conceive',
  'Kidney disease or kidney stones',
  'Dialysis',
  'Heart disease',
  'Heart failure',
  'Swelling or edema',
  'Fluid restrictions',
  'Liver disease',
  'Blood pressure concerns',
  'Fainting or dizziness',
  'Diabetes or blood glucose concerns',
  'Bleeding conditions',
  'Blood-thinning medications',
  'Immune suppression',
  'Chemotherapy',
  'Infection, fever, or recent illness',
  'Current medications',
  'Recent treatments',
]

const questionnaireItems = [
  'Patient information',
  'Requested service',
  'Treatment goal',
  'Current symptoms',
  'Symptom severity',
  'Allergies',
  'Relevant medical history',
  'Current medications',
  'Recent treatments',
  'Day-of-treatment safety information',
  'Additional concerns or questions',
]

export default function VitaminB12InjectionsPage() {
  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(vitaminB12SchemaGraph) }}
      />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden -mt-[112px] sm:-mt-[128px] lg:-mt-[144px] pt-[112px] sm:pt-[128px] lg:pt-[144px]"
      >
        {/* Background image */}
        <Image
          src="/primary-care-hero.webp"
          alt="Provider consulting with a patient at Ebenezer Health Clinic"
          fill
          sizes="100vw"
          priority
          className="object-cover object-center pointer-events-none"
        />
        {/* Overlay: solid left → transparent right so text is always legible */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(105deg, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.92) 40%, rgba(255,255,255,0.60) 65%, rgba(255,255,255,0.10) 100%)',
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <nav
              className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-6"
              aria-label="Breadcrumb"
            >
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <span aria-hidden="true">/</span>
              <Link href="/iv-therapy" className="hover:text-primary transition-colors">
                IV Therapy
              </Link>
              <span aria-hidden="true">/</span>
              <span style={{ color: 'var(--primary)' }}>Vitamin B12 Injections</span>
            </nav>

            {/* Label */}
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--primary)' }}
            >
              Vitamin B12 Injections · Oklahoma City
            </span>

            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 leading-tight"
              style={{ color: 'var(--navy)' }}
            >
              Vitamin B12 Injections in Oklahoma City
            </h1>

            <p
              className="text-base md:text-lg leading-relaxed mb-3 max-w-xl"
              style={{ color: 'var(--navy)' }}
            >
              Looking for Vitamin B12 injections in the Oklahoma City area?
            </p>
            <p
              className="text-base md:text-lg leading-relaxed mb-3 max-w-xl"
              style={{ color: 'var(--navy)' }}
            >
              Ebenezer Health Clinic offers{' '}
              <strong>Vitamin B12 injections with appropriate clinical
              screening</strong> at our Bethany location serving Oklahoma
              City and surrounding communities.
            </p>
            <p
              className="text-base md:text-lg leading-relaxed mb-8 max-w-xl"
              style={{ color: 'var(--navy)' }}
            >
              Before receiving an injection, patients complete a health and
              safety questionnaire so the clinician can review relevant
              medical history, medications, allergies, current symptoms, and
              treatment goals.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
              <Link
                href="/contact"
                className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto text-center"
              >
                Schedule a B12 Injection
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

      {/* ── VITAMIN B12 INJECTIONS AT EBENEZER HEALTH CLINIC ─────── */}
      <section className="bg-white" aria-labelledby="intro-heading">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: 'var(--primary)' }}
          >
            About This Service
          </span>
          <h2
            id="intro-heading"
            className="text-3xl md:text-4xl font-bold mb-3"
            style={{ color: 'var(--navy)' }}
          >
            Vitamin B12 Injections at Ebenezer Health Clinic
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6" aria-hidden="true">
            <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
            <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
            <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
          </div>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
            Vitamin B12 injections are available as part of Ebenezer Health
            Clinic&apos;s <strong>IV Hydration &amp; Injections</strong>{' '}
            services.
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
            Our process begins with appropriate patient screening rather than
            assuming an injection is suitable for everyone.
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
            Before treatment, you will be asked to provide relevant
            information about your health, medications, allergies, current
            symptoms, and reason for requesting the service.
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
            Your clinician can then determine whether proceeding with the
            injection is appropriate based on your individual circumstances.
          </p>
          <Link href="/contact" className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto">
            Ask About Vitamin B12 Injections
          </Link>
        </div>
      </section>

      {/* ── WHAT IS A VITAMIN B12 INJECTION ──────────────────────── */}
      <section
        className="relative overflow-hidden"
        aria-labelledby="what-is-heading"
      >
        <Image
          src="/intro-para.webp"
          alt="Calming wellness setting at Ebenezer Health Clinic"
          fill
          sizes="100vw"
          className="object-cover object-center pointer-events-none"
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(232,247,247,0.80)' }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: 'var(--primary)' }}
          >
            The Basics
          </span>
          <h2
            id="what-is-heading"
            className="text-3xl md:text-4xl font-bold mb-3"
            style={{ color: 'var(--navy)' }}
          >
            What Is a Vitamin B12 Injection?
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6" aria-hidden="true">
            <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
            <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
            <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
          </div>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
            A Vitamin B12 injection is an injectable form of vitamin B12
            administered directly rather than taken as an oral supplement.
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
            At Ebenezer Health Clinic, Vitamin B12 injections are offered
            within a clinically guided process that includes appropriate
            screening before treatment.
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
            If you are considering a B12 injection, your clinician can
            review your health information and discuss whether the service
            is appropriate for you.
          </p>
          <Link href="/contact" className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto">
            Schedule an Appointment
          </Link>
        </div>
      </section>

      {/* ── IS A B12 INJECTION RIGHT FOR ME ──────────────────────── */}
      <section className="bg-white" aria-labelledby="right-for-me-heading">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center mb-6">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--primary)' }}
            >
              Not Sure Where to Start?
            </span>
            <h2
              id="right-for-me-heading"
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ color: 'var(--navy)' }}
            >
              Is a Vitamin B12 Injection Right for Me?
            </h2>
            <div className="flex items-center justify-center gap-2" aria-hidden="true">
              <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
              <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
              <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
            </div>
          </div>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-2 text-center">
            Patients may have different reasons for asking about injectable
            services.
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8 text-center">
            Rather than assuming that a B12 injection is appropriate based on
            symptoms alone, Ebenezer Health Clinic uses a screening process
            to better understand your individual circumstances.
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4 text-center">
            Before treatment, the clinic may review:
          </p>
          <div
            className="rounded-2xl p-7 md:p-8"
            style={{
              backgroundColor: 'rgba(151,206,204,0.08)',
              border: '1px solid rgba(26,166,183,0.12)',
            }}
          >
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
              {considerationItems.map((item) => (
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
          <p className="text-base md:text-lg text-gray-600 leading-relaxed text-center mt-8">
            Your clinician can use this information to determine the
            appropriate next step.
          </p>
        </div>
      </section>

      {/* ── CLINICAL SCREENING BEFORE YOUR B12 INJECTION ─────────── */}
      <section
        className="relative overflow-hidden"
        aria-labelledby="safety-screening-heading"
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(232,247,247,0.52)' }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center mb-6">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--primary)' }}
            >
              Your Safety
            </span>
            <h2
              id="safety-screening-heading"
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ color: 'var(--navy)' }}
            >
              Clinical Screening Before Your B12 Injection
            </h2>
            <div className="flex items-center justify-center gap-2" aria-hidden="true">
              <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
              <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
              <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
            </div>
          </div>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4 text-center">
            Before receiving an injection, patients complete the
            clinic&apos;s <strong>IV/IM Injection Questionnaire</strong>.
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8 text-center">
            The screening includes questions about health circumstances that
            may be relevant before treatment, including:
          </p>
          <div
            className="rounded-2xl p-7 md:p-8 bg-white"
            style={{ border: '1px solid rgba(26,166,183,0.15)' }}
          >
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
              {safetyScreeningItems.map((item) => (
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
          <p className="text-sm text-gray-500 leading-relaxed italic text-center mt-8">
            Providing complete and accurate information helps the clinician
            appropriately evaluate your request before treatment.
          </p>
        </div>
      </section>

      {/* ── COMPLETE THE IV/IM INJECTION QUESTIONNAIRE ───────────── */}
      <section
        aria-labelledby="questionnaire-heading"
        style={{ backgroundColor: 'rgba(151,206,204,0.10)' }}
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="flex flex-col md:flex-row items-start gap-8 md:gap-10">
            <div
              className="inline-flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl"
              style={{ backgroundColor: 'rgba(26,166,183,0.10)' }}
              aria-hidden="true"
            >
              <ClipboardList className="h-7 w-7" style={{ color: 'var(--primary)' }} />
            </div>
            <div className="flex-1">
              <span
                className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: 'var(--primary)' }}
              >
                Before Your Visit
              </span>
              <h2
                id="questionnaire-heading"
                className="text-2xl md:text-3xl font-bold mb-4"
                style={{ color: 'var(--navy)' }}
              >
                Complete the IV/IM Injection Questionnaire
              </h2>
              <p className="text-base text-gray-600 leading-relaxed mb-6">
                Patients requesting a Vitamin B12 injection should complete
                the <strong>IV/IM Injection Questionnaire</strong> before
                treatment.
              </p>
              <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--primary)' }}>
                The questionnaire asks for information including:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mb-6">
                {questionnaireItems.map((item) => (
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
              <p className="text-base text-gray-600 leading-relaxed mb-3">
                For the requested service, patients can select{' '}
                <strong>IM Injection</strong>.
              </p>
              <p className="text-base text-gray-600 leading-relaxed mb-3">
                If you are unsure whether an injection or IV hydration is
                appropriate, the questionnaire also provides a{' '}
                <strong>&ldquo;Not sure – discuss with clinician&rdquo;</strong>{' '}
                option.
              </p>
              <p className="text-base text-gray-600 leading-relaxed mb-6">
                If needed, our team can assist you with completing the
                questionnaire during your initial intake or free
                consultation call.
              </p>
              <Link href="/contact" className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto text-center inline-block">
                Complete IV/IM Injection Questionnaire
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT TO EXPECT AT YOUR APPOINTMENT ───────────────────── */}
      <section className="bg-white" aria-labelledby="what-to-expect-heading">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center mb-10 md:mb-14">
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
              What to Expect at Your Vitamin B12 Injection Appointment
            </h2>
            <div className="flex items-center justify-center gap-2" aria-hidden="true">
              <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
              <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
              <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
            </div>
          </div>

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-10">
            {[
              {
                title: 'Schedule Your Visit',
                body: 'Contact Ebenezer Health Clinic to arrange an in-person appointment.',
              },
              {
                title: 'Complete Your Questionnaire',
                body: 'Provide information about your medical history, allergies, medications, symptoms, treatment goals, and other relevant safety information.',
              },
              {
                title: 'Complete Clinical Screening',
                body: 'Your information will be reviewed before treatment to determine whether proceeding with the injection is appropriate.',
              },
              {
                title: 'Receive Your Injection if Appropriate',
                body: 'If the service is appropriate following screening and clinical evaluation, your Vitamin B12 injection can be administered in person.',
              },
              {
                title: 'Discuss Questions or Concerns',
                body: 'Tell your clinician about any concerns or changes in your health before treatment.',
              },
            ].map((step, idx) => (
              <li
                key={step.title}
                className="rounded-2xl p-6 h-full flex flex-col"
                style={{
                  backgroundColor: 'rgba(151,206,204,0.08)',
                  border: '1px solid rgba(26,166,183,0.12)',
                }}
              >
                <span
                  className="flex-shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold mb-4"
                  style={{
                    backgroundColor: 'var(--primary)',
                    color: '#ffffff',
                  }}
                  aria-hidden="true"
                >
                  {idx + 1}
                </span>
                <p className="text-base font-semibold mb-2" style={{ color: 'var(--navy)' }}>
                  {step.title}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">{step.body}</p>
              </li>
            ))}
          </ol>
          <div className="flex justify-center">
            <Link href="/contact" className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto">
              Schedule Your B12 Injection
            </Link>
          </div>
        </div>
      </section>

      {/* ── SAFETY COMES BEFORE TREATMENT ────────────────────────── */}
      <section
        className="relative overflow-hidden"
        aria-labelledby="no-guarantee-heading"
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(232,247,247,0.52)' }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: 'var(--primary)' }}
          >
            Important
          </span>
          <h2
            id="no-guarantee-heading"
            className="text-3xl md:text-4xl font-bold mb-3"
            style={{ color: 'var(--navy)' }}
          >
            Safety Comes Before Treatment
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6" aria-hidden="true">
            <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
            <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
            <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
          </div>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
            Completing the IV/IM Injection Questionnaire{' '}
            <strong>
              does not automatically mean that treatment will be provided
            </strong>
            .
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
            The questionnaire is used for screening and does not replace
            clinical evaluation.
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
            Your clinician may determine that an injection should not
            proceed based on your current health information or other
            clinical considerations.
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            Patients should provide accurate information and report any
            changes in their health before treatment.
          </p>
        </div>
      </section>

      {/* ── VITAMIN B12 INJECTION VS. IV HYDRATION ───────────────── */}
      <section className="bg-white" aria-labelledby="vs-iv-heading">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center mb-10 md:mb-14">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--primary)' }}
            >
              Which Service Is Right for You?
            </span>
            <h2
              id="vs-iv-heading"
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ color: 'var(--navy)' }}
            >
              Vitamin B12 Injection vs. IV Hydration
            </h2>
            <div className="flex items-center justify-center gap-2" aria-hidden="true">
              <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
              <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
              <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
            </div>
          </div>

          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-10 text-center max-w-3xl mx-auto">
            Ebenezer Health Clinic offers both injections and IV hydration,
            but these are different services.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <article
              className="rounded-2xl overflow-hidden flex flex-col bg-white"
              style={{ border: '1px solid rgba(168,85,247,0.16)' }}
            >
              <div className="p-6 md:p-7 flex flex-col flex-1">
                <div className="flex items-start gap-3 mb-4">
                  <div
                    className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: 'rgba(168,85,247,0.15)' }}
                    aria-hidden="true"
                  >
                    <Syringe className="h-5 w-5" style={{ color: '#A855F7' }} />
                  </div>
                  <h3
                    className="text-lg font-semibold leading-snug pt-1.5"
                    style={{ color: 'var(--navy)' }}
                  >
                    Vitamin B12 Injection
                  </h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Vitamin B12 is administered as an injection following
                  appropriate screening.
                </p>
              </div>
            </article>

            <article
              className="rounded-2xl overflow-hidden flex flex-col bg-white"
              style={{ border: '1px solid rgba(59,130,246,0.16)' }}
            >
              <div className="p-6 md:p-7 flex flex-col flex-1">
                <div className="flex items-start gap-3 mb-4">
                  <div
                    className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: 'rgba(59,130,246,0.15)' }}
                    aria-hidden="true"
                  >
                    <Droplets className="h-5 w-5" style={{ color: '#3B82F6' }} />
                  </div>
                  <h3
                    className="text-lg font-semibold leading-snug pt-1.5"
                    style={{ color: 'var(--navy)' }}
                  >
                    IV Hydration
                  </h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  IV hydration involves treatment administered intravenously
                  and has its own treatment process.
                </p>
              </div>
            </article>
          </div>

          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
            If you are unsure which service is appropriate, select{' '}
            <strong>&ldquo;Not sure – discuss with clinician&rdquo;</strong>{' '}
            when completing your questionnaire.
          </p>
          <div className="flex justify-center">
            <Link href="/iv-therapy/iv-hydration" className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto">
              Explore IV Hydration
            </Link>
          </div>
        </div>
      </section>

      {/* ── OTHER INJECTABLE SERVICES ────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        aria-labelledby="other-services-heading"
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(232,247,247,0.52)' }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: 'var(--primary)' }}
          >
            Additional Options
          </span>
          <h2
            id="other-services-heading"
            className="text-3xl md:text-4xl font-bold mb-3"
            style={{ color: 'var(--navy)' }}
          >
            Other Injectable Services
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6" aria-hidden="true">
            <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
            <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
            <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
          </div>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
            In addition to Vitamin B12 injections, Ebenezer Health Clinic
            offers:
          </p>
          <div
            className="rounded-2xl overflow-hidden flex flex-col bg-white text-left max-w-md mx-auto"
            style={{ border: '1px solid rgba(16,185,129,0.18)' }}
          >
            <div className="p-6 md:p-7 flex flex-col flex-1">
              <div className="flex items-start gap-3 mb-4">
                <div
                  className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: 'rgba(16,185,129,0.15)' }}
                  aria-hidden="true"
                >
                  <FlaskConical className="h-5 w-5" style={{ color: '#10B981' }} />
                </div>
                <h3
                  className="text-lg font-semibold leading-snug pt-1.5"
                  style={{ color: 'var(--navy)' }}
                >
                  Glutathione Injection
                </h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                Glutathione injections are available by{' '}
                <strong>special order upon request</strong>.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Patients requesting injectable services undergo appropriate
                screening before treatment.
              </p>
              <Link
                href="/injections"
                className="mt-auto btn-primary text-sm text-center"
              >
                Learn About Glutathione Injections
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── IN-PERSON B12 INJECTIONS IN THE OKC AREA ─────────────── */}
      <section className="bg-white" aria-labelledby="in-person-heading">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: 'var(--primary)' }}
          >
            In-Person Only
          </span>
          <h2
            id="in-person-heading"
            className="text-3xl md:text-4xl font-bold mb-3"
            style={{ color: 'var(--navy)' }}
          >
            In-Person B12 Injections in the Oklahoma City Area
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6" aria-hidden="true">
            <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
            <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
            <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
          </div>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
            Vitamin B12 injections require an{' '}
            <strong>in-person appointment</strong>.
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
            Ebenezer Health Clinic provides injectable services from our
            Bethany location serving Oklahoma City and surrounding
            communities.
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
            While the injection itself cannot be provided through
            telehealth, other appropriate clinic consultations may be
            available through secure telehealth throughout Oklahoma.
          </p>
          <Link href="/contact" className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto">
            Schedule an In-Person Appointment
          </Link>
        </div>
      </section>

      {/* ── WHY CHOOSE EBENEZER ──────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        aria-labelledby="why-choose-heading"
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(232,247,247,0.52)' }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center mb-10 md:mb-14">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--primary)' }}
            >
              Why Ebenezer
            </span>
            <h2
              id="why-choose-heading"
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ color: 'var(--navy)' }}
            >
              Why Choose Ebenezer Health Clinic for B12 Injections?
            </h2>
            <div className="flex items-center justify-center gap-2" aria-hidden="true">
              <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
              <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
              <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                icon: ShieldCheck,
                title: 'Clinical Screening',
                body: 'Patients complete relevant health and safety screening before receiving an injection.',
              },
              {
                icon: UserCheck,
                title: 'Individualized Review',
                body: 'Your health history, medications, allergies, symptoms, and concerns can be reviewed before treatment.',
              },
              {
                icon: Sparkles,
                title: 'Multiple Wellness Services',
                body: 'The clinic offers Vitamin B12 injections alongside IV hydration and special-order Glutathione injections.',
              },
              {
                icon: ClipboardList,
                title: 'Straightforward Intake',
                body: 'The IV/IM Injection Questionnaire helps collect important information before your appointment.',
              },
              {
                icon: MapPin,
                title: 'Convenient Oklahoma City Area Location',
                body: 'In-person injection services are available from our Bethany clinic.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl p-6 bg-white h-full"
                style={{ border: '1px solid rgba(26,166,183,0.15)' }}
              >
                <div
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full mb-4"
                  style={{ backgroundColor: 'rgba(26,166,183,0.10)' }}
                  aria-hidden="true"
                >
                  <item.icon className="h-5 w-5" style={{ color: 'var(--primary)' }} />
                </div>
                <h3 className="text-base font-semibold mb-2" style={{ color: 'var(--navy)' }}>
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MEET YOUR PROVIDER ───────────────────────────────────── */}
      <section className="bg-white" aria-labelledby="provider-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Text content */}
            <div>
              <span
                className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: 'var(--primary)' }}
              >
                Your Provider
              </span>
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
                Care at Ebenezer Health Clinic is led by{' '}
                <strong>Dr. Susan George, DNP, APRN, BC-ADM</strong>.
              </p>
              <p className="text-base text-gray-600 leading-relaxed mb-8">
                Dr. George provides individualized healthcare with attention
                to each patient&apos;s health history, current concerns, and
                appropriate clinical evaluation.
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
                  {[
                    'Doctor of Nursing Practice (DNP)',
                    'Advanced Practice Registered Nurse (APRN)',
                    'Board Certified in Advanced Diabetes Management (BC-ADM)',
                    'In-person care in the Oklahoma City area',
                    'Telehealth throughout Oklahoma for appropriate services',
                  ].map((item) => (
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
                  alt="Dr. Susan George, DNP, APRN — Vitamin B12 Injection Provider at Ebenezer Health Clinic, Oklahoma City"
                  width={520}
                  height={620}
                  className="w-full h-auto max-w-full object-cover"
                  style={{ width: '100%', height: 'auto' }}
                  priority={false}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS (live Google Reviews carousel) ──────────── */}
      <Testimonials />

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        aria-labelledby="faq-heading"
      >
        <Image
          src="/body_bg.webp"
          alt="Calming clinic interior at Ebenezer Health Clinic"
          fill
          sizes="100vw"
          className="object-cover object-center pointer-events-none"
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
              Vitamin B12 Injection FAQs
            </h2>
          </div>

          <VitaminB12FAQAccordion />

          {/* CTAs below FAQ */}
          <div className="text-center mt-10">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto"
              >
                Schedule a B12 Injection
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

      {/* ── VITAMIN B12 INJECTION PRICING ────────────────────────── */}
      <section className="bg-white" aria-labelledby="pricing-heading">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: 'var(--primary)' }}
          >
            Pricing
          </span>
          <h2
            id="pricing-heading"
            className="text-3xl md:text-4xl font-bold mb-3"
            style={{ color: 'var(--navy)' }}
          >
            Vitamin B12 Injection Pricing
          </h2>
          <div className="flex items-center justify-center gap-2 mb-10" aria-hidden="true">
            <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
            <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
            <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
          </div>
          <div
            className="rounded-2xl p-7 md:p-8 text-left"
            style={{
              backgroundColor: 'rgba(151,206,204,0.08)',
              border: '1px solid rgba(26,166,183,0.12)',
            }}
          >
            <div className="flex items-start justify-between gap-4 py-3" style={{ borderBottom: '1px solid rgba(26,166,183,0.12)' }}>
              <span className="text-gray-700 font-semibold">Vitamin B12 Injection</span>
              <span className="text-gray-500 italic">Contact for current pricing</span>
            </div>
            <div className="flex items-start justify-between gap-4 py-3">
              <span className="text-gray-700 font-semibold">What&apos;s Included</span>
              <span className="text-gray-500 italic">Contact for current information</span>
            </div>
          </div>
          <div className="mt-8">
            <Link href="/contact" className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto">
              Contact Us for Current Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* ── VISIT EBENEZER HEALTH CLINIC ─────────────────────────── */}
      <section
        className="relative overflow-hidden"
        aria-labelledby="visit-clinic-heading"
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(232,247,247,0.52)' }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
            <div>
              <h2
                id="visit-clinic-heading"
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
                className="rounded-2xl p-7 md:p-8 bg-white"
                style={{ border: '1px solid rgba(26,166,183,0.15)' }}
              >
                <p className="text-base font-semibold mb-1" style={{ color: 'var(--navy)' }}>
                  Ebenezer Health Clinic
                </p>
                <p className="text-gray-600 mb-1">7415 NW 23rd Street</p>
                <p className="text-gray-600 mb-4">Bethany, OK 73008</p>
                <p className="text-gray-600 mb-1">
                  Phone:{' '}
                  <a href="tel:+14053498188" className="font-semibold" style={{ color: 'var(--primary)' }}>
                    (405) 349-8188
                  </a>
                </p>
                <p className="text-gray-600 mb-4">
                  Email:{' '}
                  <a href="mailto:ebenezerhealth@outlook.com" className="font-semibold" style={{ color: 'var(--primary)' }}>
                    ebenezerhealth@outlook.com
                  </a>
                </p>
                <p className="text-gray-600 mb-1">
                  In-Person Care: Oklahoma City area
                </p>
                <p className="text-gray-600 mb-6">
                  Telehealth: Available throughout Oklahoma for appropriate
                  services
                </p>
                <div className="flex flex-col sm:flex-row flex-wrap gap-3">
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
                    className="btn-primary text-sm px-5 py-3 w-full sm:w-auto text-center"
                  >
                    Call (405) 349-8188
                  </a>
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

      {/* ── VITAMIN B12 INJECTIONS IN OKC & BETHANY ──────────────── */}
      <section className="bg-white" aria-labelledby="okc-bethany-heading">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <h2
            id="okc-bethany-heading"
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ color: 'var(--navy)' }}
          >
            Vitamin B12 Injections in Oklahoma City &amp; Bethany
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
            Ebenezer Health Clinic provides Vitamin B12 injections from our
            Bethany location serving patients in Oklahoma City and
            surrounding communities.
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
            Our process includes appropriate screening before treatment,
            with consideration of relevant health history, medications,
            allergies, symptoms, and other safety information.
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            If you are interested in a Vitamin B12 injection or are unsure
            which injectable or IV service is appropriate, contact our team
            to discuss your options.
          </p>
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
            Schedule Your Vitamin B12 Injection
          </h2>
          <p className="text-lg text-gray-700 mb-2 leading-relaxed">
            Interested in a Vitamin B12 injection?
          </p>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Schedule an in-person appointment with Ebenezer Health Clinic and
            complete the IV/IM Injection Questionnaire before treatment.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <Link href="/contact" className="btn-primary text-base px-8 py-3.5 w-full sm:w-auto">
              Schedule a B12 Injection
            </Link>
            <Link href="/contact" className="btn-outline text-base px-8 py-3.5 w-full sm:w-auto">
              Complete IV/IM Injection Questionnaire
            </Link>
          </div>
          <a
            href="tel:+14053498188"
            className="inline-flex items-center justify-center gap-2 text-gray-700 hover:text-primary font-semibold text-base transition-colors"
          >
            Call (405) 349-8188
          </a>

          {/* Internal links */}
          <div className="mt-10 pt-8" style={{ borderTop: '1px solid rgba(26,166,183,0.12)' }}>
            <nav
              className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-sm font-semibold"
              aria-label="Related IV therapy links"
              style={{ color: 'var(--primary)' }}
            >
              <Link href="/iv-therapy" className="hover:opacity-80">IV Hydration &amp; Injections</Link>
              <span aria-hidden="true" className="text-gray-300">|</span>
              <Link href="/iv-therapy/iv-hydration" className="hover:opacity-80">IV Hydration</Link>
              <span aria-hidden="true" className="text-gray-300">|</span>
              <Link href="/injections" className="hover:opacity-80">Glutathione Injections</Link>
            </nav>
          </div>
        </div>
      </section>

    </>
  )
}
