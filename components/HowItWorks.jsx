import Link from 'next/link'
import VideoBackground from '@/components/VideoBackground'

const steps = [
  {
    number: '01',
    title: 'Book Your Visit',
    description: (
      <>
        Book your visit online or{' '}
        <a
          href="tel:+14053498188"
          className="font-semibold underline"
          style={{ color: '#99D9D9' }}
        >
          call (405) 349-8188
        </a>{' '}
        to schedule at a time that works for you.
      </>
    ),
  },
  {
    number: '02',
    title: 'Complete a Quick Intake',
    description:
      'Share your health history and tell us what\'s going on — it only takes a few minutes.',
  },
  {
    number: '03',
    title: 'Meet with Dr. Susan George',
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
      className="relative overflow-hidden"
      style={{ backgroundColor: '#035D57' }}
      aria-labelledby="how-heading"
    >
      {/* Background video — loops between 2 s and 7 s for smooth playback */}
      <VideoBackground />

      {/* Dark overlay — keeps all text and cards clearly legible */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(3,93,87,0.50)' }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">

        {/* Heading */}
        <div className="text-center mb-12 md:mb-14">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: '#99D9D9' }}
          >
            How It Works
          </span>
          <h2
            id="how-heading"
            className="text-3xl md:text-4xl font-bold mb-5"
            style={{ color: '#ffffff' }}
          >
            How Do Online Doctor Visits in Oklahoma Work?
          </h2>
          {/* AEO answer-first paragraph — ~45 words, direct answer before elaboration */}
          <p
            className="text-base md:text-lg max-w-2xl mx-auto"
            style={{ color: 'rgba(255,255,255,0.92)' }}
          >
            Book online or{' '}
            <a
              href="tel:+14053498188"
              className="font-semibold underline"
              style={{ color: '#99D9D9' }}
            >
              call (405) 349-8188
            </a>
            , complete a short health intake, then meet Dr. Susan George by
            secure video from anywhere in Oklahoma. The visit is a real medical
            consultation. You receive a diagnosis, treatment plan, and
            prescriptions sent electronically to your pharmacy when appropriate.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <div key={step.number} className="relative flex flex-col gap-4">
              {/* Connector line (desktop only) */}
              {index < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] right-0 h-px"
                  style={{ backgroundColor: 'rgba(153,217,217,0.22)' }}
                  aria-hidden="true"
                />
              )}

              <div
                className="rounded-2xl p-6 flex flex-col gap-4 h-full"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.10)',
                }}
              >
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
                  style={{ color: '#ffffff' }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'rgba(255,255,255,0.88)' }}
                >
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
          <p className="mt-3 text-sm" style={{ color: 'rgba(255,255,255,0.85)' }}>
            or{' '}
            <a
              href="tel:+14053498188"
              className="font-semibold"
              style={{ color: '#99D9D9' }}
            >
              call (405) 349-8188
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
