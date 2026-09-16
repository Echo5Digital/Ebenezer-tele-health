export const metadata = {
  title: 'Terms of Use | Ebenezer Health Clinic',
  description:
    'Terms of Use for Ebenezer Health Clinic. Review the scope of our Oklahoma-only services, user responsibilities, limitation of liability, and governing law.',
  alternates: {
    canonical: 'https://www.ebenezerhealthclinic.com/terms',
  },
  robots: { index: true, follow: true },
}

const LAST_UPDATED = 'July 23, 2026'

const callout = {
  color: 'rgba(11,61,71,0.60)',
  backgroundColor: 'rgba(26,166,183,0.05)',
  border: '1px solid rgba(26,166,183,0.12)',
}

export default function TermsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-white -mt-[112px] sm:-mt-[128px] lg:-mt-[144px] pt-[112px] sm:pt-[128px] lg:pt-[144px]">
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
            Terms of Use
          </h1>
          <p className="text-sm text-gray-500">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      {/* ── Body ── */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 space-y-10 text-gray-700 leading-relaxed">

            {/* Acceptance */}
            <div>
              <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--navy)' }}>
                Acceptance
              </h2>
              <p>
                By using ebenezerhealthclinic.com, you agree to these Terms of
                Use. If you do not agree, please do not use the site.
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* No Medical Advice */}
            <div>
              <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--navy)' }}>
                No Medical Advice via the Website
              </h2>
              <p>
                Website content is for general informational purposes only and
                is not medical advice. It does not create a provider&ndash;patient
                relationship. That relationship is formed only through an actual
                visit (in-person or telehealth). Always seek the advice of a
                qualified provider with questions about a medical condition. In
                an emergency, call 911.
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* Services & Eligibility */}
            <div>
              <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--navy)' }}>
                Services &amp; Eligibility
              </h2>
              <p>
                Ebenezer Health Clinic offers in-person care at our Oklahoma
                City location and telehealth to patients physically located in
                Oklahoma at the time of service.
              </p>
              <p className="mt-4 text-sm italic rounded-xl px-4 py-3" style={callout}>
                [ATTORNEY: confirm telehealth eligibility/geographic language
                against Oklahoma licensure rules.]
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* Cash-Pay */}
            <div>
              <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--navy)' }}>
                Cash-Pay; No Insurance
              </h2>
              <p>
                We are a cash-pay practice. Fees are due at the time of
                service. Weight-loss medication, when prescribed, is billed
                separately from visit fees.
              </p>
              <p className="mt-4 text-sm italic rounded-xl px-4 py-3" style={callout}>
                [CLIENT/ATTORNEY: refund/cancellation/no-show policy.]
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* Prescriptions */}
            <div>
              <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--navy)' }}>
                Prescriptions
              </h2>
              <p>
                Prescriptions are issued only when clinically appropriate and
                at the provider&apos;s discretion. We do not guarantee any
                prescription.
              </p>
              <p className="mt-4 text-sm italic rounded-xl px-4 py-3" style={callout}>
                [ATTORNEY: controlled substance policy, especially relevant for
                weight-loss and telehealth prescribing under Oklahoma and
                federal rules.]
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* Wellness Services */}
            <div>
              <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--navy)' }}>
                Wellness Services (Injections &amp; IV Therapy)
              </h2>
              <p>
                Injection and IV therapy services are provided in person
                following a provider evaluation and are supportive wellness
                services, not treatment or cure for any condition.
              </p>
              <p className="mt-4 text-sm italic rounded-xl px-4 py-3" style={callout}>
                [ATTORNEY: add assumption-of-risk / suitability language;
                coordinate with the consent page.]
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* IP */}
            <div>
              <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--navy)' }}>
                Website Use &amp; Intellectual Property
              </h2>
              <p>
                Content is owned by or licensed to Ebenezer Health Clinic and
                may not be copied without permission. Do not misuse the site.
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* Disclaimers */}
            <div>
              <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--navy)' }}>
                Disclaimers &amp; Limitation of Liability
              </h2>
              <p>
                The site is provided &ldquo;as is.&rdquo;
              </p>
              <p className="mt-4 text-sm italic rounded-xl px-4 py-3" style={callout}>
                [ATTORNEY: insert enforceable disclaimer and
                limitation-of-liability language for Oklahoma.]
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* Governing Law */}
            <div>
              <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--navy)' }}>
                Governing Law
              </h2>
              <p>
                These Terms are governed by the laws of the State of Oklahoma.
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* Contact */}
            <div>
              <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--navy)' }}>
                Contact
              </h2>
              <address className="not-italic space-y-1">
                <p className="font-semibold" style={{ color: 'var(--navy)' }}>
                  Ebenezer Health Clinic
                </p>
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
                    href="mailto:ebenezerhealth@outlook.com"
                    className="font-medium"
                    style={{ color: 'var(--primary)' }}
                  >
                    ebenezerhealth@outlook.com
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
