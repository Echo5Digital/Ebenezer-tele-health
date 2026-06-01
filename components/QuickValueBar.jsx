import { UserCheck, Receipt, Wifi, Heart } from 'lucide-react'

const valueCards = [
  {
    icon: UserCheck,
    title: 'Real, credentialed provider.',
    body: 'Every visit is with Dr. Susan George, DNP, APRN — not a faceless network.',
  },
  {
    icon: Receipt,
    title: 'Honest, upfront pricing.',
    body: "Flat cash-pay fees. You'll know the cost before you book — no surprise bills.",
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
    <section className="bg-gray-50" aria-label="Why choose Ebenezer Telehealth">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {valueCards.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col gap-3 hover:shadow-md transition-shadow"
            >
              <div
                className="inline-flex h-11 w-11 items-center justify-center rounded-lg"
                style={{ backgroundColor: 'rgba(184,232,220,0.5)' }}
                aria-hidden="true"
              >
                <card.icon
                  className="h-5 w-5"
                  style={{ color: 'var(--primary)' }}
                />
              </div>
              <h3 className="text-base font-semibold leading-snug" style={{ color: 'var(--navy)' }}>
                {card.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
