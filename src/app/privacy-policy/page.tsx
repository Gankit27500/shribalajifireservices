import React from "react";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-charcoal-950 text-gray-300 py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8">
      
      <div>
        <Link href="/" className="inline-flex items-center gap-1.5 text-xs text-primary font-bold hover:underline mb-4">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>
        
        <h1 className="text-3xl font-extrabold text-white tracking-tight border-b border-charcoal-800 pb-4">
          Privacy Policy
        </h1>
        <p className="text-[10px] text-gray-500 mt-2">Last Updated: July 2026</p>
      </div>

      <div className="space-y-6 text-xs sm:text-sm leading-relaxed">
        <p>
          At Shri Balaji Fire Security Services, accessible from our website, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by us and how we use it.
        </p>

        <h2 className="text-lg font-bold text-white uppercase tracking-wider pt-2">
          1. Information We Collect
        </h2>
        <p>
          If you contact us directly or submit our quote request forms, we may receive additional information about you such as your name, email address, phone number, company name, building area parameters, and the contents of the message you send us.
        </p>

        <h2 className="text-lg font-bold text-white uppercase tracking-wider pt-2">
          2. How We Use Your Information
        </h2>
        <p>
          We use the information we collect in various ways, including to:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Provide, operate, and maintain our website.</li>
          <li>Understand and analyze how you use our website to improve performance.</li>
          <li>Develop new safety services, features, and site parameters.</li>
          <li>Communicate with you to schedule site inspections, share quotes, or coordinate refilling.</li>
          <li>Send you service-related notifications and updates.</li>
        </ul>

        <h2 className="text-lg font-bold text-white uppercase tracking-wider pt-2">
          3. Security
        </h2>
        <p>
          We value your trust in providing us your Personal Information, thus we strive to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable.
        </p>

        <h2 className="text-lg font-bold text-white uppercase tracking-wider pt-2">
          4. Contact Us
        </h2>
        <p>
          If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at **sribalajifireservices1974@gmail.com**.
        </p>
      </div>

    </div>
  );
}
