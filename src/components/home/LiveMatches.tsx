import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Users, Calendar, Trophy, Eye } from 'lucide-react';

const LiveMatches = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const liveMatches = [
    {
      id: 1,
      team1: { name: 'CrissCross Apex', logo: '🏆', score: 2 },
      team2: { name: 'Thunder Squad', logo: '⚡', score: 1 },
      game: 'Apex Legends',
      tournament: 'Global Championship',
      status: 'live',
      viewers: 15420,
      timeRemaining: '12:34',
      map: 'World\'s Edge'
    },
    {
      id: 2,
      team1: { name: 'CrissCross VAL', logo: '🎯', score: 8 },
      team2: { name: 'Phoenix Clan', logo: '🔥', score: 6 },
      game: 'Valorant',
      tournament: 'Masters Series',
      status: 'live',
      viewers: 8930,
      timeRemaining: '08:45',
      map: 'Ascent'
    }
  ];

  const upcomingMatches = [
    {
      id: 3,
      team1: { name: 'CrissCross LoL', logo: '⚔️' },
      team2: { name: 'Dragon Kings', logo: '🐉' },
      game: 'League of Legends',
      tournament: 'World Series',
      status: 'upcoming',
      startTime: '2025-01-20T19:00:00Z',
      map: 'Summoner\'s Rift'
    },
    {
      id: 4,
      team1: { name: 'CrissCross CS2', logo: '💀' },
      team2: { name: 'Steel Panthers', logo: '🛡️' },
      game: 'Counter-Strike 2',
      tournament: 'Major Championship',
      status: 'upcoming',
      startTime: '2025-01-20T21:30:00Z',
      map: 'Mirage'
    }
  ];

  const formatTimeUntil = (dateString) => {
    const targetDate = new Date(dateString);
    const diff = targetDate - currentTime;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours}h ${minutes}m`;
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
            <div className="w-3 h-3 bg-[#00FF9D] rounded-full animate-pulse" />
            <span className="text-[#00FF9D] font-medium tracking-wider uppercase">Live Now</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-['Space_Grotesk'] mb-6">
            <span className="bg-gradient-to-r from-white to-[#B0B0C0] bg-clip-text text-transparent">
              Tournament
            </span>
            <span className="bg-gradient-to-r from-[#00C2FF] to-[#FF4F91] bg-clip-text text-transparent ml-3">
              Action
            </span>
          </h2>
          <p className="text-[#B0B0C0] text-lg max-w-3xl mx-auto leading-relaxed">
            Watch our teams compete live or catch up on upcoming championship matches.
          </p>
        </motion.div>

        {/* Live Matches */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
            <div className="w-3 h-3 bg-[#00FF9D] rounded-full animate-pulse mr-3" />
            Live Matches
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {liveMatches.map((match, index) => (
              <motion.div
                key={match.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl bg-[#2A2A3C]/50 backdrop-blur-sm border border-[#00FF9D]/30 hover:border-[#00FF9D] transition-all duration-500"
              >
                {/* Live Indicator */}
                <div className="absolute top-4 left-4 flex items-center space-x-2 z-10">
                  <div className="w-2 h-2 bg-[#00FF9D] rounded-full animate-pulse" />
                  <span className="bg-[#00FF9D] text-black px-2 py-1 rounded-full text-xs font-bold">
                    LIVE
                  </span>
                </div>

                {/* Viewers */}
                <div className="absolute top-4 right-4 flex items-center space-x-1 z-10">
                  <Eye className="h-4 w-4 text-[#B0B0C0]" />
                  <span className="text-[#B0B0C0] text-sm font-medium">
                    {match.viewers.toLocaleString()}
                  </span>
                </div>

                <div className="p-6">
                  {/* Tournament Info */}
                  <div className="text-center mb-6">
                    <h4 className="text-[#00C2FF] font-semibold text-sm mb-1">{match.tournament}</h4>
                    <p className="text-[#B0B0C0] text-xs">{match.game} • {match.map}</p>
                  </div>

                  {/* Teams */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-center">
                      <div className="text-3xl mb-2">{match.team1.logo}</div>
                      <h5 className="text-white font-semibold text-sm mb-1">{match.team1.name}</h5>
                      <div className="text-2xl font-bold text-[#00C2FF]">{match.team1.score}</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-[#FF4F91] font-bold text-lg mb-2">VS</div>
                      <div className="text-[#B0B0C0] text-sm">{match.timeRemaining}</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-3xl mb-2">{match.team2.logo}</div>
                      <h5 className="text-white font-semibold text-sm mb-1">{match.team2.name}</h5>
                      <div className="text-2xl font-bold text-[#FF4F91]">{match.team2.score}</div>
                    </div>
                  </div>

                  {/* Watch Button */}
                  <button className="w-full bg-gradient-to-r from-[#00C2FF] to-[#FF4F91] px-6 py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:scale-105 transition-transform">
                    <Play className="h-5 w-5" />
                    <span>Watch Live</span>
                  </button>
                </div>

                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00FF9D]/5 to-transparent pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Upcoming Matches */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
            <Calendar className="h-6 w-6 text-[#00C2FF] mr-3" />
            Upcoming Matches
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {upcomingMatches.map((match, index) => (
              <motion.div
                key={match.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl bg-[#2A2A3C]/30 backdrop-blur-sm border border-[#2A2A3C] hover:border-[#00C2FF]/50 transition-all duration-500"
              >
                <div className="p-6">
                  {/* Tournament Info */}
                  <div className="text-center mb-6">
                    <h4 className="text-[#00C2FF] font-semibold text-sm mb-1">{match.tournament}</h4>
                    <p className="text-[#B0B0C0] text-xs">{match.game} • {match.map}</p>
                  </div>

                  {/* Teams */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-center">
                      <div className="text-3xl mb-2">{match.team1.logo}</div>
                      <h5 className="text-white font-semibold text-sm">{match.team1.name}</h5>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-[#FF4F91] font-bold text-lg mb-2">VS</div>
                      <div className="text-[#00C2FF] text-sm font-medium">
                        in {formatTimeUntil(match.startTime)}
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-3xl mb-2">{match.team2.logo}</div>
                      <h5 className="text-white font-semibold text-sm">{match.team2.name}</h5>
                    </div>
                  </div>

                  {/* Remind Button */}
                  <button className="w-full border border-[#2A2A3C] hover:border-[#00C2FF] bg-[#2A2A3C]/50 hover:bg-[#00C2FF]/10 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300">
                    Set Reminder
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tournament Schedule CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-[#2A2A3C]/50 to-[#3A3A4C]/50 backdrop-blur-sm rounded-2xl p-8 border border-[#2A2A3C]">
            <h3 className="text-2xl font-bold text-white mb-4">Full Tournament Schedule</h3>
            <p className="text-[#B0B0C0] mb-6">View complete match schedules, results, and tournament brackets.</p>
            <button className="bg-gradient-to-r from-[#00C2FF] to-[#FF4F91] px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
              View All Tournaments
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LiveMatches;