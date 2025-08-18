import React, { useEffect, useState } from 'react';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

const links = [
  { href: 'https://instagram.com/ogopogosolar', label: 'Instagram', Icon: Instagram },
  { href: 'https://www.facebook.com/profile.php?id=61552190377924', label: 'Facebook', Icon: Facebook },
  { href: 'https://www.linkedin.com/company/ogopogosolar/', label: 'LinkedIn', Icon: Linkedin },
];

const HEADER_GREEN = '#004126';
const YELLOW = '#ffc82e';

const SocialWidget: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return window.scrollY > 20;
  });

  // Scroll progress (0..1), throttled with rAF
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const computeProgress = () => {
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop || 0;
      const max = (doc.scrollHeight - window.innerHeight) || 1;
      const p = Math.min(1, Math.max(0, scrollTop / max));
      setProgress(p);
      ticking = false;
    };

    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(computeProgress);
      }
    };

    // Initialize once in case we land mid-page (deep link)
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  // Opaque, cheap-to-paint container & tiles
  const containerStyle: React.CSSProperties = scrolled
    ? { backgroundColor: HEADER_GREEN, borderColor: 'rgba(255,255,255,0.18)' }
    : { backgroundColor: 'rgba(0,0,0,0.35)', borderColor: 'rgba(255,255,255,0.18)' };

  const tileStyle: React.CSSProperties = scrolled
    ? {
        background: 'linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.04))',
        borderColor: 'rgba(255,255,255,0.18)',
      }
    : {
        background: 'linear-gradient(180deg, rgba(255,255,255,0.14), rgba(255,255,255,0.06))',
        borderColor: 'rgba(255,255,255,0.20)',
      };

  return (
    <aside
      className="
        hidden lg:flex
        fixed right-3 lg:right-4 xl:right-6 top-1/2 -translate-y-1/2 z-40
        flex-col items-center gap-3
      "
      aria-label="Follow Ogopogo Solar"
    >
      {/* Pill container (no backdrop blur) */}
      <div
        className="
          flex flex-col gap-1.5 lg:gap-2 p-1.5 lg:p-2 rounded-xl lg:rounded-2xl
          border shadow-lg
          transition-colors duration-300
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
              w-9 h-9 lg:w-10 lg:h-10 xl:w-11 xl:h-11 rounded-lg lg:rounded-xl text-white
              transition-transform duration-150
              border hover:-translate-y-0.5 hover:shadow-lg
              focus:outline-none focus:ring-2 focus:ring-[#ffc82e]/80
            "
            style={tileStyle}
            title={label}
          >
            <Icon className="h-4 w-4 lg:h-5 lg:w-5 transition-colors duration-150 group-hover:text-[#ffc82e]" />
          </a>
        ))}
      </div>

      {/* Vertical scroll progress (GPU-friendly scaleY) */}
      <div
        className="mt-1.5 lg:mt-2 h-10 lg:h-12 xl:h-14 w-[2px] rounded-full overflow-hidden"
        style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
        aria-hidden="true"
      >
        <div
          className="w-full h-full"
          style={{
            backgroundColor: YELLOW,
            transformOrigin: 'top',
            transform: `scaleY(${progress || 0})`,
            transition: 'transform 80ms linear', // light & responsive
          }}
        />
      </div>
    </aside>
  );
};

export default SocialWidget;
