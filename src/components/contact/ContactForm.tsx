import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, MessageSquare, Building } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'sponsorship', label: 'Sponsorship Opportunity' },
    { value: 'media', label: 'Media Partnership' },
    { value: 'tournament', label: 'Tournament Collaboration' },
    { value: 'business', label: 'Business Development' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

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
          <h2 className="text-4xl md:text-5xl font-bold font-['Space_Grotesk'] mb-6">
            <span className="bg-gradient-to-r from-white to-[#B0B0C0] bg-clip-text text-transparent">
              Get in
            </span>
            <span className="bg-gradient-to-r from-[#00C2FF] to-[#FF4F91] bg-clip-text text-transparent ml-3">
              Touch
            </span>
          </h2>
          <p className="text-[#B0B0C0] text-lg max-w-3xl mx-auto leading-relaxed">
            Ready to explore partnership opportunities? Fill out the form below and our team will get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#2A2A3C]/50 backdrop-blur-sm border border-[#2A2A3C] rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 font-['Space_Grotesk']">
                Send us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Inquiry Type */}
                <div>
                  <label className="block text-[#B0B0C0] text-sm font-medium mb-2">
                    Inquiry Type
                  </label>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    className="w-full bg-[#1F1F2E]/50 border border-[#2A2A3C] rounded-xl px-4 py-3 text-white focus:border-[#00C2FF] focus:outline-none transition-colors"
                  >
                    {inquiryTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#B0B0C0] text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#B0B0C0]" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-[#1F1F2E]/50 border border-[#2A2A3C] rounded-xl pl-12 pr-4 py-3 text-white placeholder-[#B0B0C0] focus:border-[#00C2FF] focus:outline-none transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#B0B0C0] text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#B0B0C0]" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-[#1F1F2E]/50 border border-[#2A2A3C] rounded-xl pl-12 pr-4 py-3 text-white placeholder-[#B0B0C0] focus:border-[#00C2FF] focus:outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                </div>

                {/* Company and Subject */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#B0B0C0] text-sm font-medium mb-2">
                      Company/Organization
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#B0B0C0]" />
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full bg-[#1F1F2E]/50 border border-[#2A2A3C] rounded-xl pl-12 pr-4 py-3 text-white placeholder-[#B0B0C0] focus:border-[#00C2FF] focus:outline-none transition-colors"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#B0B0C0] text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-[#1F1F2E]/50 border border-[#2A2A3C] rounded-xl px-4 py-3 text-white placeholder-[#B0B0C0] focus:border-[#00C2FF] focus:outline-none transition-colors"
                      placeholder="Brief subject line"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[#B0B0C0] text-sm font-medium mb-2">
                    Message *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-4 h-5 w-5 text-[#B0B0C0]" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full bg-[#1F1F2E]/50 border border-[#2A2A3C] rounded-xl pl-12 pr-4 py-3 text-white placeholder-[#B0B0C0] focus:border-[#00C2FF] focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your inquiry, partnership ideas, or how we can work together..."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#00C2FF] to-[#FF4F91] px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center space-x-2 hover:scale-105 transition-transform"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>

                <p className="text-[#B0B0C0] text-sm text-center">
                  We'll respond within 24 hours during business days.
                </p>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-[#2A2A3C]/30 backdrop-blur-sm border border-[#2A2A3C] rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 font-['Space_Grotesk']">
                Partnership Opportunities
              </h3>
              
              <div className="space-y-6">
                {[
                  {
                    title: 'Sponsorship Packages',
                    description: 'From title sponsorships to equipment partnerships, we offer flexible packages for brands of all sizes.',
                    color: 'text-[#00C2FF]'
                  },
                  {
                    title: 'Media Collaborations',
                    description: 'Content creation, interviews, and exclusive access opportunities for media partners.',
                    color: 'text-[#FF4F91]'
                  },
                  {
                    title: 'Tournament Partnerships',
                    description: 'Co-host tournaments, provide prizes, or sponsor events to reach our engaged community.',
                    color: 'text-[#00FF9D]'
                  },
                  {
                    title: 'Technology Integration',
                    description: 'Showcase your gaming technology, software, or hardware to professional esports athletes.',
                    color: 'text-[#FFBE0B]'
                  }
                ].map((opportunity, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`w-2 h-2 ${opportunity.color.replace('text-', 'bg-')} rounded-full mt-3`} />
                    <div>
                      <h4 className={`font-semibold ${opportunity.color} mb-2`}>
                        {opportunity.title}
                      </h4>
                      <p className="text-[#B0B0C0] text-sm leading-relaxed">
                        {opportunity.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#2A2A3C]/30 backdrop-blur-sm border border-[#2A2A3C] rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">
                Quick Response Guarantee
              </h3>
              <p className="text-[#B0B0C0] text-sm leading-relaxed mb-4">
                We understand that timing is crucial in business partnerships. Our dedicated partnership team ensures:
              </p>
              <ul className="space-y-2 text-[#B0B0C0] text-sm">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-[#00C2FF] rounded-full" />
                  <span>Initial response within 24 hours</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-[#FF4F91] rounded-full" />
                  <span>Detailed proposal within 3-5 business days</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-[#00FF9D] rounded-full" />
                  <span>Dedicated account manager assigned</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;