export interface EquipmentItem {
  slug: string;
  title: string;
  desc: string;
  imageUrl: string;
  spec: string;
  category: "Extinguishers" | "Suppression" | "Hydrants" | "Alarms" | "Sprinklers";
}

export const equipmentList: EquipmentItem[] = [
  {
    slug: "fire-extinguisher-ball",
    title: "Fire Extinguisher Ball",
    category: "Extinguishers",
    desc: "Self-activating fire extinguisher ball. Automatically bursts and disperses dry chemical powder within 3-5 seconds of flame contact.",
    spec: "Auto-activation / Coverage: 3 m³ / Weight: 1.3kg",
    imageUrl: "/images/equipment/fire_extinguisher_ball.png"
  },
  {
    slug: "fire-extinguisher",
    title: "Fire Extinguisher",
    category: "Extinguishers",
    desc: "Standard portable fire extinguisher cylinders filled with ABC dry powder, CO2, water, or foam agents for instant fire response.",
    spec: "IS 15683 / Capacity: 2kg to 9kg / ABC, CO2, Foam, Water",
    imageUrl: "/images/equipment/fire_extinguisher.png"
  },
  {
    slug: "fire-suppression-cylinder",
    title: "Gas Fire Suppression Cylinder",
    category: "Suppression",
    desc: "Heavy-duty high-pressure storage cylinders for FM-200 and Novec 1230 clean agent gases, ideal for server rooms and data centers.",
    spec: "Red-line seamless steel / Operating Pressure: 25-42 Bar / UL Listed",
    imageUrl: "/images/equipment/fire_suppression.png"
  },
  {
    slug: "fire-jockey-pump",
    title: "Fire Jockey Pump Set",
    category: "Hydrants",
    desc: "Multi-stage vertical jockey pump designed to automatically maintain steady static pressure in the fire hydrant pipeline.",
    spec: "Pressure range: 7-8 kg/cm² / Auto-start Switch / Cast Iron body",
    imageUrl: "/images/equipment/jockey_pump.png"
  },
  {
    slug: "main-fire-pump",
    title: "Main Fire Pump Set",
    category: "Hydrants",
    desc: "High-capacity electric horizontal split-case pump set serving as the primary pressure booster for industrial hydrant rings.",
    spec: "Flow: 2280 LPM (75 HP) / Head: 70m / NBC compliant",
    imageUrl: "/images/equipment/main_pump.png"
  },
  {
    slug: "rrl-hose-pipe",
    title: "RRL Hose Pipe Set",
    category: "Hydrants",
    desc: "Reinforced rubber-lined lay-flat fire hose. Durable, weather-resistant, and fitted with instantaneous gunmetal couplings.",
    spec: "Length: 15m / Diameter: 63mm / Test Pressure: 21 kg/cm² / IS 636 Type-A",
    imageUrl: "/images/equipment/rrl_hose_pipe.png"
  },
  {
    slug: "automatic-sprinkler-head",
    title: "Automatic Sprinkler Head",
    category: "Sprinklers",
    desc: "High-sensitivity quartzoid glass bulb automatic sprinkler head. Bulbs break at rated temperatures to discharge water instantly.",
    spec: "Activation Temp: 68°C / Thread: 1/2\" NPT / K-Factor: 5.6 / IS 15105",
    imageUrl: "/images/equipment/sprinkler.png"
  },
  {
    slug: "two-way-fire-inlet",
    title: "Two-Way Fire Draught Inlet",
    category: "Hydrants",
    desc: "Two-way breeching inlet connection fitted with non-return valves, allowing fire brigades to pump water into the wet riser main.",
    spec: "Inlets: 2 x 63mm male coupling / Outlet: 100mm flange / IS 904",
    imageUrl: "/images/equipment/two_way_inlet.png"
  },
  {
    slug: "four-way-fire-inlet",
    title: "Four-Way Fire Draught Inlet",
    category: "Hydrants",
    desc: "Four-way breeching inlet main feeder connection allowing high-volume water pump-in from multiple external fire trucks.",
    spec: "Inlets: 4 x 63mm male coupling / Outlet: 150mm flange / Cast Iron & Gunmetal",
    imageUrl: "/images/equipment/four_way_inlet.png"
  },
  {
    slug: "manual-call-point",
    title: "Manual Call Point (MCP)",
    category: "Alarms",
    desc: "Wall-mounted dual-action break-glass manual alert button to trigger alarms across sectors during fire emergencies.",
    spec: "Resetable glass element / LED Status Indicator / IP54 Rated / IS 2189",
    imageUrl: "/images/equipment/manual_call_point.png"
  },
  {
    slug: "fire-alarm-control-panel",
    title: "Fire Alarm Control Panel (FACP)",
    category: "Alarms",
    desc: "Microcontroller-based master addressable fire alarm panel board receiving input loops from smoke, heat, and flame detectors.",
    spec: "Zones: 2 to 8 zone loops / Battery Backup: 24V DC / LCD Screen Display",
    imageUrl: "/images/equipment/facp_panel.png"
  },
  {
    slug: "fire-hose-reel",
    title: "Fire Hose Reel Drum Set",
    category: "Hydrants",
    desc: "Swinging wall-mounted fire hose reel drum complete with high-strength braided rubber hose and shut-off nozzles.",
    spec: "Length: 30m / Hose ID: 20mm / Working Pressure: 12 Bar / IS 884",
    imageUrl: "/images/equipment/hose_reel.png"
  },
  {
    slug: "response-indicator",
    title: "Response Indicator Alert",
    category: "Alarms",
    desc: "Ceiling-mounted remote visual LED indicator displaying detector triggers inside closed server racks, cabins, or false ceilings.",
    spec: "Operating Voltage: 24V DC / Dual Red LEDs / ABS fire-retardant body",
    imageUrl: "/images/equipment/response_indicator.png"
  },
  {
    slug: "hydrant-landing-valve",
    title: "Fire Hydrant Landing Valve",
    category: "Hydrants",
    desc: "Standard gunmetal single outlet landing valve installed in riser mains to control manual water discharge during firefighting.",
    spec: "IS 5290 Type-A / Gunmetal / Outlet: 63mm female instantaneous / Test Pressure: 21 kg/cm²",
    imageUrl: "/images/equipment/hydrant_valve.png"
  },
  {
    slug: "fire-detection-system",
    title: "Fire Detection System Console",
    category: "Alarms",
    desc: "Master graphic indicator and addressable detection system loop console for real-time sensor status tracking.",
    spec: "IS 2189 / Dynamic monitoring console / Multi-zone capacity",
    imageUrl: "/images/equipment/detection_system.png"
  },
  {
    slug: "smoke-detector",
    title: "Optical Smoke Detector",
    category: "Alarms",
    desc: "Addressable photoelectric smoke detector designed to sense smoldering fires and trigger warning signals to the FACP.",
    spec: "IS 11360 / Coverage: 60 m² / Operating Voltage: 24V DC / Dual LED",
    imageUrl: "/images/equipment/smoke_detector.png"
  },
  {
    slug: "heat-detector",
    title: "Rate of Rise Heat Detector",
    category: "Alarms",
    desc: "Dual thermistor rate-of-rise and fixed temperature heat detector for areas with high ambient dust or smoke (like kitchens/boiler rooms).",
    spec: "IS 2175 / Fixed trigger: 57°C / Rate trigger: 8.3°C/min / 24V DC",
    imageUrl: "/images/equipment/heat_detector.png"
  },
  {
    slug: "hooter-siren",
    title: "Electronic Hooter / Siren",
    category: "Alarms",
    desc: "Wall-mounted electronic sounder hooter with flash strobe lights to alert occupants of fire emergencies.",
    spec: "Sound output: 90-100 dB / Strobe flashing: 1Hz / Voltage: 24V DC",
    imageUrl: "/images/equipment/hooter_siren.png"
  },
  {
    slug: "hose-box",
    title: "Double-Hose Cabinet Box",
    category: "Hydrants",
    desc: "Weatherproof wall-mounted MS cabinet box designed to store two standard 15m RRL hoses and branch pipes next to landing valves.",
    spec: "MS sheet metal / Color: Fire Red / Dimensions: 750x600x250mm / Glass front window",
    imageUrl: "/images/equipment/hose_box.png"
  },
  {
    slug: "branch-pipe",
    title: "Hydrant Hose Branch Pipe",
    category: "Hydrants",
    desc: "Interlocking gunmetal or stainless steel branch pipe that connects hose couplings to release jet streams at fires.",
    spec: "IS 903 / Outlet size: 20mm / Inlet: 63mm instantaneous male / Stainless Steel & Gunmetal",
    imageUrl: "/images/equipment/branch_pipe.png"
  },
  {
    slug: "nozzle",
    title: "Triple-Purpose Fog Nozzle",
    category: "Hydrants",
    desc: "Adjustable flow nozzle allowing firefighters to select between jet, fog, and spray modes for gas dilution or direct attack.",
    spec: "Outlet size: 12mm to 20mm / Flow select: Jet, Spray, Shut-off / Brass chrome-plated",
    imageUrl: "/images/equipment/nozzle.png"
  },
  {
    slug: "flow-switch",
    title: "Water Flow Switch Indicator",
    category: "Sprinklers",
    desc: "Paddle-type water flow detector installed in sprinkler lines to trigger electrical alarms when water flows through pipeline grids.",
    spec: "Operating pressure: 17.2 Bar / Switch: SPDT contact rating / NEMA 4 rated / UL Listed",
    imageUrl: "/images/equipment/flow_switch.png"
  },
  {
    slug: "butterfly-valve",
    title: "Grooved Butterfly Valve",
    category: "Hydrants",
    desc: "Supervised control gear valve used to isolate flow sections in wet hydrant risers and automatic sprinkler lines.",
    spec: "Class: PN16 / Stem: SS410 / Gear operated with tamper switch monitoring / UL Listed",
    imageUrl: "/images/equipment/butterfly_valve.png"
  },
  {
    slug: "nrv-valve",
    title: "Swing Non-Return Valve (NRV)",
    category: "Hydrants",
    desc: "High-durability check valve preventing backflow of pressurized water into pumps or municipal supply lines.",
    spec: "PN16 / Flange drilling: Table E/F / Cast Iron / Swing check mechanism",
    imageUrl: "/images/equipment/nrv_valve.png"
  },
  {
    slug: "fire-door",
    title: "Metal Fire Rated Door",
    category: "Suppression",
    desc: "Heavy-duty galvanized steel door filled with insulation to restrict fire and heat spread across rooms and corridors.",
    spec: "Fire Rating: 120 Mins / Sheet thickness: 1.2mm / Honeycomb core / CBRI certified",
    imageUrl: "/images/equipment/fire_door.png"
  },
  {
    slug: "exit-sign",
    title: "LED Exit Sign Board",
    category: "Alarms",
    desc: "Slim-profile photoluminescent LED emergency exit indicator board displaying green evacuation routes.",
    spec: "Backup battery: 3 Hours / Power: 3W LED / Dual-faced green stencil lettering",
    imageUrl: "/images/equipment/exit_sign.png"
  },
  {
    slug: "emergency-light",
    title: "Dual-Beam Emergency Light",
    category: "Alarms",
    desc: "Auto-activating twin-spot emergency light that illuminates evacuation paths during main power blackouts.",
    spec: "Coverage: 100 m² / Battery backup: 4 Hours / Twin 5W LED spots / Auto-charge switch",
    imageUrl: "/images/equipment/emergency_light.png"
  },
  {
    slug: "voice-evacuation",
    title: "Voice Evacuation PA Rack",
    category: "Alarms",
    desc: "Integrated public address (PA) amplifier cabinet with microphone and speaker loop controls for emergency evacuation announcements.",
    spec: "Power output: 240W to 500W / Audio input: Handheld paging mic / Multi-zone select console",
    imageUrl: "/images/equipment/public_address.png"
  }
];
