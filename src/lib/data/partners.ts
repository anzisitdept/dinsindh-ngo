export interface PartnerItem {
  id: string;
  name: string;
  category: "Donor & UN Agency" | "Government Institution" | "National & International Network" | "Technical Agency";
  acronym?: string;
  description: string;
  logoText: string;
  projectsCollaborated: number;
}

export const DONORS_DATA: PartnerItem[] = [
  {
    id: "save-the-children",
    name: "Save the Children International",
    category: "Donor & UN Agency",
    acronym: "SCI",
    description: "International humanitarian organization collaborating with DIN on child safeguarding, community safe spaces, and protection awareness.",
    logoText: "Save the Children",
    projectsCollaborated: 4
  },
  {
    id: "iom",
    name: "International Organization for Migration (IOM)",
    category: "Donor & UN Agency",
    acronym: "IOM",
    description: "UN Migration Agency funding low-cost resilient housing construction, communal handpumps, and shelter kits in Upper Sindh.",
    logoText: "IOM UN Migration",
    projectsCollaborated: 3
  },
  {
    id: "undp-dtce",
    name: "UNDP / DTCE Pakistan",
    category: "Donor & UN Agency",
    acronym: "UNDP",
    description: "United Nations Development Programme & Devolution Trust for Community Empowerment supporting local peace councils and social cohesion.",
    logoText: "UNDP / DTCE",
    projectsCollaborated: 2
  },
  {
    id: "dai-usaid",
    name: "DAI-Pakistan / USAID",
    category: "Donor & UN Agency",
    acronym: "DAI / USAID",
    description: "Development Alternatives Incorporated & USAID funding the landmark Natak Mandali street theater revival for religious harmony.",
    logoText: "USAID / DAI",
    projectsCollaborated: 2
  },
  {
    id: "acted",
    name: "ACTED International",
    category: "Donor & UN Agency",
    acronym: "ACTED",
    description: "French international NGO supporting WASH infrastructure, shelter construction, and rapid post-flood recovery assistance.",
    logoText: "ACTED International France",
    projectsCollaborated: 2
  },
  {
    id: "muslim-charity-uk",
    name: "Muslim Charity UK",
    category: "Donor & UN Agency",
    acronym: "MC UK",
    description: "UK-based international development agency supporting women enterprise centers and rural livelihood toolkits.",
    logoText: "Muslim Charity UK",
    projectsCollaborated: 3
  },
  {
    id: "tvo",
    name: "Trust for Voluntary Organizations (TVO)",
    category: "National & International Network",
    acronym: "TVO",
    description: "National foundation funding capacity development for DIN's 40 affiliated CBOs and women artisan cooperatives.",
    logoText: "TVO Pakistan",
    projectsCollaborated: 4
  },
  {
    id: "fafen",
    name: "Free and Fair Election Network (FAFEN)",
    category: "National & International Network",
    acronym: "FAFEN",
    description: "Pakistan's premier non-partisan election observation network. DIN is an active member in Upper Sindh.",
    logoText: "FAFEN Pakistan",
    projectsCollaborated: 2
  },
  {
    id: "spo",
    name: "Strengthening Participatory Organization (SPO)",
    category: "National & International Network",
    acronym: "SPO",
    description: "National rights-based NGO collaborating with DIN on Hari sharecropper rights and women's legal awareness.",
    logoText: "SPO Sindh",
    projectsCollaborated: 3
  }
];

export const PARTNERS_DATA: PartnerItem[] = [
  {
    id: "fansa",
    name: "Freshwater Action Network South Asia (FANSA)",
    category: "National & International Network",
    acronym: "FANSA",
    description: "South Asian network advocating for universal clean drinking water and community sanitation rights.",
    logoText: "FANSA Network",
    projectsCollaborated: 1
  },
  {
    id: "girls-not-brides",
    name: "Girls Not Brides Global Partnership",
    category: "National & International Network",
    acronym: "GNB",
    description: "Global partnership committed to ending child marriage. DIN leads district vigilance campaigns in Sindh.",
    logoText: "Girls Not Brides",
    projectsCollaborated: 2
  },
  {
    id: "pmhc",
    name: "Pakistan Mental Health Coalition",
    category: "Technical Agency",
    acronym: "PMHC",
    description: "Technical network supporting DIN in psychosocial trauma counseling for flood-affected children and mothers.",
    logoText: "PMHC Pakistan",
    projectsCollaborated: 1
  }
];

export const AFFILIATED_CBOS = [
  { name: "Al-Shahbaz Community Organization", unionCouncil: "UC Sultan Kot", district: "Shikarpur" },
  { name: "Sufi Shah Inayat Welfare Association", unionCouncil: "UC Garhi Yasin", district: "Shikarpur" },
  { name: "Roshan Sindh Development Organization", unionCouncil: "UC Khanpur", district: "Shikarpur" },
  { name: "Sindh Sujag Youth Forum", unionCouncil: "UC Lakhi Ghulam Shah", district: "Shikarpur" },
  { name: "Nari Development Welfare Society", unionCouncil: "UC Madeji", district: "Shikarpur" },
  { name: "Indus Progressive Farmers CBO", unionCouncil: "UC Humayun", district: "Shikarpur" },
  { name: "Marvi Female Artisan Guild", unionCouncil: "UC Lodra", district: "Shikarpur" },
  { name: "Lal Shahbaz Youth CBO", unionCouncil: "UC Thul", district: "Jacobabad" },
  { name: "Mehran Rural Support CBO", unionCouncil: "UC Garhi Khairo", district: "Jacobabad" },
  { name: "Kashmor Peace & Harmony Council", unionCouncil: "UC Tangwani", district: "Kashmor" },
  { name: "Indus Delta WASH Committee", unionCouncil: "UC Kandhkot", district: "Kashmor" },
  { name: "Rohri Canal Farmers Alliance", unionCouncil: "UC Pano Aqil", district: "Sukkur" },
  { name: "Date-Palm Farmers Welfare CBO", unionCouncil: "UC Kingri", district: "Khairpur" },
  { name: "Dadu Flood Disaster Response CBO", unionCouncil: "UC Johi", district: "Dadu" },
  { name: "Manchhar Lake Fisherfolk Forum", unionCouncil: "UC Sehwan", district: "Jamshoro" }
];
