import Link from 'next/link'
import Image from 'next/image'
import { DM_Serif_Display, Manrope } from 'next/font/google'
import {
  ShieldCheck,
  Info,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Pill,
  Activity,
  Droplet,
  Sun,
  ClipboardCheck,
  HeartHandshake,
  Sparkles,
  UserCheck,
  Clock,
  Lock,
  Smile,
  CalendarCheck,
  FileText,
  Stethoscope,
  ClipboardList,
} from 'lucide-react'
import WomensHealthFAQAccordion from './WomensHealthFAQAccordion'
import Testimonials from '@/components/Testimonials'

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-wh-heading',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-wh-body',
  display: 'swap',
})

export const metadata = {
  title: "Women’s Health Clinic Oklahoma City",
  description:
    "Women’s health care in the Oklahoma City area for birth control, PCOS, irregular periods, menopause, Pap smears and STD testing. In-person and Oklahoma telehealth available.",
  alternates: {
    canonical: 'https://www.ebenezerhealthclinic.com/womens-health',
  },
}

const womensHealthPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  name: "Women's Health Clinic Oklahoma City | Ebenezer Health Clinic",
  description:
    "Women's health care in the Oklahoma City area for birth control, PCOS, irregular periods, menopause, Pap smears and STD testing. In-person and Oklahoma telehealth available.",
  url: 'https://www.ebenezerhealthclinic.com/womens-health',
  about: {
    '@type': 'MedicalProcedure',
    name: "Women's Health Care",
    procedureType: 'https://schema.org/TherapeuticProcedure',
    description:
      "Comprehensive women's health services including birth control and contraceptive care, PCOS management, menstrual irregularities, menopause treatment, Pap smears, and STD testing and management. In-person care in the Oklahoma City area, with telehealth available throughout Oklahoma for appropriate services.",
  },
  provider: { '@id': 'https://www.ebenezerhealthclinic.com/#dr-susan-george' },
  areaServed: { '@type': 'State', name: 'Oklahoma' },
  availableService: [
    { '@type': 'MedicalTherapy', name: 'Birth Control & Contraceptive Care' },
    { '@type': 'MedicalTherapy', name: 'PCOS Management' },
    { '@type': 'MedicalTherapy', name: 'Menstrual Irregularities' },
    { '@type': 'MedicalTherapy', name: 'Menopause Care' },
    { '@type': 'MedicalProcedure', name: 'Pap Smears & Women’s Health Screening' },
    { '@type': 'MedicalTherapy', name: 'STD Testing & Management' },
  ],
  offers: [
    {
      '@type': 'Offer',
      name: "Women's Health Televisit",
      priceCurrency: 'USD',
      price: '50',
      description:
        'Secure video visit, symptom review, and prescriptions sent to your preferred pharmacy when appropriate.',
    },
    {
      '@type': 'Offer',
      name: "Women's Health In-Person Initial Visit",
      priceCurrency: 'USD',
      price: '75',
      description:
        'Comprehensive symptom review, lab orders included, lab interpretation, and personalized treatment plan.',
    },
    {
      '@type': 'Offer',
      name: "Women's Health In-Person Follow-Up Visit",
      priceCurrency: 'USD',
      price: '50',
      description:
        'Ongoing assessment, lab review and monitoring, treatment adjustments, and continued support.',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "What women’s health services does Ebenezer Health Clinic provide?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We provide birth control services, PCOS management, care for menstrual irregularities, menopause treatment, Pap smears, and STD testing and management.',
      },
    },
    {
      '@type': 'Question',
      name: 'What birth control options are available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Birth control services include oral contraceptives, Depo-Provera shots, patches, IUD insertion and removal, and Nexplanon insertion and removal. IUD and Nexplanon insertions are covered by insurance only.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide PCOS management?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Ebenezer Health Clinic provides individualized PCOS management based on your symptoms, medical history and health needs.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can you help with irregular periods?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We evaluate and manage menstrual irregularities, including concerns about irregular, absent, heavy or painful periods.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide menopause treatment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Hormonal and non-hormonal menopause treatment options are available for qualified patients based on clinical evaluation. Pellet insertion will also be available beginning in December 2026 for qualified patients.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer Pap smears?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Pap smears are available as part of our women's health services.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide STD testing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Ebenezer Health Clinic provides STD testing and management based on your individual needs and clinical evaluation.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can I receive women’s health care through telehealth?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Telehealth is available throughout Oklahoma for women’s health services that can appropriately be provided virtually. Some services, examinations, screenings and procedures require an in-person visit.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I complete my questionnaire before my appointment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. You can complete the Women's Health Questionnaire before your visit. If you prefer, the clinic can assist you with completing it during your initial intake or free consultation call.",
      },
    },
    {
      '@type': 'Question',
      name: 'What if I am experiencing a medical emergency?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ebenezer Health Clinic does not provide emergency medical services. If you are experiencing a medical emergency, call 911 or go to the nearest emergency room.',
      },
    },
  ],
}

const birthControlServices = [
  'Oral contraceptives',
  'Depo-Provera shots',
  'Birth control patches',
  'IUD insertion',
  'Nexplanon insertion',
  'IUD removal',
  'Nexplanon removal',
]

const menopauseConcerns = [
  'Hot flashes',
  'Night sweats',
  'Mood changes',
  'Vaginal dryness',
  'Sleep difficulties',
  'Other menopause-related symptoms',
]

const steps = [
  {
    icon: CalendarCheck,
    number: '01',
    title: 'Book Your Visit',
    description: 'Schedule your women’s health appointment online or call (405) 349-8188.',
  },
  {
    icon: FileText,
    number: '02',
    title: 'Complete Your Women’s Health Questionnaire',
    description:
      'Complete our Women’s Health Questionnaire before your appointment. If you prefer, our team can help complete it with you during your initial intake or free consultation call.',
  },
  {
    icon: Stethoscope,
    number: '03',
    title: 'Meet With Your Provider',
    description:
      'Meet with your provider in person or through secure telehealth, depending on the service you need. Discuss your symptoms, health history, concerns and goals.',
  },
  {
    icon: ClipboardList,
    number: '04',
    title: 'Get Your Personalized Care Plan',
    description:
      'Following your clinical evaluation, your provider will discuss appropriate next steps, which may include treatment options, testing, prescriptions, monitoring or follow-up care.',
  },
]

const pricingTelevisitFeatures = [
  'Secure video visit with Dr. Susan George',
  'Symptom review and consultation',
  'Prescriptions sent to your preferred pharmacy when appropriate',
]

const pricingInitialFeatures = [
  'Comprehensive symptom review',
  'Lab orders included',
  'Lab interpretation',
  'Personalized treatment plan',
]

const pricingFollowupFeatures = [
  'Ongoing assessment',
  'Lab review and monitoring',
  'Treatment adjustments',
  'Continued support',
]

const whyPoints = [
  {
    icon: UserCheck,
    title: 'Personalized Care',
    description:
      'Your symptoms, medical history and individual health goals are considered when developing your care plan.',
  },
  {
    icon: HeartHandshake,
    title: "Women’s Health-Focused Care",
    description:
      "Access care for birth control, PCOS, menstrual irregularities, menopause, Pap smears, STD testing and other women’s health concerns.",
  },
  {
    icon: MapPin,
    title: 'Convenient Access',
    description:
      'Visit the clinic in person in the Oklahoma City area or use telehealth for appropriate services throughout Oklahoma.',
  },
  {
    icon: Lock,
    title: 'Private & Respectful Care',
    description:
      "Discuss sensitive women's health concerns in a professional and respectful clinical environment.",
  },
  {
    icon: ClipboardCheck,
    title: 'Evidence-Based Approach',
    description:
      'Care and treatment recommendations are based on your individual clinical evaluation and health needs.',
  },
  {
    icon: Clock,
    title: 'Ongoing Support',
    description:
      'When appropriate, follow-up care allows your provider to monitor your progress and adjust your treatment plan.',
  },
]

