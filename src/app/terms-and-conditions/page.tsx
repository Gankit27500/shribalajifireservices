import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsAndConditions() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-charcoal-950 text-gray-300 py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8">
      
      <div>
        <Link href="/" className="inline-flex items-center gap-1.5 text-xs text-primary font-bold hover:underline mb-4">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>
        
        <h1 className="text-3xl font-extrabold text-white tracking-tight border-b border-charcoal-800 pb-4">
          Terms & Conditions
        </h1>
        <p className="text-[10px] text-gray-500 mt-2">Last Updated: July 2026</p>
      </div>

      <div className="space-y-6 text-xs sm:text-sm leading-relaxed">
        <p>
          Welcome to Shri Balaji Fire Security Services! These terms and conditions outline the rules and regulations for the use of our services and website.
        </p>

        <h2 className="text-lg font-bold text-white uppercase tracking-wider pt-2">
          1. Terms of Service
        </h2>
        <p>
          By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use Shri Balaji Fire Security Services' website if you do not agree to all of the terms and conditions stated on this page.
        </p>

        <h2 className="text-lg font-bold text-white uppercase tracking-wider pt-2">
          2. Site Inspection & Quotations
        </h2>
        <p>
          All initial site inspections and safety quotes are provided as estimates. Final project execution, billing parameters, and payment terms will be defined separately in the official contract agreement signed between both parties before commencing work.
        </p>

        <h2 className="text-lg font-bold text-white uppercase tracking-wider pt-2">
          3. Compliance Responsibility
        </h2>
        <p>
          While we design and install systems strictly in compliance with National Building Code (NBC Part 4) and state regulations, obtaining final local fire department clearances remains a joint responsibility. Shri Balaji Fire Security Services is not liable for structural building deficiencies that prevent NOC approvals.
        </p>

        <h2 className="text-lg font-bold text-white uppercase tracking-wider pt-2">
          4. Contact Information
        </h2>
        <p>
          If you have any queries regarding any of our terms, please contact us at **sribalajifireservices1974@gmail.com**.
        </p>
      </div>

    </div>
  );
}
