# Scroll-Driven Hero Animation

Hero section with a staggered intro and a scroll-scrubbed car animation.

Stack: Next.js (static export), React, Tailwind CSS, GSAP + ScrollTrigger.

- `components/Hero.jsx` - layout, intro timeline, scroll timeline (`scrub: 1` for easing)
- `components/Car.jsx` - original inline SVG car (no external images)

Run: `npm install && npm run dev`. Build: `npm run build` (outputs `out/`).
Deployed with GitHub Pages via `.github/workflows/deploy.yml`.
