import React from "react";
import Link from "next/link";
import { Flame, MapPin, Phone, Mail, Clock, ShieldCheck, MessageSquare } from "lucide-react";
import { services } from "@/data/services";
import { industries } from "@/data/industries";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-900 border-t border-charcoal-800 text-gray-400 text-sm mt-auto">
      {/* Top Footer Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Column 1: Company Profile */}
        <div className="space-y-4">
          <Link href="/" className="flex items-center group">
            <img
              src="/images/logo.jpg"
              alt="Shri Balaji Fire Security Services Logo"
              className="h-10 w-auto object-contain bg-white rounded-lg p-0.5 border border-charcoal-800 hover:scale-102 transition-all"
            />
          </Link>
          <p className="text-xs text-gray-400 leading-relaxed">
            Varanasi's premier B2B fire protection contractor. Delivering certified engineering, installation, refilling, and AMC services across Uttar Pradesh. Your compliance is our safety guarantee.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <a href="#" className="p-2 rounded bg-charcoal-800 hover:bg-primary hover:text-white transition-colors flex items-center justify-center" aria-label="Facebook">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
            <a href="#" className="p-2 rounded bg-charcoal-800 hover:bg-primary hover:text-white transition-colors flex items-center justify-center" aria-label="Twitter">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a href="#" className="p-2 rounded bg-charcoal-800 hover:bg-primary hover:text-white transition-colors flex items-center justify-center" aria-label="LinkedIn">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links (Services) */}
        <div>
          <h3 className="font-heading text-xs font-bold tracking-wider text-white uppercase mb-4 border-l-2 border-primary pl-2">
            Top Services
          </h3>
          <ul className="space-y-2 text-xs">
            {services.slice(0, 6).map((svc) => (
              <li key={svc.slug}>
                <Link
                  href={`/services/${svc.slug}`}
                  className="hover:text-primary transition-colors hover:underline"
                >
                  {svc.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Quick Links (Industries) */}
        <div>
          <h3 className="font-heading text-xs font-bold tracking-wider text-white uppercase mb-4 border-l-2 border-primary pl-2">
            Industries We Serve
          </h3>
          <ul className="space-y-2 text-xs">
            {industries.slice(0, 6).map((ind) => (
              <li key={ind.slug}>
                <Link
                  href={`/industries/${ind.slug}`}
                  className="hover:text-primary transition-colors hover:underline"
                >
                  {ind.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact Details */}
        <div className="space-y-3 text-xs">
          <h3 className="font-heading text-xs font-bold tracking-wider text-white uppercase mb-4 border-l-2 border-primary pl-2">
            Get in Touch
          </h3>
          <div className="flex items-start gap-2.5">
            <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            <span className="text-gray-300">
              141, Vindhya Vasini Nagar Colony, Orderly Bazar, Varanasi — 221002
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <Phone className="w-4 h-4 text-primary shrink-0" />
            <a href="tel:+917007447595" className="text-gray-300 hover:text-white">
              +91 70074 47595
            </a>
          </div>
          <div className="flex items-center gap-2.5">
            <Phone className="w-4 h-4 text-primary shrink-0 animate-pulse" />
            <a href="tel:+919455472453" className="text-gray-300 hover:text-white">
              +91 94554 72453 (Emergency)
            </a>
          </div>
          <div className="flex items-center gap-2.5">
            <Mail className="w-4 h-4 text-primary shrink-0" />
            <a href="mailto:sribalajifireservices1974@gmail.com" className="text-gray-300 hover:text-white">
              sribalajifireservices1974@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2.5">
            <Clock className="w-4 h-4 text-primary shrink-0" />
            <span className="text-gray-300">Mon - Sat: 9:00 AM - 7:00 PM</span>
          </div>
          <div className="flex items-center gap-2.5 text-accent font-semibold">
            <ShieldCheck className="w-4 h-4 shrink-0" />
            <span>Emergency Support: 24/7 Available</span>
          </div>
        </div>
      </div>

      {/* Certifications and compliance banner strip */}
      <div className="bg-charcoal-950 border-t border-charcoal-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="text-xs text-gray-500">
            Certified Vendor: ISO 9001:2015 | MSME Registered | UP Fire Department Approved NOC Partner
          </div>
          {/* Certification badges logos mock */}
          <div className="flex items-center justify-center gap-6 opacity-40">
            <span className="text-[10px] font-bold tracking-widest text-white border border-white px-2 py-0.5 rounded uppercase">
              ISO 9001
            </span>
            <span className="text-[10px] font-bold tracking-widest text-white border border-white px-2 py-0.5 rounded uppercase">
              ISI MARK
            </span>
            <span className="text-[10px] font-bold tracking-widest text-white border border-white px-2 py-0.5 rounded uppercase">
              CE
            </span>
            <span className="text-[10px] font-bold tracking-widest text-white border border-white px-2 py-0.5 rounded uppercase">
              MSME
            </span>
          </div>
        </div>
      </div>

      {/* Footer Bottom Strip */}
      <div className="bg-charcoal-950 border-t border-charcoal-850 py-4 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-gray-500 text-center">
          <div>
            &copy; {currentYear} Shri Balaji Fire Security Services. All Rights Reserved.
          </div>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
