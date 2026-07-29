import Link from 'next/link'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Award, CreditCard, Globe, Heart, MapPin, Quote, ShieldCheck, User } from 'lucide-react'

export const metadata = {
  title: {
    absolute: 'About Ebenezer Health Clinic | Dr. Susan George, DNP, APRN — OKC',
  },
  description:
    'Meet Dr. Susan George, DNP, APRN, BC-ADM — a women\'s health nurse practitioner in OKC providing in-person and online care across Oklahoma. Board Certified in diabetes management.',
  alternates: {
    canonical: 'https://www.ebenezerhealthclinic.com/about',
  },
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const CREDENTIALS = [
  'Doctor of Nursing Practice (DNP)',
  'Advanced Practice Registered Nurse (APRN)',
  'Board Certified in Advanced Diabetes Management (BC-ADM)',
  "Women's Health Provider serving Oklahoma City",
  'In-person care in OKC + telehealth across Oklahoma',
]

const VALUES = [
  {
    icon: Heart,
    title: 'Faith-Driven Care',
    body: 'Compassion, integrity, and dignity are at the heart of everything we do.',
  },
  {
    icon: Globe,
    title: 'Accessible Telemedicine',
    body: 'We serve patients across all of Oklahoma, metro and rural, through convenient, secure video visits.',
  },
  {
    icon: CreditCard,
    title: 'Transparent Pricing',
    body: 'Cash-pay with flat fees you know before you book. No surprise bills.',
  },
  {
    icon: User,
    title: 'Personalized Attention',
    body: 'We take time to listen, understand, and support your unique needs.',
  },
  {
    icon: ShieldCheck,
    title: 'Evidence-Based Medicine',
    body: 'Clinical excellence delivered with warmth and respect.',
  },
]

// ─── Schema ───────────────────────────────────────────────────────────────────

const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Ebenezer Telehealth',
  url: 'https://www.ebenezerhealthclinic.com/about',
  mainEntity: {
    '@type': 'Person',
    '@id': 'https://www.ebenezerhealthclinic.com/#dr-susan-george',
    name: 'Dr. Susan George',
    honorificPrefix: 'Dr.',
    jobTitle: "Women's Health Nurse Practitioner, DNP, APRN, BC-ADM",
    description:
      'Dr. Susan George is a Doctor of Nursing Practice (DNP) and Advanced Practice Registered Nurse (APRN) who founded Ebenezer Telehealth to bring honest, personal care to women and families in Oklahoma. As a nurse practitioner in Oklahoma City, she specializes in women\'s health and is Board Certified in Advanced Diabetes Management (BC-ADM). Ebenezer Telehealth offers in-person care on Saturdays in OKC and telehealth across Oklahoma.',
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Doctor of Nursing Practice (DNP)',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Advanced Practice Registered Nurse (APRN)',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Board Certified in Advanced Diabetes Management (BC-ADM)',
      },
    ],
    knowsAbout: [
      "Women's Health",
      'Weight Loss Management',
      'Diabetes Management',
      'Minor Illness Treatment',
      'Telehealth',
    ],
    worksFor: { '@id': 'https://www.ebenezerhealthclinic.com/#organization' },
    // TODO: Update image URL to final optimised asset path when confirmed
    image: 'https://www.ebenezerhealthclinic.com/dr-susan-george-oklahoma-telehealth.webp',
  },
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />

      {/* ════════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden border-b border-gray-100 -mt-[96px] sm:-mt-[112px] lg:-mt-[128px] pt-[96px] sm:pt-[112px] lg:pt-[128px]"
        style={{
          backgroundImage: "url('/about.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Mobile: uniform light overlay for readability */}
        <div
          className="absolute inset-0 lg:hidden"
          style={{ backgroundColor: 'rgba(255,255,255,0.87)' }}
          aria-hidden="true"
        />
        {/* Desktop: teal-tinted left (image shows) → white-ish right (text readable) */}
        <div
          className="absolute inset-0 hidden lg:block"
          style={{
            background:
              'linear-gradient(to right, rgba(26,166,183,0.42) 0%, rgba(255,255,255,0.86) 52%)',
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Empty left col — banner image visible on desktop */}
            <div className="hidden lg:block" aria-hidden="true" />

            {/* Content shifted to the right */}
            <div>
              <span
                className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: 'var(--primary)' }}
              >
                About Us
              </span>
              <h1
                className="text-4xl md:text-5xl font-bold mb-5 leading-tight"
                style={{ color: 'var(--navy)' }}
              >
                About Ebenezer Telehealth
                <br />
                <span className="text-3xl md:text-4xl" style={{ color: 'var(--primary)' }}>
                  Dr. Susan George, DNP, APRN
                </span>
                <br />
                <span className="text-2xl md:text-3xl font-medium text-gray-500">
                  Oklahoma City
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Faith-driven, evidence-based telehealth care for women and families
                across Oklahoma.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          OUR MISSION
      ════════════════════════════════════════════════════════ */}
      <section className="bg-gray-50" aria-labelledby="mission-heading">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: 'var(--primary)' }}
          >
            Our Mission
          </span>
          <h2
            id="mission-heading"
            className="text-3xl md:text-4xl font-bold mb-5"
            style={{ color: 'var(--navy)' }}
          >
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Ebenezer Telehealth exists to make quality, compassionate healthcare
            accessible to Oklahoma women and families, whether in person here
            in Oklahoma City or online from wherever you are. We believe care should
            be delivered with integrity, dignity, and a personal touch that reflects
            our heart of faith.
          </p>

          {/* Answer-first AEO/GEO paragraph */}
          <div
            className="rounded-xl p-6 border-l-4"
            style={{
              backgroundColor: 'rgba(151,206,204,0.15)',
              borderColor: 'var(--primary)',
            }}
          >
            <p className="text-base text-gray-700 leading-relaxed">
              Ebenezer Telehealth is an Oklahoma City medical practice serving women
              and families with in-person care on Saturdays in OKC and telehealth
              across Oklahoma. Our care is led by{' '}
              <strong className="font-semibold text-gray-900">
                Dr. Susan George, DNP, APRN, BC-ADM
              </strong>
              , a women&apos;s health nurse practitioner in Oklahoma City who
              is Board Certified in Advanced Diabetes Management.
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          DR. SUSAN GEORGE
      ════════════════════════════════════════════════════════ */}
      <section
        style={{ backgroundColor: 'var(--cream)' }}
        aria-labelledby="provider-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left: Bio & credentials */}
            <div className="flex flex-col gap-7 order-2 lg:order-1">

              <div>
                <span
                  className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
                  style={{ color: 'var(--primary)' }}
                >
                  Your Provider
                </span>
                <h2
                  id="provider-heading"
                  className="text-3xl md:text-4xl font-bold mb-5"
                  style={{ color: 'var(--navy)' }}
                >
                  Dr. Susan George, DNP, APRN, a Women&apos;s Health Nurse
                  Practitioner in OKC
                </h2>
                <div className="space-y-4">
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    Dr. Susan George is a Doctor of Nursing Practice (DNP) and
                    Advanced Practice Registered Nurse (APRN) who founded Ebenezer
                    Telehealth to bring honest, personal care to the people who need
                    it. As a nurse practitioner in OKC, she specializes in
                    women&apos;s health and is Board Certified in Advanced Diabetes
                    Management (BC-ADM), a credential reflecting deep expertise
                    in metabolic health, including the hormonal and insulin-related
                    factors that affect weight and well-being. It&apos;s this
                    combination of women&apos;s health plus real metabolic
                    knowledge that shapes how she cares for every patient.
                  </p>
                </div>
              </div>

              {/* Credentials */}
              <div>
                <h3
                  className="text-sm font-semibold uppercase tracking-wider mb-3"
                  style={{ color: 'var(--primary)' }}
                >
                  Credentials &amp; Details
                </h3>
                <ul className="space-y-2.5">
                  {CREDENTIALS.map((cred) => (
                    <li key={cred} className="flex items-start gap-2.5">
                      <Award
                        className="h-4 w-4 mt-0.5 flex-shrink-0"
                        style={{ color: 'var(--primary)' }}
                        aria-hidden="true"
                      />
                      <span className="text-sm text-gray-700">{cred}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quote */}
              <figure
                className="rounded-xl p-6 border-l-4"
                style={{
                  backgroundColor: 'rgba(151,206,204,0.15)',
                  borderColor: 'var(--primary)',
                }}
              >
                <Quote
                  className="h-6 w-6 mb-3"
                  style={{ color: 'var(--primary)' }}
                  aria-hidden="true"
                />
                <blockquote className="text-gray-700 italic leading-relaxed">
                  &ldquo;I want every woman and family in Oklahoma to have honest,
                  compassionate care they can actually access, whether
                  that&apos;s sitting across from me on a Saturday or meeting
                  online from home.&rdquo;
                </blockquote>
                <figcaption
                  className="mt-3 text-sm font-semibold"
                  style={{ color: 'var(--navy)' }}
                >
                  Dr. Susan George, DNP, APRN, BC-ADM
                </figcaption>
              </figure>

              {/* Location */}
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <MapPin
                  className="h-4 w-4 flex-shrink-0"
                  style={{ color: 'var(--primary)' }}
                  aria-hidden="true"
                />
                Based in Oklahoma City, OK. Serving patients throughout Oklahoma
                via in-person care on Saturdays and secure telehealth.
              </div>
            </div>

            {/* Right: Photo + badge chips */}
            <div className="flex flex-col items-center gap-5 order-1 lg:order-2">
              <div className="relative w-full max-w-sm lg:max-w-full mx-auto rounded-2xl overflow-hidden aspect-[4/5] shadow-md">
                <Image
                  src="/dr-susan-george-oklahoma-telehealth.webp"
                  alt="Dr. Susan George, DNP, APRN, provider at Ebenezer Telehealth in Oklahoma"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="mint">DNP</Badge>
                <Badge variant="mint">APRN</Badge>
                <Badge variant="mint">BC-ADM</Badge>
                <Badge variant="seafoam">Women&apos;s Health</Badge>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          WHAT WE STAND FOR
      ════════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        aria-labelledby="values-heading"
        style={{
          backgroundImage: "url('/body_bg.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay — matches WhyChooseUs */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(232,247,247,0.82)' }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center mb-12">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--primary)' }}
            >
              Our Values
            </span>
            <h2
              id="values-heading"
              className="text-3xl md:text-4xl font-bold"
              style={{ color: 'var(--navy)' }}
            >
              What We Stand For
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {VALUES.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex-none rounded-2xl p-6 flex flex-col gap-4 bg-white shadow-sm"
                style={{ border: '1px solid rgba(26,166,183,0.10)' }}
              >
                <div
                  className="h-10 w-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'rgba(26,166,183,0.08)' }}
                  aria-hidden="true"
                >
                  <Icon className="h-5 w-5" style={{ color: 'var(--primary)' }} />
                </div>
                <div>
                  <p
                    className="font-semibold mb-1.5"
                    style={{ color: 'var(--navy)' }}
                  >
                    {title}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          FINAL CTA — matches FinalCTA component style
      ════════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: '#ffffff' }}
        aria-labelledby="about-cta-heading"
      >
        {/* Decorative circles — identical to FinalCTA component */}
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
            id="about-cta-heading"
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: 'var(--primary)' }}
          >
            Ready to Experience the Difference?
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Book your visit with Dr. Susan George. Same-day appointments often
            available.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="btn-primary text-base px-8 py-3.5 w-full sm:w-auto"
            >
              Book Your Visit
            </Link>
            <a
              href="tel:+14053498188"
              className="inline-flex items-center justify-center gap-2 text-gray-700 hover:text-primary font-semibold text-base transition-colors w-full sm:w-auto"
              aria-label="Call Ebenezer Telehealth at (405) 349-8188"
            >
              Call (405) 349-8188
            </a>
          </div>

          {/* NAP reinforcement */}
          <p className="mt-10 text-sm text-gray-500">
            Ebenezerhealth Clinic &middot; Oklahoma City, OK &middot; (405)&nbsp;349-8188 &middot; ebenezerhealthclinic.com
          </p>
        </div>
      </section>
    </>
  )
}
