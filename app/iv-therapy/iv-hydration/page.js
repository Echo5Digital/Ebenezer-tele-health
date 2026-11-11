import Link from 'next/link'
import Image from 'next/image'
import {
  AlertCircle,
  Building2,
  CalendarCheck,
  CheckCircle2,
  ClipboardCheck,
  ClipboardList,
  Droplets,
  FlaskConical,
  HeartPulse,
  Info,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Syringe,
  UserCheck,
} from 'lucide-react'
import IVHydrationFAQAccordion from './IVHydrationFAQAccordion'
import { PAGE_URL, buildIVHydrationSchema } from './ivHydrationSchema'

const PAGE_TITLE = "IV Hydration & Myers' Cocktail in OKC | Ebenezer Clinic"
const PAGE_DESCRIPTION =
  "Explore IV hydration and Myers' Cocktail in the Oklahoma City area at Ebenezer Health Clinic. Tri-Immune Boost and Nutrient Mix available on request."
const PAGE_KEYWORDS = [
  'IV Hydration in Oklahoma City',
  "Myers' Cocktail IV Oklahoma City",
  'IV Hydration Bethany OK',
  'IV Vitamin Therapy Oklahoma City',
  'Tri-Immune Boost IV',
  'Nutrient Mix IV Therapy',
  'Wellness IV Hydration OKC',
  'IV Hydration Clinic Near Oklahoma City',
]
const SHARE_IMAGE = '/iv-therapy-hydration.webp'

export const metadata = {
  // `absolute` skips the "%s | Ebenezer Health Clinic" template in app/layout.js
  // so the title is exactly the one supplied for this page.
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  keywords: PAGE_KEYWORDS,
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: PAGE_URL,
    siteName: 'Ebenezer Health Clinic',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [SHARE_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [SHARE_IMAGE],
  },
}

// ─── Page content ─────────────────────────────────────────────────────────────

const heroBadges = [
  { icon: Building2, label: 'In-Person IV Therapy' },
  { icon: ClipboardCheck, label: 'Clinical Screening Required' },
  { icon: UserCheck, label: 'Individualized Care' },
]

const treatments = [
  {
    id: 'myers-cocktail',
    icon: Droplets,
    title: 'Myers’ Cocktail IV Hydration',
    onRequest: false,
    intro: [
      'Myers’ Cocktail is an intravenous nutrient formulation containing fluids, B vitamins, vitamin C, magnesium, and calcium.',
      'These nutrients contribute to important physiological processes, including normal energy metabolism, muscle and nerve function, and immune system health.',
      'Myers’ Cocktail IV hydration provides supplemental fluids and nutrients directly into the bloodstream. However, the normal roles of these nutrients do not establish that IV administration improves energy, immunity, or overall wellness in individuals who already have adequate nutrient levels.',
      'At Ebenezer Health Clinic, Myers’ Cocktail IV hydration is offered following appropriate medical screening and provider evaluation.',
    ],
    details: [{ label: 'Availability and Pricing', value: 'Contact the Clinic' }],
    cta: 'Ask About Myers’ Cocktail IV Hydration',
  },
  {
    id: 'wellness-mix',
    icon: Sparkles,
    title: 'Wellness Mix IV Hydration',
    onRequest: false,
    intro: [
      'Wellness Mix is an IV hydration option available at Ebenezer Health Clinic in the Oklahoma City area.',
      "Previously referred to as the Beauty Mix, this service is now presented as Wellness Mix to better reflect its place within the clinic's IV hydration and wellness services.",
      'The specific formulation, ingredients, and suitability of Wellness Mix should be discussed with our healthcare provider before treatment.',
      'Patients must complete appropriate health and safety screening before receiving this service.',
    ],
    details: [{ label: 'Availability and Pricing', value: 'Contact the Clinic' }],
    cta: 'Ask About Wellness Mix',
  },
  {
    id: 'tri-immune-boost',
    icon: ShieldCheck,
    title: 'Tri-Immune Boost',
    onRequest: true,
    intro: [
      'Tri-Immune Boost is a nutrient formulation containing vitamin C, glutathione, and zinc.',
      "These nutrients are involved in normal immune system function and the body's natural antioxidant defenses.",
    ],
    ingredients: [
      {
        label: 'Vitamin C',
        text: 'Contributes to normal immune function and helps protect cells from oxidative stress.',
      },
      {
        label: 'Glutathione',
        text: 'A naturally occurring antioxidant involved in cellular protection against oxidative damage.',
      },
      {
        label: 'Zinc',
        text: 'An essential mineral that supports normal immune function and numerous cellular processes.',
      },
    ],
    outro: [
      'Although these nutrients play important roles in maintaining normal health, Tri-Immune Boost has not been proven to prevent infections. Additional nutrient administration does not guarantee improved immune protection when nutrient levels are adequate.',
      'Tri-Immune Boost is available on request at Ebenezer Health Clinic, subject to formulation availability and medical evaluation.',
    ],
    details: [
      { label: 'Availability', value: 'On Request' },
      { label: 'Pricing', value: 'Contact the Clinic' },
    ],
    cta: 'Ask About Tri-Immune Boost',
  },
  {
    id: 'nutrient-mix',
    icon: FlaskConical,
    title: 'Nutrient Mix',
    onRequest: true,
    intro: [
      'Nutrient Mix combines vitamin C, biotin, and Vita Complex to provide supplemental vitamins involved in normal cellular function and nutrient metabolism.',
    ],
    ingredients: [
      {
        label: 'Vitamin C',
        text: 'Supports collagen formation, normal immune function, and antioxidant protection.',
      },
      {
        label: 'Biotin',
        text: 'A B vitamin involved in the metabolism of carbohydrates, fats, and proteins.',
      },
      {
        label: 'Vita Complex',
        text: 'A supplemental vitamin formulation whose specific composition determines its nutritional roles and potential effects.',
      },
    ],
    outro: [
      "Nutrient Mix provides additional vitamins, but its potential benefits depend on the specific Vita Complex formulation and the patient's nutritional and medical needs.",
      'There is insufficient evidence to assume that IV nutrient supplementation provides additional general wellness benefits to individuals who already have adequate nutrient levels.',
      'At Ebenezer Health Clinic, Nutrient Mix is available on request following clinical assessment.',
    ],
    details: [
      { label: 'Availability', value: 'On Request' },
      { label: 'Pricing', value: 'Contact the Clinic' },
    ],
    cta: 'Ask About Nutrient Mix',
  },
]

