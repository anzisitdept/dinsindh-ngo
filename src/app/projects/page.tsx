import React, { Suspense } from "react";
import FilterableProjectsArchive from "@/components/FilterableProjectsArchive";

export const metadata = {
  title: "Completed Projects (15 Executed Projects) | DIN Pakistan",
  description: "Audited index list of DIN Pakistan's completed field projects across Sindh. Filter by Theme, Donor (Save the Children, IOM, USAID, UNDP), and Year.",
};

export default function ProjectsPage() {
  return (
    <div className="w-full font-sans bg-[#FBF9F5] text-neutral-900">
      
      {/* Header Banner */}
      <section className="bg-[#152238] text-white py-14 border-b border-[#253754]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white max-w-3xl">
            Completed Projects List (2004–2026)
          </h1>
          <p className="text-sm sm:text-base text-neutral-300 mt-2 max-w-2xl leading-relaxed">
            Filterable database of completed field initiatives delivered in partnership with international donors, UN agencies, and grassroots CBO networks. Projects currently under implementation are listed separately under Ongoing Projects.
          </p>
        </div>
      </section>

      {/* Filterable List Component */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <Suspense fallback={<div className="p-8 text-center text-neutral-500 font-mono">Loading Project Records...</div>}>
          <FilterableProjectsArchive lockStatus="Completed" />
        </Suspense>
      </section>

    </div>
  );
}
