"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "Hero" },
  { id: "work", label: "Work" },
  { id: "process", label: "Process" },
  { id: "services", label: "Services" },
  { id: "say", label: "Say" },
  { id: "faq", label: "FAQ" },
];

// Fixed vertical index rail, styled like tab markers on a contact sheet.
// Highlights the section currently in view.
export default function IndexRail() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Section index"
      className="fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-4 lg:flex"
    >
      {/* Connecting spine — same hairline used for section dividers throughout */}
      <span
        aria-hidden="true"
        className="absolute left-[2.5px] top-0 h-full w-px bg-hairline"
      />

      {sections.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          className="focus-ring group relative flex items-center gap-3"
        >
          <span
            className={`relative h-[6px] w-[6px] shrink-0 rounded-full transition-all duration-300 ${
              active === id
                ? "scale-125 bg-[var(--color-accent)]"
                : "bg-stone/40 group-hover:bg-stone"
            }`}
          >
            {active === id && (
              <span className="absolute inset-0 -m-1.5 rounded-full border border-[var(--color-accent)]/30" />
            )}
          </span>
          <span
            className={`font-mono text-[10px] uppercase tracking-[0.15em] transition-all duration-300 ${
              active === id
                ? "translate-x-0 text-[var(--color-accent)] opacity-100"
                : "-translate-x-0.5 text-stone opacity-0 group-hover:translate-x-0 group-hover:opacity-60"
            }`}
          >
            {label}
          </span>
        </a>
      ))}
    </nav>
  );
}