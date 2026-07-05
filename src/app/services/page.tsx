"use client";

import React, { useState } from "react";
import Link from "next/link";
import { services } from "@/data/services";
import {
  FlameKindling,
  Flame,
  BellRing,
  ShieldAlert,
  Waves,
  Wrench,
  CheckCircle,
  Phone,
  Briefcase,
  Search,
  ChevronRight,
  Shield,
  FileCheck,
  FileText,
  Eye
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<any>> = {
  FlameKindling: FlameKindling,
  RotateCw: Flame,
  BellRing: BellRing,
  ShieldAlert: ShieldAlert,
  Waves: Waves,
  Shield: Shield,
  Wrench: Wrench,
  FileCheck: FileCheck,
  PhoneCall: Phone,
  FileText: FileText,
  Eye: Eye
};

export default function ServicesHubPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    { name: "All", label: "All Services" },
    { name: "Supply", label: "Supply & Install" },
    { name: "Maintenance", label: "Maintenance & Compliance" },
    { name: "Advisory", label: "Support & Advisory" }
  ];

  // Helper to check what category a service belongs to
  const getServiceCategory = (slug: string) => {
    const supplySlugs = [
      "fire-extinguisher-sales",
      "fire-alarm-systems",
      "fire-hydrant-systems",
      "sprinkler-systems",
      "suppression-systems"
    ];
    const maintenanceSlugs = [
      "fire-extinguisher-refilling",
      "amc-maintenance",
      "testing-commissioning"
    ];
    const advisorySlugs = [
      "emergency-support",
      "fire-consultation",
      "site-inspection"
    ];

    if (supplySlugs.includes(slug)) return "Supply";
    if (maintenanceSlugs.includes(slug)) return "Maintenance";
    if (advisorySlugs.includes(slug)) return "Advisory";
    return "All";
  };

  const filteredServices = services.filter((svc) => {
    const matchesCategory =
      selectedCategory === "All" || getServiceCategory(svc.slug) === selectedCategory;
    const matchesSearch =
      svc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      svc.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col w-full min-h-screen bg-charcoal-950 text-gray-300">
      
      {/* 1. Page Header */}
      <section className="bg-charcoal-900 border-b border-charcoal-800 py-12 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl" />
        <div className="relative max-w-4xl mx-auto space-y-3 z-10">
          <span className="text-xs font-bold text-primary uppercase tracking-widest">Our Competency</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Our Fire Safety Services
          </h1>
          <div className="h-1 w-20 bg-primary mx-auto rounded" />
          <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto leading-relaxed">
            From industrial hydrant mains and wet sprinkler piping grids to emergency refilling and fire safety consultation.
          </p>
        </div>
      </section>

      {/* 2. Filters & Search Controls */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setSelectedCategory(cat.name)}
                className={`px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-colors border ${
                  selectedCategory === cat.name
                    ? "bg-primary border-primary text-white"
                    : "bg-charcoal-900 border-charcoal-800 text-gray-400 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative max-w-xs w-full">
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-charcoal-900 border border-charcoal-800 rounded-lg pl-9 pr-4 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
            />
            <Search className="w-4 h-4 text-gray-500 absolute left-3 top-2.5" />
          </div>
        </div>

        {/* Services Count Indicator */}
        <div className="text-xs text-gray-500 font-semibold uppercase tracking-wider">
          Showing {filteredServices.length} of 11 Services
        </div>

        {/* Services List Grid */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((svc) => {
              const SvcIcon = iconMap[svc.iconName] || Flame;
              const catType = getServiceCategory(svc.slug);
              
              let catLabel = "Supply & Install";
              let catColor = "text-primary bg-primary/10 border-primary/20";
              if (catType === "Maintenance") {
                catLabel = "Maintenance & Compliance";
                catColor = "text-accent bg-accent/10 border-accent/20";
              } else if (catType === "Advisory") {
                catLabel = "Support & Advisory";
                catColor = "text-sky-400 bg-sky-500/10 border-sky-500/20";
              }

              return (
                <div
                  key={svc.slug}
                  className="glass-card glass-card-hover rounded-xl overflow-hidden flex flex-col justify-between group"
                >
                  <div>
                    {/* Cover box with background image */}
                    <div 
                      className="h-40 bg-cover bg-center relative flex items-center justify-center border-b border-charcoal-800"
                      style={{ backgroundImage: `url('${svc.imageUrl}')` }}
                    >
                      <div className="absolute inset-0 bg-black/35 group-hover:bg-black/15 transition-colors duration-300" />
                      <div className="bg-primary/10 border border-primary/20 w-11 h-11 rounded-lg flex items-center justify-center text-white backdrop-blur-md relative z-10 group-hover:bg-primary group-hover:scale-105 transition-all duration-300">
                        <SvcIcon className="w-5 h-5" />
                      </div>
                      <span className={`absolute bottom-3 right-3 text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 border rounded-full backdrop-blur-md ${catColor}`}>
                        {catLabel}
                      </span>
                    </div>

                    <div className="p-5 space-y-3">
                      <h3 className="font-heading text-base font-bold text-white group-hover:text-primary transition-colors duration-200">
                        {svc.title}
                      </h3>
                      <p className="text-xs text-gray-400 leading-relaxed line-clamp-3">
                        {svc.shortDesc}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0">
                    {/* Bullet points summary */}
                    <div className="pt-4 border-t border-charcoal-850">
                      <ul className="space-y-1.5">
                        {svc.features.slice(0, 3).map((feat, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-[10px] text-gray-500">
                            <div className="w-1 h-1 rounded-full bg-primary" />
                            <span className="truncate">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-6">
                      <Link
                        href={`/services/${svc.slug}`}
                        className="w-full flex items-center justify-center gap-1 bg-charcoal-950 border border-charcoal-850 group-hover:border-primary py-2.5 rounded-lg text-xs font-bold text-white group-hover:bg-primary transition-all duration-200"
                      >
                        <span>Explore Service Details</span>
                        <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 bg-charcoal-900 rounded-2xl border border-charcoal-850">
            <p className="text-sm text-gray-500">No services found matching your filters.</p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="mt-4 text-xs font-bold text-primary hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* 3. Bottom Banner Info */}
      <section className="bg-charcoal-900 border-t border-charcoal-800 py-12 px-4 text-center mt-12">
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-xl font-bold text-white uppercase tracking-wider">
            Need a Customized Site Inspection?
          </h2>
          <p className="text-xs text-gray-400 leading-relaxed max-w-xl mx-auto">
            All our new installations start with a detailed risk assessment. Contact our Varanasi office to book a free preliminary audit of your premises.
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <Link
              href="/request-quote"
              className="bg-primary hover:bg-primary-hover text-white text-xs font-bold px-6 py-2.5 rounded-lg transition-colors"
            >
              Request Site Quote
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
