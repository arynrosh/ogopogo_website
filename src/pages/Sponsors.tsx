// src/pages/Sponsors.tsx
import React from 'react';
import { Star, Award, Medal, Crown } from 'lucide-react';
import Hero from '../components/Hero';

const Sponsors: React.FC = () => {
  const sponsorTiers = [
    {
      name: 'Platinum Sponsor',
      icon: Crown,
      color: 'text-gray-500 bg-gray-300',
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
      color: 'text-amber-500 bg-amber-300',
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
      color: 'text-zinc-400 bg-zinc-300',
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
      color: 'text-orange-600 bg-orange-300',
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

  // Bigger logo sizes per tier
  const logoHeightForTier = (tierName: string) => {
    switch (tierName) {
      case 'Platinum Sponsor':
        return 'h-56'; // biggest
      case 'Gold Sponsor':
        return 'h-48';
      case 'Silver Sponsor':
        return 'h-44';
      case 'Bronze Sponsor':
        return 'h-40';
      default:
        return 'h-40';
    }
  };

  return (
    <div className="animate-fade-in">
      {/* HERO via reusable component */}
      <Hero
        backgroundImage="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
        title={
          <div className="flex flex-col justify-center items-center min-h-screen">
            <h2 className="text-center">
              <span className="block text-9xl md:text-10xl font-extrabold tracking-tight text-white leading-none">
                OUR
              </span>
              <span className="block text-9xl md:text-10xl font-extrabold tracking-tight text-[#ffc82e] leading-none whitespace-nowrap">
                SPONSORS
              </span>
            </h2>
          </div>
        }
        overlayOpacity="bg-black/50"
      />

      {/* CTA BUBBLE */}
      <section className="bg-white py-16">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="bg-[#015e37] text-center text-white rounded-[32px] shadow-xl p-8 sm:p-12 lg:p-16">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              <span className="text-[#ffc82e]">CHARGE THE FUTURE</span>, OWN THE ROAD.
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-white/90 max-w-5xl mx-auto mb-8">
              None of our achievements would be possible without the unwavering support of our
              incredible sponsors. They share our vision for a sustainable future and empower us to
              push the boundaries of solar-powered transportation. From essential materials to
              strategic guidance, our sponsors fuel the ambition behind every milestone we achieve.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/donate"
                className="inline-flex items-center justify-center rounded-full px-8 py-3.5 text-lg font-semibold bg-[#ffc82e] text-[#fff] shadow-md hover:shadow-lg transition"
              >
                DONATIONS
              </a>
              <a
                href="/sponsorship-package"
                className="inline-flex items-center justify-center rounded-full px-8 py-3.5 text-lg font-semibold bg-[#ffc82e] text-[#fff] shadow-md hover:shadow-lg transition"
              >
                SPONSORSHIP PACKAGE
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SIMPLE TIERED LIST */}
      <section className="pb-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {sponsorTiers.map((tier) =>
            tier.sponsors.length ? (
              <div key={tier.name} className="mb-16 md:mb-20">
                {/* Heading with lines */}
                <div className="flex items-center gap-4 mb-10">
                  <div className={`flex-1 h-[3px] rounded-full ${tier.color.split(' ')[1]}`} />
                  <span className={`text-2xl md:text-3xl font-extrabold ${tier.color.split(' ')[0]}`}>
                    {tier.name}
                  </span>
                  <div className={`flex-1 h-[3px] rounded-full ${tier.color.split(' ')[1]}`} />
                </div>

                {/* Logos */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 place-items-center">
                  {tier.sponsors.map((s) => (
                    <a
                      key={s.name}
                      href={s.website || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full"
                    >
                      <div className="w-full flex items-center justify-center">
                        <img
                          src={s.logo}
                          alt={s.name}
                          className={`${logoHeightForTier(
                            tier.name
                          )} object-contain filter grayscale hover:grayscale-0 transition`}
                        />
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
