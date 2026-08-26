import { Grain, SceneLabel, Vignette } from "./SceneChrome";

export default function LabelScene() {
  return (
    <div className="scene scene-label absolute inset-0 flex items-center justify-center bg-[#0A0A0A] opacity-0">
      <div className="scene-label-art relative flex h-full w-full items-center justify-center">
        {/* back / shoulders silhouette */}
        <svg
          viewBox="0 0 600 800"
          className="h-[95%] max-w-none opacity-90"
          role="img"
          aria-label="Back of a person wearing a garment, placeholder artwork"
        >
          <defs>
            <linearGradient id="back" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#232019" />
              <stop offset="100%" stopColor="#0c0a08" />
            </linearGradient>
          </defs>
          <path
            fill="url(#back)"
            d="M 300 40 C 250 40 215 75 215 115 C 215 145 200 155 165 170 C 90 200 60 260 55 340 L 40 760 L 560 760 L 545 340 C 540 260 510 200 435 170 C 400 155 385 145 385 115 C 385 75 350 40 300 40 Z"
          />
          {/* collar seam */}
          <path
            d="M 240 150 Q 300 190 360 150"
            fill="none"
            stroke="#000000"
            strokeOpacity="0.4"
            strokeWidth="3"
          />
          {/* center seam */}
          <path
            d="M 300 190 L 300 740"
            fill="none"
            stroke="#000000"
            strokeOpacity="0.25"
            strokeWidth="2"
          />
        </svg>

        {/* clothing care label */}
        <div className="care-label absolute left-1/2 top-[30%] w-[220px] -translate-x-1/2 rounded-sm border border-black/10 bg-[#f5f2ea] px-4 py-4 text-[#1a1a1a] shadow-[0_10px_30px_rgba(0,0,0,0.5)] sm:w-[260px] sm:px-5 sm:py-5">
          <p className="font-mono text-[9px] tracking-[0.25em] text-black/50 sm:text-[10px]">
            CARE &amp; CONTACT
          </p>
          <p className="mt-1 font-mono text-sm font-semibold tracking-tight sm:text-base">
            CARLOS LARA
          </p>

          <div className="mt-3 flex items-center gap-3 text-black/70">
            {/* wash tub icon */}
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.4">
              <rect x="3" y="6" width="18" height="14" rx="1.5" />
              <path d="M3 10h18" />
              <circle cx="12" cy="14.5" r="3" />
            </svg>
            {/* iron icon */}
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.4">
              <path d="M4 18h13l3-4-3-9H8L4 15z" />
              <path d="M4 18h16" />
            </svg>
            {/* do-not-tumble icon */}
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.4">
              <circle cx="12" cy="12" r="9" />
              <circle cx="12" cy="12" r="4" />
            </svg>
          </div>

          <div className="mt-4 space-y-1 border-t border-black/10 pt-3 font-mono text-[10px] leading-relaxed tracking-wide sm:text-xs">
            <p>EMAIL — HI@CARLOSLARA.SITE</p>
            <p>WEB — CARLOSLARA.SITE</p>
            <p>LOCATION — MALMÖ, SWEDEN</p>
          </div>
        </div>
      </div>

      <Vignette />
      <Grain />
      <SceneLabel index="04 / 04" title="CONTACT — PLACEHOLDER FRAME" />
    </div>
  );
}
