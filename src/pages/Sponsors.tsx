// src/pages/Sponsors.tsx
import React from 'react';
import Hero from '../components/Hero';
import { sponsorTiers } from '../data/sponsors';

const logoHeight = 'h-40 sm:h-48 md:h-56'; // one consistent size for ALL logos

const Sponsors: React.FC = () => {
  return (
    <div className="animate-fade-in font-sans">
      {/* HERO */}
      <Hero
        backgroundImage="https://i.ibb.co/Vc40mxZM/Get-Paid-Stock-com-6898b8c59c166.jpg"
        title={
          <div className="flex flex-col justify-center items-center min-h-screen px-4">
            <h2 className="text-center leading-[0.88] tracking-tight balance">
              <span className="block font-extrabold text-white break-words fluid-hero-1">
                SPONSOR
              </span>
              <span
                className="block font-extrabold break-words fluid-hero-2"
                style={{ color: '#ffc82e' }}
              >
                SHOWCASE
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
            <h2 className="font-extrabold leading-tight mb-4 md:mb-6 fluid-h1">
              <span className="text-[#ffc82e]">CHARGE THE FUTURE</span>, OWN THE ROAD.
            </h2>
            <p className="text-white/90 max-w-5xl mx-auto mb-6 md:mb-8 fluid-body">
              None of our achievements would be possible without the unwavering support of our incredible sponsors.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/donate"
                className="inline-flex items-center justify-center rounded-full px-8 py-3.5 font-semibold bg-[#ffc82e] text-white shadow-md hover:shadow-lg transition fluid-btn"
              >
                DONATIONS
              </a>
              <a
                href="/sponsorship-package"
                className="inline-flex items-center justify-center rounded-full px-8 py-3.5 font-semibold bg-[#ffc82e] text-white shadow-md hover:shadow-lg transition fluid-btn"
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
                {/* Heading */}
                <div className="flex items-center gap-4 mb-8 md:mb-10">
                  <div className={`flex-1 h-[3px] rounded-full ${tier.lineBgColor}`} />
                  <div className="flex items-center gap-2">
                    <tier.icon className={`h-6 w-6 ${tier.textColor}`} />
                    <span className={`font-extrabold ${tier.textColor} fluid-h2`}>
                      {tier.name}
                    </span>
                  </div>
                  <div className={`flex-1 h-[3px] rounded-full ${tier.lineBgColor}`} />
                </div>

                {/* Logos grid (logos only — uniform height, no outer card) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 place-items-center">
                  {tier.sponsors.map((s) => (
                    <a
                      key={s.name}
                      href={s.website || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${s.name} website`}
                      className="grid place-items-center"
                    >
                      <img
                        src={s.logo}
                        alt={s.name}
                        loading="lazy"
                        className={`${logoHeight} w-auto object-contain transition-transform duration-300 hover:scale-105 hover:drop-shadow-lg`}
                      />
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
