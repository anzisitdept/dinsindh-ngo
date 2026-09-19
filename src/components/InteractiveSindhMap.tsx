"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SINDH_DISTRICTS, DistrictInfo } from "@/lib/data/districts";
import { MapPin, ShieldCheck, CheckCircle2, ChevronRight, Layers, Users, Building2 } from "lucide-react";

export default function InteractiveSindhMap() {
  const [selectedDistrict, setSelectedDistrict] = useState<DistrictInfo>(SINDH_DISTRICTS[0]); // Default Shikarpur HQ
  const [activeRegionFilter, setActiveRegionFilter] = useState<string>("All");

  const filteredDistricts = activeRegionFilter === "All" 
    ? SINDH_DISTRICTS 
    : SINDH_DISTRICTS.filter(d => d.region === activeRegionFilter);

  return (
    <section className="w-full bg-[#152238] text-white py-16 border-b border-[#2A364F] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs uppercase tracking-widest text-amber-400 font-mono font-semibold mb-1">
            Geographic Coverage & Field Footprint
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            Interactive Sindh District Coverage Map
          </h2>
          <p className="text-sm text-neutral-300 mt-2">
            Click or tap any district on the vector map to inspect DIN Pakistan’s active program footprint, CBO networks, and historical project implementations.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-8 pb-4 border-b border-[#253754]">
          <span className="text-xs text-neutral-400 uppercase font-mono mr-2">Filter Region:</span>
          {["All", "Upper Sindh", "Central Sindh", "Lower Sindh", "Coastal / Desert Sindh"].map((region) => (
            <button
              key={region}
              onClick={() => setActiveRegionFilter(region)}
              className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all border ${
                activeRegionFilter === region
                  ? "bg-[#8C241D] text-white border-amber-500/40"
                  : "bg-[#0E1726] text-neutral-300 border-[#253754] hover:border-amber-400"
              }`}
            >
              {region}
            </button>
          ))}
        </div>

        {/* Interactive Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Vector Map & District List (7 cols) */}
          <div className="lg:col-span-7 bg-[#0E1726] border border-[#253754] p-6 shadow-xl relative">
            
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#253754]">
              <span className="text-xs text-amber-400 font-mono">DISTRICT VECTOR MAP • SINDH PROVINCE</span>
              <span className="text-[11px] text-neutral-400 font-mono">18 Districts Tracked</span>
            </div>

            {/* Custom Interactive SVG Map */}
            <div className="relative w-full h-[380px] bg-[#121B2B] border border-[#1E2C42] p-4 flex items-center justify-center overflow-hidden">
              <svg
                viewBox="0 0 500 520"
                className="w-full h-full max-h-[360px] drop-shadow-md select-none"
              >
                {/* Background Grid Lines for Technical Aesthetic */}
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1E2C42" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />

                {/* District Paths */}
                {SINDH_DISTRICTS.map((dist) => {
                  const isSelected = selectedDistrict.id === dist.id;
                  const isFiltered = activeRegionFilter === "All" || dist.region === activeRegionFilter;

                  return (
                    <g key={dist.id} className="cursor-pointer group" onClick={() => setSelectedDistrict(dist)}>
                      <path
                        d={dist.svgPath}
                        fill={
                          isSelected
                            ? "#8C241D"
                            : dist.isHeadquarters
                            ? "#C68E2B"
                            : isFiltered
                            ? "#1F2E48"
                            : "#162030"
                        }
                        stroke={isSelected ? "#F59E0B" : "#374866"}
                        strokeWidth={isSelected ? "2.5" : "1"}
                        className="transition-colors duration-200 group-hover:fill-[#A62F27]"
                      />
                      
                      {/* District Pin Dot */}
                      <circle
                        cx={dist.labelCoords.x}
                        cy={dist.labelCoords.y}
                        r={dist.isHeadquarters ? "5" : "3.5"}
                        fill={dist.isHeadquarters ? "#F59E0B" : "#FFFFFF"}
                        stroke="#0E1726"
                        strokeWidth="1"
                      />

                      {/* District Label */}
                      <text
                        x={dist.labelCoords.x}
                        y={dist.labelCoords.y - 7}
                        fontSize="9"
                        fontWeight={isSelected || dist.isHeadquarters ? "bold" : "normal"}
                        fill={isSelected ? "#FDE68A" : "#D1D5DB"}
                        textAnchor="middle"
                        className="pointer-events-none font-sans uppercase tracking-tighter"
                      >
                        {dist.name}
                      </text>
                    </g>
                  );
                })}
              </svg>

              {/* Map Legend */}
              <div className="absolute bottom-3 left-3 bg-[#0E1726]/90 border border-[#253754] p-2 text-[10px] space-y-1 text-neutral-300 font-mono">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 bg-[#C68E2B]" />
                  <span>Headquarters (Shikarpur)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 bg-[#8C241D]" />
                  <span>Selected District</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 bg-[#1F2E48]" />
                  <span>Active Operational Field</span>
                </div>
              </div>
            </div>

            {/* Quick District Selector Buttons */}
            <div className="mt-4 pt-4 border-t border-[#253754]">
              <div className="text-xs text-neutral-400 font-mono mb-2">QUICK SELECT DISTRICT:</div>
              <div className="flex flex-wrap gap-1.5">
                {filteredDistricts.map((d) => (
                  <button
                    key={d.id}
                    onClick={() => setSelectedDistrict(d)}
                    className={`px-2.5 py-1 text-[11px] font-mono transition-colors ${
                      selectedDistrict.id === d.id
                        ? "bg-[#8C241D] text-white font-bold"
                        : "bg-[#1A2840] text-neutral-300 hover:bg-[#253754]"
                    }`}
                  >
                    {d.name} {d.isHeadquarters && "⭐"}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Selected District Inspector Card (5 cols) */}
          <div className="lg:col-span-5 bg-[#0E1726] border border-[#8C241D] p-6 shadow-2xl flex flex-col justify-between min-h-[460px]">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-[#253754]">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-rose-500" />
                  <h3 className="font-heading font-bold text-xl text-white">
                    District {selectedDistrict.name}
                  </h3>
                </div>
                {selectedDistrict.isHeadquarters && (
                  <span className="px-2.5 py-0.5 bg-amber-500 text-slate-950 font-bold text-[10px] uppercase tracking-wider font-mono">
                    Provincial HQ
                  </span>
                )}
              </div>

              {/* Region & Stats Bar */}
              <div className="grid grid-cols-3 gap-2 my-4 p-3 bg-[#152238] border border-[#253754] text-center text-xs">
                <div>
                  <div className="text-neutral-400 text-[10px] uppercase font-mono">Region</div>
                  <div className="font-semibold text-amber-400 truncate">{selectedDistrict.region}</div>
                </div>
                <div className="border-x border-neutral-800">
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
                      <span key={idx} className="px-2 py-0.5 bg-[#1C2C47] text-neutral-200 text-[11px] border border-[#2D3E5E]">
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
                        <span className="text-rose-500 font-bold">•</span>
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
                className="inline-flex items-center space-x-1 px-4 py-2 bg-[#8C241D] hover:bg-[#A62F27] text-white text-xs font-semibold uppercase tracking-wider transition-colors"
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
