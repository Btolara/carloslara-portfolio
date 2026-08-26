"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import EyeScene from "./EyeScene";
import FaceScene from "./FaceScene";
import HandScene from "./HandScene";
import LabelScene from "./LabelScene";

const SCENES = [
  { key: "eye", label: "OBSERVE" },
  { key: "face", label: "IDENTITY" },
  { key: "hand", label: "WORK" },
  { key: "label", label: "CONTACT" },
];

export default function Hero() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<Array<HTMLSpanElement | null>>([]);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: reduceMotion ? true : 1,
          onUpdate: (self) => {
            const idx = Math.min(3, Math.floor(self.progress * 4));
            dotsRef.current.forEach((dot, i) => {
              if (!dot) return;
              dot.style.opacity = i === idx ? "1" : "0.25";
            });
          },
        },
        defaults: { ease: "none" },
      });

      // Scene 1 — eye: slow creeping zoom, then fade out
      tl.to(".scene-eye-art", { scale: 1.35, duration: 1 }, 0).to(
        ".scene-eye",
        { opacity: 0, duration: 0.3 },
        0.7
      );

      // Scene 2 — face: fade + settle in, hold, fade out
      tl.fromTo(
        ".scene-face",
        { opacity: 0, scale: 0.94 },
        { opacity: 1, scale: 1, duration: 0.3 },
        0.7
      ).to(".scene-face", { opacity: 0, duration: 0.3 }, 1.7);

      // Scene 3 — hand: fade + settle in, orbiting cards run independently, fade out
      tl.fromTo(
        ".scene-hand",
        { opacity: 0, scale: 0.92 },
        { opacity: 1, scale: 1, duration: 0.3 },
        1.7
      ).to(".scene-hand", { opacity: 0, duration: 0.3 }, 2.7);

      // Scene 4 — label: fade in, tag settles into place
      tl.fromTo(
        ".scene-label",
        { opacity: 0 },
        { opacity: 1, duration: 0.3 },
        2.7
      ).fromTo(
        ".care-label",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4 },
        2.85
      );
    }, wrapperRef);

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={wrapperRef}
      className="relative h-[500vh] bg-[#0A0A0A]"
      aria-label="Cinematic introduction"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#0A0A0A]">
        <EyeScene />
        <FaceScene />
        <HandScene />
        <LabelScene />

        <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex items-center justify-between px-6 pt-6 sm:px-12 sm:pt-10">
          <span className="font-mono text-xs tracking-[0.3em] text-white/70">
            CARLOS LARA
          </span>
          <span className="font-mono text-[10px] tracking-[0.3em] text-white/40">
            SCROLL
          </span>
        </div>

        <div className="pointer-events-none absolute right-6 top-1/2 z-20 flex -translate-y-1/2 flex-col gap-3 sm:right-10">
          {SCENES.map((scene, i) => (
            <span
              key={scene.key}
              ref={(el) => {
                dotsRef.current[i] = el;
              }}
              className="h-6 w-[2px] bg-white transition-opacity duration-200"
              style={{ opacity: i === 0 ? 1 : 0.25 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