const medicalHistoryItems = [
  'Kidney disease, kidney stones, or dialysis',
  'Heart disease, heart failure, or fluid restrictions',
  'High or low blood pressure',
  'Liver disease',
  'Diabetes or blood glucose concerns',
  'Pregnancy or breastfeeding',
  'Bleeding disorders or blood-thinning medications',
  'Immune suppression or chemotherapy',
  'Previous reactions to IV therapy or injections',
]

const questionnaireItems = [
  'Personal and contact details',
  'Emergency contact information',
  'Requested service and treatment goals',
  'Current symptoms and health concerns',
  'Medical history and medications',
  'Allergies and previous treatment reactions',
  'Recent medical treatments',
  'Additional safety information',
]

const visitSteps = [
  {
    icon: CalendarCheck,
    title: 'Step 1: Schedule Your Visit',
    text: 'Contact Ebenezer Health Clinic to arrange an IV hydration appointment at our Bethany location serving the Oklahoma City area.',
  },
  {
    icon: ClipboardList,
    title: 'Step 2: Complete Your Health Questionnaire',
    text: 'Provide accurate information about your health history, medications, allergies, current symptoms, and treatment goals.',
  },
  {
    icon: Stethoscope,
    title: 'Step 3: Receive a Clinical Evaluation',
    text: 'Our healthcare provider reviews your information and determines whether IV hydration is appropriate for your needs.',
  },
  {
    icon: MessageCircle,
    title: 'Step 4: Discuss Your IV Treatment',
    text: 'If treatment is appropriate, our provider explains the selected formulation, administration process, potential risks, and relevant precautions.',
  },
  {
    icon: Droplets,
    title: 'Step 5: Receive IV Hydration',
    text: 'A qualified healthcare professional administers the treatment in person, with monitoring as clinically appropriate. IV placement can cause discomfort, bruising, or infection, and some patients may experience reactions to the fluids or ingredients.',
  },
  {
    icon: HeartPulse,
    title: 'Step 6: Receive Aftercare Guidance',
    text: 'Our team provides appropriate post-treatment instructions and explains when follow-up medical care may be necessary.',
  },
]

const whyChoose = [
  {
    icon: Stethoscope,
    title: 'Provider-Guided Treatment',
    text: 'Every IV hydration service requires a medical assessment to determine whether treatment is appropriate.',
  },
  {
    icon: UserCheck,
    title: 'Individualized Care',
    text: 'Our provider considers your health history, symptoms, medications, and treatment goals rather than recommending the same treatment to every patient.',
  },
  {
    icon: Droplets,
    title: 'Multiple IV Hydration Options',
    text: 'Our clinic offers Myers’ Cocktail and Wellness Mix, with Tri-Immune Boost and Nutrient Mix available on request.',
  },
  {
    icon: ShieldCheck,
    title: 'Patient Safety First',
    text: 'We use a structured health questionnaire and clinical screening process to identify potential treatment risks before administration.',
  },
  {
    icon: MapPin,
    title: 'Convenient Oklahoma City Area Location',
    text: 'Our Bethany clinic serves patients from Oklahoma City and surrounding communities seeking in-person IV hydration services.',
  },
]

const pricingRows = [
  { label: 'Myers’ Cocktail IV Hydration', value: 'Contact for current pricing and availability.' },
  { label: 'Wellness Mix', value: 'Contact for current pricing and formulation details.' },
  { label: 'Tri-Immune Boost', value: 'Available on request; contact for pricing.' },
  { label: 'Nutrient Mix', value: 'Available on request; contact for pricing.' },
]

