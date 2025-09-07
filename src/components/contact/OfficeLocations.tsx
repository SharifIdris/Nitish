import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const OfficeLocations = () => {
  const offices = [
    {
      city: 'Los Angeles',
      country: 'United States',
      address: '1234 Gaming Boulevard, Suite 500, Los Angeles, CA 90028',
      phone: '+1 (555) 123-4567',
      email: 'la@crisscross.gg',
      timezone: 'PST (UTC-8)',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM',
      image: 'https://images.pexels.com/photos/3419736/pexels-photo-3419736.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      type: 'Headquarters',
      description: 'Our main headquarters houses our executive team, content creation studios, and primary gaming facility.'
    },
    {
      city: 'Berlin',
      country: 'Germany',
      address: 'Esports Straße 42, 10115 Berlin, Germany',
      phone: '+49 30 12345678',
      email: 'berlin@crisscross.gg',
      timezone: 'CET (UTC+1)',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM',
      image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      type: 'European Hub',
      description: 'Our European operations center managing partnerships and tournaments across the EMEA region.'
    },
    {
      city: 'Seoul',
      country: 'South Korea',
      address: '123 Gaming Tower, Gangnam-gu, Seoul 06292, South Korea',
      phone: '+82 2 1234 5678',
      email: 'seoul@crisscross.gg',
      timezone: 'KST (UTC+9)',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM',
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      type: 'APAC Office',
      description: 'Strategic location for Asian market expansion and partnerships with regional gaming companies.'
    }
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case 'Headquarters':
        return 'bg-[#00C2FF]';
      case 'European Hub':
        return 'bg-[#FF4F91]';
      case 'APAC Office':
        return 'bg-[#00FF9D]';
      default:
        return 'bg-[#FFBE0B]';
    }
  };

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
          <div className="flex items-center justify-center space-x-2 mb-4">
            <MapPin className="h-6 w-6 text-[#00C2FF]" />
            <span className="text-[#00C2FF] font-medium tracking-wider uppercase">Global Presence</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-['Space_Grotesk'] mb-6">
            <span className="bg-gradient-to-r from-white to-[#B0B0C0] bg-clip-text text-transparent">
              Our
            </span>
            <span className="bg-gradient-to-r from-[#00C2FF] to-[#FF4F91] bg-clip-text text-transparent ml-3">
              Locations
            </span>
          </h2>
          <p className="text-[#B0B0C0] text-lg max-w-3xl mx-auto leading-relaxed">
            With offices across three continents, we're positioned to serve partners and communities worldwide. 
            Visit us or connect with our regional teams.
          </p>
        </motion.div>

        {/* Office Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {offices.map((office, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group bg-[#2A2A3C]/50 backdrop-blur-sm border border-[#2A2A3C] rounded-2xl overflow-hidden hover:border-[#00C2FF]/50 transition-all duration-500"
            >
              {/* Office Image */}
              <div className="relative overflow-hidden">
                <img
                  src={office.image}
                  alt={`${office.city} office`}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A2A3C]/70 to-transparent" />
                
                {/* Office Type Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`${getTypeColor(office.type)} text-white px-3 py-1 rounded-full text-xs font-bold`}>
                    {office.type}
                  </span>
                </div>

                {/* City Name Overlay */}
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-[#00C2FF] transition-colors">
                    {office.city}
                  </h3>
                  <p className="text-[#B0B0C0] text-sm">{office.country}</p>
                </div>
              </div>

              {/* Office Details */}
              <div className="p-6">
                <p className="text-[#B0B0C0] text-sm leading-relaxed mb-6">
                  {office.description}
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-[#00C2FF] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white text-sm font-medium">Address</p>
                      <p className="text-[#B0B0C0] text-sm">{office.address}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-[#FF4F91] flex-shrink-0" />
                    <div>
                      <p className="text-white text-sm font-medium">Phone</p>
                      <p className="text-[#B0B0C0] text-sm">{office.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-[#00FF9D] flex-shrink-0" />
                    <div>
                      <p className="text-white text-sm font-medium">Email</p>
                      <p className="text-[#B0B0C0] text-sm">{office.email}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-[#FFBE0B] flex-shrink-0" />
                    <div>
                      <p className="text-white text-sm font-medium">Hours ({office.timezone})</p>
                      <p className="text-[#B0B0C0] text-sm">{office.hours}</p>
                    </div>
                  </div>
                </div>

                <button className="w-full mt-6 border border-[#2A2A3C] hover:border-[#00C2FF] bg-[#2A2A3C]/50 hover:bg-[#00C2FF]/10 px-4 py-3 rounded-xl font-semibold text-white transition-all duration-300">
                  Contact This Office
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Support */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#2A2A3C]/50 to-[#3A3A4C]/50 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-[#2A2A3C] text-center"
        >
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-white mb-4 font-['Space_Grotesk']">
              24/7 Global Support
            </h3>
            <p className="text-[#B0B0C0] text-lg max-w-3xl mx-auto leading-relaxed">
              No matter where you are in the world, our team is ready to support your partnership needs. 
              We provide round-the-clock assistance across all time zones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {[
              { region: 'Americas', hours: '24/7 Coverage', contact: 'americas@crisscross.gg' },
              { region: 'EMEA', hours: '24/7 Coverage', contact: 'emea@crisscross.gg' },
              { region: 'APAC', hours: '24/7 Coverage', contact: 'apac@crisscross.gg' }
            ].map((region, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#00C2FF] to-[#FF4F91] rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-white font-semibold mb-2">{region.region}</h4>
                <p className="text-[#B0B0C0] text-sm mb-1">{region.hours}</p>
                <p className="text-[#00C2FF] text-sm">{region.contact}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-[#00C2FF] to-[#FF4F91] px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
              Schedule Global Meeting
            </button>
            <button className="border border-[#2A2A3C] hover:border-[#00C2FF] px-8 py-3 rounded-full font-semibold transition-colors">
              Find Nearest Office
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OfficeLocations;