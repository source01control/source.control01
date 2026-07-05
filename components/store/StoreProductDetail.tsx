"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { KitSamplePackEmbed } from "@/components/sample-pack/KitSamplePackEmbed";
import type { Release } from "@/lib/releases";
import { SAMPLE_PACK_COPY } from "@/lib/sample-pack";
import type { DigitalDownloadFormat, StoreProduct } from "@/lib/store";
import { StoreTrackDownload } from "./StoreTrackDownload";

type StoreProductDetailProps = {
  product: StoreProduct;
  release?: Release;
};

const formatLabels: Record<StoreProduct["format"], string> = {
  vinyl: "VINYL",
  digital: "DIGITAL",
  merchandise: "MERCHANDISE",
};

export function StoreProductDetail({ product, release }: StoreProductDetailProps) {
  const hasDownloadFormats = Boolean(product.downloadFormats?.length);
  const [selectedFormat, setSelectedFormat] = useState<DigitalDownloadFormat>(
    product.downloadFormats?.[0]?.format ?? "mp3"
  );

  const formatLabel =
    product.category === "bundles"
      ? "BUNDLE"
      : product.category === "sample-packs"
        ? "SAMPLE PACK"
        : formatLabels[product.format];

  const isSamplePack = product.category === "sample-packs";
  const showTrackDownload =
    hasDownloadFormats && release && release.tracklist.length > 0 && !isSamplePack;

  return (
    <div className="store-product-detail">
      <div className="store-product-detail__inner">
        <Link
          href="/store"
          className="store-product-detail__back font-[family-name:var(--font-mono)] uppercase"
        >
          ← Back to Store
        </Link>

        <div className="store-product-detail__grid">
          <div className="store-product-detail__artwork">
            <Image
              src={product.image}
              alt={product.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>

          <div className="store-product-detail__info">
            <p className="store-product-detail__format font-[family-name:var(--font-mono)]">
              {formatLabel}
            </p>

            {product.catalog ? (
              <p className="store-product-detail__catalog font-[family-name:var(--font-mono)]">
                {product.catalog}
              </p>
            ) : null}

            <h1 className="store-product-detail__title font-[family-name:var(--font-display)] uppercase text-white">
              {product.title}
            </h1>

            {product.artist && !isSamplePack ? (
              <p className="store-product-detail__artist font-[family-name:var(--font-mono)] uppercase">
                {product.artist}
              </p>
            ) : null}

            {product.href && !isSamplePack ? (
              <Link
                href={product.href}
                className="store-product-detail__release-link font-[family-name:var(--font-mono)] uppercase"
              >
                View Release
              </Link>
            ) : null}
          </div>
        </div>

        {isSamplePack ? (
          <div className="store-product-detail__sample-pack">
            <p className="store-product-detail__sample-pack-copy font-[family-name:var(--font-mono)]">
              {SAMPLE_PACK_COPY}
            </p>
            <KitSamplePackEmbed />
          </div>
        ) : showTrackDownload && product.downloadFormats ? (
          <StoreTrackDownload
            release={release}
            downloadFormats={product.downloadFormats}
            selectedFormat={selectedFormat}
            onFormatChange={setSelectedFormat}
          />
        ) : hasDownloadFormats && product.downloadFormats ? (
          <div className="store-product-detail__fallback-buy">
            <p className="store-product-detail__price font-[family-name:var(--font-mono)]">
              {product.downloadFormats.find((o) => o.format === selectedFormat)
                ?.priceLabel ?? product.priceLabel}
            </p>
            <button type="button" className="store-product-detail__button">
              ADD TO CART
            </button>
          </div>
        ) : (
          <div className="store-product-detail__fallback-buy">
            <p className="store-product-detail__price font-[family-name:var(--font-mono)]">
              {product.priceLabel}
            </p>
            <button type="button" className="store-product-detail__button">
              ADD TO CART
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
