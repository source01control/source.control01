"use client";

import { cn } from "@/lib/utils";

type MarqueeBannerProps = {
  text: string;
  className?: string;
  speed?: number;
};

export function MarqueeBanner({ text, className, speed = 40 }: MarqueeBannerProps) {
  const items = Array(4).fill(text);

  return (
    <div
      className={cn(
        "marquee-banner overflow-hidden border-y border-white/20 bg-black py-4",
        className
      )}
      aria-hidden
    >
      <div
        className="marquee-banner__track flex whitespace-nowrap"
        style={{ animationDuration: `${speed}s` }}
      >
        {items.map((item, i) => (
          <span
            key={i}
            className="marquee-banner__item font-[family-name:var(--font-display)] text-4xl sm:text-5xl tracking-[0.15em] text-white/15 px-8"
          >
            {item}
          </span>
        ))}
        {items.map((item, i) => (
          <span
            key={`dup-${i}`}
            className="marquee-banner__item font-[family-name:var(--font-display)] text-4xl sm:text-5xl tracking-[0.15em] text-white/15 px-8"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
