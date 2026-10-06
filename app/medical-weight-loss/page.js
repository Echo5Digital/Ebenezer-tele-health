import Link from 'next/link'
import Image from 'next/image'
import {
  CheckCircle2,
  ArrowRight,
  Info,
  MapPin,
  Phone,
  Mail,
  ClipboardList,
  Syringe,
} from 'lucide-react'
import WeightLossFAQAccordion from './WeightLossFAQAccordion'
import Testimonials from '@/components/Testimonials'

export const metadata = {
  title: 'Medical Weight Loss Oklahoma City',
  description:
    'Personalized medical weight loss in the Oklahoma City area with Semaglutide and Tirzepatide options for qualified patients. In-person and Oklahoma telehealth care available.',
  alternates: {
    canonical: 'https://www.ebenezerhealthclinic.com/medical-weight-loss',
  },
}

const pricingProgramFeatures = [
  'Provider consultation and individualized evaluation',
  'Initial labs included',
  'Prescriptions sent to Lilly Direct Pharmacy when appropriate',
  'Ongoing monitoring and follow-up care',
]

const programIncludes = [
  'Comprehensive health and weight-history review',
  'Review of previous weight-loss attempts',
  'Current medication and supplement review',
  'Evaluation of weight-related health concerns',
  'Nutrition and lifestyle assessment',
  'Physical activity assessment',
  'Sleep and stress review',
  'Personalized weight-loss goals',
  'Medication-assisted weight-loss evaluation when appropriate',
  'Progress monitoring',
  'Follow-up care and treatment adjustments when needed',
]

const biggerPictureFactors = [
  'Eating patterns',
  'Nutrition',
  'Physical activity',
  'Sleep',
  'Stress',
  'Previous weight-loss attempts',
  'Current health conditions',
  'Medications and supplements',
  'Personal goals and motivation',
]

const whoMayBenefit = [
  'Have struggled to lose weight through lifestyle changes alone',
  'Have previously tried diet or exercise programs without reaching their goals',
  'Want professional guidance with weight management',
  'Have questions about weight-loss medications',
  'Want a personalized approach rather than a one-size-fits-all program',
  'Need ongoing support and progress monitoring',
]

const questionnaireTopics = [
  'Height, current weight, and goal weight',
  'Reason for your visit',
  'Medical history',
  'Previous weight-loss treatments',
  'Current medications',
  'Eating patterns and nutrition',
  'Food allergies or restrictions',
  'Physical activity',
  'Sleep',
  'Stress',
  'Current symptoms',
  'Current weight-loss medications',
  'Medication side effects, if applicable',
  'Short-term and long-term goals',
  'Your readiness for medication-assisted weight loss, when appropriate',
]

const steps = [
  {
    number: '01',
    title: 'Schedule Your Consultation',
    description: 'Book a medical weight-loss consultation with Ebenezer Health Clinic.',
  },
  {
    number: '02',
    title: 'Complete Your Questionnaire',
    description:
      'Complete your Weight Loss Program Patient Questionnaire before your appointment. This gives your provider important information about your health, lifestyle, previous weight-loss efforts, current medications, symptoms, and goals.',
  },
  {
    number: '03',
    title: 'Meet With Your Provider',
    description:
      'Your provider will review your questionnaire and discuss your health history, weight-management experience, challenges, and goals. If you are interested in medication-assisted weight loss, your provider can determine whether an option such as Semaglutide or Tirzepatide may be clinically appropriate.',
  },
  {
    number: '04',
    title: 'Receive Your Personalized Plan',
    description:
      'Based on your evaluation, your provider will develop an individualized weight-management plan. Your plan may include lifestyle recommendations, nutrition guidance, medication-assisted treatment when appropriate, and follow-up care.',
  },
  {
    number: '05',
    title: 'Monitor Your Progress',
    description:
      'Weight management is an ongoing process. Follow-up appointments allow your provider to monitor your progress, discuss concerns or side effects, and make appropriate adjustments to your care plan.',
  },
]

