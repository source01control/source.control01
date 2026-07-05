import { merchandise } from "@/lib/data";
import { releases, type Release } from "@/lib/releases";
import { SAMPLE_PACK_ARTWORK, samplePackHref } from "@/lib/sample-pack";

export type StoreCategory =
  | "all"
  | "vinyl"
  | "digital"
  | "merchandise"
  | "bundles"
  | "sample-packs";

export type StoreFormat = "vinyl" | "digital" | "merchandise";

export type DigitalDownloadFormat = "mp3" | "flac" | "wav";

export type StoreDownloadOption = {
  format: DigitalDownloadFormat;
  label: string;
  priceLabel: string;
};

export type StoreProduct = {
  id: string;
  category: Exclude<StoreCategory, "all">;
  format: StoreFormat;
  catalog?: string;
  title: string;
  artist?: string;
  price: number;
  priceLabel: string;
  image: string;
  alt: string;
  href?: string;
  releaseDate: string;
  downloadFormats?: StoreDownloadOption[];
};

export const digitalDownloadFormats: StoreDownloadOption[] = [
  { format: "mp3", label: "MP3", priceLabel: "£6.00" },
  { format: "wav", label: "WAV", priceLabel: "£8.00" },
  { format: "flac", label: "FLAC", priceLabel: "£7.00" },
];

export const digitalTrackPrices: Record<
  DigitalDownloadFormat,
  { price: number; priceLabel: string }
> = {
  mp3: { price: 1.5, priceLabel: "£1.50" },
  wav: { price: 1.75, priceLabel: "£1.75" },
  flac: { price: 2, priceLabel: "£2.00" },
};

export function getTrackPriceLabel(format: DigitalDownloadFormat): string {
  return digitalTrackPrices[format].priceLabel;
}

export function getReleaseForStoreProduct(
  product: StoreProduct
): Release | undefined {
  if (!product.id.endsWith("-digital")) return undefined;
  const releaseId = product.id.replace(/-digital$/, "");
  return releases.find((release) => release.id === releaseId);
}

export type StoreSort = "newest" | "price-asc" | "price-desc" | "title";

export const storeCategories: {
  id: StoreCategory;
  label: string;
}[] = [
  { id: "digital", label: "DIGITAL" },
  { id: "merchandise", label: "MERCHANDISE" },
  { id: "sample-packs", label: "SAMPLE PACKS" },
];

const vinylPrice = 18;
const digitalPrice = 8;

function getDigitalStoreImage(catalog: string, fallback: string): string {
  const catalogNumber = catalog.match(/(\d{3})$/)?.[1];
  if (!catalogNumber) return fallback;

  return `/images/just-background/${catalogNumber}_JB.webp`;
}

const releaseProducts: StoreProduct[] = releases.flatMap((release) => [
  {
    id: `${release.id}-vinyl`,
    category: "vinyl" as const,
    format: "vinyl" as const,
    catalog: release.catalog,
    title: release.title,
    artist: release.artist,
    price: vinylPrice,
    priceLabel: `£${vinylPrice.toFixed(2)}`,
    image: release.image,
    alt: release.alt,
    href: release.href,
    releaseDate: release.releaseDate,
  },
  {
    id: `${release.id}-digital`,
    category: "digital" as const,
    format: "digital" as const,
    catalog: release.catalog,
    title: release.title,
    artist: release.artist,
    price: digitalPrice,
    priceLabel: `£${digitalPrice.toFixed(2)}`,
    image: getDigitalStoreImage(release.catalog, release.image),
    alt: release.alt,
    href: release.href,
    releaseDate: release.releaseDate,
    downloadFormats: digitalDownloadFormats,
  },
]);

const merchProducts: StoreProduct[] = merchandise.map((item) => ({
  id: item.id,
  category: "merchandise" as const,
  format: "merchandise" as const,
  title: item.name.toUpperCase(),
  artist: item.category.toUpperCase(),
  price: Number.parseFloat(item.price.replace(/[^\d.]/g, "")) || 0,
  priceLabel: item.price,
  image: item.image,
  alt: item.name,
  releaseDate: "2025-01-01",
}));

const bundleProduct: StoreProduct = {
  id: "bundle-starter",
  category: "bundles",
  format: "merchandise",
  catalog: "SC BNDL 001",
  title: "SOURCE CONTROL STARTER BUNDLE",
  artist: "VINYL + DIGITAL + SAMPLE PACK",
  price: 39,
  priceLabel: "£39.00",
  image: releases[0]?.image ?? "/images/releases/SCTRL006.webp",
  alt: "Source Control starter bundle",
  releaseDate: "2026-03-14",
};

const samplePackProduct: StoreProduct = {
  id: "sample-pack-vol-1",
  category: "sample-packs",
  format: "digital",
  catalog: "SCTRL-SP001",
  title: "SAMPLE PACK VOL. 1",
  artist: "SOURCE CONTROL",
  price: 0,
  priceLabel: "FREE",
  image: SAMPLE_PACK_ARTWORK,
  alt: "Source Control Sample Pack Vol. 1",
  href: samplePackHref,
  releaseDate: "2025-06-01",
};

export const storeProducts: StoreProduct[] = [
  ...releaseProducts,
  ...merchProducts,
  bundleProduct,
  samplePackProduct,
];

export function getStoreProductById(id: string): StoreProduct | undefined {
  return storeProducts.find((product) => product.id === id);
}

export function getStoreProductPath(id: string): string {
  return `/store/${id}`;
}

export function getReleaseDigitalStorePath(releaseId: string): string | undefined {
  const product = getStoreProductById(`${releaseId}-digital`);
  return product ? getStoreProductPath(product.id) : undefined;
}

export function filterStoreProducts({
  category,
  sort,
}: {
  category: StoreCategory;
  sort: StoreSort;
}): StoreProduct[] {
  let results = storeProducts.filter((product) => {
    if (category !== "all" && product.category !== category) return false;
    return true;
  });

  results = [...results].sort((a, b) => {
    if (sort === "newest") {
      return b.releaseDate.localeCompare(a.releaseDate);
    }
    if (sort === "price-asc") {
      return a.price - b.price;
    }
    if (sort === "price-desc") {
      return b.price - a.price;
    }
    return a.title.localeCompare(b.title);
  });

  return results;
}
