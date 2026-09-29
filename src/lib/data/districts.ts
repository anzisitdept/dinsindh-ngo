export interface DistrictInfo {
  id: string;
  name: string;
  region: "Upper Sindh" | "Central Sindh" | "Lower Sindh" | "Coastal / Desert Sindh";
  isHeadquarters?: boolean;
  activeProgramsCount: number;
  projectsCount: number;
  activePrograms: string[];
  keyProjects: string[];
  keyUnionCouncils?: string[];
  cboCount: number;
  description: string;
  svgPath: string;
  labelCoords: { x: number; y: number };
  landmarkName?: string;
  landmarkImage?: string;
  shortKeyPoints?: string[];
}

export const SINDH_DISTRICTS: DistrictInfo[] = [
  {
    id: "shikarpur",
    name: "Shikarpur",
    region: "Upper Sindh",
    isHeadquarters: true,
    activeProgramsCount: 3,
    projectsCount: 14,
    activePrograms: ["Peace & Harmony", "Livelihoods", "WASH"],
    keyProjects: [
      "Provincial Headquarters & Secretariat",
      "Peace & Tolerance Cultural Caravan",
      "Community Water Point Construction"
    ],
    keyUnionCouncils: ["Sultan Kot", "Garhi Yasin", "Khanpur", "Madeji"],
    cboCount: 12,
    description: "Foundational headquarters of DIN Pakistan. Central operational base managing all community mobilization, peace building, rural livelihoods, and clean water access.",
    landmarkName: "Shahi Bazaar & Historic Secretariat",
    landmarkImage: "/shikarpur.jpg",
    shortKeyPoints: [
      "Provincial Headquarters & Command Base",
      "Peace & Tolerance Cultural Caravan Hub",
      "Rural Water, Sanitation & Livelihood Works"
    ],
    svgPath: "M 200,90 L 260,85 L 270,140 L 210,145 Z",
    labelCoords: { x: 235, y: 115 }
  },
  {
    id: "jacobabad",
    name: "Jacobabad",
    region: "Upper Sindh",
    activeProgramsCount: 3,
    projectsCount: 8,
    activePrograms: ["Peace & Harmony", "Livelihoods", "WASH"],
    keyProjects: [
      "Post-Flood WASH & Shelter Recovery",
      "Community Peace Councils & Dialogue",
      "Voter Awareness & Legal Literacy Drive"
    ],
    keyUnionCouncils: ["Thul", "Garhi Khairo"],
    cboCount: 6,
    description: "Border district characterized by extreme summer temperatures and high flood risk. Focus area for WASH infrastructure, peace building, and rural livelihoods.",
    landmarkName: "Victoria Clock Tower & Frontier Base",
    landmarkImage: "/jacbd.jfif",
    shortKeyPoints: [
      "Post-Flood Recovery & Water Access Base",
      "WASH Clean Water & Solar Pump Stations",
      "Legal Literacy & Rights Awareness Drive"
    ],
    svgPath: "M 180,45 L 260,35 L 250,90 L 190,95 Z",
    labelCoords: { x: 220, y: 68 }
  },
  {
    id: "kashmor",
    name: "Kashmor & Kandhkot",
    region: "Upper Sindh",
    activeProgramsCount: 3,
    projectsCount: 6,
    activePrograms: ["Peace & Harmony", "Livelihoods", "WASH"],
    keyProjects: [
      "Natak Mandli Peace Revival",
      "Women Artisan & Livelihood Centers"
    ],
    keyUnionCouncils: ["Tangwani", "Kandhkot"],
    cboCount: 5,
    description: "Border district along the Indus riverbed, with Kandhkot as a key operational union council. Focus on inter-tribal peace building, rural livelihoods, and clean water access.",
    landmarkName: "Guddu Barrage & Indus River Basin",
    landmarkImage: "/kashmore.jfif",
    shortKeyPoints: [
      "Natak Mandali Peace & Harmony Revival",
      "Women Artisan Enterprise Network",
      "Rural Micro-Enterprise & Livelihood Aid"
    ],
    svgPath: "M 255,40 L 335,25 L 350,75 L 265,85 Z",
    labelCoords: { x: 300, y: 55 }
  },
  {
    id: "larkana",
    name: "Larkana",
    region: "Upper Sindh",
    activeProgramsCount: 2,
    projectsCount: 5,
    activePrograms: ["Livelihoods", "WASH"],
    keyProjects: [
      "Registrar of Societies Registration & Legal Anchor",
      "Livelihood Rehabilitation & Clean Water Access"
    ],
    keyUnionCouncils: ["Larkana", "Mirob"],
    cboCount: 4,
    description: "Northern Sindh plains district where DIN holds its Societies Act registration and runs rural livelihood and clean water interventions alongside federated village committees.",
    landmarkName: "Mohenjo-Daro UNESCO World Heritage",
    landmarkImage: "/larakana.jfif",
    shortKeyPoints: [
      "DIN Official Charter & Registration Base",
      "Community Water Point Construction",
      "Women's Enterprise & Skills Centers"
    ],
    svgPath: "M 105,40 L 175,25 L 185,80 L 115,95 Z",
    labelCoords: { x: 145, y: 60 }
  },
  {
    id: "sukkur",
    name: "Sukkur",
    region: "Upper Sindh",
    activeProgramsCount: 2,
    projectsCount: 7,
    activePrograms: ["Peace & Harmony", "WASH"],
    keyProjects: [
      "Regional Donor Coordination Secretariat",
      "Community Peace Councils & Dialogue"
    ],
    cboCount: 4,
    description: "Major regional urban and logistics center. DIN coordinates regional donor meetings, peacebuilding forums, and water infrastructure here.",
    svgPath: "M 270,85 L 345,75 L 355,125 L 275,135 Z",
    labelCoords: { x: 310, y: 105 }
  },
  {
    id: "ghotki",
    name: "Ghotki",
    region: "Upper Sindh",
    activeProgramsCount: 3,
    projectsCount: 5,
    activePrograms: ["Livelihoods", "Peace & Harmony", "WASH"],
    keyProjects: [
      "Landless Worker Legal Literacy",
      "Rural Handpump Installation"
    ],
    cboCount: 3,
    description: "Industrial and canal-command border district. Interventions center on landless worker rights, community peace forums, and clean drinking water.",
    svgPath: "M 345,75 L 435,60 L 445,115 L 355,125 Z",
    labelCoords: { x: 395, y: 92 }
  },
  {
    id: "khairpur",
    name: "Khairpur",
    region: "Upper Sindh",
    activeProgramsCount: 2,
    projectsCount: 5,
    activePrograms: ["Livelihoods", "Peace & Harmony"],
    keyProjects: [
      "Community Legal Literacy & Tenancy Rights",
      "Women Artisan Enterprise Centers"
    ],
    cboCount: 3,
    description: "Large inland district of date-palm groves and rural hamlets. DIN works with tenant households and women artisan groups.",
    svgPath: "M 275,135 L 365,125 L 375,200 L 285,190 Z",
    labelCoords: { x: 325, y: 162 }
  },
  {
    id: "dadu",
    name: "Dadu",
    region: "Central Sindh",
    activeProgramsCount: 3,
    projectsCount: 6,
    activePrograms: ["Livelihoods", "Peace & Harmony", "WASH"],
    keyProjects: [
      "Post-Flood Women Livelihood Rehabilitation",
      "Resilient Shelter & Water Access"
    ],
    cboCount: 3,
    description: "Flanked by the Kirthar mountains and Manchhar lake. High flood vulnerability area requiring resilient shelter design and livestock replacement.",
    svgPath: "M 160,150 L 245,145 L 230,245 L 150,230 Z",
    labelCoords: { x: 195, y: 190 }
  },
  {
    id: "naushahro-feroze",
    name: "Naushahro Feroze",
    region: "Central Sindh",
    activeProgramsCount: 1,
    projectsCount: 4,
    activePrograms: ["Livelihoods"],
    keyProjects: ["Women Livelihood & Enterprise Centers"],
    cboCount: 2,
    description: "Central agrarian belt. Programs focus on rural livelihoods, women enterprise groups, and community savings schemes.",
    svgPath: "M 245,190 L 305,185 L 295,250 L 235,245 Z",
    labelCoords: { x: 270, y: 215 }
  },
  {
    id: "benazirabad",
    name: "Shaheed Benazirabad",
    region: "Central Sindh",
    activeProgramsCount: 1,
    projectsCount: 3,
    activePrograms: ["Peace & Harmony"],
    keyProjects: ["Women Civic Participation & Awareness Drive"],
    cboCount: 1,
    description: "Central administrative crossroads. Support for female civic participation, legal awareness, and local governance dialogue.",
    svgPath: "M 275,245 L 345,240 L 335,310 L 265,305 Z",
    labelCoords: { x: 305, y: 275 }
  },
  {
    id: "sanghar",
    name: "Sanghar",
    region: "Central Sindh",
    activeProgramsCount: 2,
    projectsCount: 3,
    activePrograms: ["Livelihoods", "WASH"],
    keyProjects: ["Flood-Affected Household Livelihood Recovery"],
    cboCount: 1,
    description: "Stretches from the Indus plains to the Thar desert edge. Focus on household livelihoods and community water points.",
    svgPath: "M 345,200 L 445,190 L 455,300 L 345,290 Z",
    labelCoords: { x: 395, y: 245 }
  },
  {
    id: "jamshoro",
    name: "Jamshoro",
    region: "Lower Sindh",
    activeProgramsCount: 1,
    projectsCount: 2,
    activePrograms: ["WASH"],
    keyProjects: ["Drinking Water Handpump Project"],
    cboCount: 1,
    description: "University and hill-tract district. Technical collaboration with university researchers on water quality.",
    svgPath: "M 150,230 L 225,225 L 205,335 L 135,315 Z",
    labelCoords: { x: 178, y: 280 }
  },
  {
    id: "hyderabad",
    name: "Hyderabad",
    region: "Lower Sindh",
    activeProgramsCount: 1,
    projectsCount: 4,
    activePrograms: ["Peace & Harmony"],
    keyProjects: ["SPO Provincial Network Advocacy"],
    cboCount: 0,
    description: "Second largest city in Sindh. Hub for regional NGO network meetings and government dialogue.",
    svgPath: "M 225,315 L 275,310 L 265,360 L 215,355 Z",
    labelCoords: { x: 245, y: 335 }
  },
  {
    id: "tando-allahyar",
    name: "Tando Allahyar",
    region: "Lower Sindh",
    activeProgramsCount: 2,
    projectsCount: 2,
    activePrograms: ["Livelihoods"],
    keyProjects: ["Artisan Guild Crafts Marketing"],
    cboCount: 0,
    description: "Handicraft and market center. Focus on traditional Sindhi embroidery marketing.",
    svgPath: "M 275,310 L 325,305 L 315,360 L 265,360 Z",
    labelCoords: { x: 295, y: 335 }
  },
  {
    id: "tm-khan",
    name: "Tando Muhammad Khan",
    region: "Lower Sindh",
    activeProgramsCount: 2,
    projectsCount: 2,
    activePrograms: ["WASH"],
    keyProjects: ["Water Filtration & Handpump Works"],
    cboCount: 0,
    description: "Low-lying riverine district vulnerable to heavy monsoon inundation.",
    svgPath: "M 215,355 L 265,360 L 255,415 L 205,405 Z",
    labelCoords: { x: 235, y: 382 }
  },
  {
    id: "umerkot",
    name: "Umerkot",
    region: "Coastal / Desert Sindh",
    activeProgramsCount: 3,
    projectsCount: 2,
    activePrograms: ["Peace & Harmony", "WASH"],
    keyProjects: ["Interfaith Dialogue & Desert Solar Well Initiative"],
    cboCount: 0,
    description: "Historic multi-cultural desert border district. Active interfaith peace advocacy and deep water wells.",
    svgPath: "M 345,290 L 445,280 L 435,380 L 335,370 Z",
    labelCoords: { x: 390, y: 330 }
  },
  {
    id: "badin",
    name: "Badin",
    region: "Coastal / Desert Sindh",
    activeProgramsCount: 3,
    projectsCount: 3,
    activePrograms: ["WASH"],
    keyProjects: ["Coastal Cyclone & Monsoon Recovery"],
    cboCount: 0,
    description: "Coastal district affected by sea erosion, storm surges, and heavy monsoon flooding.",
    svgPath: "M 255,415 L 340,405 L 325,480 L 240,465 Z",
    labelCoords: { x: 285, y: 440 }
  },
  {
    id: "thatta",
    name: "Thatta",
    region: "Coastal / Desert Sindh",
    activeProgramsCount: 3,
    projectsCount: 3,
    activePrograms: ["WASH"],
    keyProjects: ["Indus Delta Water & Sanitation Works"],
    cboCount: 0,
    description: "Indus Delta coastal region. Clean drinking water and sanitation services for remote delta settlements.",
    svgPath: "M 135,345 L 205,350 L 195,445 L 120,420 Z",
    labelCoords: { x: 165, y: 395 }
  },
  {
    id: "karachi",
    name: "Karachi Division",
    region: "Coastal / Desert Sindh",
    activeProgramsCount: 2,
    projectsCount: 3,
    activePrograms: ["Provincial Advocacy", "Donor Liaison"],
    keyProjects: ["Provincial NGO Network Secretariat Collaboration"],
    cboCount: 0,
    description: "Provincial capital. DIN maintains institutional liaison with government ministries, UN headquarters, and national donor consortia.",
    svgPath: "M 75,370 L 135,360 L 125,435 L 65,420 Z",
    labelCoords: { x: 100, y: 398 }
  }
];

// The four districts DIN Pakistan actively operates field programmes in today.
export const CORE_OPERATING_DISTRICT_IDS = ["shikarpur", "jacobabad", "kashmor", "larkana"] as const;

export const CORE_OPERATING_DISTRICTS: DistrictInfo[] = CORE_OPERATING_DISTRICT_IDS.map((id) => {
  const district = SINDH_DISTRICTS.find((d) => d.id === id);
  if (!district) {
    throw new Error(`CORE_OPERATING_DISTRICT_IDS references unknown district: ${id}`);
  }
  return district;
});
