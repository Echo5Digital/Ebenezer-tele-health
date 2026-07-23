export const metadata = {
  title: 'HIPAA Notice of Privacy Practices | Ebenezer Health Clinic',
  description:
    'HIPAA Notice of Privacy Practices for Ebenezer Health Clinic. Learn how we use and disclose your protected health information (PHI) and your patient rights.',
  alternates: {
    canonical: 'https://www.ebenezerhealthclinic.com/hipaa-notice',
  },
  robots: { index: true, follow: true },
}

const EFFECTIVE_DATE = 'July 23, 2026'

export default function HipaaNoticePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-white -mt-[96px] sm:-mt-[112px] lg:-mt-[128px] pt-[96px] sm:pt-[112px] lg:pt-[128px]">
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
            Notice of Privacy Practices
          </h1>
          <p className="text-sm text-gray-500">
            Effective date: {EFFECTIVE_DATE}
          </p>
        </div>
      </section>

      {/* ── Body ── */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 space-y-10 text-gray-700 leading-relaxed">

            {/* Attorney callout */}
            <div
              className="text-sm italic rounded-xl px-4 py-4"
              style={{
                color: 'rgba(11,61,71,0.60)',
                backgroundColor: 'rgba(26,166,183,0.05)',
                border: '1px solid rgba(26,166,183,0.12)',
              }}
            >
              [ATTORNEY: This is the most regulated document here. HIPAA requires
              specific mandated language, patient rights enumerations, and an
              acknowledgment-of-receipt process. The draft below is a scaffold
              only and must be replaced/validated against the HIPAA Privacy Rule
              (45 CFR Part 164) and Oklahoma law.]
            </div>

            {/* Intro */}
            <div>
              <p>
                This notice describes how medical information about you may be
                used and disclosed and how you can get access to this
                information. Please review it carefully.
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* Our Duties */}
            <div>
              <h2
                className="text-xl font-bold mb-4"
                style={{ color: 'var(--navy)' }}
              >
                Our Duties
              </h2>
              <p>
                We are required by law to maintain the privacy of your protected
                health information (PHI), provide you this notice of our legal
                duties and privacy practices, and follow the terms of the notice
                currently in effect.
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* How We May Use and Disclose Your PHI */}
            <div>
              <h2
                className="text-xl font-bold mb-4"
                style={{ color: 'var(--navy)' }}
              >
                How We May Use and Disclose Your PHI
              </h2>
              <ul className="space-y-3 pl-2">
                <li className="flex gap-2">
                  <span
                    className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full"
                    style={{ backgroundColor: 'var(--primary)' }}
                    aria-hidden="true"
                  />
                  <span>
                    <strong>Treatment:</strong> to provide, coordinate, and
                    manage your care (in-clinic and telehealth), including with
                    pharmacies, labs, and other providers involved in your care.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span
                    className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full"
                    style={{ backgroundColor: 'var(--primary)' }}
                    aria-hidden="true"
                  />
                  <span>
                    <strong>Payment:</strong> to bill and collect payment for
                    services.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span
                    className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full"
                    style={{ backgroundColor: 'var(--primary)' }}
                    aria-hidden="true"
                  />
                  <span>
                    <strong>Health care operations:</strong> for quality,
                    administration, and operations.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span
                    className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full"
                    style={{ backgroundColor: 'var(--primary)' }}
                    aria-hidden="true"
                  />
                  <span>As required or permitted by law.</span>
                </li>
              </ul>
            </div>

            <hr className="border-gray-100" />

            {/* Your Rights */}
            <div>
              <h2
                className="text-xl font-bold mb-4"
                style={{ color: 'var(--navy)' }}
              >
                Your Rights
              </h2>
              <p className="mb-3">You have the right to:</p>
              <ul className="space-y-3 pl-2">
                {[
                  'inspect and copy your PHI',
                  'request amendments',
                  'request an accounting of disclosures',
                  'request restrictions',
                  'request confidential communications',
                  'receive a paper copy of this notice',
                  'be notified of a breach',
                ].map((right) => (
                  <li key={right} className="flex gap-2">
                    <span
                      className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full"
                      style={{ backgroundColor: 'var(--primary)' }}
                      aria-hidden="true"
                    />
                    <span>{right}</span>
                  </li>
                ))}
              </ul>
              <p
                className="mt-4 text-sm italic rounded-xl px-4 py-3"
                style={{
                  color: 'rgba(11,61,71,0.60)',
                  backgroundColor: 'rgba(26,166,183,0.05)',
                  border: '1px solid rgba(26,166,183,0.12)',
                }}
              >
                [ATTORNEY: expand each right with the HIPAA-mandated detail and
                response timeframes.]
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* Uses Requiring Authorization */}
            <div>
              <h2
                className="text-xl font-bold mb-4"
                style={{ color: 'var(--navy)' }}
              >
                Uses Requiring Your Authorization
              </h2>
              <p>
                Most uses not described above will be made only with your
                written authorization, which you may revoke. Marketing and sale
                of PHI require authorization.
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* Complaints */}
            <div>
              <h2
                className="text-xl font-bold mb-4"
                style={{ color: 'var(--navy)' }}
              >
                Complaints
              </h2>
              <p>
                You may complain to us or to the U.S. Department of Health and
                Human Services without retaliation. Contact our Privacy Officer:{' '}
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
              </address>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
