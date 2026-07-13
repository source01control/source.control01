import Image from "next/image";
import Link from "next/link";
import type { Artist } from "@/lib/data";
import { artistHref } from "@/lib/artists";
import { cn } from "@/lib/utils";

type ArtistArchiveCardProps = {
  artist: Artist;
  index: number;
};

function formatArtistName(name: string): string {
  if (name === "UNKEY") return "Unkey";
  if (
    name === "NO RECALL" ||
    name === "NoRecall" ||
    name === "noRecall"
  ) {
    return "noRecall";
  }
  if (name === "MONO CODE") return "Mono Code";
  return name;
}

export function ArtistArchiveCard({ artist, index }: ArtistArchiveCardProps) {
  const preserveCase = artist.slug === "no-recall";

  return (
    <article className="release-archive-card release-card group">
      <Link href={artistHref(artist.slug)} className="release-archive-tile">
        <div className="release-archive-artwork">
          {artist.image ? (
            <Image
              src={artist.image.url}
              alt={artist.image.alt}
              fill
              priority={index < 3}
              className="release-archive-img object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ) : null}
        </div>

        <div className="release-archive-meta">
          <h2
            className={cn(
              "font-[family-name:var(--font-display)] text-[clamp(1.5rem,2.4vw,2rem)] leading-[0.9] tracking-[0.04em] text-white",
              !preserveCase && "uppercase"
            )}
          >
            {formatArtistName(artist.name)}
          </h2>
        </div>
      </Link>
    </article>
  );
}
