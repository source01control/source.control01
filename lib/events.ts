import type { StreamingLink } from "@/lib/releases";

export type EventPlatformLink = {
  label: string;
  href: string;
  platform: "youtube" | "soundcloud";
};

export type Event = {
  id: string;
  slug: string;
  title: string;
  titleLines?: [string, string];
  date: string;
  artwork: string;
  alt: string;
  about?: string;
  galleryDir?: string;
  listen?: EventPlatformLink[];
  watchBack?: EventPlatformLink[];
  streamingLinks?: StreamingLink[];
};

export const events: Event[] = [
  {
    id: "evt-dungeon-beats",
    slug: "dungeon-beats-x-source-control",
    title: "Dungeon Beats x Source Control",
    titleLines: ["Dungeon Beats x", "Source Control"],
    date: "21.11.25",
    artwork:
      "/images/events/Dungeon Beats x Source Control/artwork/SC x DB Art.webp",
    alt: "Dungeon Beats x Source Control event artwork",
    galleryDir:
      "/images/events/Dungeon Beats x Source Control/event pics",
    listen: [
      {
        label: "ChrisNSA promo mix",
        href: "https://soundcloud.com/search?q=dungeon%20beats%20x%20source%20control",
        platform: "soundcloud",
      },
    ],
    watchBack: [
      {
        label: "Unkey b2b Mono Code",
        href: "https://www.youtube.com/watch?v=pQl5CulZGjI",
        platform: "youtube",
      },
      {
        label: "Hitman",
        href: "https://www.youtube.com/watch?v=O0R9QAtMZAA",
        platform: "youtube",
      },
      {
        label: "I Hug Speakers",
        href: "https://www.youtube.com/watch?v=TPUq15QOyAA",
        platform: "youtube",
      },
      {
        label: "Antihla",
        href: "https://www.youtube.com/watch?v=x7ds13Esjpg",
        platform: "youtube",
      },
    ],
  },
];

export function eventHref(slug: string): string {
  return `/events/${slug}`;
}

export function getEventBySlug(slug: string): Event | undefined {
  return events.find((event) => event.slug === slug);
}
