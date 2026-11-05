import Link from 'next/link'
import Image from 'next/image'
import {
  Syringe, Pill, Zap, Stethoscope, Clock, BadgeDollarSign, MapPin, Phone,
  ShieldCheck, AlertCircle, CalendarCheck, Bed, ClipboardList, Info, CheckCircle2,
} from 'lucide-react'
import MigraineReliefFAQAccordion from './MigraineReliefFAQAccordion'
import { migraineFaqs } from './migraineFaqs'

const SITE = 'https://www.ebenezerhealthclinic.com'
const PAGE_URL = `${SITE}/injections/migraine-relief-injection-bethany-ok`
const PAGE_TITLE = 'Migraine Relief Injection in Bethany, OK | Ebenezer'
const PAGE_DESCRIPTION =
  'Get migraine pain and nausea relief with a $50 injection at Ebenezer Health Clinic in Bethany, OK. Call (405) 349-8188 to schedule your visit.'
const BANNER_IMAGE = '/ebinizer migraine banne.jpeg'
const PROCEDURE_IMAGE = '/migraine-relief-injection-bethany-ok.jpg'
// Shared by the <Image> alt attributes and the ImageObject captions in the schema.
const BANNER_ALT =
  'Woman pressing her temples in migraine pain, seeking a migraine relief injection in Bethany, OK'
const PROCEDURE_IMAGE_ALT =
  'Woman on a sofa holding her forehead with migraine headache pain, needing migraine pain relief injection in Bethany, OK'

export const metadata = {
  // `absolute` skips the "%s | Ebenezer Health Clinic" template in app/layout.js
  // so the title is exactly the one supplied for this page.
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  keywords: [
    'Migraine Relief Injection in Bethany, OK',
    'Migraine Injection Bethany OK',
    'Migraine Relief Oklahoma City',
    'Migraine Pain Relief Injection',
    'Toradol Injection for Migraine',
    'Migraine Nausea Treatment',
    'Affordable Migraine Treatment Bethany',
    'Migraine Headache Treatment Near Oklahoma City',
  ],
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
    images: [BANNER_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [BANNER_IMAGE],
  },
}

// ─── Schema ───────────────────────────────────────────────────────────────────
// One @graph, cross-linked by @id, consistent with other service sub-pages
// (see app/iv-therapy/myers-cocktail/page.js for the pattern).

const BANNER_URL = `${SITE}${encodeURI(BANNER_IMAGE)}`
const PROCEDURE_IMAGE_URL = `${SITE}${encodeURI(PROCEDURE_IMAGE)}`

const migraineSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalWebPage',
      '@id': `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: PAGE_TITLE,
      headline: 'Migraine Relief Injection in Bethany, OK',
      description: PAGE_DESCRIPTION,
      inLanguage: 'en-US',
      isPartOf: { '@id': `${SITE}/injections#webpage` },
      breadcrumb: { '@id': `${PAGE_URL}#breadcrumb` },
      primaryImageOfPage: { '@id': `${PAGE_URL}#primaryimage` },
      about: [{ '@id': `${PAGE_URL}#procedure` }, { '@id': `${PAGE_URL}#condition` }],
      mainEntity: { '@id': `${PAGE_URL}#procedure` },
      mentions: [{ '@id': `${PAGE_URL}#toradol` }, { '@id': `${PAGE_URL}#zofran` }],
      provider: { '@id': `${SITE}/#organization` },
      areaServed: [
        { '@type': 'City', name: 'Bethany' },
        { '@type': 'City', name: 'Oklahoma City' },
        { '@type': 'State', name: 'Oklahoma' },
      ],
      medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patients' },
    },
    {
      // MedicalTherapy (a TherapeuticProcedure) so `drug` and `contraindication` are valid.
      '@type': 'MedicalTherapy',
      '@id': `${PAGE_URL}#procedure`,
      name: 'Migraine Relief Injection',
      alternateName: ['Migraine Injection', 'Toradol and Zofran Injection'],
      procedureType: 'https://schema.org/PercutaneousProcedure',
      description:
        'A provider-administered intramuscular injection combining Toradol (ketorolac) for acute migraine pain and Zofran (ondansetron) for nausea and vomiting, given after a brief medical evaluation at Ebenezer Health Clinic in Bethany, OK.',
      bodyLocation: 'Intramuscular',
      image: { '@id': `${PAGE_URL}#procedure-image` },
      preparation:
        'A brief medical evaluation in which the provider reviews your symptoms, medical history, current medications, allergies, and relevant health conditions to determine whether the injection is safe and appropriate for you.',
      howPerformed:
        'If treatment is appropriate, Toradol (ketorolac) and Zofran (ondansetron) are administered as an intramuscular (IM) injection by a qualified healthcare professional. The injection itself takes only a short time.',
      followup:
        'You may be asked to rest at the clinic while the medications begin taking effect. Before you leave, the provider explains precautions, possible side effects, and when to seek additional medical attention. Patients with frequent or recurring migraines may be advised to pursue further evaluation or an ongoing migraine management plan.',
      contraindication:
        'Not appropriate for everyone; the provider reviews your medical history before treatment. Tell the provider if you have kidney disease or reduced kidney function; stomach ulcers, gastrointestinal bleeding, or bleeding disorders; take blood thinners, aspirin, ibuprofen, naproxen, or other NSAIDs; have had an allergic reaction to NSAIDs or either medication; are pregnant, planning pregnancy, or breastfeeding; have a heart rhythm disorder such as long QT syndrome or take medications that affect heart rhythm; or have a history of heart disease, stroke, dehydration, or other significant medical conditions.',
      drug: [{ '@id': `${PAGE_URL}#toradol` }, { '@id': `${PAGE_URL}#zofran` }],
      provider: { '@id': `${SITE}/#organization` },
      areaServed: { '@type': 'City', name: 'Bethany' },
      offers: {
        '@type': 'Offer',
        name: 'Migraine Relief Injection',
        description:
          'Advertised flat fee for the Migraine Relief Injection. Contact the clinic to confirm whether additional evaluation or services involve separate charges.',
        price: '50',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: PAGE_URL,
        seller: { '@id': `${SITE}/#organization` },
      },
    },
    {
      '@type': 'MedicalCondition',
      '@id': `${PAGE_URL}#condition`,
      name: 'Migraine',
      alternateName: 'Migraine headache',
      description:
        'Migraine attacks can bring intense headache pain, nausea, vomiting, and sensitivity to light or sound.',
      signOrSymptom: [
        { '@type': 'MedicalSymptom', name: 'Headache' },
        { '@type': 'MedicalSymptom', name: 'Nausea' },
        { '@type': 'MedicalSymptom', name: 'Vomiting' },
        { '@type': 'MedicalSymptom', name: 'Sensitivity to light' },
        { '@type': 'MedicalSymptom', name: 'Sensitivity to sound' },
      ],
      possibleTreatment: { '@id': `${PAGE_URL}#procedure` },
      sameAs: 'https://en.wikipedia.org/wiki/Migraine',
    },
    {
      '@type': 'Drug',
      '@id': `${PAGE_URL}#toradol`,
      name: 'Toradol',
      alternateName: 'Ketorolac',
      nonProprietaryName: 'ketorolac',
      activeIngredient: 'Ketorolac',
      description:
        'A prescription nonsteroidal anti-inflammatory drug (NSAID) used for short-term management of moderate to severe acute pain. It helps reduce pain and inflammation and may be used by healthcare providers as part of acute migraine treatment.',
      drugClass: { '@type': 'DrugClass', name: 'Nonsteroidal anti-inflammatory drug (NSAID)' },
      administrationRoute: 'Intramuscular',
      prescriptionStatus: 'https://schema.org/PrescriptionOnly',
      warning:
        'May increase the risk of gastrointestinal bleeding, kidney problems, and cardiovascular complications. Intended for short-term acute pain management only, not routine or long-term migraine prevention. Has important pregnancy-related risks and restrictions.',
      sameAs: 'https://en.wikipedia.org/wiki/Ketorolac',
    },
    {
      '@type': 'Drug',
      '@id': `${PAGE_URL}#zofran`,
      name: 'Zofran',
      alternateName: 'Ondansetron',
      nonProprietaryName: 'ondansetron',
      activeIngredient: 'Ondansetron',
      description:
        'An anti-nausea medication that helps control nausea and vomiting. It may be especially useful when migraine symptoms make eating, drinking, or taking oral medication difficult.',
      drugClass: { '@type': 'DrugClass', name: 'Antiemetic (anti-nausea medication)' },
      administrationRoute: 'Intramuscular',
      prescriptionStatus: 'https://schema.org/PrescriptionOnly',
      warning:
        'May affect heart rhythm in susceptible patients, including those with long QT syndrome. A medical evaluation is necessary before treatment.',
      sameAs: 'https://en.wikipedia.org/wiki/Ondansetron',
    },
    {
      '@type': 'ImageObject',
      '@id': `${PAGE_URL}#primaryimage`,
      url: BANNER_URL,
      contentUrl: BANNER_URL,
      caption: BANNER_ALT,
    },
    {
      '@type': 'ImageObject',
      '@id': `${PAGE_URL}#procedure-image`,
      url: PROCEDURE_IMAGE_URL,
      contentUrl: PROCEDURE_IMAGE_URL,
      caption: PROCEDURE_IMAGE_ALT,
    },
    {
      '@type': 'FAQPage',
      '@id': `${PAGE_URL}#faq`,
      url: PAGE_URL,
      isPartOf: { '@id': `${PAGE_URL}#webpage` },
      mainEntity: migraineFaqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: 'Injections', item: `${SITE}/injections` },
        { '@type': 'ListItem', position: 3, name: 'Migraine Relief Injection', item: PAGE_URL },
      ],
    },
  ],
}

