import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const eventsSource = fs.readFileSync(path.join(root, "lib/events.ts"), "utf8");
const galleryDirs = [
  ...eventsSource.matchAll(/galleryDir:\s*\n?\s*"([^"]+)"/g),
].map((match) => match[1]);

const imagePattern = /\.(jpe?g|png|webp)$/i;

function getGalleryPhotos(galleryDir) {
  const relativeDir = galleryDir.replace(/^\/+/, "");
  const dirPath = path.join(root, "public", relativeDir);

  if (!fs.existsSync(dirPath)) return [];

  return fs
    .readdirSync(dirPath)
    .filter((file) => imagePattern.test(file))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((file) => `/${relativeDir}/${file}`.replace(/\/{2,}/g, "/"));
}

const manifest = Object.fromEntries(
  galleryDirs.map((galleryDir) => [galleryDir, getGalleryPhotos(galleryDir)])
);

const outputPath = path.join(root, "lib/event-gallery-manifest.json");
fs.writeFileSync(outputPath, `${JSON.stringify(manifest, null, 2)}\n`);

const totalPhotos = Object.values(manifest).reduce(
  (count, photos) => count + photos.length,
  0
);

console.log(
  `Generated ${outputPath} with ${totalPhotos} photo(s) across ${galleryDirs.length} gallery dir(s).`
);
