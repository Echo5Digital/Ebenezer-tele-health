import Link from 'next/link'
import Image from 'next/image'
import {
  Info,
  Droplets,
  Sparkles,
  Syringe,
  FlaskConical,
  ClipboardList,
  ShieldCheck,
  Stethoscope,
  MapPin,
  CheckCircle2,
} from 'lucide-react'
import Testimonials from '@/components/Testimonials'
import IVTherapyFAQAccordion from './IVTherapyFAQAccordion'

export const metadata = {
  title: 'IV Hydration & B12 Injections Oklahoma City',
  description:
    'IV hydration and injection services in the Oklahoma City area, including Wellness Mix, Vitamin B12 injections and special-order Glutathione injections.',
  keywords: [
    'IV Hydration Oklahoma City',
    'IV Therapy Oklahoma City',
    'IV Hydration OKC',
    'Vitamin B12 Injection Oklahoma City',
    'B12 Shots Oklahoma City',
    'Vitamin Injections Oklahoma City',
    'IV Hydration Bethany OK',
    'Glutathione Injection Oklahoma City',
  ],
  alternates: {
    canonical: 'https://www.ebenezerhealthclinic.com/iv-therapy',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.ebenezerhealthclinic.com/iv-therapy',
    siteName: 'Ebenezer Health Clinic',
    title: 'IV Hydration & B12 Injections Oklahoma City | Ebenezer Health Clinic',
    description:
      'IV hydration and injection services in the Oklahoma City area, including Wellness Mix, Vitamin B12 injections and special-order Glutathione injections.',
    images: ['/iv-therapy-hydration.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IV Hydration & B12 Injections Oklahoma City | Ebenezer Health Clinic',
    description:
      'IV hydration and injection services in the Oklahoma City area, including Wellness Mix, Vitamin B12 injections and special-order Glutathione injections.',
    images: ['/iv-therapy-hydration.webp'],
  },
}

// ─── Schema ───────────────────────────────────────────────────────────────────

const ivTherapySchemaGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalWebPage',
      '@id': 'https://www.ebenezerhealthclinic.com/iv-therapy#webpage',
      url: 'https://www.ebenezerhealthclinic.com/iv-therapy',
      name: 'IV Hydration & B12 Injections Oklahoma City | Ebenezer Health Clinic',
      headline: 'IV Hydration & Vitamin Injections in Oklahoma City',
      description:
        'IV hydration and injection services in the Oklahoma City area, including Wellness Mix, Vitamin B12 injections and special-order Glutathione injections.',
      about: [
        { '@type': 'MedicalTherapy', name: 'IV Hydration' },
        { '@type': 'MedicalTherapy', name: 'Wellness Mix' },
        { '@type': 'MedicalTherapy', name: 'Vitamin B12 Injection' },
        { '@type': 'MedicalTherapy', name: 'Glutathione Injection' },
      ],
      mainEntity: { '@id': 'https://www.ebenezerhealthclinic.com/#clinic' },
      isPartOf: {
        '@type': 'WebSite',
        '@id': 'https://www.ebenezerhealthclinic.com/#website',
        url: 'https://www.ebenezerhealthclinic.com',
        name: 'Ebenezer Health Clinic',
      },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: 'https://www.ebenezerhealthclinic.com/iv-therapy-hydration.webp',
      },
      medicalAudience: {
        '@type': 'MedicalAudience',
        audienceType: 'Patients',
      },
    },
    {
      '@type': 'MedicalClinic',
      '@id': 'https://www.ebenezerhealthclinic.com/#clinic',
      name: 'Ebenezer Health Clinic',
      url: 'https://www.ebenezerhealthclinic.com',
      telephone: '+1-405-349-8188',
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '7415 NW 23rd St',
        addressLocality: 'Bethany',
        addressRegion: 'OK',
        postalCode: '73008',
        addressCountry: 'US',
      },
      areaServed: [
        { '@type': 'City', name: 'Oklahoma City' },
        { '@type': 'City', name: 'Bethany' },
        { '@type': 'State', name: 'Oklahoma' },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.ebenezerhealthclinic.com/iv-therapy#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What IV hydration and injection services do you offer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ebenezer Health Clinic offers IV hydration services, Wellness Mix, Vitamin B12 injections, and Glutathione injections available by special order upon request.',
          },
        },
        {
          '@type': 'Question',
          name: 'What happened to the Beauty Mix?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The service previously referred to as Beauty Mix is being presented as Wellness Mix.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you offer Vitamin B12 injections?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Vitamin B12 injections are available as part of our injection services, subject to appropriate clinical screening.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you offer Glutathione injections?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Glutathione injections are available by special order upon request. Please contact the clinic regarding availability before your visit.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need to complete a questionnaire?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. The IV/IM questionnaire provides important information about your symptoms, medications, allergies, medical history, and other factors relevant to determining whether treatment is appropriate.',
          },
        },
        {
          '@type': 'Question',
          name: "What if I'm not sure whether I need IV hydration or an injection?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can select "Not sure – discuss with clinician" on the questionnaire. Your provider can review your treatment goal and relevant health information with you.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does completing the questionnaire mean I am approved for treatment?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Completing the questionnaire is part of the screening process and does not guarantee that treatment will be provided.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can everyone receive IV hydration or injections?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Not necessarily. Treatment depends on your individual health history, symptoms, medications, allergies, and clinical evaluation.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are Glutathione injections always available?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Glutathione injections are available by special order upon request, so patients should contact the clinic regarding availability.',
          },
        },
      ],
    },
  ],
}

