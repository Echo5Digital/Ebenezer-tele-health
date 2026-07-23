import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for Ebenezer Health Clinic. Learn how we collect, use, and protect your personal and health information.',
  alternates: {
    canonical: 'https://www.ebenezerhealthclinic.com/privacy-policy',
  },
  robots: { index: true, follow: true },
}

const LAST_UPDATED = 'July 23, 2026'

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="bg-white -mt-[96px] sm:-mt-[112px] lg:-mt-[128px] pt-[96px] sm:pt-[112px] lg:pt-[128px]"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: 'var(--primary)' }}
          >
            Legal
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: 'var(--navy)' }}
          >
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      {/* ── Body ── */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 space-y-10 text-gray-700 leading-relaxed">

            {/* Introduction */}
            <div>
              <p>
                Ebenezer Health Clinic (&ldquo;we,&rdquo; &ldquo;us,&rdquo;
                &ldquo;our&rdquo;) respects your privacy. This Privacy Policy
                explains how we collect, use, and protect information when you
                use our website (ebenezerhealthclinic.com), visit our Oklahoma
                City clinic, or use our telehealth services.
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* Information We Collect */}
            <div>
              <h2
                className="text-xl font-bold mb-4"
                style={{ color: 'var(--navy)' }}
              >
                Information We Collect
              </h2>
              <ul className="space-y-3 pl-2">
                <li className="flex gap-2">
                  <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full" style={{ backgroundColor: 'var(--primary)' }} aria-hidden="true" />
                  <span>
                    <strong>Information you provide:</strong> name, contact
                    details, date of birth, health information you share when
                    booking or during a visit, and payment information.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full" style={{ backgroundColor: 'var(--primary)' }} aria-hidden="true" />
                  <span>
                    <strong>Information collected automatically on our website:</strong>{' '}
                    IP address, browser type, pages visited, via cookies and
                    analytics tools.
                  </span>
                </li>
              </ul>
              <p
                className="mt-4 text-sm italic rounded-xl px-4 py-3"
                style={{
                  color: 'rgba(11,61,71,0.60)',
                  backgroundColor: 'rgba(26,166,183,0.05)',
                  border: '1px solid rgba(26,166,183,0.12)',
                }}
              >
                [ATTORNEY: confirm booking platform (OptiMantra) and analytics
                (GA4) data-handling disclosures.]
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* How We Use Information */}
            <div>
              <h2
                className="text-xl font-bold mb-4"
                style={{ color: 'var(--navy)' }}
              >
                How We Use Information
              </h2>
              <p className="mb-3">
                To provide and coordinate your care, schedule and manage
                appointments, process payments, communicate with you, comply
                with legal obligations, and improve our services.
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* How We Share Information */}
            <div>
              <h2
                className="text-xl font-bold mb-4"
                style={{ color: 'var(--navy)' }}
              >
                How We Share Information
              </h2>
              <p className="mb-3">
                We do not sell your personal information. We may share it with:
              </p>
              <ul className="space-y-3 pl-2">
                <li className="flex gap-2">
                  <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full" style={{ backgroundColor: 'var(--primary)' }} aria-hidden="true" />
                  <span>
                    service providers who support our operations (scheduling,
                    payment, secure telehealth) under appropriate agreements;
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full" style={{ backgroundColor: 'var(--primary)' }} aria-hidden="true" />
                  <span>
                    pharmacies and labs as needed for your care; and
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full" style={{ backgroundColor: 'var(--primary)' }} aria-hidden="true" />
                  <span>
                    as required by law.
                  </span>
                </li>
              </ul>
              <p className="mt-4">
                Protected health information is handled per our{' '}
                <Link
                  href="/hipaa-notice"
                  className="font-medium underline"
                  style={{ color: 'var(--primary)' }}
                >
                  HIPAA Notice of Privacy Practices
                </Link>
                .
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* Cookies & Analytics */}
            <div>
              <h2
                className="text-xl font-bold mb-4"
                style={{ color: 'var(--navy)' }}
              >
                Cookies &amp; Analytics
              </h2>
              <p>
                Our website uses cookies and analytics to understand site usage.
                You can control cookies through your browser settings.
              </p>
              <p
                className="mt-4 text-sm italic rounded-xl px-4 py-3"
                style={{
                  color: 'rgba(11,61,71,0.60)',
                  backgroundColor: 'rgba(26,166,183,0.05)',
                  border: '1px solid rgba(26,166,183,0.12)',
                }}
              >
                [ATTORNEY: add cookie-consent mechanism if targeting requires it.]
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* Data Security */}
            <div>
              <h2
                className="text-xl font-bold mb-4"
                style={{ color: 'var(--navy)' }}
              >
                Data Security
              </h2>
              <p>
                We use reasonable administrative, technical, and physical
                safeguards to protect your information. No method of
                transmission is 100% secure.
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* Your Choices */}
            <div>
              <h2
                className="text-xl font-bold mb-4"
                style={{ color: 'var(--navy)' }}
              >
                Your Choices
              </h2>
              <p>
                You may request access to or correction of your information,
                and opt out of non-essential communications. Contact us at{' '}
                <a
                  href="mailto:ebenezertelehealth@gmail.com"
                  className="font-medium underline"
                  style={{ color: 'var(--primary)' }}
                >
                  ebenezertelehealth@gmail.com
                </a>{' '}
                or{' '}
                <a
                  href="tel:+14053498188"
                  className="font-medium"
                  style={{ color: 'var(--primary)' }}
                >
                  (405) 349-8188
                </a>
                .
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* Children's Privacy */}
            <div>
              <h2
                className="text-xl font-bold mb-4"
                style={{ color: 'var(--navy)' }}
              >
                Children&apos;s Privacy
              </h2>
              <p
                className="text-sm italic rounded-xl px-4 py-3"
                style={{
                  color: 'rgba(11,61,71,0.60)',
                  backgroundColor: 'rgba(26,166,183,0.05)',
                  border: '1px solid rgba(26,166,183,0.12)',
                }}
              >
                [ATTORNEY: state policy on minors &mdash; relevant if treating
                patients under 18; coordinate with consent requirements.]
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* Changes */}
            <div>
              <h2
                className="text-xl font-bold mb-4"
                style={{ color: 'var(--navy)' }}
              >
                Changes
              </h2>
              <p>
                We may update this policy; the &ldquo;last updated&rdquo; date
                reflects the latest version.
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* Contact */}
            <div>
              <h2
                className="text-xl font-bold mb-4"
                style={{ color: 'var(--navy)' }}
              >
                Contact
              </h2>
              <address className="not-italic space-y-1">
                <p className="font-semibold" style={{ color: 'var(--navy)' }}>
                  Ebenezer Health Clinic
                </p>
                <p>7415 NW 23rd Street, Bethany, OK 73008</p>
                <p>
                  <a
                    href="tel:+14053498188"
                    className="font-medium"
                    style={{ color: 'var(--primary)' }}
                  >
                    (405) 349-8188
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:ebenezertelehealth@gmail.com"
                    className="font-medium"
                    style={{ color: 'var(--primary)' }}
                  >
                    ebenezertelehealth@gmail.com
                  </a>
                </p>
              </address>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
