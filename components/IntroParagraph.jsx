export default function IntroParagraph() {
  return (
    <section
      className="relative overflow-hidden"
      aria-label="About our practice"
      style={{
        backgroundImage: 'url(/intro-para.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Subtle white overlay — matches AnswerBlock */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(255,255,255,0.38)' }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-12">
        <div
          className="max-w-3xl border-l-4 pl-5 md:pl-6"
          style={{ borderColor: 'var(--primary)' }}
        >
          <p
            className="text-base md:text-lg leading-relaxed"
            style={{ color: '#1AA6B7' }}
          >
            Good medical care shouldn&apos;t mean long waits, confusing bills, or driving
            across town to sit in a crowded waiting room. Ebenezer Health Clinic makes it
            simpler: as a walk-in medical clinic in Oklahoma City, we welcome you in person,
            and for care that works online, we offer telehealth anywhere in Oklahoma.
            Whether you need primary care, a weight-loss plan, women&apos;s health, or
            same-day help for a minor illness, you&apos;ll work with a trusted, credentialed
            provider and always know your cost before you&apos;re seen.
          </p>
        </div>
      </div>
    </section>
  )
}
