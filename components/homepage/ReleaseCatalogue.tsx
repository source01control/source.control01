"use client";

import { catalogueReleases } from "@/lib/homepage";
import { FeaturedReleaseCard } from "./FeaturedReleaseCard";

export function ReleaseCatalogue() {
  return (
    <section
      id="releases"
      className="mx-auto grid w-full max-w-[1920px] grid-cols-1 divide-y divide-white/[0.12] px-6 pb-[60px]"
      aria-label="Release Catalogue"
    >
      {catalogueReleases.map((release, i) => (
        <FeaturedReleaseCard
          key={release.id}
          release={release}
          featured
          index={i}
        />
      ))}
    </section>
  );
}
