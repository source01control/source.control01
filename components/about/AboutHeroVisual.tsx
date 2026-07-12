"use client";

import Image from "next/image";
import { ABOUT_HERO_IMAGE } from "@/lib/about";
import { cn } from "@/lib/utils";

type AboutHeroVisualProps = {
  className?: string;
};

export function AboutHeroVisual({ className }: AboutHeroVisualProps) {
  return (
    <div className={cn("about-hero-glitch", className)} aria-hidden="true">
      <Image
        src={ABOUT_HERO_IMAGE}
        alt=""
        fill
        priority
        sizes="(max-width: 768px) 100vw, 460px"
        className="about-hero-glitch__image"
      />
      <span className="about-hero-glitch__slice about-hero-glitch__slice--a" />
      <span className="about-hero-glitch__slice about-hero-glitch__slice--b" />
      <span className="about-hero-glitch__rgb" />
      <span className="about-hero-glitch__scan" />
      <span className="about-hero-glitch__noise" />
    </div>
  );
}
