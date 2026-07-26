import Link from "next/link";
import type { Release } from "@/lib/releases";

type ArtistReleasesHeroProps = {
  artistName: string;
  releases: Release[];
};

export function ArtistReleasesHero({
  artistName,
  releases,
}: ArtistReleasesHeroProps) {
  return (
    <section
      className="releases-article__listen releases-article__listen--link-list artist-releases-hero px-4 sm:px-6 lg:px-8 xl:px-10"
      aria-label={`${artistName} releases`}
    >
      <div className="releases-article__platforms artist-releases-hero__platforms">
        <div className="releases-article__platform-group">
          <p className="releases-article__platform-label">Releases</p>
          <div className="releases-article__platform-links">
            {releases.map((release) => (
              <Link
                key={release.id}
                href={release.href}
                className="releases-article__platform-link artist-releases-hero__link"
              >
                <span className="artist-releases-hero__catalog">
                  {release.catalog}
                </span>
                <span className="releases-article__platform-text">
                  {release.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
