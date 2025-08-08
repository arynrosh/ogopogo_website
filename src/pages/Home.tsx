import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Zap, Users } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://i.ibb.co/FsfYBWp/Sponsors.jpg"
            alt="Solar car racing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/40" />
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          {/* Intentionally no headline per your request */}
          <h1 className="font-bebas leading-tight text-center text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white" />
        </div>
      </section>

      {/* Split-view: Mission (left) + Pillars (right) */}
      <section className="py-16 sm:py-18 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-8 items-stretch">
            {/* Left: Mission panel */}
            <div className="flex">
              <div
                className="
                  w-full rounded-3xl bg-[#015e37] text-white
                  px-6 sm:px-8 lg:px-12
                  py-10 sm:py-12 lg:py-0
                  flex flex-col justify-center
                  shadow-lg
                "
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                  OUR <span className="text-[#FFD700]">MISSION</span>
                </h2>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-white/90 mb-8">
                  Ogopogo Solar is a student-led team at UBC Okanagan. We design, build,
                  and race solar-powered vehicles to advance clean mobility, prove what
                  renewable energy can do, and develop the next generation of engineers
                  and innovators.
                </p>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold shadow-md transition-all duration-300 hover:shadow-lg hover:translate-y-[-1px]"
                  style={{ backgroundColor: '#FFD700', color: '#000' }}
                >
                  LEARN MORE
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Right: Pillars stack */}
            <div className="flex flex-col justify-center gap-6">
              {[
                {
                  icon: Target,
                  title: 'INNOVATION',
                  description:
                    'Pushing new aero, battery, and chassis designs every season.',
                },
                {
                  icon: Zap,
                  title: 'SUSTAINABILITY',
                  description:
                    'Turning sunlight into reliable, race-proven performance.',
                },
                {
                  icon: Users,
                  title: 'EDUCATION',
                  description:
                    'Real projects, real deadlines — industry-ready skills.',
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-5 p-5 sm:p-6 md:p-7 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full grid place-items-center bg-gradient-to-br from-[#147648] to-[#FFD700]">
                    <feature.icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-dark-900 mb-1.5 sm:mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-dark-600 leading-relaxed text-sm sm:text-base">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark-900">
              Explore Our{' '}
              <span className="bg-gradient-to-r from-primary-600 to-gold-600 bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'About Us',
                description: 'See where we’ve come from and where we’re headed.',
                link: '/about',
                image:
                  'https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
              },
              {
                title: 'Our Projects',
                description: 'Discover the builds that power our mission.',
                link: '/projects',
                image:
                  'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
              },
              {
                title: 'Meet the Team',
                description: 'Meet the students driving innovation.',
                link: '/team',
                image:
                  'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
              },
              {
                title: 'Latest News',
                description: 'Follow our latest breakthroughs and wins.',
                link: '/news',
                image:
                  'https://images.pexels.com/photos/9875408/pexels-photo-9875408.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
              },
            ].map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-dark-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-dark-600 mb-4">{item.description}</p>
                  <div className="flex items-center text-primary-600 font-semibold group-hover:text-gold-600 transition-colors">
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-primary-900 to-dark-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Ready to Shape the <span className="text-gold-400">Future?</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-10 sm:mb-12 max-w-3xl mx-auto">
            Join our team of passionate engineers, designers, and innovators as we race toward
            a sustainable tomorrow. Every skill has a place in our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/join"
              className="bg-gradient-to-r from-gold-500 to-primary-500 text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Join Our Team
            </Link>
            <Link
              to="/sponsors"
              className="border-2 border-gold-400 text-gold-400 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-gold-400 hover:text-dark-900 transition-all duration-300"
            >
              Become a Sponsor
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
