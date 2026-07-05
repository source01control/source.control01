"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { FeaturedRelease } from "@/lib/homepage";
import { getReleaseBackgroundImage } from "@/lib/releases";
import { cn } from "@/lib/utils";

type FeaturedReleaseCardProps = {
  release: FeaturedRelease;
  featured?: boolean;
  index: number;
  className?: string;
};

export function FeaturedReleaseCard({
  release,
  featured = false,
  index,
  className,
}: FeaturedReleaseCardProps) {
  return (
    <motion.article
      className={cn(
        "relative overflow-hidden bg-[#0a0a0a]",
        featured ? "hero-card-featured" : "hero-card-small",
        className
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.15 + index * 0.1, ease: [0.22, 1, 0.36, 1] as const }}
    >
      <Link
        href={release.href}
        className="group relative block h-full w-full cursor-pointer"
      >
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={getReleaseBackgroundImage(release.catalog, release.image)}
            alt={release.alt}
            fill
            priority={featured}
            className="release-card-img object-cover"
            sizes={
              featured
                ? "(max-width: 1024px) 100vw, 58vw"
                : "(max-width: 1024px) 50vw, 14vw"
            }
          />
        </div>

        <div
          className={cn(
            "absolute inset-0",
            featured
              ? "bg-gradient-to-t from-black/90 via-black/30 to-black/5"
              : "bg-gradient-to-t from-black/85 via-black/45 to-black/15"
          )}
        />

        <div
          className={cn(
            "relative z-10 flex h-full flex-col justify-end",
            featured ? "p-6 sm:p-8 lg:p-10" : "p-4 sm:p-5"
          )}
        >
          <p
            className={cn(
              "font-[family-name:var(--font-mono)] tracking-[0.32em] uppercase text-white/70",
              featured
                ? "text-[10px] sm:text-[11px]"
                : "text-[8px] sm:text-[9px]"
            )}
          >
            {release.catalog}
          </p>

          {featured ? (
            <>
              <p className="mt-2 font-[family-name:var(--font-mono)] text-[10px] sm:text-[10.5px] tracking-[0.18em] uppercase text-white/55">
                {release.artist}
              </p>
              <h2 className="mt-1 font-[family-name:var(--font-display)] text-[clamp(1.9rem,3.8vw,3.4rem)] leading-[0.88] tracking-[0.04em] uppercase text-white">
                {release.title}
              </h2>
              {release.catalog === "SCTRL006" && (
                <p className="mt-2 font-[family-name:var(--font-mono)] text-[8px] sm:text-[9px] tracking-[0.28em] uppercase text-white/40">
                  Latest Release
                </p>
              )}
              <p className="mt-5 font-[family-name:var(--font-mono)] text-[8px] sm:text-[9px] tracking-[0.28em] uppercase text-white/50 transition-colors duration-400 group-hover:text-white">
                View Release →
              </p>
            </>
          ) : (
            <p className="mt-1.5 font-[family-name:var(--font-mono)] text-[9px] sm:text-[10px] tracking-[0.16em] uppercase text-white/45">
              {release.artist}
            </p>
          )}
        </div>
      </Link>
    </motion.article>
  );
}
