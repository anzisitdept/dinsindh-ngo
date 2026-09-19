import React from "react";
import Link from "next/link";
import { PARTNERS_DATA, AFFILIATED_CBOS } from "@/lib/data/partners";
import { Building2, Users, ShieldCheck, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Partners & Donors — Institutional Directory & CBO Network | DIN Pakistan",
  description: "Complete list of DIN Pakistan's institutional donor partners (Save the Children, IOM, USAID, UNDP, ACTED) and 40 affiliated grassroots CBOs.",
};

export default function PartnersPage() {
  return (
    <div className="w-full font-sans bg-[#FBF9F5] text-neutral-900">
      
      {/* Header Banner */}
      <section className="bg-[#152238] text-white py-14 border-b border-[#253754]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs uppercase tracking-widest text-amber-400 font-mono font-semibold mb-2">
            Institutional Alliances
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white max-w-3xl">
            Partners, Donors & CBO Network
          </h1>
          <p className="text-sm sm:text-base text-neutral-300 mt-2 max-w-2xl leading-relaxed">
            Collaborating with international humanitarian agencies, UN organizations, provincial government departments, and 40 federated CBOs across Sindh.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Donor Directory */}
        <div className="space-y-6">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#8C241D] font-mono font-bold mb-1">
              Funding & Co-Implementation Agencies
            </div>
            <h2 className="font-heading text-2xl font-bold text-[#152238]">
              International Donors & UN Partners
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PARTNERS_DATA.map((partner) => (
              <div key={partner.id} className="p-6 bg-white border border-[#E2DDD5] shadow-xs space-y-3 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#8C241D] uppercase">{partner.acronym || partner.category}</span>
                    <span className="px-2 py-0.5 bg-[#152238] text-amber-400 text-[10px] font-mono">
                      {partner.projectsCollaborated} Projects
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#152238] mt-2">{partner.name}</h3>
                  <p className="text-xs text-neutral-600 mt-2 leading-relaxed">{partner.description}</p>
                </div>

                <div className="pt-3 border-t border-[#E2DDD5] text-[11px] font-mono text-neutral-500">
                  Status: Verified Institutional Partner
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 40 Affiliated CBO Network Directory */}
        <div className="bg-white p-8 sm:p-10 border border-[#E2DDD5] shadow-sm space-y-6">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#8C241D] font-mono font-bold mb-1">
              Grassroots Infrastructure
            </div>
            <h2 className="font-heading text-2xl font-bold text-[#152238]">
              Directory of 40 Affiliated CBOs (Community-Based Organizations)
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 mt-1">
              DIN federates 40 registered community organizations that lead village-level mobilization, disaster early warning, and beneficiary identification.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs font-sans">
            {AFFILIATED_CBOS.map((cbo, idx) => (
              <div key={idx} className="p-3.5 bg-[#FBF9F5] border border-[#E2DDD5] flex items-center justify-between">
                <div>
                  <div className="font-bold text-[#152238]">{cbo.name}</div>
                  <div className="text-[11px] text-neutral-500 font-mono">{cbo.unionCouncil} • {cbo.district}</div>
                </div>
                <Users className="w-4 h-4 text-rose-700 shrink-0" />
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <span className="text-xs font-mono text-neutral-500">
              + 25 Additional Village Development Committees across Upper & Lower Sindh.
            </span>
          </div>
        </div>

      </section>

    </div>
  );
}