// ─── Content ──────────────────────────────────────────────────────────────────

const medications = [
  {
    icon: Zap,
    title: 'Toradol (Ketorolac) – Migraine Pain Management',
    description:
      'Toradol is a prescription nonsteroidal anti-inflammatory drug (NSAID) used for short-term management of moderate to severe acute pain. It helps reduce pain and inflammation and may be used by healthcare providers as part of acute migraine treatment.',
  },
  {
    icon: Pill,
    title: 'Zofran (Ondansetron) – Nausea and Vomiting Relief',
    description:
      'Zofran is an anti-nausea medication that helps control nausea and vomiting. It may be especially useful when migraine symptoms make eating, drinking, or taking oral medication difficult.',
  },
]

const benefits = [
  {
    icon: Syringe,
    title: 'Relief Without Swallowing Pills',
    description:
      'Because the medications are administered by injection, treatment does not depend on your ability to swallow or retain oral medication.',
  },
  {
    icon: Zap,
    title: 'Addresses Pain and Nausea',
    description:
      'Toradol helps manage acute pain, while Zofran targets nausea and vomiting, allowing treatment to address two troublesome migraine symptoms.',
  },
  {
    icon: Clock,
    title: 'Convenient In-Clinic Administration',
    description:
      'The injection itself takes only a short time and is administered by a healthcare professional in a clinical setting.',
  },
  {
    icon: Stethoscope,
    title: 'Individualized Provider Evaluation',
    description:
      'Our provider reviews your symptoms, medical history, and potential medication risks before recommending treatment.',
  },
  {
    icon: BadgeDollarSign,
    title: 'Transparent, Affordable Pricing',
    description:
      'Our Migraine Relief Injection is offered for a flat fee of $50, helping you understand the treatment cost before your visit.',
  },
  {
    icon: MapPin,
    title: 'Local, Compassionate Healthcare',
    description:
      'Located in Bethany, Oklahoma, Ebenezer Health Clinic provides accessible, patient-centered healthcare for individuals in Bethany, Oklahoma City, and surrounding communities.',
  },
]

const considerIf = [
  'Migraine headache pain that interferes with daily activities',
  'Nausea or vomiting associated with a migraine attack',
  'Difficulty taking or keeping down oral medication',
  'Migraine symptoms that have not responded adequately to your usual treatment',
  'A need for provider-guided evaluation and acute symptom management',
]

const visitSteps = [
  {
    icon: CalendarCheck,
    step: '1',
    title: 'Schedule Your Visit',
    paragraphs: [
      'Call our clinic at (405) 349-8188 to arrange your visit and discuss appointment availability.',
    ],
  },
  {
    icon: Stethoscope,
    step: '2',
    title: 'Brief Medical Evaluation',
    paragraphs: [
      'Our healthcare provider reviews your symptoms, medical history, current medications, allergies, and any relevant health conditions.',
      'This evaluation helps determine whether the Migraine Relief Injection is safe and appropriate for you.',
    ],
  },
  {
    icon: Syringe,
    step: '3',
    title: 'Injection Administration',
    paragraphs: [
      'If treatment is appropriate, the medications are administered intramuscularly by a qualified healthcare professional.',
      'The injection process itself takes only a short time.',
    ],
  },
  {
    icon: Bed,
    step: '4',
    title: 'Rest and Observation',
    paragraphs: [
      'You may be asked to rest at the clinic while the medications begin taking effect. Our team will provide guidance about what to expect and monitor you as clinically indicated.',
    ],
  },
  {
    icon: ClipboardList,
    step: '5',
    title: 'Aftercare and Next Steps',
    paragraphs: [
      'Before you leave, our provider will explain any necessary precautions, possible side effects, and when to seek additional medical attention.',
      'If you experience frequent or recurring migraines, our provider may recommend further evaluation or an ongoing migraine management plan.',
    ],
  },
]

