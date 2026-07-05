"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { services } from "@/data/services";
import { industries } from "@/data/industries";
import { FileSpreadsheet, Send, CheckCircle, ShieldAlert, Phone, MessageSquare } from "lucide-react";

function QuoteFormContent() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    industry: "",
    selectedServices: [] as string[],
    location: "Varanasi",
    areaSize: "",
    message: "",
    preferredTime: "Morning (9 AM - 12 PM)",
    consent: false
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  // Autofill forms based on URL query parameters
  useEffect(() => {
    const serviceParam = searchParams.get("service");
    const industryParam = searchParams.get("industry");
    
    if (serviceParam) {
      setFormData((prev) => ({
        ...prev,
        selectedServices: [serviceParam]
      }));
    }
    if (industryParam) {
      setFormData((prev) => ({
        ...prev,
        industry: industryParam
      }));
    }
  }, [searchParams]);

  const handleServiceCheckboxChange = (slug: string) => {
    setFormData((prev) => {
      const isSelected = prev.selectedServices.includes(slug);
      const updated = isSelected
        ? prev.selectedServices.filter((s) => s !== slug)
        : [...prev.selectedServices, slug];
      return { ...prev, selectedServices: updated };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.phone ||
      !formData.industry ||
      formData.selectedServices.length === 0 ||
      !formData.location ||
      !formData.consent
    ) {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        phone: "",
        email: "",
        company: "",
        industry: "",
        selectedServices: [],
        location: "Varanasi",
        areaSize: "",
        message: "",
        preferredTime: "Morning (9 AM - 12 PM)",
        consent: false
      });
    }, 1500);
  };

  return (
    <div className="lg:col-span-8 bg-charcoal-900 border border-charcoal-800 rounded-2xl p-6 sm:p-8 space-y-6">
      
      <div className="space-y-2 border-b border-charcoal-800 pb-4">
        <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
          <FileSpreadsheet className="w-5 h-5 text-primary" />
          <span>Detailed Quote Form</span>
        </h2>
        <p className="text-xs text-gray-400">
          Please fill out the form details below to help our engineers calculate compliance specifications.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5 text-xs">
        
        {/* Status Panels */}
        {status === "success" && (
          <div className="p-4 bg-emerald-950/50 border border-emerald-500/20 text-emerald-400 rounded-lg flex items-start gap-2.5">
            <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold block uppercase tracking-wider text-[10px]">Quote Request Submitted</span>
              <p className="text-[10px] mt-0.5 text-gray-400">
                Thank you! Our safety project coordinator will review your building scope and call you for a site visit.
              </p>
            </div>
          </div>
        )}

        {status === "error" && (
          <div className="p-4 bg-red-950/50 border border-red-500/20 text-red-400 rounded-lg flex items-start gap-2.5">
            <ShieldAlert className="w-5 h-5 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold block uppercase tracking-wider text-[10px]">Form Incomplete</span>
              <p className="text-[10px] mt-0.5 text-gray-400">
                Please provide your Name, Phone, select an Industry, choose at least one Service, and accept the Consent.
              </p>
            </div>
          </div>
        )}

        {/* Section 1: Customer details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Name */}
          <div className="space-y-1">
            <label className="text-gray-400 font-bold uppercase tracking-wider text-[9px]">
              Full Name <span className="text-primary">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Anand Mishra"
              className="w-full bg-charcoal-950 border border-charcoal-800 rounded-lg px-3.5 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-primary text-xs"
            />
          </div>

          {/* Phone */}
          <div className="space-y-1">
            <label className="text-gray-400 font-bold uppercase tracking-wider text-[9px]">
              Phone Number <span className="text-primary">*</span>
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="e.g. +91 98765 43210"
              className="w-full bg-charcoal-950 border border-charcoal-800 rounded-lg px-3.5 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-primary text-xs"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Email */}
          <div className="space-y-1">
            <label className="text-gray-400 font-bold uppercase tracking-wider text-[9px]">
              Email Address
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="e.g. anand@company.com"
              className="w-full bg-charcoal-950 border border-charcoal-800 rounded-lg px-3.5 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-primary text-xs"
            />
          </div>

          {/* Company */}
          <div className="space-y-1">
            <label className="text-gray-400 font-bold uppercase tracking-wider text-[9px]">
              Company / Site Name
            </label>
            <input
              type="text"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              placeholder="e.g. Kashi Grand Hotel"
              className="w-full bg-charcoal-950 border border-charcoal-800 rounded-lg px-3.5 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-primary text-xs"
            />
          </div>
        </div>

        {/* Section 2: Industry Select */}
        <div className="space-y-1">
          <label className="text-gray-400 font-bold uppercase tracking-wider text-[9px] block mb-1">
            Industry Classification <span className="text-primary">*</span>
          </label>
          <select
            required
            value={formData.industry}
            onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
            className="w-full bg-charcoal-950 border border-charcoal-800 rounded-lg px-3.5 py-2.5 text-white focus:outline-none focus:border-primary text-xs cursor-pointer"
          >
            <option value="">-- Select Industry Verticals --</option>
            {industries.map((ind) => (
              <option key={ind.slug} value={ind.slug}>
                {ind.title} ({ind.sector})
              </option>
            ))}
          </select>
        </div>

        {/* Section 3: Services Checkbox Grid */}
        <div className="space-y-2">
          <label className="text-gray-400 font-bold uppercase tracking-wider text-[9px] block">
            Services / Systems Required <span className="text-primary">*</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 bg-charcoal-950 border border-charcoal-800 p-4 rounded-xl max-h-48 overflow-y-auto">
            {services.map((svc) => (
              <div key={svc.slug} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id={`svc-check-${svc.slug}`}
                  checked={formData.selectedServices.includes(svc.slug)}
                  onChange={() => handleServiceCheckboxChange(svc.slug)}
                  className="w-4 h-4 rounded border-charcoal-800 text-primary bg-charcoal-900 accent-primary cursor-pointer"
                />
                <label
                  htmlFor={`svc-check-${svc.slug}`}
                  className="text-gray-300 select-none cursor-pointer"
                >
                  {svc.title}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: Site parameters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Location */}
          <div className="space-y-1">
            <label className="text-gray-400 font-bold uppercase tracking-wider text-[9px]">
              Location / City <span className="text-primary">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              placeholder="e.g. Lanka, Varanasi"
              className="w-full bg-charcoal-950 border border-charcoal-800 rounded-lg px-3.5 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-primary text-xs"
            />
          </div>

          {/* Area size */}
          <div className="space-y-1">
            <label className="text-gray-400 font-bold uppercase tracking-wider text-[9px]">
              Building / Area Size (sq ft)
            </label>
            <input
              type="text"
              value={formData.areaSize}
              onChange={(e) => setFormData({ ...formData, areaSize: e.target.value })}
              placeholder="e.g. 15,000 sq ft"
              className="w-full bg-charcoal-950 border border-charcoal-800 rounded-lg px-3.5 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-primary text-xs"
            />
          </div>
        </div>

        {/* Requirements */}
        <div className="space-y-1">
          <label className="text-gray-400 font-bold uppercase tracking-wider text-[9px]">
            Message / Requirements details
          </label>
          <textarea
            rows={3}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Add comments, number of floors, or specific guidelines..."
            className="w-full bg-charcoal-950 border border-charcoal-800 rounded-lg px-3.5 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-primary text-xs resize-none"
          />
        </div>

        {/* Preferred Callback Time */}
        <div className="space-y-1">
          <label className="text-gray-400 font-bold uppercase tracking-wider text-[9px] block">
            Preferred Callback Time
          </label>
          <select
            value={formData.preferredTime}
            onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
            className="w-full bg-charcoal-950 border border-charcoal-800 rounded-lg px-3.5 py-2.5 text-white focus:outline-none focus:border-primary text-xs cursor-pointer"
          >
            <option>Morning (9 AM - 12 PM)</option>
            <option>Afternoon (12 PM - 4 PM)</option>
            <option>Evening (4 PM - 7 PM)</option>
          </select>
        </div>

        {/* Consent */}
        <div className="flex items-start gap-2.5 pt-1">
          <input
            type="checkbox"
            id="quote-consent"
            checked={formData.consent}
            onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
            className="w-4 h-4 rounded border-charcoal-800 text-primary bg-charcoal-950 accent-primary mt-0.5 shrink-0 cursor-pointer"
          />
          <label htmlFor="quote-consent" className="text-[10px] text-gray-500 leading-normal select-none cursor-pointer">
            I agree to share my building parameters and request a free site evaluation from Shri Balaji Fire Security Services.
          </label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white py-3 rounded-lg font-bold text-xs uppercase tracking-wider transition-colors shadow-lg disabled:opacity-50"
        >
          <Send className="w-4 h-4" />
          <span>{status === "submitting" ? "Submitting Quote Request..." : "Submit Quote Request"}</span>
        </button>

      </form>
    </div>
  );
}

