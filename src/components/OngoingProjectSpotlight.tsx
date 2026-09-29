"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  HardHat,
  MapPin,
  Building2,
  ArrowUpRight
} from "lucide-react";
import { FEATURED_ONGOING_INITIATIVE } from "@/lib/data/spotlightProjects";

export default function OngoingProjectSpotlight() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const initiative = FEATURED_ONGOING_INITIATIVE;
  const slides = initiative.slides;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="w-full bg-[#FBF9F5] py-16 border-b border-[#E2DDD5] text-neutral-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-8 pb-4 border-b-2 border-[#152238]">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#152238] text-amber-300 border border-amber-500/30 px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Current Ongoing Project</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#152238] leading-tight">
              {initiative.title}
            </h2>
            <div className="flex items-center gap-1.5 text-xs font-mono text-neutral-600 mt-2">
              <MapPin className="w-3.5 h-3.5 text-rose-600 shrink-0" />
              <span>{initiative.location}</span>
            </div>
          </div>
        </div>

        {/* Project Meta Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#E2DDD5] border border-[#E2DDD5] mb-8">
          <div className="bg-white p-4 flex items-start gap-3">
            <HardHat className="w-5 h-5 text-amber-500 shrink-0" />
            <div>
              <div className="text-[10px] font-mono uppercase text-neutral-500">Project Status</div>
              <div className="text-sm font-bold text-[#152238]">{initiative.status}</div>
            </div>
          </div>
          <div className="bg-white p-4 flex items-start gap-3">
            <Building2 className="w-5 h-5 text-rose-600 shrink-0" />
            <div>
              <div className="text-[10px] font-mono uppercase text-neutral-500">Thematic Area</div>
              <div className="text-sm font-bold text-[#152238]">{initiative.programArea}</div>
            </div>
          </div>
        </div>

        {/* Solo Project Layout — Slideshow (8 cols) + Brief (4 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          <div className="lg:col-span-8 group">
            <div className="relative w-full h-[300px] sm:h-[420px] lg:h-[520px] bg-[#0E1726] border border-[#E2DDD5] overflow-hidden">

              {slides.map((slide, index) => (
                <div
                  key={slide.src}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                    }`}
                >
                  <Image
                    src={slide.src}
                    alt={`Bilal Jamia Masjid construction progress — ${slide.caption}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className="object-cover"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E1726] via-transparent to-transparent opacity-80" />

                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-amber-400">
                      Stage {String(index + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
                    </div>
                    <div className="font-heading font-bold text-sm sm:text-base mt-0.5 text-white">
                      {slide.caption}
                    </div>
                  </div>
                </div>
              ))}

              <button
                onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2.5 bg-[#0E1726]/80 text-white hover:bg-[#8C241D] transition-colors border border-[#253754] opacity-80 group-hover:opacity-100"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2.5 bg-[#0E1726]/80 text-white hover:bg-[#8C241D] transition-colors border border-[#253754] opacity-80 group-hover:opacity-100"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Thumbnail Selector Strip */}
            <div className="grid grid-cols-4 gap-2 mt-2">
              {slides.map((slide, index) => (
                <button
                  key={slide.src}
                  onClick={() => setCurrentSlide(index)}
                  className={`relative h-16 sm:h-20 overflow-hidden border-2 transition-all ${index === currentSlide
                      ? "border-[#8C241D] opacity-100"
                      : "border-[#E2DDD5] opacity-55 hover:opacity-90"
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                >
                  <Image src={slide.src} alt={slide.caption} fill sizes="25vw" className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 bg-white border border-[#E2DDD5] shadow-sm p-6 sm:p-8 space-y-5">
            <div>
              <div className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#8C241D]">
                Project Brief
              </div>
              <div className="w-12 h-1 bg-[#8C241D] mt-2" />
            </div>

            <p className="text-sm text-neutral-700 leading-relaxed">
              {initiative.summary}
            </p>

            <ul className="space-y-2.5 text-xs text-neutral-700">
              {initiative.progress.map((step, index) => (
                <li key={step} className="flex items-start gap-2.5">
                  <span className="text-[#8C241D] font-bold shrink-0">{String(index + 1).padStart(2, "0")}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-[#E2DDD5]">
              <div className="text-[10px] font-mono uppercase text-neutral-500">Implementing Organization</div>
              <div className="text-sm font-bold text-[#152238] mt-0.5">{initiative.implementingBody}</div>
            </div>

            <Link
              href="/donate"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#8C241D] hover:bg-[#A62F27] text-white font-bold uppercase tracking-wider text-xs shadow-md transition-colors"
            >
              <span>Support This Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
