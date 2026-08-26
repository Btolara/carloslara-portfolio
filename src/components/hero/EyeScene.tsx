import { Grain, SceneLabel, Vignette } from "./SceneChrome";

export default function EyeScene() {
  return (
    <div className="scene scene-eye absolute inset-0 flex items-center justify-center bg-[#0A0A0A]">
      <div className="scene-eye-art flex h-full w-full items-center justify-center">
        <svg
          viewBox="0 0 800 800"
          className="h-[140%] w-[140%] max-w-none opacity-90 sm:h-full sm:w-full"
          role="img"
          aria-label="Extreme close-up of an eye, placeholder artwork"
        >
          <defs>
            <radialGradient id="iris" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#3a2a1c" />
              <stop offset="35%" stopColor="#6b4a26" />
              <stop offset="70%" stopColor="#2a1c12" />
              <stop offset="100%" stopColor="#0A0A0A" />
            </radialGradient>
            <radialGradient id="sclera" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#2a2724" />
              <stop offset="100%" stopColor="#0A0A0A" />
            </radialGradient>
          </defs>

          <rect width="800" height="800" fill="#0A0A0A" />

          {/* eyelid opening (almond shape) */}
          <path
            d="M 60 400 Q 400 190 740 400 Q 400 610 60 400 Z"
            fill="url(#sclera)"
            stroke="#1a1a1a"
            strokeWidth="2"
          />

          {/* iris */}
          <circle cx="400" cy="400" r="180" fill="url(#iris)" />
          {Array.from({ length: 48 }).map((_, i) => {
            const angle = (i / 48) * Math.PI * 2;
            const x1 = Number((400 + Math.cos(angle) * 60).toFixed(2));
            const y1 = Number((400 + Math.sin(angle) * 60).toFixed(2));
            const x2 = Number((400 + Math.cos(angle) * 175).toFixed(2));
            const y2 = Number((400 + Math.sin(angle) * 175).toFixed(2));
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#000000"
                strokeOpacity="0.25"
                strokeWidth="1.5"
              />
            );
          })}

          {/* pupil */}
          <circle cx="400" cy="400" r="70" fill="#050505" />
          <circle cx="375" cy="375" r="18" fill="#ffffff" opacity="0.85" />
          <circle cx="430" cy="420" r="7" fill="#ffffff" opacity="0.3" />

          {/* upper / lower lash lines */}
          <path
            d="M 60 400 Q 400 190 740 400"
            fill="none"
            stroke="#000000"
            strokeWidth="10"
            strokeLinecap="round"
          />
          <path
            d="M 60 400 Q 400 610 740 400"
            fill="none"
            stroke="#000000"
            strokeWidth="6"
            strokeLinecap="round"
            opacity="0.7"
          />
        </svg>
      </div>

      {/* focus reticle to sell the "extreme close-up" framing */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="relative h-[46vmin] w-[46vmin] opacity-40">
          <span className="absolute left-0 top-0 h-6 w-6 border-l border-t border-white/60" />
          <span className="absolute right-0 top-0 h-6 w-6 border-r border-t border-white/60" />
          <span className="absolute bottom-0 left-0 h-6 w-6 border-b border-l border-white/60" />
          <span className="absolute bottom-0 right-0 h-6 w-6 border-b border-r border-white/60" />
        </div>
      </div>

      <Vignette />
      <Grain />
      <SceneLabel index="01 / 04" title="OBSERVE — PLACEHOLDER FRAME" />
    </div>
  );
}
