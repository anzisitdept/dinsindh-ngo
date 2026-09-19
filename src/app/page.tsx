import React from "react";
import Link from "next/link";
import Image from "next/image";
import InteractiveHero from "@/components/InteractiveHero";
import CredibilityTicker from "@/components/CredibilityTicker";
import ProjectSpotlightFilmstrip from "@/components/ProjectSpotlightFilmstrip";
import InteractiveSindhMap from "@/components/InteractiveSindhMap";
import { PROGRAM_AREAS } from "@/lib/data/programs";
import { PARTNERS_DATA } from "@/lib/data/partners";
import { ORGANIZATION_DATA } from "@/lib/data/organization";
import { ArrowUpRight, ArrowRight, ShieldCheck, CheckCircle2, Building2, MapPin, Users, Award } from "lucide-react";

export default function HomePage() {
  return (
    <div className="w-full font-sans bg-[#FBF9F5]">
      
      {/* 1. Asymmetric Interactive Hero */}
      <InteractiveHero />

      {/* 2. Horizontal Credibility Ticker */}
      <CredibilityTicker />

      {/* 3. Who We Are — Condensed Institutional Narrative */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#E2DDD5]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs uppercase tracking-widest text-[#8C241D] font-mono font-bold">
              Institutional Baseline • Established 2000
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#152238] leading-tight">
              A Quarter-Century of Grassroots Institutional Development in Sindh.
            </h2>
            <div className="w-16 h-1 bg-[#8C241D]" />
          </div>

          <div className="lg:col-span-7 space-y-5 text-sm text-neutral-700 leading-relaxed font-sans">
            <p className="text-base text-neutral-800 font-medium leading-relaxed">
              DIN Pakistan (Development Institutions' Network) is a legally registered non-governmental organization (Societies Registration Act XXI of 1860, Reg. No. 01222) dedicated to sustainable rural development, interfaith peace, maternal health, and disaster recovery across 18 districts of Sindh.
            </p>
            <p>
              With a federated network of <strong className="text-[#152238]">40 affiliated Community-Based Organizations (CBOs)</strong> and 18 executed donor projects, DIN bridges grassroots community needs with major funding bodies including Save the Children, IOM (UN Migration), DAI-USAID, UNDP/DTCE, and the Government of Sindh.
            </p>
            
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#8C241D] hover:text-[#152238] transition-colors border-b-2 border-[#8C241D] pb-0.5"
              >
                <span>Read Full Institutional Profile</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about/legal"
                className="inline-flex items-center space-x-1.5 text-xs font-mono text-neutral-600 hover:text-[#8C241D]"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>Verify Registration & NTN</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Featured Programs — Magazine Style Horizontal Rule List (NO Icon Grid) */}
      <section className="w-full bg-[#152238] text-white py-16 border-b border-[#253754]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-[#253754]">
            <div>
              <div className="text-xs uppercase tracking-widest text-amber-400 font-mono font-semibold mb-1">
                Thematic Areas of Action
              </div>
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

      {/* 5. Project Spotlight Filmstrip */}
      <ProjectSpotlightFilmstrip />

      {/* 6. Interactive Sindh Map Section */}
      <InteractiveSindhMap />

      {/* 7. Donor & Partner Registry Strip */}
      <section className="w-full bg-[#F5F3ED] py-14 border-b border-[#E2DDD5] text-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="text-xs uppercase tracking-widest text-[#8C241D] font-mono font-bold mb-1">
              Institutional Donors & Partners
            </div>
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#152238]">
              Collaborating International & Government Institutions
            </h3>
          </div>

          {/* Typographic Partner Badges */}
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
              View Complete Partner Directory & 40 CBO Affiliations →
            </Link>
          </div>

        </div>
      </section>

      {/* 8. Institutional Call to Action */}
      <section className="w-full bg-[#8C241D] text-white py-16 font-sans">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 bg-amber-400 text-slate-950 font-bold px-3 py-1 text-xs uppercase tracking-widest font-mono">
            <ShieldCheck className="w-4 h-4" />
            <span>Partner With DIN Pakistan</span>
          </div>
          
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white max-w-3xl mx-auto leading-tight">
            Ready to Co-Implement High-Impact Community Interventions in Sindh?
          </h2>

          <p className="text-sm sm:text-base text-amber-100 max-w-2xl mx-auto leading-relaxed">
            Whether you are an international donor, government department, or community foundation seeking a verified local implementing partner with 25 years of field experience in Upper & Lower Sindh.
          </p>

          <div className="pt-2 flex flex-wrap justify-center items-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-[#152238] hover:bg-[#0E1726] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider shadow-xl transition-all border border-amber-400/30"
            >
              Initiate Partnership Dialogue
            </Link>
            <Link
              href="/about/legal"
              className="px-8 py-3.5 bg-white text-[#8C241D] hover:bg-neutral-100 text-xs sm:text-sm font-semibold uppercase tracking-wider shadow-md transition-all"
            >
              Download Legal Audits
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
