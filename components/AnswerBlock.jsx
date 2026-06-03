/**
 * AEO/GEO Answer Block
 * Placed directly below the hero.
 * CSS class "hero-answer-line" is referenced by the SpeakableSpecification schema.
 * Do not remove or rename the class.
 */
export default function AnswerBlock() {
  return (
    <section
      className="relative overflow-hidden"
      aria-label="About Ebenezer Telehealth"
    >
      <div
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(237,247,244,0.55)' }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10 md:py-12">
        <div
          className="rounded-xl border px-6 py-6 md:px-8 md:py-7"
          style={{
            borderColor: 'rgba(42,122,111,0.2)',
            backgroundColor: '#ffffff',
          }}
        >
          {/* AEO entity statement — speakable schema target */}
          {/*
           * One fact per sentence. Short, declarative, no hedging.
           * Engines extract cleanly; voice reads naturally.
           */}
          <p className="hero-answer-line">
            Ebenezer Telehealth is a faith-driven telehealth practice based in
            Oklahoma City, OK.{' '}
            Every visit is led by Dr. Susan George, DNP, APRN, BC-ADM.{' '}
            Services include{' '}
            <strong>women&apos;s health</strong>,{' '}
            <strong>online weight loss management</strong>, and{' '}
            <strong>minor illness treatment</strong>.{' '}
            The practice is cash-pay &mdash; no insurance required, pricing
            confirmed before you book.{' '}
            Available to patients physically located anywhere in Oklahoma.
          </p>
        </div>
      </div>
    </section>
  )
}
