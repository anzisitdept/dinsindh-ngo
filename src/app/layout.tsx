import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ORGANIZATION_DATA } from "@/lib/data/organization";

export const metadata: Metadata = {
  title: "DIN Pakistan — Development Institutions' Network | Community Development Across Sindh",
  description: "DIN is a Sindh-based NGO operating since 2000 across 18 districts on livelihoods, interfaith peace, education, health, and child rights — in partnership with 40 CBOs, Save the Children, IOM, and UNDP. Reg. No. 01222.",
  keywords: ["DIN Pakistan", "NGO Sindh", "Shikarpur NGO", "Development Institutions Network", "Save the Children Sindh", "IOM Pakistan", "Sindh Community Development", "Societies Act 01222"],
  openGraph: {
    title: "DIN Pakistan — Development Institutions' Network",
    description: "Empowering rural communities across Sindh through sustainable indigenous institutions since 2000.",
    url: "https://dinsindh.com",
    siteName: "DIN Pakistan",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DIN Pakistan — Development Institutions' Network",
    description: "Empowering rural communities across Sindh through sustainable indigenous institutions since 2000.",
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org NGO JSON-LD
  const ngoSchema = {
    "@context": "https://schema.org",
    "@type": "NGO",
    "name": ORGANIZATION_DATA.fullName,
    "alternateName": ORGANIZATION_DATA.name,
    "legalName": "Development Institutions' Network (DIN Pakistan)",
    "foundingDate": "2000",
    "taxID": ORGANIZATION_DATA.ntn,
    "identifier": ORGANIZATION_DATA.dunsNumber,
    "description": ORGANIZATION_DATA.tagline,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": ORGANIZATION_DATA.headquarters.address,
      "addressLocality": ORGANIZATION_DATA.headquarters.city,
      "addressRegion": ORGANIZATION_DATA.headquarters.province,
      "postalCode": ORGANIZATION_DATA.headquarters.postalCode,
      "addressCountry": "PK"
    },
    "telephone": ORGANIZATION_DATA.headquarters.phoneSecondary,
    "email": ORGANIZATION_DATA.headquarters.emailGeneral,
    "areaServed": "Sindh, Pakistan",
    "url": "https://dinsindh.com"
  };

  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ngoSchema) }}
        />
      </head>
      <body className="flex flex-col min-h-screen bg-[#FBF9F5] text-[#1C2333]">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
