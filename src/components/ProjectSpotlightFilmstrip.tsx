"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowUpRight, MapPin, X, ZoomIn } from "lucide-react";
import { SPOTLIGHT_PROJECTS, SpotlightProject } from "@/lib/data/spotlightProjects";

export default function ProjectSpotlightFilmstrip() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Modal Popup state
  const [activeModalProject, setActiveModalProject] = useState<SpotlightProject | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveModalProject(null);
      }
    };
    if (activeModalProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeModalProject]);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -420 : 420;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const openProjectGallery = (project: SpotlightProject) => {
    setActiveModalProject(project);
    setActiveImageIndex(0);
  };

  return (
    <section className="w-full bg-[#F5F3ED] py-16 border-b border-[#E2DDD5] text-neutral-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b-2 border-[#152238]">
          <div>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#152238]">
              Project Spotlight & Field Filmstrip
            </h2>
          </div>

          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Link
              href="/projects"
              className="text-xs font-semibold uppercase tracking-wider text-[#8C241D] hover:text-[#152238] flex items-center space-x-1"
            >
              <span>View All 18 Archive Projects</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => scroll("left")}
                className="p-2.5 bg-[#152238] text-white hover:bg-[#8C241D] transition-colors border border-neutral-700"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="p-2.5 bg-[#152238] text-white hover:bg-[#8C241D] transition-colors border border-neutral-700"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Film-strip Scroll Container */}
        <div
          ref={scrollContainerRef}
          className="flex space-x-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-6"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {SPOTLIGHT_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="shrink-0 w-[320px] sm:w-[380px] lg:w-[420px] bg-white border border-[#E2DDD5] shadow-sm snap-start group flex flex-col justify-between"
            >
              {/* Image Box - Click to Open Lightbox Popup */}
              <div
                onClick={() => openProjectGallery(project)}
                className="relative h-56 w-full overflow-hidden bg-neutral-900 border-b border-[#E2DDD5] cursor-pointer"
              >
                <Image
                  src={project.featuredImage}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 320px, (max-width: 1024px) 380px, 420px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Subtle Hover Zoom Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-2 text-white text-xs font-semibold uppercase tracking-wider">
                  <ZoomIn className="w-5 h-5 text-amber-400" />
                  <span>View Project Gallery</span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-2 text-xs font-mono text-neutral-500 mb-2">
                    <MapPin className="w-3.5 h-3.5 text-rose-600" />
                    <span>{project.district}</span>
                    <span>•</span>
                    <span className="text-[#8C241D] font-semibold">{project.programTitle}</span>
                  </div>

                  <h3
                    onClick={() => openProjectGallery(project)}
                    className="font-heading font-bold text-lg text-[#152238] group-hover:text-[#8C241D] transition-colors leading-snug cursor-pointer"
                  >
                    {project.title}
                  </h3>

                  <p className="text-xs text-neutral-600 mt-2.5 leading-relaxed line-clamp-3">
                    {project.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E2DDD5] flex items-center justify-between">
                  <span className="text-xs font-mono text-neutral-500">
                    Reach: <strong className="text-neutral-800">{project.beneficiaryCount}</strong>
                  </span>
                  <button
                    onClick={() => openProjectGallery(project)}
                    className="text-xs font-bold uppercase tracking-wider text-[#8C241D] hover:text-[#152238] flex items-center space-x-1"
                  >
                    <span>View Photos</span>
                    <ZoomIn className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Gallery Centered Modal Popup */}
      {activeModalProject && (
        <div
          onClick={() => setActiveModalProject(null)}
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
        >
          {/* Modal Container Card */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl max-h-[90vh] bg-[#0E1726] border border-[#253754] text-white rounded-xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-[#253754] bg-[#152238]">
              <div>
                <div className="text-[11px] font-mono text-amber-400 font-semibold uppercase tracking-wider">
                  {activeModalProject.programTitle} • {activeModalProject.district}
                </div>
                <h3 className="font-heading font-bold text-base sm:text-lg text-white truncate max-w-md sm:max-w-xl">
                  {activeModalProject.title}
                </h3>
              </div>

              <button
                onClick={() => setActiveModalProject(null)}
                className="p-1.5 bg-[#1F2E48] hover:bg-[#8C241D] text-white rounded-lg transition-colors border border-[#374866]"
                aria-label="Close Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Image Box */}
            <div className="relative w-full h-[320px] sm:h-[400px] bg-black flex items-center justify-center overflow-hidden">
              <Image
                src={activeModalProject.gallery[activeImageIndex]}
                alt={`${activeModalProject.title} photo ${activeImageIndex + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-contain"
              />

              {/* Arrow navigation if multiple photos */}
              {activeModalProject.gallery.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setActiveImageIndex((prev) =>
                        prev === 0 ? activeModalProject.gallery.length - 1 : prev - 1
                      )
                    }
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-[#0E1726]/80 text-white hover:bg-[#8C241D] rounded-full border border-[#253754] transition-colors"
                    aria-label="Previous Photo"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <button
                    onClick={() =>
                      setActiveImageIndex((prev) => (prev + 1) % activeModalProject.gallery.length)
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-[#0E1726]/80 text-white hover:bg-[#8C241D] rounded-full border border-[#253754] transition-colors"
                    aria-label="Next Photo"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            {/* Modal Footer: Gallery Image Thumbnails */}
            <div className="p-3 sm:p-4 bg-[#152238] border-t border-[#253754] flex items-center justify-between gap-4">
              {/* Thumbnail Strip */}
              <div className="flex space-x-2 overflow-x-auto py-1 max-w-full">
                {activeModalProject.gallery.map((imgSrc: string, idx: number) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-14 h-10 rounded overflow-hidden border-2 transition-all shrink-0 ${idx === activeImageIndex
                      ? "border-amber-400 scale-105 shadow-md"
                      : "border-[#253754] opacity-60 hover:opacity-100"
                      }`}
                  >
                    <Image src={imgSrc} alt={`Thumbnail ${idx + 1}`} fill sizes="56px" className="object-cover" />
                  </button>
                ))}
              </div>

              {/* Photo Counter */}
              {activeModalProject.gallery.length > 1 && (
                <span className="text-xs font-mono text-amber-400 font-semibold shrink-0">
                  {activeImageIndex + 1} / {activeModalProject.gallery.length}
                </span>
              )}
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
