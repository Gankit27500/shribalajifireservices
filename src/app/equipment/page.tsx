"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Flame, Shield, ArrowRight, CheckCircle, Wrench, ZoomIn, Info } from "lucide-react";
import { equipmentList, EquipmentItem } from "@/data/equipment";

export default function EquipmentPage() {
  const [activeTab, setActiveTab] = useState<string>("All");
  const [lightboxItem, setLightboxItem] = useState<EquipmentItem | null>(null);

  const categories = ["All", "Extinguishers", "Suppression", "Hydrants", "Alarms", "Sprinklers"];

  const filteredItems = equipmentList.filter((item) => {
    return activeTab === "All" || item.category === activeTab;
  });

  return (
    <div className="flex flex-col w-full min-h-screen bg-charcoal-950 text-gray-300">
      
      {/* 1. Page Header */}
      <section className="bg-charcoal-900 border-b border-charcoal-800 py-16 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="relative max-w-4xl mx-auto space-y-4 z-10">
          <span className="text-xs font-bold text-primary uppercase tracking-widest">B2B Product Inventory</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Certified Fire Protection Equipment
          </h1>
          <div className="h-1 w-20 bg-primary mx-auto rounded" />
          <p className="text-xs sm:text-sm text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Browse our complete inventory of ISI-marked, NBC-compliant, and state-certified active fire fighting hardware, pumps, piping inlets, alarm loops, and suppressions.
          </p>
        </div>
      </section>

      {/* 2. Grid & Filter Controls */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-8">
        
        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 border-b border-charcoal-850 hide-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all duration-200 border ${
                activeTab === cat
                  ? "bg-primary border-primary text-white shadow-lg shadow-primary/20"
                  : "bg-charcoal-900 border-charcoal-800 text-gray-400 hover:text-white hover:border-charcoal-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.slug}
              className="group bg-charcoal-900 border border-charcoal-850/80 rounded-xl overflow-hidden shadow-xl flex flex-col justify-between hover:border-primary/45 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Product Image Cover */}
              <div className="relative h-48 bg-white p-4 flex items-center justify-center border-b border-charcoal-850 select-none">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3 bg-charcoal-950/80 text-[8px] font-bold text-accent px-2 py-0.5 border border-charcoal-800 rounded uppercase tracking-wider">
                  {item.category}
                </div>

                {/* Quick Zoom Trigger */}
                <button
                  onClick={() => setLightboxItem(item)}
                  className="absolute bottom-3 right-3 p-1.5 rounded bg-charcoal-950/80 hover:bg-primary hover:text-white text-gray-400 border border-charcoal-800 transition-colors cursor-pointer"
                  title="Zoom Image"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Text Info */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-heading text-sm font-bold text-white uppercase tracking-wider group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-gray-400 leading-relaxed line-clamp-3">
                    {item.desc}
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-charcoal-850">
                  {/* Technical Specs */}
                  <div className="flex gap-2 items-start text-[10px] text-gray-500 font-medium">
                    <Info className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                    <span>{item.spec}</span>
                  </div>

                  {/* CTA Actions */}
                  <div className="flex items-center gap-2 pt-1">
                    <Link
                      href={`/request-quote?item=${item.slug}`}
                      className="flex-1 text-center bg-primary hover:bg-primary-hover text-white text-[10px] font-bold py-2 rounded transition-colors uppercase tracking-wider shadow"
                    >
                      Inquire Quote
                    </Link>
                    <button
                      onClick={() => setLightboxItem(item)}
                      className="px-2.5 py-2 rounded bg-charcoal-800 hover:bg-charcoal-700 text-gray-300 text-[10px] font-bold transition-colors uppercase tracking-wider cursor-pointer"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state if category has no items */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12 bg-charcoal-900 border border-charcoal-850 rounded-xl space-y-3">
            <Shield className="w-10 h-10 text-primary mx-auto" />
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">No Items Found</h3>
            <p className="text-xs text-gray-500">Currently stocking more devices for this category loop.</p>
          </div>
        )}
      </section>

      {/* 3. Global Lightbox modal pop-up */}
      {lightboxItem && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightboxItem(null)}
        >
          <div
            className="max-w-md w-full bg-charcoal-900 border border-charcoal-800 rounded-2xl shadow-2xl overflow-hidden relative transform scale-100 transition-all text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxItem(null)}
              className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/60 text-gray-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Product Image Cover Big */}
            <div className="h-64 bg-white p-6 flex items-center justify-center border-b border-charcoal-800 select-none">
              <img
                src={lightboxItem.imageUrl}
                alt={lightboxItem.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {/* Content Details */}
            <div className="p-6 space-y-4">
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-accent uppercase tracking-widest block">
                  {lightboxItem.category} Category
                </span>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {lightboxItem.title}
                </h3>
              </div>

              <p className="text-xs text-gray-400 leading-relaxed">
                {lightboxItem.desc}
              </p>

              <div className="space-y-2 pt-3 border-t border-charcoal-850">
                <h4 className="text-[10px] font-bold text-primary uppercase tracking-wider">
                  Technical Specifications
                </h4>
                <div className="p-3 bg-charcoal-955 rounded-lg border border-charcoal-850 flex gap-2.5 items-start">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <p className="text-xs text-gray-300 leading-relaxed font-semibold">
                    {lightboxItem.spec}
                  </p>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <Link
                  href={`/request-quote?item=${lightboxItem.slug}`}
                  onClick={() => setLightboxItem(null)}
                  className="flex-1 bg-primary hover:bg-primary-hover text-white text-xs font-bold py-2.5 rounded-lg text-center transition-colors uppercase tracking-wider shadow-lg"
                >
                  Request Quote & Supply Rate
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Simple local close icon replacement since Lucide Close is X
function X(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
