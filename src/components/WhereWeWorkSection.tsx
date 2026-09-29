import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";
import { CORE_OPERATING_DISTRICTS } from "@/lib/data/districts";

export default function WhereWeWorkSection() {
  return (
    <section className="w-full bg-[#FBF9F5] py-16 border-b border-[#E2DDD5] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b-2 border-[#152238]">
          <div>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#152238] leading-tight">
              Where We Work
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 mt-1">
              Core Operating Districts across Sindh
            </p>
          </div>

          <Link
            href="/where-we-work"
            className="mt-4 md:mt-0 text-xs font-semibold uppercase tracking-wider text-[#8C241D] hover:text-[#152238] flex items-center space-x-1 shrink-0"
          >
            <span>View All Districts & Projects</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Pure Image-Based District Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_OPERATING_DISTRICTS.map((district) => (
            <Link
              key={district.id}
              href={`/where-we-work?district=${encodeURIComponent(district.name.split(" & ")[0])}`}
              className="group relative h-72 sm:h-80 lg:h-96 w-full overflow-hidden border border-[#E2DDD5] shadow-md hover:shadow-xl transition-all duration-300 block"
            >
              {/* Image */}
              <Image
                src={district.landmarkImage || "/shikarpur.jpg"}
                alt={district.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E1726]/90 via-[#0E1726]/30 to-transparent group-hover:from-[#8C241D]/90 group-hover:via-[#0E1726]/40 transition-colors duration-300" />



              {/* Title & Heading Overlay on Image */}
              <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col justify-end">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-mono font-semibold uppercase tracking-wider mb-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0" />
                  <span>{district.region}</span>
                </div>
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white group-hover:text-amber-300 transition-colors leading-tight">
                  {district.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
