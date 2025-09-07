import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Calendar, Users, Printer as Prize } from 'lucide-react';

const TournamentHero = () => {
  const stats = [
    { icon: Trophy, value: '156', label: 'Tournaments Hosted' },
    { icon: Users, value: '50K+', label: 'Participants' },
    { icon: Prize, value: '$2.5M', label: 'Prize Pool Distributed' },
    { icon: Calendar, value: '24/7', label: 'Competition Active' }
  ];

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1F1F2E]/95 via-[#1F1F2E]/85 to-[#1F1F2E]/95" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F2E] via-transparent to-[#1F1F2E]/50" />
      </div>

      {/* Live Tournament Alert */}
      <div className="absolute top-24 left-1/2 transform -translate-x-1/2 z-10">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center space-x-2 bg-[#00FF9D]/20 backdrop-blur-sm border border-[#00FF9D]/50 rounded-full px-6 py-2"
        >
          <div className="w-2 h-2 bg-[#00FF9D] rounded-full animate-pulse" />
          <span className="text-[#00FF9D] font-medium text-sm">
            Championship Finals Live Now
          </span>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold font-['Space_Grotesk'] mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-[#00C2FF] to-[#FF4F91] bg-clip-text text-transparent">
                Tournaments
              </span>
              <br />
              <span className="text-white">
                & Events
              </span>
            </h1>
            
            <p className="text-[#B0B0C0] text-xl max-w-4xl mx-auto leading-relaxed mb-12">
              Experience the thrill of competitive gaming with our world-class tournaments, 
              featuring the best teams and the biggest prize pools in esports.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button className="group relative overflow-hidden bg-gradient-to-r from-[#00C2FF] to-[#FF4F91] px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300">
                <span className="relative z-10">Register for Tournament</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF4F91] to-[#00C2FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              
              <button className="border-2 border-[#2A2A3C] bg-[#2A2A3C]/50 backdrop-blur-sm px-8 py-4 rounded-full font-semibold text-lg hover:border-[#00C2FF] hover:bg-[#00C2FF]/10 transition-all duration-300">
                View Schedule
              </button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
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

export default TournamentHero;