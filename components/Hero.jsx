"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Car from "./Car";

const HEADLINE = "WELCOME ITZFIZZ".split("");
const STATS = [
  { value: "58%", label: "Increase in pick up point use" },
  { value: "23%", label: "Decreased in customer phone calls" },
  { value: "27%", label: "Increase in pick up point use" },
  { value: "40%", label: "Decreased in customer phone calls" },
];

export default function Hero() {
  const root = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // 1. Intro: staggered headline, then stats one by one.
      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
      intro
        .from(".letter", { opacity: 0, y: 40, duration: 0.8, stagger: 0.05 })
        .from(".stat", { opacity: 0, y: 30, duration: 0.7, stagger: 0.25 }, "-=0.2");

      // 2. Scroll: car travels down the hero, tied to scroll progress.
      // scrub: 1 adds smoothing so motion eases toward the scroll position.
      const scroll = gsap.timeline({
        scrollTrigger: { trigger: ".hero-track", start: "top top", end: "bottom bottom", scrub: 1 },
      });
      scroll
        .to(".car", { y: () => window.innerHeight * 1.6, rotate: 6, scale: 1.15, ease: "none" }, 0)
        .to(".headline", { y: -60, opacity: 0.4, ease: "none" }, 0)
        .to(".stat", { y: (i) => -30 * (i + 1), ease: "none" }, 0);
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} className="hero-track relative h-[250vh]">
      <section className="sticky top-0 flex h-screen flex-col items-center overflow-hidden">
        <h1 className="headline mt-16 flex gap-[0.6em] text-xl font-light sm:text-3xl md:text-5xl">
          {HEADLINE.map((c, i) =>
            c === " " ? <span key={i} className="w-4" /> : <span key={i} className="letter inline-block">{c}</span>
          )}
        </h1>

        <div className="car absolute top-[22%] z-10 h-[38vh] will-change-transform">
          <Car />
        </div>

        <div className="absolute bottom-10 grid w-full max-w-6xl grid-cols-2 gap-6 px-6 md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label + s.value} className="stat border-t border-white/20 pt-4">
              <p className="text-4xl font-semibold md:text-6xl">{s.value}</p>
              <p className="mt-2 text-sm text-white/60">{s.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
