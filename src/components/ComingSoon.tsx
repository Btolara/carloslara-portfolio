import Image from "next/image";
import { Grain, Vignette } from "@/components/hero/SceneChrome";

export default function ComingSoon() {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-[#0A0A0A]">
      <Image
        src="/coming-soon.jpg"
        alt="Carlos Lara"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <Vignette />
      <Grain />

      <div className="absolute left-6 top-6 z-10 sm:left-12 sm:top-10">
        <p className="font-mono text-xs tracking-[0.3em] text-white/70">
          CARLOS LARA
        </p>
      </div>

      <div className="absolute bottom-10 left-6 z-10 sm:bottom-14 sm:left-12">
        <p className="font-mono text-[11px] tracking-[0.35em] text-white/40 sm:text-xs">
          NEW SITE
        </p>
        <p className="mt-2 font-mono text-xs tracking-[0.3em] text-white/70 sm:text-sm">
          LAUNCHING SOON
        </p>
      </div>

      <div className="absolute bottom-10 right-6 z-10 text-right sm:bottom-14 sm:right-12">
        <p className="font-mono text-[11px] tracking-[0.3em] text-white/40 sm:text-xs">
          hi@carloslara.site
        </p>
      </div>
    </section>
  );
}
