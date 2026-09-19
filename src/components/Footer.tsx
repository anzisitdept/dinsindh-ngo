import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ORGANIZATION_DATA } from "@/lib/data/organization";
import { PROGRAM_AREAS } from "@/lib/data/programs";
import { MapPin, Phone, Mail, ShieldCheck, FileText, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0E1726] text-neutral-300 border-t-4 border-[#8C241D] font-sans">
      {/* Top Ajrak Line Accent */}
      <div className="h-1 bg-gradient-to-r from-[#8C241D] via-[#C68E2B] to-[#152238]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Column 1: Org Profile & Legal Verification */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center">
              <Link href="/" className="relative h-14 w-auto flex items-center shrink-0">
                <Image
                  src="/din-logo-transparent.png"
                  alt="DIN Pakistan — Development Institutions' Network"
                  width={180}
                  height={60}
                  className="object-contain h-14 w-auto drop-shadow-md"
                />
              </Link>
            </div>

            <p className="text-sm text-neutral-400 leading-relaxed max-w-md">
              A legally registered non-profit development network operating across 18 districts of Sindh since 2000. Dedicated to rural livelihoods, interfaith peace, maternal health, child protection, and community empowerment alongside 40 affiliated CBOs.
            </p>

            {/* Legal Badges */}
            <div className="pt-2 space-y-2 text-xs font-mono text-neutral-300">
              <div className="flex items-center space-x-2 text-amber-400 bg-[#152238] px-3 py-1.5 border border-[#253754] w-fit">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Societies Act XXI of 1860 Reg: {ORGANIZATION_DATA.registrationNumber}</span>
              </div>
              <div className="flex items-center space-x-4 text-neutral-400 pl-1">
                <span>NTN: <strong className="text-neutral-200">{ORGANIZATION_DATA.ntn}</strong></span>
                <span>•</span>
                <span>DUNS: <strong className="text-neutral-200">{ORGANIZATION_DATA.dunsNumber}</strong></span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="font-heading font-semibold text-white text-base tracking-wide uppercase mb-4 border-b border-neutral-800 pb-2">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              <li>
                <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-400 transition-colors">About DIN & Story</Link>
              </li>
              <li>
                <Link href="/about/governance" className="hover:text-amber-400 transition-colors">Governance & Organogram</Link>
              </li>
              <li>
                <Link href="/about/legal" className="hover:text-amber-400 transition-colors">Legal & Compliance</Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-amber-400 transition-colors">Project Archive (18 Projects)</Link>
              </li>
              <li>
                <Link href="/where-we-work" className="hover:text-amber-400 transition-colors">Where We Work (Sindh Map)</Link>
              </li>
              <li>
                <Link href="/partners" className="hover:text-amber-400 transition-colors">Donors & CBO Partners</Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-amber-400 transition-colors">Field Photo Gallery</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-400 transition-colors">Contact Headquarters</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Core Programs */}
          <div>
            <h4 className="font-heading font-semibold text-white text-base tracking-wide uppercase mb-4 border-b border-neutral-800 pb-2">
              Program Areas
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              {PROGRAM_AREAS.map((prog) => (
                <li key={prog.slug}>
                  <Link
                    href={`/programs/${prog.slug}`}
                    className="hover:text-amber-400 transition-colors flex items-center space-x-1.5"
                  >
                    <span className="text-amber-500 font-serif">•</span>
                    <span>{prog.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Office */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-white text-base tracking-wide uppercase mb-4 border-b border-neutral-800 pb-2">
              Headquarters
            </h4>
            
            <div className="space-y-3 text-xs text-neutral-300">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>
                  {ORGANIZATION_DATA.headquarters.address}, {ORGANIZATION_DATA.headquarters.city}, {ORGANIZATION_DATA.headquarters.province}, Pakistan
                </span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{ORGANIZATION_DATA.headquarters.phoneSecondary}</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{ORGANIZATION_DATA.headquarters.emailGeneral}</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Globe className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>dinsindh.com</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/about/legal"
                className="inline-flex items-center space-x-2 px-3 py-1.5 bg-[#152238] border border-amber-500/30 text-amber-400 text-xs hover:bg-[#243656] transition-colors"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>View Legal Certificates</span>
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-400 gap-4">
          <div>
            © {new Date().getFullYear()} DIN Pakistan (Development Institutions' Network). All rights reserved.
          </div>

          {/* Centered Watermark */}
          <div className="font-bold text-neutral-300 flex items-center space-x-1.5">
            <span>Powered By</span>
            <a
              href="https://anziandco.com?refer=dinsindh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 font-extrabold hover:text-white transition-colors tracking-wide underline underline-offset-4 decoration-amber-500/50"
            >
              Anzi & Co.
            </a>
          </div>

          <div className="flex items-center space-x-6 text-neutral-400">
            <Link href="/about/legal" className="hover:text-amber-400">Legal Disclaimers</Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-amber-400">Transparency Notice</Link>
            <span>•</span>
            <Link href="/sitemap.xml" className="hover:text-amber-400">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
