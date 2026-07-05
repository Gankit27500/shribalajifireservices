"use client";

import React, { useState } from "react";
import Link from "next/link";
import { blogs } from "@/data/blogs";
import { Search, Calendar, Clock, ChevronRight, ArrowRight, FileText } from "lucide-react";

export default function BlogHubPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["All", "Safety Guides", "Industrial & Commercial", "Local Compliance", "Equipment Tips"];

  const filteredBlogs = blogs.filter((blog) => {
    const matchesCategory = selectedCategory === "All" || blog.category === selectedCategory;
    const matchesSearch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.keywords.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.metaDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col w-full min-h-screen bg-charcoal-950 text-gray-300">
      
      {/* 1. Page Header */}
      <section className="bg-charcoal-900 border-b border-charcoal-800 py-12 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl" />
        <div className="relative max-w-4xl mx-auto space-y-3 z-10">
          <span className="text-xs font-bold text-primary uppercase tracking-widest">Resources & Articles</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Our Fire Safety Blog
          </h1>
          <div className="h-1 w-20 bg-primary mx-auto rounded" />
          <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto leading-relaxed">
            Read professional insights, fire safety checklists, local compliance guides, and guidelines on Varanasi fire safety compliance.
          </p>
        </div>
      </section>

      {/* 2. Filters, Search & List */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-colors border ${
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
          <div className="relative max-w-xs w-full">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-charcoal-900 border border-charcoal-800 rounded-lg pl-9 pr-4 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
            />
            <Search className="w-4 h-4 text-gray-500 absolute left-3 top-2.5" />
          </div>
        </div>

        {/* Counter */}
        <div className="text-xs text-gray-500 font-semibold uppercase tracking-wider">
          Showing {filteredBlogs.length} of 30 Blog Ideas & Guides
        </div>

        {/* Grid List */}
        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBlogs.map((blog) => (
              <div
                key={blog.id}
                className="glass-card rounded-xl border border-charcoal-800 p-6 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-[9px] font-bold uppercase tracking-wider text-gray-500">
                    <span className="text-accent bg-accent/5 border border-accent/20 px-2 py-0.5 rounded-full">
                      {blog.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-primary" />
                      <span>{blog.readTime}</span>
                    </span>
                  </div>

                  <h3 className="font-heading text-sm sm:text-base font-bold text-white group-hover:text-primary transition-colors duration-200">
                    {blog.title}
                  </h3>

                  <p className="text-xs text-gray-400 leading-relaxed line-clamp-3">
                    {blog.metaDesc}
                  </p>
                </div>

                {/* Footer link to reader (only high impact blogs contain full articles) */}
                <div className="pt-6 border-t border-charcoal-850 mt-4 flex items-center justify-between">
                  <span className="text-[10px] text-gray-500 font-semibold flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{blog.publishDate}</span>
                  </span>
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="text-[11px] font-bold text-white hover:text-primary transition-colors inline-flex items-center gap-1"
                  >
                    <span>Read Article</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-all" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-charcoal-900 rounded-2xl border border-charcoal-850">
            <p className="text-sm text-gray-500">No blog posts found matching your search.</p>
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

    </div>
  );
}