const providerCredentials = [
  'Doctor of Nursing Practice (DNP)',
  'Advanced Practice Registered Nurse (APRN)',
  'Board Certified in Advanced Diabetes Management (BC-ADM)',
  "Women's Health Provider",
  'In-person care in the Oklahoma City area',
  'Telehealth throughout Oklahoma',
]

const quickNavServices = [
  { icon: Pill, name: 'Birth Control', href: '#birth-control' },
  { icon: Activity, name: 'PCOS Management', href: '#pcos' },
  { icon: Droplet, name: 'Menstrual Irregularities', href: '#menstrual-irregularities' },
  { icon: Sun, name: 'Menopause Care', href: '#menopause' },
  { icon: ClipboardCheck, name: 'Pap Smears', href: '#pap-smears' },
  { icon: ShieldCheck, name: 'STD Testing & Management', href: '#std-testing' },
]

const featuredLinks = [
  { name: 'Birth Control', href: '/womens-health/birth-control', image: '/womens-health-birth-control.webp' },
  { name: 'PCOS Management', href: '/womens-health/pcos-management', image: '/Womens-health-pcos-management.webp' },
  { name: 'Menstrual Irregularities', href: '/womens-health/menstrual-irregularities', image: '/womens-health-menstrual-irregularities.webp' },
  { name: 'Menopause Care', href: '/womens-health/menopause-care', image: '/womens-health-menopause-care.webp' },
  { name: 'Pap Smears', href: '/womens-health/pap-smears', image: '/womens-health-pap-smears.png' },
  { name: 'STD Testing & Management', href: '/womens-health/std-testing', image: '/womens-health-std-testing.png' },
]

const servingAreas = ['Oklahoma City', 'Bethany', 'Edmond', 'Norman', 'Moore', 'Tulsa']

