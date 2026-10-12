import Link from 'next/link'
import Image from 'next/image'
import {
  CheckCircle2,
  Info,
  AlertCircle,
  MapPin,
  Phone,
  Mail,
  CalendarCheck,
  ClipboardList,
  UserCheck,
  MessageSquareText,
  Repeat,
} from 'lucide-react'
import SemaglutideFAQAccordion from './SemaglutideFAQAccordion'
import Testimonials from '@/components/Testimonials'

export const metadata = {
  title: 'Semaglutide Weight Loss Oklahoma City',
  description:
    'Explore medically guided Semaglutide weight loss in Oklahoma City at Ebenezer Health Clinic, with personalized evaluation, monitoring and ongoing support.',
  alternates: {
    canonical: 'https://www.ebenezerhealthclinic.com/medical-weight-loss/semaglutide',
  },
}

// ─── Schema ───────────────────────────────────────────────────────────────────

const SITE = 'https://www.ebenezerhealthclinic.com'
const PAGE_URL = `${SITE}/medical-weight-loss/semaglutide`

const semaglutideSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalWebPage',
      '@id': `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: 'Semaglutide Weight Loss Oklahoma City | Ebenezer Health Clinic',
      headline: 'Semaglutide for Weight Loss in Oklahoma City',
      description:
        'Explore medically guided Semaglutide weight loss in Oklahoma City at Ebenezer Health Clinic, with personalized evaluation, monitoring and ongoing support.',
      isPartOf: { '@id': `${SITE}/medical-weight-loss#webpage` },
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
      '@type': 'MedicalTherapy',
      '@id': `${PAGE_URL}#procedure`,
      name: 'Semaglutide for Medical Weight Loss',
      description:
        'Semaglutide may be considered as part of a personalized medical weight-management program for appropriate patients following clinical evaluation at Ebenezer Health Clinic.',
      provider: { '@id': `${SITE}/#organization` },
      areaServed: { '@type': 'City', name: 'Oklahoma City' },
    },
    {
      '@type': 'FAQPage',
      '@id': `${PAGE_URL}#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Does Ebenezer Health Clinic offer Semaglutide for weight loss?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Semaglutide may be considered as part of Ebenezer Health Clinic’s medical weight-loss program for appropriate patients following clinical evaluation.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is Semaglutide appropriate for everyone?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No single weight-loss approach is appropriate for everyone. Your provider will review relevant health information before determining whether medication-assisted weight management may be appropriate for you.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I automatically receive Semaglutide if I book a weight-loss consultation?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Scheduling a consultation does not guarantee that Semaglutide will be prescribed or provided. Treatment recommendations depend on your individual clinical evaluation.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you also offer Tirzepatide?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Tirzepatide is another medication-assisted weight-management option that may be considered for appropriate patients.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which is better for me—Semaglutide or Tirzepatide?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The appropriate treatment depends on your individual health information and clinical evaluation. Your provider can discuss available options with you rather than assuming one medication is right for everyone.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is medication the only part of the weight-loss program?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Ebenezer Health Clinic takes a broader medical weight-management approach that can include discussion of nutrition, physical activity, sleep, stress, lifestyle habits, and individual goals alongside medication when appropriate.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will I need follow-up visits?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Medication-assisted medical weight management may require ongoing follow-up. Your provider will determine an appropriate follow-up plan based on your individual treatment and healthcare needs.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I have a weight-loss consultation through telehealth?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Appropriate consultations and follow-up appointments may be available through telehealth throughout Oklahoma. Some aspects of care may require an in-person visit depending on your individual needs.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much weight will I lose with Semaglutide?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Individual results vary, and a specific amount of weight loss cannot be guaranteed. Your provider can help establish and monitor an individualized weight-management plan.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much does Semaglutide treatment cost?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Contact Ebenezer Health Clinic for current medical weight-loss pricing and information about what is included. Medication and program costs should be confirmed directly with the clinic.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: 'Medical Weight Loss', item: `${SITE}/medical-weight-loss` },
        { '@type': 'ListItem', position: 3, name: 'Semaglutide', item: PAGE_URL },
      ],
    },
  ],
}

const eligibilityFactors = [
  'Current weight and weight goals',
  'Medical history',
  'Current medications and supplements',
  'Previous weight-loss efforts',
  'Previous weight-loss medications',
  'Nutrition and eating habits',
  'Physical activity',
  'Sleep and stress',
  'Current symptoms or health concerns',
  'Previous medication side effects',
  'Your goals and readiness for a personalized weight-management plan',
]

const questionnaireTopics = [
  'Height',
  'Current weight',
  'Goal weight',
  'Reason for your visit',
  'Medical history',
  'Previous weight-loss treatments',
  'Current medications and supplements',
  'Eating and nutrition habits',
  'Physical activity',
  'Sleep and stress',
  'Current symptoms',
  'Medication-assisted weight-loss history',
  'Medication side effects',
  'Weight-loss goals',
  'Motivation and readiness',
]

const visitSteps = [
  {
    icon: CalendarCheck,
    step: '1',
    title: 'Schedule Your Consultation',
    desc: 'Book a medical weight-loss consultation with Ebenezer Health Clinic.',
  },
  {
    icon: ClipboardList,
    step: '2',
    title: 'Complete Your Weight Loss Questionnaire',
    desc: 'Provide information about your health history, previous weight-loss efforts, current medications, lifestyle, symptoms, and goals.',
  },
  {
    icon: UserCheck,
    step: '3',
    title: 'Meet With Your Provider',
    desc: 'Your provider will review relevant health information and discuss your weight-management concerns and goals.',
  },
  {
    icon: MessageSquareText,
    step: '4',
    title: 'Discuss Your Weight Loss Options',
    desc: 'If medication-assisted weight management is appropriate, your provider can discuss available options, including Semaglutide or Tirzepatide when clinically appropriate.',
  },
  {
    icon: Repeat,
    step: '5',
    title: 'Continue With Follow-Up Care',
    desc: 'Medical weight management may require ongoing follow-up to discuss your progress, treatment experience, concerns, or changes in your care plan.',
  },
]

const lifestyleFactors = [
  {
    title: 'Nutrition & Eating Habits',
    desc: 'Your current eating patterns and nutrition habits can be discussed as part of your individualized plan.',
  },
  {
    title: 'Physical Activity',
    desc: 'Your current activity level and exercise habits provide additional context for your weight-management goals.',
  },
  {
    title: 'Sleep & Stress',
    desc: 'Sleep and stress can be discussed as part of your broader lifestyle assessment.',
  },
  {
    title: 'Goals & Motivation',
    desc: 'Understanding what you want to achieve and your readiness to make changes helps guide a personalized approach.',
  },
]

const whyChoosePoints = [
  {
    title: 'Individualized Weight Management',
    description:
      'Your care is developed around your health history, lifestyle, previous weight-loss efforts, and individual goals.',
  },
  {
    title: 'Medication-Assisted Options',
    description:
      'Semaglutide and Tirzepatide may be considered for appropriate patients following clinical evaluation.',
  },
  {
    title: 'Medical Oversight',
    description:
      'Medication-assisted weight management includes appropriate provider evaluation and follow-up.',
  },
  {
    title: 'Lifestyle-Focused Care',
    description:
      'Nutrition, activity, sleep, stress, and other lifestyle factors can be considered alongside medication.',
  },
  {
    title: 'Convenient Access',
    description:
      'In-person care is available in the Oklahoma City area, with telehealth throughout Oklahoma for appropriate visits.',
  },
]

const providerCredentials = [
  'Doctor of Nursing Practice (DNP)',
  'Advanced Practice Registered Nurse (APRN)',
  'Board Certified in Advanced Diabetes Management (BC-ADM)',
  'Medical weight-management care',
  'In-person care in the Oklahoma City area',
  'Telehealth throughout Oklahoma for appropriate services',
]

export default function SemaglutidePage() {
  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(semaglutideSchema) }}
      />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden -mt-[112px] sm:-mt-[128px] lg:-mt-[144px] pt-[112px] sm:pt-[128px] lg:pt-[144px]"
        style={{
          backgroundImage: "url('/semaglitude.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Mobile overlay — flat white for readability */}
        <div
          className="absolute inset-0 lg:hidden"
          style={{ backgroundColor: 'rgba(255,255,255,0.90)' }}
          aria-hidden="true"
        />
        {/* Desktop overlay — teal gradient, content left / image visible right */}
        <div
          className="absolute inset-0 hidden lg:block"
          style={{
            background:
              'linear-gradient(to right, rgba(255,255,255,0.94) 0%, rgba(255,255,255,0.82) 48%, rgba(151,206,204,0.35) 100%)',
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
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
              <Link href="/medical-weight-loss" className="hover:text-primary transition-colors">
                Medical Weight Loss
              </Link>
              <span aria-hidden="true">/</span>
              <span style={{ color: 'var(--primary)' }}>Semaglutide</span>
            </nav>

            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--primary)' }}
            >
              Semaglutide · Medical Weight Loss · Oklahoma City
            </span>

            <h1
              className="text-4xl md:text-5xl font-bold mb-5 leading-tight"
              style={{ color: 'var(--navy)' }}
            >
              Semaglutide for Weight Loss in Oklahoma City
            </h1>

            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-5 max-w-2xl">
              If you have been working toward weight-loss goals but need
              additional medical support, medication-assisted weight
              management may be an option.
            </p>

            <p className="text-base text-gray-600 leading-relaxed mb-5 max-w-2xl">
              At Ebenezer Health Clinic, <strong>Semaglutide may be considered
              as part of a personalized medical weight-loss program for
              appropriate patients</strong> following clinical evaluation.
            </p>

            <p className="text-base text-gray-600 leading-relaxed mb-8 max-w-2xl">
              Our approach combines medical oversight, individualized
              weight-management planning, lifestyle support, and ongoing
              follow-up to help patients work toward realistic health and
              weight goals.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto text-center"
              >
                Schedule a Weight Loss Consultation
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

      {/* ── MEDICALLY GUIDED WEIGHT LOSS ─────────────────────────── */}
      <section className="bg-white" aria-labelledby="medically-guided-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-3xl">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--primary)' }}
            >
              Our Approach
            </span>
            <h2
              id="medically-guided-heading"
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ color: 'var(--navy)' }}
            >
              Medically Guided Weight Loss With Semaglutide
            </h2>
            <div className="flex items-center gap-2 mb-6" aria-hidden="true">
              <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
              <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
              <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
            </div>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
              Medical weight management is more than simply prescribing
              medication.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
              At Ebenezer Health Clinic, your weight-loss care begins with
              understanding your health history, previous weight-loss
              efforts, current medications, lifestyle, symptoms, and
              individual goals.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
              For appropriate patients, Semaglutide may be considered as one
              component of a broader medical weight-management plan.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Medication is not automatically recommended for every patient.
              Your provider will determine whether medication-assisted weight
              loss may be appropriate based on your individual clinical
              evaluation.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHAT IS SEMAGLUTIDE? ─────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        aria-labelledby="what-is-semaglutide-heading"
        style={{ backgroundColor: 'var(--cream)' }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="flex justify-center">
            <div
              className="max-w-2xl w-full rounded-2xl px-7 py-9 md:px-12 md:py-12 text-center shadow-sm"
              style={{
                backgroundColor: 'rgba(255,255,255,0.85)',
                border: '1px solid rgba(26,166,183,0.18)',
              }}
            >
              <span
                className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: 'var(--primary)' }}
              >
                About The Medication
              </span>
              <h2
                id="what-is-semaglutide-heading"
                className="text-3xl md:text-4xl font-bold mb-5"
                style={{ color: 'var(--navy)' }}
              >
                What Is Semaglutide?
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                Semaglutide is a medication that may be used as part of
                medically supervised weight management for appropriate
                patients.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                At Ebenezer Health Clinic, Semaglutide is considered within an
                individualized weight-loss program rather than as a
                stand-alone solution.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
                Your provider will review relevant health information before
                determining whether Semaglutide or another approach may be
                appropriate for you.
              </p>
              <Link href="/contact" className="btn-primary text-base px-7 py-3.5">
                Ask About Semaglutide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── IS SEMAGLUTIDE RIGHT FOR ME? ─────────────────────────── */}
      <section className="bg-white" aria-labelledby="right-for-me-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <span
                className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: 'var(--primary)' }}
              >
                Eligibility
              </span>
              <h2
                id="right-for-me-heading"
                className="text-3xl md:text-4xl font-bold mb-3"
                style={{ color: 'var(--navy)' }}
              >
                Is Semaglutide Right for Me?
              </h2>
              <div className="flex items-center gap-2 mb-6" aria-hidden="true">
                <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
                <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
                <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
              </div>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
                Whether medication-assisted weight loss is appropriate depends
                on your individual health circumstances.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Before recommending an approach, your provider may review
                information such as:
              </p>
            </div>

            <div
              className="rounded-2xl p-7 md:p-8"
              style={{
                backgroundColor: 'rgba(151,206,204,0.08)',
                border: '1px solid rgba(26,166,183,0.12)',
              }}
            >
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-6" role="list">
                {eligibilityFactors.map((item) => (
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
              <p className="text-sm text-gray-500 pt-5 mb-6" style={{ borderTop: '1px solid rgba(26,166,183,0.12)' }}>
                Completing a medical evaluation allows your provider to
                determine appropriate next steps rather than assuming that
                one medication is suitable for everyone.
              </p>
              <Link href="/contact" className="btn-primary text-sm">
                Schedule Your Weight Loss Evaluation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── PERSONALIZED PLAN ─────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        aria-labelledby="personalized-plan-heading"
        style={{
          backgroundImage: "url('/weight_loss_img.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(255,255,255,0.86)' }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-3xl">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--primary)' }}
            >
              Your Plan
            </span>
            <h2
              id="personalized-plan-heading"
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ color: 'var(--navy)' }}
            >
              Semaglutide as Part of a Personalized Weight Loss Plan
            </h2>
            <div className="flex items-center gap-2 mb-6" aria-hidden="true">
              <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
              <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
              <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
            </div>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
              Medication can be one part of medical weight management, but
              your overall plan may also involve attention to nutrition,
              physical activity, lifestyle habits, sleep, stress, goals, and
              ongoing progress.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
              Ebenezer Health Clinic takes an individualized approach rather
              than offering the same plan to every patient.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Your care plan and follow-up needs will depend on your health
              information, treatment approach, and individual goals.
            </p>
          </div>
        </div>
      </section>

      {/* ── SEMAGLUTIDE OR TIRZEPATIDE? ──────────────────────────── */}
      <section className="bg-white" aria-labelledby="sema-or-tirz-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-3xl">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--primary)' }}
            >
              Treatment Options
            </span>
            <h2
              id="sema-or-tirz-heading"
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ color: 'var(--navy)' }}
            >
              Semaglutide or Tirzepatide?
            </h2>
            <div className="flex items-center gap-2 mb-6" aria-hidden="true">
              <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
              <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
              <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
            </div>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
              Ebenezer Health Clinic offers medical weight-loss care that may
              include{' '}
              <strong>Semaglutide or Tirzepatide for appropriate patients</strong>.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
              These are different medication options, and one should not
              automatically be assumed to be the right choice for every
              patient.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
              Your provider can review your health history, previous
              treatments, current medications, goals, and other relevant
              information before discussing an appropriate weight-management
              approach.
            </p>
            <Link href="/medical-weight-loss/tirzepatide" className="btn-primary text-base px-7 py-3.5">
              Learn About Tirzepatide
            </Link>
          </div>
        </div>
      </section>

      {/* ── WEIGHT LOSS QUESTIONNAIRE ─────────────────────────────── */}
      <section
        style={{ backgroundColor: 'var(--cream)' }}
        aria-labelledby="questionnaire-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <span
                className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: 'var(--primary)' }}
              >
                Before Your Visit
              </span>
              <h2
                id="questionnaire-heading"
                className="text-3xl md:text-4xl font-bold mb-3"
                style={{ color: 'var(--navy)' }}
              >
                Your Medical Weight Loss Questionnaire
              </h2>
              <div className="flex items-center gap-2 mb-6" aria-hidden="true">
                <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
                <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
                <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
              </div>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
                Before beginning a medical weight-loss program, we want to
                understand more than the number on the scale.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
                The Weight Loss Program Patient Questionnaire collects
                information about:
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
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-6">
                {questionnaireTopics.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      className="h-4 w-4 mt-0.5 flex-shrink-0"
                      style={{ color: 'var(--primary)' }}
                      aria-hidden="true"
                    />
                    <span className="text-gray-700 leading-snug text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-500 mb-6 pt-5" style={{ borderTop: '1px solid rgba(26,166,183,0.12)' }}>
                This information helps your provider better understand your
                health history and weight-management needs before discussing
                an individualized plan. If needed, our team can assist you
                with completing the questionnaire during your initial intake
                or free consultation call.
              </p>
              <Link href="/contact" className="btn-primary text-sm">
                Complete Weight Loss Questionnaire
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT TO EXPECT ────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        aria-labelledby="what-to-expect-heading"
        style={{
          backgroundImage: "url('/body_bg2.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(232,247,247,0.52)' }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center mb-12 md:mb-14">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--primary)' }}
            >
              Your Visit
            </span>
            <h2
              id="what-to-expect-heading"
              className="text-3xl md:text-4xl font-bold"
              style={{ color: 'var(--navy)' }}
            >
              What to Expect From Your Semaglutide Weight Loss Visit
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-10">
            {visitSteps.map(({ icon: Icon, step, title, desc }) => (
              <div
                key={step}
                className="rounded-2xl p-6 flex flex-col gap-4"
                style={{
                  background: 'rgba(255,255,255,0.88)',
                  border: '1px solid rgba(26,166,183,0.12)',
                  boxShadow: '0 2px 12px rgba(26,166,183,0.06)',
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold flex-shrink-0"
                    style={{ backgroundColor: 'var(--primary)', color: '#ffffff' }}
                  >
                    {step}
                  </div>
                  <Icon className="h-5 w-5" style={{ color: 'var(--primary)' }} aria-hidden="true" />
                </div>
                <h3 className="text-sm font-semibold leading-snug" style={{ color: 'var(--navy)' }}>
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">{desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/contact" className="btn-primary text-base px-8 py-3.5">
              Schedule Your Consultation
            </Link>
            <p className="mt-3 text-sm text-gray-600">
              or{' '}
              <a href="tel:+14053498188" className="font-semibold" style={{ color: 'var(--primary)' }}>
                call (405) 349-8188
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ── ONGOING MONITORING & FOLLOW-UP ───────────────────────── */}
      <section className="bg-white" aria-labelledby="monitoring-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-3xl">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--primary)' }}
            >
              Follow-Up Care
            </span>
            <h2
              id="monitoring-heading"
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ color: 'var(--navy)' }}
            >
              Ongoing Medical Monitoring &amp; Follow-Up
            </h2>
            <div className="flex items-center gap-2 mb-6" aria-hidden="true">
              <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
              <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
              <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
            </div>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
              Medication-assisted weight management should include appropriate
              medical oversight.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
              Your follow-up needs will depend on your individual treatment
              plan and clinical circumstances.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
              During follow-up care, you can discuss your progress, treatment
              experience, side effects or concerns, lifestyle goals, and other
              relevant changes with your provider.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Your treatment plan may be adjusted when clinically appropriate.
            </p>
          </div>
        </div>
      </section>

      {/* ── MORE THAN MEDICATION ─────────────────────────────────── */}
      <section
        style={{ backgroundColor: 'var(--cream)' }}
        aria-labelledby="more-than-med-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="mb-10 md:mb-14 max-w-2xl">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--primary)' }}
            >
              Whole-Person Care
            </span>
            <h2
              id="more-than-med-heading"
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ color: 'var(--navy)' }}
            >
              More Than Medication
            </h2>
            <div className="flex items-center gap-2 mb-5" aria-hidden="true">
              <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
              <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
              <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
            </div>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-2">
              A sustainable weight-management approach should consider more
              than medication alone.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              The clinic&apos;s weight-loss intake process considers areas
              such as:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {lifestyleFactors.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl p-6"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.85)',
                  border: '1px solid rgba(26,166,183,0.15)',
                }}
              >
                <h3 className="text-base font-semibold mb-2" style={{ color: 'var(--navy)' }}>
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-sm text-gray-500 max-w-3xl">
            Medication, when appropriate, works within this broader medical
            weight-management framework.
          </p>
        </div>
      </section>

      {/* ── IN-PERSON & TELEHEALTH ───────────────────────────────── */}
      <section className="relative overflow-hidden bg-white" aria-labelledby="in-person-heading">
        <div
          className="absolute inset-0 hidden lg:block"
          style={{
            backgroundImage: "url('/in-person-online.webp')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.16,
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-3xl">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--primary)' }}
            >
              In Person &amp; Telehealth
            </span>
            <h2
              id="in-person-heading"
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ color: 'var(--navy)' }}
            >
              In-Person &amp; Telehealth Medical Weight Loss
            </h2>
            <div className="flex items-center gap-2 mb-6" aria-hidden="true">
              <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
              <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
              <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
            </div>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
              Ebenezer Health Clinic provides medical weight-loss care from
              our Bethany location serving Oklahoma City and surrounding
              communities.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
              Appropriate consultations and follow-up appointments may also be
              available through <strong>secure telehealth throughout Oklahoma</strong>.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6">
              Whether a particular visit can be completed virtually will
              depend on your individual healthcare needs and the services
              required.
            </p>
            <p className="text-sm text-gray-500">
              Contact our team if you are unsure which appointment type to
              schedule.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE EBENEZER ──────────────────────────────────── */}
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
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--primary)' }}
            >
              Why Ebenezer
            </span>
            <h2
              id="why-heading"
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ color: 'var(--navy)' }}
            >
              Why Choose Ebenezer Health Clinic for Medical Weight Loss?
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
                  <p className="mt-1 text-sm text-gray-600 leading-relaxed">{point.description}</p>
                </div>
              </li>
            ))}
          </ul>
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
                Medical weight-loss care at Ebenezer Health Clinic is led by{' '}
                <strong>Dr. Susan George, DNP, APRN, BC-ADM</strong>.
              </p>
              <p className="text-base text-gray-600 leading-relaxed mb-8">
                Dr. George provides individualized care focused on
                understanding each patient&apos;s health history, concerns,
                weight-management experience, and goals.
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
                  {providerCredentials.map((item) => (
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
                  alt="Dr. Susan George, DNP, APRN — Semaglutide Weight Loss Provider at Ebenezer Health Clinic, Oklahoma City"
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
        style={{
          backgroundImage: "url('/body_bg2.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
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
              Semaglutide Weight Loss FAQs
            </h2>
          </div>

          <SemaglutideFAQAccordion />
        </div>
      </section>

      {/* ── PRICING & PROGRAM INFORMATION ────────────────────────── */}
      <section style={{ backgroundColor: 'var(--cream)' }} aria-labelledby="pricing-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--primary)' }}
            >
              Pricing
            </span>
            <h2
              id="pricing-heading"
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: 'var(--navy)' }}
            >
              Semaglutide Pricing &amp; Program Information
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Medical weight-loss pricing should be clear before a patient
              begins care.
            </p>
          </div>

          <div
            className="max-w-xl mx-auto rounded-xl p-6 md:p-7 flex items-start gap-3 text-left"
            style={{
              backgroundColor: 'rgba(151,206,204,0.15)',
              border: '1px solid rgba(26,166,183,0.20)',
            }}
            role="note"
          >
            <Info
              className="h-5 w-5 mt-0.5 flex-shrink-0"
              style={{ color: 'var(--primary)' }}
              aria-hidden="true"
            />
            <p className="text-sm text-gray-700">
              Please contact Ebenezer Health Clinic directly to confirm
              current medical weight-loss pricing, including consultation,
              follow-up, and medication costs, and what is included with your
              program.
            </p>
          </div>

          <div className="mt-8 text-center">
            <Link href="/contact" className="btn-primary text-base px-7 py-3.5">
              Contact Us for Current Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* ── VISIT EBENEZER HEALTH CLINIC ─────────────────────────── */}
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
                    <MapPin
                      className="h-5 w-5 mt-0.5 flex-shrink-0"
                      style={{ color: 'var(--primary)' }}
                      aria-hidden="true"
                    />
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
                    <Phone
                      className="h-5 w-5 mt-0.5 flex-shrink-0"
                      style={{ color: 'var(--primary)' }}
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-semibold" style={{ color: 'var(--navy)' }}>
                        Phone
                      </p>
                      <a
                        href="tel:+14053498188"
                        className="text-sm text-gray-600 mt-0.5 hover:text-primary transition-colors"
                      >
                        (405) 349-8188
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Mail
                      className="h-5 w-5 mt-0.5 flex-shrink-0"
                      style={{ color: 'var(--primary)' }}
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-semibold" style={{ color: 'var(--navy)' }}>
                        Email
                      </p>
                      <a
                        href="mailto:ebenezerhealth@outlook.com"
                        className="text-sm text-gray-600 mt-0.5 hover:text-primary transition-colors break-all"
                      >
                        ebenezerhealth@outlook.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle2
                      className="h-5 w-5 mt-0.5 flex-shrink-0"
                      style={{ color: 'var(--primary)' }}
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-semibold" style={{ color: 'var(--navy)' }}>
                        In-Person Care
                      </p>
                      <p className="text-sm text-gray-600 mt-0.5">Oklahoma City area</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle2
                      className="h-5 w-5 mt-0.5 flex-shrink-0"
                      style={{ color: 'var(--primary)' }}
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-semibold" style={{ color: 'var(--navy)' }}>
                        Telehealth
                      </p>
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

      {/* ── SEMAGLUTIDE WEIGHT LOSS IN THE OKC AREA ──────────────── */}
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage: "url('/oklahoma-map-bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        aria-labelledby="serving-heading"
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(255,255,255,0.85)' }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-3xl">
            <h2
              id="serving-heading"
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: 'var(--navy)' }}
            >
              Semaglutide Weight Loss in the Oklahoma City Area
            </h2>
            <div className="flex items-center gap-2 mb-6" aria-hidden="true">
              <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
              <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
              <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
            </div>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
              Ebenezer Health Clinic provides personalized medical
              weight-management care from our Bethany location serving
              Oklahoma City and surrounding communities.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
              For appropriate patients, Semaglutide may be considered as part
              of a medically guided weight-loss plan following individual
              evaluation.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Telehealth may also be available throughout Oklahoma for
              appropriate consultations and follow-up care.
            </p>
          </div>
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
            Start Your Medical Weight Loss Journey
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            If you are considering medication-assisted weight management, the
            first step is an individualized consultation. Schedule an
            appointment with Ebenezer Health Clinic to discuss your health
            history, previous weight-loss efforts, goals, and whether{' '}
            <strong>Semaglutide, Tirzepatide, or another weight-management
            approach</strong> may be appropriate for you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <Link href="/contact" className="btn-primary text-base px-8 py-3.5 w-full sm:w-auto">
              Schedule a Weight Loss Consultation
            </Link>
            <Link href="/contact" className="btn-outline text-base px-8 py-3.5 w-full sm:w-auto">
              Complete Weight Loss Questionnaire
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
              aria-label="Related weight loss links"
              style={{ color: 'var(--primary)' }}
            >
              <Link href="/medical-weight-loss" className="hover:opacity-80">Medical Weight Loss</Link>
              <span aria-hidden="true" className="text-gray-300">|</span>
              <Link href="/medical-weight-loss/tirzepatide" className="hover:opacity-80">Tirzepatide Weight Loss</Link>
              <span aria-hidden="true" className="text-gray-300">|</span>
              <Link href="/pricing" className="hover:opacity-80">Pricing</Link>
              <span aria-hidden="true" className="text-gray-300">|</span>
              <Link href="/contact" className="hover:opacity-80">Contact</Link>
            </nav>
          </div>

          <p className="mt-8 text-sm text-gray-500">
            Ebenezer Health Clinic &middot; Oklahoma City, OK &middot; (405)
            349-8188 &middot; ebenezerhealthclinic.com
          </p>
        </div>
      </section>
    </>
  )
}
