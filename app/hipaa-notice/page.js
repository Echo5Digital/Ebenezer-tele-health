import Link from 'next/link'

export const metadata = {
  title: 'HIPAA Notice of Privacy Practices | Ebenezer Telehealth',
  description:
    'HIPAA Notice of Privacy Practices for Ebenezer Telehealth. Learn how we use and disclose your protected health information (PHI) and your patient rights.',
  alternates: {
    canonical: 'https://ebenezertelehealth.com/hipaa-notice',
  },
  robots: { index: true, follow: true },
}

const EFFECTIVE_DATE = 'June 1, 2025'
const CONTACT_EMAIL = 'contact@ebenezertelehealth.com'
const PHONE = '(405) 349-8188'

export default function HipaaNoticePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: 'var(--primary)' }}
          >
            Legal &amp; Compliance
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: 'var(--navy)' }}
          >
            HIPAA Notice of Privacy Practices
          </h1>
          <p className="text-sm text-gray-500">
            Effective Date: {EFFECTIVE_DATE}
          </p>
          <p className="mt-4 text-base text-gray-600 leading-relaxed max-w-2xl">
            This Notice describes how medical information about you may be
            used and disclosed and how you can get access to this information.
            <strong className="font-semibold text-gray-800"> Please review it carefully.</strong>
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 space-y-10 text-gray-700 leading-relaxed">

            {/* Who We Are */}
            <div>
              <h2
                className="text-xl font-bold mb-4"
                style={{ color: 'var(--navy)' }}
              >
                Our Duties
              </h2>
              <p>
                Ebenezer Telehealth (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
                &ldquo;our&rdquo;) is required by law to maintain the privacy
                of your protected health information (PHI), to provide you with
                notice of our legal duties and privacy practices with respect to
                PHI, and to notify you following a breach of unsecured PHI.
              </p>
              <p className="mt-4">
                We are required to abide by the terms of this Notice while it
                is in effect. We reserve the right to change the terms of this
                Notice and make the new Notice effective for all PHI we maintain.
                If we revise this Notice, we will post the revised version on
                our website.
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* Permitted Uses */}
            <div>
              <h2
                className="text-xl font-bold mb-4"
                style={{ color: 'var(--navy)' }}
              >
                How We May Use and Disclose Your Health Information
              </h2>
              <p className="mb-4">
                The following categories describe different ways we use and
                disclose your health information. Not every use or disclosure
                in a category will be listed; however, all of the ways we are
                permitted to use and disclose information will fall within one
                of the categories.
              </p>

              <div className="space-y-5">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Treatment
                  </h3>
                  <p>
                    We may use or disclose your PHI to provide you with
                    telehealth treatment and related services. For example, we
                    may share information about your condition with a specialist
                    or pharmacist as part of coordinating your care.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Payment
                  </h3>
                  <p>
                    We may use or disclose your PHI for payment purposes. For
                    example, we may share information necessary to process
                    billing and receive payment for services you have received.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Health Care Operations
                  </h3>
                  <p>
                    We may use and disclose your PHI for our health care
                    operations, including quality assessment, training,
                    accreditation, and other business activities necessary for
                    running our practice.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    As Required by Law
                  </h3>
                  <p>
                    We will disclose your PHI when required to do so by federal,
                    state, or local law.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Public Health Activities
                  </h3>
                  <p>
                    We may disclose your PHI for public health activities,
                    including to report communicable diseases or to respond to
                    public health emergencies, as permitted or required by law.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Health Oversight Activities
                  </h3>
                  <p>
                    We may disclose your PHI to health oversight agencies for
                    activities authorized by law, such as audits, investigations,
                    and inspections.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Judicial and Administrative Proceedings
                  </h3>
                  <p>
                    We may disclose your PHI in response to a court or
                    administrative order, subpoena, discovery request, or other
                    lawful process.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Serious Threats to Health or Safety
                  </h3>
                  <p>
                    To the extent permitted by applicable law, we may use or
                    disclose your PHI to prevent or lessen a serious and
                    imminent threat to your health or safety or the health or
                    safety of the public or another person.
                  </p>
                </div>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* Uses Requiring Authorization */}
            <div>
              <h2
                className="text-xl font-bold mb-4"
                style={{ color: 'var(--navy)' }}
              >
                Uses and Disclosures Requiring Your Authorization
              </h2>
              <p className="mb-3">
                Other uses and disclosures of your PHI not covered by this
                Notice will be made only with your written authorization,
                including:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>Most uses and disclosures of psychotherapy notes</li>
                <li>
                  Uses and disclosures of PHI for marketing purposes
                </li>
                <li>Sales of PHI</li>
                <li>
                  Other uses and disclosures not described in this Notice
                </li>
              </ul>
              <p className="mt-4">
                You may revoke any authorization you provide to us at any time,
                in writing. After you revoke your authorization, we will no
                longer use or disclose your PHI for the purposes described in
                the authorization, except to the extent we have already relied
                on the authorization.
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* Patient Rights */}
            <div>
              <h2
                className="text-xl font-bold mb-4"
                style={{ color: 'var(--navy)' }}
              >
                Your Rights Regarding Your Health Information
              </h2>

              <div className="space-y-5">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Right to Access
                  </h3>
                  <p>
                    You have the right to inspect and obtain a copy of your PHI
                    that we maintain in a designated record set. We may charge
                    a reasonable fee for copies. To request access, please
                    contact us in writing.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Right to Amend
                  </h3>
                  <p>
                    You have the right to request that we amend your PHI in a
                    designated record set if you believe the information is
                    incorrect or incomplete. We may deny your request in certain
                    circumstances.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Right to an Accounting of Disclosures
                  </h3>
                  <p>
                    You have the right to request a list of certain disclosures
                    we have made of your PHI during the six years prior to your
                    request, to whom, and for what purpose.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Right to Request Restrictions
                  </h3>
                  <p>
                    You have the right to request restrictions on how we use or
                    disclose your PHI for treatment, payment, or health care
                    operations. We are not required to agree to your request,
                    except as provided by law.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Right to Confidential Communications
                  </h3>
                  <p>
                    You have the right to request that we communicate with you
                    about health matters in a certain way or at a certain
                    location. We will accommodate reasonable requests.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Right to a Copy of This Notice
                  </h3>
                  <p>
                    You have the right to request a paper copy of this Notice
                    at any time, even if you have agreed to receive it
                    electronically.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Right to File a Complaint
                  </h3>
                  <p>
                    If you believe your privacy rights have been violated, you
                    may file a complaint with us or with the U.S. Department of
                    Health and Human Services (HHS) Office for Civil Rights.
                    We will not retaliate against you for filing a complaint.
                  </p>
                </div>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* Contact */}
            <div>
              <h2
                className="text-xl font-bold mb-4"
                style={{ color: 'var(--navy)' }}
              >
                Contact Our Privacy Officer
              </h2>
              <p className="mb-4">
                To exercise any of your rights, request information, or file a
                complaint, please contact us:
              </p>
              <address className="not-italic space-y-1">
                <p className="font-semibold" style={{ color: 'var(--navy)' }}>
                  Ebenezer Telehealth &mdash; Privacy Officer
                </p>
                <p>Oklahoma City, OK</p>
                <p>
                  Phone:{' '}
                  <a
                    href="tel:+14053498188"
                    className="font-medium"
                    style={{ color: 'var(--primary)' }}
                  >
                    {PHONE}
                  </a>
                </p>
                <p>
                  Email:{' '}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="font-medium"
                    style={{ color: 'var(--primary)' }}
                  >
                    {CONTACT_EMAIL}
                  </a>
                </p>
              </address>

              <p className="mt-6 text-sm text-gray-500">
                You may also submit a complaint to the U.S. Department of
                Health and Human Services, Office for Civil Rights, at{' '}
                <a
                  href="https://www.hhs.gov/ocr/privacy/hipaa/complaints/"
                  className="underline"
                  style={{ color: 'var(--primary)' }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  hhs.gov/ocr
                </a>
                .
              </p>
            </div>

            {/* Also see */}
            <div
              className="rounded-xl p-5"
              style={{
                backgroundColor: 'rgba(184,232,220,0.15)',
                border: '1px solid rgba(42,122,111,0.2)',
              }}
            >
              <p className="text-sm text-gray-600">
                For information about how we handle your personal data more
                broadly (outside of your protected health information), please
                review our{' '}
                <Link
                  href="/privacy-policy"
                  className="font-semibold underline"
                  style={{ color: 'var(--primary)' }}
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
