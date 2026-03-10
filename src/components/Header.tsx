"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <img src="/bloom_leaf.png" alt="Bloom" className="w-8 h-8 object-contain" />
          <span
            className="text-sm tracking-[0.3em] text-bloom-text-tertiary font-mono uppercase"
          >
            Bloom
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {["Features", "Prayers", "About"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs font-mono uppercase tracking-[0.15em] text-bloom-text-secondary hover:text-bloom-text transition-colors"
            >
              {item}
            </a>
          ))}
          <a
            href="#download"
            className="text-xs font-mono uppercase tracking-[0.15em] text-bloom-card bg-bloom-accent hover:bg-bloom-accent/90 px-5 py-2.5 rounded-lg transition-all"
          >
            Download
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-bloom-card-border"
          aria-label="Toggle menu"
        >
          <svg
            className="w-5 h-5 text-bloom-text-secondary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-bloom-bg border-t border-bloom-card-border/40 animate-fade-in">
          <div className="px-6 py-4 flex flex-col gap-4">
            {["Features", "Prayers", "About"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-xs font-mono uppercase tracking-[0.15em] text-bloom-text-secondary hover:text-bloom-text py-2 transition-colors"
              >
                {item}
              </a>
            ))}
            <a
              href="#download"
              onClick={() => setMenuOpen(false)}
              className="text-xs font-mono uppercase tracking-[0.15em] text-bloom-card bg-bloom-accent text-center px-5 py-3 rounded-lg"
            >
              Download
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
