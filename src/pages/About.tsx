import React, { useState } from 'react';
import { Calendar, CheckCircle, Clock, Target, Trophy, Users, Zap } from 'lucide-react';

const About: React.FC = () => {
  const [activeTimelineIndex, setActiveTimelineIndex] = useState(0);

  const milestones = [
    {
      id: 1,
      title: 'Team Formation',
      date: '2023',
      status: 'completed',
      description: 'Ogopogo Solar was founded by passionate UBC Okanagan students with a shared vision of sustainable transportation.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      achievements: ['Team establishment', 'Initial funding secured', 'Workshop space acquired']
    },
    {
      id: 2,
      title: 'Demo Vehicle',
      date: '2024',
      status: 'completed',
      description: 'Successfully built and tested our first prototype solar vehicle, proving our concept and team capabilities.',
      image: 'https://images.pexels.com/photos/9875416/pexels-photo-9875416.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      achievements: ['Aerodynamic design completed', 'Solar array integration', 'Test track validation']
    },
    {
      id: 3,
      title: 'Solar Car Challenge 2026',
      date: '2026',
      status: 'in-progress',
      description: 'Competing in the prestigious Solar Car Challenge with our advanced racing vehicle designed for optimal performance.',
      image: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      achievements: ['Competition registration', 'Advanced vehicle design', 'Team training program']
    },
    {
      id: 4,
      title: 'Future Goals',
      date: '2027+',
      status: 'planned',
      description: 'Expanding our impact through research partnerships, technology transfer, and inspiring the next generation.',
      image: 'https://images.pexels.com/photos/8849322/pexels-photo-8849322.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      achievements: ['Research partnerships', 'Technology commercialization', 'Education outreach']
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-6 w-6 text-primary-500" />;
      case 'in-progress':
        return <Clock className="h-6 w-6 text-gold-500" />;
      default:
        return <Target className="h-6 w-6 text-gray-400" />;
    }
  };

  const stats = [
    { number: '25+', label: 'Team Members', icon: Users },
    { number: '5', label: 'Disciplines', icon: Zap },
    { number: '1000+', label: 'Hours of Work', icon: Clock },
    { number: '2026', label: 'Competition Year', icon: Trophy },
  ];

  return (
    <div className="pt-20 animate-fade-in">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-900 via-dark-900 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Solar engineering"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-up">
            About <span className="text-gold-400">Ogopogo Solar</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            We are UBC Okanagan's premier solar racing team, dedicated to designing and building 
            cutting-edge solar vehicles that compete in international solar racing competitions.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl font-bold text-dark-900 mb-6">
                Our <span className="text-primary-600">Mission</span>
              </h2>
              <p className="text-lg text-dark-600 mb-6 leading-relaxed">
                To advance sustainable transportation through innovative solar vehicle design, 
                engineering excellence, and inspiring the next generation of clean energy pioneers.
              </p>
              <h3 className="text-2xl font-bold text-dark-900 mb-4">Our Vision</h3>
              <p className="text-lg text-dark-600 leading-relaxed">
                A world where sustainable transportation is not just possible, but preferred. 
                We envision solar-powered vehicles as a cornerstone of clean mobility, 
                and we're racing to make that future a reality.
              </p>
            </div>
            <div className="animate-slide-in-right">
              <img
                src="https://images.pexels.com/photos/9875445/pexels-photo-9875445.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Solar car racing"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark-900 mb-6">
              By the <span className="text-primary-600">Numbers</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-to-br from-primary-600 to-gold-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-primary-600 mb-2">{stat.number}</div>
                <div className="text-dark-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mb-6">
              Project <span className="bg-gradient-to-r from-primary-600 to-gold-600 bg-clip-text text-transparent">Timeline</span>
            </h2>
            <p className="text-xl text-dark-600 max-w-3xl mx-auto">
              From concept to competition - follow our journey to solar racing excellence
            </p>
          </div>

          {/* Desktop Timeline */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary-200 via-gold-200 to-gray-200 transform -translate-y-1/2"></div>
              
              {/* Timeline Points */}
              <div className="flex justify-between items-center relative z-10">
                {milestones.map((milestone, index) => (
                  <div key={milestone.id} className="flex-1 text-center">
                    <button
                      onClick={() => setActiveTimelineIndex(index)}
                      className={`w-16 h-16 rounded-full border-4 flex items-center justify-center mx-auto mb-4 transition-all duration-300 ${
                        activeTimelineIndex === index
                          ? 'border-primary-500 bg-primary-500 shadow-lg scale-110'
                          : 'border-gray-300 bg-white hover:border-primary-300'
                      }`}
                    >
                      {getStatusIcon(milestone.status)}
                    </button>
                    <div className="space-y-2">
                      <h3 className={`font-bold ${activeTimelineIndex === index ? 'text-primary-600' : 'text-dark-700'}`}>
                        {milestone.title}
                      </h3>
                      <p className="text-sm text-dark-500">{milestone.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Active Milestone Details */}
            <div className="mt-16 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <Calendar className="h-6 w-6 text-primary-500" />
                    <span className="text-primary-600 font-semibold">{milestones[activeTimelineIndex].date}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-dark-900 mb-4">
                    {milestones[activeTimelineIndex].title}
                  </h3>
                  <p className="text-dark-600 mb-6 leading-relaxed">
                    {milestones[activeTimelineIndex].description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-dark-800">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {milestones[activeTimelineIndex].achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-dark-600">
                          <CheckCircle className="h-4 w-4 text-primary-500" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div>
                  <img
                    src={milestones[activeTimelineIndex].image}
                    alt={milestones[activeTimelineIndex].title}
                    className="rounded-xl shadow-lg w-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden space-y-8">
            {milestones.map((milestone, index) => (
              <div key={milestone.id} className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full border-4 border-primary-500 bg-primary-500 flex items-center justify-center">
                      {getStatusIcon(milestone.status)}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="text-xl font-bold text-dark-900">{milestone.title}</h3>
                      <span className="text-sm text-primary-600 bg-primary-100 px-2 py-1 rounded-full">
                        {milestone.date}
                      </span>
                    </div>
                    <p className="text-dark-600 mb-4">{milestone.description}</p>
                    <img
                      src={milestone.image}
                      alt={milestone.title}
                      className="rounded-lg mb-4 w-full"
                    />
                    <div className="space-y-1">
                      {milestone.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm text-dark-600">
                          <CheckCircle className="h-4 w-4 text-primary-500" />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competition Goals */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-gold-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark-900 mb-6">
              Competition <span className="text-primary-600">Goals</span>
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h3 className="text-3xl font-bold text-dark-900 mb-6">Solar Car Challenge 2026</h3>
              <p className="text-lg text-dark-600 mb-6 leading-relaxed">
                Our primary goal is to compete in the Solar Car Challenge 2026, one of the most 
                prestigious solar racing competitions in North America. This multi-day endurance 
                race will test every aspect of our vehicle design and team preparation.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-dark-700">Complete 3,000+ km race distance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-dark-700">Achieve top 10 finish in our class</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-dark-700">Demonstrate innovative solar technology</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-dark-700">Inspire sustainable transportation adoption</span>
                </div>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <img
                src="https://images.pexels.com/photos/9875408/pexels-photo-9875408.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Solar car competition"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;