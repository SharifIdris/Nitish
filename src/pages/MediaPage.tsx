import React from 'react';
import { motion } from 'framer-motion';
import MediaHero from '../components/media/MediaHero';
import VideoCarousel from '../components/media/VideoCarousel';
import PhotoGallery from '../components/media/PhotoGallery';
import PressSection from '../components/media/PressSection';
import StreamingSection from '../components/media/StreamingSection';

const MediaPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <MediaHero />
      <VideoCarousel />
      <PhotoGallery />
      <StreamingSection />
      <PressSection />
    </motion.div>
  );
};

export default MediaPage;