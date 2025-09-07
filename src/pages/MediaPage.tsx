import React from 'react';
import { motion } from 'framer-motion';
import Seo from '../components/Seo';
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
      <Seo
        title="Media Gallery - CrissCross Esports"
        description="Explore CrissCross Esports media gallery featuring tournament highlights, behind-the-scenes content, player interviews, live streams, and press coverage."
        url="https://crisscross.gg/media"
        tags={['media', 'videos', 'photos', 'highlights', 'interviews', 'streaming', 'press coverage', 'content']}
      />
      <MediaHero />
      <VideoCarousel />
      <PhotoGallery />
      <StreamingSection />
      <PressSection />
    </motion.div>
  );
};

export default MediaPage;