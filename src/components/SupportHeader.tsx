"use client";

import { useState, useEffect } from "react";

export default function SupportHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bloom-bg/95 backdrop-blur-md border-b border-bloom-card-border/40 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo → home */}
        <a href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-bloom-accent flex items-center justify-center">
            <svg
              className="w-4 h-4 text-bloom-card"
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
          <span className="text-sm tracking-[0.3em] text-bloom-text-tertiary font-mono uppercase">
            Bloom
          </span>
        </a>

        {/* Nav */}
        <nav className="flex items-center gap-6">
          <a
            href="/"
            className="text-xs font-mono uppercase tracking-[0.15em] text-bloom-text-secondary hover:text-bloom-text transition-colors"
          >
            ← Home
          </a>
          <a
            href="mailto:support@bloomapp.co"
            className="text-xs font-mono uppercase tracking-[0.15em] text-bloom-card bg-bloom-accent hover:bg-bloom-accent/90 px-5 py-2.5 rounded-lg transition-all"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
