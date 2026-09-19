"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  ShieldCheck,
  MapPin
} from "lucide-react";
import { ORGANIZATION_DATA } from "@/lib/data/organization";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path || (path !== "/" && pathname.startsWith(path));

  return (
    <header className="sticky top-0 z-50 w-full shadow-md font-sans">
      
      {/* Top Utility Bar — FIXED & ALWAYS VISIBLE (DARK DESIGN) */}
      <div className="bg-[#0E1726] border-b border-[#253754] text-xs text-neutral-300 px-4 sm:px-6 py-2">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4 sm:space-x-6 text-[11px] sm:text-xs">
            <span className="flex items-center space-x-1.5 text-amber-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Reg. No: {ORGANIZATION_DATA.registrationNumber} (Societies Act 1860)</span>
            </span>
            <span className="hidden md:inline text-neutral-600">|</span>
            <span className="hidden md:inline">NTN: {ORGANIZATION_DATA.ntn}</span>
            <span className="hidden lg:inline text-neutral-600">|</span>
            <span className="hidden lg:inline">DUNS: {ORGANIZATION_DATA.dunsNumber}</span>
          </div>

          <div className="flex items-center space-x-4 sm:space-x-6 text-[11px] sm:text-xs">
            <a href={`tel:${ORGANIZATION_DATA.headquarters.phoneSecondary}`} className="flex items-center space-x-1.5 hover:text-amber-400 transition-colors">
              <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="hidden sm:inline">{ORGANIZATION_DATA.headquarters.phoneSecondary}</span>
            </a>
            <span className="text-neutral-600">|</span>
            <a href={`mailto:${ORGANIZATION_DATA.headquarters.emailGeneral}`} className="flex items-center space-x-1.5 hover:text-amber-400 transition-colors">
              <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="hidden sm:inline">{ORGANIZATION_DATA.headquarters.emailGeneral}</span>
            </a>
            <span className="hidden md:inline text-neutral-600">|</span>
            <span className="hidden md:flex items-center space-x-1 text-neutral-400">
              <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
              <span>Shikarpur, Sindh</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar — WHITE BACKGROUND, STABLE & STICKY */}
      <div className="w-full bg-white border-b border-neutral-200 py-2.5 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          
          {/* Standalone Enlarged Brand Logo */}
          <Link href="/" className="flex items-center group py-0.5">
            <div className="relative h-14 sm:h-16 w-auto flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
              <Image
                src="/din-logo-transparent.png"
                alt="DIN Pakistan — Development Institutions' Network"
                width={200}
                height={70}
                className="object-contain h-14 sm:h-16 w-auto drop-shadow-sm"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links — DARK NAVY ON WHITE */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 text-sm font-semibold">
            <Link
              href="/"
              className={`px-3 py-2 transition-colors ${
                pathname === "/"
                  ? "text-[#8C241D] font-bold border-b-2 border-[#8C241D]"
                  : "text-[#152238] hover:text-[#8C241D]"
              }`}
            >
              Home
            </Link>

            {/* About Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
            >
              <button
                className={`px-3 py-2 flex items-center space-x-1 transition-colors ${
                  isActive("/about")
                    ? "text-[#8C241D] font-bold border-b-2 border-[#8C241D]"
                    : "text-[#152238] hover:text-[#8C241D]"
                }`}
              >
                <span>About DIN</span>
                <ChevronDown className="w-4 h-4 opacity-75" />
              </button>

              {aboutDropdownOpen && (
                <div className="absolute left-0 mt-0 w-64 bg-white border border-neutral-200 shadow-xl py-2 z-50 divide-y divide-neutral-100 rounded-xs">
                  <Link
                    href="/about"
                    className="block px-4 py-2.5 text-sm text-[#152238] hover:bg-[#FBF9F5] hover:text-[#8C241D] transition-colors"
                  >
                    <div className="font-semibold">Overview & Mission</div>
                    <div className="text-xs text-neutral-500">Our 25-year story & vision</div>
                  </Link>
                  <Link
                    href="/about/governance"
                    className="block px-4 py-2.5 text-sm text-[#152238] hover:bg-[#FBF9F5] hover:text-[#8C241D] transition-colors"
                  >
                    <div className="font-semibold">Governance & Organogram</div>
                    <div className="text-xs text-neutral-500">Board & interactive org chart</div>
                  </Link>
                  <Link
                    href="/about/legal"
                    className="block px-4 py-2.5 text-sm text-[#152238] hover:bg-[#FBF9F5] hover:text-[#8C241D] transition-colors"
                  >
                    <div className="font-semibold">Legal & Transparency</div>
                    <div className="text-xs text-neutral-500">Registration, NTN & DUNS certificates</div>
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/programs"
              className={`px-3 py-2 transition-colors ${
                isActive("/programs")
                  ? "text-[#8C241D] font-bold border-b-2 border-[#8C241D]"
                  : "text-[#152238] hover:text-[#8C241D]"
              }`}
            >
              Programs
            </Link>

            <Link
              href="/projects"
              className={`px-3 py-2 transition-colors ${
                isActive("/projects")
                  ? "text-[#8C241D] font-bold border-b-2 border-[#8C241D]"
                  : "text-[#152238] hover:text-[#8C241D]"
              }`}
            >
              Project Archive
            </Link>

            <Link
              href="/where-we-work"
              className={`px-3 py-2 transition-colors ${
                isActive("/where-we-work")
                  ? "text-[#8C241D] font-bold border-b-2 border-[#8C241D]"
                  : "text-[#152238] hover:text-[#8C241D]"
              }`}
            >
              Where We Work
            </Link>

            <Link
              href="/partners"
              className={`px-3 py-2 transition-colors ${
                isActive("/partners")
                  ? "text-[#8C241D] font-bold border-b-2 border-[#8C241D]"
                  : "text-[#152238] hover:text-[#8C241D]"
              }`}
            >
              Partners
            </Link>

            <Link
              href="/gallery"
              className={`px-3 py-2 transition-colors ${
                isActive("/gallery")
                  ? "text-[#8C241D] font-bold border-b-2 border-[#8C241D]"
                  : "text-[#152238] hover:text-[#8C241D]"
              }`}
            >
              Gallery
            </Link>

            <Link
              href="/contact"
              className={`px-3 py-2 transition-colors ${
                isActive("/contact")
                  ? "text-[#8C241D] font-bold border-b-2 border-[#8C241D]"
                  : "text-[#152238] hover:text-[#8C241D]"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center space-x-3">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 bg-[#8C241D] hover:bg-[#A62F27] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-lg border border-amber-500/20"
            >
              <span>Partner With Us</span>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#152238] hover:text-[#8C241D] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-neutral-200 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-4 duration-200 text-[#152238]">
            <div className="text-[11px] text-[#8C241D] font-mono font-bold pb-2 border-b border-neutral-200">
              Reg. No: 01222 (Societies Act 1860) | Shikarpur, Sindh
            </div>
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-semibold text-[#152238] hover:text-[#8C241D]"
            >
              Home
            </Link>
            
            <div className="py-1">
              <span className="block text-xs uppercase font-bold tracking-widest text-[#8C241D] mb-1">About DIN</span>
              <div className="pl-3 space-y-2 border-l-2 border-[#8C241D]">
                <Link
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm text-neutral-700 hover:text-[#8C241D]"
                >
                  Overview & Story
                </Link>
                <Link
                  href="/about/governance"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm text-neutral-700 hover:text-[#8C241D]"
                >
                  Governance & Organogram
                </Link>
                <Link
                  href="/about/legal"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm text-neutral-700 hover:text-[#8C241D]"
                >
                  Legal Status & Tax NTN
                </Link>
              </div>
            </div>

            <Link
              href="/programs"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-semibold text-[#152238] hover:text-[#8C241D]"
            >
              Programs (8 Core Pillars)
            </Link>
            <Link
              href="/projects"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-semibold text-[#152238] hover:text-[#8C241D]"
            >
              Project Archive (18 Projects)
            </Link>
            <Link
              href="/where-we-work"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-semibold text-[#152238] hover:text-[#8C241D]"
            >
              Where We Work (Sindh Map)
            </Link>
            <Link
              href="/partners"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-semibold text-[#152238] hover:text-[#8C241D]"
            >
              Partners & Donors
            </Link>
            <Link
              href="/gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-semibold text-[#152238] hover:text-[#8C241D]"
            >
              Field Photo Gallery
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-semibold text-[#152238] hover:text-[#8C241D]"
            >
              Contact Headquarters
            </Link>

            <div className="pt-2">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center py-2.5 bg-[#8C241D] text-white font-bold text-xs uppercase tracking-wider text-center"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        )}
      </div>

    </header>
  );
}