export default function RequestQuotePage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-charcoal-950 text-gray-300">
      
      {/* 1. Page Header */}
      <section className="bg-charcoal-900 border-b border-charcoal-800 py-12 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl" />
        <div className="relative max-w-4xl mx-auto space-y-3 z-10">
          <span className="text-xs font-bold text-primary uppercase tracking-widest">Lead Center</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Request a Free Quote
          </h1>
          <div className="h-1 w-20 bg-primary mx-auto rounded" />
          <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto leading-relaxed">
            Submit your building parameters and service selections to calculate custom active/passive fire suppression estimates.
          </p>
        </div>
      </section>

      {/* 2. Form Grid layout */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Form component wrapped in Suspense for useSearchParams */}
        <Suspense fallback={<div className="lg:col-span-8 text-center text-xs text-gray-500 py-12">Loading Quote Form...</div>}>
          <QuoteFormContent />
        </Suspense>

        {/* Right side contact highlights */}
        <div className="lg:col-span-4 space-y-8">
          
          {/* Quick numbers */}
          <div className="bg-charcoal-900 border border-charcoal-800 rounded-xl p-5 space-y-4">
            <h3 className="font-heading text-sm font-bold text-white uppercase tracking-wider border-b border-charcoal-800 pb-2">
              Callback Helpline
            </h3>
            
            <div className="space-y-3 text-xs text-gray-400">
              <p>For urgent refilling requests or panel faults, call our Varanasi responder directly:</p>
              
              <a
                href="tel:+917007447595"
                className="flex items-center gap-2 text-white font-bold text-sm hover:underline"
              >
                <Phone className="w-4 h-4 fill-primary/10" />
                <span>+91 70074 47595 (Primary)</span>
              </a>

              <a
                href="https://wa.me/917007447595?text=Hello%20Shri%20Balaji%20Fire%20Services,%20I%20would%20like%20to%20request%20a%20quote%20for%2520my%2520premises."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#25D366] font-semibold hover:underline"
              >
                <MessageSquare className="w-4 h-4 fill-[#25D366] text-charcoal-900" />
                <span>WhatsApp Instant chat</span>
              </a>
            </div>
          </div>

          {/* Local compliance info */}
          <div className="bg-charcoal-950 border border-charcoal-850 rounded-xl p-5 space-y-3">
            <h4 className="font-heading text-xs font-bold text-white uppercase tracking-wider">
              Compliance Guarantee
            </h4>
            <p className="text-[11px] text-gray-500 leading-relaxed">
              We certify that our system design layouts adhere to Indian Standards (IS:2190, IS:15105) and qualify for municipal clearance.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}
