// src/data/sponsors.ts
import { Crown, Award, Medal, Star } from "lucide-react";

export type Sponsor = {
  name: string;
  logo: string;
  description?: string;
  website?: string;
  partnership?: string;
};

export type Tier = {
  name: "Platinum Sponsor" | "Gold Sponsor" | "Silver Sponsor" | "Bronze Sponsor";
  icon: React.ComponentType<{ className?: string }>;
  textColor: string;
  lineBgColor: string;
  sponsors: Sponsor[];
};

export const sponsorTiers: Tier[] = [
  {
    name: "Platinum Sponsor",
    icon: Crown,
    textColor: "text-gray-700",
    lineBgColor: "bg-gray-300",
    sponsors: [
      {
        name: "Altium",
        logo: "https://i.ibb.co/Ssd4z7n/Altium-Logo-BLK.png",
        description: "Leading provider of battery technology and energy storage solutions",
        website: "https://www.altium.com/",
        partnership: "Battery technology and charging infrastructure",
      },
    ],
  },
  {
    name: "Gold Sponsor",
    icon: Award,
    textColor: "text-amber-600",
    lineBgColor: "bg-amber-300",
    sponsors: [
      // {
      //   name: "SolarMax Industries",
      //   logo:
      //     "https://images.pexels.com/photos/9875445/pexels-photo-9875445.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
      //   description: "High-efficiency solar panel manufacturer",
      //   website: "https://solarmax.com",
      //   partnership: "Solar panel technology and optimization",
      // },
    ],
  },
  {
    name: "Silver Sponsor",
    icon: Medal,
    textColor: "text-zinc-500",
    lineBgColor: "bg-zinc-300",
    sponsors: [
      {
        name: "Engineering Material Solutions",
        logo: "https://i.ibb.co/8ny95RDS/Engineered-Materials-Solutions-2c.png",
        description: "Lightweight composite materials supplier",
        website: "https://www.emsclad.com/",
        partnership: "Carbon fiber and composite materials",
      },
    ],
  },
  {
    name: "Bronze Sponsor",
    icon: Star,
    textColor: "text-orange-600",
    lineBgColor: "bg-orange-300",
    sponsors: [
      {
        name: "SUO",
        logo: "https://i.ibb.co/9Y0Yy9t/suo-logo-for-posters-light-background.webp",
        description: "Precision machining and fabrication services",
        website: "https://www.suo.ca/",
        partnership: "Custom part manufacturing",
      },
      {
        name: "Impact Toolbox",
        logo: "https://i.ibb.co/1tJB0FPG/ITB-Logo-Light-BG-600px-removebg-preview.png",
        description: "Academic partner and facility provider",
        website: "https://impacttoolbox.org/",
        partnership: "Research facilities and academic support",
      },
    ],
  },
];

// Handy: all sponsors flattened for the Home carousel
export const allSponsors = sponsorTiers.flatMap(t => t.sponsors);
