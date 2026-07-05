export interface Project {
  slug: string;
  title: string;
  category: string;
  industry: string;
  location: string;
  client: string;
  problem: string;
  solution: string;
  equipmentUsed: string[];
  imageUrl: string;
}

export const projects: Project[] = [
  {
    slug: "lemon-tree-motihari",
    title: "Lemon Tree Hotel, Motihari",
    category: "Hydrants & Sprinklers",
    industry: "Hotels & Resorts",
    location: "Motihari",
    client: "Lemon Tree Hotels",
    problem: "Need for a complete, code-compliant wet sprinkler grid and high-pressure fire hydrant main system to protect guests, kitchen staff, and hotel infrastructure.",
    solution: "Designed and installed a comprehensive wet sprinkler network across all guest rooms, corridors, and lobby zones. Deployed a dedicated pump room featuring a jockey pump, main electric pump, and diesel standby pump, connected to double landing post hydrants and first-aid hose reels.",
    equipmentUsed: [
      "Jockey Pump for pressure maintenance",
      "Main Electric Centrifugal Pump Set (2280 LPM)",
      "Standby Diesel Engine Fire Pump Set",
      "Automatic glass-bulb wet sprinklers (68°C)"
    ],
    imageUrl: "/images/hotel.png"
  },
  {
    slug: "hotel-mudra-varanasi",
    title: "Hotel Mudra, Varanasi",
    category: "Kitchen Suppression & Alarms",
    industry: "Hotels & Resorts",
    location: "Orderly Bazar, Varanasi",
    client: "Hotel Mudra Management",
    problem: "High risk of grease and gas fires in commercial kitchen hoods, requiring automatic suppression alongside addressable smoke detection throughout lobby and dining areas.",
    solution: "Installed a wet-chemical automatic kitchen hood suppression system that reacts instantly to grease fire temperatures. Deployed an intelligent addressable smoke detection loop throughout public spaces, fully integrated with call points and alarm sounders.",
    equipmentUsed: [
      "Wet Chemical hood suppression system (saponification-agent)",
      "Intelligent Addressable Fire Alarm Panel",
      "Low-profile photoelectric smoke detectors",
      "Manual break-glass emergency call points"
    ],
    imageUrl: "/images/industries/kitchen.png"
  },
  {
    slug: "hotel-sapphire-grand",
    title: "Hotel Sapphire Grand, Varanasi",
    category: "Hydrants & Alarms",
    industry: "Hotels & Resorts",
    location: "Cantt, Varanasi",
    client: "Sapphire Grand Hospitality",
    problem: "Completing fire safety upgrades required for local fire department NOC renewal, necessitating a high-pressure outdoor hydrant ring main and internal hose cabinets.",
    solution: "Set up a heavy-duty MS hydrant ring main piping system with external double landing valves and weather-proof hose cabinets housing RRL lay-flat hoses and branch nozzles. Installed conventional zone panels for backup alert capability.",
    equipmentUsed: [
      "MS High-pressure external hydrant ring main",
      "Double landing post valves with instant coupling",
      "RRL lay-flat fire hoses (15m lengths)",
      "Weather-proof MS fire hose cabinets"
    ],
    imageUrl: "/images/projects/sapphire-grand.png"
  }
];
