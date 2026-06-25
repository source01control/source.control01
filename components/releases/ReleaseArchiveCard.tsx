"use client";

import Image from "next/image";
import Link from "next/link";
import type { FeaturedRelease } from "@/lib/homepage";

type ReleaseArchiveCardProps = {
  release: FeaturedRelease;
  index: number;
  latest?: boolean;
};

export function ReleaseArchiveCard({
  release,
  index,
  latest = false,
}: ReleaseArchiveCardProps) {
  return (
    <article className="release-archive-card release-card group">
      <Link href={release.href} className="release-archive-tile">
        <div className="release-archive-artwork">
          <Image
            src={release.image}
            alt={release.alt}
            fill
            priority={index < 3}
            className="release-archive-img object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        <div className="release-archive-meta">
          {!latest ? (
            <p className="font-[family-name:var(--font-mono)] text-[9px] tracking-[0.32em] uppercase text-white/45">
              {release.catalog}
            </p>
          ) : null}
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(1.5rem,2.4vw,2rem)] leading-[0.9] tracking-[0.04em] uppercase text-white">
            {latest ? "Latest Release" : release.title}
          </h2>
          <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.16em] uppercase text-white/55">
            {release.artist}
          </p>
          {latest ? (
            <p className="font-[family-name:var(--font-mono)] text-[8px] sm:text-[9px] tracking-[0.28em] uppercase text-white/40">
              {release.title}
            </p>
          ) : null}
          {latest ? (
            <p className="font-[family-name:var(--font-mono)] text-[9px] tracking-[0.32em] uppercase text-white/45">
              {release.catalog}
            </p>
          ) : null}
        </div>
      </Link>
    </article>
  );
}
