import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const LOGO_SRC = "/images/Source Control art/01_3.png";

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
      <Image
        src={LOGO_SRC}
        alt="Source Control"
        fill
        priority
        sizes="96px"
        className="object-contain scale-[1.55] origin-center brightness-0 invert opacity-80 transition-opacity group-hover:opacity-100"
      />
    </Link>
  );
}
