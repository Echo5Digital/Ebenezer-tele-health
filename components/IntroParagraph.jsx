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
            Finding good medical care shouldn&apos;t mean long waits, confusing bills, or
            driving across town to a crowded waiting room. At Ebenezer Telehealth, we built
            our practice to make quality care simpler for Oklahoma women and families. As a
            cash-pay clinic serving OKC and the whole state, we give you two easy ways to be
            seen: in person on Saturdays here in Oklahoma City, or by secure telehealth video
            from anywhere in Oklahoma. You&apos;ll always work with a trusted, credentialed
            provider and always know your cost before you book.
          </p>
        </div>
      </div>
    </section>
  )
}
