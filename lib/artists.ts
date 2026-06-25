import { artists, type Artist } from "./data";
import { releases, type Release } from "./releases";

export type { Artist };

export function artistHref(slug: string): string {
  return `/artists/${slug}`;
}

export function getArtistBySlug(slug: string): Artist | undefined {
  return artists.find((artist) => artist.slug === slug);
}

function artistMatchesRelease(artist: Artist, release: Release): boolean {
  const releaseArtist = release.artist.toLowerCase();

  if (artist.slug === "unkey") return releaseArtist.includes("unkey");
  if (artist.slug === "mono-code") return releaseArtist.includes("mono code");
  if (artist.slug === "0079") return releaseArtist.includes("0079");

  return false;
}

export function getReleasesForArtist(artist: Artist): Release[] {
  return releases.filter((release) => artistMatchesRelease(artist, release));
}

export { artists };
