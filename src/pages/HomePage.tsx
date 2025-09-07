import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/home/HeroSection';
import TeamHighlights from '../components/home/TeamHighlights';
import LiveMatches from '../components/home/LiveMatches';
import NewsSection from '../components/home/NewsSection';
import Sponsors from '../components/home/Sponsors';

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <HeroSection />
      <TeamHighlights />
      <LiveMatches />
      <NewsSection />
      <Sponsors />
    </motion.div>
  );
};

export default HomePage;