'use client'

import { useState } from 'react'
import { CheckCircle2, Loader2 } from 'lucide-react'
import { SERVICES, IV_THERAPY_SUB_SERVICES, US_CA_STATES } from '@/lib/usStates'

const inputClass =
  'w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[var(--primary)]'

const labelClass = 'block text-sm font-semibold mb-1'

const OTHER_STATE = '__other__'

const PAYMENT_OPTIONS = [
  { value: 'Self-pay', label: 'Self-pay' },
  { value: 'Insurance', label: 'Insurance' },
  { value: 'Not sure', label: 'Not sure' },
]

const initialFormState = {
  service: '',
  ivSubService: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  dob: '',
  gender: '',
  streetAddress: '',
  city: '',
  state: '',
  stateManual: '',
  zip: '',
  paymentMethod: '',
  message: '',
}

function Field({ label, children, optional }) {
  return (
    <div>
      <label className={labelClass} style={{ color: 'var(--navy)' }}>
        {label}
        {!optional && <span style={{ color: 'var(--primary)' }}> *</span>}
        {optional && <span className="text-gray-400 font-normal"> (optional)</span>}
      </label>
      {children}
    </div>
  )
}

export default function BookAppointmentForm() {
  const [form, setForm] = useState(initialFormState)
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState('')

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => {
      const next = { ...prev, [name]: value }
      if (name === 'service' && value !== 'IV Therapy') {
        next.ivSubService = ''
      }
      if (name === 'state' && value !== OTHER_STATE) {
        next.stateManual = ''
      }
      return next
    })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    try {
      const payload = {
        ...form,
        state: form.state === OTHER_STATE ? form.stateManual : form.state,
      }
      delete payload.stateManual

      const res = await fetch('/api/book-appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const data = await res.json()

      if (!res.ok || !data.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again.')
      }

      setStatus('success')
      setForm(initialFormState)
    } catch (err) {
      setStatus('error')
      setErrorMessage(err.message || 'Something went wrong. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center text-center py-8">
        <div
          className="h-12 w-12 rounded-full flex items-center justify-center mb-4"
          style={{ backgroundColor: 'rgba(26,166,183,0.10)' }}
        >
          <CheckCircle2 className="h-6 w-6" style={{ color: 'var(--primary)' }} />
        </div>
        <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--navy)' }}>
          Request Received
        </h3>
        <p className="text-gray-600 max-w-sm">
          Thank you — we&apos;ll be in touch shortly to confirm your appointment.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <div>
        <p
          className="text-xs font-bold uppercase tracking-widest mb-4"
          style={{ color: 'var(--primary)' }}
        >
          Appointment Details
        </p>

        <div className="flex flex-col gap-4">
          <Field label="Service">
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              required
              aria-required="true"
              className={inputClass}
            >
              <option value="" disabled>Select a Service</option>
              {SERVICES.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </Field>

          {form.service === 'IV Therapy' && (
            <Field label="IV Therapy Option">
              <select
                name="ivSubService"
                value={form.ivSubService}
                onChange={handleChange}
                required
                aria-required="true"
                className={inputClass}
              >
                <option value="" disabled>Select an IV Therapy Option</option>
                {IV_THERAPY_SUB_SERVICES.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </Field>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="First Name">
              <input
                type="text" name="firstName" value={form.firstName} onChange={handleChange}
                placeholder="First Name" required aria-required="true" className={inputClass}
              />
            </Field>
            <Field label="Last Name">
              <input
                type="text" name="lastName" value={form.lastName} onChange={handleChange}
                placeholder="Last Name" required aria-required="true" className={inputClass}
              />
            </Field>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Email">
              <input
                type="email" name="email" value={form.email} onChange={handleChange}
                placeholder="you@example.com" required aria-required="true" className={inputClass}
              />
            </Field>
            <Field label="Contact Number">
              <input
                type="tel" name="phone" value={form.phone} onChange={handleChange}
                placeholder="(405) 555-0123" required aria-required="true" className={inputClass}
              />
            </Field>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Date of Birth">
              <input
                type="date" name="dob" value={form.dob} onChange={handleChange}
                placeholder="mm/dd/yyyy" required aria-required="true" className={inputClass}
              />
            </Field>
            <Field label="Gender">
              <select
                name="gender" value={form.gender} onChange={handleChange}
                required aria-required="true" className={inputClass}
              >
                <option value="" disabled>Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
            </Field>
          </div>

          <Field label="Street Address">
            <input
              type="text" name="streetAddress" value={form.streetAddress} onChange={handleChange}
              placeholder="Street Address" required aria-required="true" className={inputClass}
            />
          </Field>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Field label="City">
              <input
                type="text" name="city" value={form.city} onChange={handleChange}
                placeholder="City" required aria-required="true" className={inputClass}
              />
            </Field>
            <Field label="State">
              <select
                name="state" value={form.state} onChange={handleChange}
                required aria-required="true" className={inputClass}
              >
                <option value="" disabled>Select State</option>
                {US_CA_STATES.map((s) => (
                  <option key={s.value} value={s.value}>{s.label}</option>
                ))}
                <option value={OTHER_STATE}>Other</option>
              </select>
              {form.state === OTHER_STATE && (
                <input
                  type="text" name="stateManual" value={form.stateManual} onChange={handleChange}
                  placeholder="Enter State / Province" required aria-required="true"
                  className={`${inputClass} mt-2`}
                />
              )}
            </Field>
            <Field label="Zip">
              <input
                type="text" name="zip" value={form.zip} onChange={handleChange}
                placeholder="Zip Code" required aria-required="true"
                pattern="\d{5}(-\d{4})?" title="5-digit zip code" className={inputClass}
              />
            </Field>
          </div>

          <div>
            <Field label="How will you be paying?">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {PAYMENT_OPTIONS.map((opt) => {
                  const checked = form.paymentMethod === opt.value
                  return (
                    <label
                      key={opt.value}
                      className="flex items-center gap-2.5 rounded-md border px-3 py-2.5 text-sm cursor-pointer transition-colors"
                      style={{
                        borderColor: checked ? 'var(--primary)' : '#d1d5db',
                        backgroundColor: checked ? 'rgba(26,166,183,0.06)' : 'transparent',
                      }}
                    >
                      <input
                        type="radio"
                        name="paymentMethod"
                        value={opt.value}
                        checked={checked}
                        onChange={handleChange}
                        required
                        aria-required="true"
                        className="h-4 w-4 accent-[var(--primary)]"
                      />
                      <span className="font-medium" style={{ color: 'var(--navy)' }}>
                        {opt.label}
                      </span>
                    </label>
                  )
                })}
              </div>
            </Field>
            <p
              className="text-xs leading-relaxed rounded-md px-3 py-2 mt-2.5"
              style={{ backgroundColor: 'rgba(26,166,183,0.06)', color: 'var(--navy)' }}
            >
              We&apos;re a cash-pay clinic. Any insurance details are confirmed when we call you back.
            </p>
          </div>

          <Field label="Reason for Visit / Message" optional>
            <textarea
              name="message" value={form.message} onChange={handleChange}
              placeholder="Anything you'd like us to know?" rows={4}
              className={`${inputClass} resize-none`}
            />
          </Field>
        </div>
      </div>

      {status === 'error' && (
        <p className="text-sm font-medium text-red-600" role="alert">
          {errorMessage}
        </p>
      )}

      <p className="text-xs text-gray-500 leading-relaxed">
        By submitting, you agree to be contacted by Ebenezer Health Clinic about your request.
        Your information is handled per our{' '}
        <a href="/privacy-policy" className="underline hover:no-underline" style={{ color: 'var(--primary)' }}>
          Privacy Policy
        </a>.
      </p>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-primary inline-flex items-center justify-center gap-2.5 mt-1 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'submitting' && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
        {status === 'submitting' ? 'Submitting...' : 'Submit Request'}
      </button>
    </form>
  )
}
