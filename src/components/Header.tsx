"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Flame, Menu, X, ChevronDown, Phone, ShieldAlert, Award } from "lucide-react";
import { services } from "@/data/services";
import { industries } from "@/data/industries";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesExpanded, setIsServicesExpanded] = useState(false);
  const [isIndustriesExpanded, setIsIndustriesExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Scroll detection to add blur/background color transition to header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu drawer on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesExpanded(false);
    setIsIndustriesExpanded(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Gallery", path: "/gallery" },
    { name: "Blog", path: "/blog" },
    { name: "FAQs", path: "/faqs" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-charcoal-950/90 backdrop-blur-md border-b border-charcoal-800 shadow-lg py-2"
            : "bg-transparent border-b border-transparent py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-x-8">
            {/* Logo Section */}
            <Link href="/" className="flex items-center group shrink-0 pr-4">
              <img
                src="/images/logo.jpg"
                alt="Shri Balaji Fire Security Services Logo"
                className="h-10 sm:h-12 w-auto object-contain bg-white rounded-lg p-0.5 border border-charcoal-700 hover:scale-102 transition-all"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-300">
              {/* Home */}
              <Link
                href="/"
                className={`hover:text-primary transition-colors py-2 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-primary after:transform after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300 ${
                  pathname === "/" ? "text-primary font-semibold after:scale-x-100" : ""
                }`}
              >
                Home
              </Link>
              
              {/* About */}
              <Link
                href="/about"
                className={`hover:text-primary transition-colors py-2 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-primary after:transform after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300 ${
                  pathname === "/about" ? "text-primary font-semibold after:scale-x-100" : ""
                }`}
              >
                About
              </Link>

              {/* Services Link */}
              <Link
                href="/services"
                className={`hover:text-primary transition-colors py-2 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-primary after:transform after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300 ${
                  pathname.startsWith("/services") ? "text-primary font-semibold after:scale-x-100" : ""
                }`}
              >
                Services
              </Link>

              {/* Industries Link */}
              <Link
                href="/industries"
                className={`hover:text-primary transition-colors py-2 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-primary after:transform after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300 ${
                  pathname.startsWith("/industries") ? "text-primary font-semibold after:scale-x-100" : ""
                }`}
              >
                Industries
              </Link>

              {/* Static Links */}
              <Link
                href="/projects"
                className={`hover:text-primary transition-colors py-2 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-primary after:transform after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300 ${
                  pathname === "/projects" ? "text-primary font-semibold after:scale-x-100" : ""
                }`}
              >
                Projects
              </Link>
              <Link
                href="/gallery"
                className={`hover:text-primary transition-colors py-2 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-primary after:transform after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300 ${
                  pathname === "/gallery" ? "text-primary font-semibold after:scale-x-100" : ""
                }`}
              >
                Gallery
              </Link>
              <Link
                href="/blog"
                className={`hover:text-primary transition-colors py-2 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-primary after:transform after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300 ${
                  pathname === "/blog" ? "text-primary font-semibold after:scale-x-100" : ""
                }`}
              >
                Blog
              </Link>
              <Link
                href="/faqs"
                className={`hover:text-primary transition-colors py-2 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-primary after:transform after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300 ${
                  pathname === "/faqs" ? "text-primary font-semibold after:scale-x-100" : ""
                }`}
              >
                FAQs
              </Link>
              <Link
                href="/contact"
                className={`hover:text-primary transition-colors py-2 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-primary after:transform after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300 ${
                  pathname === "/contact" ? "text-primary font-semibold after:scale-x-100" : ""
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Header Right Action Area */}
            <div className="flex items-center gap-3">


              {/* Quote CTA Button */}
              <Link
                href="/request-quote"
                className="bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-lg font-semibold text-xs transition-colors shadow-lg shadow-primary/20"
              >
                Request Quote
              </Link>

              {/* Mobile Menu Button - Hamburger */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg bg-charcoal-800 text-gray-300 hover:text-white"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Navigation Drawer Panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-charcoal-900 border-l border-charcoal-800 shadow-2xl z-50 transform transition-transform duration-300 lg:hidden flex flex-col ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="p-4 border-b border-charcoal-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-primary fill-primary" />
            <span className="font-heading text-sm font-bold text-white tracking-tight">
              SHRI BALAJI SAFETY
            </span>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 rounded-lg bg-charcoal-800 text-gray-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Drawer Links Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <nav className="flex flex-col gap-2">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`p-3 rounded-lg hover:bg-charcoal-800 text-sm font-medium transition-colors ${
                  pathname === link.path ? "bg-primary/10 text-primary" : "text-gray-300"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Services Accordion */}
            <div className="border border-charcoal-850 rounded-lg overflow-hidden">
              <button
                onClick={() => setIsServicesExpanded(!isServicesExpanded)}
                className="w-full flex items-center justify-between p-3 bg-charcoal-850 text-sm font-medium text-gray-300"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-250 ${
                    isServicesExpanded ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`bg-charcoal-950 flex flex-col text-xs transition-all duration-300 ${
                  isServicesExpanded ? "max-h-[350px] overflow-y-auto p-2" : "max-h-0 overflow-hidden"
                }`}
              >
                <Link
                  href="/services"
                  className="p-2 font-bold text-accent border-b border-charcoal-850 mb-1"
                >
                  All Services Hub &rarr;
                </Link>
                {services.map((svc) => (
                  <Link
                    key={svc.slug}
                    href={`/services/${svc.slug}`}
                    className="p-2 text-gray-400 hover:text-white rounded hover:bg-charcoal-850 transition-colors"
                  >
                    {svc.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Industries Accordion */}
            <div className="border border-charcoal-850 rounded-lg overflow-hidden">
              <button
                onClick={() => setIsIndustriesExpanded(!isIndustriesExpanded)}
                className="w-full flex items-center justify-between p-3 bg-charcoal-850 text-sm font-medium text-gray-300"
              >
                <span>Industries</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-250 ${
                    isIndustriesExpanded ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`bg-charcoal-950 flex flex-col text-xs transition-all duration-300 ${
                  isIndustriesExpanded ? "max-h-[350px] overflow-y-auto p-2" : "max-h-0 overflow-hidden"
                }`}
              >
                <Link
                  href="/industries"
                  className="p-2 font-bold text-accent border-b border-charcoal-850 mb-1"
                >
                  All Industries Hub &rarr;
                </Link>
                {industries.map((ind) => (
                  <Link
                    key={ind.slug}
                    href={`/industries/${ind.slug}`}
                    className="p-2 text-gray-400 hover:text-white rounded hover:bg-charcoal-850 transition-colors"
                  >
                    {ind.title}
                  </Link>
                ))}
              </div>
            </div>

            {navLinks.slice(2).map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`p-3 rounded-lg hover:bg-charcoal-800 text-sm font-medium transition-colors ${
                  pathname === link.path ? "bg-primary/10 text-primary" : "text-gray-300"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Call & Compliance info in Mobile Menu */}
          <div className="pt-4 border-t border-charcoal-800 space-y-4">
            <div className="flex items-center gap-3 text-xs text-gray-400">
              <ShieldAlert className="w-5 h-5 text-primary" />
              <span>Certified Fire Safety Compliant Systems (IS / NBC Codes)</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-gray-400">
              <Award className="w-5 h-5 text-accent" />
              <span>ISO 9001:2015 & MSME Registered Varanasi Vendor</span>
            </div>
            
            <a
              href="tel:+917007447595"
              className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary-hover py-3 rounded-lg text-white font-bold text-sm transition-colors"
            >
              <Phone className="w-4 h-4 fill-white" />
              <span>Emergency 24/7 Call</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
