import { Phone, MapPin, Mail, Clock, CalendarDays, Globe, CheckCircle, CreditCard, Shield, Building2 } from 'lucide-react'

export const metadata = {
  title: {
    absolute: 'Walk-In Clinic in Oklahoma City | Book or Visit | Ebenezer Health Clinic',
  },
  description:
    'Visit our walk-in clinic in Oklahoma City, book an appointment, or start a telehealth visit across Oklahoma. Call (405) 349-8188 or book online.',
  alternates: {
    canonical: 'https://www.ebenezerhealthclinic.com/contact',
  },
  robots: { index: true, follow: true },
}

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@graph': [

    // ── 1. ContactPage ────────────────────────────────────────────────────────
    {
      '@type': 'ContactPage',
      '@id': 'https://www.ebenezerhealthclinic.com/contact#webpage',
      name: 'Book an Oklahoma City Appointment | Ebenezer Telehealth Contact',
      url: 'https://www.ebenezerhealthclinic.com/contact',
      description:
        'Visit our walk-in clinic in Oklahoma City or book telehealth from anywhere in Oklahoma. Call (405) 349-8188 or book online with Ebenezer Health Clinic.',
      isPartOf: { '@id': 'https://www.ebenezerhealthclinic.com/#website' },
      about: { '@id': 'https://www.ebenezerhealthclinic.com/#organization' },
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', '.answer-first'],
      },
      potentialAction: [
        {
          '@type': 'ReserveAction',
          name: 'Book an Appointment',
          target: {
            '@type': 'EntryPoint',
            urlTemplate:
              'https://www.optimantra.com/optimus/patient/patientaccess/servicesall?pid=RThiMDN3R1ZQUGZlYytLRUxqQ0UrZz09&lid=aFhJc2tsSlJuZjdqU0tVT1N5TWxXQT09',
            actionPlatform: [
              'https://schema.org/DesktopWebPlatform',
              'https://schema.org/MobileWebPlatform',
            ],
          },
          result: { '@type': 'Reservation', name: 'Appointment at Ebenezer Telehealth' },
        },
      ],
    },

    // ── 2. MedicalBusiness — contact signals for this page ───────────────────
    {
      '@type': 'MedicalBusiness',
      '@id': 'https://www.ebenezerhealthclinic.com/#organization',
      name: 'Ebenezer Telehealth',
      url: 'https://www.ebenezerhealthclinic.com',
      telephone: '+14053498188',
      email: 'ebenezertelehealth@gmail.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '7415 NW 23rd Street',
        addressLocality: 'Bethany',
        addressRegion: 'OK',
        postalCode: '73008',
        addressCountry: 'US',
      },
      areaServed: [
        { '@type': 'State', name: 'Oklahoma', sameAs: 'https://en.wikipedia.org/wiki/Oklahoma' },
        { '@type': 'City', name: 'Oklahoma City' },
        { '@type': 'City', name: 'Tulsa' },
        { '@type': 'City', name: 'Moore' },
        { '@type': 'City', name: 'Owasso' },
        { '@type': 'City', name: 'Edmond' },
        { '@type': 'City', name: 'Norman' },
      ],
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+14053498188',
          contactType: 'customer service',
          areaServed: 'US-OK',
          availableLanguage: 'English',
          contactOption: 'TollFree',
        },
        {
          '@type': 'ContactPoint',
          email: 'ebenezertelehealth@gmail.com',
          contactType: 'customer service',
          areaServed: 'US-OK',
          availableLanguage: 'English',
        },
      ],
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Saturday',
          description: 'Walk-in clinic visits in Oklahoma City at 7415 NW 23rd Street, Bethany, OK',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',
          ],
          description: 'Telehealth visits available most days across Oklahoma',
        },
      ],
      availableService: [
        {
          '@type': 'MedicalProcedure',
          name: 'In-Person Medical Clinic Appointment',
          description: 'Walk-in visits at our Oklahoma City area medical clinic in Bethany, OK.',
          availableAtOrFrom: {
            '@type': 'Place',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Oklahoma City',
              addressRegion: 'OK',
              addressCountry: 'US',
            },
          },
        },
        {
          '@type': 'MedicalProcedure',
          name: 'Telehealth Visit',
          description:
            'Secure online telehealth visits available most days for patients anywhere in Oklahoma.',
          areaServed: { '@type': 'State', name: 'Oklahoma' },
        },
        {
          '@type': 'MedicalProcedure',
          name: "Women's Health Telehealth",
          provider: { '@id': 'https://www.ebenezerhealthclinic.com/#organization' },
        },
        {
          '@type': 'MedicalProcedure',
          name: 'Medical Weight Loss Management',
          provider: { '@id': 'https://www.ebenezerhealthclinic.com/#organization' },
        },
        {
          '@type': 'MedicalProcedure',
          name: 'Minor Illness Treatment',
          provider: { '@id': 'https://www.ebenezerhealthclinic.com/#organization' },
        },
      ],
      employee: { '@id': 'https://www.ebenezerhealthclinic.com/#dr-susan-george' },
      paymentAccepted: 'Cash, Credit Card, Debit Card',
      currenciesAccepted: 'USD',
      priceRange: '$$',
    },

    // ── 3. Person — Dr. Susan George ─────────────────────────────────────────
    {
      '@type': 'Person',
      '@id': 'https://www.ebenezerhealthclinic.com/#dr-susan-george',
      name: 'Susan George',
      honorificPrefix: 'Dr.',
      honorificSuffix: 'DNP, APRN, BC-ADM',
      jobTitle: 'Doctor of Nursing Practice, Advanced Practice Registered Nurse',
      worksFor: { '@id': 'https://www.ebenezerhealthclinic.com/#organization' },
      areaServed: { '@type': 'State', name: 'Oklahoma' },
    },

  ],
}

