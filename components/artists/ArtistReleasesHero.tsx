import Link from "next/link";
import type { ReactNode } from "react";
import type { Release } from "@/lib/releases";
import { cn } from "@/lib/utils";

type ArtistReleasesHeroProps = {
  artistName: string;
  releases: Release[];
  secondaryColumn?: ReactNode;
};

export function ArtistReleasesHero({
  artistName,
  releases,
  secondaryColumn,
}: ArtistReleasesHeroProps) {
  const isTwoColumn = Boolean(secondaryColumn);

  return (
    <section
      className={cn(
        "release-detail-actions release-detail-actions--black artist-releases-hero px-4 sm:px-6 lg:px-8 xl:px-10",
        !isTwoColumn && "release-detail-actions--single"
      )}
      aria-label={`${artistName} releases`}
    >
      <div className="release-detail-actions-grid">
        <div className="release-detail-actions-col artist-releases-hero__releases-col">
          <h2 className="release-detail-actions-title">Releases</h2>
          <ul className="release-detail-platform-links artist-releases-hero__list">
            {releases.map((release) => (
              <li key={release.id}>
                <Link href={release.href} className="artist-releases-hero__link group">
                  <span className="artist-releases-hero__catalog">
                    {release.catalog}
                  </span>
                  <span className="release-detail-platform-link__label">
                    {release.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {secondaryColumn ? (
          <div className="release-detail-actions-col release-detail-actions-col--stream">
            {secondaryColumn}
          </div>
        ) : null}
      </div>
    </section>
  );
}
