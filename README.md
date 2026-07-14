# Premier Driving School Kenya

A premium, animated marketing website for a fictional Kenyan driving school, built with Next.js 15 (App Router), TypeScript, Tailwind CSS, Framer Motion, GSAP, Lenis smooth scroll, Swiper, and Formspree.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

```
app/
  layout.tsx          Root layout — fonts, navbar, footer, smooth scroll, road progress line
  page.tsx             Home page
  courses/page.tsx      Courses page
  branches/page.tsx     Branches page
  gallery/page.tsx      Gallery page (masonry + lightbox + filters)
  about/page.tsx        About page
  contact/page.tsx      Contact / apply page (Formspree form)
components/            Shared UI: Navbar, Footer, Hero, Stats, WhyChooseUs,
                        CoursesPreview, Testimonials, BranchesPreview, CTA,
                        RoadProgress (signature scroll indicator)
lib/
  data.ts               Courses, branches, testimonials, stats content
  useLenis.ts            Lenis smooth-scroll hook
```

## Design system

- Colors: navy `#0F172A`, royal blue `#2563EB`, gold `#F59E0B`, light gray `#F8FAFC`, slate `#1E293B`
- Type: Sora (display), Inter (body), IBM Plex Mono (stats, labels, route markers)
- Signature element: a dashed "road line" runs down the center of the page on desktop,
  with a marker that tracks scroll progress — the whole site is framed as a literal
  route from hero to enrollment, with section eyebrows styled as kilometer markers.

## Images

All imagery currently uses Unsplash placeholder photography. See `IMAGE_PROMPTS.md`
for a full set of AI image-generation prompts to replace them with fully custom,
license-free photography before launch.

## Deploying

This is a standard Next.js app — deploy to Vercel, Netlify, or any Node host.

