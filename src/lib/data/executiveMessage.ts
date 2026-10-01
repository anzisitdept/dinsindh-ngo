export interface ExecutiveMessage {
  id: string;
  eyebrow: string;
  title: string;
  greeting: string;
  motto: string;
  paragraphs: string[];
  signature: {
    name: string;
    designation: string;
    organization: string;
    location: string;
  };
}

export const EXECUTIVE_MESSAGE: ExecutiveMessage = {
  id: "executive-director-message",
  eyebrow: "Leadership Note",
  title: "Message from the Executive Director",
  greeting: "Assalam-o-Alaikum Wa Rahmatullahi Wa Barakatuh",
  motto: "Empowering All, Brighter Future For All.",
  paragraphs: [
    "It is my great pleasure to welcome you to the official website of Development Institutions Network (DIN).",
    "Development Institutions Network (DIN) is a national, non-governmental, non-profit and non-sectarian development organization established in 2000 in District Shikarpur, Sindh, Pakistan.",
    "For more than two decades, DIN has worked closely with vulnerable, underserved and disaster-affected communities to improve access to essential services and opportunities in livelihoods, WASH, shelter, education, health, disaster resilience and community development, with particular attention to women, children, older persons, persons with disabilities (PWDs) and other vulnerable groups.",
    "Looking ahead, DIN is committed to expanding sustainable and locally led solutions, strengthening community resilience, promoting self-reliance and inclusion, and building strong partnerships with donors, government institutions, development organizations and local communities.",
    "Our message is simple: **Empower people, engage communities, include everyone, and create lasting change.**",
    "I sincerely thank our donors and partners, communities, staff and well-wishers for being part of DIN’s journey and for supporting our shared vision of safer, stronger, more inclusive and prosperous communities.",
    "**Together, we can create sustainable change.**"
  ],
  signature: {
    name: "Mujahid Bhutto",
    designation: "Executive Director",
    organization: "Development Institutions Network (DIN)",
    location: "District Shikarpur, Sindh, Pakistan"
  }
};
