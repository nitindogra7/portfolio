# Megha — Portfolio Website

A minimal, dark-theme portfolio built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**, inspired by the Portfolite layout.

## Getting started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Folder structure (what lives where)

```
src/
├── app/
│   ├── layout.tsx       # Root layout — fonts, <html>/<body>, page metadata
│   ├── page.tsx         # Home page — just imports & stacks the sections below
│   └── globals.css      # Global styles + Tailwind setup
│
├── components/          # One file per visual section of the page
│   ├── Header.tsx        # Top nav bar — blurs/darkens on scroll
│   ├── IndexRail.tsx     # Fixed left-side scroll index (desktop signature element)
│   ├── Hero.tsx          # "Meet Megha" intro: headline, bio, skills, experience, portrait
│   ├── ProjectCard.tsx   # Single reusable project card
│   ├── Work.tsx          # Projects grid (uses ProjectCard)
│   ├── Process.tsx       # 3-step "how I work" section
│   ├── Services.tsx      # List of services offered
│   ├── Testimonials.tsx  # Client reviews + stats
│   ├── Faq.tsx           # Expandable FAQ accordion
│   └── Footer.tsx        # Closing CTA + social links
│
└── data/
    └── content.ts        # ALL editable text/content lives here (name, bio,
                           # projects, services, testimonials, FAQs, etc.)
```

## How to edit content

You almost never need to touch component files to update text or add a project.
Open **`src/data/content.ts`** and edit:

- `profile` — name, role, location, hero text, email, socials
- `projects` — add/remove portfolio pieces (title, category, cover image, description)
- `services`, `process`, `testimonials`, `faqs`, `stats`, `skills`, `experience`

To add a new project, just add another object to the `projects` array in `content.ts` — the grid in `Work.tsx` updates automatically.

## Design tokens

Defined in `src/app/globals.css` via Tailwind v4's `@theme` block (no `tailwind.config.ts` needed):

- `bg` — page background (#0A0A0A)
- `surface` — image/card background (#141414)
- `ink` — primary text, near-white (#F5F5F3)
- `stone` — secondary/muted text (#9A9A97)
- `hairline` — border color (#262626)
- `chip` — pill/button background (#1C1C1C)

Fonts: **Satoshi** (display/body, loaded via Fontshare `@font-face` in `globals.css`, with Inter as an offline fallback), **JetBrains Mono** (labels/numbers).

## Animation

Framer Motion is used sparingly:
- Header fades/slides in on load, and gains a blurred dark background once you scroll past ~24px
- Hero content staggers in (headline → subtext → skills → experience)
- Section headings and cards fade up into view on scroll (`whileInView`, `once: true`)
- FAQ accordion expands/collapses with a height animation

## Replacing images

Project cover images and the about-section portrait currently use Unsplash placeholder URLs, defined in `src/data/content.ts` and `src/components/About.tsx`. Replace these URLs with your own image links (or move to local files in `/public` and update the `src` paths).
