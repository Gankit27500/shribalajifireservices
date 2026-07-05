"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Flame,
  Shield,
  Phone,
  CheckCircle,
  Building,
  Users,
  Wrench,
  MapPin,
  ArrowRight,
  ChevronRight,
  Star,
  Award,
  ChevronDown,
  HelpCircle,
  FlameKindling,
  BellRing,
  ShieldAlert,
  Waves,
  Briefcase,
  X
} from "lucide-react";
import { services } from "@/data/services";
import { industries } from "@/data/industries";
import { projects } from "@/data/projects";

// Simple mapping to render correct icons dynamically
const iconMap: Record<string, React.ComponentType<any>> = {
  FlameKindling: FlameKindling,
  RotateCw: Flame,
  BellRing: BellRing,
  ShieldAlert: ShieldAlert,
  Waves: Waves,
  Shield: Shield,
  Wrench: Wrench,
  FileCheck: CheckCircle,
  PhoneCall: Phone,
  FileText: Briefcase,
  Eye: Shield
};

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activePopup, setActivePopup] = useState<{ type: "stat" | "service" | "project" | "industry"; id: number | string } | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const localAreas = [
    "Lanka", "Bhelupur", "Sigra", "Cantt", "Maldahiya", 
    "Mahmoorganj", "Pandeypur", "BHU Area", "Ramnagar", 
    "Mughalsarai", "Bhadohi", "Jaunpur"
  ];

  const trustStats = [
    { value: "23+", label: "Years Experience", desc: "Est. 2001 (Pankaj Srivastava)" },
    { value: "500+", label: "Projects Completed", desc: "Lemon Tree & Local Hotels" },
    { value: "350+", label: "Happy Clients", desc: "Corporate & Hospitality" },
    { value: "24/7", label: "Emergency Support", desc: "7007447595" }
  ];

  const whyChooseUs = [
    { title: "Certified Professionals", desc: "Trained safety engineers and licensed technical installation teams." },
    { title: "On-time Delivery", desc: "Timely installations and rapid 24-48h extinguisher refilling turnaround." },
    { title: "Quality Assurance", desc: "Strictly ISI-marked, CE certified, and UL/FM approved fire protection gear." },
    { title: "Competitive Pricing", desc: "Transparent, itemized pricing structures with no hidden maintenance fees." },
    { title: "Complete Compliance", desc: "Systems designed strictly as per National Building Code (NBC Part 4) standards." }
  ];

  const localFaqs = [
    { q: "What fire safety compliance services do you provide in Varanasi?", a: "We provide end-to-end services: fire load calculations, evacuation map designs, fire safety audits, and full installations of hydrants, alarms, and sprinklers required by the Varanasi Chief Fire Officer (CFO) for complete fire safety compliance." },
    { q: "Are your fire extinguishers certified and refillable?", a: "Yes, all extinguishers we supply are ISI-marked and standard-compliant. We operate a dedicated, fully-equipped refilling and hydraulic pressure testing facility in Varanasi with standard turnaround times of 24-48 hours." },
    { q: "Do you offer emergency assistance for leakages or alarm issues?", a: "Yes, our priority emergency team is available 24/7 at +91-7007447595. We quickly dispatch technicians to resolve pipe bursts, cylinder leaks, pressure drops, or fire alarm panel loop faults inside Varanasi." },
    { q: "Can we sign a maintenance contract (AMC) for our hotel or hospital?", a: "Absolutely. We offer customized comprehensive and non-comprehensive Annual Maintenance Contracts (AMC) that cover quarterly inspections, testing logs, and compliance stamps for hospitals, hotels, and apartments." }
  ];

  return (
    <div className="flex flex-col w-full bg-charcoal-950 overflow-x-hidden">
      
      {/* 1. HERO BANNER SECTION */}
      <section 
        className="relative min-h-[90vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 border-b border-charcoal-800 bg-cover bg-center"
        style={{ backgroundImage: "linear-gradient(to right, rgba(18, 18, 18, 0.75) 40%, rgba(18, 18, 18, 0.3) 100%), url('/images/hero-bg.png')" }}
      >
        {/* Subtle background grid mockup */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#141414_1px,transparent_1px),linear-gradient(to_bottom,#141414_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
        
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full z-10">
          {/* Hero Left Content */}
          <div className="lg:col-span-9 space-y-6 text-center lg:text-left">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/30 px-3 py-1.5 rounded-full text-xs font-semibold text-primary uppercase tracking-wider">
              <Shield className="w-3.5 h-3.5 fill-primary/15" />
              <span>बनारस के अपने फायर सेफ्टी एक्सपर्ट्स (Varanasi No. 1 Fire Safety Partner)</span>
            </div>
            
            {/* H1 Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              बनारस की सबसे भरोसेमंद <br className="hidden sm:inline" />
              <span className="text-primary text-glow-red">फायर सेफ्टी</span> सर्विस <br />
              <span className="text-accent">FIRE SAFETY & REFILLING</span>
            </h1>
            
            {/* Subheading */}
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Varanasi (बनारस) के स्कूलों, होटलों, अस्पतालों और फैक्ट्रियों के लिए ISI फायर सिलेंडर (Extinguishers) सप्लाई, 24-घंटे एक्सप्रेस रीफिलिंग, फायर पाइप-पंप फिटिंग और AMC की पूरी सर्विस।
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/request-quote"
                className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-lg font-bold text-sm shadow-xl shadow-primary/30 transition-all duration-200 transform hover:-translate-y-0.5 text-center"
              >
                मुफ़्त सलाह लें (Get Free Quote)
              </Link>
              <a
                href="tel:+917007447595"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-charcoal-900/90 border border-charcoal-800 hover:border-primary px-8 py-3 rounded-lg text-white font-bold text-sm transition-all duration-200 transform hover:-translate-y-0.5 text-center"
              >
                <Phone className="w-4 h-4 text-primary animate-pulse fill-primary" />
                <span>24/7 Emergency Call</span>
              </a>
            </div>

            {/* Micro Trust badges */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 border-t border-charcoal-800 pt-6 max-w-md mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-1.5 text-xs text-gray-400">
                <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                <span>Certified Engineers</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-400">
                <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                <span>NBC Compliant</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-400">
                <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                <span>VDA Approved</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATISTICS / TRUST BAR */}
      <section className="bg-charcoal-900 py-10 border-b border-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {trustStats.map((stat, i) => (
              <div 
                key={i} 
                onClick={() => setActivePopup({ type: "stat", id: i })}
                className="p-5 space-y-1.5 rounded-xl bg-charcoal-950/40 border border-charcoal-850/80 cursor-pointer transform hover:-translate-y-1.5 hover:scale-[1.02] hover:bg-charcoal-900/90 hover:border-primary/50 transition-all duration-300 group select-none shadow-lg relative overflow-hidden"
              >
                {/* Glowing hover backdrop */}
                <div className="absolute -inset-y-12 -inset-x-12 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="text-3xl sm:text-4xl font-extrabold text-primary text-glow-red font-heading group-hover:scale-105 transition-all duration-300 relative z-10">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-white uppercase tracking-wider relative z-10">
                  {stat.label}
                </div>
                <div className="text-[10px] text-gray-500 relative z-10">
                  {stat.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SERVICES OVERVIEW GRID */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold text-primary uppercase tracking-widest">Our Services (हमारी सेवाएं)</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            फायर सेफ्टी की सभी सेवाएं (Our Services)
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded" />
          <p className="text-sm text-gray-400 leading-relaxed">
            From emergency portable cylinders to complex water sprinkler networks and gas suppression systems, we provide single-window safety engineering.
          </p>
        </div>

        {/* Services Grid (6 Primary Services shown on Home - With Cover Images) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 6).map((svc) => {
            const SvcIcon = iconMap[svc.iconName] || Flame;
            return (
              <Link
                key={svc.slug}
                href={`/services/${svc.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-xl border border-charcoal-800 shadow-xl overflow-hidden flex flex-col justify-between group transform hover:-translate-y-1.5 hover:border-primary/50 transition-all duration-300 hover:scale-[1.01]"
              >
                <div>
                  {/* Card Header Image */}
                  <div 
                    className="h-36 bg-cover bg-center relative flex items-center justify-center border-b border-charcoal-850"
                    style={{ backgroundImage: `url('${svc.imageUrl}')` }}
                  >
                    <div className="absolute inset-0 bg-black/35 group-hover:bg-black/15 transition-colors duration-300" />
                    
                    {/* Floating Icon Box */}
                    <div className="relative z-10 bg-primary/20 backdrop-blur-sm border border-primary/30 w-11 h-11 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <SvcIcon className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <h3 className="font-heading text-base font-bold text-white group-hover:text-primary transition-colors duration-200">
                      {svc.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed line-clamp-3">
                      {svc.shortDesc}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <div className="pt-4 border-t border-charcoal-850 flex items-center justify-between">
                    <span className="text-[10px] text-gray-500 font-semibold">Service Detail</span>
                    <span
                      className="text-[11px] font-bold text-accent hover:text-primary transition-colors inline-flex items-center gap-1"
                    >
                      <span>Explore Service</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-all" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-charcoal-900 border border-charcoal-800 hover:border-primary px-6 py-3 rounded-lg text-white font-bold text-xs transition-colors"
          >
            <span>View All 11 Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 4. WHY CHOOSE SHRI BALAJI */}
      <section className="bg-charcoal-900 py-16 border-t border-b border-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-5 space-y-5">
            <span className="text-xs font-bold text-primary uppercase tracking-widest">Why Choose Us</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              लोकल व्यापारी श्री बालाजी पर क्यों भरोसा करते हैं?
            </h2>
            <div className="h-1 w-16 bg-primary rounded" />
            <p className="text-sm text-gray-400 leading-relaxed">
              We understand that fire safety is a matter of absolute trust and compliance. We combine premium-grade materials with expert engineering to keep your site safe and fully audit-ready.
            </p>
            <div className="bg-charcoal-950 p-4 rounded-xl border border-charcoal-800 space-y-2">
              <span className="text-xs text-accent font-bold uppercase tracking-wider block">Compliance Standard</span>
              <p className="text-[11px] text-gray-400">
                All systems conform to **National Building Code (NBC) Part 4**, **Bureau of Indian Standards (BIS)**, and local UP Fire Service safety regulations.
              </p>
            </div>
          </div>

          {/* Right Cards List */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whyChooseUs.map((wcu, i) => (
              <div
                key={i}
                className="p-5 bg-charcoal-950 rounded-xl border border-charcoal-850 space-y-2 hover:border-primary/45 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <h3 className="font-heading text-xs font-bold text-white uppercase tracking-wider">
                    {wcu.title}
                  </h3>
                </div>
                <p className="text-[11px] text-gray-400 leading-relaxed">
                  {wcu.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. INDUSTRIES WE SERVE */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold text-primary uppercase tracking-widest">Sectors Serviced</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            हम किन-किन क्षेत्रों में सर्विस देते हैं? (Industries We Serve)
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded" />
          <p className="text-sm text-gray-400 leading-relaxed">
            Every sector requires specialized designs. We map appropriate gaseous suppression, sprinkler nodes, and alarms to match the specific hazard profile of your industry.
          </p>
        </div>

        {/* Industry tiles grid (6 main shown on Home - With Image Backgrounds) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.slice(0, 6).map((ind) => (
            <Link
              key={ind.slug}
              href={`/industries/${ind.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative h-56 rounded-xl overflow-hidden shadow-lg border border-charcoal-850 hover:border-primary flex flex-col justify-end p-5 transition-all duration-350 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 group bg-cover bg-center"
              style={{ backgroundImage: `linear-gradient(to top, rgba(18, 18, 18, 0.75) 25%, rgba(18, 18, 18, 0.1) 100%), url('${ind.imageUrl}')` }}
            >
              <div className="relative z-10 space-y-2 text-left">
                {/* Floating Icon/Badge */}
                <div className="w-8 h-8 rounded-lg bg-primary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Building className="w-4 h-4" />
                </div>
                
                <h3 className="font-heading text-sm font-bold text-white group-hover:text-primary transition-colors">
                  {ind.title}
                </h3>
                
                <p className="text-[10px] text-gray-400 line-clamp-2 leading-relaxed">
                  {ind.risks}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 bg-charcoal-900 border border-charcoal-800 hover:border-primary px-6 py-3 rounded-lg text-white font-bold text-xs transition-colors"
          >
            <span>Explore All 14 Industry Verticals</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 6. LOCAL VARANASI CONNECTION SECTION */}
      <section className="bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary/10 via-charcoal-900 to-charcoal-900 py-16 border-t border-b border-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold text-accent uppercase tracking-widest">Local Footprint (बनारस की अपनी टीम)</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
              बनारस और पूर्वांचल की अपनी फायर सुरक्षा टीम
            </h2>
            <div className="h-1 w-20 bg-primary rounded" />
            
            <p className="text-sm text-gray-300 leading-relaxed">
              Shri Balaji Fire Security Services is built on local commitment. We are based directly in Varanasi, meaning our teams are always close at hand to execute projects, conduct safety checks, or respond to emergencies without outstation transit delays.
            </p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Whether your premises is a high-rise office complex in **Sigra**, a school in **Lanka**, a clinical facility near **BHU**, a hotel in the **Cantt area**, or an industrial warehouse in **Mughalsarai**, we offer code-compliant local engineering backups.
            </p>

            {/* List of Varanasi neighborhoods */}
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 pt-2">
              {localAreas.map((area, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1.5 bg-charcoal-950 border border-charcoal-800 px-2.5 py-1.5 rounded-lg text-[10px] text-gray-400 font-semibold"
                >
                  <MapPin className="w-3 h-3 text-primary shrink-0" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Local Credibility Box */}
          <div className="lg:col-span-6">
            <div className="bg-charcoal-950 border border-charcoal-800 rounded-2xl p-6 md:p-8 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
              
              <h3 className="font-heading text-lg font-bold text-white">
                Varanasi Support Network
              </h3>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="bg-primary/10 text-primary w-10 h-10 rounded-lg flex items-center justify-center shrink-0 border border-primary/20">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-white uppercase tracking-wider">Office Location</h4>
                    <p className="text-xs text-gray-400 mt-1">
                      141, Vindhya Vasini Nagar Colony, Orderly Bazar, Varanasi — 221002. Easily accessible for design consultation meetings.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-primary/10 text-primary w-10 h-10 rounded-lg flex items-center justify-center shrink-0 border border-primary/20">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-white uppercase tracking-wider">Local Service Fleet</h4>
                    <p className="text-xs text-gray-400 mt-1">
                      Equipped service vehicles stocked with critical gauges, valves, and dry powder refills operating across Purvanchal.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-primary/10 text-primary w-10 h-10 rounded-lg flex items-center justify-center shrink-0 border border-primary/20">
                    <Phone className="w-5 h-5 fill-primary/10" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-white uppercase tracking-wider">Rapid Response Helpline</h4>
                    <p className="text-xs text-gray-400 mt-1">
                      Dedicated mobile responder desk matching urgent local installation or fire safety compliance checks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FEATURED PROJECTS SHOWCASE */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold text-primary uppercase tracking-widest">Our Work</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            हमारे सफल प्रोजेक्ट्स (Featured Work)
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded" />
          <p className="text-sm text-gray-400 leading-relaxed">
            See how we deploy custom fire safety engineering to protect high-density public malls, five-star resorts, schools, and plants.
          </p>
        </div>

        {/* Projects list cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.slice(0, 3).map((proj) => (
            <Link
              key={proj.slug}
              href={`/projects/${proj.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-xl border border-charcoal-800 shadow-xl overflow-hidden flex flex-col group animate-fade-in hover:border-primary/50 transition-all duration-300 hover:scale-[1.01]"
            >
              {/* Cover box with background image */}
              <div 
                className="h-44 bg-cover bg-center relative flex items-center justify-center border-b border-charcoal-800"
                style={{ backgroundImage: `url('${proj.imageUrl}')` }}
              >
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/5 transition-colors duration-300" />
                <div className="absolute bottom-3 left-3 bg-primary/95 text-white text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                  {proj.category}
                </div>
              </div>
              
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-[10px] text-accent font-bold uppercase tracking-wider">
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

                <div className="pt-2 border-t border-charcoal-850 flex items-center justify-between">
                  <span className="text-[10px] text-gray-500 font-semibold">{proj.industry}</span>
                  <span
                    className="text-[11px] font-bold text-white hover:text-primary transition-colors inline-flex items-center gap-1"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 bg-charcoal-900 border border-charcoal-800 hover:border-primary px-6 py-3 rounded-lg text-white font-bold text-xs transition-colors"
          >
            <span>View All Projects Portfolio</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 8. CLIENTS / BRANDS MARQUEE STRIP */}
      <section className="bg-charcoal-900 py-10 border-t border-b border-charcoal-800 overflow-hidden relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-right from-charcoal-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-left from-charcoal-950 to-transparent z-10 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 mb-4 text-center">
          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
            EQUIPMENT BRANDS SUPPLIED & INSTALLED
          </span>
        </div>

        {/* Marquee Wrapper */}
        <div className="w-full flex">
          <div className="animate-marquee flex items-center gap-16 py-2">
            {/* Set 1 */}
            <span className="text-sm font-bold text-gray-500 tracking-wider">HONEYWELL FIRE</span>
            <span className="text-sm font-bold text-gray-500 tracking-wider">BOSCH SECURITY</span>
            <span className="text-sm font-bold text-gray-500 tracking-wider">JOHNSON CONTROLS</span>
            <span className="text-sm font-bold text-gray-500 tracking-wider">SIEMENS CERBERUS</span>
            <span className="text-sm font-bold text-gray-500 tracking-wider">CEASEFIRE</span>
            <span className="text-sm font-bold text-gray-500 tracking-wider">MINIMAX</span>
            <span className="text-sm font-bold text-gray-500 tracking-wider">LIFECO</span>
            {/* Set 2 (Duplicated for seamless loop) */}
            <span className="text-sm font-bold text-gray-500 tracking-wider">HONEYWELL FIRE</span>
            <span className="text-sm font-bold text-gray-500 tracking-wider">BOSCH SECURITY</span>
            <span className="text-sm font-bold text-gray-500 tracking-wider">JOHNSON CONTROLS</span>
            <span className="text-sm font-bold text-gray-500 tracking-wider">SIEMENS CERBERUS</span>
            <span className="text-sm font-bold text-gray-500 tracking-wider">CEASEFIRE</span>
            <span className="text-sm font-bold text-gray-500 tracking-wider">MINIMAX</span>
            <span className="text-sm font-bold text-gray-500 tracking-wider">LIFECO</span>
          </div>
        </div>
      </section>

      {/* 9. TESTIMONIALS */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold text-primary uppercase tracking-widest">Client Feedback</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            What Our Clients Say
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Testimonial 1 */}
          <div className="glass-card rounded-xl p-6 border border-charcoal-800 space-y-4">
            <div className="flex items-center gap-1 text-primary">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary" />
              ))}
            </div>
            <p className="text-xs text-gray-300 italic leading-relaxed">
              "We hired Shri Balaji Fire Security Services to upgrade the sprinkler lines and kitchen suppression at Taj Ganges, Varanasi. Their work was exceptionally professional. They scheduled the drilling and pipe welding tasks during the late night, ensuring zero disturbance to our hotel guests."
            </p>
            <div className="pt-4 border-t border-charcoal-850 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                TG
              </div>
              <div>
                <h4 className="font-bold text-xs text-white">Facility Manager</h4>
                <p className="text-[10px] text-gray-500">Hotel Taj Ganges, Varanasi</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="glass-card rounded-xl p-6 border border-charcoal-800 space-y-4">
            <div className="flex items-center gap-1 text-primary">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary" />
              ))}
            </div>
            <p className="text-xs text-gray-300 italic leading-relaxed">
              "Managing a high-density shopping mall like JHV Mall requires flawless fire hydrants and backup pumps. Shri Balaji Fire handles our annual maintenance contract (AMC). Their quarterly testing reports are meticulous, which makes our fire safety compliance with the local department extremely smooth."
            </p>
            <div className="pt-4 border-t border-charcoal-850 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                JM
              </div>
              <div>
                <h4 className="font-bold text-xs text-white">Operations Director</h4>
                <p className="text-[10px] text-gray-500">JHV Commercial Complex, Varanasi</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FAQ TEASER SECTION */}
      <section className="bg-charcoal-900 py-16 border-t border-b border-charcoal-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold text-primary uppercase tracking-widest">FAQs</span>
            <h2 className="text-3xl font-bold text-white tracking-tight">
              अक्सर पूछे जाने वाले सवाल (FAQs)
            </h2>
            <div className="h-1 w-16 bg-primary mx-auto rounded" />
          </div>

          {/* Accordion list */}
          <div className="space-y-3">
            {localFaqs.map((faq, index) => (
              <div
                key={index}
                className="border border-charcoal-800 rounded-xl bg-charcoal-950 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-4 text-left font-semibold text-xs sm:text-sm text-white hover:bg-charcoal-850/40 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-primary shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                      activeFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`bg-charcoal-900/50 text-[11px] sm:text-xs text-gray-400 leading-relaxed transition-all duration-300 ${
                    activeFaq === index ? "p-4 max-h-[300px] border-t border-charcoal-800" : "max-h-0 overflow-hidden"
                  }`}
                >
                  {faq.a}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <Link
              href="/faqs"
              className="text-xs font-bold text-primary hover:text-primary-hover hover:underline"
            >
              See All 50 Frequently Asked Questions &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 11. EMERGENCY AND FINAL CTA BANNER */}
      <section className="bg-gradient-to-br from-primary via-primary-hover to-charcoal-950 text-white py-12 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        {/* Glow circle overlay */}
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative max-w-4xl mx-auto space-y-6 z-10">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            NEED IMMEDIATE FIRE SAFETY OR COMPLIANCE SUPPORT?
          </h2>
          <p className="text-xs sm:text-sm text-gray-200 max-w-xl mx-auto">
            Get a free code-compliance site inspection and quotation. Our team is available for emergency pipeline, panel, or cylinder servicing 24/7 across Varanasi.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/request-quote"
              className="w-full sm:w-auto bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-bold text-xs uppercase tracking-wider transition-colors shadow-lg"
            >
              Request Quote
            </Link>
            <a
              href="tel:+917007447595"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-charcoal-950/80 hover:bg-charcoal-950 px-8 py-3 rounded-lg text-white font-bold text-xs uppercase tracking-wider transition-colors border border-white/10"
            >
              <Phone className="w-4 h-4 text-primary fill-primary animate-pulse" />
              <span>Call +91 70074 47595</span>
            </a>
          </div>
        </div>
      </section>

      {/* 5. GLOBAL INTERACTIVE POP-UP MODAL */}
      {activePopup !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-fade-in"
          onClick={() => setActivePopup(null)}
        >
          <div 
            className="max-w-2xl w-full bg-charcoal-900 border border-charcoal-800 rounded-2xl shadow-2xl overflow-hidden my-8 transform scale-100 transition-all relative animate-scale-up text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setActivePopup(null)}
              className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/60 text-gray-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Popup content generator */}
            {activePopup.type === "stat" && (
              (() => {
                const idx = activePopup.id as number;
                const stat = trustStats[idx];
                return (
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                        {idx === 0 && <Award className="w-6 h-6 text-primary" />}
                        {idx === 1 && <Building className="w-6 h-6 text-primary" />}
                        {idx === 2 && <Users className="w-6 h-6 text-primary" />}
                        {idx === 3 && <Phone className="w-6 h-6 text-primary" />}
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-primary uppercase tracking-widest block">
                          STATISTICS SUMMARY
                        </span>
                        <h3 className="text-xl font-bold text-white leading-tight">
                          {stat.label} ({stat.value})
                        </h3>
                      </div>
                    </div>

                    <div className="space-y-4 pt-2">
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {idx === 0 && "Founded in 2001 by fire safety pioneer Pankaj Srivastava, Shri Balaji Fire Security Services has spent over 23 years protecting Varanasi and nearby Purvanchal areas. We are a trusted safety compliance contractor authorized under U.P. Fire Service guidelines."}
                        {idx === 1 && "We have successfully executed complex fire detection, sprinkler piping, and gas flooding suppression installations across high-density facilities, heritage hotels, and cement factories."}
                        {idx === 2 && "Serving leading hospitality chains, financial banks, educational institutions, and manufacturing plants with annual maintenance support."}
                        {idx === 3 && "Our rapid-response emergency technician team is on standby to solve system pressure drops, panel malfunctions, leakages, or urgent cylinder refills in Varanasi."}
                      </p>

                      <div className="space-y-2 pt-2 border-t border-charcoal-850">
                        <span className="text-[10px] font-bold text-accent uppercase tracking-widest block">Key Details</span>
                        <ul className="space-y-2">
                          {idx === 0 && (
                            <>
                              <li className="flex items-start gap-2 text-xs text-gray-300">
                                <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                <span><strong>23+ Years</strong> of continuous local safety leadership in Varanasi.</span>
                              </li>
                              <li className="flex items-start gap-2 text-xs text-gray-300">
                                <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                <span><strong>Authorized Compliance Partner</strong> based in Orderly Bazar.</span>
                              </li>
                              <li className="flex items-start gap-2 text-xs text-gray-300">
                                <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                <span><strong>100% Compliant</strong> with National Building Code (NBC Part 4) standards.</span>
                              </li>
                            </>
                          )}
                          {idx === 1 && (
                            <>
                              <li className="flex items-start gap-2 text-xs text-gray-300">
                                <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                <span><strong>Lemon Tree Hotel, Motihari</strong>: Sprinklers & hydrant grid.</span>
                              </li>
                              <li className="flex items-start gap-2 text-xs text-gray-300">
                                <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                <span><strong>Hotel Mudra, Varanasi</strong>: Kitchen hood suppression setup.</span>
                              </li>
                              <li className="flex items-start gap-2 text-xs text-gray-300">
                                <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                <span><strong>Hotel Sapphire Grand, Varanasi</strong>: Hydrant main upgrades.</span>
                              </li>
                            </>
                          )}
                          {idx === 2 && (
                            <>
                              <li className="flex items-start gap-2 text-xs text-gray-300">
                                <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                <span><strong>Hospitality & Malls</strong>: Automatic sprinklers and hood suppression.</span>
                              </li>
                              <li className="flex items-start gap-2 text-xs text-gray-300">
                                <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                <span><strong>Data Centers & Server Rooms</strong>: Residue-free gaseous suppression.</span>
                              </li>
                              <li className="flex items-start gap-2 text-xs text-gray-300">
                                <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                <span><strong>Schools & Colleges</strong>: Evacuation signs and CBSE compliance audits.</span>
                              </li>
                            </>
                          )}
                          {idx === 3 && (
                            <>
                              <li className="flex items-start gap-2 text-xs text-gray-300">
                                <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                <span><strong>Emergency Hotline</strong>: <strong>+91-7007447595</strong> (Direct Dial)</span>
                              </li>
                              <li className="flex items-start gap-2 text-xs text-gray-300">
                                <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                <span><strong>WhatsApp Queries</strong>: <strong>+91-7007447595</strong> (Direct Link)</span>
                              </li>
                              <li className="flex items-start gap-2 text-xs text-gray-300">
                                <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                <span><strong>Response SLA</strong>: 1-2 Hours response within Varanasi limits.</span>
                              </li>
                            </>
                          )}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-charcoal-850">
                      {idx === 3 ? (
                        <div className="flex gap-3">
                          <a 
                            href="tel:+917007447595"
                            className="flex-1 bg-primary hover:bg-primary-hover text-white text-xs font-bold py-2.5 rounded-lg text-center transition-colors shadow-lg"
                          >
                            Call Helpline
                          </a>
                          <a 
                            href="https://wa.me/917007447595?text=Hello%20Shri%20Balaji%20Fire%20Services,%20I%20need%20emergency%20support."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold py-2.5 rounded-lg text-center transition-colors shadow-lg"
                          >
                            WhatsApp
                          </a>
                        </div>
                      ) : (
                        <button 
                          onClick={() => setActivePopup(null)}
                          className="w-full bg-charcoal-950 border border-charcoal-800 hover:border-primary text-white text-xs font-bold py-2.5 rounded-lg text-center transition-all cursor-pointer"
                        >
                          Close Details
                        </button>
                      )}
                    </div>
                  </div>
                );
              })()
            )}

            {activePopup.type === "service" && (
              (() => {
                const svc = services.find(s => s.slug === activePopup.id);
                if (!svc) return null;
                return (
                  <div>
                    {/* Cover image header */}
                    <div 
                      className="h-48 bg-cover bg-center relative flex items-end p-6"
                      style={{ backgroundImage: `linear-gradient(to top, rgba(18,18,18,0.95) 0%, rgba(18,18,18,0.3) 100%), url('${svc.imageUrl}')` }}
                    >
                      <div className="space-y-1 relative z-10">
                        <span className="text-[10px] font-bold text-primary uppercase tracking-widest block">
                          SERVICE DETAILS PREVIEW
                        </span>
                        <h3 className="text-2xl font-bold text-white leading-tight">
                          {svc.title}
                        </h3>
                      </div>
                    </div>

                    {/* Content body */}
                    <div className="p-6 space-y-4 max-h-[50vh] overflow-y-auto hide-scrollbar">
                      <p className="text-sm text-gray-300 leading-relaxed font-semibold">
                        {svc.shortDesc}
                      </p>
                      
                      <div className="space-y-2">
                        <h4 className="text-xs font-bold text-accent uppercase tracking-wider">Overview</h4>
                        {svc.overview.map((para, pi) => (
                          <p key={pi} className="text-xs text-gray-400 leading-relaxed">{para}</p>
                        ))}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 border-t border-charcoal-850">
                        {/* Benefits */}
                        <div className="space-y-2">
                          <h4 className="text-xs font-bold text-primary uppercase tracking-wider">Key Benefits</h4>
                          <ul className="space-y-1.5">
                            {svc.benefits.map((b, bi) => (
                              <li key={bi} className="flex items-start gap-1.5 text-xs text-gray-400">
                                <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        {/* Features */}
                        <div className="space-y-2">
                          <h4 className="text-xs font-bold text-accent uppercase tracking-wider">Technical Features</h4>
                          <ul className="space-y-1.5">
                            {svc.features.map((f, fi) => (
                              <li key={fi} className="flex items-start gap-1.5 text-xs text-gray-400">
                                <CheckCircle className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                                <span>{f}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 border-t border-charcoal-850 bg-charcoal-950/45 flex items-center gap-3">
                      <Link 
                        href={`/services/${svc.slug}`}
                        className="flex-1 bg-primary hover:bg-primary-hover text-white text-xs font-bold py-2.5 rounded-lg text-center transition-colors shadow-lg"
                      >
                        Read Full Specifications
                      </Link>
                      <Link
                        href="/request-quote"
                        className="flex-1 bg-charcoal-800 hover:bg-charcoal-700 text-white text-xs font-bold py-2.5 rounded-lg text-center transition-colors"
                      >
                        Request Quote
                      </Link>
                    </div>
                  </div>
                );
              })()
            )}

            {activePopup.type === "project" && (
              (() => {
                const proj = projects.find(p => p.slug === activePopup.id);
                if (!proj) return null;
                return (
                  <div>
                    {/* Cover image header */}
                    <div 
                      className="h-48 bg-cover bg-center relative flex items-end p-6"
                      style={{ backgroundImage: `linear-gradient(to top, rgba(18,18,18,0.95) 0%, rgba(18,18,18,0.3) 100%), url('${proj.imageUrl}')` }}
                    >
                      <div className="space-y-1 relative z-10">
                        <div className="flex gap-2">
                          <span className="bg-primary/20 text-primary border border-primary/30 text-[9px] font-bold px-2 py-0.5 rounded-full uppercase">
                            {proj.category}
                          </span>
                          <span className="bg-accent/20 text-accent border border-accent/30 text-[9px] font-bold px-2 py-0.5 rounded-full uppercase">
                            {proj.location}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-white leading-tight">
                          {proj.title}
                        </h3>
                      </div>
                    </div>

                    {/* Content body */}
                    <div className="p-6 space-y-4 max-h-[50vh] overflow-y-auto hide-scrollbar">
                      <div className="space-y-1.5">
                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block">Client Account</span>
                        <p className="text-xs text-white font-medium">{proj.client}</p>
                      </div>

                      <div className="space-y-2 border-t border-charcoal-850 pt-3">
                        <h4 className="text-xs font-bold text-primary uppercase tracking-wider">The Challenge</h4>
                        <p className="text-xs text-gray-400 leading-relaxed">{proj.problem}</p>
                      </div>

                      <div className="space-y-2 border-t border-charcoal-850 pt-3">
                        <h4 className="text-xs font-bold text-emerald-500 uppercase tracking-wider">Our Solution</h4>
                        <p className="text-xs text-gray-400 leading-relaxed">{proj.solution}</p>
                      </div>

                      <div className="space-y-2 border-t border-charcoal-850 pt-3">
                        <h4 className="text-xs font-bold text-accent uppercase tracking-wider">Equipment Deployed</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-1.5">
                          {proj.equipmentUsed.map((equip, eqi) => (
                            <li key={eqi} className="flex items-start gap-1.5 text-xs text-gray-400">
                              <CheckCircle className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                              <span>{equip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="p-6 border-t border-charcoal-850 bg-charcoal-950/45 flex items-center gap-3">
                      <Link 
                        href={`/projects/${proj.slug}`}
                        className="flex-1 bg-primary hover:bg-primary-hover text-white text-xs font-bold py-2.5 rounded-lg text-center transition-colors shadow-lg"
                      >
                        Read Full Case Study
                      </Link>
                      <button
                        onClick={() => setActivePopup(null)}
                        className="flex-1 bg-charcoal-800 hover:bg-charcoal-700 text-white text-xs font-bold py-2.5 rounded-lg text-center transition-colors cursor-pointer"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                );
              })()
            )}

            {activePopup.type === "industry" && (
              (() => {
                const ind = industries.find(i => i.slug === activePopup.id);
                if (!ind) return null;
                return (
                  <div>
                    {/* Cover image header */}
                    <div 
                      className="h-48 bg-cover bg-center relative flex items-end p-6"
                      style={{ backgroundImage: `linear-gradient(to top, rgba(18,18,18,0.95) 0%, rgba(18,18,18,0.3) 100%), url('${ind.imageUrl}')` }}
                    >
                      <div className="space-y-1 relative z-10">
                        <span className="bg-primary/20 text-primary border border-primary/30 text-[9px] font-bold px-2 py-0.5 rounded-full uppercase inline-block mb-1">
                          {ind.sector} Sector
                        </span>
                        <h3 className="text-2xl font-bold text-white leading-tight">
                          {ind.title}
                        </h3>
                      </div>
                    </div>

                    {/* Content body */}
                    <div className="p-6 space-y-4 max-h-[50vh] overflow-y-auto hide-scrollbar">
                      <p className="text-sm text-gray-300 leading-relaxed font-semibold">
                        {ind.risks}
                      </p>
                      
                      <p className="text-xs text-gray-400 leading-relaxed">
                        {ind.description}
                      </p>

                      <div className="space-y-3 border-t border-charcoal-850 pt-3">
                        <h4 className="text-xs font-bold text-accent uppercase tracking-wider">
                          Key Structural Challenges
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {ind.challenges.map((challenge, ci) => (
                            <div 
                              key={ci} 
                              className="p-2.5 rounded bg-charcoal-950/50 border border-charcoal-850 flex items-start gap-2"
                            >
                              <Shield className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                              <span className="text-xs text-gray-300 font-medium">{challenge}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2 border-t border-charcoal-850 pt-3">
                        <h4 className="text-xs font-bold text-primary uppercase tracking-wider">
                          Recommended Systems Deployed
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {ind.solutions.map((sol, si) => (
                            <span 
                              key={si}
                              className="bg-charcoal-950 border border-charcoal-800 text-[10px] text-gray-400 px-2.5 py-1 rounded-full uppercase"
                            >
                              {sol.replace(/-/g, " ")}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="p-6 border-t border-charcoal-850 bg-charcoal-950/45 flex items-center gap-3">
                      <Link 
                        href={`/industries/${ind.slug}`}
                        className="flex-1 bg-primary hover:bg-primary-hover text-white text-xs font-bold py-2.5 rounded-lg text-center transition-colors shadow-lg"
                      >
                        Read Sector Hazards Analysis
                      </Link>
                      <button
                        onClick={() => setActivePopup(null)}
                        className="flex-1 bg-charcoal-800 hover:bg-charcoal-700 text-white text-xs font-bold py-2.5 rounded-lg text-center transition-colors cursor-pointer"
                      >
                        Close Preview
                      </button>
                    </div>
                  </div>
                );
              })()
            )}
          </div>
        </div>
      )}
    </div>
  );
}
