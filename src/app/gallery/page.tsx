"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";
import { GALLERY_DATA, GALLERY_CATEGORIES, GalleryItem } from "@/lib/data/gallery";

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeImageSrc, setActiveImageSrc] = useState<string | null>(null);

  const filteredGallery = selectedCategory === "All"
    ? GALLERY_DATA
    : GALLERY_DATA.filter((item) => item.category === selectedCategory);

  return (
    <div className="w-full font-sans bg-[#FBF9F5] text-neutral-900 min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-[#152238] text-white py-12 border-b border-[#253754]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs uppercase tracking-widest text-amber-400 font-mono font-semibold mb-1">
            Photo Archive
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white max-w-3xl">
            Field Photography Gallery
          </h1>
          <p className="text-sm sm:text-base text-neutral-300 mt-2 max-w-2xl leading-relaxed">
            Filter field photos by project category across WASH, Public Health, Livelihoods, Business Startups, Fiddayah & Fitrana, and Community & Mosque initiatives.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        
        {/* Filter Toolbar */}
        <div className="flex flex-wrap items-center gap-2 pb-4 border-b border-[#E2DDD5]">
          <span className="text-xs font-mono text-neutral-500 uppercase mr-2 font-semibold">Filter:</span>
          {GALLERY_CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider transition-all border rounded-sm ${
                selectedCategory === category
                  ? "bg-[#8C241D] text-white border-amber-500/40 shadow-sm"
                  : "bg-white text-neutral-700 border-[#E2DDD5] hover:border-[#8C241D] hover:text-[#8C241D]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Clean Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveImageSrc(item.src)}
              className="group relative bg-neutral-900 border border-[#E2DDD5] overflow-hidden cursor-pointer shadow-xs hover:shadow-xl transition-all rounded-sm aspect-4/3"
            >
              <Image
                src={item.src}
                alt="Field photo"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Clean Hover Zoom Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="p-2 bg-[#8C241D] text-white rounded-full shadow-lg">
                  <ZoomIn className="w-5 h-5 text-amber-300" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* Clean Image Popup Modal */}
      {activeImageSrc && (
        <div
          onClick={() => setActiveImageSrc(null)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-[#0E1726] border border-[#253754] rounded-xl shadow-2xl overflow-hidden flex flex-col items-center p-2 sm:p-4"
          >
            {/* Close Button Header */}
            <div className="w-full flex justify-end pb-2">
              <button
                onClick={() => setActiveImageSrc(null)}
                className="p-1.5 bg-[#1F2E48] hover:bg-[#8C241D] text-white rounded-lg transition-colors border border-[#374866]"
                aria-label="Close photo"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Displayed Image */}
            <div className="relative w-full h-[65vh] sm:h-[75vh] bg-black rounded-lg overflow-hidden flex items-center justify-center">
              <Image
                src={activeImageSrc}
                alt="Expanded field photo"
                fill
                sizes="(max-width: 768px) 100vw, 80vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
