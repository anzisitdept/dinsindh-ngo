import { MetadataRoute } from "next";
import { PROJECTS_DATA } from "@/lib/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://dinsindh.com";

  // Static routes
  const staticRoutes = [
    "",
    "/about",
    "/about/governance",
    "/about/legal",
    "/programs",
    "/projects",
    "/where-we-work",
    "/gallery",
    "/contact"
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic project routes
  const projectRoutes = PROJECTS_DATA.map((proj) => ({
    url: `${baseUrl}/projects/${proj.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...projectRoutes];
}
