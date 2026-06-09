import { Phone, MapPin, Mail, Clock, CalendarDays, Globe, CheckCircle, CreditCard, Shield } from 'lucide-react'

export const metadata = {
  title: 'Contact Ebenezer Telehealth | Book a Visit',
  description:
    'Book an online visit with Ebenezer Telehealth or contact us. Serving all of Oklahoma. Call (405) 349-8188 or book online today.',
  alternates: {
    canonical: 'https://ebenezertelehealth.com/contact',
  },
  robots: { index: true, follow: true },
}

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Ebenezer Telehealth',
  url: 'https://ebenezertelehealth.com/contact',
  mainEntity: { '@id': 'https://ebenezertelehealth.com/#organization' },
}

const BOOKING_URL = 'https://www.optimantra.com/optimus/patient/patientaccess/servicesall?pid=RThiMDN3R1ZQUGZlYytLRUxqQ0UrZz09&lid=aFhJc2tsSlJuZjdqU0tVT1N5TWxXQT09'

const PHONE     = '(405) 349-8188'
const PHONE_HREF = 'tel:+14053498188'
const EMAIL     = 'contact@ebenezertelehealth.com'

const OKLAHOMA_CITIES = [
  'Oklahoma City',
  'Tulsa',
  'Edmond',
  'Norman',
  'Moore',
  'Owasso',
  'Lawton',
  'Stillwater',
  'Broken Arrow',
  'And everywhere in between',
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
          HERO — heading + dual CTAs + trust chips
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
                Contact Ebenezer Telehealth
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed max-w-xl mb-8">
                Ready to book a visit or have a question? We&apos;re here to help.
              </p>

              {/* Dual CTA row */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center gap-2.5"
                  aria-label="Book your telehealth appointment online"
                >
                  <CalendarDays className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                  Book Online Now
                </a>
                <a
                  href={PHONE_HREF}
                  className="btn-outline inline-flex items-center justify-center gap-2.5"
                  aria-label="Call Ebenezer Telehealth at (405) 349-8188"
                >
                  <Phone className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                  Call (405) 349-8188
                </a>
              </div>

              {/* Trust chips */}
              <div className="flex flex-wrap gap-x-6 gap-y-2.5 mt-7 text-sm text-gray-500">
                <span className="flex items-center gap-2">
                  <CheckCircle
                    className="h-4 w-4 flex-shrink-0"
                    style={{ color: 'var(--primary)' }}
                    aria-hidden="true"
                  />
                  Serving all of Oklahoma
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
          MAIN GRID — Book + Call (left) | Our Information (right)
      ═══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden" id="book">
        {/* ── Gray-50 base — preserves original section colour ── */}
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

            {/* ── Left: Book Your Visit + Call Us ─────────────────── */}
            <div className="flex flex-col gap-8">

              {/* ─ Book Your Visit ─ */}
              <article
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                aria-labelledby="book-heading"
              >
                {/* Card header */}
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
                    Book Your Visit
                  </h2>
                </div>

                {/* Card body */}
                <div className="px-8 py-7">
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Schedule your telehealth appointment online — it takes just a
                    few minutes. All visits are conducted via secure video. No
                    waiting room, no driving required.
                  </p>

                  {/* Primary CTA */}
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-2.5"
                    aria-label="Book your telehealth appointment online"
                  >
                    <CalendarDays className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                    Book Online Now
                  </a>

                  <p className="text-sm text-gray-500 mt-5 text-center">
                    Prefer to call?{' '}
                    <a
                      href={PHONE_HREF}
                      className="font-semibold"
                      style={{ color: 'var(--primary)' }}
                    >
                      {PHONE}
                    </a>
                  </p>
                </div>
              </article>

              {/* ─ Call Us ─ */}
              <article
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                aria-labelledby="call-heading"
              >
                {/* Card header */}
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

                {/* Card body */}
                <div className="px-8 py-7">
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Prefer to schedule by phone or have a question before
                    booking? Give us a call — we&apos;d love to hear from you.
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
                    (405) 349-8188
                  </a>
                  <p className="text-xs text-gray-400 mt-3">
                    Tap to call on mobile
                  </p>
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
                <div
                  className="px-6 py-5 border-b border-gray-50"
                >
                  <h2
                    className="text-lg font-bold"
                    style={{ color: 'var(--navy)' }}
                  >
                    Our Information
                  </h2>
                </div>

                {/* Info rows — divide-y keeps every row perfectly aligned */}
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
                    label="Address"
                  >
                    <p className="text-sm text-gray-700 leading-snug">
                      Oklahoma City, OK
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      [Street address — coming soon]
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
                    <p className="text-xs text-gray-400">
                      Available most days of the week and most Saturdays.
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
                    Telehealth — no travel required
                  </p>
                </div>

              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SERVING ALL OF OKLAHOMA
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
                Serving All of Oklahoma
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                We provide telehealth services to patients across the entire
                state — including Oklahoma City, Tulsa, Edmond, Norman, Moore,
                Owasso, Lawton, Stillwater, Broken Arrow, and all rural
                communities.
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

            {/* Right: Cash-pay note */}
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
                  booking — no surprise bills. We accept cash, credit, and debit
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
                  Our telehealth services are designed for non-emergency
                  conditions. If you are experiencing a medical emergency,
                  call&nbsp;
                  <strong>911</strong> or go to your nearest emergency room
                  immediately.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
