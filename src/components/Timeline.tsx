import React, { useState } from 'react';
import { Calendar, CheckCircle, Clock, Target } from 'lucide-react';

const Timeline: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const milestones = [
    {
      id: 1,
      title: 'Demo Vehicle',
      date: '2024',
      status: 'completed',
      description: 'Successfully built and tested our first prototype solar vehicle, proving our concept and team capabilities.',
      image: 'https://images.pexels.com/photos/9875416/pexels-photo-9875416.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      achievements: ['Aerodynamic design', 'Basic solar array', 'Test track validation']
    },
    {
      id: 2,
      title: 'Solar Car Challenge 2026',
      date: '2026',
      status: 'in-progress',
      description: 'Competing in the prestigious Solar Car Challenge with our advanced racing vehicle designed for optimal performance.',
      image: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      achievements: ['Competition registration', 'Advanced vehicle design', 'Team training program']
    },
    {
      id: 3,
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

  return (
    <section id="timeline" className="py-20 bg-gradient-to-br from-primary-50 to-gold-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-primary-600 to-gold-600 bg-clip-text text-transparent">Project Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to competition - follow our path to solar racing excellence
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
                    onClick={() => setActiveIndex(index)}
                    className={`w-16 h-16 rounded-full border-4 flex items-center justify-center mx-auto mb-4 transition-all duration-300 ${
                      activeIndex === index
                        ? 'border-primary-500 bg-primary-500 shadow-lg scale-110'
                        : 'border-gray-300 bg-white hover:border-primary-300'
                    }`}
                  >
                    {getStatusIcon(milestone.status)}
                  </button>
                  <div className="space-y-2">
                    <h3 className={`font-bold ${activeIndex === index ? 'text-primary-600' : 'text-gray-700'}`}>
                      {milestone.title}
                    </h3>
                    <p className="text-sm text-gray-500">{milestone.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Active Milestone Details */}
          <div className="mt-16 bg-white rounded-2xl shadow-xl p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <Calendar className="h-6 w-6 text-primary-500" />
                  <span className="text-primary-600 font-semibold">{milestones[activeIndex].date}</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {milestones[activeIndex].title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {milestones[activeIndex].description}
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {milestones[activeIndex].achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-gray-600">
                        <CheckCircle className="h-4 w-4 text-primary-500" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <img
                  src={milestones[activeIndex].image}
                  alt={milestones[activeIndex].title}
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
                    <h3 className="text-xl font-bold text-gray-900">{milestone.title}</h3>
                    <span className="text-sm text-primary-600 bg-primary-100 px-2 py-1 rounded-full">
                      {milestone.date}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{milestone.description}</p>
                  <img
                    src={milestone.image}
                    alt={milestone.title}
                    className="rounded-lg mb-4 w-full"
                  />
                  <div className="space-y-1">
                    {milestone.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
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
  );
};

export default Timeline;