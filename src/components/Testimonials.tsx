const testimonials = [
  {
    quote:
      "Bloom has completely transformed my morning routine. The audio prayers help me start each day with intention and peace.",
    author: "Sarah M.",
    role: "Daily user for 6 months",
  },
  {
    quote:
      "The AI assistant is incredible — it's like having a knowledgeable Bible study partner available whenever I need guidance.",
    author: "James T.",
    role: "Bible study group leader",
  },
  {
    quote:
      "I love how the app tracks my spiritual journey. Seeing my growth over time has been so encouraging.",
    author: "Rachel K.",
    role: "New to faith",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-bloom-text-tertiary mb-4">
            What People Are Saying
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-bloom-text">
            Growing together
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="p-6 md:p-8 rounded-xl bg-bloom-card border border-bloom-card-border"
            >
              {/* Quote mark */}
              <span className="text-4xl font-serif text-bloom-accent/25 leading-none block mb-2">
                &ldquo;
              </span>

              {/* Quote text */}
              <p className="font-serif text-bloom-text leading-relaxed mb-6">
                {t.quote}
              </p>

              {/* Divider */}
              <div className="w-full h-px bg-bloom-divider/50 mb-4" />

              {/* Author */}
              <div>
                <p className="text-sm font-mono font-medium text-bloom-text uppercase tracking-wider">
                  {t.author}
                </p>
                <p className="text-xs text-bloom-text-tertiary mt-0.5">
                  {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
