"use client";

import React, { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import {
  MapPin,
  ArrowLeft,
  ChevronRight,
  ShieldAlert,
  Building,
  Award,
  ShieldCheck,
  Check
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ProjectDetailPage({ params }: PageProps) {
  // Unwrap the params promise using React.use()
  const resolvedParams = use(params);
  const { slug } = resolvedParams;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Related projects (excluding current one)
  const relatedProjects = projects
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  return (
    <div className="flex flex-col w-full min-h-screen bg-charcoal-950 text-gray-300">
      
      {/* 1. Breadcrumbs */}
      <div className="bg-charcoal-900 border-b border-charcoal-800 py-3 px-4 sm:px-6 lg:px-8 text-xs">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-gray-500 font-medium">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/projects" className="hover:text-white transition-colors">Projects</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gray-300 truncate">{project.title}</span>
        </div>
      </div>

      {/* 2. Page Hero */}
      <section 
        className="relative py-16 px-4 sm:px-6 lg:px-8 border-b border-charcoal-800 bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(to right, rgba(18, 18, 18, 0.85) 50%, rgba(18, 18, 18, 0.3) 100%), url('${project.imageUrl}')` }}
      >
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center z-10">
          
          <div className="lg:col-span-8 space-y-5 text-center lg:text-left">
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-xs text-primary font-bold hover:underline mb-2"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Projects Portfolio</span>
            </Link>

            <span className="text-xs bg-primary/10 border border-primary/20 text-primary px-3 py-1 rounded-full font-bold uppercase tracking-wider inline-block">
              {project.category}
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {project.title} Case Study
            </h1>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-gray-400">
              <span className="flex items-center gap-1">
                <Building className="w-4 h-4 text-primary shrink-0" />
                <span>Client: **{project.client}**</span>
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4 text-accent shrink-0" />
                <span>Location: **{project.location}**</span>
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 hidden lg:flex items-center justify-center">
            <div className="bg-charcoal-950 border border-charcoal-850 p-8 rounded-2xl text-accent red-glow">
              <Award className="w-24 h-24 stroke-[1.2]" />
            </div>
          </div>

        </div>
      </section>

      {/* 3. Case Study Breakdown */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left main content */}
        <div className="lg:col-span-8 space-y-10">
          
          {/* Problem */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white tracking-tight border-l-4 border-primary pl-3">
              The Challenge & Requirements
            </h2>
            <p className="text-sm leading-relaxed text-gray-300">
              {project.problem}
            </p>
          </div>

          {/* Solution */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white tracking-tight border-l-4 border-primary pl-3">
              Our Safety Engineering Approach
            </h2>
            <p className="text-sm leading-relaxed text-gray-300">
              {project.solution}
            </p>
          </div>

          {/* Deployed Equipment */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white tracking-tight border-l-4 border-primary pl-3">
              Equipment & Brands Deployed
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.equipmentUsed.map((equip, i) => (
                <div key={i} className="flex gap-2 p-3 bg-charcoal-900 border border-charcoal-850 rounded-xl items-center">
                  <div className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs text-gray-300 font-semibold">{equip}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right sidebar */}
        <div className="lg:col-span-4 space-y-8">
          
          {/* Quick project stats */}
          <div className="bg-charcoal-900 border border-charcoal-800 rounded-xl p-5 space-y-4">
            <h3 className="font-heading text-sm font-bold text-white uppercase tracking-wider border-b border-charcoal-800 pb-2">
              Project Parameters
            </h3>
            
            <div className="space-y-3 text-xs">
              <div>
                <span className="text-gray-500 block">Industry Sector</span>
                <span className="font-semibold text-white">{project.industry}</span>
              </div>
              <div>
                <span className="text-gray-500 block">Service Classification</span>
                <span className="font-semibold text-white">{project.category}</span>
              </div>
              <div>
                <span className="text-gray-500 block">Site Location</span>
                <span className="font-semibold text-white">{project.location}</span>
              </div>
              <div>
                <span className="text-gray-500 block">NOC Clearance Status</span>
                <span className="text-emerald-400 font-bold">CLEAR / APPROVED</span>
              </div>
            </div>
          </div>

          {/* Local Varanasi callout */}
          <div className="bg-charcoal-950 border border-charcoal-850 rounded-xl p-5 space-y-3">
            <div className="flex items-center gap-1.5 text-xs text-accent font-bold uppercase tracking-wider">
              <ShieldAlert className="w-4 h-4 text-primary" />
              <span>Certified Installation</span>
            </div>
            <p className="text-[11px] text-gray-400 leading-relaxed">
              We certify that our project mockups represent safety grids executing exactly under local UP Fire NOC guidelines.
            </p>
          </div>

          {/* Quick quote box */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 space-y-4">
            <h3 className="font-heading text-sm font-bold text-white uppercase tracking-wider">
              Request Similar Project Layout
            </h3>
            <p className="text-[11px] text-gray-400 leading-relaxed">
              Discuss similar system designs for your hotel, school, or factory.
            </p>
            <Link
              href={`/request-quote?project=${slug}`}
              className="w-full bg-primary hover:bg-primary-hover text-white text-center py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider block transition-colors"
            >
              Get Free Project Quote
            </Link>
          </div>

        </div>

      </section>

      {/* 4. Related Projects */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-8 border-t border-charcoal-850">
        <h3 className="font-heading text-lg font-bold text-white tracking-tight border-l-4 border-primary pl-3">
          Other Showcase Installations
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedProjects.map((rel) => (
            <div key={rel.slug} className="glass-card rounded-xl p-5 border border-charcoal-850 flex flex-col justify-between group">
              <div className="space-y-3">
                <span className="text-[9px] bg-primary/10 border border-primary/20 text-primary px-2 py-0.5 rounded-full font-bold uppercase tracking-wider inline-block">
                  {rel.category}
                </span>
                <h4 className="font-heading text-sm font-bold text-white group-hover:text-primary transition-colors">
                  {rel.title}
                </h4>
                <p className="text-[11px] text-gray-400 line-clamp-3 leading-relaxed">
                  {rel.problem}
                </p>
              </div>
              <div className="pt-4 border-t border-charcoal-850/50 mt-4 flex items-center justify-between">
                <span className="text-[10px] text-gray-500 font-semibold">{rel.industry}</span>
                <Link
                  href={`/projects/${rel.slug}`}
                  className="text-[11px] font-bold text-accent hover:text-primary transition-colors inline-flex items-center gap-1"
                >
                  <span>Read Case Study</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-all" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
