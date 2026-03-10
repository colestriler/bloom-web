export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-bloom-card-border">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/bloom_leaf.png" alt="Bloom" className="w-7 h-7 object-contain" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-bloom-text-tertiary">
              Bloom
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            {[
              { label: "Privacy", href: "/privacy" },
              { label: "Terms", href: "/terms" },
              { label: "Support", href: "/support" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-mono uppercase tracking-[0.1em] text-bloom-text-tertiary hover:text-bloom-text transition-colors"
              >
                {link.label}
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
