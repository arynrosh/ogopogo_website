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
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {title && (
            <div className="font-bebas leading-tight text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl mb-4">
              {title}
            </div>
          )}
          {subtitle && (
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      )}
    </section>
  );
};

export default Hero;
