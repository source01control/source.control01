import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const eventsSource = fs.readFileSync(path.join(root, "lib/events.ts"), "utf8");
const galleryDirs = [
  ...eventsSource.matchAll(/galleryDir:\s*\n?\s*"([^"]+)"/g),
].map((match) => match[1]);

const imagePattern = /\.(jpe?g|png|webp)$/i;

function getStem(filename) {
  return filename.replace(/\.(jpe?g|png|webp)$/i, "");
}

function pickPreferredImage(files) {
  const webp = files.find((file) => /\.webp$/i.test(file));
  if (webp) return webp;

  return files.find((file) => /\.(jpe?g|png)$/i.test(file)) ?? files[0];
}

function getGalleryPhotos(galleryDir) {
  const relativeDir = galleryDir.replace(/^\/+/, "");
  const dirPath = path.join(root, "public", relativeDir);

  if (!fs.existsSync(dirPath)) return [];

  const imagesByStem = new Map();

  for (const file of fs.readdirSync(dirPath)) {
    if (!imagePattern.test(file)) continue;

    const stem = getStem(file);
    const group = imagesByStem.get(stem) ?? [];
    group.push(file);
    imagesByStem.set(stem, group);
  }

  return [...imagesByStem.entries()]
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
    .map(([, files]) => pickPreferredImage(files))
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
