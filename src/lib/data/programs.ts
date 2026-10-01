import type { GalleryFilter } from "./gallery";

export interface ProgramArea {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  iconName: string;
  description: string;
  longDescription: string;
  keyPillars: string[];
  activeDistricts: string[];
  impactStats: { label: string; value: string }[];
  featuredImage: string;
  galleryCategory: GalleryFilter;
}

export const PROGRAM_AREAS: ProgramArea[] = [
  {
    slug: "livelihoods-new-business-startup",
    title: "Livelihoods & New Business Startups project",
    shortTitle: "Business Startups",
    tagline: "Empowering vulnerable families with micro-business push-carts, retail cabins, and vendor toolkits.",
    iconName: "Briefcase",
    description: "Providing customized mobile vegetable push-carts, fruit carts, french-fry carts, retail confectionery cabins, and trade starter packages to enable sustainable daily micro-enterprise earnings.",
    longDescription: "DIN's Livelihoods & Business Startups program addresses rural unemployment and income vulnerability across Sindh. We equip deserving heads of households, widowed women, and young entrepreneurs with mobile push-carts (vegetable, fruit, chips/fries) and roadside retail cabins stocked with starter inventory. This creates immediate self-reliance and daily cash flow for poverty-stricken families.",
    keyPillars: [
      "Mobile vegetable & fruit push-cart business packages",
      "Confectionery & retail cabin startup installations",
      "French-fry & snack cart micro-enterprise toolkits",
      "Financial literacy & vendor micro-enterprise training"
    ],
    activeDistricts: ["Shikarpur", "Jacobabad", "Kashmor", "Sukkur", "Ghotki", "Khairpur"],
    impactStats: [
      { label: "Vendor Startups Created", value: "650+" },
      { label: "Retail Cabins Established", value: "180+" },
      { label: "Daily Earnings Increased", value: "300%" }
    ],
    featuredImage: "/veg-cart.jpeg",
    galleryCategory: "Livelihoods"
  },
  {
    slug: "shelter-resilient-housing",
    title: "Shelter & 1-Room House Construction project",
    shortTitle: "1-Room Shelters",
    tagline: "Constructing low-cost 1-room flood-resistant shelters and durable housing for climate-vulnerable families.",
    iconName: "Home",
    description: "Building 1-room climate-resilient shelters, elevated foundations, and weather-proof brick housing for low-income rural households displaced by heavy monsoon inundation.",
    longDescription: "Extreme weather events in Upper Sindh regularly destroy mud-brick rural homes. DIN's Shelter & Resilient Housing initiative builds low-cost 1-room disaster-resistant houses with reinforced plinths, brick walls, and weather-sealed roofs. Every housing unit is planned alongside village committees to ensure safety, dignity, and privacy for vulnerable families.",
    keyPillars: [
      "Construction of low-cost 1-room climate shelters",
      "Elevated flood-resistant plinth & brick masonry",
      "Latrine & sanitation block integration",
      "Community-led shelter beneficiary selection"
    ],
    activeDistricts: ["Shikarpur", "Jacobabad", "Kashmor", "Larkana", "Dadu"],
    impactStats: [
      { label: "1-Room Shelters Built", value: "120+" },
      { label: "Families Housed", value: "120+" },
      { label: "Flood Resilience", value: "100%" }
    ],
    featuredImage: "/h-5.jpeg",
    galleryCategory: "WASH & Infrastructure"
  },
  {
    slug: "disaster-response-climate-relief",
    title: "Disaster Risk Reduction & Emergency Relief Project",
    shortTitle: "Disaster Relief",
    tagline: "Rapid emergency flood response, Fiddayah food ration packs, and emergency disaster recovery.",
    iconName: "ShieldAlert",
    description: "Delivering immediate disaster relief packages, monthly food ration drives (Fiddayah & Fitrana), emergency drinking water kits, and post-monsoon flood recovery for affected hamlets.",
    longDescription: "DIN Pakistan maintains rapid-response disaster relief mechanisms across border districts of Sindh. During monsoon emergencies and climate crises, DIN mobilizes food ration drives containing flour, oil, pulses, and hygiene kits, alongside emergency medical relief camps and clean water support.",
    keyPillars: [
      "Emergency Fiddayah & Fitrana food ration pack drives",
      "Monsoon flood rescue & emergency relief camps",
      "Clean water container & hygiene pack distribution",
      "Disaster Risk Reduction (DRR) village committees"
    ],
    activeDistricts: ["Shikarpur", "Jacobabad", "Kashmor", "Dadu", "Sukkur"],
    impactStats: [
      { label: "Ration Packs Distributed", value: "12,000+" },
      { label: "Flood Victims Assisted", value: "45,000+" },
      { label: "Emergency Response Camps", value: "95+" }
    ],
    featuredImage: "/Fiddaya & Fitna/5.jpeg",
    galleryCategory: "Fiddayah & Fitrana"
  },
  {
    slug: "disability-inclusion-rehabilitation",
    title: "Disability Inclusion & Special Rehabilitation project",
    shortTitle: "Disability Aid",
    tagline: "Promoting basic rights, assistive toolkits, and accessible infrastructure for PWDs and especially-abled groups.",
    iconName: "HeartHandshake",
    description: "Supporting Persons with Disabilities (PWDs) and especially-abled individuals through specialized education centers, wheelchair & assistive device distribution, and accessible community infrastructure.",
    longDescription: "Especially-abled individuals face severe social exclusion and physical barriers in rural Sindh. DIN prioritizes PWD inclusion by supporting special education centers, installing accessible handpumps and ramps, providing vocational trade toolkits, and advocating for equal human rights and dignity.",
    keyPillars: [
      "Support for special education & rehabilitation centers",
      "Assistive device & mobility toolkit distribution",
      "Accessible WASH handpumps & ramp construction",
      "Paralegal rights advocacy for PWDs & minorities"
    ],
    activeDistricts: ["Shikarpur", "Jacobabad", "Kashmor", "Larkana", "Sukkur"],
    impactStats: [
      { label: "PWDs Supported", value: "1,400+" },
      { label: "Assistive Devices Given", value: "350+" },
      { label: "Accessible Water Points", value: "120+" }
    ],
    featuredImage: "/startups/WhatsApp Image 2026-09-19 at 9.28.05 PM.jpeg",
    galleryCategory: "Public Health"
  },
  {
    slug: "water-sanitation-infrastructure",
    title: "WASH Project",
    shortTitle: "WASH & Clean Water",
    tagline: "Installing hand pumps, solar water wells, water coolers, and sanitation units.",
    iconName: "Droplets",
    description: "Installing deep hand pumps, solar-powered tubewells, heavy-duty electric water coolers at hospitals, and public sanitation latrines for unserved rural communities.",
    longDescription: "Access to clean drinking water is a basic human right. DIN constructs communal deep hand pumps, solar filtration wells, and hospital electric water cooling units to protect rural children and mothers from waterborne diseases.",
    keyPillars: [
      "hand pump installation in hamlets",
      "Solar-powered deep water tubewell construction",
      "Electric water cooler installation at hospitals (RBUT)",
      "Public sanitation latrines & open-defecation-free drives"
    ],
    activeDistricts: ["Shikarpur", "Jacobabad", "Kashmor", "Ghotki", "Sukkur"],
    impactStats: [
      { label: "Hand Pumps Installed", value: "943+" },

    ],
    featuredImage: "/hand-pump.jpeg",
    galleryCategory: "WASH & Infrastructure"
  },
  {
    slug: "peace-and-harmony",
    title: "Peace & Interfaith Harmony Project",
    shortTitle: "Peace & Harmony",
    tagline: "Reviving indigenous cultural traditions and cross-community dialogue to prevent conflict in Sindh.",
    iconName: "Heart",
    description: "Fostering communal cohesion, interfaith dialogue, and peaceful conflict resolution by reviving indigenous folk theater (Natak Mandali) and youth peace councils across multi-religious districts.",
    longDescription: "Sindh has historically been a land of Sufi tolerance and pluralism. Through initiatives funded by DAI-USAID and DTCE/UNDP, DIN revives traditional 'Natak Mandli' street theater troupes as powerful instruments for peacebuilding, social cohesion, and anti-extremism awareness.",
    keyPillars: [
      "Revival of traditional Natak Mandali street theater",
      "Interfaith peace committees & dialogue forums",
      "Youth peace ambassadors & cultural festivals",
      "Conflict mitigation & mediation training for CBOs"
    ],
    activeDistricts: ["Shikarpur", "Kashmor", "Sukkur", "Jacobabad", "Ghotki"],
    impactStats: [
      { label: "Natak Performances Held", value: "85+" },
      { label: "Peace Committee Members", value: "620+" },
      { label: "Audience Reached", value: "45,000+" }
    ],
    featuredImage: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200&auto=format&fit=crop",
    galleryCategory: "Community & Mosque"
  }
];

export function getProgramBySlug(slug: string): ProgramArea | undefined {
  return PROGRAM_AREAS.find((p) => p.slug === slug);
}
