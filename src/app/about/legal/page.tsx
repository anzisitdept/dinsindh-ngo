"use client";

import React, { useState } from "react";
import { ORGANIZATION_DATA } from "@/lib/data/organization";
import { ShieldCheck, Download, ExternalLink, CheckCircle2, Eye, FileText, X } from "lucide-react";

export default function LegalPage() {
  const [activeModalDoc, setActiveModalDoc] = useState<string | null>(null);

  const docs = ORGANIZATION_DATA.legalDocuments;

  return (
    <div className="w-full font-sans bg-[#FBF9F5] text-neutral-900">
      
      {/* Header Banner */}
      <section className="bg-[#152238] text-white py-14 border-b border-[#253754]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs uppercase tracking-widest text-amber-400 font-mono font-semibold mb-2">
            Institutional Transparency & Compliance
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-white max-w-3xl">
            Legal Status, Tax Registration & Audit Documents
          </h1>
          <p className="text-sm text-neutral-300 mt-2 max-w-2xl">
            Verified registration credentials under the Government of Sindh, Federal Board of Revenue, and international Dun & Bradstreet registry.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        
        {/* Verification Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="p-6 bg-white border-2 border-amber-500/40 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase text-[#8C241D] font-bold">Societies Act XXI of 1860</span>
              <ShieldCheck className="w-5 h-5 text-amber-500" />
            </div>
            <div className="font-heading font-extrabold text-2xl text-[#152238]">
              Reg. No. {ORGANIZATION_DATA.registrationNumber}
            </div>
            <div className="text-xs text-neutral-600">
              Registrar of Societies, Larkana Division, Government of Sindh.
            </div>
          </div>

          <div className="p-6 bg-white border-2 border-emerald-500/40 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase text-emerald-700 font-bold">FBR National Tax Number</span>
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            </div>
            <div className="font-heading font-extrabold text-2xl text-[#152238]">
              NTN {ORGANIZATION_DATA.ntn}
            </div>
            <div className="text-xs text-neutral-600">
              Federal Board of Revenue (FBR), Government of Pakistan. Active Taxpayer.
            </div>
          </div>

          <div className="p-6 bg-white border-2 border-blue-500/40 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase text-blue-700 font-bold">International DUNS ID</span>
              <ExternalLink className="w-5 h-5 text-blue-600" />
            </div>
            <div className="font-heading font-extrabold text-2xl text-[#152238]">
              DUNS {ORGANIZATION_DATA.dunsNumber}
            </div>
            <div className="text-xs text-neutral-600">
              Dun & Bradstreet Verified Vendor ID for UN & International Donors.
            </div>
          </div>

        </div>

        {/* Legal Document Hub */}
        <div className="bg-white p-8 sm:p-10 border border-[#E2DDD5] shadow-sm space-y-6">
          <div>
            <h2 className="font-heading text-2xl font-bold text-[#152238]">
              Verified Compliance Record Hub
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 mt-1">
              Institutional donors conducting due diligence can inspect registration certificates and request full audited financial statements.
            </p>
          </div>

          <div className="divide-y divide-[#E2DDD5] border border-[#E2DDD5]">
            {docs.map((doc) => (
              <div key={doc.id} className="p-6 hover:bg-[#FBF9F5] transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1 max-w-2xl">
                  <div className="flex items-center space-x-2">
                    <FileText className="w-4 h-4 text-[#8C241D]" />
                    <h3 className="font-heading font-bold text-base text-[#152238]">{doc.title}</h3>
                  </div>
                  <div className="text-xs font-mono text-neutral-500">
                    Authority: {doc.authority} • Record No: <strong className="text-neutral-800">{doc.regNumber}</strong>
                  </div>
                  <p className="text-xs text-neutral-600">{doc.description}</p>
                </div>

                <div className="flex items-center space-x-3 shrink-0">
                  <button
                    onClick={() => setActiveModalDoc(doc.title)}
                    className="px-4 py-2 bg-[#152238] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#8C241D] transition-colors flex items-center space-x-1.5"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Inspect</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>

      </section>

      {/* Lightbox Document Viewer Modal */}
      {activeModalDoc && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-[#152238] text-white max-w-lg w-full p-6 border border-amber-500/40 shadow-2xl relative space-y-4">
            <button
              onClick={() => setActiveModalDoc(null)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-xs font-mono uppercase text-amber-400">Institutional Inspection Viewer</div>
            <h3 className="font-heading font-bold text-xl text-white">{activeModalDoc}</h3>

            <div className="p-6 bg-[#0E1726] border border-[#253754] text-center space-y-3 font-mono text-xs text-neutral-300">
              <ShieldCheck className="w-12 h-12 text-emerald-400 mx-auto" />
              <p className="text-amber-300 font-bold text-sm">Official Document Status: VERIFIED</p>
              <p>Registered Under Societies Act XXI of 1860 (Reg No. 01222, District Larkana)</p>
              <p>NTN: 3224579-3 | DUNS: 645786422</p>
              <div className="pt-2 text-[11px] text-neutral-400">
                Official PDF copy stored at DIN Headquarters, Station Road, Shikarpur, Sindh.
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setActiveModalDoc(null)}
                className="px-4 py-2 bg-[#8C241D] text-white text-xs font-semibold uppercase tracking-wider"
              >
                Close Viewer
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
