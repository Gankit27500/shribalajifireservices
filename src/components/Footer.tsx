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
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a href="https://www.facebook.com/share/1EPXX39zPy/" target="_blank" rel="noopener noreferrer" className="p-2 rounded bg-charcoal-800 hover:bg-primary hover:text-white transition-colors flex items-center justify-center" aria-label="Facebook">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/shribalajifiresecurityservices?igsh=cjkybzBrczB3aXVt" target="_blank" rel="noopener noreferrer" className="p-2 rounded bg-charcoal-800 hover:bg-primary hover:text-white transition-colors flex items-center justify-center" aria-label="Instagram">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a href="https://wa.me/917007447595?text=Hello%20Shri%20Balaji%20Fire%20Services" target="_blank" rel="noopener noreferrer" className="p-2 rounded bg-charcoal-800 hover:bg-primary hover:text-white transition-colors flex items-center justify-center" aria-label="WhatsApp">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.725 1.45 5.556 0 10.076-4.522 10.079-10.082.001-2.695-1.047-5.227-2.951-7.133C16.58 1.484 14.05 1.435 11.353 1.435c-5.557 0-10.078 4.522-10.082 10.082-.001 2.038.535 4.025 1.55 5.764l-.99 3.613 3.705-.972c1.687.92 3.4 1.397 5.021 1.397zm11.518-7.74c-.312-.156-1.848-.912-2.134-1.017-.286-.104-.494-.156-.702.156-.208.312-.806 1.017-.988 1.225-.182.208-.364.234-.676.078-1.228-.614-2.107-1.08-2.936-2.502-.22-.38.22-.352.628-1.162.068-.136.034-.26-.017-.364-.052-.104-.494-1.192-.676-1.638-.18-.435-.37-.375-.502-.382-.13-.006-.28-.008-.43-.008-.15 0-.396.056-.604.286-.208.23-1.892 1.85-1.892 4.51s1.944 5.228 2.214 5.592c.27.364 3.774 5.765 9.143 8.082 1.278.552 2.278.88 3.057 1.127 1.357.432 2.593.371 3.57.225 1.088-.163 2.134-.873 2.432-1.716.299-.844.299-1.562.208-1.716-.091-.156-.338-.26-.65-.416z" />
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
            <a href="tel:+917007447595" className="text-gray-300 hover:text-white">
              +91 70074 47595 (Emergency)
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
            Certified Vendor: ISO 9001:2015 | MSME Registered | UP Fire Department Approved Safety Partner
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
