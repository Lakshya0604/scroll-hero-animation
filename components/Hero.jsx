"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Car from "./Car";

const STATS = [
  { value: "58%", label: "Increase in pick-up point use" },
  { value: "23%", label: "Fewer customer phone calls" },
  { value: "27%", label: "Increase in pick-up point use" },
  { value: "40%", label: "Fewer customer phone calls" },
];
const CHAPTERS = ["A little scroll. A lot of possibility.", "Made to move you forward.", "Good things are just around the bend."];

export default function Hero() {
  const root = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    // MatchMedia owns cleanup when the accessibility preference changes.
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const context = gsap.context(() => {
        gsap.timeline({ defaults: { ease: "power3.out" } })
          .from(".masthead", { y: -12, opacity: 0, duration: 0.7 })
          .from(".letter", { yPercent: 110, opacity: 0, duration: 0.85, stagger: 0.035 }, "-=0.35")
          .from(".stage", { opacity: 0, y: 24, duration: 0.9 }, "-=0.65")
          .from(".stat", { opacity: 0, y: 22, duration: 0.7, stagger: 0.12 }, "-=0.5")
          .from(".hero-footer", { opacity: 0, duration: 0.5 }, "-=0.3");

        const stage = root.current.querySelector(".stage");
        const vehicle = root.current.querySelector(".vehicle");
        // Geometry is measured only when ScrollTrigger refreshes, not per frame.
        const travel = () => stage.clientWidth * 0.8 - vehicle.offsetWidth;
        const drive = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: root.current, start: "top top", end: "bottom bottom",
            scrub: 0.85, invalidateOnRefresh: true,
          },
        });
        drive
          .to(".vehicle", { x: travel, duration: 1 }, 0)
          .to(".road-lines", { xPercent: -35, duration: 1 }, 0)
          .to(".road-fill", { scaleX: 1, duration: 1 }, 0)
          .to(".progress-fill", { scaleX: 1, duration: 1 }, 0)
          .to(".road-word", { xPercent: -12, duration: 1 }, 0)
          .to(".halo", { xPercent: 35, scale: 1.3, duration: 1 }, 0)
          .to(".vehicle", { rotation: -4, scale: 1.05, duration: 0.3, ease: "sine.inOut" }, 0.1)
          .to(".vehicle", { rotation: 3, scale: 1, duration: 0.3, ease: "sine.inOut" }, 0.4)
          .to(".vehicle", { rotation: 0, duration: 0.3, ease: "sine.inOut" }, 0.7)
          .to(".stat", { y: -8, stagger: 0.04, duration: 0.7 }, 0.15)
          .to(".chapter-0", { opacity: 0, y: -10, duration: 0.08 }, 0.28)
          .fromTo(".chapter-1", { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.08 }, 0.36)
          .to(".chapter-1", { opacity: 0, y: -10, duration: 0.08 }, 0.62)
          .fromTo(".chapter-2", { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.08 }, 0.7);
      }, root);
      return () => context.revert();
    });
    return () => media.revert();
  }, []);

  return (
    <div ref={root} className="hero-track relative">
      <section className="hero-screen sticky top-0 overflow-hidden" aria-label="Scroll-driven hero">
        <header className="masthead flex items-center justify-between">
          <a href="#top" className="brand" aria-label="Itzfizz home">itzfizz<span>®</span></a>
          <span className="eyebrow hidden sm:block">A digital experience in motion</span>
          <span className="edition"><i /> SCROLL EDITION / 01</span>
        </header>

        <div className="headline-wrap text-center">
          <p className="eyebrow mb-3">Small interactions. Lasting impressions.</p>
          <h1 className="headline" aria-label="Welcome Itzfizz">
            {"WELCOME ITZFIZZ".split(" ").map((word) => (
              <span className="headline-word" aria-hidden="true" key={word}>
                {word.split("").map((letter, index) => <span className="letter" key={index}>{letter}</span>)}
              </span>
            ))}
          </h1>
        </div>

        <div className="stage relative" aria-label="Original orange car moves along a road as you scroll">
          <div className="halo" aria-hidden="true" />
          <div className="road-word" aria-hidden="true">FORWARD.</div>
          <div className="road">
            <div className="road-fill" />
            <div className="road-lines" />
          </div>
          <div className="vehicle" aria-hidden="true"><div className="car-orientation"><Car /></div></div>
          <span className="road-label road-start">THE START</span>
          <span className="road-label road-end">WHAT'S NEXT ↗</span>
          <div className="chapter-wrap">
            {CHAPTERS.map((text, i) => <p className={`chapter chapter-${i}`} key={text}>{text}</p>)}
          </div>
        </div>

        <div className="stats grid grid-cols-2 md:grid-cols-4" aria-label="Illustrative impact statistics">
          {STATS.map((stat, index) => (
            <article className="stat" key={stat.value}>
              <span className="stat-index">0{index + 1} / IMPACT</span>
              <p className="stat-value">{stat.value}<span>↗</span></p>
              <p className="stat-label">{stat.label}</p>
            </article>
          ))}
        </div>

        <footer className="hero-footer flex items-center justify-between">
          <span className="scroll-cue"><span>↓</span> SCROLL TO DRIVE</span>
          <div className="progress-track" aria-hidden="true"><div className="progress-fill" /></div>
          <span className="eyebrow">BUILT FOR THE JOURNEY</span>
        </footer>
      </section>
    </div>
  );
}
