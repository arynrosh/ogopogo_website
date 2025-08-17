// src/components/Hero.tsx
import React, { useEffect, memo } from 'react';

interface HeroProps {
  backgroundImage: string;
  /** Optional responsive sources (e.g., "hero-800.avif 800w, hero-1600.avif 1600w") */
  srcSet?: string;
  /** Sizes hint for responsive images; default covers full-bleed hero */
  sizes?: string;
  /** Mark this hero image as high priority for LCP (default: true) */
  priority?: boolean;

  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  overlayOpacity?: string; // e.g., 'bg-black/50'
  /**
   * Where to anchor the image crop.
   * 'center', 'top', 'bottom', 'left', 'right', or a custom object-position (e.g., '50% 20%').
   */
  focus?: 'center' | 'top' | 'bottom' | 'left' | 'right' | string;
}

const Hero: React.FC<HeroProps> = ({
  backgroundImage,
  srcSet,
  sizes = '100vw',
  priority = true,
  title,
  subtitle,
  overlayOpacity = 'bg-black/50',
  focus = '50% 20%', // bias toward upper center to keep faces in frame on tall phones
}) => {
  // Robust 100% viewport height on mobile (fixes iOS URL bar issues)
  useEffect(() => {
    const setVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    setVH();
    window.addEventListener('resize', setVH, { passive: true });
    window.addEventListener('orientationchange', setVH);
    return () => {
      window.removeEventListener('resize', setVH);
      window.removeEventListener('orientationchange', setVH);
    };
  }, []);

  return (
    <section
      className="relative flex items-center justify-center overflow-hidden"
      // Use the custom var; fall back to modern dvh/svh, then vh.
      style={{
        minHeight: 'calc(var(--vh, 1vh) * 100)',
        // @ts-expect-error modern viewport units (some TS configs don't know these tokens)
        minHeightFallback: '100dvh',
      }}
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt="" // decorative
          className="w-full h-full object-cover"
          style={{ objectPosition: focus }}
          // Performance / LCP hints:
          // Only set loading="lazy" when *not* priority, otherwise keep it eager.
          {...(!priority ? { loading: 'lazy' as const } : {})}
          decoding="async"
          // fetchPriority is a strong LCP hint for Chrome-based browsers
          // (ignored elsewhere, safe to include)
          fetchPriority={priority ? 'high' : 'auto'}
          // Responsive sources if provided
          {...(srcSet ? { srcSet, sizes } : {})}
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

export default memo(Hero);
