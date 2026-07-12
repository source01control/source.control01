export type ReleaseTrack = {
  number: string;
  title: string;
  duration?: string;
  previewUrl?: string;
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

export function getReleaseBackgroundImage(catalog: string, fallback: string): string {
  const catalogNumber = catalog.match(/(\d{3})$/)?.[1];
  if (!catalogNumber) return fallback;

  return `/images/just-background/${catalogNumber}_JB.webp`;
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
      "Source Shift marks a defining moment in the ongoing collaboration between Unkey and Mono Code, capturing a creative partnership increasingly unconcerned with genre and more focused on the movement of ideas.\n\nAcross three meticulously constructed compositions, the duo continue to reshape the language of contemporary 140. Traditional rhythmic expectations give way to a more fluid, techno informed framework where momentum is sustained through repetition, evolving percussion and carefully controlled low end rather than familiar points of release. The result is music that feels hypnotic, deliberate and constantly in motion.\n\nWhile traces of dubstep remain embedded within its foundations, Source Shift looks beyond established conventions, embracing spacious arrangements, architectural sound design and subtle rhythmic evolution without abandoning the weight and physicality of sound system music.\n\nRather than representing a departure, the EP captures another stage in an ongoing process of refinement. Source Shift isn't concerned with redefining genres, it simply allows them to overlap, dissolve and reassemble into something that feels both familiar and quietly unfamiliar.\n\nIn doing so, it embodies Source Control's philosophy of Continuous Evolution, demonstrating that progression isn't always found by moving away from the past, but by discovering new ways to move through it.",
    accentGradient:
      "linear-gradient(145deg, #111820 0%, #151d2e 38%, #1a2840 62%, #13181f 100%)",
    tracklist: [
      { number: "1", title: "Night Bus From Orion" },
      { number: "2", title: "Source Shift" },
      { number: "3", title: "Source Shift (Radio Edit)" },
      { number: "4", title: "Stress Vector" },
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
    "Tech Two EP sees Unkey and Mono Code continue their collaborative exploration of tension, atmosphere and sonic evolution. Expanding on the foundations established by Tech One, the duo move beyond the traditional remix format, revisiting familiar material through a process of deconstruction and reinvention.\n\nRather than simply reworking existing tracks, Tech Two treats them as evolving ideas, stripping them back, reshaping their architecture and rebuilding them into something entirely new. The result is a collection that feels simultaneously familiar and unpredictable, where fragments of the original recordings emerge in unexpected forms before dissolving into darker, more futuristic territory.\n\nDriven by precision, restraint and an uncompromising focus on sound design, the EP reflects the philosophy at the heart of Source Control: Continuous Evolution. Existing ideas are never treated as finished works, but as foundations for further exploration.\n\nMore than a follow up, Tech Two represents another iteration in an ongoing creative process, continuing the evolution of Unkey and Mono Code's shared musical language.",
    accentGradient:
      "linear-gradient(145deg, #141518 0%, #1a1c22 42%, #1e2428 68%, #121416 100%)",
    tracklist: [
      { number: "1", title: "Black Dream" },
      { number: "2", title: "Tech Two" },
      { number: "3", title: "Drop It Down" },
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
    "Following his collaborative debut alongside Unkey on Tech One EP, Mono Code steps forward with Blink Of An Eye, a meticulously constructed solo statement that reflects his measured and increasingly distinctive approach to contemporary bass music.\n\nAcross four carefully sculpted compositions, the EP explores the relationship between tension, movement and restraint. Rooted in the weight and spatial awareness of 140, yet drawing equally from the hypnotic repetition of techno and the discipline of minimalist sound design, Blink Of An Eye favours subtle progression over immediate impact. Rhythms shift with quiet intent, atmospheres unfold gradually and every element is placed with architectural precision.\n\nRather than overwhelming the listener through excess, Mono Code allows the music to breathe. Space becomes as important as sound, while low end, texture and carefully measured percussion combine to create an immersive body of work that rewards patience and repeated listening. Beneath its restrained exterior lies a constant sense of movement, with each track revealing new details as familiar ideas evolve over time.\n\nAs Mono Code's first solo release for Source Control, Blink Of An Eye embodies the label's philosophy of Continuous Evolution, not through dramatic reinvention, but through refinement, precision and the belief that the strongest ideas are those that continue to develop long after they first take shape.",
    accentGradient:
      "linear-gradient(145deg, #15121c 0%, #1e1929 44%, #221d32 66%, #141018 100%)",
    tracklist: [
      { number: "1", title: "Attestupan" },
      { number: "2", title: "Blink Of An Eye" },
      { number: "3", title: "Hope Dies Last" },
      { number: "4", title: "Serpent" },
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
      "Dark 12 explores two contrasting sides of Unkey's creative identity, united by a shared fascination with atmosphere, storytelling and the emotional weight of sound.\n\nOpening with Dark, the release unfolds around a haunting vocal narrative that gradually reveals itself through fractured textures, restrained percussion and cavernous low end. Rather than relying on obvious impact, the track allows tension to build through suggestion, with carefully chosen dialogue becoming inseparable from the music itself. Beneath its surface lies an exploration of parental anxiety, the imagined fear of a father confronted with the unimaginable, transforming a simple vocal sample into the emotional centre of the composition.\n\nIts counterpart, 12, shifts towards a more traditional 140 framework while remaining unmistakably rooted in Unkey's evolving sound. Driven by weighty snares, spacious arrangements and a deep, rolling groove, the track pays quiet tribute to one of the records that helped shape his own musical journey. Named after the year J:Kenzo's landmark self titled debut was released, 12 reflects the influence of an album that continues to resonate within the deeper reaches of UK bass music, while remaining firmly focused on looking forwards rather than backwards.\n\nTogether, the two tracks reveal different approaches to the same philosophy. One tells a story through atmosphere and narrative; the other revisits the foundations of the genre with renewed perspective. Both reflect Unkey's belief that evolution doesn't always require abandoning the past, sometimes it begins by seeing it differently.",
    accentGradient:
      "linear-gradient(145deg, #181012 0%, #221418 44%, #2a1a20 66%, #140e10 100%)",
    tracklist: [
      { number: "1", title: "Dark" },
      { number: "2", title: "12" },
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
    "Bloodstain EP introduces 0079 to Source Control with four compositions that challenge the conventions of contemporary bass music while remaining firmly rooted in sound system culture.\n\nThe title track establishes its intent immediately. Built around a relentless, techno informed pulse and deliberately avoiding the familiar cadence of a traditional 140 snare, Bloodstain generates momentum through repetition, tension and carefully controlled movement. The groove is hypnotic, understated and constantly driving forward, drawing as much from techno's propulsion as it does from dubstep's weight.\n\nElsewhere, the EP broadens its perspective without losing its identity. Cherry Vanilla and Don't Be Scared continue to explore spacious atmospheres, restrained percussion and low end pressure, while closing track Numerous Times shifts confidently into drum & bass territory, extending the EP's narrative rather than disrupting it.\n\nRather than being defined by genre, Bloodstain EP is unified by its willingness to question convention. It marks another step in Source Control's evolving catalogue, where experimentation, movement and individuality remain the common thread.",
    accentGradient:
      "linear-gradient(145deg, #1a1012 0%, #261618 44%, #301a1e 66%, #140c0e 100%)",
    tracklist: [
      { number: "1", title: "Bloodstain" },
      { number: "2", title: "Cherry Vanilla" },
      { number: "3", title: "Don't Be Scared" },
      { number: "4", title: "Numerous Times" },
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
    artist: "Unkey x Deft Design",
    title: "TECH ONE EP",
    releaseDate: "2024-12-06",
    image: "/images/releases/SCTRL001.webp",
    detailImage: "/images/releases/detail/SCTRL001.webp",
    alt: "SCTRL001 Tech One artwork",
    backgroundVideo: "/videos/releases/matrix-code.mp4",
    backgroundVideoMonochrome: true,
    about:
    "Tech One EP marks the beginning of both a creative partnership and the foundation of Source Control. Bringing together label founder Unkey and Deft Design (now Mono Code) for the first time, the three track release establishes a shared musical language built around atmosphere, tension and meticulous sound design.\n\nRather than approaching collaboration as a compromise between two styles, Tech One allows each producer's strengths to inform the other. Unkey's cinematic textures and instinct for atmosphere meet Mono Code's measured, precision led approach, creating a body of work that feels cohesive while leaving space for both identities to emerge.\n\nAcross the EP, spacious arrangements, weighty low end and carefully evolving rhythms take precedence over convention, laying the groundwork for a partnership that would continue to develop across future releases. In retrospect, Tech One captures more than the beginning of a label, it documents the first iteration of an ongoing creative dialogue between two artists committed to refinement, experimentation and continual evolution.",
    accentGradient:
      "linear-gradient(145deg, #121820 0%, #171d26 44%, #1c2430 66%, #101418 100%)",
    tracklist: [
      { number: "1", title: "Tech One" },
      { number: "2", title: "Drop It Down" },
      { number: "3", title: "Dreamweaver" },
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

export function getReleaseById(id: string): Release | undefined {
  return releases.find((release) => release.id === id);
}

export function getTrackPreviewUrl(
  releaseId: string,
  trackTitle: string,
  previewUrl?: string
): string {
  if (previewUrl) return previewUrl;

  const slug = trackTitle
    .toLowerCase()
    .replace(/\//g, "-")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return `/audio/previews/${releaseId}/${slug}.mp3`;
}

export const featuredRelease = releases.find((release) => release.featured) ?? releases[0];
export const catalogueReleases = releases;
export const featuredReleaseSmall = releases.slice(1);
