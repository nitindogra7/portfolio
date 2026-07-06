// All site copy lives here. Edit this file to update text across the site
// without touching any component code.

export const profile = {
  name: "Megha",
  role: "Graphic Designer",
  location: "Delhi, India",
  tagline: "Design that Speaks",
  heroHeading: "Meet Megha",
  heroSubtext:
    "I'm Megha, a passionate Brand Identity & Package Designer based in Delhi. I specialize in crafting bold visual identities and packaging that captivate and inspire, blending creativity with strategy to elevate brands.",
  aboutHeading: "Meet Megha",
  aboutBody:
    "I'm Megha, a graphic designer based in Delhi working across branding, packaging and editorial design. I blend traditional Indian visual craft with clean modern systems — so every mark feels considered, never generic.",
  email: "hello@meghadesigns.com",
  social: {
    behance: "https://www.behance.net/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
  },
};

export const skills = [
  "Brand Identity",
  "Packaging Design",
  "Typography",
  "Editorial Layout",
  "Illustration",
  "After Effects",
  "Photoshop",
];

export const experience = [
  { role: "Freelance Designer", place: "Remote", period: "Currently" },
  { role: "Brand Designer", place: "Cyberbizz Technology", period: "2025-currently" },
  { role: "Graphic Designer", place: "Syntax World", period: "2024-2025" },
];

export const stats = [
  { value: "120+", label: "Design projects completed" },
  { value: "94%", label: "Client satisfaction rate" },
  { value: "6+", label: "Years of experience" },
];

export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  cover: string;
  description: string;
};

export const projects: Project[] = [
  {
    slug: "chai-house",
    title: "Chai House",
    category: "Brand Identity",
    year: "2025",
    cover:
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=1200&auto=format&fit=crop",
    description:
      "A warm, hand-drawn identity for a modern chai brand — packaging signage and social templates.",
  },
  {
    slug: "kaaghaz-paper-co",
    title: "Kaaghaz Paper Co.",
    category: "Packaging",
    year: "2024",
    cover:
      "https://images.unsplash.com/photo-1600431521340-491eca880813?q=80&w=1200&auto=format&fit=crop",
    description:
      "Sustainable stationery packaging using recycled kraft stock and a single spot colour.",
  },
  {
    slug: "sundar-studio",
    title: "Sundar Studio",
    category: "Brand Identity",
    year: "2024",
    cover:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1200&auto=format&fit=crop",
    description:
      "Visual identity for an interior design studio — logotype, colour system and stationery.",
  },
  {
    slug: "mela-festival",
    title: "Mela Festival",
    category: "Editorial",
    year: "2023",
    cover:
      "https://images.unsplash.com/photo-1523875194681-bedd468c58bf?q=80&w=1200&auto=format&fit=crop",
    description:
      "Poster and programme design for an annual community arts festival in Delhi.",
  },
  {
    slug: "namkeen-co",
    title: "Namkeen Co.",
    category: "Packaging",
    year: "2023",
    cover:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1200&auto=format&fit=crop",
    description:
      "Bold, retro-inspired packaging system for a modern namkeen snack brand.",
  },
];

export const process = [
  {
    number: "01",
    title: "Understand the brief",
    body: "A quick discovery call to understand your audience, goals, and the story your brand is meant to tell.",
  },
  {
    number: "02",
    title: "Explore & design",
    body: "Concepts, moodboards and refinement — shared early so you're never surprised by the direction.",
  },
  {
    number: "03",
    title: "Deliver & handover",
    body: "Final files, source assets and guidelines delivered in an organised, ready-to-use package.",
  },
];

export const services = [
  {
    title: "Brand Identity",
    body: "Logos, colour systems and visual language that give your brand a distinct, memorable presence.",
  },
  {
    title: "Packaging Design",
    body: "Shelf-ready packaging that balances craft, print-readiness and shopper appeal.",
  },
  {
    title: "Editorial Design",
    body: "Posters, brochures and layouts built on a strong typographic grid.",
  },
  {
    title: "Social & Print",
    body: "Templates and collateral that keep your brand consistent across every touchpoint.",
  },
];

export const testimonials = [
  {
    name: "Rohan Verma",
    role: "Founder, Chai House",
    quote:
      "Megha understood our brand instantly. The identity she built feels handmade and premium at once — exactly what we wanted.",
  },
  {
    name: "Ishita Malhotra",
    role: "Creative Lead, Kaaghaz Paper Co.",
    quote:
      "Sharp typographic instincts and great communication throughout. Our packaging finally looks as good as the product inside.",
  },
  {
    name: "Aman Kapoor",
    role: "Founder, Sundar Studio",
    quote:
      "Working with Megha was smooth from brief to delivery. She pushed our ideas further than we expected.",
  },
];

export const faqs = [
  {
    q: "What services do you offer?",
    a: "Brand identity, packaging design, editorial layouts and social/print collateral for small and growing businesses.",
  },
  {
    q: "How long does a project usually take?",
    a: "Most brand identity projects take 2–3 weeks; packaging projects typically take 1–2 weeks depending on scope.",
  },
  {
    q: "Do you offer revisions?",
    a: "Yes — every project includes two rounds of revisions to make sure the final design feels right.",
  },
  {
    q: "Which design tools do you use?",
    a: "Primarily Figma, Adobe Illustrator and Photoshop, depending on the deliverable.",
  },
  {
    q: "How do we start working together?",
    a: "Reach out over email with a short brief, and I'll respond within a day to schedule an intro call.",
  },
];
