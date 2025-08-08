import React, { useState, useEffect } from 'react';
import { ExternalLink, Star, ArrowRight, CheckCircle, Crown, Award, Medal } from 'lucide-react';

const Sponsors: React.FC = () => {
  const [currentFeaturedIndex, setCurrentFeaturedIndex] = useState(0);

  const sponsorTiers = [
    {
      name: 'Platinum Partner',
      icon: Crown,
      color: 'from-gray-400 to-gray-600',
      textColor: 'text-gray-600',
      bgColor: 'bg-gray-50',
      borderColor: 'border-gray-200',
      benefits: [
        'Logo on vehicle and all marketing materials',
        'Dedicated social media features',
        'VIP access to all events and competitions',
        'Technical collaboration opportunities',
        'Annual partnership review meeting',
        'Custom partnership package available'
      ],
      investment: '$10,000+',
      sponsors: [
        {
          name: 'Tesla Energy Solutions',
          logo: 'https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=300&h=150&fit=crop',
          description: 'Leading provider of battery technology and energy storage solutions',
          website: 'https://tesla.com',
          partnership: 'Battery technology and charging infrastructure'
        }
      ]
    },
    {
      name: 'Gold Partner',
      icon: Award,
      color: 'from-gold-400 to-gold-600',
      textColor: 'text-gold-600',
      bgColor: 'bg-gold-50',
      borderColor: 'border-gold-200',
      benefits: [
        'Logo on vehicle and team apparel',
        'Regular social media mentions',
        'Event invitations and updates',
        'Technical consultation opportunities',
        'Quarterly progress reports'
      ],
      investment: '$5,000 - $9,999',
      sponsors: [
        {
          name: 'SolarMax Industries',
          logo: 'https://images.pexels.com/photos/9875445/pexels-photo-9875445.jpeg?auto=compress&cs=tinysrgb&w=300&h=150&fit=crop',
          description: 'High-efficiency solar panel manufacturer',
          website: 'https://solarmax.com',
          partnership: 'Solar panel technology and optimization'
        },
        {
          name: 'AeroTech Solutions',
          logo: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=300&h=150&fit=crop',
          description: 'Aerodynamic consulting and wind tunnel services',
          website: 'https://aerotech.com',
          partnership: 'Aerodynamic testing and consultation'
        }
      ]
    },
    {
      name: 'Silver Partner',
      icon: Medal,
      color: 'from-gray-300 to-gray-500',
      textColor: 'text-gray-500',
      bgColor: 'bg-gray-50',
      borderColor: 'border-gray-200',
      benefits: [
        'Logo on team website and materials',
        'Social media recognition',
        'Event invitations',
        'Progress updates'
      ],
      investment: '$2,500 - $4,999',
      sponsors: [
        {
          name: 'GreenTech Materials',
          logo: 'https://images.pexels.com/photos/8849322/pexels-photo-8849322.jpeg?auto=compress&cs=tinysrgb&w=300&h=150&fit=crop',
          description: 'Lightweight composite materials supplier',
          website: 'https://greentech.com',
          partnership: 'Carbon fiber and composite materials'
        },
        {
          name: 'Future Electronics',
          logo: 'https://images.pexels.com/photos/159201/circuit-circuit-board-resistor-computer-159201.jpeg?auto=compress&cs=tinysrgb&w=300&h=150&fit=crop',
          description: 'Electronic components and systems',
          website: 'https://futureelectronics.com',
          partnership: 'Electronic components and PCB manufacturing'
        }
      ]
    },
    {
      name: 'Bronze Partner',
      icon: Star,
      color: 'from-amber-600 to-amber-800',
      textColor: 'text-amber-700',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200',
      benefits: [
        'Logo on team website',
        'Social media mentions',
        'Newsletter updates'
      ],
      investment: '$1,000 - $2,499',
      sponsors: [
        {
          name: 'Local Machine Shop',
          logo: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=300&h=150&fit=crop',
          description: 'Precision machining and fabrication services',
          website: 'https://localmachine.com',
          partnership: 'Custom part manufacturing'
        },
        {
          name: 'UBC Okanagan',
          logo: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=300&h=150&fit=crop',
          description: 'Academic partner and facility provider',
          website: 'https://ubc.ca',
          partnership: 'Research facilities and academic support'
        }
      ]
    }
  ];

  const allSponsors = sponsorTiers.flatMap(tier => tier.sponsors);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFeaturedIndex((prevIndex) => (prevIndex + 1) % allSponsors.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [allSponsors.length]);

  return (
    <div className="pt-20 animate-fade-in">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-900 via-dark-900 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Partnership collaboration"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-up">
            Our <span className="text-gold-400">Partners</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            We're grateful for the support of our amazing partners who make our solar racing dreams possible. 
            Together, we're driving innovation in sustainable transportation.
          </p>
        </div>
      </section>

      {/* Featured Partner Spotlight */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-dark-900 mb-4">
              Partner <span className="text-primary-600">Spotlight</span>
            </h2>
          </div>

          <div className="bg-gradient-to-br from-primary-50 to-gold-50 rounded-3xl p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-white rounded-2xl p-8 shadow-lg mb-6">
                  <img
                    src={allSponsors[currentFeaturedIndex]?.logo}
                    alt={allSponsors[currentFeaturedIndex]?.name}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-3xl font-bold text-dark-900 mb-4">
                  {allSponsors[currentFeaturedIndex]?.name}
                </h3>
                <p className="text-lg text-dark-600 mb-6">
                  {allSponsors[currentFeaturedIndex]?.description}
                </p>
                <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-dark-800 mb-2">Partnership Focus:</h4>
                  <p className="text-dark-600">{allSponsors[currentFeaturedIndex]?.partnership}</p>
                </div>
                <a
                  href={allSponsors[currentFeaturedIndex]?.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-primary-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-700 transition-colors"
                >
                  <span>Visit Website</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {allSponsors.map((sponsor, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentFeaturedIndex(index)}
                    className={`bg-white rounded-xl p-4 transition-all duration-300 ${
                      index === currentFeaturedIndex
                        ? 'ring-2 ring-primary-500 shadow-lg scale-105'
                        : 'hover:shadow-md hover:scale-102'
                    }`}
                  >
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="w-full h-16 object-cover rounded-lg mb-2"
                    />
                    <p className="text-sm font-medium text-dark-700 text-center">{sponsor.name}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark-900 mb-6">
              Partnership <span className="text-primary-600">Opportunities</span>
            </h2>
            <p className="text-xl text-dark-600 max-w-3xl mx-auto">
              Join our mission to advance sustainable transportation. Choose the partnership level that aligns with your goals.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {sponsorTiers.map((tier, tierIndex) => (
              <div
                key={tier.name}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden animate-slide-up`}
                style={{ animationDelay: `${tierIndex * 0.1}s` }}
              >
                {/* Tier Header */}
                <div className={`bg-gradient-to-r ${tier.color} text-white p-6`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <tier.icon className="h-8 w-8" />
                      <div>
                        <h3 className="text-2xl font-bold">{tier.name}</h3>
                        <p className="text-lg opacity-90">{tier.investment}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Benefits */}
                <div className="p-6">
                  <h4 className="text-lg font-bold text-dark-900 mb-4">Partnership Benefits:</h4>
                  <ul className="space-y-2 mb-6">
                    {tier.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-primary-500 mt-0.5 flex-shrink-0" />
                        <span className="text-dark-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Current Sponsors */}
                  {tier.sponsors.length > 0 && (
                    <div>
                      <h4 className="text-lg font-bold text-dark-900 mb-4">Current Partners:</h4>
                      <div className="space-y-3">
                        {tier.sponsors.map((sponsor, index) => (
                          <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                            <img
                              src={sponsor.logo}
                              alt={sponsor.name}
                              className="w-12 h-12 object-cover rounded"
                            />
                            <div className="flex-1">
                              <h5 className="font-semibold text-dark-800">{sponsor.name}</h5>
                              <p className="text-sm text-dark-600">{sponsor.partnership}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Sponsor CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-900 to-dark-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to <span className="text-gold-400">Partner</span> With Us?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join our mission to advance sustainable transportation technology. Partner with us to support innovation, 
              education, and the future of clean energy racing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: 'Innovation Partnership',
                description: 'Collaborate on cutting-edge solar and electric vehicle technology',
                icon: '🚀'
              },
              {
                title: 'Brand Visibility',
                description: 'Showcase your commitment to sustainability to our engaged audience',
                icon: '📈'
              },
              {
                title: 'Talent Pipeline',
                description: 'Connect with top engineering and business students for recruitment',
                icon: '🎓'
              }
            ].map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-gold-500 to-primary-500 text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Become a Partner</span>
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="mailto:partnerships@ogopogosolar.ca"
                className="border-2 border-gold-400 text-gold-400 px-10 py-4 rounded-full text-lg font-semibold hover:bg-gold-400 hover:text-dark-900 transition-all duration-300"
              >
                Contact Partnerships Team
              </a>
            </div>
            <p className="text-gray-400 mt-6">
              Custom partnership packages available. Let's discuss how we can work together.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sponsors;