export interface SpotlightProject {
  id: string;
  title: string;
  district: string;
  programTitle: string;
  donor: string;
  summary: string;
  beneficiaryCount: string;
  featuredImage: string;
  gallery: string[];
  slug: string;
}

export const SPOTLIGHT_PROJECTS: SpotlightProject[] = [
  {
    id: "spot-1",
    title: "Ambulance Donated to BHU Haji Khuwasti District Shikarpur",
    district: "District Shikarpur",
    programTitle: "Community Infrastructure Support",
    donor: "DIN Pakistan Donor Support",
    summary: "Emergency medical transfer vehicle donated to Basic Health Unit (BHU) Haji Khuwasti to ensure immediate 24/7 life-saving patient transport for rural villagers.",
    beneficiaryCount: "25,000+ Villagers",
    featuredImage: "/amb.jpeg",
    gallery: ["/ambulance/1.jpeg", "/ambulance/2.jpeg", "/ambulance/3.jpeg", "/ambulance/4.jpeg", "/ambulance/5.jpeg"],
    slug: "ambulance-donated-bhu-haji-khuwasti"
  },
  {
    id: "spot-incubators",
    title: "Provision and Installation of Incubators",
    district: "District Shikarpur Healthcare Facilities",
    programTitle: "Healthcare & Neonatal Life-Support",
    donor: "Muslim Charity Pakistan & DIN",
    summary: "Provision and installation of specialized medical infant incubators at public healthcare facilities to support vulnerable newborns and reduce infant mortality.",
    beneficiaryCount: "1,200+ Newborn Infants & Mothers",
    featuredImage: "/incubators.jpeg",
    gallery: ["/incubators/1.jpeg", "/incubators/2.jpeg", "/incubators/3.jpeg", "/incubators/4.jpeg", "/incubators/5.jpeg", "/incubators/6.jpeg"],
    slug: "provision-installation-incubators"
  },
  {
    id: "spot-2",
    title: "Installation of Electric Water Cooler at RBUT Hospital District Shikarpur",
    district: "District Shikarpur",
    programTitle: "Public WASH & Healthcare",
    donor: "Community Welfare Support",
    summary: "Installing heavy-duty electric water cooling filtration units at Rai Bahadur Udhavdas Tarachand (RBUT) Civil Hospital to serve daily patients & visitors.",
    beneficiaryCount: "1,500+ Daily Patients",
    featuredImage: "/water-cooler.jpeg",
    gallery: ["/water-cooler/1.jpeg", "/water-cooler/2.jpeg", "/water-cooler/3.jpeg", "/water-cooler/4.jpeg", "/water-cooler/5.jpeg", "/water-cooler/6.jpeg"],
    slug: "electric-water-cooler-rbut-hospital"
  },
  {
    id: "spot-3",
    title: "Construction of Solar Water Well",
    district: "Rural Sindh",
    programTitle: "Clean Water Infrastructure",
    donor: "DIN Water Relief Drive",
    summary: "Installing solar-powered deep water tubewells to provide reliable, zero-carbon clean drinking water access for remote off-grid communities.",
    beneficiaryCount: "3,200+ Household Members",
    featuredImage: "/soler-water-wall.jpeg",
    gallery: ["/soler-water-wall/1.jpeg", "/soler-water-wall/2.jpeg", "/soler-water-wall/3.jpeg", "/soler-water-wall/4.jpeg", "/soler-water-wall/5.jpeg"],
    slug: "construction-solar-water-well"
  },
  {
    id: "spot-handpump",
    title: "Installation of Hand Pump",
    district: "Rural Sindh Villages",
    programTitle: "WASH & Clean Drinking Water",
    donor: "Muslim Charity & DIN Pakistan",
    summary: "Installing communal deep water handpumps to provide safe, accessible drinking water for unserved rural village households.",
    beneficiaryCount: "2,500+ Rural Villagers",
    featuredImage: "/hand-pump.jpeg",
    gallery: ["/hand-pump/1.jpeg", "/hand-pump/2.jpeg", "/hand-pump/3.jpeg", "/hand-pump/4.jpeg", "/hand-pump/5.jpeg", "/hand-pump/6.jpeg"],
    slug: "installation-communal-hand-pump"
  },
  {
    id: "spot-4",
    title: "Vegetable Cart Business Start-Up Project (Livelihood)",
    district: "Shikarpur & Surrounding UC",
    programTitle: "Livelihood & Economic Aid",
    donor: "Livelihood Empowerment Fund",
    summary: "Providing customized mobile vegetable push-carts, fresh produce inventory, and micro-business toolkits to empower deserving individuals with sustainable daily earning opportunities.",
    beneficiaryCount: "450+ Local Vendors",
    featuredImage: "/veg-cart.jpeg",
    gallery: ["/veg-cart.jpeg"],
    slug: "new-business-startup-livelihood"
  },
  {
    id: "spot-fruit-cart",
    title: "Fruit Cart Business Start-Up (Livelihood)",
    district: "Shikarpur & Surrounding UC",
    programTitle: "Livelihood & Economic Aid",
    donor: "Livelihood Empowerment Fund",
    summary: "Providing customized mobile fruit push-carts, seasonal fresh fruit inventory, and micro-enterprise toolkits to empower local vendors with sustainable daily income.",
    beneficiaryCount: "Local Fruit Vendors",
    featuredImage: "/f-cart-1.jpeg",
    gallery: ["/f-cart-1.jpeg", "/f-cart-2.jpeg", "/f-cart-3.jpeg"],
    slug: "fruit-cart-business-startup"
  },
  {
    id: "spot-5",
    title: "Fiddayah & Fitrana Distribution",
    district: "Flood & Poverty Vulnerable Areas",
    programTitle: "Emergency Food Security",
    donor: "Disaster Relief Drive",
    summary: "Distributing comprehensive monthly food ration packages containing essential flour, cooking oil, pulses, and nutrition items to deserving families.",
    beneficiaryCount: "5,000+ Families",
    featuredImage: "/fidaya.jpeg",
    gallery: ["/Fiddaya & Fitna/1.jpeg", "/Fiddaya & Fitna/2.jpeg", "/Fiddaya & Fitna/3.jpeg", "/Fiddaya & Fitna/4.jpeg", "/Fiddaya & Fitna/5.jpeg", "/Fiddaya & Fitna/6.jpeg", "/Fiddaya & Fitna/7.jpeg", "/Fiddaya & Fitna/8.jpeg"],
    slug: "ration-distribution-needy-people"
  },
  {
    id: "spot-6",
    title: "Inauguration of Jamia Masjid",
    district: "Rural Sindh Community Center",
    programTitle: "Community Infrastructure",
    donor: "Local & Donor Philanthropy",
    summary: "Constructing and opening a community Jamia Masjid center to serve as a hub for local spiritual worship, social gatherings, and community unity.",
    beneficiaryCount: "Local Village Community",
    featuredImage: "/masjid-cover.jpeg",
    gallery: ["/masjid-construction/1.jpeg", "/masjid-construction/2.jpeg", "/masjid-construction/3.jpeg", "/masjid-construction/4.jpeg", "/masjid-construction/5.jpeg", "/masjid-construction/6.jpeg", "/masjid-construction/7.jpeg", "/masjid-construction/8.jpeg"],
    slug: "inauguration-jamia-masjid"
  },
  {
    id: "spot-7",
    title: "Chips Fries Cart Start-Up (Livelihood)",
    district: "District Shikarpur & Rural UCs",
    programTitle: "Livelihood & Micro-Enterprise",
    donor: "Livelihood Support Program",
    summary: "Providing equipped mobile french-fry and snacks push-carts with cooking equipment and starter supplies to enable sustainable daily micro-enterprise earnings.",
    beneficiaryCount: "Local Micro-Entrepreneurs",
    featuredImage: "/chips-fries.jpeg",
    gallery: ["/chips-fries.jpeg"],
    slug: "chips-fries-cart-startup"
  },
  {
    id: "spot-8",
    title: "Confectionery Cabin Start-Up (Livelihood)",
    district: "District Shikarpur & Surrounding Areas",
    programTitle: "Livelihood & Micro-Enterprise",
    donor: "Livelihood Support Program",
    summary: "Establishing roadside confectionery cabins stocked with retail snacks and goods to empower vulnerable heads of households with stable daily income.",
    beneficiaryCount: "Micro-Retail Vendors",
    featuredImage: "/cabin.jpeg",
    gallery: ["/cabin.jpeg"],
    slug: "confectionery-cabin-startup"
  }
];

