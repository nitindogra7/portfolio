"use client";

import { useEffect, useState } from "react";
import { PopupModal } from "react-calendly";
import { motion } from "framer-motion";

type BookCallProps = {
  variant?: "default" | "compact" | "icon";
  className?: string;
};

export default function BookCall({ variant = "default", className = "" }: BookCallProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <motion.button
        whileHover={{ y: -1, scale: 1.02 }}
        whileTap={{ scale: 0.96 }}
        onClick={() => setOpen(true)}
        className={`group inline-flex shrink-0 items-center gap-2 rounded-full border border-hairline bg-surface font-medium text-ink transition-all duration-300 hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-black ${
          variant === "icon"
            ? "px-3 py-2 text-[11px]"
            : variant === "compact"
            ? "px-3.5 py-2 text-xs sm:px-4"
            : "gap-3 px-6 py-3 text-sm"
        } ${className}`}
      >
        <span className="whitespace-nowrap">
          {variant === "icon" ? "Call" : variant === "compact" ? "Book a Call" : "Book a Discovery Call"}
        </span>

        <span
          className={`flex shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)] text-black transition-transform duration-300 group-hover:rotate-45 ${
            variant === "icon" ? "h-4 w-4 text-[10px]" : variant === "compact" ? "h-5 w-5 text-[11px]" : "h-8 w-8"
          }`}
        >
          →
        </span>
      </motion.button>

      {mounted && (
        <PopupModal
          url="https://calendly.com/dogranitin8417/30min"
          open={open}
          onModalClose={() => setOpen(false)}
          rootElement={document.body}
          pageSettings={{
            backgroundColor: "1a1815",
            textColor: "f5f4f0",
            primaryColor: "c9a876",
            hideEventTypeDetails: false,
            hideGdprBanner: false,
          }}
        />
      )}
    </>
  );
}