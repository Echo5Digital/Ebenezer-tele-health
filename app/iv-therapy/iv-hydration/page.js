import Link from 'next/link'
import Image from 'next/image'
import {
  Info,
  Droplets,
  Sparkles,
  Syringe,
  ClipboardList,
  ShieldCheck,
  MapPin,
  CheckCircle2,
  CalendarCheck,
  UserCheck,
  MessageSquareText,
} from 'lucide-react'
import Testimonials from '@/components/Testimonials'
import IVHydrationFAQAccordion from './IVHydrationFAQAccordion'

export const metadata = {
  title: 'IV Hydration Oklahoma City',
  description:
    'IV hydration in the Oklahoma City area with clinical screening before treatment. Schedule IV hydration at Ebenezer Health Clinic in Bethany, OK.',
  keywords: [
    'IV Hydration Oklahoma City',
    'IV Hydration OKC',
    'IV Therapy Oklahoma City',
    'IV Therapy OKC',
    'IV Hydration Bethany OK',
    'IV Hydration Clinic Oklahoma City',
    'IV Hydration Near Oklahoma City',
    'IV Hydration Services Oklahoma City',
  ],
  alternates: {
    canonical: 'https://www.ebenezerhealthclinic.com/iv-therapy/iv-hydration',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.ebenezerhealthclinic.com/iv-therapy/iv-hydration',
    siteName: 'Ebenezer Health Clinic',
    title: 'IV Hydration Oklahoma City | Ebenezer Health Clinic',
    description:
      'IV hydration in the Oklahoma City area with clinical screening before treatment. Schedule IV hydration at Ebenezer Health Clinic in Bethany, OK.',
    images: ['/iv-therapy-hydration.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IV Hydration Oklahoma City | Ebenezer Health Clinic',
    description:
      'IV hydration in the Oklahoma City area with clinical screening before treatment. Schedule IV hydration at Ebenezer Health Clinic in Bethany, OK.',
    images: ['/iv-therapy-hydration.webp'],
  },
}

// ─── Schema ───────────────────────────────────────────────────────────────────

const SITE = 'https://www.ebenezerhealthclinic.com'
const PAGE_URL = `${SITE}/iv-therapy/iv-hydration`

const ivHydrationSchemaGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalWebPage',
      '@id': `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: 'IV Hydration Oklahoma City | Ebenezer Health Clinic',
      headline: 'IV Hydration in Oklahoma City',
      description:
        'IV hydration in the Oklahoma City area with clinical screening before treatment. Schedule IV hydration at Ebenezer Health Clinic in Bethany, OK.',
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
      name: 'IV Hydration',
      procedureType: 'TherapeuticProcedure',
      description:
        'IV hydration at Ebenezer Health Clinic is provided after a health and safety questionnaire and appropriate clinical evaluation to help determine whether treatment is suitable.',
      bodyLocation: 'Intravenous',
      provider: { '@id': `${SITE}/#organization` },
      areaServed: { '@type': 'City', name: 'Oklahoma City' },
    },
    {
      '@type': 'FAQPage',
      '@id': `${PAGE_URL}#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Does Ebenezer Health Clinic offer IV hydration?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Yes. IV hydration is available as part of Ebenezer Health Clinic's IV Hydration & Injections services.",
          },
        },
        {
          '@type': 'Question',
          name: 'Where can I get IV hydration in the Oklahoma City area?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ebenezer Health Clinic provides IV hydration from its Bethany location serving Oklahoma City and surrounding communities.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the Wellness Mix?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Wellness Mix is an IV hydration option offered by Ebenezer Health Clinic. Contact the clinic for current information about its formulation, availability, and pricing.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need to complete a questionnaire before IV hydration?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. The IV/IM Injection Questionnaire collects relevant health and safety information before treatment.',
          },
        },
        {
          '@type': 'Question',
          name: 'What if I am not sure whether I need IV hydration or an injection?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The questionnaire includes a "Not sure – discuss with clinician" option. Your clinician can review your concerns and discuss appropriate options.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does completing the questionnaire mean I am approved for IV hydration?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. The questionnaire is a screening tool and does not replace clinical evaluation or guarantee treatment.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is IV hydration available through telehealth?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. IV hydration requires in-person administration.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Ebenezer Health Clinic also offer vitamin injections?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. The clinic offers Vitamin B12 Injection and Glutathione Injection, with Glutathione available by special order upon request.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much does IV hydration cost?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Contact Ebenezer Health Clinic for current IV hydration pricing. Only clinic-confirmed pricing should be published on the website.',
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
        { '@type': 'ListItem', position: 3, name: 'IV Hydration', item: PAGE_URL },
      ],
    },
  ],
}

const safetyScreeningItems = [
  'Allergies',
  'Previous reactions to IVs or injections',
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

const dayOfScreeningItems = [
  'Chest pain',
  'Trouble breathing',
  'Confusion',
  'Severe weakness',
  'Neurological symptoms',
  'Vomiting or diarrhea',
  'Difficulty keeping fluids down',
  'Severe dehydration',
  'Rash, infection, burns, injury, or swelling near the treatment site',
  'Alcohol or recreational drug use within the previous 24 hours',
  'Whether you have eaten recently',
  'Recent water or fluid intake',
  'Any additional concerns',
]

const questionnaireItems = [
  'Full legal name',
  'Date of birth',
  'Contact information',
  'Emergency contact',
  'Requested service',
  'Treatment goal',
  'Current symptoms',
  'Symptom severity',
  'Medical history',
  'Allergies',
  'Previous reactions',
  'Current medications',
  'Recent treatments',
  'Additional safety information',
  'Questions or concerns',
]

export default function IVHydrationPage() {
  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ivHydrationSchemaGraph) }}
      />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden -mt-[112px] sm:-mt-[128px] lg:-mt-[144px] pt-[112px] sm:pt-[128px] lg:pt-[144px]"
      >
        {/* Background image */}
        <Image
          src="/iv-therapy-hydration.webp"
          alt="IV hydration bag set up in a treatment room at Ebenezer Health Clinic"
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
              <span style={{ color: 'var(--primary)' }}>IV Hydration</span>
            </nav>

            {/* Label */}
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--primary)' }}
            >
              IV Hydration · Oklahoma City
            </span>

            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 leading-tight"
              style={{ color: 'var(--navy)' }}
            >
              IV Hydration in Oklahoma City
            </h1>

            <p
              className="text-base md:text-lg leading-relaxed mb-3 max-w-xl"
              style={{ color: 'var(--navy)' }}
            >
              Looking for professional IV hydration services in the Oklahoma
              City area?
            </p>
            <p
              className="text-base md:text-lg leading-relaxed mb-3 max-w-xl"
              style={{ color: 'var(--navy)' }}
            >
              Ebenezer Health Clinic provides{' '}
              <strong>IV hydration with clinical screening before
              treatment</strong> from our Bethany location serving Oklahoma
              City and surrounding communities.
            </p>
            <p
              className="text-base md:text-lg leading-relaxed mb-8 max-w-xl"
              style={{ color: 'var(--navy)' }}
            >
              Before receiving IV hydration, patients complete a health and
              safety questionnaire and undergo appropriate clinical
              evaluation to help determine whether treatment is suitable for
              them.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
              <Link
                href="/contact"
                className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto text-center"
              >
                Schedule IV Hydration
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

      {/* ── IV HYDRATION AT EBENEZER HEALTH CLINIC ───────────────── */}
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
            IV Hydration at Ebenezer Health Clinic
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6" aria-hidden="true">
            <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
            <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
            <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
          </div>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
            IV hydration is one of the services available through Ebenezer
            Health Clinic&apos;s <strong>IV Hydration &amp; Injections</strong>{' '}
            program.
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
            Our approach begins with understanding why you are seeking
            treatment, your current symptoms or concerns, relevant medical
            history, medications, allergies, and other safety information.
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
            Treatment is provided only after appropriate screening and
            clinical evaluation.
          </p>
          <Link href="/contact" className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto">
            Schedule Your Appointment
          </Link>
        </div>
      </section>

      {/* ── WELLNESS MIX ──────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        aria-labelledby="wellness-mix-heading"
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
            Wellness Option
          </span>
          <h2
            id="wellness-mix-heading"
            className="text-3xl md:text-4xl font-bold mb-3"
            style={{ color: 'var(--navy)' }}
          >
            Wellness Mix
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6" aria-hidden="true">
            <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
            <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
            <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
          </div>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
            As part of our IV hydration services, Ebenezer Health Clinic
            offers the <strong>Wellness Mix</strong>.
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
            This service was previously referred to as the &ldquo;Beauty
            Mix.&rdquo; The updated name better reflects its positioning
            within the clinic&apos;s broader IV hydration and wellness
            services.
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
            Before receiving the Wellness Mix, patients complete appropriate
            health and safety screening.
          </p>
          <Link href="/contact" className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto">
            Ask About the Wellness Mix
          </Link>
        </div>
      </section>

      {/* ── IS IV HYDRATION RIGHT FOR ME ─────────────────────────── */}
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
              Is IV Hydration Right for Me?
            </h2>
            <div className="flex items-center justify-center gap-2" aria-hidden="true">
              <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
              <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
              <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
            </div>
          </div>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-2 text-center">
            Not every service is appropriate for every patient.
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6 text-center">
            Before treatment, Ebenezer Health Clinic asks patients about
            their current health, medical history, medications, allergies,
            symptoms, and other relevant safety information.
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4 text-center">
            The clinic&apos;s questionnaire also allows patients to select:
          </p>
          <ul className="max-w-md mx-auto space-y-3 mb-6">
            {['IV Hydration', 'IM Injection', 'Not sure – discuss with clinician'].map(
              (item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    className="h-5 w-5 mt-0.5 flex-shrink-0"
                    style={{ color: 'var(--primary)' }}
                    aria-hidden="true"
                  />
                  <span className="text-gray-700 leading-snug">{item}</span>
                </li>
              )
            )}
          </ul>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-2 text-center">
            If you are unsure which service is appropriate, you do not need
            to make that decision by yourself before your appointment.
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8 text-center">
            Your provider can review your information and discuss the
            appropriate next steps.
          </p>
          <div className="flex justify-center">
            <Link href="/contact" className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto">
              Discuss Your Options
            </Link>
          </div>
        </div>
      </section>

      {/* ── HEALTH & SAFETY SCREENING ─────────────────────────────── */}
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
              Health &amp; Safety Screening Before IV Hydration
            </h2>
            <div className="flex items-center justify-center gap-2" aria-hidden="true">
              <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
              <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
              <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
            </div>
          </div>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4 text-center">
            Patient screening is an important part of the IV hydration
            process.
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8 text-center">
            Before treatment, you may be asked about:
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
            Answering these questions accurately helps the clinician
            determine whether IV hydration is appropriate based on your
            individual circumstances.
          </p>
        </div>
      </section>

      {/* ── ADDITIONAL DAY-OF-TREATMENT SAFETY QUESTIONS ─────────── */}
      <section className="bg-white" aria-labelledby="day-of-screening-heading">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center mb-6">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--primary)' }}
            >
              Day of Your Visit
            </span>
            <h2
              id="day-of-screening-heading"
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ color: 'var(--navy)' }}
            >
              Additional Day-of-Treatment Safety Questions
            </h2>
            <div className="flex items-center justify-center gap-2" aria-hidden="true">
              <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
              <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
              <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
            </div>
          </div>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4 text-center">
            Your questionnaire also includes questions about your current
            condition before treatment.
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8 text-center">
            Patients may be asked about:
          </p>
          <div
            className="rounded-2xl p-7 md:p-8"
            style={{
              backgroundColor: 'rgba(151,206,204,0.08)',
              border: '1px solid rgba(26,166,183,0.12)',
            }}
          >
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
              {dayOfScreeningItems.map((item) => (
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
            These questions are designed to provide your clinician with
            relevant information before determining whether treatment should
            proceed.
          </p>
        </div>
      </section>

      {/* ── COMPLETE YOUR QUESTIONNAIRE ───────────────────────────── */}
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
                Complete Your IV/IM Injection Questionnaire
              </h2>
              <p className="text-base text-gray-600 leading-relaxed mb-6">
                Before your appointment, complete the{' '}
                <strong>IV/IM Injection Questionnaire</strong>.
              </p>
              <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--primary)' }}>
                The questionnaire collects information including:
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
                If you are unsure whether you need IV hydration or an
                injection, select{' '}
                <strong>&ldquo;Not sure – discuss with clinician.&rdquo;</strong>
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

      {/* ── WHAT TO EXPECT AT YOUR VISIT ──────────────────────────── */}
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
              What to Expect at Your IV Hydration Visit
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
                title: 'Schedule Your Appointment',
                body: 'Contact Ebenezer Health Clinic to schedule your IV hydration visit.',
              },
              {
                title: 'Complete Your Questionnaire',
                body: 'Provide accurate information about your current health, medical history, medications, allergies, symptoms, and treatment goals.',
              },
              {
                title: 'Complete Clinical Screening',
                body: 'Your information will be reviewed to help determine whether IV hydration is appropriate for you.',
              },
              {
                title: 'Receive Your Service if Appropriate',
                body: "If you are an appropriate candidate following screening and evaluation, your IV hydration service can proceed according to the clinic's treatment process.",
              },
              {
                title: 'Ask Questions',
                body: 'Let your clinician know about any concerns or changes in your health before treatment.',
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
              Schedule IV Hydration
            </Link>
          </div>
        </div>
      </section>

      {/* ── COMPLETING THE QUESTIONNAIRE DOES NOT GUARANTEE TREATMENT ── */}
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
            Completing the Questionnaire Does Not Guarantee Treatment
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6" aria-hidden="true">
            <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
            <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
            <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
          </div>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
            Completing the IV/IM Injection Questionnaire is part of the
            screening process, but{' '}
            <strong>
              it does not guarantee that IV hydration or an injection will be
              provided
            </strong>
            .
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
            Your questionnaire does not replace clinical evaluation.
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
            Patients should provide accurate health information and inform
            the clinic about any changes in their health before receiving
            treatment.
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            The final decision about whether a service is appropriate is
            made following clinical review.
          </p>
        </div>
      </section>

      {/* ── IV HYDRATION VS. INJECTIONS ──────────────────────────── */}
      <section className="bg-white" aria-labelledby="vs-injections-heading">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center mb-10 md:mb-14">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--primary)' }}
            >
              Which Service Is Right for You?
            </span>
            <h2
              id="vs-injections-heading"
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ color: 'var(--navy)' }}
            >
              IV Hydration vs. Injections
            </h2>
            <div className="flex items-center justify-center gap-2" aria-hidden="true">
              <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
              <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
              <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
            </div>
          </div>

          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-10 text-center max-w-3xl mx-auto">
            Ebenezer Health Clinic offers both{' '}
            <strong>IV Hydration and Injections</strong>, but they are
            separate types of services.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
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
                  IV hydration involves treatment administered intravenously.
                </p>
              </div>
            </article>

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
                    Injections
                  </h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  The clinic also offers injectable services, including{' '}
                  <strong>Vitamin B12 Injection and Glutathione
                  Injection</strong>, with Glutathione available by special
                  order upon request.
                </p>
              </div>
            </article>
          </div>

          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
            If you are uncertain which service you need, the clinic&apos;s
            questionnaire allows you to select{' '}
            <strong>&ldquo;Not sure – discuss with clinician.&rdquo;</strong>
          </p>
          <div className="flex justify-center">
            <Link href="/iv-therapy" className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto">
              Explore IV Hydration &amp; Injections
            </Link>
          </div>
        </div>
      </section>

      {/* ── IN-PERSON IV HYDRATION IN THE OKC AREA ───────────────── */}
      <section
        className="relative overflow-hidden"
        aria-labelledby="in-person-heading"
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
            In-Person Only
          </span>
          <h2
            id="in-person-heading"
            className="text-3xl md:text-4xl font-bold mb-3"
            style={{ color: 'var(--navy)' }}
          >
            In-Person IV Hydration in the Oklahoma City Area
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6" aria-hidden="true">
            <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
            <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
            <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
          </div>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
            IV hydration is an <strong>in-person service</strong> and cannot
            be administered through telehealth.
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
            Appointments are available at Ebenezer Health Clinic&apos;s
            Bethany location serving Oklahoma City and surrounding
            communities.
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
            Other appropriate clinic consultations may be available through
            telehealth throughout Oklahoma.
          </p>
          <Link href="/contact" className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto">
            Schedule an In-Person Appointment
          </Link>
        </div>
      </section>

      {/* ── WHY CHOOSE EBENEZER ──────────────────────────────────── */}
      <section className="bg-white" aria-labelledby="why-choose-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
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
              Why Choose Ebenezer Health Clinic for IV Hydration?
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
                title: 'Clinical Screening Before Treatment',
                body: 'Patients complete health and safety screening before receiving IV hydration.',
              },
              {
                icon: UserCheck,
                title: 'Individualized Evaluation',
                body: 'Your current symptoms, medical history, medications, allergies, and other relevant information are considered before treatment.',
              },
              {
                icon: Sparkles,
                title: 'IV Hydration & Injection Options',
                body: 'The clinic offers IV hydration alongside Vitamin B12 and special-order Glutathione injections.',
              },
              {
                icon: ClipboardList,
                title: 'Clear Intake Process',
                body: 'The IV/IM Injection Questionnaire helps collect important information before your appointment.',
              },
              {
                icon: MapPin,
                title: 'Convenient Location',
                body: 'IV hydration is available from our Bethany clinic serving Oklahoma City and surrounding communities.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl p-6 h-full"
                style={{
                  backgroundColor: 'rgba(151,206,204,0.08)',
                  border: '1px solid rgba(26,166,183,0.12)',
                }}
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
      <section
        className="relative overflow-hidden"
        aria-labelledby="provider-heading"
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(232,247,247,0.52)' }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
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
                Dr. George provides individualized healthcare with an
                emphasis on appropriate clinical evaluation and understanding
                each patient&apos;s health history and concerns.
              </p>

              {/* Credentials */}
              <div
                className="rounded-2xl p-6 bg-white"
                style={{
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
                  alt="Dr. Susan George, DNP, APRN — IV Hydration Provider at Ebenezer Health Clinic, Oklahoma City"
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
              IV Hydration FAQs
            </h2>
          </div>

          <IVHydrationFAQAccordion />

          {/* CTAs below FAQ */}
          <div className="text-center mt-10">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto"
              >
                Schedule IV Hydration
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

      {/* ── IV HYDRATION PRICING ─────────────────────────────────── */}
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
            IV Hydration Pricing
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
              <span className="text-gray-700 font-semibold">IV Hydration</span>
              <span className="text-gray-500 italic">Contact for current pricing</span>
            </div>
            <div className="flex items-start justify-between gap-4 py-3" style={{ borderBottom: '1px solid rgba(26,166,183,0.12)' }}>
              <span className="text-gray-700 font-semibold">Wellness Mix</span>
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

      {/* ── IV HYDRATION IN OKLAHOMA CITY & BETHANY ───────────────── */}
      <section className="bg-white" aria-labelledby="okc-bethany-heading">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <h2
            id="okc-bethany-heading"
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ color: 'var(--navy)' }}
          >
            IV Hydration in Oklahoma City &amp; Bethany
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
            Ebenezer Health Clinic provides professional IV hydration
            services from our Bethany location serving Oklahoma City and
            surrounding communities.
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
            Patients complete health and safety screening before treatment to
            help determine whether IV hydration is appropriate for their
            individual circumstances.
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            If you are interested in IV hydration or are unsure whether IV
            hydration or an injection is right for you, contact our team to
            discuss the next step.
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
            Schedule Your IV Hydration Appointment
          </h2>
          <p className="text-lg text-gray-700 mb-2 leading-relaxed">
            Ready to learn more about IV hydration?
          </p>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Schedule an appointment with Ebenezer Health Clinic and complete
            your IV/IM Injection Questionnaire before treatment.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <Link href="/contact" className="btn-primary text-base px-8 py-3.5 w-full sm:w-auto">
              Schedule IV Hydration
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
              <Link href="/injections" className="hover:opacity-80">Vitamin B12 Injections</Link>
              <span aria-hidden="true" className="text-gray-300">|</span>
              <Link href="/injections" className="hover:opacity-80">Glutathione Injections</Link>
            </nav>
          </div>
        </div>
      </section>

    </>
  )
}
