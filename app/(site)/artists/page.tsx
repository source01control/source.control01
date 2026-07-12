import type { Metadata } from "next";
import { ArtistArchive } from "@/components/artists/ArtistArchive";

export const metadata: Metadata = {
  title: "Artists",
  description: "SOURCE CONTROL roster — Unkey, Mono Code, 0079, No Recall.",
};

export default function ArtistsPage() {
  return (
    <div className="w-full">
      <ArtistArchive />
    </div>
  );
}