const safetyScreeningItems = [
  'Medication, food, latex, adhesive, or antiseptic allergies',
  'Previous reactions to injections, IV infusions, vitamins, or medications',
  'Pregnancy, possible pregnancy, breastfeeding, or trying to conceive',
  'Kidney disease or kidney-function concerns',
  'Kidney stones or dialysis',
  'Heart disease or heart failure',
  'Swelling, edema, or fluid restrictions',
  'Liver disease',
  'Blood-pressure concerns, fainting, or severe dizziness',
  'Diabetes or blood-glucose concerns',
  'Bleeding disorders or use of blood thinners',
  'Immune suppression',
  'Active infection, fever, or recent illness',
  'Current medications and supplements',
  'Recent injections, IV infusions, vaccinations, surgeries, or hospitalizations',
]

const dayOfScreeningItems = [
  'Chest pain',
  'Trouble breathing',
  'Confusion',
  'Severe weakness',
  'New neurological symptoms',
  'Persistent vomiting or diarrhea',
  'Inability to keep fluids down',
  'Severe dehydration',
  'Rash, infection, burns, injury, or swelling near a possible IV or injection site',
  'Alcohol or recreational drug use within the previous 24 hours',
  'Whether you have eaten recently',
  'Whether you have had water or other fluids that day',
]

const questionnaireItems = [
  'Full legal name',
  'Date of birth',
  'Phone number and email',
  'Emergency contact information',
  'Requested service',
  'Treatment goal',
  'Current symptoms',
  'Relevant health history',
  'Current medications and supplements',
  'Allergies and previous reactions',
  'Recent treatments or procedures',
  'Additional safety-screening information',
  'Any additional concerns',
]

