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
    "Established in 2000, DIN was founded with a clear commitment to work with communities in backward, underserved and vulnerable areas, where people often have limited access to basic services, livelihood opportunities and resources for a dignified life.",
    "From the beginning, DIN has believed that sustainable development cannot be achieved without the active participation of the community. We therefore work alongside local people, listen to their needs, involve them in identifying solutions, and support them in becoming active partners in their own development. Our approach is based on dignity, inclusion, transparency, accountability and community ownership.",
    "Over the years, DIN has expanded its work in areas including livelihoods, WASH, shelter, education, health, disaster resilience and community development, with particular attention to vulnerable families, women, children, persons with disabilities and other underserved groups.",
    "Our vision for the future is to further strengthen our presence in underserved communities and develop sustainable, locally led solutions that can improve lives beyond the duration of individual projects. We aim to expand opportunities for livelihoods and self-reliance, strengthen community resilience, promote inclusive development, and build stronger partnerships with government institutions, donors, development organizations, civil society and local communities.",
    "We firmly believe that lasting change is created when people are empowered, communities are engaged, and development becomes locally owned. As DIN moves forward, we remain committed to turning this belief into meaningful action and creating opportunities for communities to build safer, stronger and more prosperous futures.",
    "I sincerely appreciate the trust and support of our partners, communities, staff and well-wishers who continue to be part of DIN's journey.",
    "Together, we can create sustainable change."
  ],
  signature: {
    name: "Mujahid Bhutto",
    designation: "Executive Director",
    organization: "Development Institutions Network (DIN)",
    location: "District Shikarpur, Sindh, Pakistan"
  }
};
