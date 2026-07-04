export const homepageNav = [
  { label: "About", href: "#about" },
  { label: "Artists", href: "/artists" },
  { label: "Releases", href: "/releases" },
  { label: "Events", href: "/events" },
  { label: "Store", href: "/store" },
  { label: "Mixes", href: "#mixes" },
] as const;

export type { Release as FeaturedRelease } from "@/lib/releases";
export {
  catalogueReleases,
  featuredRelease,
  featuredReleaseSmall,
  releaseHref,
} from "@/lib/releases";
