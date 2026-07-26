"use client";

import { useMemo, useState } from "react";
import {
  filterStoreProducts,
  storeCategories,
  type StoreCategory,
  type StoreSort,
} from "@/lib/store";
import { StoreProductCard } from "./StoreProductCard";
import { cn } from "@/lib/utils";

const sortOptions: { id: StoreSort; label: string }[] = [
  { id: "newest", label: "Newest" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "title", label: "Title A–Z" },
];

export function StoreCatalog() {
  const [category, setCategory] = useState<StoreCategory>("digital");
  const [sort, setSort] = useState<StoreSort>("newest");

  const products = useMemo(
    () =>
      filterStoreProducts({
        category,
        sort,
      }),
    [category, sort]
  );

  return (
    <div className="store-page__content">
      <div className="store-page__controls">
        <nav className="store-page__categories" aria-label="Store categories">
          {storeCategories.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setCategory(item.id)}
              className={cn(
                "store-page__category",
                category === item.id && "store-page__category--active"
              )}
            >
              <span aria-hidden="true">/</span> {item.label}
            </button>
          ))}
        </nav>

        <label className="store-page__sort">
          <span>Sort</span>
          <select
            value={sort}
            onChange={(event) => setSort(event.target.value as StoreSort)}
            className="store-page__sort-select"
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
        <section className="store-page__section" aria-label="Products">
          <div className="store-page__grid">
            {products.map((product) => (
              <StoreProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      ) : (
        <p className="store-page__empty">No products match your filters.</p>
      )}
    </div>
  );
}
