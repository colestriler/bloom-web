export default function DailyVerse() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-bloom-bg via-bloom-card/50 to-bloom-bg pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative">
        {/* Section label */}
        <div className="text-center mb-12">
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-bloom-text-tertiary mb-4">
            Daily Reading
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-bloom-text">
            Start each day grounded
          </h2>
        </div>

        {/* Verse card */}
        <div className="max-w-2xl mx-auto p-8 md:p-12 rounded-xl bg-bloom-card border border-bloom-card-border relative">
          {/* Large quotation mark */}
          <span className="absolute top-4 left-6 text-7xl md:text-8xl font-serif text-bloom-accent/20 leading-none select-none">
            &ldquo;
          </span>

          <div className="relative pt-8 md:pt-6">
            {/* Verse text */}
            <p className="font-serif text-xl md:text-2xl text-bloom-text leading-relaxed md:leading-[1.8]">
              For I know the plans I have for you, declares the Lord, plans for
              welfare and not for evil, to give you a future and a hope.
            </p>

            {/* Divider */}
            <div className="w-full h-px bg-bloom-divider my-6" />

            {/* Reference */}
            <div className="flex items-center justify-between">
              <span className="text-sm font-mono uppercase tracking-[0.15em] text-bloom-text-secondary">
                Jeremiah 29:11
              </span>
              <span className="text-xs font-mono uppercase tracking-[0.1em] text-bloom-accent flex items-center gap-1.5">
                Read More
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </div>
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-center text-sm text-bloom-text-tertiary mt-8 max-w-md mx-auto font-serif italic">
          A new verse delivered to you every day, with context and reflection
          prompts to deepen your understanding.
        </p>
      </div>
    </section>
  );
}
