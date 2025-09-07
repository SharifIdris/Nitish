import React from 'react';
import { motion } from 'framer-motion';
import Seo from '../components/Seo';
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
      <Seo
        title="Tournaments & Events - CrissCross Esports"
        description="Join CrissCross Esports tournaments and events. View live matches, tournament schedules, registration details, and results from our championship competitions."
        url="https://crisscross.gg/tournaments"
        tags={['tournaments', 'esports events', 'gaming competitions', 'live matches', 'registration', 'championship', 'prize pools']}
      />
      <TournamentHero />
      <LiveTournaments />
      <TournamentCalendar />
      <RegistrationSection />
      <ResultsSection />
    </motion.div>
  );
};

export default TournamentsPage;