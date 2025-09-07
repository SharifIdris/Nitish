import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Users, Mic, Hash, Shield, Crown } from 'lucide-react';

const DiscordSection = () => {
  const discordChannels = [
    { name: 'general-chat', members: 15420, icon: Hash, description: 'Main community discussion' },
    { name: 'valorant-strategy', members: 8930, icon: Hash, description: 'Valorant tips and tactics' },
    { name: 'apex-legends', members: 7650, icon: Hash, description: 'Apex Legends gameplay' },
    { name: 'voice-lounge', members: 2340, icon: Mic, description: 'Voice chat hangout' },
    { name: 'tournament-updates', members: 12800, icon: Crown, description: 'Official announcements' },
    { name: 'looking-for-group', members: 5670, icon: Users, description: 'Find teammates' }
  ];

  const discordFeatures = [
    {
      icon: Shield,
      title: 'Moderated Community',
      description: 'Safe and welcoming environment with active moderation and clear community guidelines.'
    },
    {
      icon: Crown,
      title: 'Exclusive Access',
      description: 'Get early access to tournaments, behind-the-scenes content, and player interactions.'
    },
    {
      icon: Users,
      title: 'Team Formation',
      description: 'Find teammates for ranked games, tournaments, and casual play sessions.'
    },
    {
      icon: Mic,
      title: 'Voice Events',
      description: 'Join voice chats with pro players, coaches, and community events.'
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
            <MessageCircle className="h-6 w-6 text-[#00C2FF]" />
            <span className="text-[#00C2FF] font-medium tracking-wider uppercase">Discord Community</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-['Space_Grotesk'] mb-6">
            <span className="bg-gradient-to-r from-white to-[#B0B0C0] bg-clip-text text-transparent">
              Connect on
            </span>
            <span className="bg-gradient-to-r from-[#00C2FF] to-[#FF4F91] bg-clip-text text-transparent ml-3">
              Discord
            </span>
          </h2>
          <p className="text-[#B0B0C0] text-lg max-w-3xl mx-auto leading-relaxed">
            Join our thriving Discord community with over 250,000 members. Chat with pro players, 
            find teammates, and stay updated on all things CrissCross Esports.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Discord Preview */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-[#2A2A3C]/50 backdrop-blur-sm border border-[#2A2A3C] rounded-2xl p-6 hover:border-[#00C2FF]/50 transition-all duration-500">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-[#5865F2] rounded-full flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">CrissCross Esports</h3>
                  <div className="flex items-center space-x-2 text-[#B0B0C0] text-sm">
                    <div className="w-2 h-2 bg-[#00FF9D] rounded-full" />
                    <span>250,847 members online</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {discordChannels.map((channel, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between p-3 bg-[#1F1F2E]/50 rounded-lg hover:bg-[#1F1F2E]/70 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center space-x-3">
                      <channel.icon className="h-4 w-4 text-[#B0B0C0]" />
                      <div>
                        <div className="text-white font-medium text-sm">{channel.name}</div>
                        <div className="text-[#B0B0C0] text-xs">{channel.description}</div>
                      </div>
                    </div>
                    <div className="text-[#B0B0C0] text-xs">
                      {channel.members.toLocaleString()}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-[#2A2A3C]">
                <button className="w-full bg-[#5865F2] hover:bg-[#4752C4] px-6 py-3 rounded-xl font-semibold text-white transition-colors">
                  Join Discord Server
                </button>
              </div>
            </div>
          </motion.div>

          {/* Discord Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-6 font-['Space_Grotesk']">
              Why Join Our Discord?
            </h3>

            {discordFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 10 }}
                className="flex items-start space-x-4 p-4 bg-[#2A2A3C]/30 backdrop-blur-sm border border-[#2A2A3C] rounded-xl hover:border-[#00C2FF]/50 hover:bg-[#2A2A3C]/50 transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="p-3 bg-gradient-to-r from-[#00C2FF]/20 to-[#FF4F91]/20 rounded-xl border border-[#00C2FF]/30">
                    <feature.icon className="h-6 w-6 text-[#00C2FF]" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                  <p className="text-[#B0B0C0] text-sm leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Community Guidelines */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#2A2A3C]/50 to-[#3A3A4C]/50 backdrop-blur-sm rounded-2xl p-8 border border-[#2A2A3C]"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4 font-['Space_Grotesk']">
              Community Guidelines
            </h3>
            <p className="text-[#B0B0C0] max-w-3xl mx-auto leading-relaxed">
              Our Discord community thrives on respect, inclusivity, and shared passion for gaming. 
              Here are the key principles that make our community special.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Be Respectful', description: 'Treat all members with kindness and respect, regardless of skill level or background.' },
              { title: 'Stay On Topic', description: 'Keep discussions relevant to the channel topic to maintain organized conversations.' },
              { title: 'No Toxicity', description: 'Zero tolerance for harassment, hate speech, or toxic behavior towards other members.' }
            ].map((guideline, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-[#00C2FF] to-[#FF4F91] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <h4 className="text-white font-semibold mb-2">{guideline.title}</h4>
                <p className="text-[#B0B0C0] text-sm">{guideline.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DiscordSection;