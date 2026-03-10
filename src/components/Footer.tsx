export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-bloom-card-border">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-bloom-accent flex items-center justify-center">
              <svg
                className="w-3.5 h-3.5 text-bloom-card"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                />
              </svg>
            </div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-bloom-text-tertiary">
              Bloom
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            {["Privacy", "Terms", "Support"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-xs font-mono uppercase tracking-[0.1em] text-bloom-text-tertiary hover:text-bloom-text transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs text-bloom-text-tertiary">
            &copy; {year} Bloom. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
