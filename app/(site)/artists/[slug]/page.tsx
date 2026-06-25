import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArtistDetail } from "@/components/artists/ArtistDetail";
import { artists, getArtistBySlug } from "@/lib/artists";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return artists.map((artist) => ({ slug: artist.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const artist = getArtistBySlug(slug);

  if (!artist) return { title: "Not Found" };

  return {
    title: artist.name,
    description: artist.bio,
    openGraph: {
      title: `${artist.name} | SOURCE CONTROL`,
      description: artist.bio,
      type: "profile",
      images: artist.image
        ? [{ url: artist.image.url, alt: artist.image.alt }]
        : undefined,
    },
  };
}

export default async function ArtistPage({ params }: Props) {
  const { slug } = await params;
  const artist = getArtistBySlug(slug);

  if (!artist) notFound();

  return (
    <div className="w-full">
      <ArtistDetail artist={artist} />
    </div>
  );
}
