export default function CTA() {
  return (
    <section
      id="download"
      className="py-20 md:py-28 relative overflow-hidden"
    >
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-bloom-accent/8 blur-[120px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 text-center relative">
        {/* Vintage divider */}
        <div className="vintage-divider max-w-xs mx-auto mb-12">
          <svg className="w-3 h-3 text-bloom-divider shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.8 2C15.5.8 13.2 2 12 3.2 10.8 2 8.5.8 6.2 2 3.2 3.5 2.7 7.2 4.5 9.5c2.6 3.2 7.5 7.5 7.5 7.5s4.9-4.3 7.5-7.5C21.3 7.2 20.8 3.5 17.8 2z" />
          </svg>
        </div>

        <p className="text-xs font-mono uppercase tracking-[0.3em] text-bloom-text-tertiary mb-6">
          Begin Your Journey
        </p>

        <h2 className="font-serif text-4xl md:text-6xl font-bold text-bloom-text mb-6">
          Your faith,
          <br />
          <span className="text-bloom-accent">beautifully nourished</span>
        </h2>

        <p className="text-lg text-bloom-text-secondary font-serif max-w-xl mx-auto mb-10">
          Download Bloom today and discover a richer, more intentional
          relationship with scripture.
        </p>

        {/* Download button */}
        <a
          href="https://apps.apple.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-bloom-accent text-bloom-card px-10 py-4 rounded-lg text-sm font-mono uppercase tracking-[0.15em] hover:bg-bloom-accent/90 transition-all shadow-lg shadow-bloom-accent/20"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
          Download for iOS
        </a>

        <p className="text-xs text-bloom-text-tertiary mt-6">
          Free to download · iOS 17+
        </p>
      </div>
    </section>
  );
}
