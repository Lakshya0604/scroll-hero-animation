# Itzfizz | Scroll-driven hero

An editorial hero with an original orange car, staggered typography, impact metrics, and a scroll-scrubbed journey. Inspired by the motion concept at https://paraschaturvedi.github.io/car-scroll-animation/; artwork and styling are original, not copied.

**Live:** https://lakshya0604.github.io/scroll-hero-animation/

## Stack

Next.js 14 / React 18, JavaScript (JSX), semantic HTML, CSS, Tailwind CSS 3, GSAP 3 and ScrollTrigger. Static export hosted on GitHub Pages.

## Run locally

```sh
npm install
npm run dev
```

Open http://localhost:3000. Production build:

```sh
NEXT_PUBLIC_BASE_PATH=/scroll-hero-animation npm run build
```

The generated `out/` directory is deployed by `.github/workflows/deploy.yml` on pushes to `main`. No backend or API keys are needed.

## How it works

- `components/Hero.jsx`: scoped GSAP intro and scroll timelines. Headline letters fade up in sequence, followed by staggered statistics.
- A 280svh scroll track contains a sticky 100svh hero. ScrollTrigger maps the track's progress to car translation, gentle turn/scale, road fill, lane parallax, captions, and progress indicator.
- `scrub: 0.85` interpolates motion toward the current scroll position. The main journey is never time-based autoplay and reverses when scrolling up.
- Measurements run on ScrollTrigger refresh, not on every scroll frame. Per-frame visual updates use transform/opacity, not layout properties. No React state updates on scroll and no custom scroll-event listener.
- The car's intro and scroll transforms are kept on separate elements to avoid competing timelines. GSAP context and MatchMedia revert on unmount.
- `components/Car.jsx`: original inline SVG artwork. No external image downloads or third-party fonts.
- `app/globals.css`: responsive styles and reduced-motion fallback. Tailwind handles structural layout utilities.
- `app/page.jsx`: hero plus a short finishing section with a keyboard-accessible return link.

## Requirements checklist

- [x] Full first-screen hero with letter-spaced "WELCOME ITZFIZZ" heading
- [x] Percentage statistics with short descriptions
- [x] Smooth staggered headline and sequential statistics on load
- [x] Scroll-progress-tied main visual with interpolation
- [x] Transform/opacity-based animation; no per-frame layout measurements
- [x] HTML / CSS / JavaScript + React / Next.js + Tailwind + GSAP
- [x] Mobile 2-column metrics and responsive car travel
- [x] Reduced-motion preference, semantic headings, keyboard focus styles
- [x] Static GitHub Pages deployment and readable source

Statistics are illustrative assignment content, not verified business results. Bootstrap and WordPress are optional and intentionally not included because they add no value to this React implementation.
