import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Trophy, Users, Calendar, CheckCircle, AlertCircle } from 'lucide-react';

const RegistrationSection = () => {
  const [selectedTournament, setSelectedTournament] = useState(null);
  const [registrationStep, setRegistrationStep] = useState(1);

  const openTournaments = [
    {
      id: 1,
      title: 'Valorant Community Championship',
      game: 'Valorant',
      date: 'February 15-20, 2025',
      prizePool: '$50,000',
      format: '5v5 Single Elimination',
      slots: { total: 128, filled: 67 },
      requirements: ['Minimum rank: Diamond', 'Team of 5 players', 'Region: North America'],
      registrationFee: 'Free',
      deadline: 'February 10, 2025'
    },
    {
      id: 2,
      title: 'Apex Legends Open Series',
      game: 'Apex Legends',
      date: 'March 5-8, 2025',
      prizePool: '$75,000',
      format: '3v3 Battle Royale',
      slots: { total: 60, filled: 23 },
      requirements: ['Minimum rank: Platinum', 'Team of 3 players', 'Global participation'],
      registrationFee: '$25 per team',
      deadline: 'February 28, 2025'
    },
    {
      id: 3,
      title: 'League of Legends Amateur Cup',
      game: 'League of Legends',
      date: 'March 12-15, 2025',
      prizePool: '$100,000',
      format: '5v5 Swiss System',
      slots: { total: 64, filled: 41 },
      requirements: ['Maximum rank: Diamond', 'Team of 5 players', 'Regional qualifiers'],
      registrationFee: 'Free',
      deadline: 'March 8, 2025'
    }
  ];

  const registrationSteps = [
    { id: 1, title: 'Tournament Selection', icon: Trophy },
    { id: 2, title: 'Team Information', icon: Users },
    { id: 3, title: 'Player Details', icon: UserPlus },
    { id: 4, title: 'Confirmation', icon: CheckCircle }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#252538] to-[#1F1F2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <UserPlus className="h-6 w-6 text-[#00C2FF]" />
            <span className="text-[#00C2FF] font-medium tracking-wider uppercase">Registration</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-['Space_Grotesk'] mb-6">
            <span className="bg-gradient-to-r from-white to-[#B0B0C0] bg-clip-text text-transparent">
              Join the
            </span>
            <span className="bg-gradient-to-r from-[#00C2FF] to-[#FF4F91] bg-clip-text text-transparent ml-3">
              Competition
            </span>
          </h2>
          <p className="text-[#B0B0C0] text-lg max-w-3xl mx-auto leading-relaxed">
            Register your team for upcoming tournaments and compete against the best players worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Tournament List */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Open Tournaments</h3>
              <div className="space-y-6">
                {openTournaments.map((tournament, index) => (
                  <motion.div
                    key={tournament.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className={`bg-[#2A2A3C]/50 backdrop-blur-sm border rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
                      selectedTournament?.id === tournament.id
                        ? 'border-[#00C2FF] bg-[#2A2A3C]/70'
                        : 'border-[#2A2A3C] hover:border-[#00C2FF]/50'
                    }`}
                    onClick={() => setSelectedTournament(tournament)}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-white mb-1">{tournament.title}</h4>
                        <div className="flex items-center space-x-4 text-[#B0B0C0] text-sm">
                          <span>{tournament.game}</span>
                          <span>•</span>
                          <span>{tournament.format}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-[#00FF9D] font-bold text-lg">{tournament.prizePool}</div>
                        <div className="text-[#B0B0C0] text-xs">{tournament.registrationFee}</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-[#00C2FF]" />
                        <span className="text-[#B0B0C0] text-sm">{tournament.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-[#FF4F91]" />
                        <span className="text-[#B0B0C0] text-sm">
                          {tournament.slots.filled}/{tournament.slots.total} teams
                        </span>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-[#B0B0C0]">Registration Progress</span>
                        <span className="text-[#00C2FF]">
                          {Math.round((tournament.slots.filled / tournament.slots.total) * 100)}%
                        </span>
                      </div>
                      <div className="w-full bg-[#2A2A3C] rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-[#00C2FF] to-[#FF4F91] h-2 rounded-full transition-all duration-300"
                          style={{ 
                            width: `${(tournament.slots.filled / tournament.slots.total) * 100}%` 
                          }}
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-[#B0B0C0] text-sm">
                        Deadline: <span className="text-[#FF4F91]">{tournament.deadline}</span>
                      </div>
                      <button
                        className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                          selectedTournament?.id === tournament.id
                            ? 'bg-gradient-to-r from-[#00C2FF] to-[#FF4F91] text-white'
                            : 'border border-[#2A2A3C] hover:border-[#00C2FF] text-[#B0B0C0] hover:text-white'
                        }`}
                      >
                        {selectedTournament?.id === tournament.id ? 'Selected' : 'Select'}
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Registration Panel */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="sticky top-8"
            >
              <div className="bg-[#2A2A3C]/50 backdrop-blur-sm border border-[#2A2A3C] rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-6">Tournament Registration</h3>

                {selectedTournament ? (
                  <div>
                    {/* Registration Steps */}
                    <div className="mb-6">
                      <div className="flex justify-between items-center mb-4">
                        {registrationSteps.map((step) => (
                          <div
                            key={step.id}
                            className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold ${
                              registrationStep >= step.id
                                ? 'bg-[#00C2FF] text-white'
                                : 'bg-[#2A2A3C] text-[#B0B0C0]'
                            }`}
                          >
                            {registrationStep > step.id ? (
                              <CheckCircle className="h-4 w-4" />
                            ) : (
                              step.id
                            )}
                          </div>
                        ))}
                      </div>
                      <div className="text-center">
                        <h4 className="text-white font-semibold">
                          {registrationSteps[registrationStep - 1].title}
                        </h4>
                      </div>
                    </div>

                    {/* Tournament Details */}
                    <div className="bg-[#1F1F2E]/50 rounded-xl p-4 mb-6">
                      <h4 className="text-white font-semibold mb-3">{selectedTournament.title}</h4>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-[#B0B0C0] text-sm">Prize Pool:</span>
                          <span className="text-[#00FF9D] font-semibold">{selectedTournament.prizePool}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#B0B0C0] text-sm">Registration Fee:</span>
                          <span className="text-white">{selectedTournament.registrationFee}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#B0B0C0] text-sm">Available Slots:</span>
                          <span className="text-[#FF4F91]">
                            {selectedTournament.slots.total - selectedTournament.slots.filled}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Requirements */}
                    <div className="mb-6">
                      <h5 className="text-white font-semibold mb-3 flex items-center">
                        <AlertCircle className="h-4 w-4 text-[#FFBE0B] mr-2" />
                        Requirements
                      </h5>
                      <div className="space-y-2">
                        {selectedTournament.requirements.map((req, index) => (
                          <div key={index} className="flex items-center text-[#B0B0C0] text-sm">
                            <div className="w-1.5 h-1.5 bg-[#00C2FF] rounded-full mr-3" />
                            {req}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Registration Button */}
                    <button className="w-full bg-gradient-to-r from-[#00C2FF] to-[#FF4F91] px-6 py-4 rounded-xl font-semibold text-lg hover:scale-105 transition-transform">
                      Start Registration
                    </button>

                    <p className="text-[#B0B0C0] text-xs text-center mt-4">
                      By registering, you agree to our tournament rules and conditions.
                    </p>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Trophy className="h-16 w-16 text-[#2A2A3C] mx-auto mb-4" />
                    <h4 className="text-white font-semibold mb-2">Select a Tournament</h4>
                    <p className="text-[#B0B0C0] text-sm">
                      Choose a tournament from the list to begin registration.
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;