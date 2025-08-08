import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Sponsors: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sponsors = [
    {
      name: 'Tesla Energy',
      logo: 'https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop',
      tier: 'Platinum Partner',
      description: 'Supporting our battery technology development'
    },
    {
      name: 'SolarMax Industries',
      logo: 'https://images.pexels.com/photos/9875445/pexels-photo-9875445.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop',
      tier: 'Gold Partner',
      description: 'Providing high-efficiency solar panels'
    },
    {
      name: 'AeroTech Solutions',
      logo: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop',
      tier: 'Silver Partner',
      description: 'Aerodynamic consulting and wind tunnel access'
    },
    {
      name: 'GreenTech Materials',
      logo: 'https://images.pexels.com/photos/8849322/pexels-photo-8849322.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop',
      tier: 'Bronze Partner',
      description: 'Lightweight composite materials'
    },
    {
      name: 'Future Electronics',
      logo: 'https://images.pexels.com/photos/159201/circuit-circuit-board-resistor-computer-159201.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop',
      tier: 'Technology Partner',
      description: 'Electronic components and systems'
    },
    {
      name: 'UBC Okanagan',
      logo: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop',
      tier: 'Academic Partner',
      description: 'Research facilities and academic support'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sponsors.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [sponsors.length]);

  const nextSponsor = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sponsors.length);
  };

  const prevSponsor = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + sponsors.length) % sponsors.length);
  };

  const getTierColor = (tier: string) => {
    switch (tier.toLowerCase()) {
      case 'platinum partner':
        return 'text-gray-400';
      case 'gold partner':
        return 'text-gold-500';
      case 'silver partner':
        return 'text-gray-500';
      case 'bronze partner':
        return 'text-amber-600';
      default:
        return 'text-primary-600';
    }
  };

  return (
    <section id="sponsors" className="py-20 bg-gradient-to-br from-primary-900 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-gold-400 to-primary-400 bg-clip-text text-transparent">Partners</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're grateful for the support of our amazing partners who make our solar racing dreams possible
          </p>
        </div>

        {/* Featured Sponsor Carousel */}
        <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12">
          <div className="flex items-center justify-between">
            <button
              onClick={prevSponsor}
              className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            >
              <ArrowLeft className="h-6 w-6" />
            </button>

            <div className="flex-1 mx-8">
              <div className="text-center">
                <div className="w-48 h-24 mx-auto mb-6 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                  <img
                    src={sponsors[currentIndex].logo}
                    alt={sponsors[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">{sponsors[currentIndex].name}</h3>
                <p className={`font-semibold mb-4 ${getTierColor(sponsors[currentIndex].tier)}`}>
                  {sponsors[currentIndex].tier}
                </p>
                <p className="text-gray-300">
                  {sponsors[currentIndex].description}
                </p>
              </div>
            </div>

            <button
              onClick={nextSponsor}
              className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            >
              <ArrowRight className="h-6 w-6" />
            </button>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {sponsors.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-gold-400' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* All Sponsors Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-full h-16 bg-white rounded-lg mb-3 flex items-center justify-center overflow-hidden">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h4 className="text-sm font-semibold text-center">{sponsor.name}</h4>
            </div>
          ))}
        </div>

        {/* Become a Sponsor CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-600/20 to-gold-600/20 rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold mb-4">Become a Partner</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join our mission to advance sustainable transportation technology. Partner with us to support innovation, 
              education, and the future of clean energy racing.
            </p>
            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-gold-500 to-primary-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;