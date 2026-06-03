'use client'

import Link from 'next/link'
import { Phone, CalendarDays } from 'lucide-react'

export default function MobileBottomBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
      role="navigation"
      aria-label="Quick contact actions"
    >
      <div className="flex h-16 shadow-2xl">
        <a
          href="tel:+14053498188"
          className="flex flex-1 items-center justify-center gap-2 text-sm font-semibold text-white transition-opacity active:opacity-80"
          style={{ backgroundColor: 'var(--navy)' }}
          aria-label="Call Ebenezer Telehealth at (405) 349-8188"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          Call Now
        </a>
        <Link
          href="/contact"
          className="flex flex-1 items-center justify-center gap-2 text-sm font-semibold text-white transition-opacity active:opacity-80"
          style={{ backgroundColor: 'var(--primary)' }}
          aria-label="Book your telehealth visit"
        >
          <CalendarDays className="h-4 w-4" aria-hidden="true" />
          Book Visit
        </Link>
      </div>
    </div>
  )
}
