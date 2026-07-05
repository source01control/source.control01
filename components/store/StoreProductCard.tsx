"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { getStoreProductPath, type StoreProduct } from "@/lib/store";
import { StoreDownloadFormatOptions } from "./StoreDownloadFormatOptions";
import { cn } from "@/lib/utils";

type StoreProductCardProps = {
  product: StoreProduct;
};

const formatLabels: Record<StoreProduct["format"], string> = {
  vinyl: "VINYL",
  digital: "DIGITAL",
  merchandise: "MERCHANDISE",
};

export function StoreProductCard({ product }: StoreProductCardProps) {
  const [overlayOpen, setOverlayOpen] = useState(false);
  const hasDownloadFormats =
    product.category === "digital" && Boolean(product.downloadFormats?.length);

  const isSamplePack = product.category === "sample-packs";

  const formatLabel =
    product.category === "bundles"
      ? "BUNDLE"
      : product.category === "sample-packs"
        ? "SAMPLE PACK"
        : formatLabels[product.format];

  const toggleOverlay = () => {
    if (!hasDownloadFormats) return;
    setOverlayOpen((open) => !open);
  };

  return (
    <article
      className={cn(
        "store-product-card group",
        hasDownloadFormats && "store-product-card--digital"
      )}
    >
      <div
        className={cn(
          "store-product-card__artwork relative aspect-square w-full overflow-hidden bg-[#0a0a0a]",
          hasDownloadFormats && "store-product-card__artwork--interactive"
        )}
        onClick={toggleOverlay}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            toggleOverlay();
          }
        }}
        role={hasDownloadFormats ? "button" : undefined}
        tabIndex={hasDownloadFormats ? 0 : undefined}
        aria-label={
          hasDownloadFormats
            ? `${product.title} download formats`
            : undefined
        }
        aria-expanded={hasDownloadFormats ? overlayOpen : undefined}
      >
        <Image
          src={product.image}
          alt={product.alt}
          fill
          className={cn(
            "object-cover",
            !hasDownloadFormats &&
              "transition-transform duration-500 group-hover:scale-[1.03]"
          )}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />

        {hasDownloadFormats && product.downloadFormats ? (
          <div
            className={cn(
              "store-product-card__overlay",
              overlayOpen && "store-product-card__overlay--visible"
            )}
          >
            <StoreDownloadFormatOptions
              options={product.downloadFormats}
              variant="overlay"
            />
            <Link
              href={getStoreProductPath(product.id)}
              className="store-product-card__view-product font-[family-name:var(--font-mono)]"
              onClick={(event) => event.stopPropagation()}
            >
              VIEW PRODUCT
            </Link>
          </div>
        ) : null}
      </div>

      <div className="store-product-card__body">
        <p className="store-product-card__format font-[family-name:var(--font-mono)]">
          {formatLabel}
        </p>

        {product.catalog ? (
          <p className="store-product-card__catalog font-[family-name:var(--font-mono)]">
            {product.catalog}
          </p>
        ) : null}

        <h2 className="store-product-card__title font-[family-name:var(--font-display)] uppercase text-white">
          {product.title}
        </h2>

        {product.artist && !isSamplePack ? (
          <p className="store-product-card__artist font-[family-name:var(--font-mono)] uppercase">
            {product.artist}
          </p>
        ) : null}

        <div className="store-product-card__footer">
          {isSamplePack ? (
            <Link
              href={getStoreProductPath(product.id)}
              className="store-product-card__sample-link font-[family-name:var(--font-mono)] uppercase"
            >
              Get Free Sample Pack
            </Link>
          ) : (
            <>
              <p className="store-product-card__price font-[family-name:var(--font-mono)]">
                {product.priceLabel}
              </p>
              <button type="button" className="store-product-card__button">
                ADD TO CART
              </button>
            </>
          )}
        </div>
      </div>
    </article>
  );
}
