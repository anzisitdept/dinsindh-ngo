export interface GalleryItem {
  id: string;
  src: string;
  category: "WASH & Infrastructure" | "Public Health" | "Livelihoods" | "Business Startups" | "Fiddayah & Fitrana" | "Community & Mosque";
}

export const GALLERY_CATEGORIES = [
  "All",
  "WASH & Infrastructure",
  "Public Health",
  "Livelihoods",
  "Business Startups",
  "Fiddayah & Fitrana",
  "Community & Mosque"
] as const;

export const GALLERY_DATA: GalleryItem[] = [
  // WASH & INFRASTRUCTURE
  { id: "w-1", src: "/hand-pump.jpeg", category: "WASH & Infrastructure" },
  { id: "w-2", src: "/water-cooler.jpeg", category: "WASH & Infrastructure" },
  { id: "w-3", src: "/water-wall.jpeg", category: "WASH & Infrastructure" },
  { id: "w-4", src: "/soler-water-wall.jpeg", category: "WASH & Infrastructure" },
  { id: "w-hp-1", src: "/hand-pump/1.jpeg", category: "WASH & Infrastructure" },
  { id: "w-hp-2", src: "/hand-pump/2.jpeg", category: "WASH & Infrastructure" },
  { id: "w-hp-3", src: "/hand-pump/3.jpeg", category: "WASH & Infrastructure" },
  { id: "w-hp-4", src: "/hand-pump/4.jpeg", category: "WASH & Infrastructure" },
  { id: "w-hp-5", src: "/hand-pump/5.jpeg", category: "WASH & Infrastructure" },
  { id: "w-hp-6", src: "/hand-pump/6.jpeg", category: "WASH & Infrastructure" },
  { id: "w-hp-7", src: "/hand-pump/7.jpeg", category: "WASH & Infrastructure" },
  { id: "w-hp-8", src: "/hand-pump/8.jpeg", category: "WASH & Infrastructure" },
  { id: "w-hp-9", src: "/hand-pump/9.jpeg", category: "WASH & Infrastructure" },
  { id: "w-hp-10", src: "/hand-pump/10.jpeg", category: "WASH & Infrastructure" },
  { id: "w-hp-11", src: "/hand-pump/11.jpeg", category: "WASH & Infrastructure" },
  { id: "w-hp-12", src: "/hand-pump/12.jpeg", category: "WASH & Infrastructure" },
  { id: "w-wc-1", src: "/water-cooler/1.jpeg", category: "WASH & Infrastructure" },
  { id: "w-wc-2", src: "/water-cooler/2.jpeg", category: "WASH & Infrastructure" },
  { id: "w-wc-3", src: "/water-cooler/3.jpeg", category: "WASH & Infrastructure" },
  { id: "w-wc-4", src: "/water-cooler/4.jpeg", category: "WASH & Infrastructure" },
  { id: "w-wc-5", src: "/water-cooler/5.jpeg", category: "WASH & Infrastructure" },
  { id: "w-wc-6", src: "/water-cooler/6.jpeg", category: "WASH & Infrastructure" },
  { id: "w-wc-7", src: "/water-cooler/7.jpeg", category: "WASH & Infrastructure" },
  { id: "w-ww-1", src: "/water-well/1.jpeg", category: "WASH & Infrastructure" },
  { id: "w-ww-2", src: "/water-well/2.jpeg", category: "WASH & Infrastructure" },
  { id: "w-ww-3", src: "/water-well/3.jpeg", category: "WASH & Infrastructure" },
  { id: "w-ww-4", src: "/water-well/4.jpeg", category: "WASH & Infrastructure" },
  { id: "w-ww-5", src: "/water-well/5.jpeg", category: "WASH & Infrastructure" },
  { id: "w-ww-6", src: "/water-well/6.jpeg", category: "WASH & Infrastructure" },
  { id: "w-ww-7", src: "/water-well/7.jpeg", category: "WASH & Infrastructure" },
  { id: "w-ww-8", src: "/water-well/8.jpeg", category: "WASH & Infrastructure" },
  { id: "w-ww-9", src: "/water-well/9.jpeg", category: "WASH & Infrastructure" },
  { id: "w-ww-10", src: "/water-well/10.jpeg", category: "WASH & Infrastructure" },
  { id: "w-ww-11", src: "/water-well/11.jpeg", category: "WASH & Infrastructure" },
  { id: "w-ww-12", src: "/water-well/12.jpeg", category: "WASH & Infrastructure" },
  { id: "w-ww-13", src: "/water-well/13.jpeg", category: "WASH & Infrastructure" },
  { id: "w-ww-14", src: "/water-well/14.jpeg", category: "WASH & Infrastructure" },
  { id: "w-ww-15", src: "/water-well/15.jpeg", category: "WASH & Infrastructure" },

  // PUBLIC HEALTH
  { id: "h-1", src: "/amb.jpeg", category: "Public Health" },
  { id: "h-2", src: "/ambulance/1.jpeg", category: "Public Health" },
  { id: "h-3", src: "/ambulance/2.jpeg", category: "Public Health" },
  { id: "h-4", src: "/ambulance/3.jpeg", category: "Public Health" },
  { id: "h-5", src: "/ambulance/4.jpeg", category: "Public Health" },
  { id: "h-6", src: "/ambulance/5.jpeg", category: "Public Health" },
  { id: "h-7", src: "/ambulance/6.jpeg", category: "Public Health" },
  { id: "h-8", src: "/ambulance/7.jpeg", category: "Public Health" },
  { id: "h-inc-1", src: "/incubators/1.jpeg", category: "Public Health" },
  { id: "h-inc-2", src: "/incubators/2.jpeg", category: "Public Health" },
  { id: "h-inc-3", src: "/incubators/3.jpeg", category: "Public Health" },
  { id: "h-inc-4", src: "/incubators/4.jpeg", category: "Public Health" },
  { id: "h-inc-5", src: "/incubators/5.jpeg", category: "Public Health" },
  { id: "h-inc-6", src: "/incubators/6.jpeg", category: "Public Health" },
  { id: "h-inc-7", src: "/incubators/7.jpeg", category: "Public Health" },
  { id: "h-inc-8", src: "/incubators/8.jpeg", category: "Public Health" },
  { id: "h-inc-9", src: "/incubators/9.jpeg", category: "Public Health" },
  { id: "h-inc-10", src: "/incubators/10.jpeg", category: "Public Health" },

  // LIVELIHOODS
  { id: "l-1", src: "/veg-cart.jpeg", category: "Livelihoods" },
  { id: "l-2", src: "/f-cart-1.jpeg", category: "Livelihoods" },
  { id: "l-3", src: "/f-cart-2.jpeg", category: "Livelihoods" },
  { id: "l-4", src: "/f-cart-3.jpeg", category: "Livelihoods" },
  { id: "l-5", src: "/chips-fries.jpeg", category: "Livelihoods" },
  { id: "l-6", src: "/cabin.jpeg", category: "Livelihoods" },
  { id: "l-vc-1", src: "/veg-cart/1 (1).jpeg", category: "Livelihoods" },
  { id: "l-vc-2", src: "/veg-cart/1 (4).jpeg", category: "Livelihoods" },
  { id: "l-vc-3", src: "/veg-cart/1 (5).jpeg", category: "Livelihoods" },

  // BUSINESS STARTUPS
  { id: "bs-1", src: "/startups/WhatsApp Image 2026-09-19 at 9.28.03 PM (1).jpeg", category: "Business Startups" },
  { id: "bs-2", src: "/startups/WhatsApp Image 2026-09-19 at 9.28.03 PM.jpeg", category: "Business Startups" },
  { id: "bs-3", src: "/startups/WhatsApp Image 2026-09-19 at 9.28.04 PM (1).jpeg", category: "Business Startups" },
  { id: "bs-4", src: "/startups/WhatsApp Image 2026-09-19 at 9.28.04 PM.jpeg", category: "Business Startups" },
  { id: "bs-5", src: "/startups/WhatsApp Image 2026-09-19 at 9.28.05 PM.jpeg", category: "Business Startups" },

  // FIDDAYAH & FITRANA
  { id: "ff-3", src: "/Fiddaya & Fitna/1.jpeg", category: "Fiddayah & Fitrana" },
  { id: "ff-4", src: "/Fiddaya & Fitna/2.jpeg", category: "Fiddayah & Fitrana" },
  { id: "ff-5", src: "/Fiddaya & Fitna/3.jpeg", category: "Fiddayah & Fitrana" },
  { id: "ff-6", src: "/Fiddaya & Fitna/4.jpeg", category: "Fiddayah & Fitrana" },
  { id: "ff-7", src: "/Fiddaya & Fitna/5.jpeg", category: "Fiddayah & Fitrana" },
  { id: "ff-8", src: "/Fiddaya & Fitna/6.jpeg", category: "Fiddayah & Fitrana" },
  { id: "ff-9", src: "/Fiddaya & Fitna/7.jpeg", category: "Fiddayah & Fitrana" },
  { id: "ff-10", src: "/Fiddaya & Fitna/8.jpeg", category: "Fiddayah & Fitrana" },

  // COMMUNITY & MOSQUE
  { id: "m-2", src: "/masjid-construction/2.jpeg", category: "Community & Mosque" },
  { id: "m-3", src: "/masjid-construction/3.jpeg", category: "Community & Mosque" },
  { id: "m-4", src: "/masjid-construction/4.jpeg", category: "Community & Mosque" },
  { id: "m-5", src: "/masjid-construction/5.jpeg", category: "Community & Mosque" },
  { id: "m-6", src: "/masjid-construction/6.jpeg", category: "Community & Mosque" },
  { id: "m-7", src: "/masjid-construction/7.jpeg", category: "Community & Mosque" },
  { id: "m-8", src: "/masjid-construction/8.jpeg", category: "Community & Mosque" },
  { id: "m-9", src: "/masjid-construction/9.jpeg", category: "Community & Mosque" },
  { id: "m-10", src: "/masjid-construction/10.jpeg", category: "Community & Mosque" },
  { id: "m-11", src: "/masjid-construction/11.jpeg", category: "Community & Mosque" },
];
