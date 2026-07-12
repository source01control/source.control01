import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";

export const metadata: Metadata = {
  title: "About",
  description:
    "SOURCE CONTROL — continuous evolution / underground electronic music from the UK.",
};

export default function AboutPage() {
  return (
    <div className="about-page w-full bg-black">
      <AboutHero />
    </div>
  );
}
