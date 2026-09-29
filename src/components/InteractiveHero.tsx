import React from "react";
import Link from "next/link";
import { Quote, ArrowRight, MapPin, Heart, Award } from "lucide-react";
import { CONTACT_LINKS } from "@/lib/data/organization";
import { EXECUTIVE_MESSAGE } from "@/lib/data/executiveMessage";

export default function InteractiveHero() {
  return (
    <section className="relative w-full bg-[#152238] text-white overflow-hidden font-sans border-b border-[#253754]">
      {/* Background Ajrak Accent Overlay */}
      <div className="absolute inset-0 opacity-10 bg-ajrak-pattern pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">

        {/* Message Eyebrow & Top Featured Donor Badge */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
          {/* Attention-Grabbing Featured Donor Tag — Muslim Charity, UK */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-gradient-to-r from-[#8C241D] via-[#A62F27] to-[#152238] text-white rounded-full shadow-lg border-2 border-amber-400/60 hover:border-amber-300 transition-all duration-300 hover:scale-105">
            <Heart className="w-4 h-4 text-amber-300 fill-amber-300 shrink-0" />
            <div className="flex items-center gap-1.5 text-xs font-mono">
              <span className="text-neutral-200 uppercase text-[10px] tracking-wider font-semibold">Main Donor Partner:</span>
              <strong className="text-amber-300 font-extrabold tracking-wide text-xs sm:text-sm">Muslim Charity, UK</strong>
            </div>
            <Award className="w-4 h-4 text-amber-400 shrink-0 ml-0.5" />
          </div>

          {/* Leadership Note Label — AFTER the tag */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.2em] text-amber-400 font-semibold bg-[#0E1726] px-3 py-1 border border-[#253754]">
              <Quote className="w-3.5 h-3.5" />
              <span>{EXECUTIVE_MESSAGE.eyebrow}</span>
            </div>
            <span className="hidden sm:inline text-[11px] font-mono uppercase tracking-[0.2em] text-neutral-400">
              {EXECUTIVE_MESSAGE.signature.designation} &middot; Development Institutions Network
            </span>
          </div>
        </div>

        <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.18] tracking-tight mt-3">
          {EXECUTIVE_MESSAGE.title}
        </h1>

        <div className="mt-4 mb-8 pb-6 border-b border-[#253754]">
          <p className="font-heading text-base sm:text-xl italic text-amber-300">
            {EXECUTIVE_MESSAGE.greeting}
          </p>
          <p className="font-heading text-lg sm:text-2xl font-bold text-white mt-1.5">
            {EXECUTIVE_MESSAGE.motto}
          </p>
        </div>

        {/* Message Body — Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-8">
            <div className="columns-1 md:columns-2 gap-8 space-y-4">
              {EXECUTIVE_MESSAGE.paragraphs.map((paragraph, idx) => (
                <p
                  key={idx}
                  className={`text-sm leading-relaxed text-neutral-300 break-inside-avoid mb-4 ${idx === 0 ? "text-base text-neutral-100 font-medium" : ""
                    }`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="bg-[#0E1726] border border-[#253754] p-6 sm:p-7">
              <div className="text-[11px] font-mono font-bold uppercase tracking-widest text-amber-400">
                Signature
              </div>
              <div className="w-12 h-1 bg-[#8C241D] mt-2" />

              <div className="mt-5">
                <p className="font-heading text-lg sm:text-xl font-bold text-white">
                  {EXECUTIVE_MESSAGE.signature.name}
                </p>
                <p className="text-sm text-amber-400 font-semibold mt-0.5">
                  {EXECUTIVE_MESSAGE.signature.designation}
                </p>
                <p className="text-xs text-neutral-400 mt-1.5">
                  {EXECUTIVE_MESSAGE.signature.organization}
                </p>
                <p className="text-xs text-neutral-500 font-mono mt-1">
                  {EXECUTIVE_MESSAGE.signature.location}
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-[#253754] space-y-2.5">
                <Link
                  href="/where-we-work"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#8C241D] hover:bg-[#A62F27] text-white font-bold uppercase tracking-wider text-[10px] transition-colors border border-amber-500/30"
                >
                  <span>View Ongoing Projects</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-300" />
                </Link>
                <Link
                  href="/about"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#1F2E48] hover:bg-[#2A3C5C] text-neutral-200 border border-[#374866] font-semibold uppercase tracking-wider text-[10px] transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-rose-400" />
                  <span>About Us</span>
                </Link>
              </div>

            </div>
          </aside>
        </div>
      </div>

    </section>
  );
}
