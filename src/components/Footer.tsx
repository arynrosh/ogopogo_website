// src/components/Footer.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

/** Inline Discord icon (currentColor so it follows text color) */
const DiscordIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 365.467"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M378.186 365.028s-15.794-18.865-28.956-35.099c57.473-16.232 79.41-51.77 79.41-51.77-17.989 11.846-35.099 20.182-50.454 25.885-21.938 9.213-42.997 14.917-63.617 18.866-42.118 7.898-80.726 5.703-113.631-.438-25.008-4.827-46.506-11.407-64.494-18.867-10.091-3.947-21.059-8.774-32.027-14.917-1.316-.877-2.633-1.316-3.948-2.193-.877-.438-1.316-.878-1.755-.878-7.898-4.388-12.285-7.458-12.285-7.458s21.06 34.659 76.779 51.331c-13.163 16.673-29.395 35.977-29.395 35.977C36.854 362.395 0 299.218 0 299.218 0 159.263 63.177 45.633 63.177 45.633 126.354-1.311 186.022.005 186.022.005l4.388 5.264C111.439 27.645 75.461 62.305 75.461 62.305s9.653-5.265 25.886-12.285c46.945-20.621 84.236-25.885 99.592-27.64 2.633-.439 4.827-.878 7.458-.878 26.763-3.51 57.036-4.387 88.624-.878 41.68 4.826 86.43 17.111 132.058 41.68 0 0-34.66-32.906-109.244-55.281l6.143-7.019s60.105-1.317 122.844 45.628c0 0 63.178 113.631 63.178 253.585 0-.438-36.854 62.739-133.813 65.81zm-43.874-203.133c-25.006 0-44.75 21.498-44.75 48.262 0 26.763 20.182 48.26 44.75 48.26 25.008 0 44.752-21.497 44.752-48.26 0-26.764-20.182-48.262-44.752-48.262zm-160.135 0c-25.008 0-44.751 21.498-44.751 48.262 0 26.763 20.182 48.26 44.751 48.26 25.007 0 44.75-21.497 44.75-48.26.439-26.763-19.742-48.262-44.75-48.262z"/>
  </svg>
);

