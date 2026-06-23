import Link from 'next/link'
import { ArrowLeft, Phone } from 'lucide-react'

export const metadata = {
  title: 'Page Not Found',
  description: 'The page you are looking for could not be found.',
}

export default function NotFound() {
  return (
    <section className="bg-white min-h-[60vh] flex items-center">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-24 text-center">
        <span
          className="inline-block text-xs font-semibold uppercase tracking-widest mb-4"
          style={{ color: 'var(--primary)' }}
        >
          404 &mdash; Page Not Found
        </span>
        <h1
          className="text-4xl md:text-5xl font-bold mb-5"
          style={{ color: 'var(--navy)' }}
        >
          This page doesn&apos;t exist
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-xl mx-auto">
          The page you&apos;re looking for may have moved or the URL may be
          incorrect. Try one of the links below to get back on track.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <Link href="/" className="btn-primary text-base px-8 py-3.5 inline-flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Go Home
          </Link>
          <Link href="/contact" className="btn-outline text-base px-8 py-3.5">
            Book a Visit
          </Link>
        </div>

        <p className="text-sm text-gray-500">
          Need help?{' '}
          <a
            href="tel:+14053498188"
            className="font-semibold inline-flex items-center gap-1"
            style={{ color: 'var(--primary)' }}
          >
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            Call (405) 349-8188
          </a>
        </p>
      </div>
    </section>
  )
}
