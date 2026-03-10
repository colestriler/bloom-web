export default function BloomAI() {
  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-bloom-bg via-bloom-card/30 to-bloom-bg pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Info */}
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-bloom-text-tertiary mb-4">
              AI-Powered Study
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-bloom-text mb-6">
              Meet Bloom,
              <br />
              your Bible companion
            </h2>
            <p className="text-bloom-text-secondary font-serif text-lg leading-relaxed mb-8">
              Have natural conversations about scripture. Ask about any verse,
              explore theological concepts, or get personalized guidance for
              your spiritual journey.
            </p>

            {/* Feature list */}
            <ul className="space-y-4">
              {[
                {
                  label: "Voice & Text",
                  desc: "Speak or type — Bloom understands both",
                },
                {
                  label: "Deep Knowledge",
                  desc: "Draws from the complete Bible with contextual understanding",
                },
                {
                  label: "Personal Growth",
                  desc: "Remembers your journey and offers relevant insights",
                },
                {
                  label: "Always Available",
                  desc: "A thoughtful companion for any moment of your day",
                },
              ].map((item) => (
                <li key={item.label} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border border-bloom-accent/40 flex items-center justify-center mt-0.5 shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-bloom-accent" />
                  </div>
                  <div>
                    <span className="text-sm font-mono uppercase tracking-[0.1em] text-bloom-text font-medium">
                      {item.label}
                    </span>
                    <p className="text-sm text-bloom-text-secondary mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Chat mockup */}
          <div className="relative">
            <div className="bg-bloom-card border border-bloom-card-border rounded-2xl p-6 md:p-8 shadow-lg shadow-bloom-accent/5">
              {/* Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-bloom-divider/50">
                <div className="w-10 h-10 rounded-full bg-bloom-accent flex items-center justify-center">
                  <svg className="w-5 h-5 text-bloom-card" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-serif font-semibold text-bloom-text">
                    Bloom AI
                  </p>
                  <p className="text-[11px] font-mono text-bloom-text-tertiary uppercase tracking-wider">
                    Voice Mode
                  </p>
                </div>
              </div>

              {/* Chat messages */}
              <div className="space-y-4">
                {/* User message */}
                <div className="flex justify-end">
                  <div className="bg-bloom-accent/10 border border-bloom-accent/20 rounded-xl rounded-tr-sm px-4 py-3 max-w-[80%]">
                    <p className="text-sm text-bloom-text font-serif">
                      What does Philippians 4:6-7 mean in context?
                    </p>
                  </div>
                </div>

                {/* AI response */}
                <div className="flex justify-start">
                  <div className="bg-bloom-bg border border-bloom-card-border rounded-xl rounded-tl-sm px-4 py-3 max-w-[85%]">
                    <p className="text-sm text-bloom-text font-serif leading-relaxed">
                      Paul wrote this from prison, which makes it even more
                      powerful. He&apos;s saying: instead of being consumed by anxiety,
                      bring everything to God in prayer with a thankful heart.
                      The &ldquo;peace that surpasses understanding&rdquo; isn&apos;t the absence
                      of problems — it&apos;s a supernatural calm that guards your
                      heart even in the midst of difficulty.
                    </p>
                    <p className="text-[11px] font-mono text-bloom-accent mt-2 uppercase tracking-wider">
                      Philippians 4:6-7
                    </p>
                  </div>
                </div>

                {/* User follow-up */}
                <div className="flex justify-end">
                  <div className="bg-bloom-accent/10 border border-bloom-accent/20 rounded-xl rounded-tr-sm px-4 py-3 max-w-[80%]">
                    <p className="text-sm text-bloom-text font-serif">
                      How can I apply that when I feel overwhelmed?
                    </p>
                  </div>
                </div>

                {/* Typing indicator */}
                <div className="flex justify-start">
                  <div className="bg-bloom-bg border border-bloom-card-border rounded-xl rounded-tl-sm px-4 py-3">
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-bloom-accent/40 animate-pulse" />
                      <div className="w-2 h-2 rounded-full bg-bloom-accent/40 animate-pulse" style={{ animationDelay: "0.2s" }} />
                      <div className="w-2 h-2 rounded-full bg-bloom-accent/40 animate-pulse" style={{ animationDelay: "0.4s" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative glow */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-full bg-bloom-accent/8 blur-[60px] pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
