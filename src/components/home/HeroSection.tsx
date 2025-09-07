import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Trophy, Users, Calendar } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroSlides = [
    {
      title: "Dominating the Esports Arena",
      subtitle: "Championship-winning teams across multiple gaming titles",
      image: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
    },
    {
      title: "Next-Gen Gaming Excellence", 
      subtitle: "Professional athletes pushing the boundaries of competitive gaming",
      image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Slides */}
      {heroSlides.map((slide, index) => (
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: currentSlide === index ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1F1F2E]/90 via-[#1F1F2E]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F2E] via-transparent to-transparent" />
        </motion.div>
      ))}

      {/* Animated Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-[#00C2FF] rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-3 h-3 bg-[#FF4F91] rounded-full animate-bounce" />
        <div className="absolute bottom-40 left-20 w-4 h-4 bg-[#00FF9D] rounded-full animate-ping" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-[#00FF9D] rounded-full animate-pulse" />
                <span className="text-[#00FF9D] font-medium text-sm tracking-wider uppercase">
                  Live Tournament Active
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-['Space_Grotesk'] leading-tight">
                <span className="bg-gradient-to-r from-white via-[#00C2FF] to-[#FF4F91] bg-clip-text text-transparent">
                  {heroSlides[currentSlide].title}
                </span>
              </h1>
              
              <p className="text-[#B0B0C0] text-lg md:text-xl mt-6 max-w-2xl leading-relaxed">
                {heroSlides[currentSlide].subtitle}
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <button className="group relative overflow-hidden bg-gradient-to-r from-[#00C2FF] to-[#FF4F91] px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300">
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <Play className="h-5 w-5" />
                  <span>Watch Live</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF4F91] to-[#00C2FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              
              <button className="group border-2 border-[#2A2A3C] bg-[#2A2A3C]/50 backdrop-blur-sm px-8 py-4 rounded-full font-semibold text-lg hover:border-[#00C2FF] hover:bg-[#00C2FF]/10 transition-all duration-300">
                <span className="flex items-center justify-center space-x-2">
                  <Trophy className="h-5 w-5" />
                  <span>View Teams</span>
                </span>
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-3 gap-8"
            >
              {[
                { icon: Trophy, value: '47', label: 'Championships' },
                { icon: Users, value: '12', label: 'Pro Teams' },
                { icon: Calendar, value: '156', label: 'Tournaments' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <stat.icon className="h-6 w-6 text-[#00C2FF]" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[#B0B0C0] text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-12 h-1 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-[#00C2FF]' : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;