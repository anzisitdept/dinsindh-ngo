import React from "react";
import Link from "next/link";
import { Quote, ArrowRight, ShieldCheck, HeartHandshake, Compass, Users } from "lucide-react";

export const metadata = {
  title: "About DIN — Our Mission, Vision & Profile | Development Institutions' Network",
  description: "Learn about DIN Pakistan's history since 2005, vision, mission, partners, target beneficiaries, and core values operating across Sindh.",
};

export default function AboutPage() {
  return (
    <div className="w-full font-sans bg-[#FBF9F5] text-neutral-900">
      
      {/* Header Banner */}
      <section className="bg-[#152238] text-white py-16 border-b border-[#253754]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 text-amber-400 font-mono text-xs uppercase tracking-widest mb-2 font-semibold">
            <ShieldCheck className="w-4 h-4" />
            <span>Institutional Profile</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white max-w-3xl leading-tight">
            About Development Institutions Network (DIN)
          </h1>
          <p className="text-sm sm:text-base text-amber-200 mt-3 max-w-3xl leading-relaxed font-medium">
            An indigenous, non-governmental, not-for-profit, and non-sectarian organization established on February 2nd, 2005 — dedicated to poverty reduction, social harmony, and basic human rights across Sindh.
          </p>
        </div>
      </section>

      {/* Main Narrative Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-14">
        
        {/* About Organization & Niche */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main About Text */}
          <div className="lg:col-span-8 space-y-6 text-sm leading-relaxed text-neutral-700">
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#152238]">
                About Organization
              </h2>
              <div className="w-16 h-1 bg-[#8C241D] mt-2" />
            </div>

            <p className="text-base text-neutral-800 font-medium leading-relaxed">
              Development Institutions Network DIN, is an indigenous, non-government, not for profit and non-sectarian organization came to existence in 02-February-2005. A group of young and energetic individuals with commitment, voluntarily efforts, and motivation, contributed to provide a space to marginalized segments of the society for the reduction of poverty, gender inequalities in Pakistan.
            </p>

            <p className="leading-relaxed">
              DIN is working for social harmony, interfaith cohesion, and development of vulnerable segment of the society. By its nature as human-cantered organization DIN is focused on socioeconomic empowerment of women, youth and children. As the existence of socio-cultural scenario on power imbalance, and discrimination at all levels for marginalized groups DIN is striving for their access to basic human rights. These include the minorities, especially abled groups.
            </p>

            <p className="leading-relaxed">
              DIN has credit for having affiliation of 40 community-based organizations working in Sindh province. The major development of that networking is exchange of working experience, capacity building and led organization for sustainable development in working areas, including the areas where not a single CBO is working. DIN labelled as the central organization for designing and implementing various projects with the financial and technical support of international donors and the government.
            </p>

            {/* Partner Acknowledgement */}
            <div className="p-6 bg-white border border-[#E2DDD5] shadow-xs space-y-3 mt-6">
              <div className="font-heading font-bold text-base text-[#152238] flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-[#8C241D]" />
                <span>Partner Support & Acknowledgements</span>
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Development Institutions’ Network greatly values and acknowledges the support of its partners who provided their great support to DIN for its previous and current projects. These include: <strong>Trust for Volunteer Organization TVO</strong>, <strong>Save the Children</strong>, <strong>SPO Sindh Hyderabad</strong>, <strong>Devolution Trust for Community Empowerment (DTCE/UNDP)</strong>, <strong>OCT-Water Aid</strong>, <strong>International Migration Organization- IOM</strong>, <strong>BBSYDP Government of Sindh</strong>, <strong>ACTED International</strong>, <strong>DAI Pakistan Pvt Ltd</strong> & <strong>Muslim Charity UK</strong>.
              </p>
            </div>
          </div>

          {/* Sidebar: Niche of Organization & Navigation */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Niche Card */}
            <div className="bg-[#152238] text-white p-7 border border-[#253754] shadow-md space-y-4">
              <div className="flex items-center gap-2 text-amber-400 font-mono text-xs uppercase tracking-widest font-bold">
                <Compass className="w-4 h-4" />
                <span>Niche of Organization</span>
              </div>
              <div className="w-12 h-1 bg-[#8C241D]" />
              <p className="font-heading text-lg font-bold text-amber-200 leading-snug">
                "Development and peace initiatives rooted with positive indigenous practices."
              </p>
            </div>

            {/* Quick Actions */}
            <div className="bg-white border border-[#E2DDD5] p-6 space-y-3">
              <div className="font-heading font-bold text-sm text-[#152238]">
                Explore Governance & Contact
              </div>
              <Link
                href="/about/governance"
                className="w-full inline-flex items-center justify-between px-4 py-3 bg-[#152238] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#8C241D] transition-colors"
              >
                <span>Executive Leadership & Organogram</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-between px-4 py-3 bg-[#FBF9F5] border border-[#E2DDD5] text-neutral-800 text-xs font-semibold uppercase tracking-wider hover:border-[#8C241D] transition-colors"
              >
                <span>Contact Headquarters</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>

        {/* Vision & Mission Quote Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Vision Block */}
          <div className="p-8 bg-[#152238] text-white border-l-4 border-amber-400 shadow-lg space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
              <Quote className="w-4 h-4" />
              <span>Vision</span>
            </div>
            <h3 className="font-heading text-xl sm:text-2xl font-bold leading-snug text-white">
              "A socially just, tolerate and peaceful society, where every person has access to basic needs and enjoy the basic rights without any discrimination."
            </h3>
          </div>

          {/* Mission Block */}
          <div className="p-8 bg-[#8C241D] text-white border-l-4 border-amber-400 shadow-lg space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-300 font-bold">
              <Quote className="w-4 h-4 text-amber-300" />
              <span>Mission</span>
            </div>
            <h3 className="font-heading text-xl sm:text-2xl font-bold leading-snug text-white">
              "To enhance capacity of community groups to address basic needs, rights as well as in tolerance between different religions, sects and tribal conflicts in perspective of historical background of Sindh."
            </h3>
          </div>

        </div>

        {/* Target Focus Groups */}
        <div className="bg-white p-8 sm:p-10 border border-[#E2DDD5] shadow-sm space-y-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#8C241D] font-bold mb-1">
              <Users className="w-4 h-4" />
              <span>Beneficiaries & Focus</span>
            </div>
            <h3 className="font-heading text-2xl font-bold text-[#152238]">
              Target Priority Segments
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 mt-1">
              DIN focuses interventions on marginalized communities facing social discrimination and power imbalance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="p-5 bg-[#FBF9F5] border border-[#E2DDD5] space-y-2">
              <div className="font-heading font-bold text-base text-[#152238]">Women & Female Youth</div>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Socioeconomic empowerment through skill toolkits, artisan micro-enterprises, and community participation.
              </p>
            </div>

            <div className="p-5 bg-[#FBF9F5] border border-[#E2DDD5] space-y-2">
              <div className="font-heading font-bold text-base text-[#152238]">Children & Youth</div>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Child protection, safe learning spaces, literacy revival, and youth skill development.
              </p>
            </div>

            <div className="p-5 bg-[#FBF9F5] border border-[#E2DDD5] space-y-2">
              <div className="font-heading font-bold text-base text-[#152238]">Religious & Ethnic Minorities</div>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Social harmony, interfaith cohesion, equal access to human rights, and peaceful coexistence.
              </p>
            </div>

            <div className="p-5 bg-[#FBF9F5] border border-[#E2DDD5] space-y-2">
              <div className="font-heading font-bold text-base text-[#152238]">Especially Abled Groups (PWDs)</div>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Inclusion in basic human rights, accessible water & infrastructure projects, and specialized aid.
              </p>
            </div>

            <div className="p-5 bg-[#FBF9F5] border border-[#E2DDD5] space-y-2">
              <div className="font-heading font-bold text-base text-[#152238]">40 Affiliated CBOs</div>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Grassroots networking, experience exchange, capacity building, and sustainable development across Sindh.
              </p>
            </div>

            <div className="p-5 bg-[#FBF9F5] border border-[#E2DDD5] space-y-2">
              <div className="font-heading font-bold text-base text-[#152238]">Marginalized Rural Settlements</div>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Targeting isolated areas including settlements where not a single local CBO was previously working.
              </p>
            </div>

          </div>
        </div>

      </section>

    </div>
  );
}
