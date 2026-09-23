import ComingSoon from "@/components/ComingSoon";
// Cinematic scroll hero, back once the real photos/video are ready:
// import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <main className="bg-[#0A0A0A]">
      <ComingSoon />

      <footer className="border-t border-white/10 bg-[#0A0A0A] px-6 py-16 sm:px-12 sm:py-24">
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="font-mono text-xs tracking-[0.3em] text-white/40">
            NEW SITE LAUNCHING SOON
          </p>
          <a
            href="mailto:hi@carloslara.site"
            className="font-mono text-sm tracking-[0.2em] text-white/70 underline decoration-white/20 underline-offset-4 transition-colors hover:text-white hover:decoration-white/60"
          >
            hi@carloslara.site
          </a>
        </div>

        <h2
          className="mt-16 select-none text-center font-bold leading-[0.85] text-white"
          style={{ fontSize: "clamp(56px, 14vw, 220px)" }}
        >
          CARLOS LARA
        </h2>

        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-6 text-center sm:flex-row sm:text-left">
          <p className="font-mono text-[10px] tracking-[0.2em] text-white/30">
            © {new Date().getFullYear()} Carlos Lara
          </p>
          <p className="font-mono text-[10px] tracking-[0.2em] text-white/30">
            Malmö, Sweden
          </p>
        </div>
      </footer>
    </main>
  );
}
