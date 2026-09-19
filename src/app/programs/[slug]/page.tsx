import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProgramBySlug, PROGRAM_AREAS } from "@/lib/data/programs";
import { PROJECTS_DATA } from "@/lib/data/projects";
import { ArrowLeft, ArrowUpRight, MapPin, CheckCircle2, ShieldCheck, Building2 } from "lucide-react";

export async function generateStaticParams() {
  return PROGRAM_AREAS.map((p) => ({ slug: p.slug }));
}

export default async function ProgramDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);

  if (!program) {
    notFound();
  }

  // Get projects under this program
  const relatedProjects = PROJECTS_DATA.filter((p) => p.programSlug === slug || p.programTitle.toLowerCase().includes(program.shortTitle.toLowerCase()));

  return (
    <div className="w-full font-sans bg-[#FBF9F5] text-neutral-900">
      
      {/* Header Banner */}
      <section className="bg-[#152238] text-white py-14 border-b border-[#253754]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Link
            href="/programs"
            className="inline-flex items-center space-x-1.5 text-xs font-mono text-amber-400 hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All 8 Programs</span>
          </Link>

          <div>
            <div className="text-xs uppercase tracking-widest text-amber-400 font-mono font-semibold mb-1">
              Program Detail • DIN Pakistan
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white max-w-4xl">
              {program.title}
            </h1>
            <p className="text-sm sm:text-base text-neutral-300 mt-2 max-w-2xl leading-relaxed">
              {program.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Main Detail Body */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Grid 1: Overview & Hero Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-heading text-2xl font-bold text-[#152238]">Program Overview & Strategy</h2>
            <div className="w-16 h-1 bg-[#8C241D]" />

            <p className="text-base text-neutral-800 leading-relaxed font-sans">
              {program.description}
            </p>

            <p className="text-sm text-neutral-600 leading-relaxed">
              {program.longDescription}
            </p>

            <div className="p-6 bg-white border border-[#E2DDD5] shadow-xs space-y-3">
              <h3 className="font-heading font-bold text-base text-[#152238]">Program Objectives & Pillars</h3>
              <ul className="space-y-2 text-xs sm:text-sm text-neutral-700">
                {program.keyPillars.map((pillar, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <span>{pillar}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="relative h-72 w-full bg-neutral-900 border border-[#E2DDD5]">
              <Image
                src={program.featuredImage}
                alt={program.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Impact Box */}
            <div className="bg-[#152238] text-white p-6 border border-[#253754] space-y-4">
              <div className="text-xs uppercase font-mono tracking-widest text-amber-400 font-bold">
                Program Impact Baseline
              </div>
              <div className="grid grid-cols-3 gap-3 text-center">
                {program.impactStats.map((stat, idx) => (
                  <div key={idx} className="border-r last:border-0 border-[#253754] pr-2">
                    <div className="font-heading font-extrabold text-amber-400 text-lg sm:text-xl">
                      {stat.value}
                    </div>
                    <div className="text-[10px] text-neutral-300 uppercase leading-tight mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 bg-white border border-[#E2DDD5] text-xs text-neutral-600 space-y-1">
              <div className="font-mono text-neutral-800 font-bold uppercase">Active Districts:</div>
              <div className="flex flex-wrap gap-1">
                {program.activeDistricts.map((d) => (
                  <span key={d} className="px-2 py-0.5 bg-[#F5F3ED] text-[#152238] font-mono border border-neutral-300">
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Grid 2: Linked Projects in Archive */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#E2DDD5] pb-4">
            <div>
              <div className="text-xs font-mono uppercase text-[#8C241D] font-bold">Project Archive Correlation</div>
              <h2 className="font-heading text-2xl font-bold text-[#152238]">
                Projects Executed Under {program.title}
              </h2>
            </div>
            <Link
              href="/projects"
              className="text-xs font-bold uppercase tracking-wider text-[#8C241D] hover:underline mt-2 sm:mt-0"
            >
              Browse All 18 Projects →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProjects.map((project) => (
              <div key={project.id} className="p-5 bg-white border border-[#E2DDD5] shadow-xs flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center space-x-2 text-xs font-mono mb-2">
                    <span className="px-2 py-0.5 bg-[#152238] text-white text-[10px] font-bold uppercase">
                      {project.status}
                    </span>
                    <span className="text-[#8C241D] font-bold">{project.years}</span>
                  </div>
                  <h3 className="font-heading font-bold text-base text-[#152238] leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-neutral-600 mt-2 line-clamp-3 leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E2DDD5] flex items-center justify-between text-xs">
                  <span className="text-neutral-500 font-mono">Donor: {project.donor}</span>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="font-bold uppercase tracking-wider text-[#8C241D] flex items-center space-x-1"
                  >
                    <span>Read</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

    </div>
  );
}
