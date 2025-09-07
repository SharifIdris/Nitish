import React from 'react';
import { motion } from 'framer-motion';
import TournamentHero from '../components/tournaments/TournamentHero';
import LiveTournaments from '../components/tournaments/LiveTournaments';
import TournamentCalendar from '../components/tournaments/TournamentCalendar';
import RegistrationSection from '../components/tournaments/RegistrationSection';
import ResultsSection from '../components/tournaments/ResultsSection';

const TournamentsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <TournamentHero />
      <LiveTournaments />
      <TournamentCalendar />
      <RegistrationSection />
      <ResultsSection />
    </motion.div>
  );
};

export default TournamentsPage;