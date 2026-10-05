import { NextResponse } from 'next/server'
import { getDb } from '@/lib/mongodb'
import { sendMail } from '@/lib/mailer'

const REQUIRED_FIELDS = [
  'service',
  'firstName',
  'lastName',
  'email',
  'phone',
  'dob',
  'gender',
  'streetAddress',
  'city',
  'state',
  'zip',
  'insurance',
  'bookingDate',
  'insuredId',
  'insuredGroup',
]

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
  zip: 'Zip',
  state: 'State',
  bookingDate: 'Date of Booking',
  insurance: 'Insurance',
  insuredId: 'Insured ID Number',
  insuredGroup: 'Insured Group Name/No',
  personalId: 'Personal ID',
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const ZIP_RE = /^\d{5}(-\d{4})?$/

function validate(body) {
  for (const field of REQUIRED_FIELDS) {
    if (!body[field] || !String(body[field]).trim()) {
      return `${FIELD_LABELS[field] || field} is required.`
    }
  }
  if (body.service === 'IV Therapy' && !body.ivSubService) {
    return 'IV Therapy Option is required.'
  }
  if (!EMAIL_RE.test(body.email)) {
    return 'Please enter a valid email address.'
  }
  if (!ZIP_RE.test(body.zip)) {
    return 'Please enter a valid zip code.'
  }
  return null
}

const NAVY = '#0B3D47'
const CREAM = '#E8F7F7'
const LOGO_URL = 'https://www.ebenezerhealthclinic.com/ebenezer-okc-health-clinic.webp'

function buildEmailHtml(lead) {
  const rows = Object.entries(FIELD_LABELS)
    .filter(([key]) => lead[key])
    .map(
      ([key, label], i) => `
        <tr style="background-color:${i % 2 === 0 ? '#ffffff' : CREAM};">
          <td style="padding:10px 16px;font-weight:600;color:${NAVY};font-size:13px;width:40%;border-bottom:1px solid #eef6f6;">${label}</td>
          <td style="padding:10px 16px;color:#333333;font-size:13px;border-bottom:1px solid #eef6f6;">${lead[key]}</td>
        </tr>`
    )
    .join('')

  return `
    <div style="font-family:Arial,Helvetica,sans-serif;background-color:#f4f9f9;padding:32px 16px;">
      <table role="presentation" width="100%" style="max-width:600px;margin:0 auto;border-collapse:collapse;background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(26,166,183,0.12);">
        <tr>
          <td style="background-color:${NAVY};padding:24px 32px;text-align:center;">
            <img src="${LOGO_URL}" alt="Ebenezer Health Clinic" width="72" height="72" style="display:block;margin:0 auto 8px;border-radius:8px;" />
            <p style="margin:0;color:#ffffff;font-size:12px;letter-spacing:1px;text-transform:uppercase;opacity:0.85;">Ebenezer Health Clinic</p>
          </td>
        </tr>
        <tr>
          <td style="padding:28px 32px 8px;">
            <h2 style="margin:0 0 4px;color:${NAVY};font-size:20px;">New Appointment Request</h2>
            <p style="margin:0 0 20px;color:#667;font-size:13px;">A patient submitted a booking request through the website.</p>
          </td>
        </tr>
        <tr>
          <td style="padding:0 32px 32px;">
            <table role="presentation" width="100%" style="border-collapse:collapse;border:1px solid #eef6f6;border-radius:8px;overflow:hidden;">
              ${rows}
            </table>
          </td>
        </tr>
      </table>
    </div>
  `
}

export async function POST(request) {
  let body
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request body.' }, { status: 400 })
  }

  const validationError = validate(body)
  if (validationError) {
    return NextResponse.json({ ok: false, error: validationError }, { status: 400 })
  }

  const lead = {
    service: body.service,
    ivSubService: body.ivSubService || '',
    firstName: body.firstName,
    lastName: body.lastName,
    preferredName: body.preferredName || '',
    email: body.email,
    phone: body.phone,
    dob: body.dob,
    gender: body.gender,
    streetAddress: body.streetAddress,
    city: body.city,
    state: body.state,
    zip: body.zip,
    insurance: body.insurance,
    bookingDate: body.bookingDate,
    insuredId: body.insuredId,
    insuredGroup: body.insuredGroup,
    personalId: body.personalId || '',
    createdAt: new Date(),
  }

  try {
    const db = await getDb()
    await db.collection('leads').insertOne(lead)
  } catch (err) {
    console.error('Failed to save lead to MongoDB:', err)
    return NextResponse.json(
      { ok: false, error: 'Something went wrong while saving your request. Please try again.' },
      { status: 500 }
    )
  }

  try {
    await sendMail({
      to: 'ebenezerhealth@outlook.com',
      subject: `New Appointment Request — ${lead.firstName} ${lead.lastName}`,
      html: buildEmailHtml(lead),
    })
  } catch (err) {
    console.error('Failed to send appointment notification email:', err)
  }

  return NextResponse.json({ ok: true }, { status: 201 })
}
