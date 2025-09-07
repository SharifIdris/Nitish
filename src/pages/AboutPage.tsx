import React from 'react';
import { motion } from 'framer-motion';
import AboutHero from '../components/about/AboutHero';
import MissionSection from '../components/about/MissionSection';
import TeamBios from '../components/about/TeamBios';
import Timeline from '../components/about/Timeline';
import Values from '../components/about/Values';

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <AboutHero />
      <MissionSection />
      <Values />
      <TeamBios />
      <Timeline />
    </motion.div>
  );
};

export default AboutPage;