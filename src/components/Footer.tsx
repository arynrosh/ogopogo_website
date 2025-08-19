// src/components/Footer.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const SHOW_ABOUT = false;

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about', hidden: !SHOW_ABOUT },
    { name: 'Projects', path: '/projects' },
    { name: 'Team', path: '/team' },
    { name: 'Sponsors', path: '/sponsors' },
    { name: 'Blog Archive', path: '/news' },
    { name: 'Join Us', path: '/join' },
  ].filter((l) => !l.hidden);

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/ogopogosolar', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com/ogopogosolar', label: 'Facebook' },
    { icon: Linkedin, href: 'https://linkedin.com/company/ogopogo-solar', label: 'LinkedIn' },
  ];

  const year = new Date().getFullYear();
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  // Newsletter state
  const [email, setEmail] = useState('');
  const [hp, setHp] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState<string>('');

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
    if (hp.trim() !== '') return;
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

      const ct = res.headers.get('content-type') || '';
      let okFromJson = false;
      let serverMsg = '';

      if (ct.includes('application/json')) {
        try {
          const data = await res.json();
          okFromJson = !!data?.ok;
          serverMsg = typeof data?.message === 'string' ? data.message : '';
        } catch {
          // fall through to text handling
        }
      }

      if (!okFromJson) {
        // Try reading text (covers empty body or non-JSON)
        try {
          const txt = await res.text();
          serverMsg = serverMsg || txt || '';
          // Heuristics: if 2xx and no “error” keywords, consider it success
          if (res.ok && !/error|invalid|fail/i.test(txt)) {
            okFromJson = true;
          }
        } catch {
          /* ignore */
        }
      }

      if (res.ok && okFromJson) {
        setStatus('success');
        setMessage(serverMsg || 'Subscribed! Please check your inbox for future updates.');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(serverMsg || 'Subscription failed. Please try again.');
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
                  href="mailto:info@ogopogosolar.ca"
                  className="text-gray-300 hover:text-[#ffc82e] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffc82e] rounded text-sm sm:text-base"
                >
                  info@ogopogosolar.ca
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#ffc82e] flex-shrink-0" />
                <a
                  href="tel:+12507624445"
                  className="text-gray-300 hover:text-[#ffc82e] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffc82e] rounded text-sm sm:text-base"
                >
                  (250) 762-4445
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-bold mb-5 sm:mb-6">STAY UPDATED</h4>
            <p className="text-gray-300 mb-4 text-sm sm:text-base">
              Get the latest news about our solar racing journey and upcoming events.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3" aria-label="Newsletter subscription">
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
                className="w-full bg-[#ffc82e] text-black px-4 py-2.5 sm:py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40 text-sm sm:text-base disabled:cursor-not-allowed disabled:opacity-80"
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
            <div className="flex flex-wrap gap-4 sm:gap-6 text-xs sm:text-sm">
              <a href="#" className="text-gray-400 hover:text-[#ffc82e] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffc82e] rounded">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#ffc82e] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffc82e] rounded">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-[#ffc82e] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffc82e] rounded">
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
