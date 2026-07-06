import { merchandise } from "@/lib/data";
import {
  getReleaseBackgroundImage,
  releases,
  type Release,
} from "@/lib/releases";
import {
  SAMPLE_PACK_ARTWORK,
  SAMPLE_PACK_STORE_ID,
  samplePackHref,
} from "@/lib/sample-pack";

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
  { format: "flac", label: "FLAC", priceLabel: "£7.00" },
  { format: "wav", label: "WAV", priceLabel: "£8.00" },
];

const releaseDownloadFormats: Record<string, StoreDownloadOption[]> = {
  "sc-003": [
    { format: "mp3", label: "MP3", priceLabel: "£2.50" },
    { format: "flac", label: "FLAC", priceLabel: "£3.00" },
    { format: "wav", label: "WAV", priceLabel: "£3.50" },
  ],
  "sc-001": [
    { format: "mp3", label: "MP3", priceLabel: "£3.50" },
    { format: "flac", label: "FLAC", priceLabel: "£4.00" },
    { format: "wav", label: "WAV", priceLabel: "£4.50" },
  ],
  "sc-002": [
    { format: "mp3", label: "MP3", priceLabel: "£4.50" },
    { format: "flac", label: "FLAC", priceLabel: "£5.00" },
    { format: "wav", label: "WAV", priceLabel: "£5.50" },
  ],
  "sc-004": [
    { format: "mp3", label: "MP3", priceLabel: "£4.50" },
    { format: "flac", label: "FLAC", priceLabel: "£5.00" },
    { format: "wav", label: "WAV", priceLabel: "£5.50" },
  ],
  "sc-005": [
    { format: "mp3", label: "MP3", priceLabel: "£3.50" },
    { format: "flac", label: "FLAC", priceLabel: "£4.00" },
    { format: "wav", label: "WAV", priceLabel: "£4.50" },
  ],
  "sc-006": [
    { format: "mp3", label: "MP3", priceLabel: "£4.50" },
    { format: "flac", label: "FLAC", priceLabel: "£5.00" },
    { format: "wav", label: "WAV", priceLabel: "£5.50" },
  ],
};

function getReleaseDownloadFormats(releaseId: string): StoreDownloadOption[] {
  return releaseDownloadFormats[releaseId] ?? digitalDownloadFormats;
}

export const digitalTrackPrices: Record<
  DigitalDownloadFormat,
  { price: number; priceLabel: string }
> = {
  mp3: { price: 1.75, priceLabel: "£1.75" },
  flac: { price: 2, priceLabel: "£2.00" },
  wav: { price: 2.25, priceLabel: "£2.25" },
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

function getDigitalProductPrice(
  releaseId: string,
  downloadFormats: StoreDownloadOption[]
): { price: number; priceLabel: string } {
  if (!releaseDownloadFormats[releaseId]) {
    return { price: digitalPrice, priceLabel: `£${digitalPrice.toFixed(2)}` };
  }

  const mp3 = downloadFormats.find((option) => option.format === "mp3");
  if (!mp3) {
    return { price: digitalPrice, priceLabel: `£${digitalPrice.toFixed(2)}` };
  }

  const price = Number.parseFloat(mp3.priceLabel.replace(/[^\d.]/g, "")) || digitalPrice;
  return { price, priceLabel: mp3.priceLabel };
}

const releaseProducts: StoreProduct[] = releases.flatMap((release) => {
  const downloadFormats = getReleaseDownloadFormats(release.id);
  const digitalPricing = getDigitalProductPrice(release.id, downloadFormats);

  return [
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
    price: digitalPricing.price,
    priceLabel: digitalPricing.priceLabel,
    image: getReleaseBackgroundImage(release.catalog, release.image),
    alt: release.alt,
    href: release.href,
    releaseDate: release.releaseDate,
    downloadFormats,
  },
];
});

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
  id: SAMPLE_PACK_STORE_ID,
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
