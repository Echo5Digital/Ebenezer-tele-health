/**
 * AEO/GEO Answer Block
 * Placed directly below the hero.
 * CSS class "hero-answer-line" is referenced by the SpeakableSpecification schema.
 * Do not remove or rename the class.
 */
export default function AnswerBlock() {
  return (
    <section
      style={{ backgroundColor: 'var(--cream)' }}
      aria-label="About Ebenezer Telehealth"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10 md:py-12">
        <div
          className="border-l-4 pl-5 md:pl-6"
          style={{ borderColor: 'var(--primary)' }}
        >
          {/* AEO entity statement — speakable schema target */}
          {/*
           * One fact per sentence. Short, declarative, no hedging.
           * Engines extract cleanly; voice reads naturally.
           */}
          <p
            className="hero-answer-line text-base md:text-lg leading-relaxed"
            style={{ color: '#035D57' }}
          >
            Ebenezer Telehealth is a faith-driven telehealth practice based in
            Oklahoma City, OK.{' '}
            Every visit is led by Dr. Susan George, DNP, APRN, BC-ADM.{' '}
            Services include{' '}
            <strong style={{ color: 'var(--primary)' }}>women&apos;s health</strong>,{' '}
            <strong style={{ color: 'var(--primary)' }}>online weight loss management</strong>, and{' '}
            <strong style={{ color: 'var(--primary)' }}>minor illness treatment</strong>.{' '}
            The practice is cash-pay &mdash; no insurance required, pricing
            confirmed before you book.{' '}
            Available to patients physically located anywhere in Oklahoma.
          </p>
        </div>
      </div>
    </section>
  )
}
