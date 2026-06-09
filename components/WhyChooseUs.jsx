import { CheckCircle2 } from 'lucide-react'

const bullets = [
  'You see a real, named provider every time: Susan George, DNP, APRN, BC-ADM, Online Practitioner.',
  'Transparent cash pricing so you can make a confident decision before you book.',
  'Convenient and private: secure, HIPAA-compliant visits from wherever you are in Oklahoma.',
  'Medically guided weight loss with a provider Board Certified in Advanced Diabetes Management.',
  "Especially for women and families, with a provider who specializes in women's health.",
]

export default function WhyChooseUs() {
  return (
    <section
      className="relative overflow-hidden"
      aria-labelledby="why-heading"
      style={{
        backgroundImage: "url('/body_bg.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(232,247,247,0.80)' }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">

          {/* Label pill */}
          <div className="flex justify-center mb-5">
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5"
              style={{
                backgroundColor: 'rgba(26,166,183,0.08)',
                border: '1px solid rgba(26,166,183,0.15)',
              }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: 'var(--primary)' }}
                aria-hidden="true"
              />
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: 'var(--primary)' }}
              >
                Why Ebenezer
              </span>
            </div>
          </div>

          <h2
            id="why-heading"
            className="text-3xl md:text-4xl font-bold mb-3"
            style={{ color: 'var(--navy)' }}
          >
            Why Oklahomans Choose Ebenezer Telehealth
          </h2>

          {/* Decorative accent line */}
          <div className="flex items-center justify-center gap-2 mb-6" aria-hidden="true">
            <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
            <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.25)' }} />
            <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(26,166,183,0.12)' }} />
          </div>

          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
            Ebenezer Telehealth was built to make quality medical care
            accessible to women and families across Oklahoma, without long
            drives, crowded waiting rooms, or confusing bills.
          </p>

          <ul className="space-y-3.5 text-left" role="list">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3">
                <div
                  className="flex-shrink-0 mt-0.5 h-5 w-5 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(26,166,183,0.10)' }}
                  aria-hidden="true"
                >
                  <CheckCircle2
                    className="h-3.5 w-3.5"
                    style={{ color: 'var(--primary)' }}
                  />
                </div>
                <span className="text-gray-700 leading-relaxed">{bullet}</span>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </section>
  )
}
