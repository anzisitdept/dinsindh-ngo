"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

interface FieldSlide {
  id: string;
  image: string;
  alt: string;
  caption: string;
}

const FIELD_SLIDES: FieldSlide[] = [
  {
    id: "field-1",
    image: "/h-1.jpeg",
    alt: "DIN Pakistan community field programme",
    caption: "Community mobilisation across Upper Sindh"
  },
  {
    id: "field-2",
    image: "/h-2.jpeg",
    alt: "DIN Pakistan clean water intervention",
    caption: "Clean water infrastructure for unserved villages"
  },
  {
    id: "field-3",
    image: "/h-3.jpeg",
    alt: "DIN Pakistan rural community programme",
    caption: "Community institutions across rural Sindh"
  },
  {
    id: "field-4",
    image: "/h-4.jpeg",
    alt: "DIN Pakistan community gathering",
    caption: "Community institutions & peace forums"
  },
  {
    id: "field-5",
    image: "/h-5.jpeg",
    alt: "DIN Pakistan livelihood support activity",
    caption: "Livelihood & micro-enterprise support"
  }
];

const AUTOPLAY_MS = 6000;

export default function FieldGalleryStrip() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const total = FIELD_SLIDES.length;

  const go = useCallback(
    (next: number) => setCurrent(((next % total) + total) % total),
    [total]
  );

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => setCurrent((prev) => (prev + 1) % total), AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [paused, total]);

  const active = FIELD_SLIDES[current];

  return (
    <section
      className="w-full bg-[#0E1726] border-b border-[#253754] font-sans"
      aria-roledescription="carousel"
      aria-label="DIN Pakistan field photography"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
          <div>
            <div className="text-amber-300 text-[11px] font-mono uppercase tracking-[0.2em] font-semibold">
              <span>In The Field</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mt-2">
              Life On The Ground, Across Sindh
            </h2>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <Link
              href="/gallery"
              className="text-xs font-semibold uppercase tracking-wider text-amber-400 hover:text-white flex items-center space-x-1"
            >
              <span>Full Photo Gallery</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => go(current - 1)}
                className="p-2 bg-[#152238] text-white hover:bg-[#8C241D] transition-colors border border-[#253754]"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => go(current + 1)}
                className="p-2 bg-[#152238] text-white hover:bg-[#8C241D] transition-colors border border-[#253754]"
                aria-label="Next photo"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Slide Viewport */}
        <div
          className="relative h-[240px] sm:h-[340px] lg:h-[440px] bg-[#152238] overflow-hidden"
          aria-live="polite"
        >
          {FIELD_SLIDES.map((slide, idx) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
              aria-hidden={idx !== current}
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover"
                priority={idx === 0}
              />
            </div>
          ))}
        </div>

        {/* Slide Dots */}
        <div className="flex items-center justify-center gap-2 mt-5">
          {FIELD_SLIDES.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => go(idx)}
              className={`h-1.5 rounded-full transition-all ${
                idx === current ? "w-7 bg-[#C68E2B]" : "w-1.5 bg-neutral-600 hover:bg-neutral-400"
              }`}
              aria-label={`Go to photo ${idx + 1}: ${slide.caption}`}
              aria-current={idx === current}
            />
          ))}
        </div>

        <p className="sr-only" aria-live="polite">
          Showing photo {current + 1} of {total}: {active.caption}
        </p>

      </div>
    </section>
  );
}
