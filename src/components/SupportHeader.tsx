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
          <img src="/bloom_leaf.png" alt="Bloom" className="w-8 h-8 object-contain" />
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
            href="mailto:support@bloombible.com"
            className="text-xs font-mono uppercase tracking-[0.15em] text-bloom-card bg-bloom-accent hover:bg-bloom-accent/90 px-5 py-2.5 rounded-lg transition-all"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
