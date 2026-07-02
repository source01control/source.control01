import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function shuffle<T>(items: readonly T[]): T[] {
  const result = [...items];

  for (let index = result.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
  }

  return result;
}

function galleryFilename(path: string): string {
  return path.split("/").pop()?.toLowerCase() ?? "";
}

function galleryStem(path: string): string {
  return galleryFilename(path).replace(/\.[^.]+$/, "").replace(/\s+/g, "");
}

function isEvent001Photo(path: string): boolean {
  return galleryStem(path) === "event001";
}

function isEvent002Photo(path: string): boolean {
  const stem = galleryStem(path);
  return stem === "event002" || stem === "event02";
}

function isPreferredEvent002Photo(path: string): boolean {
  return /^event\s+0*2\./i.test(galleryFilename(path));
}

export function orderGalleryPhotos(photos: readonly string[]): string[] {
  const first = photos.find(isEvent001Photo);
  const second =
    photos.find(
      (photo) => isEvent002Photo(photo) && isPreferredEvent002Photo(photo)
    ) ?? photos.find(isEvent002Photo);
  const pinned = new Set([first, second].filter(Boolean));
  const rest = photos.filter((photo) => !pinned.has(photo));

  return [
    ...(first ? [first] : []),
    ...(second ? [second] : []),
    ...shuffle(rest),
  ];
}
