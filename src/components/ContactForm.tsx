import React, { useState } from 'react';
import { Send, User, Mail, MessageSquare, Users } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: '',
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
    
    alert('Thank you for your interest! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', interest: '', message: '' });
    setIsSubmitting(false);
  };

  const interestOptions = [
    'Join the Team',
    'Partnership/Sponsorship',
    'Media Inquiry',
    'Academic Collaboration',
    'General Question',
    'Other'
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary-50 to-gold-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get In <span className="bg-gradient-to-r from-primary-600 to-gold-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to join our team, become a partner, or learn more about our project? We'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center space-x-3 mb-8">
              <div className="bg-gradient-to-br from-primary-500 to-gold-500 p-3 rounded-full">
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Send us a message</h3>
                <p className="text-gray-600">We'll respond within 24 hours</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
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
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
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
                <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
                  I'm interested in *
                </label>
                <div className="relative">
                  <Users className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors appearance-none bg-white"
                  >
                    <option value="">Select your interest</option>
                    {interestOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
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
                  placeholder="Tell us more about your interest or question..."
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

          {/* Contact Information & CTA */}
          <div className="space-y-8">
            {/* Join Us CTA */}
            <div id="join" className="bg-gradient-to-br from-primary-500 to-gold-500 rounded-2xl p-8 text-white">
              <h3 className="text-3xl font-bold mb-4">Ready to Join Us?</h3>
              <p className="mb-6 text-primary-100 leading-relaxed">
                We're always looking for passionate students from all disciplines to join our team. 
                Whether you're interested in engineering, business, design, or outreach, there's a place for you!
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Mechanical & Electrical Engineering</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Computer Science & Software Development</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Business & Marketing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Design & Communications</span>
                </div>
              </div>
              <p className="text-sm text-primary-100">
                Fill out the contact form with "Join the Team" to get started!
              </p>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">By the Numbers</h4>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">25+</div>
                  <div className="text-gray-600">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold-600 mb-2">5</div>
                  <div className="text-gray-600">Disciplines</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">1000+</div>
                  <div className="text-gray-600">Hours of Work</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold-600 mb-2">10+</div>
                  <div className="text-gray-600">Partners</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;