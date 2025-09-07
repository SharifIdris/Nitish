import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap, Trophy, Twitter, Instagram, Youtube, Twitch, MessageCircle } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-400' },
    { icon: Youtube, href: '#', color: 'hover:text-red-500' },
    { icon: Twitch, href: '#', color: 'hover:text-purple-500' },
    { icon: MessageCircle, href: '#', color: 'hover:text-indigo-400' },
  ];

  const footerLinks = {
    'Company': ['About Us', 'Careers', 'Press Kit', 'Contact'],
    'Esports': ['Teams', 'Tournaments', 'Schedule', 'Results'],
    'Community': ['Discord', 'Forums', 'Merchandise', 'Partners'],
    'Support': ['Help Center', 'Privacy Policy', 'Terms of Service', 'Cookie Policy'],
  };

  return (
    <footer className="bg-[#1F1F2E] border-t border-[#2A2A3C] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="relative">
                <Zap className="h-8 w-8 text-[#00C2FF]" />
                <Trophy className="h-4 w-4 text-[#FF4F91] absolute -bottom-1 -right-1" />
              </div>
              <div>
                <span className="text-xl font-bold font-['Space_Grotesk'] bg-gradient-to-r from-[#00C2FF] to-[#FF4F91] bg-clip-text text-transparent">
                  CrissCross
                </span>
                <div className="text-xs text-[#B0B0C0] -mt-1">ESPORTS</div>
              </div>
            </Link>
            <p className="text-[#B0B0C0] text-sm leading-relaxed mb-6">
              Leading esports organization pushing the boundaries of competitive gaming. 
              Join our community and experience the future of esports.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`text-[#B0B0C0] ${social.color} transition-colors p-2 rounded-lg bg-[#2A2A3C]/50 hover:bg-[#2A2A3C]`}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[#B0B0C0] hover:text-[#00C2FF] text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-[#2A2A3C] pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#B0B0C0] text-sm">
            © 2025 CrissCross Esports. All rights reserved.
          </p>
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <div className="w-2 h-2 bg-[#00FF9D] rounded-full animate-pulse"></div>
            <span className="text-[#00FF9D] text-sm font-medium">Live Tournament Active</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;