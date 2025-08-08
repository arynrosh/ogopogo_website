import React, { useState } from 'react';
import { Send, User, Mail, MessageSquare, MapPin, Phone, Clock, Instagram, Facebook, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
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
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: [
        'UBC Okanagan Campus',
        'Engineering Building, Room 142',
        '3333 University Way',
        'Kelowna, BC V1V 1V7'
      ]
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: [
        'General: info@ogopogosolar.ca',
        'Partnerships: partnerships@ogopogosolar.ca',
        'Media: media@ogopogosolar.ca',
        'Join Us: recruitment@ogopogosolar.ca'
      ]
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: [
        'Main Office: (250) 762-4445',
        'Team Captain: (250) 555-0123',
        'Business Manager: (250) 555-0124'
      ]
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: [
        'Monday - Friday: 9:00 AM - 5:00 PM',
        'Saturday: 10:00 AM - 2:00 PM',
        'Sunday: Closed',
        'Workshop access varies by season'
      ]
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: 'Instagram',
      handle: '@ogopogosolar',
      url: 'https://instagram.com/ogopogosolar',
      color: 'hover:text-pink-500'
    },
    {
      icon: Facebook,
      name: 'Facebook',
      handle: 'Ogopogo Solar Racing',
      url: 'https://facebook.com/ogopogosolar',
      color: 'hover:text-blue-600'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      handle: 'Ogopogo Solar',
      url: 'https://linkedin.com/company/ogopogo-solar',
      color: 'hover:text-blue-700'
    }
  ];

  const subjectOptions = [
    'General Inquiry',
    'Partnership/Sponsorship',
    'Join the Team',
    'Media Request',
    'Technical Question',
    'Event Invitation',
    'Other'
  ];

  return (
    <div className="pt-20 animate-fade-in">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-900 via-dark-900 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Contact us"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-up">
            Get In <span className="text-gold-400">Touch</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Have questions about our team, want to partner with us, or interested in joining our mission? 
            We'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-to-br from-primary-600 to-gold-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-dark-900 mb-4">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-dark-600 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-slide-in-left">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="bg-gradient-to-br from-primary-500 to-gold-500 p-3 rounded-full">
                    <MessageSquare className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-dark-900">Send us a message</h3>
                    <p className="text-dark-600">We'll respond within 24 hours</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
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

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-dark-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    >
                      <option value="">Select a subject</option>
                      {subjectOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-dark-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-vertical"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary-500 to-gold-500 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Map and Additional Info */}
            <div className="animate-slide-in-right space-y-8">
              {/* Campus Map */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-primary-100 to-gold-100 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-primary-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-dark-900 mb-2">UBC Okanagan Campus</h3>
                    <p className="text-dark-600">Engineering Building, Room 142</p>
                    <p className="text-dark-600">3333 University Way, Kelowna, BC</p>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-dark-900 mb-2">Getting Here</h4>
                  <p className="text-dark-600 text-sm mb-4">
                    Our workshop is located in the Engineering Building on the UBC Okanagan campus. 
                    Visitor parking is available in lots near the building.
                  </p>
                  <a
                    href="https://maps.google.com/maps?q=UBC+Okanagan+Engineering+Building"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                  >
                    <span>Get Directions</span>
                    <MapPin className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h3 className="text-xl font-bold text-dark-900 mb-6">Follow Our Journey</h3>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 group ${social.color}`}
                    >
                      <div className="bg-white p-3 rounded-full shadow-sm group-hover:shadow-md transition-shadow">
                        <social.icon className="h-6 w-6 text-dark-600 group-hover:scale-110 transition-transform" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-dark-900">{social.name}</h4>
                        <p className="text-dark-600 text-sm">{social.handle}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-gradient-to-br from-primary-600 to-gold-500 rounded-2xl shadow-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-6">Quick Stats</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-1">24hrs</div>
                    <div className="text-sm opacity-90">Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-1">25+</div>
                    <div className="text-sm opacity-90">Team Members</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-1">100%</div>
                    <div className="text-sm opacity-90">Passion Level</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-1">2026</div>
                    <div className="text-sm opacity-90">Competition Year</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark-900 mb-6">
              Frequently Asked <span className="text-primary-600">Questions</span>
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: 'How can I join the team?',
                answer: 'Visit our Join Us page to learn about open positions and submit an application. We welcome students from all disciplines and year levels.'
              },
              {
                question: 'Do you accept sponsorships?',
                answer: 'Yes! We offer various partnership levels to suit different budgets and goals. Contact our partnerships team to discuss opportunities.'
              },
              {
                question: 'Can I visit your workshop?',
                answer: 'Absolutely! Contact us to schedule a visit. We love showing off our projects and sharing our passion for solar racing.'
              },
              {
                question: 'When is the Solar Car Challenge 2026?',
                answer: 'The competition is scheduled for summer 2026. Follow our news page for updates on preparation and competition details.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-dark-900 mb-2">{faq.question}</h3>
                <p className="text-dark-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;