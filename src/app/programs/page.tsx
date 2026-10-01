import React from "react";
import Link from "next/link";
import Image from "next/image";
import { PROGRAM_AREAS } from "@/lib/data/programs";
import { galleryHref } from "@/lib/data/gallery";
import { Images, MapPin, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Programs — 3 Core Thematic Focus Areas | DIN Pakistan",
  description:
    "Explore DIN Pakistan's 3 core thematic programs: Livelihoods & Food Security, Peace & Interfaith Harmony, and WASH & Community Infrastructure.",
};

export default function ProgramsIndexPage() {
  return (
    <div className="w-full font-sans bg-[#FBF9F5] text-neutral-900">

      {/* Header Banner */}
      <section className="bg-[#152238] text-white py-14 border-b border-[#253754]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white max-w-3xl">
            Our Core Thematic Programs
          </h1>
        </div>
      </section>

      {/* Editorial Alternating Stack Layout (No Grid Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {PROGRAM_AREAS.map((program, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <div
              key={program.slug}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white border border-[#E2DDD5] shadow-sm p-6 sm:p-10 ${isEven ? "" : "lg:flex-row-reverse"
                }`}
            >
              {/* Text Side */}
              <div className={`lg:col-span-7 space-y-5 ${isEven ? "" : "lg:order-2"}`}>
                <div className="flex items-center space-x-3">
                  <span className="font-heading font-extrabold text-3xl text-[#8C241D] font-mono">
                    0{idx + 1}
                  </span>
                  <div className="text-xs uppercase font-mono tracking-widest text-amber-700 font-bold">
                    {program.shortTitle} Pillar
                  </div>
                </div>

                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#152238]">
                  {program.title}
                </h2>

                <p className="text-sm text-neutral-700 leading-relaxed font-sans font-medium">
                  {program.tagline}
                </p>

                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {program.longDescription}
                </p>

                {/* Key Pillars Bullets */}
                <div className="pt-2">
                  <div className="text-xs font-mono uppercase font-bold text-[#152238] mb-2">Key Intervention Pillars:</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-700">
                    {program.keyPillars.map((pillar, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                        <span>{pillar}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Active Districts */}
                <div className="flex items-center space-x-2 text-xs font-mono text-neutral-500 pt-2">
                  <MapPin className="w-3.5 h-3.5 text-rose-600" />
                  <span>Active in: <strong className="text-neutral-800">{program.activeDistricts.join(", ")}</strong></span>
                </div>

                {/* Action Button */}
                <div className="pt-3">
                  <Link
                    href={galleryHref(program.galleryCategory)}
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-[#152238] hover:bg-[#8C241D] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
                  >
                    <Images className="w-4 h-4 text-amber-300" />
                    <span>View Work Gallery</span>
                  </Link>
                </div>
              </div>

              {/* Image Side */}
              <div className={`lg:col-span-5 relative min-h-[320px] bg-neutral-900 border border-[#E2DDD5] ${isEven ? "" : "lg:order-1"}`}>
                <Image
                  src={program.featuredImage}
                  alt={program.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-[#152238]/95 p-3 text-white text-xs border border-amber-500/30">
                  <div className="font-mono text-amber-400 text-[11px] font-bold">IMPACT METRIC</div>
                  <div className="font-heading font-bold text-base text-white">
                    {program.impactStats[0].value} {program.impactStats[0].label}
                  </div>
                </div>
              </div>

            </div>
          );
        })}
      </section>

    </div>
  );
}
