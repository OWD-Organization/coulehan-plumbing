import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

const siteIndexable = process.env.SITE_INDEXABLE === "true";

/** Send the preview noindex header from the dev and preview servers. */
function noindexHeader() {
  const attach = (server) => {
    server.middlewares.use((_req, res, next) => {
      res.setHeader("X-Robots-Tag", "noindex, nofollow");
      next();
    });
  };
  return {
    name: "noindex-header",
    configureServer: attach,
    configurePreviewServer: attach,
  };
}

export default defineConfig({
  site: "https://coulehanplumbing.com",
  output: "static",
  compressHTML: true,
  trailingSlash: "always",
  integrations: [
    sitemap({
      filter: (page) => !/\/404(?:\.html)?\/?$/.test(new URL(page).pathname),
    }),
  ],
  server: {
    port: 3847,
    host: true,
    headers: {
      "X-Robots-Tag": "noindex, nofollow",
    },
  },
  vite: {
    define: {
      __COULEHAN_SITE_INDEXABLE__: siteIndexable ? "true" : "false",
    },
    plugins: [noindexHeader()],
  },
});
