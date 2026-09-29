import React from "react";
import GalleryBrowser from "@/components/GalleryBrowser";
import { isGalleryFilter, GalleryFilter } from "@/lib/data/gallery";

export const metadata = {
  title: "Field Photo Gallery | DIN Pakistan",
  description:
    "Filterable field photography across WASH & Infrastructure, Public Health, Livelihoods, Business Startups, Fiddayah & Fitrana, and Community & Mosque initiatives delivered by DIN Pakistan across Sindh.",
};

export default async function GalleryPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { category } = await searchParams;
  const requested = typeof category === "string" ? category : undefined;
  const initialCategory: GalleryFilter =
    requested && isGalleryFilter(requested) ? requested : "All";

  return <GalleryBrowser initialCategory={initialCategory} />;
}
