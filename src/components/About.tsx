import React from 'react';
import { Target, Zap, Users } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To advance sustainable transportation through innovative solar vehicle design and engineering excellence.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Pushing the boundaries of solar technology and aerodynamic design to create world-class racing vehicles.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a diverse team of passionate students dedicated to clean energy and competitive racing.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-primary-600 to-gold-600 bg-clip-text text-transparent">Ogopogo Solar</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are UBC Okanagan's premier solar racing team, dedicated to designing and building 
            cutting-edge solar vehicles that compete in international solar racing competitions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">Engineering the Future</h3>
            <p className="text-gray-600 leading-relaxed">
              Our multidisciplinary team combines mechanical engineering, electrical systems, 
              aerodynamics, and materials science to create vehicles that harness the power 
              of the sun for high-performance racing.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From our first demo vehicle to our ambitious plans for the Solar Car Challenge 2026, 
              we're committed to pushing the boundaries of what's possible with renewable energy.
            </p>
            <a
              href="#timeline"
              className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-300"
            >
              See Our Journey
            </a>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Solar panel engineering"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-gold-500/20 rounded-2xl"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-primary-500 to-gold-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;