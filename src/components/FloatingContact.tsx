"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { profile } from "@/data/content";

export default function FloatingContact() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.9 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href={`mailto:${profile.email}`}
          className="focus-ring group fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-5 py-3.5 font-mono text-[11px] uppercase tracking-wider text-bg shadow-[0_10px_30px_-8px_var(--color-accent)] transition-colors duration-300 hover:bg-ink sm:bottom-8 sm:right-8"
          aria-label="Contact me by email"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-bg opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-bg" />
          </span>
          Let&apos;s talk
          <span className="transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true">
            →
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}