const Footer: React.FC = () => {
  const SHOW = false;

  // Toggle visibility for all footer quick links
  const SHOW_LINKS = {
    home: true,
    about: true,
    team: true,
    sponsors: true,
    projects: false,
    blog: true,
    join: true,
  };

  const quickLinks = [
    { name: 'Home', path: '/', show: SHOW_LINKS.home },
    { name: 'About', path: '/about', show: SHOW_LINKS.about },
    { name: 'Team', path: '/team', show: SHOW_LINKS.team },
    { name: 'Sponsors', path: '/sponsors', show: SHOW_LINKS.sponsors },
    { name: 'Projects', path: '/projects', show: SHOW_LINKS.projects },
    { name: 'Blog Archive', path: '/blog', show: SHOW_LINKS.blog },
    { name: 'Join Us', path: '/join', show: SHOW_LINKS.join },
  ].filter((l) => l.show);

  const socialLinks = [
    { icon: DiscordIcon, href: 'https://discord.gg/hFnBzVTqFA', label: 'Discord' },
    { icon: Instagram, href: 'https://instagram.com/ogopogosolar', label: 'Instagram' },
    { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61552190377924', label: 'Facebook' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/ogopogosolar/', label: 'LinkedIn' },
  ];

  const year = new Date().getFullYear();
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  // Newsletter state
  const [email, setEmail] = useState('');
  const [hp, setHp] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  // Same-origin in prod to avoid CORS; override in dev if needed
  const host = typeof window !== 'undefined' ? window.location.hostname : '';
  const isProd = /(^|\.)ogopogosolar\.ca$/i.test(host);
  const SUBSCRIBE_URL = isProd
    ? '/api/newsletter/subscribe.php'
    : (import.meta as any).env?.VITE_NEWSLETTER_SUBSCRIBE_URL ??
      'https://ogopogosolar.ca/api/newsletter/subscribe.php';

  const validEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(v.trim());

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (hp.trim() !== '') return; // honeypot
    if (!validEmail(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    try {
      setStatus('loading');
      setMessage('');

      const body = new URLSearchParams({ email: email.trim() }).toString();
      const res = await fetch(SUBSCRIBE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Accept: 'application/json, text/plain, */*',
        },
        body,
      });

      if (res.ok) {
        setStatus('success');
        setMessage('Subscribed! Please check your inbox for future updates.');
        setEmail('');
      } else {
        const txt = await res.text().catch(() => '');
        setStatus('error');
        setMessage(txt || 'Subscription failed. Please try again.');
      }
    } catch {
      setStatus('error');
      setMessage('Network error — please try again.');
    }
  };

  return (
    <footer className="bg-[#004126] text-white font-sans pb-[env(safe-area-inset-bottom)]">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* Brand + Socials */}
          <div>
            <div className="flex items-center gap-3 mb-5 sm:mb-6">
              <img
                src="https://i.ibb.co/CQBPt1C/ogopogo-logo.webp"
                alt="Ogopogo Solar Logo"
                className="h-10 sm:h-12 w-auto object-contain"
                loading="lazy"
                decoding="async"
              />
              <h3 className="text-lg sm:text-xl font-bold text-[#ffc82e]">OGOPOGO SOLAR</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
              Driven by curiosity, powered by the sun. We’re a student-led solar racing team
              engineering sustainable solutions for tomorrow’s transportation.
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="bg-[#00331E] p-2.5 sm:p-3 rounded-full hover:bg-[#ffc82e] hover:text-black transition-all duration-300 transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffc82e]"
                >
                  <s.icon className="h-5 w-5 sm:h-5 sm:w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-5 sm:mb-6">QUICK LINKS</h4>
            <nav className="grid grid-cols-2 sm:grid-cols-1 gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={scrollToTop}
                  className="text-gray-300 hover:text-[#ffc82e] transition-colors duration-300 transform hover:translate-x-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffc82e] rounded text-sm sm:text-base"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-5 sm:mb-6">CONTACT US</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#ffc82e] mt-0.5 flex-shrink-0" />
                <address className="not-italic text-gray-300 text-sm sm:text-base">
                  UBC Okanagan Campus
                  <br />
                  3333 University Way
                  <br />
                  Kelowna, BC V1V 1V7
                </address>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#ffc82e] flex-shrink-0" />
                <a
                  href="mailto:team@ogopogosolar.ca"
                  className="text-gray-300 hover:text-[#ffc82e] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffc82e] rounded text-sm sm:text-base"
                >
                  team@ogopogosolar.ca
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-5 sm:mb-6">STAY UPDATED</h4>
            <p className="text-gray-300 mb-4 text-sm sm:text-base">
              Get the latest news about our solar racing journey and upcoming events.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3" aria-label="Newsletter subscription">
              {/* Honeypot */}
              <div className="hidden" aria-hidden="true">
                <label>
                  Do not fill this field
                  <input
                    type="text"
                    value={hp}
                    onChange={(e) => setHp(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </label>
              </div>

              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === 'loading' || status === 'success'}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#00331E] border border-[#002A18] rounded-lg focus:ring-2 focus:ring-[#ffc82e] focus:border-[#ffc82e] transition-colors text-white placeholder-gray-400 text-sm sm:text-base disabled:opacity-70"
                aria-invalid={status === 'error' ? true : undefined}
                aria-describedby="newsletter-feedback"
              />

              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="w-full bg-[#ffc82e] text-white px-4 py-2.5 sm:py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40 text-sm sm:text-base disabled:cursor-not-allowed disabled:opacity-80"
              >
                {status === 'loading' ? 'Subscribing…' : status === 'success' ? 'Subscribed ✓' : 'SUBSCRIBE'}
              </button>

              <p
                id="newsletter-feedback"
                className={`min-h-[1.25rem] text-xs sm:text-sm ${
                  status === 'error' ? 'text-red-300' : status === 'success' ? 'text-emerald-300' : 'text-gray-300'
                }`}
                aria-live="polite"
              >
                {message}
              </p>

              <p className="text-[11px] sm:text-xs text-gray-400">
                By subscribing, you agree to receive updates from Ogopogo Solar. You can unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>

        <div className="border-t border-[#00331E] mt-8 sm:mt-10 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-xs sm:text-sm">
              © {year} Ogopogo Solar Racing Team. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
