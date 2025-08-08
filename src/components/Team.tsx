import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'Sarah Chen',
      role: 'Team Captain & Mechanical Engineer',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Leading our mechanical design and overall team strategy.',
      social: {
        linkedin: '#',
        github: '#',
        email: '#'
      }
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Electrical Systems Lead',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Designing our power management and solar array systems.',
      social: {
        linkedin: '#',
        github: '#',
        email: '#'
      }
    },
    {
      name: 'Emma Thompson',
      role: 'Aerodynamics Engineer',
      image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Optimizing vehicle design for maximum efficiency.',
      social: {
        linkedin: '#',
        github: '#',
        email: '#'
      }
    },
    {
      name: 'David Kim',
      role: 'Materials Specialist',
      image: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Researching lightweight, durable materials for our chassis.',
      social: {
        linkedin: '#',
        github: '#',
        email: '#'
      }
    },
    {
      name: 'Priya Patel',
      role: 'Software & Controls',
      image: 'https://images.pexels.com/photos/3767411/pexels-photo-3767411.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Developing telemetry and vehicle control systems.',
      social: {
        linkedin: '#',
        github: '#',
        email: '#'
      }
    },
    {
      name: 'Alex Morrison',
      role: 'Business & Outreach',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Managing sponsorships and community partnerships.',
      social: {
        linkedin: '#',
        github: '#',
        email: '#'
      }
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our <span className="bg-gradient-to-r from-primary-600 to-gold-600 bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Talented students from diverse disciplines working together to build the future of solar racing
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Social Links */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={member.social.linkedin}
                    className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
                  >
                    <Linkedin className="h-4 w-4 text-primary-600" />
                  </a>
                  <a
                    href={member.social.github}
                    className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
                  >
                    <Github className="h-4 w-4 text-primary-600" />
                  </a>
                  <a
                    href={member.social.email}
                    className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
                  >
                    <Mail className="h-4 w-4 text-primary-600" />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-primary-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-primary-50 to-gold-50 rounded-2xl p-8 inline-block">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Join Us?</h3>
            <p className="text-gray-600 mb-6 max-w-md">
              We're always looking for passionate students to join our growing team!
            </p>
            <a
              href="#join"
              className="bg-gradient-to-r from-primary-500 to-gold-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Join Our Team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;