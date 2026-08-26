import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <main className="bg-[#0A0A0A]">
      <Hero />
      <footer className="flex flex-col items-center gap-2 border-t border-white/10 bg-[#0A0A0A] px-6 py-10 text-center">
        <p className="font-mono text-xs tracking-[0.3em] text-white/50">
          CARLOS LARA
        </p>
        <p className="font-mono text-[10px] tracking-[0.2em] text-white/30">
          © {new Date().getFullYear()}
        </p>
      </footer>
    </main>
  );
}
