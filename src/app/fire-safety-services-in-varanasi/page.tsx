"use client";

import React from "react";
import Link from "next/link";
import {
  MapPin,
  ShieldCheck,
  Phone,
  Flame,
  Award,
  ArrowRight,
  CheckCircle,
  Building,
  Briefcase
} from "lucide-react";
import { services } from "@/data/services";
import { projects } from "@/data/projects";

export default function VaranasiLandingPage() {
  const localAreas = [
    { name: "Lanka & BHU Area", desc: "Securing clinics, educational blocks, hostels, and commercial shopping zones." },
    { name: "Sigra & Mahmoorganj", desc: "Corporate offices, banks, retail showrooms, and multi-tenant commercial centers." },
    { name: "Cantonment (Cantt) & Nadesar", desc: "Serving luxury hotels (like Taj Ganges), guest houses, and administrative complexes." },
    { name: "Bhelupur & Sonarpura", desc: "Residential apartment blocks, clinical diagnostics, and dense retail establishments." },
    { name: "Ramnagar & Mughalsarai", desc: "Heavy industrial units, storage warehouses, and logistical freight transport hubs." },
    { name: "Bhadohi & Mirzapur", desc: "Purvanchal expansion carpet weaving units, brass works, and mills." }
  ];

  return (
    <div className="flex flex-col w-full min-h-screen bg-charcoal-950 text-gray-300">
      
      {/* 1. Hero */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-charcoal-800 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/10 via-charcoal-950 to-charcoal-950 text-center">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#141414_1px,transparent_1px),linear-gradient(to_bottom,#141414_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-25" />
        
        <div className="relative max-w-4xl mx-auto space-y-6 z-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-3.5 py-1.5 rounded-full text-xs font-bold text-primary uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            <span>Kashi & Purvanchal Safety Partner</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Fire Safety & Compliance Services <br />
            <span className="text-primary text-glow-red">in Varanasi</span>
          </h1>

          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Shri Balaji Fire Security Services is Varanasi's premier, single-window compliance contractor. We specialize in supply, refilling, AMC, and installations of certified firefighting infrastructure.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/request-quote"
              className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-lg font-bold text-xs uppercase tracking-wider transition-colors shadow-lg shadow-primary/20"
            >
              Book Free Site Inspection
            </Link>
            <a
              href="tel:+917007447595"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-charcoal-900 border border-charcoal-800 hover:border-primary px-8 py-3 rounded-lg text-white font-bold text-xs uppercase tracking-wider transition-colors"
            >
              <Phone className="w-4 h-4 text-primary fill-primary animate-pulse" />
              <span>Call 24/7 Hotline</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Varanasi Local CFO Safety Guidelines */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Varanasi Fire Safety Compliance Guidelines
          </h2>
          <div className="h-1 w-16 bg-primary rounded" />
          
          <p className="text-sm leading-relaxed text-gray-300">
            For businesses, hotels, and schools in Varanasi, obtaining Fire Safety Clearance from the Chief Fire Officer (CFO) is a mandatory safety requirement under UP Fire Safety Acts. The Varanasi Development Authority (VDA) demands verified safety blueprint layouts before issuing completion clearances.
          </p>
          <p className="text-xs leading-relaxed text-gray-400">
            We assist developers, builders, and administrators through this process. We inspect your building, calculate the fire load density, install NBC-compliant equipment (extinguishers, hydrants, sprinkler loops, fire doors), compile pressure logs, and coordinate the physical site check with the local fire station officers.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="flex gap-2 items-start">
              <CheckCircle className="w-4.5 h-4.5 text-primary shrink-0 mt-0.5" />
              <span className="text-xs text-gray-300 font-semibold">100% compliant layouts under NBC Part 4</span>
            </div>
            <div className="flex gap-2 items-start">
              <CheckCircle className="w-4.5 h-4.5 text-primary shrink-0 mt-0.5" />
              <span className="text-xs text-gray-300 font-semibold">Certified pressure tests and commissioning logs</span>
            </div>
            <div className="flex gap-2 items-start">
              <CheckCircle className="w-4.5 h-4.5 text-primary shrink-0 mt-0.5" />
              <span className="text-xs text-gray-300 font-semibold">Assistance in UP Single-Window filing</span>
            </div>
            <div className="flex gap-2 items-start">
              <CheckCircle className="w-4.5 h-4.5 text-primary shrink-0 mt-0.5" />
              <span className="text-xs text-gray-300 font-semibold">Official maintenance AMC logs for renewals</span>
            </div>
          </div>
        </div>

        {/* Highlight Stats Box */}
        <div className="lg:col-span-5 bg-charcoal-900 border border-charcoal-800 rounded-2xl p-6 md:p-8 space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full blur-xl" />
          
          <h3 className="font-heading text-base font-bold text-white border-b border-charcoal-800 pb-3 uppercase tracking-wider">
            Varanasi Operations Summary
          </h3>
          
          <div className="space-y-4 text-xs">
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Service Coverage:</span>
              <span className="font-bold text-white uppercase tracking-wider">Full Varanasi City & Outskirts</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Extinguisher Refill Turnaround:</span>
              <span className="font-bold text-accent">24 - 48 Hours Max</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Compliance Audit:</span>
              <span className="font-bold text-primary">Free Preliminary Review</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Local Response Time:</span>
              <span className="font-bold text-white">Under 2 Hours (City limits)</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Areas Deployed in Varanasi */}
      <section className="bg-charcoal-900 py-16 border-t border-b border-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3">
            <span className="text-xs font-bold text-primary uppercase tracking-widest">Local Reach</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Local Varanasi Neighborhoods Serviced
            </h2>
            <div className="h-1 w-16 bg-primary mx-auto rounded" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {localAreas.map((area, i) => (
              <div
                key={i}
                className="p-5 bg-charcoal-950 rounded-xl border border-charcoal-850 space-y-2 hover:border-primary/40 transition-colors group"
              >
                <div className="flex items-center gap-2 text-white group-hover:text-primary transition-colors font-bold text-xs uppercase tracking-wider">
                  <MapPin className="w-4 h-4 text-primary shrink-0" />
                  <span>{area.name}</span>
                </div>
                <p className="text-[11px] text-gray-400 leading-relaxed">
                  {area.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Local Projects Showcase */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-8">
        
        <div className="text-center space-y-3 mb-10">
          <span className="text-xs font-bold text-primary uppercase tracking-widest">Showcase</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Varanasi Deployed Projects
          </h2>
          <div className="h-1 w-16 bg-primary mx-auto rounded" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.filter(p => p.location.includes("Varanasi")).map((proj) => (
            <div key={proj.slug} className="glass-card rounded-xl border border-charcoal-800 p-5 flex flex-col justify-between group">
              <div className="space-y-3">
                <span className="text-[9px] bg-primary/10 border border-primary/20 text-primary px-2 py-0.5 rounded-full font-bold uppercase tracking-wider inline-block">
                  {proj.category}
                </span>
                <h4 className="font-heading text-sm font-bold text-white group-hover:text-primary transition-colors">
                  {proj.title}
                </h4>
                <p className="text-[11px] text-gray-400 line-clamp-3 leading-relaxed">
                  {proj.problem}
                </p>
              </div>
              <div className="pt-4 border-t border-charcoal-850 mt-4 flex items-center justify-between">
                <span className="text-[10px] text-gray-500 font-semibold">{proj.industry}</span>
                <Link
                  href={`/projects/${proj.slug}`}
                  className="text-[11px] font-bold text-accent hover:text-primary transition-colors inline-flex items-center gap-1"
                >
                  <span>Read Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Direct Action CTA */}
      <section className="py-16 text-center px-4 max-w-4xl mx-auto space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
          Secure Your Varanasi Premises Today
        </h2>
        <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto">
          Contact our Sigra head office directly for free compliance estimates, emergency support, or regular refilling services.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            href="/request-quote"
            className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-lg font-bold text-xs uppercase tracking-wider transition-colors shadow-lg shadow-primary/20"
          >
            Submit Quote Form
          </Link>
          <a
            href="tel:+917007447595"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-charcoal-900 border border-charcoal-800 hover:border-primary px-8 py-3 rounded-lg text-white font-bold text-xs uppercase tracking-wider transition-colors"
          >
            <Phone className="w-4 h-4 text-primary fill-primary" />
            <span>Call +91 70074 47595</span>
          </a>
        </div>
      </section>

    </div>
  );
}
