import React from "react";
import InteractiveSindhMap from "@/components/InteractiveSindhMap";

export const metadata = {
  title: "Where We Work — Interactive Sindh District Map | DIN Pakistan",
  description: "Explore DIN Pakistan's active program footprint across 18 districts of Sindh including Shikarpur, Jacobabad, Kashmor, Sukkur, Ghotki, Khairpur, Dadu, and Thatta.",
};

export default function WhereWeWorkPage() {
  return (
    <div className="w-full font-sans bg-[#FBF9F5] text-neutral-900">
      
      {/* Header Banner */}
      <section className="bg-[#152238] text-white py-14 border-b border-[#253754]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs uppercase tracking-widest text-amber-400 font-mono font-semibold mb-2">
            Geographic Coverage
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white max-w-3xl">
            Where We Work Across Sindh
          </h1>
          <p className="text-sm sm:text-base text-neutral-300 mt-2 max-w-2xl leading-relaxed">
            DIN operates through district secretariats and 40 federated CBO networks spanning Upper, Central, Lower, and Coastal Sindh.
          </p>
        </div>
      </section>

      <InteractiveSindhMap />

    </div>
  );
}
