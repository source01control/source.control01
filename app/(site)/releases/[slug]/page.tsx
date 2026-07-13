import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { ReleaseDetail } from "@/components/releases/ReleaseDetail";
import { TechTwoWhiteRabbit } from "@/components/releases/TechTwoWhiteRabbit";
import { WhiteRabbitPageEnter } from "@/components/releases/WhiteRabbitPageEnter";
import { getReleaseBySlug, releases } from "@/lib/releases";
import {
  WHITE_RABBIT_SLUG,
  whiteRabbitRelease,
} from "@/lib/secret-release";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return [
    ...releases.map((release) => ({ slug: release.slug })),
    { slug: WHITE_RABBIT_SLUG },
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const release =
    slug === WHITE_RABBIT_SLUG
      ? whiteRabbitRelease
      : getReleaseBySlug(slug);

  if (!release) return { title: "Not Found" };

  const metaDescription = `${release.artist} — ${release.title} (${release.catalog})`;

  return {
    title: release.title,
    description: metaDescription,
    robots: slug === WHITE_RABBIT_SLUG ? { index: false, follow: false } : undefined,
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
  const release =
    slug === WHITE_RABBIT_SLUG
      ? whiteRabbitRelease
      : getReleaseBySlug(slug);

  if (!release) notFound();

  const detail = <ReleaseDetail release={release} />;

  return (
    <div className="w-full">
      {release.id === "sc-005" ? (
        <TechTwoWhiteRabbit>{detail}</TechTwoWhiteRabbit>
      ) : release.id === "sc-secret-white-rabbit" ? (
        <Suspense
          fallback={
            <div className="white-rabbit-page-enter white-rabbit-page-enter--intro min-h-screen bg-black" />
          }
        >
          <WhiteRabbitPageEnter>{detail}</WhiteRabbitPageEnter>
        </Suspense>
      ) : (
        detail
      )}
    </div>
  );
}
