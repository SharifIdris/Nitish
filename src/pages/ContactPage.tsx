import React from 'react';
import { motion } from 'framer-motion';
import Seo from '../components/Seo';
import ContactHero from '../components/contact/ContactHero';
import ContactForm from '../components/contact/ContactForm';
import SponsorshipTiers from '../components/contact/SponsorshipTiers';
import OfficeLocations from '../components/contact/OfficeLocations';
import PartnershipsSection from '../components/contact/PartnershipsSection';

const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Seo
        title="Contact & Partnerships - CrissCross Esports"
        description="Partner with CrissCross Esports. Explore sponsorship opportunities, contact our team, and discover partnership packages. Offices in LA, Berlin, and Seoul."
        url="https://crisscross.gg/contact"
        tags={['contact', 'partnerships', 'sponsorship', 'business', 'collaboration', 'offices', 'media partnerships']}
      />
      <ContactHero />
      <ContactForm />
      <SponsorshipTiers />
      <PartnershipsSection />
      <OfficeLocations />
    </motion.div>
  );
};

export default ContactPage;