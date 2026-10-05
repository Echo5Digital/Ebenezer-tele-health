import { CalendarDays, Info } from 'lucide-react'
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
        <div className="text-center mb-8">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: 'var(--primary)' }}
          >
            Contact &amp; Booking
          </span>
          <h1
            className="text-3xl md:text-4xl font-bold mb-3"
            style={{ color: 'var(--navy)' }}
          >
            Book an Appointment
          </h1>
          <p className="text-gray-600 leading-relaxed">
            Fill out the form below and our team will reach out to confirm your visit.
          </p>
        </div>

        {/* Welcome message card */}
        <article className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-8">
          <div className="flex items-center gap-4 px-6 sm:px-8 py-5 border-b border-gray-50">
            <IconBox>
              <Info className="h-5 w-5" style={{ color: 'var(--primary)' }} />
            </IconBox>
            <h2 className="text-lg font-bold" style={{ color: 'var(--navy)' }}>
              Welcome to Ebenezer Health Clinic
            </h2>
          </div>
          <div className="px-6 sm:px-8 py-6">
            <p className="text-gray-600 leading-relaxed">
              Thank you for choosing us! Please arrive or join about 10 minutes
              early, and complete any consent forms beforehand. If payment is
              required, have your card ready, it&apos;s processed after your
              visit. All communication happens through the patient portal, so
              for telehealth visits please have a photo ID ready, and check
              your vitals if possible. We&apos;re glad to be part of your care.
            </p>
          </div>
        </article>

        {/* Booking form card */}
        <article className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="flex items-center gap-4 px-6 sm:px-8 py-5 border-b border-gray-50">
            <IconBox>
              <CalendarDays className="h-5 w-5" style={{ color: 'var(--primary)' }} />
            </IconBox>
            <h2 className="text-lg font-bold" style={{ color: 'var(--navy)' }}>
              Appointment Details
            </h2>
          </div>
          <div className="px-6 sm:px-8 py-7">
            <BookAppointmentForm />
          </div>
        </article>
      </div>
    </section>
  )
}
