import React, { useEffect, useState } from 'react';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

const links = [
  { href: 'https://instagram.com/ogopogosolar', label: 'Instagram', Icon: Instagram },
  { href: 'https://facebook.com/ogopogosolar', label: 'Facebook', Icon: Facebook },
  { href: 'https://linkedin.com/company/ogopogo-solar', label: 'LinkedIn', Icon: Linkedin },
];

const HEADER_GREEN = '#004126';

const SocialWidget: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return window.scrollY > 20;
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    // Initialize once in case we land mid-page (deep link)
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const containerStyle: React.CSSProperties = scrolled
    ? {
        backgroundColor: HEADER_GREEN,
        borderColor: 'rgba(255,255,255,0.18)',
      }
    : {
        background: 'rgba(0,0,0,0.12)',
        borderColor: 'rgba(255,255,255,0.18)',
      };

  const tileStyle: React.CSSProperties = scrolled
    ? {
        background:
          'linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.04))',
        borderColor: 'rgba(255,255,255,0.18)',
      }
    : {
        background:
          'linear-gradient(180deg, rgba(255,255,255,0.14), rgba(255,255,255,0.06))',
        borderColor: 'rgba(255,255,255,0.20)',
      };

  return (
    <aside
      className="
        hidden md:flex
        fixed right-4 lg:right-6 top-1/2 -translate-y-1/2 z-40
        flex-col items-center gap-3
        transition-colors duration-300
      "
      aria-label="Follow Ogopogo Solar"
    >
      {/* Pill container */}
      <div
        className="
          flex flex-col gap-2 p-2 rounded-2xl backdrop-blur
          border shadow-lg transition-all duration-300
        "
        style={containerStyle}
      >
        {links.map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="
              group grid place-items-center
              w-11 h-11 rounded-xl text-white
              transition-all duration-300
              border hover:-translate-y-0.5 hover:shadow-lg
              focus:outline-none focus:ring-2 focus:ring-[#ffc82e]/80
            "
            style={tileStyle}
            title={label}
          >
            <Icon className="h-5 w-5 transition-colors duration-300 group-hover:text-[#ffc82e]" />
          </a>
        ))}
      </div>

      {/* Accent line */}
  <div className="mt-2 h-14 w-[2px] rounded-full" style={{ backgroundColor: '#ffc82e' }} />
    </aside>
  );
};

export default SocialWidget;
