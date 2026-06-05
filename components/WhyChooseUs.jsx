import { CheckCircle2, User, MapPin, DollarSign } from 'lucide-react'

const bullets = [
  'You see a real, named provider every time — Dr. Susan George, DNP, APRN, BC-ADM.',
  "Transparent cash pricing so you can make a confident decision before you book.",
  "Convenient and private — secure, HIPAA-compliant telehealth visits from wherever you are in Oklahoma.",
  "Faith-driven care for women and families — with a Women's Health Specialist who is Board Certified in Advanced Diabetes Management (BC-ADM).",
]

const statCards = [
  { icon: User,        stat: '1',  desc: 'Dedicated provider — every single visit' },
  { icon: MapPin,      stat: 'OK', desc: 'Serving all of Oklahoma via secure telehealth' },
  { icon: DollarSign,  stat: '$0', desc: 'Surprise bills — transparent pricing always' },
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left: Text ── */}
          <div>
            {/* Label pill */}
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5"
              style={{
                backgroundColor: 'rgba(3,93,87,0.08)',
                border: '1px solid rgba(3,93,87,0.15)',
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

            <h2
              id="why-heading"
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ color: 'var(--navy)' }}
            >
              Why Oklahomans Choose Ebenezer Telehealth
            </h2>

            {/* Decorative accent line */}
            <div className="flex items-center gap-2 mb-6" aria-hidden="true">
              <div className="h-[3px] w-10 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
              <div className="h-[3px] w-4 rounded-full" style={{ backgroundColor: 'rgba(3,93,87,0.25)' }} />
              <div className="h-[3px] w-2 rounded-full" style={{ backgroundColor: 'rgba(3,93,87,0.12)' }} />
            </div>

            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
              Ebenezer Telehealth was built to make quality telehealth care
              accessible to women and families across Oklahoma — without the
              long drives, crowded waiting rooms, or confusing bills. We deliver
              care with integrity, dignity, and a personal touch that reflects
              our heart of faith.
            </p>

            <ul className="space-y-3.5" role="list">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <div
                    className="flex-shrink-0 mt-0.5 h-5 w-5 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(3,93,87,0.10)' }}
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

          {/* ── Right: Split teal/white stat cards ── */}
          <div className="flex flex-col gap-4 w-full">
            {statCards.map(({ icon: Icon, stat, desc }) => (
              <div
                key={stat}
                className="flex rounded-2xl overflow-hidden"
                style={{
                  boxShadow: '0 6px 28px rgba(3,93,87,0.13), 0 1px 6px rgba(0,0,0,0.06)',
                }}
              >
                {/* Teal icon panel */}
                <div
                  className="flex items-center justify-center flex-shrink-0 w-[80px]"
                  style={{
                    background: 'linear-gradient(160deg, #047a73 0%, #035D57 60%, #024740 100%)',
                  }}
                >
                  <div
                    className="h-11 w-11 rounded-xl flex items-center justify-center"
                    style={{
                      backgroundColor: 'rgba(153,217,217,0.18)',
                      border: '1.5px solid rgba(153,217,217,0.50)',
                      boxShadow: '0 0 14px rgba(153,217,217,0.20)',
                    }}
                  >
                    <Icon className="h-5 w-5 text-white" aria-hidden="true" />
                  </div>
                </div>

                {/* White content panel */}
                <div className="flex items-center gap-4 bg-white px-6 py-5 flex-1 min-w-0">
                  {/* Stat */}
                  <div
                    className="text-3xl sm:text-4xl font-extrabold tracking-tight flex-shrink-0 leading-none"
                    style={{ color: '#035D57' }}
                  >
                    {stat}
                  </div>

                  {/* Divider */}
                  <div
                    className="h-9 w-px flex-shrink-0"
                    style={{ backgroundColor: 'rgba(3,93,87,0.12)' }}
                    aria-hidden="true"
                  />

                  {/* Description */}
                  <p className="text-sm sm:text-[15px] text-gray-600 leading-snug min-w-0">
                    {desc}
                  </p>
                </div>
              </div>
            ))}

            {/* Trust note */}
            <p
              className="text-xs text-center mt-1"
              style={{ color: 'rgba(3,93,87,0.55)' }}
            >
              Every visit · Statewide Oklahoma · Cash-pay, no surprises
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
