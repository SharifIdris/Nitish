import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, User } from 'lucide-react';
import { useSanityData } from '../../hooks/useSanity';
import { queries, urlFor } from '../../lib/sanity';
import { Testimonial } from '../../schemas';

const TestimonialsSection = () => {
  const { data: testimonials, loading, error } = useSanityData<Testimonial[]>(queries.testimonials);

  const featuredTestimonials = testimonials?.filter(testimonial => testimonial.featured) || [];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? 'text-[#FFBE0B] fill-current' : 'text-[#2A2A3C]'
        }`}
      />
    ));
  };

  if (loading) {
    return (
      <section className="py-20 bg-[#252538]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-[#B0B0C0]">Loading testimonials...</div>
          </div>
        </div>
      </section>
    );
  }

  if (error || !testimonials || testimonials.length === 0) {
    return null; // Don't show section if no testimonials
  }

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
            <Quote className="h-6 w-6 text-[#00C2FF]" />
            <span className="text-[#00C2FF] font-medium tracking-wider uppercase">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-['Space_Grotesk'] mb-6">
            <span className="bg-gradient-to-r from-white to-[#B0B0C0] bg-clip-text text-transparent">
              What People
            </span>
            <span className="bg-gradient-to-r from-[#00C2FF] to-[#FF4F91] bg-clip-text text-transparent ml-3">
              Say About Us
            </span>
          </h2>
          <p className="text-[#B0B0C0] text-lg max-w-3xl mx-auto leading-relaxed">
            Hear from our partners, community members, and players about their experience with CrissCross Esports.
          </p>
        </motion.div>

        {/* Featured Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial._id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-2xl bg-[#2A2A3C]/50 backdrop-blur-sm border border-[#2A2A3C] hover:border-[#00C2FF]/50 transition-all duration-500 p-8"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-20">
                <Quote className="h-12 w-12 text-[#00C2FF]" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-[#B0B0C0] leading-relaxed mb-6 relative z-10">
                "{testimonial.testimonial}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  {testimonial.image ? (
                    <img
                      src={urlFor(testimonial.image).width(60).height(60).url()}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-12 h-12 bg-gradient-to-r from-[#00C2FF] to-[#FF4F91] rounded-full flex items-center justify-center">
                      <User className="h-6 w-6 text-white" />
                    </div>
                  )}
                </div>
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-[#B0B0C0] text-sm">
                    {testimonial.role}
                    {testimonial.company && (
                      <span className="text-[#00C2FF]"> at {testimonial.company}</span>
                    )}
                  </p>
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-6 left-6">
                <span className="bg-[#FF4F91]/20 text-[#FF4F91] px-3 py-1 rounded-full text-xs font-bold">
                  {testimonial.category}
                </span>
              </div>

              {/* Background Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-5 bg-gradient-to-br from-[#00C2FF] to-[#FF4F91] pointer-events-none transition-opacity duration-500 rounded-2xl" />
            </motion.div>
          ))}
        </div>

        {/* All Testimonials Grid */}
        {testimonials.length > featuredTestimonials.length && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.filter(t => !t.featured).map((testimonial, index) => (
              <motion.div
                key={testimonial._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
                className="bg-[#2A2A3C]/30 backdrop-blur-sm border border-[#2A2A3C] rounded-xl p-6 hover:border-[#00C2FF]/50 hover:bg-[#2A2A3C]/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {testimonial.image ? (
                      <img
                        src={urlFor(testimonial.image).width(50).height(50).url()}
                        alt={testimonial.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-10 h-10 bg-gradient-to-r from-[#00C2FF] to-[#FF4F91] rounded-full flex items-center justify-center">
                        <User className="h-5 w-5 text-white" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-1 mb-2">
                      {renderStars(testimonial.rating)}
                    </div>
                    <p className="text-[#B0B0C0] text-sm leading-relaxed mb-3">
                      "{testimonial.testimonial}"
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <h5 className="text-white font-semibold text-sm">{testimonial.name}</h5>
                        <p className="text-[#B0B0C0] text-xs">
                          {testimonial.role}
                          {testimonial.company && ` at ${testimonial.company}`}
                        </p>
                      </div>
                      <span className="bg-[#2A2A3C] text-[#B0B0C0] px-2 py-1 rounded-full text-xs">
                        {testimonial.category}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-[#2A2A3C]/50 to-[#3A3A4C]/50 backdrop-blur-sm rounded-2xl p-8 border border-[#2A2A3C]">
            <h3 className="text-2xl font-bold text-white mb-4">Share Your Experience</h3>
            <p className="text-[#B0B0C0] mb-6">
              Have you worked with CrissCross Esports? We'd love to hear about your experience.
            </p>
            <button className="bg-gradient-to-r from-[#00C2FF] to-[#FF4F91] px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
              Submit Testimonial
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;