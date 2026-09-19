import React from "react";
import OrganogramChart from "@/components/OrganogramChart";
import { ORGANIZATION_DATA } from "@/lib/data/organization";
import { ShieldCheck, UserCheck, Users, Briefcase } from "lucide-react";

export const metadata = {
  title: "Governance & Organogram — Board of Directors | DIN Pakistan",
  description: "Explore DIN Pakistan's Board of Directors, executive management structure, and interactive HTML organogram tree.",
};

export default function GovernancePage() {
  return (
    <div className="w-full font-sans bg-[#FBF9F5] text-neutral-900">
      
      {/* Header Banner */}
      <section className="bg-[#152238] text-white py-14 border-b border-[#253754]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs uppercase tracking-widest text-amber-400 font-mono font-semibold mb-2">
            Institutional Oversight & Governance
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-white max-w-3xl">
            Governance, Board of Directors & Organogram
          </h1>
          <p className="text-sm text-neutral-300 mt-2 max-w-2xl">
            DIN Pakistan adheres to strict constitutional governance under the Societies Registration Act XXI of 1860, overseen by an elected Board of Directors and a General Body Assembly.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Interactive Organogram Chart */}
        <div>
          <OrganogramChart />
        </div>

        {/* Board of Directors Roster */}
        <div className="space-y-6">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#8C241D] font-mono font-bold mb-1">
              Fiduciary Leadership
            </div>
            <h2 className="font-heading text-2xl font-bold text-[#152238]">
              Board of Directors / Executive Trustees
            </h2>
            <p className="text-xs text-neutral-600 mt-1 max-w-2xl">
              The Board meets quarterly to review financial audits, approve annual program budgets, and ensure institutional compliance with donor agreements and provincial laws.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ORGANIZATION_DATA.boardOfDirectors.map((member, idx) => (
              <div key={idx} className="p-6 bg-white border border-[#E2DDD5] shadow-xs space-y-3">
                <div className="w-10 h-10 bg-[#152238] text-amber-400 font-bold flex items-center justify-center font-heading text-sm border border-amber-500/30">
                  0{idx + 1}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-[#152238]">{member.name}</h3>
                  <div className="text-xs font-mono text-[#8C241D] font-bold">{member.role}</div>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

      </section>

    </div>
  );
}
