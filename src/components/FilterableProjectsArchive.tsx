"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { PROJECTS_DATA, ProjectItem } from "@/lib/data/projects";
import { Search, Filter, Calendar, MapPin, Building2, CheckCircle2, RefreshCw } from "lucide-react";

export default function FilterableProjectsArchive({ initialDistrict }: { initialDistrict?: string }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<string>("All");
  const [selectedProgram, setSelectedProgram] = useState<string>("All");
  const [selectedDonor, setSelectedDonor] = useState<string>("All");
  const [selectedDistrict, setSelectedDistrict] = useState<string>(initialDistrict || "All");

  // Extract unique donors
  const uniqueDonors = useMemo(() => {
    const set = new Set<string>();
    PROJECTS_DATA.forEach((p) => set.add(p.donorCategory));
    return ["All", ...Array.from(set)];
  }, []);

  // Filter projects
  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((p) => {
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
  }, [searchQuery, selectedStatus, selectedProgram, selectedDonor, selectedDistrict]);

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedStatus("All");
    setSelectedProgram("All");
    setSelectedDonor("All");
    setSelectedDistrict("All");
  };

  return (
    <div className="w-full font-sans text-neutral-900">
      
      {/* Search & Filter Bar */}
      <div className="bg-[#152238] text-white p-6 border border-[#253754] shadow-xl mb-8 space-y-4">
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          
          {/* Search Field */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              placeholder="Search by project title, donor (e.g. Save the Children, IOM, USAID), or district..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-[#0E1726] border border-[#253754] text-white placeholder-neutral-400 text-sm focus:outline-none focus:border-amber-400"
            />
          </div>

          {/* Reset button */}
          {(selectedStatus !== "All" || selectedProgram !== "All" || selectedDonor !== "All" || selectedDistrict !== "All" || searchQuery) && (
            <button
              onClick={resetFilters}
              className="px-4 py-2.5 bg-[#8C241D] hover:bg-[#A62F27] text-white text-xs font-semibold uppercase tracking-wider flex items-center space-x-1.5 shrink-0"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Clear Filters</span>
            </button>
          )}
        </div>

        {/* Filter Chips */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs pt-2 border-t border-[#253754]">
          
          {/* Filter 1: Status */}
          <div>
            <label className="block text-amber-400 font-mono text-[10px] uppercase mb-1">Status</label>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full bg-[#0E1726] border border-[#253754] text-neutral-200 py-2 px-3 text-xs focus:outline-none focus:border-amber-400"
            >
              <option value="All">All Statuses (18 Total)</option>
              <option value="Ongoing">Ongoing (3 Active)</option>
              <option value="Completed">Completed (15 Archive)</option>
            </select>
          </div>

          {/* Filter 2: Donor Category */}
          <div>
            <label className="block text-amber-400 font-mono text-[10px] uppercase mb-1">Donor Agency</label>
            <select
              value={selectedDonor}
              onChange={(e) => setSelectedDonor(e.target.value)}
              className="w-full bg-[#0E1726] border border-[#253754] text-neutral-200 py-2 px-3 text-xs focus:outline-none focus:border-amber-400"
            >
              {uniqueDonors.map((d) => (
                <option key={d} value={d}>
                  {d === "All" ? "All Donors & UN Agencies" : d}
                </option>
              ))}
            </select>
          </div>

          {/* Filter 3: Program Area */}
          <div>
            <label className="block text-amber-400 font-mono text-[10px] uppercase mb-1">Thematic Focus</label>
            <select
              value={selectedProgram}
              onChange={(e) => setSelectedProgram(e.target.value)}
              className="w-full bg-[#0E1726] border border-[#253754] text-neutral-200 py-2 px-3 text-xs focus:outline-none focus:border-amber-400"
            >
              <option value="All">All 8 Thematic Programs</option>
              <option value="WASH & Community Infrastructure">WASH & Infrastructure</option>
              <option value="Peace & Interfaith Harmony">Peace & Interfaith Harmony</option>
              <option value="Livelihoods & Food Security">Livelihoods & Food Security</option>
              <option value="Emergency Response & Relief">Emergency Relief</option>
              <option value="Child Protection & Rights">Child Protection & Rights</option>
              <option value="Human Rights & Civic Empowerment">Human Rights</option>
              <option value="Education & Literacy Revival">Education Revival</option>
              <option value="Public Health & Maternal Care">Public Health</option>
            </select>
          </div>

          {/* Filter 4: District */}
          <div>
            <label className="block text-amber-400 font-mono text-[10px] uppercase mb-1">District Location</label>
            <input
              type="text"
              placeholder="e.g. Shikarpur, Jacobabad"
              value={selectedDistrict === "All" ? "" : selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value || "All")}
              className="w-full bg-[#0E1726] border border-[#253754] text-neutral-200 py-2 px-3 text-xs focus:outline-none focus:border-amber-400 placeholder-neutral-500"
            />
          </div>

        </div>

        <div className="flex items-center justify-between text-xs text-neutral-400 font-mono pt-1">
          <span>Showing <strong>{filteredProjects.length}</strong> of <strong>{PROJECTS_DATA.length}</strong> audited project records</span>
          <span>Legal Reg. No. 01222</span>
        </div>
      </div>

      {/* Dense Institutional List View (Press/Archive Layout) */}
      <div className="bg-white border border-[#E2DDD5] shadow-sm divide-y divide-[#E2DDD5]">
        
        {/* Table Header */}
        <div className="hidden lg:grid grid-cols-12 gap-4 px-6 py-3 bg-[#F2EDE4] font-mono text-xs font-bold text-[#152238] uppercase tracking-wider">
          <div className="col-span-2">Year & Status</div>
          <div className="col-span-4">Project Title & Summary</div>
          <div className="col-span-3">Funding Donor / Partner</div>
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
              Reset Search & View All 18 Projects
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
                      className={`px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-white ${
                        project.status === "Ongoing" ? "bg-emerald-700" : "bg-[#152238]"
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
