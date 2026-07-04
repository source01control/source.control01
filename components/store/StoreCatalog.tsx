"use client";

import { useMemo, useState } from "react";
import {
  filterStoreProducts,
  getStoreCategoryCount,
  storeCategories,
  type StoreCategory,
  type StoreFormat,
  type StoreSort,
} from "@/lib/store";
import { StoreProductCard } from "./StoreProductCard";
import { cn } from "@/lib/utils";

const formatOptions: { id: StoreFormat; label: string }[] = [
  { id: "digital", label: "DIGITAL" },
  { id: "merchandise", label: "MERCHANDISE" },
];

const sortOptions: { id: StoreSort; label: string }[] = [
  { id: "newest", label: "NEWEST" },
  { id: "price-asc", label: "PRICE: LOW TO HIGH" },
  { id: "price-desc", label: "PRICE: HIGH TO LOW" },
  { id: "title", label: "TITLE A–Z" },
];

export function StoreCatalog() {
  const [category, setCategory] = useState<StoreCategory>("digital");
  const [formats, setFormats] = useState<StoreFormat[]>([]);
  const [maxPrice, setMaxPrice] = useState(100);
  const [sort, setSort] = useState<StoreSort>("newest");

  const products = useMemo(
    () =>
      filterStoreProducts({
        category,
        formats,
        maxPrice,
        sort,
      }),
    [category, formats, maxPrice, sort]
  );

  const toggleFormat = (format: StoreFormat) => {
    setFormats((current) =>
      current.includes(format)
        ? current.filter((item) => item !== format)
        : [...current, format]
    );
  };

  return (
    <div className="store-catalog">
      <aside className="store-sidebar" aria-label="Store filters">
        <section className="store-sidebar__section">
          <h2 className="store-sidebar__heading section-label">CATEGORIES</h2>
          <ul className="store-sidebar__list">
            {storeCategories.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => setCategory(item.id)}
                  className={cn(
                    "store-sidebar__link font-[family-name:var(--font-mono)]",
                    category === item.id && "store-sidebar__link--active"
                  )}
                >
                  <span>{item.label}</span>
                  <span>{getStoreCategoryCount(item.id)}</span>
                </button>
              </li>
            ))}
          </ul>
        </section>

        <section className="store-sidebar__section">
          <h2 className="store-sidebar__heading section-label">FILTER BY</h2>

          <div className="store-sidebar__group">
            <p className="store-sidebar__label font-[family-name:var(--font-mono)]">
              FORMAT
            </p>
            <ul className="store-sidebar__checks">
              {formatOptions.map((option) => (
                <li key={option.id}>
                  <label className="store-sidebar__check font-[family-name:var(--font-mono)]">
                    <input
                      type="checkbox"
                      checked={formats.includes(option.id)}
                      onChange={() => toggleFormat(option.id)}
                    />
                    <span>{option.label}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>

          <div className="store-sidebar__group">
            <p className="store-sidebar__label font-[family-name:var(--font-mono)]">
              PRICE
            </p>
            <div className="store-sidebar__price">
              <input
                type="range"
                min={0}
                max={100}
                step={1}
                value={maxPrice}
                onChange={(event) => setMaxPrice(Number(event.target.value))}
                aria-label="Maximum price"
              />
              <div className="store-sidebar__price-labels font-[family-name:var(--font-mono)]">
                <span>£0</span>
                <span>{maxPrice >= 100 ? "£100+" : `£${maxPrice}`}</span>
              </div>
            </div>
          </div>
        </section>

        <section className="store-sidebar__section store-sidebar__section--sort">
          <h2 className="store-sidebar__heading section-label">SORT BY</h2>
          <select
            value={sort}
            onChange={(event) => setSort(event.target.value as StoreSort)}
            className="store-sidebar__select font-[family-name:var(--font-mono)]"
            aria-label="Sort products"
          >
            {sortOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
        </section>
      </aside>

      <section className="store-main" aria-label="Products">
        <div className="store-main__toolbar">
          <p className="store-main__count font-[family-name:var(--font-mono)] uppercase">
            {products.length} PRODUCTS
          </p>
          <label className="store-main__sort font-[family-name:var(--font-mono)] uppercase">
            <span>SORT BY:</span>
            <select
              value={sort}
              onChange={(event) => setSort(event.target.value as StoreSort)}
              className="store-main__sort-select"
              aria-label="Sort products"
            >
              {sortOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        {products.length > 0 ? (
          <div className="store-grid">
            {products.map((product) => (
              <StoreProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="store-main__empty font-[family-name:var(--font-mono)] uppercase">
            No products match your filters.
          </p>
        )}
      </section>
    </div>
  );
}
