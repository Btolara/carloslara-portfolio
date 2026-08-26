"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { Grain, SceneLabel, Vignette } from "./SceneChrome";

export default function FaceScene() {
  const breatheRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion || !breatheRef.current) return;

    const tween = gsap.to(breatheRef.current, {
      scale: 1.035,
      duration: 2.2,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      transformOrigin: "50% 50%",
    });

    return () => {
      tween.kill();
    };
  }, []);

  return (
    <div className="scene scene-face absolute inset-0 flex items-center justify-center bg-[#0A0A0A] opacity-0">
      <div
        ref={breatheRef}
        className="scene-face-breathe flex h-full w-full items-center justify-center"
      >
        <svg
          viewBox="0 0 600 800"
          className="h-[85%] max-w-none opacity-95"
          role="img"
          aria-label="Face wearing sunglasses, placeholder artwork"
        >
          <defs>
            <linearGradient id="skin" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2b2622" />
              <stop offset="100%" stopColor="#100d0b" />
            </linearGradient>
            <linearGradient id="lens" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3a3a3a" />
              <stop offset="55%" stopColor="#0a0a0a" />
              <stop offset="100%" stopColor="#000000" />
            </linearGradient>
            <linearGradient id="shine" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
              <stop offset="40%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* head / shoulders silhouette */}
          <path
            d="M 300 60 C 200 60 150 150 150 260 C 150 340 175 380 175 380 L 130 460 C 100 520 90 600 90 680 L 90 780 L 510 780 L 510 680 C 510 600 500 520 470 460 L 425 380 C 425 380 450 340 450 260 C 450 150 400 60 300 60 Z"
            fill="url(#skin)"
          />

          {/* ears */}
          <ellipse cx="150" cy="300" rx="18" ry="30" fill="#100d0b" />
          <ellipse cx="450" cy="300" rx="18" ry="30" fill="#100d0b" />

          {/* sunglasses bridge */}
          <rect x="285" y="288" width="30" height="10" rx="4" fill="#050505" />

          {/* lenses */}
          <g>
            <rect
              x="165"
              y="255"
              width="130"
              height="80"
              rx="26"
              fill="url(#lens)"
              stroke="#000000"
              strokeWidth="4"
            />
            <rect
              x="305"
              y="255"
              width="130"
              height="80"
              rx="26"
              fill="url(#lens)"
              stroke="#000000"
              strokeWidth="4"
            />
            <rect x="165" y="255" width="130" height="80" rx="26" fill="url(#shine)" />
            <rect x="305" y="255" width="130" height="80" rx="26" fill="url(#shine)" />
          </g>

          {/* temple arms */}
          <path d="M 165 275 L 110 260" stroke="#050505" strokeWidth="8" strokeLinecap="round" />
          <path d="M 435 275 L 490 260" stroke="#050505" strokeWidth="8" strokeLinecap="round" />

          {/* nose + mouth suggestion */}
          <path d="M 300 335 L 290 400 Q 300 410 310 400 Z" fill="#0d0b09" opacity="0.6" />
          <path
            d="M 265 445 Q 300 460 335 445"
            stroke="#000000"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            opacity="0.5"
          />
        </svg>
      </div>

      <Vignette />
      <Grain />
      <SceneLabel index="02 / 04" title="IDENTITY — PLACEHOLDER FRAME" />
    </div>
  );
}
