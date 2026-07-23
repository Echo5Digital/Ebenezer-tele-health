export const metadata = {
  title: 'Informed Consent | Ebenezer Health Clinic',
  description:
    'Informed Consent to Care at Ebenezer Health Clinic — telehealth, in-person visits, injections, and IV therapy. Review before your visit.',
  alternates: {
    canonical: 'https://www.ebenezerhealthclinic.com/consent',
  },
  robots: { index: true, follow: true },
}

const LAST_UPDATED = 'July 23, 2026'

const callout = {
  color: 'rgba(11,61,71,0.60)',
  backgroundColor: 'rgba(26,166,183,0.05)',
  border: '1px solid rgba(26,166,183,0.12)',
}

function Bullet() {
  return (
    <span
      className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full"
      style={{ backgroundColor: 'var(--primary)' }}
      aria-hidden="true"
    />
  )
}

export default function ConsentPage() {
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
            Informed Consent to Care
          </h1>
          <p className="text-sm text-gray-500">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      {/* ── Body ── */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 space-y-10 text-gray-700 leading-relaxed">

            {/* Attorney callout */}
            <div className="text-sm italic rounded-xl px-4 py-4" style={callout}>
              [ATTORNEY: Oklahoma has specific telehealth informed-consent
              requirements. IV therapy and injections generally warrant their
              own procedure-specific consent. This scaffold must be validated
              and likely split/expanded.]
            </div>

            {/* General Consent */}
            <div>
              <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--navy)' }}>
                General Consent to Treatment
              </h2>
              <p>
                By receiving services at Ebenezer Health Clinic — in person or
                via telehealth — you consent to evaluation and treatment by our
                provider(s).
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* Telehealth Consent */}
            <div>
              <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--navy)' }}>
                Telehealth Consent
              </h2>
              <ul className="space-y-3 pl-2">
                <li className="flex gap-2">
                  <Bullet />
                  <span>
                    Telehealth uses secure video to deliver care remotely.
                    Benefits include convenience and access; limitations include
                    the inability to perform a physical exam and situations where
                    in-person care is necessary.
                  </span>
                </li>
                <li className="flex gap-2">
                  <Bullet />
                  <span>
                    You must be physically located in Oklahoma at the time of a
                    telehealth visit.
                  </span>
                </li>
                <li className="flex gap-2">
                  <Bullet />
                  <span>
                    If the provider determines telehealth is not appropriate for
                    your needs, you may be directed to in-person or emergency
                    care.
                  </span>
                </li>
                <li className="flex gap-2">
                  <Bullet />
                  <span>
                    Technology may fail; alternative arrangements will be made
                    if a visit is interrupted.
                  </span>
                </li>
              </ul>
              <p className="mt-4 text-sm italic rounded-xl px-4 py-3" style={callout}>
                [ATTORNEY: add Oklahoma-mandated telehealth consent elements
                and patient acknowledgment.]
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* In-Person */}
            <div>
              <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--navy)' }}>
                In-Person / Walk-In Care
              </h2>
              <p>
                In-person visits occur at our Oklahoma City clinic. Walk-in
                availability depends on clinic capacity.
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* Injections & IV */}
            <div>
              <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--navy)' }}>
                Injections &amp; IV Therapy Consent
              </h2>
              <ul className="space-y-3 pl-2">
                <li className="flex gap-2">
                  <Bullet />
                  <span>
                    These services are provided after a provider evaluation and
                    are supportive wellness services, not a treatment or cure
                    for any medical condition.
                  </span>
                </li>
                <li className="flex gap-2">
                  <Bullet />
                  <span>
                    Possible risks include (without limitation) discomfort,
                    bruising, infection at the injection/IV site, or allergic
                    reaction.
                  </span>
                </li>
                <li className="flex gap-2">
                  <Bullet />
                  <span>
                    These services are not appropriate for medical emergencies.
                  </span>
                </li>
              </ul>
              <p className="mt-4 text-sm italic rounded-xl px-4 py-3" style={callout}>
                [ATTORNEY/CLIENT: complete risk disclosures per service;
                consider a separate signed consent form for IV therapy.]
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* No Guarantee */}
            <div>
              <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--navy)' }}>
                No Guarantee of Outcomes
              </h2>
              <p>
                No specific result is promised. Individual results vary.
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* Financial Consent */}
            <div>
              <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--navy)' }}>
                Financial Consent
              </h2>
              <p>
                You understand services are cash-pay and agree to the fees
                presented before service. Medication, when prescribed, may be
                billed separately.
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* Acknowledgment */}
            <div>
              <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--navy)' }}>
                Acknowledgment
              </h2>
              <p>
                By proceeding, you acknowledge you have read and understood this
                consent.
              </p>
              <p className="mt-4 text-sm italic rounded-xl px-4 py-3" style={callout}>
                [ATTORNEY: add signature/e-consent capture mechanism and record
                keeping.]
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
              </address>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
