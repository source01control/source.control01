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
  { id: "newest", label: "NEWEST" },
  { id: "price-asc", label: "PRICE: LOW TO HIGH" },
  { id: "price-desc", label: "PRICE: HIGH TO LOW" },
  { id: "title", label: "TITLE A–Z" },
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
    <div className="store-catalog">
      <aside className="store-sidebar" aria-label="Store categories">
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
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
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
