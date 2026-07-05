import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import CustomCursor from "@/components/CustomCursor";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fire Safety Services in Varanasi | Shri Balaji Fire Security Services",
  description: "Varanasi's trusted fire safety partner. Supply, refilling, AMC, installation of fire extinguishers, alarms, sprinklers & suppression systems. 24/7 support.",
  keywords: "fire safety services Varanasi, fire protection company Varanasi, fire extinguisher refilling Sigra, fire alarm installation, fire safety consultant Varanasi, Shri Balaji Fire Security Services",
  metadataBase: new URL("https://shribalajifiresafety.com"), // placeholder domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Fire Safety Services in Varanasi | Shri Balaji Fire Security Services",
    description: "Varanasi's trusted fire safety partner. Supply, refilling, AMC, and installation of certified fire protection systems.",
    url: "/",
    siteName: "Shri Balaji Fire Security Services",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fire Safety & Protection Services in Varanasi",
    description: "Supply, installation, refilling, and AMC for fire safety systems in Varanasi and Purvanchal.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-charcoal-950 text-[#F3F4F6] font-sans selection:bg-primary selection:text-white">
        {/* Custom cursor overlay follower */}
        <CustomCursor />

        {/* Header navigation */}
        <Header />
        
        {/* Main application page content */}
        <main className="flex-grow flex flex-col pt-[72px] pb-[60px] md:pb-0">
          {children}
        </main>
        
        {/* Footer section */}
        <Footer />
        
        {/* Persistent bottom call/WhatsApp bar for mobile screens */}
        <MobileCTA />
      </body>
    </html>
  );
}
