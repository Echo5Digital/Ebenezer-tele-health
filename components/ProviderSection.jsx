import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Award, MapPin, Quote } from 'lucide-react'

const credentials = [
  { label: 'Doctor of Nursing Practice (DNP)' },
  { label: 'Advanced Practice Registered Nurse (APRN)' },
  { label: 'Board Certified — Advanced Diabetes Management (BC-ADM)' },
  { label: "Women's Health Specialist" },
  { label: 'Service Area: Oklahoma (statewide)' },
]

export default function ProviderSection() {
  return (
    <section style={{ backgroundColor: 'var(--cream)' }} aria-labelledby="provider-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Section label */}
        <div className="text-center mb-12 md:mb-16">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: 'var(--primary)' }}
          >
            Your Provider
          </span>
          <h2
            id="provider-heading"
            className="text-3xl md:text-4xl font-bold"
            style={{ color: 'var(--navy)' }}
          >
            Meet Dr. Susan George, DNP, APRN
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Bio & credentials — LEFT on desktop */}
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            <div>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Your care at Ebenezer Telehealth is led by Dr. Susan George, a
                Doctor of Nursing Practice and Advanced Practice Registered Nurse
                who specializes in women&apos;s health and is Board Certified in
                Advanced Diabetes Management (BC-ADM).
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mt-4">
                With a deep commitment to compassionate, faith-driven medicine,
                Dr. George provides accessible, affordable care to women and
                families across Oklahoma — with the integrity, dignity, and
                personal attention every patient deserves.
              </p>
            </div>

            {/* Credential list */}
            <div>
              <h3
                className="text-sm font-semibold uppercase tracking-wider mb-3"
                style={{ color: 'var(--primary)' }}
              >
                Credentials &amp; Details
              </h3>
              <ul className="space-y-2.5">
                {credentials.map((cred) => (
                  <li key={cred.label} className="flex items-start gap-2.5">
                    <Award
                      className="h-4 w-4 mt-0.5 flex-shrink-0"
                      style={{ color: 'var(--primary)' }}
                      aria-hidden="true"
                    />
                    <span className="text-sm text-gray-700">{cred.label}</span>
                  </li>
                ))}
                <li className="flex items-start gap-2.5">
                  <Award
                    className="h-4 w-4 mt-0.5 flex-shrink-0 text-gray-300"
                    aria-hidden="true"
                  />
                  {/* TODO: Add license number once confirmed */}
                  <span className="text-sm text-gray-400">
                    License Number: [placeholder — to be added]
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Award
                    className="h-4 w-4 mt-0.5 flex-shrink-0 text-gray-300"
                    aria-hidden="true"
                  />
                  {/* TODO: Add years practicing once confirmed */}
                  <span className="text-sm text-gray-400">
                    Years Practicing: [placeholder — to be added]
                  </span>
                </li>
              </ul>
            </div>

            {/* Provider quote */}
            <figure
              className="rounded-xl p-6 border-l-4 mt-2"
              style={{
                backgroundColor: 'rgba(184,232,220,0.15)',
                borderColor: 'var(--primary)',
              }}
            >
              <Quote
                className="h-6 w-6 mb-3"
                style={{ color: 'var(--primary)' }}
                aria-hidden="true"
              />
              <blockquote className="text-gray-700 italic leading-relaxed">
                &ldquo;Our goal is simple: give Oklahoma women and families
                honest, compassionate care they can actually afford and access
                from home.&rdquo;
              </blockquote>
              <figcaption className="mt-3 text-sm font-semibold" style={{ color: 'var(--navy)' }}>
                — Dr. Susan George, DNP, APRN, BC-ADM
              </figcaption>
            </figure>

            {/* Location */}
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <MapPin className="h-4 w-4 flex-shrink-0" style={{ color: 'var(--primary)' }} aria-hidden="true" />
              Based in Oklahoma City, OK — serving patients throughout Oklahoma via secure telehealth
            </div>
          </div>

          {/* Provider photo — RIGHT on desktop */}
          <div className="flex flex-col items-center gap-5 order-1 lg:order-2">
            <div className="relative w-full max-w-sm lg:max-w-full mx-auto rounded-2xl overflow-hidden aspect-[4/5] shadow-md">
              <Image
                src="/doc_img.webp"
                alt="Dr. Susan George, DNP, APRN — Provider at Ebenezer Telehealth, Oklahoma City"
                fill
                className="object-cover object-top"
                priority
              />
            </div>

            {/* Credential badges */}
            <div className="flex flex-wrap gap-2 justify-center">
              <Badge variant="mint">DNP</Badge>
              <Badge variant="mint">APRN</Badge>
              <Badge variant="mint">BC-ADM</Badge>
              <Badge variant="seafoam">Women&apos;s Health</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
