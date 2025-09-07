import React from 'react';
import { motion } from 'framer-motion';
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
      <ContactHero />
      <ContactForm />
      <SponsorshipTiers />
      <PartnershipsSection />
      <OfficeLocations />
    </motion.div>
  );
};

export default ContactPage;