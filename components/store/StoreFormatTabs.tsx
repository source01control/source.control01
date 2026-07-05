"use client";

import type { DigitalDownloadFormat, StoreDownloadOption } from "@/lib/store";
import { cn } from "@/lib/utils";

type StoreFormatTabsProps = {
  options: StoreDownloadOption[];
  selected: DigitalDownloadFormat;
  onSelect: (format: DigitalDownloadFormat) => void;
};

export function StoreFormatTabs({
  options,
  selected,
  onSelect,
}: StoreFormatTabsProps) {
  return (
    <div className="store-format-tabs">
      <span className="store-format-tabs__label font-[family-name:var(--font-mono)]">
        Format:
      </span>
      <div className="store-format-tabs__group" role="group" aria-label="Download format">
        {options.map((option) => (
          <button
            key={option.format}
            type="button"
            className={cn(
              "store-format-tabs__tab font-[family-name:var(--font-mono)]",
              selected === option.format && "store-format-tabs__tab--active"
            )}
            onClick={() => onSelect(option.format)}
            aria-pressed={selected === option.format}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
