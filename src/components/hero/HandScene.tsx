"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { projects } from "@/lib/projects";
import { Grain, SceneLabel, Vignette } from "./SceneChrome";

export default function HandScene() {
  const orbitRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const radius = { x: 0, y: 0 };

    const setRadius = () => {
      const isSmall = window.innerWidth < 640;
      radius.x = isSmall ? 130 : 300;
      radius.y = isSmall ? 90 : 165;
    };
    setRadius();

    const state = { angle: 0 };
    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];

    const place = () => {
      cards.forEach((el, i) => {
        const theta =
          (state.angle + (i * 360) / cards.length) * (Math.PI / 180);
        gsap.set(el, {
          xPercent: -50,
          yPercent: -50,
          x: Math.cos(theta) * radius.x,
          y: Math.sin(theta) * radius.y,
        });
      });
    };
    place();

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const tween = reduceMotion
      ? null
      : gsap.to(state, {
          angle: 360,
          duration: 26,
          repeat: -1,
          ease: "none",
          onUpdate: place,
        });

    const onResize = () => {
      setRadius();
      place();
    };
    window.addEventListener("resize", onResize);

    return () => {
      tween?.kill();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="scene scene-hand absolute inset-0 flex items-center justify-center bg-[#0A0A0A] opacity-0">
      <div
        ref={orbitRef}
        className="scene-hand-art relative flex h-full w-full items-center justify-center"
      >
        {/* hand silhouette */}
        <svg
          viewBox="0 0 500 600"
          className="h-[55%] max-w-none opacity-90 sm:h-[65%]"
          role="img"
          aria-label="Open hand, placeholder artwork"
        >
          <defs>
            <linearGradient id="handGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2b2622" />
              <stop offset="100%" stopColor="#100d0b" />
            </linearGradient>
          </defs>
          <path
            fill="url(#handGrad)"
            d="M 210 600 C 150 600 120 560 115 500 L 105 340 C 103 320 118 305 135 305 C 150 305 162 317 164 333 L 172 400 L 172 200 C 172 182 187 167 205 167 C 223 167 238 182 238 200 L 238 360 L 238 150 C 238 132 253 117 271 117 C 289 117 304 132 304 150 L 304 360 L 304 170 C 304 152 319 137 337 137 C 355 137 370 152 370 170 L 370 380 L 375 300 C 377 282 392 268 410 270 C 428 272 441 288 439 306 L 420 470 C 415 540 380 600 310 600 Z"
          />
        </svg>

        {/* orbiting portfolio cards */}
        {projects.map((project, i) => (
          <div
            key={project.name}
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
            className="pointer-events-none absolute left-1/2 top-1/2 flex w-[128px] flex-col items-start gap-1 rounded-xl border border-white/15 bg-white/5 px-4 py-3 backdrop-blur-md sm:w-[150px]"
          >
            <span className="font-mono text-[9px] tracking-[0.2em] text-white/40">
              0{i + 1}
            </span>
            <span className="text-xs font-medium tracking-tight text-white/90 sm:text-sm">
              {project.name}
            </span>
          </div>
        ))}
      </div>

      <Vignette />
      <Grain />
      <SceneLabel index="03 / 04" title="WORK — SELECTED PROJECTS" />
    </div>
  );
}
