"use client";

import type { DigitalDownloadFormat, StoreDownloadOption } from "@/lib/store";
import { cn } from "@/lib/utils";

type StoreDownloadFormatOptionsProps = {
  options: StoreDownloadOption[];
  selected?: DigitalDownloadFormat;
  onSelect?: (format: DigitalDownloadFormat) => void;
  variant?: "overlay" | "detail";
};

export function StoreDownloadFormatOptions({
  options,
  selected,
  onSelect,
  variant = "detail",
}: StoreDownloadFormatOptionsProps) {
  return (
    <ul
      className={cn(
        "store-download-formats",
        variant === "overlay" && "store-download-formats--overlay"
      )}
    >
      {options.map((option) => {
        const isSelected = selected === option.format;

        return (
          <li key={option.format}>
            <button
              type="button"
              className={cn(
                "store-download-formats__option font-[family-name:var(--font-mono)]",
                variant === "detail" && "store-download-formats__option--detail",
                isSelected && "store-download-formats__option--selected"
              )}
              onClick={(event) => {
                if (variant === "overlay") {
                  event.stopPropagation();
                }
                onSelect?.(option.format);
              }}
              aria-pressed={variant === "detail" ? isSelected : undefined}
            >
              <span>{option.label} Release</span>
              <span>{option.priceLabel}</span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
