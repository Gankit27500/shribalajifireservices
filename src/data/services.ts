export interface Service {
  slug: string;
  title: string;
  shortDesc: string;
  iconName: string;
  overview: string[];
  benefits: string[];
  features: string[];
  applications: string[];
  process: string[];
  equipment: { name: string; desc: string; imageUrl?: string }[];
  faqs: { question: string; answer: string }[];
  imageUrl: string;
}

export const services: Service[] = [
  {
    slug: "fire-extinguisher-sales",
    title: "Fire Extinguisher Sales",
    shortDesc: "Complete range of certified, standard-compliant ABC, CO2, water, foam, and clean-agent extinguishers.",
    iconName: "FlameKindling",
    imageUrl: "/images/services/sales.png",
    overview: [
      "At Shri Balaji Fire Security Services, we supply premium quality, ISI-marked, and certified fire extinguishers of all types and capacities. Every unit is engineered for reliability, safety, and compliance with national fire safety standards (NBC & IS codes).",
      "We provide expert consultation to determine the exact fire rating and capacity required for your space, ensuring maximum protection for your premises, assets, and occupants."
    ],
    benefits: [
      "100% certified ISI-marked and standard-compliant equipment.",
      "High fire-rating capabilities for faster suppression.",
      "Sturdy body construction with pressure gauge indicators.",
      "Cost-effective supply direct from trusted manufacturers."
    ],
    features: [
      "ABC Dry Powder (MAP 50% & MAP 90% variants)",
      "Carbon Dioxide (CO2) for electrical & server risks",
      "Clean Agent (Halotron / HFC alternatives) - residue-free",
      "Water and Mechanical Foam for class A & B fires",
      "Modular automatic ceiling-mounted extinguishers"
    ],
    applications: [
      "Corporate offices and IT server rooms",
      "Industrial manufacturing plants and warehouses",
      "Schools, hospitals, hotels, and retail malls",
      "Residential apartment blocks and individual homes"
    ],
    process: [
      "Initial requirement analysis & risk assessment",
      "Selection of correct extinguisher types & ratings",
      "Supply and delivery to your site in Varanasi",
      "Code-compliant mounting, installation, and layout placement",
      "Basic user training & operations demonstration"
    ],
    equipment: [
      { name: "ABC Dry Powder Extinguisher", desc: "Multi-purpose extinguisher for Class A, B, and C fires. Sizes: 2kg, 4kg, 6kg, 9kg." },
      { name: "CO2 Extinguisher", desc: "Ideal for electrical fires. Non-conductive, clean agent. Sizes: 2kg, 3kg, 4.5kg, 22.5kg wheel-mounted." },
      { name: "Clean Agent Extinguisher", desc: "Zero residue, highly effective on electronics. Sizes: 2kg, 4kg, 6kg." },
      { name: "Water Co2 / Foam Extinguisher", desc: "Best for wood/paper (foam for flammable liquids). Sizes: 9L, 50L." },
      { name: "Fire Extinguisher Ball", desc: "Auto-activating fire extinguisher ball for kitchens & electrical panels.", imageUrl: "/images/equipment/fire_extinguisher_ball.png" }
    ],
    faqs: [
      { question: "What is the life of a fire extinguisher?", answer: "The lifespan depends on the type. Dry powder and clean agent units typically have a shell life of 5-10 years if regularly inspected and refilled, while CO2 cylinders can last longer subject to periodic hydraulic pressure tests every 5 years." },
      { question: "Do you provide mounting brackets and signage?", answer: "Yes. All our sales include appropriate heavy-duty mounting brackets, wall fasteners, and standard photoluminescent (glow-in-the-dark) operating instructions and locator signs." }
    ]
  },
  {
    slug: "fire-extinguisher-refilling",
    title: "Fire Extinguisher Refilling & Recharge",
    shortDesc: "Fast refilling, pressure testing, and certified recharging for all brands with rapid Varanasi turnaround.",
    iconName: "RotateCw",
    imageUrl: "/images/services/refill.png",
    overview: [
      "Fire extinguishers must be regularly refilled and maintained to guarantee they perform correctly when needed. Shri Balaji Fire Security Services provides certified refilling, recharging, and hydraulic testing for all types of extinguishers.",
      "We strictly adhere to IS 2190 guidelines for testing and refilling, utilizing modern equipment to prevent leakage, pressure drops, and contamination. We serve commercial, industrial, and residential clients across Varanasi."
    ],
    benefits: [
      "Rapid turnaround time to ensure your site is never left unprotected.",
      "Strict compliance check and pressure testing before refilling.",
      "Use of certified chemical agents and high-grade propellant gases.",
      "Clear refilling certificate, service card, and date tracking stickers."
    ],
    features: [
      "Precision nitrogen gas pressurization",
      "Hydraulic pressure testing (hydrotesting) of cylinders",
      "Replacement of damaged valves, O-rings, and safety pins",
      "Sieving and moisture check for dry powders",
      "Weight-based compliance verification"
    ],
    applications: [
      "Commercial complex annual safety updates",
      "Industrial manufacturing plants and warehouses",
      "Educational institutions during summer/winter recess",
      "Hotels and hospitals requiring immediate compliance refilling"
    ],
    process: [
      "Collection of empty/expired cylinders from your site in Varanasi",
      "Visual inspections, cleaning, and valve servicing",
      "Hydraulic testing to verify cylinder structural integrity",
      "Refilling with standard-compliant chemical agents",
      "Pressurization, leak testing, labeling, and delivery back to site"
    ],
    equipment: [
      { name: "Nitrogen Filling Station", desc: "High-pressure nitrogen regulator and manifold for accurate cylinder pressurization." },
      { name: "Powder Refilling Machine", desc: "Vacuum-based dry chemical powder transfer machine preventing moisture entry." },
      { name: "Hydro-testing Pump", desc: "Water-pressure pump to test cylinder expansion under high pressure." }
    ],
    faqs: [
      { question: "How often should fire extinguishers be refilled?", answer: "Extinguishers must be refilled immediately after any use (even partial discharge) or upon reaching their expiration interval, which is typically 1 to 3 years depending on the type and local regulations." },
      { question: "Can you refill extinguishers of other brands?", answer: "Yes, we service and refill all brands of fire extinguishers, provided the cylinders pass the initial visual and hydraulic pressure safety checks." }
    ]
  },
  {
    slug: "fire-alarm-systems",
    title: "Fire Alarm Systems",
    shortDesc: "Advanced addressable and conventional detection systems with integrated panels, detectors, and alerts.",
    iconName: "BellRing",
    imageUrl: "/images/services/alarm.png",
    overview: [
      "Early detection is the single most critical factor in saving lives. Shri Balaji Fire Security Services designs, installs, and maintains advanced fire alarm systems, including both conventional and intelligent addressable solutions.",
      "Our installations are fully integrated with smoke detectors, heat sensors, manual call points, hooters, and central monitoring panels, customized for Varanasi's commercial offices, hotels, hospitals, and residential buildings."
    ],
    benefits: [
      "Early detection allows for safe and orderly evacuation.",
      "Addressable systems point out the exact location of a fire down to the room.",
      "Integration with other systems (suppression, lift recall, HVAC shutdown).",
      "Minimal false alarm rates using advanced sensors."
    ],
    features: [
      "Intelligent Analogue Addressable Control Panels",
      "Conventional multi-zone fire alarm panels",
      "Optical smoke detectors, heat detectors, and multi-sensor units",
      "Explosion-proof and flame detectors for industrial areas",
      "Integration with talkback systems and public address (PA) systems"
    ],
    applications: [
      "Large hotels like Taj Ganges and JHV Mall in Varanasi",
      "Hospitals and clinical laboratories",
      "Corporate offices and bank branches",
      "Multi-story residential apartments"
    ],
    process: [
      "Site survey and sensor layout design using CAD drawings",
      "Cabling using fire-survival copper cables and conduits",
      "Installation of detectors, call points, and the main control panel",
      "System integration, programming, zone mapping, and configuration",
      "Commissioning, testing, and handover with full documentation"
    ],
    equipment: [
      { name: "Addressable Fire Alarm Panel (FACP)", desc: "Microprocessor-based control panel communicating with hundreds of individual devices.", imageUrl: "/images/equipment/facp_panel.png" },
      { name: "Smoke & Heat Detectors", desc: "Photoelectric smoke detectors and thermal heat sensors for reliable flame detection." },
      { name: "Manual Call Point", desc: "Emergency break-glass call points to manually trigger the alarm system.", imageUrl: "/images/equipment/manual_call_point.png" },
      { name: "Response Indicator", desc: "LED indicator showing alarm activation status inside false ceilings or closed rooms.", imageUrl: "/images/equipment/response_indicator.png" }
    ],
    faqs: [
      { question: "What is the difference between conventional and addressable alarm systems?", answer: "Conventional systems divide the building into general zones; the panel shows which zone has a fire. Addressable systems assign a unique ID to every single detector, pinpointing the exact device and room where smoke or heat is detected, making it ideal for larger facilities." },
      { question: "How often should fire alarms be tested?", answer: "Fire alarm systems should be inspected monthly, with comprehensive functional testing of sensors, panels, and battery backup systems performed quarterly and annually." }
    ]
  },
  {
    slug: "fire-hydrant-systems",
    title: "Fire Hydrant Systems",
    shortDesc: "High-pressure industrial hydrant networks, landing valves, hose reels, and high-capacity pump rooms.",
    iconName: "ShieldAlert",
    imageUrl: "/images/projects/ultratech-cement.jpg",
    overview: [
      "Fire Hydrant Systems form the backbone of active firefighting for large buildings, factories, and commercial centers. They provide a continuous, high-pressure water supply to suppress major fires before local fire engines arrive.",
      "Shri Balaji Fire Security Services designs, installs, and commissions end-to-end hydrant networks complete with underground reservoirs, main pumps, diesel standby pumps, jockey pumps, landing valves, lay-flat hoses, and hose reel cabinets."
    ],
    benefits: [
      "Provides unlimited water-based firefighting capacity at all levels of a building.",
      "Independent operation with dedicated diesel-engine pump backup.",
      "Built to withstand harsh environments and high temperatures.",
      "Fully compliant with National Building Code (NBC) guidelines."
    ],
    features: [
      "Heavy-duty MS (Mild Steel) pipe network with anti-corrosion coating",
      "Double landing valves and instant-coupling branch nozzles",
      "First-aid hose reels with flexible rubber hoses",
      "Automatic pump control panel with pressure switch starters",
      "Standby diesel-engine fire pumps for power outage situations"
    ],
    applications: [
      "Industrial manufacturing plants and cement factories",
      "High-rise commercial complexes and warehouses",
      "Educational campuses and government buildings",
      "Large shopping malls and hotels"
    ],
    process: [
      "Hydraulic calculation and pipe size sizing design",
      "Excavation, piping layout, welding, and structural support installation",
      "Pump room installation (Jockey, Electric Main, and Diesel Standby)",
      "Hydrant post, landing valve, and hose cabinet installation",
      "Hydro-testing at high pressure (typically 1.5 times working pressure) and commissioning"
    ],
    equipment: [
      { name: "Main Fire Pump Set", desc: "Centrifugal horizontal split-case pump driven by electric motor (e.g., 75 HP, 2280 LPM).", imageUrl: "/images/equipment/main_pump.png" },
      { name: "Fire Jockey Pump Set", desc: "Heavy-duty jockey pump to maintain grid pipeline pressure during minor leaks.", imageUrl: "/images/equipment/jockey_pump.png" },
      { name: "RRL Hose Pipe Set", desc: "Reinforced rubber-lined lay-flat fire hose with instantaneous coupling.", imageUrl: "/images/equipment/rrl_hose_pipe.png" },
      { name: "Fire Hose Reel Drum", desc: "Wall-mounted swinging hose reel drum with flexible rubber hose.", imageUrl: "/images/equipment/hose_reel.png" },
      { name: "Two-Way Fire Inlet", desc: "Standard 2-way breeching inlet connection for fire fighters.", imageUrl: "/images/equipment/two_way_inlet.png" },
      { name: "Four-Way Fire Inlet", desc: "Heavy-duty 4-way breeching inlet connection for high-capacity external pumping.", imageUrl: "/images/equipment/four_way_inlet.png" }
    ],
    faqs: [
      { question: "What pressure should a fire hydrant system maintain?", answer: "Under normal standby conditions, the hydrant ring main pressure is maintained around 7-8 kg/cm² by a jockey pump. During operation, the main pump cuts in automatically to maintain 5-7 kg/cm² pressure at the highest landing valve." },
      { question: "Is a diesel pump mandatory for fire hydrant systems?", answer: "Yes, for most commercial and industrial structures under NBC standards, a standby diesel pump of equal capacity to the main electric pump is mandatory to ensure firefighting capability during power outages." }
    ]
  },
  {
    slug: "sprinkler-systems",
    title: "Automatic Sprinkler Systems",
    shortDesc: "Automatic glass-bulb water sprinkler systems for commercial, warehouse, and residential projects.",
    iconName: "Waves",
    imageUrl: "/images/mall.png",
    overview: [
      "Automatic sprinkler systems are the most effective way to control fires in their early stages. Activated by heat, they automatically spray water locally over the source of the fire, suppressing it before it spreads.",
      "Shri Balaji Fire Security Services installs standard-compliant wet-pipe, dry-pipe, pre-action, and deluge sprinkler systems, complete with flow switches, alarm valves, and high-performance sprinkler heads."
    ],
    benefits: [
      "Operates automatically without requiring human intervention.",
      "Suppresses fires locally, limiting water damage to the fire area.",
      "Reduces structural damage and heat buildup.",
      "Substantially lowers insurance premiums for commercial properties."
    ],
    features: [
      "Pendant, upright, and sidewall sprinkler head configurations",
      "Different temperature ratings (typically 68°C glass bulbs)",
      "System control and alarm valves (deluge and wet alarm valves)",
      "Flow switches linked to the fire alarm panel for automatic warnings",
      "Flexible stainless steel connections for false ceiling grids"
    ],
    applications: [
      "Shopping malls, department stores, and retail spaces",
      "Warehouses, basements, and underground car parks",
      "Hotels, hospitals, and office workspaces",
      "High-rise residential buildings"
    ],
    process: [
      "Piping grid design and sprinkler spacing calculations",
      "Installation of main riser pipes and horizontal branches",
      "Mounting of sprinkler heads and flexible dropper tubes",
      "Installation of flow switches and installation control valves",
      "Pneumatic or hydrostatic testing, flushing, and commissioning"
    ],
    equipment: [
      { name: "Glass Bulb Sprinkler Head", desc: "Quartzoid glass bulb containing liquid that expands under heat, shattering at 68°C to release water.", imageUrl: "/images/equipment/sprinkler.png" },
      { name: "Alarm Valve", desc: "Water flow alarm valve that sounds a mechanical gong when a sprinkler activates." },
      { name: "Deluge Valve", desc: "Quick-opening valve for dry/deluge systems in hazardous areas." }
    ],
    faqs: [
      { question: "Do all sprinklers go off at the same time?", answer: "No, this is a common misconception from movies. Only the specific sprinkler head(s) directly exposed to the fire's heat (typically reaching 68°C) will activate and discharge water. In 90% of cases, one or two sprinkler heads are enough to control the fire." },
      { question: "What maintenance is required for sprinklers?", answer: "Sprinklers require visual inspections monthly to ensure heads are not painted or obstructed, and annual flow tests on the alarm valve and drain connections." }
    ]
  },
  {
    slug: "suppression-systems",
    title: "Fire Suppression Systems",
    shortDesc: "Clean-agent gas, CO2, and kitchen chemical suppression for server rooms, kitchens, and labs.",
    iconName: "Shield",
    imageUrl: "/images/industries/it.png",
    overview: [
      "In areas housing sensitive electronics, data servers, high-value assets, or commercial kitchens, water can cause as much damage as fire itself. Shri Balaji Fire Security Services specializes in clean-agent gaseous fire suppression and commercial kitchen suppression systems.",
      "Our clean-agent systems (using gas like FM-200, Novec 1230, or CO2) extinguish fires in seconds by removing heat or oxygen without leaving any residue, moisture, or chemical cleanup requirements."
    ],
    benefits: [
      "Anti-fire suppression (typically under 10 seconds) preventing data loss.",
      "Zero residue and non-conductive, completely safe for electrical equipment.",
      "Minimum business downtime with no cleanup needed.",
      "Safe for occupied spaces (with FM-200 and Novec 1230 systems)."
    ],
    features: [
      "FM-200 (HFC-227ea) gaseous suppression networks",
      "Novec 1230 eco-friendly fluid suppression systems",
      "Carbon Dioxide (CO2) total flooding systems for unmanned rooms",
      "Wet chemical suppression systems for commercial kitchen hoods",
      "Pneumatic fire detection tubing (tubing-based panel suppression)"
    ],
    applications: [
      "Data centers, server rooms, and UPS rooms",
      "Electrical control rooms and substations",
      "Museums, libraries, archives, and bank vaults",
      "Commercial kitchens in Varanasi hotels and restaurants"
    ],
    process: [
      "Room enclosure integrity assessment & volume calculations",
      "Designing piping networks and discharge nozzle positioning",
      "Installation of gas agent storage cylinders and piping",
      "Installation of release control panels, gas release dampers, and warnings",
      "Door fan testing to verify room airtightness, and commissioning"
    ],
    equipment: [
      { name: "Gas Storage Cylinders", desc: "High-pressure steel cylinders storing FM-200, Novec 1230, or CO2 agent.", imageUrl: "/images/equipment/fire_suppression.png" },
      { name: "Gas Release Control Panel", desc: "Dedicated panel that coordinates cross-zoned smoke detection before releasing gas." },
      { name: "Wet Chemical Agent", desc: "Potassium salt-based liquid agent for suppressing grease fires in kitchens." }
    ],
    faqs: [
      { question: "Is FM-200 safe for humans?", answer: "Yes, FM-200 and Novec 1230 are tested and approved for total flooding in occupied spaces at design concentrations. They suppress fire without depleting oxygen levels to dangerous limits for humans." },
      { question: "What is kitchen hood suppression?", answer: "It is a specialized system that detects fires in cooking hoods and automatically sprays a wet chemical agent that reacts with hot grease, creating a soap-like layer (saponification) that smothers the flame and cools the cooking oil." }
    ]
  },
  {
    slug: "amc-maintenance",
    title: "AMC & Maintenance",
    shortDesc: "Annual Maintenance Contracts (AMC) to ensure code compliance, zero downtime, and audit readiness.",
    iconName: "Wrench",
    imageUrl: "/images/hero-bg.png",
    overview: [
      "An unmaintained fire system is as dangerous as having no system at all. Shri Balaji Fire Security Services offers comprehensive and non-comprehensive Annual Maintenance Contracts (AMC) to ensure your firefighting equipment is always operational.",
      "Our qualified team conducts regular audits, functional testing, and emergency maintenance visits, keeping you fully compliant with local fire department safety audits and national safety guidelines."
    ],
    benefits: [
      "Guarantees the system operates reliably during an emergency.",
      "Ensures continuous compliance with national fire codes and local safety renewals.",
      "Prevents expensive repair costs through timely inspection and lubrication.",
      "Priority 24/7 emergency repair support with dedicated technician response."
    ],
    features: [
      "Quarterly planned maintenance visits by certified engineers",
      "Full check of pump rooms, hydrant pressures, and sprinkler valves",
      "Functional testing of smoke detectors, alarms, and control panels",
      "Refilling reminders and inventory status reports",
      "Maintenance logbooks and compliance certificate generation"
    ],
    applications: [
      "Corporate offices, commercial complexes, and retail shops",
      "Manufacturing facilities, mills, and warehouse hubs",
      "Residential societies and high-rise apartments in Varanasi",
      "Hospitals, educational institutions, and public buildings"
    ],
    process: [
      "Detailed inspection and audit of the existing fire safety system",
      "Preparation of status report and system health audit documentation",
      "Agreement on AMC scope (routine testing, replacements, emergency visits)",
      "Execution of scheduled quarterly/monthly inspection checklists",
      "Issuance of audit-ready compliance logs and maintenance stamps"
    ],
    equipment: [
      { name: "Digital Pressure Gauges", desc: "Calibrated gauges to verify exact line pressures at hydrants and pumps." },
      { name: "Aerosol Smoke Testers", desc: "Standard aerosol testers to verify smoke detector sensor responsiveness." },
      { name: "Decibel Meters", desc: "Sound meters to measure alarm hooter decibel outputs across premises." }
    ],
    faqs: [
      { question: "What is the difference between comprehensive and non-comprehensive AMC?", answer: "A non-comprehensive AMC covers regular inspections, testing, and labor charges for minor adjustments, with any replacement parts billed separately. A comprehensive AMC covers both labor and the cost of replacing worn-out or damaged parts like valves, sensors, or hoses." },
      { question: "Will you provide documentation for local Fire NOC renewal?", answer: "Yes, as part of our AMC, we provide comprehensive testing logs, inspection certificates, and structural compliance reports that are necessary for submitting local fire department safety renewals." }
    ]
  },
  {
    slug: "testing-commissioning",
    title: "Testing & Commissioning",
    shortDesc: "Rigorous pressure testing, line flushing, and functional commissioning of newly installed systems.",
    iconName: "FileCheck",
    imageUrl: "/images/projects/jhv-mall.jpg",
    overview: [
      "Before a fire safety system is handed over or submitted for certification, it must undergo rigorous testing to prove it can withstand extreme working conditions. Shri Balaji Fire Security Services provides certified testing and commissioning services.",
      "We perform hydrostatic pressure tests, pipeline flushing, alarm loop testing, and total system integration audits to ensure every component functions perfectly under real-world stress."
    ],
    benefits: [
      "Verifies installation quality and highlights hidden leaks or piping blocks.",
      "Protects against pipe bursts or valve failures under operating pressures.",
      "Ensures the system meets exact design parameters and flow rates.",
      "Provides documentation to satisfy third-party auditors and local authorities."
    ],
    features: [
      "Hydrostatic testing of hydrant mains and sprinkler pipes (up to 15 kg/cm²)",
      "Pipe flushing to remove welding slag, dirt, and internal blocks",
      "Electrical insulation and battery backup load tests for alarm systems",
      "Integrated system testing (simulated smoke testing triggering gas release/sprinklers)",
      "Pump flow rate and head pressure performance charting"
    ],
    applications: [
      "Newly completed commercial building projects",
      "Industrial expansions and pipeline modifications",
      "Pre-occupancy safety audits for hotels and malls",
      "Post-renovation alarm re-certification"
    ],
    process: [
      "Isolating sections of piping and installing test manifolds",
      "Filling pipes with water and purging trapped air pockets",
      "Pressurizing the system to test levels using manual/motorized pumps",
      "Holding pressure for 24 hours to monitor drop-offs (zero leakage goal)",
      "Triggering alarm sensors and verifying auto-start functions of pumps"
    ],
    equipment: [
      { name: "Hydrostatic Test Rig", desc: "High-pressure pump system with safety relief valves and calibrated pressure gauges." },
      { name: "Flow Meters", desc: "Ultrasonic or mechanical flow meters to measure GPM/LPM water discharge rates." },
      { name: "Loop Tester", desc: "Electronic diagnosis tool to analyze signal integrity on addressable alarm cables." }
    ],
    faqs: [
      { question: "What is hydrostatic testing?", answer: "Hydrostatic testing involves filling a piping system with water, purging air, and pressurizing the system to a specified test pressure (typically 1.5 times the working pressure) for a set duration to check for leaks, structural defects, and joint strength." },
      { question: "Why is pipeline flushing necessary?", answer: "Flushing removes debris, sand, welding slag, and rust that accumulate during construction. If not flushed out, this debris can clog sprinkler nozzles or block valves, rendering the system useless when activated." }
    ]
  },
  {
    slug: "emergency-support",
    title: "Emergency Fire Safety Support",
    shortDesc: "24/7 urgent support for pressure drops, alarm malfunctions, and emergency extinguisher refilling.",
    iconName: "PhoneCall",
    imageUrl: "/images/hotel.png",
    overview: [
      "Fire safety emergencies don't wait for business hours. Shri Balaji Fire Security Services provides 24/7 emergency support across Varanasi and the Purvanchal region to resolve critical system failures, persistent false alarms, or pressure drops.",
      "Our emergency response vehicle is equipped with critical spares, valves, sensors, and basic refilling gear, backed by a team of technicians ready to deploy immediately to secure your facility."
    ],
    benefits: [
      "Immediate assistance for system breakdowns or false alarms.",
      "Restores fire protection integrity to your building without delay.",
      "Mininizes danger of system failures during an actual fire event.",
      "Expert telephone guidance and fast on-site technician dispatch."
    ],
    features: [
      "24/7 dedicated emergency response hotline (+91-7007447595)",
      "On-call troubleshooting for fire alarm panels and false alarms",
      "Emergency valve replacement and leak isolation",
      "Urgent pressure recharging for fire pumps",
      "Rapid post-fire clean-up, inspection, and refilling"
    ],
    applications: [
      "24-hour manufacturing plants and textile factories",
      "Hospitals, nursing homes, and clinical laboratories",
      "Hotels, resorts, and multi-cuisine restaurants",
      "Residential societies with critical lift and pump operations"
    ],
    process: [
      "Client calls our emergency helpline describing the malfunction",
      "Immediate phone-guided steps to isolate danger (e.g., silencing alarms or closing isolated valves)",
      "Technician dispatch with the necessary tools and replacement spares",
      "On-site diagnosis, repair, or system isolation",
      "System testing and restoration of normal safety standby mode"
    ],
    equipment: [
      { name: "Emergency Repair Kit", desc: "Specialized tools, thread sealants, replacement gaskets, and isolated bypass valves." },
      { name: "Replacement Control Cards", desc: "Spare loop cards and mainboards for common addressable alarm systems." },
      { name: "Temporary Extinguishers", desc: "Standby extinguishers to temporarily replace discharged cylinders during refilling." }
    ],
    faqs: [
      { question: "What should I do if my fire alarm is ringing but there is no fire?", answer: "First, perform a thorough check of the area showing the alarm to confirm there is indeed no fire. If it is a false alarm, you can press the 'Silence Alarm' button on your panel. If the alarm persists or goes off again, call our emergency hotline immediately to isolate the faulty detector." },
      { question: "What is your emergency response time in Varanasi?", answer: "We aim to have a technician on-site within 1-2 hours for locations within Varanasi city limits (Lanka, Cantt, Sigra, Bhelupur) and within 3-4 hours for surrounding Purvanchal districts." }
    ]
  },
  {
    slug: "fire-consultation",
    title: "Fire Safety Consultation",
    shortDesc: "Expert guidance on National Building Code (NBC) compliance, fire layouts, and local safety audits.",
    iconName: "FileText",
    imageUrl: "/images/industries/government.png",
    overview: [
      "Navigating the complex maze of fire safety codes, local fire department regulations, and NBC requirements can be overwhelming. Shri Balaji Fire Security Services provides professional consultancy services for builders, architects, hotels, and factories.",
      "We prepare fire layout drawings, conduct fire load calculations, design code-compliant layouts, and assist clients in obtaining Fire Safety Certificates / clearances from the Varanasi fire department."
    ],
    benefits: [
      "Ensures designs are 100% compliant before construction begins, saving cost.",
      "Speeds up the process of local fire department clearances.",
      "Optimizes fire protection system sizing, avoiding over-design or under-design.",
      "Identifies potential safety loopholes and offers cost-effective solutions."
    ],
    features: [
      "NBC (National Building Code of India) Part 4 compliance checks",
      "Preparation of Fire Layout Drawings and Evacuation Plans",
      "Fire Load calculations and zoning analysis",
      "Assistance in preparing documents for Fire Safety Certificate",
      "Training seminars and mock fire drill layouts"
    ],
    applications: [
      "Architects designing new commercial or residential structures",
      "New hotels, restaurants, and hospitals seeking local licensing",
      "Factories expanding production lines or chemical storage",
      "Educational complexes upgrading safety infrastructure"
    ],
    process: [
      "Reviewing building blueprints and architectural plans",
      "Identifying occupancy classification (Group A to Group J under NBC)",
      "Recommending required active (sprinklers, alarms) and passive (fire doors) systems",
      "Drafting fire protection drawings and evacuation maps",
      "Liasing with local fire inspectors and coordinating site compliance checks"
    ],
    equipment: [
      { name: "CAD Design Stations", desc: "High-spec workstations with CAD software for drawing precision fire layout plans." },
      { name: "Fire Load Software", desc: "Analytical tools to calculate fire load densities based on building materials." },
      { name: "Compliance Database", desc: "Up-to-date repository of national building codes and local UP state fire regulations." }
    ],
    faqs: [
      { question: "What is a Fire Safety Certificate and is it mandatory?", answer: "A Fire Safety Certificate is a document issued by the local Fire Services department certifying that a building is equipped with adequate fire safety and control systems as per the NBC. It is mandatory for commercial buildings, educational institutions, hospitals, hotels, and high-rise apartments." },
      { question: "Can you help renew an expired Fire Safety Certificate?", answer: "Yes. We inspect your existing fire safety systems, perform required testing and servicing, prepare the documentation, and assist you through the local inspection and renewal process." }
    ]
  },
  {
    slug: "site-inspection",
    title: "Site Inspection",
    shortDesc: "Free preliminary inspections to audit existing fire systems and propose optimized safety upgrades.",
    iconName: "Eye",
    imageUrl: "/images/projects/sunbeam-school.jpg",
    overview: [
      "Don't wait for a fire or a compliance audit to find out if your systems are working. Shri Balaji Fire Security Services offers professional on-site inspections for commercial, industrial, and residential premises in Varanasi.",
      "Our engineers assess your fire risks, test pressure gauges, check for cylinder expiration, review evacuation routes, and provide a detailed report outlining compliance levels and recommended safety upgrades."
    ],
    benefits: [
      "Provides a clear, objective picture of your current safety status.",
      "Detects hidden issues like empty cylinders, blocked pipes, or dead alarms.",
      "Provides a free, no-obligation quote for necessary repairs or upgrades.",
      "Boosts safety confidence among facility staff and management."
    ],
    features: [
      "Visual inspections of all fire extinguishers and safety signs",
      "Pressure checks on fire alarm control panels and battery backups",
      "Functional testing of landing valves and hose connections",
      "Assessment of emergency exits, fire doors, and path obstructions",
      "Compliance audit against local UP state fire norms"
    ],
    applications: [
      "Businesses preparing for an upcoming fire department audit",
      "Facility managers taking over new properties",
      "Schools and colleges prior to the start of the academic year",
      "Residential societies wishing to audit their safety readiness"
    ],
    process: [
      "Scheduling a convenient inspection date through our site/call/WhatsApp",
      "Walkthrough of your entire premises by our safety engineer",
      "Visual and basic functional testing of existing fire gear",
      "Preparation of a detailed inspection checklist and gap analysis",
      "Submission of report with prioritized recommendations and a custom quote"
    ],
    equipment: [
      { name: "Inspection Checklist", desc: "Comprehensive standardized safety inspection log aligned with IS codes and NBC." },
      { name: "Pressure Gauge Tester", desc: "Device to verify accuracy of extinguisher and hose line pressure indicators." },
      { name: "Sound Level Meter", desc: "Device to verify alarm audibility in the farthest corners of the site." }
    ],
    faqs: [
      { question: "Do you charge for the initial site inspection?", answer: "We offer free preliminary site inspections for businesses, hotels, schools, and apartment societies within Varanasi city limits. Outstation audits or detailed engineering assessments may incur nominal charges." },
      { question: "How long does a site inspection take?", answer: "A typical site inspection takes between 1 and 3 hours depending on the size, layout, and complexity of the building." }
    ]
  }
];
