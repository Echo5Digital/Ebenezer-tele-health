/**
 * AEO/GEO Answer Block
 * Placed directly below the hero.
 * CSS class "hero-answer-line" is referenced by the SpeakableSpecification schema.
 * Do not remove or rename the class.
 */
export default function AnswerBlock() {
  return (
    <section
      className="bg-gray-50"
      aria-label="About Ebenezer Telehealth"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10 md:py-12">
        <div
          className="rounded-xl border px-6 py-6 md:px-8 md:py-7"
          style={{
            borderColor: 'rgba(42,122,111,0.2)',
            backgroundColor: 'rgba(184,232,220,0.12)',
          }}
        >
          {/* AEO entity statement — speakable schema target */}
          <p className="hero-answer-line">
            Ebenezer Telehealth is a faith-driven, Oklahoma City&ndash;based
            telehealth practice led by Dr. Susan George, DNP, APRN, offering
            affordable cash-pay online visits for{' '}
            <strong>women&apos;s health</strong>,{' '}
            <strong>weight loss management</strong>, and{' '}
            <strong>minor illnesses</strong> to patients across Oklahoma.
          </p>
        </div>
      </div>
    </section>
  )
}
