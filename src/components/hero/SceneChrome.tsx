export function Vignette() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0"
      style={{
        background:
          "radial-gradient(ellipse at center, rgba(0,0,0,0) 40%, rgba(0,0,0,0.75) 100%)",
      }}
    />
  );
}

export function Grain() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      }}
    />
  );
}

export function SceneLabel({ index, title }: { index: string; title: string }) {
  return (
    <div className="absolute bottom-10 left-6 z-10 sm:bottom-14 sm:left-12">
      <p className="font-mono text-[11px] tracking-[0.35em] text-white/40 sm:text-xs">
        {index}
      </p>
      <p className="mt-2 font-mono text-xs tracking-[0.3em] text-white/70 sm:text-sm">
        {title}
      </p>
    </div>
  );
}
