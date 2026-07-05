"use client";

import React, { useState } from "react";
import { faqs } from "@/data/faqs";
import { Search, ChevronDown, HelpCircle, Phone, FileSpreadsheet } from "lucide-react";
import Link from "next/link";

export default function FAQsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const categories = [
    "All",
    "General",
    "Fire Extinguishers",
    "Systems",
    "AMC & Maintenance",
    "Pricing & Process",
    "Compliance & Safety",
    "Support & Contact"
  ];

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id: number) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-charcoal-950 text-gray-300">
      
      {/* 1. Page Header */}
      <section className="bg-charcoal-900 border-b border-charcoal-800 py-12 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl" />
        <div className="relative max-w-4xl mx-auto space-y-3 z-10">
          <span className="text-xs font-bold text-primary uppercase tracking-widest">Self Service Help</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h1>
          <div className="h-1 w-20 bg-primary mx-auto rounded" />
          <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto leading-relaxed">
            Search our comprehensive database of 50 compliance, refilling, hydrant pricing, and safety certification questions.
          </p>
        </div>
      </section>

      {/* 2. Search & Category Controls */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full space-y-6">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-charcoal-850 w-full md:w-auto hide-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setExpandedFaq(null);
                }}
                className={`px-3 py-1.5 rounded-lg text-[10px] font-bold whitespace-nowrap transition-colors border ${
                  selectedCategory === cat
                    ? "bg-primary border-primary text-white"
                    : "bg-charcoal-900 border-charcoal-800 text-gray-400 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:max-w-xs">
            <input
              type="text"
              placeholder="Search 50 FAQs..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setExpandedFaq(null);
              }}
              className="w-full bg-charcoal-900 border border-charcoal-800 rounded-lg pl-9 pr-4 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
            />
            <Search className="w-4 h-4 text-gray-500 absolute left-3 top-2.5" />
          </div>
        </div>

        {/* Counter */}
        <div className="text-xs text-gray-500 font-semibold uppercase tracking-wider">
          Found {filteredFaqs.length} of 50 FAQs
        </div>

        {/* FAQ Accordion List */}
        {filteredFaqs.length > 0 ? (
          <div className="space-y-3">
            {filteredFaqs.map((faq) => (
              <div
                key={faq.id}
                className="border border-charcoal-800 rounded-xl bg-charcoal-900 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between p-4 text-left font-semibold text-xs sm:text-sm text-white hover:bg-charcoal-850/40 transition-colors"
                >
                  <span className="flex items-center gap-2.5">
                    <HelpCircle className="w-4.5 h-4.5 text-primary shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                      expandedFaq === faq.id ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`bg-charcoal-950 text-[11px] sm:text-xs text-gray-400 leading-relaxed transition-all duration-300 ${
                    expandedFaq === faq.id ? "p-4 max-h-[350px] border-t border-charcoal-800" : "max-h-0 overflow-hidden"
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-charcoal-900 rounded-2xl border border-charcoal-850">
            <p className="text-sm text-gray-500">No questions match your query.</p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="mt-4 text-xs font-bold text-primary hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}

      </section>

      {/* 3. Emergency Support Teaser Banner */}
      <section className="bg-gradient-to-br from-primary via-primary-hover to-charcoal-950 text-white py-12 px-4 sm:px-6 lg:px-8 text-center mt-12">
        <div className="relative max-w-4xl mx-auto space-y-6 z-10">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
            STILL HAVE UNANSWERED QUESTIONS?
          </h2>
          <p className="text-xs text-gray-200 max-w-xl mx-auto">
            Our safety consulting managers are standing by to clarify any fire safety codes or renewal questions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/request-quote"
              className="w-full sm:w-auto bg-white text-primary hover:bg-gray-100 px-6 py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider transition-colors shadow-lg"
            >
              Request Quote Callback
            </Link>
            <a
              href="tel:+917007447595"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-charcoal-950/80 hover:bg-charcoal-950 px-6 py-2.5 rounded-lg text-white font-bold text-xs uppercase tracking-wider transition-colors border border-white/10"
            >
              <Phone className="w-4 h-4 text-primary fill-primary" />
              <span>Call +91 70074 47595</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
