import { UserCheck, Receipt, Wifi, Heart } from 'lucide-react'

const valueCards = [
  {
    icon: UserCheck,
    title: 'Real, credentialed provider.',
    body: 'Every visit is with Susan George, DNP, APRN, not a faceless network.',
  },
  {
    icon: Receipt,
    title: 'Honest, upfront pricing.',
    body: "Flat cash-pay fees starting at $50. You'll know the cost before you book.",
  },
  {
    icon: Wifi,
    title: 'Care from anywhere in Oklahoma.',
    body: 'Skip the drive and the waiting room. Connect securely from home.',
  },
  {
    icon: Heart,
    title: 'Compassionate, dignified care.',
    body: 'A personal touch that reflects our heart of faith.',
  },
]

export default function QuickValueBar() {
  return (
    <section style={{ backgroundColor: '#1AA6B7' }} aria-label="Why choose Ebenezer Telehealth">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {valueCards.map((card) => (
            <div
              key={card.title}
              className="rounded-xl p-6 flex flex-col gap-3 transition-all hover:-translate-y-0.5"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.10)',
              }}
            >
              <div
                className="inline-flex h-11 w-11 items-center justify-center rounded-lg"
                style={{ backgroundColor: 'rgba(151,206,204,0.20)' }}
                aria-hidden="true"
              >
                <card.icon
                  className="h-5 w-5"
                  style={{ color: '#97CECC' }}
                />
              </div>
              <h3
                className="text-base font-semibold leading-snug"
                style={{ color: '#ffffff' }}
              >
                {card.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'rgba(255,255,255,0.88)' }}
              >
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
