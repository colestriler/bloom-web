export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center px-6">
        <p className="text-xs font-mono uppercase tracking-[0.3em] text-bloom-text-tertiary mb-4">
          404
        </p>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-bloom-text mb-4">
          Page not found
        </h1>
        <p className="text-bloom-text-secondary font-serif mb-8">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <a
          href="/"
          className="inline-flex items-center gap-2 bg-bloom-accent text-bloom-card px-6 py-3 rounded-lg text-sm font-mono uppercase tracking-[0.1em] hover:bg-bloom-accent/90 transition-all"
        >
          ← Back to Home
        </a>
      </div>
    </main>
  );
}
