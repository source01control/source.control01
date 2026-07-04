import Image from "next/image";
import { heroImage } from "@/lib/data";

export function StoreHero() {
  return (
    <header className="store-hero relative overflow-hidden border-b border-white/15">
      <Image
        src={heroImage}
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="store-hero__overlay" aria-hidden="true" />
      <div className="store-hero__content">
        <h1 className="store-hero__title font-[family-name:var(--font-display)] uppercase text-white">
          STORE
        </h1>
        <p className="store-hero__subtitle font-[family-name:var(--font-mono)] uppercase text-white/55">
          Vinyl, digital &amp; merchandise from Source Control
        </p>
      </div>
    </header>
  );
}
