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
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
            DIN Pakistan Executive Organizational Chart
          </h3>
        </div>
        <div className="mt-3 sm:mt-0 px-3 py-1 bg-[#8C241D] text-amber-200 text-xs font-mono border border-amber-500/30">
          Executive Leadership Model
        </div>
      </div>

      {/* Interactive HTML Tree Structure */}
      <div className="space-y-6 max-w-4xl mx-auto">
        
        {/* Tier 1: Executive Director Section */}
        <div className="space-y-6">
          <div className="border border-[#8C241D] bg-[#1F2E48] p-5 shadow-md">
            <div
              onClick={() => toggleNode("ed")}
              className="flex items-center justify-between cursor-pointer select-none"
            >
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-[#8C241D] text-white font-bold flex items-center justify-center text-sm shadow-md">
                  ED
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg text-white">
                    Executive Director & Secretariat
                  </h4>
                  <p className="text-xs text-amber-300">Mujahid Bhutto • Executive Director & Founder Trustee</p>
                </div>
              </div>
              {expandedNodes["ed"] ? <ChevronDown className="w-5 h-5 text-amber-400" /> : <ChevronRight className="w-5 h-5 text-neutral-400" />}
            </div>
          </div>

          {/* Tier 2: Executive Team Departments */}
          {expandedNodes["ed"] && (
            <div className="pl-6 sm:pl-10 border-l-2 border-[#8C241D] space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                
                {/* Role 1: Program Coordinator */}
                <div className="p-4 bg-[#0E1726] border border-[#253754] hover:border-amber-400/40 transition-colors">
                  <div className="text-base font-bold text-white">Program Coordinator</div>
                  <div className="text-xs text-amber-400 font-semibold mt-0.5">Programs & Field Operations</div>
                  <ul className="mt-3 text-xs text-neutral-300 space-y-1.5">
                    <li>• Relief & WASH Operations Lead</li>
                    <li>• Community Mobilization Lead</li>
                    <li>• Emergency Response Coordination</li>
                  </ul>
                </div>

                {/* Role 2: Program Officer */}
                <div className="p-4 bg-[#0E1726] border border-[#253754] hover:border-amber-400/40 transition-colors">
                  <div className="text-base font-bold text-white">Program Officer</div>
                  <div className="text-xs text-amber-400 font-semibold mt-0.5">Project Monitoring & Execution</div>
                  <ul className="mt-3 text-xs text-neutral-300 space-y-1.5">
                    <li>• Field Monitoring & Reporting</li>
                    <li>• Project Quality Assurance</li>
                    <li>• Community Field Liaison</li>
                  </ul>
                </div>

                {/* Role 3: Finance & Admin */}
                <div className="p-4 bg-[#0E1726] border border-[#253754] hover:border-amber-400/40 transition-colors">
                  <div className="text-base font-bold text-white">Finance & Admin</div>
                  <div className="text-xs text-amber-400 font-semibold mt-0.5">Financial Compliance & Logistics</div>
                  <ul className="mt-3 text-xs text-neutral-300 space-y-1.5">
                    <li>• Financial Accounts & Audits</li>
                    <li>• Relief Procurement & Logistics</li>
                    <li>• Donor Financial Reporting</li>
                  </ul>
                </div>

              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}
