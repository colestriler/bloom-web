const prayerCategories = [
  { name: "Morning", icon: "☀️", description: "Start your day centered", count: 3 },
  { name: "Evening", icon: "🌙", description: "End your day in peace", count: 2 },
  { name: "Gratitude", icon: "❤️", description: "Cultivate thankfulness", count: 2 },
  { name: "Anxiety & Peace", icon: "🍃", description: "Find calm and rest", count: 3 },
  { name: "Guidance", icon: "🧭", description: "Seek direction", count: 2 },
  { name: "Healing", icon: "✝️", description: "Prayers for restoration", count: 2 },
  { name: "Family", icon: "🏠", description: "Bless your loved ones", count: 2 },
  { name: "Work & Purpose", icon: "💼", description: "Purpose in your calling", count: 2 },
];

const featuredPrayers = [
  { title: "Morning Gratitude", duration: "3:05", category: "Morning" },
  { title: "Finding Stillness", duration: "7:00", category: "Anxiety & Peace" },
  { title: "Evening Rest", duration: "5:20", category: "Evening" },
  { title: "Seeking Direction", duration: "5:50", category: "Guidance" },
];

export default function AudioPrayers() {
  return (
    <section id="prayers" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-bloom-text-tertiary mb-4">
            Guided Audio Prayers
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-bloom-text mb-4">
            Prayers for every moment
          </h2>
          <p className="text-bloom-text-secondary font-serif max-w-lg mx-auto">
            Listen to beautifully crafted prayers designed to meet you wherever
            you are in your journey.
          </p>
        </div>

        {/* Category scroll */}
        <div className="mb-12">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-bloom-text-tertiary mb-5">
            Categories
          </p>
          <div className="flex gap-3 overflow-x-auto pb-4 -mx-6 px-6 scrollbar-hide">
            {prayerCategories.map((cat) => (
              <div
                key={cat.name}
                className="flex-none w-[150px] p-4 rounded-xl bg-bloom-card border border-bloom-card-border hover:border-bloom-accent/30 transition-all text-center"
              >
                <span className="text-2xl block mb-2">{cat.icon}</span>
                <p className="text-sm font-serif font-semibold text-bloom-text mb-1">
                  {cat.name}
                </p>
                <p className="text-[11px] font-mono text-bloom-text-tertiary">
                  {cat.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Vintage divider */}
        <div className="vintage-divider max-w-xs mx-auto mb-12">
          <svg className="w-3 h-3 text-bloom-divider shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
          </svg>
        </div>

        {/* Featured prayers list */}
        <div className="max-w-2xl mx-auto">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-bloom-text-tertiary mb-5">
            Featured Prayers
          </p>
          <div className="space-y-3">
            {featuredPrayers.map((prayer) => (
              <div
                key={prayer.title}
                className="flex items-center gap-4 p-4 rounded-xl bg-bloom-card border border-bloom-card-border hover:border-bloom-accent/30 transition-all group cursor-pointer"
              >
                {/* Play button */}
                <div className="w-11 h-11 rounded-full border-[1.5px] border-bloom-card-border flex items-center justify-center group-hover:border-bloom-accent/50 transition-colors shrink-0">
                  <svg
                    className="w-4 h-4 text-bloom-accent ml-0.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="text-base font-serif font-semibold text-bloom-text truncate">
                    {prayer.title}
                  </p>
                  <p className="text-xs font-mono text-bloom-text-tertiary">
                    {prayer.duration} · {prayer.category}
                  </p>
                </div>

                {/* Arrow */}
                <svg
                  className="w-4 h-4 text-bloom-text-tertiary group-hover:text-bloom-accent transition-colors shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
