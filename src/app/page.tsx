import React from "react";
import Link from "next/link";
import InteractiveHero from "@/components/InteractiveHero";
import OngoingProjectSpotlight from "@/components/OngoingProjectSpotlight";
import ProjectSpotlightFilmstrip from "@/components/ProjectSpotlightFilmstrip";
import { PROGRAM_AREAS } from "@/lib/data/programs";
import { PARTNERS_DATA } from "@/lib/data/partners";
import { ArrowUpRight, ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="w-full font-sans bg-[#FBF9F5]">
      
      {/* 1. Asymmetric Interactive Hero */}
      <InteractiveHero />

      {/* 2. Current Ongoing Project — Solo Spotlight */}
      <OngoingProjectSpotlight />

      {/* 3. Featured Programs */}
      <section className="w-full bg-[#152238] text-white py-16 border-b border-[#253754]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-[#253754]">
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                Core Program Pillars
              </h2>
            </div>
            <Link
              href="/programs"
              className="mt-4 md:mt-0 text-xs font-semibold uppercase tracking-wider text-amber-400 hover:text-white flex items-center space-x-1"
            >
              <span>Explore All 8 Program Areas</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Editorial List (Large Number + Program Title + Description) */}
          <div className="divide-y divide-[#253754]">
            {PROGRAM_AREAS.slice(0, 5).map((program, idx) => (
              <div
                key={program.slug}
                className="py-6 sm:py-8 group hover:bg-[#1A2840] transition-colors px-4 -mx-4 grid grid-cols-1 lg:grid-cols-12 gap-4 items-center"
              >
                {/* Number & Title */}
                <div className="lg:col-span-5 flex items-baseline space-x-4">
                  <span className="font-heading font-extrabold text-2xl sm:text-3xl text-rose-500 font-mono">
                    0{idx + 1}
                  </span>
                  <Link
                    href={`/programs/${program.slug}`}
                    className="font-heading font-bold text-xl sm:text-2xl text-white group-hover:text-amber-400 transition-colors"
                  >
                    {program.title}
                  </Link>
                </div>

                {/* Description */}
                <div className="lg:col-span-5 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {program.description}
                </div>

                {/* Arrow Action */}
                <div className="lg:col-span-2 text-left lg:text-right pt-2 lg:pt-0">
                  <Link
                    href={`/programs/${program.slug}`}
                    className="inline-flex items-center space-x-1 text-xs font-bold uppercase tracking-wider text-amber-400 group-hover:text-white transition-colors"
                  >
                    <span>Inspect Scope</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Project Spotlight Filmstrip */}
      <ProjectSpotlightFilmstrip />

      {/* 5. Donor & CBO Registry Strip */}
      <section className="w-full bg-[#F5F3ED] py-14 border-b border-[#E2DDD5] text-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-8">
            <h3 className="inline-block font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#152238] leading-tight relative pb-3">
              Our Donors
              <span className="absolute left-0 bottom-0 h-1 w-full bg-[#8C241D]" />
              <span className="absolute left-0 bottom-0 h-1 w-1/3 bg-amber-400" />
            </h3>
          </div>

          {/* Typographic Donor Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {PARTNERS_DATA.map((partner) => (
              <div
                key={partner.id}
                className="p-3 bg-white border border-[#E2DDD5] text-center flex flex-col justify-center items-center shadow-xs hover:border-[#8C241D] transition-colors"
              >
                <div className="font-heading font-extrabold text-xs sm:text-sm text-[#152238] uppercase tracking-wide">
                  {partner.logoText}
                </div>
                <div className="text-[9px] text-neutral-500 font-mono mt-0.5">
                  {partner.category}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-6">
            <Link
              href="/partners"
              className="text-xs font-bold uppercase tracking-wider text-[#8C241D] hover:underline"
            >
              View Our Donors Directory & 40 CBO Affiliations →
            </Link>
          </div>

        </div>
      </section>

      {/* 6. Animated Emergency Relief & Donation Collection Call to Action */}
      <section className="relative w-full bg-[#8C241D] text-white py-20 font-sans overflow-hidden">
        {/* Animated Radar Pulse Background Effect */}
        <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
          <div className="w-[500px] h-[500px] rounded-full border-2 border-amber-300 animate-ping" />
        </div>

        <div className="max-w-5xl mx-auto px-4 text-center space-y-8 relative z-10">
          
          {/* Animated Heartbeat / Collection Counter Badge */}
          <div className="inline-flex items-center space-x-2 bg-amber-400 text-slate-950 font-bold px-4 py-1.5 text-xs uppercase tracking-wider shadow-lg rounded-full animate-bounce">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-600 animate-pulse" />
            <span>Active Emergency Relief Collection Campaign</span>
          </div>
          
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white max-w-3xl mx-auto leading-tight">
            Your Donation Directly Feeds & Shelters Flood-Affected Families in Sindh.
          </h2>

          <p className="text-base sm:text-lg text-amber-100 max-w-2xl mx-auto leading-relaxed">
            100% of collection funds go directly toward urgent food rations, clean handpump installations, and emergency shelter kits across 18 districts.
          </p>

          {/* Interactive Collection Impact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left max-w-3xl mx-auto my-6">
            <div className="p-4 bg-[#6E1C16] border border-amber-400/30 rounded-xs space-y-1">
              <div className="text-amber-300 font-bold text-xs uppercase">Emergency Food Rations</div>
              <div className="text-white font-extrabold text-lg">PKR 7,000 / Kit</div>
              <p className="text-xs text-amber-100/80">Feeds a family of 6 for 30 days with essential flour, oil & pulses.</p>
            </div>
            <div className="p-4 bg-[#6E1C16] border border-amber-400/30 rounded-xs space-y-1">
              <div className="text-amber-300 font-bold text-xs uppercase">Clean Drinking Water</div>
              <div className="text-white font-extrabold text-lg">PKR 42,000 / Handpump</div>
              <p className="text-xs text-amber-100/80">Installs a communal deep water pump serving 25 rural families.</p>
            </div>
            <div className="p-4 bg-[#6E1C16] border border-amber-400/30 rounded-xs space-y-1">
              <div className="text-amber-300 font-bold text-xs uppercase">Disaster Shelter Kit</div>
              <div className="text-white font-extrabold text-lg">PKR 98,000 / Unit</div>
              <p className="text-xs text-amber-100/80">Provides heavy duty waterproof tarpaulins, bamboo & tools.</p>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap justify-center items-center gap-4">
            <Link
              href="/donate"
              className="px-8 py-4 bg-[#152238] hover:bg-[#0E1726] text-amber-300 font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-2xl transition-all border border-amber-400 scale-105 hover:scale-110 flex items-center space-x-2"
            >
              <span>Donate to Relief Collection</span>
              <ArrowRight className="w-4 h-4 text-amber-300" />
            </Link>
            <Link
              href="/donate"
              className="px-8 py-4 bg-white text-[#8C241D] hover:bg-neutral-100 text-xs sm:text-sm font-semibold uppercase tracking-wider shadow-md transition-all"
            >
              Donate Us
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
