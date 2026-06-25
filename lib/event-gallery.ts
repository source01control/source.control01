import manifest from "@/lib/event-gallery-manifest.json";

export function getEventGalleryPhotos(galleryDir: string): string[] {
  const normalizedDir = galleryDir.replace(/\/{2,}/g, "/");
  return manifest[normalizedDir as keyof typeof manifest] ?? [];
}
