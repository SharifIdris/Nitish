import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, Download, Share2, Heart, Eye } from 'lucide-react';

const PhotoGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Tournaments', 'Behind the Scenes', 'Team Photos', 'Events'];

  const photos = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/3419736/pexels-photo-3419736.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Valorant Championship Victory',
      category: 'Tournaments',
      likes: 2450,
      views: 15600,
      date: '2025-01-18'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Team Strategy Session',
      category: 'Behind the Scenes',
      likes: 1820,
      views: 9200,
      date: '2025-01-15'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Gaming House Setup',
      category: 'Behind the Scenes',
      likes: 3100,
      views: 18500,
      date: '2025-01-12'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Team Portrait 2025',
      category: 'Team Photos',
      likes: 4200,
      views: 25800,
      date: '2025-01-10'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/3419736/pexels-photo-3419736.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Apex Legends Tournament',
      category: 'Tournaments',
      likes: 2850,
      views: 16200,
      date: '2025-01-08'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Community Event',
      category: 'Events',
      likes: 1950,
      views: 11400,
      date: '2025-01-05'
    }
  ];

  const filteredPhotos = photos.filter(
    photo => selectedCategory === 'All' || photo.category === selectedCategory
  );

  return (
    <section className="py-20 bg-[#252538]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Camera className="h-6 w-6 text-[#00C2FF]" />
            <span className="text-[#00C2FF] font-medium tracking-wider uppercase">Photo Gallery</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-['Space_Grotesk'] mb-6">
            <span className="bg-gradient-to-r from-white to-[#B0B0C0] bg-clip-text text-transparent">
              Captured
            </span>
            <span className="bg-gradient-to-r from-[#00C2FF] to-[#FF4F91] bg-clip-text text-transparent ml-3">
              Moments
            </span>
          </h2>
          <p className="text-[#B0B0C0] text-lg max-w-3xl mx-auto leading-relaxed">
            Explore our collection of tournament victories, behind-the-scenes moments, and team memories.
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
              onClick={() => setSelectedCategory(category)}
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

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-2xl bg-[#2A2A3C]/30 backdrop-blur-sm border border-[#2A2A3C] hover:border-[#00C2FF]/50 transition-all duration-500"
            >
              <div className="relative overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Overlay Actions */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-3">
                    <button className="p-3 bg-[#00C2FF]/20 backdrop-blur-sm rounded-full border border-[#00C2FF]/50 hover:bg-[#00C2FF]/30 transition-colors">
                      <Download className="h-5 w-5 text-white" />
                    </button>
                    <button className="p-3 bg-[#FF4F91]/20 backdrop-blur-sm rounded-full border border-[#FF4F91]/50 hover:bg-[#FF4F91]/30 transition-colors">
                      <Share2 className="h-5 w-5 text-white" />
                    </button>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-[#2A2A3C]/80 backdrop-blur-sm text-[#00C2FF] px-3 py-1 rounded-full text-xs font-bold">
                    {photo.category}
                  </span>
                </div>
              </div>

              {/* Photo Info */}
              <div className="p-4">
                <h3 className="text-white font-semibold mb-2 group-hover:text-[#00C2FF] transition-colors">
                  {photo.title}
                </h3>
                
                <div className="flex items-center justify-between text-[#B0B0C0] text-sm">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Heart className="h-4 w-4" />
                      <span>{photo.likes.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="h-4 w-4" />
                      <span>{photo.views.toLocaleString()}</span>
                    </div>
                  </div>
                  <span>{new Date(photo.date).toLocaleDateString()}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="bg-gradient-to-r from-[#00C2FF] to-[#FF4F91] px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform">
            Load More Photos
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default PhotoGallery;