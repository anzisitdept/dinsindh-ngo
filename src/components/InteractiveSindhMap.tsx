"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SINDH_DISTRICTS, DistrictInfo } from "@/lib/data/districts";
import { MapPin, ChevronRight, Layers, Building2, Navigation, Compass } from "lucide-react";

export default function InteractiveSindhMap() {
  const [selectedDistrict, setSelectedDistrict] = useState<DistrictInfo>(
    SINDH_DISTRICTS[0]
  );
  const [activeRegionFilter, setActiveRegionFilter] = useState<string>("All");

  const filteredDistricts =
    activeRegionFilter === "All"
      ? SINDH_DISTRICTS
      : SINDH_DISTRICTS.filter((d) => d.region === activeRegionFilter);

  return (
    <section className="w-full bg-[#FBF9F5] text-slate-900 py-16 border-b border-[#E2DDD5] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs uppercase tracking-widest text-[#8C241D] font-mono font-bold mb-1 flex items-center space-x-1.5">
            <Navigation className="w-3.5 h-3.5 text-[#8C241D]" />
            <span>Geographic Coverage & Field Operational Footprint</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#152238]">
            Sindh Province Operational Coverage Map
          </h2>
          <p className="text-sm text-neutral-600 mt-2 leading-relaxed">
            Clean geographic map of Sindh. Click any district to highlight it in blue and inspect DIN Pakistan&apos;s active project footprint, CBO networks, and regional field offices.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-8 pb-4 border-b border-[#E2DDD5]">
          <span className="text-xs text-neutral-500 uppercase font-mono mr-2 font-bold">Filter Region:</span>
          {["All", "Upper Sindh", "Central Sindh", "Lower Sindh", "Coastal / Desert Sindh"].map((region) => (
            <button
              key={region}
              onClick={() => setActiveRegionFilter(region)}
              className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all border rounded-xs ${
                activeRegionFilter === region
                  ? "bg-[#8C241D] text-white border-[#8C241D]"
                  : "bg-white text-slate-700 border-[#E2DDD5] hover:border-[#8C241D]"
              }`}
            >
              {region}
            </button>
          ))}
        </div>

        {/* Interactive Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Column: Clean White Sindh Map Box (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-[#E2DDD5] p-4 sm:p-6 shadow-md rounded-lg relative">

            <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-200">
              <div className="flex items-center space-x-2">
                <Compass className="w-4 h-4 text-[#8C241D]" />
                <span className="text-xs text-[#8C241D] font-mono font-bold uppercase">SINDH PROVINCE GEOGRAPHIC MAP</span>
              </div>
              <span className="text-[11px] text-slate-500 font-mono">Click a district to highlight</span>
            </div>

            {/* Pristine White Map Box Container */}
            <div className="relative w-full bg-white rounded-md border-2 border-slate-200 shadow-inner overflow-hidden flex items-center justify-center p-2 min-h-[520px]">
              
              <svg
                viewBox="0 0 540 530"
                className="w-full h-auto max-h-[530px] drop-shadow-sm select-none"
              >
                {/* Background White Fill */}
                <rect width="540" height="530" fill="#FFFFFF" />

                {/* Subtle map background grid */}
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#F8FAFC" strokeWidth="1" />
                </pattern>
                <rect width="540" height="530" fill="url(#grid)" />

                {/* Outer Sindh Province Border Contour Background */}
                <path
                  d="M 180,30 L 260,20 L 360,15 L 450,40 L 465,115 L 475,200 L 460,300 L 440,400 L 340,490 L 220,480 L 110,445 L 60,420 L 70,360 L 130,335 L 145,225 L 175,145 Z"
                  fill="#FAFAFA"
                  stroke="#E2E8F0"
                  strokeWidth="3"
                  strokeDasharray="4 2"
                />

                {/* Indus River Landmark Line (Blue Line through Sindh) */}
                <path
                  d="M 350,20 C 330,60 280,100 270,140 C 260,185 240,225 210,270 C 190,300 240,330 220,380 C 205,410 160,425 150,445"
                  fill="none"
                  stroke="#93C5FD"
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity="0.7"
                />
                {/* Indus River Label */}
                <text x="215" y="250" fill="#3B82F6" fontSize="8" fontStyle="italic" fontWeight="bold" opacity="0.8" transform="rotate(-40 215 250)">
                  Indus River ~
                </text>

                {/* Arabian Sea Label */}
                <text x="75" y="470" fill="#94A3B8" fontSize="10" fontStyle="italic" fontWeight="bold">
                  Arabian Sea 🌊
                </text>

                {/* District Operational Regions */}
                {SINDH_DISTRICTS.map((dist) => {
                  const isSelected = selectedDistrict.id === dist.id;
                  const isHQ = dist.isHeadquarters;
                  const isFiltered =
                    activeRegionFilter === "All" || dist.region === activeRegionFilter;

                  // Styling logic requested by user:
                  // 1. By default, unselected districts are light neutral `#F1F5F9` with dark text `#0F172A`.
                  // 2. Only when SELECTED does the district shape turn Vibrant Blue `#2563EB`!
                  // 3. HQ Shikarpur has a soft gold tint `#FEF3C7`.
                  let distFill = "#F1F5F9";
                  let distStroke = "#94A3B8";
                  let textColor = "#0F172A";

                  if (isSelected) {
                    distFill = "#2563EB"; // Marked vibrant blue when selected!
                    distStroke = "#1D4ED8";
                    textColor = "#FFFFFF";
                  } else if (isHQ) {
                    distFill = "#FEF3C7"; // Warm light gold for HQ
                    distStroke = "#D97706";
                    textColor = "#78350F";
                  } else if (!isFiltered) {
                    distFill = "#FAFAFA";
                    distStroke = "#CBD5E1";
                    textColor = "#94A3B8";
                  }

                  return (
                    <g
                      key={dist.id}
                      onClick={() => setSelectedDistrict(dist)}
                      className="cursor-pointer group"
                    >
                      {/* District Polygon Shape */}
                      <path
                        d={dist.svgPath}
                        fill={distFill}
                        stroke={distStroke}
                        strokeWidth={isSelected ? "2.5" : isHQ ? "2" : "1.2"}
                        className={`transition-colors duration-200 ${
                          isSelected
                            ? "fill-[#2563EB]"
                            : "group-hover:fill-[#BFDBFE] group-hover:stroke-[#2563EB]"
                        }`}
                      />
                      
                      {/* Marker Pin Circle */}
                      <circle
                        cx={dist.labelCoords.x}
                        cy={dist.labelCoords.y}
                        r={isHQ ? "6" : "4"}
                        fill={isSelected ? "#FFFFFF" : isHQ ? "#D97706" : "#0F172A"}
                        stroke={isSelected ? "#1D4ED8" : "#FFFFFF"}
                        strokeWidth="1.5"
                        className={isSelected ? "animate-pulse" : ""}
                      />

                      {/* District Name Label */}
                      <text
                        x={dist.labelCoords.x}
                        y={dist.labelCoords.y - 8}
                        fontSize={isHQ ? "10" : "8.5"}
                        fontWeight={isSelected || isHQ ? "bold" : "600"}
                        fill={textColor}
                        stroke={isSelected ? "none" : "#FFFFFF"}
                        strokeWidth={isSelected ? "0" : "1.2px"}
                        paintOrder="stroke fill"
                        textAnchor="middle"
                        className="pointer-events-none font-mono uppercase tracking-tighter transition-colors group-hover:fill-[#1E40AF]"
                      >
                        {dist.name} {isHQ && "⭐"}
                      </text>
                    </g>
                  );
                })}
              </svg>

              {/* Floating Map Legend (Top-Left Side) */}
              <div className="absolute top-3 left-3 z-10 bg-white/95 backdrop-blur-md border border-slate-300 p-3 text-[10px] space-y-1.5 text-slate-900 font-mono rounded-md shadow-lg">
                <div className="flex items-center space-x-2">
                  <span className="w-3.5 h-3.5 bg-[#FEF3C7] border border-amber-500 rounded-sm" />
                  <span className="font-bold text-amber-800">HQ — Shikarpur ⭐</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-3.5 h-3.5 bg-[#2563EB] border border-blue-700 rounded-sm" />
                  <span className="font-bold text-blue-700">Selected District (Blue Marked)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-3.5 h-3.5 bg-[#F1F5F9] border border-slate-400 rounded-sm" />
                  <span className="text-slate-700">Operational Field District</span>
                </div>
              </div>

            </div>

            {/* Quick Select District Buttons */}
            <div className="mt-4 pt-4 border-t border-slate-200">
              <div className="text-xs text-slate-500 font-mono mb-2 font-bold">QUICK SELECT FIELD DISTRICT:</div>
              <div className="flex flex-wrap gap-1.5">
                {filteredDistricts.map((d) => (
                  <button
                    key={d.id}
                    onClick={() => setSelectedDistrict(d)}
                    className={`px-2.5 py-1 text-[11px] font-mono transition-colors border rounded-xs ${
                      selectedDistrict.id === d.id
                        ? "bg-[#2563EB] text-white font-bold border-[#1D4ED8]"
                        : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200"
                    }`}
                  >
                    {d.name} {d.isHeadquarters && "⭐"}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Executive District Inspector Card (5 cols) */}
          <div className="lg:col-span-5 bg-[#152238] border border-[#253754] text-white p-6 shadow-xl rounded-lg flex flex-col justify-between min-h-[460px]">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-[#253754]">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <h3 className="font-heading font-bold text-xl text-white">
                    District {selectedDistrict.name}
                  </h3>
                </div>
                {selectedDistrict.isHeadquarters && (
                  <span className="px-2.5 py-0.5 bg-amber-500 text-slate-950 font-bold text-[10px] uppercase tracking-wider font-mono rounded-xs">
                    Provincial HQ
                  </span>
                )}
              </div>

              {/* Region & Stats Bar */}
              <div className="grid grid-cols-3 gap-2 my-4 p-3 bg-[#0E1726] border border-[#253754] text-center text-xs rounded-sm">
                <div>
                  <div className="text-neutral-400 text-[10px] uppercase font-mono">Region</div>
                  <div className="font-semibold text-amber-400 truncate">{selectedDistrict.region}</div>
                </div>
                <div className="border-x border-[#253754]">
                  <div className="text-neutral-400 text-[10px] uppercase font-mono">Active Programs</div>
                  <div className="font-semibold text-white">{selectedDistrict.activeProgramsCount} Areas</div>
                </div>
                <div>
                  <div className="text-neutral-400 text-[10px] uppercase font-mono">CBO Network</div>
                  <div className="font-semibold text-white">{selectedDistrict.cboCount} Units</div>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-neutral-300 leading-relaxed font-sans mb-4">
                {selectedDistrict.description}
              </p>

              {/* Active Programs List */}
              <div className="space-y-3">
                <div>
                  <h4 className="text-xs font-mono font-semibold uppercase text-amber-400 tracking-wider mb-1.5 flex items-center space-x-1">
                    <Layers className="w-3.5 h-3.5" />
                    <span>Active Programs in {selectedDistrict.name}</span>
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedDistrict.activePrograms.map((prog, idx) => (
                      <span key={idx} className="px-2 py-0.5 bg-[#1C2C47] text-neutral-200 text-[11px] border border-[#2D3E5E] rounded-xs">
                        {prog}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Projects */}
                <div>
                  <h4 className="text-xs font-mono font-semibold uppercase text-amber-400 tracking-wider mb-1.5 flex items-center space-x-1">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>Key Projects & Interventions</span>
                  </h4>
                  <ul className="space-y-1 text-xs text-neutral-300 font-sans">
                    {selectedDistrict.keyProjects.map((proj, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <span className="text-blue-400 font-bold">•</span>
                        <span>{proj}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Action Footer */}
            <div className="pt-6 mt-6 border-t border-[#253754] flex items-center justify-between">
              <span className="text-xs text-neutral-400 font-mono">
                Historical Projects: <strong className="text-white">{selectedDistrict.projectsCount}</strong>
              </span>
              <Link
                href={`/projects?district=${selectedDistrict.name}`}
                className="inline-flex items-center space-x-1 px-4 py-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-semibold uppercase tracking-wider transition-colors rounded-xs shadow-xs"
              >
                <span>Filter Projects</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
