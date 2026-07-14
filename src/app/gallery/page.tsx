"use client";

import React, { useState } from "react";
import { Flame, X, Video, Image as ImageIcon, MapPin, ZoomIn } from "lucide-react";

interface GalleryItem {
  id: number;
  title: string;
  category: "Installation" | "Hydrant" | "Alarm" | "Sprinkler" | "Suppression" | "AMC" | "Team" | "Videos" | "Equipment";
  desc: string;
  location: string;
  imageUrl: string;
  isVideo?: boolean;
}

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<string>("All");
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const tabs = ["All", "Equipment", "Installation", "Hydrant", "Alarm", "Sprinkler", "Suppression", "AMC", "Team", "Videos"];

  const items: GalleryItem[] = [
    { id: 1, title: "Fire Hydrant Pipeline Welding", category: "Hydrant", desc: "Heavy industrial steel piping line main installation.", location: "Jhansi Cement Plant", imageUrl: "/images/projects/ultratech-cement.jpg" },
    { id: 2, title: "Double Landing Valve Placement", category: "Installation", desc: "Installed hydrant connection layout.", location: "JHV Mall, Varanasi", imageUrl: "/images/projects/jhv-mall.jpg" },
    { id: 3, title: "Smoke Detector Loop Commissioning", category: "Alarm", desc: "Testing addressable alarm sensor cards.", location: "Taj Ganges, Varanasi", imageUrl: "/images/projects/taj-ganges.jpg" },
    { id: 4, title: "Wet Sprinkler Head Droppers", category: "Sprinkler", desc: "Flexible sprinkler pipes under false ceilings.", location: "JHV Mall Corridor", imageUrl: "/images/mall.png" },
    { id: 5, title: "FM-200 Gas Cylinder Manifold", category: "Suppression", desc: "Total flooding suppression bank for data center.", location: "IT Server Room, Varanasi", imageUrl: "/images/industrial.png" },
    { id: 6, title: "Quarterly Pump Inspection", category: "AMC", desc: "Checking diesel auto-starter panel functionality.", location: "Hopsital Pump Room", imageUrl: "/images/hero-bg.png" },
    { id: 7, title: "Varanasi Safety Service Engineers", category: "Team", desc: "Shri Balaji technical installation crew.", location: "Varanasi Office", imageUrl: "/images/hotel.png" },
    { id: 8, title: "Fire Hydrant Flow Discharge Demo", category: "Videos", desc: "Testing water post discharge pressure.", location: "JHV Mall Area", imageUrl: "/images/projects/jhv-mall.jpg", isVideo: true },
    { id: 9, title: "ABC Extinguisher Refilling Row", category: "AMC", desc: "Refilled dry chemical cylinders ready for dispatch.", location: "Refill Facility, Varanasi", imageUrl: "/images/industrial.png" },
    { id: 10, title: "Kitchen Chemical Agent Nozzle", category: "Suppression", desc: "Specialized hood suppression nozzle.", location: "Luxury Hotel Kitchen", imageUrl: "/images/projects/taj-ganges.jpg" },
    { id: 11, title: "Safety Evacuation Signs Layout", category: "Installation", desc: "Photoluminescent exit route indicators.", location: "Sunbeam School, Varanasi", imageUrl: "/images/projects/sunbeam-school.jpg" },
    { id: 12, title: "Beam Detector Alignment", category: "Alarm", desc: "Aligning laser beam smoke sensors.", location: "Industrial Warehouse", imageUrl: "/images/projects/sunbeam-school.jpg" },
    { id: 13, title: "Fire Extinguisher Ball", category: "Equipment", desc: "Auto-activating fire extinguisher ball for kitchens & electrical panels.", location: "Product Showcase", imageUrl: "/images/equipment/fire_extinguisher_ball.png" },
    { id: 14, title: "Gas Fire Suppression System", category: "Equipment", desc: "Clean agent fire suppression gas cylinders for server rooms.", location: "Product Showcase", imageUrl: "/images/equipment/fire_suppression.png" },
    { id: 15, title: "Fire Jockey Pump Set", category: "Equipment", desc: "Heavy-duty jockey pump to maintain grid pipeline pressure.", location: "Product Showcase", imageUrl: "/images/equipment/jockey_pump.png" },
    { id: 16, title: "Main Fire Pump Set", category: "Equipment", desc: "High-LPM main electric fire hydrant booster pump.", location: "Product Showcase", imageUrl: "/images/equipment/main_pump.png" },
    { id: 17, title: "RRL Hose Pipe Set", category: "Equipment", desc: "Reinforced rubber-lined (RRL) lay-flat fire hose with coupling.", location: "Product Showcase", imageUrl: "/images/equipment/rrl_hose_pipe.png" },
    { id: 18, title: "Automatic Sprinkler Head", category: "Equipment", desc: "Glass bulb automatic fire sprinkler head (68°C rating).", location: "Product Showcase", imageUrl: "/images/equipment/sprinkler.png" },
    { id: 19, title: "Two-Way Fire Draught Inlet", category: "Equipment", desc: "Standard 2-way breeching inlet connection for fire fighters.", location: "Product Showcase", imageUrl: "/images/equipment/two_way_inlet.png" },
    { id: 20, title: "Four-Way Fire Draught Inlet", category: "Equipment", desc: "Heavy-duty 4-way breeching inlet connection for external pumps.", location: "Product Showcase", imageUrl: "/images/equipment/four_way_inlet.png" },
    { id: 21, title: "Manual Call Point (MCP)", category: "Equipment", desc: "Break-glass manual fire alert trigger box.", location: "Product Showcase", imageUrl: "/images/equipment/manual_call_point.png" },
    { id: 22, title: "Fire Alarm Control Panel (FACP)", category: "Equipment", desc: "Addressable micro-controller fire alarm panel board.", location: "Product Showcase", imageUrl: "/images/equipment/facp_panel.png" },
    { id: 23, title: "Fire Hose Reel Drum Set", category: "Equipment", desc: "Wall-mounted swinging fire hose reel drum with rubber hose.", location: "Product Showcase", imageUrl: "/images/equipment/hose_reel.png" },
    { id: 24, title: "Response Indicator Alert", category: "Equipment", desc: "Visual LED indicator to detect activated ceiling detectors.", location: "Product Showcase", imageUrl: "/images/equipment/response_indicator.png" }
  ];

  const filteredItems = items.filter((item) => {
    return activeTab === "All" || item.category === activeTab;
  });

  return (
    <div className="flex flex-col w-full min-h-screen bg-charcoal-950 text-gray-300">
      
      {/* 1. Page Header */}
      <section className="bg-charcoal-900 border-b border-charcoal-800 py-12 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl" />
        <div className="relative max-w-4xl mx-auto space-y-3 z-10">
          <span className="text-xs font-bold text-primary uppercase tracking-widest">Visual Portfolio</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Our Work Gallery
          </h1>
          <div className="h-1 w-20 bg-primary mx-auto rounded" />
          <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto leading-relaxed">
            Real photos and demos of our fire alarm loops, sprinkler connections, hydrant networks, and refilling center operations.
          </p>
        </div>
      </section>

      {/* 2. Gallery Filters & Content */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-6">
        
        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-charcoal-850 hide-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-colors border ${
                activeTab === tab
                  ? "bg-primary border-primary text-white"
                  : "bg-charcoal-900 border-charcoal-800 text-gray-400 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxItem(item)}
              className="group bg-charcoal-900 border border-charcoal-850 rounded-xl overflow-hidden shadow-lg cursor-pointer transform hover:-translate-y-0.5 transition-all duration-300"
            >
              {/* Media Card Cover */}
              <div 
                className="h-40 bg-cover bg-center relative flex items-center justify-center border-b border-charcoal-850"
                style={{ backgroundImage: `url('${item.imageUrl}')` }}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-300" />
                {item.isVideo && (
                  <Video className="w-10 h-10 text-primary fill-primary/10 drop-shadow-lg relative z-10" />
                )}
                {/* Locator Badge */}
                <div className="absolute top-2 left-2 bg-charcoal-950/80 text-[8px] font-bold text-gray-400 px-2 py-0.5 border border-charcoal-800 rounded">
                  {item.category}
                </div>
                {/* Zoom Hover Icon */}
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-primary p-2 rounded-full text-white shadow-lg">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Text Info */}
              <div className="p-4 space-y-1">
                <h3 className="font-heading text-xs font-bold text-white group-hover:text-primary truncate transition-colors">
                  {item.title}
                </h3>
                <p className="text-[10px] text-gray-500 truncate">{item.desc}</p>
                <div className="flex items-center gap-1 text-[9px] text-accent pt-1">
                  <MapPin className="w-3 h-3 text-primary shrink-0" />
                  <span className="truncate">{item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* 3. Interactive Lightbox Modal */}
      {lightboxItem && (
        <div className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-4">
          {/* Close button */}
          <button
            onClick={() => setLightboxItem(null)}
            className="absolute top-4 right-4 bg-charcoal-900 border border-charcoal-800 text-white p-2.5 rounded-full hover:bg-primary transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="max-w-2xl w-full bg-charcoal-900 border border-charcoal-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col">
            {/* Main view container */}
            <div 
              className="h-64 sm:h-96 bg-cover bg-center relative flex items-center justify-center border-b border-charcoal-850 p-6 text-center"
              style={{ backgroundImage: `url('${lightboxItem.imageUrl}')` }}
            >
              <div className="absolute inset-0 bg-black/40" />
              {lightboxItem.isVideo ? (
                <div className="space-y-4 relative z-10">
                  <Video className="w-16 h-16 text-primary mx-auto animate-bounce fill-primary/10 drop-shadow-lg" />
                  <p className="text-sm font-bold text-white">Simulated Demo Video Playback</p>
                  <p className="text-xs text-gray-300 max-w-xs mx-auto">
                    Video streaming requires active media server links.
                  </p>
                </div>
              ) : (
                <div className="space-y-4 relative z-10">
                  <span className="text-white/20 font-extrabold text-3xl sm:text-5xl uppercase tracking-widest font-heading">
                    BALAJI SAFETY
                  </span>
                </div>
              )}
            </div>

            {/* Info details */}
            <div className="p-5 space-y-2">
              <span className="text-[10px] bg-primary/10 text-primary border border-primary/20 px-2 py-0.5 rounded uppercase tracking-wider font-bold inline-block">
                {lightboxItem.category}
              </span>
              <h3 className="font-heading text-base font-bold text-white">
                {lightboxItem.title}
              </h3>
              <p className="text-xs text-gray-400">{lightboxItem.desc}</p>
              <div className="flex items-center gap-1.5 text-xs text-accent font-bold pt-1">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span>{lightboxItem.location}</span>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
