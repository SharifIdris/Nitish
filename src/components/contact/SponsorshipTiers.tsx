import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Star, Award, Check } from 'lucide-react';

const SponsorshipTiers = () => {
  const tiers = [
    {
      name: 'Bronze Partner',
      price: '$25K - $50K',
      period: 'per year',
      icon: Award,
      color: 'from-[#CD7F32] to-[#B87333]',
      borderColor: 'border-[#CD7F32]',
      popular: false,
      features: [
        'Logo placement on team jerseys',
        'Social media mentions (2x/month)',
        'Website logo placement',
        'Tournament stream overlay',
        'Quarterly performance reports',
        'Community Discord recognition'
      ]
    },
    {
      name: 'Silver Partner',
      price: '$50K - $100K',
      period: 'per year',
      icon: Star,
      color: 'from-[#C0C0C0] to-[#A8A8A8]',
      borderColor: 'border-[#C0C0C0]',
      popular: true,
      features: [
        'All Bronze Partner benefits',
        'Dedicated social media content',
        'Player meet & greet opportunities',
        'Custom tournament sponsorship',
        'Monthly performance calls',
        'Exclusive merchandise collaboration',
        'Gaming house tour access'
      ]
    },
    {
      name: 'Gold Partner',
      price: '$100K - $250K',
      period: 'per year',
      icon: Crown,
      color: 'from-[#FFD700] to-[#FFA500]',
      borderColor: 'border-[#FFD700]',
      popular: false,
      features: [
        'All Silver Partner benefits',
        'Title sponsorship opportunities',
        'Dedicated account manager',
        'Custom content creation',
        'VIP event access',
        'Co-branded merchandise line',
        'Player endorsement deals',
        'Exclusive partnership announcements'
      ]
    }
  ];

  const additionalServices = [
    {
      title: 'Custom Partnerships',
      description: 'Tailored sponsorship packages designed specifically for your brand\'s unique needs and objectives.',
      price: 'Contact for pricing'
    },
    {
      title: 'Event Sponsorship',
      description: 'Sponsor individual tournaments, community events, or special occasions for targeted exposure.',
      price: '$5K - $50K per event'
    },
    {
      title: 'Content Creation',
      description: 'Dedicated video content, social media campaigns, and branded entertainment featuring our players.',
      price: '$10K - $25K per campaign'
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
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Crown className="h-6 w-6 text-[#00C2FF]" />
            <span className="text-[#00C2FF] font-medium tracking-wider uppercase">Sponsorship Tiers</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-['Space_Grotesk'] mb-6">
            <span className="bg-gradient-to-r from-white to-[#B0B0C0] bg-clip-text text-transparent">
              Partnership
            </span>
            <span className="bg-gradient-to-r from-[#00C2FF] to-[#FF4F91] bg-clip-text text-transparent ml-3">
              Packages
            </span>
          </h2>
          <p className="text-[#B0B0C0] text-lg max-w-3xl mx-auto leading-relaxed">
            Choose the partnership level that aligns with your brand's goals and budget. 
            All packages include comprehensive analytics and dedicated support.
          </p>
        </motion.div>

        {/* Sponsorship Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`relative bg-[#2A2A3C]/50 backdrop-blur-sm border-2 rounded-2xl p-8 transition-all duration-500 ${
                tier.popular 
                  ? 'border-[#00C2FF] bg-[#2A2A3C]/70 scale-105' 
                  : `${tier.borderColor} hover:border-[#00C2FF]/50`
              }`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-[#00C2FF] to-[#FF4F91] px-6 py-2 rounded-full text-white font-bold text-sm">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Tier Header */}
              <div className="text-center mb-8">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${tier.color} mb-4`}>
                  <tier.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 font-['Space_Grotesk']">
                  {tier.name}
                </h3>
                <div className="text-3xl font-bold text-white mb-1">
                  {tier.price}
                </div>
                <div className="text-[#B0B0C0] text-sm">
                  {tier.period}
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-[#00FF9D] flex-shrink-0 mt-0.5" />
                    <span className="text-[#B0B0C0] text-sm leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className={`w-full px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                tier.popular
                  ? 'bg-gradient-to-r from-[#00C2FF] to-[#FF4F91] text-white hover:scale-105'
                  : 'border border-[#2A2A3C] hover:border-[#00C2FF] bg-[#2A2A3C]/50 hover:bg-[#00C2FF]/10 text-white'
              }`}>
                Get Started
              </button>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4 font-['Space_Grotesk']">
              Additional Services
            </h3>
            <p className="text-[#B0B0C0] text-lg max-w-3xl mx-auto leading-relaxed">
              Enhance your partnership with these specialized services and custom solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-[#2A2A3C]/30 backdrop-blur-sm border border-[#2A2A3C] rounded-xl p-6 hover:border-[#00C2FF]/50 hover:bg-[#2A2A3C]/50 transition-all duration-300"
              >
                <h4 className="text-lg font-bold text-white mb-3">
                  {service.title}
                </h4>
                <p className="text-[#B0B0C0] text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-[#00C2FF] font-semibold">
                    {service.price}
                  </span>
                  <button className="text-[#00C2FF] hover:text-[#FF4F91] font-semibold text-sm transition-colors">
                    Learn More →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-[#2A2A3C]/50 to-[#3A3A4C]/50 backdrop-blur-sm rounded-2xl p-8 border border-[#2A2A3C]">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Partner with Champions?
            </h3>
            <p className="text-[#B0B0C0] mb-6 max-w-2xl mx-auto">
              Our partnership team is ready to create a custom package that meets your specific goals and budget. 
              Let's discuss how we can grow together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-[#00C2FF] to-[#FF4F91] px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                Schedule Consultation
              </button>
              <button className="border border-[#2A2A3C] hover:border-[#00C2FF] px-8 py-3 rounded-full font-semibold transition-colors">
                Download Media Kit
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SponsorshipTiers;