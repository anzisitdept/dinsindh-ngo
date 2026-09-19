import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ORGANIZATION_DATA } from "@/lib/data/organization";
import { ShieldCheck, Award, Users, CheckCircle2, ArrowRight, MapPin } from "lucide-react";

export const metadata = {
  title: "About DIN — Our Mission, Vision & Story | Development Institutions' Network",
  description: "Learn about DIN Pakistan's 25-year history, vision, mission, target beneficiaries, and core values operating across 18 districts of Sindh.",
};

export default function AboutPage() {
  return (
    <div className="w-full font-sans bg-[#FBF9F5] text-neutral-900">
      
      {/* Header Banner */}
      <section className="bg-[#152238] text-white py-16 border-b border-[#253754]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs uppercase tracking-widest text-amber-400 font-mono font-semibold mb-2">
            Institutional Background & Narrative
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white max-w-3xl">
            About DIN Pakistan (Development Institutions' Network)
          </h1>
          <p className="text-sm sm:text-base text-neutral-300 mt-3 max-w-2xl leading-relaxed">
            Registered under the Societies Registration Act XXI of 1860 (Reg. No. 01222). Championing grassroots community empowerment, interfaith peace, and disaster recovery across Sindh since 2000.
          </p>
        </div>
      </section>

      {/* Main Narrative Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Story & Niche */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-5 text-sm leading-relaxed text-neutral-700">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#152238]">
              Our Origin & 25-Year Journey
            </h2>
            <div className="w-16 h-1 bg-[#8C241D]" />

            <p className="text-base text-neutral-800 font-medium">
              Established in November 2000 in Shikarpur district, DIN Pakistan was founded by a coalition of local community activists and grassroots leaders who recognized that top-down development models failed to reach remote rural union councils in Upper Sindh.
            </p>

            <p>
              Over the past 25 years, DIN has built a federated network of <strong className="text-[#152238]">40 affiliated Community-Based Organizations (CBOs)</strong> spanning 18 districts. Our institutional focus centers on mobilizing indigenous leadership, reviving traditional peaceful conflict-resolution mechanisms (such as Natak Mandali street theater), and delivering climate-resilient livelihoods and clean drinking water infrastructure.
            </p>

            <p>
              DIN has successfully executed 18 major donor-funded projects in partnership with internationally recognized agencies including Save the Children, IOM, DAI-USAID, UNDP/DTCE, ACTED International, Muslim Charity UK, and the Government of Sindh.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/about/governance"
                className="inline-flex items-center space-x-2 px-5 py-2.5 bg-[#152238] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#8C241D] transition-colors"
              >
                <span>View Governance & Board</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about/legal"
                className="inline-flex items-center space-x-2 px-5 py-2.5 bg-white border border-[#E2DDD5] text-neutral-800 text-xs font-semibold uppercase tracking-wider hover:border-[#8C241D] transition-colors"
              >
                <span>View Legal Certificates</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative min-h-[360px] bg-neutral-900 border border-[#E2DDD5] shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1000&auto=format&fit=crop"
              alt="DIN Pakistan peace assembly in Shikarpur"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-[#152238]/95 p-4 border border-amber-500/30 text-xs text-neutral-200">
              <span className="text-amber-400 font-mono font-bold block mb-1">INDIGENOUS PEACEWORK</span>
              <span>Community peace gathering and Natak Mandali revival in Upper Sindh.</span>
            </div>
          </div>

        </div>

        {/* Verbatim Vision & Mission Pull-Quotes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Vision Block */}
          <div className="p-8 bg-[#152238] text-white border-l-4 border-amber-400 shadow-xl space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-amber-400">Our Organizational Vision</div>
            <h3 className="font-heading text-xl sm:text-2xl font-bold italic">
              "A peaceful, tolerant, and self-reliant society in Sindh where marginalized rural communities exercise full human rights, equal economic opportunities, and sustainable indigenous institutions."
            </h3>
          </div>

          {/* Mission Block */}
          <div className="p-8 bg-[#8C241D] text-white border-l-4 border-amber-400 shadow-xl space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-amber-300">Our Core Mission</div>
            <h3 className="font-heading text-xl sm:text-2xl font-bold italic">
              "To empower vulnerable rural populations — particularly women, landless peasants, children, and religious minorities — by building grassroots capacity, resolving inter-communal conflicts, and delivering resilient infrastructure."
            </h3>
          </div>

        </div>

        {/* Target Focus Groups */}
        <div className="bg-white p-8 sm:p-10 border border-[#E2DDD5] shadow-sm space-y-6">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-widest text-[#8C241D] font-mono font-bold mb-1">
              Beneficiary Inclusivity
            </div>
            <h3 className="font-heading text-2xl font-bold text-[#152238]">
              Target Priority Communities
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 mt-1">
              DIN Pakistan prioritizes interventions for social groups that face systemic vulnerability in rural Sindh.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="p-5 bg-[#FBF9F5] border border-[#E2DDD5] space-y-2">
              <div className="font-heading font-bold text-base text-[#152238]">Women & Female Heads of Household</div>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Empowered through micro-enterprise sewing toolkits, livestock starter packs, maternal healthcare, and adult literacy centers.
              </p>
            </div>

            <div className="p-5 bg-[#FBF9F5] border border-[#E2DDD5] space-y-2">
              <div className="font-heading font-bold text-base text-[#152238]">Landless Sharecroppers (Haris)</div>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Supported with paralegal advocacy under the Sindh Tenancy Act, voter registration, and agricultural inputs.
              </p>
            </div>

            <div className="p-5 bg-[#FBF9F5] border border-[#E2DDD5] space-y-2">
              <div className="font-heading font-bold text-base text-[#152238]">Children & Flood Survivors</div>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Protected via Child-Friendly Spaces (CFSs), anti-child marriage campaigns, and emergency flood shelter kits.
              </p>
            </div>

            <div className="p-5 bg-[#FBF9F5] border border-[#E2DDD5] space-y-2">
              <div className="font-heading font-bold text-base text-[#152238]">Religious & Ethnic Minorities</div>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Integrated into joint Hindu-Muslim peace committees, Natak Mandli cultural preservation, and equal aid distribution.
              </p>
            </div>

            <div className="p-5 bg-[#FBF9F5] border border-[#E2DDD5] space-y-2">
              <div className="font-heading font-bold text-base text-[#152238]">Persons with Disabilities (PWDs)</div>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Prioritized in emergency shelter allocation, accessible water pump design, and vocational skill toolkits.
              </p>
            </div>

            <div className="p-5 bg-[#FBF9F5] border border-[#E2DDD5] space-y-2">
              <div className="font-heading font-bold text-base text-[#152238]">Youth & Unemployed Graduates</div>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Trained in BBSYDP technical trades, civic election monitoring, and community peace ambassadors.
              </p>
            </div>

          </div>
        </div>

      </section>

    </div>
  );
}
