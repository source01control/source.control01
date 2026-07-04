import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const SITE_LOGO_SRC = "/images/source-control-assets/01_3.webp";

type SiteLogoMarkProps = {
  className?: string;
  sizes?: string;
  alt?: string;
  priority?: boolean;
};

export function SiteLogoMark({
  className,
  sizes = "96px",
  alt = "",
  priority = false,
}: SiteLogoMarkProps) {
  return (
    <Image
      src={SITE_LOGO_SRC}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      className={cn(
        "object-contain scale-[1.55] origin-center brightness-0 invert",
        className
      )}
    />
  );
}

type SiteLogoProps = {
  onClick?: () => void;
  className?: string;
};

export function SiteLogo({ onClick, className }: SiteLogoProps) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className={cn(
        "group relative block h-20 sm:h-24 aspect-square shrink-0 overflow-hidden transition-opacity",
        className
      )}
    >
      <SiteLogoMark
        alt="Source Control"
        priority
        className="opacity-80 transition-opacity group-hover:opacity-100"
      />
    </Link>
  );
}
