import React, { Suspense } from "react";
import Link from "next/link";
import FilterableProjectsArchive from "@/components/FilterableProjectsArchive";
import { CORE_OPERATING_DISTRICTS } from "@/lib/data/districts";
import { MapPin, ArrowUpRight, Heart, FolderKanban } from "lucide-react";

export const metadata = {
  title: "Ongoing Projects | DIN Pakistan",
  description:
    "Current active DIN Pakistan programmes across Shikarpur, Jacobabad, Kashmor & Kandhkot and Larkana — donor-funded multi-year projects, health infrastructure, WASH and livelihood initiatives in Upper Sindh.",
};

export default async function OngoingProjectsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { district } = await searchParams;
  const initialDistrict = typeof district === "string" ? district : undefined;

  return (
    <div className="w-full font-sans bg-[#FBF9F5] text-neutral-900">

      {/* Header Banner */}
      <section className="bg-[#152238] text-white py-14 border-b border-[#253754]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white max-w-3xl">
            Ongoing Projects
          </h1>
          <p className="text-sm sm:text-base text-neutral-300 mt-2 max-w-2xl leading-relaxed">
            Every intervention currently running on the ground across Shikarpur, Jacobabad,
            Kashmor &amp; Kandhkot, and Larkana — from donor-funded multi-year programmes to
            community infrastructure built with local village committees.
          </p>
        </div>
      </section>

      {/* Core District Strip */}
      <section className="bg-[#F5F3ED] border-b border-[#E2DDD5] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
            <div>
              <h2 className="font-heading text-2xl font-bold text-[#152238]">
                Districts With Active Work
              </h2>
              <div className="w-16 h-1 bg-[#8C241D] mt-2" />
            </div>
            <p className="text-xs text-neutral-600 max-w-md leading-relaxed">
              Select a district to filter the project register below.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {CORE_OPERATING_DISTRICTS.map((districtInfo) => {
              const filterTerm = districtInfo.name.split(" & ")[0];
              const isActiveFilter =
                initialDistrict?.toLowerCase() === filterTerm.toLowerCase();

              return (
                <Link
                  key={districtInfo.id}
                  href={`/where-we-work?district=${encodeURIComponent(filterTerm)}`}
                  className={`p-4 bg-white border shadow-xs transition-colors group ${
                    isActiveFilter
                      ? "border-[#8C241D] ring-1 ring-[#8C241D]"
                      : "border-[#E2DDD5] hover:border-[#8C241D]"
                  }`}
                >
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <span className="font-heading font-bold text-sm sm:text-base text-[#152238] group-hover:text-[#8C241D] transition-colors leading-snug">
                      {districtInfo.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-neutral-500 mt-2">
                    <FolderKanban className="w-3 h-3 text-amber-600" />
                    <span>{districtInfo.projectsCount} projects</span>
                    <span>•</span>
                    <span>{districtInfo.region}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Filterable Ongoing Project Register */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <Suspense fallback={<div className="p-8 text-center text-neutral-500 font-mono">Loading Ongoing Projects...</div>}>
          <FilterableProjectsArchive initialDistrict={initialDistrict} initialStatus="Ongoing" />
        </Suspense>
      </section>

      {/* Support CTA */}
      <section className="w-full bg-[#152238] text-white py-14 border-t border-[#253754]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-[#0E1726] border border-[#253754] px-6 sm:px-10 py-8">
            <div>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
                Fund an Ongoing Project
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 mt-2 max-w-xl leading-relaxed">
                Contributions go directly towards handpumps, shelter kits, incubators and
                micro-enterprise toolkits currently being delivered in the field.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link
                href="/donate"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#8C241D] hover:bg-[#A62F27] text-white font-bold uppercase tracking-wider text-[10px] transition-colors border border-amber-500/30"
              >
                <Heart className="w-3.5 h-3.5 fill-current" />
                <span>Donate Now</span>
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-amber-400/40 text-amber-300 hover:bg-amber-400 hover:text-[#152238] font-bold uppercase tracking-wider text-[10px] transition-colors"
              >
                <span>Full Project Archive</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
