import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Heart, Zap } from 'lucide-react';

const MissionSection = () => {
  const pillars = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Pioneering new strategies and technologies that push the boundaries of competitive gaming.',
      color: 'from-[#00C2FF] to-[#0099CC]'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Fueled by an unwavering love for gaming and commitment to our community of players and fans.',
      color: 'from-[#FF4F91] to-[#CC3E73]'
    },
    {
      icon: Zap,
      title: 'Excellence',
      description: 'Striving for perfection in every match, every tournament, and every moment of competition.',
      color: 'from-[#00FF9D] to-[#00CC7A]'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#1F1F2E] to-[#252538]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-['Space_Grotesk'] mb-8">
            <span className="bg-gradient-to-r from-white to-[#B0B0C0] bg-clip-text text-transparent">
              Our Mission
            </span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-[#B0B0C0] text-xl leading-relaxed mb-8">
              To elevate esports to new heights by fostering exceptional talent, building strong communities, 
              and creating unforgettable gaming experiences that inspire the next generation of champions.
            </p>
            <div className="bg-gradient-to-r from-[#2A2A3C]/50 to-[#3A3A4C]/50 backdrop-blur-sm rounded-2xl p-8 border border-[#2A2A3C]">
              <h3 className="text-2xl font-bold text-white mb-4">Vision Statement</h3>
              <p className="text-[#B0B0C0] text-lg leading-relaxed">
                To become the world's most respected esports organization, recognized for our championship performances, 
                innovative approach to competitive gaming, and positive impact on the global gaming community.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Core Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl font-bold text-white mb-4 font-['Space_Grotesk']">Core Values</h3>
          <p className="text-[#B0B0C0] text-lg max-w-3xl mx-auto leading-relaxed mb-12">
            The three pillars that define our identity and guide every decision we make.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="bg-[#2A2A3C]/50 backdrop-blur-sm border border-[#2A2A3C] rounded-2xl p-8 hover:border-[#00C2FF]/50 transition-all duration-500 text-center h-full">
                <div className="mb-6">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${pillar.color} mb-4`}>
                    <pillar.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4 font-['Space_Grotesk']">
                    {pillar.title}
                  </h4>
                </div>
                <p className="text-[#B0B0C0] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
              
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 bg-gradient-to-br ${pillar.color} pointer-events-none transition-opacity duration-500 rounded-2xl`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;