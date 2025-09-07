import React from 'react';
import { motion } from 'framer-motion';
import { Handshake, TrendingUp, Globe, Users, Target, Zap } from 'lucide-react';

const PartnershipsSection = () => {
  const partnershipTypes = [
    {
      icon: Target,
      title: 'Brand Sponsorship',
      description: 'Align your brand with championship-winning teams and reach millions of engaged gaming enthusiasts.',
      benefits: ['Logo placement on jerseys', 'Social media exposure', 'Tournament naming rights', 'Custom activations'],
      color: 'from-[#00C2FF] to-[#0099CC]'
    },
    {
      icon: Globe,
      title: 'Technology Partnership',
      description: 'Showcase your gaming hardware, software, or technology solutions to professional esports athletes.',
      benefits: ['Product testing & feedback', 'Co-developed content', 'Technical endorsements', 'Innovation showcases'],
      color: 'from-[#FF4F91] to-[#CC3E73]'
    },
    {
      icon: Users,
      title: 'Media Collaboration',
      description: 'Create compelling content and reach new audiences through strategic media partnerships.',
      benefits: ['Exclusive interviews', 'Behind-the-scenes access', 'Co-produced content', 'Cross-platform promotion'],
      color: 'from-[#00FF9D] to-[#00CC7A]'
    },
    {
      icon: Zap,
      title: 'Event Partnership',
      description: 'Co-host tournaments, sponsor events, or create unique experiences for the gaming community.',
      benefits: ['Event co-hosting', 'Prize pool contributions', 'Venue partnerships', 'Community engagement'],
      color: 'from-[#FFBE0B] to-[#F59E0B]'
    }
  ];

  const successMetrics = [
    { metric: '250M+', label: 'Annual Impressions', icon: TrendingUp },
    { metric: '85%', label: 'Brand Recall Rate', icon: Target },
    { metric: '2.5M+', label: 'Social Followers', icon: Users },
    { metric: '45+', label: 'Active Partners', icon: Handshake }
  ];

  const partnerLogos = [
    { name: 'TechGear Pro', logo: '🛡️' },
    { name: 'Energy Boost', logo: '⚡' },
    { name: 'Gaming Elite', logo: '👑' },
    { name: 'ProGamer', logo: '🎮' },
    { name: 'Victory Labs', logo: '🏆' },
    { name: 'Cyber Systems', logo: '⭐' }
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
            <Handshake className="h-6 w-6 text-[#00C2FF]" />
            <span className="text-[#00C2FF] font-medium tracking-wider uppercase">Partnerships</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-['Space_Grotesk'] mb-6">
            <span className="bg-gradient-to-r from-white to-[#B0B0C0] bg-clip-text text-transparent">
              Strategic
            </span>
            <span className="bg-gradient-to-r from-[#00C2FF] to-[#FF4F91] bg-clip-text text-transparent ml-3">
              Partnerships
            </span>
          </h2>
          <p className="text-[#B0B0C0] text-lg max-w-3xl mx-auto leading-relaxed">
            Join forces with CrissCross Esports to reach new audiences, drive engagement, 
            and achieve your business objectives through strategic partnerships.
          </p>
        </motion.div>

        {/* Partnership Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {partnershipTypes.map((partnership, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group bg-[#2A2A3C]/50 backdrop-blur-sm border border-[#2A2A3C] rounded-2xl p-8 hover:border-[#00C2FF]/50 transition-all duration-500"
            >
              <div className="flex items-start space-x-4">
                <div className={`flex-shrink-0 p-4 rounded-2xl bg-gradient-to-r ${partnership.color}`}>
                  <partnership.icon className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00C2FF] transition-colors">
                    {partnership.title}
                  </h3>
                  <p className="text-[#B0B0C0] leading-relaxed mb-4">
                    {partnership.description}
                  </p>
                  <div className="space-y-2">
                    {partnership.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-[#00C2FF] rounded-full" />
                        <span className="text-[#B0B0C0] text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#2A2A3C]/50 to-[#3A3A4C]/50 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-[#2A2A3C] mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4 font-['Space_Grotesk']">
              Partnership Success Metrics
            </h3>
            <p className="text-[#B0B0C0] text-lg max-w-3xl mx-auto leading-relaxed">
              Our partnerships deliver measurable results and exceptional ROI for brands across all industries.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="mb-4 flex justify-center">
                  <div className="p-4 bg-[#1F1F2E]/50 rounded-2xl border border-[#2A2A3C] group-hover:border-[#00C2FF]/50 transition-all duration-300">
                    <metric.icon className="h-8 w-8 text-[#00C2FF] group-hover:text-[#FF4F91] transition-colors" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 font-['Space_Grotesk']">
                  {metric.metric}
                </div>
                <div className="text-[#B0B0C0] text-sm">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Current Partners */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8 font-['Space_Grotesk']">
            Trusted by Industry Leaders
          </h3>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {partnerLogos.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group bg-[#2A2A3C]/30 backdrop-blur-sm border border-[#2A2A3C] rounded-xl p-6 hover:border-[#00C2FF]/50 hover:bg-[#2A2A3C]/50 transition-all duration-300 text-center"
              >
                <div className="text-4xl mb-3">{partner.logo}</div>
                <h4 className="text-white font-semibold text-sm group-hover:text-[#00C2FF] transition-colors">
                  {partner.name}
                </h4>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Partnership Process */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#2A2A3C]/30 backdrop-blur-sm border border-[#2A2A3C] rounded-2xl p-8"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4 font-['Space_Grotesk']">
              Partnership Process
            </h3>
            <p className="text-[#B0B0C0] text-lg max-w-3xl mx-auto leading-relaxed">
              Our streamlined partnership process ensures quick turnaround and successful collaborations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Initial Contact', description: 'Reach out through our contact form or email to discuss your partnership goals.' },
              { step: '02', title: 'Strategy Session', description: 'Schedule a consultation to align objectives and explore partnership opportunities.' },
              { step: '03', title: 'Proposal & Terms', description: 'Receive a detailed proposal with custom terms tailored to your specific needs.' },
              { step: '04', title: 'Launch & Execute', description: 'Begin partnership activities with dedicated support and regular performance updates.' }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#00C2FF] to-[#FF4F91] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{process.step}</span>
                </div>
                <h4 className="text-white font-semibold mb-2">{process.title}</h4>
                <p className="text-[#B0B0C0] text-sm leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-[#00C2FF] to-[#FF4F91] px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform">
              Start Partnership Discussion
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnershipsSection;