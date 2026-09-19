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
    tagline: "Restoring sustainable rural income, vocational micro-enterprises, and resilient agricultural assets.",
    iconName: "Briefcase",
    description: "Empowering landless farmers, women artisans, and vulnerable flood-affected households with productive livestock, micro-enterprise toolkits, and climate-resilient farming techniques.",
    longDescription: "DIN's Livelihoods program addresses economic vulnerability across northern and central Sindh. In partnership with Save the Children, ACTED, and TVO, DIN has established livestock starter packs, vocational sewing & embroidery centers for women, and small shop starter kits. We emphasize sustainable rural asset creation, market linkages for indigenous artisans, and community seed banks.",
    keyPillars: [
      "Livestock asset distribution for landless women",
      "Vocational training & micro-shop starter toolkits",
      "Climate-resilient agriculture & seed distribution",
      "CBO-led micro-credit & emergency safety nets"
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
    slug: "education",
    title: "Education & Literacy Revival",
    shortTitle: "Education",
    tagline: "Reopening non-functional schools, adult female literacy centers, and youth skill building.",
    iconName: "GraduationCap",
    description: "Reactivating closed public schools, setting up community literacy centers for out-of-school girls, and upgrading learning environments in underserved rural union councils.",
    longDescription: "Working with Sindh Education Foundation (SEF) and BBSYDP, DIN addresses the educational crisis in Upper Sindh by repairing damaged school structures, installing drinking water and sanitation facilities, training local parent-teacher associations (SMCs), and offering adult literacy classes for adult women.",
    keyPillars: [
      "Re-activation of non-functional rural primary schools",
      "Adult female literacy & basic numeracy centers",
      "School Management Committee (SMC) capacity training",
      "Distribution of learning kits & clean drinking water facilities"
    ],
    activeDistricts: ["Shikarpur", "Kashmor", "Naushahro Feroze", "Dadu"],
    impactStats: [
      { label: "Schools Reactivated", value: "34" },
      { label: "Children Enrolled", value: "6,200+" },
      { label: "Female Literacy Graduates", value: "1,800+" }
    ],
    featuredImage: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1200&auto=format&fit=crop"
  },
  {
    slug: "health",
    title: "Public Health & Maternal Care",
    shortTitle: "Health",
    tagline: "Delivering mobile medical camps, maternal nutrition, and primary healthcare to remote villages.",
    iconName: "Activity",
    description: "Providing essential primary healthcare services, emergency medical mobile units during flood crises, and mother-and-child nutrition interventions across remote rural settlements.",
    longDescription: "DIN's health interventions bridge the gap between isolated rural hamlets and distant district hospitals. In partnership with Muslim Charity UK and IOM, DIN organizes free specialized medical camps, supplies emergency maternal delivery kits, and conducts hygiene awareness drives focusing on communicable disease prevention.",
    keyPillars: [
      "Mobile medical camps for flood & disaster survivors",
      "Maternal & infant nutrition & health counseling",
      "Distribution of clean birthing kits & hygiene packs",
      "Community health worker network training"
    ],
    activeDistricts: ["Shikarpur", "Jacobabad", "Sukkur", "Dadu", "Thatta"],
    impactStats: [
      { label: "Patients Treated", value: "32,000+" },
      { label: "Free Medical Camps", value: "110+" },
      { label: "Hygiene Kits Distributed", value: "9,400+" }
    ],
    featuredImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop"
  },
  {
    slug: "child-rights",
    title: "Child Protection & Rights",
    shortTitle: "Child Rights",
    tagline: "Preventing child labor, early marriages, and establishing child-friendly safe spaces.",
    iconName: "ShieldAlert",
    description: "Advocating for the rights of vulnerable children, establishing child-friendly protection spaces during emergencies, and campaigning against early child marriage and child labor.",
    longDescription: "Partnered with Save the Children and Girls Not Brides network, DIN operates localized Child Rights Vigilance Committees. We create child-friendly safe spaces (CFSs) in flood emergency camps, offer psychosocial support, and educate parents and local elders on child protection laws in Pakistan.",
    keyPillars: [
      "Child-Friendly Spaces (CFSs) in disaster shelters",
      "Anti-Child Marriage advocacy & Girls Not Brides campaign",
      "Child protection committees at village levels",
      "Psychosocial support & birth registration assistance"
    ],
    activeDistricts: ["Shikarpur", "Kashmor", "Ghotki", "Khairpur"],
    impactStats: [
      { label: "Child Protection Spaces", value: "18" },
      { label: "Children Protected", value: "12,500+" },
      { label: "Advocacy Sessions Held", value: "140+" }
    ],
    featuredImage: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop"
  },
  {
    slug: "emergency-response",
    title: "Emergency Response & Relief",
    shortTitle: "Emergency Relief",
    tagline: "Rapid-response emergency shelter, food ration packs, and flood rehabilitation across Sindh.",
    iconName: "LifeBuoy",
    description: "First-responder humanitarian assistance during severe monsoon floods, heatwaves, and crises — providing emergency shelter kits, dry food rations, and winterization supplies.",
    longDescription: "Sindh suffers repeatedly from catastrophic monsoon flooding (notably in 2010, 2011, 2020, and 2022). DIN has consistently served on the frontlines alongside IOM, UN-OCHA, and ACTED, deploying emergency shelter kits, hand-pumps, dry food packages, and dignity kits to thousands of displaced families across northern Sindh.",
    keyPillars: [
      "Emergency shelter kit distribution & tent setup",
      "Dry food ration pack emergency deployment",
      "Immediate clean water supply & emergency handpumps",
      "Dignity & winterization kits for displaced families"
    ],
    activeDistricts: ["Shikarpur", "Jacobabad", "Kashmor", "Dadu", "Sanghar", "Badin"],
    impactStats: [
      { label: "Shelter Kits Delivered", value: "4,200+" },
      { label: "Food Packs Distributed", value: "18,000+" },
      { label: "Displaced Persons Assisted", value: "95,000+" }
    ],
    featuredImage: "https://images.unsplash.com/photo-1547683905-f686c993aae5?q=80&w=1200&auto=format&fit=crop"
  },
  {
    slug: "human-rights",
    title: "Human Rights & Civic Empowerment",
    shortTitle: "Human Rights",
    tagline: "Legal literacy, election monitoring, and protection of peasant/landless worker rights.",
    iconName: "Scale",
    description: "Strengthening democratic participation, legal aid awareness, election observation, and advocacy for peasant farmers (Hari rights) and marginalized religious minorities.",
    longDescription: "As an active member of FAFEN (Free and Fair Election Network) and SPO, DIN conducts non-partisan election monitoring, voter registration drives for rural women, and legal rights workshops for landless agricultural workers across rural districts.",
    keyPillars: [
      "FAFEN election observation & polling station monitoring",
      "Voter CNIC registration campaigns for women",
      "Legal literacy workshops for agricultural laborers",
      "Rights advocacy for religious and ethnic minorities"
    ],
    activeDistricts: ["Shikarpur", "Sukkur", "Ghotki", "Benazirabad", "Hyderabad"],
    impactStats: [
      { label: "Polling Stations Monitored", value: "320+" },
      { label: "Women CNICs Facilitated", value: "5,400+" },
      { label: "Legal Literacy Sessions", value: "95+" }
    ],
    featuredImage: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop"
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
