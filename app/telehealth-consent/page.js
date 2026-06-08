import Link from 'next/link'

export const metadata = {
  title: 'Telehealth Informed Consent | Ebenezer Telehealth',
  description:
    'Telehealth Informed Consent for Ebenezer Telehealth. Understand the nature, benefits, limitations, and risks of telehealth services and your rights as a patient.',
  alternates: {
    canonical: 'https://ebenezertelehealth.com/telehealth-consent',
  },
  robots: { index: true, follow: true },
}

const EFFECTIVE_DATE = 'June 1, 2025'
const CONTACT_EMAIL = 'contact@ebenezertelehealth.com'
const PHONE = '(405) 349-8188'

export default function TelehealthConsentPage() {
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
            Telehealth Informed Consent
          </h1>
          <p className="text-sm text-gray-500">
            Effective Date: {EFFECTIVE_DATE}
          </p>
          <p className="mt-4 text-base text-gray-600 leading-relaxed max-w-2xl">
            Before your first telehealth visit with Ebenezer Telehealth, please
            read this document carefully. It describes the nature of telehealth
            services, their potential benefits and risks, and your rights as a
            patient.{' '}
            <strong className="font-semibold text-gray-800">
              Please review it carefully.
            </strong>
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
                This Telehealth Informed Consent (&ldquo;Consent&rdquo;) is
                provided by Ebenezer Telehealth (&ldquo;we,&rdquo;
                &ldquo;us,&rdquo; or &ldquo;our&rdquo;) to inform you about the
                use of telehealth technology in your healthcare. Your
                participation in telehealth services is entirely voluntary.
                Please read this information carefully before consenting to a
                telehealth appointment.
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* 1. What Is Telehealth? */}
            <div>
              <h2
                className="text-xl font-bold mb-4"
                style={{ color: 'var(--navy)' }}
              >
                1. What Is Telehealth?
              </h2>
              <p className="mb-3">
                Telehealth refers to the delivery of healthcare services using
                electronic communications technologies — such as secure video,
                audio, and messaging — that allow a provider and patient to
                interact remotely when they are not in the same physical
                location.
              </p>
              <p>
                At Ebenezer Telehealth, your appointments take place via secure,
                HIPAA-compliant video or audio platforms. Your provider
                conducts consultations, reviews your health history, assesses
                your concerns, and provides medical guidance through this
                technology. All telehealth visits are conducted with the same
                standard of care and professionalism as in-person appointments.
              </p>
            </div>

            {/* 2. Potential Benefits */}
            <div>
              <h2
                className="text-xl font-bold mb-4"
                style={{ color: 'var(--navy)' }}
              >
                2. Potential Benefits of Telehealth
              </h2>
              <p className="mb-3">
                Telehealth services may offer the following benefits:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>
                  Convenient access to care from the comfort of your home or
                  workplace
                </li>
                <li>
                  Reduced travel time and associated costs
                </li>
                <li>
                  Greater flexibility in appointment scheduling
                </li>
                <li>
                  Access to a specialized healthcare provider without having to
                  travel to a clinic
                </li>
                <li>
                  Continuity of care between in-person visits
                </li>
                <li>
                  Reduced exposure to illness in waiting rooms and clinical
                  settings
                </li>
                <li>
                  Care for those with mobility limitations, transportation
                  barriers, or time constraints
                </li>
              </ul>
            </div>

            {/* 3. Limitations */}
            <div>
              <h2
                className="text-xl font-bold mb-4"
                style={{ color: 'var(--navy)' }}
              >
                3. Limitations of Telehealth
              </h2>
              <p className="mb-3">
                Telehealth is not appropriate for all medical conditions and has
                inherent limitations compared to in-person care. You should be
                aware of the following:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>
                  Your provider <strong>cannot perform a physical examination</strong>{' '}
                  during a telehealth visit.
                </li>
                <li>
                  Certain diagnostic tests — such as blood work, urinalysis,
                  imaging, or physical assessment — require an in-person visit
                  or referral to a local facility.
                </li>
                <li>
                  Some conditions may be difficult to accurately assess without
                  a hands-on clinical examination.
                </li>
                <li>
                  Prescribing controlled substances via telehealth is subject to
                  additional state and federal regulatory requirements that may
                  limit what can be prescribed remotely.
                </li>
                <li>
                  Telehealth is <strong>not a substitute</strong> for emergency
                  or urgent in-person care.
                </li>
              </ul>
            </div>

            {/* 4. Risks */}
            <div>
              <h2
                className="text-xl font-bold mb-4"
                style={{ color: 'var(--navy)' }}
              >
                4. Risks and Technology Considerations
              </h2>
              <p className="mb-3">
                As with any healthcare service, telehealth carries certain
                risks. By proceeding with a telehealth visit, you acknowledge
                and accept these potential risks:
              </p>

              <div className="space-y-5">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Technology Failure
                  </h3>
                  <p>
                    Internet connectivity issues, equipment failure, software
                    problems, or power outages may interrupt or prevent a
                    telehealth session from occurring. In such cases, your
                    provider may attempt to contact you by phone or the
                    appointment may need to be rescheduled at no additional
                    charge for the interruption.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Incomplete Clinical Information
                  </h3>
                  <p>
                    Without the ability to conduct a physical examination or use
                    in-office diagnostic tools, there is an inherent risk that
                    clinically relevant information may not be captured during a
                    telehealth visit. This may affect diagnostic accuracy or
                    treatment decisions, and may necessitate a referral for
                    in-person evaluation.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Privacy and Security
                  </h3>
                  <p>
                    Despite our use of HIPAA-compliant, encrypted technology
                    platforms, no method of electronic transmission is entirely
                    free from the risk of interception or unauthorized access.
                    You acknowledge that this risk exists and that we take
                    reasonable and required measures to minimize it.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Your Environment
                  </h3>
                  <p>
                    You are responsible for conducting your telehealth visit in a
                    private, secure location where third parties cannot overhear
                    or observe the session without your knowledge. Ebenezer
                    Telehealth is not responsible for privacy breaches that occur
                    on your end due to your surroundings or personal devices.
                  </p>
                </div>
              </div>
            </div>

            {/* 5. Privacy and Security Measures */}
            <div>
              <h2
                className="text-xl font-bold mb-4"
                style={{ color: 'var(--navy)' }}
              >
                5. Privacy and Security Measures
              </h2>
              <p className="mb-3">
                Ebenezer Telehealth takes your privacy seriously. We use the
                following measures to protect your health information during
                telehealth visits:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>
                  HIPAA-compliant, end-to-end encrypted video and audio platforms
                </li>
                <li>
                  Secure, password-protected electronic health records (EHR)
                  systems
                </li>
                <li>
                  Access to your health information is limited to authorized
                  clinical and administrative staff only
                </li>
                <li>
                  Business Associate Agreements (BAAs) are in place with all
                  technology vendors who handle your protected health
                  information (PHI)
                </li>
                <li>
                  Regular staff training on HIPAA compliance and data security
                  best practices
                </li>
              </ul>
              <p className="mt-4">
                For full details on how we handle your protected health
                information, please review our{' '}
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

            {/* 6. Provider Credentials */}
            <div>
              <h2
                className="text-xl font-bold mb-4"
                style={{ color: 'var(--navy)' }}
              >
                6. Provider Credentials
              </h2>
              <p className="mb-4">
                Your telehealth services at Ebenezer Telehealth are provided
                by a licensed advanced practice provider:
              </p>
              <div
                className="rounded-xl p-5"
                style={{
                  backgroundColor: 'rgba(153,217,217,0.15)',
                  border: '1px solid rgba(3,93,87,0.20)',
                }}
              >
                <p
                  className="font-semibold text-gray-900"
                  style={{ color: 'var(--navy)' }}
                >
                  Dr. Susan George, DNP, APRN, BC-ADM
                </p>
                <ul className="mt-2 space-y-1 text-sm text-gray-600">
                  <li>Doctor of Nursing Practice (DNP)</li>
                  <li>Advanced Practice Registered Nurse (APRN)</li>
                  <li>Board-Certified in Advanced Diabetes Management (BC-ADM)</li>
                  <li className="mt-2 font-medium" style={{ color: 'var(--primary)' }}>
                    Licensed in the State of Oklahoma
                  </li>
                </ul>
              </div>
              <p className="mt-4 text-sm text-gray-600">
                You have the right to verify provider credentials through the
                Oklahoma State Board of Nursing or to request this information
                directly from our office prior to your appointment.
              </p>
            </div>

            {/* 7. Your Rights */}
            <div>
              <h2
                className="text-xl font-bold mb-4"
                style={{ color: 'var(--navy)' }}
              >
                7. Your Rights as a Patient
              </h2>
              <p className="mb-4">
                You have the following rights regarding telehealth services at
                Ebenezer Telehealth:
              </p>

              <div className="space-y-5">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Right to Refuse
                  </h3>
                  <p>
                    You have the right to refuse telehealth services at any
                    time, before or during an appointment, without affecting
                    your right to receive future care. Refusal of telehealth
                    will not result in any penalty or negative treatment.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Right to Request In-Person Referral
                  </h3>
                  <p>
                    You have the right to request an in-person referral at any
                    time if you feel that a telehealth visit is not meeting your
                    needs, or if your provider determines that in-person
                    evaluation is clinically appropriate. We will assist in
                    coordinating referrals as needed.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Right to Confidentiality
                  </h3>
                  <p>
                    Your health information disclosed during telehealth visits is
                    protected under HIPAA and applicable Oklahoma state privacy
                    laws. It will not be shared without your authorization except
                    as described in our{' '}
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

                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Right to Ask Questions
                  </h3>
                  <p>
                    You have the right to ask questions about your treatment,
                    the technology being used, your diagnosis, and any aspect of
                    your telehealth visit — before, during, or after the
                    appointment.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Right to Withdraw Consent
                  </h3>
                  <p>
                    You may withdraw your consent to receive telehealth services
                    at any time by notifying us in writing or verbally during
                    a session. Withdrawal of consent will not affect the quality
                    of any future care you receive through available channels,
                    nor will it result in any penalty.
                  </p>
                </div>
              </div>
            </div>

            {/* 8. Acknowledgment */}
            <div>
              <h2
                className="text-xl font-bold mb-4"
                style={{ color: 'var(--navy)' }}
              >
                8. Patient Acknowledgment
              </h2>
              <p className="mb-3">
                By scheduling and/or attending a telehealth appointment with
                Ebenezer Telehealth, you confirm that:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>
                  You have read and understand this Telehealth Informed Consent.
                </li>
                <li>
                  You understand the benefits, limitations, and risks of
                  telehealth services as described above.
                </li>
                <li>
                  You voluntarily consent to receive healthcare services via
                  telehealth technology.
                </li>
                <li>
                  You understand that telehealth is not appropriate for
                  emergencies, and you know to call 911 or go to your nearest
                  emergency room in any medical emergency.
                </li>
                <li>
                  You confirm that you are physically located in the State of
                  Oklahoma at the time of your appointment.
                </li>
                <li>
                  You understand your right to refuse telehealth services or
                  request an in-person referral at any time.
                </li>
              </ul>
              <p className="mt-4 text-sm text-gray-600">
                <strong>Note:</strong> A formal signed consent form may also be
                collected electronically during your intake or booking process.
                This page serves as your informational disclosure. If you have
                any questions about this consent before your appointment, please
                contact us.
              </p>
            </div>

            {/* 9. Contact */}
            <div>
              <h2
                className="text-xl font-bold mb-4"
                style={{ color: 'var(--navy)' }}
              >
                9. Questions &amp; Contact
              </h2>
              <p className="mb-3">
                If you have any questions about this consent, telehealth
                services, or your rights as a patient, please contact us before
                your appointment:
              </p>
              <address className="not-italic space-y-1">
                <p
                  className="font-semibold"
                  style={{ color: 'var(--navy)' }}
                >
                  Ebenezer Telehealth
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
            </div>

            {/* Also See */}
            <div
              className="rounded-xl p-5"
              style={{
                backgroundColor: 'rgba(153,217,217,0.15)',
                border: '1px solid rgba(3,93,87,0.20)',
              }}
            >
              <p className="text-sm text-gray-600">
                Also review our{' '}
                <Link
                  href="/hipaa-notice"
                  className="font-semibold underline"
                  style={{ color: 'var(--primary)' }}
                >
                  HIPAA Notice of Privacy Practices
                </Link>
                ,{' '}
                <Link
                  href="/privacy-policy"
                  className="font-semibold underline"
                  style={{ color: 'var(--primary)' }}
                >
                  Privacy Policy
                </Link>
                , and{' '}
                <Link
                  href="/terms"
                  className="font-semibold underline"
                  style={{ color: 'var(--primary)' }}
                >
                  Terms of Use
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
