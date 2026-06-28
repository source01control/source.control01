import Image from "next/image";
import { ExternalLink } from "@/components/ExternalLink";
import { EventPhotoCarousel } from "@/components/events/EventPhotoCarousel";
import type { Event, EventPlatformLink } from "@/lib/events";
import { cn } from "@/lib/utils";

type EventDetailProps = {
  event: Event;
  galleryPhotos?: string[];
};

const platformAssets = {
  youtube: {
    icon: "/images/store logos/youtube-icon.webp",
    logoClass: "event-media-link__logo",
  },
  soundcloud: {
    icon: "/images/store logos/soundcloud-icon.webp",
    logoClass: "event-media-link__logo event-media-link__logo--soundcloud",
  },
} as const;

export function EventDetail({ event, galleryPhotos = [] }: EventDetailProps) {
  const listenLinks = event.listen ?? [];
  const watchBackLinks = event.watchBack ?? [];
  const showMediaSection = listenLinks.length > 0 || watchBackLinks.length > 0;
  const hasGallery = galleryPhotos.length > 0;

  const renderListenLink = (item: EventPlatformLink) => {
    const platform = platformAssets[item.platform];

    return (
      <ExternalLink
        key={`${item.platform}-${item.label}-${item.href}`}
        href={item.href}
        className="event-media-link"
        aria-label={`Listen: ${item.label}`}
      >
        <img src={platform.icon} alt="" className={platform.logoClass} />
        <span className="event-media-link__label">{item.label}</span>
      </ExternalLink>
    );
  };

  const renderWatchBackLink = (item: EventPlatformLink) => (
    <ExternalLink
      key={`${item.platform}-${item.label}-${item.href}`}
      href={item.href}
      className="release-detail-platform-link"
      aria-label={`Watch back: ${item.label}`}
    >
      <span className="release-detail-platform-link__icon">
        <img
          src={platformAssets.youtube.icon}
          alt=""
          className="release-detail-platform-link__logo release-detail-platform-link__logo--invert"
        />
      </span>
      <span className="release-detail-platform-link__label">{item.label}</span>
    </ExternalLink>
  );

  return (
    <article className="release-detail release-detail--event relative w-full overflow-x-hidden bg-black">
      <div className="release-detail-foreground">
        <div className="release-detail-header-offset" aria-hidden="true" />

        <section
          className="release-detail-panel px-4 sm:px-6 lg:px-0"
          aria-label="Event overview"
        >
          <div className="release-detail-grid">
            <div className="release-detail-artwork relative overflow-hidden bg-black/20">
              <Image
                src={event.artwork}
                alt={event.alt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1023px) 75vw, 41vw"
              />
            </div>

            <div className="release-detail-content min-w-0">
              <header className="release-detail-header min-w-0 gap-3">
                <p className="release-detail-artist m-0 font-[family-name:var(--font-mono)] uppercase text-white">
                  {event.date}
                </p>

                <hr className="release-detail-divider !m-0" />

                <h1 className="release-detail-title event-hero-title m-0 font-[family-name:var(--font-display)] tracking-[0.04em] uppercase text-white">
                  {event.titleLines ? (
                    <>
                      <span className="event-hero-title__line">
                        {event.titleLines[0]}
                      </span>
                      <span className="event-hero-title__line">
                        {event.titleLines[1]}
                      </span>
                    </>
                  ) : (
                    event.title
                  )}
                </h1>
              </header>
            </div>
          </div>
        </section>

        <div className="release-detail-bottom">
          {hasGallery || showMediaSection ? (
            <section
              className={cn(
                "release-detail-actions px-4 sm:px-6 lg:px-0 xl:px-0 release-detail-actions--black release-detail-actions--watch-back release-detail-actions--event",
                !hasGallery && "release-detail-actions--after-hero",
                "pb-16 lg:pb-24"
              )}
              aria-label={
                hasGallery && showMediaSection
                  ? "Gallery, listen and watch back"
                  : hasGallery
                    ? "Event gallery"
                    : "Listen and watch back"
              }
            >
              {hasGallery ? (
                <div className="release-detail-grid event-gallery-layout">
                  <div className="event-gallery-col">
                    <h2 className="section-label mb-6 sm:mb-8">Gallery</h2>
                    <EventPhotoCarousel
                      photos={galleryPhotos}
                      altPrefix={event.title}
                    />
                  </div>
                </div>
              ) : null}

              {showMediaSection ? (
                <div className="release-detail-actions-grid">
                  {listenLinks.length > 0 ? (
                    <div className="release-detail-actions-col event-media-col event-media-col--listen">
                      <h2 className="release-detail-actions-title">Listen</h2>
                      {listenLinks.map(renderListenLink)}
                    </div>
                  ) : null}
                  {watchBackLinks.length > 0 ? (
                    <div className="release-detail-actions-col release-detail-actions-col--stream">
                      <h2 className="release-detail-actions-title">Watch Back</h2>
                      <div className="release-detail-platform-links">
                        {watchBackLinks.map(renderWatchBackLink)}
                      </div>
                    </div>
                  ) : null}
                </div>
              ) : null}
            </section>
          ) : null}
        </div>
      </div>
    </article>
  );
}