const informProvider = [
  'Have kidney disease or reduced kidney function',
  'Have a history of stomach ulcers, gastrointestinal bleeding, or bleeding disorders',
  'Take blood thinners, aspirin, ibuprofen, naproxen, or other NSAIDs',
  'Have experienced an allergic reaction to NSAIDs or either medication',
  'Are pregnant, planning pregnancy, or breastfeeding',
  'Have a heart rhythm disorder, including long QT syndrome',
  'Take medications that may affect your heart rhythm',
  'Have a history of heart disease, stroke, dehydration, or other significant medical conditions',
]

const whyChoosePoints = [
  {
    title: 'Experienced Healthcare Provider',
    description:
      'Our clinic offers provider-led evaluation and treatment, with attention to your medical history, symptoms, and individual needs.',
  },
  {
    title: 'Patient-Centered Approach',
    description:
      'We take the time to understand your concerns and determine whether the Migraine Relief Injection is a suitable treatment option.',
  },
  {
    title: 'Accessible Local Healthcare',
    description:
      'Our Bethany location serves patients from Oklahoma City and nearby communities, making local migraine treatment more convenient.',
  },
  {
    title: 'Transparent Treatment Pricing',
    description:
      'With an advertised treatment price of $50, patients can make informed decisions about their care.',
  },
  {
    title: 'Care That Goes Beyond Immediate Symptoms',
    description:
      'For patients experiencing recurring migraines, our team can discuss follow-up care and additional evaluation when needed.',
  },
]

// ─── Small presentational helpers ─────────────────────────────────────────────

function Eyebrow({ children }) {
  return (
    <span
      className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
      style={{ color: 'var(--primary)' }}
    >
      {children}
    </span>
  )
}

function AccentBars({ className = 'mb-6', centered = false }) {
  return (
    <div
      className={`flex items-center gap-2 ${centered ? 'justify-center' : ''} ${className}`}
      aria-hidden="true"
    >
      <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
      <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
      <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
    </div>
  )
}

const softCard = {
  backgroundColor: 'rgba(151,206,204,0.08)',
  border: '1px solid rgba(26,166,183,0.12)',
}

