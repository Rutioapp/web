import type { MetadataRoute } from "next";

import { getPublishedBlogPosts } from "@/lib/blog";
import { absoluteUrl } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/blog", "/privacy", "/terms"];
  const blogRoutes = getPublishedBlogPosts().map((post) => `/blog/${post.slug}`);
  const allRoutes = [...routes, ...blogRoutes];

  return allRoutes.map((route) => ({
    url: absoluteUrl(route),
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.6
  }));
}
