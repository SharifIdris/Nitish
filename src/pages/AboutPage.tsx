import React from 'react';
import { motion } from 'framer-motion';
import Seo from '../components/Seo';
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
      <Seo
        title="About CrissCross Esports - Our Story & Mission"
        description="Learn about CrissCross Esports' journey from startup to championship-winning organization. Meet our leadership team, discover our values, and explore our timeline of success."
        url="https://crisscross.gg/about"
        tags={['about', 'esports organization', 'gaming company', 'leadership team', 'mission', 'values', 'history']}
      />
      <AboutHero />
      <MissionSection />
      <Values />
      <TeamBios />
      <Timeline />
    </motion.div>
  );
};

export default AboutPage;