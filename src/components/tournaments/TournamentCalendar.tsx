import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ChevronLeft, ChevronRight, Filter } from 'lucide-react';

const TournamentCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 0)); // January 2025
  const [selectedFilter, setSelectedFilter] = useState('All');

  const games = ['All', 'Valorant', 'Apex Legends', 'League of Legends', 'Counter-Strike 2'];

  const tournaments = [
    {
      date: new Date(2025, 0, 15),
      title: 'Valorant Regional Championship',
      game: 'Valorant',
      type: 'Championship',
      prizePool: '$100K',
      color: 'bg-[#00C2FF]'
    },
    {
      date: new Date(2025, 0, 18),
      title: 'Apex Legends Masters',
      game: 'Apex Legends',
      type: 'Masters',
      prizePool: '$75K',
      color: 'bg-[#FF4F91]'
    },
    {
      date: new Date(2025, 0, 22),
      title: 'LoL World Series Qualifiers',
      game: 'League of Legends',
      type: 'Qualifier',
      prizePool: '$250K',
      color: 'bg-[#00FF9D]'
    },
    {
      date: new Date(2025, 0, 25),
      title: 'CS2 Major Tournament',
      game: 'Counter-Strike 2',
      type: 'Major',
      prizePool: '$500K',
      color: 'bg-[#FFBE0B]'
    },
    {
      date: new Date(2025, 0, 28),
      title: 'Valorant Community Cup',
      game: 'Valorant',
      type: 'Community',
      prizePool: '$25K',
      color: 'bg-[#00C2FF]'
    }
  ];

  const filteredTournaments = tournaments.filter(
    tournament => selectedFilter === 'All' || tournament.game === selectedFilter
  );

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const getTournamentsByDate = (day) => {
    return filteredTournaments.filter(tournament => 
      tournament.date.getDate() === day && 
      tournament.date.getMonth() === currentDate.getMonth() &&
      tournament.date.getFullYear() === currentDate.getFullYear()
    );
  };

  const navigateMonth = (direction) => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + direction));
  };

  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-24 border border-[#2A2A3C]"></div>);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dayTournaments = getTournamentsByDate(day);
      const isToday = new Date().getDate() === day && 
                      new Date().getMonth() === currentDate.getMonth() && 
                      new Date().getFullYear() === currentDate.getFullYear();

      days.push(
        <motion.div
          key={day}
          whileHover={{ scale: 1.02 }}
          className={`h-24 border border-[#2A2A3C] p-2 cursor-pointer transition-all duration-300 ${
            isToday ? 'bg-[#00C2FF]/20 border-[#00C2FF]' : 'hover:bg-[#2A2A3C]/50'
          }`}
        >
          <div className={`text-sm font-semibold mb-1 ${
            isToday ? 'text-[#00C2FF]' : 'text-white'
          }`}>
            {day}
          </div>
          <div className="space-y-1">
            {dayTournaments.slice(0, 2).map((tournament, index) => (
              <div
                key={index}
                className={`text-xs px-1 py-0.5 rounded text-white truncate ${tournament.color}`}
                title={tournament.title}
              >
                {tournament.title.split(' ')[0]}
              </div>
            ))}
            {dayTournaments.length > 2 && (
              <div className="text-xs text-[#B0B0C0]">
                +{dayTournaments.length - 2} more
              </div>
            )}
          </div>
        </motion.div>
      );
    }

    return days;
  };

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
            <Calendar className="h-6 w-6 text-[#00C2FF]" />
            <span className="text-[#00C2FF] font-medium tracking-wider uppercase">Schedule</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-['Space_Grotesk'] mb-6">
            <span className="bg-gradient-to-r from-white to-[#B0B0C0] bg-clip-text text-transparent">
              Tournament
            </span>
            <span className="bg-gradient-to-r from-[#00C2FF] to-[#FF4F91] bg-clip-text text-transparent ml-3">
              Calendar
            </span>
          </h2>
          <p className="text-[#B0B0C0] text-lg max-w-3xl mx-auto leading-relaxed">
            Stay updated with all upcoming tournaments and events. Never miss a championship match.
          </p>
        </motion.div>

        {/* Calendar Controls */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center mb-8"
        >
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <button
              onClick={() => navigateMonth(-1)}
              className="p-2 bg-[#2A2A3C]/50 hover:bg-[#2A2A3C] border border-[#2A2A3C] hover:border-[#00C2FF] rounded-lg transition-all duration-300"
            >
              <ChevronLeft className="h-5 w-5 text-[#B0B0C0]" />
            </button>
            
            <h3 className="text-2xl font-bold text-white font-['Space_Grotesk'] min-w-[200px] text-center">
              {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </h3>
            
            <button
              onClick={() => navigateMonth(1)}
              className="p-2 bg-[#2A2A3C]/50 hover:bg-[#2A2A3C] border border-[#2A2A3C] hover:border-[#00C2FF] rounded-lg transition-all duration-300"
            >
              <ChevronRight className="h-5 w-5 text-[#B0B0C0]" />
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <Filter className="h-5 w-5 text-[#B0B0C0]" />
            <div className="flex space-x-2">
              {games.map((game) => (
                <button
                  key={game}
                  onClick={() => setSelectedFilter(game)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedFilter === game
                      ? 'bg-[#00C2FF] text-white'
                      : 'bg-[#2A2A3C]/50 text-[#B0B0C0] hover:bg-[#2A2A3C] hover:text-white'
                  }`}
                >
                  {game}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Calendar Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-[#2A2A3C]/30 backdrop-blur-sm border border-[#2A2A3C] rounded-2xl overflow-hidden"
        >
          {/* Calendar Header */}
          <div className="grid grid-cols-7 bg-[#2A2A3C]/50">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div key={day} className="p-4 text-center text-[#B0B0C0] font-semibold border-b border-[#2A2A3C]">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Days */}
          <div className="grid grid-cols-7">
            {renderCalendarDays()}
          </div>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-wrap justify-center gap-6"
        >
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-[#00C2FF] rounded"></div>
            <span className="text-[#B0B0C0] text-sm">Valorant</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-[#FF4F91] rounded"></div>
            <span className="text-[#B0B0C0] text-sm">Apex Legends</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-[#00FF9D] rounded"></div>
            <span className="text-[#B0B0C0] text-sm">League of Legends</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-[#FFBE0B] rounded"></div>
            <span className="text-[#B0B0C0] text-sm">Counter-Strike 2</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TournamentCalendar;