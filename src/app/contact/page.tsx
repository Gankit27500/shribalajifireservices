"use client";

import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, ShieldAlert, Send, CheckCircle, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
    consent: false
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message || !formData.consent) {
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
        subject: "",
        message: "",
        consent: false
      });
    }, 1500);
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-charcoal-950 text-gray-300">
      
      {/* 1. Page Header */}
      <section className="bg-charcoal-900 border-b border-charcoal-800 py-12 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl" />
        <div className="relative max-w-4xl mx-auto space-y-3 z-10">
          <span className="text-xs font-bold text-primary uppercase tracking-widest">Reach Us</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Contact Us
          </h1>
          <div className="h-1 w-20 bg-primary mx-auto rounded" />
          <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto leading-relaxed">
            Get in touch with our Varanasi head office for site surveys, refilling schedules, and compliance quotes.
          </p>
        </div>
      </section>

      {/* 2. Contact Info & Form */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Side: Contact details & mock map */}
        <div className="lg:col-span-5 space-y-8">
          
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white tracking-tight">
              Head Office Coordinates
            </h2>
            <div className="h-1 w-12 bg-primary rounded" />
          </div>

          <div className="space-y-4 text-xs sm:text-sm">
            <div className="flex gap-3">
              <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-white uppercase tracking-wider text-xs">Varanasi Address</h4>
                <p className="text-gray-400 mt-1 leading-relaxed">
                  141, Vindhya Vasini Nagar Colony, Orderly Bazar, Varanasi — 221002
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-white uppercase tracking-wider text-xs">Phone Helplines</h4>
                <p className="text-gray-400 mt-1 flex flex-col gap-1.5">
                  <a href="tel:+917007447595" className="hover:underline text-white font-semibold">
                    +91 70074 47595 (Primary / WhatsApp)
                  </a>
                  <a href="tel:+919455472453" className="hover:underline text-primary font-bold">
                    +91 94554 72453 (24/7 Emergency Line)
                  </a>
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-white uppercase tracking-wider text-xs">Email Queries</h4>
                <p className="text-gray-400 mt-1">
                  <a href="mailto:sribalajifireservices1974@gmail.com" className="hover:underline text-white">
                    sribalajifireservices1974@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <Clock className="w-5 h-5 text-primary shrink-0" />
              <div>
                <h4 className="font-bold text-white uppercase tracking-wider text-xs">Office Hours</h4>
                <p className="text-gray-400 mt-1">Mon - Sat: 9:00 AM - 7:00 PM</p>
                <span className="text-[10px] text-accent font-semibold block mt-1">
                  * 24/7 Emergency Support Available On Hotline
                </span>
              </div>
            </div>
          </div>

          {/* Mock Map Container */}
          <div className="bg-charcoal-900 border border-charcoal-800 rounded-xl p-4 space-y-3 relative overflow-hidden">
            <h4 className="font-heading text-xs font-bold text-white uppercase tracking-wider">
              Varanasi Location Pin Map
            </h4>
            {/* Simulated map graphic */}
            <div className="h-44 bg-charcoal-950 rounded-lg flex flex-col items-center justify-center border border-charcoal-850 p-4 text-center space-y-2 relative">
              <MapPin className="w-8 h-8 text-primary fill-primary/10 animate-bounce" />
              <p className="text-[11px] text-white font-semibold">Sigra Crossing, Varanasi</p>
              <p className="text-[9px] text-gray-500 max-w-xs leading-relaxed">
                Centralized base location ensuring immediate dispatch connectivity to Lanka, BHU, Sigra, Cantt, and bypass highways.
              </p>
            </div>
          </div>

        </div>

        {/* Right Side: Contact Form */}
        <div className="lg:col-span-7 bg-charcoal-900 border border-charcoal-800 rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl font-bold text-white tracking-tight">
              Send Us a Message
            </h2>
            <p className="text-xs text-gray-400">
              Submit your inquiry and our safety coordinator will respond within 2-4 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            {/* Status Messages */}
            {status === "success" && (
              <div className="p-4 bg-emerald-950/50 border border-emerald-500/20 text-emerald-400 rounded-lg flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block uppercase tracking-wider text-[10px]">Message Sent Successfully</span>
                  <p className="text-[10px] mt-0.5 text-gray-400">
                    Thank you. We have received your query and will contact you shortly.
                  </p>
                </div>
              </div>
            )}

            {status === "error" && (
              <div className="p-4 bg-red-950/50 border border-red-500/20 text-red-400 rounded-lg flex items-start gap-2.5">
                <ShieldAlert className="w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block uppercase tracking-wider text-[10px]">Validation Error</span>
                  <p className="text-[10px] mt-0.5 text-gray-400">
                    Please fill out all required fields and accept the consent checkbox.
                  </p>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Full Name */}
              <div className="space-y-1">
                <label className="text-gray-400 font-bold uppercase tracking-wider text-[9px]">
                  Full Name <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Rajesh Kumar"
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
                  placeholder="e.g. rajesh@example.com"
                  className="w-full bg-charcoal-950 border border-charcoal-800 rounded-lg px-3.5 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-primary text-xs"
                />
              </div>

              {/* Subject */}
              <div className="space-y-1">
                <label className="text-gray-400 font-bold uppercase tracking-wider text-[9px]">
                  Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Refilling Enquiry"
                  className="w-full bg-charcoal-950 border border-charcoal-800 rounded-lg px-3.5 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-primary text-xs"
                />
              </div>
            </div>

            {/* Message */}
            <div className="space-y-1">
              <label className="text-gray-400 font-bold uppercase tracking-wider text-[9px]">
                Message / Details <span className="text-primary">*</span>
              </label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Describe your fire safety requirements in detail..."
                className="w-full bg-charcoal-950 border border-charcoal-800 rounded-lg px-3.5 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-primary text-xs resize-none"
              />
            </div>

            {/* Consent checkbox */}
            <div className="flex items-start gap-2.5 pt-1">
              <input
                type="checkbox"
                id="consent-check"
                checked={formData.consent}
                onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                className="w-4 h-4 rounded border-charcoal-800 text-primary bg-charcoal-950 accent-primary mt-0.5 shrink-0"
              />
              <label htmlFor="consent-check" className="text-[10px] text-gray-500 leading-normal select-none">
                I agree to share my coordinates and allow Shri Balaji Fire Security Services to contact me regarding fire safety solutions.
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white py-3 rounded-lg font-bold text-xs uppercase tracking-wider transition-colors shadow-lg disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
              <span>{status === "submitting" ? "Sending Message..." : "Send Message"}</span>
            </button>
          </form>

          {/* Quick WhatsApp API click support */}
          <div className="pt-4 border-t border-charcoal-800 text-center">
            <a
              href="https://wa.me/917007447595?text=Hello%20Shri%20Balaji%20Fire%20Services,%20I%20would%20like%20to%20request%20information%20or%20a%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-[#25D366] hover:underline"
            >
              <MessageSquare className="w-4 h-4 fill-[#25D366] text-charcoal-900" />
              <span>Instant Support via WhatsApp Chat</span>
            </a>
          </div>
        </div>

      </section>

    </div>
  );
}
