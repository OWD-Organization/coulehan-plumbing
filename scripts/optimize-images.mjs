/**
 * Resize real job photos and the logo for the web.
 * EXIF (including GPS) is stripped. No upscaling. Mild sharpen only.
 * A very dark frame can get a small brightness lift, and that file is logged.
 *
 * Usage: ASSET_SRC=/path/to/coulehan node scripts/optimize-images.mjs
 */
import { mkdir, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const SRC = process.env.ASSET_SRC || "/tmp/coulehan-src/coulehan";
const OUT = path.resolve("public/media");
const MANIFEST_PATH = path.resolve("src/data/manifest.json");

const WIDTHS = [720, 1600];

async function writeVariants(input, outBase, widths) {
  const rotated = sharp(input).rotate();
  const meta = await rotated.metadata();
  let buf = await rotated.toBuffer();

  const stats = await sharp(buf).stats();
  const mean =
    (stats.channels[0].mean + stats.channels[1].mean + stats.channels[2].mean) /
    3;
  if (mean < 48) {
    buf = await sharp(buf).modulate({ brightness: 1.08 }).toBuffer();
    console.log(`  exposure +8% (mean ${mean.toFixed(1)}) ${outBase}`);
  }

  const sourceWidth = meta.width ?? WIDTHS[0];
  const targets = [...new Set(widths.map((w) => Math.min(w, sourceWidth)))].sort(
    (a, b) => a - b,
  );

  const variants = [];
  for (const width of targets) {
    const pipeline = sharp(buf)
      .resize({ width, withoutEnlargement: true })
      .sharpen({ sigma: 0.4, m1: 0.35, m2: 0.2 });
    const jpg = await pipeline
      .clone()
      .jpeg({ quality: 80, mozjpeg: true })
      .toFile(`${outBase}-${width}.jpg`);
    await pipeline.clone().webp({ quality: 76 }).toFile(`${outBase}-${width}.webp`);
    await pipeline
      .clone()
      .avif({ quality: 45, effort: 4 })
      .toFile(`${outBase}-${width}.avif`);
    variants.push({ w: jpg.width, h: jpg.height });
  }
  return variants;
}

async function writeGraphic(input, outBase, width) {
  const pipeline = sharp(input).rotate().resize({
    width,
    withoutEnlargement: true,
  });
  const jpg = await pipeline.clone().jpeg({ quality: 86, mozjpeg: true }).toBuffer({ resolveWithObject: true });
  const actual = jpg.info.width;
  await writeFile(`${outBase}-${actual}.jpg`, jpg.data);
  await pipeline.clone().webp({ quality: 82 }).toFile(`${outBase}-${actual}.webp`);
  await pipeline.clone().avif({ quality: 50, effort: 4 }).toFile(`${outBase}-${actual}.avif`);
  return { w: jpg.info.width, h: jpg.info.height };
}

const manifest = {};

await mkdir(path.join(OUT, "brand"), { recursive: true });

const logoPath = path.join(SRC, "brand/logo.jpg");
manifest.brand = {};
manifest.brand.logo = {
  variants: [
    await writeGraphic(logoPath, path.join(OUT, "brand/logo"), 256),
    await writeGraphic(logoPath, path.join(OUT, "brand/logo"), 512),
  ],
};

// Drop + pipes, cropped from the square profile logo. Wordmark stays on the full logo.
const markBuf = await sharp(logoPath)
  .extract({ left: 296, top: 7, width: 411, height: 376 })
  .toBuffer();
manifest.brand.mark = {
  variants: [await writeGraphic(markBuf, path.join(OUT, "brand/mark"), 480)],
};

manifest.brand.cover = {
  variants: await writeVariants(
    path.join(SRC, "brand/cover.jpg"),
    path.join(OUT, "brand/cover"),
    [960, 1600],
  ),
};

const jobsDir = path.join(SRC, "jobs");
const jobs = (await readdir(jobsDir, { withFileTypes: true }))
  .filter((d) => d.isDirectory())
  .map((d) => d.name);

for (const folder of jobs) {
  const photos = (await readdir(path.join(jobsDir, folder)))
    .filter((name) => /^\d+\.jpe?g$/i.test(name))
    .sort();
  if (photos.length === 0) continue;
  const slug = folder.replace(/^\d{2}-\d{4}-\d{2}-\d{2}-/, "");
  const dest = path.join(OUT, "jobs", slug);
  await mkdir(dest, { recursive: true });
  manifest[slug] = {};
  for (const photo of photos) {
    const id = path.basename(photo, path.extname(photo));
    console.log(`${slug}/${id}`);
    manifest[slug][id] = {
      variants: await writeVariants(
        path.join(jobsDir, folder, photo),
        path.join(dest, id),
        WIDTHS,
      ),
    };
  }
}

const touch = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180">
  <rect width="180" height="180" rx="40" fill="#182033"/>
  <path fill="#4199E1" d="M90 28c0 0-40 46-40 72a40 40 0 0 0 80 0c0-26-40-72-40-72z"/>
  <path fill="#ffffff" fill-opacity="0.35" d="M74 108c2-16 14-34 18-42 2 12 0 24-4 34-4 8-11 12-14 8z"/>
</svg>`;
await sharp(Buffer.from(touch)).png().toFile(path.resolve("public/apple-touch-icon.png"));

await mkdir(path.dirname(MANIFEST_PATH), { recursive: true });
await writeFile(MANIFEST_PATH, JSON.stringify(manifest, null, 2));
console.log("Wrote", MANIFEST_PATH);
