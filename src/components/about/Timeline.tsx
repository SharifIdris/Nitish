import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Trophy, Users, Globe, Rocket, Star } from 'lucide-react';

const Timeline = () => {
  const milestones = [
    {
      year: '2018',
      title: 'Foundation',
      description: 'CrissCross Esports was founded with a vision to revolutionize competitive gaming.',
      icon: Rocket,
      color: 'from-[#00C2FF] to-[#0099CC]',
      achievements: ['Founded by Sarah Chen', 'First office in Los Angeles', 'Initial funding secured']
    },
    {
      year: '2019',
      title: 'First Championships',
      description: 'Our inaugural teams secured their first major tournament victories.',
      icon: Trophy,
      color: 'from-[#FF4F91] to-[#CC3E73]',
      achievements: ['Valorant team formed', 'First regional championship', '3 tournament wins']
    },
    {
      year: '2020',
      title: 'Global Expansion',
      description: 'Expanded internationally with teams across multiple continents.',
      icon: Globe,
      color: 'from-[#00FF9D] to-[#00CC7A]',
      achievements: ['EU and APAC offices opened', '12 professional players signed', 'Global partnerships established']
    },
    {
      year: '2021',
      title: 'Multi-Game Presence',
      description: 'Diversified into League of Legends, Apex Legends, and Counter-Strike.',
      icon: Users,
      color: 'from-[#FFBE0B] to-[#F59E0B]',
      achievements: ['4 game titles covered', '25 tournament wins', 'Esports facility opened']
    },
    {
      year: '2022',
      title: 'Championship Glory',
      description: 'Dominated the competitive scene with multiple world championship titles.',
      icon: Star,
      color: 'from-[#8B5CF6] to-[#7C3AED]',
      achievements: ['World Champions in 3 titles', 'Player of the Year awards', '$2M+ prize winnings']
    },
    {
      year: '2023-2025',
      title: 'Industry Leadership',
      description: 'Established as one of the world\'s premier esports organizations.',
      icon: Calendar,
      color: 'from-[#EC4899] to-[#DB2777]',
      achievements: ['47+ championships won', '120+ professional players', '25 countries represented']
    }
  ];

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
          <h2 className="text-4xl md:text-5xl font-bold font-['Space_Grotesk'] mb-6">
            <span className="bg-gradient-to-r from-white to-[#B0B0C0] bg-clip-text text-transparent">
              Our
            </span>
            <span className="bg-gradient-to-r from-[#00C2FF] to-[#FF4F91] bg-clip-text text-transparent ml-3">
              Journey
            </span>
          </h2>
          <p className="text-[#B0B0C0] text-lg max-w-3xl mx-auto leading-relaxed">
            From humble beginnings to global recognition, explore the milestones that shaped our path to excellence.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00C2FF] via-[#FF4F91] to-[#00FF9D] transform md:-translate-x-px"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-row`}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-[#2A2A3C] border-2 border-[#00C2FF] rounded-full transform md:-translate-x-2 z-10">
                  <div className="w-2 h-2 bg-[#00C2FF] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>

                {/* Content */}
                <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="group relative">
                    <div className="bg-[#2A2A3C]/50 backdrop-blur-sm border border-[#2A2A3C] rounded-2xl p-8 hover:border-[#00C2FF]/50 transition-all duration-500">
                      {/* Year Badge */}
                      <div className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${milestone.color} text-white font-bold text-sm mb-4`}>
                        <milestone.icon className="h-4 w-4 mr-2" />
                        {milestone.year}
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-3 font-['Space_Grotesk'] group-hover:text-[#00C2FF] transition-colors">
                        {milestone.title}
                      </h3>
                      
                      <p className="text-[#B0B0C0] leading-relaxed mb-6">
                        {milestone.description}
                      </p>

                      <div className="space-y-2">
                        <h4 className="text-white font-semibold text-sm">Key Achievements:</h4>
                        {milestone.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-center text-[#B0B0C0] text-sm">
                            <div className="w-1.5 h-1.5 bg-[#00C2FF] rounded-full mr-3" />
                            {achievement}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 bg-gradient-to-br ${milestone.color} pointer-events-none transition-opacity duration-500 rounded-2xl`} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Future Vision */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-[#2A2A3C]/50 to-[#3A3A4C]/50 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-[#2A2A3C] relative overflow-hidden">
            <div className="absolute top-10 left-10 w-20 h-20 bg-[#00C2FF]/10 rounded-full blur-xl" />
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#FF4F91]/10 rounded-full blur-xl" />
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4 font-['Space_Grotesk']">
                The Future Awaits
              </h3>
              <p className="text-[#B0B0C0] text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
                As we continue to push the boundaries of competitive gaming, we're excited about what lies ahead. 
                New games, new talents, new championships, and new ways to inspire the global gaming community.
              </p>
              
              <button className="bg-gradient-to-r from-[#00C2FF] to-[#FF4F91] px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform">
                Join Our Journey
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;