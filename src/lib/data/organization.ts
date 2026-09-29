export interface LegalDocument {
  id: string;
  title: string;
  authority: string;
  regNumber: string;
  issueDate: string;
  description: string;
  pdfUrl?: string;
  verified: boolean;
}

export const ORGANIZATION_DATA = {
  name: "DIN Pakistan",
  fullName: "Development Institutions' Network",
  tagline: "Empowering Rural Communities Across Sindh Through Sustainable Indigenous Institutions",
  legalRegistration: "Registered under Societies Registration Act XXI of 1860 (Reg. No. 01222, District Larkana)",
  registrationNumber: "01222",
  ntn: "3224579-3",
  dunsNumber: "645786422",
  foundingYear: 2000,
  yearsOfOperation: 25,
  affiliatedCBOsCount: 40,
  completedProjectsCount: 15,
  ongoingProjectsCount: 3,
  districtsCoveredCount: 18,
  targetBeneficiariesCount: "250,000+",
  
  headquarters: {
    address: "G.T Model Town, Near Jano Bypass Road",
    city: "Shikarpur",
    province: "Sindh",
    country: "Pakistan",
    postalCode: "78100",
    phonePrimary: "03002273298",
    phoneSecondary: "03337281266",
    phonePrimaryDial: "+923002273298",
    phoneSecondaryDial: "+923337281266",
    whatsappNumber: "923002273298",
    emailGeneral: "dinsindh@gmail.com",
    emailPartnerships: "dinsindh@gmail.com",
    workingHours: "Monday – Saturday: 9:00 AM – 5:00 PM PST",
  },

  bankDetails: {
    bankName: "FIRST WOMEN BANK Limited",
    accountTitle: "DEVELOPMENT INSTITUTION NET WORK SHP",
    accountNumber: "021093410001",
    branchCode: "0031",
    iban: "PK12FWOM0031021093410001",
    swiftCode: "FWOMPKKA",
  },
  
  boardOfDirectors: [
    { name: "Zafer Ali Shaikh", role: "Chairman" },
    { name: "Dr Allah Rakhyo", role: "Board Member" },
    { name: "Mr Muzamil Bhutto", role: "Board Member" },
    { name: "Mst Tasleem Khatoon", role: "Board Member" },
    { name: "Ms Nisha Shaikh", role: "Board Member" }
  ],

  executiveTeam: [
    { name: "Mujahid Ali Bhutto", role: "Executive Director & Founder Trustee", bio: "Over 22 years of grassroots community development, indigenous rights advocacy, and peacebuilding across Upper and Lower Sindh." },
    { name: "Program Coordinator", role: "Program Coordinator", bio: "Leads field operations, thematic program execution, CBO alignment, and community outreach." },
    { name: "Program Officer", role: "Program Officer", bio: "Coordinates project implementation, field monitoring, donor reporting, and community liaison." },
    { name: "Finance & Admin", role: "Finance & Admin Officer", bio: "Manages financial compliance, audit records, procurement, and administrative operations." }
  ],

  legalDocuments: [
    {
      id: "societies-act",
      title: "Societies Registration Act XXI of 1860 Certificate",
      authority: "Government of Sindh — Registrar of Societies, Larkana Division",
      regNumber: "01222",
      issueDate: "November 2000 / Renewal Feb 2005",
      description: "Official legal registration certificate authorizing DIN Pakistan as an independent non-profit developmental network.",
      verified: true
    },
    {
      id: "ntn-cert",
      title: "National Tax Number (NTN) Registration",
      authority: "Federal Board of Revenue (FBR) — Government of Pakistan",
      regNumber: "3224579-3",
      issueDate: "Active & Tax Compliant",
      description: "Valid NTN registration for institutional transparency and financial accountability.",
      verified: true
    },
    {
      id: "duns-number",
      title: "DUNS (Data Universal Numbering System) Record",
      authority: "Dun & Bradstreet (D&B)",
      regNumber: "645786422",
      issueDate: "Verified International Vendor ID",
      description: "Globally recognized business identifier required by UN agencies, USAID, and international donors.",
      verified: true
    }
  ]
};

export const CONTACT_LINKS = {
  whatsapp: (message?: string) =>
    `https://wa.me/${ORGANIZATION_DATA.headquarters.whatsappNumber}${
      message ? `?text=${encodeURIComponent(message)}` : ""
    }`,
  phonePrimary: `tel:${ORGANIZATION_DATA.headquarters.phonePrimaryDial}`,
  phoneSecondary: `tel:${ORGANIZATION_DATA.headquarters.phoneSecondaryDial}`,
  email: `mailto:${ORGANIZATION_DATA.headquarters.emailGeneral}`,
  map: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${ORGANIZATION_DATA.headquarters.address}, ${ORGANIZATION_DATA.headquarters.city}, ${ORGANIZATION_DATA.headquarters.province}, ${ORGANIZATION_DATA.headquarters.country}`
  )}`,
  fullAddress: `${ORGANIZATION_DATA.headquarters.address}, ${ORGANIZATION_DATA.headquarters.city}, ${ORGANIZATION_DATA.headquarters.province}, ${ORGANIZATION_DATA.headquarters.country}`
};
