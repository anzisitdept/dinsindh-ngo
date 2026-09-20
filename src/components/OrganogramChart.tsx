"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronRight, Users, ShieldCheck, UserCheck, Briefcase, Award, Layers } from "lucide-react";

export default function OrganogramChart() {
  const [expandedNodes, setExpandedNodes] = useState<Record<string, boolean>>({
    "general-body": true,
    "board": true,
    "ed": true,
    "programs": true,
    "field": true
  });

  const toggleNode = (nodeId: string) => {
    setExpandedNodes((prev) => ({ ...prev, [nodeId]: !prev[nodeId] }));
  };

  return (
    <div className="w-full bg-[#152238] text-white p-6 sm:p-10 border border-[#2A364F] shadow-2xl font-sans">
      
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-[#253754]">
        <div>
          <span className="text-xs uppercase tracking-widest text-amber-400 font-mono font-semibold">
            Institutional Structure & Accountability
          </span>
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mt-1">
            DIN Pakistan Organizational Chart (Organogram)
          </h3>
        </div>
        <div className="mt-3 sm:mt-0 px-3 py-1 bg-[#8C241D] text-amber-200 text-xs font-mono border border-amber-500/30">
          Governance Model • Societies Act 1860
        </div>
      </div>

      {/* Interactive HTML Tree Structure */}
      <div className="space-y-6 max-w-4xl mx-auto">
        
        {/* Tier 1: Board of Directors */}
        <div className="space-y-6">
          <div className="border border-amber-500/40 bg-[#1A273E] p-4 shadow-md">
            <div
              onClick={() => toggleNode("board")}
              className="flex items-center justify-between cursor-pointer select-none"
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#8C241D] text-white font-bold flex items-center justify-center text-xs">
                  BOD
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base text-white">
                    Board of Directors / Executive Committee
                  </h4>
                  <p className="text-xs text-amber-300">5 Members (Chairperson, Vice President, Member Secretary, Treasurer, CBO Liaison)</p>
                </div>
              </div>
              {expandedNodes["board"] ? <ChevronDown className="w-5 h-5 text-amber-400" /> : <ChevronRight className="w-5 h-5 text-neutral-400" />}
            </div>

            {expandedNodes["board"] && (
              <div className="mt-4 pt-3 border-t border-[#2A364F] grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-2.5 bg-[#0E1726] border border-neutral-800">
                  <div className="font-semibold text-amber-400">Sikander Ali Khoso</div>
                  <div className="text-neutral-400">Chairperson / President</div>
                </div>
                <div className="p-2.5 bg-[#0E1726] border border-neutral-800">
                  <div className="font-semibold text-amber-400">Dr. Parveen Akhtar</div>
                  <div className="text-neutral-400">Vice President</div>
                </div>
                <div className="p-2.5 bg-[#0E1726] border border-neutral-800">
                  <div className="font-semibold text-amber-400">Mujahid Bhutto</div>
                  <div className="text-neutral-400">Executive Director / Member Secretary</div>
                </div>
                <div className="p-2.5 bg-[#0E1726] border border-neutral-800">
                  <div className="font-semibold text-amber-400">Shahnaz Solangi</div>
                  <div className="text-neutral-400">Treasurer</div>
                </div>
              </div>
            )}
          </div>

          {/* Tier 3: Executive Secretariat */}
          <div className="pl-6 sm:pl-10 border-l-2 border-[#8C241D] space-y-6">
            <div className="border border-[#8C241D] bg-[#1F2E48] p-4 shadow-md">
              <div
                onClick={() => toggleNode("ed")}
                className="flex items-center justify-between cursor-pointer select-none"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-emerald-600 text-white font-bold flex items-center justify-center text-xs">
                    ED
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-base text-white">
                      Executive Director & Secretariat
                    </h4>
                    <p className="text-xs text-neutral-300">Mujahid Bhutto • Operational Head & Legal Signatory</p>
                  </div>
                </div>
                {expandedNodes["ed"] ? <ChevronDown className="w-5 h-5 text-amber-400" /> : <ChevronRight className="w-5 h-5 text-neutral-400" />}
              </div>
            </div>

            {/* Tier 4: Departmental Managers */}
            {expandedNodes["ed"] && (
              <div className="pl-6 sm:pl-10 border-l-2 border-neutral-600 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  
                  {/* Department 1 */}
                  <div className="p-4 bg-[#0E1726] border border-[#253754]">
                    <div className="text-xs font-bold text-amber-400 font-mono uppercase mb-1">Programs & Operations</div>
                    <div className="text-sm font-semibold text-white">Program Managers</div>
                    <ul className="mt-2 text-xs text-neutral-400 space-y-1">
                      <li>• Livelihoods & WASH Lead</li>
                      <li>• Peace & Harmony Coordinator</li>
                      <li>• Child Protection Officer</li>
                    </ul>
                  </div>

                  {/* Department 2 */}
                  <div className="p-4 bg-[#0E1726] border border-[#253754]">
                    <div className="text-xs font-bold text-amber-400 font-mono uppercase mb-1">Finance & Audit</div>
                    <div className="text-sm font-semibold text-white">Finance Manager</div>
                    <ul className="mt-2 text-xs text-neutral-400 space-y-1">
                      <li>• Internal Audit Officer</li>
                      <li>• Compliance & Procurement</li>
                      <li>• Donor Financial Reporting</li>
                    </ul>
                  </div>

                  {/* Department 3 */}
                  <div className="p-4 bg-[#0E1726] border border-[#253754]">
                    <div className="text-xs font-bold text-amber-400 font-mono uppercase mb-1">MEAL & Field Network</div>
                    <div className="text-sm font-semibold text-white">MEAL Manager</div>
                    <ul className="mt-2 text-xs text-neutral-400 space-y-1">
                      <li>• Field Officers (18 Districts)</li>
                      <li>• 40 Affiliated CBO Liaisons</li>
                      <li>• Community Mobilizers</li>
                    </ul>
                  </div>

                </div>
              </div>
            )}

          </div>

        </div>

      </div>

    </div>
  );
}
