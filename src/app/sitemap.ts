import { MetadataRoute } from "next";
import { PROGRAM_AREAS } from "@/lib/data/programs";
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
    "/partners",
    "/gallery",
    "/contact"
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic program routes
  const programRoutes = PROGRAM_AREAS.map((prog) => ({
    url: `${baseUrl}/programs/${prog.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Dynamic project routes
  const projectRoutes = PROJECTS_DATA.map((proj) => ({
    url: `${baseUrl}/projects/${proj.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...programRoutes, ...projectRoutes];
}
