import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "@/components/ExternalLink";
import { getReleaseDigitalStorePath } from "@/lib/store";
import {
  formatReleaseDate,
  getReleaseAboutParagraphs,
  getReleaseDeck,
  type Release,
} from "@/lib/releases";
import { cn } from "@/lib/utils";
import { ReleaseBackgroundVideo } from "./ReleaseBackgroundVideo";
import { WhiteRabbitArtist } from "./WhiteRabbitArtist";

type ReleaseDetailProps = {
  release: Release;
};

const buyPlatforms = [
  {
    id: "bandcamp",
    icon: "/images/store logos/bandcamp-icon.svg",
    label: "BANDCAMP",
  },
  {
    id: "beatport",
    icon: "/images/store logos/beatport-icon.webp",
    label: "BEATPORT",
    /** Opaque dark plate + light mark — knock out black on dark UI. */
    knockout: true,
  },
] as const;

const SOURCE_CONTROL_STORE_LINK = {
  label: "Source Control Store",
  icon: "/images/source-control-assets/01_3.webp",
  invert: true,
} as const;

const streamPlatforms = [
  {
    id: "spotify",
    icon: "/images/store logos/spotify-icon.svg",
    label: "SPOTIFY",
  },
  {
    id: "apple music",
    icon: "/images/store logos/apple-music-icon.webp",
    label: "APPLE MUSIC",
    knockout: true,
  },
  {
    id: "youtube music",
    icon: "/images/store logos/youtube-music-icon.webp",
    label: "YOUTUBE MUSIC",
  },
  {
    id: "tidal",
    icon: "/images/store logos/tidal-icon.svg",
    label: "TIDAL",
  },
] as const;

function platformLogoClassName(link: {
  invert?: boolean;
  knockout?: boolean;
  [key: string]: unknown;
}): string {
  return cn(
    "releases-article__platform-logo",
    Boolean(link.invert) && "releases-article__platform-logo--invert",
    Boolean(link.knockout) && "releases-article__platform-logo--knockout"
  );
}

