"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, MapPin, Award, CheckCircle, ChevronRight, Layers, ChevronLeft } from "lucide-react";
import { ORGANIZATION_DATA } from "@/lib/data/organization";

export default function InteractiveHero() {
  const [activeTab, setActiveTab] = useState<"mission" | "impact" | "donors">("mission");
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image: "/h-1.jpeg",
      title: "Disaster Relief & Community Shelters",
      location: "SHIKARPUR & JACOBABAD DISTRICTS",
      description: "Constructing disaster-resilient shelters and distributing emergency relief packs to flood-affected rural families."
    },
    {
      image: "/h-2.jpeg",
      title: "Clean Drinking Water Handpumps",
      location: "KASHMOR & GHOTKI DISTRICTS",
      description: "Installing communal deep water handpumps to provide safe drinking water to remote rural villages."
    },
    {
      image: "/h-3.jpeg",
      title: "Women Artisan Livelihood Toolkits",
      location: "DADU & KHAIRPUR DISTRICTS",
      description: "Providing sewing machines, livestock starter kits, and micro-shop inventory to empower women-headed households."
    }
  ];

  // Auto-switch slides every 4.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <section className="relative w-full bg-[#152238] text-white overflow-hidden font-sans border-b border-[#253754]">
      {/* Background Ajrak Accent Overlay */}
      <div className="absolute inset-0 opacity-10 bg-ajrak-pattern pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-12 min-h-[640px] items-stretch">
        
        {/* Left Column: Asymmetric Content (7 cols on desktop) */}
        <div className="lg:col-span-7 px-6 sm:px-8 lg:px-12 py-10 lg:py-16 flex flex-col justify-between z-10 order-1">
          
          <div className="space-y-6">
            {/* Top Institutional Badge */}
            <div className="inline-flex items-center space-x-2 bg-[#8C241D]/90 border border-amber-500/40 px-3.5 py-1.5 text-xs uppercase tracking-widest text-amber-200 font-semibold shadow-sm">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Registered NGO • Reg. No. {ORGANIZATION_DATA.registrationNumber} (Societies Act 1860)</span>
            </div>

            {/* Ultra Simple Plain English Headline */}
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.18] tracking-tight text-white">
              Helping Rural Families in Sindh With <span className="text-amber-400 underline decoration-rose-600 underline-offset-8">Clean Water</span>, <span className="text-amber-300">Safe Homes</span> & <span className="text-rose-300">Jobs</span>.
            </h1>

            {/* Ultra Simple Plain English Subtitle */}
            <p className="text-base sm:text-lg text-neutral-200 leading-relaxed font-sans max-w-2xl">
              Working for <span className="text-amber-400 font-bold bg-[#0E1726] px-2 py-0.5 border border-[#253754]">25+ Years Across 18 Districts</span>. Together with international donors and <span className="text-amber-400 font-bold bg-[#0E1726] px-2 py-0.5 border border-[#253754]">40 Local Community Groups</span>, DIN Pakistan helps poor families rebuild their lives after floods.
            </p>

            {/* Interactive Tab Switcher */}
            <div className="pt-2">
              <div className="flex border-b border-[#2A364F] space-x-6 text-xs uppercase tracking-wider font-semibold">
                <button
                  onClick={() => setActiveTab("mission")}
                  className={`pb-2.5 transition-colors flex items-center space-x-1.5 ${
                    activeTab === "mission" ? "border-b-2 border-amber-400 text-amber-400" : "text-neutral-400 hover:text-white"
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Our Core Mission</span>
                </button>
                <button
                  onClick={() => setActiveTab("impact")}
                  className={`pb-2.5 transition-colors flex items-center space-x-1.5 ${
                    activeTab === "impact" ? "border-b-2 border-amber-400 text-amber-400" : "text-neutral-400 hover:text-white"
                  }`}
                >
                  <Award className="w-3.5 h-3.5" />
                  <span>25-Year Footprint</span>
                </button>
                <button
                  onClick={() => setActiveTab("donors")}
                  className={`pb-2.5 transition-colors flex items-center space-x-1.5 ${
                    activeTab === "donors" ? "border-b-2 border-amber-400 text-amber-400" : "text-neutral-400 hover:text-white"
                  }`}
                >
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Verified Donors</span>
                </button>
              </div>

              {/* Dynamic Tab Content Box */}
              <div className="mt-4 p-4 bg-[#0E1726] border border-[#253754] text-xs sm:text-sm text-neutral-300">
                {activeTab === "mission" && (
                  <p className="leading-relaxed">
                    <strong className="text-amber-400 font-semibold">Vision:</strong> A society where rural communities in Sindh possess equal economic opportunities, peaceful cultural harmony, and self-sustaining community institutions.
                  </p>
                )}
                {activeTab === "impact" && (
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="border-r border-neutral-800 pr-2">
                      <div className="font-heading font-extrabold text-amber-400 text-lg sm:text-xl">18+</div>
                      <div className="text-[10px] text-neutral-400 uppercase">Projects Executed</div>
                    </div>
                    <div className="border-r border-neutral-800 pr-2">
                      <div className="font-heading font-extrabold text-amber-400 text-lg sm:text-xl">40</div>
                      <div className="text-[10px] text-neutral-400 uppercase">Affiliated CBOs</div>
                    </div>
                    <div>
                      <div className="font-heading font-extrabold text-amber-400 text-lg sm:text-xl">250k+</div>
                      <div className="text-[10px] text-neutral-400 uppercase">Lives Impacted</div>
                    </div>
                  </div>
                )}
                {activeTab === "donors" && (
                  <p className="leading-relaxed text-neutral-300">
                    Trusted partner for <strong className="text-white">Save the Children, IOM (UN Migration), DAI-USAID, UNDP/DTCE, ACTED International, Muslim Charity UK</strong>, and the Government of Sindh.
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Desktop Only Buttons & Legal Strip */}
          <div className="hidden lg:block mt-8">
            <div className="flex flex-row items-center gap-3 pt-2">
              <Link
                href="/projects"
                className="inline-flex items-center space-x-2 px-5 py-3 bg-[#8C241D] hover:bg-[#A62F27] text-white font-semibold text-xs sm:text-sm uppercase tracking-wider shadow-lg border border-amber-500/20 transition-all hover:translate-x-0.5"
              >
                <span>Explore Project Archive</span>
                <ArrowRight className="w-4 h-4 text-amber-300" />
              </Link>
              <Link
                href="/where-we-work"
                className="inline-flex items-center space-x-2 px-5 py-3 bg-[#1F2E48] hover:bg-[#2A3C5C] text-neutral-200 border border-[#374866] font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all"
              >
                <MapPin className="w-4 h-4 text-rose-400" />
                <span>Sindh Coverage Map</span>
              </Link>
            </div>

            <div className="mt-8 pt-4 border-t border-[#253754] flex items-center justify-between text-xs text-neutral-400">
              <span>HQ: Station Road, Shikarpur, Sindh</span>
              <Link href="/about/legal" className="text-amber-400 hover:underline flex items-center space-x-1 font-medium">
                <span>View Registration Certificate</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

        {/* Right Column: Hero Field Photography Slideshow (5 cols on desktop, Order 2 on mobile) */}
        <div className="lg:col-span-5 relative min-h-[300px] sm:min-h-[380px] lg:min-h-full border-t lg:border-t-0 lg:border-l border-[#2A364F] overflow-hidden group order-2">
          
          {/* Slideshow Container */}
          <div className="absolute inset-0">
            {heroSlides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <Image
                  src={slide.image}
                  alt="Hero slide"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-center w-full h-full"
                  priority={index === 0}
                />
                {/* Gradient Overlays for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#152238] via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#152238] lg:via-transparent lg:to-transparent opacity-85" />
              </div>
            ))}
          </div>

          {/* Manual Slide Navigation Arrows */}
          <button
            onClick={() => setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 bg-[#0E1726]/80 text-white hover:bg-[#8C241D] transition-colors border border-[#253754] opacity-80 group-hover:opacity-100"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2 bg-[#0E1726]/80 text-white hover:bg-[#8C241D] transition-colors border border-[#253754] opacity-80 group-hover:opacity-100"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Slide Indicator Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2 p-2 bg-[#0E1726]/80 backdrop-blur-sm border border-[#253754] rounded-full">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === currentSlide ? "bg-amber-400 w-5" : "bg-neutral-500 hover:bg-neutral-300 w-2"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

        {/* Mobile Only: 2 Buttons in a single row directly below slider images */}
        <div className="block lg:hidden order-3 px-4 py-4 bg-[#0E1726] border-t border-[#253754] z-10">
          <div className="flex items-center justify-between gap-2">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center space-x-1.5 px-3 py-2.5 bg-[#8C241D] hover:bg-[#A62F27] text-white font-semibold text-[11px] sm:text-xs uppercase tracking-wider shadow-md border border-amber-500/20 text-center flex-1"
            >
              <span>Explore Project Archive</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-300 shrink-0" />
            </Link>

            <Link 
              href="/about/legal" 
              className="inline-flex items-center justify-center space-x-1 px-3 py-2.5 bg-[#1F2E48] border border-[#374866] text-amber-400 hover:text-amber-300 font-semibold text-[11px] sm:text-xs text-center flex-1"
            >
              <span>View Registration</span>
              <ChevronRight className="w-3.5 h-3.5 shrink-0" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
