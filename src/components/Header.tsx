"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { profile } from "@/data/content";
import BookCall from "./bookCall";

const links = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Projects" },
  { href: "#say", label: "Testimonials" },
  { href: "#faq", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`sticky top-0 z-[110] transition-all duration-300 ${
          scrolled
            ? "border-b border-hairline bg-bg/70 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-content items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          {/* Logo */}
          <a
            href="#hero"
            className="focus-ring flex items-center gap-2.5 font-display text-lg text-ink"
          >
            <span className="relative flex h-8 w-8 items-center justify-center rounded-lg border border-hairline bg-chip">
              <span className="h-2 w-2 rounded-sm bg-[var(--color-accent)]" />
            </span>
            {profile.name}
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 rounded-full border border-transparent px-1 py-1 transition-colors duration-300 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="focus-ring rounded-full px-4 py-2 font-mono text-[10px] uppercase tracking-wider text-stone transition-colors duration-200 hover:bg-chip hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right side: BookCall + Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="sm:hidden">
              <BookCall variant="icon" />
            </div>
            <div className="hidden sm:block">
              <BookCall variant="compact" />
            </div>

            {/* Hamburger button, mobile only */}
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="focus-ring relative flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-hairline bg-chip md:hidden"
            >
              <span className="relative flex h-4 w-5 flex-col justify-between">
                <motion.span
                  animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="h-[1.5px] w-full origin-center bg-ink"
                />
                <motion.span
                  animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.15 }}
                  className="h-[1.5px] w-full bg-ink"
                />
                <motion.span
                  animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="h-[1.5px] w-full origin-center bg-ink"
                />
              </span>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Portal: overlay + drawer render at document.body, escaping header's transform */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {menuOpen && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  onClick={closeMenu}
                  className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm md:hidden"
                />

                <motion.div
                  initial={{ opacity: 0, y: -12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="fixed inset-x-0 top-[88px] z-[101] mx-4 rounded-2xl border border-hairline bg-surface p-4 shadow-2xl md:hidden"
                >
                  <nav className="flex flex-col gap-1">
                    {links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={closeMenu}
                        className="focus-ring rounded-xl px-4 py-3 font-mono text-xs uppercase tracking-wider text-stone transition-colors duration-200 hover:bg-chip hover:text-ink"
                      >
                        {link.label}
                      </a>
                    ))}
                  </nav>
                </motion.div>
              </>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}