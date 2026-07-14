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
  }
];