const whyChoosePoints = [
  {
    title: 'Personalized Weight-Management Plans',
    description:
      'Your program is developed around your health history, lifestyle, previous weight-loss experiences, and individual goals.',
  },
  {
    title: 'Medication Options When Appropriate',
    description:
      'Eligible patients can be evaluated for medication-assisted weight loss, including Semaglutide and Tirzepatide.',
  },
  {
    title: 'More Than a Prescription',
    description:
      'Our approach considers nutrition, activity, sleep, stress, medications, health history, and other factors relevant to weight management.',
  },
  {
    title: 'Ongoing Monitoring',
    description:
      'Follow-up care allows your provider to evaluate your progress and adjust your plan when appropriate.',
  },
  {
    title: 'Convenient Access',
    description:
      'Access care in person in the Oklahoma City area, with telehealth available throughout Oklahoma for appropriate services.',
  },
]

const providerCredentials = [
  'Doctor of Nursing Practice (DNP)',
  'Advanced Practice Registered Nurse (APRN)',
  'Board Certified in Advanced Diabetes Management (BC-ADM)',
  'In-person care in the Oklahoma City area',
  'Telehealth throughout Oklahoma',
]

const servingAreas = ['Oklahoma City', 'Bethany', 'Edmond', 'Norman', 'Moore', 'Tulsa']

const featuredLinks = [
  {
    name: 'Semaglutide Weight Loss',
    href: '#semaglutide',
    image: '/semaglutide-womens-weight-loss.jpeg',
  },
  {
    name: 'Tirzepatide Weight Loss',
    href: '#tirzepatide',
    image: '/tirzepatide-womens-weight-loss.jpg',
  },
]

// ─── Schema ───────────────────────────────────────────────────────────────────

const weightLossPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  name: 'Medical Weight Loss Oklahoma City | Ebenezer Health Clinic',
  description:
    'Personalized medical weight loss in the Oklahoma City area with Semaglutide and Tirzepatide options for qualified patients. In-person and Oklahoma telehealth care available.',
  url: 'https://www.ebenezerhealthclinic.com/medical-weight-loss',
  mainEntityOfPage: 'https://www.ebenezerhealthclinic.com/medical-weight-loss',
  specialty: 'Endocrinology',
  about: {
    '@type': 'MedicalProcedure',
    name: 'Medical Weight Loss Management',
    procedureType: 'https://schema.org/TherapeuticProcedure',
    description:
      'Medically supervised weight-management program including individualized evaluation, lifestyle guidance, and medication-assisted weight loss with Semaglutide or Tirzepatide when clinically appropriate. Available in person in the Oklahoma City area and via telehealth throughout Oklahoma. Led by Dr. Susan George, DNP, APRN, BC-ADM.',
  },
  provider: { '@id': 'https://www.ebenezerhealthclinic.com/#dr-susan-george' },
  areaServed: [
    { '@type': 'City', name: 'Oklahoma City', containedInPlace: { '@type': 'State', name: 'Oklahoma' } },
    { '@type': 'State', name: 'Oklahoma' },
  ],
}

const weightLossFAQSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is medical weight loss?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Medical weight loss is a clinician-guided approach to weight management that considers your health history, current medications, lifestyle, previous weight-loss attempts, and personal goals. Your individualized plan may include lifestyle guidance, medication-assisted treatment when appropriate, monitoring, and follow-up care.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Ebenezer Health Clinic offer Semaglutide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Semaglutide may be considered for qualified patients as part of an individualized medical weight-management plan. Your provider will determine whether it is appropriate based on your clinical evaluation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Ebenezer Health Clinic offer Tirzepatide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tirzepatide may also be considered for qualified patients. Your provider will review your health history, medications, goals, and other relevant factors to determine whether it may be appropriate for you.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which is right for me – Semaglutide or Tirzepatide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There is no single medication that is appropriate for everyone. Your provider will evaluate your individual health history, current medications, previous weight-loss treatments, goals, and other clinical factors before recommending an appropriate treatment option.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I have to take medication to join the weight-loss program?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Medication-assisted weight loss is only one potential component of medical weight management. Your provider will discuss an individualized approach based on your needs and clinical evaluation.',
      },
    },
    {
      '@type': 'Question',
      name: 'What information do I need before my first appointment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Completing the Weight Loss Program Patient Questionnaire before your appointment can help your provider understand your medical history, medications, previous weight-loss treatments, lifestyle, symptoms, and goals.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I receive weight-loss care through telehealth?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Eligible consultations and follow-up appointments may be available through telehealth throughout Oklahoma. Certain evaluations or services may require an in-person visit when clinically appropriate.',
      },
    },
    {
      '@type': 'Question',
      name: 'How quickly will I lose weight?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Weight-loss results vary between individuals and depend on many factors, including health history, treatment approach, lifestyle, adherence, and individual response. Your provider will work with you to establish appropriate goals and monitor your progress.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will I need follow-up appointments?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Follow-up care may be recommended to monitor your progress, discuss concerns or medication side effects, and make appropriate adjustments to your treatment plan.',
      },
    },
  ],
}

