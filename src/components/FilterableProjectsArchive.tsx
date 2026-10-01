"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { PROJECTS_DATA, ProjectItem } from "@/lib/data/projects";
import { PROGRAM_AREAS } from "@/lib/data/programs";
import { Search, Filter, Calendar, MapPin, Building2, CheckCircle2, RefreshCw } from "lucide-react";

export default function FilterableProjectsArchive({
  initialDistrict,
  initialStatus,
  lockStatus,
}: {
  initialDistrict?: string;
  initialStatus?: ProjectItem["status"];
  lockStatus?: ProjectItem["status"];
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<string>(lockStatus || initialStatus || "All");
  const [selectedProgram, setSelectedProgram] = useState<string>("All");
  const [selectedDonor, setSelectedDonor] = useState<string>("All");
  const [selectedDistrict, setSelectedDistrict] = useState<string>(initialDistrict || "All");

  const ongoingCount = useMemo(
    () => PROJECTS_DATA.filter((p) => p.status === "Ongoing").length,
    []
  );
  const completedCount = PROJECTS_DATA.length - ongoingCount;

  const scopedCount = useMemo(
    () =>
      lockStatus
        ? PROJECTS_DATA.filter((p) => p.status === lockStatus).length
        : PROJECTS_DATA.length,
    [lockStatus]
  );

  // Extract unique donors
  const uniqueDonors = useMemo(() => {
    const set = new Set<string>();
    PROJECTS_DATA.forEach((p) => set.add(p.donorCategory));
    return ["All", ...Array.from(set)];
  }, []);

  // Filter projects
  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((p) => {
      if (lockStatus && p.status !== lockStatus) return false;

      const matchesSearch =
        searchQuery === "" ||
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.donor.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.district.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesStatus = selectedStatus === "All" || p.status === selectedStatus;
      const matchesProgram = selectedProgram === "All" || p.programTitle === selectedProgram;
      const matchesDonor = selectedDonor === "All" || p.donorCategory === selectedDonor;
      const matchesDistrict =
        selectedDistrict === "All" || p.district.toLowerCase().includes(selectedDistrict.toLowerCase());

      return matchesSearch && matchesStatus && matchesProgram && matchesDonor && matchesDistrict;
    });
  }, [searchQuery, selectedStatus, selectedProgram, selectedDonor, selectedDistrict, lockStatus]);

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedStatus(lockStatus || initialStatus || "All");
    setSelectedProgram("All");
    setSelectedDonor("All");
    setSelectedDistrict("All");
  };

  return (
    <div className="w-full font-sans text-neutral-900">


      {/* Dense Institutional List View (Press/Archive Layout) */}
      <div className="bg-white border border-[#E2DDD5] shadow-sm divide-y divide-[#E2DDD5]">

        {/* Table Header */}
        <div className="hidden lg:grid grid-cols-12 gap-4 px-6 py-3 bg-[#F2EDE4] font-mono text-xs font-bold text-[#152238] uppercase tracking-wider">
          <div className="col-span-2">Year & Status</div>
          <div className="col-span-4">Project Title & Summary</div>
          <div className="col-span-3">Funding Donor</div>
          <div className="col-span-2">District / Beneficiaries</div>
          <div className="col-span-1 text-right">Details</div>
        </div>

        {filteredProjects.length === 0 ? (
          <div className="p-12 text-center text-neutral-500">
            <p className="text-base font-semibold">No project records match your selected filter criteria.</p>
            <button
              onClick={resetFilters}
              className="mt-3 text-xs font-bold text-[#8C241D] uppercase tracking-wider underline"
            >
              Reset Search &amp; View All {scopedCount} Projects
            </button>
          </div>
        ) : (
          filteredProjects.map((project) => (
            <div
              key={project.id}
              className="editorial-hover-row p-5 sm:p-6 transition-all group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">

                {/* Year & Status */}
                <div className="lg:col-span-2 space-y-1">
                  <div className="flex items-center space-x-2">
                    <span
                      className={`px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-white ${project.status === "Ongoing" ? "bg-emerald-700" : "bg-[#152238]"
                        }`}
                    >
                      {project.status}
                    </span>
                    <span className="text-xs font-bold font-mono text-[#8C241D]">
                      {project.years}
                    </span>
                  </div>
                  <div className="text-[11px] text-neutral-500 font-mono">
                    Duration: {project.duration}
                  </div>
                </div>

                {/* Title & Summary */}
                <div className="lg:col-span-4 space-y-1">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="font-heading font-bold text-base text-[#152238] group-hover:text-[#8C241D] transition-colors leading-snug block"
                  >
                    {project.title}
                  </Link>
                  <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed">
                    {project.summary}
                  </p>
                  <div className="text-[11px] text-amber-700 font-medium font-sans">
                    Tag: {project.programTitle}
                  </div>
                </div>

                {/* Donor */}
                <div className="lg:col-span-3 space-y-1">
                  <div className="text-xs font-semibold text-[#152238] flex items-center space-x-1.5">
                    <Building2 className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                    <span>{project.donor}</span>
                  </div>
                  <div className="text-[11px] text-neutral-500 font-mono">
                    Category: {project.donorCategory}
                  </div>
                  {project.budgetDisplay && (
                    <div className="text-[11px] font-mono text-emerald-700 font-bold">
                      Budget: {project.budgetDisplay}
                    </div>
                  )}
                </div>

                {/* District & Beneficiaries */}
                <div className="lg:col-span-3 space-y-1 text-xs">
                  <div className="flex items-center space-x-1 text-neutral-700 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                    <span>{project.district}</span>
                  </div>
                  <div className="text-[11px] font-mono text-neutral-500">
                    Reach: <strong className="text-neutral-800">{project.beneficiaryCount}</strong>
                  </div>
                </div>

              </div>
            </div>
          ))
        )}

      </div>

    </div>
  );
}
