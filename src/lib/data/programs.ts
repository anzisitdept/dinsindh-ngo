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
}

export const PROGRAM_AREAS: ProgramArea[] = [
  {
    slug: "livelihoods-food-security",
    title: "Livelihoods & Food Security",
    shortTitle: "Livelihoods",
    tagline: "Restoring sustainable rural income, vocational micro-enterprises, and resilient rural assets.",
    iconName: "Briefcase",
    description: "Empowering landless households, women artisans, and vulnerable rural families with productive livestock, micro-enterprise toolkits, and climate-resilient income techniques.",
    longDescription: "DIN's Livelihoods program addresses economic vulnerability across northern and central Sindh. In partnership with Save the Children, ACTED, and TVO, DIN has established livestock starter packs, vocational sewing & embroidery centers for women, and small shop starter kits. We emphasize sustainable rural asset creation, market linkages for indigenous artisans, and community savings groups.",
    keyPillars: [
      "Livestock asset distribution for landless women",
      "Vocational training & micro-shop starter toolkits",
      "Climate-resilient rural enterprise & market linkages",
      "CBO-led micro-credit & village savings groups"
    ],
    activeDistricts: ["Shikarpur", "Jacobabad", "Kashmor", "Sukkur", "Ghotki", "Khairpur"],
    impactStats: [
      { label: "Families Supported", value: "8,500+" },
      { label: "Women Micro-shops", value: "450+" },
      { label: "Livestock Units Handed Over", value: "1,200+" }
    ],
    featuredImage: "https://images.unsplash.com/photo-1590682680695-43b964a3ae17?q=80&w=1200&auto=format&fit=crop"
  },
  {
    slug: "peace-and-harmony",
    title: "Peace & Interfaith Harmony",
    shortTitle: "Peace & Harmony",
    tagline: "Reviving indigenous cultural traditions and cross-community dialogue to prevent conflict in Sindh.",
    iconName: "HeartHandshake",
    description: "Fostering communal cohesion, interfaith dialogue, and peaceful conflict resolution by reviving indigenous folk theater (Natak Mandali) and youth peace councils across multi-religious districts.",
    longDescription: "Sindh has historically been a land of Sufi tolerance and pluralism. Through initiatives funded by DAI-USAID and DTCE/UNDP, DIN revives traditional 'Natak Mandli' street theater troupes as powerful instruments for peacebuilding, social cohesion, and anti-extremism awareness in Shikarpur and surrounding districts. We bring together Muslim, Hindu, and minority community leaders in localized peace committees.",
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
    featuredImage: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200&auto=format&fit=crop"
  },
  {
    slug: "water-sanitation-infrastructure",
    title: "WASH & Community Infrastructure",
    shortTitle: "WASH & Infrastructure",
    tagline: "Installing deep water pumps, community latrines, and disaster-resilient shelter construction.",
    iconName: "Droplets",
    description: "Constructing safe drinking water installations, solar-powered deep wells, low-cost disaster-resistant housing units, and village sanitation facilities.",
    longDescription: "Clean drinking water access remains a major health crisis in rural Sindh where groundwater is often saline or contaminated. DIN constructs communal hand-pumps, solar-powered filtration pumps, public sanitation latrines, and resilient single-room shelter units for low-income rural households.",
    keyPillars: [
      "Installation of deep communal hand-pumps & solar wells",
      "Low-cost flood-resistant shelter construction",
      "Public sanitation latrines & open-defecation-free campaigns",
      "Community WASH committee formation & maintenance"
    ],
    activeDistricts: ["Shikarpur", "Jacobabad", "Kashmor", "Ghotki", "Tharparkar"],
    impactStats: [
      { label: "Hand-pumps Installed", value: "480+" },
      { label: "Shelter Units Built", value: "350+" },
      { label: "People with Clean Water", value: "65,000+" }
    ],
    featuredImage: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?q=80&w=1200&auto=format&fit=crop"
  }
];

export function getProgramBySlug(slug: string): ProgramArea | undefined {
  return PROGRAM_AREAS.find((p) => p.slug === slug);
}
