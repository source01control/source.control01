import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EventDetail } from "@/components/events/EventDetail";
import { getEventGalleryPhotos } from "@/lib/event-gallery";
import { events, getEventBySlug } from "@/lib/events";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) return { title: "Not Found" };

  return {
    title: event.title,
    description: `${event.title} — ${event.date}`,
    openGraph: {
      title: `${event.title} | SOURCE CONTROL`,
      description: `${event.title} — ${event.date}`,
      type: "website",
      images: [{ url: event.artwork, alt: event.alt }],
    },
  };
}

export default async function EventPage({ params }: Props) {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) notFound();

  const galleryPhotos = event.galleryDir
    ? getEventGalleryPhotos(event.galleryDir)
    : [];

  return (
    <div className="w-full">
      <EventDetail event={event} galleryPhotos={galleryPhotos} />
    </div>
  );
}
