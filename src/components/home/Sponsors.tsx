import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useSanityData } from '../../hooks/useSanity';
import { queries, urlFor } from '../../lib/sanity';
import { Sponsor } from '../../schemas';

const Sponsors = () => {
  const { data: sponsors, loading, error } = useSanityData<Sponsor[]>(queries.sponsors);

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'Platinum': return 'text-[#E5E7EB]';
      case 'Gold': return 'text-[#F59E0B]';
      case 'Silver': return 'text-[#9CA3AF]';
      default: return 'text-[#B0B0C0]';
    }
  };

  if (loading) {
    return (
      <section className="py-20 bg-[#1F1F2E] border-t border-[#2A2A3C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-[#B0B0C0]">Loading sponsors...</div>
          </div>
        </div>
      </section>
    );
  }

  if (error || !sponsors) {
    return (
      <section className="py-20 bg-[#1F1F2E] border-t border-[#2A2A3C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-[#FF4F91]">Error loading sponsors</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-[#1F1F2E] border-t border-[#2A2A3C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Star className="h-6 w-6 text-[#00C2FF]" />
            <span className="text-[#00C2FF] font-medium tracking-wider uppercase">Partners</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-['Space_Grotesk'] mb-6">
            <span className="bg-gradient-to-r from-white to-[#B0B0C0] bg-clip-text text-transparent">
              Trusted by
            </span>
            <span className="bg-gradient-to-r from-[#00C2FF] to-[#FF4F91] bg-clip-text text-transparent ml-3">
              Industry Leaders
            </span>
          </h2>
          <p className="text-[#B0B0C0] text-lg max-w-3xl mx-auto leading-relaxed">
            Proudly supported by the world's leading gaming and technology brands.
          </p>
        </motion.div>

        {/* Sponsors Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className="bg-[#2A2A3C]/30 backdrop-blur-sm border border-[#2A2A3C] rounded-2xl p-6 hover:border-[#00C2FF]/50 hover:bg-[#2A2A3C]/50 transition-all duration-300 text-center">
                <div className="mb-4">
                  {sponsor.logo ? (
                    <img
                      src={urlFor(sponsor.logo).width(48).height(48).url()}
                      alt={sponsor.name}
                      className="h-12 w-12 mx-auto object-contain"
                    />
                  ) : (
                    <div className={`h-12 w-12 mx-auto ${getTierColor(sponsor.tier)} group-hover:text-[#00C2FF] transition-colors flex items-center justify-center text-2xl font-bold`}>
                      {sponsor.name.charAt(0)}
                    </div>
                  )}
                </div>
                <h3 className="text-white font-semibold text-sm mb-1">{sponsor.name}</h3>
                <p className="text-[#B0B0C0] text-xs">{sponsor.tier} Partner</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partnership CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-[#2A2A3C]/50 to-[#3A3A4C]/50 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-[#2A2A3C] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-10 left-10 w-20 h-20 bg-[#00C2FF]/10 rounded-full blur-xl" />
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#FF4F91]/10 rounded-full blur-xl" />
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4 font-['Space_Grotesk']">
                Partner with Champions
              </h3>
              <p className="text-[#B0B0C0] text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                Join our network of industry-leading partners and reach millions of gaming enthusiasts worldwide. 
                Discover sponsorship opportunities that drive real results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-[#00C2FF] to-[#FF4F91] px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform">
                  Become a Partner
                </button>
                <button className="border border-[#2A2A3C] hover:border-[#00C2FF] px-8 py-4 rounded-full font-semibold transition-colors">
                  View Partnership Tiers
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsors;