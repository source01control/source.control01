import type { Release } from "@/lib/releases";

export const WHITE_RABBIT_SLUG = "white-rabbit";

export const WHITE_RABBIT_HREF = `/releases/${WHITE_RABBIT_SLUG}`;

/** Secret release — not listed in catalogue, store, or sitemap. */
export const whiteRabbitRelease: Release = {
  id: "sc-secret-white-rabbit",
  slug: WHITE_RABBIT_SLUG,
  catalog: "SCTRL-WR",
  artist: "Source Unknown.",
  title: "WHITE RABBIT",
  releaseDate: "2026-07-13",
  href: WHITE_RABBIT_HREF,
  image: "/images/releases/white-rabbit-cutout.png",
  detailImage: "/images/releases/white-rabbit-cutout.png",
  alt: "White rabbit sketch",
  tracklist: [],
  streamingLinks: [],
  backgroundVideo: "/videos/releases/matrix-code.mp4",
  accentGradient:
    "linear-gradient(145deg, #0c0c0c 0%, #141414 44%, #1a1a1a 66%, #0a0a0a 100%)",
};
