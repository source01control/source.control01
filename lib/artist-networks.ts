export type ArtistNetworkLink = {
  label: string;
  href?: string;
  icon: string;
  invert?: boolean;
  facebook?: boolean;
};

const networkPlatformLogos: ArtistNetworkLink[] = [
  {
    label: "Instagram",
    icon: "/images/instagram-icon.png",
    invert: true,
  },
  {
    label: "Facebook",
    icon: "/images/facebook-icon.svg",
    facebook: true,
  },
  {
    label: "Soundcloud",
    icon: "/images/soundcloud-icon.png",
    invert: true,
  },
  {
    label: "Spotify",
    icon: "/images/spotify-icon.png",
  },
  {
    label: "Bandcamp",
    icon: "/images/bandcamp-icon.svg",
  },
];

export type ArtistNetwork = {
  title: string;
  links: ArtistNetworkLink[];
  spotifyEmbed?: string;
};

const monoCodeLinkHrefs: Partial<Record<string, string>> = {
  Instagram: "https://www.instagram.com/mono.code_?igsh=OGQ5NXZhNWh5ZWVj",
  Facebook: "https://www.facebook.com/Mono.code.music",
  Soundcloud: "https://soundcloud.com/mono_code",
  Spotify:
    "https://open.spotify.com/artist/4qrRrpp8bIdjp2bEna8iFi?si=PzjLuOEiRvGG4V6yDSf3vw",
  Bandcamp: "https://monocodesound.bandcamp.com",
};

const artist0079LinkHrefs: Partial<Record<string, string>> = {
  Instagram: "https://www.instagram.com/0079__?igsh=MWFsZTI1cnppM2ZneA==",
  Soundcloud: "https://soundcloud.com/00-79",
  Spotify:
    "https://open.spotify.com/artist/00K5zIIE3FS8YDdZoOntsY?si=jKP5NgCOQMOtuH-kW_Oq0w",
  Bandcamp: "https://0079.bandcamp.com",
};

export const artistNetworks: Record<string, ArtistNetwork> = {
  unkey: {
    title: "Unkey Network",
    spotifyEmbed:
      "https://open.spotify.com/embed/album/2WHPa8rtfVaczzvl1O7TVg?utm_source=generator&theme=0",
    links: [
      {
        label: "Instagram",
        href: "https://www.instagram.com/unkey_uk?igsh=MWF2YW9hd2wxbTl4eA==",
        icon: "/images/instagram-icon.png",
        invert: true,
      },
      {
        label: "Facebook",
        href: "https://www.facebook.com/unkeyuk",
        icon: "/images/facebook-icon.svg",
        facebook: true,
      },
      {
        label: "Soundcloud",
        href: "https://soundcloud.com/unkey",
        icon: "/images/soundcloud-icon.png",
        invert: true,
      },
      {
        label: "Spotify",
        href: "https://open.spotify.com/artist/4RCLOZtadG5NfdrNLAhzBd?si=5ymECO9cTROV0mXbuprp6Q",
        icon: "/images/spotify-icon.png",
      },
      {
        label: "Bandcamp",
        href: "https://unkey.bandcamp.com",
        icon: "/images/bandcamp-icon.svg",
      },
    ],
  },
  "mono-code": {
    title: "Mono Code Network",
    spotifyEmbed:
      "https://open.spotify.com/embed/album/7s7Cmj400lCCsfdT8nZspD?utm_source=generator&theme=0",
    links: networkPlatformLogos.map((link) => ({
      ...link,
      ...(monoCodeLinkHrefs[link.label]
        ? { href: monoCodeLinkHrefs[link.label] }
        : {}),
    })),
  },
  "0079": {
    title: "0079 Network",
    spotifyEmbed:
      "https://open.spotify.com/embed/album/6xcXBkQksUffcRrNFZTJPP?utm_source=generator&theme=0",
    links: networkPlatformLogos
      .filter((link) => link.label !== "Facebook")
      .map((link) => ({
        ...link,
        ...(artist0079LinkHrefs[link.label]
          ? { href: artist0079LinkHrefs[link.label] }
          : {}),
      })),
  },
};

export function getArtistNetwork(slug: string): ArtistNetwork | undefined {
  return artistNetworks[slug];
}
