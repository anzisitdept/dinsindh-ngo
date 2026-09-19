"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PROJECTS_DATA } from "@/lib/data/projects";
import { PROGRAM_AREAS } from "@/lib/data/programs";
import { Camera, MapPin, X, ZoomIn } from "lucide-react";

export default function GalleryPage() {
  const [selectedTag, setSelectedTag] = useState<string>("All");
  const [activeModalImage, setActiveModalImage] = useState<{ src: string; caption: string; district: string } | null>(null);

  // Collect gallery items from projects and programs
  const galleryItems = [
    {
      id: "gal-1",
      src: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?q=80&w=1200&auto=format&fit=crop",
      title: "Resilient Housing Construction",
      tag: "WASH & Infrastructure",
      district: "Shikarpur",
      caption: "Low-cost disaster-resilient shelter unit construction under IOM partnership."
    },
    {
      id: "gal-2",
      src: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200&auto=format&fit=crop",
      title: "Natak Mandali Street Theater",
      tag: "Peace & Harmony",
      district: "Shikarpur & Kashmor",
      caption: "Revival of indigenous Natak Mandali street drama for religious tolerance and youth peace."
    },
    {
      id: "gal-3",
      src: "https://images.unsplash.com/photo-1590682680695-43b964a3ae17?q=80&w=1200&auto=format&fit=crop",
      title: "Women Artisan Livelihood Center",
      tag: "Livelihoods",
      district: "Jacobabad",
      caption: "Sewing machine toolkits and Sindhi embroidery micro-shop handovers for flood survivors."
    },
    {
      id: "gal-4",
      src: "https://images.unsplash.com/photo-1547683905-f686c993aae5?q=80&w=1200&auto=format&fit=crop",
      title: "Monsoon Emergency Relief Deployment",
      tag: "Emergency Relief",
      district: "Dadu & Jacobabad",
      caption: "Tarpaulin emergency shelter kit and dry food distribution during flood relief."
    },
    {
      id: "gal-5",
      src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop",
      title: "Child-Friendly Safe Space (CFS)",
      tag: "Child Rights",
      district: "Sukkur",
      caption: "Psychosocial support tent set up for displaced children in flood relief camps."
    },
    {
      id: "gal-6",
      src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1200&auto=format&fit=crop",
      title: "Reactivated Closed School",
      tag: "Education",
      district: "Naushahro Feroze",
      caption: "Primary school reopening ceremony with community School Management Committees."
    },
    {
      id: "gal-7",
      src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
      title: "Mobile Emergency Medical Camp",
      tag: "Public Health",
      district: "Shikarpur",
      caption: "Free outpatient medical and maternal health consultations in remote villages."
    },
    {
      id: "gal-8",
      src: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop",
      title: "FAFEN Election Observation & Civic Workshop",
      tag: "Human Rights",
      district: "Ghotki",
      caption: "Voter CNIC registration for rural women and polling station monitoring."
    }
  ];

  const filteredGallery = selectedTag === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.tag === selectedTag);

  return (
    <div className="w-full font-sans bg-[#FBF9F5] text-neutral-900">
      
      {/* Header Banner */}
      <section className="bg-[#152238] text-white py-14 border-b border-[#253754]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs uppercase tracking-widest text-amber-400 font-mono font-semibold mb-2">
            Documentary Archive
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white max-w-3xl">
            Field Photography Gallery
          </h1>
          <p className="text-sm sm:text-base text-neutral-300 mt-2 max-w-2xl leading-relaxed">
            Real field documentation of DIN Pakistan’s community shelter projects, handpumps, peace rallies, and emergency relief operations across Sindh.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
        
        {/* Filter Chips */}
        <div className="flex flex-wrap items-center gap-2 pb-4 border-b border-[#E2DDD5]">
          <span className="text-xs font-mono text-neutral-500 uppercase mr-2">Filter Program:</span>
          {["All", "WASH & Infrastructure", "Peace & Harmony", "Livelihoods", "Emergency Relief", "Child Rights", "Education", "Public Health", "Human Rights"].map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all border ${
                selectedTag === tag
                  ? "bg-[#8C241D] text-white border-amber-500/40"
                  : "bg-white text-neutral-700 border-[#E2DDD5] hover:border-[#8C241D]"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Gallery Masonry / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModalImage({ src: item.src, caption: item.caption, district: item.district })}
              className="group relative bg-neutral-900 border border-[#E2DDD5] overflow-hidden cursor-pointer shadow-xs hover:shadow-lg transition-all"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#152238] via-transparent to-transparent opacity-80" />
              </div>

              <div className="absolute bottom-3 left-3 right-3 text-white space-y-1">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 bg-[#8C241D] text-amber-200 text-[10px] font-mono font-bold uppercase">
                    {item.tag}
                  </span>
                  <ZoomIn className="w-4 h-4 text-amber-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-heading font-bold text-sm text-white">{item.title}</h3>
                <div className="flex items-center space-x-1 text-[11px] text-neutral-300 font-mono">
                  <MapPin className="w-3 h-3 text-rose-400" />
                  <span>{item.district}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* Lightbox Modal */}
      {activeModalImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-[#152238] border border-amber-500/40 text-white p-4 space-y-4 shadow-2xl">
            <button
              onClick={() => setActiveModalImage(null)}
              className="absolute top-4 right-4 text-white p-2 bg-black/50 hover:bg-[#8C241D] rounded-full z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative h-[420px] w-full bg-neutral-950">
              <Image
                src={activeModalImage.src}
                alt={activeModalImage.caption}
                fill
                className="object-contain"
              />
            </div>

            <div className="p-4 bg-[#0E1726] border border-[#253754] text-xs font-sans space-y-1">
              <div className="text-amber-400 font-mono font-bold">Location: {activeModalImage.district}</div>
              <p className="text-neutral-200 text-sm">{activeModalImage.caption}</p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
