import React from "react";
import Link from "next/link";
import InteractiveHero from "@/components/InteractiveHero";
import FieldGalleryStrip from "@/components/FieldGalleryStrip";
import OngoingProjectSpotlight from "@/components/OngoingProjectSpotlight";
import ProjectSpotlightFilmstrip from "@/components/ProjectSpotlightFilmstrip";
import WhereWeWorkSection from "@/components/WhereWeWorkSection";
import { PROGRAM_AREAS } from "@/lib/data/programs";
import { PARTNERS_DATA } from "@/lib/data/partners";
import { ArrowUpRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="w-full font-sans bg-[#FBF9F5]">
      
      {/* 1. Asymmetric Interactive Hero — Executive Message */}
      <InteractiveHero />

      {/* 2. Field Photography Slideshow */}
      <FieldGalleryStrip />

      {/* 3. Current Ongoing Project — Solo Spotlight */}
      <OngoingProjectSpotlight />

      {/* 4. Featured Programs */}
      <section className="w-full bg-[#152238] text-white py-16 border-b border-[#253754]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-[#253754]">
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                Core Program Pillars
              </h2>
            </div>
            <Link
              href="/programs"
              className="mt-4 md:mt-0 text-xs font-semibold uppercase tracking-wider text-amber-400 hover:text-white flex items-center space-x-1"
            >
              <span>Explore All {PROGRAM_AREAS.length} Program Areas</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Editorial List (Large Number + Program Title + Description) */}
          <div className="divide-y divide-[#253754]">
            {PROGRAM_AREAS.slice(0, 5).map((program, idx) => (
              <div
                key={program.slug}
                className="py-6 sm:py-8 group hover:bg-[#1A2840] transition-colors px-4 -mx-4 grid grid-cols-1 lg:grid-cols-12 gap-4 items-center"
              >
                {/* Number & Title */}
                <div className="lg:col-span-5 flex items-baseline space-x-4">
                  <span className="font-heading font-extrabold text-2xl sm:text-3xl text-rose-500 font-mono">
                    0{idx + 1}
                  </span>
                  <Link
                    href={`/programs/${program.slug}`}
                    className="font-heading font-bold text-xl sm:text-2xl text-white group-hover:text-amber-400 transition-colors"
                  >
                    {program.title}
                  </Link>
                </div>

                {/* Description */}
                <div className="lg:col-span-5 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {program.description}
                </div>

                {/* Arrow Action */}
                <div className="lg:col-span-2 text-left lg:text-right pt-2 lg:pt-0">
                  <Link
                    href={`/programs/${program.slug}`}
                    className="inline-flex items-center space-x-1 text-xs font-bold uppercase tracking-wider text-amber-400 group-hover:text-white transition-colors"
                  >
                    <span>Inspect Scope</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Project Spotlight Filmstrip */}
      <ProjectSpotlightFilmstrip />

      {/* 6. Where We Work - Core Operating Districts */}
      <WhereWeWorkSection />

      {/* 7. Donor & CBO Registry Strip */}
      <section className="w-full bg-[#F5F3ED] py-14 border-b border-[#E2DDD5] text-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-8">
            <h3 className="inline-block font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#152238] leading-tight relative pb-3">
              Our Donors
              <span className="absolute left-0 bottom-0 h-1 w-full bg-[#8C241D]" />
              <span className="absolute left-0 bottom-0 h-1 w-1/3 bg-amber-400" />
            </h3>
          </div>

          {/* Typographic Donor Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {PARTNERS_DATA.map((partner) => (
              <div
                key={partner.id}
                className="p-3 bg-white border border-[#E2DDD5] text-center flex flex-col justify-center items-center shadow-xs hover:border-[#8C241D] transition-colors"
              >
                <div className="font-heading font-extrabold text-xs sm:text-sm text-[#152238] uppercase tracking-wide">
                  {partner.logoText}
                </div>
                <div className="text-[9px] text-neutral-500 font-mono mt-0.5">
                  {partner.category}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-6 text-xs font-mono text-neutral-500">
            Partnering with {PARTNERS_DATA.length} institutional donors, UN agencies and government departments.
          </div>

        </div>
      </section>

    </div>
  );
}
