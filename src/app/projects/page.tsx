"use client";

import React, { useState } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { MapPin, ArrowRight, ShieldCheck, Award } from "lucide-react";

export default function ProjectsHubPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Suppression & Alarms", "Hydrants & Sprinklers", "Alarms & Evacuation", "Industrial Deluge & AMC"];

  const filteredProjects = projects.filter((proj) => {
    return selectedCategory === "All" || proj.category === selectedCategory;
  });

  return (
    <div className="flex flex-col w-full min-h-screen bg-charcoal-950 text-gray-300">
      
      {/* 1. Page Header */}
      <section className="bg-charcoal-900 border-b border-charcoal-800 py-12 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl" />
        <div className="relative max-w-4xl mx-auto space-y-3 z-10">
          <span className="text-xs font-bold text-primary uppercase tracking-widest">Case Studies</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Our Featured Installations
          </h1>
          <div className="h-1 w-20 bg-primary mx-auto rounded" />
          <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto leading-relaxed">
            Discover how we apply custom engineering systems to protect commercial malls, hotels, schools, and industrial facilities in Varanasi and nearby regions.
          </p>
        </div>
      </section>

      {/* 2. Filter tabs & grid list */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-6">
        
        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-charcoal-850 hide-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-colors border ${
                selectedCategory === cat
                  ? "bg-primary border-primary text-white"
                  : "bg-charcoal-900 border-charcoal-800 text-gray-400 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Counter */}
        <div className="text-xs text-gray-500 font-semibold uppercase tracking-wider">
          Showing {filteredProjects.length} Projects
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((proj) => (
            <div
              key={proj.slug}
              className="glass-card rounded-xl border border-charcoal-800 shadow-xl overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Cover box with background image */}
                <div 
                  className="h-44 bg-cover bg-center relative flex items-center justify-center border-b border-charcoal-850"
                  style={{ backgroundImage: `url('${proj.imageUrl}')` }}
                >
                  <div className="absolute inset-0 bg-black/25 group-hover:bg-black/5 transition-colors duration-300" />
                  <div className="absolute bottom-3 left-3 bg-primary text-white text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                    {proj.category}
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <div className="flex items-center gap-1 text-[10px] text-accent font-bold uppercase tracking-wider">
                    <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span>{proj.location}</span>
                  </div>
                  <h3 className="font-heading text-base font-bold text-white group-hover:text-primary transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-gray-400 line-clamp-3 leading-relaxed">
                    {proj.problem}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <div className="pt-4 border-t border-charcoal-850 flex items-center justify-between">
                  <span className="text-[10px] text-gray-500 font-semibold">{proj.industry}</span>
                  <Link
                    href={`/projects/${proj.slug}`}
                    className="text-[11px] font-bold text-white hover:text-primary transition-colors inline-flex items-center gap-1"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* 3. Bottom Banner Info */}
      <section className="bg-charcoal-900 border-t border-charcoal-800 py-12 px-4 text-center mt-12">
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-xl font-bold text-white uppercase tracking-wider">
            Have a Specific Project Layout in Mind?
          </h2>
          <p className="text-xs text-gray-400 leading-relaxed max-w-xl mx-auto">
            Discuss your system design and installation pipeline with our senior safety project engineers. We calculate structural fire safety budgets.
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <Link
              href="/request-quote"
              className="bg-primary hover:bg-primary-hover text-white text-xs font-bold px-6 py-2.5 rounded-lg transition-colors shadow-lg"
            >
              Initiate Project Query
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
