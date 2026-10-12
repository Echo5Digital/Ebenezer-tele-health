import Link from 'next/link'
import Image from 'next/image'
import {
  CheckCircle2,
  Info,
  MapPin,
  Phone,
  Mail,
  CalendarCheck,
  ClipboardList,
  UserCheck,
  MessageSquareText,
  Repeat,
} from 'lucide-react'
import TirzepatideFAQAccordion from './TirzepatideFAQAccordion'
import Testimonials from '@/components/Testimonials'

export const metadata = {
  title: 'Tirzepatide Weight Loss Oklahoma City',
  description:
    'Explore medically guided Tirzepatide weight loss in Oklahoma City with personalized evaluation, lifestyle support and ongoing care at Ebenezer Health Clinic.',
  alternates: {
    canonical: 'https://www.ebenezerhealthclinic.com/medical-weight-loss/tirzepatide',
  },
}

// ─── Schema ───────────────────────────────────────────────────────────────────

const SITE = 'https://www.ebenezerhealthclinic.com'
const PAGE_URL = `${SITE}/medical-weight-loss/tirzepatide`

const tirzepatideSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalWebPage',
      '@id': `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: 'Tirzepatide Weight Loss Oklahoma City | Ebenezer Health Clinic',
      headline: 'Tirzepatide for Weight Loss in Oklahoma City',
      description:
        'Explore medically guided Tirzepatide weight loss in Oklahoma City with personalized evaluation, lifestyle support and ongoing care at Ebenezer Health Clinic.',
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
      name: 'Tirzepatide for Medical Weight Loss',
      description:
        'Tirzepatide may be considered as part of a personalized medical weight-loss program for appropriate patients following clinical evaluation at Ebenezer Health Clinic.',
      provider: { '@id': `${SITE}/#organization` },
      areaServed: { '@type': 'City', name: 'Oklahoma City' },
    },
    {
      '@type': 'FAQPage',
      '@id': `${PAGE_URL}#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Does Ebenezer Health Clinic offer Tirzepatide for weight loss?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Tirzepatide may be considered as part of Ebenezer Health Clinic’s medical weight-loss program for appropriate patients following clinical evaluation.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is Tirzepatide appropriate for everyone?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No single medication-assisted weight-loss approach is appropriate for everyone. Your provider will review your individual health information before recommending treatment.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will I automatically receive Tirzepatide after scheduling a consultation?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Scheduling a medical weight-loss consultation does not guarantee that Tirzepatide will be prescribed or provided. Treatment recommendations depend on your individual clinical evaluation.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Ebenezer Health Clinic also offer Semaglutide?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Semaglutide may also be considered as a medication-assisted weight-management option for appropriate patients.',
          },
        },
        {
          '@type': 'Question',
          name: 'Should I choose Tirzepatide or Semaglutide?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Your provider can review your individual health history, previous treatments, medications, goals, and other relevant information before discussing which weight-management approach may be appropriate.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is Tirzepatide the only part of the weight-loss program?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. The clinic’s medical weight-management approach can also consider nutrition, physical activity, sleep, stress, lifestyle habits, and individual goals.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will I need follow-up appointments?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Medication-assisted weight management may require ongoing follow-up. The frequency and type of follow-up will depend on your individual treatment plan and healthcare needs.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can medical weight-loss visits be completed through telehealth?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Appropriate consultations and follow-up visits may be available through telehealth throughout Oklahoma. Some aspects of care may require an in-person appointment.',
          },
        },
        {
          '@type': 'Question',
          name: 'How quickly will I lose weight with Tirzepatide?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Weight-loss results vary between individuals, and a specific amount or rate of weight loss cannot be guaranteed. Your provider can help establish and monitor an individualized weight-management plan.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much does Tirzepatide weight-loss treatment cost?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Contact Ebenezer Health Clinic for current medical weight-loss pricing and information about what is included in the program.',
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
        { '@type': 'ListItem', position: 3, name: 'Tirzepatide', item: PAGE_URL },
      ],
    },
  ],
}

const assessmentFactors = [
  'Current weight and goal weight',
  'Medical history',
  'Current medications and supplements',
  'Previous weight-loss treatments',
  'Previous use of weight-loss medications',
  'Nutrition and eating habits',
  'Physical activity',
  'Sleep and stress',
  'Current symptoms and health concerns',
  'Previous medication side effects',
  'Weight-management goals',
  'Motivation and readiness',
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
  'Previous or current weight-loss medication',
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
    title: 'Complete Your Questionnaire',
    desc: 'Provide information about your health history, previous weight-loss efforts, medications, lifestyle, symptoms, and goals.',
  },
  {
    icon: UserCheck,
    step: '3',
    title: 'Meet With Your Provider',
    desc: 'Discuss your weight-management history, current concerns, previous treatments, and what you would like to achieve.',
  },
  {
    icon: MessageSquareText,
    step: '4',
    title: 'Review Your Weight Loss Options',
    desc: 'Based on your individual clinical evaluation, your provider can discuss an appropriate medical weight-management approach. For qualified patients, medication-assisted options may include Tirzepatide or Semaglutide.',
  },
  {
    icon: Repeat,
    step: '5',
    title: 'Continue With Follow-Up Care',
    desc: 'Follow-up appointments provide an opportunity to discuss your progress, treatment experience, concerns, and changes in your health or weight-management plan.',
  },
]

const followUpTopics = [
  'Your progress',
  'Treatment experience',
  'Side effects or concerns',
  'Lifestyle changes',
  'Weight-management goals',
  'Changes in medications or health history',
  'Questions about your care plan',
]

const lifestyleFactors = [
  {
    title: 'Nutrition & Eating Habits',
    desc: 'Your eating patterns and nutrition habits can be discussed as part of your individualized weight-management approach.',
  },
  {
    title: 'Physical Activity',
    desc: 'Your current activity level and exercise habits provide additional context for developing realistic goals.',
  },
  {
    title: 'Sleep & Stress',
    desc: 'Your weight-loss questionnaire includes sleep and stress because these are part of understanding your broader lifestyle.',
  },
  {
    title: 'Goals & Motivation',
    desc: 'Your personal goals and readiness to make changes are important when developing an individualized plan.',
  },
]

const whyChoosePoints = [
  {
    title: 'Individualized Weight Management',
    description:
      'Your health history, previous weight-loss experience, lifestyle, concerns, and goals help guide your care.',
  },
  {
    title: 'Medication-Assisted Options',
    description:
      'Tirzepatide and Semaglutide may be considered for appropriate patients following clinical evaluation.',
  },
  {
    title: 'Medical Oversight',
    description:
      'Evaluation and appropriate follow-up are incorporated into medication-assisted weight management.',
  },
  {
    title: 'Lifestyle Support',
    description:
      'Nutrition, physical activity, sleep, stress, and individual goals can be considered alongside medication.',
  },
  {
    title: 'Convenient Care',
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

export default function TirzepatidePage() {
  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tirzepatideSchema) }}
      />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden -mt-[112px] sm:-mt-[128px] lg:-mt-[144px] pt-[112px] sm:pt-[128px] lg:pt-[144px]"
        style={{
          backgroundImage: "url('/tirzepatide.webp')",
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
              <span style={{ color: 'var(--primary)' }}>Tirzepatide</span>
            </nav>

            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--primary)' }}
            >
              Tirzepatide · Medical Weight Loss · Oklahoma City
            </span>

            <h1
              className="text-4xl md:text-5xl font-bold mb-5 leading-tight"
              style={{ color: 'var(--navy)' }}
            >
              Tirzepatide for Weight Loss in Oklahoma City
            </h1>

            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-5 max-w-2xl">
              Reaching and maintaining your weight goals can be challenging,
              and some patients may benefit from additional medical support.
            </p>

            <p className="text-base text-gray-600 leading-relaxed mb-5 max-w-2xl">
              At Ebenezer Health Clinic,{' '}
              <strong>Tirzepatide may be considered as part of a
              personalized medical weight-loss program for appropriate
              patients</strong> following clinical evaluation.
            </p>

            <p className="text-base text-gray-600 leading-relaxed mb-8 max-w-2xl">
              Our medical weight-management approach considers your health
              history, previous weight-loss efforts, lifestyle, current
              medications, symptoms, and individual goals—not medication
              alone.
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
              Medically Guided Weight Loss With Tirzepatide
            </h2>
            <div className="flex items-center gap-2 mb-6" aria-hidden="true">
              <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
              <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
              <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
            </div>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
              Medical weight management should be individualized to the
              patient.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
              At Ebenezer Health Clinic, we begin by learning about your
              health history, current weight, weight goals, previous
              weight-loss treatments, medications, nutrition, physical
              activity, sleep, stress, and other relevant concerns.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
              For appropriate patients, Tirzepatide may be considered as one
              component of a medically guided weight-management plan.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Medication-assisted weight loss is not automatically
              appropriate for everyone. Your provider will evaluate your
              individual circumstances before recommending a treatment
              approach.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHAT IS TIRZEPATIDE? ─────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        aria-labelledby="what-is-tirzepatide-heading"
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
                id="what-is-tirzepatide-heading"
                className="text-3xl md:text-4xl font-bold mb-5"
                style={{ color: 'var(--navy)' }}
              >
                What Is Tirzepatide?
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                Tirzepatide is a medication that may be considered for
                medically supervised weight management in appropriate
                patients.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                At Ebenezer Health Clinic, Tirzepatide is offered within a
                broader medical weight-loss approach that includes provider
                evaluation and appropriate follow-up.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
                Whether Tirzepatide is appropriate for you depends on your
                individual health information and clinical evaluation.
              </p>
              <Link href="/contact" className="btn-primary text-base px-7 py-3.5">
                Ask About Tirzepatide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO MAY BE CONSIDERED ─────────────────────────────────── */}
      <section className="bg-white" aria-labelledby="who-considered-heading">
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
                id="who-considered-heading"
                className="text-3xl md:text-4xl font-bold mb-3"
                style={{ color: 'var(--navy)' }}
              >
                Who May Be Considered for Medication-Assisted Weight Loss?
              </h2>
              <div className="flex items-center gap-2 mb-6" aria-hidden="true">
                <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
                <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
                <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
              </div>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
                The decision to use medication as part of weight management
                requires individual evaluation.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                During the assessment process, your provider may review
                information including:
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
                {assessmentFactors.map((item) => (
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
                This information helps your provider understand your overall
                health and determine an appropriate approach to weight
                management.
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
              Tirzepatide as Part of a Personalized Weight Management Plan
            </h2>
            <div className="flex items-center gap-2 mb-6" aria-hidden="true">
              <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
              <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
              <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
            </div>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
              Medication-assisted weight loss should not be viewed in
              isolation.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
              Your individualized plan may also consider nutrition, eating
              habits, physical activity, sleep, stress, lifestyle patterns,
              and your personal weight-management goals.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
              The goal is to create a medically guided approach based on your
              individual circumstances rather than using the same plan for
              every patient.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Your provider can discuss what role, if any, medication may
              have within your overall weight-management plan.
            </p>
          </div>
        </div>
      </section>

      {/* ── TIRZEPATIDE OR SEMAGLUTIDE? ──────────────────────────── */}
      <section className="bg-white" aria-labelledby="tirz-or-sema-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-3xl">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--primary)' }}
            >
              Treatment Options
            </span>
            <h2
              id="tirz-or-sema-heading"
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ color: 'var(--navy)' }}
            >
              Tirzepatide or Semaglutide?
            </h2>
            <div className="flex items-center gap-2 mb-6" aria-hidden="true">
              <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
              <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
              <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
            </div>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
              Ebenezer Health Clinic offers medical weight-loss care that may
              include{' '}
              <strong>Tirzepatide or Semaglutide for appropriate patients</strong>.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
              Rather than choosing a medication based solely on what you have
              heard about it, schedule a medical weight-loss consultation so
              your provider can review your health information and discuss
              available options.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
              The appropriate treatment will depend on your individual
              clinical evaluation.
            </p>
            <Link href="/medical-weight-loss/semaglutide" className="btn-primary text-base px-7 py-3.5">
              Learn About Semaglutide Weight Loss
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
                Your Weight Loss Questionnaire
              </h2>
              <div className="flex items-center gap-2 mb-6" aria-hidden="true">
                <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
                <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
                <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
              </div>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
                Before your medical weight-loss consultation, complete the
                Weight Loss Program Patient Questionnaire.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
                This helps the clinic understand important information about
                your health and weight-management history, including:
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
                The questionnaire also asks whether you are open to
                medication-assisted weight loss if appropriate and whether
                you are willing to follow a personalized plan. If needed, our
                team can assist you with completing the questionnaire during
                your initial intake or free consultation call.
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
              What to Expect From Your Tirzepatide Weight Loss Visit
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

      {/* ── MEDICAL MONITORING & FOLLOW-UP ───────────────────────── */}
      <section className="bg-white" aria-labelledby="monitoring-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
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
                Medical Monitoring &amp; Follow-Up
              </h2>
              <div className="flex items-center gap-2 mb-6" aria-hidden="true">
                <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
                <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
                <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
              </div>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
                Ongoing medical oversight is an important part of
                medication-assisted weight management.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Your provider can determine the appropriate follow-up
                schedule based on your individual treatment plan and
                healthcare needs.
              </p>
            </div>

            <div
              className="rounded-2xl p-7 md:p-8"
              style={{
                backgroundColor: 'rgba(151,206,204,0.08)',
                border: '1px solid rgba(26,166,183,0.12)',
              }}
            >
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: 'var(--primary)' }}
              >
                During follow-up visits, you can discuss
              </p>
              <ul className="space-y-3 mb-6">
                {followUpTopics.map((item) => (
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
              <p className="text-sm text-gray-500 pt-5" style={{ borderTop: '1px solid rgba(26,166,183,0.12)' }}>
                Your treatment approach may be reviewed or adjusted when
                clinically appropriate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WEIGHT MANAGEMENT BEYOND MEDICATION ──────────────────── */}
      <section
        style={{ backgroundColor: 'var(--cream)' }}
        aria-labelledby="beyond-med-heading"
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
              id="beyond-med-heading"
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ color: 'var(--navy)' }}
            >
              Weight Management Beyond Medication
            </h2>
            <div className="flex items-center gap-2 mb-5" aria-hidden="true">
              <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
              <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
              <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
            </div>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              At Ebenezer Health Clinic, medical weight management considers
              more than medication.
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
            Medication, when appropriate, is one component of this broader
            approach.
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
              Ebenezer Health Clinic provides medical weight-management care
              from our Bethany location serving Oklahoma City and
              surrounding communities.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
              Appropriate consultations and follow-up appointments may also
              be available through{' '}
              <strong>secure telehealth throughout Oklahoma</strong>.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6">
              Whether a specific appointment can be completed through
              telehealth depends on your individual healthcare needs and the
              services required.
            </p>
            <p className="text-sm text-gray-500">
              Contact our team if you are unsure which appointment type is
              appropriate.
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
                Medical weight-management care at Ebenezer Health Clinic is
                led by <strong>Dr. Susan George, DNP, APRN, BC-ADM</strong>.
              </p>
              <p className="text-base text-gray-600 leading-relaxed mb-8">
                Dr. George provides individualized care focused on
                understanding each patient&apos;s health history, concerns,
                previous weight-management experience, and goals.
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
                  alt="Dr. Susan George, DNP, APRN — Tirzepatide Weight Loss Provider at Ebenezer Health Clinic, Oklahoma City"
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
              Tirzepatide Weight Loss FAQs
            </h2>
          </div>

          <TirzepatideFAQAccordion />
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
              Tirzepatide Pricing &amp; Program Information
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Medical weight-loss pricing should be clearly communicated
              before treatment begins.
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

      {/* ── TIRZEPATIDE WEIGHT LOSS IN THE OKC AREA ──────────────── */}
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
              Tirzepatide Weight Loss in the Oklahoma City Area
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
              For appropriate patients, Tirzepatide may be considered as part
              of an individualized, medically guided weight-loss plan.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Appropriate consultations and follow-up care may also be
              available through telehealth throughout Oklahoma.
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
            If you are considering medication-assisted weight management,
            start with an individualized consultation rather than choosing a
            medication on your own. Schedule an appointment with Ebenezer
            Health Clinic to discuss your health history, previous
            weight-loss efforts, lifestyle, goals, and whether{' '}
            <strong>Tirzepatide, Semaglutide, or another
            weight-management approach</strong> may be appropriate for you.
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
              <Link href="/medical-weight-loss/semaglutide" className="hover:opacity-80">Semaglutide Weight Loss</Link>
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
