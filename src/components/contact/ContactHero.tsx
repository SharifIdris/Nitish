import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const ContactHero = () => {
  const contactMethods = [
    { icon: Mail, label: 'Email', value: 'hello@crisscross.gg' },
    { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
    { icon: MapPin, label: 'Address', value: 'Los Angeles, CA' },
    { icon: MessageCircle, label: 'Response Time', value: '< 24 hours' }
  ];

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1F1F2E]/95 via-[#1F1F2E]/85 to-[#1F1F2E]/95" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F2E] via-transparent to-[#1F1F2E]/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Mail className="h-8 w-8 text-[#00C2FF]" />
              <span className="text-[#00C2FF] font-medium tracking-wider uppercase text-lg">Contact Us</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold font-['Space_Grotesk'] mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-[#00C2FF] to-[#FF4F91] bg-clip-text text-transparent">
                Let's Connect
              </span>
              <br />
              <span className="text-white">
                & Collaborate
              </span>
            </h1>
            
            <p className="text-[#B0B0C0] text-xl max-w-4xl mx-auto leading-relaxed mb-12">
              Ready to partner with CrissCross Esports? Whether you're interested in sponsorship opportunities, 
              media partnerships, or general inquiries, we'd love to hear from you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button className="group relative overflow-hidden bg-gradient-to-r from-[#00C2FF] to-[#FF4F91] px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300">
                <span className="relative z-10">Start Partnership</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF4F91] to-[#00C2FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              
              <button className="border-2 border-[#2A2A3C] bg-[#2A2A3C]/50 backdrop-blur-sm px-8 py-4 rounded-full font-semibold text-lg hover:border-[#00C2FF] hover:bg-[#00C2FF]/10 transition-all duration-300">
                Media Kit
              </button>
            </div>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="text-center group"
              >
                <div className="mb-4 flex justify-center">
                  <div className="p-4 bg-[#2A2A3C]/50 backdrop-blur-sm rounded-2xl border border-[#2A2A3C] group-hover:border-[#00C2FF]/50 transition-all duration-300">
                    <method.icon className="h-8 w-8 text-[#00C2FF] group-hover:text-[#FF4F91] transition-colors" />
                  </div>
                </div>
                <div className="text-sm text-[#B0B0C0] mb-1">
                  {method.label}
                </div>
                <div className="text-white font-semibold">
                  {method.value}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;