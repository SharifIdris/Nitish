import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Globe, Target } from 'lucide-react';

const AboutHero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.pexels.com/photos/3419736/pexels-photo-3419736.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1F1F2E]/95 via-[#1F1F2E]/85 to-[#1F1F2E]/95" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F2E] via-transparent to-[#1F1F2E]/50" />
      </div>

      {/* Animated Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-[#00C2FF] rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-3 h-3 bg-[#FF4F91] rounded-full animate-bounce" />
        <div className="absolute bottom-40 left-20 w-4 h-4 bg-[#00FF9D] rounded-full animate-ping" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Trophy className="h-8 w-8 text-[#00C2FF]" />
              <span className="text-[#00C2FF] font-medium tracking-wider uppercase text-lg">About Us</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold font-['Space_Grotesk'] mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-[#00C2FF] to-[#FF4F91] bg-clip-text text-transparent">
                Defining the Future
              </span>
              <br />
              <span className="text-white">
                of Esports
              </span>
            </h1>
            
            <p className="text-[#B0B0C0] text-xl max-w-4xl mx-auto leading-relaxed mb-12">
              CrissCross Esports stands at the forefront of competitive gaming, where passion meets precision, 
              and champions are forged through dedication, innovation, and unwavering pursuit of excellence.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {[
              { icon: Trophy, value: '47', label: 'Championships Won', color: 'text-[#00FF9D]' },
              { icon: Users, value: '120+', label: 'Professional Players', color: 'text-[#00C2FF]' },
              { icon: Globe, value: '25', label: 'Countries Represented', color: 'text-[#FF4F91]' },
              { icon: Target, value: '98%', label: 'Win Rate', color: 'text-[#FFBE0B]' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="text-center group"
              >
                <div className="mb-4 flex justify-center">
                  <div className="p-4 bg-[#2A2A3C]/50 backdrop-blur-sm rounded-2xl border border-[#2A2A3C] group-hover:border-[#00C2FF]/50 transition-all duration-300">
                    <stat.icon className={`h-8 w-8 ${stat.color}`} />
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

export default AboutHero;