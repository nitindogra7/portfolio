"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { profile } from "@/data/content";

const links = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Projects" },
  { href: "#say", label: "Testimonials" },
  { href: "#faq", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-hairline bg-bg/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-content items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
        <a href="#hero" className="focus-ring flex items-center gap-2.5 font-display text-lg text-ink">
          <span className="relative flex h-8 w-8 items-center justify-center rounded-lg border border-hairline bg-chip">
            <span className="h-2 w-2 rounded-sm bg-[var(--color-accent)]" />
          </span>
          {profile.name}
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="focus-ring rounded-full px-4 py-2 font-mono text-[10px] uppercase tracking-wider text-stone transition-colors duration-200 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={`mailto:${profile.email}`}
          className="focus-ring inline-flex items-center gap-2 rounded-full border border-hairline bg-chip px-5 py-2.5 font-mono text-[10px] uppercase tracking-wider text-ink transition-colors duration-200 hover:border-[var(--color-accent)]/40 hover:text-[var(--color-accent)]"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
          Get in Touch
        </a>
      </div>
    </motion.header>
  );
}