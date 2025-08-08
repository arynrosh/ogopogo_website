// src/components/Header.tsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'PROJECTS', path: '/projects' },
    { name: 'TEAM', path: '/team' },
    { name: 'SPONSORS', path: '/sponsors' },
    { name: 'NEWS', path: '/news' },
    { name: 'CONTACT', path: '/contact' },
  ];

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  // Navbar background logic
  const headerChrome = isHomePage
    ? (isScrolled
        ? 'bg-[#015e37] backdrop-blur-md shadow-lg'
        : 'bg-transparent')
    : 'bg-[#015e37] shadow-sm';

  const linkBase = 'text-white hover:text-[#FFD700]';
  const linkActive = 'text-[#FFD700] border-b-2 border-[#FFD700]';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-bebas ${headerChrome}`}>
      <div className="w-full relative flex items-center justify-between h-20 px-6 lg:px-10">
        
        {/* Left: Logo + Name */}
        <div className="flex-shrink-0" id="nav-logo-anchor">
          <Link to="/" className="flex items-center space-x-3 font-bold">
            <img
              src="https://i.ibb.co/CQBPt1C/ogopogo-logo.webp"
              alt="Ogopogo Solar Logo"
              className="h-10 w-auto"
            />
            <span className="uppercase tracking-widest text-lg text-[#FFD700]">
              OGOPOGO SOLAR
            </span>
          </Link>
        </div>

        {/* Center: Nav */}
        <nav className="hidden lg:flex items-center space-x-8 absolute left-1/2 -translate-x-1/2 text-lg font-bold">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`uppercase tracking-widest transition-all duration-300 hover:scale-105 ${
                isActive(item.path) ? linkActive : linkBase
              } pb-1`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right: Join Us */}
        <div className="hidden lg:flex font-bold">
          <Link
            to="/join"
            className="uppercase tracking-widest px-6 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105"
            style={{
              backgroundColor: '#FFD700',
              color: '#FFFFFF', // Always white
            }}
          >
            JOIN US!
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen((s) => !s)}
          className="lg:hidden p-2 rounded-md text-white hover:text-[#FFD700] hover:bg-white/10 transition-colors duration-300"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
    </header>
  );
};

export default Header;
