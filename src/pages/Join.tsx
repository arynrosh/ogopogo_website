import React, { useState } from 'react';
import { Send, User, Mail, MessageSquare, GraduationCap, Heart, Zap, Users, Target, Award } from 'lucide-react';

const Join: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    program: '',
    year: '',
    discipline: '',
    experience: '',
    motivation: '',
    availability: '',
    skills: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Thank you for your application! We\'ll review it and get back to you within a week.');
    setFormData({
      name: '',
      email: '',
      program: '',
      year: '',
      discipline: '',
      experience: '',
      motivation: '',
      availability: '',
      skills: ''
    });
    setIsSubmitting(false);
  };

  const disciplines = [
    'Mechanical Engineering',
    'Electrical Engineering',
    'Computer Science',
    'Materials Engineering',
    'Business Administration',
    'Graphic Design',
    'Marketing',
    'Other'
  ];

  const yearLevels = ['1st Year', '2nd Year', '3rd Year', '4th Year', 'Graduate Student'];

  const teamCulture = [
    {
      icon: Zap,
      title: 'Innovation-Driven',
      description: 'We push boundaries and embrace creative solutions to complex engineering challenges.'
    },
    {
      icon: Users,
      title: 'Collaborative',
      description: 'Every voice matters. We work together across disciplines to achieve our goals.'
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'We set ambitious targets and work systematically to achieve them.'
    },
    {
      icon: Heart,
      title: 'Passionate',
      description: 'We\'re driven by our shared love for sustainable technology and racing.'
    }
  ];

  const openRoles = [
    {
      title: 'Mechanical Engineers',
      description: 'Design and optimize vehicle chassis, suspension, and aerodynamic components.',
      skills: ['CAD Design', 'Materials Science', 'Manufacturing', 'Testing']
    },
    {
      title: 'Electrical Engineers',
      description: 'Develop power systems, motor controllers, and energy management solutions.',
      skills: ['Power Electronics', 'PCB Design', 'Solar Systems', 'Battery Management']
    },
    {
      title: 'Software Developers',
      description: 'Create telemetry systems, data analysis tools, and vehicle control software.',
      skills: ['Embedded Systems', 'Data Analysis', 'Mobile Apps', 'Real-time Systems']
    },
    {
      title: 'Business & Marketing',
      description: 'Manage partnerships, sponsorships, and strategic planning for team growth.',
      skills: ['Partnership Development', 'Marketing', 'Financial Planning', 'Event Management']
    },
    {
      title: 'Design & Communications',
      description: 'Create visual identity, documentation, and communication materials.',
      skills: ['Graphic Design', 'Technical Writing', 'Social Media', 'Brand Strategy']
    }
  ];

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
            Join <span className="text-gold-400">Our Team</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Be part of something extraordinary. Join UBC Okanagan's premier solar racing team and help us 
            drive the future of sustainable transportation.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark-900 mb-6">
              Why Join <span className="text-primary-600">Ogopogo Solar?</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="animate-slide-in-left">
              <h3 className="text-3xl font-bold text-dark-900 mb-6">Shape the Future of Transportation</h3>
              <p className="text-lg text-dark-600 mb-6 leading-relaxed">
                Join a team that's not just building vehicles – we're pioneering the future of sustainable transportation. 
                As a member of Ogopogo Solar, you'll work on cutting-edge technology that could revolutionize how we move.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-dark-700">Hands-on experience with advanced solar and electric vehicle technology</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-dark-700">Opportunity to compete in prestigious international competitions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-dark-700">Build a portfolio of real-world engineering projects</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-dark-700">Network with industry professionals and potential employers</span>
                </div>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <img
                src="https://images.pexels.com/photos/9875445/pexels-photo-9875445.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Solar car technology"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* Team Culture */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamCulture.map((culture, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-to-br from-primary-600 to-gold-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <culture.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-dark-900 mb-3">{culture.title}</h3>
                <p className="text-dark-600">{culture.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark-900 mb-6">
              Open <span className="text-primary-600">Positions</span>
            </h2>
            <p className="text-xl text-dark-600 max-w-3xl mx-auto">
              We're looking for passionate students from all disciplines to join our team. 
              Find the role that matches your skills and interests.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {openRoles.map((role, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-dark-900">{role.title}</h3>
                  <Award className="h-6 w-6 text-primary-500" />
                </div>
                <p className="text-dark-600 mb-6 leading-relaxed">{role.description}</p>
                <div>
                  <h4 className="font-semibold text-dark-800 mb-3">Key Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {role.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark-900 mb-6">
              Ready to <span className="text-primary-600">Apply?</span>
            </h2>
            <p className="text-xl text-dark-600">
              Fill out the application form below and we'll get back to you within a week.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-2xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-dark-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-dark-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
              </div>

              {/* Academic Information */}
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="program" className="block text-sm font-medium text-dark-700 mb-2">
                    Program of Study *
                  </label>
                  <input
                    type="text"
                    id="program"
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="e.g., Mechanical Engineering"
                  />
                </div>

                <div>
                  <label htmlFor="year" className="block text-sm font-medium text-dark-700 mb-2">
                    Year Level *
                  </label>
                  <select
                    id="year"
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  >
                    <option value="">Select year</option>
                    {yearLevels.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="discipline" className="block text-sm font-medium text-dark-700 mb-2">
                    Interested Discipline *
                  </label>
                  <select
                    id="discipline"
                    name="discipline"
                    value={formData.discipline}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  >
                    <option value="">Select discipline</option>
                    {disciplines.map((discipline) => (
                      <option key={discipline} value={discipline}>
                        {discipline}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Experience and Skills */}
              <div>
                <label htmlFor="skills" className="block text-sm font-medium text-dark-700 mb-2">
                  Relevant Skills & Experience
                </label>
                <textarea
                  id="skills"
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-vertical"
                  placeholder="Tell us about your relevant skills, projects, or experience..."
                />
              </div>

              {/* Motivation */}
              <div>
                <label htmlFor="motivation" className="block text-sm font-medium text-dark-700 mb-2">
                  Why do you want to join Ogopogo Solar? *
                </label>
                <textarea
                  id="motivation"
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-vertical"
                  placeholder="Share your passion for sustainable technology and what motivates you to join our team..."
                />
              </div>

              {/* Availability */}
              <div>
                <label htmlFor="availability" className="block text-sm font-medium text-dark-700 mb-2">
                  Time Commitment & Availability *
                </label>
                <textarea
                  id="availability"
                  name="availability"
                  value={formData.availability}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-vertical"
                  placeholder="How many hours per week can you commit? Any scheduling constraints?"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary-600 to-gold-500 text-white py-4 px-8 rounded-lg text-lg font-semibold hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Submitting Application...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Submit Application</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-20 bg-gradient-to-br from-primary-900 to-dark-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Happens <span className="text-gold-400">Next?</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  step: '1',
                  title: 'Application Review',
                  description: 'We\'ll review your application and assess how your skills align with our current needs.'
                },
                {
                  step: '2',
                  title: 'Interview',
                  description: 'If selected, we\'ll invite you for a casual interview to get to know you better.'
                },
                {
                  step: '3',
                  title: 'Welcome Aboard',
                  description: 'Join our team and start working on exciting projects that will shape the future!'
                }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-br from-gold-500 to-primary-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Join;