const BOOKING_URL = 'https://www.optimantra.com/optimus/patient/patientaccess/servicesall?pid=RThiMDN3R1ZQUGZlYytLRUxqQ0UrZz09&lid=aFhJc2tsSlJuZjdqU0tVT1N5TWxXQT09'

const PHONE      = '(405) 349-8188'
const PHONE_HREF = 'tel:+14053498188'
const EMAIL      = 'ebenezertelehealth@gmail.com'

const OKLAHOMA_CITIES = [
  'Oklahoma City',
  'Tulsa',
  'Moore',
  'Owasso',
  'Edmond',
  'Norman',
  'Lawton',
  'Stillwater',
  'Broken Arrow',
  'And rural communities statewide',
]

/* ─── Small reusable icon wrapper ─────────────────────────────────── */
function IconBox({ children }) {
  return (
    <div
      className="flex-shrink-0 h-9 w-9 rounded-xl flex items-center justify-center"
      style={{ backgroundColor: 'rgba(26,166,183,0.08)' }}
      aria-hidden="true"
    >
      {children}
    </div>
  )
}

/* ─── Info row inside the "Our Information" card ─────────────────── */
function InfoRow({ icon, label, children }) {
  return (
    <div className="flex items-start gap-4 px-6 py-4">
      <IconBox>{icon}</IconBox>
      <div className="min-w-0 flex-1">
        <p
          className="text-[11px] font-bold uppercase tracking-widest leading-none"
          style={{ color: 'rgba(26,166,183,0.55)' }}
        >
          {label}
        </p>
        <div className="mt-1">{children}</div>
      </div>
    </div>
  )
}

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />

      {/* ═══════════════════════════════════════════════════════
          HERO — H1 + answer-first + body + CTAs + trust chips
      ═══════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden border-b border-gray-100 -mt-[96px] sm:-mt-[112px] lg:-mt-[128px] pt-[96px] sm:pt-[112px] lg:pt-[128px]"
        style={{
          backgroundImage: "url('/contact_banner.webp')",
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
              'linear-gradient(to right, rgba(26,166,183,0.55) 0%, rgba(255,255,255,0.90) 52%)',
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Empty left col — image + teal tint visible on desktop */}
            <div className="hidden lg:block" aria-hidden="true" />

            {/* Content shifted to the right */}
            <div>
              <span
                className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: 'var(--primary)' }}
              >
                Contact &amp; Booking
              </span>

              <h1
                className="text-4xl md:text-5xl font-bold mb-4"
                style={{ color: 'var(--navy)' }}
              >
                Walk-In Clinic in Oklahoma City: Visit, Book, or Go Online
              </h1>

              {/* CTA row */}
              <div className="flex flex-col sm:flex-row gap-3 mb-7">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center gap-2.5"
                  aria-label="Book your appointment online"
                >
                  <CalendarDays className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                  Book an Appointment
                </a>
                <a
                  href={PHONE_HREF}
                  className="btn-outline inline-flex items-center justify-center gap-2.5"
                  aria-label="Call Ebenezer Telehealth at (405) 349-8188"
                >
                  <Phone className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                  Call {PHONE}
                </a>
              </div>

              {/* Trust chips */}
              <div className="flex flex-wrap gap-x-6 gap-y-2.5 text-sm text-gray-500">
                <span className="flex items-center gap-2">
                  <CheckCircle
                    className="h-4 w-4 flex-shrink-0"
                    style={{ color: 'var(--primary)' }}
                    aria-hidden="true"
                  />
                  Walk-in clinic · Oklahoma City area
                </span>
                <span className="flex items-center gap-2">
                  <CreditCard
                    className="h-4 w-4 flex-shrink-0"
                    style={{ color: 'var(--primary)' }}
                    aria-hidden="true"
                  />
                  Cash-pay · no insurance needed
                </span>
                <span className="flex items-center gap-2">
                  <Shield
                    className="h-4 w-4 flex-shrink-0"
                    style={{ color: 'var(--primary)' }}
                    aria-hidden="true"
                  />
                  HIPAA-secure video visits
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          ANSWER BLOCK — answer-first + body (below hero)
      ═══════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        aria-label="How to book with Ebenezer Telehealth"
        style={{
          backgroundImage: "url('/contact-answer.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'left center',
        }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(255,255,255,0.10)' }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Empty left col — mirrors hero layout */}
            <div className="hidden lg:block" aria-hidden="true" />
            {/* Content in right col — same column as hero text */}
            <div
              className="border-l-4 pl-5 md:pl-6"
              style={{ borderColor: 'var(--primary)' }}
            >
              <p
                className="answer-first text-base md:text-lg font-medium leading-relaxed mb-3"
                style={{ color: '#1AA6B7' }}
              >
                Ebenezer Health Clinic welcomes walk-ins at our Oklahoma City
                location, appointments if you prefer to plan ahead, and
                telehealth visits across Oklahoma. Call{' '}
                <a
                  href={PHONE_HREF}
                  className="font-bold hover:underline"
                  style={{ color: 'var(--primary)' }}
                >
                  {PHONE}
                </a>{' '}
                or book online to get started.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: '#1AA6B7' }}
              >
                Getting care is easy. Choose what works for you: walk in to
                our Oklahoma City clinic, book a visit ahead of time, or start
                a secure telehealth visit from anywhere in Oklahoma. Either
                way, you&apos;ll be cared for by a credentialed provider.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          MAIN GRID — Book Online + Call Us (left) | Our Information (right)
      ═══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden" id="book">
        {/* ── Gray-50 base */}
        <div className="absolute inset-0 bg-gray-50" aria-hidden="true" />

        {/* ── Background image at exactly 0.5 opacity ── */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/body_bg2.webp')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.5,
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8 items-start">

            {/* ── Left: Book Online + Call Us + Visit Options ──────── */}
            <div className="flex flex-col gap-8">

              {/* ─ Book Online ─ */}
              <article
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                aria-labelledby="book-heading"
              >
                <div className="flex items-center gap-4 px-8 py-6 border-b border-gray-50">
                  <IconBox>
                    <CalendarDays
                      className="h-5 w-5"
                      style={{ color: 'var(--primary)' }}
                    />
                  </IconBox>
                  <h2
                    id="book-heading"
                    className="text-2xl font-bold"
                    style={{ color: 'var(--navy)' }}
                  >
                    Book Online
                  </h2>
                </div>

                <div className="px-8 py-7">
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Schedule your visit in just a few minutes. Choose an
                    in-person visit at our Oklahoma City clinic or a
                    telehealth visit from anywhere in Oklahoma, all booked
                    securely through our online portal.
                  </p>

                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-2.5"
                    aria-label="Book your appointment online"
                  >
                    <CalendarDays className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                    Book Online Now
                  </a>

                  <p className="text-sm text-gray-500 mt-5 text-center">
                    Prefer to visit us in person?{' '}
                    <a
                      href={PHONE_HREF}
                      className="font-semibold hover:underline"
                      style={{ color: 'var(--primary)' }}
                    >
                      Call us to ask about availability.
                    </a>
                  </p>
                </div>
              </article>

              {/* ─ Call Us ─ */}
              <article
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                aria-labelledby="call-heading"
              >
                <div className="flex items-center gap-4 px-8 py-6 border-b border-gray-50">
                  <IconBox>
                    <Phone
                      className="h-5 w-5"
                      style={{ color: 'var(--primary)' }}
                    />
                  </IconBox>
                  <h2
                    id="call-heading"
                    className="text-2xl font-bold"
                    style={{ color: 'var(--navy)' }}
                  >
                    Call Us
                  </h2>
                </div>

                <div className="px-8 py-7">
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Prefer to schedule by phone or have a question before
                    booking? Give us a call. We&apos;d love to hear from you.
                    Tappable on mobile.
                  </p>

                  {/* Large tappable phone number */}
                  <a
                    href={PHONE_HREF}
                    className="flex items-center justify-center sm:justify-start gap-3 w-full sm:w-auto rounded-2xl px-7 py-4 text-white font-bold transition-all hover:-translate-y-0.5 active:translate-y-0"
                    style={{
                      backgroundColor: 'var(--primary)',
                      boxShadow: '0 4px 20px rgba(26,166,183,0.28)',
                      fontSize: 'clamp(1.25rem, 3.5vw, 1.75rem)',
                      lineHeight: 1.2,
                    }}
                    aria-label="Call Ebenezer Telehealth at (405) 349-8188"
                  >
                    <Phone
                      className="h-6 w-6 flex-shrink-0"
                      aria-hidden="true"
                    />
                    {PHONE}
                  </a>
                  <p className="text-xs text-gray-400 mt-3">
                    Tap to call on mobile
                  </p>
                </div>
              </article>

              {/* ─ Visit Options ─ */}
              <article
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                aria-labelledby="visit-options-heading"
              >
                <div className="flex items-center gap-4 px-8 py-6 border-b border-gray-50">
                  <IconBox>
                    <Globe
                      className="h-5 w-5"
                      style={{ color: 'var(--primary)' }}
                    />
                  </IconBox>
                  <h2
                    id="visit-options-heading"
                    className="text-2xl font-bold"
                    style={{ color: 'var(--navy)' }}
                  >
                    Visit Options
                  </h2>
                </div>

                <div className="px-8 py-7">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                    {/* In-person */}
                    <div
                      className="rounded-2xl p-6"
                      style={{
                        backgroundColor: 'rgba(151,206,204,0.10)',
                        border: '1px solid rgba(26,166,183,0.14)',
                      }}
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <Building2
                          className="h-5 w-5 flex-shrink-0"
                          style={{ color: 'var(--primary)' }}
                          aria-hidden="true"
                        />
                        <p
                          className="text-base font-bold"
                          style={{ color: 'var(--navy)' }}
                        >
                          In Person
                        </p>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed mb-4">
                        Walk-in visits at our Oklahoma City clinic. Ask about
                        availability when you call.
                      </p>
                      <a
                        href={PHONE_HREF}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold hover:underline"
                        style={{ color: 'var(--primary)' }}
                        aria-label="Call to check walk-in clinic availability in Oklahoma City"
                      >
                        <Phone className="h-3.5 w-3.5 flex-shrink-0" aria-hidden="true" />
                        Call to Check Availability
                      </a>
                    </div>

                    {/* Online */}
                    <div
                      className="rounded-2xl p-6"
                      style={{
                        backgroundColor: 'rgba(26,166,183,0.04)',
                        border: '1px solid rgba(26,166,183,0.09)',
                      }}
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <Globe
                          className="h-5 w-5 flex-shrink-0"
                          style={{ color: 'var(--primary)' }}
                          aria-hidden="true"
                        />
                        <p
                          className="text-base font-bold"
                          style={{ color: 'var(--navy)' }}
                        >
                          Online (Telehealth)
                        </p>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed mb-4">
                        Book telehealth across Oklahoma, most days. Secure video
                        visit from home, no travel required.
                      </p>
                      <a
                        href={BOOKING_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold hover:underline"
                        style={{ color: 'var(--primary)' }}
                        aria-label="Book telehealth online"
                      >
                        <CalendarDays className="h-3.5 w-3.5 flex-shrink-0" aria-hidden="true" />
                        Book Telehealth Now
                      </a>
                    </div>

                  </div>
                </div>
              </article>

            </div>{/* end left col */}

            {/* ── Right: Our Information (sticky) ─────────────────── */}
            <aside
              className="lg:sticky lg:top-32"
              aria-label="Practice contact information"
            >
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

                {/* Card header */}
                <div className="px-6 py-5 border-b border-gray-50">
                  <h2
                    className="text-lg font-bold"
                    style={{ color: 'var(--navy)' }}
                  >
                    Our Information
                  </h2>
                </div>

                {/* Info rows */}
                <address className="not-italic divide-y divide-gray-50">

                  <InfoRow
                    icon={<Globe className="h-4 w-4" style={{ color: 'var(--primary)' }} />}
                    label="Practice"
                  >
                    <p className="text-sm font-semibold text-gray-800">
                      Ebenezer Telehealth
                    </p>
                  </InfoRow>

                  <InfoRow
                    icon={<MapPin className="h-4 w-4" style={{ color: 'var(--primary)' }} />}
                    label="Location"
                  >
                    <p className="text-sm text-gray-700 leading-snug">
                      7415 NW 23rd Street, Bethany, OK 73008
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Walk-in clinic visits welcome
                    </p>
                  </InfoRow>

                  <InfoRow
                    icon={<Phone className="h-4 w-4" style={{ color: 'var(--primary)' }} />}
                    label="Phone"
                  >
                    <a
                      href={PHONE_HREF}
                      className="text-sm font-semibold hover:underline"
                      style={{ color: 'var(--primary)' }}
                    >
                      {PHONE}
                    </a>
                  </InfoRow>

                  <InfoRow
                    icon={<Mail className="h-4 w-4" style={{ color: 'var(--primary)' }} />}
                    label="Email"
                  >
                    <a
                      href={`mailto:${EMAIL}`}
                      className="text-sm font-medium hover:underline break-all"
                      style={{ color: 'var(--primary)' }}
                    >
                      {EMAIL}
                    </a>
                  </InfoRow>

                  <InfoRow
                    icon={<Clock className="h-4 w-4" style={{ color: 'var(--primary)' }} />}
                    label="Hours"
                  >
                    <p className="text-sm text-gray-700">
                      Telehealth: most days
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">
                      In-person: walk-in clinic visits
                    </p>
                  </InfoRow>

                </address>

                {/* Service area footer strip */}
                <div
                  className="px-6 py-4"
                  style={{
                    backgroundColor: 'rgba(151,206,204,0.12)',
                    borderTop: '1px solid rgba(26,166,183,0.08)',
                  }}
                >
                  <p
                    className="text-[11px] font-bold uppercase tracking-widest leading-none mb-1"
                    style={{ color: 'var(--primary)' }}
                  >
                    Service Area
                  </p>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: 'var(--navy)' }}
                  >
                    All of Oklahoma
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Telehealth statewide · In-person Oklahoma City
                  </p>
                </div>

              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SERVING OKLAHOMA CITY & ALL OF OKLAHOMA
      ═══════════════════════════════════════════════════════ */}
      <section className="bg-white" aria-labelledby="service-area-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Left: heading + body + city pills */}
            <div>
              <span
                className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: 'var(--primary)' }}
              >
                Service Area
              </span>
              <h2
                id="service-area-heading"
                className="text-2xl md:text-3xl font-bold mb-4"
                style={{ color: 'var(--navy)' }}
              >
                Serving Oklahoma City &amp; All of Oklahoma
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                In-person care in Oklahoma City; telehealth for patients
                statewide, including Tulsa, Moore, Owasso, Edmond, Norman, and
                rural communities.
              </p>

              <div
                className="flex flex-wrap gap-2"
                aria-label="Oklahoma cities we serve"
              >
                {OKLAHOMA_CITIES.map((city) => (
                  <span
                    key={city}
                    className="inline-block text-sm font-medium px-3 py-1.5 rounded-full"
                    style={{
                      backgroundColor: 'rgba(151,206,204,0.20)',
                      color: 'var(--primary)',
                      border: '1px solid rgba(26,166,183,0.15)',
                    }}
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: info cards + CTAs */}
            <div className="flex flex-col gap-5">

              <div
                className="rounded-2xl p-7"
                style={{
                  backgroundColor: 'rgba(151,206,204,0.10)',
                  border: '1px solid rgba(26,166,183,0.14)',
                }}
              >
                <p
                  className="text-base font-semibold mb-2"
                  style={{ color: 'var(--navy)' }}
                >
                  Cash-Pay Practice
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  No insurance required. You&apos;ll know your full cost before
                  booking, no surprise bills. We accept cash, credit, and debit
                  cards.
                </p>
              </div>

              <div
                className="rounded-2xl p-7"
                style={{
                  backgroundColor: 'rgba(26,166,183,0.04)',
                  border: '1px solid rgba(26,166,183,0.09)',
                }}
              >
                <p
                  className="text-base font-semibold mb-2"
                  style={{ color: 'var(--navy)' }}
                >
                  Not a Medical Emergency?
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Our services are designed for non-emergency conditions. If you
                  are experiencing a medical emergency, call&nbsp;
                  <strong>911</strong> or go to your nearest emergency room
                  immediately.
                </p>
              </div>

              {/* CTA cluster */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center gap-2.5"
                  aria-label="Book an appointment online"
                >
                  <CalendarDays className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                  Book an Appointment
                </a>
                <a
                  href={PHONE_HREF}
                  className="btn-outline inline-flex items-center justify-center gap-2.5"
                  aria-label="Call to ask about walk-in clinic visits in Oklahoma City"
                >
                  <Phone className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                  Call About Walk-In Visits
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  )
}
