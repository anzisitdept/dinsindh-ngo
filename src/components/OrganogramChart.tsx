"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { ORGANIZATION_DATA } from "@/lib/data/organization";

const EXECUTIVE_ROLE_HEADINGS = ["Program Coordinator", "Program Officer", "Finance & Admin"];

export default function OrganogramChart() {
  const [expandedNodes, setExpandedNodes] = useState<Record<string, boolean>>({
    board: true,
    executive: true
  });

  const toggleNode = (nodeId: string) => {
    setExpandedNodes((prev) => ({ ...prev, [nodeId]: !prev[nodeId] }));
  };

  const board = ORGANIZATION_DATA.boardOfDirectors;
  const executive = ORGANIZATION_DATA.executiveTeam;
  const director = executive[0];
  const roles = executive.filter((member) => EXECUTIVE_ROLE_HEADINGS.includes(member.name));

  return (
    <div className="w-full bg-[#152238] text-white p-6 sm:p-10 border border-[#2A364F] shadow-2xl font-sans">

      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-[#253754]">
        <div>
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
            DIN Pakistan Executive Organizational Chart
          </h3>
        </div>
        <div className="mt-3 sm:mt-0 px-3 py-1 bg-[#8C241D] text-amber-200 text-xs font-mono border border-amber-500/30">
          Executive Leadership Model
        </div>
      </div>

      <div className="space-y-8 max-w-4xl mx-auto">

        {/* Tier 1: Chairman & Board of Directors */}
        <div>
          <div className="border border-[#8C241D] bg-[#1F2E48] p-5 shadow-md">
            <button
              onClick={() => toggleNode("board")}
              className="w-full flex items-center justify-between cursor-pointer select-none text-left"
              aria-expanded={expandedNodes["board"]}
            >
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-[#8C241D] text-white font-bold flex items-center justify-center text-xs shadow-md shrink-0">
                  BOD
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg text-white">
                    Chairman &amp; Board of Directors
                  </h4>
                  <p className="text-xs text-amber-300">
                    Governing Board of DIN Pakistan
                  </p>
                </div>
              </div>
              {expandedNodes["board"] ? (
                <ChevronDown className="w-5 h-5 text-amber-400 shrink-0" />
              ) : (
                <ChevronRight className="w-5 h-5 text-neutral-400 shrink-0" />
              )}
            </button>
          </div>

          {expandedNodes["board"] && (
            <div className="pl-6 sm:pl-10 border-l-2 border-[#8C241D] mt-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {board.map((member) => (
                  <div
                    key={member.name}
                    className="p-4 bg-[#0E1726] border border-[#253754] hover:border-amber-400/40 transition-colors"
                  >
                    <div className="text-base font-bold text-white">{member.name}</div>
                    <div className="text-xs text-amber-400 font-semibold mt-0.5">{member.role}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Tier 2: Executive */}
        <div>
          <div className="border border-[#8C241D] bg-[#1F2E48] p-5 shadow-md">
            <button
              onClick={() => toggleNode("executive")}
              className="w-full flex items-center justify-between cursor-pointer select-none text-left"
              aria-expanded={expandedNodes["executive"]}
            >
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-[#8C241D] text-white font-bold flex items-center justify-center text-sm shadow-md shrink-0">
                  ED
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg text-white">
                    Executive
                  </h4>
                  <p className="text-xs text-amber-300">
                    {director.name} • {director.role}
                  </p>
                </div>
              </div>
              {expandedNodes["executive"] ? (
                <ChevronDown className="w-5 h-5 text-amber-400 shrink-0" />
              ) : (
                <ChevronRight className="w-5 h-5 text-neutral-400 shrink-0" />
              )}
            </button>
          </div>

          {expandedNodes["executive"] && (
            <div className="pl-6 sm:pl-10 border-l-2 border-[#8C241D] mt-5">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {roles.map((member) => (
                  <div
                    key={member.name}
                    className="p-4 bg-[#0E1726] border border-[#253754] hover:border-amber-400/40 transition-colors"
                  >
                    <div className="text-base font-bold text-white">{member.name}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>

    </div>
  );
}
