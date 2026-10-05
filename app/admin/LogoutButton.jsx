'use client'

import { useRouter } from 'next/navigation'
import { LogOut } from 'lucide-react'

export default function LogoutButton() {
  const router = useRouter()

  async function handleLogout() {
    await fetch('/api/admin/logout', { method: 'POST' })
    router.push('/admin/login')
    router.refresh()
  }

  return (
    <button
      type="button"
      onClick={handleLogout}
      className="inline-flex items-center gap-2 text-sm font-semibold hover:underline"
      style={{ color: 'var(--primary)' }}
    >
      <LogOut className="h-4 w-4" aria-hidden="true" />
      Log Out
    </button>
  )
}
