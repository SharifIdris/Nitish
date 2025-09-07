import React from 'react';
import { motion } from 'framer-motion';
import { Play, Users, Clock, Trophy, Eye } from 'lucide-react';

const LiveTournaments = () => {
  const liveTournaments = [
    {
      id: 1,
      title: 'Valorant Champions Series',
      game: 'Valorant',
      stage: 'Grand Finals',
      prizePool: '$250,000',
      viewers: 45620,
      teams: [
        { name: 'CrissCross Strikers', logo: '🎯', score: 2, country: 'USA' },
        { name: 'Phoenix Rising', logo: '🔥', score: 1, country: 'KOR' }
      ],
      timeRemaining: 'Map 4 - 8:12',
      status: 'live'
    },
    {
      id: 2,
      title: 'Apex Legends Global Championship',
      game: 'Apex Legends',
      stage: 'Semifinals',
      prizePool: '$180,000',
      viewers: 32150,
      teams: [
        { name: 'CrissCross Apex', logo: '⚡', score: 15, country: 'USA' },
        { name: 'Thunder Squad', logo: '🌩️', score: 12, country: 'BRA' }
      ],
      timeRemaining: 'Round 18/20',
      status: 'live'
    }
  ];

  const upcomingTournaments = [
    {
      id: 3,
      title: 'League of Legends World Series',
      game: 'League of Legends',
      stage: 'Group Stage',
      prizePool: '$500,000',
      startTime: '2025-01-25T18:00:00Z',
      teams: 16,
      duration: '5 days'
    },
    {
      id: 4,
      title: 'Counter-Strike 2 Major',
      game: 'Counter-Strike 2',
      stage: 'Qualifiers',
      prizePool: '$1,000,000',
      startTime: '2025-02-01T14:00:00Z',
      teams: 24,
      duration: '10 days'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#1F1F2E] to-[#252538]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Live Tournaments */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-[#00FF9D] rounded-full animate-pulse" />
              <h2 className="text-3xl font-bold text-white font-['Space_Grotesk']">
                Live Tournaments
              </h2>
            </div>
            <div className="text-[#B0B0C0] text-sm">
              {liveTournaments.length} tournaments active
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {liveTournaments.map((tournament, index) => (
              <motion.div
                key={tournament.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl bg-[#2A2A3C]/50 backdrop-blur-sm border border-[#00FF9D]/30 hover:border-[#00FF9D] transition-all duration-500"
              >
                {/* Live Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#00FF9D] rounded-full animate-pulse" />
                    <span className="bg-[#00FF9D] text-black px-3 py-1 rounded-full text-xs font-bold">
                      LIVE
                    </span>
                  </div>
                </div>

                {/* Viewers */}
                <div className="absolute top-4 right-4 z-10 flex items-center space-x-1 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                  <Eye className="h-3 w-3 text-[#B0B0C0]" />
                  <span className="text-[#B0B0C0] text-xs font-medium">
                    {tournament.viewers.toLocaleString()}
                  </span>
                </div>

                <div className="p-8">
                  {/* Tournament Info */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-[#00C2FF] transition-colors">
                        {tournament.title}
                      </h3>
                      <div className="text-[#00FF9D] font-bold text-lg">
                        {tournament.prizePool}
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 text-[#B0B0C0] text-sm">
                      <span>{tournament.game}</span>
                      <span>•</span>
                      <span>{tournament.stage}</span>
                      <span>•</span>
                      <span>{tournament.timeRemaining}</span>
                    </div>
                  </div>

                  {/* Teams */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between">
                      <div className="text-center">
                        <div className="text-3xl mb-2">{tournament.teams[0].logo}</div>
                        <h4 className="text-white font-semibold text-sm mb-1">{tournament.teams[0].name}</h4>
                        <div className="text-xs text-[#B0B0C0]">{tournament.teams[0].country}</div>
                        <div className="text-2xl font-bold text-[#00C2FF] mt-2">{tournament.teams[0].score}</div>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-[#FF4F91] font-bold text-lg">VS</div>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-3xl mb-2">{tournament.teams[1].logo}</div>
                        <h4 className="text-white font-semibold text-sm mb-1">{tournament.teams[1].name}</h4>
                        <div className="text-xs text-[#B0B0C0]">{tournament.teams[1].country}</div>
                        <div className="text-2xl font-bold text-[#FF4F91] mt-2">{tournament.teams[1].score}</div>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-3">
                    <button className="flex-1 bg-gradient-to-r from-[#00C2FF] to-[#FF4F91] px-6 py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:scale-105 transition-transform">
                      <Play className="h-4 w-4" />
                      <span>Watch Live</span>
                    </button>
                    <button className="px-4 py-3 border border-[#2A2A3C] hover:border-[#00C2FF] rounded-xl transition-colors">
                      <Trophy className="h-4 w-4 text-[#B0B0C0] hover:text-[#00C2FF] transition-colors" />
                    </button>
                  </div>
                </div>

                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00FF9D]/5 to-transparent pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Upcoming Tournaments */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white font-['Space_Grotesk'] flex items-center">
              <Clock className="h-8 w-8 text-[#00C2FF] mr-3" />
              Upcoming Events
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {upcomingTournaments.map((tournament, index) => (
              <motion.div
                key={tournament.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-[#2A2A3C]/30 backdrop-blur-sm border border-[#2A2A3C] rounded-xl p-6 hover:border-[#00C2FF]/50 hover:bg-[#2A2A3C]/50 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{tournament.title}</h3>
                    <div className="text-[#B0B0C0] text-sm">{tournament.game} • {tournament.stage}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[#00C2FF] font-bold">{tournament.prizePool}</div>
                    <div className="text-[#B0B0C0] text-xs">{tournament.duration}</div>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-[#B0B0C0]" />
                    <span className="text-[#B0B0C0] text-sm">{tournament.teams} teams</span>
                  </div>
                  <div className="text-[#00C2FF] text-sm font-medium">
                    Starts in 5 days
                  </div>
                </div>

                <button className="w-full border border-[#2A2A3C] hover:border-[#00C2FF] bg-[#2A2A3C]/50 hover:bg-[#00C2FF]/10 px-4 py-3 rounded-xl font-semibold text-white transition-all duration-300">
                  Register Interest
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LiveTournaments;