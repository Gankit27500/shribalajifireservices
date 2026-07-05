"use client";

import React, { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogs } from "@/data/blogs";
import {
  Calendar,
  Clock,
  ArrowLeft,
  ChevronRight,
  ShieldCheck,
  Tag,
  ArrowRight,
  Award
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function BlogPostDetailPage({ params }: PageProps) {
  // Unwrap the params promise using React.use()
  const resolvedParams = use(params);
  const { slug } = resolvedParams;

  const post = blogs.find((b) => b.slug === slug);

  if (!post) {
    notFound();
  }

  // Related posts (excluding current one)
  const relatedPosts = blogs
    .filter((b) => b.slug !== slug)
    .slice(0, 3);

  return (
    <div className="flex flex-col w-full min-h-screen bg-charcoal-950 text-gray-300">
      
      {/* 1. Breadcrumbs */}
      <div className="bg-charcoal-900 border-b border-charcoal-800 py-3 px-4 sm:px-6 lg:px-8 text-xs">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-gray-500 font-medium">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gray-300 truncate">{post.title}</span>
        </div>
      </div>

      {/* 2. Hero Section */}
      <section className="bg-charcoal-900 border-b border-charcoal-800 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto space-y-4 z-10 text-center lg:text-left">
          
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs text-primary font-bold hover:underline mb-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Blog Articles</span>
          </Link>

          <span className="text-xs bg-accent/10 border border-accent/20 text-accent px-3 py-1 rounded-full font-bold uppercase tracking-wider inline-block">
            {post.category}
          </span>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-gray-400">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4 text-primary shrink-0" />
              <span>Published: **{post.publishDate}**</span>
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-primary shrink-0" />
              <span>Read Time: **{post.readTime}**</span>
            </span>
          </div>

        </div>
      </section>

      {/* 3. Article Content Area */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Side: Article Body */}
        <div className="lg:col-span-8 space-y-8">
          
          {post.content ? (
            /* Render actual markdown content */
            <div className="prose prose-invert max-w-none text-sm text-gray-300 leading-relaxed space-y-6">
              {post.content.split("\n\n").map((block, i) => {
                if (block.trim().startsWith("##")) {
                  return (
                    <h2 key={i} className="text-lg sm:text-xl font-bold text-white tracking-tight pt-4 border-l-4 border-primary pl-3">
                      {block.replace("##", "").trim()}
                    </h2>
                  );
                }
                
                // Helper to parse links [Text](URL) and Bold **Text** inline
                const parseInlineMarkdown = (text: string) => {
                  const regex = /(\[.*?\]\(.*?\))|(\*\*.*?\*\*)/g;
                  const parts = text.split(regex);
                  return parts.map((part, index) => {
                    if (!part) return null;
                    if (part.startsWith("[") && part.endsWith(")")) {
                      const match = part.match(/\[(.*?)\]\((.*?)\)/);
                      if (match) {
                        const linkText = match[1];
                        const linkUrl = match[2];

                        // If the text is the URL itself (like shribalajifireservices.com), render it directly as a link
                        if (linkText.toLowerCase().includes(".com") || linkText.toLowerCase().startsWith("http")) {
                          return (
                            <a
                              key={index}
                              href={linkUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:underline font-semibold"
                            >
                              {linkText}
                            </a>
                          );
                        }

                        // Otherwise, render the text as normal text, followed by the URL (.com) in parentheses as a clickable link
                        return (
                          <React.Fragment key={index}>
                            <span>{linkText}</span>{" "}
                            <a
                              href={linkUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:underline font-semibold"
                            >
                              ({linkUrl.replace("https://", "").replace("http://", "")})
                            </a>
                          </React.Fragment>
                        );
                      }
                    }
                    if (part.startsWith("**") && part.endsWith("**")) {
                      return (
                        <strong key={index} className="font-bold text-white">
                          {part.slice(2, -2)}
                        </strong>
                      );
                    }
                    return part;
                  });
                };

                if (block.trim().startsWith("*")) {
                  return (
                    <ul key={i} className="list-disc pl-5 space-y-2 text-xs">
                      {block.split("\n").map((li, idx) => (
                        <li key={idx}>
                          {parseInlineMarkdown(li.replace("*", "").trim())}
                        </li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={i} className="whitespace-pre-line">
                    {parseInlineMarkdown(block.trim())}
                  </p>
                );
              })}
            </div>
          ) : (
            /* Render generated outline structure for other 26 blogs */
            <div className="space-y-6">
              <div className="p-4 bg-charcoal-900 border border-charcoal-850 rounded-xl space-y-2">
                <span className="text-xs font-bold text-accent uppercase tracking-wider block">Overview Summary</span>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {post.metaDesc} This safety guide details standard corporate compliance protocols to protect occupants and keep equipment functional.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-lg font-bold text-white tracking-tight border-l-4 border-primary pl-3">
                  Key Topics Covered
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {post.h2s.map((h2, idx) => (
                    <div key={idx} className="flex gap-2.5 items-start p-3 bg-charcoal-900/50 border border-charcoal-850 rounded-lg">
                      <ShieldCheck className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-xs text-gray-300 font-semibold">{h2}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-lg font-bold text-white tracking-tight border-l-4 border-primary pl-3">
                  Recommended Systems & References
                </h2>
                <p className="text-xs text-gray-400">
                  This article highlights safety features described under the following links:
                </p>
                <div className="flex flex-wrap gap-2">
                  {post.internalLinks.map((linkText, idx) => (
                    <span
                      key={idx}
                      className="bg-charcoal-900 border border-charcoal-850 px-3 py-1.5 rounded-lg text-xs font-semibold text-white uppercase tracking-wider"
                    >
                      {linkText}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Right Side: Sidebar */}
        <div className="lg:col-span-4 space-y-8">
          
          {/* SEO Metadata Card */}
          <div className="bg-charcoal-900 border border-charcoal-800 rounded-xl p-5 space-y-4">
            <h3 className="font-heading text-sm font-bold text-white uppercase tracking-wider border-b border-charcoal-800 pb-2">
              SEO Information
            </h3>
            
            <div className="space-y-3 text-xs">
              <div className="flex gap-2 items-center">
                <Tag className="w-4 h-4 text-primary shrink-0" />
                <span className="text-gray-500">Keywords:</span>
              </div>
              <p className="text-[10px] text-accent font-semibold">{post.keywords}</p>
              
              <div>
                <span className="text-gray-500 block">Category:</span>
                <span className="font-semibold text-white">{post.category}</span>
              </div>
            </div>
          </div>

          {/* Local Varanasi info */}
          <div className="bg-charcoal-950 border border-charcoal-850 rounded-xl p-5 space-y-3">
            <div className="flex items-center gap-1.5 text-xs text-accent font-bold uppercase tracking-wider">
              <Award className="w-4 h-4 text-primary" />
              <span>Varanasi Safety Advisory</span>
            </div>
            <p className="text-[11px] text-gray-400 leading-relaxed">
              Have questions about local fire department checks in Lanka, Sigra, or Cantt? Contact our office for free telephone advice.
            </p>
          </div>

        </div>

      </section>

      {/* 4. Related Articles */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-8 border-t border-charcoal-850">
        <h3 className="font-heading text-lg font-bold text-white tracking-tight border-l-4 border-primary pl-3">
          Related Articles & Guides
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedPosts.map((rel) => (
            <div key={rel.slug} className="glass-card rounded-xl p-5 border border-charcoal-850 flex flex-col justify-between group">
              <div className="space-y-3">
                <span className="text-[9px] bg-accent/5 border border-accent/20 text-accent px-2 py-0.5 rounded-full font-bold uppercase tracking-wider inline-block">
                  {rel.category}
                </span>
                <h4 className="font-heading text-sm font-bold text-white group-hover:text-primary transition-colors">
                  {rel.title}
                </h4>
                <p className="text-[11px] text-gray-400 line-clamp-2 leading-relaxed">
                  {rel.metaDesc}
                </p>
              </div>
              <div className="pt-4 border-t border-charcoal-850/50 mt-4 flex items-center justify-between">
                <span className="text-[10px] text-gray-500 font-semibold">{rel.publishDate}</span>
                <Link
                  href={`/blog/${rel.slug}`}
                  className="text-[11px] font-bold text-accent hover:text-primary transition-colors inline-flex items-center gap-1"
                >
                  <span>Read Post</span>
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
