"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowUpRight, Calendar, MapPin, Award, X, ZoomIn } from "lucide-react";

export default function ProjectSpotlightFilmstrip() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Modal Popup state
  const [activeModalProject, setActiveModalProject] = useState<any | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveModalProject(null);
      }
    };
    if (activeModalProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeModalProject]);

  // Custom Spotlight Projects List with image gallery arrays
  const spotlightProjects = [
    {
      id: "spot-1",
      title: "Ambulance Donated to BHU Haji Khuwasti District Shikarpur",
      district: "District Shikarpur",
      programTitle: "Emergency Health Relief",
      donor: "DIN Pakistan Donor Support",
      summary: "Emergency medical transfer vehicle donated to Basic Health Unit (BHU) Haji Khuwasti to ensure immediate 24/7 life-saving patient transport for rural villagers.",
      beneficiaryCount: "25,000+ Villagers",
      featuredImage: "/amb.jpeg",
      gallery: ["/ambulance/1.jpeg", "/ambulance/2.jpeg", "/ambulance/3.jpeg", "/ambulance/4.jpeg", "/ambulance/5.jpeg"],
      slug: "ambulance-donated-bhu-haji-khuwasti"
    },
    {
      id: "spot-incubators",
      title: "Provision and Installation of Incubators",
      district: "District Shikarpur Healthcare Facilities",
      programTitle: "Healthcare & Neonatal Life-Support",
      donor: "Muslim Charity Pakistan & DIN",
      summary: "Provision and installation of specialized medical infant incubators at public healthcare facilities to support vulnerable newborns and reduce infant mortality.",
      beneficiaryCount: "1,200+ Newborn Infants & Mothers",
      featuredImage: "/incubators.jpeg",
      gallery: ["/incubators/1.jpeg", "/incubators/2.jpeg", "/incubators/3.jpeg", "/incubators/4.jpeg", "/incubators/5.jpeg", "/incubators/6.jpeg"],
      slug: "provision-installation-incubators"
    },
    {
      id: "spot-2",
      title: "Installation of Electric Water Cooler at RBUT Hospital District Shikarpur",
      district: "District Shikarpur",
      programTitle: "Public WASH & Healthcare",
      donor: "Community Welfare Support",
      summary: "Installing heavy-duty electric water cooling filtration units at Rai Bahadur Udhavdas Tarachand (RBUT) Civil Hospital to serve daily patients & visitors.",
      beneficiaryCount: "1,500+ Daily Patients",
      featuredImage: "/water-cooler.jpeg",
      gallery: ["/water-cooler/1.jpeg", "/water-cooler/2.jpeg", "/water-cooler/3.jpeg", "/water-cooler/4.jpeg", "/water-cooler/5.jpeg", "/water-cooler/6.jpeg"],
      slug: "electric-water-cooler-rbut-hospital"
    },
    {
      id: "spot-3",
      title: "Construction of Solar Water Well",
      district: "Rural Sindh",
      programTitle: "Clean Water Infrastructure",
      donor: "DIN Water Relief Drive",
      summary: "Installing solar-powered deep water tubewells to provide reliable, zero-carbon clean drinking water access for remote off-grid communities.",
      beneficiaryCount: "3,200+ Household Members",
      featuredImage: "/soler-water-wall.jpeg",
      gallery: ["/soler-water-wall/1.jpeg", "/soler-water-wall/2.jpeg", "/soler-water-wall/3.jpeg", "/soler-water-wall/4.jpeg", "/soler-water-wall/5.jpeg"],
      slug: "construction-solar-water-well"
    },
    {
      id: "spot-handpump",
      title: "Installation of Hand Pump",
      district: "Rural Sindh Villages",
      programTitle: "WASH & Clean Drinking Water",
      donor: "Muslim Charity & DIN Pakistan",
      summary: "Installing communal deep water handpumps to provide safe, accessible drinking water for unserved rural village households.",
      beneficiaryCount: "2,500+ Rural Villagers",
      featuredImage: "/hand-pump.jpeg",
      gallery: ["/hand-pump/1.jpeg", "/hand-pump/2.jpeg", "/hand-pump/3.jpeg", "/hand-pump/4.jpeg", "/hand-pump/5.jpeg", "/hand-pump/6.jpeg"],
      slug: "installation-communal-hand-pump"
    },
    {
      id: "spot-4",
      title: "Vegetable Cart Business Start-Up Project (Livelihood)",
      district: "Shikarpur & Surrounding UC",
      programTitle: "Livelihood & Economic Aid",
      donor: "Livelihood Empowerment Fund",
      summary: "Providing customized mobile vegetable push-carts, fresh produce inventory, and micro-business toolkits to empower deserving individuals with sustainable daily earning opportunities.",
      beneficiaryCount: "450+ Local Vendors",
      featuredImage: "/veg-cart.jpeg",
      gallery: ["/veg-cart.jpeg"],
      slug: "new-business-startup-livelihood"
    },
    {
      id: "spot-fruit-cart",
      title: "Fruit Cart Business Start-Up (Livelihood)",
      district: "Shikarpur & Surrounding UC",
      programTitle: "Livelihood & Economic Aid",
      donor: "Livelihood Empowerment Fund",
      summary: "Providing customized mobile fruit push-carts, seasonal fresh fruit inventory, and micro-enterprise toolkits to empower local vendors with sustainable daily income.",
      beneficiaryCount: "Local Fruit Vendors",
      featuredImage: "/f-cart-1.jpeg",
      gallery: ["/f-cart-2.jpeg", "/f-cart-3.jpeg"],
      slug: "fruit-cart-business-startup"
    },
    {
      id: "spot-5",
      title: "Fiddayah & Fitrana Distribution",
      district: "Flood & Poverty Vulnerable Areas",
      programTitle: "Emergency Food Security",
      donor: "Disaster Relief Drive",
      summary: "Distributing comprehensive monthly food ration packages containing essential flour, cooking oil, pulses, and nutrition items to deserving families.",
      beneficiaryCount: "5,000+ Families",
      featuredImage: "/fidaya.jpeg",
      gallery: ["/Fiddaya & Fitna/1.jpeg", "/Fiddaya & Fitna/2.jpeg", "/Fiddaya & Fitna/3.jpeg", "/Fiddaya & Fitna/4.jpeg", "/Fiddaya & Fitna/5.jpeg", "/Fiddaya & Fitna/6.jpeg", "/Fiddaya & Fitna/7.jpeg", "/Fiddaya & Fitna/8.jpeg"],
      slug: "ration-distribution-needy-people"
    },
    {
      id: "spot-6",
      title: "Inauguration of Jamia Masjid",
      district: "Rural Sindh Community Center",
      programTitle: "Community Infrastructure",
      donor: "Local & Donor Philanthropy",
      summary: "Constructing and opening a community Jamia Masjid center to serve as a hub for local spiritual worship, social gatherings, and community unity.",
      beneficiaryCount: "Local Village Community",
      featuredImage: "/masjid-cover.jpeg",
      gallery: ["/masjid-construction/1.jpeg", "/masjid-construction/2.jpeg", "/masjid-construction/3.jpeg", "/masjid-construction/4.jpeg", "/masjid-construction/5.jpeg", "/masjid-construction/6.jpeg", "/masjid-construction/7.jpeg", "/masjid-construction/8.jpeg"],
      slug: "inauguration-jamia-masjid"
    },
    {
      id: "spot-7",
      title: "Chips Fries Cart Start-Up (Livelihood)",
      district: "District Shikarpur & Rural UCs",
      programTitle: "Livelihood & Micro-Enterprise",
      donor: "Livelihood Support Program",
      summary: "Providing equipped mobile french-fry and snacks push-carts with cooking equipment and starter supplies to enable sustainable daily micro-enterprise earnings.",
      beneficiaryCount: "Local Micro-Entrepreneurs",
      featuredImage: "/chips-fries.jpeg",
      gallery: ["/chips-fries.jpeg"],
      slug: "chips-fries-cart-startup"
    },
    {
      id: "spot-8",
      title: "Confectionery Cabin Start-Up (Livelihood)",
      district: "District Shikarpur & Surrounding Areas",
      programTitle: "Livelihood & Micro-Enterprise",
      donor: "Livelihood Support Program",
      summary: "Establishing roadside confectionery cabins stocked with retail snacks and goods to empower vulnerable heads of households with stable daily income.",
      beneficiaryCount: "Micro-Retail Vendors",
      featuredImage: "/cabin.jpeg",
      gallery: ["/cabin.jpeg"],
      slug: "confectionery-cabin-startup"
    }
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -420 : 420;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const openProjectGallery = (project: any) => {
    setActiveModalProject(project);
    setActiveImageIndex(0);
  };

  return (
    <section className="w-full bg-[#F5F3ED] py-16 border-b border-[#E2DDD5] text-neutral-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b-2 border-[#152238]">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#8C241D] font-bold font-mono mb-1">
              Field Operations & Track Record
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#152238]">
              Project Spotlight & Field Filmstrip
            </h2>
          </div>

          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Link
              href="/projects"
              className="text-xs font-semibold uppercase tracking-wider text-[#8C241D] hover:text-[#152238] flex items-center space-x-1"
            >
              <span>View All 18 Archive Projects</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => scroll("left")}
                className="p-2.5 bg-[#152238] text-white hover:bg-[#8C241D] transition-colors border border-neutral-700"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="p-2.5 bg-[#152238] text-white hover:bg-[#8C241D] transition-colors border border-neutral-700"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Film-strip Scroll Container */}
        <div
          ref={scrollContainerRef}
          className="flex space-x-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-6"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {spotlightProjects.map((project) => (
            <div
              key={project.id}
              className="shrink-0 w-[320px] sm:w-[380px] lg:w-[420px] bg-white border border-[#E2DDD5] shadow-sm snap-start group flex flex-col justify-between"
            >
              {/* Image Box - Click to Open Lightbox Popup */}
              <div
                onClick={() => openProjectGallery(project)}
                className="relative h-56 w-full overflow-hidden bg-neutral-900 border-b border-[#E2DDD5] cursor-pointer"
              >
                <Image
                  src={project.featuredImage}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 320px, (max-width: 1024px) 380px, 420px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Subtle Hover Zoom Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-2 text-white text-xs font-semibold uppercase tracking-wider">
                  <ZoomIn className="w-5 h-5 text-amber-400" />
                  <span>View Project Gallery</span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-2 text-xs font-mono text-neutral-500 mb-2">
                    <MapPin className="w-3.5 h-3.5 text-rose-600" />
                    <span>{project.district}</span>
                    <span>•</span>
                    <span className="text-[#8C241D] font-semibold">{project.programTitle}</span>
                  </div>

                  <h3
                    onClick={() => openProjectGallery(project)}
                    className="font-heading font-bold text-lg text-[#152238] group-hover:text-[#8C241D] transition-colors leading-snug cursor-pointer"
                  >
                    {project.title}
                  </h3>

                  <p className="text-xs text-neutral-600 mt-2.5 leading-relaxed line-clamp-3">
                    {project.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E2DDD5] flex items-center justify-between">
                  <span className="text-xs font-mono text-neutral-500">
                    Reach: <strong className="text-neutral-800">{project.beneficiaryCount}</strong>
                  </span>
                  <button
                    onClick={() => openProjectGallery(project)}
                    className="text-xs font-bold uppercase tracking-wider text-[#8C241D] hover:text-[#152238] flex items-center space-x-1"
                  >
                    <span>View Photos</span>
                    <ZoomIn className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Gallery Centered Modal Popup */}
      {activeModalProject && (
        <div
          onClick={() => setActiveModalProject(null)}
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
        >
          {/* Modal Container Card */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl max-h-[90vh] bg-[#0E1726] border border-[#253754] text-white rounded-xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-[#253754] bg-[#152238]">
              <div>
                <div className="text-[11px] font-mono text-amber-400 font-semibold uppercase tracking-wider">
                  {activeModalProject.programTitle} • {activeModalProject.district}
                </div>
                <h3 className="font-heading font-bold text-base sm:text-lg text-white truncate max-w-md sm:max-w-xl">
                  {activeModalProject.title}
                </h3>
              </div>

              <button
                onClick={() => setActiveModalProject(null)}
                className="p-1.5 bg-[#1F2E48] hover:bg-[#8C241D] text-white rounded-lg transition-colors border border-[#374866]"
                aria-label="Close Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Image Box */}
            <div className="relative w-full h-[320px] sm:h-[400px] bg-black flex items-center justify-center overflow-hidden">
              <Image
                src={activeModalProject.gallery[activeImageIndex]}
                alt={`${activeModalProject.title} photo ${activeImageIndex + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-contain"
              />

              {/* Arrow navigation if multiple photos */}
              {activeModalProject.gallery.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setActiveImageIndex((prev) =>
                        prev === 0 ? activeModalProject.gallery.length - 1 : prev - 1
                      )
                    }
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-[#0E1726]/80 text-white hover:bg-[#8C241D] rounded-full border border-[#253754] transition-colors"
                    aria-label="Previous Photo"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <button
                    onClick={() =>
                      setActiveImageIndex((prev) => (prev + 1) % activeModalProject.gallery.length)
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-[#0E1726]/80 text-white hover:bg-[#8C241D] rounded-full border border-[#253754] transition-colors"
                    aria-label="Next Photo"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            {/* Modal Footer: Gallery Image Thumbnails */}
            <div className="p-3 sm:p-4 bg-[#152238] border-t border-[#253754] flex items-center justify-between gap-4">
              {/* Thumbnail Strip */}
              <div className="flex space-x-2 overflow-x-auto py-1 max-w-full">
                {activeModalProject.gallery.map((imgSrc: string, idx: number) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-14 h-10 rounded overflow-hidden border-2 transition-all shrink-0 ${idx === activeImageIndex
                      ? "border-amber-400 scale-105 shadow-md"
                      : "border-[#253754] opacity-60 hover:opacity-100"
                      }`}
                  >
                    <Image src={imgSrc} alt={`Thumbnail ${idx + 1}`} fill sizes="56px" className="object-cover" />
                  </button>
                ))}
              </div>

              {/* Photo Counter */}
              {activeModalProject.gallery.length > 1 && (
                <span className="text-xs font-mono text-amber-400 font-semibold shrink-0">
                  {activeImageIndex + 1} / {activeModalProject.gallery.length}
                </span>
              )}
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
