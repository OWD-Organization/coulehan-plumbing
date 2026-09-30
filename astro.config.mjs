import { defineConfig } from "astro/config";

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
  server: {
    port: 3847,
    host: true,
    headers: {
      "X-Robots-Tag": "noindex, nofollow",
    },
  },
  vite: {
    plugins: [noindexHeader()],
  },
});
