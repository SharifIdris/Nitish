import React from 'react';
import { motion } from 'framer-motion';
import Seo from '../components/Seo';
import HeroSection from '../components/home/HeroSection';
import TeamHighlights from '../components/home/TeamHighlights';
import LiveMatches from '../components/home/LiveMatches';
import NewsSection from '../components/home/NewsSection';
import Sponsors from '../components/home/Sponsors';
import TestimonialsSection from '../components/home/TestimonialsSection';

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Seo
        title="CrissCross Esports - Championship Gaming Organization"
        description="Leading esports organization with championship-winning teams in Valorant, Apex Legends, League of Legends, and Counter-Strike. Join our community of 250K+ gamers."
        url="https://crisscross.gg"
        tags={['esports', 'gaming', 'valorant', 'apex legends', 'league of legends', 'counter-strike', 'professional gaming', 'tournaments', 'championship']}
      />
      <HeroSection />
      <TeamHighlights />
      <LiveMatches />
      <NewsSection />
      <TestimonialsSection />
      <Sponsors />
    </motion.div>
  );
};

export default HomePage;