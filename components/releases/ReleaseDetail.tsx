import Image from "next/image";
import { ExternalLink } from "@/components/ExternalLink";
import type { Release } from "@/lib/releases";
import { cn } from "@/lib/utils";
import { ReleaseBackgroundVideo } from "./ReleaseBackgroundVideo";

type ReleaseDetailProps = {
  release: Release;
};

function formatReleaseArtist(artist: string): string {
  return artist.replace(/\s+x\s+/gi, " X ").toUpperCase();
}

const buyPlatforms = [
  {
    id: "bandcamp",
    icon: "/images/store logos/bandcamp-logo.webp",
    label: "BANDCAMP",
  },
  {
    id: "beatport",
    icon: "/images/store logos/beatport-icon.webp",
    label: "BEATPORT",
  },
] as const;

const streamPlatforms = [
  {
    id: "spotify",
    icon: "/images/store logos/spotify-icon.webp",
    label: "SPOTIFY",
  },
  {
    id: "apple music",
    icon: "/images/store logos/apple-music-icon.webp",
    label: "APPLE MUSIC",
  },
  {
    id: "youtube music",
    icon: "/images/store logos/youtube-music-icon.webp",
    label: "YOUTUBE MUSIC",
  },
  {
    id: "tidal",
    icon: "/images/store logos/tidal-icon.webp",
    label: "TIDAL",
    invert: true,
  },
] as const;

