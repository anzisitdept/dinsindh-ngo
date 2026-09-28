"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  MapPin,
  Award,
  CheckCircle,
  ChevronRight,
  ChevronLeft,
  Layers,
  Quote
} from "lucide-react";
import { CONTACT_LINKS } from "@/lib/data/organization";
import { EXECUTIVE_MESSAGE } from "@/lib/data/executiveMessage";

const FEATURE_SLIDES = [
  {
    id: "slide-1",
    image: "/h-1.jpeg",
    alt: "DIN Pakistan Field Relief Action 1"
  },
  {
    id: "slide-2",
    image: "/h-2.jpeg",
    alt: "DIN Pakistan Field Relief Action 2"
  },
  {
    id: "slide-3",
    image: "/h-3.jpeg",
    alt: "DIN Pakistan Field Relief Action 3"
  },
  {
    id: "slide-4",
    image: "/h-4.jpeg",
    alt: "DIN Pakistan Field Relief Action 4"
  },
  {
    id: "slide-5",
    image: "/h-5.jpeg",
    alt: "DIN Pakistan Field Relief Action 5"
  }
];

export default function InteractiveHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState<"mission" | "impact" | "donors">("mission");

  const totalSlides = FEATURE_SLIDES.length + 1;
  const isMessageSlide = currentSlide === FEATURE_SLIDES.length;
  const activeFeature = FEATURE_SLIDES[currentSlide];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 6000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  const goNext = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const goPrev = () => setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));

  return (
    <section className="relative w-full bg-[#152238] text-white overflow-hidden font-sans border-b border-[#253754]">
      {/* Background Ajrak Accent Overlay */}
      <div className="absolute inset-0 opacity-10 bg-ajrak-pattern pointer-events-none" />

      {/* Mobile: Slide Label Strip */}
      <div className="relative z-20 lg:hidden bg-[#0E1726] border-b border-[#253754] px-4 py-2.5 flex items-center justify-between gap-3">
        <div className="min-w-0">
          <div className="text-[10px] font-mono uppercase tracking-widest text-amber-400 truncate">
            {isMessageSlide ? EXECUTIVE_MESSAGE.title : "Emergency Relief Operations"}
          </div>
          <div className="text-[11px] text-neutral-300 font-mono truncate">
            {isMessageSlide ? EXECUTIVE_MESSAGE.signature.name : `Field Action ${currentSlide + 1} of ${FEATURE_SLIDES.length}`}
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={goPrev}
            className="p-1.5 bg-[#152238] text-white hover:bg-[#8C241D] transition-colors border border-[#253754]"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={goNext}
            className="p-1.5 bg-[#152238] text-white hover:bg-[#8C241D] transition-colors border border-[#253754]"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Desktop: Slide Dot & Arrow Navigation Cluster */}
      <div className="absolute top-3 right-4 sm:right-6 lg:top-6 lg:right-8 z-30 hidden lg:flex items-center gap-2 p-2 bg-[#0E1726]/80 backdrop-blur-sm border border-[#253754] rounded-full">
        <button
          onClick={goPrev}
          className="p-1 text-white hover:text-amber-400 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <div className="flex items-center gap-2 px-1">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all ${idx === currentSlide ? "bg-amber-400 w-5" : "bg-neutral-500 hover:bg-neutral-300 w-2"
                }`}
              aria-label={`Go to slide ${idx + 1} of ${totalSlides}`}
            />
          ))}
        </div>
        <button
          onClick={goNext}
          className="p-1 text-white hover:text-amber-400 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {isMessageSlide ? (
        <div key={EXECUTIVE_MESSAGE.id} className="animate-hero-panel-in relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.2em] text-amber-400 font-semibold">
              <Quote className="w-3.5 h-3.5" />
              <span>{EXECUTIVE_MESSAGE.eyebrow}</span>
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
            <div className="max-w-5xl">
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

              <div className="mt-6 pt-6 border-t border-[#253754]">
                <p className="font-heading text-lg sm:text-xl font-bold text-white">
                  {EXECUTIVE_MESSAGE.signature.name}
                </p>
                <p className="text-sm text-amber-400 font-semibold mt-0.5">
                  {EXECUTIVE_MESSAGE.signature.designation}
                </p>
                <p className="text-xs text-neutral-400 mt-1.5">
                  {EXECUTIVE_MESSAGE.signature.organization}
                </p>
                <p className="text-xs text-neutral-500 font-mono">
                  {EXECUTIVE_MESSAGE.signature.location}
                </p>
              </div>
            </div>

          </div>
        </div>
      ) : (
        <div key={activeFeature.id} className="animate-hero-panel-in relative z-10">
          <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-12 min-h-[640px] items-stretch">

            {/* Left Column: Asymmetric Content (7 cols on desktop) */}
            <div className="lg:col-span-7 px-6 sm:px-8 lg:px-12 py-10 lg:py-16 flex flex-col justify-between order-1">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-[#8C241D]/90 border border-amber-500/40 px-3.5 py-1.5 text-xs uppercase tracking-widest text-amber-200 font-semibold shadow-sm">
                  <Layers className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Emergency Relief Operations</span>
                </div>

                <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.18] tracking-tight text-white">
                  Providing Urgent <span className="text-amber-400 underline decoration-rose-600 underline-offset-8">Emergency Relief</span> &amp; <span className="text-amber-300">Flood Recovery</span> in Sindh.
                </h1>

                <div className="pt-2">
                  <div className="flex border-b border-[#2A364F] space-x-6 text-xs uppercase tracking-wider font-semibold">
                    <button
                      onClick={() => setActiveTab("mission")}
                      className={`pb-2.5 transition-colors flex items-center space-x-1.5 ${activeTab === "mission" ? "border-b-2 border-amber-400 text-amber-400" : "text-neutral-400 hover:text-white"
                        }`}
                    >
                      <Layers className="w-3.5 h-3.5" />
                      <span>Relief Priorities</span>
                    </button>
                    <button
                      onClick={() => setActiveTab("impact")}
                      className={`pb-2.5 transition-colors flex items-center space-x-1.5 ${activeTab === "impact" ? "border-b-2 border-amber-400 text-amber-400" : "text-neutral-400 hover:text-white"
                        }`}
                    >
                      <Award className="w-3.5 h-3.5" />
                      <span>Relief Footprint</span>
                    </button>
                    <button
                      onClick={() => setActiveTab("donors")}
                      className={`pb-2.5 transition-colors flex items-center space-x-1.5 ${activeTab === "donors" ? "border-b-2 border-amber-400 text-amber-400" : "text-neutral-400 hover:text-white"
                        }`}
                    >
                      <CheckCircle className="w-3.5 h-3.5" />
                      <span>Verified Relief Donors</span>
                    </button>
                  </div>

                  <div className="mt-4 p-4 bg-[#0E1726] border border-[#253754] text-xs sm:text-sm text-neutral-300">
                    {activeTab === "mission" && (
                      <p className="leading-relaxed">
                        <strong className="text-amber-400 font-semibold">Emergency Mission:</strong> Deploying rapid flood response, clean water infrastructure, maternal medical aid, and shelter rehabilitation directly to affected union councils in Upper and Lower Sindh.
                      </p>
                    )}
                    {activeTab === "impact" && (
                      <div className="grid grid-cols-3 gap-3 text-center">
                        <div className="border-r border-neutral-800 pr-2">
                          <div className="font-heading font-extrabold text-amber-400 text-lg sm:text-xl">18+</div>
                          <div className="text-[10px] text-neutral-400 uppercase">Districts Active</div>
                        </div>
                        <div className="border-r border-neutral-800 pr-2">
                          <div className="font-heading font-extrabold text-amber-400 text-lg sm:text-xl">40</div>
                          <div className="text-[10px] text-neutral-400 uppercase">CBO Relief Hubs</div>
                        </div>
                        <div>
                          <div className="font-heading font-extrabold text-amber-400 text-lg sm:text-xl">250k+</div>
                          <div className="text-[10px] text-neutral-400 uppercase">Flood Victims Aided</div>
                        </div>
                      </div>
                    )}
                    {activeTab === "donors" && (
                      <p className="leading-relaxed text-neutral-300">
                        Trusted implementing partner for <strong className="text-white">Save the Children, IOM (UN Migration), DAI-USAID, UNDP/DTCE, ACTED International, Muslim Charity UK</strong>, and the Government of Sindh.
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="hidden lg:block mt-8">
                <div className="flex flex-row items-center gap-3 pt-2">
                  <Link
                    href="/donate"
                    className="inline-flex items-center space-x-2 px-6 py-3.5 bg-[#8C241D] hover:bg-[#A62F27] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg border border-amber-500/30 transition-all hover:translate-x-0.5"
                  >
                    <span>Donate to Relief Collection</span>
                    <ArrowRight className="w-4 h-4 text-amber-300" />
                  </Link>
                  <Link
                    href="/projects"
                    className="inline-flex items-center space-x-2 px-5 py-3.5 bg-[#1F2E48] hover:bg-[#2A3C5C] text-neutral-200 border border-[#374866] font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all"
                  >
                    <MapPin className="w-4 h-4 text-rose-400" />
                    <span>Explore Relief Projects</span>
                  </Link>
                </div>

                <div className="mt-8 pt-4 border-t border-[#253754] flex items-center justify-between text-xs text-neutral-400">
                  <span>HQ: {CONTACT_LINKS.fullAddress}</span>
                  <Link href="/donate" className="text-amber-400 hover:underline flex items-center space-x-1 font-medium">
                    <span>View Donation Collection Process</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column: Slide Field Photography (5 cols on desktop) */}
            <div className="lg:col-span-5 relative min-h-[300px] sm:min-h-[380px] lg:min-h-full border-t lg:border-t-0 lg:border-l border-[#2A364F] overflow-hidden order-2">
              <Image
                key={activeFeature.image}
                src={activeFeature.image}
                alt={activeFeature.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center animate-hero-panel-in"
                priority
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#152238] via-[#152238]/30 to-transparent lg:bg-gradient-to-r lg:from-[#152238] lg:via-transparent lg:to-transparent opacity-90" />
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
