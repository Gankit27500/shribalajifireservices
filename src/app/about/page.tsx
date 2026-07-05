"use client";

import React from "react";
import Link from "next/link";
import { Shield, Target, Eye, ShieldCheck, Clock, Award, Star, ArrowRight } from "lucide-react";

export default function AboutPage() {
  const coreValues = [
    { title: "Safety First", desc: "Safety is our core foundation. We refuse to compromise on design standards or material quality.", icon: Shield },
    { title: "Integrity", desc: "Transparent, itemized billing and honest advice on what safety systems your site actually needs.", icon: ShieldCheck },
    { title: "Compliance", desc: "100% adherence to national fire codes (NBC Part 4) and local Varanasi Fire Department rules.", icon: Award },
    { title: "Responsiveness", desc: "Immediate responses to client inquiries and 24/7 emergency dispatch backups.", icon: Clock }
  ];

  return (
    <div className="flex flex-col w-full min-h-screen bg-charcoal-950 text-gray-300">
      
      {/* 1. Page Header */}
      <section className="bg-charcoal-900 border-b border-charcoal-800 py-12 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl" />
        <div className="relative max-w-4xl mx-auto space-y-3 z-10">
          <span className="text-xs font-bold text-primary uppercase tracking-widest">Who We Are</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            About Shri Balaji Fire Security Services
          </h1>
          <div className="h-1 w-20 bg-primary mx-auto rounded" />
          <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto leading-relaxed">
            Your single-window compliance and fire safety contracting partner in Varanasi and the Purvanchal region.
          </p>
        </div>
      </section>

      {/* 2. Company Story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Story Left */}
        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Securing Kashi with Engineering Excellence
          </h2>
          <div className="h-1 w-16 bg-primary rounded" />
          <p className="text-sm leading-relaxed text-gray-300">
            Shri Balaji Fire Security Services is a Varanasi-based complete fire protection and safety solutions provider. We deliver end-to-end services across the lifecycle of active firefighting systems: **supply, installation, pressure testing, loop commissioning, refilling, AMC, and safety audits**.
          </p>
          <p className="text-xs leading-relaxed text-gray-400">
            Founded with a vision to make commercial and public spaces fire-safe and compliant, we serve developers, architects, hotels, factories, and residential societies. Our systems strictly conform to the National Building Code (NBC Part 4), Bureau of Indian Standards (IS codes), and local fire department safety guidelines. We bridge the gap between complex regulatory mandates and cost-effective on-site safety installations.
          </p>
          
          <div className="p-4 bg-charcoal-900 rounded-xl border border-charcoal-800 space-y-2">
            <span className="text-xs font-bold text-accent uppercase tracking-wider block">Founder's Statement</span>
            <p className="text-xs italic text-gray-400 leading-relaxed">
              "In our line of work, there is zero margin for error. A single valve block or a failed panel battery can cost lives. That is why every system we design is built and tested with absolute precision."
            </p>
            <span className="text-[10px] font-bold text-white block mt-1">— Pankaj Srivastava, Founder & Owner</span>
          </div>
        </div>

        {/* Story Right Stats & badges */}
        <div className="lg:col-span-5 bg-charcoal-900 border border-charcoal-800 rounded-2xl p-6 space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full blur-xl" />
          
          <h3 className="font-heading text-base font-bold text-white border-b border-charcoal-800 pb-3">
            Key Corporate Credentials
          </h3>
          
          <div className="space-y-4">
            <div className="flex gap-3">
              <Award className="w-5 h-5 text-accent shrink-0" />
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">ISO 9001:2015 Certified</h4>
                <p className="text-[11px] text-gray-400 mt-0.5">Audited standards for safety system supply and layout designs.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Award className="w-5 h-5 text-accent shrink-0" />
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">UP Fire Service Approved</h4>
                <p className="text-[11px] text-gray-400 mt-0.5">Licensed to design, install, and execute certified pressure tests.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Award className="w-5 h-5 text-accent shrink-0" />
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">MSME Registered Vendor</h4>
                <p className="text-[11px] text-gray-400 mt-0.5">Officially registered for corporate, municipal, and B2B contracts.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision */}
      <section className="bg-charcoal-900 border-t border-b border-charcoal-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="bg-charcoal-950 p-6 rounded-2xl border border-charcoal-800 space-y-4">
            <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center text-primary border border-primary/20">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-lg font-bold text-white">Our Mission</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              To deliver reliable, code-compliant, and state-of-the-art fire safety solutions that protect lives and properties across Varanasi and the Purvanchal region. We achieve this by utilizing certified materials, deploying trained engineers, and maintaining strict execution standards.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-charcoal-950 p-6 rounded-2xl border border-charcoal-800 space-y-4">
            <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center text-primary border border-primary/20">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-lg font-bold text-white">Our Vision</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              To be the most trusted, compliance-focused, and single-window fire safety partner across Uttar Pradesh. We aim to drive safety awareness and establish reference benchmarks for active fire suppression, gas systems, and maintenance contracts.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Core Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold text-primary uppercase tracking-widest">Our Guiding Beliefs</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Our Core Values</h2>
          <div className="h-1 w-16 bg-primary mx-auto rounded" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((val, i) => {
            const ValIcon = val.icon;
            return (
              <div key={i} className="p-6 bg-charcoal-900 border border-charcoal-850 rounded-xl space-y-3 hover:border-primary/40 transition-colors group">
                <div className="bg-charcoal-950 w-10 h-10 rounded-lg flex items-center justify-center text-primary border border-charcoal-800 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <ValIcon className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-sm font-bold text-white uppercase tracking-wider">{val.title}</h3>
                <p className="text-[11px] text-gray-400 leading-relaxed">{val.desc}</p>
              </div>
            );
          })}
        </div>
      </section>


      {/* 6. Call To Action Page Link */}
      <section className="py-16 text-center px-4 max-w-4xl mx-auto space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Ready to Secure Your Building?
        </h2>
        <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto">
          Contact our Varanasi office to discuss your active fire hydrant, wet sprinklers, gas suppression setups, or AMC maintenance schedules.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            href="/contact"
            className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-lg font-bold text-xs uppercase tracking-wider transition-colors shadow-lg"
          >
            Contact Varanasi Office
          </Link>
          <Link
            href="/request-quote"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-charcoal-900 border border-charcoal-800 hover:border-primary px-8 py-3 rounded-lg text-white font-bold text-xs uppercase tracking-wider transition-colors"
          >
            <span>Request Quote Form</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

    </div>
  );
}
