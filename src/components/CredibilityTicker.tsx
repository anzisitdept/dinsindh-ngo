"use client";

import React from "react";
import { ORGANIZATION_DATA } from "@/lib/data/organization";
import { ShieldCheck, Calendar, Users, Briefcase, MapPin, Award, CheckCircle2 } from "lucide-react";

export default function CredibilityTicker() {
  const stats = [
    { label: "Est. Year", value: "2000", icon: Calendar },
    { label: "Societies Act Reg", value: `No. ${ORGANIZATION_DATA.registrationNumber}`, icon: ShieldCheck },
    { label: "Affiliated CBOs", value: `${ORGANIZATION_DATA.affiliatedCBOsCount} Village Networks`, icon: Users },
    { label: "Core Programs", value: "8 Thematic Areas", icon: Briefcase },
    { label: "Districts Covered", value: `${ORGANIZATION_DATA.districtsCoveredCount} Across Sindh`, icon: MapPin },
    { label: "Completed Projects", value: `${ORGANIZATION_DATA.completedProjectsCount} Funded Initiatives`, icon: Award },
    { label: "Ongoing Projects", value: `${ORGANIZATION_DATA.ongoingProjectsCount} Active Programs`, icon: CheckCircle2 },
    { label: "NTN Verified", value: ORGANIZATION_DATA.ntn, icon: ShieldCheck },
    { label: "DUNS Registry", value: ORGANIZATION_DATA.dunsNumber, icon: ShieldCheck },
  ];

  return (
    <div className="w-full bg-[#152238] border-y border-[#253754] text-white py-3.5 overflow-hidden shadow-inner font-sans">
      <div className="max-w-7xl mx-auto px-4 flex items-center">
        {/* Fixed Title Tag */}
        <div className="shrink-0 bg-[#8C241D] text-white px-3 py-1 text-xs font-semibold uppercase tracking-wider shadow-sm mr-4 hidden sm:flex items-center space-x-1.5 border border-amber-400/20">
          <ShieldCheck className="w-3.5 h-3.5 text-amber-300" />
          <span>Verified Track Record</span>
        </div>

        {/* Ticker marquee container */}
        <div className="relative w-full overflow-hidden flex whitespace-nowrap">
          <div className="flex space-x-8 animate-marquee items-center text-xs sm:text-sm">
            {stats.concat(stats).map((stat, idx) => {
              const IconComp = stat.icon;
              return (
                <div key={idx} className="flex items-center space-x-2 shrink-0">
                  <IconComp className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="text-neutral-400 font-medium">{stat.label}:</span>
                  <span className="text-white font-bold tracking-wide">{stat.value}</span>
                  <span className="text-neutral-600 pl-4">•</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
