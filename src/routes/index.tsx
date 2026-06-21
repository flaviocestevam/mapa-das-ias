import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

export const Route = createFileRoute("/")({
  server: {
    handlers: {
      GET: async () => {
        // Serve the static HTML page from /public
        const res = await fetch(new URL("/site.html", "http://localhost"));
        // Fallback: in worker runtime, public assets are served directly,
        // so we redirect to the static asset.
        if (!res.ok) {
          return Response.redirect("/site.html", 307);
        }
        const html = await res.text();
        return new Response(html, {
          headers: { "Content-Type": "text/html; charset=utf-8" },
        });
      },
    },
  },
});
