import { CheckCircle2 } from 'lucide-react'

const bullets = [
  'You see a real, named provider every time — Dr. Susan George, DNP, APRN, BC-ADM.',
  "Transparent cash pricing so you can make a confident decision before you book.",
  "Convenient and private — secure, HIPAA-compliant visits from wherever you are in Oklahoma.",
  "Especially for women and families, with a provider who specializes in women's health.",
]

export default function WhyChooseUs() {
  return (
    <section className="bg-white" aria-labelledby="why-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Text */}
          <div>
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--primary)' }}
            >
              Why Ebenezer
            </span>
            <h2
              id="why-heading"
              className="text-3xl md:text-4xl font-bold mb-5"
              style={{ color: 'var(--navy)' }}
            >
              Why Oklahomans Choose Ebenezer Telehealth
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
              Ebenezer Telehealth was built to make quality medical care
              accessible to women and families across Oklahoma — without the
              long drives, crowded waiting rooms, or confusing bills. We deliver
              care with integrity, dignity, and a personal touch that reflects
              our heart of faith.
            </p>

            <ul className="space-y-4" role="list">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <CheckCircle2
                    className="h-5 w-5 mt-0.5 flex-shrink-0"
                    style={{ color: 'var(--primary)' }}
                    aria-hidden="true"
                  />
                  <span className="text-gray-700 leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual accent */}
          <div className="flex items-center justify-center lg:justify-end">
            <div
              className="relative w-full max-w-sm rounded-2xl p-8"
              style={{ backgroundColor: 'rgba(184,232,220,0.2)', border: '1px solid rgba(42,122,111,0.15)' }}
            >
              {/* Stats / trust signals */}
              <div className="space-y-6">
                <div className="text-center">
                  <div
                    className="text-5xl font-bold mb-1"
                    style={{ color: 'var(--primary)' }}
                  >
                    1
                  </div>
                  <p className="text-sm text-gray-600">
                    Dedicated provider — every single visit
                  </p>
                </div>
                <div
                  className="border-t"
                  style={{ borderColor: 'rgba(42,122,111,0.2)' }}
                />
                <div className="text-center">
                  <div
                    className="text-5xl font-bold mb-1"
                    style={{ color: 'var(--primary)' }}
                  >
                    OK
                  </div>
                  <p className="text-sm text-gray-600">
                    Serving all of Oklahoma via secure telehealth
                  </p>
                </div>
                <div
                  className="border-t"
                  style={{ borderColor: 'rgba(42,122,111,0.2)' }}
                />
                <div className="text-center">
                  <div
                    className="text-5xl font-bold mb-1"
                    style={{ color: 'var(--primary)' }}
                  >
                    $0
                  </div>
                  <p className="text-sm text-gray-600">
                    Surprise bills — transparent pricing always
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
