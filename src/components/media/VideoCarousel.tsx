import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, ChevronLeft, ChevronRight, Eye, Clock, Calendar } from 'lucide-react';

const VideoCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Championships', 'Player Features', 'Behind the Scenes', 'Interviews'];

  const videos = [
    {
      id: 1,
      title: 'Valorant World Championship 2024 - Finals Highlights',
      thumbnail: 'https://images.pexels.com/photos/3419736/pexels-photo-3419736.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop',
      duration: '12:34',
      views: '2.1M',
      date: '2025-01-15',
      category: 'Championships',
      description: 'Epic moments from our championship victory including the game-winning ace.'
    },
    {
      id: 2,
      title: 'Player Spotlight: Phoenix - The Rise of a Champion',
      thumbnail: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop',
      duration: '8:45',
      views: '850K',
      date: '2025-01-12',
      category: 'Player Features',
      description: 'Follow Phoenix\'s journey from amateur to professional esports champion.'
    },
    {
      id: 3,
      title: 'Inside CrissCross Gaming House - Behind the Scenes',
      thumbnail: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop',
      duration: '15:22',
      views: '1.2M',
      date: '2025-01-08',
      category: 'Behind the Scenes',
      description: 'Exclusive look at daily life and training routines in our state-of-the-art facility.'
    },
    {
      id: 4,
      title: 'CEO Interview: The Future of Esports',
      thumbnail: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop',
      duration: '25:10',
      views: '500K',
      date: '2025-01-05',
      category: 'Interviews',
      description: 'Sarah Chen discusses CrissCross\'s vision and the evolution of competitive gaming.'
    },
    {
      id: 5,
      title: 'Apex Legends Championship Road to Victory',
      thumbnail: 'https://images.pexels.com/photos/3419736/pexels-photo-3419736.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop',
      duration: '18:45',
      views: '1.8M',
      date: '2025-01-01',
      category: 'Championships',
      description: 'Complete journey through the Apex Legends tournament series victory.'
    }
  ];

  const filteredVideos = videos.filter(
    video => selectedCategory === 'All' || video.category === selectedCategory
  );

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.max(1, filteredVideos.length - 2));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.max(1, filteredVideos.length - 2)) % Math.max(1, filteredVideos.length - 2));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#1F1F2E] to-[#252538]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Play className="h-6 w-6 text-[#00C2FF]" />
            <span className="text-[#00C2FF] font-medium tracking-wider uppercase">Video Content</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-['Space_Grotesk'] mb-6">
            <span className="bg-gradient-to-r from-white to-[#B0B0C0] bg-clip-text text-transparent">
              Featured
            </span>
            <span className="bg-gradient-to-r from-[#00C2FF] to-[#FF4F91] bg-clip-text text-transparent ml-3">
              Videos
            </span>
          </h2>
          <p className="text-[#B0B0C0] text-lg max-w-3xl mx-auto leading-relaxed">
            Watch exclusive content from tournaments, player features, and behind-the-scenes footage.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentSlide(0);
              }}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-[#00C2FF] to-[#FF4F91] text-white'
                  : 'bg-[#2A2A3C]/50 text-[#B0B0C0] hover:bg-[#2A2A3C] hover:text-white border border-[#2A2A3C] hover:border-[#00C2FF]/50'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Featured Video */}
        {filteredVideos.length > 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="relative group cursor-pointer rounded-2xl overflow-hidden">
              <img
                src={filteredVideos[currentSlide]?.thumbnail}
                alt={filteredVideos[currentSlide]?.title}
                className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F2E] via-transparent to-transparent" />
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-gradient-to-r from-[#00C2FF] to-[#FF4F91] w-20 h-20 rounded-full flex items-center justify-center cursor-pointer shadow-2xl"
                >
                  <Play className="h-8 w-8 text-white ml-1" />
                </motion.div>
              </div>

              {/* Video Info */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center space-x-4 text-[#B0B0C0] text-sm mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{filteredVideos[currentSlide]?.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Eye className="h-4 w-4" />
                    <span>{filteredVideos[currentSlide]?.views} views</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(filteredVideos[currentSlide]?.date).toLocaleDateString()}</span>
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-[#00C2FF] transition-colors">
                  {filteredVideos[currentSlide]?.title}
                </h3>
                
                <p className="text-[#B0B0C0] leading-relaxed max-w-3xl">
                  {filteredVideos[currentSlide]?.description}
                </p>
              </div>

              {/* Duration Badge */}
              <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium">
                {filteredVideos[currentSlide]?.duration}
              </div>
            </div>
          </motion.div>
        )}

        {/* Video Thumbnails */}
        {filteredVideos.length > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white">More Videos</h3>
              
              <div className="flex space-x-2">
                <button
                  onClick={prevSlide}
                  className="p-3 bg-[#2A2A3C]/50 hover:bg-[#2A2A3C] border border-[#2A2A3C] hover:border-[#00C2FF] rounded-full transition-all duration-300"
                >
                  <ChevronLeft className="h-5 w-5 text-[#B0B0C0]" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-3 bg-[#2A2A3C]/50 hover:bg-[#2A2A3C] border border-[#2A2A3C] hover:border-[#00C2FF] rounded-full transition-all duration-300"
                >
                  <ChevronRight className="h-5 w-5 text-[#B0B0C0]" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVideos.slice(1, 4).map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group cursor-pointer"
                  onClick={() => setCurrentSlide(index + 1)}
                >
                  <div className="relative rounded-xl overflow-hidden mb-4">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-gradient-to-r from-[#00C2FF] to-[#FF4F91] w-12 h-12 rounded-full flex items-center justify-center">
                        <Play className="h-5 w-5 text-white ml-0.5" />
                      </div>
                    </div>

                    <div className="absolute bottom-2 right-2 bg-black/70 backdrop-blur-sm px-2 py-1 rounded text-white text-xs font-medium">
                      {video.duration}
                    </div>
                  </div>
                  
                  <h4 className="text-white font-semibold mb-2 group-hover:text-[#00C2FF] transition-colors line-clamp-2">
                    {video.title}
                  </h4>
                  
                  <div className="flex items-center space-x-4 text-[#B0B0C0] text-sm">
                    <span>{video.views} views</span>
                    <span>•</span>
                    <span>{new Date(video.date).toLocaleDateString()}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default VideoCarousel;