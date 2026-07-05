export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: "General" | "Fire Extinguishers" | "Systems" | "AMC & Maintenance" | "Pricing & Process" | "Compliance & Safety" | "Support & Contact";
}

export const faqs: FAQItem[] = [
  // General
  {
    id: 1,
    category: "General",
    question: "What services does Shri Balaji Fire Security Services provide?",
    answer: "We provide complete, end-to-end fire safety solutions including supply, installation, testing, commissioning, refilling, AMC (Annual Maintenance Contracts), and servicing of fire extinguishers, fire alarm systems, hydrants, automatic sprinkler systems, clean-agent gas suppression systems, and kitchen hood suppression. We also provide professional safety consultation, fire NOC documentation assistance, and safety audits."
  },
  {
    id: 2,
    category: "General",
    question: "Which industries do you serve?",
    answer: "We serve 14+ sectors including commercial offices, retail buildings, shopping malls, hotels, restaurants, hospitals, educational institutions, banks, industrial manufacturing plants, warehouses, IT companies, government offices, and residential apartment projects."
  },
  {
    id: 3,
    category: "General",
    question: "Are your installations code-compliant?",
    answer: "Yes, absolutely. All our system designs, installations, and maintenance routines follow the National Building Code of India (NBC Part 4), Bureau of Indian Standards (IS codes), and local Uttar Pradesh state fire department regulations required for obtaining and renewing Fire NOCs."
  },
  {
    id: 4,
    category: "General",
    question: "Do you provide a free site inspection?",
    answer: "Yes, we offer free preliminary site inspections for businesses, hotels, hospitals, and housing societies within Varanasi city limits to evaluate your fire risks and provide a customized compliance upgrade quote."
  },
  {
    id: 5,
    category: "General",
    question: "How do I request a quote?",
    answer: "You can request a quote by filling out our online 'Request Quote' form, emailing us at sribalajifireservices1974@gmail.com, calling our office directly at +91-7007447595, or clicking the floating WhatsApp button to message us."
  },
  {
    id: 6,
    category: "General",
    question: "Do you serve emergency requirements?",
    answer: "Yes, we provide emergency fire safety support 24/7 for urgent pipeline leakage repairs, persistent fire alarm loop faults, pressure drops in line mains, and immediate cylinder refilling requests."
  },
  {
    id: 7,
    category: "General",
    question: "What areas do you cover?",
    answer: "We are based in Varanasi and cover the entire city (including Lanka, Bhelupur, Sigra, Cantt, Maldahiya, Mahmoorganj, Pandeypur, BHU, Ramnagar, etc.) along with nearby Purvanchal districts like Chandauli, Mughalsarai (DDU Nagar), Bhadohi, Jaunpur, Mirzapur, and Ghazipur."
  },
  {
    id: 8,
    category: "General",
    question: "Are your engineers certified?",
    answer: "Yes, all our design, installation, and field service work is executed by trained safety engineers and certified technicians who specialize in active firefighting systems and national fire codes."
  },
  {
    id: 9,
    category: "General",
    question: "Can you handle large industrial projects?",
    answer: "Yes, we have a dedicated industrial division that handles heavy-duty sprinkler grids, high-capacity hydrant pump rooms, deluge systems, and gas suppression total flooding layouts for factories, warehouses, and manufacturing plants."
  },
  {
    id: 10,
    category: "General",
    question: "Do you provide documentation for compliance?",
    answer: "Yes, we provide official pressure test reports, system commissioning certificates, material check lists, and annual service logs required by insurance firms and government inspectors for Fire NOC clearances."
  },
  // Fire Extinguishers
  {
    id: 11,
    category: "Fire Extinguishers",
    question: "What types of fire extinguishers do you supply?",
    answer: "We supply a full range of extinguishers including ABC Dry Chemical Powder (MAP 50% & 90%), Carbon Dioxide (CO2) for electrical hazards, Water and Foam types, and Clean Agent (Halotron / HFC alternatives) residue-free units. Sizes range from 1kg to 9kg portable and 22.5kg to 50kg trolley-mounted models."
  },
  {
    id: 12,
    category: "Fire Extinguishers",
    question: "How do I know which extinguisher I need?",
    answer: "It depends on the fire hazard profile of your room. Class A (wood, paper) needs water/ABC; Class B (liquids) needs foam/CO2/ABC; Class C (gases) needs ABC/CO2; and electrical fires require CO2 or Clean Agent units. Our engineer will recommend the correct combinations during our site inspection."
  },
  {
    id: 13,
    category: "Fire Extinguishers",
    question: "How often should extinguishers be refilled?",
    answer: "By standard guidelines, extinguishers must be refilled immediately after any use (even partial discharge) or upon reaching their chemical expiration date (typically every 1 to 3 years depending on the type and UP state fire norms)."
  },
  {
    id: 14,
    category: "Fire Extinguishers",
    question: "Do you offer extinguisher refilling and recharging?",
    answer: "Yes, we have a certified refilling center in Varanasi. We inspect, clean, sieve chemical powders, replace gaskets/valves, refill propellant nitrogen gas, and pressure-test each cylinder during recharge."
  },
  {
    id: 15,
    category: "Fire Extinguishers",
    question: "Can you refill extinguishers from other brands?",
    answer: "Yes, we can refill and service cylinders manufactured by other brands, provided they pass our initial visual check and hydraulic integrity tests."
  },
  {
    id: 16,
    category: "Fire Extinguishers",
    question: "What is the lifespan of a fire extinguisher?",
    answer: "High-quality cylinders can last 10-15 years, provided they undergo mandatory hydraulic pressure testing (hydrotesting) every 5 years to verify their shell strength."
  },
  {
    id: 17,
    category: "Fire Extinguishers",
    question: "Do you provide extinguisher mounting and signage?",
    answer: "Yes. All our sales and service installations include heavy-duty wall brackets, anchoring, and standard photoluminescent (glow-in-the-dark) locator and operating instruction signs."
  },
  {
    id: 18,
    category: "Fire Extinguishers",
    question: "How quickly can you refill extinguishers?",
    answer: "For standard units within Varanasi, we offer a fast turnaround of 24 to 48 hours. For critical locations, we can provide standby backup cylinders so your facility is never left unprotected."
  },
  // Systems
  {
    id: 19,
    category: "Systems",
    question: "What is a fire alarm system?",
    answer: "A fire alarm system is an integrated network of smoke/heat/flame detectors, manual call break-glass points, sounders (hooters), and a central control panel that automatically detects fire symptoms and alerts building occupants."
  },
  {
    id: 20,
    category: "Systems",
    question: "Do you install addressable fire alarm systems?",
    answer: "Yes, we install intelligent addressable systems (where each detector has a unique ID and communicates its exact location to the panel) as well as conventional cost-effective zoned alarm panels."
  },
  {
    id: 21,
    category: "Systems",
    question: "What is a fire hydrant system?",
    answer: "It is an active firefighting system consisting of a network of high-pressure steel pipes connected to a continuous water reservoir. It allows firefighters to connect hoses at landing valves located throughout the premises to discharge massive water flow."
  },
  {
    id: 22,
    category: "Systems",
    question: "Do you install fire pumps and pump rooms?",
    answer: "Yes, we design and set up complete fire pump rooms including main electrical pumps, jockey pumps for pressure maintenance, and backup diesel-engine fire pumps with auto-start control panels."
  },
  {
    id: 23,
    category: "Systems",
    question: "How do automatic sprinkler systems work?",
    answer: "Sprinklers have a heat-sensitive glass bulb holding a liquid. When exposed to fire heat (typically 68°C), the liquid expands, shattering the glass bulb and releasing pressurized water directly over the flame."
  },
  {
    id: 24,
    category: "Systems",
    question: "Where are sprinkler systems required?",
    answer: "They are generally required by code in shopping malls, hotel lobbies and rooms, basements, high-rise buildings (above 15 meters), warehouses, and manufacturing plants with high fire load."
  },
  {
    id: 25,
    category: "Systems",
    question: "What is a fire suppression system?",
    answer: "A fire suppression system uses chemical gases (like FM-200, Novec 1230, or CO2) or wet chemicals instead of water to extinguish fires automatically, making it ideal for electronics and kitchen grease hazards."
  },
  {
    id: 26,
    category: "Systems",
    question: "Which suppression system is best for server rooms?",
    answer: "Gas-based clean agents (FM-200 or Novec 1230) are best. They displace fire in under 10 seconds, are non-conductive, non-toxic, leave zero residue, and won't harm computer servers or wiring."
  },
  {
    id: 27,
    category: "Systems",
    question: "Do you provide kitchen fire suppression?",
    answer: "Yes, we install specialized wet-chemical suppression systems under commercial kitchen hoods to extinguish cooking oil and grease fires automatically before they enter duct systems."
  },
  {
    id: 28,
    category: "Systems",
    question: "Can you integrate alarms with suppression systems?",
    answer: "Yes. Addressable alarm panels are routinely integrated with gas release modules so detection cross-zones automatically trigger dampers, sound warnings, and discharge suppression gas."
  },
  // AMC & Maintenance
  {
    id: 29,
    category: "AMC & Maintenance",
    question: "What does your AMC cover?",
    answer: "Our Annual Maintenance Contract covers quarterly scheduled inspections, testing of pressure gauges, alarm sensors, call points, pump battery checks, lubricating valves, pipeline flushing, and emergency breakdown calls."
  },
  {
    id: 30,
    category: "AMC & Maintenance",
    question: "Why do I need an AMC?",
    answer: "Fire systems lie dormant until an emergency. Regular AMC audits ensure pumps don't seize, alarm batteries don't fail, and pipes haven't leaked, keeping the system fully operational and compliant for NOC audits."
  },
  {
    id: 31,
    category: "AMC & Maintenance",
    question: "How often are AMC visits scheduled?",
    answer: "We standardly perform 4 quarterly routine inspection visits per year, but can schedule monthly or bi-monthly inspections for high-risk industrial units and hospitals."
  },
  {
    id: 32,
    category: "AMC & Maintenance",
    question: "Do you provide testing and commissioning?",
    answer: "Yes. We execute hydrostatic pressure testing (up to 15 kg/cm²), line flushing, battery load tests, and loop mapping before final handovers of new projects."
  },
  {
    id: 33,
    category: "AMC & Maintenance",
    question: "Can you take over maintenance of existing systems?",
    answer: "Yes, we can take over the AMC of systems installed by other contractors, following a detailed initial site audit and system normalization check."
  },
  {
    id: 34,
    category: "AMC & Maintenance",
    question: "Do you provide compliance reports after servicing?",
    answer: "Yes, our engineers provide signed quarterly service reports, pressure test certificates, and equipment logs that serve as proof of maintenance for insurance and fire inspectors."
  },
  {
    id: 35,
    category: "AMC & Maintenance",
    question: "What happens if a system fails an inspection?",
    answer: "If we find any faults or expired components during an AMC inspection, we detail them in our report and submit a prioritized proposal for repairs or spares replacement."
  },
  {
    id: 36,
    category: "AMC & Maintenance",
    question: "Do you offer customized AMC plans?",
    answer: "Yes. We offer both comprehensive AMCs (covering routine service + cost of standard spare replacements) and non-comprehensive AMCs (covering labor and inspections only) tailored to your budget."
  },
  // Pricing & Process
  {
    id: 37,
    category: "Pricing & Process",
    question: "How is pricing determined?",
    answer: "Pricing is based on the specific type of systems, area coverage (sq ft), equipment quantities, and complexity. We provide transparent itemized quotes following our site survey."
  },
  {
    id: 38,
    category: "Pricing & Process",
    question: "Do you provide free quotations?",
    answer: "Yes, all our initial safety compliance proposals and supply quotes are provided completely free and with no obligation."
  },
  {
    id: 39,
    category: "Pricing & Process",
    question: "What is your typical project process?",
    answer: "Our workflow is: Site Inspection & Risk Assessment → Design & Custom Quotation → Order Approval → Supply & Installation → Pressure Testing & loop mapping → Commissioning & Handover → AMC Maintenance."
  },
  {
    id: 40,
    category: "Pricing & Process",
    question: "How long does installation take?",
    answer: "Minor extinguisher set ups take 1-2 days. Complex fire alarm or wet sprinkler retrofits in commercial blocks can take 2 to 6 weeks, depending on project scale and structural layouts."
  },
  {
    id: 41,
    category: "Pricing & Process",
    question: "Do you offer maintenance after installation?",
    answer: "Yes. All our new system installations come with a 1-year warranty and complimentary initial quarterly maintenance service, after which we transition the site into an AMC."
  },
  {
    id: 42,
    category: "Pricing & Process",
    question: "Can you work within facility operating hours?",
    answer: "Yes. For hotels, hospitals, and busy corporate offices, we plan our piping and drilling tasks during off-peak hours or night shifts to ensure zero disruption to your business."
  },
  // Compliance & Safety
  {
    id: 43,
    category: "Compliance & Safety",
    question: "Can you help with Fire NOC?",
    answer: "Yes. We help clients obtain and renew their Fire Safety Certificate (NOC) by designing compliant systems, preparing layout maps, executing pressure tests, and facilitating inspector reviews."
  },
  {
    id: 44,
    category: "Compliance & Safety",
    question: "Do you conduct fire safety audits?",
    answer: "Yes, we perform complete safety audits of commercial, institutional, and industrial buildings to identify fire hazards, exit blockages, and system compliance gaps."
  },
  {
    id: 45,
    category: "Compliance & Safety",
    question: "Do you provide fire safety training or drills guidance?",
    answer: "Yes. We conduct hands-on training sessions for client security and facility staff, teaching them how to pull alarms, operate fire hose reels, and discharge extinguishers correctly."
  },
  {
    id: 46,
    category: "Compliance & Safety",
    question: "Are your products IS-marked?",
    answer: "Yes, all products we supply (extinguishers, pipes, cables, panels, sprinklers) are ISI-marked, CE certified, or UL/FM approved to ensure premium safety standards."
  },
  {
    id: 47,
    category: "Compliance & Safety",
    question: "How do I maintain compliance year-round?",
    answer: "To maintain compliance, ensure your fire extinguishers are refilled on time, execute a professional AMC contract for quarterly checks, keep exits unblocked, and maintain a written logbook of safety inspections."
  },
  // Support & Contact
  {
    id: 48,
    category: "Support & Contact",
    question: "How can I contact you in an emergency?",
    answer: "In a fire safety emergency or system failure, call our 24/7 priority emergency line at +91-9455472453 immediately for advice and technician dispatch."
  },
  {
    id: 49,
    category: "Support & Contact",
    question: "Do you offer support via WhatsApp?",
    answer: "Yes. You can click the green floating WhatsApp widget on our website to initiate a chat for service bookings, refilling requests, or photo-sharing of system issues."
  },
  {
    id: 50,
    category: "Support & Contact",
    question: "What information should I provide for a quote?",
    answer: "To get an accurate quote, please provide your business location, building type (e.g. hotel, factory), floor area (sq ft), number of floors, and any existing fire safety systems that need upgrading or refilling."
  }
];
