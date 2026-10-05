'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Lock, Loader2 } from 'lucide-react'

export default function AdminLoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('submitting')
    setError('')

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })
      const data = await res.json()

      if (!res.ok || !data.ok) {
        throw new Error(data.error || 'Invalid email or password.')
      }

      router.push('/admin')
      router.refresh()
    } catch (err) {
      setStatus('error')
      setError(err.message || 'Invalid email or password.')
    }
  }

  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-sm">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="flex flex-col items-center gap-3 px-8 py-8 border-b border-gray-50">
            <div
              className="h-12 w-12 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: 'rgba(26,166,183,0.08)' }}
            >
              <Lock className="h-5 w-5" style={{ color: 'var(--primary)' }} />
            </div>
            <h1 className="text-xl font-bold" style={{ color: 'var(--navy)' }}>
              Admin Login
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="px-8 py-7 flex flex-col gap-4">
            <div>
              <label className="block text-sm font-semibold mb-1.5" style={{ color: 'var(--navy)' }}>
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[var(--primary)]"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1.5" style={{ color: 'var(--navy)' }}>
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[var(--primary)]"
              />
            </div>

            {status === 'error' && (
              <p className="text-sm font-medium text-red-600" role="alert">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="btn-primary inline-flex items-center justify-center gap-2.5 mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'submitting' && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
              {status === 'submitting' ? 'Signing in...' : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
