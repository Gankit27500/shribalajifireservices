"use client";

import React from "react";
import Link from "next/link";
import { Phone, MessageSquare, FileSpreadsheet } from "lucide-react";

export default function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-charcoal-900 border-t border-charcoal-800 md:hidden shadow-[0_-8px_24px_rgba(0,0,0,0.4)] flex h-[60px] items-stretch">
      {/* Call CTA */}
      <a
        href="tel:+917007447595"
        className="flex-1 flex flex-col items-center justify-center gap-1 border-r border-charcoal-800 text-[#F3F4F6] active:bg-charcoal-800 transition-colors"
      >
        <Phone className="w-5 h-5 text-primary fill-primary animate-pulse" />
        <span className="text-[10px] font-semibold tracking-wider uppercase">कॉल करें (Call)</span>
      </a>

      {/* WhatsApp CTA */}
      <a
        href="https://wa.me/917007447595?text=Hello%20Shri%20Balaji%20Fire%20Services,%20I'm%20interested%20in%20a%20fire%2520safety%2520consultation%20for%20my%20premises."
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center gap-1 border-r border-charcoal-800 text-[#25D366] active:bg-charcoal-800 transition-colors"
      >
        <MessageSquare className="w-5 h-5 fill-[#25D366] text-charcoal-900" />
        <span className="text-[10px] font-semibold tracking-wider uppercase text-gray-300">व्हाट्सएप (Chat)</span>
      </a>

      {/* Get Quote Link */}
      <Link
        href="/request-quote"
        className="flex-1 flex flex-col items-center justify-center gap-1 bg-primary text-white active:bg-primary-hover transition-colors"
      >
        <FileSpreadsheet className="w-5 h-5 text-white" />
        <span className="text-[10px] font-bold tracking-wider uppercase">रेट जानें (Quote)</span>
      </Link>
    </div>
  );
}
