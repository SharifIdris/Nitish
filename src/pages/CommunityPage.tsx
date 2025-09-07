import React from 'react';
import { motion } from 'framer-motion';
import Seo from '../components/Seo';
import CommunityHero from '../components/community/CommunityHero';
import DiscordSection from '../components/community/DiscordSection';
import MerchSection from '../components/community/MerchSection';
import FanZone from '../components/community/FanZone';
import EventsSection from '../components/community/EventsSection';

const CommunityPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Seo
        title="Community - CrissCross Esports"
        description="Join the CrissCross Esports community! Connect on Discord, shop official merchandise, participate in events, and share your gaming moments with 250K+ members."
        url="https://crisscross.gg/community"
        tags={['community', 'discord', 'merchandise', 'events', 'fan zone', 'gaming community', 'esports fans']}
      />
      <CommunityHero />
      <DiscordSection />
      <FanZone />
      <MerchSection />
      <EventsSection />
    </motion.div>
  );
};

export default CommunityPage;