// ─── Schema ───────────────────────────────────────────────────────────────────
// Built from the content arrays above so the JSON-LD always matches the page.

const ivHydrationSchemaGraph = buildIVHydrationSchema({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: PAGE_KEYWORDS,
  treatments,
  visitSteps,
})

// ─── Small presentational helpers ─────────────────────────────────────────────

const TINT = 'rgba(232,247,247,0.60)'
const CARD_BORDER = '1px solid rgba(26,166,183,0.18)'

function AccentBars({ center = false }) {
  return (
    <div
      className={`flex items-center gap-2 mb-5 ${center ? 'justify-center' : ''}`}
      aria-hidden="true"
    >
      <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
      <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
      <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
    </div>
  )
}

function IconBadge({ icon: Icon }) {
  return (
    <div
      className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl"
      style={{ backgroundColor: 'rgba(26,166,183,0.12)' }}
      aria-hidden="true"
    >
      <Icon className="h-6 w-6" style={{ color: 'var(--primary)' }} />
    </div>
  )
}

function CheckList({ items, columns = false }) {
  return (
    <ul className={columns ? 'grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3' : 'space-y-3'}>
      {items.map((item) => (
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
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

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
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-28">
          <div className="max-w-2xl">
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

            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight"
              style={{ color: 'var(--navy)' }}
            >
              IV Hydration &amp; Vitamin Therapy in Oklahoma City
            </h1>

            <p
              className="text-lg md:text-xl font-semibold leading-snug mb-4"
              style={{ color: 'var(--primary)' }}
            >
              Provider-Guided IV Hydration at Ebenezer Health Clinic
            </p>

            {/* "hero-answer-line" is a speakable-schema target; do not rename */}
            <p className="hero-answer-line mb-3">
              Explore personalized IV hydration services at Ebenezer Health Clinic in Bethany,
              Oklahoma, conveniently serving Oklahoma City and surrounding communities.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-3">
              Our clinic offers IV hydration options, including Myers’ Cocktail, Wellness Mix,
              and additional nutrient formulations available on request. These treatments provide
              fluids and, depending on the formulation, vitamins, minerals, or other nutrients.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-6">
              Every IV hydration treatment begins with a medical assessment to determine whether
              it is appropriate for your individual health needs.
            </p>

            {/* Highlights */}
            <ul className="flex flex-wrap gap-2 mb-8">
              {heroBadges.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
                  style={{
                    backgroundColor: 'rgba(151,206,204,0.40)',
                    color: 'var(--navy)',
                  }}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {label}
                </li>
              ))}
            </ul>

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

      {/* ── IV HYDRATION THERAPY ─────────────────────────────────── */}
      <section className="bg-white" aria-labelledby="intro-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <div>
              <h2
                id="intro-heading"
                className="text-3xl md:text-4xl font-bold mb-3"
                style={{ color: 'var(--navy)' }}
              >
                IV Hydration Therapy at Ebenezer Health Clinic
              </h2>
              <AccentBars />
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
                IV hydration is a medical procedure that delivers fluids directly into the
                bloodstream through an intravenous line. Depending on the formulation, IV therapy
                may also include vitamins, minerals, and other supplemental nutrients.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
                At Ebenezer Health Clinic, we offer IV hydration services with an emphasis on
                patient safety, individualized assessment, and informed treatment decisions.
              </p>
              <a
                href="#iv-hydration-treatments"
                className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto"
              >
                Explore Your IV Hydration Options
              </a>
            </div>

            <div className="flex flex-col gap-5">
              <div
                className="flex items-start gap-4 rounded-2xl p-6 shadow-sm bg-white"
                style={{ border: CARD_BORDER, borderLeft: '4px solid var(--primary)' }}
              >
                <IconBadge icon={Droplets} />
                <p className="text-[15px] text-gray-600 leading-relaxed">
                  IV fluids may be medically appropriate in certain circumstances, including when
                  oral hydration is insufficient or not feasible. However, IV hydration is not
                  automatically more beneficial than drinking fluids for otherwise healthy
                  individuals who can hydrate normally.
                </p>
              </div>
              <div
                className="flex items-start gap-4 rounded-2xl p-6 shadow-sm bg-white"
                style={{ border: CARD_BORDER, borderLeft: '4px solid var(--primary)' }}
              >
                <IconBadge icon={ClipboardCheck} />
                <p className="text-[15px] text-gray-600 leading-relaxed">
                  Before treatment, our healthcare provider reviews your medical history, current
                  symptoms, medications, allergies, and relevant health concerns to determine
                  whether IV therapy is appropriate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── IV HYDRATION TREATMENTS ──────────────────────────────── */}
      <section
        id="iv-hydration-treatments"
        className="scroll-mt-28"
        aria-labelledby="treatments-heading"
        style={{ backgroundColor: TINT }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
            <h2
              id="treatments-heading"
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ color: 'var(--navy)' }}
            >
              IV Hydration Treatments Available in Oklahoma City
            </h2>
            <AccentBars center />
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
              Ebenezer Health Clinic provides several IV hydration and nutrient therapy options,
              subject to medical evaluation and treatment availability.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Each formulation contains different ingredients, and its suitability depends on your
              individual health needs. Our provider will explain the available options and discuss
              potential benefits, limitations, and risks before treatment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {treatments.map((t) => (
              <article
                key={t.title}
                className="relative flex flex-col h-full overflow-hidden rounded-2xl p-7 md:p-8"
                style={
                  t.onRequest
                    ? {
                        background:
                          'linear-gradient(160deg, #ffffff 0%, rgba(232,247,247,0.85) 100%)',
                        border: '2px dashed rgba(26,166,183,0.35)',
                      }
                    : { backgroundColor: '#ffffff', border: CARD_BORDER, boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }
                }
              >
                {!t.onRequest && (
                  <div
                    className="absolute inset-x-0 top-0 h-1"
                    style={{ background: 'linear-gradient(90deg, var(--primary), var(--mint))' }}
                    aria-hidden="true"
                  />
                )}
                <div className="flex items-center gap-4 mb-5">
                  <IconBadge icon={t.icon} />
                  <h3
                    className="text-xl font-bold leading-snug"
                    style={{ color: 'var(--navy)' }}
                  >
                    {t.title}
                    {t.onRequest && (
                      <>
                        {' '}&mdash;{' '}
                        <span style={{ color: 'var(--primary)' }}>Available on Request</span>
                      </>
                    )}
                  </h3>
                </div>

                <div className="space-y-3 text-[15px] text-gray-600 leading-relaxed mb-5">
                  {t.intro.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>

                {t.ingredients && (
                  <ul
                    className="rounded-lg overflow-hidden mb-5"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.85)',
                      border: '1px solid rgba(26,166,183,0.18)',
                    }}
                  >
                    {t.ingredients.map(({ label, text }, index) => (
                      <li
                        key={label}
                        className="px-4 py-3 text-[15px] leading-relaxed text-gray-600"
                        style={
                          index > 0 ? { borderTop: '1px solid rgba(26,166,183,0.15)' } : undefined
                        }
                      >
                        <strong style={{ color: 'var(--navy)' }}>{label}:</strong> {text}
                      </li>
                    ))}
                  </ul>
                )}

                {t.outro && (
                  <div className="space-y-3 text-[15px] text-gray-600 leading-relaxed mb-6">
                    {t.outro.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>
                )}

                <dl
                  className="mt-auto rounded-lg overflow-hidden mb-5"
                  style={{
                    backgroundColor: t.onRequest ? 'rgba(255,255,255,0.85)' : 'rgba(26,166,183,0.08)',
                    border: t.onRequest ? '1px solid rgba(26,166,183,0.18)' : 'none',
                  }}
                >
                  {t.details.map(({ label, value }, index) => (
                    <div
                      key={label}
                      className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4 px-4 py-3"
                      style={
                        index > 0 ? { borderTop: '1px solid rgba(26,166,183,0.15)' } : undefined
                      }
                    >
                      <dt
                        className="text-xs font-semibold uppercase tracking-widest"
                        style={{ color: 'var(--primary)' }}
                      >
                        {label}
                      </dt>
                      <dd className="text-base font-bold sm:text-right" style={{ color: 'var(--navy)' }}>
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <Link
                  href="/contact"
                  className={`${t.onRequest ? 'btn-outline' : 'btn-primary'} text-sm px-6 py-3 w-full text-center`}
                >
                  {t.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── IS IV HYDRATION RIGHT FOR YOU ────────────────────────── */}
      <section
        className="relative overflow-hidden"
        aria-labelledby="right-for-you-heading"
      >
        {/* Background image — phone & stethoscope sit on the right, text stays left */}
        <Image
          src="/answer_block.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-right pointer-events-none"
          aria-hidden="true"
        />
        {/* Mobile / tablet: even white wash so text is legible over the image */}
        <div
          className="absolute inset-0 lg:hidden"
          style={{ backgroundColor: 'rgba(255,255,255,0.90)' }}
          aria-hidden="true"
        />
        {/* Desktop: white on the text side → clear on the image side */}
        <div
          className="absolute inset-0 hidden lg:block"
          style={{
            background:
              'linear-gradient(to right, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.80) 50%, rgba(255,255,255,0.10) 100%)',
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="lg:w-[56%]">
            <h2
              id="right-for-you-heading"
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ color: 'var(--navy)' }}
            >
              Is IV Hydration Right for You?
            </h2>
            <AccentBars />

            <p
              className="text-xl md:text-2xl font-semibold leading-snug mb-5"
              style={{ color: 'var(--primary)' }}
            >
              IV hydration is not necessary or appropriate for everyone.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
              Whether you are exploring hydration support or a nutrient-containing IV
              formulation, our provider will assess your individual circumstances before
              recommending treatment.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-7">
              During your evaluation, we consider your current symptoms, medical history,
              medications, allergies, existing health conditions, and treatment goals.
            </p>

            <div
              className="flex items-start gap-4 rounded-2xl p-6 md:p-7 mb-7"
              style={{
                backgroundColor: '#ffffff',
                border: '2px solid rgba(239,68,68,0.30)',
                boxShadow: '0 4px 24px rgba(239,68,68,0.10)',
              }}
            >
              <div
                className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full"
                style={{ backgroundColor: 'rgba(239,68,68,0.10)' }}
                aria-hidden="true"
              >
                <AlertCircle className="h-6 w-6 text-red-500" />
              </div>
              <p className="text-base leading-relaxed text-gray-600">
                Certain medical conditions, including kidney disease, heart failure, and fluid
                restrictions, may increase the risks associated with IV hydration. Some nutrient
                formulations may also be inappropriate depending on your medications or health
                history.
              </p>
            </div>

            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
              If you are unsure which service may be appropriate, our team can discuss your
              concerns and explain the available options.
            </p>
            <Link href="/contact" className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto">
              Discuss Your IV Hydration Options
            </Link>
          </div>
        </div>
      </section>

      {/* ── HEALTH & SAFETY SCREENING ────────────────────────────── */}
      <section aria-labelledby="safety-screening-heading" style={{ backgroundColor: TINT }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center mb-10 md:mb-12">
            <h2
              id="safety-screening-heading"
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ color: 'var(--navy)' }}
            >
              Health &amp; Safety Screening Before IV Hydration
            </h2>
            <AccentBars center />
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
              Patient safety is a priority at Ebenezer Health Clinic. Before receiving IV
              hydration, every patient must complete appropriate health screening and clinical
              evaluation.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Our IV/IM Injection Questionnaire collects information about your medical history,
              medications, allergies, previous treatment reactions, and current health concerns.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-8">
            <div
              className="rounded-2xl bg-white p-7 md:p-8 shadow-sm"
              style={{ border: CARD_BORDER }}
            >
              <div className="flex items-center gap-4 mb-5">
                <IconBadge icon={ClipboardList} />
                <h3 className="text-xl font-bold leading-snug" style={{ color: 'var(--navy)' }}>
                  Medical History and Health Conditions
                </h3>
              </div>
              <p className="text-base text-gray-600 mb-4">You may be asked about:</p>
              <CheckList items={medicalHistoryItems} />
            </div>

            <div
              className="rounded-2xl bg-white p-7 md:p-8 shadow-sm flex flex-col"
              style={{ border: CARD_BORDER }}
            >
              <div className="flex items-center gap-4 mb-5">
                <IconBadge icon={Stethoscope} />
                <h3 className="text-xl font-bold leading-snug" style={{ color: 'var(--navy)' }}>
                  Current Symptoms and Treatment Readiness
                </h3>
              </div>
              <p className="text-base text-gray-600 leading-relaxed mb-5">
                Our team may also ask about recent illness, fever, dizziness, vomiting, diarrhea,
                fluid intake, and other symptoms that could affect treatment suitability.
              </p>
              <div
                className="flex items-start gap-3 rounded-xl p-5"
                style={{
                  backgroundColor: 'rgba(254,242,242,0.80)',
                  border: '1px solid rgba(239,68,68,0.25)',
                }}
              >
                <AlertCircle
                  className="h-5 w-5 mt-0.5 flex-shrink-0 text-red-500"
                  aria-hidden="true"
                />
                <p className="text-base text-gray-700 leading-relaxed">
                  Patients experiencing severe symptoms, including chest pain, difficulty
                  breathing, confusion, or signs of severe dehydration, may require urgent or
                  emergency medical evaluation rather than elective IV hydration.
                </p>
              </div>
            </div>
          </div>

          <div
            className="flex items-start gap-4 rounded-2xl p-6 md:p-7 bg-white"
            style={{ border: CARD_BORDER, borderLeft: '4px solid var(--primary)' }}
          >
            <Info
              className="h-6 w-6 mt-0.5 flex-shrink-0"
              style={{ color: 'var(--primary)' }}
              aria-hidden="true"
            />
            <p className="text-base leading-relaxed" style={{ color: 'var(--navy)' }}>
              <strong>Completing the screening questionnaire does not guarantee treatment.</strong>{' '}
              The final decision is made following clinical review.
            </p>
          </div>
        </div>
      </section>

      {/* ── COMPLETE YOUR QUESTIONNAIRE ──────────────────────────── */}
      <section className="bg-white" aria-labelledby="questionnaire-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-7">
              <h2
                id="questionnaire-heading"
                className="text-3xl md:text-4xl font-bold mb-3"
                style={{ color: 'var(--navy)' }}
              >
                Complete Your IV/IM Injection Questionnaire
              </h2>
              <AccentBars />
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
                Before your IV hydration appointment, you will be asked to complete the
                clinic&apos;s IV/IM Injection Questionnaire.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-5">
                The questionnaire collects relevant information, including:
              </p>
              <div
                className="rounded-2xl p-6 md:p-7"
                style={{
                  backgroundColor: 'rgba(151,206,204,0.10)',
                  border: '1px solid rgba(26,166,183,0.15)',
                }}
              >
                <CheckList items={questionnaireItems} columns />
              </div>
            </div>

            <div
              className="lg:col-span-5 rounded-2xl p-7 md:p-8 shadow-sm"
              style={{
                background: 'linear-gradient(160deg, #ffffff 0%, rgba(232,247,247,0.85) 100%)',
                border: '2px dashed rgba(26,166,183,0.35)',
              }}
            >
              <div className="mb-5">
                <IconBadge icon={MessageCircle} />
              </div>
              <p className="text-base md:text-lg leading-relaxed mb-4" style={{ color: 'var(--navy)' }}>
                If you are unsure whether IV hydration or an injection is appropriate, select{' '}
                <strong>“Not sure – discuss with clinician.”</strong>
              </p>
              <p className="text-base text-gray-600 leading-relaxed mb-7">
                Our team can help explain the next steps during your appointment or consultation
                call.
              </p>
              <Link href="/contact" className="btn-primary text-base px-7 py-3.5 w-full text-center">
                Complete IV/IM Injection Questionnaire
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT TO EXPECT ───────────────────────────────────────── */}
      <section aria-labelledby="what-to-expect-heading" style={{ backgroundColor: TINT }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center mb-10 md:mb-14">
            <h2
              id="what-to-expect-heading"
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ color: 'var(--navy)' }}
            >
              What to Expect During Your IV Hydration Appointment
            </h2>
            <AccentBars center />
          </div>

          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {visitSteps.map(({ icon: Icon, title, text }) => (
              <li
                key={title}
                className="flex flex-col h-full rounded-2xl bg-white p-6 md:p-7 shadow-sm"
                style={{ border: CARD_BORDER }}
              >
                <div className="mb-4">
                  <div
                    className="inline-flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-md"
                    style={{ backgroundColor: 'var(--primary)' }}
                    aria-hidden="true"
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
                <h3
                  className="text-lg font-bold leading-snug mb-2"
                  style={{ color: 'var(--navy)' }}
                >
                  {title}
                </h3>
                <p className="text-[15px] text-gray-600 leading-relaxed">{text}</p>
              </li>
            ))}
          </ol>

          <div className="flex justify-center">
            <Link href="/contact" className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto">
              Schedule Your IV Hydration Visit
            </Link>
          </div>
        </div>
      </section>

      {/* ── IV HYDRATION VS. VITAMIN INJECTIONS ──────────────────── */}
      <section className="bg-white" aria-labelledby="vs-injections-heading">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center mb-10 md:mb-12">
            <h2
              id="vs-injections-heading"
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ color: 'var(--navy)' }}
            >
              IV Hydration vs. Vitamin Injections: What&apos;s the Difference?
            </h2>
            <AccentBars center />
            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Ebenezer Health Clinic offers both IV hydration and vitamin injection services.
              Although both involve administering substances through a needle, they are different
              treatment methods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <article
              className="relative rounded-2xl overflow-hidden flex flex-col"
              style={{
                backgroundColor: 'rgba(59,130,246,0.07)',
                border: '1px solid rgba(59,130,246,0.28)',
              }}
            >
              <div
                className="absolute inset-x-0 top-0 h-1"
                style={{ backgroundColor: '#3B82F6' }}
                aria-hidden="true"
              />
              <div className="p-6 md:p-7 flex flex-col flex-1">
                <div className="flex items-start gap-3 mb-4">
                  <div
                    className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: 'rgba(59,130,246,0.20)' }}
                    aria-hidden="true"
                  >
                    <Droplets className="h-5 w-5" style={{ color: '#3B82F6' }} />
                  </div>
                  <h3
                    className="text-lg font-semibold leading-snug pt-1.5"
                    style={{ color: 'var(--navy)' }}
                  >
                    IV Hydration Therapy
                  </h3>
                </div>
                <p className="text-sm md:text-[15px] text-gray-700 leading-relaxed">
                  IV hydration delivers fluids directly into a vein. Depending on the formulation,
                  it may include vitamins, minerals, or other supplemental nutrients.
                </p>
              </div>
            </article>

            <article
              className="relative rounded-2xl overflow-hidden flex flex-col"
              style={{
                backgroundColor: 'rgba(168,85,247,0.07)',
                border: '1px solid rgba(168,85,247,0.28)',
              }}
            >
              <div
                className="absolute inset-x-0 top-0 h-1"
                style={{ backgroundColor: '#A855F7' }}
                aria-hidden="true"
              />
              <div className="p-6 md:p-7 flex flex-col flex-1">
                <div className="flex items-start gap-3 mb-4">
                  <div
                    className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: 'rgba(168,85,247,0.20)' }}
                    aria-hidden="true"
                  >
                    <Syringe className="h-5 w-5" style={{ color: '#A855F7' }} />
                  </div>
                  <h3
                    className="text-lg font-semibold leading-snug pt-1.5"
                    style={{ color: 'var(--navy)' }}
                  >
                    Vitamin &amp; Wellness Injections
                  </h3>
                </div>
                <p className="text-sm md:text-[15px] text-gray-700 leading-relaxed">
                  Vitamin injections deliver specific nutrients through an injection rather than
                  an IV infusion. Ebenezer Health Clinic offers Vitamin B12 and other wellness
                  injections, with additional treatments available on request.
                </p>
              </div>
            </article>
          </div>

          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
            The appropriate method depends on the treatment, clinical indication, and individual
            patient needs.
          </p>
          <div className="flex justify-center">
            <Link href="/injections" className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto">
              Explore Our Vitamin &amp; Wellness Injections
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE EBENEZER ──────────────────────────────────── */}
      <section aria-labelledby="why-choose-heading" style={{ backgroundColor: TINT }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center mb-10 md:mb-14">
            <h2
              id="why-choose-heading"
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ color: 'var(--navy)' }}
            >
              Why Choose Ebenezer Health Clinic for IV Hydration?
            </h2>
            <AccentBars center />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {whyChoose.map(({ icon, title, text }) => (
              <div
                key={title}
                className="flex flex-col h-full rounded-2xl bg-white p-6 shadow-sm"
                style={{ border: CARD_BORDER }}
              >
                <div className="mb-4">
                  <IconBadge icon={icon} />
                </div>
                <h3
                  className="text-base font-bold leading-snug mb-2"
                  style={{ color: 'var(--navy)' }}
                >
                  {title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MEET YOUR PROVIDER ───────────────────────────────────── */}
      <section className="bg-white" aria-labelledby="provider-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Text content */}
            <div>
              <h2
                id="provider-heading"
                className="text-3xl md:text-4xl font-bold mb-3"
                style={{ color: 'var(--navy)' }}
              >
                Meet Your IV Hydration Provider
              </h2>
              <AccentBars />
              <h3
                className="text-xl md:text-2xl font-bold mb-4"
                style={{ color: 'var(--primary)' }}
              >
                Dr. Susan George, DNP, APRN, BC-ADM
              </h3>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
                Care at Ebenezer Health Clinic is led by Dr. Susan George, a Doctor of Nursing
                Practice and Advanced Practice Registered Nurse who is Board Certified in Advanced
                Diabetes Management.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
                Dr. George emphasizes individualized healthcare, clinical evaluation, and informed
                treatment decisions.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                At Ebenezer Health Clinic, patients receive guidance based on their medical
                history and current health needs before proceeding with IV hydration or other
                wellness services.
              </p>
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
            <h2
              id="faq-heading"
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ color: 'var(--navy)' }}
            >
              Frequently Asked Questions About IV Hydration in Oklahoma City
            </h2>
            <AccentBars center />
          </div>

          <IVHydrationFAQAccordion />
        </div>
      </section>

      {/* ── IV HYDRATION PRICING & AVAILABILITY ──────────────────── */}
      <section className="bg-white" aria-labelledby="pricing-heading">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center mb-10">
            <h2
              id="pricing-heading"
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ color: 'var(--navy)' }}
            >
              IV Hydration Pricing &amp; Availability
            </h2>
            <AccentBars center />
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Ebenezer Health Clinic offers IV hydration treatments with pricing confirmed
              directly by the clinic.
            </p>
          </div>

          <div
            className="rounded-2xl overflow-hidden shadow-sm mb-6"
            style={{
              backgroundColor: 'rgba(26,166,183,0.08)',
              border: '1px solid rgba(26,166,183,0.30)',
            }}
          >
            {pricingRows.map(({ label, value }, index) => (
              <div
                key={label}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-6 px-6 py-4"
                style={index > 0 ? { borderTop: '1px solid rgba(26,166,183,0.22)' } : undefined}
              >
                <span className="font-bold" style={{ color: 'var(--navy)' }}>
                  {label}
                </span>
                <span className="text-gray-600 sm:text-right">{value}</span>
              </div>
            ))}
          </div>

          <p className="text-base md:text-lg text-gray-600 leading-relaxed text-center mb-8">
            All treatments require appropriate medical screening and provider evaluation before
            administration.
          </p>
          <div className="flex justify-center">
            <Link href="/contact" className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto">
              Contact Us for IV Hydration Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* ── VISIT EBENEZER HEALTH CLINIC ─────────────────────────── */}
      <section aria-labelledby="visit-clinic-heading" style={{ backgroundColor: TINT }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            <div>
              <h2
                id="visit-clinic-heading"
                className="text-3xl md:text-4xl font-bold mb-3"
                style={{ color: 'var(--navy)' }}
              >
                Visit Ebenezer Health Clinic for IV Hydration
              </h2>
              <AccentBars />

              <div
                className="rounded-2xl bg-white p-7 md:p-8 shadow-sm mb-8"
                style={{ border: CARD_BORDER }}
              >
                <address className="not-italic space-y-4">
                  <div className="flex items-start gap-4">
                    <IconBadge icon={Building2} />
                    <div>
                      <p className="text-lg font-bold" style={{ color: 'var(--navy)' }}>
                        Ebenezer Health Clinic
                      </p>
                      <p className="text-gray-600">7415 NW 23rd Street</p>
                      <p className="text-gray-600">Bethany, OK 73008</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <IconBadge icon={Phone} />
                    <p className="text-gray-600 pt-3">
                      Phone:{' '}
                      <a
                        href="tel:+14053498188"
                        className="font-semibold"
                        style={{ color: 'var(--primary)' }}
                      >
                        (405) 349-8188
                      </a>
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <IconBadge icon={Mail} />
                    <p className="text-gray-600 pt-3 break-all">
                      Email:{' '}
                      <a
                        href="mailto:ebenezerhealth@outlook.com"
                        className="font-semibold"
                        style={{ color: 'var(--primary)' }}
                      >
                        ebenezerhealth@outlook.com
                      </a>
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <IconBadge icon={MapPin} />
                    <p className="text-gray-600 pt-3">
                      Service Area: Bethany, Oklahoma City, and surrounding communities.
                    </p>
                  </div>
                </address>
              </div>

              <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--navy)' }}>
                In-Person IV Hydration Services
              </h3>
              <p className="text-base text-gray-600 leading-relaxed mb-3">
                Our clinic provides provider-guided IV hydration with individualized clinical
                screening and a focus on informed patient care.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                Contact our team to learn more about available formulations, treatment
                requirements, and appointment scheduling.
              </p>
            </div>

            {/* Google Map embed */}
            <div
              className="relative w-full min-h-[320px] lg:min-h-full rounded-2xl overflow-hidden"
              style={{ border: CARD_BORDER }}
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

      {/* ── FINAL CTA ────────────────────────────────────────────── */}
      <section
        aria-labelledby="final-cta-heading"
        style={{ background: 'linear-gradient(135deg, #0B3D47 0%, #1AA6B7 100%)' }}
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <div
            className="inline-flex h-14 w-14 items-center justify-center rounded-xl mb-6"
            style={{ backgroundColor: 'rgba(255,255,255,0.14)' }}
            aria-hidden="true"
          >
            <Droplets className="h-7 w-7 text-white" />
          </div>
          <h2
            id="final-cta-heading"
            className="text-3xl md:text-4xl font-bold mb-5"
            style={{ color: '#ffffff' }}
          >
            Schedule Your IV Hydration Appointment in Oklahoma City
          </h2>
          <p
            className="text-base md:text-lg leading-relaxed mb-4 font-semibold"
            style={{ color: '#ffffff' }}
          >
            Interested in Myers’ Cocktail, Wellness Mix, Tri-Immune Boost, or Nutrient Mix?
          </p>
          <p
            className="text-base md:text-lg leading-relaxed mb-4"
            style={{ color: 'rgba(255,255,255,0.92)' }}
          >
            At Ebenezer Health Clinic, our healthcare team can help you understand the available
            IV hydration options and determine whether treatment is appropriate for your
            individual health needs.
          </p>
          <p
            className="text-base md:text-lg leading-relaxed mb-8"
            style={{ color: 'rgba(255,255,255,0.92)' }}
          >
            Schedule your visit at our Bethany clinic, conveniently serving Oklahoma City and
            nearby communities.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-5">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-[0.625rem] bg-white px-8 py-3.5 text-base font-semibold shadow-md transition-transform hover:-translate-y-0.5 w-full sm:w-auto"
              style={{ color: 'var(--navy)' }}
            >
              Schedule IV Hydration
            </Link>
            <Link
              href="/contact"
              className="btn-ghost-white text-base px-8 py-3.5 w-full sm:w-auto"
            >
              Complete IV/IM Injection Questionnaire
            </Link>
          </div>
          <a
            href="tel:+14053498188"
            className="inline-flex items-center justify-center gap-2 text-white font-semibold text-base underline underline-offset-4 hover:opacity-90"
          >
            Call (405) 349-8188
          </a>

          <div
            className="mt-10 rounded-2xl bg-white p-6 md:p-7 text-left shadow-md"
            style={{ border: '1px solid rgba(26,166,183,0.25)' }}
          >
            <h3 className="text-base font-bold mb-2" style={{ color: 'var(--navy)' }}>
              Important Medical Disclaimer
            </h3>
            <p className="text-sm leading-relaxed text-gray-600 mb-2">
              All treatments require a medical assessment. Nutrients&apos; normal roles in the
              body do not guarantee added benefits from injections or IV therapy when nutrient
              levels are already adequate.
            </p>
            <p className="text-sm leading-relaxed text-gray-600">
              IV hydration and nutrient therapy are not substitutes for balanced nutrition,
              routine medical care, or evidence-based treatment of underlying health conditions.
              Treatment availability and suitability are determined following clinical evaluation.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
