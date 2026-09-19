export interface DistrictInfo {
  id: string;
  name: string;
  region: "Upper Sindh" | "Central Sindh" | "Lower Sindh" | "Coastal / Desert Sindh";
  isHeadquarters?: boolean;
  activeProgramsCount: number;
  projectsCount: number;
  activePrograms: string[];
  keyProjects: string[];
  cboCount: number;
  description: string;
  // SVG coordinates/path parameters for custom rendered SVG interactive map
  svgPath: string;
  labelCoords: { x: number; y: number };
}

export const SINDH_DISTRICTS: DistrictInfo[] = [
  {
    id: "shikarpur",
    name: "Shikarpur",
    region: "Upper Sindh",
    isHeadquarters: true,
    activeProgramsCount: 8,
    projectsCount: 14,
    activePrograms: ["Peace & Harmony", "Livelihoods", "WASH", "Emergency Relief", "Child Rights", "Education", "Health", "Human Rights"],
    keyProjects: [
      "Low-Cost Resilient Housing Scheme",
      "Revival of Natak Mandlis for Religious Harmony",
      "Closed School Activation & Girls Literacy"
    ],
    cboCount: 12,
    description: "Primary operational headquarters of DIN Pakistan. Central hub for interfaith peace building, CBO network coordination, and emergency flood recovery.",
    svgPath: "M 210,130 L 260,110 L 290,140 L 270,180 L 220,170 Z",
    labelCoords: { x: 245, y: 145 }
  },
  {
    id: "jacobabad",
    name: "Jacobabad",
    region: "Upper Sindh",
    activeProgramsCount: 6,
    projectsCount: 8,
    activePrograms: ["Emergency Relief", "WASH", "Livelihoods", "Health", "Peace & Harmony"],
    keyProjects: [
      "Flood-Affected Women Livelihood Rehabilitation",
      "Emergency Shelter & Clean Water Response"
    ],
    cboCount: 6,
    description: "Highly heat and flood-vulnerable border district. Heavy focus on emergency shelter deployment, communal deep handpumps, and livestock distribution.",
    svgPath: "M 150,90 L 220,80 L 240,120 L 190,135 L 140,115 Z",
    labelCoords: { x: 185, y: 110 }
  },
  {
    id: "kashmor",
    name: "Kashmor",
    region: "Upper Sindh",
    activeProgramsCount: 5,
    projectsCount: 6,
    activePrograms: ["Peace & Harmony", "Child Rights", "WASH", "Livelihoods"],
    keyProjects: [
      "Natak Mandli Peace Revival",
      "Child Protection & Anti-Child Marriage Vigilance"
    ],
    cboCount: 5,
    description: "Border district along the Indus riverbed. Focus on inter-tribal peace building, child rights protection, and agricultural micro-credit.",
    svgPath: "M 240,80 L 320,60 L 340,105 L 280,120 Z",
    labelCoords: { x: 285, y: 90 }
  },
  {
    id: "sukkur",
    name: "Sukkur",
    region: "Upper Sindh",
    activeProgramsCount: 6,
    projectsCount: 7,
    activePrograms: ["Health", "Human Rights", "Peace & Harmony", "Education"],
    keyProjects: [
      "Super Flood Medical Mobile Response",
      "Democracy & Election Observation Campaign"
    ],
    cboCount: 4,
    description: "Major regional urban and logistics center. DIN coordinates regional donor meetings, election monitoring, and mobile medical camps here.",
    svgPath: "M 270,140 L 330,125 L 340,165 L 290,175 Z",
    labelCoords: { x: 305, y: 150 }
  },
  {
    id: "ghotki",
    name: "Ghotki",
    region: "Upper Sindh",
    activeProgramsCount: 5,
    projectsCount: 5,
    activePrograms: ["Livelihoods", "Human Rights", "WASH", "Peace & Harmony"],
    keyProjects: [
      "FAFEN Polling Station Observation",
      "Rural Handpump Installation"
    ],
    cboCount: 3,
    description: "Agricultural and industrial border district. Interventions center on landless peasant rights, voter education, and clean drinking water.",
    svgPath: "M 320,100 L 400,90 L 410,145 L 340,150 Z",
    labelCoords: { x: 360, y: 120 }
  },
  {
    id: "khairpur",
    name: "Khairpur",
    region: "Upper Sindh",
    activeProgramsCount: 4,
    projectsCount: 5,
    activePrograms: ["Education", "Livelihoods", "Child Rights"],
    keyProjects: [
      "Girls Not Brides Early Marriage Campaign",
      "Peasant Sharecropper Legal Literacy"
    ],
    cboCount: 3,
    description: "Largest agricultural date-palm district in Sindh. DIN works with tenant farmers and youth literacy groups.",
    svgPath: "M 290,175 L 370,165 L 380,240 L 300,230 Z",
    labelCoords: { x: 335, y: 200 }
  },
  {
    id: "dadu",
    name: "Dadu",
    region: "Central Sindh",
    activeProgramsCount: 5,
    projectsCount: 6,
    activePrograms: ["Emergency Relief", "Livelihoods", "Health", "WASH"],
    keyProjects: [
      "Post-Flood Women Livelihood Rehabilitation",
      "Mobile Healthcare for Isolated Villages"
    ],
    cboCount: 3,
    description: "Flanked by the Kirthar mountains and Manchhar lake. High flood vulnerability area requiring ongoing emergency shelter and livestock replacement.",
    svgPath: "M 180,180 L 260,175 L 245,265 L 170,250 Z",
    labelCoords: { x: 215, y: 220 }
  },
  {
    id: "naushahro-feroze",
    name: "Naushahro Feroze",
    region: "Central Sindh",
    activeProgramsCount: 3,
    projectsCount: 4,
    activePrograms: ["Education", "Livelihoods"],
    keyProjects: ["Closed Primary School Activation"],
    cboCount: 2,
    description: "Central agrarian belt. Programs focus on primary education reopening and community female literacy centers.",
    svgPath: "M 260,230 L 310,225 L 305,285 L 250,280 Z",
    labelCoords: { x: 280, y: 255 }
  },
  {
    id: "benazirabad",
    name: "Shaheed Benazirabad",
    region: "Central Sindh",
    activeProgramsCount: 3,
    projectsCount: 3,
    activePrograms: ["Human Rights", "Education"],
    keyProjects: ["Women CNIC Voter Registration Drive"],
    cboCount: 1,
    description: "Central administrative crossroads. Support for female civic participation and local governance observation.",
    svgPath: "M 285,280 L 345,275 L 340,335 L 275,330 Z",
    labelCoords: { x: 310, y: 305 }
  },
  {
    id: "sanghar",
    name: "Sanghar",
    region: "Central Sindh",
    activeProgramsCount: 3,
    projectsCount: 3,
    activePrograms: ["Emergency Relief", "WASH"],
    keyProjects: ["Disaster Emergency Ration Pack Deployment"],
    cboCount: 1,
    description: "Stretches from agricultural plains to the Thar desert edge. Rapid response during monsoon emergencies.",
    svgPath: "M 345,240 L 430,230 L 440,330 L 345,315 Z",
    labelCoords: { x: 390, y: 285 }
  },
  {
    id: "jamshoro",
    name: "Jamshoro",
    region: "Lower Sindh",
    activeProgramsCount: 3,
    projectsCount: 2,
    activePrograms: ["Health", "WASH"],
    keyProjects: ["Drinking Water Handpump Project"],
    cboCount: 1,
    description: "Educational hub & hill-tract district. Technical collaboration with university researchers on water quality.",
    svgPath: "M 180,265 L 240,260 L 225,360 L 165,340 Z",
    labelCoords: { x: 200, y: 310 }
  },
  {
    id: "hyderabad",
    name: "Hyderabad",
    region: "Lower Sindh",
    activeProgramsCount: 4,
    projectsCount: 4,
    activePrograms: ["Human Rights", "Partnerships"],
    keyProjects: ["SPO Provincial Network Advocacy"],
    cboCount: 0,
    description: "Second largest city in Sindh. Hub for regional NGO network meetings and government dialogue.",
    svgPath: "M 230,340 L 275,335 L 270,380 L 225,375 Z",
    labelCoords: { x: 250, y: 355 }
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
    description: "Agricultural and handicraft center. Focus on traditional Sindhi embroidery marketing.",
    svgPath: "M 275,335 L 320,330 L 315,380 L 270,380 Z",
    labelCoords: { x: 295, y: 355 }
  },
  {
    id: "tm-khan",
    name: "Tando Muhammad Khan",
    region: "Lower Sindh",
    activeProgramsCount: 2,
    projectsCount: 2,
    activePrograms: ["WASH", "Emergency Relief"],
    keyProjects: ["Post-Flood Water Filtration Packs"],
    cboCount: 0,
    description: "Low-lying riverine agricultural district vulnerable to heavy monsoon inundation.",
    svgPath: "M 225,375 L 270,380 L 260,430 L 215,420 Z",
    labelCoords: { x: 245, y: 400 }
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
    svgPath: "M 345,315 L 430,310 L 420,400 L 335,390 Z",
    labelCoords: { x: 380, y: 350 }
  },
  {
    id: "badin",
    name: "Badin",
    region: "Coastal / Desert Sindh",
    activeProgramsCount: 3,
    projectsCount: 3,
    activePrograms: ["Emergency Relief", "WASH"],
    keyProjects: ["Coastal Cyclone & Monsoon Emergency Relief"],
    cboCount: 0,
    description: "Coastal district affected by sea erosion, storm surges, and heavy monsoon flooding.",
    svgPath: "M 260,430 L 335,420 L 320,490 L 245,475 Z",
    labelCoords: { x: 290, y: 455 }
  },
  {
    id: "thatta",
    name: "Thatta",
    region: "Coastal / Desert Sindh",
    activeProgramsCount: 3,
    projectsCount: 3,
    activePrograms: ["Health", "Emergency Relief"],
    keyProjects: ["Indus Delta Disaster Relief & Mobile Camps"],
    cboCount: 0,
    description: "Indus Delta coastal region. Mobile healthcare and clean drinking water during coastal emergencies.",
    svgPath: "M 165,370 L 225,375 L 215,465 L 140,440 Z",
    labelCoords: { x: 185, y: 420 }
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
    svgPath: "M 110,400 L 165,390 L 155,460 L 100,445 Z",
    labelCoords: { x: 130, y: 425 }
  }
];
