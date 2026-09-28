import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ORGANIZATION_DATA, CONTACT_LINKS } from "@/lib/data/organization";
import { PROGRAM_AREAS } from "@/lib/data/programs";
import { MapPin, Phone, Mail, ShieldCheck, FileText, Globe, MessageCircle, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0E1726] text-neutral-300 border-t-4 border-[#8C241D] font-sans">
      {/* Top Ajrak Line Accent */}
      <div className="h-1 bg-gradient-to-r from-[#8C241D] via-[#C68E2B] to-[#152238]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-24 sm:pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Column 1: Org Profile & Legal Verification */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-5">
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

            <p className="text-sm text-neutral-300/90 leading-relaxed max-w-md">
              A legally registered non-profit development network operating across 18 districts of Sindh since 2000. Dedicated to rural livelihoods, interfaith peace, maternal health, child protection, and community empowerment alongside 40 affiliated CBOs.
            </p>

            {/* Legal Badges */}
            <div className="pt-1 space-y-2 text-xs font-mono text-neutral-300">
              <div className="flex items-center space-x-2 text-amber-400 bg-[#152238] px-3.5 py-2 border border-[#253754] rounded-xl w-fit shadow-sm">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Societies Act XXI of 1860 Reg: <strong className="text-amber-300">{ORGANIZATION_DATA.registrationNumber}</strong></span>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-neutral-400 pl-1 text-[11px]">
                <span className="bg-[#152238]/60 px-2.5 py-1 rounded-md border border-[#253754]/50">NTN: <strong className="text-neutral-200">{ORGANIZATION_DATA.ntn}</strong></span>
                <span className="bg-[#152238]/60 px-2.5 py-1 rounded-md border border-[#253754]/50">DUNS: <strong className="text-neutral-200">{ORGANIZATION_DATA.dunsNumber}</strong></span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="sm:col-span-1 lg:col-span-3">
            <h4 className="font-heading font-semibold text-white text-sm tracking-widest uppercase mb-4 border-b border-[#253754] pb-2">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-neutral-300">
              <li>
                <Link href="/" className="hover:text-amber-400 transition-colors block py-0.5">Home</Link>
              </li>
              <li>
                <Link href="/donate" className="hover:text-amber-400 text-amber-300 font-bold transition-colors block py-0.5">Donate Collections</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-400 transition-colors block py-0.5">About DIN & Story</Link>
              </li>
              <li>
                <Link href="/about/governance" className="hover:text-amber-400 transition-colors block py-0.5">Executive Leadership & Organogram</Link>
              </li>
              <li>
                <Link href="/about/legal" className="hover:text-amber-400 transition-colors block py-0.5">Legal & Compliance</Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-amber-400 transition-colors block py-0.5">Project Archive (18 Projects)</Link>
              </li>
              <li>
                <Link href="/where-we-work" className="hover:text-amber-400 transition-colors block py-0.5">Where We Work (Sindh Map)</Link>
              </li>
              <li>
                <Link href="/partners" className="hover:text-amber-400 transition-colors block py-0.5">Our Donors & CBOs</Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-amber-400 transition-colors block py-0.5">Field Photo Gallery</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-400 transition-colors block py-0.5">Contact Headquarters</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Core Programs */}
          <div className="sm:col-span-1 lg:col-span-2">
            <h4 className="font-heading font-semibold text-white text-sm tracking-widest uppercase mb-4 border-b border-[#253754] pb-2">
              Program Areas
            </h4>
            <ul className="space-y-2 text-xs text-neutral-300">
              {PROGRAM_AREAS.map((prog) => (
                <li key={prog.slug}>
                  <Link
                    href={`/programs/${prog.slug}`}
                    className="hover:text-amber-400 transition-colors flex items-start space-x-2 py-0.5 group"
                  >
                    <span className="text-amber-400 font-serif mt-0.5 shrink-0 text-xs group-hover:translate-x-0.5 transition-transform">•</span>
                    <span className="leading-tight">{prog.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Office */}
          <div className="sm:col-span-2 md:col-span-1 lg:col-span-3 space-y-4">
            <h4 className="font-heading font-semibold text-white text-sm tracking-widest uppercase mb-4 border-b border-[#253754] pb-2">
              Headquarters
            </h4>
            
            <div className="space-y-3 text-xs text-neutral-300">
              <a href={CONTACT_LINKS.map} target="_blank" rel="noopener noreferrer" className="flex items-start space-x-2.5 hover:text-amber-400 transition-colors group">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="leading-relaxed">{CONTACT_LINKS.fullAddress}</span>
              </a>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={CONTACT_LINKS.phonePrimary} className="hover:text-amber-400 transition-colors">{ORGANIZATION_DATA.headquarters.phonePrimary}</a>
                <span className="text-neutral-600">|</span>
                <a href={CONTACT_LINKS.phoneSecondary} className="hover:text-amber-400 transition-colors">{ORGANIZATION_DATA.headquarters.phoneSecondary}</a>
              </div>
              <div className="flex items-center space-x-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={CONTACT_LINKS.whatsapp()} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">WhatsApp: {ORGANIZATION_DATA.headquarters.phonePrimary}</a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={CONTACT_LINKS.email} className="hover:text-amber-400 transition-colors break-all">{ORGANIZATION_DATA.headquarters.emailGeneral}</a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Globe className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="https://dinsindh.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">dinsindh.com</a>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/donate"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-3 bg-[#8C241D] hover:bg-[#A62F27] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg hover:shadow-red-900/30 border border-amber-500/30 active:scale-95"
              >
                <Heart className="w-4 h-4 text-rose-300 fill-rose-300 shrink-0" />
                <span>Donate to Relief Collection</span>
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#253754]/80 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-400 gap-4 text-center md:text-left">
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

          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 text-neutral-400">
            <Link href="/about/legal" className="hover:text-amber-400 transition-colors">Legal Disclaimers</Link>
            <span className="text-neutral-700">•</span>
            <Link href="/contact" className="hover:text-amber-400 transition-colors">Transparency Notice</Link>
            <span className="text-neutral-700">•</span>
            <Link href="/sitemap.xml" className="hover:text-amber-400 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