export default function IVTherapyPage() {
  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ivTherapySchemaGraph) }}
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
              className="flex items-center gap-2 text-sm text-gray-500 mb-6"
              aria-label="Breadcrumb"
            >
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <span aria-hidden="true">/</span>
              <span style={{ color: 'var(--primary)' }}>IV Therapy</span>
            </nav>

            {/* Label */}
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--primary)' }}
            >
              IV Hydration &amp; Injections · Oklahoma City
            </span>

            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 leading-tight"
              style={{ color: 'var(--navy)' }}
            >
              IV Hydration &amp; Vitamin Injections in Oklahoma City
            </h1>

            <p
              className="text-base md:text-lg leading-relaxed mb-3 max-w-xl"
              style={{ color: 'var(--navy)' }}
            >
              Support your wellness with convenient IV hydration and injection
              services at Ebenezer Health Clinic.
            </p>
            <p
              className="text-base md:text-lg leading-relaxed mb-3 max-w-xl"
              style={{ color: 'var(--navy)' }}
            >
              Our services include <strong>IV hydration, Wellness Mix, Vitamin
              B12 injections, and Glutathione injections available by special
              order upon request</strong>.
            </p>
            <p
              className="text-base md:text-lg leading-relaxed mb-8 max-w-xl"
              style={{ color: 'var(--navy)' }}
            >
              Each patient is screened before treatment to help determine
              whether the requested service is appropriate based on
              individual health needs.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
              <Link
                href="/contact"
                className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto text-center"
              >
                Schedule IV Hydration or Injection
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

      {/* ── IV HYDRATION & INJECTION SERVICES AT EBENEZER ────────── */}
      <section className="bg-white" aria-labelledby="services-intro-heading">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: 'var(--primary)' }}
          >
            About Our Services
          </span>
          <h2
            id="services-intro-heading"
            className="text-3xl md:text-4xl font-bold mb-3"
            style={{ color: 'var(--navy)' }}
          >
            IV Hydration &amp; Injection Services at Ebenezer Health Clinic
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6" aria-hidden="true">
            <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
            <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
            <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
          </div>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
            At Ebenezer Health Clinic, we provide IV hydration and injection
            services with an emphasis on individualized screening and patient
            safety.
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
            Before receiving treatment, patients complete a health
            questionnaire covering current symptoms, medications, allergies,
            medical conditions, and recent treatments.
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            Your provider will review relevant health information to
            determine whether the requested IV hydration or injection service
            is appropriate for you.
          </p>
        </div>
      </section>

      {/* ── OUR IV HYDRATION & INJECTION SERVICES ────────────────── */}
      <section
        className="relative overflow-hidden"
        aria-labelledby="iv-services-heading"
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(232,247,247,0.52)' }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="mb-10 md:mb-14 text-center">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--primary)' }}
            >
              What We Offer
            </span>
            <h2
              id="iv-services-heading"
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ color: 'var(--navy)' }}
            >
              Our IV Hydration &amp; Injection Services
            </h2>
            <div className="flex items-center justify-center gap-2" aria-hidden="true">
              <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
              <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
              <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* IV Hydration */}
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
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  IV hydration provides fluids intravenously under appropriate
                  clinical supervision.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  Before treatment, we review relevant health information,
                  including your symptoms, medical history, medications,
                  allergies, hydration status, and other factors that may
                  affect whether IV hydration is appropriate for you.
                </p>
                <Link
                  href="/contact"
                  className="mt-auto btn-primary text-sm text-center"
                >
                  Schedule IV Hydration
                </Link>
              </div>
            </article>

            {/* Wellness Mix */}
            <article
              className="rounded-2xl overflow-hidden flex flex-col bg-white"
              style={{ border: '1px solid rgba(26,166,183,0.18)' }}
            >
              <div className="p-6 md:p-7 flex flex-col flex-1">
                <div className="flex items-start gap-3 mb-4">
                  <div
                    className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: 'rgba(26,166,183,0.15)' }}
                    aria-hidden="true"
                  >
                    <Sparkles className="h-5 w-5" style={{ color: 'var(--primary)' }} />
                  </div>
                  <h3
                    className="text-lg font-semibold leading-snug pt-1.5"
                    style={{ color: 'var(--navy)' }}
                  >
                    Wellness Mix
                  </h3>
                </div>
                <p className="text-xs italic text-gray-500 mb-3">
                  <strong className="not-italic">Formerly referred to as Beauty Mix</strong>
                </p>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  Our Wellness Mix is available for patients seeking an IV
                  wellness option at Ebenezer Health Clinic.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  Because IV therapy should be individualized, your provider
                  will review your health information and treatment goals
                  before determining whether the service is appropriate.
                </p>
                <Link
                  href="/contact"
                  className="mt-auto btn-primary text-sm text-center"
                >
                  Ask About Wellness Mix
                </Link>
              </div>
            </article>

            {/* Vitamin B12 Injection */}
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
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  Vitamin B12 injections are available as part of our
                  injection services.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  Before receiving an injection, patients are screened for
                  relevant medical history, allergies, medications, previous
                  reactions, and other health considerations.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  Your provider will determine whether a Vitamin B12
                  injection is appropriate for you based on your individual
                  clinical circumstances.
                </p>
                <Link
                  href="/contact"
                  className="mt-auto btn-primary text-sm text-center"
                >
                  Ask About Vitamin B12 Injections
                </Link>
              </div>
            </article>

            {/* Glutathione Injection */}
            <article
              className="rounded-2xl overflow-hidden flex flex-col bg-white"
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
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  If you are interested in a Glutathione injection, contact
                  Ebenezer Health Clinic before your visit so our team can
                  discuss availability and the next steps.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  Treatment is subject to appropriate clinical screening and
                  provider evaluation.
                </p>
                <Link
                  href="/contact"
                  className="mt-auto btn-primary text-sm text-center"
                >
                  Request a Glutathione Injection
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ── WHICH SERVICE DO I NEED ──────────────────────────────── */}
      <section className="bg-white" aria-labelledby="which-service-heading">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center mb-6">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--primary)' }}
            >
              Not Sure Where to Start?
            </span>
            <h2
              id="which-service-heading"
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ color: 'var(--navy)' }}
            >
              IV Hydration or IM Injection &ndash; Which Service Do I Need?
            </h2>
            <div className="flex items-center justify-center gap-2" aria-hidden="true">
              <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
              <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
              <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
            </div>
          </div>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-2 text-center">
            Not sure whether you need an IV hydration service or an IM
            injection?
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6 text-center">
            That&apos;s okay.
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4 text-center">
            Our patient questionnaire allows you to select:
          </p>
          <ul className="max-w-md mx-auto space-y-3 mb-6">
            {['IM injection', 'IV hydration', 'Not sure – discuss with clinician'].map(
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
            You can also tell us the treatment or wellness goal you would
            like to discuss and your primary reason for visiting.
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed text-center">
            Your provider can then review your information and discuss
            appropriate options with you.
          </p>
        </div>
      </section>

      {/* ── SAFETY SCREENING ──────────────────────────────────────── */}
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
              Safety Screening Before IV Hydration or Injections
            </h2>
            <div className="flex items-center justify-center gap-2" aria-hidden="true">
              <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
              <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
              <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
            </div>
          </div>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4 text-center">
            Your health and safety are important.
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8 text-center">
            Before treatment, we ask patients to provide relevant health
            information that may affect whether an IV hydration or injection
            service is appropriate. The screening questionnaire asks about
            areas including:
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
            Please answer the questionnaire accurately and let the clinic
            know if your health, medications, allergies, or symptoms change
            before treatment.
          </p>
        </div>
      </section>

      {/* ── ADDITIONAL SCREENING ON DAY OF TREATMENT ─────────────── */}
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
              Additional Screening on the Day of Treatment
            </h2>
            <div className="flex items-center justify-center gap-2" aria-hidden="true">
              <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
              <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
              <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
            </div>
          </div>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8 text-center">
            We may also ask about symptoms or circumstances that could affect
            treatment on the day of your visit. These include:
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
            Completing the questionnaire does{' '}
            <strong className="not-italic">not guarantee treatment</strong>.
            Your provider will determine whether treatment is appropriate
            following clinical screening.
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
              <p className="text-base text-gray-600 leading-relaxed mb-3">
                Before your appointment, complete our{' '}
                <strong>IV or IM Injection Questionnaire</strong>.
              </p>
              <p className="text-base text-gray-600 leading-relaxed mb-6">
                The questionnaire helps our clinical team understand the
                service you are requesting, your current symptoms, medical
                history, medications, allergies, recent treatments, and other
                safety considerations.
              </p>
              <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--primary)' }}>
                You will be asked to provide:
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
              <p className="text-base text-gray-600 leading-relaxed mb-6">
                If you prefer, our team can assist you with completing the
                questionnaire during your initial intake or free consultation
                call.
              </p>
              <Link href="/contact" className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto text-center inline-block">
                Complete IV/IM Questionnaire
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW VISITS WORK ───────────────────────────────────────── */}
      <section className="bg-white" aria-labelledby="how-it-works-heading">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center mb-10 md:mb-14">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--primary)' }}
            >
              Your Visit
            </span>
            <h2
              id="how-it-works-heading"
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ color: 'var(--navy)' }}
            >
              How IV Hydration &amp; Injection Visits Work
            </h2>
            <div className="flex items-center justify-center gap-2" aria-hidden="true">
              <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
              <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
              <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
            </div>
          </div>

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Choose Your Service',
                body: 'Select IV hydration, an available injection service, or let us know if you are unsure which option you would like to discuss.',
              },
              {
                title: 'Complete Your Questionnaire',
                body: 'Complete the IV/IM Injection Questionnaire before your appointment so our clinical team can review important health and safety information.',
              },
              {
                title: 'Clinical Screening',
                body: 'Your provider will review your health history, medications, allergies, symptoms, recent treatments, and other relevant information.',
              },
              {
                title: 'Receive Treatment If Appropriate',
                body: "If your provider determines that the requested service is appropriate, treatment can proceed according to the clinic's protocol.",
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
          <p className="text-sm text-gray-500 leading-relaxed italic text-center mt-8">
            Completion of the questionnaire does not guarantee treatment.
          </p>
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
              Why Choose Ebenezer Health Clinic for IV Hydration &amp; Injections?
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
                title: 'Individualized Screening',
                body: 'We review relevant health information before treatment rather than treating every patient the same way.',
              },
              {
                icon: Sparkles,
                title: 'Multiple Wellness Options',
                body: 'Available services include IV hydration, Wellness Mix, Vitamin B12 injections, and special-order Glutathione injections.',
              },
              {
                icon: Info,
                title: 'Safety-Focused Approach',
                body: 'Our screening process considers allergies, medications, medical conditions, previous reactions, and other factors relevant to treatment.',
              },
              {
                icon: MapPin,
                title: 'Convenient Oklahoma City-Area Location',
                body: 'Receive IV hydration and injection services at our clinic serving the Oklahoma City area.',
              },
              {
                icon: Stethoscope,
                title: 'Professional Clinical Care',
                body: 'Services are provided following appropriate screening and clinical evaluation.',
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

      {/* ── PRICING & SERVICE AVAILABILITY ───────────────────────── */}
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
            Pricing &amp; Service Availability
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6" aria-hidden="true">
            <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
            <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
            <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
          </div>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6">
            We believe patients should understand the expected cost of their
            care before treatment.
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-10">
            Because <strong>Glutathione injections are special order upon
            request</strong>, availability should be confirmed with the
            clinic before the patient&apos;s visit.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/pricing" className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto">
              View Pricing
            </Link>
            <Link href="/contact" className="btn-outline text-base px-7 py-3.5 w-full sm:w-auto">
              Contact Us About Availability
            </Link>
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
                Dr. George is a Doctor of Nursing Practice and Advanced
                Practice Registered Nurse who is Board Certified in Advanced
                Diabetes Management. Her approach emphasizes individualized
                evaluation, evidence-based care, and understanding each
                patient&apos;s health history and needs before recommending
                treatment.
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
                  alt="Dr. Susan George, DNP, APRN — IV Hydration & Injection Provider at Ebenezer Health Clinic, Oklahoma City"
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

      {/* ── IV & INJECTION MENU (UNCHANGED) ──────────────────────── */}
      <section className="bg-white" aria-labelledby="iv-options-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">

          {/* Section header */}
          <div className="mb-10 md:mb-14">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--primary)' }}
            >
              What We Offer
            </span>
            <h2
              id="iv-options-heading"
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ color: 'var(--navy)' }}
            >
              Our IV Therapy &amp; Injection Menu
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
              Each IV and injection is given in person after a brief provider
              evaluation to confirm it&apos;s appropriate for you. All services
              are cash-pay &mdash; no insurance required, no surprise bills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Immune Support IV — Myers' Cocktail */}
            <article
              className="rounded-2xl overflow-hidden flex flex-col"
              style={{
                backgroundColor: 'rgba(59,130,246,0.06)',
                border: '1px solid rgba(59,130,246,0.16)',
              }}
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
                    Immune Support IV <br className="hidden md:block" />
                    &mdash; Myers&apos; Cocktail
                  </h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  A classic IV blend of B vitamins, vitamin C, magnesium, and
                  calcium, chosen by people looking to replenish fluids and
                  nutrients as part of a wellness routine.
                </p>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div
                    className="rounded-xl px-4 py-3 text-center bg-white"
                    style={{ border: '1px solid rgba(59,130,246,0.18)' }}
                  >
                    <p className="text-xs text-gray-500 mb-1">Full Strength</p>
                    <p className="text-lg font-bold" style={{ color: '#3B82F6' }}>$250</p>
                  </div>
                  <div
                    className="rounded-xl px-4 py-3 text-center bg-white"
                    style={{ border: '1px solid rgba(59,130,246,0.18)' }}
                  >
                    <p className="text-xs text-gray-500 mb-1">Half Strength</p>
                    <p className="text-lg font-bold" style={{ color: '#3B82F6' }}>$150</p>
                  </div>
                </div>

                <Link
                  href="/iv-therapy/myers-cocktail"
                  className="mt-auto inline-flex items-center gap-1 text-sm font-semibold underline"
                  style={{ color: '#3B82F6' }}
                >
                  Learn more about the Myers&apos; Cocktail IV &rarr;
                </Link>
              </div>
            </article>

            {/* Beauty Blend IV */}
            <article
              className="rounded-2xl overflow-hidden flex flex-col"
              style={{
                backgroundColor: 'rgba(151,206,204,0.10)',
                border: '1px solid rgba(26,166,183,0.18)',
              }}
            >
              <div className="p-6 md:p-7 flex flex-col flex-1">
                <div className="flex items-start gap-3 mb-4">
                  <div
                    className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: 'rgba(26,166,183,0.15)' }}
                    aria-hidden="true"
                  >
                    <Sparkles className="h-5 w-5" style={{ color: 'var(--primary)' }} />
                  </div>
                  <h3
                    className="text-lg font-semibold leading-snug pt-1.5"
                    style={{ color: 'var(--navy)' }}
                  >
                    Beauty Blend IV <br className="hidden md:block" />
                    &mdash; Biotin, B-Complex &amp; Vitamin C
                  </h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  A nutrient IV featuring biotin, B-complex vitamins, and
                  vitamin C, chosen by people looking to support hydration and
                  nutrient intake as part of their routine.
                </p>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div
                    className="rounded-xl px-4 py-3 text-center bg-white"
                    style={{ border: '1px solid rgba(26,166,183,0.20)' }}
                  >
                    <p className="text-xs text-gray-500 mb-1">Full Strength</p>
                    <p className="text-lg font-bold" style={{ color: 'var(--primary)' }}>$250</p>
                  </div>
                  <div
                    className="rounded-xl px-4 py-3 text-center bg-white"
                    style={{ border: '1px solid rgba(26,166,183,0.20)' }}
                  >
                    <p className="text-xs text-gray-500 mb-1">Half Strength</p>
                    <p className="text-lg font-bold" style={{ color: 'var(--primary)' }}>$150</p>
                  </div>
                </div>

                <Link
                  href="/iv-therapy/beauty-blend"
                  className="mt-auto inline-flex items-center gap-1 text-sm font-semibold underline"
                  style={{ color: 'var(--primary)' }}
                >
                  Learn more about the Beauty Blend IV &rarr;
                </Link>
              </div>
            </article>

            {/* IM Injections */}
            <article
              className="rounded-2xl overflow-hidden flex flex-col"
              style={{
                backgroundColor: 'rgba(168,85,247,0.06)',
                border: '1px solid rgba(168,85,247,0.16)',
              }}
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
                    IM Injections <br className="hidden md:block" />
                    &mdash; Quick Nutrient Support
                  </h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  Fast intramuscular (IM) injections for nutrient support,
                  given after a brief provider evaluation. In and out &mdash;
                  no IV drip required.
                </p>

                <div className="mt-auto">
                  <div
                    className="rounded-xl px-4 py-3 text-center bg-white"
                    style={{ border: '1px solid rgba(168,85,247,0.20)' }}
                  >
                    <p className="text-xs text-gray-500 mb-1">IM Injection</p>
                    <p className="text-lg font-bold" style={{ color: '#A855F7' }}>$50</p>
                  </div>
                </div>
              </div>
            </article>
          </div>

          <p className="text-sm text-gray-500 leading-relaxed italic text-center mt-6">
            Cash-pay only. Given in person after a provider evaluation.
            Looking for vitamin or B12 shots specifically? See our{' '}
            <Link href="/injections" className="font-semibold not-italic" style={{ color: 'var(--primary)' }}>
              Injections page &rarr;
            </Link>
          </p>

          {/* Info boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
            <div
              className="rounded-2xl p-6"
              style={{
                backgroundColor: 'rgba(151,206,204,0.15)',
                border: '1px solid rgba(26,166,183,0.15)',
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Info
                  className="h-5 w-5 flex-shrink-0"
                  style={{ color: 'var(--primary)' }}
                  aria-hidden="true"
                />
                <h3
                  className="text-base font-semibold"
                  style={{ color: 'var(--navy)' }}
                >
                  In-person only
                </h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                IVs and injections are given in person at our Oklahoma
                City-area clinic. They aren&apos;t available by telehealth
                &mdash; only the optional consultation is online. Walk in
                when it works for you, or book ahead for a confirmed time.
              </p>
            </div>

            <div
              className="rounded-2xl p-6"
              style={{
                backgroundColor: 'rgba(26,166,183,0.04)',
                border: '1px solid rgba(26,166,183,0.12)',
              }}
            >
              <h3
                className="text-base font-semibold mb-2"
                style={{ color: 'var(--navy)' }}
              >
                Provider-evaluated. Cash-pay.
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-5">
                Every IV or injection begins with a provider evaluation to
                make sure it&apos;s the right choice for you. Simple cash-pay
                pricing. No insurance required, no surprise bills.
              </p>
              <Link href="/contact" className="btn-primary text-sm">
                Book IV Therapy
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── VISIT EBENEZER HEALTH CLINIC ─────────────────────────── */}
      <section className="bg-white" aria-labelledby="visit-clinic-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
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
                className="rounded-2xl p-7 md:p-8"
                style={{
                  backgroundColor: 'rgba(151,206,204,0.08)',
                  border: '1px solid rgba(26,166,183,0.12)',
                }}
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
                <p className="text-gray-600 mb-6">
                  Serving: Bethany, Oklahoma City, and surrounding communities
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
                    className="btn-outline text-sm px-5 py-3 w-full sm:w-auto text-center"
                  >
                    Call (405) 349-8188
                  </a>
                  <Link
                    href="/contact"
                    className="btn-primary text-sm px-5 py-3 w-full sm:w-auto text-center"
                  >
                    Schedule Your Visit
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

      {/* ── IV HYDRATION & INJECTION SERVICES IN OKC AREA ────────── */}
      <section className="bg-white" aria-labelledby="okc-area-heading">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: 'var(--primary)' }}
          >
            Serving the OKC Area
          </span>
          <h2
            id="okc-area-heading"
            className="text-3xl md:text-4xl font-bold mb-3"
            style={{ color: 'var(--navy)' }}
          >
            IV Hydration &amp; Injection Services in the Oklahoma City Area
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6" aria-hidden="true">
            <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
            <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
            <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
          </div>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-2">
            Ebenezer Health Clinic provides in-person IV hydration and
            injection services from our Bethany location serving patients
            throughout the Oklahoma City area.
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            Contact our team to discuss service availability or schedule
            your visit.
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
            Schedule Your IV Hydration or Injection Visit
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Whether you&apos;re interested in IV hydration, Wellness Mix, a
            Vitamin B12 injection, or a special-order Glutathione injection,
            our team can help you understand the next steps. Complete your
            questionnaire and schedule your visit with Ebenezer Health
            Clinic.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <Link href="/contact" className="btn-primary text-base px-8 py-3.5 w-full sm:w-auto">
              Schedule IV Hydration or Injection
            </Link>
            <Link href="/contact" className="btn-outline text-base px-8 py-3.5 w-full sm:w-auto">
              Complete IV/IM Questionnaire
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
              <Link href="/iv-therapy/myers-cocktail" className="hover:opacity-80">Myers&apos; Cocktail IV</Link>
              <span aria-hidden="true" className="text-gray-300">|</span>
              <Link href="/iv-therapy/beauty-blend" className="hover:opacity-80">Beauty Blend IV</Link>
              <span aria-hidden="true" className="text-gray-300">|</span>
              <Link href="/injections" className="hover:opacity-80">Vitamin &amp; B12 Injections</Link>
              <span aria-hidden="true" className="text-gray-300">|</span>
              <Link href="/pricing" className="hover:opacity-80">Pricing</Link>
            </nav>
          </div>
        </div>
      </section>

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
              IV Hydration &amp; Injection FAQs
            </h2>
          </div>

          <IVTherapyFAQAccordion />

          {/* CTAs below FAQ */}
          <div className="text-center mt-10">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto"
              >
                Schedule IV Hydration or Injection
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

    </>
  )
}
