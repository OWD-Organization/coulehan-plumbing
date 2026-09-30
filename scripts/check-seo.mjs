import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

function walk(dir, acc = []) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) walk(full, acc);
    else acc.push(full);
  }
  return acc;
}

const files = walk("dist");
const html = files.filter((file) => file.endsWith(".html"));
let fail = 0;

for (const file of html) {
  const text = readFileSync(file, "utf8");
  if (!text.includes('name="robots" content="noindex, nofollow"')) {
    console.error("Missing robots meta:", file);
    fail += 1;
  }
  if (text.includes("lorem") || text.includes("Lorem ipsum")) {
    console.error("Placeholder copy:", file);
    fail += 1;
  }
}

const robots = readFileSync("public/robots.txt", "utf8");
if (!/Disallow:\s*\//.test(robots)) {
  console.error("robots.txt is missing Disallow: /");
  fail += 1;
}

if (files.some((file) => file.endsWith("sitemap.xml"))) {
  console.error("Unexpected sitemap in dist");
  fail += 1;
}

const vercel = JSON.parse(readFileSync("vercel.json", "utf8"));
const header = vercel.headers?.[0]?.headers?.find((item) => item.key === "X-Robots-Tag");
if (header?.value !== "noindex, nofollow") {
  console.error("vercel.json is missing X-Robots-Tag");
  fail += 1;
}

if (fail) {
  console.error(`SEO check failed (${fail})`);
  process.exit(1);
}

console.log(`SEO check ok (${html.length} HTML files, no sitemap)`);