export function ReleaseDetail({ release }: ReleaseDetailProps) {
  const aboutParagraphs = getReleaseAboutParagraphs(release.about);
  const isWhiteRabbit = release.id === "sc-secret-white-rabbit";
  const heroSrc = release.detailImage ?? release.image;

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

  const streamLinks = release.streamingLinks.filter((link) => {
    const id = link.label.toLowerCase();

    return (
      !buyPlatforms.some((platform) => platform.id === id) &&
      !streamPlatforms.some((platform) => platform.id === id)
    );
  });

  const hasListenBuy =
    buyLinks.length > 0 ||
    streamPlatformLinks.length > 0 ||
    streamLinks.length > 0;

  return (
    <article
      className={cn(
        "releases-page releases-article relative w-full min-h-screen",
        release.backgroundVideo && "releases-article--with-video",
        isWhiteRabbit && "releases-article--white-rabbit"
      )}
    >
      {release.backgroundVideo ? (
        <ReleaseBackgroundVideo
          src={release.backgroundVideo}
          monochrome={release.backgroundVideoMonochrome}
        />
      ) : null}

      <div className="releases-article__foreground">
      <div className="releases-article__top">
        <Link href="/releases" className="releases-article__back">
          <span aria-hidden="true">←</span> Releases
        </Link>

        {isWhiteRabbit ? (
          <div className="releases-article__white-rabbit-artist">
            <WhiteRabbitArtist />
          </div>
        ) : null}

        <h1
          className={cn(
            "releases-article__title",
            isWhiteRabbit && "white-rabbit-title"
          )}
        >
          {release.title}
        </h1>
        {!isWhiteRabbit ? (
          <p className="releases-article__deck">{getReleaseDeck(release)}</p>
        ) : null}
      </div>

      <div className="releases-article__hero">
        <div
          className={cn(
            "releases-article__hero-frame",
            isWhiteRabbit && "releases-article__hero-frame--transparent"
          )}
        >
          {release.artworkVideo ? (
            <video
              src={encodeURI(release.artworkVideo)}
              poster={encodeURI(heroSrc)}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
              aria-label={release.alt}
            />
          ) : isWhiteRabbit ? (
            <div
              className="absolute inset-[8%] tech-two-secret-artwork"
              role="img"
              aria-label={release.alt}
              style={{
                backgroundColor: "#fff",
                WebkitMaskImage: `url(${encodeURI(heroSrc)})`,
                maskImage: `url(${encodeURI(heroSrc)})`,
                WebkitMaskSize: "contain",
                maskSize: "contain",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
                maskPosition: "center",
              }}
            />
          ) : (
            <Image
              src={heroSrc}
              alt={release.alt}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          )}
        </div>
      </div>

      <div className="releases-article__main">
        <aside className="releases-article__meta" aria-label="Release details">
          <div className="releases-article__meta-block">
            <p className="releases-article__meta-label">Artist</p>
            <p className="releases-article__meta-value">{release.artist}</p>
          </div>
          <div className="releases-article__meta-block">
            <p className="releases-article__meta-label">Catalog</p>
            <p className="releases-article__meta-value">{release.catalog}</p>
          </div>
          <div className="releases-article__meta-block">
            <p className="releases-article__meta-label">Released</p>
            <p className="releases-article__meta-value">
              {formatReleaseDate(release.releaseDate, { uppercase: false })}
            </p>
          </div>
          <div className="releases-article__meta-block">
            <p className="releases-article__meta-label">Tracks</p>
            <p className="releases-article__meta-value">
              {release.tracklist.length}
            </p>
          </div>
        </aside>

        <div className="releases-article__content">
          {aboutParagraphs.length > 0 ? (
            <div className="releases-article__intro">
              {aboutParagraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          ) : null}

          {release.tracklist.length > 0 ? (
            <section
              className="releases-article__tracklist"
              aria-label="Tracklist"
            >
              <h2 className="releases-article__section-label">Tracklist</h2>
              <ol className="releases-article__tracks">
                {release.tracklist.map((track) => (
                  <li key={`${track.number}-${track.title}`}>
                    <span className="releases-article__track-number">
                      {track.number.padStart(2, "0")}
                    </span>
                    <span className="releases-article__track-title">
                      {track.title}
                    </span>
                  </li>
                ))}
              </ol>
            </section>
          ) : null}

          {hasListenBuy ? (
            <section
              className="releases-article__listen releases-article__listen--link-list"
              aria-label="Buy and stream the release"
            >
              <div className="releases-article__platforms">
                <div className="releases-article__platform-group">
                  <p className="releases-article__platform-label">Buy</p>
                  <div className="releases-article__platform-links">
                    <Link
                      href={getReleaseDigitalStorePath(release.id) ?? "/store"}
                      className="releases-article__platform-link"
                    >
                      <span className="releases-article__platform-icon">
                        <img
                          src={SOURCE_CONTROL_STORE_LINK.icon}
                          alt=""
                          className="releases-article__platform-logo releases-article__platform-logo--invert releases-article__platform-logo--site"
                        />
                      </span>
                      <span className="releases-article__platform-text">
                        {SOURCE_CONTROL_STORE_LINK.label}
                      </span>
                    </Link>
                    {buyLinks.map((link) => (
                      <ExternalLink
                        key={link.id}
                        href={link.href}
                        className="releases-article__platform-link"
                      >
                        <span className="releases-article__platform-icon">
                          <img
                            src={link.icon}
                            alt=""
                            className={platformLogoClassName(link)}
                          />
                        </span>
                        <span className="releases-article__platform-text">
                          {link.label}
                        </span>
                      </ExternalLink>
                    ))}
                  </div>
                </div>

                {streamPlatformLinks.length > 0 || streamLinks.length > 0 ? (
                  <div className="releases-article__platform-group">
                    <p className="releases-article__platform-label">Stream</p>
                    <div className="releases-article__platform-links">
                      {streamPlatformLinks.map((link) => (
                        <ExternalLink
                          key={link.id}
                          href={link.href}
                          className="releases-article__platform-link"
                        >
                          <span className="releases-article__platform-icon">
                            <img
                              src={link.icon}
                              alt=""
                              className={platformLogoClassName(link)}
                            />
                          </span>
                          <span className="releases-article__platform-text">
                            {link.label}
                          </span>
                        </ExternalLink>
                      ))}
                      {streamLinks.map((link) => (
                        <ExternalLink
                          key={link.label}
                          href={link.href}
                          className="releases-article__platform-link"
                        >
                          <span className="releases-article__platform-text">
                            {link.label}
                          </span>
                        </ExternalLink>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            </section>
          ) : null}

          {release.spotifyEmbed ? (
            <div className="releases-article__spotify">
              <iframe
                src={release.spotifyEmbed}
                width="100%"
                height="352"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title={`${release.title} on Spotify`}
              />
            </div>
          ) : null}
        </div>
      </div>
      </div>
    </article>
  );
}
