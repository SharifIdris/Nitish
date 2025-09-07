import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Video, Mic, Image } from 'lucide-react';

const MediaHero = () => {
  const stats = [
    { icon: Video, value: '500+', label: 'Videos Produced' },
    { icon: Camera, value: '2M+', label: 'Photos Captured' },
    { icon: Mic, value: '150+', label: 'Interviews Conducted' },
    { icon: Image, value: '50+', label: 'Press Features' }
  ];

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1F1F2E]/95 via-[#1F1F2E]/85 to-[#1F1F2E]/95" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F2E] via-transparent to-[#1F1F2E]/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Camera className="h-8 w-8 text-[#00C2FF]" />
              <span className="text-[#00C2FF] font-medium tracking-wider uppercase text-lg">Media Gallery</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold font-['Space_Grotesk'] mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-[#00C2FF] to-[#FF4F91] bg-clip-text text-transparent">
                Behind the Scenes
              </span>
              <br />
              <span className="text-white">
                of Champions
              </span>
            </h1>
            
            <p className="text-[#B0B0C0] text-xl max-w-4xl mx-auto leading-relaxed mb-12">
              Explore exclusive content, championship moments, player interviews, and the stories 
              that define CrissCross Esports through our comprehensive media collection.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button className="group relative overflow-hidden bg-gradient-to-r from-[#00C2FF] to-[#FF4F91] px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300">
                <span className="relative z-10">Latest Content</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF4F91] to-[#00C2FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              
              <button className="border-2 border-[#2A2A3C] bg-[#2A2A3C]/50 backdrop-blur-sm px-8 py-4 rounded-full font-semibold text-lg hover:border-[#00C2FF] hover:bg-[#00C2FF]/10 transition-all duration-300">
                Press Resources
              </button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="text-center group"
              >
                <div className="mb-4 flex justify-center">
                  <div className="p-4 bg-[#2A2A3C]/50 backdrop-blur-sm rounded-2xl border border-[#2A2A3C] group-hover:border-[#00C2FF]/50 transition-all duration-300">
                    <stat.icon className="h-8 w-8 text-[#00C2FF] group-hover:text-[#FF4F91] transition-colors" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 font-['Space_Grotesk']">
                  {stat.value}
                </div>
                <div className="text-[#B0B0C0] text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MediaHero;