import Link from 'next/link'

const steps = [
  {
    number: '01',
    title: 'Book Your Visit',
    description:
      'Book your visit online or call (405) 349-8188 to schedule at a time that works for you.',
  },
  {
    number: '02',
    title: 'Complete a Quick Intake',
    description:
      'Share your health history and tell us what\'s going on — it only takes a few minutes.',
  },
  {
    number: '03',
    title: 'Meet with Dr. George',
    description:
      'Connect by secure video from anywhere in Oklahoma. A private, real medical consultation.',
  },
  {
    number: '04',
    title: 'Get Your Plan',
    description:
      'Receive your diagnosis, treatment plan, and prescriptions sent electronically to your pharmacy.',
  },
]

export default function HowItWorks() {
  return (
    <section
      className="relative"
      style={{ backgroundColor: 'rgba(184,232,220,0.12)' }}
      aria-labelledby="how-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">

        {/* Heading */}
        <div className="text-center mb-12 md:mb-14">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: 'var(--primary)' }}
          >
            How It Works
          </span>
          <h2
            id="how-heading"
            className="text-3xl md:text-4xl font-bold"
            style={{ color: 'var(--navy)' }}
          >
            Getting Care Online Is Simple
          </h2>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <div key={step.number} className="relative flex flex-col gap-4">
              {/* Connector line (desktop only) */}
              {index < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] right-0 h-px"
                  style={{ backgroundColor: 'rgba(42,122,111,0.25)' }}
                  aria-hidden="true"
                />
              )}

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col gap-4 h-full">
                <div
                  className="inline-flex h-14 w-14 items-center justify-center rounded-xl text-xl font-bold"
                  style={{
                    backgroundColor: 'var(--primary)',
                    color: '#ffffff',
                  }}
                >
                  {step.number}
                </div>
                <h3
                  className="text-base font-semibold leading-snug"
                  style={{ color: 'var(--navy)' }}
                >
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/contact" className="btn-primary text-base px-8 py-3.5">
            Book Your Visit
          </Link>
        </div>
      </div>
    </section>
  )
}
