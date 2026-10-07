import { CalendarDays } from 'lucide-react'
import BookAppointmentForm from './BookAppointmentForm'

export const metadata = {
  title: 'Book an Appointment',
  description:
    'Book your appointment with Ebenezer Health Clinic. Tell us about yourself and the service you need, and our team will follow up to confirm your visit.',
  alternates: {
    canonical: 'https://www.ebenezerhealthclinic.com/book-appointment',
  },
  robots: { index: true, follow: true },
}

function IconBox({ children }) {
  return (
    <div
      className="flex-shrink-0 h-9 w-9 rounded-xl flex items-center justify-center"
      style={{ backgroundColor: 'rgba(26,166,183,0.08)' }}
      aria-hidden="true"
    >
      {children}
    </div>
  )
}

export default function BookAppointmentPage() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gray-50" aria-hidden="true" />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        {/* Booking form card */}
        <article className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="flex items-center gap-4 px-6 sm:px-8 py-6 border-b border-gray-50">
            <IconBox>
              <CalendarDays className="h-5 w-5" style={{ color: 'var(--primary)' }} />
            </IconBox>
            <div>
              <h1 className="text-lg font-bold" style={{ color: 'var(--navy)' }}>
                Request an Appointment
              </h1>
              <p className="text-sm text-gray-500">
                Fill this out and we&apos;ll call you back to schedule a time that works for you.
              </p>
            </div>
          </div>
          <div className="px-6 sm:px-8 py-7">
            <BookAppointmentForm />
          </div>
        </article>
      </div>
    </section>
  )
}
