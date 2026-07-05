"use client";

import React, { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { industries } from "@/data/industries";
import { services } from "@/data/services";
import {
  Building,
  Hotel,
  Factory,
  GraduationCap,
  Shield,
  ShieldCheck,
  ChevronRight,
  ArrowLeft,
  Flame,
  Wrench,
  AlertTriangle,
  Award
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function IndustryDetailPage({ params }: PageProps) {
  // Unwrap the params promise using React.use()
  const resolvedParams = use(params);
  const { slug } = resolvedParams;

  const industry = industries.find((i) => i.slug === slug);

  if (!industry) {
    notFound();
  }

  const getSectorIcon = (sector: string) => {
    switch (sector) {
      case "Commercial": return Building;
      case "Hospitality & Public": return Hotel;
      case "Industrial": return Factory;
      case "Institutional": return GraduationCap;
      default: return Shield;
    }
  };

  const SectorIcon = getSectorIcon(industry.sector);

  // Look up recommended services
  const recommendedServices = services.filter((svc) =>
    industry.solutions.includes(svc.slug)
  );

  return (
    <div className="flex flex-col w-full min-h-screen bg-charcoal-950 text-gray-300">
      
      {/* 1. Breadcrumbs */}
      <div className="bg-charcoal-900 border-b border-charcoal-800 py-3 px-4 sm:px-6 lg:px-8 text-xs">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-gray-500 font-medium">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/industries" className="hover:text-white transition-colors">Industries</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gray-300 truncate">{industry.title}</span>
        </div>
      </div>

      {/* 2. Hero */}
      <section 
        className="relative py-16 px-4 sm:px-6 lg:px-8 border-b border-charcoal-800 bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(to right, rgba(18, 18, 18, 0.85) 50%, rgba(18, 18, 18, 0.3) 100%), url('${industry.imageUrl}')` }}
      >
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center z-10">
          
          <div className="lg:col-span-8 space-y-5 text-center lg:text-left">
            <Link
              href="/industries"
              className="inline-flex items-center gap-1.5 text-xs text-primary font-bold hover:underline mb-2"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Industries Catalog</span>
            </Link>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Fire Safety for {industry.title}
            </h1>

            <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Customized active firefighting, gaseous clean-agent suppression, and code-compliant installations tailored for the {industry.title} sector.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href={`/request-quote?industry=${slug}`}
                className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-white text-center px-6 py-3 rounded-lg font-bold text-xs uppercase tracking-wider transition-colors shadow-lg"
              >
                Request Safety Audit
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto text-center bg-charcoal-950 border border-charcoal-800 hover:border-primary px-6 py-3 rounded-lg text-white font-bold text-xs uppercase tracking-wider transition-colors"
              >
                Contact Varanasi CFO Partner
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4 hidden lg:flex items-center justify-center">
            <div className="bg-charcoal-950 border border-charcoal-850 p-8 rounded-2xl text-primary red-glow">
              <SectorIcon className="w-24 h-24 stroke-[1.2]" />
            </div>
          </div>

        </div>
      </section>

      {/* 3. Content Details */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Side Details */}
        <div className="lg:col-span-8 space-y-12">
          
          {/* Overview */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight border-l-4 border-primary pl-3">
              Sector Context
            </h2>
            <p className="text-sm leading-relaxed text-gray-300">
              {industry.description}
            </p>
          </div>

          {/* Hazards & Risks */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight border-l-4 border-primary pl-3">
              Primary Hazards & Risks
            </h2>
            <div className="p-4 bg-charcoal-900 border border-charcoal-850 rounded-xl flex gap-3.5 items-start">
              <AlertTriangle className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="text-xs font-bold text-red-500 uppercase tracking-widest block">Fire Risk Profile</span>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {industry.risks}
                </p>
              </div>
            </div>
          </div>

          {/* Operational Challenges */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight border-l-4 border-primary pl-3">
              Operational Safety Challenges
            </h2>
            <div className="space-y-3">
              {industry.challenges.map((chal, i) => (
                <div key={i} className="flex gap-2.5 items-start p-3 bg-charcoal-900/50 border border-charcoal-850 rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
                  <span className="text-xs text-gray-300 leading-relaxed">{chal}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Solutions (Bi-directional links) */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white tracking-tight border-l-4 border-primary pl-3">
              Recommended Fire Safety Solutions
            </h2>
            <p className="text-xs text-gray-400">
              We recommend installing the following code-compliant systems to secure this sector:
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {recommendedServices.map((svc) => (
                <Link
                  key={svc.slug}
                  href={`/services/${svc.slug}`}
                  className="p-4 bg-charcoal-900 hover:bg-charcoal-850 border border-charcoal-850 hover:border-primary rounded-xl transition-all duration-200 flex justify-between items-center group/item"
                >
                  <div className="space-y-1">
                    <span className="font-bold text-xs text-white group-hover/item:text-primary transition-colors">
                      {svc.title}
                    </span>
                    <span className="text-[10px] text-gray-500 block truncate max-w-[200px]">
                      {svc.shortDesc}
                    </span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-500 group-hover/item:text-primary group-hover/item:translate-x-0.5 transition-all" />
                </Link>
              ))}
            </div>
          </div>

        </div>

        {/* Right Side Sidebar */}
        <div className="lg:col-span-4 space-y-8">
          
          {/* Outcome Benefits */}
          <div className="bg-charcoal-900 border border-charcoal-800 rounded-xl p-5 space-y-4">
            <h3 className="font-heading text-sm font-bold text-white uppercase tracking-wider border-b border-charcoal-800 pb-2">
              Outcome Benefits
            </h3>
            <ul className="space-y-3">
              {industry.benefits.map((benefit, i) => (
                <li key={i} className="flex gap-2 items-start text-xs text-gray-400 leading-normal">
                  <ShieldCheck className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Local Varanasi trust box */}
          <div className="bg-charcoal-950 border border-charcoal-850 rounded-xl p-5 space-y-3">
            <div className="flex items-center gap-1.5 text-xs text-accent font-bold uppercase tracking-wider">
              <Award className="w-4 h-4 text-primary" />
              <span>CFO Safety Compliance</span>
            </div>
            <p className="text-[11px] text-gray-400 leading-relaxed">
              We help Varanasi businesses structure their safety systems to easily obtain and renew Fire Safety clearances under UP fire norms.
            </p>
          </div>

          {/* CTA Box */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 space-y-4">
            <h3 className="font-heading text-sm font-bold text-white uppercase tracking-wider">
              Request Site Proposal
            </h3>
            <p className="text-[11px] text-gray-400 leading-relaxed">
              Get an itemized safety engineering blueprint layout designed specifically for {industry.title}.
            </p>
            <Link
              href={`/request-quote?industry=${slug}`}
              className="w-full bg-primary hover:bg-primary-hover text-white text-center py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider block transition-colors"
            >
              Request Free Quote
            </Link>
          </div>

        </div>

      </section>

    </div>
  );
}
