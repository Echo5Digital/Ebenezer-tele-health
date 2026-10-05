import { getDb } from '@/lib/mongodb'
import LogoutButton from './LogoutButton'

export const metadata = {
  title: 'Admin — Leads',
  robots: { index: false, follow: false },
}

export const dynamic = 'force-dynamic'

const FIELD_LABELS = {
  service: 'Service',
  ivSubService: 'IV Therapy Option',
  firstName: 'First Name',
  lastName: 'Last Name',
  preferredName: 'Preferred Name',
  email: 'Email',
  phone: 'Contact Number',
  dob: 'Date of Birth',
  gender: 'Gender',
  streetAddress: 'Street Address',
  city: 'City',
  state: 'State',
  zip: 'Zip',
  insurance: 'Insurance',
  bookingDate: 'Date of Booking',
  insuredId: 'Insured ID Number',
  insuredGroup: 'Insured Group Name/No',
  personalId: 'Personal ID',
}

async function getLeads() {
  try {
    const db = await getDb()
    const leads = await db
      .collection('leads')
      .find({})
      .sort({ createdAt: -1 })
      .toArray()
    return leads.map((lead) => ({ ...lead, _id: lead._id.toString() }))
  } catch (err) {
    console.error('Failed to load leads:', err)
    return null
  }
}

export default async function AdminLeadsPage() {
  const leads = await getLeads()

  return (
    <section className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold" style={{ color: 'var(--navy)' }}>
            Appointment Leads
          </h1>
          <LogoutButton />
        </div>

        {leads === null && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center text-gray-600">
            Unable to load leads right now. Check the server logs / database connection.
          </div>
        )}

        {leads && leads.length === 0 && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center text-gray-600">
            No appointment requests yet.
          </div>
        )}

        {leads && leads.length > 0 && (
          <div className="flex flex-col gap-4">
            {leads.map((lead) => (
              <article
                key={lead._id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 px-6 py-4 border-b border-gray-50">
                  <h2 className="text-base font-bold" style={{ color: 'var(--navy)' }}>
                    {lead.firstName} {lead.lastName}
                    {lead.preferredName ? ` (${lead.preferredName})` : ''}
                  </h2>
                  <span className="text-xs text-gray-500">
                    {lead.createdAt ? new Date(lead.createdAt).toLocaleString() : ''}
                  </span>
                </div>
                <div className="px-6 py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3">
                  {Object.entries(FIELD_LABELS).map(([key, label]) => {
                    if (!lead[key]) return null
                    return (
                      <div key={key}>
                        <p
                          className="text-[11px] font-bold uppercase tracking-widest leading-none mb-1"
                          style={{ color: 'rgba(26,166,183,0.55)' }}
                        >
                          {label}
                        </p>
                        <p className="text-sm text-gray-800">{lead[key]}</p>
                      </div>
                    )
                  })}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
