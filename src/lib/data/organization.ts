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
    address: "2nd Floor, Agha Khan Laboratory Building, Station Road",
    city: "Shikarpur",
    province: "Sindh",
    country: "Pakistan",
    postalCode: "78100",
    phonePrimary: "+92 71 5632100",
    phoneSecondary: "+92 300 3131842",
    emailGeneral: "info@dinsindh.com",
    emailPartnerships: "info@dinsindh.com",
    workingHours: "Monday – Saturday: 9:00 AM – 5:00 PM PST",
  },
  
  executiveLeadership: {
    executiveDirector: "Mujahid Bhutto",
    designation: "Executive Director & Founder Trustee",
    bio: "Over 22 years of grassroots community development, disaster response, and indigenous rights advocacy across Upper and Lower Sindh.",
  },

  boardOfDirectors: [
    { name: "Sikander Ali Khoso", role: "Chairperson / President", bio: "Development practitioner with 25+ years in community mobilization." },
    { name: "Dr. Parveen Akhtar", role: "Vice President", bio: "Public health specialist focusing on maternal & child healthcare in rural Sindh." },
    { name: "Mujahid Bhutto", role: "Executive Director / Member Secretary", bio: "Lead administrator and founder trustee of DIN Pakistan." },
    { name: "Shahnaz Solangi", role: "Treasurer", bio: "Financial management expert and gender equality advocate." },
    { name: "Ghulam Nabi Brohi", role: "Board Member / CBO Liaison", bio: "Grassroots CBO coordinator bridging district networks." }
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
