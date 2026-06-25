import Image from "next/image";
import Link from "next/link";
import {
  SAMPLE_PACK_ARTWORK,
  SAMPLE_PACK_COPY,
  samplePackHref,
} from "@/lib/sample-pack";

export function SampleVaultCard() {
  return (
    <article className="release-archive-card release-card group">
      <Link href={samplePackHref} className="release-archive-tile">
        <div className="release-archive-artwork">
          <Image
            src={SAMPLE_PACK_ARTWORK}
            alt="Source Control Sample Pack Vol. 1 artwork"
            fill
            priority
            className="release-archive-img object-cover object-center"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        <div className="release-archive-meta">
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(1.5rem,2.4vw,2rem)] leading-[0.9] tracking-[0.04em] uppercase text-white">
            Unlock The Free Source Control Sample Pack
          </h2>
          <p className="font-[family-name:var(--font-mono)] text-[10px] leading-relaxed tracking-[0.08em] text-white/55 normal-case">
            {SAMPLE_PACK_COPY}
          </p>
        </div>
      </Link>
    </article>
  );
}
