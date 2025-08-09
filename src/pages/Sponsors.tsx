// src/pages/Sponsors.tsx
import React from 'react';
import { Crown, Award, Medal, Star } from 'lucide-react';
import Hero from '../components/Hero';

type Tier = {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  textColor: string;     // e.g., 'text-amber-600'
  lineBgColor: string;   // e.g., 'bg-amber-300'
  sponsors: {
    name: string;
    logo: string;
    description?: string;
    website?: string;
    partnership?: string;
  }[];
};

const sponsorTiers: Tier[] = [
  {
    name: 'Platinum Sponsor',
    icon: Crown,
    textColor: 'text-gray-700',
    lineBgColor: 'bg-gray-300',
    sponsors: [
      {
        name: 'Tesla Energy Solutions',
        logo:
          'https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
        description: 'Leading provider of battery technology and energy storage solutions',
        website: 'https://tesla.com',
        partnership: 'Battery technology and charging infrastructure',
      },
    ],
  },
  {
    name: 'Gold Sponsor',
    icon: Award,
    textColor: 'text-amber-600',
    lineBgColor: 'bg-amber-300',
    sponsors: [
      {
        name: 'SolarMax Industries',
        logo:
          'https://images.pexels.com/photos/9875445/pexels-photo-9875445.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
        description: 'High-efficiency solar panel manufacturer',
        website: 'https://solarmax.com',
        partnership: 'Solar panel technology and optimization',
      },
      {
        name: 'AeroTech Solutions',
        logo:
          'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
        description: 'Aerodynamic consulting and wind tunnel services',
        website: 'https://aerotech.com',
        partnership: 'Aerodynamic testing and consultation',
      },
    ],
  },
  {
    name: 'Silver Sponsor',
    icon: Medal,
    textColor: 'text-zinc-500',
    lineBgColor: 'bg-zinc-300',
    sponsors: [
      {
        name: 'GreenTech Materials',
        logo:
          'https://images.pexels.com/photos/8849322/pexels-photo-8849322.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
        description: 'Lightweight composite materials supplier',
        website: 'https://greentech.com',
        partnership: 'Carbon fiber and composite materials',
      },
      {
        name: 'Future Electronics',
        logo:
          'https://images.pexels.com/photos/159201/circuit-circuit-board-resistor-computer-159201.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
        description: 'Electronic components and systems',
        website: 'https://futureelectronics.com',
        partnership: 'Electronic components and PCB manufacturing',
      },
    ],
  },
  {
    name: 'Bronze Sponsor',
    icon: Star,
    textColor: 'text-orange-600',
    lineBgColor: 'bg-orange-300',
    sponsors: [
      {
        name: 'Local Machine Shop',
        logo:
          'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
        description: 'Precision machining and fabrication services',
        website: 'https://localmachine.com',
        partnership: 'Custom part manufacturing',
      },
      {
        name: 'UBC Okanagan',
        logo:
          'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
        description: 'Academic partner and facility provider',
        website: 'https://ubc.ca',
        partnership: 'Research facilities and academic support',
      },
    ],
  },
];

// Consistent logo sizing per tier (adjust if you want bigger/smaller)
const logoHeights: Record<string, string> = {
  'Platinum Sponsor': 'h-40 sm:h-48 md:h-56',
  'Gold Sponsor': 'h-36 sm:h-44 md:h-48',
  'Silver Sponsor': 'h-32 sm:h-40 md:h-44',
  'Bronze Sponsor': 'h-28 sm:h-36 md:h-40',
};

const Sponsors: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* HERO */}
      <Hero
        backgroundImage="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
        title={
          <div className="flex flex-col justify-center items-center min-h-screen">
            <h2 className="text-center leading-none">
              <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight text-white">
                OUR
              </span>
              <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight text-[#ffc82e] whitespace-nowrap">
                SPONSORS
              </span>
            </h2>
          </div>
        }
        overlayOpacity="bg-black/50"
      />

      {/* CTA BUBBLE */}
      <section className="bg-white py-12 sm:py-16 md:py-20">
        <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 md:px-8">
          <div className="bg-[#015e37] text-center text-white rounded-[32px] shadow-xl p-8 sm:p-12 md:p-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4 md:mb-6">
              <span className="text-[#ffc82e]">CHARGE THE FUTURE</span>, OWN THE ROAD.
            </h2>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-white/90 max-w-5xl mx-auto mb-6 md:mb-8">
              None of our achievements would be possible without the unwavering support of our incredible sponsors.
              They share our vision for a sustainable future and empower us to push the boundaries of solar-powered transportation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/donate"
                className="inline-flex items-center justify-center rounded-full px-8 py-3.5 text-lg font-semibold bg-[#ffc82e] text-white shadow-md hover:shadow-lg transition"
              >
                DONATIONS
              </a>
              <a
                href="/sponsorship-package"
                className="inline-flex items-center justify-center rounded-full px-8 py-3.5 text-lg font-semibold bg-[#ffc82e] text-white shadow-md hover:shadow-lg transition"
              >
                SPONSORSHIP PACKAGE
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TIERS */}
      <section className="pb-16 sm:pb-20 md:pb-24 bg-white">
        <div className="mx-auto w-full max-w-screen-lg md:max-w-screen-xl px-4 sm:px-6 md:px-8">
          {sponsorTiers.map((tier) =>
            tier.sponsors.length ? (
              <div key={tier.name} className="mb-12 sm:mb-16 md:mb-20">
                {/* Heading with lines + icon */}
                <div className="flex items-center gap-4 mb-8 md:mb-10">
                  <div className={`flex-1 h-[3px] rounded-full ${tier.lineBgColor}`} />
                  <div className="flex items-center gap-2">
                    <tier.icon className={`h-6 w-6 ${tier.textColor}`} />
                    <span className={`text-2xl md:text-3xl font-extrabold ${tier.textColor}`}>{tier.name}</span>
                  </div>
                  <div className={`flex-1 h-[3px] rounded-full ${tier.lineBgColor}`} />
                </div>

                {/* Logos grid with stable aspect ratio */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 place-items-center">
                  {tier.sponsors.map((s) => (
                    <a
                      key={s.name}
                      href={s.website || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full"
                      aria-label={`${s.name} website`}
                    >
                      <div className="w-full rounded-xl overflow-hidden shadow-sm bg-white/50 ring-1 ring-gray-100 hover:shadow-md transition">
                        <div className="relative w-full aspect-[16/9] grid place-items-center">
                          <img
                            src={s.logo}
                            alt={s.name}
                            loading="lazy"
                            className={`absolute inset-0 mx-auto ${logoHeights[tier.name] || 'h-36'} w-auto object-contain filter grayscale hover:grayscale-0 transition`}
                          />
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ) : null
          )}
        </div>
      </section>
    </div>
  );
};

export default Sponsors;