export default function WeightLossPage() {
  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(weightLossPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(weightLossFAQSchema) }}
      />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden -mt-[112px] sm:-mt-[128px] lg:-mt-[144px] pt-[112px] sm:pt-[128px] lg:pt-[144px]"
        style={{
          backgroundImage: "url('/location_bg.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Mobile overlay — flat white for readability */}
        <div
          className="absolute inset-0 lg:hidden"
          style={{ backgroundColor: 'rgba(255,255,255,0.88)' }}
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
              className="flex items-center gap-2 text-sm text-gray-500 mb-6"
              aria-label="Breadcrumb"
            >
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <span aria-hidden="true">/</span>
              <span style={{ color: 'var(--primary)' }}>Medical Weight Loss</span>
            </nav>

            <h1
              className="text-4xl md:text-5xl font-bold mb-5 leading-tight"
              style={{ color: 'var(--navy)' }}
            >
              Medical Weight Loss in Oklahoma City – Personalized Weight
              Management
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed mb-5 max-w-2xl">
              Achieve your weight-loss goals with personalized, medically
              guided care at Ebenezer Health Clinic.
            </p>

            <p className="text-base text-gray-600 leading-relaxed mb-5 max-w-2xl">
              Our medical weight-loss program combines clinical evaluation,
              lifestyle guidance, ongoing support, and medication-assisted
              weight loss, including{' '}
              <strong>Semaglutide and Tirzepatide when clinically appropriate</strong>.
            </p>

            <p className="text-base text-gray-600 leading-relaxed mb-8 max-w-2xl">
              Visit us in the Oklahoma City area or access eligible
              weight-management services through telehealth across Oklahoma.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto text-center"
              >
                Start Your Weight Loss Journey
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

      {/* ── A PERSONALIZED APPROACH ──────────────────────────────── */}
      <section className="bg-white" aria-labelledby="personalized-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:items-stretch">
            <div className="flex flex-col justify-center">
              <span
                className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: 'var(--primary)' }}
              >
                Our Approach
              </span>
              <h2
                id="personalized-heading"
                className="text-3xl md:text-4xl font-bold mb-3"
                style={{ color: 'var(--navy)' }}
              >
                A Personalized Approach to Medical Weight Loss
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
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
                Weight loss is not the same for everyone. Your health history,
                current weight, lifestyle, medications, previous weight-loss
                attempts, symptoms, and personal goals can all influence which
                approach may be appropriate for you.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                At Ebenezer Health Clinic, our medical weight-loss program
                begins with an individualized evaluation. Rather than relying
                on a one-size-fits-all plan, we work with you to understand
                your needs and develop a personalized weight-management
                strategy.
              </p>
            </div>

            <div
              className="rounded-2xl p-8 h-full flex flex-col justify-center"
              style={{
                backgroundColor: 'rgba(151,206,204,0.15)',
                border: '1px solid rgba(26,166,183,0.15)',
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl flex-shrink-0"
                  style={{ backgroundColor: 'rgba(26,166,183,0.10)' }}
                  aria-hidden="true"
                >
                  <ClipboardList
                    className="h-5 w-5"
                    style={{ color: 'var(--primary)' }}
                  />
                </div>
                <h3
                  className="text-xl font-semibold"
                  style={{ color: 'var(--navy)' }}
                >
                  Your Plan, Built Around You
                </h3>
              </div>
              <p className="text-gray-600 mb-5 leading-relaxed text-sm md:text-base">
                Depending on your clinical evaluation, your plan may include
                lifestyle and nutrition guidance, medication-assisted weight
                loss, progress monitoring, and ongoing follow-up.
              </p>
              <Link href="/contact" className="btn-primary text-sm self-start">
                Start Your Weight Loss Journey
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ──────────────────────────────────────── */}
      <section
        style={{ backgroundColor: 'var(--cream)' }}
        aria-labelledby="whats-included-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center mb-10">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--primary)' }}
            >
              Your Program
            </span>
            <h2
              id="whats-included-heading"
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: 'var(--navy)' }}
            >
              What&apos;s Included in Our Medical Weight Loss Program?
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Our weight-management approach focuses on more than the number
              on the scale. Your care may include:
            </p>
          </div>

          <div
            className="max-w-4xl mx-auto rounded-2xl p-7 md:p-10"
            style={{
              backgroundColor: 'rgba(255,255,255,0.85)',
              border: '1px solid rgba(26,166,183,0.15)',
              boxShadow: '0 2px 20px rgba(26,166,183,0.07)',
            }}
          >
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4" role="list">
              {programIncludes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    className="h-5 w-5 mt-0.5 flex-shrink-0"
                    style={{ color: 'var(--primary)' }}
                    aria-hidden="true"
                  />
                  <span className="text-gray-700 leading-snug">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-500 mt-7 pt-6" style={{ borderTop: '1px solid rgba(26,166,183,0.12)' }}>
              Your provider will determine which components are appropriate
              based on your individual health needs.
            </p>
          </div>
        </div>
      </section>

      {/* ── MEDICATION-ASSISTED WEIGHT LOSS ──────────────────────── */}
      <section className="bg-white" aria-labelledby="med-assisted-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-3xl">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--primary)' }}
            >
              Treatment Options
            </span>
            <h2
              id="med-assisted-heading"
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ color: 'var(--navy)' }}
            >
              Medication-Assisted Weight Loss
            </h2>
            <div className="flex items-center gap-2 mb-6" aria-hidden="true">
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
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
              For some patients, prescription medication may be considered as
              part of a comprehensive medical weight-management plan.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
              Ebenezer Health Clinic offers evaluation for medication-assisted
              weight loss, including <strong>Semaglutide and Tirzepatide</strong>, when
              clinically appropriate.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Medication is not automatically recommended for every patient.
              Your provider will review your health history, current
              medications, previous treatments, goals, and other relevant
              factors before determining whether medication-assisted weight
              loss may be appropriate for you.
            </p>
          </div>
        </div>
      </section>

      {/* ── SEMAGLUTIDE ───────────────────────────────────────────── */}
      <section
        id="semaglutide"
        className="scroll-mt-24 relative overflow-hidden"
        aria-labelledby="semaglutide-heading"
        style={{
          backgroundImage: "url('/semaglitude.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(232,247,247,0.60)' }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--primary)' }}
            >
              Semaglutide
            </span>
            <h2
              id="semaglutide-heading"
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ color: 'var(--navy)' }}
            >
              Semaglutide for Weight Management
            </h2>
            <div className="flex items-center gap-2 mb-6" aria-hidden="true">
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
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
              Semaglutide may be considered as part of a medically supervised
              weight-management plan for appropriate patients.
            </p>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              Before recommending treatment, your provider will evaluate your
              medical history, current medications, previous weight-loss
              efforts, symptoms, and individual health goals.
            </p>
            <p className="text-base text-gray-700 leading-relaxed mb-8">
              If Semaglutide is appropriate for you, your provider will
              discuss the treatment plan, monitoring, follow-up, and other
              relevant considerations with you.
            </p>
            <Link href="/contact" className="btn-primary text-base px-7 py-3.5">
              Schedule a Weight Loss Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* ── TIRZEPATIDE ───────────────────────────────────────────── */}
      <section
        id="tirzepatide"
        className="scroll-mt-24 bg-white"
        aria-labelledby="tirzepatide-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-3xl">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--primary)' }}
            >
              Tirzepatide
            </span>
            <h2
              id="tirzepatide-heading"
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ color: 'var(--navy)' }}
            >
              Tirzepatide for Weight Management
            </h2>
            <div className="flex items-center gap-2 mb-6" aria-hidden="true">
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
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
              Tirzepatide is another medication that may be considered for
              qualified patients as part of an individualized medical
              weight-loss program.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
              Your provider will determine whether Tirzepatide may be
              appropriate based on your health history, current medications,
              weight-management goals, and clinical evaluation.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
              If medication-assisted treatment is recommended, ongoing
              follow-up helps your provider monitor your progress, discuss
              concerns, and make appropriate adjustments to your treatment
              plan.
            </p>
            <Link href="/contact" className="btn-primary text-base px-7 py-3.5">
              Ask About Tirzepatide
            </Link>
          </div>
        </div>
      </section>

      {/* ── MORE THAN MEDICATION ─────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        aria-labelledby="more-than-med-heading"
        style={{
          backgroundImage: "url('/weight_loss_img.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(255,255,255,0.80)' }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
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
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Medication can be one component of medical weight management,
                but sustainable weight-management care should consider the
                broader factors that can influence your progress. At Ebenezer
                Health Clinic, we consider areas such as:
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
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-6" role="list">
                {biggerPictureFactors.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      className="h-5 w-5 mt-0.5 flex-shrink-0"
                      style={{ color: 'var(--primary)' }}
                      aria-hidden="true"
                    />
                    <span className="text-gray-700 leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-500 pt-5" style={{ borderTop: '1px solid rgba(26,166,183,0.12)' }}>
                By looking at the bigger picture, your provider can develop a
                plan that better reflects your individual needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO MAY BENEFIT ───────────────────────────────────────── */}
      <section className="bg-white" aria-labelledby="who-benefit-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <span
                className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: 'var(--primary)' }}
              >
                Who We Serve
              </span>
              <h2
                id="who-benefit-heading"
                className="text-3xl md:text-4xl font-bold mb-3"
                style={{ color: 'var(--navy)' }}
              >
                Who May Benefit From Medical Weight Loss?
              </h2>
              <div className="flex items-center gap-2 mb-6" aria-hidden="true">
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
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6">
                Our medical weight-loss program may be appropriate for adults
                who:
              </p>
              <ul className="space-y-4" role="list">
                {whoMayBenefit.map((reason) => (
                  <li key={reason} className="flex items-start gap-3">
                    <div
                      className="flex-shrink-0 mt-0.5 h-5 w-5 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: 'rgba(26,166,183,0.10)' }}
                      aria-hidden="true"
                    >
                      <CheckCircle2
                        className="h-3.5 w-3.5"
                        style={{ color: 'var(--primary)' }}
                      />
                    </div>
                    <span className="text-gray-700 leading-relaxed">
                      {reason}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="rounded-2xl p-8"
              style={{
                backgroundColor: 'rgba(151,206,204,0.10)',
                border: '1px solid rgba(26,166,183,0.12)',
              }}
            >
              <h3
                className="text-xl font-semibold mb-4"
                style={{ color: 'var(--navy)' }}
              >
                Eligibility Is Individual
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Eligibility for any prescription treatment is determined
                through an individual clinical evaluation. Your provider will
                review your health history and goals before recommending next
                steps.
              </p>
              <div className="mt-6">
                <Link href="/contact" className="btn-primary text-sm">
                  Start Your Weight Loss Journey
                </Link>
              </div>
            </div>
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
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
                Before your appointment, complete our Weight Loss Program
                Patient Questionnaire.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
                The questionnaire helps your provider understand your health,
                previous weight-loss experience, lifestyle, symptoms, and
                goals before developing your individualized plan.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6">
                Please complete what you can. If you do not know every answer,
                that is okay. If you prefer, our team can also assist you with
                the questionnaire during your initial intake or free
                consultation call.
              </p>
              <Link
                href="/contact"
                className="btn-primary text-base px-7 py-3.5"
              >
                Complete Weight Loss Questionnaire
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
                You&apos;ll be asked about areas including
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
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
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW OUR PROGRAM WORKS ────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        aria-labelledby="how-it-works-heading"
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
              How It Works
            </span>
            <h2
              id="how-it-works-heading"
              className="text-3xl md:text-4xl font-bold"
              style={{ color: 'var(--navy)' }}
            >
              How Our Medical Weight Loss Program Works
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-12">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl p-6 flex flex-col gap-4"
                style={{
                  background: 'rgba(255,255,255,0.88)',
                  border: '1px solid rgba(26,166,183,0.12)',
                  boxShadow: '0 2px 12px rgba(26,166,183,0.06)',
                }}
              >
                <div
                  className="inline-flex h-12 w-12 items-center justify-center rounded-xl text-lg font-bold flex-shrink-0"
                  style={{
                    backgroundColor: 'var(--primary)',
                    color: '#ffffff',
                  }}
                >
                  {step.number}
                </div>
                <h3
                  className="text-sm font-semibold leading-snug"
                  style={{ color: 'var(--navy)' }}
                >
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/contact"
              className="btn-primary text-base px-8 py-3.5"
            >
              Book Weight Loss Consultation
            </Link>
            <p className="mt-3 text-sm text-gray-600">
              or{' '}
              <a
                href="tel:+14053498188"
                className="font-semibold"
                style={{ color: 'var(--primary)' }}
              >
                call (405) 349-8188
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ── IN PERSON & TELEHEALTH ───────────────────────────────── */}
      <section
        className="relative overflow-hidden bg-white"
        aria-labelledby="in-person-heading"
      >
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
              Medical Weight Loss – In Person &amp; Through Telehealth
            </h2>
            <div className="flex items-center gap-2 mb-6" aria-hidden="true">
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
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-5">
              Ebenezer Health Clinic provides convenient access to medical
              weight-management care for patients in Oklahoma.
            </p>

            <div className="space-y-4 mb-5">
              <div
                className="rounded-xl p-5 flex items-start gap-3"
                style={{
                  backgroundColor: 'rgba(151,206,204,0.15)',
                  border: '1px solid rgba(26,166,183,0.20)',
                }}
              >
                <MapPin
                  className="h-5 w-5 mt-0.5 flex-shrink-0"
                  style={{ color: 'var(--primary)' }}
                  aria-hidden="true"
                />
                <p className="text-sm text-gray-700">
                  <strong>In-Person Care:</strong> Visit our clinic in the
                  Oklahoma City area.
                </p>
              </div>
              <div
                className="rounded-xl p-5 flex items-start gap-3"
                style={{
                  backgroundColor: 'rgba(151,206,204,0.15)',
                  border: '1px solid rgba(26,166,183,0.20)',
                }}
              >
                <Syringe
                  className="h-5 w-5 mt-0.5 flex-shrink-0"
                  style={{ color: 'var(--primary)' }}
                  aria-hidden="true"
                />
                <p className="text-sm text-gray-700">
                  <strong>Telehealth:</strong> Eligible weight-management
                  consultations and follow-up care may be available through
                  telehealth throughout Oklahoma.
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-500">
              Some evaluations, testing, or other aspects of care may require
              an in-person visit when clinically appropriate.
            </p>
          </div>
        </div>
      </section>

      {/* ── PRICING & WHAT'S INCLUDED ─────────────────────────────── */}
      <section
        id="pricing"
        style={{ backgroundColor: 'var(--cream)' }}
        aria-labelledby="pricing-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center mb-10">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--primary)' }}
            >
              Pricing &amp; What&apos;s Included
            </span>
            <h2
              id="pricing-heading"
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: 'var(--navy)' }}
            >
              What&apos;s Included in Your Weight Loss Program
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              We believe in clear, transparent pricing so you understand the
              cost of your care.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            {/* Monthly Program Card */}
            <div
              className="rounded-2xl p-7 md:p-8 border flex flex-col"
              style={{
                background:
                  'linear-gradient(135deg, rgba(26,166,183,0.06) 0%, rgba(151,206,204,0.18) 100%)',
                borderColor: 'rgba(26,166,183,0.30)',
              }}
            >
              <h3
                className="text-lg font-semibold mb-1"
                style={{ color: 'var(--navy)' }}
              >
                Monthly Program
              </h3>
              <p className="text-sm text-gray-600 mb-5">
                Includes initial labs and prescriptions sent to Lilly Direct
                Pharmacy.
              </p>
              <div className="flex items-baseline gap-2 mb-6">
                <span
                  className="text-5xl font-bold"
                  style={{ color: 'var(--primary)' }}
                >
                  $100
                </span>
                <span className="text-sm text-gray-500">/month</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {pricingProgramFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <CheckCircle2
                      className="h-4 w-4 mt-0.5 flex-shrink-0"
                      style={{ color: 'var(--primary)' }}
                      aria-hidden="true"
                    />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="btn-primary text-base w-full text-center"
              >
                Schedule Your Consultation
              </Link>
            </div>

            {/* Medication billing note */}
            <div
              className="mt-6 rounded-xl p-5 flex items-start gap-3 text-left"
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
                Weight-loss medication is billed separately to the patient
                and depends on the option chosen after evaluation.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/pricing"
                className="btn-outline text-base px-7 py-3.5 w-full sm:w-auto text-center"
              >
                View Pricing
              </Link>
              <Link
                href="/contact"
                className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto text-center"
              >
                Schedule Your Consultation
              </Link>
            </div>
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

              <p className="text-base text-gray-600 leading-relaxed mb-4">
                Medical weight-management care at Ebenezer Health Clinic is
                led by <strong>Dr. Susan George, DNP, APRN, BC-ADM</strong>.
              </p>
              <p className="text-base text-gray-600 leading-relaxed mb-4">
                Dr. George is a Doctor of Nursing Practice and Advanced
                Practice Registered Nurse who is Board Certified in Advanced
                Diabetes Management.
              </p>
              <p className="text-base text-gray-600 leading-relaxed mb-8">
                Her approach focuses on understanding each patient&apos;s
                health history, goals, challenges, and individual needs
                before developing a personalized care plan.
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
                  alt="Dr. Susan George, DNP, APRN — Medical Weight Loss Provider at Ebenezer Health Clinic, Oklahoma"
                  width={520}
                  height={620}
                  className="w-full h-auto object-cover"
                  priority={false}
                />
              </div>
            </div>
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
                  style={{
                    backgroundColor: 'rgba(26,166,183,0.10)',
                    color: 'var(--primary)',
                  }}
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, '0')}
                </div>

                <div className="min-w-0">
                  <p
                    className="font-semibold leading-snug"
                    style={{ color: 'var(--navy)' }}
                  >
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
              Medical Weight Loss FAQs
            </h2>
          </div>

          <WeightLossFAQAccordion />
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
                      <p className="text-sm text-gray-600 mt-0.5">
                        Oklahoma City area
                      </p>
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
                  <Link
                    href="/contact"
                    className="btn-primary text-sm px-5 py-3 w-full sm:w-auto text-center"
                  >
                    Book Weight Loss Consultation
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

      {/* ── SERVING ALL OF OKLAHOMA ──────────────────────────────── */}
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
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <h2
            id="serving-heading"
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: 'var(--navy)' }}
          >
            Medical Weight Loss for Patients Across Oklahoma
          </h2>
          <div className="flex items-center gap-2 mb-6" aria-hidden="true">
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
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mb-8">
            Ebenezer Health Clinic provides in-person medical
            weight-management care in the Oklahoma City area and telehealth
            access for eligible patients throughout Oklahoma. Telehealth can
            make appropriate consultations and follow-up care more accessible
            for patients in Oklahoma City, Bethany, Edmond, Norman, Moore,
            Tulsa, and other Oklahoma communities.
          </p>
          <div className="flex flex-wrap gap-3">
            {servingAreas.map((area) => (
              <span
                key={area}
                className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.85)',
                  color: 'var(--navy)',
                  border: '1px solid rgba(26,166,183,0.20)',
                }}
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED INTERNAL LINKS ───────────────────────────────── */}
      <section style={{ backgroundColor: 'var(--cream)' }} aria-labelledby="explore-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-16">
          <h2
            id="explore-heading"
            className="text-xs font-semibold uppercase tracking-widest mb-8 text-center"
            style={{ color: 'var(--primary)' }}
          >
            Explore Medical Weight Loss Options
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 max-w-2xl mx-auto">
            {featuredLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group block overflow-hidden rounded-xl transition-transform duration-200 hover:-translate-y-1"
                style={{
                  boxShadow: '0 2px 14px rgba(26,166,183,0.12)',
                }}
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <Image
                    src={link.image}
                    alt={link.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div
                  className="px-3 py-3 sm:py-4 flex items-center justify-center gap-1.5"
                  style={{ backgroundColor: 'var(--navy)' }}
                >
                  <span className="text-xs sm:text-sm font-semibold text-white leading-snug text-center">
                    {link.name}
                  </span>
                  <ArrowRight
                    className="h-3.5 w-3.5 flex-shrink-0 text-white transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </div>
              </a>
            ))}
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
            If you are ready for a more personalized approach to weight
            management, Ebenezer Health Clinic is here to help. Our medical
            weight-loss program combines individualized evaluation, lifestyle
            support, ongoing monitoring, and medication-assisted options such
            as{' '}
            <strong>Semaglutide and Tirzepatide when clinically appropriate</strong>.
            Schedule your consultation to discuss your goals and determine
            the next step in your weight-management journey.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="btn-primary text-base px-8 py-3.5 w-full sm:w-auto"
            >
              Start Your Weight Loss Journey
            </Link>
            <a
              href="tel:+14053498188"
              className="inline-flex items-center justify-center gap-2 text-gray-700 hover:text-primary font-semibold text-base transition-colors w-full sm:w-auto"
            >
              Call (405) 349-8188
            </a>
          </div>

          <p className="mt-10 text-sm text-gray-500">
            Ebenezer Health Clinic &middot; Oklahoma City, OK &middot; (405)
            349-8188 &middot; ebenezerhealthclinic.com
          </p>
        </div>
      </section>
    </>
  )
}
