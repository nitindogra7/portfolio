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
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-5 lg:px-12">
        <a href="#hero" className="focus-ring flex items-center gap-2 font-display text-lg">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-ink text-bg">
            <span className="h-2.5 w-2.5 rounded-sm bg-bg" />
          </span>
          {profile.name}
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="focus-ring text-sm text-stone transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href={`mailto:${profile.email}`}
          className="focus-ring rounded-full bg-chip px-5 py-2.5 text-sm text-ink transition-colors hover:bg-ink hover:text-bg"
        >
          Get in Touch
        </a>
      </div>
    </motion.header>
  );
}
