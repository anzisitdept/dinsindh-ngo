import React from "react";
import Link from "next/link";
import { PROJECTS_DATA } from "@/lib/data/projects";
import OngoingProjectCardImage from "@/components/OngoingProjectCardImage";
import { Building2, CalendarRange, Users, Images } from "lucide-react";

const ONGOING_PROJECTS = PROJECTS_DATA.filter((p) => p.status === "Ongoing");

function galleryHref(category?: string) {
  return category && category !== "All"
    ? `/gallery?category=${encodeURIComponent(category)}`
    : "/gallery";
}

export default function OngoingProjectsList() {
  return (
    <div className="w-full font-sans text-neutral-900 space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
        <div>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#152238]">
            Active Initiatives
          </h2>
          <div className="w-16 h-1 bg-[#8C241D] mt-2" />
        </div>
        <p className="text-xs font-mono text-neutral-600">
          {ONGOING_PROJECTS.length} live project records
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ONGOING_PROJECTS.map((project, index) => (
          <article
            key={project.id}
            className="group bg-white border border-[#E2DDD5] shadow-sm flex flex-col overflow-hidden transition-colors hover:border-[#8C241D]"
          >
            {/* Title Heading — above the project image */}
            <div className="p-5 sm:p-6 border-b border-[#E2DDD5]">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-widest text-white bg-emerald-700">
                  Ongoing
                </span>
              </div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-amber-700">
                {project.programTitle}
              </div>
              <h3 className="font-heading font-bold text-lg sm:text-xl text-[#152238] leading-snug mt-1">
                {project.title}
              </h3>
            </div>

            {/* Project Image */}
            <OngoingProjectCardImage
              images={project.featuredImages ?? [project.featuredImage]}
              alt={project.title}
              district={project.district}
              priority={index === 0}
            />

            <div className="p-5 sm:p-6 flex flex-col flex-grow space-y-4">
              <p className="text-sm text-neutral-700 leading-relaxed">{project.fullNarrative}</p>

              <ul className="space-y-2 text-xs text-neutral-700">
                {project.keyAchivements.map((achievement) => (
                  <li key={achievement} className="flex items-start gap-2">
                    <span className="text-[#8C241D] font-bold shrink-0">•</span>
                    <span className="leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-[#E2DDD5] text-xs">
                <div className="flex items-start gap-2">
                  <Building2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[10px] font-mono uppercase text-neutral-500">Funding Partner</div>
                    <div className="font-semibold text-[#152238] leading-snug">{project.donor}</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CalendarRange className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[10px] font-mono uppercase text-neutral-500">Duration</div>
                    <div className="font-semibold text-[#152238] leading-snug">{project.duration}</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Users className="w-4 h-4 text-[#8C241D] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[10px] font-mono uppercase text-neutral-500">Beneficiaries</div>
                    <div className="font-semibold text-[#152238] leading-snug">{project.beneficiaryCount}</div>
                  </div>
                </div>
              </div>

              <div className="pt-2 mt-auto">
                <Link
                  href={galleryHref(project.galleryCategory)}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#152238] hover:bg-[#8C241D] text-white font-bold uppercase tracking-wider text-[10px] transition-colors"
                >
                  <Images className="w-3.5 h-3.5" />
                  <span>View Work Gallery</span>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
