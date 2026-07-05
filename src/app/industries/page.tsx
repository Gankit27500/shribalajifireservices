"use client";

import React, { useState } from "react";
import Link from "next/link";
import { industries } from "@/data/industries";
import {
  Building,
  Hotel,
  Factory,
  GraduationCap,
  ChevronRight,
  Shield,
  ArrowRight
} from "lucide-react";

export default function IndustriesHubPage() {
  const [activeTab, setActiveTab] = useState<string>("All");

  const sectors = ["All", "Commercial", "Hospitality & Public", "Industrial", "Institutional"];

  const getSectorIcon = (sector: string) => {
    switch (sector) {
      case "Commercial": return Building;
      case "Hospitality & Public": return Hotel;
      case "Industrial": return Factory;
      case "Institutional": return GraduationCap;
      default: return Shield;
    }
  };

  const filteredIndustries = industries.filter((ind) => {
    return activeTab === "All" || ind.sector === activeTab;
  });

  return (
    <div className="flex flex-col w-full min-h-screen bg-charcoal-950 text-gray-300">
      
      {/* 1. Page Header */}
      <section className="bg-charcoal-900 border-b border-charcoal-800 py-12 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl" />
        <div className="relative max-w-4xl mx-auto space-y-3 z-10">
          <span className="text-xs font-bold text-primary uppercase tracking-widest">Sectors We Protect</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Industries We Serve
          </h1>
          <div className="h-1 w-20 bg-primary mx-auto rounded" />
          <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto leading-relaxed">
            Every sector possesses a unique fire load density. We map custom detection, active sprinklers, and gas release modules to keep your facility compliant.
          </p>
        </div>
      </section>

      {/* 2. Grid & Filter Controls */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-6">
        
        {/* Sector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-charcoal-850 hide-scrollbar">
          {sectors.map((sec) => (
            <button
              key={sec}
              onClick={() => setActiveTab(sec)}
              className={`px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-colors border ${
                activeTab === sec
                  ? "bg-primary border-primary text-white"
                  : "bg-charcoal-900 border-charcoal-800 text-gray-400 hover:text-white"
              }`}
            >
              {sec}
            </button>
          ))}
        </div>

        {/* Counter */}
        <div className="text-xs text-gray-500 font-semibold uppercase tracking-wider">
          Showing {filteredIndustries.length} of 14 Industry Verticals
        </div>

        {/* Grid List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredIndustries.map((ind) => {
            const SectorIcon = getSectorIcon(ind.sector);
            return (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                className="h-64 rounded-xl overflow-hidden relative flex flex-col justify-end p-6 border border-charcoal-800 shadow-xl group hover:border-primary transition-all duration-300 bg-cover bg-center"
                style={{ backgroundImage: `url('${ind.imageUrl}')` }}
              >
                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10 group-hover:from-black/75 transition-all duration-300" />
                
                <div className="relative z-10 space-y-2 w-full">
                  <div className="flex justify-between items-center w-full">
                    <span className="text-[9px] font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 px-2.5 py-1 rounded backdrop-blur-sm">
                      {ind.sector}
                    </span>
                    <div className="bg-primary/20 border border-primary/30 w-7 h-7 rounded-md flex items-center justify-center text-white backdrop-blur-md">
                      <SectorIcon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="font-heading text-base font-bold text-white group-hover:text-primary transition-colors">
                    {ind.title}
                  </h3>
                  <p className="text-xs text-gray-300 line-clamp-2 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {ind.risks}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

      </section>

      {/* 3. Bottom Banner Info */}
      <section className="bg-charcoal-900 border-t border-charcoal-800 py-12 px-4 text-center mt-12">
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-xl font-bold text-white uppercase tracking-wider">
            Need Expert Code Compliance Auditing?
          </h2>
          <p className="text-xs text-gray-400 leading-relaxed max-w-xl mx-auto">
            Our safety consultants help developers and architects layout compliant fire escapes and active suppression setups early during blueprint drafting.
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="bg-primary hover:bg-primary-hover text-white text-xs font-bold px-6 py-2.5 rounded-lg transition-colors shadow-lg"
            >
              Consult Varanasi CFO NOC Partner
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
