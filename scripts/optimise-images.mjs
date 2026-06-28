import sharp from "sharp";
import fs from "fs";
import path from "path";

const IMAGE_DIR = "./public/images";

function walk(dir) {
  let results = [];
  for (const file of fs.readdirSync(dir)) {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);

    if (stat.isDirectory()) {
      results = results.concat(walk(full));
    } else if (/\.(jpg|jpeg|png)$/i.test(file)) {
      results.push(full);
    }
  }
  return results;
}

(async () => {
  const files = walk(IMAGE_DIR);

  for (const file of files) {
    const output = file.replace(/\.(jpg|jpeg|png)$/i, ".webp");

    if (fs.existsSync(output)) {
      console.log(`Skipping ${output}`);
      continue;
    }

    await sharp(file)
      .webp({
        quality: 82,
      })
      .toFile(output);

    console.log(`Created ${output}`);
  }

  console.log("\nFinished!");
})();
