import React from 'react';
import { motion } from 'framer-motion';
import { Star, Trophy, Target, Zap } from 'lucide-react';

const TeamHighlights = () => {
  const teams = [
    {
      name: 'Apex Legends Squad',
      game: 'Apex Legends',
      rank: '#1 Global',
      image: 'https://images.pexels.com/photos/3419736/pexels-photo-3419736.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      achievements: ['World Champions 2024', 'Regional Masters', '15 Win Streak'],
      color: 'from-[#00C2FF] to-[#0099CC]'
    },
    {
      name: 'Valorant Strikers',
      game: 'Valorant',
      rank: '#2 Regional',
      image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      achievements: ['Champions Tour 2024', 'Masters Winner', '89% Win Rate'],
      color: 'from-[#FF4F91] to-[#CC3E73]'
    },
    {
      name: 'League Legends',
      game: 'League of Legends',
      rank: '#3 International',
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      achievements: ['Worlds Semifinal', 'LCS Champions', 'MVP Player'],
      color: 'from-[#00FF9D] to-[#00CC7A]'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#1F1F2E] to-[#252538]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Star className="h-6 w-6 text-[#00C2FF]" />
            <span className="text-[#00C2FF] font-medium tracking-wider uppercase">Elite Teams</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-['Space_Grotesk'] mb-6">
            <span className="bg-gradient-to-r from-white to-[#B0B0C0] bg-clip-text text-transparent">
              Championship
            </span>
            <span className="bg-gradient-to-r from-[#00C2FF] to-[#FF4F91] bg-clip-text text-transparent ml-3">
              Squads
            </span>
          </h2>
          <p className="text-[#B0B0C0] text-lg max-w-3xl mx-auto leading-relaxed">
            Our professional esports teams dominate the global competitive scene across multiple gaming titles.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teams.map((team, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-2xl bg-[#2A2A3C]/50 backdrop-blur-sm border border-[#2A2A3C] hover:border-[#00C2FF]/50 transition-all duration-500"
            >
              {/* Background Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={team.image}
                  alt={team.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A2A3C] via-transparent to-transparent" />
                
                {/* Rank Badge */}
                <div className="absolute top-4 right-4">
                  <div className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${team.color}`}>
                    {team.rank}
                  </div>
                </div>

                {/* Live Indicator */}
                <div className="absolute top-4 left-4 flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#00FF9D] rounded-full animate-pulse" />
                  <span className="text-[#00FF9D] text-xs font-medium">LIVE</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{team.name}</h3>
                    <p className="text-[#B0B0C0] text-sm">{team.game}</p>
                  </div>
                  <div className="flex space-x-1">
                    <Zap className="h-5 w-5 text-[#00C2FF]" />
                    <Target className="h-5 w-5 text-[#FF4F91]" />
                    <Trophy className="h-5 w-5 text-[#00FF9D]" />
                  </div>
                </div>

                <div className="space-y-2">
                  {team.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-[#00C2FF] rounded-full" />
                      <span className="text-[#B0B0C0] text-sm">{achievement}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full mt-6 bg-gradient-to-r from-[#2A2A3C] to-[#3A3A4C] hover:from-[#00C2FF]/20 hover:to-[#FF4F91]/20 border border-[#2A2A3C] hover:border-[#00C2FF]/50 px-4 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-300 group-hover:scale-105">
                  View Team Details
                </button>
              </div>

              {/* Gradient Overlay */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${team.color} pointer-events-none transition-opacity duration-500`} />
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-[#2A2A3C]/30 backdrop-blur-sm rounded-2xl p-8 border border-[#2A2A3C]">
            <h3 className="text-2xl font-bold text-white mb-4">Join the Championship Journey</h3>
            <p className="text-[#B0B0C0] mb-6">Think you have what it takes? Apply for tryouts and become part of our elite gaming family.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-[#00C2FF] to-[#FF4F91] px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                Start Tryouts
              </button>
              <button className="border border-[#2A2A3C] hover:border-[#00C2FF] px-8 py-3 rounded-full font-semibold transition-colors">
                View Requirements
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamHighlights;