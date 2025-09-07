import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Award, Calendar, Users, Eye } from 'lucide-react';

const ResultsSection = () => {
  const [selectedGame, setSelectedGame] = useState('All');

  const games = ['All', 'Valorant', 'Apex Legends', 'League of Legends', 'Counter-Strike 2'];

  const recentResults = [
    {
      id: 1,
      tournament: 'Valorant Champions Series',
      game: 'Valorant',
      date: '2025-01-18',
      winner: { name: 'CrissCross Strikers', logo: '🎯' },
      runnerUp: { name: 'Phoenix Rising', logo: '🔥' },
      prizePool: '$250,000',
      viewership: '2.1M peak viewers',
      finalScore: '3-1',
      mvp: 'Phoenix',
      highlights: ['Perfect clutch in Map 4', 'Ace round in decisive map', 'Flawless teamwork']
    },
    {
      id: 2,
      tournament: 'Apex Legends Masters',
      game: 'Apex Legends',
      date: '2025-01-12',
      winner: { name: 'CrissCross Apex', logo: '⚡' },
      runnerUp: { name: 'Storm Squad', logo: '🌩️' },
      prizePool: '$150,000',
      viewership: '1.8M peak viewers',
      finalScore: '20 points lead',
      mvp: 'Apex',
      highlights: ['Record damage in finals', '15 consecutive wins', 'Flawless rotation plays']
    },
    {
      id: 3,
      tournament: 'League of Legends Regional Cup',
      game: 'League of Legends',
      date: '2025-01-05',
      winner: { name: 'Dragon Kings', logo: '🐉' },
      runnerUp: { name: 'CrissCross LoL', logo: '⚔️' },
      prizePool: '$100,000',
      viewership: '3.2M peak viewers',
      finalScore: '3-2',
      mvp: 'DragonSlayer',
      highlights: ['Epic 5-game series', 'Comeback from 0-2', 'Baron steal decides finals']
    },
    {
      id: 4,
      tournament: 'CS2 Monthly Major',
      game: 'Counter-Strike 2',
      date: '2024-12-28',
      winner: { name: 'Steel Titans', logo: '🛡️' },
      runnerUp: { name: 'CrissCross CS2', logo: '💀' },
      prizePool: '$75,000',
      viewership: '1.5M peak viewers',
      finalScore: '16-14, 16-12',
      mvp: 'SteelShot',
      highlights: ['Overtime thriller', 'Clutch 1v3 scenarios', 'Perfect aim duels']
    }
  ];

  const filteredResults = recentResults.filter(
    result => selectedGame === 'All' || result.game === selectedGame
  );

  const getPositionColor = (index) => {
    switch (index) {
      case 0: return 'from-[#FFD700] to-[#FFA500]'; // Gold
      case 1: return 'from-[#C0C0C0] to-[#A8A8A8]'; // Silver  
      case 2: return 'from-[#CD7F32] to-[#B87333]'; // Bronze
      default: return 'from-[#00C2FF] to-[#FF4F91]';
    }
  };

  const getPositionIcon = (index) => {
    switch (index) {
      case 0: return Trophy;
      case 1: return Medal;
      case 2: return Award;
      default: return Trophy;
    }
  };

  return (
    <section className="py-20 bg-[#1F1F2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Trophy className="h-6 w-6 text-[#00C2FF]" />
            <span className="text-[#00C2FF] font-medium tracking-wider uppercase">Results</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-['Space_Grotesk'] mb-6">
            <span className="bg-gradient-to-r from-white to-[#B0B0C0] bg-clip-text text-transparent">
              Tournament
            </span>
            <span className="bg-gradient-to-r from-[#00C2FF] to-[#FF4F91] bg-clip-text text-transparent ml-3">
              Results
            </span>
          </h2>
          <p className="text-[#B0B0C0] text-lg max-w-3xl mx-auto leading-relaxed">
            Explore recent tournament results, match statistics, and championship highlights.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {games.map((game) => (
            <button
              key={game}
              onClick={() => setSelectedGame(game)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedGame === game
                  ? 'bg-gradient-to-r from-[#00C2FF] to-[#FF4F91] text-white'
                  : 'bg-[#2A2A3C]/50 text-[#B0B0C0] hover:bg-[#2A2A3C] hover:text-white border border-[#2A2A3C] hover:border-[#00C2FF]/50'
              }`}
            >
              {game}
            </button>
          ))}
        </motion.div>

        {/* Results Grid */}
        <div className="space-y-8">
          {filteredResults.map((result, index) => {
            const PositionIcon = getPositionIcon(index);
            
            return (
              <motion.div
                key={result.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <div className="bg-[#2A2A3C]/50 backdrop-blur-sm border border-[#2A2A3C] rounded-2xl p-8 hover:border-[#00C2FF]/50 transition-all duration-500">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Tournament Info */}
                    <div className="lg:col-span-1">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${getPositionColor(index)}`}>
                          <PositionIcon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-[#00C2FF] transition-colors">
                            {result.tournament}
                          </h3>
                          <div className="flex items-center space-x-2 text-[#B0B0C0] text-sm">
                            <Calendar className="h-4 w-4" />
                            <span>{new Date(result.date).toLocaleDateString()}</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-[#B0B0C0] text-sm">Prize Pool:</span>
                          <span className="text-[#00FF9D] font-semibold">{result.prizePool}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-[#B0B0C0] text-sm">Peak Viewers:</span>
                          <span className="text-[#FF4F91] font-semibold">{result.viewership}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-[#B0B0C0] text-sm">MVP:</span>
                          <span className="text-[#00C2FF] font-semibold">{result.mvp}</span>
                        </div>
                      </div>
                    </div>

                    {/* Match Result */}
                    <div className="lg:col-span-1 flex flex-col justify-center">
                      <div className="text-center">
                        <div className="flex items-center justify-between mb-4">
                          <div className="text-center">
                            <div className="text-4xl mb-2">{result.winner.logo}</div>
                            <h4 className="text-white font-semibold text-sm mb-1">{result.winner.name}</h4>
                            <div className="text-[#00FF9D] font-bold text-xs">WINNER</div>
                          </div>
                          
                          <div className="text-center">
                            <div className="text-[#FF4F91] font-bold text-lg mb-2">VS</div>
                            <div className="text-white font-bold">{result.finalScore}</div>
                          </div>
                          
                          <div className="text-center">
                            <div className="text-4xl mb-2">{result.runnerUp.logo}</div>
                            <h4 className="text-white font-semibold text-sm mb-1">{result.runnerUp.name}</h4>
                            <div className="text-[#B0B0C0] font-bold text-xs">RUNNER-UP</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="lg:col-span-1">
                      <h5 className="text-white font-semibold mb-3 flex items-center">
                        <Award className="h-4 w-4 text-[#FF4F91] mr-2" />
                        Match Highlights
                      </h5>
                      <div className="space-y-2">
                        {result.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-center text-[#B0B0C0] text-sm">
                            <div className="w-1.5 h-1.5 bg-[#00C2FF] rounded-full mr-3" />
                            {highlight}
                          </div>
                        ))}
                      </div>

                      <button className="w-full mt-4 bg-[#2A2A3C]/50 hover:bg-[#2A2A3C] border border-[#2A2A3C] hover:border-[#00C2FF]/50 px-4 py-3 rounded-xl text-[#B0B0C0] hover:text-white font-semibold text-sm transition-all duration-300 flex items-center justify-center space-x-2">
                        <Eye className="h-4 w-4" />
                        <span>Watch Highlights</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Background Glow */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 bg-gradient-to-br ${getPositionColor(index)} pointer-events-none transition-opacity duration-500 rounded-2xl`} />
              </motion.div>
            );
          })}
        </div>

        {/* View More Results */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-[#2A2A3C]/50 to-[#3A3A4C]/50 backdrop-blur-sm rounded-2xl p-8 border border-[#2A2A3C]">
            <h3 className="text-2xl font-bold text-white mb-4">Complete Tournament Archive</h3>
            <p className="text-[#B0B0C0] mb-6">Access detailed statistics, match replays, and historical data from all our tournaments.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-[#00C2FF] to-[#FF4F91] px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                View All Results
              </button>
              <button className="border border-[#2A2A3C] hover:border-[#00C2FF] px-8 py-3 rounded-full font-semibold transition-colors">
                Download Statistics
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsSection;