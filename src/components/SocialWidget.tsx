// src/components/SocialWidget.tsx
import React, { useEffect, useState } from 'react';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

const HEADER_GREEN = '#004126';
const YELLOW = '#ffc82e';

/** Your Discord SVG wrapped as a React component */
const DiscordIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 365.467"
    shapeRendering="geometricPrecision"
    textRendering="geometricPrecision"
    imageRendering="optimizeQuality"
    fillRule="evenodd"
    clipRule="evenodd"
    {...props}
  >
    <path
      // Use currentColor so hover styles affect it
      fill="currentColor"
      d="M378.186 365.028s-15.794-18.865-28.956-35.099c57.473-16.232 79.41-51.77 79.41-51.77-17.989 11.846-35.099 20.182-50.454 25.885-21.938 9.213-42.997 14.917-63.617 18.866-42.118 7.898-80.726 5.703-113.631-.438-25.008-4.827-46.506-11.407-64.494-18.867-10.091-3.947-21.059-8.774-32.027-14.917-1.316-.877-2.633-1.316-3.948-2.193-.877-.438-1.316-.878-1.755-.878-7.898-4.388-12.285-7.458-12.285-7.458s21.06 34.659 76.779 51.331c-13.163 16.673-29.395 35.977-29.395 35.977C36.854 362.395 0 299.218 0 299.218 0 159.263 63.177 45.633 63.177 45.633 126.354-1.311 186.022.005 186.022.005l4.388 5.264C111.439 27.645 75.461 62.305 75.461 62.305s9.653-5.265 25.886-12.285c46.945-20.621 84.236-25.885 99.592-27.64 2.633-.439 4.827-.878 7.458-.878 26.763-3.51 57.036-4.387 88.624-.878 41.68 4.826 86.43 17.111 132.058 41.68 0 0-34.66-32.906-109.244-55.281l6.143-7.019s60.105-1.317 122.844 45.628c0 0 63.178 113.631 63.178 253.585 0-.438-36.854 62.739-133.813 65.81l-.001.001zm-43.874-203.133c-25.006 0-44.75 21.498-44.75 48.262 0 26.763 20.182 48.26 44.75 48.26 25.008 0 44.752-21.497 44.752-48.26 0-26.764-20.182-48.262-44.752-48.262zm-160.135 0c-25.008 0-44.751 21.498-44.751 48.262 0 26.763 20.182 48.26 44.751 48.26 25.007 0 44.75-21.497 44.75-48.26.439-26.763-19.742-48.262-44.75-48.262z"
    />
  </svg>
);

const links = [
  { href: 'https://instagram.com/ogopogosolar', label: 'Instagram', Icon: Instagram },
  { href: 'https://www.facebook.com/profile.php?id=61552190377924', label: 'Facebook', Icon: Facebook },
  { href: 'https://www.linkedin.com/company/ogopogosolar/', label: 'LinkedIn', Icon: Linkedin },
  { href: 'https://discord.gg/hFnBzVTqFA', label: 'Discord', Icon: DiscordIcon },
];

const SocialWidget: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return window.scrollY > 20;
  });

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

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

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
            {/* Ensure consistent sizing across Lucide + custom SVG */}
            <Icon className="h-4 w-4 lg:h-5 lg:w-5 transition-colors duration-150 group-hover:text-[#ffc82e]" />
          </a>
        ))}
      </div>

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
            transition: 'transform 80ms linear',
          }}
        />
      </div>
    </aside>
  );
};

export default SocialWidget;