export default function WomensHealthPage() {
  return (
    <div className={`wh-page ${dmSerif.variable} ${manrope.variable}`}>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(womensHealthPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/*
        Page-scoped design system — pink / rose / white only.
        Only affects elements inside .wh-page — shared components
        (Header, Testimonials, Accordion primitives) keep their
        default site styling everywhere else.
      */}
      <style suppressHydrationWarning>{`
        .wh-page {
          --wh-pink: #C2255C;
          --wh-pink-dark: #9E1C49;
          --wh-rose: #F3C9D4;
          --wh-rose-soft: #FBEAEF;
          --wh-cream: #FFF9FB;
          --wh-beige: #FDF1F4;
          --wh-charcoal: #2B2224;
          --wh-rose-line-strong: rgba(194,37,92,0.45);
          --wh-rose-line-soft: rgba(194,37,92,0.18);
          --wh-rose-line-faint: rgba(194,37,92,0.08);
          font-family: var(--font-wh-body), var(--font-inter), ui-sans-serif, system-ui, sans-serif;
          color: var(--wh-charcoal);
        }
        .wh-page .hover\\:text-primary:hover { color: var(--wh-pink) !important; }
        .wh-page .text-primary { color: var(--wh-pink) !important; }
        .wh-page h1, .wh-page h2, .wh-page h3 {
          font-family: var(--font-wh-heading), var(--font-inter), ui-sans-serif, system-ui, sans-serif;
          font-weight: 400;
          letter-spacing: -0.01em;
          color: var(--wh-charcoal);
        }
        .wh-page p, .wh-page li, .wh-page span, .wh-page a, .wh-page button {
          font-family: var(--font-wh-body), var(--font-inter), ui-sans-serif, system-ui, sans-serif;
        }

        /* Buttons — strong dark pink primary, pink-outline secondary */
        .wh-page .btn-primary {
          background-color: var(--wh-pink);
          box-shadow: 0 4px 18px rgba(194,37,92,0.32);
          border-radius: 9999px;
          font-weight: 600;
        }
        .wh-page .btn-primary:hover {
          background-color: var(--wh-pink-dark);
          box-shadow: 0 6px 22px rgba(158,28,73,0.40);
          transform: translateY(-1px);
        }
        .wh-page .btn-outline {
          border: 1.5px solid var(--wh-pink);
          color: var(--wh-pink);
          border-radius: 9999px;
          font-weight: 600;
          background-color: transparent;
        }
        .wh-page .btn-outline:hover {
          background-color: var(--wh-pink);
          color: #ffffff;
        }

        /* Decorative rule under headings */
        .wh-rule { display: flex; align-items: center; gap: 0.5rem; }
        .wh-rule span { display: block; border-radius: 9999px; }
        .wh-rule .bar-1 { height: 3px; width: 2.5rem; background-color: var(--wh-pink); }
        .wh-rule .bar-2 { height: 3px; width: 1rem; background-color: var(--wh-rose-line-soft); }
        .wh-rule .bar-3 { height: 3px; width: 0.5rem; background-color: var(--wh-rose-line-faint); }

        .wh-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: var(--wh-pink);
        }

        /* Card hover — calm elevation */
        .wh-card {
          transition: transform 0.28s cubic-bezier(0.22,1,0.36,1), box-shadow 0.28s cubic-bezier(0.22,1,0.36,1), border-color 0.28s ease;
        }
        .wh-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 18px 40px rgba(43,34,36,0.10);
        }
        .wh-link-arrow { transition: transform 0.2s ease, color 0.2s ease; }
        .wh-link-arrow:hover svg { transform: translateX(3px); }
        .wh-link-arrow svg { transition: transform 0.2s ease; }

        /* Icon badge — service/topic icons */
        .wh-icon-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 9999px;
          flex-shrink: 0;
          transition: transform 0.28s cubic-bezier(0.22,1,0.36,1);
        }
        .wh-card:hover .wh-icon-badge { transform: scale(1.08); }

        /* FAQ accordion — premium override, scoped */
        .wh-faq [data-radix-collection-item],
        .wh-faq > div > div {
          border-bottom: 1px solid var(--wh-rose-line-soft) !important;
        }
        .wh-faq button {
          font-family: var(--font-wh-body), var(--font-inter), sans-serif !important;
          font-size: 1.0625rem !important;
          font-weight: 600 !important;
          color: var(--wh-charcoal) !important;
          padding-top: 1.35rem !important;
          padding-bottom: 1.35rem !important;
        }
        .wh-faq button:hover { color: var(--wh-pink) !important; }
        .wh-faq button svg { color: var(--wh-pink) !important; }
        .wh-faq .faq-answer { color: #6b5a5e !important; }

        /*
          Testimonials — shared site-wide component, hardcoded teal.
          Overridden here (by element + aria selector) so only this
          page shows the pink/rose palette; every other page using
          <Testimonials /> is unaffected.
        */
        .wh-page section[aria-labelledby="testimonials-heading"] {
          background-color: var(--wh-pink) !important;
        }
        .wh-page section[aria-labelledby="testimonials-heading"] span[style*="color: rgb(151, 206, 204)"],
        .wh-page section[aria-labelledby="testimonials-heading"] > div > div:first-child span {
          color: rgba(255,255,255,0.78) !important;
        }
        .wh-page section[aria-labelledby="testimonials-heading"] figure {
          border-color: rgba(194,37,92,0.14) !important;
          box-shadow: 0 2px 18px rgba(194,37,92,0.08) !important;
        }
        .wh-page section[aria-labelledby="testimonials-heading"] figure > figcaption {
          border-top-color: rgba(194,37,92,0.10) !important;
        }
        .wh-page section[aria-labelledby="testimonials-heading"] figure img,
        .wh-page section[aria-labelledby="testimonials-heading"] figure > figcaption > div[style*="background-color"] {
          border-color: rgba(194,37,92,0.30) !important;
          background-color: var(--wh-pink) !important;
        }
        .wh-page section[aria-labelledby="testimonials-heading"] button[aria-label="Previous reviews"],
        .wh-page section[aria-labelledby="testimonials-heading"] button[aria-label="Next reviews"] {
          color: var(--wh-pink) !important;
        }
      `}</style>

      {/* ── HERO ────────────────────────────────────── */}
      <section
        className="relative overflow-hidden -mt-[112px] sm:-mt-[128px] lg:-mt-[144px] pt-[112px] sm:pt-[128px] lg:pt-[144px]"
        style={{ backgroundColor: 'var(--wh-cream)' }}
      >
        {/* Full-bleed background image using next/image for optimisation */}
        <Image
          src="/Womens-Health-EbenezerHC.png"
          alt=""
          fill
          priority
          sizes="100vw"
          quality={90}
          className="object-cover hidden lg:block"
          style={{ objectPosition: '22% 20%', transform: 'scaleX(-1)' }}
          aria-hidden="true"
        />

        {/* Mobile/tablet — cream overlay (image too busy at small sizes) */}
        <div
          className="absolute inset-0 lg:hidden"
          style={{ backgroundColor: 'rgba(255,249,251,0.95)' }}
          aria-hidden="true"
        />

        {/* Desktop — multi-stop gradient: solid cream on the left text area,
            transparent over the woman on the right */}
        <div
          className="absolute inset-0 hidden lg:block"
          style={{
            background: [
              'linear-gradient(to left,',
              'rgba(255,249,251,0) 0%,',
              'rgba(255,249,251,0.05) 20%,',
              'rgba(255,249,251,0.35) 35%,',
              'rgba(255,249,251,0.72) 45%,',
              'rgba(255,249,251,0.92) 53%,',
              'rgba(255,249,251,1) 62%)',
            ].join(' '),
          }}
          aria-hidden="true"
        />

        {/* Subtle bottom fade for a smooth transition to the next section */}
        <div
          className="absolute bottom-0 left-0 right-0 h-24 hidden lg:block"
          style={{
            background: 'linear-gradient(to top, var(--wh-cream) 0%, rgba(255,249,251,0) 100%)',
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-20 lg:py-0 lg:min-h-[660px] xl:min-h-[720px] lg:flex lg:items-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 w-full lg:items-center">

            {/* Left — text content */}
            <div className="lg:col-span-7 flex flex-col">

              {/* Breadcrumb */}
              <nav
                className="flex items-center gap-2 text-sm mb-8"
                style={{ color: '#9a8a8e' }}
                aria-label="Breadcrumb"
              >
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
                <span aria-hidden="true" style={{ color: 'var(--wh-rose-line-strong)' }}>/</span>
                <span style={{ color: 'var(--wh-pink)', fontWeight: 600 }}>
                  Women&apos;s Health
                </span>
              </nav>

              {/* Eyebrow */}
              <span className="wh-eyebrow mb-4">
                <span
                  style={{
                    display: 'inline-block',
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    backgroundColor: 'var(--wh-pink)',
                    animation: 'whPulse 2.4s ease-in-out infinite',
                  }}
                  aria-hidden="true"
                />
                Ebenezer Health Clinic
              </span>

              <h1
                className="text-[2.5rem] sm:text-5xl md:text-[3.25rem] xl:text-[3.5rem] mb-5 leading-[1.10] tracking-tight"
                style={{ color: 'var(--wh-charcoal)' }}
              >
                Women&apos;s Health{' '}
                <br className="hidden sm:inline" />
                in Oklahoma City
                <span className="block mt-1">
                  <span style={{ color: 'var(--wh-charcoal)', opacity: 0.35 }}>—</span>{' '}
                  <span className="italic" style={{ color: 'var(--wh-pink)' }}>
                    In-Person &amp; Online
                  </span>
                </span>
              </h1>

              {/* Accent rule */}
              <div className="wh-rule mb-6" aria-hidden="true">
                <span className="bar-1" />
                <span className="bar-2" />
                <span className="bar-3" />
              </div>

              <p
                className="text-lg leading-relaxed mb-4 max-w-xl"
                style={{ color: '#5a4a4e' }}
              >
                Compassionate, personalized women&apos;s health care for birth
                control, PCOS, menstrual irregularities, menopause, Pap
                smears, STD testing, and more.
              </p>

              <p
                className="text-base leading-relaxed mb-4 max-w-xl"
                style={{ color: '#6b5a5e' }}
              >
                Not sure where to start?{' '}
                <strong style={{ color: 'var(--wh-charcoal)' }}>
                  Begin with a free initial consultation
                </strong>{' '}
                to discuss your concerns, ask questions, and learn more about
                the care options available to you.
              </p>

              <p
                className="text-base leading-relaxed mb-7 max-w-xl"
                style={{ color: '#6b5a5e' }}
              >
                Visit Ebenezer Health Clinic in the Oklahoma City area or
                connect through secure telehealth from anywhere in Oklahoma.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center gap-2.5 mb-8">
                <span
                  className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold"
                  style={{
                    backgroundColor: 'rgba(243,201,212,0.55)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    color: 'var(--wh-charcoal)',
                    border: '1px solid rgba(194,37,92,0.12)',
                  }}
                >
                  <ShieldCheck className="h-4 w-4" style={{ color: 'var(--wh-pink)' }} aria-hidden="true" />
                  Free Initial Consultation
                </span>
                <span
                  className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold"
                  style={{
                    backgroundColor: 'rgba(243,201,212,0.55)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    color: 'var(--wh-charcoal)',
                    border: '1px solid rgba(194,37,92,0.12)',
                  }}
                >
                  <Lock className="h-3.5 w-3.5" style={{ color: 'var(--wh-pink)' }} aria-hidden="true" />
                  Private, Secure &amp; HIPAA-Compliant
                </span>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="btn-primary text-base px-8 py-3.5 w-full sm:w-auto text-center"
                  style={{ transition: 'all 0.25s cubic-bezier(0.22,1,0.36,1)' }}
                >
                  Book Your Women&apos;s Health Visit
                </Link>
                <a
                  href="tel:+14053498188"
                  className="btn-outline text-base px-8 py-3.5 w-full sm:w-auto text-center"
                  style={{ transition: 'all 0.25s cubic-bezier(0.22,1,0.36,1)' }}
                >
                  Call (405) 349-8188
                </a>
              </div>
            </div>

            {/* Right spacer — lets the background photo (woman on the right) show through */}
            <div className="hidden lg:block lg:col-span-5" aria-hidden="true" />
          </div>
        </div>

        {/* Keyframe for the pulsing dot — scoped inline */}
        <style suppressHydrationWarning>{`
          @keyframes whPulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.5; transform: scale(0.75); }
          }
        `}</style>
      </section>

      {/* ── PERSONALIZED CARE INTRO ─────────────────── */}
      <section
        className="relative overflow-hidden bg-white"
        aria-labelledby="intro-heading"
      >
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left — image */}
            <div className="flex justify-center lg:justify-start order-1">
              <div className="relative w-full">
                <div
                  className="absolute -bottom-5 -left-5 h-full w-full rounded-[3rem] hidden sm:block"
                  style={{ backgroundColor: 'var(--wh-rose)' }}
                  aria-hidden="true"
                />
                <div
                  className="relative overflow-hidden rounded-[3rem] aspect-[4/3]"
                  style={{ boxShadow: '0 20px 50px rgba(43,34,36,0.16)' }}
                >
                  <Image
                    src="/Womens-Health-EbenezerHC2.jpg"
                    alt="Personalized women's health care for every stage of life at Ebenezer Health Clinic"
                    fill
                    sizes="(max-width: 1024px) 90vw, 45vw"
                    quality={95}
                    className="object-cover"
                    style={{ objectPosition: 'center 25%' }}
                  />
                </div>
              </div>
            </div>

            {/* Right — text */}
            <div className="order-2">
              <span className="wh-eyebrow mb-4 block">Our Approach</span>
              <h2
                id="intro-heading"
                className="text-3xl md:text-4xl mb-5"
              >
                Personalized Women&apos;s Health Care for Every Stage of Life
              </h2>
              <div className="wh-rule mb-7" aria-hidden="true">
                <span className="bar-1" />
                <span className="bar-2" />
                <span className="bar-3" />
              </div>
              <p className="text-base md:text-lg leading-relaxed mb-5" style={{ color: '#5a4a4e' }}>
                Women&apos;s health needs change throughout life. At Ebenezer
                Health Clinic, we take time to understand your symptoms,
                medical history, concerns and health goals before developing
                an individualized care plan.
              </p>
              <p className="text-base md:text-lg leading-relaxed mb-5" style={{ color: '#5a4a4e' }}>
                Whether you need help choosing birth control, managing PCOS
                or irregular periods, navigating menopause, completing a Pap
                smear, or addressing concerns about sexually transmitted
                diseases, our goal is to provide accessible, respectful and
                evidence-based care.
              </p>
              <p className="text-base md:text-lg leading-relaxed" style={{ color: '#5a4a4e' }}>
                In-person appointments are available in the Oklahoma City
                area, with telehealth available throughout Oklahoma for
                services that can appropriately be provided virtually.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WOMEN'S HEALTH SERVICES WE PROVIDE (section heading + quick nav) ── */}
      <div
        style={{
          background: 'linear-gradient(180deg, var(--wh-rose-soft) 0%, var(--wh-rose) 100%)',
        }}
        aria-labelledby="services-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-16">
          <div className="text-center mb-10 md:mb-12">
            <span className="wh-eyebrow mb-4 block justify-center">What We Offer</span>
            <h2
              id="services-heading"
              className="text-3xl md:text-4xl mb-5"
            >
              Women&apos;s Health Services We Provide
            </h2>
            <div className="wh-rule justify-center" aria-hidden="true">
              <span className="bar-1" />
              <span className="bar-2" />
              <span className="bar-3" />
            </div>
          </div>

          {/* Compact icon quick-nav — jumps to the matching section below */}
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
            {quickNavServices.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="wh-card flex flex-col items-center text-center gap-2.5 rounded-2xl bg-white px-3 py-5 md:py-6"
                style={{ border: '1px solid rgba(194,37,92,0.10)' }}
              >
                <span
                  className="wh-icon-badge h-11 w-11 md:h-12 md:w-12"
                  style={{ backgroundColor: 'var(--wh-rose-soft)' }}
                >
                  <item.icon className="h-5 w-5" style={{ color: 'var(--wh-pink)' }} aria-hidden="true" />
                </span>
                <span className="text-xs md:text-sm font-semibold leading-snug" style={{ color: 'var(--wh-charcoal)' }}>
                  {item.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── BIRTH CONTROL & CONTRACEPTIVE CARE ── */}
      <section
        id="birth-control"
        className="scroll-mt-24 bg-white"
        aria-labelledby="birth-control-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              {/* Text content */}
              <div>
                <div
                  className="wh-icon-badge h-14 w-14 mb-5"
                  style={{ backgroundColor: 'var(--wh-rose)' }}
                >
                  <Pill className="h-6 w-6" style={{ color: 'var(--wh-pink)' }} aria-hidden="true" />
                </div>
                <h3
                  id="birth-control-heading"
                  className="text-2xl md:text-3xl mb-4"
                >
                  Birth Control &amp; Contraceptive Care
                </h3>
                <p className="text-base leading-relaxed mb-4" style={{ color: '#5a4a4e' }}>
                  Choosing the right birth control method is a personal
                  decision. Your health history, lifestyle, preferences and
                  reproductive goals can all play a role in determining which
                  option may be appropriate for you.
                </p>
                <p className="text-base leading-relaxed mb-5" style={{ color: '#5a4a4e' }}>
                  Our provider can discuss available options with you and
                  help determine an appropriate method based on your
                  individual needs.
                </p>
                <div
                  className="rounded-2xl p-4 flex items-start gap-3"
                  style={{
                    backgroundColor: 'var(--wh-rose-soft)',
                  }}
                  role="note"
                >
                  <Info
                    className="h-5 w-5 mt-0.5 flex-shrink-0"
                    style={{ color: 'var(--wh-pink)' }}
                    aria-hidden="true"
                  />
                  <p className="text-sm" style={{ color: '#5a4a4e' }}>
                    Please note: IUD and Nexplanon insertions are covered by
                    insurance only.
                  </p>
                </div>
                <Link
                  href="/womens-health/birth-control"
                  className="wh-link-arrow inline-flex items-center gap-1.5 text-sm font-semibold mt-5"
                  style={{ color: 'var(--wh-pink)' }}
                >
                  Learn more about birth control options
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>

              {/* Services list */}
              <div
                className="wh-card rounded-[2rem] p-7 md:p-9"
                style={{
                  backgroundColor: 'var(--wh-cream)',
                  border: '1px solid rgba(43,34,36,0.06)',
                }}
              >
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-5"
                  style={{ color: 'var(--wh-pink)' }}
                >
                  Our birth control services include
                </p>
                <ul className="space-y-4">
                  {birthControlServices.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        className="wh-icon-badge h-7 w-7 mt-0.5"
                        style={{ backgroundColor: 'var(--wh-rose)' }}
                      >
                        <Pill className="h-3.5 w-3.5" style={{ color: 'var(--wh-pink)' }} aria-hidden="true" />
                      </span>
                      <span style={{ color: '#5a4a4e' }} className="leading-snug pt-0.5">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
      </section>

      {/* ── PCOS MANAGEMENT & MENSTRUAL IRREGULARITIES ── */}
      <section
        className="scroll-mt-24 relative overflow-hidden"
        aria-label="PCOS Management and Menstrual Irregularities"
        style={{ backgroundColor: 'var(--wh-beige)' }}
      >
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
            {/* PCOS Management */}
            <div
              id="pcos"
              className="wh-card scroll-mt-24 rounded-[2rem] p-7 md:p-10 h-full bg-white"
              style={{
                border: '1px solid rgba(194,37,92,0.12)',
              }}
            >
              <div
                className="wh-icon-badge h-14 w-14 mb-5"
                style={{ backgroundColor: 'var(--wh-rose)' }}
              >
                <Activity className="h-6 w-6" style={{ color: 'var(--wh-pink)' }} aria-hidden="true" />
              </div>
              <h3
                id="pcos-heading"
                className="text-2xl md:text-3xl mb-4"
              >
                PCOS Management
              </h3>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#5a4a4e' }}>
                Polycystic ovary syndrome (PCOS) can affect menstrual cycles
                and other aspects of a woman&apos;s health.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#5a4a4e' }}>
                Ebenezer Health Clinic provides individualized PCOS
                management based on your symptoms, medical history and
                health needs.
              </p>
              <p className="text-base leading-relaxed mb-5" style={{ color: '#5a4a4e' }}>
                Your visit may include a review of your menstrual patterns,
                medications, symptoms and other relevant health factors to
                help your provider determine appropriate next steps.
              </p>
              <Link
                href="/womens-health/pcos-management"
                className="wh-link-arrow inline-flex items-center gap-1.5 text-sm font-semibold"
                style={{ color: 'var(--wh-pink)' }}
              >
                Learn more about PCOS management
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>

            {/* Menstrual Irregularities */}
            <div
              id="menstrual-irregularities"
              className="wh-card scroll-mt-24 rounded-[2rem] p-7 md:p-10 h-full"
              style={{
                backgroundColor: 'var(--wh-rose-soft)',
              }}
            >
              <div
                className="wh-icon-badge h-14 w-14 mb-5"
                style={{ backgroundColor: '#ffffff' }}
              >
                <Droplet className="h-6 w-6" style={{ color: 'var(--wh-pink)' }} aria-hidden="true" />
              </div>
              <h3
                id="menstrual-heading"
                className="text-2xl md:text-3xl mb-4"
              >
                Menstrual Irregularities
              </h3>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#5a4a4e' }}>
                Changes in your menstrual cycle can happen for many reasons.
                If you are experiencing irregular, absent, heavy or painful
                periods, our provider can evaluate your symptoms and medical
                history.
              </p>
              <p className="text-base leading-relaxed mb-5" style={{ color: '#5a4a4e' }}>
                Your visit may include a review of your menstrual cycle,
                reproductive history, current medications, symptoms and
                other factors that may be contributing to your concerns.
              </p>
              <Link
                href="/womens-health/menstrual-irregularities"
                className="wh-link-arrow inline-flex items-center gap-1.5 text-sm font-semibold"
                style={{ color: 'var(--wh-pink)' }}
              >
                Learn more about menstrual irregularities
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── MENOPAUSE CARE ───────────────────────── */}
      <section
        id="menopause"
        className="scroll-mt-24 bg-white"
        aria-labelledby="menopause-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-stretch">
            {/* Concerns card — left on desktop */}
            <div className="order-2 lg:order-1 flex">
              <div
                className="rounded-[2rem] p-7 md:p-9 flex flex-col justify-center w-full"
                style={{
                  backgroundColor: 'var(--wh-cream)',
                  border: '1px solid rgba(43,34,36,0.06)',
                }}
              >
                <span
                  className="inline-flex self-start items-center rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wide mb-6"
                  style={{
                    backgroundColor: 'var(--wh-pink)',
                    color: '#ffffff',
                  }}
                >
                  We can evaluate concerns including
                </span>
                <ul>
                  {menopauseConcerns.map((item, index) => (
                    <li
                      key={item}
                      className="flex items-center gap-3.5 py-3"
                      style={{
                        borderBottom:
                          index < menopauseConcerns.length - 1
                            ? '1px solid rgba(43,34,36,0.08)'
                            : 'none',
                      }}
                    >
                      <span
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full flex-shrink-0"
                        style={{ backgroundColor: 'var(--wh-rose)' }}
                      >
                        <Sun
                          className="h-4 w-4"
                          style={{ color: 'var(--wh-pink)' }}
                          aria-hidden="true"
                        />
                      </span>
                      <span style={{ color: '#5a4a4e' }} className="leading-snug font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Text content — right on desktop */}
            <div className="order-1 lg:order-2">
              <div
                className="wh-icon-badge h-14 w-14 mb-5"
                style={{ backgroundColor: 'var(--wh-rose)' }}
              >
                <Sun className="h-6 w-6" style={{ color: 'var(--wh-pink)' }} aria-hidden="true" />
              </div>
              <h2
                id="menopause-heading"
                className="text-3xl md:text-4xl mb-4"
              >
                Menopause Care – Hormonal &amp; Non-Hormonal Treatments
              </h2>
              <div className="wh-rule mb-7" aria-hidden="true">
                <span className="bar-1" />
                <span className="bar-2" />
                <span className="bar-3" />
              </div>

              <p className="text-base leading-relaxed mb-4" style={{ color: '#5a4a4e' }}>
                Menopause can bring changes that affect comfort, sleep, mood
                and everyday well-being.
              </p>
              <p className="text-base leading-relaxed mb-7" style={{ color: '#5a4a4e' }}>
                Ebenezer Health Clinic provides both{' '}
                <strong style={{ color: 'var(--wh-charcoal)' }}>hormonal and non-hormonal treatment options</strong>{' '}
                for qualified patients based
                on individual needs and clinical evaluation. Treatment
                recommendations are individualized based on your symptoms,
                medical history and clinical evaluation.
              </p>

              {/* Coming December 2026 callout */}
              <div
                className="rounded-2xl p-5"
                style={{
                  backgroundColor: 'var(--wh-beige)',
                }}
              >
                <p
                  className="text-sm font-semibold uppercase tracking-wide mb-2"
                  style={{ color: 'var(--wh-pink)' }}
                >
                  Coming December 2026 – Pellet Insertion
                </p>
                <p className="text-sm leading-relaxed" style={{ color: '#5a4a4e' }}>
                  Starting in <strong style={{ color: 'var(--wh-charcoal)' }}>December 2026</strong>, pellet insertion will be
                  available for qualified patients. Eligibility and treatment
                  options will be determined following an individual
                  clinical evaluation.
                </p>
              </div>
              <Link
                href="/womens-health/menopause-care"
                className="wh-link-arrow inline-flex items-center gap-1.5 text-sm font-semibold mt-5"
                style={{ color: 'var(--wh-pink)' }}
              >
                Learn more about menopause care
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── PAP SMEARS & SCREENING ───────────────── */}
      <section
        id="pap-smears"
        className="scroll-mt-24 relative overflow-hidden"
        aria-labelledby="pap-smear-heading"
        style={{
          backgroundImage: "url('/pap-smear-screening-ebenezer.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(100deg, rgba(255,249,251,0.60) 0%, rgba(255,249,251,0.34) 55%, rgba(243,201,212,0.30) 100%)',
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div
            className="max-w-3xl rounded-[2rem] p-7 md:p-9 backdrop-blur-sm"
            style={{
              backgroundColor: 'rgba(255,255,255,0.92)',
              boxShadow: '0 18px 44px rgba(43,34,36,0.12)',
            }}
          >
            <div
              className="wh-icon-badge h-14 w-14 mb-5"
              style={{ backgroundColor: 'var(--wh-rose)' }}
            >
              <ClipboardCheck className="h-6 w-6" style={{ color: 'var(--wh-pink)' }} aria-hidden="true" />
            </div>
            <h2
              id="pap-smear-heading"
              className="text-3xl md:text-4xl mb-4"
            >
              Pap Smears &amp; Women&apos;s Health Screening
            </h2>
            <div className="wh-rule mb-7" aria-hidden="true">
              <span className="bar-1" />
              <span className="bar-2" />
              <span className="bar-3" />
            </div>
            <p className="text-base md:text-lg leading-relaxed mb-4" style={{ color: '#5a4a4e' }}>
              Preventive screening is an important part of women&apos;s
              health care.
            </p>
            <p className="text-base md:text-lg leading-relaxed mb-4" style={{ color: '#5a4a4e' }}>
              Ebenezer Health Clinic offers <strong style={{ color: 'var(--wh-charcoal)' }}>Pap smears</strong> as part of our
              women&apos;s health services.
            </p>
            <p className="text-base md:text-lg leading-relaxed mb-5" style={{ color: '#5a4a4e' }}>
              Your provider can review your health history and previous
              screening information and discuss appropriate screening based
              on your individual needs.
            </p>
            <Link
              href="/womens-health/pap-smears"
              className="wh-link-arrow inline-flex items-center gap-1.5 text-sm font-semibold"
              style={{ color: 'var(--wh-pink)' }}
            >
              Learn more about Pap smears
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── STD TESTING & MANAGEMENT ──────────────── */}
      <section
        id="std-testing"
        className="scroll-mt-24 relative overflow-hidden"
        aria-labelledby="std-testing-heading"
        style={{
          backgroundImage: "url('/STD Testing Healthcare Banner.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(260deg, rgba(253,241,244,0.60) 0%, rgba(253,241,244,0.34) 55%, rgba(253,241,244,0.30) 100%)',
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div
            className="max-w-3xl ml-auto text-left rounded-[2rem] p-7 md:p-9 backdrop-blur-sm"
            style={{
              backgroundColor: 'rgba(255,255,255,0.92)',
              boxShadow: '0 18px 44px rgba(43,34,36,0.12)',
            }}
          >
            <div
              className="wh-icon-badge h-14 w-14 mb-5"
              style={{ backgroundColor: 'var(--wh-rose)' }}
            >
              <ShieldCheck className="h-6 w-6" style={{ color: 'var(--wh-pink)' }} aria-hidden="true" />
            </div>
            <h2
              id="std-testing-heading"
              className="text-3xl md:text-4xl mb-4"
            >
              STD Testing &amp; Management
            </h2>
            <div className="wh-rule mb-7" aria-hidden="true">
              <span className="bar-1" />
              <span className="bar-2" />
              <span className="bar-3" />
            </div>
            <p className="text-base md:text-lg leading-relaxed mb-5" style={{ color: '#5a4a4e' }}>
              If you have concerns about a sexually transmitted disease
              (STD), Ebenezer Health Clinic provides <strong style={{ color: 'var(--wh-charcoal)' }}>STD testing and
              management</strong> in a private, professional and respectful clinical
              environment. Your provider can discuss your symptoms, sexual
              health history, previous testing and other relevant concerns
              and recommend appropriate testing and management.
            </p>
            <Link
              href="/womens-health/std-testing"
              className="wh-link-arrow inline-flex items-center justify-end gap-1.5 text-sm font-semibold w-full"
              style={{ color: 'var(--wh-pink)' }}
            >
              Learn more about STD testing &amp; management
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── IN-PERSON & TELEHEALTH ACROSS OKLAHOMA ──────── */}
      <section
        className="relative overflow-hidden bg-white"
        aria-labelledby="telehealth-heading"
      >
        <Image
          src="/womens-health-02.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center pointer-events-none"
          style={{ opacity: 1 }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div
            className="rounded-[2rem] p-7 md:p-10 max-w-3xl"
            style={{
              backgroundColor: 'rgba(255,255,255,0.94)',
              boxShadow: '0 18px 44px rgba(43,34,36,0.10)',
            }}
          >
            <h2
              id="telehealth-heading"
              className="text-3xl md:text-4xl mb-4"
            >
              In-Person Women&apos;s Health Care &amp; Telehealth Across
              Oklahoma
            </h2>
            <div className="wh-rule mb-7" aria-hidden="true">
              <span className="bar-1" />
              <span className="bar-2" />
              <span className="bar-3" />
            </div>
            <p className="text-base md:text-lg leading-relaxed mb-4" style={{ color: '#5a4a4e' }}>
              We make accessing women&apos;s health care more convenient.
            </p>
            <p className="text-base md:text-lg leading-relaxed mb-4" style={{ color: '#5a4a4e' }}>
              Patients can visit Ebenezer Health Clinic in person in the
              Oklahoma City area. Appropriate consultations and follow-up
              services may also be available through secure telehealth for
              patients throughout Oklahoma.
            </p>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: '#5a4a4e' }}>
              Our goal is to make it easier to discuss your concerns,
              understand your options and receive individualized care.
            </p>
          </div>
        </div>
      </section>

      {/* ── HOW YOUR VISIT WORKS ───────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: 'var(--wh-pink)' }}
        aria-labelledby="how-it-works-heading"
      >
        <div
          className="absolute -top-16 -left-16 h-64 w-64 rounded-full pointer-events-none"
          style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center mb-12 md:mb-14">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'rgba(255,255,255,0.78)' }}>
              The Process
            </span>
            <h2
              id="how-it-works-heading"
              className="text-3xl md:text-4xl"
              style={{ color: '#ffffff' }}
            >
              How Your Women&apos;s Health Visit Works
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 items-stretch">
            {steps.map((step, index) => (
              <div key={step.number} className="relative flex flex-col gap-4 h-full">
                {index < steps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] right-0 h-px"
                    style={{ backgroundColor: 'rgba(255,255,255,0.22)' }}
                    aria-hidden="true"
                  />
                )}
                <div
                  className="wh-card rounded-[1.75rem] p-6 flex flex-col gap-4 h-full"
                  style={{
                    background: 'rgba(255,255,255,0.10)',
                    border: '1px solid rgba(255,255,255,0.16)',
                  }}
                >
                  <div
                    className="inline-flex h-14 w-14 items-center justify-center rounded-2xl"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.20)',
                      color: '#ffffff',
                    }}
                  >
                    <step.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3
                    className="text-base font-semibold leading-snug"
                    style={{ color: '#ffffff', fontFamily: 'var(--font-wh-body)' }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: 'rgba(255,255,255,0.86)' }}
                  >
                    {step.description}
                  </p>
                  {index === 1 && (
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 text-sm font-semibold rounded-full px-4 py-2.5 mt-auto transition-colors"
                      style={{
                        backgroundColor: 'rgba(255,255,255,0.20)',
                        color: '#ffffff',
                      }}
                    >
                      Complete Women&apos;s Health Questionnaire
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 text-base font-semibold rounded-full px-8 py-3.5 transition-colors"
              style={{ backgroundColor: '#ffffff', color: 'var(--wh-pink)' }}
            >
              Book Your Visit
            </Link>
          </div>
        </div>
      </section>

      {/* ── MEET YOUR PROVIDER ───────────────── */}
      <section className="bg-white" aria-labelledby="provider-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Text content */}
            <div>
              <span className="wh-eyebrow mb-4 block">Your Provider</span>
              <h2
                id="provider-heading"
                className="text-3xl md:text-4xl mb-4"
              >
                Meet Dr. Susan George, DNP, APRN, BC-ADM
              </h2>
              <div className="wh-rule mb-7" aria-hidden="true">
                <span className="bar-1" />
                <span className="bar-2" />
                <span className="bar-3" />
              </div>

              <p className="text-base leading-relaxed mb-4" style={{ color: '#5a4a4e' }}>
                Women&apos;s health care at Ebenezer Health Clinic is led by{' '}
                <strong style={{ color: 'var(--wh-charcoal)' }}>Dr. Susan George, DNP, APRN, BC-ADM</strong>.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#5a4a4e' }}>
                Dr. George is a Doctor of Nursing Practice and Advanced
                Practice Registered Nurse who specializes in women&apos;s
                health and is Board Certified in Advanced Diabetes
                Management.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: '#5a4a4e' }}>
                She provides personalized, evidence-based care with an
                emphasis on listening to patients, understanding their
                concerns and developing individualized approaches to care.
              </p>

              {/* Credentials */}
              <div
                className="rounded-[2rem] p-7"
                style={{
                  backgroundColor: 'var(--wh-beige)',
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
                      <span
                        className="wh-icon-badge h-6 w-6 mt-0.5"
                        style={{ backgroundColor: 'var(--wh-rose)' }}
                      >
                        <ShieldCheck className="h-3.5 w-3.5" style={{ color: 'var(--wh-pink)' }} aria-hidden="true" />
                      </span>
                      <span style={{ color: '#5a4a4e' }} className="leading-snug text-sm pt-0.5">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Doctor photo — organic framed */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm lg:max-w-none">
                <div
                  className="absolute -bottom-5 -right-5 h-full w-full rounded-[3rem] hidden sm:block"
                  style={{ backgroundColor: 'var(--wh-rose)' }}
                  aria-hidden="true"
                />
                <div
                  className="relative overflow-hidden rounded-[3rem]"
                  style={{
                    boxShadow: '0 20px 50px rgba(43,34,36,0.16)',
                  }}
                >
                  <Image
                    src="/dr-susan-george-oklahoma-telehealth.webp"
                    alt="Dr. Susan George, DNP, APRN — Women's Health Doctor at Ebenezer Health Clinic, Oklahoma"
                    width={520}
                    height={620}
                    className="w-full h-auto object-cover"
                    priority={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY WOMEN CHOOSE EBENEZER ────────────── */}
      <section
        className="relative overflow-hidden"
        aria-labelledby="why-heading"
        style={{ background: 'linear-gradient(180deg, var(--wh-cream) 0%, var(--wh-rose-soft) 100%)' }}
      >
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          {/* Heading */}
          <div className="mb-10 md:mb-14 max-w-2xl">
            <span className="wh-eyebrow mb-4 block">The Difference</span>
            <h2
              id="why-heading"
              className="text-3xl md:text-4xl mb-3"
            >
              Why Women Choose Ebenezer Health Clinic
            </h2>
            <div className="wh-rule" aria-hidden="true">
              <span className="bar-1" />
              <span className="bar-2" />
              <span className="bar-3" />
            </div>
          </div>

          {/* 2-col card grid */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5" role="list">
            {whyPoints.map((point) => (
              <li
                key={point.title}
                className="wh-card group flex gap-5 rounded-[1.75rem] p-6 md:p-7 bg-white"
                style={{
                  border: '1px solid rgba(43,34,36,0.06)',
                  borderLeft: '3px solid var(--wh-pink)',
                }}
              >
                {/* Icon badge */}
                <div
                  className="wh-icon-badge flex-shrink-0 h-11 w-11 rounded-xl"
                  style={{
                    backgroundColor: 'var(--wh-rose)',
                  }}
                  aria-hidden="true"
                >
                  <point.icon className="h-5 w-5" style={{ color: 'var(--wh-pink)' }} />
                </div>

                {/* Text */}
                <div className="min-w-0">
                  <p
                    className="font-semibold leading-snug"
                    style={{ color: 'var(--wh-charcoal)' }}
                  >
                    {point.title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed" style={{ color: '#6b5a5e' }}>
                    {point.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── TESTIMONIALS (same component as home page) ───── */}
      <Testimonials />

      {/* ── PRICING ───────────────────────── */}
      <section
        id="pricing"
        className="bg-white"
        aria-labelledby="pricing-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center mb-10">
            <span className="wh-eyebrow mb-4 block justify-center">Transparent Pricing</span>
            <h2
              id="pricing-heading"
              className="text-3xl md:text-4xl mb-4"
            >
              Women&apos;s Health Pricing
            </h2>
            <p className="text-base md:text-lg max-w-xl mx-auto" style={{ color: '#6b5a5e' }}>
              We believe patients should understand the cost of care before
              their visit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Televisit Card */}
            <div
              className="wh-card rounded-[2rem] p-7 md:p-8 flex flex-col"
              style={{
                backgroundColor: 'var(--wh-rose-soft)',
              }}
            >
              <h3
                className="text-lg font-semibold mb-1"
                style={{ color: 'var(--wh-charcoal)', fontFamily: 'var(--font-wh-body)' }}
              >
                Televisit
              </h3>
              <p className="text-sm mb-5" style={{ color: '#6b5a5e' }}>
                Secure video visit, symptom review, and prescriptions sent to
                your pharmacy when appropriate.
              </p>
              <div className="flex items-baseline gap-2 mb-6">
                <span
                  className="text-5xl"
                  style={{ color: 'var(--wh-pink)', fontFamily: 'var(--font-wh-heading)' }}
                >
                  $50
                </span>
                <span className="text-sm" style={{ color: '#9a8a8e' }}>televisit</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {pricingTelevisitFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <span
                      className="wh-icon-badge h-5 w-5 mt-0.5"
                      style={{ backgroundColor: '#ffffff' }}
                    >
                      <Sparkles className="h-3 w-3" style={{ color: 'var(--wh-pink)' }} aria-hidden="true" />
                    </span>
                    <span className="text-sm" style={{ color: '#5a4a4e' }}>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="btn-primary text-base w-full text-center"
              >
                Book Your Visit
              </Link>
            </div>

            {/* Initial Visit Card */}
            <div
              className="wh-card rounded-[2rem] p-7 md:p-8 flex flex-col bg-white"
              style={{
                border: '1px solid rgba(194,37,92,0.18)',
              }}
            >
              <h3
                className="text-lg font-semibold mb-1"
                style={{ color: 'var(--wh-charcoal)', fontFamily: 'var(--font-wh-body)' }}
              >
                In-Person Initial Visit
              </h3>
              <p className="text-sm mb-5" style={{ color: '#6b5a5e' }}>
                Comprehensive symptom review, lab orders included, lab
                interpretation, and a personalized treatment plan.
              </p>
              <div className="flex items-baseline gap-2 mb-6">
                <span
                  className="text-5xl"
                  style={{ color: 'var(--wh-pink)', fontFamily: 'var(--font-wh-heading)' }}
                >
                  $75
                </span>
                <span className="text-sm" style={{ color: '#9a8a8e' }}>initial visit</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {pricingInitialFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <span
                      className="wh-icon-badge h-5 w-5 mt-0.5"
                      style={{ backgroundColor: 'var(--wh-rose)' }}
                    >
                      <Sparkles className="h-3 w-3" style={{ color: 'var(--wh-pink)' }} aria-hidden="true" />
                    </span>
                    <span className="text-sm" style={{ color: '#5a4a4e' }}>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="btn-outline text-base w-full text-center"
              >
                Book Your Visit
              </Link>
            </div>

            {/* Follow-up Card */}
            <div
              className="wh-card rounded-[2rem] p-7 md:p-8 flex flex-col bg-white"
              style={{
                border: '1px solid rgba(194,37,92,0.18)',
              }}
            >
              <h3
                className="text-lg font-semibold mb-1"
                style={{ color: 'var(--wh-charcoal)', fontFamily: 'var(--font-wh-body)' }}
              >
                In-Person Follow-Up Visit
              </h3>
              <p className="text-sm mb-5" style={{ color: '#6b5a5e' }}>
                Ongoing assessment, lab review and monitoring, treatment
                adjustments, and continued support.
              </p>
              <div className="flex items-baseline gap-2 mb-6">
                <span
                  className="text-5xl"
                  style={{ color: 'var(--wh-pink)', fontFamily: 'var(--font-wh-heading)' }}
                >
                  $50
                </span>
                <span className="text-sm" style={{ color: '#9a8a8e' }}>follow-up</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {pricingFollowupFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <span
                      className="wh-icon-badge h-5 w-5 mt-0.5"
                      style={{ backgroundColor: 'var(--wh-rose)' }}
                    >
                      <Sparkles className="h-3 w-3" style={{ color: 'var(--wh-pink)' }} aria-hidden="true" />
                    </span>
                    <span className="text-sm" style={{ color: '#5a4a4e' }}>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="btn-outline text-base w-full text-center"
              >
                Book Your Visit
              </Link>
            </div>
          </div>

          {/* IUD/Nexplanon insurance note */}
          <div
            className="mt-8 max-w-3xl mx-auto rounded-2xl p-5 flex items-start gap-3"
            style={{
              backgroundColor: 'var(--wh-beige)',
            }}
            role="note"
          >
            <Info
              className="h-5 w-5 mt-0.5 flex-shrink-0"
              style={{ color: 'var(--wh-pink)' }}
              aria-hidden="true"
            />
            <p className="text-sm" style={{ color: '#5a4a4e' }}>
              IUD and Nexplanon insertions are covered by insurance only.
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
              Book Your Visit
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────── */}
      <section
        className="relative overflow-hidden"
        aria-labelledby="faq-heading"
        style={{ backgroundColor: 'var(--wh-rose-soft)' }}
      >
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center mb-12">
            <span className="wh-eyebrow mb-4 block justify-center">Questions</span>
            <h2
              id="faq-heading"
              className="text-3xl md:text-4xl"
            >
              Women&apos;s Health FAQs
            </h2>
          </div>

          <div
            className="wh-faq rounded-[2rem] px-6 md:px-9 py-2"
            style={{ backgroundColor: '#ffffff', boxShadow: '0 18px 44px rgba(43,34,36,0.08)' }}
          >
            <WomensHealthFAQAccordion />
          </div>
        </div>
      </section>

      {/* ── VISIT EBENEZER HEALTH CLINIC ─────────── */}
      <section
        aria-labelledby="visit-heading"
        style={{ background: 'linear-gradient(180deg, #ffffff 0%, var(--wh-rose-soft) 100%)' }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Location details */}
            <div>
              <h2
                id="visit-heading"
                className="text-3xl md:text-4xl mb-4"
              >
                Visit Ebenezer Health Clinic
              </h2>
              <div className="wh-rule mb-7" aria-hidden="true">
                <span className="bar-1" />
                <span className="bar-2" />
                <span className="bar-3" />
              </div>

              <div
                className="rounded-[2rem] p-7 md:p-8"
                style={{
                  backgroundColor: 'var(--wh-beige)',
                }}
              >
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <MapPin
                      className="h-5 w-5 mt-0.5 flex-shrink-0"
                      style={{ color: 'var(--wh-pink)' }}
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-semibold" style={{ color: 'var(--wh-charcoal)' }}>
                        Ebenezer Health Clinic
                      </p>
                      <p className="text-sm mt-0.5" style={{ color: '#6b5a5e' }}>
                        7415 NW 23rd Street, Bethany, OK 73008
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Phone
                      className="h-5 w-5 mt-0.5 flex-shrink-0"
                      style={{ color: 'var(--wh-pink)' }}
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-semibold" style={{ color: 'var(--wh-charcoal)' }}>
                        Phone
                      </p>
                      <a
                        href="tel:+14053498188"
                        className="text-sm mt-0.5 hover:text-primary transition-colors"
                        style={{ color: '#6b5a5e' }}
                      >
                        (405) 349-8188
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Mail
                      className="h-5 w-5 mt-0.5 flex-shrink-0"
                      style={{ color: 'var(--wh-pink)' }}
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-semibold" style={{ color: 'var(--wh-charcoal)' }}>
                        Email
                      </p>
                      <a
                        href="mailto:ebenezerhealth@outlook.com"
                        className="text-sm mt-0.5 hover:text-primary transition-colors break-all"
                        style={{ color: '#6b5a5e' }}
                      >
                        ebenezerhealth@outlook.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Smile
                      className="h-5 w-5 mt-0.5 flex-shrink-0"
                      style={{ color: 'var(--wh-pink)' }}
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-semibold" style={{ color: 'var(--wh-charcoal)' }}>
                        In-Person Care
                      </p>
                      <p className="text-sm mt-0.5" style={{ color: '#6b5a5e' }}>
                        Oklahoma City area
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <ShieldCheck
                      className="h-5 w-5 mt-0.5 flex-shrink-0"
                      style={{ color: 'var(--wh-pink)' }}
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-semibold" style={{ color: 'var(--wh-charcoal)' }}>
                        Telehealth
                      </p>
                      <p className="text-sm mt-0.5" style={{ color: '#6b5a5e' }}>
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
              className="relative w-full min-h-[320px] lg:min-h-full rounded-[2rem] overflow-hidden"
              style={{ border: '1px solid rgba(194,37,92,0.14)' }}
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

      {/* ── SERVING WOMEN ACROSS OKLAHOMA ────────── */}
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage: "url('/Serving-Women-in-Oklahoma.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: 'var(--wh-beige)',
        }}
        aria-labelledby="serving-heading"
      >
        {/* Left-to-right fade — keeps text legible over the map graphic at every viewport width */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, rgba(253,241,244,0.95) 0%, rgba(253,241,244,0.92) 45%, rgba(253,241,244,0.55) 62%, rgba(253,241,244,0) 80%)',
          }}
          aria-hidden="true"
        />
        {/* Extra full-strength wash below lg, where the map graphic sits closer to the text column */}
        <div
          className="absolute inset-0 lg:hidden"
          style={{ backgroundColor: 'rgba(253,241,244,0.82)' }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-28">
          <h2
            id="serving-heading"
            className="text-3xl md:text-4xl mb-4"
          >
            Serving Women Across Oklahoma
          </h2>
          <div className="wh-rule mb-7" aria-hidden="true">
            <span className="bar-1" />
            <span className="bar-2" />
            <span className="bar-3" />
          </div>
          <p className="text-base md:text-lg leading-relaxed max-w-xl lg:max-w-2xl mb-8" style={{ color: '#5a4a4e' }}>
            Ebenezer Health Clinic provides in-person women&apos;s health
            care in the Oklahoma City area and telehealth access for
            appropriate services throughout Oklahoma. Our telehealth
            services help make care accessible to women in communities
            including Oklahoma City, Bethany, Edmond, Norman, Moore, Tulsa
            and other areas across the state.
          </p>
          <div className="flex flex-wrap gap-3">
            {servingAreas.map((area) => (
              <span
                key={area}
                className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold bg-white"
                style={{
                  color: 'var(--wh-charcoal)',
                  border: '1px solid rgba(194,37,92,0.28)',
                }}
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED INTERNAL LINKS ───────────── */}
      <section className="bg-white" aria-labelledby="explore-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <h2
            id="explore-heading"
            className="text-xs font-semibold uppercase tracking-widest mb-8 text-center"
            style={{ color: 'var(--wh-pink)', fontFamily: 'var(--font-wh-body)' }}
          >
            Explore Women&apos;s Health Services
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
            {featuredLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="wh-card group block overflow-hidden rounded-[1.5rem]"
                style={{
                  boxShadow: '0 4px 18px rgba(43,34,36,0.08)',
                }}
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <Image
                    src={link.image}
                    alt={link.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div
                  className="px-3 py-3 sm:py-4 flex items-center justify-center gap-1.5"
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
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: 'var(--wh-pink-dark)' }}
        aria-labelledby="final-cta-heading"
      >
        {/* Decorative organic shapes */}
        <div
          className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 h-72 w-72 rounded-full pointer-events-none"
          style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 h-48 w-48 rounded-full pointer-events-none"
          style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <h2
            id="final-cta-heading"
            className="text-3xl md:text-4xl mb-5"
            style={{ color: '#ffffff' }}
          >
            Schedule Your Women&apos;s Health Visit
          </h2>
          <p className="text-lg mb-9 leading-relaxed" style={{ color: 'rgba(255,255,255,0.86)' }}>
            Whether you need birth control, PCOS management, help with
            menstrual irregularities, menopause treatment, a Pap smear, or
            STD testing and management, Ebenezer Health Clinic is here to
            provide individualized women&apos;s health care. Take the next
            step and schedule your visit today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 text-base font-semibold rounded-full px-8 py-3.5 w-full sm:w-auto transition-colors"
              style={{ backgroundColor: '#ffffff', color: 'var(--wh-pink-dark)' }}
            >
              Book Your Women&apos;s Health Visit
            </Link>
            <a
              href="tel:+14053498188"
              className="inline-flex items-center justify-center gap-2 font-semibold text-base transition-colors w-full sm:w-auto"
              style={{ color: 'rgba(255,255,255,0.90)' }}
            >
              Call (405) 349-8188
            </a>
          </div>

          <p className="mt-10 text-sm" style={{ color: 'rgba(255,255,255,0.60)' }}>
            Ebenezer Health Clinic &middot; Women&apos;s Health Clinic in Oklahoma City &middot; Telehealth statewide
            &middot; (405) 349-8188 &middot; ebenezerhealthclinic.com
          </p>
        </div>
      </section>
    </div>
  )
}
