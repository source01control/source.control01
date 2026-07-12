import Image from "next/image";
import Link from "next/link";
import type { Artist } from "@/lib/artists";
import { getReleasesForArtist } from "@/lib/artists";
import { getArtistNetwork } from "@/lib/artist-networks";
import { ArtistNetworkColumn } from "@/components/artists/ArtistNetworkColumn";
import { ArtistReleasesHero } from "@/components/artists/ArtistReleasesHero";
import { cn } from "@/lib/utils";

type ArtistDetailProps = {
  artist: Artist;
};

const ARTIST_HERO_BACKGROUND = "/images/source-control-assets/01.webp";

const ARTISTS_WITH_HERO_BACKGROUND = new Set([
  "unkey",
  "no-recall",
  "mono-code",
  "0079",
]);

function formatArtistName(name: string): string {
  if (name === "UNKEY") return "Unkey";
  if (name === "NO RECALL") return "No Recall";
  if (name === "MONO CODE") return "Mono Code";
  return name;
}


export function ArtistDetail({ artist }: ArtistDetailProps) {
  const artistReleases = getReleasesForArtist(artist);
  const artistNetwork = getArtistNetwork(artist.slug);
  const image = artist.image;
  const showReleasesHero = artistReleases.length > 0;
  const hasHeroBackground = ARTISTS_WITH_HERO_BACKGROUND.has(artist.slug);

  return (
    <article className="release-detail relative w-full bg-black">
      <div className="release-detail-foreground">
        <div className="release-detail-header-offset" aria-hidden="true" />

        <section
          className="release-detail-panel px-4 sm:px-6 lg:px-0"
          aria-label="Artist overview"
        >
          <div className="release-detail-grid">
            <div className="release-detail-artwork relative overflow-hidden bg-black/20">
              {image ? (
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1023px) 75vw, 41vw"
                />
              ) : null}
            </div>

            <div
              className={cn(
                "release-detail-content",
                hasHeroBackground &&
                  "release-detail-content--with-bg artist-detail-hero-content--brand"
              )}
              style={
                hasHeroBackground
                  ? {
                      ["--release-content-bg" as string]: `url("${encodeURI(ARTIST_HERO_BACKGROUND)}")`,
                    }
                  : undefined
              }
            >
              <header className="release-detail-header">
                <p className="release-detail-artist font-[family-name:var(--font-mono)] uppercase text-white">
                  ARTIST
                </p>

                <hr className="release-detail-divider" />

                <h1 className="release-detail-title font-[family-name:var(--font-display)] tracking-[0.04em] uppercase text-white">
                  {formatArtistName(artist.name)}
                </h1>
              </header>
            </div>
          </div>
        </section>

        <div className="release-detail-bottom">
          {artist.bio ? (
            <section
              className="release-detail-about px-4 sm:px-6 lg:px-8 xl:px-10"
              aria-label="About the artist"
            >
              <h2 className="section-label mb-6 sm:mb-8">About The Artist</h2>
              <p className="release-detail-about-text">{artist.bio}</p>
            </section>
          ) : null}

          {showReleasesHero ? (
            <ArtistReleasesHero
              artistName={formatArtistName(artist.name)}
              releases={artistReleases}
              secondaryColumn={
                artistNetwork ? (
                  <ArtistNetworkColumn network={artistNetwork} />
                ) : undefined
              }
            />
          ) : null}

          {artistNetwork?.spotifyEmbed ? (
            <div className="release-detail-lower px-4 sm:px-6 lg:px-8 xl:px-10 pb-16 lg:pb-24">
              <div className="release-detail-spotify">
                <iframe
                  src={artistNetwork.spotifyEmbed}
                  width="100%"
                  height="352"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  title={`${formatArtistName(artist.name)} on Spotify`}
                />
              </div>
            </div>
          ) : artistReleases.length > 0 && !showReleasesHero ? (
            <div className="release-detail-lower px-4 sm:px-6 lg:px-8 xl:px-10 pb-16 lg:pb-24">
              <section className="release-detail-section">
                <h2 className="section-label mb-8">Releases</h2>
                <div className="flex flex-wrap gap-4">
                  {artistReleases.map((release) => (
                    <Link
                      key={release.id}
                      href={release.href}
                      className="link-underline release-detail-bottom-link font-[family-name:var(--font-mono)] text-[9px] tracking-[0.28em] uppercase"
                    >
                      {release.catalog} — {release.title}
                    </Link>
                  ))}
                </div>
              </section>
            </div>
          ) : !artist.bio && !showReleasesHero ? (
            <div className="release-detail-lower release-detail-lower--after-hero px-4 sm:px-6 lg:px-8 xl:px-10 pb-16 lg:pb-24" />
          ) : null}
        </div>
      </div>
    </article>
  );
}
