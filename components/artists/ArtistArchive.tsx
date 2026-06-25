import { artists } from "@/lib/data";
import { ArtistArchiveCard } from "./ArtistArchiveCard";

export function ArtistArchive() {
  return (
    <section
      className="releases-grid w-full px-4 sm:px-6 lg:px-4 pt-20 sm:pt-24 pb-16"
      aria-label="Artist Roster"
    >
      {artists.map((artist, i) => (
        <ArtistArchiveCard key={artist.id} artist={artist} index={i} />
      ))}
    </section>
  );
}
