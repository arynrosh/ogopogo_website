import React from 'react';
import { ArrowDown, Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/9875445/pexels-photo-9875445.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Solar car racing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block">Driven by Curiosity,</span>
            <span className="block bg-gradient-to-r from-gold-400 to-primary-400 bg-clip-text text-transparent">
              Powered by the Sun
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            UBC Okanagan's premier solar racing team, engineering sustainable solutions 
            and competing on the world stage.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#join"
              className="bg-gradient-to-r from-primary-500 to-gold-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Join Our Team</span>
              <ArrowDown className="h-5 w-5 animate-bounce-gentle" />
            </a>
            
            <a
              href="#about"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center space-x-2"
            >
              <Play className="h-5 w-5" />
              <span>Watch Our Story</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
        <ArrowDown className="h-6 w-6 text-white" />
      </div>
    </section>
  );
};

export default Hero;