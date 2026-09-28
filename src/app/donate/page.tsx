"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Heart,
  ShieldCheck,
  ArrowRight,
  Droplet,
  Home as HomeIcon,
  ShoppingBag,
  Stethoscope,
  Building2,
  Send,
  Copy,
  Check,
  HelpCircle,
  MapPin,
  Sparkles
} from "lucide-react";
import { ORGANIZATION_DATA, CONTACT_LINKS } from "@/lib/data/organization";

export default function DonatePage() {
  const [selectedTier, setSelectedTier] = useState<number | "custom">(25);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [copiedBankField, setCopiedBankField] = useState<string | null>(null);



  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedBankField(fieldName);
    setTimeout(() => setCopiedBankField(null), 2000);
  };

  return (
    <div className="w-full font-sans bg-[#FBF9F5] text-neutral-900">

      {/* 1. Hero Banner with Animated Collection Pulse */}
      <section className="relative bg-[#152238] text-white py-16 sm:py-20 border-b border-[#253754] overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-ajrak-pattern pointer-events-none" />

        {/* Animated Background Light Blob */}
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-rose-900/30 rounded-full blur-3xl pointer-events-none animate-pulse" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">

            <div className="inline-flex items-center space-x-2 bg-[#8C241D] text-amber-300 border border-amber-500/30 px-3.5 py-1.5 text-xs font-mono font-bold uppercase tracking-wider shadow-md rounded-full">
              <Heart className="w-4 h-4 text-rose-400 fill-rose-400 animate-pulse" />
              <span>100% Direct Emergency Relief Collection</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              Every Contribution Delivers Relief, Clean Water &amp; Health Across Sindh.
            </h1>

          </div>
        </div>
      </section>

      {/* 2. Interactive Donation Collection Process & Tier Selector */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">





          {/* Right Column: Direct Bank Transfer & Collection Methods (5 cols) */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 border border-[#E2DDD5] shadow-lg space-y-6">
            <div>
              <div className="inline-flex items-center space-x-1.5 text-xs font-mono text-emerald-700 font-bold bg-emerald-50 px-2.5 py-1 border border-emerald-200 mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Direct Legal Collection Account</span>
              </div>
              <h3 className="font-heading text-xl font-bold text-[#152238]">
                Bank Collection Account Details
              </h3>
              <p className="text-xs text-neutral-600 mt-1">
                You can wire funds directly to DIN Pakistan's official institutional bank account in Pakistan.
              </p>
            </div>

            {/* Bank Detail Fields */}
            <div className="space-y-3 font-sans text-xs">

              {/* Bank Name */}
              <div className="p-3.5 bg-[#FBF9F5] border border-[#E2DDD5] rounded-xl flex justify-between items-center shadow-xs">
                <div>
                  <div className="text-[10px] text-neutral-500 uppercase font-mono font-semibold">Bank Name</div>
                  <div className="font-bold text-[#152238] text-sm">{ORGANIZATION_DATA.bankDetails.bankName}</div>
                </div>
                <button
                  onClick={() => handleCopy(ORGANIZATION_DATA.bankDetails.bankName, "bank")}
                  className="p-2 text-neutral-500 hover:text-[#8C241D] hover:bg-neutral-200/50 rounded-lg transition-colors cursor-pointer"
                  title="Copy Bank Name"
                >
                  {copiedBankField === "bank" ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Title of Account */}
              <div className="p-3.5 bg-[#FBF9F5] border border-[#E2DDD5] rounded-xl flex justify-between items-center shadow-xs">
                <div>
                  <div className="text-[10px] text-neutral-500 uppercase font-mono font-semibold">Title of Account</div>
                  <div className="font-bold text-[#152238] text-sm">{ORGANIZATION_DATA.bankDetails.accountTitle}</div>
                </div>
                <button
                  onClick={() => handleCopy(ORGANIZATION_DATA.bankDetails.accountTitle, "title")}
                  className="p-2 text-neutral-500 hover:text-[#8C241D] hover:bg-neutral-200/50 rounded-lg transition-colors cursor-pointer"
                  title="Copy Account Title"
                >
                  {copiedBankField === "title" ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Account Number */}
              <div className="p-3.5 bg-[#FBF9F5] border border-[#E2DDD5] rounded-xl flex justify-between items-center shadow-xs">
                <div>
                  <div className="text-[10px] text-neutral-500 uppercase font-mono font-semibold">Account Number</div>
                  <div className="font-mono font-bold text-[#152238] text-sm">{ORGANIZATION_DATA.bankDetails.accountNumber}</div>
                </div>
                <button
                  onClick={() => handleCopy(ORGANIZATION_DATA.bankDetails.accountNumber, "accNo")}
                  className="p-2 text-neutral-500 hover:text-[#8C241D] hover:bg-neutral-200/50 rounded-lg transition-colors cursor-pointer"
                  title="Copy Account Number"
                >
                  {copiedBankField === "accNo" ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* IBAN Number */}
              <div className="p-3.5 bg-[#FBF9F5] border border-[#E2DDD5] rounded-xl flex justify-between items-center shadow-xs">
                <div>
                  <div className="text-[10px] text-neutral-500 uppercase font-mono font-semibold">IBAN Number</div>
                  <div className="font-mono font-bold text-[#152238] text-sm tracking-wide">{ORGANIZATION_DATA.bankDetails.iban}</div>
                </div>
                <button
                  onClick={() => handleCopy(ORGANIZATION_DATA.bankDetails.iban, "iban")}
                  className="p-2 text-neutral-500 hover:text-[#8C241D] hover:bg-neutral-200/50 rounded-lg transition-colors cursor-pointer"
                  title="Copy IBAN"
                >
                  {copiedBankField === "iban" ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Branch Code & SWIFT Code */}
              <div className="grid grid-cols-2 gap-2.5">
                <div className="p-3 bg-[#FBF9F5] border border-[#E2DDD5] rounded-xl flex justify-between items-center shadow-xs">
                  <div>
                    <div className="text-[10px] text-neutral-500 uppercase font-mono font-semibold">Branch Code</div>
                    <div className="font-mono font-bold text-[#152238] text-xs">{ORGANIZATION_DATA.bankDetails.branchCode}</div>
                  </div>
                  <button
                    onClick={() => handleCopy(ORGANIZATION_DATA.bankDetails.branchCode, "branch")}
                    className="p-1.5 text-neutral-500 hover:text-[#8C241D] hover:bg-neutral-200/50 rounded-lg transition-colors cursor-pointer"
                    title="Copy Branch Code"
                  >
                    {copiedBankField === "branch" ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                <div className="p-3 bg-[#FBF9F5] border border-[#E2DDD5] rounded-xl flex justify-between items-center shadow-xs">
                  <div>
                    <div className="text-[10px] text-neutral-500 uppercase font-mono font-semibold">SWIFT Code</div>
                    <div className="font-mono font-bold text-[#152238] text-xs">{ORGANIZATION_DATA.bankDetails.swiftCode}</div>
                  </div>
                  <button
                    onClick={() => handleCopy(ORGANIZATION_DATA.bankDetails.swiftCode, "swift")}
                    className="p-1.5 text-neutral-500 hover:text-[#8C241D] hover:bg-neutral-200/50 rounded-lg transition-colors cursor-pointer"
                    title="Copy SWIFT Code"
                  >
                    {copiedBankField === "swift" ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Mobile Money */}
              <div className="p-3.5 bg-[#FBF9F5] border border-[#E2DDD5] rounded-xl flex justify-between items-center shadow-xs">
                <div>
                  <div className="text-[10px] text-neutral-500 uppercase font-mono font-semibold">Mobile Money Collection (JazzCash / EasyPaisa)</div>
                  <div className="font-mono font-bold text-[#8C241D] text-sm">{ORGANIZATION_DATA.headquarters.phonePrimary}</div>
                </div>
                <button
                  onClick={() => handleCopy(ORGANIZATION_DATA.headquarters.phonePrimaryDial, "mobile")}
                  className="p-2 text-neutral-500 hover:text-[#8C241D] hover:bg-neutral-200/50 rounded-lg transition-colors cursor-pointer"
                  title="Copy Mobile Account"
                >
                  {copiedBankField === "mobile" ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

            </div>

            {/* Confirmation & Notification Box */}
            <div className="pt-4 border-t border-[#E2DDD5] space-y-3 text-xs text-neutral-600">
              <p>
                <strong>Receipt & Acknowledgement:</strong> After sending your donation, please email transfer proof or screenshot to <a href={`mailto:${ORGANIZATION_DATA.headquarters.emailGeneral}`} className="text-[#8C241D] underline font-bold">{ORGANIZATION_DATA.headquarters.emailGeneral}</a> or WhatsApp <a href={CONTACT_LINKS.whatsapp("Assalam-o-Alaikum, I have made a donation to DIN Pakistan and would like an official tax receipt.")} target="_blank" rel="noopener noreferrer" className="text-[#8C241D] underline font-bold font-mono">{ORGANIZATION_DATA.headquarters.phonePrimary}</a> for an official tax donation receipt.
              </p>

              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3.5 bg-[#8C241D] hover:bg-[#A62F27] text-white font-bold uppercase tracking-wider text-xs shadow-md transition-colors rounded-xl"
              >
                <Send className="w-4 h-4" />
                <span>Submit Donation Receipt Notice</span>
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Step-by-Step Transparent Collection Process */}
      <section className="bg-[#F5F3ED] py-16 border-t border-[#E2DDD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#152238]">
              The 4-Step Relief Collection & Distribution Cycle
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 mt-2">
              Every donated rupee follows a transparent, audited pathway from collection to field delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

            <div className="p-6 bg-white border border-[#E2DDD5] shadow-xs space-y-3">
              <div className="w-10 h-10 bg-[#152238] text-amber-400 font-bold flex items-center justify-center font-mono text-sm">
                01
              </div>
              <h3 className="font-heading font-bold text-base text-[#152238]">Fund Collection</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Donations are received in DIN Pakistan's official First Women Bank Limited account or registered mobile wallets with complete audit logging.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#E2DDD5] shadow-xs space-y-3">
              <div className="w-10 h-10 bg-[#152238] text-amber-400 font-bold flex items-center justify-center font-mono text-sm">
                02
              </div>
              <h3 className="font-heading font-bold text-base text-[#152238]">Needs Assessment</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                40 affiliated CBO liaisons perform field surveys in Upper & Lower Sindh to identify the most vulnerable flood-affected households.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#E2DDD5] shadow-xs space-y-3">
              <div className="w-10 h-10 bg-[#152238] text-amber-400 font-bold flex items-center justify-center font-mono text-sm">
                03
              </div>
              <h3 className="font-heading font-bold text-base text-[#152238]">Bulk Procurement</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Emergency kits, handpumps, and shelter materials are procured at transparent wholesale pricing with vendor receipts.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#E2DDD5] shadow-xs space-y-3">
              <div className="w-10 h-10 bg-[#152238] text-amber-400 font-bold flex items-center justify-center font-mono text-sm">
                04
              </div>
              <h3 className="font-heading font-bold text-base text-[#152238]">Field Distribution</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Relief supplies are handed over directly to beneficiaries in organized distribution camps with photo verification and reports.
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
