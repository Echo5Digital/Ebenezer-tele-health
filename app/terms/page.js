import Link from 'next/link'

export const metadata = {
  title: 'Terms of Use',
  description:
    'Terms of Use for Ebenezer Telehealth. Review the scope of our Oklahoma-only telehealth services, user responsibilities, limitation of liability, and governing law.',
  alternates: {
    canonical: 'https://www.ebenezertelehealth.com/terms',
  },
  robots: { index: true, follow: true },
}

const EFFECTIVE_DATE = 'June 1, 2026'
const CONTACT_EMAIL = 'contact@ebenezertelehealth.com'
const PHONE = '(405) 349-8188'

export default function TermsOfUsePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white -mt-[96px] sm:-mt-[112px] lg:-mt-[128px] pt-[96px] sm:pt-[112px] lg:pt-[128px]">
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
            Terms of Use
          </h1>
          <p className="text-sm text-gray-500">
            Effective Date: {EFFECTIVE_DATE}
          </p>
          <p className="mt-4 text-base text-gray-600 leading-relaxed max-w-2xl">
            Please read these Terms of Use carefully before using our website or
            telehealth services. By accessing or using our services, you agree
            to be bound by these terms.
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
                These Terms of Use (&ldquo;Terms&rdquo;) govern your access to
                and use of the Ebenezer Telehealth website at{' '}
                <a
                  href="https://www.ebenezertelehealth.com"
                  className="font-medium underline"
                  style={{ color: 'var(--primary)' }}
                >
                  ebenezertelehealth.com
                </a>{' '}
                and the telehealth services provided by Ebenezer Telehealth
                (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By
                using our website or services, you agree to these Terms in full.
                If you do not agree, please do not use our website or services.
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* 1. Scope of Services */}
            <div>
              <h2
                className="text-xl font-bold mb-4"
                style={{ color: 'var(--navy)' }}
              >
                1. Scope of Services
              </h2>
              <p className="mb-3">
                Ebenezer Telehealth provides telehealth medical services
                including, but not limited to, women&apos;s health consultations,
                weight loss management, and minor illness treatment via secure
                video and/or audio technology.
              </p>
              <p className="mb-3">
                <strong>Oklahoma Only:</strong> Our telehealth services are
                provided exclusively to patients who are{' '}
                <strong>
                  physically located in the State of Oklahoma
                </strong>{' '}
                at the time of their appointment. We are licensed to practice in
                Oklahoma only and do not provide services to patients located in
                any other state, regardless of state of residency.
              </p>
              <p>
                We reserve the right to modify, suspend, or discontinue any
                aspect of our services at any time without prior notice.
              </p>
            </div>

            {/* 2. Not a Substitute for Emergency Care */}
            <div>
              <h2
                className="text-xl font-bold mb-4"
                style={{ color: 'var(--navy)' }}
              >
                2. Not a Substitute for Emergency Care
              </h2>
              <div
                className="rounded-xl p-5 mb-4"
                style={{
                  backgroundColor: 'rgba(151,206,204,0.15)',
                  border: '1px solid rgba(26,166,183,0.20)',
                }}
              >
                <p className="font-semibold text-gray-800">
                  If you are experiencing a medical emergency, call 911 or go to
                  your nearest emergency room immediately. Do not use this
                  website or attempt to contact us for emergency medical care.
                </p>
              </div>
              <p>
                Our telehealth services are not appropriate for medical
                emergencies or conditions requiring immediate in-person
                evaluation and treatment. Telehealth is not a replacement for
                all forms of in-person care. In certain situations, our provider
                may determine that an in-person visit or emergency care is
                necessary and will advise you accordingly.
              </p>
            </div>

            {/* 3. User Responsibilities */}
            <div>
              <h2
                className="text-xl font-bold mb-4"
                style={{ color: 'var(--navy)' }}
              >
                3. User Responsibilities
              </h2>
              <p className="mb-3">By using our services, you agree to:</p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>
                  <strong>Provide Accurate Information:</strong> You agree to
                  provide truthful, accurate, and complete information about
                  yourself and your health history. Providing false or misleading
                  information may affect the quality of care you receive and
                  constitutes a material breach of these Terms.
                </li>
                <li>
                  <strong>Be Physically in Oklahoma:</strong> You confirm that
                  you are physically located within the State of Oklahoma at the
                  time of each telehealth appointment. Misrepresenting your
                  location may have legal implications and may result in
                  termination of services.
                </li>
                <li>
                  <strong>Maintain Account Security:</strong> You are responsible
                  for maintaining the confidentiality of any account credentials
                  and for all activities that occur under your account.
                </li>
                <li>
                  <strong>Use Services Lawfully:</strong> You agree to use our
                  website and services only for lawful purposes and in compliance
                  with all applicable laws and regulations.
                </li>
                <li>
                  <strong>Meet Technology Requirements:</strong> You are
                  responsible for ensuring adequate internet access, a compatible
                  device, and a working camera and microphone for telehealth
                  video visits. Technical difficulties on your end do not relieve
                  you of scheduling obligations.
                </li>
                <li>
                  <strong>Follow Medical Guidance:</strong> While we provide
                  professional medical guidance, you are ultimately responsible
                  for your own healthcare decisions. You agree to follow up with
                  in-person providers as recommended by your provider.
                </li>
              </ul>
            </div>

            {/* 4. Telehealth-Specific Limitations */}
            <div>
              <h2
                className="text-xl font-bold mb-4"
                style={{ color: 'var(--navy)' }}
              >
                4. Telehealth-Specific Limitations
              </h2>
              <p className="mb-3">
                You acknowledge and accept the following limitations inherent in
                telehealth services:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>
                  Our provider cannot conduct a physical examination during a
                  telehealth visit.
                </li>
                <li>
                  Technology failures — such as poor internet connectivity or
                  equipment failure — may interrupt or prevent a visit from
                  occurring.
                </li>
                <li>
                  Certain conditions may require in-person evaluation, diagnostic
                  testing, or emergency care that cannot be provided via
                  telehealth.
                </li>
                <li>
                  Prescribing controlled substances via telehealth is subject to
                  state and federal regulations that may limit what can be
                  prescribed remotely.
                </li>
              </ul>
              <p className="mt-4">
                For more detail on the nature, benefits, and risks of telehealth,
                please review our{' '}
                <Link
                  href="/telehealth-consent"
                  className="font-medium underline"
                  style={{ color: 'var(--primary)' }}
                >
                  Telehealth Informed Consent
                </Link>
                .
              </p>
            </div>

            {/* 5. Intellectual Property */}
            <div>
              <h2
                className="text-xl font-bold mb-4"
                style={{ color: 'var(--navy)' }}
              >
                5. Intellectual Property
              </h2>
              <p className="mb-3">
                All content on this website — including text, graphics, logos,
                images, video, and software — is the exclusive property of
                Ebenezer Telehealth or its licensors and is protected by
                applicable copyright, trademark, and other intellectual property
                laws.
              </p>
              <p>
                You may access and use our website content for personal,
                non-commercial purposes only. You may not reproduce,
                redistribute, republish, or create derivative works from any
                content on this site without our express written permission.
              </p>
            </div>

            {/* 6. Disclaimer of Warranties */}
            <div>
              <h2
                className="text-xl font-bold mb-4"
                style={{ color: 'var(--navy)' }}
              >
                6. Disclaimer of Warranties
              </h2>
              <p>
                Our website and services are provided on an &ldquo;as is&rdquo;
                and &ldquo;as available&rdquo; basis without warranties of any
                kind, either express or implied, including but not limited to
                implied warranties of merchantability, fitness for a particular
                purpose, or non-infringement. We do not warrant that our website
                will be uninterrupted, error-free, or free of viruses or other
                harmful components.
              </p>
            </div>

            {/* 7. Limitation of Liability */}
            <div>
              <h2
                className="text-xl font-bold mb-4"
                style={{ color: 'var(--navy)' }}
              >
                7. Limitation of Liability
              </h2>
              <p className="mb-3">
                To the fullest extent permitted by applicable law, Ebenezer
                Telehealth, its providers, employees, and agents shall not be
                liable for any indirect, incidental, special, consequential, or
                punitive damages arising from:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>
                  Your use of, or inability to use, our website or services
                </li>
                <li>Any errors or omissions in content on our website</li>
                <li>
                  Unauthorized access to or alteration of your data
                </li>
                <li>Technology failures beyond our reasonable control</li>
                <li>
                  Decisions made by you based on information provided through
                  our services
                </li>
              </ul>
              <p className="mt-4">
                Nothing in these Terms limits liability for gross negligence,
                willful misconduct, fraud, or any liability that cannot be
                excluded under applicable law, including professional medical
                liability.
              </p>
            </div>

            {/* 8. Links to Third-Party Sites */}
            <div>
              <h2
                className="text-xl font-bold mb-4"
                style={{ color: 'var(--navy)' }}
              >
                8. Links to Third-Party Sites
              </h2>
              <p>
                Our website may contain links to third-party websites for
                convenience and informational purposes. These links do not
                constitute an endorsement of those sites or their content. We
                are not responsible for the content, accuracy, or privacy
                practices of any third-party website. You access such sites at
                your own risk.
              </p>
            </div>

            {/* 9. Governing Law */}
            <div>
              <h2
                className="text-xl font-bold mb-4"
                style={{ color: 'var(--navy)' }}
              >
                9. Governing Law and Dispute Resolution
              </h2>
              <p className="mb-3">
                These Terms are governed by and construed in accordance with the
                laws of the{' '}
                <strong>State of Oklahoma</strong>, without regard to its
                conflict of laws principles.
              </p>
              <p>
                Any disputes arising from or relating to these Terms or your use
                of our services shall be resolved exclusively in the state or
                federal courts located in Oklahoma County, Oklahoma. By using
                our services, you consent to the personal jurisdiction of such
                courts.
              </p>
            </div>

            {/* 10. Changes to These Terms */}
            <div>
              <h2
                className="text-xl font-bold mb-4"
                style={{ color: 'var(--navy)' }}
              >
                10. Changes to These Terms
              </h2>
              <p>
                We reserve the right to update or modify these Terms at any
                time. Changes will be effective when posted to this page with a
                revised effective date. Your continued use of our website or
                services after changes are posted constitutes your acceptance of
                the revised Terms. We encourage you to review these Terms
                periodically.
              </p>
            </div>

            {/* 11. Contact */}
            <div>
              <h2
                className="text-xl font-bold mb-4"
                style={{ color: 'var(--navy)' }}
              >
                11. Contact Us
              </h2>
              <p className="mb-3">
                If you have questions or concerns about these Terms of Use,
                please contact us:
              </p>
              <address className="not-italic space-y-1">
                <p
                  className="font-semibold"
                  style={{ color: 'var(--navy)' }}
                >
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

            {/* Also See */}
            <div
              className="rounded-xl p-5"
              style={{
                backgroundColor: 'rgba(151,206,204,0.15)',
                border: '1px solid rgba(26,166,183,0.20)',
              }}
            >
              <p className="text-sm text-gray-600">
                For information about how we handle your health and personal
                data, please review our{' '}
                <Link
                  href="/privacy-policy"
                  className="font-semibold underline"
                  style={{ color: 'var(--primary)' }}
                >
                  Privacy Policy
                </Link>{' '}
                and{' '}
                <Link
                  href="/hipaa-notice"
                  className="font-semibold underline"
                  style={{ color: 'var(--primary)' }}
                >
                  HIPAA Notice of Privacy Practices
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
