import type { APIRoute } from "astro";
import { siteIndexable } from "../data/indexable";

export const prerender = true;

const body = siteIndexable
  ? "User-agent: *\nAllow: /\n\nSitemap: https://coulehanplumbing.com/sitemap-index.xml\n"
  : "User-agent: *\nDisallow: /\n";

export const GET: APIRoute = () =>
  new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