export interface FeaturedOngoingInitiative {
  title: string;
  location: string;
  status: string;
  programArea: string;
  implementingBody: string;
  summary: string;
  progress: string[];
  slides: { src: string; caption: string }[];
}

export const FEATURED_ONGOING_INITIATIVE: FeaturedOngoingInitiative = {
  title: "Construction of Bilal Jamia Masjid",
  location: "Village Wali Muhammad Shar, District Shikarpur, Sindh",
  status: "Under Construction",
  programArea: "Community Infrastructure",
  implementingBody: "DIN Pakistan & Local Village Committee",
  summary:
    "DIN Pakistan is constructing a new community Jamia Masjid at Village Wali Muhammad Shar to give residents and neighbouring hamlets a permanent place of worship. The ground floor doubles as a children's madrasa and a community gathering hall for welfare meetings, nikah ceremonies, and welfare coordination.",
  progress: [
    "Excavation, PCC plinth and stone masonry foundation completed.",
    "Load-bearing walls and minaret scaffolding raised to full height.",
    "Roof slab, dome framework and water storage tank in progress.",
    "Sanitation block, electrical wiring and marble flooring scheduled next."
  ],
  slides: [
    { src: "/masjid-construction/masjid-1.jpeg", caption: "Site Preparation & Foundation Layout" },
    { src: "/masjid-construction/masjid-2.jpeg", caption: "Structural Masonry & Wall Raising" },
    { src: "/masjid-construction/masjid-3.jpeg", caption: "Minaret & Dome Structural Works" },
    { src: "/masjid-construction/masjid-4.jpeg", caption: "Finishing, Flooring & Wiring" }
  ]
};
