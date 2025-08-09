// src/components/Hero.tsx
import React from 'react';

interface HeroProps {
  backgroundImage: string;
  title?: string;
  subtitle?: string;
  overlayOpacity?: string; // e.g., 'bg-black/50'
}

const Hero: React.FC<HeroProps> = ({
  backgroundImage,
  title,
  subtitle,
  overlayOpacity = 'bg-black/50',
}) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 ${overlayOpacity}`} />
      </div>

      {/* Content */}
      {(title || subtitle) && (
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          {title && (
            <h1 className="font-bebas leading-tight text-3xl sm:text-5xl md:text-6xl lg:text-7xl mb-4">
              {title}
            </h1>
          )}
          {subtitle && (
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      )}
    </section>
  );
};

export default Hero;
