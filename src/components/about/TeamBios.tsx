import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Instagram, Twitch, Award } from 'lucide-react';
import { useSanityData } from '../../hooks/useSanity';
import { queries, urlFor } from '../../lib/sanity';
import { Leadership, TeamMember } from '../../schemas';

const TeamBios = () => {
  const { data: leadership, loading: leadershipLoading } = useSanityData<Leadership[]>(queries.leadership);
  const { data: players, loading: playersLoading } = useSanityData<TeamMember[]>(queries.teamMembers);

  const topPlayers = players?.filter(player => player.featured) || [];

  if (leadershipLoading || playersLoading) {
    return (
      <section className="py-20 bg-gradient-to-b from-[#252538] to-[#1F1F2E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-[#B0B0C0]">Loading team information...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-b from-[#252538] to-[#1F1F2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Leadership Team */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-['Space_Grotesk'] mb-6">
            <span className="bg-gradient-to-r from-white to-[#B0B0C0] bg-clip-text text-transparent">
              Leadership
            </span>
            <span className="bg-gradient-to-r from-[#00C2FF] to-[#FF4F91] bg-clip-text text-transparent ml-3">
              Team
            </span>
          </h2>
          <p className="text-[#B0B0C0] text-lg max-w-3xl mx-auto leading-relaxed mb-12">
            Meet the visionaries and industry veterans who guide CrissCross Esports to championship glory.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {leadership?.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-[#2A2A3C]/50 backdrop-blur-sm border border-[#2A2A3C] rounded-2xl p-6 hover:border-[#00C2FF]/50 transition-all duration-500">
                <div className="relative mb-6">
                  <img
                    src={member.image ? urlFor(member.image).width(400).height(500).url() : 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop'}
                    alt={member.name}
                    className="w-full h-64 object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2A2A3C]/50 to-transparent rounded-xl" />
                </div>
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-[#00C2FF] font-medium mb-4">{member.role}</p>
                  <p className="text-[#B0B0C0] text-sm leading-relaxed mb-4">
                    {member.bio}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 flex items-center">
                    <Award className="h-4 w-4 text-[#FF4F91] mr-2" />
                    Key Achievements
                  </h4>
                  <div className="space-y-1">
                    {member.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-center text-[#B0B0C0] text-sm">
                        <div className="w-1.5 h-1.5 bg-[#00C2FF] rounded-full mr-2" />
                        {achievement}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center space-x-4">
                  <a href={member.social?.twitter || '#'} className="text-[#B0B0C0] hover:text-[#1DA1F2] transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href={member.social?.instagram || '#'} className="text-[#B0B0C0] hover:text-[#E4405F] transition-colors">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href={member.social?.twitch || '#'} className="text-[#B0B0C0] hover:text-[#9146FF] transition-colors">
                    <Twitch className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Star Players */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-['Space_Grotesk'] mb-6">
            <span className="bg-gradient-to-r from-white to-[#B0B0C0] bg-clip-text text-transparent">
              Star
            </span>
            <span className="bg-gradient-to-r from-[#00C2FF] to-[#FF4F91] bg-clip-text text-transparent ml-3">
              Players
            </span>
          </h2>
          <p className="text-[#B0B0C0] text-lg max-w-3xl mx-auto leading-relaxed mb-12">
            The champions who represent CrissCross on the world's biggest stages.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {topPlayers.map((player, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-[#2A2A3C]/50 backdrop-blur-sm border border-[#2A2A3C] rounded-2xl p-6 hover:border-[#00C2FF]/50 transition-all duration-500">
                <div className="relative mb-6">
                  <img
                    src={player.image ? urlFor(player.image).width(400).height(300).url() : 'https://images.pexels.com/photos/3419736/pexels-photo-3419736.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'}
                    alt={player.name}
                    className="w-full h-48 object-cover rounded-xl"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-[#00FF9D] text-black px-2 py-1 rounded-full text-xs font-bold">
                      ACTIVE
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 text-right">
                    <div className="text-white font-bold text-sm">{player.game}</div>
                    <div className="text-[#B0B0C0] text-xs">{player.role}</div>
                  </div>
                </div>

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-1">{player.name}</h3>
                  <p className="text-[#B0B0C0] text-sm mb-4">{player.realName || ''}</p>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.entries(player.stats || {}).map(([key, value], i) => (
                    <div key={i} className="text-center">
                      <div className="text-xl font-bold text-[#00C2FF]">{value}</div>
                      <div className="text-[#B0B0C0] text-xs capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  {player.achievements?.map((achievement, i) => (
                    <div key={i} className="flex items-center text-[#B0B0C0] text-sm">
                      <div className="w-1.5 h-1.5 bg-[#FF4F91] rounded-full mr-2" />
                      {achievement}
                    </div>
                  )) || []}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamBios;