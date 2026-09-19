export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  status: "Completed" | "Ongoing";
  years: string;
  duration: string;
  donor: string;
  donorCategory: "International INGO" | "UN Agency" | "Government" | "National Network" | "Foundation";
  budgetDisplay?: string;
  district: string;
  programSlug: string;
  programTitle: string;
  summary: string;
  fullNarrative: string;
  keyAchivements: string[];
  beneficiaryCount: string;
  featuredImage: string;
}

export const PROJECTS_DATA: ProjectItem[] = [
  // ONGOING PROJECTS
  {
    id: "proj-ong-1",
    slug: "resilient-shelter-handpump-shikarpur",
    title: "Low-Cost Resilient Housing & Handpump Installation Scheme",
    status: "Ongoing",
    years: "2024–2026",
    duration: "24 Months",
    donor: "IOM / International Organization for Migration",
    donorCategory: "UN Agency",
    budgetDisplay: "PKR 45.2 Million",
    district: "Shikarpur & Jacobabad",
    programSlug: "water-sanitation-infrastructure",
    programTitle: "WASH & Community Infrastructure",
    summary: "Constructing 150 low-cost disaster-resilient shelter units and installing 80 deep handpumps in flood-vulnerable Union Councils.",
    fullNarrative: "In response to recurring monsoon climate vulnerabilities in Upper Sindh, DIN Pakistan partnered with IOM to execute a multi-year low-cost shelter recovery initiative. This project builds single-room disaster-resilient mud-brick shelters equipped with elevated platforms and installs community handpumps to provide safe drinking water.",
    keyAchivements: [
      "150 Low-cost resilient single-room shelters under construction",
      "80 Communal deep water handpumps installed",
      "WASH training provided to 1,200 rural households"
    ],
    beneficiaryCount: "12,500 Beneficiaries",
    featuredImage: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "proj-ong-2",
    slug: "revival-natak-mandli-religious-harmony",
    title: "Revival of Natak Mandlis for Religious Harmony & Social Cohesion",
    status: "Ongoing",
    years: "2024–2026",
    duration: "18 Months",
    donor: "DAI-Pakistan / USAID",
    donorCategory: "International INGO",
    budgetDisplay: "PKR 28.5 Million",
    district: "Shikarpur & Kashmor",
    programSlug: "peace-and-harmony",
    programTitle: "Peace & Interfaith Harmony",
    summary: "Utilizing indigenous Sindhi Natak Mandali street theater as a cultural tool for interfaith harmony, anti-extremism, and youth peacebuilding.",
    fullNarrative: "Building on DIN's landmark cultural peace work, this ongoing phase mobilizes local theater artists, Hindu and Muslim youth, and community elders to stage live open-air theater performances across 30 Union Councils in Shikarpur and Kashmor, advocating for religious tolerance and peaceful conflict resolution.",
    keyAchivements: [
      "40 Live street theater performances produced",
      "12 Inter-faith Peace Committees operationalized",
      "Over 25,000 community members engaged directly"
    ],
    beneficiaryCount: "35,000+ Community Members",
    featuredImage: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "proj-ong-3",
    slug: "community-livelihood-starter-kits",
    title: "Flood-Affected Women Livelihood Rehabilitation Program",
    status: "Ongoing",
    years: "2023–2025",
    duration: "24 Months",
    donor: "Muslim Charity UK",
    donorCategory: "International INGO",
    budgetDisplay: "PKR 18.9 Million",
    district: "Dadu & Jacobabad",
    programSlug: "livelihoods-food-security",
    programTitle: "Livelihoods & Food Security",
    summary: "Distributing livestock (goats/cows), sewing machines, and micro-shop inventory starter toolkits to vulnerable women-headed households.",
    fullNarrative: "Designed to rebuild lost economic assets after severe climate disasters, this program focuses exclusively on ultra-poor, female-headed households in Dadu and Jacobabad. Beneficiaries receive healthy livestock units or commercial embroidery machine kits alongside financial literacy mentoring.",
    keyAchivements: [
      "320 Livestock units distributed to female heads of household",
      "140 Sewing machine toolkits delivered with artisan training",
      "Micro-enterprise mentorship active across 22 villages"
    ],
    beneficiaryCount: "4,600 Family Members",
    featuredImage: "https://images.unsplash.com/photo-1590682680695-43b964a3ae17?q=80&w=1000&auto=format&fit=crop"
  },

  // COMPLETED PROJECTS (15 items)
  {
    id: "proj-comp-1",
    slug: "emergency-shelter-kit-flood-response",
    title: "Emergency Shelter Kit Distribution & Rapid Flood Response",
    status: "Completed",
    years: "2022–2023",
    duration: "12 Months",
    donor: "ACTED International / UN-OCHA",
    donorCategory: "International INGO",
    district: "Shikarpur, Jacobabad & Kashmor",
    programSlug: "emergency-response",
    programTitle: "Emergency Response & Relief",
    summary: "Rapid emergency shelter kit and dignity pack deployment during the catastrophic 2022 monsoon flood disaster in Northern Sindh.",
    fullNarrative: "Following the historic 2022 climate floods, DIN mobilized its 40-CBO network to deliver emergency tarpaulin shelter kits, solar lanterns, water purification tablets, and hygiene kits to displaced rural families stranded on road embankments.",
    keyAchivements: [
      "2,500 Emergency shelter kits distributed",
      "4,000 Dignity & hygiene kits provided to displaced women",
      "35 Emergency clean water points commissioned"
    ],
    beneficiaryCount: "42,000 Displaced Persons",
    featuredImage: "https://images.unsplash.com/photo-1547683905-f686c993aae5?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "proj-comp-2",
    slug: "child-friendly-safe-spaces-emergency",
    title: "Child-Friendly Spaces (CFS) & Protection in Disaster Camps",
    status: "Completed",
    years: "2022–2023",
    duration: "9 Months",
    donor: "Save the Children",
    donorCategory: "International INGO",
    district: "Shikarpur & Sukkur",
    programSlug: "child-rights",
    programTitle: "Child Protection & Rights",
    summary: "Establishing 12 Child-Friendly Spaces providing psychosocial support, recreational activities, and protection screening for flood-displaced children.",
    fullNarrative: "Disaster camps pose acute protection risks for children. DIN established 12 safe tented spaces equipped with educational materials, toys, and trained facilitators to help flood-affected children recover from trauma.",
    keyAchivements: [
      "12 Child-Friendly Spaces established in relief camps",
      "4,800 Children received daily recreational & learning support",
      "120 Protection facilitators trained in child safeguarding"
    ],
    beneficiaryCount: "4,800 Children",
    featuredImage: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "proj-comp-3",
    slug: "voter-education-election-observation",
    title: "Democracy & Election Observation Campaign",
    status: "Completed",
    years: "2018–2019",
    duration: "12 Months",
    donor: "FAFEN / Trust for Voluntary Organizations (TVO)",
    donorCategory: "National Network",
    district: "Shikarpur & Ghotki",
    programSlug: "human-rights",
    programTitle: "Human Rights & Civic Empowerment",
    summary: "Deploying trained non-partisan observers across 250 polling stations and conducting voter registration drives for rural women.",
    fullNarrative: "DIN executed a comprehensive voter awareness drive, helping rural women register for National Identity Cards (CNIC) and monitoring general elections across Shikarpur and Ghotki to ensure transparent, accessible polling.",
    keyAchivements: [
      "250 Polling stations independently observed",
      "3,400 Women facilitated with CNIC registration",
      "60 Civic rights workshops conducted in village council halls"
    ],
    beneficiaryCount: "15,000+ Voters",
    featuredImage: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "proj-comp-4",
    slug: "youth-skill-development-initiative",
    title: "Benazir Bhutto Shaheed Youth Development Vocational Program",
    status: "Completed",
    years: "2016–2017",
    duration: "12 Months",
    donor: "BBSYDP — Government of Sindh",
    donorCategory: "Government",
    district: "Shikarpur",
    programSlug: "education",
    programTitle: "Education & Literacy Revival",
    summary: "Providing certified technical trade training in electric work, tailoring, and computer applications for unemployed rural youth.",
    fullNarrative: "Partnered with the Provincial Government of Sindh under BBSYDP, DIN established certified vocational training labs in Shikarpur town, training 300 unemployed young men and women in marketable trades.",
    keyAchivements: [
      "300 Youth certified in technical trades",
      "78% Employment or self-employment rate achieved",
      "Toolkits distributed to all top graduates"
    ],
    beneficiaryCount: "300 Youth Trainees",
    featuredImage: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "proj-comp-5",
    slug: "community-peace-building-undp",
    title: "Social Cohesion & Community Peace Councils",
    status: "Completed",
    years: "2015–2016",
    duration: "14 Months",
    donor: "DTCE / UNDP Pakistan",
    donorCategory: "UN Agency",
    district: "Shikarpur & Kashmor",
    programSlug: "peace-and-harmony",
    programTitle: "Peace & Interfaith Harmony",
    summary: "Forming localized Peace Councils comprising local elders, teachers, and religious scholars to resolve inter-tribal disputes peacefully.",
    fullNarrative: "Tribal and communal feuds in Upper Sindh frequently disrupt rural economic life. DIN worked with UNDP/DTCE to train local peace committees in mediation, restorative justice, and community dialogue.",
    keyAchivements: [
      "18 Local Peace Committees activated",
      "24 Inter-tribal dispute resolutions mediated",
      "500 Community leaders trained in conflict resolution"
    ],
    beneficiaryCount: "18,000 Residents",
    featuredImage: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "proj-comp-6",
    slug: "school-reactivation-girls-education",
    title: "Closed School Activation & Girls Literacy Centers",
    status: "Completed",
    years: "2013–2015",
    duration: "24 Months",
    donor: "Sindh Education Foundation (SEF)",
    donorCategory: "Government",
    district: "Shikarpur & Naushahro Feroze",
    programSlug: "education",
    programTitle: "Education & Literacy Revival",
    summary: "Reopening non-functional ghost schools, hiring female community teachers, and enrolling out-of-school girls in rural Union Councils.",
    fullNarrative: "DIN targeted non-functional primary schools in neglected villages. By organizing School Management Committees and recruiting local female teachers, DIN restored education access for 2,400 rural children.",
    keyAchivements: [
      "22 Non-functional schools successfully reopened",
      "2,400 Out-of-school children enrolled (60% girls)",
      "44 Community female teachers trained"
    ],
    beneficiaryCount: "2,400 Students",
    featuredImage: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "proj-comp-7",
    slug: "monsoon-flood-rehab-2011",
    title: "Post-Flood Emergency WASH & Shelter Restoration",
    status: "Completed",
    years: "2011–2012",
    duration: "18 Months",
    donor: "Save the Children / IOM",
    donorCategory: "International INGO",
    district: "Jacobabad, Shikarpur & Kashmor",
    programSlug: "water-sanitation-infrastructure",
    programTitle: "WASH & Community Infrastructure",
    summary: "Rebuilding 400 destroyed shelters and installing 120 communal handpumps following the devastation of the 2011 Sindh floods.",
    fullNarrative: "Upper Sindh suffered catastrophic flooding in consecutive years. DIN delivered long-term shelter recovery, building mud-stabilized brick units with elevated foundations.",
    keyAchivements: [
      "400 Shelter structures constructed",
      "120 Handpumps installed",
      "15,000 Hygiene kits distributed"
    ],
    beneficiaryCount: "22,000 Flood Survivors",
    featuredImage: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "proj-comp-8",
    slug: "historic-2010-super-flood-relief",
    title: "Super Flood Emergency Relief & Medical Mobile Response",
    status: "Completed",
    years: "2010–2011",
    duration: "12 Months",
    donor: "TVO / Muslim Charity UK",
    donorCategory: "International INGO",
    district: "Shikarpur & Sukkur",
    programSlug: "emergency-response",
    programTitle: "Emergency Response & Relief",
    summary: "Operation of 4 mobile emergency medical teams, cooked food kitchens, and clean water tankers during the 2010 Pakistan Super Floods.",
    fullNarrative: "During the catastrophic 2010 floods that submerged one-fifth of Pakistan, DIN mounted round-the-clock relief operations along the Indus highway, providing emergency medical care to over 18,000 displaced patients.",
    keyAchivements: [
      "18,400 Patients treated at mobile medical camps",
      "45,000 Cooked meal portions delivered in relief camps",
      "1,200 Emergency tents provided"
    ],
    beneficiaryCount: "50,000+ Displaced Persons",
    featuredImage: "https://images.unsplash.com/photo-1547683905-f686c993aae5?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "proj-comp-9",
    slug: "girls-not-brides-campaign",
    title: "Early Child Marriage Prevention & Campaigning",
    status: "Completed",
    years: "2009–2010",
    duration: "12 Months",
    donor: "Girls Not Brides Network / SPO",
    donorCategory: "National Network",
    district: "Shikarpur & Khairpur",
    programSlug: "child-rights",
    programTitle: "Child Protection & Rights",
    summary: "District-wide legal awareness campaign highlighting the Sindh Child Marriage Restraint Act among nikah registrars and village elders.",
    fullNarrative: "Underage marriage remains a barrier to girls' health and education in rural Sindh. DIN conducted awareness workshops targeting marriage registrars, local police officials, and union council secretaries.",
    keyAchivements: [
      "80 Marriage registrars sensitized on child marriage laws",
      "45 Village vigilance committees established",
      "14 Underage child marriages prevented via legal intervention"
    ],
    beneficiaryCount: "8,500 Community Members",
    featuredImage: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "proj-comp-10",
    slug: "cbo-capacity-building-network",
    title: "Institutional Strengthening of 40 Affiliated CBOs",
    status: "Completed",
    years: "2007–2009",
    duration: "24 Months",
    donor: "Trust for Voluntary Organizations (TVO)",
    donorCategory: "Government",
    district: "Across 10 Districts of Sindh",
    programSlug: "human-rights",
    programTitle: "Human Rights & Civic Empowerment",
    summary: "Capacity training in financial management, project proposal writing, and governance for 40 grassroots Community-Based Organizations.",
    fullNarrative: "DIN's core strength is its grassroots CBO network. This capacity development program trained CBO leaders in transparent accounting, gender mainstreaming, and emergency response planning.",
    keyAchivements: [
      "40 CBOs institutionalized and legally registered",
      "120 Grassroots leaders trained in financial management",
      "CBO regional network assembly established"
    ],
    beneficiaryCount: "40 Grassroots CBOs",
    featuredImage: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "proj-comp-11",
    slug: "maternal-health-clinic-shikarpur",
    title: "Community Mother & Child Healthcare Facility Support",
    status: "Completed",
    years: "2006–2008",
    duration: "24 Months",
    donor: "Muslim Charity UK",
    donorCategory: "International INGO",
    district: "Shikarpur",
    programSlug: "health",
    programTitle: "Public Health & Maternal Care",
    summary: "Setting up a community maternal health clinic equipped with female medical officers and free prescription medications.",
    fullNarrative: "To combat high maternal mortality in rural Union Councils of Shikarpur, DIN established a community clinic offering antenatal checkups, safe delivery referral services, and free essential medicines.",
    keyAchivements: [
      "14,200 Maternal & pediatric outpatient consultations",
      "850 Safe deliveries facilitated via trained midwives",
      "Free nutrition supplements distributed to 3,100 mothers"
    ],
    beneficiaryCount: "14,200 Women & Children",
    featuredImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "proj-comp-12",
    slug: "women-artisan-embroidery-center",
    title: "Sindhi Rilli & Embroidery Women Enterprise",
    status: "Completed",
    years: "2005–2007",
    duration: "24 Months",
    donor: "SPO Hyderabad / TVO",
    donorCategory: "National Network",
    district: "Shikarpur & Sukkur",
    programSlug: "livelihoods-food-security",
    programTitle: "Livelihoods & Food Security",
    summary: "Establishing women artisan cooperatives to market traditional Sindhi Rilli patchwork quilts and hand-embroidery to urban markets.",
    fullNarrative: "Rural women in Upper Sindh possess rich traditional craft skills in Rilli quilt making and mirror work embroidery. DIN organized 180 women into artisan guilds, connecting their products to exhibitions in Karachi.",
    keyAchivements: [
      "180 Women artisans organized into micro-cooperatives",
      "Average monthly household income increased by 65%",
      "3 Craft exhibitions hosted in Karachi and Hyderabad"
    ],
    beneficiaryCount: "180 Women Artisans",
    featuredImage: "https://images.unsplash.com/photo-1590682680695-43b964a3ae17?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "proj-comp-13",
    slug: "clean-drinking-water-pumps-2005",
    title: "Rural Drinking Water Handpump Project",
    status: "Completed",
    years: "2004–2005",
    duration: "12 Months",
    donor: "FANSA (Freshwater Action Network South Asia)",
    donorCategory: "International INGO",
    district: "Shikarpur & Jacobabad",
    programSlug: "water-sanitation-infrastructure",
    programTitle: "WASH & Community Infrastructure",
    summary: "Installing 60 deep communal handpumps in drought-prone villages in Northern Sindh.",
    fullNarrative: "DIN's inaugural major infrastructure intervention installed deep handpumps in villages where women previously walked up to 3 kilometers daily for drinking water.",
    keyAchivements: [
      "60 Communal handpumps installed",
      "Clean water access secured for 9,000 villagers",
      "60 Water management user groups trained"
    ],
    beneficiaryCount: "9,000 Villagers",
    featuredImage: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "proj-comp-14",
    slug: "hari-rights-peasant-literacy",
    title: "Agricultural Peasant (Hari) Rights & Legal Awareness",
    status: "Completed",
    years: "2004–2005",
    duration: "12 Months",
    donor: "SPO Sindh",
    donorCategory: "National Network",
    district: "Shikarpur & Khairpur",
    programSlug: "human-rights",
    programTitle: "Human Rights & Civic Empowerment",
    summary: "Legal literacy and tenancy rights awareness workshops for landless sharecroppers (Haris) under the Sindh Tenancy Act.",
    fullNarrative: "Landless sharecroppers in Sindh often face debt bondage and illegal evictions. DIN conducted paralegal workshops educating 1,200 Haris on their legal share rights under provincial tenancy legislation.",
    keyAchivements: [
      "1,200 Sharecroppers trained in Sindh Tenancy Act rights",
      "30 Village legal aid committees established",
      "40 Bonded labor disputes resolved through legal advocacy"
    ],
    beneficiaryCount: "1,200 Sharecropper Families",
    featuredImage: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "proj-comp-15",
    slug: "inaugural-cbo-mobilization-2004",
    title: "Grassroots CBO Network Formation & Registration",
    status: "Completed",
    years: "2004",
    duration: "6 Months",
    donor: "TVO (Trust for Voluntary Organizations)",
    donorCategory: "National Network",
    district: "Shikarpur",
    programSlug: "human-rights",
    programTitle: "Human Rights & Civic Empowerment",
    summary: "Initial mobilization of 15 community organizations in Shikarpur district to form the foundation of DIN Pakistan.",
    fullNarrative: "The foundational project that formally united independent village committees in Shikarpur under the institutional umbrella of DIN Pakistan, establishing democratically elected CBO executive bodies.",
    keyAchivements: [
      "15 Community-Based Organizations formally federated",
      "Initial registration under Social Welfare Department completed",
      "District baseline development survey published"
    ],
    beneficiaryCount: "15 Village Communities",
    featuredImage: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1000&auto=format&fit=crop"
  }
];

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return PROJECTS_DATA.find((p) => p.slug === slug);
}
