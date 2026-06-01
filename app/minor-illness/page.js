import Link from 'next/link'
import { CheckCircle2, ArrowRight, Clock } from 'lucide-react'

export const metadata = {
  title: 'Online Minor Illness Treatment Oklahoma | Ebenezer Telehealth',
  description:
    'Get treated for minor illnesses online in Oklahoma — sinus infections, colds, flu, UTIs & more. Often same-day. Led by Dr. Susan George, DNP, APRN. Cash-pay telehealth.',
  alternates: {
    canonical: 'https://ebenezertelehealth.com/minor-illness',
  },
}

const conditions = [
  'Sinus infections (sinusitis)',
  'Colds and upper respiratory infections',
  'Flu (influenza)',
  'Urinary tract infections (UTIs)',
  'Ear infections (adults)',
  'Sore throat / pharyngitis',
  'Allergies and nasal congestion',
  'Pink eye (conjunctivitis)',
  'Skin rashes (minor, non-emergency)',
  'Nausea, vomiting, and diarrhea (mild)',
]

export default function MinorIllnessPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative bg-white"
        style={{
          background:
            'linear-gradient(135deg, rgba(184,232,220,0.12) 0%, #ffffff 60%)',
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl">
            <nav
              className="flex items-center gap-2 text-sm text-gray-500 mb-6"
              aria-label="Breadcrumb"
            >
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <span aria-hidden="true">/</span>
              <span style={{ color: 'var(--primary)' }}>Minor Illness</span>
            </nav>

            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--primary)' }}
            >
              Minor Illness Treatment
            </span>

            <h1
              className="text-4xl md:text-5xl font-bold mb-5"
              style={{ color: 'var(--navy)' }}
            >
              Feel Better Without Leaving Home
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed mb-6 max-w-2xl">
              Get evaluated and treated online for common illnesses — sinus
              infections, colds, flu, UTIs, and more. Dr. Susan George can
              often see you the same day, from wherever you are in Oklahoma.
            </p>

            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold mb-8"
              style={{
                backgroundColor: 'rgba(184,232,220,0.4)',
                color: 'var(--primary-dark)',
              }}
            >
              <Clock className="h-4 w-4" aria-hidden="true" />
              Same-day appointments often available
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto">
                Book Your Visit
              </Link>
              <a
                href="tel:4053498188"
                className="btn-outline text-base px-7 py-3.5 w-full sm:w-auto"
              >
                Call (405) 349-8188
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Answer block — AEO */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
          <div
            className="rounded-xl border px-6 py-6"
            style={{
              borderColor: 'rgba(42,122,111,0.2)',
              backgroundColor: 'rgba(184,232,220,0.12)',
            }}
          >
            <p className="hero-answer-line">
              Ebenezer Telehealth provides online treatment for minor illnesses
              in Oklahoma, led by Dr. Susan George, DNP, APRN. Skip the urgent
              care wait — get a real evaluation, diagnosis, and prescription
              (when appropriate) from the comfort of home, often the same day.
            </p>
          </div>
        </div>
      </section>

      {/* Conditions treated */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2
                className="text-3xl font-bold mb-4"
                style={{ color: 'var(--navy)' }}
              >
                Common Conditions We Treat Online
              </h2>
              <p className="text-gray-600 mb-8">
                Many minor illnesses don&apos;t require an in-person visit.
                Dr. George can evaluate your symptoms, make a diagnosis, and
                prescribe treatment electronically — often the same day you
                reach out.
              </p>
              <ul className="space-y-3">
                {conditions.map((condition) => (
                  <li key={condition} className="flex items-start gap-3">
                    <CheckCircle2
                      className="h-5 w-5 mt-0.5 flex-shrink-0"
                      style={{ color: 'var(--primary)' }}
                      aria-hidden="true"
                    />
                    <span className="text-gray-700">{condition}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div
                className="rounded-2xl p-8 mb-6"
                style={{
                  backgroundColor: 'rgba(184,232,220,0.15)',
                  border: '1px solid rgba(42,122,111,0.15)',
                }}
              >
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ color: 'var(--navy)' }}
                >
                  When to use telehealth vs. emergency care
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Telehealth is ideal for non-emergency illnesses. If you are
                  experiencing chest pain, difficulty breathing, severe bleeding,
                  or any other emergency symptoms, call 911 or go to your
                  nearest emergency room immediately.
                </p>
              </div>

              <div
                className="rounded-2xl p-8"
                style={{
                  backgroundColor: 'rgba(28,43,64,0.04)',
                  border: '1px solid rgba(28,43,64,0.1)',
                }}
              >
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ color: 'var(--navy)' }}
                >
                  Cash-pay. No insurance required.
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  You&apos;ll know the full cost before you book. No hidden fees,
                  no insurance claims, no surprise bills. Just straightforward
                  care at a transparent price.
                </p>
                <Link href="/contact" className="btn-primary text-sm">
                  Book a Same-Day Visit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-links */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 text-center">
          <p className="text-gray-600 mb-4">
            See our full range of telehealth services:
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="/womens-health"
              className="inline-flex items-center gap-1.5 text-sm text-gray-600 hover:text-primary transition-colors"
            >
              Women&apos;s Health <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/weight-loss"
              className="inline-flex items-center gap-1.5 text-sm text-gray-600 hover:text-primary transition-colors"
            >
              Weight Loss Management <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
