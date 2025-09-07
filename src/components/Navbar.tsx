import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Zap, Trophy } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/tournaments', label: 'Tournaments' },
    { path: '/media', label: 'Media' },
    { path: '/community', label: 'Community' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#2A2A3C]/90 backdrop-blur-lg border-b border-[#00C2FF]/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Zap className="h-8 w-8 text-[#00C2FF] group-hover:text-[#FF4F91] transition-colors" />
              <Trophy className="h-4 w-4 text-[#FF4F91] absolute -bottom-1 -right-1" />
            </div>
            <div>
              <span className="text-xl font-bold font-['Space_Grotesk'] bg-gradient-to-r from-[#00C2FF] to-[#FF4F91] bg-clip-text text-transparent">
                CrissCross
              </span>
              <div className="text-xs text-[#B0B0C0] -mt-1">ESPORTS</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-[#00C2FF]'
                    : 'text-[#B0B0C0] hover:text-white'
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00C2FF] to-[#FF4F91]"
                  />
                )}
              </Link>
            ))}
            <button className="bg-gradient-to-r from-[#00C2FF] to-[#FF4F91] px-6 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-transform">
              Join Us
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#B0B0C0] hover:text-white p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-[#2A2A3C]/95 backdrop-blur-lg border-t border-[#00C2FF]/20"
        >
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 text-base font-medium rounded-lg transition-colors ${
                  location.pathname === item.path
                    ? 'text-[#00C2FF] bg-[#00C2FF]/10'
                    : 'text-[#B0B0C0] hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <button className="w-full bg-gradient-to-r from-[#00C2FF] to-[#FF4F91] px-6 py-3 rounded-full text-base font-semibold mt-4">
              Join Us
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;