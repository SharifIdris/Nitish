import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Target, Award, Globe, Rocket } from 'lucide-react';

const Values = () => {
  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We compete with honor and maintain the highest ethical standards in all our endeavors.'
    },
    {
      icon: Users,
      title: 'Teamwork',
      description: 'Success is built on collaboration, mutual respect, and supporting each other to reach new heights.'
    },
    {
      icon: Target,
      title: 'Precision',
      description: 'Every move is calculated, every strategy refined, every execution flawless.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We never settle for good enough. Champions are made through relentless pursuit of perfection.'
    },
    {
      icon: Globe,
      title: 'Community',
      description: 'Building bridges across cultures and bringing gamers together through shared passion.'
    },
    {
      icon: Rocket,
      title: 'Innovation',
      description: 'Constantly evolving our approach and embracing new technologies to stay ahead.'
    }
  ];

  return (
    <section className="py-20 bg-[#252538]">
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
              What Drives Us
            </span>
          </h2>
          <p className="text-[#B0B0C0] text-lg max-w-3xl mx-auto leading-relaxed">
            Our values shape our culture and define how we approach competition, community, and growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-[#2A2A3C]/30 backdrop-blur-sm border border-[#2A2A3C] rounded-xl p-6 hover:border-[#00C2FF]/50 hover:bg-[#2A2A3C]/50 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-gradient-to-r from-[#00C2FF]/20 to-[#FF4F91]/20 rounded-xl border border-[#00C2FF]/30 group-hover:border-[#00C2FF]/50 transition-colors">
                      <value.icon className="h-6 w-6 text-[#00C2FF] group-hover:text-[#FF4F91] transition-colors" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#00C2FF] transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-[#B0B0C0] text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;