export default function MigraineReliefInjectionPage() {
  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(migraineSchema) }}
      />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden -mt-[112px] sm:-mt-[128px] lg:-mt-[144px] pt-[112px] sm:pt-[128px] lg:pt-[144px]"
      >
        <Image
          src={BANNER_IMAGE}
          alt={BANNER_ALT}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[72%_center] pointer-events-none"
        />
        {/* Desktop: solid white on the text side fading to the photo on the right */}
        <div
          className="absolute inset-0 hidden sm:block"
          style={{
            background:
              'linear-gradient(to right, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.88) 38%, rgba(255,255,255,0.30) 62%, rgba(26,166,183,0.14) 100%)',
          }}
          aria-hidden="true"
        />
        {/* Mobile: top-to-bottom fade so text stays legible over a narrow crop */}
        <div
          className="absolute inset-0 sm:hidden"
          style={{
            background:
              'linear-gradient(to bottom, rgba(255,255,255,0.90) 0%, rgba(255,255,255,0.94) 55%, rgba(255,255,255,0.82) 100%)',
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
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
              <Link href="/injections" className="hover:text-primary transition-colors">
                Injections
              </Link>
              <span aria-hidden="true">/</span>
              <span style={{ color: 'var(--primary)' }}>Migraine Relief Injection</span>
            </nav>

            <Eyebrow>Injections &middot; Migraine Relief &middot; Bethany, OK</Eyebrow>

            <h1
              className="text-4xl md:text-5xl font-bold mb-5 leading-tight"
              style={{ color: 'var(--navy)' }}
            >
              Migraine Relief Injection in Bethany, OK
            </h1>

            <p
              className="text-lg md:text-xl font-semibold leading-snug mb-4 max-w-2xl"
              style={{ color: 'var(--navy)' }}
            >
              Why Spend Your Day in a Dark Room with a Migraine?{' '}
              <span style={{ color: 'var(--primary)' }}>
                Get Fast-Acting Relief for Pain and Nausea &mdash; Just $50!
              </span>
            </p>

            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl">
              A migraine can interrupt your entire day, bringing intense headaches, nausea,
              vomiting, and sensitivity to light or sound. When taking oral medication becomes
              difficult, getting the right care can make a meaningful difference.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto text-center"
              >
                Schedule Your Migraine Relief Visit
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

      {/* ── INTRO / FLAT FEE ─────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        aria-label="About the Migraine Relief Injection at Ebenezer Health Clinic"
      >
        <Image
          src="/answer_block.webp"
          alt="Stethoscope wrapped around a smartphone, representing provider evaluation for a migraine relief injection at Ebenezer Health Clinic"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(255,255,255,0.85)' }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
                At Ebenezer Health Clinic, we offer a Migraine Relief Injection that combines two
                prescription medications,{' '}
                <strong style={{ color: 'var(--navy)' }}>Toradol (ketorolac)</strong> and{' '}
                <strong style={{ color: 'var(--navy)' }}>Zofran (ondansetron)</strong>, to help
                manage migraine pain and associated nausea.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Administered as an intramuscular (IM) injection, this treatment provides an
                alternative to oral medication when nausea or vomiting makes swallowing or keeping
                pills down difficult.
              </p>
            </div>

            <div
              className="rounded-2xl p-8 md:p-10 text-center"
              style={{
                backgroundColor: 'rgba(255,255,255,0.90)',
                border: '1px solid rgba(26,166,183,0.20)',
                boxShadow: '0 4px 28px rgba(26,166,183,0.12)',
              }}
            >
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: 'var(--primary)' }}
              >
                Flat fee
              </p>
              <p
                className="text-2xl md:text-3xl font-bold leading-snug mb-6"
                style={{ color: 'var(--navy)' }}
              >
                One Injection. Two Medications.
                <br />
                <span style={{ color: 'var(--primary)' }}>One Flat Fee of $50.</span>
              </p>
              <div className="flex flex-col gap-3 max-w-sm mx-auto">
                <Link
                  href="/contact"
                  className="btn-primary text-base px-6 py-3.5 w-full text-center"
                >
                  Schedule Your Migraine Relief Visit
                </Link>
                <a
                  href="tel:+14053498188"
                  className="btn-outline text-base px-6 py-3.5 w-full text-center whitespace-nowrap"
                >
                  Call (405) 349-8188
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT IS A MIGRAINE RELIEF INJECTION ──────────────────── */}
      <section className="bg-white" aria-labelledby="what-is-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-10">
            <div>
              <Eyebrow>The Treatment</Eyebrow>
              <h2
                id="what-is-heading"
                className="text-3xl md:text-4xl font-bold mb-3"
                style={{ color: 'var(--navy)' }}
              >
                What Is a Migraine Relief Injection?
              </h2>
              <AccentBars className="mb-6" />
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
                Our Migraine Relief Injection is a provider-administered treatment designed to
                address two common symptoms of migraine attacks: headache pain and nausea.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                The injection combines two medications with complementary purposes:
              </p>
            </div>

            {/* Woman with a migraine */}
            <div
              className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl"
              style={{
                border: '1px solid rgba(26,166,183,0.15)',
                boxShadow: '0 8px 40px rgba(26,166,183,0.12)',
              }}
            >
              <Image
                src={PROCEDURE_IMAGE}
                alt={PROCEDURE_IMAGE_ALT}
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover object-[35%_center]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch mb-8">
            {medications.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-2xl p-7 md:p-8 flex flex-col h-full"
                style={softCard}
              >
                <div
                  className="flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: 'rgba(26,166,183,0.12)' }}
                  aria-hidden="true"
                >
                  <Icon className="h-5 w-5" style={{ color: 'var(--primary)' }} />
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--navy)' }}>
                  {title}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>

          <div
            className="rounded-2xl p-7 md:p-8"
            style={{
              background:
                'linear-gradient(135deg, rgba(26,166,183,0.06) 0%, rgba(151,206,204,0.18) 100%)',
              border: '1px solid rgba(26,166,183,0.20)',
            }}
          >
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-3">
              Together, these medications may help relieve migraine-related symptoms without
              requiring oral medication.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Treatment is provided following an evaluation to determine whether the medications
              are appropriate for your individual health needs.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE AN INJECTION ──────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        aria-labelledby="why-injection-heading"
        style={{
          backgroundImage: "url('/body_bg2.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(232,247,247,0.80)' }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="mb-10 md:mb-12 max-w-3xl">
            <Eyebrow>Benefits</Eyebrow>
            <h2
              id="why-injection-heading"
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ color: 'var(--navy)' }}
            >
              Why Choose an Injection for Migraine Relief?
            </h2>
            <AccentBars className="mb-6" />
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
              Migraine attacks can make everyday activities difficult. For some patients, severe
              nausea or vomiting makes oral medication an inconvenient or ineffective option.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              An intramuscular migraine injection offers an alternative route of medication
              administration.
            </p>
          </div>

          <h3
            className="text-xl md:text-2xl font-semibold mb-6"
            style={{ color: 'var(--navy)' }}
          >
            Key Benefits of Our Migraine Relief Injection
          </h3>

          <ul
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch"
            role="list"
          >
            {benefits.map(({ icon: Icon, title, description }, index) => (
              <li
                key={title}
                className="flex flex-col h-full rounded-2xl p-6 md:p-7 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.88)',
                  border: '1px solid rgba(255,255,255,0.92)',
                  borderTop: '3px solid var(--primary)',
                  boxShadow: '0 2px 18px rgba(26,166,183,0.09)',
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(26,166,183,0.12)' }}
                    aria-hidden="true"
                  >
                    <Icon className="h-5 w-5" style={{ color: 'var(--primary)' }} />
                  </div>
                  <span
                    className="text-sm font-bold tracking-widest"
                    style={{ color: 'rgba(26,166,183,0.55)' }}
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h4 className="text-lg font-semibold leading-snug mb-2" style={{ color: 'var(--navy)' }}>
                  {title}
                </h4>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── WHEN SHOULD YOU CONSIDER ─────────────────────────────── */}
      <section className="bg-white" aria-labelledby="when-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-10 md:mb-12">
            <div>
              <Eyebrow>Is It For You?</Eyebrow>
              <h2
                id="when-heading"
                className="text-3xl md:text-4xl font-bold mb-3"
                style={{ color: 'var(--navy)' }}
              >
                When Should You Consider a Migraine Relief Injection?
              </h2>
              <AccentBars className="mb-6" />
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
                Migraine symptoms can vary from person to person. Some individuals experience
                throbbing headache pain, while others struggle with nausea, vomiting, or
                sensitivity to light and sound.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                A Migraine Relief Injection may be an option if you are experiencing:
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
              <ul className="space-y-4">
                {considerIf.map((item) => (
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
            </div>
          </div>

          {/* Emergency notice */}
          <div
            className="mx-auto max-w-3xl rounded-2xl p-6 md:p-8 flex items-start gap-4"
            style={{
              backgroundColor: 'rgba(254,242,242,0.60)',
              border: '2px solid rgba(239,68,68,0.25)',
              boxShadow: '0 4px 24px rgba(239,68,68,0.08)',
            }}
            role="note"
          >
            <div
              className="flex-shrink-0 inline-flex h-11 w-11 items-center justify-center rounded-full"
              style={{ backgroundColor: 'rgba(239,68,68,0.10)' }}
              aria-hidden="true"
            >
              <AlertCircle className="h-6 w-6 text-red-500" />
            </div>
            <p className="text-base text-gray-700 leading-relaxed">
              <strong className="text-red-600">Important:</strong> Not every severe headache is a
              migraine. A sudden, extremely severe headache, a new headache with weakness,
              confusion, vision loss, fever with a stiff neck, or other concerning neurological
              symptoms requires emergency medical evaluation. Do not delay emergency care to
              schedule an injection.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHAT TO EXPECT ───────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        aria-labelledby="what-to-expect-heading"
        style={{
          backgroundImage: "url('/body_bg.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(232,247,247,0.88)' }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-3xl mb-10 md:mb-12">
            <Eyebrow>Your Visit</Eyebrow>
            <h2
              id="what-to-expect-heading"
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ color: 'var(--navy)' }}
            >
              What to Expect During Your Migraine Relief Visit
            </h2>
            <AccentBars className="mb-6" />
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              At Ebenezer Health Clinic, we aim to make the treatment process straightforward,
              comfortable, and focused on your well-being.
            </p>
          </div>

          <ol className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-10 items-stretch" role="list">
            {visitSteps.map(({ icon: Icon, step, title, paragraphs }) => (
              <li
                key={step}
                className={`rounded-2xl p-6 md:p-7 flex flex-col h-full backdrop-blur-sm ${
                  step === String(visitSteps.length) ? 'lg:col-span-2' : ''
                }`}
                style={{
                  backgroundColor: 'rgba(255,255,255,0.88)',
                  border: '1px solid rgba(26,166,183,0.14)',
                  boxShadow: '0 2px 18px rgba(26,166,183,0.08)',
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
                <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--navy)' }}>
                  Step {step}: {title}
                </h3>
                <div className="space-y-2">
                  {paragraphs.map((text) => (
                    <p key={text} className="text-sm md:text-base text-gray-600 leading-relaxed">
                      {text}
                    </p>
                  ))}
                </div>
              </li>
            ))}
          </ol>

          <div className="flex flex-col sm:flex-row sm:items-stretch gap-3">
            <Link
              href="/contact"
              className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto flex items-center justify-center text-center"
            >
              Schedule Your Migraine Relief Visit
            </Link>
            <a
              href="tel:+14053498188"
              className="btn-outline text-base px-7 py-3.5 w-full sm:w-auto flex items-center justify-center text-center"
            >
              Call (405) 349-8188
            </a>
          </div>
        </div>
      </section>

      {/* ── IS IT RIGHT FOR YOU ──────────────────────────────────── */}
      <section className="bg-white" aria-labelledby="right-for-you-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <Eyebrow>Safety First</Eyebrow>
              <h2
                id="right-for-you-heading"
                className="text-3xl md:text-4xl font-bold mb-3"
                style={{ color: 'var(--navy)' }}
              >
                Is the Migraine Relief Injection Right for You?
              </h2>
              <AccentBars className="mb-6" />
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
                Although Toradol and Zofran are commonly used prescription medications, they are
                not appropriate for everyone.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
                Our provider will review your medical history and medication use to determine
                whether this treatment is suitable.
              </p>

              <div
                className="rounded-2xl p-5 flex items-start gap-3"
                style={{
                  backgroundColor: 'rgba(26,166,183,0.06)',
                  border: '1px solid rgba(26,166,183,0.20)',
                }}
                role="note"
              >
                <ShieldCheck
                  className="h-5 w-5 mt-0.5 flex-shrink-0"
                  style={{ color: 'var(--primary)' }}
                  aria-hidden="true"
                />
                <p className="text-base text-gray-700 leading-relaxed">
                  Your safety always comes first. If the injection is not appropriate, our
                  provider can discuss other options or recommend a higher level of care.
                </p>
              </div>
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
                Before receiving treatment, please inform our healthcare provider if you:
              </p>
              <ul className="space-y-4">
                {informProvider.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Info
                      className="h-5 w-5 mt-0.5 flex-shrink-0"
                      style={{ color: 'var(--primary)' }}
                      aria-hidden="true"
                    />
                    <span className="text-gray-700 leading-snug text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────────────────────── */}
      <section
        aria-labelledby="pricing-heading"
        style={{ backgroundColor: 'rgba(232,247,247,0.60)' }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <Eyebrow>Pricing</Eyebrow>
              <h2
                id="pricing-heading"
                className="text-3xl md:text-4xl font-bold mb-3"
                style={{ color: 'var(--navy)' }}
              >
                Affordable Migraine Relief Injection &ndash; Only $50
              </h2>
              <AccentBars className="mb-6" />
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
                We believe patients deserve straightforward information about healthcare costs.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
                At Ebenezer Health Clinic, we focus on making healthcare accessible, transparent,
                and centered around your needs.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                For questions about pricing, appointment availability, or whether additional
                services may be necessary, please contact our clinic before your visit.
              </p>
            </div>

            <div
              className="rounded-2xl p-8 md:p-10 text-center text-white"
              style={{
                background: 'linear-gradient(135deg, var(--primary) 0%, #0F7F8E 100%)',
                boxShadow: '0 12px 40px rgba(26,166,183,0.30)',
              }}
            >
              <p className="text-sm font-semibold uppercase tracking-widest mb-2 text-white/80">
                Migraine Relief Injection
              </p>
              <p className="text-6xl md:text-7xl font-bold leading-none mb-3">$50</p>
              <p className="text-base md:text-lg text-white/90 leading-relaxed mb-7">
                Our advertised price is a flat $50 for the migraine injection treatment.
              </p>
              <a
                href="tel:+14053498188"
                className="inline-flex items-center justify-center gap-2 rounded-[0.625rem] bg-white px-7 py-3.5 text-base font-semibold w-full sm:w-auto transition-all hover:bg-gray-50 hover:-translate-y-px"
                style={{ color: 'var(--navy)' }}
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call (405) 349-8188 to Schedule Your Visit
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE EBENEZER HEALTH CLINIC ────────────────────── */}
      <section
        className="relative overflow-hidden"
        aria-labelledby="why-ebenezer-heading"
        style={{
          backgroundImage: "url('/body_bg.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(232,247,247,0.92)' }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="mb-10 md:mb-14 max-w-3xl">
            <h2
              id="why-ebenezer-heading"
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ color: 'var(--navy)' }}
            >
              Why Choose Ebenezer Health Clinic for Migraine Treatment?
            </h2>
            <AccentBars className="mb-6" />
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
              Finding appropriate care during a migraine attack can be challenging, especially
              when headache pain and nausea make it difficult to manage everyday activities.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              At Ebenezer Health Clinic, we strive to provide convenient, compassionate, and
              affordable medical care.
            </p>
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
                  <h3 className="font-semibold leading-snug" style={{ color: 'var(--navy)' }}>
                    {point.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600 leading-relaxed">{point.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden bg-white"
        aria-labelledby="faq-heading"
      >
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center mb-12">
            <Eyebrow>FAQ</Eyebrow>
            <h2
              id="faq-heading"
              className="text-3xl md:text-4xl font-bold"
              style={{ color: 'var(--navy)' }}
            >
              Frequently Asked Questions About Migraine Relief Injections
            </h2>
          </div>

          <MigraineReliefFAQAccordion />
        </div>
      </section>

      {/* ── FINAL CTA + VISIT ────────────────────────────────────── */}
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

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-3xl mx-auto text-center mb-10 md:mb-12">
            <h2
              id="final-cta-heading"
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ color: 'var(--primary)' }}
            >
              Get Back to Your Day with Professional Migraine Care
            </h2>
            <AccentBars className="mb-6" centered />
            <p
              className="text-xl md:text-2xl font-semibold mb-5"
              style={{ color: 'var(--navy)' }}
            >
              Migraine Pain and Nausea? We&apos;re Here to Help.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
              You don&apos;t have to rely on oral medication when migraine-related nausea makes it
              difficult to take or keep down pills.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
              At Ebenezer Health Clinic, our $50 Migraine Relief Injection offers a convenient,
              provider-administered option for managing acute migraine pain and associated
              nausea.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Our team is committed to helping you understand your treatment options and receive
              appropriate, compassionate care.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Contact card */}
            <div
              className="rounded-2xl p-7 md:p-8 flex flex-col"
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid rgba(26,166,183,0.18)',
                boxShadow: '0 4px 24px rgba(26,166,183,0.10)',
              }}
            >
              <p
                className="inline-flex self-start items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold mb-6"
                style={{ backgroundColor: 'rgba(26,166,183,0.10)', color: 'var(--navy)' }}
              >
                <Syringe className="h-4 w-4" style={{ color: 'var(--primary)' }} aria-hidden="true" />
                Migraine Relief Injection &ndash; $50
              </p>

              <ul className="space-y-5 mb-8">
                <li className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--primary)' }} aria-hidden="true" />
                  <address className="not-italic">
                    <p className="font-semibold" style={{ color: 'var(--navy)' }}>
                      Ebenezer Health Clinic
                    </p>
                    <p className="text-sm text-gray-600 mt-0.5">7415 NW 23rd Street</p>
                    <p className="text-sm text-gray-600">Bethany, OK 73008</p>
                  </address>
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
              </ul>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-auto">
                <Link
                  href="/contact"
                  className="btn-primary text-base px-6 py-3.5 w-full sm:w-auto text-center"
                >
                  Schedule Your Migraine Relief Visit
                </Link>
                <a
                  href="tel:+14053498188"
                  className="btn-outline text-base px-6 py-3.5 w-full sm:w-auto text-center"
                >
                  Call Now &ndash; (405) 349-8188
                </a>
              </div>
            </div>

            {/* Google Map embed */}
            <div
              className="relative w-full min-h-[320px] rounded-2xl overflow-hidden"
              style={{ border: '1px solid rgba(26,166,183,0.15)' }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3997.0692773992737!2d-97.64372800000001!3d35.494093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b20f8f4f23cb79%3A0x2f141cb188297bec!2sEbenezer%20Health%20Clinic!5e1!3m2!1sen!2sin!4v1793777007369!5m2!1sen!2sin"
                title="Ebenezer Health Clinic location map"
                className="absolute inset-0 h-full w-full"
                style={{ border: 0, minHeight: '320px' }}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── EMERGENCY DISCLAIMER ─────────────────────────────────── */}
      <section
        aria-label="Emergency care notice"
        style={{ backgroundColor: 'rgba(254,242,242,0.60)' }}
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8 md:py-10">
          <div className="flex items-start sm:items-center gap-4 justify-center text-left">
            <AlertCircle className="h-6 w-6 flex-shrink-0 text-red-500" aria-hidden="true" />
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              If you experience a sudden severe headache, new neurological symptoms, or another
              medical emergency, seek immediate emergency care rather than waiting for a clinic
              appointment.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
