import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Team', path: '/team' },
    { name: 'Sponsors', path: '/sponsors' },
    { name: 'News & Blog', path: '/news' },
    { name: 'Join Us', path: '/join' },
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/ogopogosolar', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com/ogopogosolar', label: 'Facebook' },
    { icon: Linkedin, href: 'https://linkedin.com/company/ogopogo-solar', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-[#004126] text-white font-bebas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="https://i.ibb.co/CQBPt1C/ogopogo-logo.webp" 
                alt="Ogopogo Solar Logo" 
                className="h-12 w-auto object-contain"
              />
              <div>
                <h3 className=" text-xl font-bold" style={{ color: '#ffc82e' }}>
                  OGOPOGO SOLAR
                </h3>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Driven by curiosity, powered by the sun. We’re a student-led solar racing team 
              engineering sustainable solutions for tomorrow’s transportation.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="bg-[#00331E] p-3 rounded-full hover:bg-[#ffc82e] hover:text-black transition-all duration-300 transform hover:scale-110"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block text-gray-300 hover:text-[#ffc82e] transition-colors duration-300 hover:translate-x-1 transform"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#ffc82e] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">UBC Okanagan Campus</p>
                  <p className="text-gray-300">3333 University Way</p>
                  <p className="text-gray-300">Kelowna, BC V1V 1V7</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#ffc82e] flex-shrink-0" />
                <a
                  href="mailto:info@ogopogosolar.ca"
                  className="text-gray-300 hover:text-[#ffc82e] transition-colors"
                >
                  info@ogopogosolar.ca
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#ffc82e] flex-shrink-0" />
                <a
                  href="tel:+12507624445"
                  className="text-gray-300 hover:text-[#ffc82e] transition-colors"
                >
                  (250) 762-4445
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-bold mb-6">Stay Updated</h4>
            <p className="text-gray-300 mb-4">
              Get the latest news about our solar racing journey and upcoming events.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-[#00331E] border border-[#002A18] rounded-lg focus:ring-2 focus:ring-[#ffc82e] focus:border-[#ffc82e] transition-colors text-white placeholder-gray-400"
              />
              <button className="w-full bg-[#ffc82e] text-black px-4 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#00331E] mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Ogopogo Solar Racing Team. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#ffc82e] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#ffc82e] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-[#ffc82e] transition-colors">
                Code of Conduct
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