export function ReleaseDetail({ release }: ReleaseDetailProps) {
  const buyLinks = buyPlatforms
    .map((platform) => {
      const link = release.streamingLinks.find(
        (item) => item.label.toLowerCase() === platform.id
      );

      return link ? { ...platform, href: link.href } : null;
    })
    .filter((link): link is NonNullable<typeof link> => link !== null);
  const streamPlatformLinks = streamPlatforms
    .map((platform) => {
      const link = release.streamingLinks.find(
        (item) => item.label.toLowerCase() === platform.id
      );

      return link ? { ...platform, href: link.href } : null;
    })
    .filter((link): link is NonNullable<typeof link> => link !== null);
  const streamLinks = release.streamingLinks.filter(
    (link) => {
      const id = link.label.toLowerCase();

      return (
        !buyPlatforms.some((platform) => platform.id === id) &&
        !streamPlatforms.some((platform) => platform.id === id)
      );
    }
  );

  return (
    <article
      className={cn(
        "release-detail relative w-full bg-black",
        release.backgroundVideo && "release-detail--with-video"
      )}
    >
      {release.backgroundVideo ? (
        <ReleaseBackgroundVideo
          src={release.backgroundVideo}
          monochrome={release.backgroundVideoMonochrome}
        />
      ) : null}

      <div className="release-detail-foreground">
      <div
        className="release-detail-header-offset"
        aria-hidden="true"
      />

      <section
        className="release-detail-panel px-4 sm:px-6 lg:px-0"
        aria-label="Release overview"
      >
        <div className="release-detail-grid">
          <div className="release-detail-artwork relative overflow-hidden bg-black/20">
            {release.artworkVideo ? (
              <video
                src={encodeURI(release.artworkVideo)}
                poster={encodeURI(release.detailImage ?? release.image)}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
                aria-label={release.alt}
              />
            ) : (
              <Image
                src={release.detailImage ?? release.image}
                alt={release.alt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1023px) 75vw, 41vw"
              />
            )}
          </div>

          <div
            className={cn(
              release.contentBackgroundImage
                ? "release-detail-content release-detail-content--with-bg"
                : "release-detail-content",
              release.contentBackgroundMonochrome &&
                "release-detail-content--monochrome"
            )}
            style={
              release.contentBackgroundImage
                ? {
                    ["--release-content-bg" as string]: `url("${encodeURI(release.contentBackgroundImage)}")`,
                  }
                : undefined
            }
          >
            <header className="release-detail-header">
              <p className="release-detail-artist font-[family-name:var(--font-mono)] uppercase text-white">
                {formatReleaseArtist(release.artist)}
              </p>

              <hr className="release-detail-divider" />

              <h1 className="release-detail-title font-[family-name:var(--font-display)] tracking-[0.04em] uppercase text-white">
                {release.title}
              </h1>
            </header>
          </div>
        </div>
      </section>

      <div className="release-detail-bottom">
        {release.about ? (
          <section
            className="release-detail-about px-4 sm:px-6 lg:px-8 xl:px-10"
            aria-label="About the release"
          >
            <h2 className="section-label mb-6 sm:mb-8">About The Release</h2>
            <p className="release-detail-about-text">{release.about}</p>
          </section>
        ) : null}

        {buyLinks.length > 0 ||
        streamPlatformLinks.length > 0 ||
        streamLinks.length > 0 ? (
          <section
            className={cn(
              "release-detail-actions px-4 sm:px-6 lg:px-8 xl:px-10 release-detail-actions--black",
              !release.about && "release-detail-actions--after-hero",
              !release.spotifyEmbed && "pb-16 lg:pb-24"
            )}
            aria-label="Buy and stream the release"
          >
            <div className="release-detail-actions-grid">
              <div className="release-detail-actions-col">
                <h2 className="release-detail-actions-title">Buy</h2>
                {buyLinks.length > 0 ? (
                  <div className="release-detail-platform-links">
                    {buyLinks.map((link) => (
                      <ExternalLink
                        key={link.id}
                        href={link.href}
                        className="release-detail-platform-link"
                        aria-label={`Buy on ${link.label}`}
                      >
                        <span className="release-detail-platform-link__icon">
                          <img
                            src={link.icon}
                            alt=""
                            className={cn(
                              "release-detail-platform-link__logo",
                              "invert" in link && link.invert
                                ? "release-detail-platform-link__logo--invert"
                                : undefined
                            )}
                          />
                        </span>
                        <span className="release-detail-platform-link__label">
                          {link.label}
                        </span>
                      </ExternalLink>
                    ))}
                  </div>
                ) : null}
              </div>

              <div className="release-detail-actions-col release-detail-actions-col--stream">
                <h2 className="release-detail-actions-title">Stream</h2>
                {streamPlatformLinks.length > 0 || streamLinks.length > 0 ? (
                  <div className="release-detail-platform-links">
                    {streamPlatformLinks.map((link) => (
                      <ExternalLink
                        key={link.id}
                        href={link.href}
                        className="release-detail-platform-link"
                        aria-label={`Stream on ${link.label}`}
                      >
                        <span className="release-detail-platform-link__icon">
                          <img
                            src={link.icon}
                            alt=""
                            className={cn(
                              "release-detail-platform-link__logo",
                              "invert" in link && link.invert
                                ? "release-detail-platform-link__logo--invert"
                                : undefined
                            )}
                          />
                        </span>
                        <span className="release-detail-platform-link__label">
                          {link.label}
                        </span>
                      </ExternalLink>
                    ))}
                    {streamLinks.map((link) => (
                      <ExternalLink
                        key={link.label}
                        href={link.href}
                        className="link-underline release-detail-bottom-link font-[family-name:var(--font-mono)] text-[9px] tracking-[0.28em] uppercase"
                      >
                        {link.label}
                      </ExternalLink>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </section>
        ) : null}

        {release.spotifyEmbed ? (
          <div
            className={cn(
              "release-detail-lower px-4 sm:px-6 lg:px-8 xl:px-10 pb-16 lg:pb-24",
              !release.about &&
                buyLinks.length === 0 &&
                streamPlatformLinks.length === 0 &&
                streamLinks.length === 0 &&
                "release-detail-lower--after-hero"
            )}
          >
            <div className="release-detail-spotify">
              <iframe
                src={release.spotifyEmbed}
                width="100%"
                height="352"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title={`${release.title} on Spotify`}
              />
            </div>
          </div>
        ) : null}
      </div>
      </div>
    </article>
  );
}
