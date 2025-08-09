// src/components/Header.tsx
import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const CLOSE_DELAY_MS = 200;

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [aboutMobileOpen, setAboutMobileOpen] = useState(false);
  const location = useLocation();
  const aboutRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<number | null>(null);

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'SPONSORS', path: '/sponsors' },
    { name: 'NEWS', path: '/news' },
  ];

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setAboutOpen(false);
    setAboutMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!aboutRef.current) return;
      if (!aboutRef.current.contains(e.target as Node)) setAboutOpen(false);
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setAboutOpen(false);
        setAboutMobileOpen(false);
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('keydown', handleKey);
    };
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const isActive = (path: string) => location.pathname === path;

  const headerChrome = isScrolled
    ? 'bg-[#004126] backdrop-blur-md shadow-lg'
    : 'bg-transparent';

  const linkBase = 'text-white hover:text-[#ffc82e]';
  const linkActive = 'text-[#ffc82e] border-b-2 border-[#ffc82e]';

  const dropdownShell =
    isScrolled
      ? 'bg-[#004126] border-[#00331E]'
      : 'bg-white/10 backdrop-blur-xl border-white/20';
  const dropdownItemHover =
    isScrolled ? 'hover:bg-[#00331E]' : 'hover:bg-white/10';

  const openAboutNow = () => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setAboutOpen(true);
  };
  const closeAboutWithDelay = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setAboutOpen(false), CLOSE_DELAY_MS) as unknown as number;
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-bebas ${headerChrome}`}>
      <div className="w-full relative flex items-center justify-between h-20 px-6 lg:px-10">
        {/* Logo */}
        <div className="flex-shrink-0" id="nav-logo-anchor">
          <Link to="/" onClick={scrollToTop} className="flex items-center space-x-3 font-bold">
            <img
              src="https://i.ibb.co/CQBPt1C/ogopogo-logo.webp"
              alt="Ogopogo Solar Logo"
              className="h-10 w-auto"
            />
            <span className="uppercase tracking-widest text-lg text-[#ffc82e] whitespace-nowrap">
              OGOPOGO SOLAR
            </span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-4 xl:space-x-8 absolute left-1/2 -translate-x-1/2 text-base xl:text-lg font-bold">
          {/* HOME */}
          <Link
            to="/"
            onClick={scrollToTop}
            className={`uppercase tracking-widest transition-all duration-300 hover:scale-105 ${
              isActive('/') ? linkActive : linkBase
            } pb-1`}
          >
            HOME
          </Link>

          {/* ABOUT dropdown */}
          <div
            ref={aboutRef}
            className="relative"
            onMouseEnter={openAboutNow}
            onMouseLeave={closeAboutWithDelay}
          >
            <button
              className={`uppercase tracking-widest transition-all duration-300 hover:scale-105 flex items-center gap-1 pb-1 ${
                location.pathname.startsWith('/about') ||
                location.pathname.startsWith('/team') ||
                location.pathname.startsWith('/projects')
                  ? linkActive
                  : linkBase
              }`}
              onClick={() => setAboutOpen((s) => !s)}
            >
              ABOUT
              <ChevronDown className="h-4 w-4" />
            </button>

            <div className="absolute left-1/2 -translate-x-1/2 top-full w-48 h-3" />

            <div
              className={`absolute left-1/2 -translate-x-1/2 mt-8 min-w-[240px] rounded-2xl overflow-hidden
                border shadow-2xl ${dropdownShell}
                transition-all duration-150 ${
                  aboutOpen
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 -translate-y-1 pointer-events-none'
                }`}
              onMouseEnter={openAboutNow}
              onMouseLeave={closeAboutWithDelay}
            >
              <Link
                to="/about"
                onClick={scrollToTop}
                className={`block px-4 py-3 text-white hover:text-[#ffc82e] ${dropdownItemHover} transition-colors duration-150`}
              >
                OVERVIEW
              </Link>
              <Link
                to="/team"
                onClick={scrollToTop}
                className={`block px-4 py-3 text-white hover:text-[#ffc82e] ${dropdownItemHover} transition-colors duration-150`}
              >
                OUR TEAM
              </Link>
              <Link
                to="/projects"
                onClick={scrollToTop}
                className={`block px-4 py-3 text-white hover:text-[#ffc82e] ${dropdownItemHover} transition-colors duration-150`}
              >
                OUR PROJECTS
              </Link>
            </div>
          </div>

          {/* Other items */}
          {navItems
            .filter((n) => n.path !== '/')
            .map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={scrollToTop}
                className={`uppercase tracking-widest transition-all duration-300 hover:scale-105 ${
                  isActive(item.path) ? linkActive : linkBase
                } pb-1`}
              >
                {item.name}
              </Link>
            ))}
        </nav>

        {/* Join Us */}
        <div className="hidden lg:flex font-bold flex-shrink-0">
          <Link
            to="/join"
            onClick={scrollToTop}
            className="uppercase tracking-widest px-4 xl:px-6 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105 text-sm xl:text-base"
            style={{ backgroundColor: '#ffc82e', color: '#FFFFFF' }}
          >
            JOIN US!
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsMenuOpen((s) => !s)}
          className="lg:hidden p-2 rounded-md text-white hover:text-[#ffc82e] hover:bg-white/10 transition-colors duration-300"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div
          className={`lg:hidden fixed top-20 left-0 right-0 bottom-0 z-40 border-t transition-colors duration-300 overflow-y-auto ${
            isScrolled ? 'bg-[#004126]/95 border-white/10' : 'bg-[#004126]/85 border-white/10'
          }`}
        >
          <nav className="px-4 py-6 space-y-2 min-h-full">
            <Link
              to="/"
              onClick={() => { scrollToTop(); setIsMenuOpen(false); }}
              className={`block font-bold uppercase tracking-widest py-2 px-2 rounded-md ${
                isActive('/') ? 'text-[#ffc82e] bg-white/5' : 'text-white hover:bg-white/10'
              }`}
            >
              HOME
            </Link>

            <button
              onClick={() => setAboutMobileOpen((s) => !s)}
              className="w-full flex items-center justify-between font-bold uppercase tracking-widest py-2 px-2 rounded-md text-white hover:bg-white/10"
            >
              <span>ABOUT</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${aboutMobileOpen ? 'rotate-180' : ''}`} />
            </button>
            {aboutMobileOpen && (
              <div className="ml-3 mt-1 space-y-1">
                <Link to="/about" onClick={() => { scrollToTop(); setIsMenuOpen(false); }} className="block text-[#ffc82e] py-2 px-2 hover:bg-white/10">
                  OVERVIEW
                </Link>
                <Link to="/team" onClick={() => { scrollToTop(); setIsMenuOpen(false); }} className="block text-[#ffc82e] py-2 px-2 hover:bg-white/10">
                  OUR TEAM
                </Link>
                <Link to="/projects" onClick={() => { scrollToTop(); setIsMenuOpen(false); }} className="block text-[#ffc82e] py-2 px-2 hover:bg-white/10">
                  OUR PROJECTS
                </Link>
              </div>
            )}

            {navItems
              .filter((n) => n.path !== '/')
              .map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => { scrollToTop(); setIsMenuOpen(false); }}
                  className={`block font-bold uppercase tracking-widest py-2 px-2 rounded-md ${
                    isActive(item.path) ? 'text-[#ffc82e] bg-white/5' : 'text-white hover:bg-white/10'
                  }`}
                >
                  {item.name}
                </Link>
              ))}

            <Link
              to="/join"
              onClick={() => { scrollToTop(); setIsMenuOpen(false); }}
              className="mt-6 block text-center font-bold uppercase tracking-widest px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg"
              style={{ backgroundColor: '#ffc82e', color: '#FFFFFF' }}
            >
              JOIN US
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
