import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Online Weight Loss Management Oklahoma | Ebenezer Telehealth',
  description:
    'Medically guided weight loss management in Oklahoma via telehealth. Overseen by Dr. Susan George, DNP, APRN, BC-ADM. Cash-pay, transparent pricing, no insurance required.',
  alternates: {
    canonical: 'https://ebenezertelehealth.com/weight-loss',
  },
}

const approach = [
  'Initial metabolic health assessment',
  'Personalized weight loss plan',
  'Medication management when appropriate',
  'Ongoing monitoring and follow-up',
  'Diabetes prevention and management integration',
  'Evidence-based, clinically guided care',
  'No gimmicks, supplements, or fad diets',
]

export default function WeightLossPage() {
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
              <span style={{ color: 'var(--primary)' }}>Weight Loss</span>
            </nav>

            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--primary)' }}
            >
              Online Weight Loss Management
            </span>

            <h1
              className="text-4xl md:text-5xl font-bold mb-5"
              style={{ color: 'var(--navy)' }}
            >
              Medically Guided Weight Loss — Online, Across Oklahoma
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl">
              A weight-loss plan built around your metabolic health — not a
              quick-fix program. Overseen by Dr. Susan George, DNP, APRN,
              BC-ADM, who brings clinical expertise in diabetes and metabolic
              health to every visit.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto">
                Book Your Visit
              </Link>
              <a
                href="tel:+14053498188"
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
              Ebenezer Telehealth offers online weight loss management in
              Oklahoma under the supervision of Dr. Susan George, DNP, APRN,
              BC-ADM. Our approach is clinically grounded, focused on metabolic
              health, and tailored to each patient — not a one-size-fits-all
              program.
            </p>
          </div>
        </div>
      </section>

      {/* Our approach */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2
                className="text-3xl font-bold mb-4"
                style={{ color: 'var(--navy)' }}
              >
                Our Clinical Approach
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Weight loss isn&apos;t simple, and it&apos;s not one-size-fits-all.
                Dr. Susan George&apos;s BC-ADM certification gives her deep expertise in
                how metabolic health, blood sugar, and hormones affect body
                weight — making her uniquely qualified to guide real, sustainable
                outcomes.
              </p>
              <ul className="space-y-3">
                {approach.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      className="h-5 w-5 mt-0.5 flex-shrink-0"
                      style={{ color: 'var(--primary)' }}
                      aria-hidden="true"
                    />
                    <span className="text-gray-700">{item}</span>
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
                Why medical guidance matters for weight loss
              </h3>
              <p className="text-gray-600 mb-5 leading-relaxed">
                Commercially marketed weight loss programs don&apos;t account for
                your individual health history, metabolism, or medications. A
                physician-supervised approach evaluates the full picture and
                creates a plan that is safe and effective for you.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Dr. Susan George&apos;s specialization in Advanced Diabetes Management
                means she understands the metabolic drivers of weight gain that
                many providers overlook.
              </p>
              <div className="mt-6">
                <Link href="/contact" className="btn-primary text-sm">
                  Book a Weight Loss Consult
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
            Questions? Call{' '}
            <a
              href="tel:+14053498188"
              className="font-semibold"
              style={{ color: 'var(--primary)' }}
            >
              (405) 349-8188
            </a>{' '}
            or see our other services:
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="/womens-health"
              className="inline-flex items-center gap-1.5 text-sm text-gray-600 hover:text-primary transition-colors"
            >
              Women&apos;s Health <ArrowRight className="h-4 w-4" aria-hidden="true" />
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
