import React, { useState } from 'react';
import { Github, Linkedin, Mail, Quote } from 'lucide-react';

const Team: React.FC = () => {
  const [selectedDiscipline, setSelectedDiscipline] = useState('All');

  const disciplines = ['All', 'Mechanical', 'Electrical', 'Software', 'Business', 'Design'];

  const teamMembers = [
    {
      name: 'Sarah Chen',
      role: 'Team Captain & Lead Mechanical Engineer',
      discipline: 'Mechanical',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Leading our mechanical design and overall team strategy with expertise in composite materials and aerodynamics.',
      funFact: 'Can solve a Rubik\'s cube in under 30 seconds while discussing drag coefficients',
      quote: 'Engineering is about turning impossible dreams into inevitable realities.',
      year: '4th Year Mechanical Engineering',
      social: {
        linkedin: '#',
        github: '#',
        email: 'sarah.chen@ogopogosolar.ca'
      },
      skills: ['CAD Design', 'Composite Materials', 'Project Management', 'Aerodynamics']
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Electrical Systems Lead',
      discipline: 'Electrical',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Designing our power management and solar array systems with a focus on maximum efficiency.',
      funFact: 'Built his first solar panel at age 12 and has been obsessed with renewable energy ever since',
      quote: 'The sun gives us more energy in one hour than humanity uses in a year. Let\'s harness it!',
      year: '3rd Year Electrical Engineering',
      social: {
        linkedin: '#',
        github: '#',
        email: 'marcus.rodriguez@ogopogosolar.ca'
      },
      skills: ['Power Electronics', 'Solar Systems', 'PCB Design', 'Energy Storage']
    },
    {
      name: 'Emma Thompson',
      role: 'Aerodynamics Engineer',
      discipline: 'Mechanical',
      image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Optimizing vehicle design for maximum efficiency through advanced CFD analysis and wind tunnel testing.',
      funFact: 'Holds the university record for paper airplane distance (127 feet)',
      quote: 'In aerodynamics, every curve tells a story of efficiency and elegance.',
      year: '4th Year Mechanical Engineering',
      social: {
        linkedin: '#',
        github: '#',
        email: 'emma.thompson@ogopogosolar.ca'
      },
      skills: ['CFD Analysis', 'Wind Tunnel Testing', 'MATLAB', 'Fluid Dynamics']
    },
    {
      name: 'David Kim',
      role: 'Materials Specialist',
      discipline: 'Mechanical',
      image: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Researching and implementing lightweight, durable materials for our chassis and body components.',
      funFact: 'Can identify over 50 different types of carbon fiber weaves by touch alone',
      quote: 'The right material in the right place can make the impossible possible.',
      year: '3rd Year Materials Engineering',
      social: {
        linkedin: '#',
        github: '#',
        email: 'david.kim@ogopogosolar.ca'
      },
      skills: ['Materials Science', 'Composite Manufacturing', 'Testing & Analysis', 'Quality Control']
    },
    {
      name: 'Priya Patel',
      role: 'Software & Controls Engineer',
      discipline: 'Software',
      image: 'https://images.pexels.com/photos/3767411/pexels-photo-3767411.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Developing telemetry systems, vehicle controls, and data analysis tools for optimal performance.',
      funFact: 'Coded her first mobile app at 14 and now has over 100k downloads',
      quote: 'Code is poetry that makes machines dance to our dreams.',
      year: '3rd Year Computer Science',
      social: {
        linkedin: '#',
        github: '#',
        email: 'priya.patel@ogopogosolar.ca'
      },
      skills: ['Embedded Systems', 'Data Analysis', 'Mobile Development', 'Machine Learning']
    },
    {
      name: 'Alex Morrison',
      role: 'Business & Outreach Manager',
      discipline: 'Business',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Managing sponsorships, community partnerships, and strategic planning for team growth.',
      funFact: 'Convinced a local coffee shop to sponsor the team with unlimited coffee for a year',
      quote: 'Great partnerships are built on shared visions and mutual success.',
      year: '4th Year Business Administration',
      social: {
        linkedin: '#',
        github: '#',
        email: 'alex.morrison@ogopogosolar.ca'
      },
      skills: ['Partnership Development', 'Marketing', 'Financial Planning', 'Public Speaking']
    },
    {
      name: 'Zoe Williams',
      role: 'Design & Communications Lead',
      discipline: 'Design',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Creating visual identity, documentation, and communication materials that tell our story.',
      funFact: 'Designed the team logo in a dream and sketched it immediately upon waking',
      quote: 'Design is not just how it looks, but how it makes people feel and act.',
      year: '2nd Year Graphic Design',
      social: {
        linkedin: '#',
        github: '#',
        email: 'zoe.williams@ogopogosolar.ca'
      },
      skills: ['Graphic Design', 'Technical Documentation', 'Social Media', 'Brand Strategy']
    },
    {
      name: 'Ryan Chang',
      role: 'Manufacturing Engineer',
      discipline: 'Mechanical',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Overseeing manufacturing processes, quality control, and assembly of vehicle components.',
      funFact: 'Built a fully functional 3D printer from scratch using recycled electronic components',
      quote: 'Precision in manufacturing is the bridge between design dreams and racing reality.',
      year: '4th Year Manufacturing Engineering',
      social: {
        linkedin: '#',
        github: '#',
        email: 'ryan.chang@ogopogosolar.ca'
      },
      skills: ['3D Printing', 'CNC Machining', 'Quality Assurance', 'Process Optimization']
    }
  ];

  const filteredMembers = selectedDiscipline === 'All' 
    ? teamMembers 
    : teamMembers.filter(member => member.discipline === selectedDiscipline);

  const getDisciplineColor = (discipline: string) => {
    const colors = {
      'Mechanical': 'bg-primary-100 text-primary-800',
      'Electrical': 'bg-gold-100 text-gold-800',
      'Software': 'bg-blue-100 text-blue-800',
      'Business': 'bg-purple-100 text-purple-800',
      'Design': 'bg-pink-100 text-pink-800'
    };
    return colors[discipline as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="pt-20 animate-fade-in">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-900 via-dark-900 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Team collaboration"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-up">
            Meet Our <span className="text-gold-400">Team</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Talented students from diverse disciplines working together to build the future of solar racing. 
            Every member brings unique skills and passion to our shared mission.
          </p>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '25+', label: 'Team Members' },
              { number: '5', label: 'Disciplines' },
              { number: '8', label: 'Leadership Roles' },
              { number: '100%', label: 'Passion Level' }
            ].map((stat, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl font-bold text-primary-600 mb-2">{stat.number}</div>
                <div className="text-dark-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Discipline Filter */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {disciplines.map((discipline) => (
              <button
                key={discipline}
                onClick={() => setSelectedDiscipline(discipline)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedDiscipline === discipline
                    ? 'bg-gradient-to-r from-primary-600 to-gold-500 text-white shadow-lg'
                    : 'bg-white text-dark-700 hover:bg-gray-100 shadow-sm'
                }`}
              >
                {discipline}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredMembers.map((member, index) => (
              <div
                key={member.name}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Member Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Social Links */}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <a
                      href={member.social.linkedin}
                      className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
                    >
                      <Linkedin className="h-4 w-4 text-primary-600" />
                    </a>
                    <a
                      href={member.social.github}
                      className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
                    >
                      <Github className="h-4 w-4 text-primary-600" />
                    </a>
                    <a
                      href={`mailto:${member.social.email}`}
                      className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
                    >
                      <Mail className="h-4 w-4 text-primary-600" />
                    </a>
                  </div>

                  {/* Discipline Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDisciplineColor(member.discipline)}`}>
                      {member.discipline}
                    </span>
                  </div>
                </div>
                
                {/* Member Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-dark-900 mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-semibold mb-2">{member.role}</p>
                  <p className="text-sm text-dark-500 mb-3">{member.year}</p>
                  <p className="text-dark-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                  
                  {/* Skills */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {member.skills.slice(0, 3).map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                    {member.skills.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                        +{member.skills.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Fun Fact */}
                  <div className="bg-gradient-to-r from-primary-50 to-gold-50 p-3 rounded-lg">
                    <div className="flex items-start space-x-2">
                      <Quote className="h-4 w-4 text-primary-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-dark-600 mb-1 italic">"{member.quote}"</p>
                        <p className="text-xs text-primary-600 font-medium">Fun fact: {member.funFact}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Team CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-900 to-dark-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Want to <span className="text-gold-400">Join Us?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              We're always looking for passionate students from all disciplines to join our growing team. 
              Whether you're interested in engineering, business, design, or outreach, there's a place for you!
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {disciplines.slice(1).map((discipline, index) => (
                <div
                  key={discipline}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
                >
                  <h3 className="text-lg font-bold mb-2">{discipline}</h3>
                  <p className="text-sm text-gray-300">
                    {discipline === 'Mechanical' && 'Design, analysis, and manufacturing'}
                    {discipline === 'Electrical' && 'Power systems and electronics'}
                    {discipline === 'Software' && 'Controls and data systems'}
                    {discipline === 'Business' && 'Strategy and partnerships'}
                    {discipline === 'Design' && 'Visual communication and UX'}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="/join"
                className="bg-gradient-to-r from-gold-500 to-primary-500 text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Apply to Join
              </a>
              <a
                href="/contact"
                className="border-2 border-gold-400 text-gold-400 px-10 py-4 rounded-full text-lg font-semibold hover:bg-gold-400 hover:text-dark-900 transition-all duration-300"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;