"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
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
  ChevronRight,
  ShieldCheck,
  ChevronDown,
  ArrowLeft,
  ArrowRight,
  FileText
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<any>> = {
  FlameKindling: FlameKindling,
  RotateCw: Flame,
  BellRing: BellRing,
  ShieldAlert: ShieldAlert,
  Waves: Waves,
  Shield: Flame,
  Wrench: Wrench,
  FileCheck: CheckCircle,
  PhoneCall: Phone,
  FileText: Briefcase,
  Eye: CheckCircle
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ServiceDetailPage({ params }: PageProps) {
  // Unwrap the params promise using React.use()
  const resolvedParams = use(params);
  const { slug } = resolvedParams;

  const service = services.find((s) => s.slug === slug);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  if (!service) {
    notFound();
  }

  const SvcIcon = iconMap[service.iconName] || Flame;

  // Find 3 related services (excluding current one)
  const relatedServices = services
    .filter((s) => s.slug !== slug)
    .slice(0, 3);

  return (
    <div className="flex flex-col w-full min-h-screen bg-charcoal-950 text-gray-300">
      
      {/* 1. Breadcrumb navigation bar */}
      <div className="bg-charcoal-900 border-b border-charcoal-800 py-3 px-4 sm:px-6 lg:px-8 text-xs">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-gray-500 font-medium">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/services" className="hover:text-white transition-colors">Services</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gray-300 truncate">{service.title}</span>
        </div>
      </div>

      {/* 2. Hero Section */}
      <section 
        className="relative py-16 px-4 sm:px-6 lg:px-8 border-b border-charcoal-800 bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(to right, rgba(18, 18, 18, 0.85) 50%, rgba(18, 18, 18, 0.3) 100%), url('${service.imageUrl}')` }}
      >
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center z-10">
          
          <div className="lg:col-span-8 space-y-5 text-center lg:text-left">
            {/* Back to services */}
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-xs text-primary font-bold hover:underline mb-2"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Services Catalog</span>
            </Link>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {service.title} <br className="hidden sm:inline" />
              <span className="text-primary text-glow-red">in Varanasi</span>
            </h1>

            <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {service.shortDesc}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href={`/request-quote?service=${slug}`}
                className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-white text-center px-6 py-3 rounded-lg font-bold text-xs uppercase tracking-wider transition-colors shadow-lg"
              >
                Request Service Quote
              </Link>
              <a
                href="tel:+917007447595"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-charcoal-950 border border-charcoal-800 hover:border-primary px-6 py-3 rounded-lg text-white font-bold text-xs uppercase tracking-wider transition-colors"
              >
                <Phone className="w-4 h-4 text-primary fill-primary" />
                <span>Call Emergency Support</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 hidden lg:flex items-center justify-center">
            <div className="bg-charcoal-950 border border-charcoal-850 p-8 rounded-2xl text-primary red-glow">
              <SvcIcon className="w-24 h-24 stroke-[1.2]" />
            </div>
          </div>

        </div>
      </section>

      {/* 3. Detailed Contents Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Side: Main Details */}
        <div className="lg:col-span-8 space-y-12">
          
          {/* Overview */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight border-l-4 border-primary pl-3">
              Service Overview
            </h2>
            {service.overview.map((para, i) => (
              <p key={i} className="text-sm leading-relaxed text-gray-300">
                {para}
              </p>
            ))}
          </div>

          {/* Features */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight border-l-4 border-primary pl-3">
              Technical Specifications & Key Details
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.features.map((feat, i) => (
                <div key={i} className="flex gap-2.5 items-start p-3 bg-charcoal-900 border border-charcoal-850 rounded-lg">
                  <ShieldCheck className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-xs text-gray-300 leading-normal">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Applications */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight border-l-4 border-primary pl-3">
              Standard Applications & Use Cases
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.applications.map((app, i) => (
                <div key={i} className="flex items-center gap-2 p-2.5 bg-charcoal-900/40 border border-charcoal-850 rounded-lg text-xs text-gray-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  <span>{app}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Delivery Process Timeline */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white tracking-tight border-l-4 border-primary pl-3">
              Our Safety Execution Process
            </h2>
            <div className="relative border-l border-charcoal-850 ml-3 space-y-6 pl-6">
              {service.process.map((step, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-primary border-2 border-charcoal-950 flex items-center justify-center text-[8px] font-bold text-white">
                    {i + 1}
                  </div>
                  <p className="text-xs text-gray-300 font-semibold leading-normal">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Equipment Handled */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight border-l-4 border-primary pl-3">
              Equipment & Spares Handled
            </h2>
            <div className="space-y-3">
              {service.equipment.map((eq, i) => (
                <div key={i} className="p-4 bg-charcoal-900 border border-charcoal-850 rounded-xl flex gap-4 items-center sm:items-start">
                  {eq.imageUrl && (
                    <img
                      src={eq.imageUrl}
                      alt={eq.name}
                      className="w-16 h-16 object-contain rounded-lg bg-white p-1 border border-charcoal-800 shrink-0"
                    />
                  )}
                  <div className="space-y-1">
                    <h4 className="font-bold text-xs text-white uppercase tracking-wider">{eq.name}</h4>
                    <p className="text-[11px] text-gray-400 leading-relaxed">{eq.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Side: Sidebar (Benefits, Local areas checklist, Quick Quote) */}
        <div className="lg:col-span-4 space-y-8">
          
          {/* Benefits Box */}
          <div className="bg-charcoal-900 border border-charcoal-800 rounded-xl p-5 space-y-4">
            <h3 className="font-heading text-sm font-bold text-white uppercase tracking-wider border-b border-charcoal-800 pb-2">
              Key Value Benefits
            </h3>
            <ul className="space-y-3">
              {service.benefits.map((benefit, i) => (
                <li key={i} className="flex gap-2 items-start text-xs text-gray-400 leading-normal">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Varanasi localized assistance callout */}
          <div className="bg-charcoal-950 border border-charcoal-850 rounded-xl p-5 space-y-3">
            <span className="text-[10px] font-bold text-accent uppercase tracking-wider block">
              Varanasi Site Service Areas
            </span>
            <p className="text-[11px] text-gray-400 leading-relaxed">
              We dispatch installation and inspection teams to **Sigra**, **Lanka**, **Bhelupur**, **Cantt**, **BHU**, and nearby Purvanchal districts like **Mughalsarai** and **Jaunpur**.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-xs text-primary font-bold hover:underline"
            >
              <span>Verify Local Area Coverage</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Quick Quote box in sidebar */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 space-y-4">
            <h3 className="font-heading text-sm font-bold text-white uppercase tracking-wider">
              Request Free Audit
            </h3>
            <p className="text-[11px] text-gray-400 leading-relaxed">
              Have a query? Request a callback or let us calculate your compliance needs.
            </p>
            <Link
              href={`/request-quote?service=${slug}`}
              className="w-full bg-primary hover:bg-primary-hover text-white text-center py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider block transition-colors shadow-lg"
            >
              Get Free Quote
            </Link>
          </div>

        </div>

      </section>

      {/* 4. FAQs section */}
      <section className="bg-charcoal-900 py-16 border-t border-b border-charcoal-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-primary uppercase tracking-widest">FAQs</span>
            <h2 className="text-2xl font-bold text-white tracking-tight">Service-Specific FAQs</h2>
            <div className="h-1 w-16 bg-primary mx-auto rounded" />
          </div>

          <div className="space-y-3">
            {service.faqs.map((faq, idx) => (
              <div key={idx} className="border border-charcoal-800 rounded-xl bg-charcoal-950 overflow-hidden">
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-4 text-left font-semibold text-xs sm:text-sm text-white hover:bg-charcoal-850/40"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                      activeFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`bg-charcoal-900/50 text-[11px] sm:text-xs text-gray-400 leading-relaxed transition-all duration-300 ${
                    activeFaq === idx ? "p-4 max-h-[300px] border-t border-charcoal-800" : "max-h-0 overflow-hidden"
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Related Services list */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-8">
        <h3 className="font-heading text-lg font-bold text-white tracking-tight border-l-4 border-primary pl-3">
          Other Related Services
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedServices.map((rel) => {
            const RelIcon = iconMap[rel.iconName] || Flame;
            return (
              <div key={rel.slug} className="glass-card rounded-xl p-5 border border-charcoal-850 flex flex-col justify-between group">
                <div className="space-y-3">
                  <div className="text-primary group-hover:scale-105 transition-transform duration-200">
                    <RelIcon className="w-6 h-6" />
                  </div>
                  <h4 className="font-heading text-sm font-bold text-white group-hover:text-primary transition-colors">
                    {rel.title}
                  </h4>
                  <p className="text-[11px] text-gray-400 line-clamp-3 leading-relaxed">
                    {rel.shortDesc}
                  </p>
                </div>
                <div className="pt-4">
                  <Link
                    href={`/services/${rel.slug}`}
                    className="text-[11px] font-bold text-accent hover:text-primary transition-colors inline-flex items-center gap-1"
                  >
                    <span>View Service</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
