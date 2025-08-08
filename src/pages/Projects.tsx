import React, { useState } from 'react';
import { Calendar, ExternalLink, Github, Play, Zap, Gauge, Battery, Wind } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'Demo Vehicle - Genesis',
      status: 'Completed',
      year: '2024',
      category: 'Prototype',
      description: 'Our first solar vehicle prototype, designed to validate our core concepts and establish our engineering capabilities. Genesis served as a proof-of-concept for our aerodynamic design principles and solar integration systems.',
      longDescription: 'Genesis represents the foundation of our solar racing program. This prototype vehicle allowed us to test fundamental concepts in solar vehicle design, from aerodynamics to power management. The project involved extensive CAD modeling, wind tunnel testing, and real-world validation on our test track.',
      specs: {
        'Solar Array': '1.2 kW peak power',
        'Battery': '5 kWh lithium-ion',
        'Weight': '350 kg',
        'Top Speed': '85 km/h',
        'Range': '400 km (sunny conditions)',
        'Drag Coefficient': '0.18 Cd'
      },
      images: [
        'https://images.pexels.com/photos/9875416/pexels-photo-9875416.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      achievements: [
        'Successfully completed 500+ km of testing',
        'Achieved target efficiency of 95%+ in power systems',
        'Validated aerodynamic design through wind tunnel testing',
        'Established manufacturing processes and quality standards'
      ],
      technologies: ['Carbon Fiber Composite', 'MPPT Solar Controllers', 'Regenerative Braking', 'Telemetry Systems']
    },
    {
      id: 2,
      title: 'Competition Vehicle - Helios',
      status: 'In Development',
      year: '2025-2026',
      category: 'Race Car',
      description: 'Our advanced competition vehicle designed specifically for the Solar Car Challenge 2026. Helios incorporates lessons learned from Genesis with cutting-edge materials and optimized aerodynamics.',
      longDescription: 'Helios represents the culmination of our engineering efforts, designed from the ground up for competitive solar racing. Every component has been optimized for the unique demands of multi-day endurance racing, from advanced composite materials to sophisticated energy management systems.',
      specs: {
        'Solar Array': '4.0 kW peak power',
        'Battery': '5 kWh (regulation limit)',
        'Weight': '280 kg (target)',
        'Top Speed': '120+ km/h',
        'Range': '800+ km (optimal conditions)',
        'Drag Coefficient': '0.12 Cd (target)'
      },
      images: [
        'https://images.pexels.com/photos/8849322/pexels-photo-8849322.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/159201/circuit-circuit-board-resistor-computer-159201.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/9875445/pexels-photo-9875445.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      achievements: [
        'Advanced CFD analysis completed',
        'Lightweight chassis design finalized',
        'High-efficiency motor selection completed',
        'Sponsorship partnerships secured'
      ],
      technologies: ['Advanced Carbon Fiber', 'AI-Optimized Aerodynamics', 'Custom Motor Controller', 'Real-time Strategy System']
    },
    {
      id: 3,
      title: 'Research Platform - Aurora',
      status: 'Planned',
      year: '2027+',
      category: 'Research',
      description: 'A next-generation research platform focused on advancing solar vehicle technology and exploring commercial applications of our innovations.',
      longDescription: 'Aurora will serve as our research and development platform, exploring cutting-edge technologies that could revolutionize solar transportation. This project will focus on technology transfer and commercial viability of solar vehicle innovations.',
      specs: {
        'Solar Array': '6.0+ kW peak power',
        'Battery': 'Next-gen solid state',
        'Weight': 'TBD',
        'Top Speed': 'TBD',
        'Range': '1000+ km target',
        'Efficiency': '98%+ target'
      },
      images: [
        'https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/9875408/pexels-photo-9875408.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      achievements: [
        'Concept development in progress',
        'Research partnerships being established',
        'Technology roadmap defined',
        'Funding strategy developed'
      ],
      technologies: ['Perovskite Solar Cells', 'Solid State Batteries', 'AI-Driven Optimization', 'Wireless Power Transfer']
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'bg-primary-100 text-primary-800';
      case 'in development':
        return 'bg-gold-100 text-gold-800';
      case 'planned':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getSpecIcon = (spec: string) => {
    if (spec.toLowerCase().includes('solar')) return Zap;
    if (spec.toLowerCase().includes('speed')) return Gauge;
    if (spec.toLowerCase().includes('battery')) return Battery;
    if (spec.toLowerCase().includes('drag')) return Wind;
    return Zap;
  };

  return (
    <div className="pt-20 animate-fade-in">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-900 via-dark-900 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Engineering projects"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-up">
            Our <span className="text-gold-400">Projects</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            From prototype to competition-ready vehicles, explore our journey of innovation 
            and engineering excellence in solar racing technology.
          </p>
        </div>
      </section>

      {/* Project Navigation */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {projects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => setActiveProject(index)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeProject === index
                    ? 'bg-gradient-to-r from-primary-600 to-gold-500 text-white shadow-lg'
                    : 'bg-gray-100 text-dark-700 hover:bg-gray-200'
                }`}
              >
                {project.title.split(' - ')[1] || project.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Active Project Details */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Project Header */}
            <div className="bg-gradient-to-r from-primary-600 to-gold-500 text-white p-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(projects[activeProject].status)} bg-white/20 text-white`}>
                      {projects[activeProject].status}
                    </span>
                    <span className="text-gold-200">{projects[activeProject].year}</span>
                  </div>
                  <h2 className="text-4xl font-bold mb-2">{projects[activeProject].title}</h2>
                  <p className="text-xl text-gray-200">{projects[activeProject].category}</p>
                </div>
                <div className="flex space-x-3">
                  <button className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors">
                    <Github className="h-5 w-5" />
                  </button>
                  <button className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors">
                    <ExternalLink className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-8">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Description and Details */}
                <div>
                  <h3 className="text-2xl font-bold text-dark-900 mb-4">Project Overview</h3>
                  <p className="text-dark-600 mb-6 leading-relaxed">
                    {projects[activeProject].longDescription}
                  </p>

                  <h4 className="text-xl font-bold text-dark-900 mb-4">Key Achievements</h4>
                  <ul className="space-y-2 mb-8">
                    {projects[activeProject].achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-dark-600">{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  <h4 className="text-xl font-bold text-dark-900 mb-4">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {projects[activeProject].technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Specifications */}
                <div>
                  <h3 className="text-2xl font-bold text-dark-900 mb-6">Technical Specifications</h3>
                  <div className="space-y-4 mb-8">
                    {Object.entries(projects[activeProject].specs).map(([key, value], index) => {
                      const IconComponent = getSpecIcon(key);
                      return (
                        <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div className="bg-primary-100 p-2 rounded-lg">
                              <IconComponent className="h-5 w-5 text-primary-600" />
                            </div>
                            <span className="font-medium text-dark-700">{key}</span>
                          </div>
                          <span className="font-semibold text-dark-900">{value}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Project Images */}
                  <h4 className="text-xl font-bold text-dark-900 mb-4">Project Gallery</h4>
                  <div className="grid grid-cols-1 gap-4">
                    {projects[activeProject].images.map((image, index) => (
                      <div key={index} className="relative group overflow-hidden rounded-lg">
                        <img
                          src={image}
                          alt={`${projects[activeProject].title} - Image ${index + 1}`}
                          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <button className="m-4 bg-white/20 backdrop-blur-sm p-2 rounded-full">
                            <Play className="h-5 w-5 text-white" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark-900 mb-6">
              Development <span className="text-primary-600">Timeline</span>
            </h2>
            <p className="text-xl text-dark-600 max-w-3xl mx-auto">
              Track our progress from concept to competition across all our projects
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-200 to-gold-200"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {projects.map((project, index) => (
                <div key={project.id} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                          {project.status}
                        </span>
                        <span className="text-sm text-dark-500">{project.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-dark-900 mb-2">{project.title}</h3>
                      <p className="text-dark-600 text-sm">{project.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-primary-500 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;