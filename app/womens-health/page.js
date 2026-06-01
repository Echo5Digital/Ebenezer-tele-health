import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'

export const metadata = {
  title: "Women's Health Telehealth Oklahoma City | Ebenezer Telehealth",
  description:
    "Discreet, compassionate women's health telehealth in Oklahoma. Birth control, UTIs, hormonal health, reproductive care & more. Led by Dr. Susan George, DNP, APRN. Cash-pay, no insurance needed.",
  alternates: {
    canonical: 'https://ebenezertelehealth.com/womens-health',
  },
}

const conditions = [
  'Birth control consultation & management',
  'Urinary tract infections (UTIs)',
  'Hormonal imbalances',
  'Reproductive health concerns',
  'Postpartum support',
  'Irregular menstrual cycles',
  'Vaginal infections',
  'Menopause symptom management',
  'Sexual health',
  'Preventive care guidance',
]

export default function WomensHealthPage() {
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
              <span style={{ color: 'var(--primary)' }}>Women&apos;s Health</span>
            </nav>

            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--primary)' }}
            >
              Women&apos;s Health Telehealth
            </span>

            <h1
              className="text-4xl md:text-5xl font-bold mb-5"
              style={{ color: 'var(--navy)' }}
            >
              Women&apos;s Health Care — From Anywhere in Oklahoma
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl">
              Discreet, compassionate virtual care for the things that matter
              most. Led by Dr. Susan George, DNP, APRN — a provider who
              specializes in women&apos;s health and truly understands your
              needs.
            </p>

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
              Ebenezer Telehealth provides women&apos;s health telehealth
              services across Oklahoma, led by Dr. Susan George, DNP, APRN. We
              offer confidential, cash-pay virtual visits for birth control,
              UTIs, hormonal health, reproductive care, and more — from the
              privacy and comfort of home.
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
                What We Treat
              </h2>
              <p className="text-gray-600 mb-8">
                Dr. George brings specialized women&apos;s health expertise to
                every virtual visit. Common conditions and concerns we address
                include:
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

            <div
              className="rounded-2xl p-8"
              style={{
                backgroundColor: 'rgba(184,232,220,0.15)',
                border: '1px solid rgba(42,122,111,0.15)',
              }}
            >
              <h3
                className="text-xl font-semibold mb-4"
                style={{ color: 'var(--navy)' }}
              >
                Why choose Dr. George for women&apos;s health?
              </h3>
              <p className="text-gray-600 mb-5 leading-relaxed">
                Dr. Susan George is not a generalist — she brings focused
                expertise in women&apos;s health, combined with the empathy and
                personal attention that every woman deserves when discussing
                sensitive health topics.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Every visit is private, secure, and HIPAA-compliant. You speak
                directly with Dr. George — no rotating staff, no impersonal
                networks.
              </p>
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="btn-primary text-sm"
                >
                  Book a Women&apos;s Health Visit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ teaser */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 text-center">
          <p className="text-gray-600 mb-4">
            Have questions? Visit our{' '}
            <Link
              href="/#faq"
              className="font-semibold underline hover:text-primary"
              style={{ color: 'var(--primary)' }}
            >
              FAQ page
            </Link>{' '}
            or call us directly at{' '}
            <a
              href="tel:4053498188"
              className="font-semibold"
              style={{ color: 'var(--primary)' }}
            >
              (405) 349-8188
            </a>
            .
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="/weight-loss"
              className="inline-flex items-center gap-1.5 text-sm text-gray-600 hover:text-primary transition-colors"
            >
              Weight Loss Management <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/minor-illness"
              className="inline-flex items-center gap-1.5 text-sm text-gray-600 hover:text-primary transition-colors"
            >
              Minor Illness Treatment <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
