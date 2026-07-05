"use client";

import { catalogueReleases } from "@/lib/homepage";
import { ReleaseArchiveCard } from "./ReleaseArchiveCard";

export function ReleaseArchive() {
  return (
    <section
      id="releases"
      className="releases-grid releases-grid--catalogue w-full px-4 sm:px-6 lg:px-4 pt-20 sm:pt-24 pb-16"
      aria-label="Release Catalogue"
    >
      {catalogueReleases.map((release, i) => (
        <ReleaseArchiveCard key={release.id} release={release} index={i} />
      ))}
    </section>
  );
}
