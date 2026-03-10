export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-bloom-accent/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 text-center relative">
        {/* Monospaced label */}
        <p className="animate-fade-in-up text-xs font-mono uppercase tracking-[0.3em] text-bloom-text-tertiary mb-6">
          A new way to experience scripture
        </p>

        {/* Main heading */}
        <h1 className="animate-fade-in-up delay-100 font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-bloom-text leading-[1.05] mb-8">
          Discover the Bible
          <br />
          <span className="text-bloom-accent">in a new light</span>
        </h1>

        {/* Subtitle */}
        <p className="animate-fade-in-up delay-200 max-w-2xl mx-auto text-lg md:text-xl text-bloom-text-secondary font-serif leading-relaxed mb-12">
          Guided audio prayers, daily scripture, AI-powered study, and a
          personalized spiritual journey — all in one beautiful app.
        </p>

        {/* CTA Buttons */}
        <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#download"
            className="inline-flex items-center gap-3 bg-bloom-accent text-bloom-card px-8 py-4 rounded-lg text-sm font-mono uppercase tracking-[0.15em] hover:bg-bloom-accent/90 transition-all shadow-lg shadow-bloom-accent/20"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Download for iOS
          </a>

          <a
            href="#features"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-sm font-mono uppercase tracking-[0.15em] text-bloom-text-secondary border border-bloom-card-border hover:bg-bloom-accent/5 transition-all"
          >
            Learn More
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
              />
            </svg>
          </a>
        </div>

        {/* Phone mockup placeholder */}
        <div className="animate-fade-in-up delay-500 mt-16 md:mt-24 relative">
          <div className="animate-float mx-auto w-[260px] md:w-[300px] aspect-[9/19] rounded-[40px] bg-bloom-card border-2 border-bloom-card-border shadow-2xl shadow-bloom-accent/10 overflow-hidden">
            {/* Status bar */}
            <div className="h-12 flex items-end justify-center pb-1">
              <div className="w-24 h-5 rounded-full bg-bloom-text/10" />
            </div>

            {/* App content mock */}
            <div className="px-5 pt-4">
              {/* Header */}
              <p className="text-[8px] font-mono uppercase tracking-[0.3em] text-bloom-text-tertiary text-center">
                Bloom
              </p>
              <p className="text-base font-serif font-bold text-bloom-text text-center mt-1">
                Good Morning
              </p>

              {/* Divider */}
              <div className="vintage-divider my-3">
                <svg
                  className="w-2.5 h-2.5 text-bloom-divider shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.8 2C15.5.8 13.2 2 12 3.2 10.8 2 8.5.8 6.2 2 3.2 3.5 2.7 7.2 4.5 9.5c2.6 3.2 7.5 7.5 7.5 7.5s4.9-4.3 7.5-7.5C21.3 7.2 20.8 3.5 17.8 2z" />
                </svg>
              </div>

              {/* Verse card mock */}
              <div className="bg-bloom-bg rounded-lg border border-bloom-card-border p-3 mb-3">
                <p className="text-[16px] font-serif text-bloom-accent/30 leading-none">
                  &ldquo;
                </p>
                <p className="text-[7px] font-serif text-bloom-text leading-relaxed mt-0.5">
                  For I know the plans I have for you, declares the Lord, plans
                  for welfare and not for evil...
                </p>
                <p className="text-[6px] font-mono text-bloom-text-secondary mt-1.5 uppercase tracking-wider">
                  Jeremiah 29:11
                </p>
              </div>

              {/* Prayer card mock */}
              <div className="flex items-center gap-2 bg-bloom-bg rounded-lg border border-bloom-card-border p-2.5">
                <div className="w-8 h-8 rounded-full border border-bloom-card-border flex items-center justify-center shrink-0">
                  <svg
                    className="w-3 h-3 text-bloom-accent ml-0.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[7px] font-serif font-semibold text-bloom-text">
                    Morning Gratitude
                  </p>
                  <p className="text-[6px] font-mono text-bloom-text-tertiary">
                    3:05 · Bloom
                  </p>
                </div>
              </div>

              {/* Quick actions mock */}
              <div className="flex gap-2 mt-3">
                {["Read", "Search", "Saved"].map((label) => (
                  <div
                    key={label}
                    className="flex-1 flex flex-col items-center gap-1 py-2 rounded-lg border border-bloom-card-border"
                  >
                    <div className="w-3 h-3 rounded-full bg-bloom-accent/20" />
                    <p className="text-[5px] font-mono uppercase tracking-wider text-bloom-text-secondary">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Glow behind phone */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-bloom-accent/8 blur-[80px] -z-10" />
        </div>
      </div>
    </section>
  );
}
