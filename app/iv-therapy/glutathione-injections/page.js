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
  Phone,
  CalendarCheck,
  Stethoscope,
} from 'lucide-react'
import Testimonials from '@/components/Testimonials'
import GlutathioneFAQAccordion from './GlutathioneFAQAccordion'

export const metadata = {
  title: 'Glutathione Injections Oklahoma City',
  description:
    'Request Glutathione injections in the Oklahoma City area at Ebenezer Health Clinic. Available by special order with appropriate clinical screening.',
  keywords: [
    'Glutathione Injections Oklahoma City',
    'Glutathione Injection Oklahoma City',
    'Glutathione Shots Oklahoma City',
    'Glutathione Injection OKC',
    'Glutathione Shots OKC',
    'Glutathione Injections Bethany OK',
    'Glutathione Clinic Oklahoma City',
  ],
  alternates: {
    canonical: 'https://www.ebenezerhealthclinic.com/iv-therapy/glutathione-injections',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.ebenezerhealthclinic.com/iv-therapy/glutathione-injections',
    siteName: 'Ebenezer Health Clinic',
    title: 'Glutathione Injections Oklahoma City | Ebenezer Health Clinic',
    description:
      'Request Glutathione injections in the Oklahoma City area at Ebenezer Health Clinic. Available by special order with appropriate clinical screening.',
    images: ['/about.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Glutathione Injections Oklahoma City | Ebenezer Health Clinic',
    description:
      'Request Glutathione injections in the Oklahoma City area at Ebenezer Health Clinic. Available by special order with appropriate clinical screening.',
    images: ['/about.webp'],
  },
}

// ─── Schema ───────────────────────────────────────────────────────────────────

const SITE = 'https://www.ebenezerhealthclinic.com'
const PAGE_URL = `${SITE}/iv-therapy/glutathione-injections`

const glutathioneSchemaGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalWebPage',
      '@id': `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: 'Glutathione Injections Oklahoma City | Ebenezer Health Clinic',
      headline: 'Glutathione Injections in Oklahoma City',
      description:
        'Request Glutathione injections in the Oklahoma City area at Ebenezer Health Clinic. Available by special order with appropriate clinical screening.',
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
      name: 'Glutathione Injection',
      procedureType: 'TherapeuticProcedure',
      description:
        'Glutathione injections at Ebenezer Health Clinic are available by special order upon request, provided after a health and safety questionnaire and appropriate clinical evaluation.',
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
          name: 'Does Ebenezer Health Clinic offer Glutathione injections?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Glutathione injections are available by special order upon request.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need to order Glutathione in advance?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Glutathione is a special-order service. Contact Ebenezer Health Clinic in advance to ask about current availability and the ordering process.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I schedule a Glutathione injection online?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Because the service requires special ordering, contact the clinic to confirm availability before treatment. If online scheduling is enabled for this service later, the website can be updated accordingly.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need to complete a questionnaire?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Patients requesting injectable services complete the IV/IM Injection Questionnaire as part of the screening process.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does completing the questionnaire guarantee treatment?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. The questionnaire is used for screening and does not replace clinical evaluation or guarantee treatment.',
          },
        },
        {
          '@type': 'Question',
          name: 'Where are Glutathione injections provided?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Injections are provided in person at Ebenezer Health Clinic in Bethany, serving the Oklahoma City area.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I receive a Glutathione injection through telehealth?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Injectable treatment requires an in-person visit.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Ebenezer Health Clinic offer B12 injections?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Yes. Vitamin B12 injections are also available through the clinic's IV Hydration & Injections services.",
          },
        },
        {
          '@type': 'Question',
          name: 'Does the clinic offer IV hydration?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. IV hydration is available as a separate service.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much does a Glutathione injection cost?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Contact Ebenezer Health Clinic for current special-order availability and confirmed pricing.',
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
        { '@type': 'ListItem', position: 3, name: 'Glutathione Injections', item: PAGE_URL },
      ],
    },
  ],
}

const considerationItems = [
  'Medical history',
  'Current medications',
  'Allergies',
  'Previous reactions to injections or IV treatment',
  'Recent treatments',
  'Current health concerns',
  'Relevant safety information',
]

export default function GlutathioneInjectionsPage() {
  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(glutathioneSchemaGraph) }}
      />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden -mt-[112px] sm:-mt-[128px] lg:-mt-[144px] pt-[112px] sm:pt-[128px] lg:pt-[144px]"
      >
        {/* Background image */}
        <Image
          src="/about.webp"
          alt="Telehealth video consultation at Ebenezer Health Clinic"
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
              <span style={{ color: 'var(--primary)' }}>Glutathione Injections</span>
            </nav>

            {/* Label */}
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--primary)' }}
            >
              Glutathione Injections · Oklahoma City
            </span>

            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 leading-tight"
              style={{ color: 'var(--navy)' }}
            >
              Glutathione Injections in Oklahoma City
            </h1>

            <p
              className="text-base md:text-lg leading-relaxed mb-3 max-w-xl"
              style={{ color: 'var(--navy)' }}
            >
              Looking for Glutathione injections in the Oklahoma City area?
            </p>
            <p
              className="text-base md:text-lg leading-relaxed mb-3 max-w-xl"
              style={{ color: 'var(--navy)' }}
            >
              Ebenezer Health Clinic offers{' '}
              <strong>Glutathione injections by special order upon
              request</strong> at our Bethany location serving Oklahoma City
              and surrounding communities.
            </p>
            <p
              className="text-base md:text-lg leading-relaxed mb-8 max-w-xl"
              style={{ color: 'var(--navy)' }}
            >
              Because Glutathione injections require special ordering,
              patients should contact the clinic in advance to discuss
              availability and complete the appropriate screening process.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
              <Link
                href="/contact"
                className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto text-center"
              >
                Request a Glutathione Injection
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

      {/* ── GLUTATHIONE INJECTIONS AT EBENEZER HEALTH CLINIC ─────── */}
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
            Glutathione Injections at Ebenezer Health Clinic
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6" aria-hidden="true">
            <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
            <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
            <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
          </div>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
            Glutathione injections are available as part of Ebenezer Health
            Clinic&apos;s <strong>IV Hydration &amp; Injections</strong>{' '}
            services.
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
            Unlike regularly available injectable services,{' '}
            <strong>Glutathione injections are available by special
            order upon request</strong>.
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
            Patients interested in this service should contact the clinic
            before scheduling treatment so our team can discuss current
            availability and the next steps.
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
            Appropriate health and safety screening is completed before
            treatment.
          </p>
          <Link href="/contact" className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto">
            Ask About Glutathione Availability
          </Link>
        </div>
      </section>

      {/* ── WHAT IS A GLUTATHIONE INJECTION ──────────────────────── */}
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
            What Is a Glutathione Injection?
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6" aria-hidden="true">
            <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
            <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
            <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
          </div>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
            A Glutathione injection is an injectable service offered at
            Ebenezer Health Clinic through our IV Hydration &amp; Injections
            program.
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
            Before receiving an injection, patients complete appropriate
            clinical screening so relevant health history, allergies,
            medications, symptoms, and other safety information can be
            reviewed.
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
            Because the clinic has not provided specific treatment
            indications or benefit claims for its Glutathione injection
            service, patients should discuss their reason for requesting
            Glutathione directly with the clinician.
          </p>
          <Link href="/contact" className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto">
            Request More Information
          </Link>
        </div>
      </section>

      {/* ── SPECIAL ORDER AVAILABLE UPON REQUEST ─────────────────── */}
      <section className="bg-white" aria-labelledby="special-order-heading">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: 'var(--primary)' }}
          >
            Special Order
          </span>
          <h2
            id="special-order-heading"
            className="text-3xl md:text-4xl font-bold mb-3"
            style={{ color: 'var(--navy)' }}
          >
            Special Order Available Upon Request
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6" aria-hidden="true">
            <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
            <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
            <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
          </div>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
            <strong>Glutathione injections are special-order services at
            Ebenezer Health Clinic</strong>.
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
            If you are interested:
          </p>
          <ol className="max-w-xl mx-auto space-y-3 mb-8 text-left">
            {[
              'Contact Ebenezer Health Clinic.',
              'Ask about current Glutathione injection availability.',
              'Complete the IV/IM Injection Questionnaire.',
              'Provide relevant health and medication information.',
              'Complete appropriate clinical screening before treatment.',
            ].map((item, idx) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  className="flex-shrink-0 inline-flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold"
                  style={{ backgroundColor: 'var(--primary)', color: '#ffffff' }}
                  aria-hidden="true"
                >
                  {idx + 1}
                </span>
                <span className="text-gray-700 leading-snug pt-0.5">{item}</span>
              </li>
            ))}
          </ol>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
            <strong>Special ordering does not guarantee treatment</strong>.
            Whether the injection is appropriate will depend on clinical
            evaluation.
          </p>
          <Link href="/contact" className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto">
            Contact Us About Special Ordering
          </Link>
        </div>
      </section>

      {/* ── IS A GLUTATHIONE INJECTION RIGHT FOR ME ──────────────── */}
      <section
        className="relative overflow-hidden"
        aria-labelledby="right-for-me-heading"
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
              Not Sure Where to Start?
            </span>
            <h2
              id="right-for-me-heading"
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ color: 'var(--navy)' }}
            >
              Is a Glutathione Injection Right for Me?
            </h2>
            <div className="flex items-center justify-center gap-2" aria-hidden="true">
              <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
              <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
              <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
            </div>
          </div>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-2 text-center">
            Patients may request injectable services for different reasons.
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8 text-center">
            The clinic&apos;s screening process allows you to explain your
            treatment goal, current symptoms or concerns, and symptom
            severity before treatment.
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4 text-center">
            Your clinician may also review:
          </p>
          <div
            className="rounded-2xl p-7 md:p-8 bg-white"
            style={{ border: '1px solid rgba(26,166,183,0.15)' }}
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
            This information helps determine whether proceeding with an
            injectable service is appropriate for your individual
            circumstances.
          </p>
        </div>
      </section>

      {/* ── PLANNING YOUR GLUTATHIONE INJECTION VISIT ────────────── */}
      <section className="bg-white" aria-labelledby="planning-visit-heading">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center mb-10 md:mb-14">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--primary)' }}
            >
              Before You Visit
            </span>
            <h2
              id="planning-visit-heading"
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ color: 'var(--navy)' }}
            >
              Planning Your Glutathione Injection Visit
            </h2>
            <div className="flex items-center justify-center gap-2" aria-hidden="true">
              <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
              <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
              <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
            </div>
          </div>

          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4 text-center max-w-3xl mx-auto">
            Because Glutathione injections at Ebenezer Health Clinic are{' '}
            <strong>available by special order upon request</strong>, we
            recommend contacting the clinic before planning your visit.
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4 text-center max-w-3xl mx-auto">
            Our team can provide current information about availability and
            help you understand the next steps before your appointment.
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-10 text-center max-w-3xl mx-auto">
            When contacting the clinic, let us know that you are interested
            in a Glutathione injection so we can address your request
            appropriately.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            {[
              {
                icon: ClipboardList,
                title: 'Before Your Visit',
                body: 'Please be prepared to share relevant information about your health, current medications, allergies, and any concerns you would like to discuss with the clinician.',
              },
              {
                icon: FlaskConical,
                title: 'Special-Order Availability',
                body: "Glutathione availability may depend on the clinic's special-order process. Contact us directly for the most current information about availability, scheduling, and confirmed pricing.",
              },
              {
                icon: Stethoscope,
                title: 'In-Person Treatment',
                body: 'Glutathione injections are administered at our Bethany clinic serving Oklahoma City and surrounding communities. The injection itself requires an in-person visit.',
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

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/contact" className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto">
              Check Glutathione Availability
            </Link>
            <a
              href="tel:+14053498188"
              className="btn-outline text-base px-7 py-3.5 w-full sm:w-auto"
            >
              Call (405) 349-8188
            </a>
          </div>
        </div>
      </section>

      {/* ── WHAT TO EXPECT WHEN REQUESTING A GLUTATHIONE INJECTION ── */}
      <section
        className="relative overflow-hidden"
        aria-labelledby="what-to-expect-heading"
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(232,247,247,0.52)' }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
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
              What to Expect When Requesting a Glutathione Injection
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
                title: 'Contact the Clinic',
                body: 'Because Glutathione injections are special order, contact Ebenezer Health Clinic first to ask about availability.',
              },
              {
                title: 'Complete Your Questionnaire',
                body: 'Provide accurate information about your health history, medications, allergies, symptoms, and reason for requesting the service.',
              },
              {
                title: 'Complete Clinical Screening',
                body: 'Your information will be reviewed to determine whether treatment is appropriate.',
              },
              {
                title: 'Confirm Special-Order Availability',
                body: 'The clinic can provide current information about ordering, availability, scheduling, and confirmed pricing.',
              },
              {
                title: 'Receive Your Injection if Appropriate',
                body: 'If the service is available and considered appropriate following clinical review, treatment can be provided in person.',
              },
            ].map((step, idx) => (
              <li
                key={step.title}
                className="rounded-2xl p-6 h-full flex flex-col bg-white"
                style={{
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
            <a
              href="tel:+14053498188"
              className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto text-center"
            >
              Call (405) 349-8188
            </a>
          </div>
        </div>
      </section>

      {/* ── COMPLETING THE QUESTIONNAIRE DOES NOT GUARANTEE TREATMENT ── */}
      <section className="bg-white" aria-labelledby="no-guarantee-heading">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
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
            The IV/IM Injection Questionnaire is a screening tool and{' '}
            <strong>does not guarantee that an injection will be
            provided</strong>.
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
            Completing the form does not replace clinical evaluation.
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
            Patients should also notify the clinic of changes in their
            health, medications, or symptoms before treatment.
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            The clinic&apos;s questionnaire specifically acknowledges that
            screening does not guarantee treatment.
          </p>
        </div>
      </section>

      {/* ── GLUTATHIONE VS. VITAMIN B12 INJECTIONS ───────────────── */}
      <section
        className="relative overflow-hidden"
        aria-labelledby="vs-b12-heading"
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(232,247,247,0.52)' }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center mb-10 md:mb-14">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--primary)' }}
            >
              Which Service Is Right for You?
            </span>
            <h2
              id="vs-b12-heading"
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ color: 'var(--navy)' }}
            >
              Glutathione vs. Vitamin B12 Injections
            </h2>
            <div className="flex items-center justify-center gap-2" aria-hidden="true">
              <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
              <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
              <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
            </div>
          </div>

          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-10 text-center max-w-3xl mx-auto">
            Ebenezer Health Clinic offers more than one injectable service.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
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
                <p className="text-sm text-gray-600 leading-relaxed">
                  Available by <strong>special order upon request</strong>.
                  Contact the clinic in advance regarding availability.
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
                    Vitamin B12 Injection
                  </h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Vitamin B12 injections are another injectable service
                  available through the clinic.
                </p>
              </div>
            </article>
          </div>

          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
            These are different services. Patients should not assume they
            are interchangeable or intended for the same purpose.
          </p>
          <div className="flex justify-center">
            <Link href="/iv-therapy/vitamin-b12-injections" className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto">
              Learn About Vitamin B12 Injections
            </Link>
          </div>
        </div>
      </section>

      {/* ── GLUTATHIONE INJECTIONS VS. IV HYDRATION ──────────────── */}
      <section className="bg-white" aria-labelledby="vs-iv-heading">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center mb-10 md:mb-14">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--primary)' }}
            >
              Injection or IV?
            </span>
            <h2
              id="vs-iv-heading"
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ color: 'var(--navy)' }}
            >
              Glutathione Injections vs. IV Hydration
            </h2>
            <div className="flex items-center justify-center gap-2" aria-hidden="true">
              <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
              <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
              <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
            </div>
          </div>

          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-10 text-center max-w-3xl mx-auto">
            Ebenezer Health Clinic also provides IV hydration.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <article
              className="rounded-2xl overflow-hidden flex flex-col"
              style={{
                backgroundColor: 'rgba(16,185,129,0.06)',
                border: '1px solid rgba(16,185,129,0.18)',
              }}
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
                <p className="text-sm text-gray-600 leading-relaxed">
                  An injectable service available by special order upon
                  request.
                </p>
              </div>
            </article>

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
                    IV Hydration
                  </h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  A separate service administered intravenously.
                </p>
              </div>
            </article>
          </div>

          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
            If you are unsure which service to request, select{' '}
            <strong>&ldquo;Not sure – discuss with clinician&rdquo;</strong>{' '}
            on the IV/IM Injection Questionnaire.
          </p>
          <div className="flex justify-center">
            <Link href="/iv-therapy/iv-hydration" className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto">
              Explore IV Hydration
            </Link>
          </div>
        </div>
      </section>

      {/* ── IN-PERSON GLUTATHIONE INJECTIONS IN THE OKC AREA ─────── */}
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
            In-Person Glutathione Injections in the Oklahoma City Area
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6" aria-hidden="true">
            <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
            <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
            <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
          </div>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
            Glutathione injections are administered{' '}
            <strong>in person</strong> at Ebenezer Health Clinic.
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
            Our Bethany location serves patients from Oklahoma City and
            surrounding communities.
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
            The injection itself cannot be provided through telehealth.
            Appropriate consultations for other clinic services may be
            available through secure telehealth throughout Oklahoma.
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
            Because Glutathione is a special-order service, please contact
            the clinic before planning your visit.
          </p>
          <Link href="/contact" className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto">
            Contact Ebenezer Health Clinic
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
              Why Choose Ebenezer Health Clinic?
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
                body: 'Relevant health and safety information is reviewed before injectable treatment.',
              },
              {
                icon: UserCheck,
                title: 'Individualized Evaluation',
                body: 'Your medical history, medications, allergies, symptoms, and treatment goals can be considered before proceeding.',
              },
              {
                icon: Sparkles,
                title: 'Multiple IV & Injection Services',
                body: 'Services include IV hydration, Vitamin B12 injections, and special-order Glutathione injections.',
              },
              {
                icon: ClipboardList,
                title: 'Clear Special-Order Process',
                body: 'Patients are encouraged to contact the clinic in advance regarding Glutathione availability.',
              },
              {
                icon: MapPin,
                title: 'Convenient Oklahoma City Area Location',
                body: 'In-person services are provided from our Bethany clinic.',
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
                Dr. George provides individualized healthcare with attention
                to patient history, current concerns, and appropriate
                clinical evaluation.
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
                  alt="Dr. Susan George, DNP, APRN — Glutathione Injection Provider at Ebenezer Health Clinic, Oklahoma City"
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
              Glutathione Injection FAQs
            </h2>
          </div>

          <GlutathioneFAQAccordion />

          {/* CTAs below FAQ */}
          <div className="text-center mt-10">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto"
              >
                Request a Glutathione Injection
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

      {/* ── GLUTATHIONE INJECTION PRICING & AVAILABILITY ─────────── */}
      <section className="bg-white" aria-labelledby="pricing-heading">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: 'var(--primary)' }}
          >
            Pricing &amp; Availability
          </span>
          <h2
            id="pricing-heading"
            className="text-3xl md:text-4xl font-bold mb-3"
            style={{ color: 'var(--navy)' }}
          >
            Glutathione Injection Pricing &amp; Availability
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
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: 'var(--primary)' }}
            >
              Special Order Available Upon Request
            </p>
            <div className="flex items-start justify-between gap-4 py-3" style={{ borderBottom: '1px solid rgba(26,166,183,0.12)' }}>
              <span className="text-gray-700 font-semibold">Glutathione Injection</span>
              <span className="text-gray-500 italic">Contact for current pricing</span>
            </div>
            <div className="flex items-start justify-between gap-4 py-3" style={{ borderBottom: '1px solid rgba(26,166,183,0.12)' }}>
              <span className="text-gray-700 font-semibold">Special Order</span>
              <span className="text-gray-500 italic">Required</span>
            </div>
            <div className="flex items-start justify-between gap-4 py-3">
              <span className="text-gray-700 font-semibold">What&apos;s Included</span>
              <span className="text-gray-500 italic">Contact for current information</span>
            </div>
          </div>
          <div className="mt-8">
            <Link href="/contact" className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto">
              Request Current Pricing &amp; Availability
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

      {/* ── GLUTATHIONE INJECTIONS IN OKC & BETHANY ──────────────── */}
      <section className="bg-white" aria-labelledby="okc-bethany-heading">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <h2
            id="okc-bethany-heading"
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ color: 'var(--navy)' }}
          >
            Glutathione Injections in Oklahoma City &amp; Bethany
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
            Ebenezer Health Clinic offers Glutathione injections by special
            order from our Bethany location serving Oklahoma City and
            surrounding communities.
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            Patients interested in Glutathione should contact the clinic in
            advance to ask about current availability and complete the
            required intake and screening process.
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
            Request a Glutathione Injection
          </h2>
          <p className="text-lg text-gray-700 mb-2 leading-relaxed">
            Interested in Glutathione injections?
          </p>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Because this service is{' '}
            <strong>available by special order upon request</strong>,
            contact Ebenezer Health Clinic before your visit to discuss
            current availability and next steps.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <Link href="/contact" className="btn-primary text-base px-8 py-3.5 w-full sm:w-auto">
              Request a Glutathione Injection
            </Link>
            <Link href="/contact" className="btn-outline text-base px-8 py-3.5 w-full sm:w-auto">
              Check Current Availability
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
              <Link href="/iv-therapy/vitamin-b12-injections" className="hover:opacity-80">Vitamin B12 Injections</Link>
              <span aria-hidden="true" className="text-gray-300">|</span>
              <Link href="/iv-therapy/iv-hydration" className="hover:opacity-80">IV Hydration</Link>
            </nav>
          </div>
        </div>
      </section>

    </>
  )
}
