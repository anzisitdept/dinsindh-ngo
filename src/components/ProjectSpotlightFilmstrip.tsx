"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { PROJECTS_DATA } from "@/lib/data/projects";
import { ChevronLeft, ChevronRight, ArrowUpRight, Calendar, MapPin, Award } from "lucide-react";

export default function ProjectSpotlightFilmstrip() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Take 5 key projects for the filmstrip
  const spotlightProjects = PROJECTS_DATA.slice(0, 6);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -420 : 420;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full bg-[#F5F3ED] py-16 border-b border-[#E2DDD5] text-neutral-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b-2 border-[#152238]">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#8C241D] font-bold font-mono mb-1">
              Field Operations & Track Record
            </div>
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
          {spotlightProjects.map((project) => (
            <div
              key={project.id}
              className="shrink-0 w-[320px] sm:w-[380px] lg:w-[420px] bg-white border border-[#E2DDD5] shadow-sm snap-start group flex flex-col justify-between"
            >
              {/* Image Box */}
              <div className="relative h-56 w-full overflow-hidden bg-neutral-900 border-b border-[#E2DDD5]">
                <Image
                  src={project.featuredImage}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Status & Donor Badge Overlay */}
                <div className="absolute top-3 left-3 flex items-center space-x-2">
                  <span
                    className={`px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-sm ${
                      project.status === "Ongoing" ? "bg-emerald-700" : "bg-[#152238]"
                    }`}
                  >
                    {project.status}
                  </span>
                  <span className="px-2.5 py-1 text-[11px] font-semibold bg-[#8C241D] text-white shadow-sm">
                    {project.years}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 bg-[#152238]/90 text-amber-300 text-xs px-3 py-1 font-mono flex items-center justify-between">
                  <span className="truncate">Donor: {project.donor}</span>
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

                  <h3 className="font-heading font-bold text-lg text-[#152238] group-hover:text-[#8C241D] transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs text-neutral-600 mt-2.5 leading-relaxed line-clamp-3">
                    {project.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E2DDD5] flex items-center justify-between">
                  <span className="text-xs font-mono text-neutral-500">
                    Target: <strong className="text-neutral-800">{project.beneficiaryCount}</strong>
                  </span>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center space-x-1 text-xs font-bold uppercase tracking-wider text-[#152238] group-hover:text-[#8C241D] transition-colors"
                  >
                    <span>Read Record</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
