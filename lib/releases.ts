export type ReleaseTrack = {
  number: string;
  title: string;
  duration?: string;
};

export type StreamingLink = {
  label: string;
  href: string;
};

export type Release = {
  id: string;
  slug: string;
  catalog: string;
  artist: string;
  title: string;
  releaseDate: string;
  href: string;
  image: string;
  detailImage?: string;
  artworkVideo?: string;
  alt: string;
  tracklist: ReleaseTrack[];
  streamingLinks: StreamingLink[];
  spotifyEmbed?: string;
  accentGradient: string;
  contentBackgroundImage?: string;
  contentBackgroundMonochrome?: boolean;
  backgroundVideo?: string;
  backgroundVideoMonochrome?: boolean;
  about?: string;
  featured?: boolean;
};

export function createReleaseSlug(artist: string, title: string): string {
  const normalize = (value: string) =>
    value
      .toLowerCase()
      .replace(/\//g, "-")
      .replace(/\s+x\s+/gi, "-")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

  return `${normalize(artist)}-${normalize(title)}`.replace(/-+/g, "-");
}

export function releaseHref(slug: string): string {
  return `/releases/${slug}`;
}

const placeholderStreamingLinks: StreamingLink[] = [
  { label: "Bandcamp", href: "#" },
  { label: "Beatport", href: "#" },
  { label: "Spotify", href: "#" },
  { label: "Apple Music", href: "#" },
  { label: "YouTube Music", href: "#" },
  { label: "Tidal", href: "#" },
];

const releasesData: Omit<Release, "slug" | "href">[] = [
  {
    id: "sc-006",
    catalog: "SCTRL006",
    artist: "UNKEY x MONO CODE",
    title: "SOURCE SHIFT EP",
    releaseDate: "2026-03-14",
    image: "/images/releases/SCTRL006.webp",
    detailImage: "/images/releases/detail/SCTRL006.webp",
    alt: "SCTRL006 Source Shift EP artwork",
    contentBackgroundImage: "/images/release-pages-art/unkey-mono-code.webp",
    contentBackgroundMonochrome: true,
    about:
      "Unkey & Mono Code pick up from where they left off in 2025 with three tracks stepping outside the usual dubstep lane, exploring new styles, shifting rhythms and deeper, more experimental sonics. Still grounded in weight, but pushing into something less predictable.",
    accentGradient:
      "linear-gradient(145deg, #111820 0%, #151d2e 38%, #1a2840 62%, #13181f 100%)",
    tracklist: [
      { number: "A1", title: "Source Shift", duration: "4:42" },
      { number: "A2", title: "Grid Lock", duration: "5:08" },
      { number: "B1", title: "Null Return", duration: "4:19" },
      { number: "B2", title: "Terminal Bloom", duration: "5:31" },
    ],
    streamingLinks: [
      {
        label: "Bandcamp",
        href: "https://source01control.bandcamp.com/album/source-shift-ep",
      },
      {
        label: "Beatport",
        href: "https://www.beatport.com/release/source-shift-ep/6760017",
      },
      { label: "Spotify", href: "https://open.spotify.com/album/2M521OAboWjBjiikTf7dEx" },
      {
        label: "Apple Music",
        href: "https://music.apple.com/gb/album/source-shift-ep/1889893895",
      },
      {
        label: "YouTube Music",
        href: "https://www.youtube.com/playlist?list=OLAK5uy_nerBTRUMq-hjtdeWKZLQ4ZKGLkgcJASHY",
      },
      { label: "Tidal", href: "https://tidal.com/album/512171102" },
    ],
    spotifyEmbed:
      "https://open.spotify.com/embed/album/2M521OAboWjBjiikTf7dEx?utm_source=generator&theme=0",
    featured: true,
  },
  {
    id: "sc-005",
    catalog: "SCTRL005",
    artist: "UNKEY x MONO CODE",
    title: "TECH TWO EP",
    releaseDate: "2025-11-21",
    image: "/images/releases/SCTRL005.webp",
    detailImage: "/images/releases/detail/SCTRL005.webp",
    alt: "SCTRL005 Tech Two artwork",
    backgroundVideo: "/videos/releases/matrix-code.mp4",
    about:
      "Following the momentum from their debut collaboration - Tech One EP, Unkey and Mono Code return to Source Control with the next chapter in their collaborative series, Tech Two EP. Continuing the conceptual thread that began with the label’s inaugural release, the duo delve deeper into their shared fascination with texture, structure, and evolution in sound.\n\nRather than a conventional set of remixes, Tech Two reimagines and reconstructs the material from Tech One, transforming familiar ideas into something new and unexpected. Each track is a re-engineering of form, stripped back, rebuilt, and tuned for the darker corners of the club. The result is a record that feels both connected to its origin and entirely forward looking, setting the stage for Tech Three next year, where the evolution of their sound will continue.",
    accentGradient:
      "linear-gradient(145deg, #141518 0%, #1a1c22 42%, #1e2428 68%, #121416 100%)",
    tracklist: [
      { number: "A", title: "Tech Two", duration: "4:56" },
      { number: "B", title: "Concrete Pulse", duration: "4:28" },
    ],
    streamingLinks: [
      {
        label: "Bandcamp",
        href: "https://source01control.bandcamp.com/album/tech-two-ep",
      },
      {
        label: "Beatport",
        href: "https://www.beatport.com/release/tech-two-ep/5440700",
      },
      {
        label: "Spotify",
        href: "https://open.spotify.com/album/2XtzmSbszipsYRHmqnaou8?si=uvnQQ-wVQgCm3aikjqKyoQ",
      },
      {
        label: "Apple Music",
        href: "https://music.apple.com/gb/album/tech-two-single/1843187797",
      },
      {
        label: "YouTube Music",
        href: "https://music.youtube.com/playlist?list=OLAK5uy_k2C1n5fFMuIQoWCUzK2ASTa8R4DGbL0ko",
      },
      { label: "Tidal", href: "https://tidal.com/album/463969891" },
    ],
    spotifyEmbed:
      "https://open.spotify.com/embed/album/2XtzmSbszipsYRHmqnaou8?utm_source=generator&theme=0",
  },
  {
    id: "sc-004",
    catalog: "SCTRL004",
    artist: "Mono Code",
    title: "Blink Of An Eye",
    releaseDate: "2025-08-09",
    image: "/images/releases/SCTRL004.webp",
    detailImage: "/images/releases/detail/SCTRL004.webp",
    artworkVideo: "/videos/releases/Blink of an Eye/eye-blinking.mp4",
    alt: "SCTRL004 Blink Of An Eye artwork",
    about:
      "Following his collaboration with Unkey on the Tech One EP, Mono Code (fka Deft Design) returns to Source Control with Blink Of An Eye. A deep, dark, and precision-crafted solo debut that showcases his evolved sound across four tightly focused tracks.",
    accentGradient:
      "linear-gradient(145deg, #15121c 0%, #1e1929 44%, #221d32 66%, #141018 100%)",
    tracklist: [
      { number: "A", title: "Blink Of An Eye", duration: "3:54" },
      { number: "B", title: "Static Frame", duration: "4:11" },
    ],
    streamingLinks: [
      {
        label: "Bandcamp",
        href: "https://source01control.bandcamp.com/album/blink-of-an-eye-ep",
      },
      {
        label: "Beatport",
        href: "https://www.beatport.com/release/blink-of-an-eye-ep/5144190",
      },
      {
        label: "Spotify",
        href: "https://open.spotify.com/album/7s7Cmj400lCCsfdT8nZspD?si=mufSqgGnSZW5ZCZPPfVq6w",
      },
      {
        label: "Apple Music",
        href: "https://music.apple.com/gb/album/blink-of-an-eye-ep/1821935660",
      },
      {
        label: "YouTube Music",
        href: "https://music.youtube.com/playlist?list=OLAK5uy_lArqNw0G-NaVuY8Q3RTmh_FR9KqKarf0A",
      },
      { label: "Tidal", href: "https://tidal.com/album/443345495" },
    ],
    spotifyEmbed:
      "https://open.spotify.com/embed/album/7s7Cmj400lCCsfdT8nZspD?utm_source=generator&theme=0",
  },
  {
    id: "sc-003",
    catalog: "SCTRL003",
    artist: "Unkey",
    title: "DARK/12",
    releaseDate: "2025-05-17",
    image: "/images/releases/SCTRL003.webp",
    detailImage: "/images/releases/detail/SCTRL003.webp",
    alt: "SCTRL003 Dark/12 artwork",
    about:
      "\"Unkey continues on with wicked momentum both individually and with his label, Source Control. The third endeavour features a double sided single, with 'Dark' shaping as everything it says on the tin. It's elusive, mysterious and licked with a proper techy edge.\"",
    accentGradient:
      "linear-gradient(145deg, #181012 0%, #221418 44%, #2a1a20 66%, #140e10 100%)",
    tracklist: [
      { number: "A", title: "Dark/12", duration: "5:02" },
      { number: "B", title: "Afterimage", duration: "4:37" },
    ],
    streamingLinks: [
      {
        label: "Bandcamp",
        href: "https://source01control.bandcamp.com/album/dark",
      },
      {
        label: "Beatport",
        href: "https://www.beatport.com/release/dark/5060042",
      },
      {
        label: "Spotify",
        href: "https://open.spotify.com/album/2WHPa8rtfVaczzvl1O7TVg?si=cGntidw_TKuS1YawRDgK7w",
      },
      {
        label: "Apple Music",
        href: "https://music.apple.com/gb/album/dark-single/1811174448",
      },
      {
        label: "YouTube Music",
        href: "https://music.youtube.com/playlist?list=OLAK5uy_mcaKMpn-r4LSTGdaO10LNhpoH4VqKDmRU",
      },
      { label: "Tidal", href: "https://tidal.com/album/432651008" },
    ],
    spotifyEmbed:
      "https://open.spotify.com/embed/album/2WHPa8rtfVaczzvl1O7TVg?utm_source=generator&theme=0",
  },
  {
    id: "sc-002",
    catalog: "SCTRL002",
    artist: "0079",
    title: "Bloodstain",
    releaseDate: "2025-02-28",
    image: "/images/releases/SCTRL002.webp",
    detailImage: "/images/releases/detail/SCTRL002.webp",
    alt: "SCTRL002 Bloodstain artwork",
    about:
      "For our second installment, we are excited to welcome 0079 to the Source Control family. With an impressive four-track EP, 0079 presents a dynamic collection of fresh sounds, staying true to our ethos of keeping it dark and distinctive.",
    accentGradient:
      "linear-gradient(145deg, #1a1012 0%, #261618 44%, #301a1e 66%, #140c0e 100%)",
    tracklist: [
      { number: "A", title: "Bloodstain", duration: "4:44" },
      { number: "B", title: "Sector Cut", duration: "5:12" },
    ],
    streamingLinks: [
      {
        label: "Bandcamp",
        href: "https://source01control.bandcamp.com/album/bloodstain-ep",
      },
      {
        label: "Beatport",
        href: "https://www.beatport.com/release/bloodstain-ep/4933564",
      },
      {
        label: "Spotify",
        href: "https://open.spotify.com/album/6xcXBkQksUffcRrNFZTJPP?si=Y3UKed_LTUCDnUIWrJXzyA",
      },
      {
        label: "Apple Music",
        href: "https://music.apple.com/gb/album/bloodstain-ep/1795490637",
      },
      {
        label: "YouTube Music",
        href: "https://music.youtube.com/playlist?list=OLAK5uy_nCOBhB5JFX3SIEzVBGlzb8T9d9BU7DAOc",
      },
      { label: "Tidal", href: "https://tidal.com/album/417125966" },
    ],
    spotifyEmbed:
      "https://open.spotify.com/embed/album/6xcXBkQksUffcRrNFZTJPP?utm_source=generator&theme=0",
  },
  {
    id: "sc-001",
    catalog: "SCTRL001",
    artist: "Unkey x Mono Code",
    title: "TECH ONE EP",
    releaseDate: "2024-12-06",
    image: "/images/releases/SCTRL001.webp",
    detailImage: "/images/releases/detail/SCTRL001.webp",
    alt: "SCTRL001 Tech One artwork",
    backgroundVideo: "/videos/releases/matrix-code.mp4",
    backgroundVideoMonochrome: true,
    about:
      "A new record label launches its debut release: The Tech One EP. This inaugural project brings together label founder Unkey and fellow artist Deft Design (now Mono Code), to deliver a three-track EP that captures the essence of their individual styles.\n\nUnkey and Deft Design deliver a seamless collaboration, merging their distinct production styles to present a bold and visionary foundation for Source Control's future.",
    accentGradient:
      "linear-gradient(145deg, #121820 0%, #171d26 44%, #1c2430 66%, #101418 100%)",
    tracklist: [
      { number: "A1", title: "Tech One", duration: "4:18" },
      { number: "A2", title: "Grid Failure", duration: "4:28" },
      { number: "B1", title: "Null Signal", duration: "3:54" },
      { number: "B2", title: "Concrete Drift", duration: "5:06" },
    ],
    streamingLinks: [
      {
        label: "Bandcamp",
        href: "https://source01control.bandcamp.com/album/tech-one-ep",
      },
      {
        label: "Beatport",
        href: "https://www.beatport.com/release/tech-one-ep/4880904",
      },
      {
        label: "Spotify",
        href: "https://open.spotify.com/album/3l3cLB7E4vgU09pgflFdwv?si=TH5XEK37RXaKqzpdJ8pJ6Q",
      },
      {
        label: "Apple Music",
        href: "https://music.apple.com/gb/album/tech-one-single/1788992956",
      },
      {
        label: "YouTube Music",
        href: "https://music.youtube.com/playlist?list=OLAK5uy_nETZT5LwqTDwSAypn3NO-nrWzpSVXjc-o",
      },
      { label: "Tidal", href: "https://tidal.com/album/409529183" },
    ],
    spotifyEmbed:
      "https://open.spotify.com/embed/album/3l3cLB7E4vgU09pgflFdwv?utm_source=generator&theme=0",
  },
];

export const releases: Release[] = releasesData.map((release) => {
  const slug = createReleaseSlug(release.artist, release.title);

  return {
    ...release,
    slug,
    href: releaseHref(slug),
  };
});

export function getReleaseBySlug(slug: string): Release | undefined {
  return releases.find((release) => release.slug === slug);
}

export const featuredRelease = releases.find((release) => release.featured) ?? releases[0];
export const catalogueReleases = releases;
export const featuredReleaseSmall = releases.slice(1);
