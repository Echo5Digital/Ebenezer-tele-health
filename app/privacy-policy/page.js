import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for Ebenezer Telehealth. Learn how we collect, use, and protect your personal and health information.',
  alternates: {
    canonical: 'https://www.ebenezertelehealth.com/privacy-policy',
  },
  robots: { index: true, follow: true },
}

const EFFECTIVE_DATE = 'June 1, 2026'
const CONTACT_EMAIL = 'contact@ebenezertelehealth.com'
const PHONE = '(405) 349-8188'
const SITE_URL = 'https://www.ebenezertelehealth.com'

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
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
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500">
            Effective Date: {EFFECTIVE_DATE}
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 space-y-10 text-gray-700 leading-relaxed">

            {/* Intro */}
            <div>
              <p>
                Ebenezer Telehealth (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
                &ldquo;our&rdquo;) is committed to protecting the privacy of
                our patients, website visitors, and anyone who contacts us. This
                Privacy Policy explains what information we collect, how we use
                it, and your rights regarding that information.
              </p>
              <p className="mt-4">
                This Privacy Policy applies to our website at{' '}
                <a
                  href={SITE_URL}
                  className="font-medium underline"
                  style={{ color: 'var(--primary)' }}
                >
                  ebenezertelehealth.com
                </a>{' '}
                and any related services we provide.
              </p>
              <p className="mt-4">
                Please also review our{' '}
                <Link
                  href="/hipaa-notice"
                  className="font-medium underline"
                  style={{ color: 'var(--primary)' }}
                >
                  HIPAA Notice of Privacy Practices
                </Link>
                , which governs how we handle your protected health information
                (PHI) as a covered healthcare entity.
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* 1. Information We Collect */}
            <div>
              <h2
                className="text-xl font-bold mb-4"
                style={{ color: 'var(--navy)' }}
              >
                1. Information We Collect
              </h2>
              <p className="mb-3">
                We may collect the following types of information:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>
                  <strong>Contact Information:</strong> Name, email address,
                  phone number, and mailing address when you contact us or
                  complete a form.
                </li>
                <li>
                  <strong>Appointment &amp; Booking Data:</strong> Information
                  submitted when scheduling a telehealth visit, including
                  preferred appointment times and reasons for your visit.
                </li>
                <li>
                  <strong>Health Information:</strong> Medical history,
                  symptoms, and other health-related data you provide during
                  or prior to your telehealth visit. This information is
                  governed by our HIPAA Notice of Privacy Practices.
                </li>
                <li>
                  <strong>Payment Information:</strong> Billing details
                  processed securely through our payment processor. We do not
                  store full payment card numbers on our servers.
                </li>
                <li>
                  <strong>Website Usage Data:</strong> IP address, browser
                  type, pages visited, and other analytics data collected
                  automatically when you visit our website.
                </li>
              </ul>
            </div>

            {/* 2. How We Use Your Information */}
            <div>
              <h2
                className="text-xl font-bold mb-4"
                style={{ color: 'var(--navy)' }}
              >
                2. How We Use Your Information
              </h2>
              <p className="mb-3">We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>Schedule and provide telehealth appointments</li>
                <li>Communicate with you about your care</li>
                <li>Process payments for services rendered</li>
                <li>
                  Send appointment reminders and follow-up communications
                </li>
                <li>
                  Improve our website and services through analytics
                </li>
                <li>Comply with applicable laws and regulations</li>
              </ul>
              <p className="mt-4">
                We do <strong>not</strong> sell your personal information to
                third parties.
              </p>
            </div>

            {/* 3. How We Share Your Information */}
            <div>
              <h2
                className="text-xl font-bold mb-4"
                style={{ color: 'var(--navy)' }}
              >
                3. How We Share Your Information
              </h2>
              <p className="mb-3">
                We may share your information only in the following
                circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>
                  <strong>Service Providers:</strong> We work with trusted
                  third-party vendors (such as scheduling platforms and
                  payment processors) who assist us in operating our practice.
                  These vendors are contractually required to protect your
                  information.
                </li>
                <li>
                  <strong>Legal Requirements:</strong> We may disclose
                  information when required by law, court order, or
                  government regulation.
                </li>
                <li>
                  <strong>Health Oversight:</strong> As a healthcare provider,
                  certain disclosures may be required by state or federal health
                  oversight agencies.
                </li>
                <li>
                  <strong>With Your Consent:</strong> We may share information
                  with other parties when you have given us your explicit
                  consent to do so.
                </li>
              </ul>
            </div>

            {/* 4. Cookies and Tracking */}
            <div>
              <h2
                className="text-xl font-bold mb-4"
                style={{ color: 'var(--navy)' }}
              >
                4. Cookies and Website Analytics
              </h2>
              <p>
                Our website may use cookies and similar tracking technologies
                to improve your browsing experience and analyze site traffic.
                You can control cookie settings through your browser preferences.
                Disabling cookies may affect certain website functionality.
              </p>
              <p className="mt-3">
                We may use analytics tools (such as Google Analytics) to
                understand how visitors use our site. These tools collect
                anonymized usage data. No personally identifiable health
                information is transmitted through website analytics.
              </p>
            </div>

            {/* 5. Data Security */}
            <div>
              <h2
                className="text-xl font-bold mb-4"
                style={{ color: 'var(--navy)' }}
              >
                5. Data Security
              </h2>
              <p>
                We implement reasonable administrative, technical, and physical
                safeguards to protect your information from unauthorized access,
                use, or disclosure. Our telehealth platform uses HIPAA-compliant
                encryption for all video visits and communications.
              </p>
              <p className="mt-3">
                No method of electronic transmission or storage is 100% secure.
                While we strive to protect your data, we cannot guarantee
                absolute security.
              </p>
            </div>

            {/* 6. Your Rights */}
            <div>
              <h2
                className="text-xl font-bold mb-4"
                style={{ color: 'var(--navy)' }}
              >
                6. Your Rights
              </h2>
              <p className="mb-3">
                Depending on applicable law, you may have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>Access the personal information we hold about you</li>
                <li>
                  Request correction of inaccurate or incomplete information
                </li>
                <li>
                  Request deletion of your personal information (subject to
                  applicable legal and medical record retention requirements)
                </li>
                <li>
                  Opt out of non-essential communications from us
                </li>
              </ul>
              <p className="mt-4">
                For requests related to your protected health information (PHI),
                please refer to our{' '}
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

            {/* 7. Children's Privacy */}
            <div>
              <h2
                className="text-xl font-bold mb-4"
                style={{ color: 'var(--navy)' }}
              >
                7. Children&apos;s Privacy
              </h2>
              <p>
                Our website and telehealth services are not directed toward
                children under the age of 18. We do not knowingly collect
                personal information from children under 18. If you believe we
                have inadvertently collected such information, please contact us
                immediately.
              </p>
            </div>

            {/* 8. Third-Party Links */}
            <div>
              <h2
                className="text-xl font-bold mb-4"
                style={{ color: 'var(--navy)' }}
              >
                8. Third-Party Links
              </h2>
              <p>
                Our website may contain links to third-party websites. We are
                not responsible for the privacy practices or content of those
                sites. We encourage you to review the privacy policies of any
                site you visit.
              </p>
            </div>

            {/* 9. Changes to This Policy */}
            <div>
              <h2
                className="text-xl font-bold mb-4"
                style={{ color: 'var(--navy)' }}
              >
                9. Changes to This Privacy Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time to reflect
                changes in our practices or applicable law. The updated policy
                will be posted on this page with a revised effective date. Your
                continued use of our website or services after any changes
                constitutes your acceptance of the revised policy.
              </p>
            </div>

            {/* 10. Contact Us */}
            <div>
              <h2
                className="text-xl font-bold mb-4"
                style={{ color: 'var(--navy)' }}
              >
                10. Contact Us
              </h2>
              <p className="mb-3">
                If you have questions about this Privacy Policy or wish to
                exercise your rights, please contact us:
              </p>
              <address className="not-italic space-y-1">
                <p className="font-semibold" style={{ color: 'var(--navy)' }}>
                  Ebenezer Telehealth
                </p>
                <p>7415 NW 23rd Street, Bethany, OK 73008</p>
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
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
