export interface Industry {
  slug: string;
  title: string;
  sector: "Commercial" | "Hospitality & Public" | "Industrial" | "Institutional";
  iconName: string;
  risks: string;
  solutions: string[];
  description: string;
  challenges: string[];
  benefits: string[];
  imageUrl: string;
}

export const industries: Industry[] = [
  {
    slug: "corporate-offices",
    title: "Corporate Offices",
    sector: "Commercial",
    iconName: "Briefcase",
    imageUrl: "/images/industries/corporate.png",
    risks: "Electrical overloads, server room overheating, high density of office equipment, and occupant evacuation routes.",
    solutions: ["fire-alarm-systems", "fire-extinguisher-sales", "suppression-systems", "amc-maintenance"],
    description: "Corporate office spaces require continuous fire detection, clean-agent suppression in server rooms, and code-compliant manual extinguishers to protect workforce and business continuity.",
    challenges: [
      "High density of occupants needing rapid, organized evacuation.",
      "Sensitive data centers and server equipment vulnerable to water damage.",
      "Complex cabling networks behind false ceilings raising electric fire risks."
    ],
    benefits: [
      "100% compliance with local fire department NOC rules.",
      "Protection of critical digital infrastructure and hardware.",
      "Peace of mind for employees and facility managers."
    ]
  },
  {
    slug: "commercial-buildings",
    title: "Commercial Buildings",
    sector: "Commercial",
    iconName: "Building",
    imageUrl: "/images/industries/commercial.png",
    risks: "Mixed occupancies, multiple entry/exit points, high electrical loads, and parking basement hazards.",
    solutions: ["fire-hydrant-systems", "fire-alarm-systems", "sprinkler-systems", "amc-maintenance"],
    description: "Multi-tenant commercial buildings require a robust water hydrant system, automatic wet sprinklers in corridors/basements, and active central monitoring systems.",
    challenges: [
      "Varying fire risk profiles across different tenant spaces.",
      "Basement parking zones with vehicle fuel hazards.",
      "Need for centralized monitoring and control valves."
    ],
    benefits: [
      "Saves up to 30% on building insurance premiums.",
      "Automatic containment of fires, minimizing structural loss.",
      "Continuous system readiness tracked via AMC logs."
    ]
  },
  {
    slug: "shopping-malls",
    title: "Shopping Malls",
    sector: "Commercial",
    iconName: "ShoppingBag",
    imageUrl: "/images/projects/jhv-mall.jpg",
    risks: "High public footfall, flammable retail inventory, food courts, and complex structural layouts.",
    solutions: ["sprinkler-systems", "fire-hydrant-systems", "fire-alarm-systems", "emergency-support"],
    description: "Shopping malls present unique challenges with thousands of daily visitors. Heavy water-sprinkler systems, perimeter hydrants, and integrated hooters are essential.",
    challenges: [
      "Crowd control and panic management during emergency alarms.",
      "Massive fire load due to clothing, plastics, and retail inventory.",
      "High risk of cooking grease fires in concentrated food court zones."
    ],
    benefits: [
      "Ensures the highest safety standard for public spaces (NBC Group F compliance).",
      "Immediate local suppression prevents small sparks from becoming major disasters.",
      "24/7 technical backup to address lines or panels."
    ]
  },
  {
    slug: "it-companies",
    title: "IT Companies",
    sector: "Commercial",
    iconName: "Cpu",
    imageUrl: "/images/industries/it.png",
    risks: "High power density, electrical server closets, UPS battery risks, and expensive hardware assets.",
    solutions: ["suppression-systems", "fire-alarm-systems", "amc-maintenance"],
    description: "IT facilities require gas-based clean-agent fire suppression (FM-200 / Novec 1230) to instantly extinguish fires in server rooms without damaging sensitive electronics.",
    challenges: [
      "Water damage from conventional sprinklers can destroy expensive server equipment.",
      "Hidden fires within floor voids or server cabinets.",
      "UPS battery rooms vulnerable to thermal runaway."
    ],
    benefits: [
      "Zero equipment corrosion or cleanup residue post-discharge.",
      "Minimal service interruption and zero data loss.",
      "Meets strict insurance and client compliance regulations."
    ]
  },
  {
    slug: "hotels",
    title: "Hotels & Resorts",
    sector: "Hospitality & Public",
    iconName: "Hotel",
    imageUrl: "/images/projects/taj-ganges.jpg",
    risks: "Commercial kitchens, guest bedrooms, laundry rooms, and 24-hour occupancy.",
    solutions: ["suppression-systems", "fire-alarm-systems", "sprinkler-systems", "amc-maintenance"],
    description: "Hotels require integrated safety solutions, from kitchen hood suppression to guest room smoke detectors, ensuring safety while maintaining aesthetic appeal.",
    challenges: [
      "Sleeping guests require highly audible and reliable alarms.",
      "Large kitchens operating commercial burners and deep fryers constantly.",
      "Maintaining high-end interior aesthetics while complying with safety plumbing."
    ],
    benefits: [
      "Protects brand reputation and customer trust.",
      "Secures local police and tourism department licensing requirements.",
      "Minimizes liability risks with verified inspection audits."
    ]
  },
  {
    slug: "restaurants",
    title: "Restaurants",
    sector: "Hospitality & Public",
    iconName: "Utensils",
    imageUrl: "/images/industries/kitchen.png",
    risks: "Kitchen cooking oil fires, high-temperature stoves, LPG leakage, and close seating spaces.",
    solutions: ["suppression-systems", "fire-extinguisher-sales", "fire-extinguisher-refilling"],
    description: "Restaurants must possess wet-chemical kitchen hood suppression systems and dedicated K-Class / CO2 extinguishers to handle grease and gas fires.",
    challenges: [
      "Flash fires on stove burners spreading to ventilation ducts.",
      "LPG cylinder storage manifold leaks.",
      "High density of diners in relatively small dining spaces."
    ],
    benefits: [
      "Safeguards kitchen staff and diners from thermal hazards.",
      "Prevents grease duct fires from spreading to the rest of the building.",
      "Simple, rapid cleanup avoids long business closures."
    ]
  },
  {
    slug: "government-buildings",
    title: "Government Buildings",
    sector: "Hospitality & Public",
    iconName: "FileText",
    imageUrl: "/images/industries/government.png",
    risks: "Massive paper archives, public crowds, aging wiring systems, and heritage structural layouts.",
    solutions: ["fire-hydrant-systems", "fire-alarm-systems", "fire-extinguisher-sales", "amc-maintenance"],
    description: "Public offices and administrative buildings require reliable fire hydrant mains, extensive hand-held extinguishers, and active maintenance contracts.",
    challenges: [
      "High volume of physical paper records creating high fire loads.",
      "Older structures with legacy electrical grids not rated for modern loads.",
      "Complex bureaucratic procedures for safety maintenance approvals."
    ],
    benefits: [
      "Preserves historical documents and crucial public records.",
      "Meets strict public safety mandates and government audit standards.",
      "Reliable system operation via structured AMC logs."
    ]
  },
  {
    slug: "residential-projects",
    title: "Residential Projects",
    sector: "Hospitality & Public",
    iconName: "Home",
    imageUrl: "/images/industries/residential.png",
    risks: "Kitchen gas stoves, electrical short circuits, high-rise stairwells, and delayed nighttime detection.",
    solutions: ["fire-hydrant-systems", "fire-alarm-systems", "fire-extinguisher-sales", "amc-maintenance"],
    description: "Apartment complexes and residential blocks require dry-risers or hydrants, lobby smoke detectors, and visible extinguisher points to protect families.",
    challenges: [
      "Nighttime fires when residents are asleep and slow to notice.",
      "Blocked evacuation staircases and narrow apartment corridors.",
      "Lack of safety training among individual apartment owners."
    ],
    benefits: [
      "Ensures maximum safety and protection for families.",
      "Required for obtaining Builder's Completion Certificates.",
      "Meets UP Apartment Ownership Act guidelines."
    ]
  },
  {
    slug: "industrial-plants",
    title: "Industrial Plants",
    sector: "Industrial",
    iconName: "Factory",
    imageUrl: "/images/projects/ultratech-cement.jpg",
    risks: "High voltage transformers, chemical processing, heavy friction machinery, and large industrial volumes.",
    solutions: ["fire-hydrant-systems", "suppression-systems", "fire-consultation", "amc-maintenance"],
    description: "Industrial plants require customized water-deluge systems, carbon dioxide total flooding systems, and robust outdoor hydrant networks.",
    challenges: [
      "Extremely high temperatures and dust complicating detection.",
      "Chemical storage zones susceptible to rapid fire spread.",
      "Heavy machinery sparking and electrical transformer fires."
    ],
    benefits: [
      "Prevents catastrophic factory down-time and asset loss.",
      "Fully satisfies Factory Act (1948) fire safety requirements.",
      "Protects skilled labor force and surrounding industrial zones."
    ]
  },
  {
    slug: "manufacturing-units",
    title: "Manufacturing Units",
    sector: "Industrial",
    iconName: "Settings",
    imageUrl: "/images/industries/manufacturing.png",
    risks: "Process heat, combustible raw materials, welding sparks, and complex power distribution boards.",
    solutions: ["sprinkler-systems", "fire-hydrant-systems", "fire-alarm-systems", "testing-commissioning"],
    description: "Manufacturing zones require comprehensive sprinkler grids, high-output hydrant post valves, and fire alarm setups tested under dusty conditions.",
    challenges: [
      "Presence of combustible dusts (wood, flour, textile fibers).",
      "Thermal processes operating near flammable solvents.",
      "Vibration damage to safety piping systems."
    ],
    benefits: [
      "Ensures business operations run without compliance interruptions.",
      "Reduces commercial property insurance premiums.",
      "Pre-engineered layouts tailored to manufacturing flows."
    ]
  },
  {
    slug: "warehouses",
    title: "Warehouses",
    sector: "Industrial",
    iconName: "HardHat",
    imageUrl: "/images/industries/warehouse.png",
    risks: "High-rack storage configurations, combustible packaging, battery-charging forklifts, and large open rooms.",
    solutions: ["sprinkler-systems", "fire-hydrant-systems", "fire-alarm-systems"],
    description: "Warehouses demand specialized early suppression fast response (ESFR) ceiling sprinklers, beam smoke detectors, and exterior fire hydrant networks.",
    challenges: [
      "High ceilings render standard smoke detectors slow to respond.",
      "Vertical stacking of shelves lets fire climb rapidly.",
      "Massive open floor plans without physical fire-wall isolations."
    ],
    benefits: [
      "Protects billions in stored inventory and logistics assets.",
      "Meets strict supply-chain and global tenant audit guidelines.",
      "Ensures logistics continuity and avoids supply chain breaks."
    ]
  },
  {
    slug: "hospitals",
    title: "Hospitals & Healthcare",
    sector: "Institutional",
    iconName: "HeartPulse",
    imageUrl: "/images/industries/hospital.png",
    risks: "Immobile patients, pressurized oxygen pipelines, electrical MRI machines, and chemical pharmacies.",
    solutions: ["suppression-systems", "fire-alarm-systems", "sprinkler-systems", "fire-consultation"],
    description: "Healthcare facilities require the highest grade of safety, featuring zero-error addressable alarm loops, non-toxic suppression, and robust containment designs.",
    challenges: [
      "Inability to evacuate ICU, operation theater, or bedridden patients quickly.",
      "Pressurized oxygen enriched environments accelerating flame combustion.",
      "Highly sensitive medical imaging equipment easily damaged by smoke or water."
    ],
    benefits: [
      "Safeguards human life where evacuation is exceptionally difficult.",
      "Mandatory requirement for NABH accreditation.",
      "Maintains critical diagnostic and surgical operations."
    ]
  },
  {
    slug: "educational-institutions",
    title: "Educational Institutions",
    sector: "Institutional",
    iconName: "GraduationCap",
    imageUrl: "/images/projects/sunbeam-school.jpg",
    risks: "High density of children, chemistry laboratories, computer rooms, and libraries.",
    solutions: ["fire-alarm-systems", "fire-extinguisher-sales", "fire-hydrant-systems", "fire-consultation"],
    description: "Schools and colleges require clear evacuation signs, manual alarm call points, basic extinguishers, and hydrant systems to protect the student community.",
    challenges: [
      "Evacuating young children who may panic or hide during alarms.",
      "Flammable chemicals stored in chemistry and science labs.",
      "High occupancy rates during lectures and assemblies."
    ],
    benefits: [
      "Protects students, teachers, and campus infrastructure.",
      "Required for CBSE, ICSE, and University Board affiliations.",
      "Fosters a culture of safety through drills and training support."
    ]
  },
  {
    slug: "banks",
    title: "Banks & Financial Institutions",
    sector: "Institutional",
    iconName: "DollarSign",
    imageUrl: "/images/industries/bank.png",
    risks: "Currency vaults, paper document archives, computer terminals, and high security enclosures.",
    solutions: ["suppression-systems", "fire-alarm-systems", "fire-extinguisher-sales"],
    description: "Banking branches and vaults require specialized clean-agent gaseous suppression, high-sensitivity smoke detection, and portable gas extinguishers.",
    challenges: [
      "Vault rooms are heavily sealed, locking in smoke and heat.",
      "Irreplaceable paper documents and physical security storage.",
      "Maintaining high physical security during an emergency exit."
    ],
    benefits: [
      "Protects critical financial data and physical monetary assets.",
      "Meets RBI and banking association security regulations.",
      "Zero residue clean agent protects documentation."
    ]
  }
];
