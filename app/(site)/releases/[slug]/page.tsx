import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ReleaseDetail } from "@/components/releases/ReleaseDetail";
import { getReleaseBySlug, releases } from "@/lib/releases";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return releases.map((release) => ({ slug: release.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const release = getReleaseBySlug(slug);

  if (!release) return { title: "Not Found" };

  const metaDescription = `${release.artist} — ${release.title} (${release.catalog})`;

  return {
    title: release.title,
    description: metaDescription,
    openGraph: {
      title: `${release.title} | ${release.artist}`,
      description: metaDescription,
      type: "website",
      images: [{ url: release.image, alt: release.alt }],
    },
  };
}

export default async function ReleasePage({ params }: Props) {
  const { slug } = await params;
  const release = getReleaseBySlug(slug);

  if (!release) notFound();

  return (
    <div className="w-full">
      <ReleaseDetail release={release} />
    </div>
  );
}
