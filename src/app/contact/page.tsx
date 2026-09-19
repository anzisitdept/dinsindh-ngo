"use client";

import React, { useState } from "react";
import { ORGANIZATION_DATA } from "@/lib/data/organization";
import { MapPin, Phone, Mail, Clock, ShieldCheck, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    inquiryType: "Donor / Partnership",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="w-full font-sans bg-[#FBF9F5] text-neutral-900">
      
      {/* Header Banner */}
      <section className="bg-[#152238] text-white py-14 border-b border-[#253754]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs uppercase tracking-widest text-amber-400 font-mono font-semibold mb-2">
            Institutional Dialogue & Headquarters
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white max-w-3xl">
            Contact DIN Pakistan Headquarters
          </h1>
          <p className="text-sm sm:text-base text-neutral-300 mt-2 max-w-2xl leading-relaxed">
            Reach out for institutional partnerships, donor audits, field visits, or community inquiries in Upper & Lower Sindh.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Office & Leadership Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="p-8 bg-[#152238] text-white border border-[#253754] shadow-xl space-y-6">
              <div className="border-b border-[#253754] pb-4">
                <span className="text-xs font-mono uppercase text-amber-400 font-bold">Executive Secretariat</span>
                <h2 className="font-heading font-bold text-2xl text-white mt-1">Shikarpur Main Office</h2>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-neutral-200">
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-amber-300">Physical Address:</div>
                    <div className="leading-relaxed">
                      {ORGANIZATION_DATA.headquarters.address}, {ORGANIZATION_DATA.headquarters.city}, {ORGANIZATION_DATA.headquarters.province}, Pakistan
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3 border-t border-[#253754] pt-3">
                  <Phone className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-amber-300">Executive Contact Line:</div>
                    <div>Office: {ORGANIZATION_DATA.headquarters.phonePrimary}</div>
                    <div>Cell / Secretariat: {ORGANIZATION_DATA.headquarters.phoneSecondary}</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3 border-t border-[#253754] pt-3">
                  <Mail className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-amber-300">Email Desks:</div>
                    <div>General: {ORGANIZATION_DATA.headquarters.emailGeneral}</div>
                    <div>Partnerships: {ORGANIZATION_DATA.headquarters.emailPartnerships}</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3 border-t border-[#253754] pt-3">
                  <Clock className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-amber-300">Working Hours:</div>
                    <div>{ORGANIZATION_DATA.headquarters.workingHours}</div>
                  </div>
                </div>

              </div>

              <div className="pt-2 border-t border-[#253754] text-xs font-mono text-neutral-400">
                Executive Director: <strong className="text-white">{ORGANIZATION_DATA.executiveLeadership.executiveDirector}</strong>
              </div>
            </div>

            {/* Legal Verification Banner */}
            <div className="p-6 bg-white border border-[#E2DDD5] shadow-xs space-y-2 text-xs">
              <div className="flex items-center space-x-2 text-[#8C241D] font-bold font-mono">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>Verified Legal Entity</span>
              </div>
              <p className="text-neutral-600 leading-relaxed">
                Registered under Societies Registration Act XXI of 1860 (Reg No. 01222). NTN: 3224579-3 | DUNS: 645786422.
              </p>
            </div>

          </div>

          {/* Right Column: Routing Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 border border-[#E2DDD5] shadow-sm space-y-6">
            
            <div>
              <div className="text-xs uppercase tracking-widest text-[#8C241D] font-mono font-bold mb-1">
                Institutional Routing Form
              </div>
              <h2 className="font-heading text-2xl font-bold text-[#152238]">
                Send an Inquiry to DIN Executive Secretariat
              </h2>
              <p className="text-xs text-neutral-600 mt-1">
                Select your inquiry classification to ensure your communication reaches the responsible desk.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-8 bg-[#152238] text-white border border-emerald-500/40 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
                <h3 className="font-heading font-bold text-xl text-white">Inquiry Successfully Transmitted</h3>
                <p className="text-xs text-neutral-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Your message regarding <strong>{formData.inquiryType}</strong> has been logged to the Executive Director’s desk in Shikarpur.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-4 py-2 bg-[#8C241D] text-white text-xs font-semibold uppercase tracking-wider"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm font-sans">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase font-bold text-[#152238] mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Sarah Ahmed"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2.5 bg-[#FBF9F5] border border-[#E2DDD5] text-neutral-900 focus:outline-none focus:border-[#8C241D]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase font-bold text-[#152238] mb-1">Official Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. s.ahmed@savethechildren.org"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2.5 bg-[#FBF9F5] border border-[#E2DDD5] text-neutral-900 focus:outline-none focus:border-[#8C241D]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase font-bold text-[#152238] mb-1">Organization / Agency</label>
                    <input
                      type="text"
                      placeholder="e.g. Save the Children / Independent"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full px-3 py-2.5 bg-[#FBF9F5] border border-[#E2DDD5] text-neutral-900 focus:outline-none focus:border-[#8C241D]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase font-bold text-[#152238] mb-1">Inquiry Type *</label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-3 py-2.5 bg-[#FBF9F5] border border-[#E2DDD5] text-neutral-900 focus:outline-none focus:border-[#8C241D]"
                    >
                      <option value="Donor / Partnership">Donor / Co-Implementation Proposal</option>
                      <option value="Government Liaison">Government / District Administration</option>
                      <option value="Community CBO">CBO Affiliation / Community Support</option>
                      <option value="Media Inquiry">Media / Research Request</option>
                      <option value="General Inquiry">General Information</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase font-bold text-[#152238] mb-1">Message / Proposal Details *</label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Describe your inquiry, project scope, or meeting request..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2.5 bg-[#FBF9F5] border border-[#E2DDD5] text-neutral-900 focus:outline-none focus:border-[#8C241D]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#8C241D] hover:bg-[#A62F27] text-white font-semibold text-xs sm:text-sm uppercase tracking-wider shadow-md transition-colors flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4 text-amber-300" />
                  <span>Transmit Inquiry to Secretariat</span>
                </button>

              </form>
            )}

          </div>

        </div>

      </section>

    </div>
  );
}
