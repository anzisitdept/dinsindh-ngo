import React from "react";
import Link from "next/link";
import OngoingProjectsList from "@/components/OngoingProjectsList";
import { ArrowUpRight, Heart } from "lucide-react";

export const metadata = {
  title: "Ongoing Projects | DIN Pakistan",
  description:
    "Current active DIN Pakistan programmes across Shikarpur, Jacobabad, Kashmor & Kandhkot and Larkana — donor-funded multi-year projects, health infrastructure, WASH and livelihood initiatives in Upper Sindh.",
};

export default function OngoingProjectsPage() {
  return (
    <div className="w-full font-sans bg-[#FBF9F5] text-neutral-900">

      {/* Header Banner */}
      <section className="bg-[#152238] text-white py-14 border-b border-[#253754]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white max-w-3xl">
            Ongoing Projects
          </h1>
          <p className="text-sm sm:text-base text-neutral-300 mt-2 max-w-2xl leading-relaxed">
            Every intervention currently running on the ground across Shikarpur, Jacobabad,
            Kashmor &amp; Kandhkot, and Larkana — from donor-funded multi-year programmes to
            community infrastructure built with local village committees.
          </p>
        </div>
      </section>

      {/* Ongoing Project Register */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <OngoingProjectsList />
      </section>

      {/* Support CTA */}
      <section className="w-full bg-[#152238] text-white py-14 border-t border-[#253754]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-[#0E1726] border border-[#253754] px-6 sm:px-10 py-8">
            <div>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
                Fund an Ongoing Project
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 mt-2 max-w-xl leading-relaxed">
                Contributions go directly towards handpumps, shelter kits, incubators and
                micro-enterprise toolkits currently being delivered in the field.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link
                href="/donate"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#8C241D] hover:bg-[#A62F27] text-white font-bold uppercase tracking-wider text-[10px] transition-colors border border-amber-500/30"
              >
                <Heart className="w-3.5 h-3.5 fill-current" />
                <span>Donate Now</span>
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-amber-400/40 text-amber-300 hover:bg-amber-400 hover:text-[#152238] font-bold uppercase tracking-wider text-[10px] transition-colors"
              >
                <span>Full Project Archive</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
