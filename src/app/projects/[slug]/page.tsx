import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProjectBySlug, PROJECTS_DATA } from "@/lib/data/projects";
import { ArrowLeft, MapPin, Building2, Calendar, ShieldCheck, CheckCircle2, Award } from "lucide-react";

export async function generateStaticParams() {
  return PROJECTS_DATA.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Schema.org Article / CreativeWork JSON-LD
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": project.title,
    "description": project.summary,
    "author": {
      "@type": "Organization",
      "name": "DIN Pakistan"
    },
    "publisher": {
      "@type": "Organization",
      "name": "DIN Pakistan",
      "url": "https://dinsindh.com"
    },
    "image": project.featuredImage
  };

  return (
    <div className="w-full font-sans bg-[#FBF9F5] text-neutral-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      
      {/* Header Banner */}
      <section className="bg-[#152238] text-white py-14 border-b border-[#253754]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Link
            href="/projects"
            className="inline-flex items-center space-x-1.5 text-xs font-mono text-amber-400 hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All 18 Project Records</span>
          </Link>

          <div>
            <div className="flex items-center space-x-3 mb-2">
              <span
                className={`px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-white ${
                  project.status === "Ongoing" ? "bg-emerald-700" : "bg-[#8C241D]"
                }`}
              >
                {project.status} Project
              </span>
              <span className="text-xs font-mono text-amber-300 font-bold">{project.years}</span>
            </div>
            <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-white max-w-4xl">
              {project.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Detail Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Column (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Featured Image */}
            <div className="relative h-80 sm:h-96 w-full bg-neutral-900 border border-[#E2DDD5]">
              <Image
                src={project.featuredImage}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute bottom-4 left-4 right-4 bg-[#152238]/90 p-3 text-xs text-white border border-amber-500/30">
                <span className="text-amber-400 font-mono font-bold block">AUDITED RECORD</span>
                <span>{project.title} — {project.district}</span>
              </div>
            </div>

            {/* Executive Summary */}
            <div className="p-6 bg-white border border-[#E2DDD5] shadow-xs space-y-3">
              <h2 className="font-heading font-bold text-lg text-[#152238]">Executive Summary</h2>
              <p className="text-sm text-neutral-800 leading-relaxed font-sans font-medium">
                {project.summary}
              </p>
            </div>

            {/* Full Narrative */}
            <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
              <h3 className="font-heading font-bold text-xl text-[#152238]">Project Background & Implementation</h3>
              <div className="w-12 h-1 bg-[#8C241D]" />
              <p>{project.fullNarrative}</p>
            </div>

            {/* Key Achievements */}
            <div className="p-6 bg-[#152238] text-white border border-[#253754] space-y-4">
              <h3 className="font-heading font-bold text-lg text-amber-400 flex items-center space-x-2">
                <Award className="w-5 h-5 text-amber-400" />
                <span>Verified Key Deliverables & Output</span>
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-200">
                {project.keyAchivements.map((ach, i) => (
                  <li key={i} className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-4.5 h-4.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{ach}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Sidebar Audit Metadata (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="p-6 bg-white border-2 border-[#152238] shadow-md space-y-4">
              <h3 className="font-heading font-bold text-base text-[#152238] border-b border-[#E2DDD5] pb-2 uppercase tracking-wide">
                Institutional Audit Metadata
              </h3>

              <div className="space-y-3 text-xs">
                <div>
                  <div className="text-neutral-500 font-mono text-[10px] uppercase">Donor Agency</div>
                  <div className="font-bold text-[#152238] text-sm flex items-center space-x-1.5 mt-0.5">
                    <Building2 className="w-4 h-4 text-[#8C241D]" />
                    <span>{project.donor}</span>
                  </div>
                  <div className="text-[11px] text-neutral-500">Category: {project.donorCategory}</div>
                </div>

                <div className="border-t border-neutral-200 pt-2">
                  <div className="text-neutral-500 font-mono text-[10px] uppercase">Operational Duration</div>
                  <div className="font-semibold text-neutral-800 text-xs mt-0.5 flex items-center space-x-1.5">
                    <Calendar className="w-4 h-4 text-amber-600" />
                    <span>{project.years} ({project.duration})</span>
                  </div>
                </div>

                <div className="border-t border-neutral-200 pt-2">
                  <div className="text-neutral-500 font-mono text-[10px] uppercase">District Location</div>
                  <div className="font-semibold text-neutral-800 text-xs mt-0.5 flex items-center space-x-1.5">
                    <MapPin className="w-4 h-4 text-rose-600" />
                    <span>{project.district}</span>
                  </div>
                </div>

                <div className="border-t border-neutral-200 pt-2">
                  <div className="text-neutral-500 font-mono text-[10px] uppercase">Beneficiary Reach</div>
                  <div className="font-extrabold text-[#8C241D] text-sm mt-0.5">
                    {project.beneficiaryCount}
                  </div>
                </div>

                {project.budgetDisplay && (
                  <div className="border-t border-neutral-200 pt-2">
                    <div className="text-neutral-500 font-mono text-[10px] uppercase">Public Budget Baseline</div>
                    <div className="font-extrabold text-emerald-800 text-sm mt-0.5 font-mono">
                      {project.budgetDisplay}
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-2 border-t border-[#E2DDD5]">
                <Link
                  href={`/programs/${project.programSlug}`}
                  className="block text-center w-full py-2 bg-[#152238] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#8C241D] transition-colors"
                >
                  View Related Program Pillar
                </Link>
              </div>
            </div>

            <div className="p-4 bg-[#F5F3ED] border border-[#E2DDD5] text-xs text-neutral-600 space-y-2">
              <div className="flex items-center space-x-2 text-emerald-800 font-bold font-mono">
                <ShieldCheck className="w-4 h-4" />
                <span>Audited Under DIN Reg. 01222</span>
              </div>
              <p>Project documentation & field verification photos certified by DIN Executive Secretariat, Shikarpur.</p>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
}
