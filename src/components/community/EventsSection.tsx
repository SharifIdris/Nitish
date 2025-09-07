import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Gift, MapPin, Clock, Star } from 'lucide-react';

const EventsSection = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: 'Community Tournament Night',
      date: '2025-01-25',
      time: '19:00 EST',
      type: 'Tournament',
      location: 'Discord Voice Channels',
      participants: 128,
      maxParticipants: 128,
      prizePool: '$5,000',
      description: 'Monthly community tournament with cash prizes and exclusive merchandise.',
      image: 'https://images.pexels.com/photos/3419736/pexels-photo-3419736.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      featured: true
    },
    {
      id: 2,
      title: 'Meet & Greet with Pro Players',
      date: '2025-02-01',
      time: '16:00 EST',
      type: 'Meet & Greet',
      location: 'CrissCross Gaming House',
      participants: 45,
      maxParticipants: 50,
      prizePool: null,
      description: 'Exclusive opportunity to meet our professional players and get autographs.',
      image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      featured: false
    },
    {
      id: 3,
      title: 'Strategy Workshop Series',
      date: '2025-02-08',
      time: '18:00 EST',
      type: 'Workshop',
      location: 'Online Stream',
      participants: 234,
      maxParticipants: 500,
      prizePool: null,
      description: 'Learn advanced strategies from our coaching staff and improve your gameplay.',
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      featured: false
    },
    {
      id: 4,
      title: 'Fan Art Contest',
      date: '2025-02-14',
      time: 'All Day',
      type: 'Contest',
      location: 'Social Media',
      participants: 89,
      maxParticipants: null,
      prizePool: '$2,500',
      description: 'Show your creativity and win amazing prizes in our Valentine\'s themed fan art contest.',
      image: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      featured: false
    }
  ];

  const eventTypes = {
    'Tournament': { color: 'bg-[#00FF9D]', icon: Star },
    'Meet & Greet': { color: 'bg-[#FF4F91]', icon: Users },
    'Workshop': { color: 'bg-[#00C2FF]', icon: Calendar },
    'Contest': { color: 'bg-[#FFBE0B]', icon: Gift }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
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
            <Calendar className="h-6 w-6 text-[#00C2FF]" />
            <span className="text-[#00C2FF] font-medium tracking-wider uppercase">Community Events</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-['Space_Grotesk'] mb-6">
            <span className="bg-gradient-to-r from-white to-[#B0B0C0] bg-clip-text text-transparent">
              Upcoming
            </span>
            <span className="bg-gradient-to-r from-[#00C2FF] to-[#FF4F91] bg-clip-text text-transparent ml-3">
              Events
            </span>
          </h2>
          <p className="text-[#B0B0C0] text-lg max-w-3xl mx-auto leading-relaxed">
            Join our community events, tournaments, and exclusive experiences. Connect with fellow gamers and be part of something special.
          </p>
        </motion.div>

        {/* Featured Event */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          {upcomingEvents.filter(event => event.featured).map((event) => (
            <div key={event.id} className="group relative overflow-hidden rounded-3xl bg-[#2A2A3C]/50 backdrop-blur-sm border border-[#2A2A3C] hover:border-[#00C2FF]/50 transition-all duration-500">
              <div className="lg:flex">
                <div className="lg:w-1/2 relative overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-64 lg:h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1F1F2E]/20 to-transparent" />
                  
                  {/* Event Type Badge */}
                  <div className="absolute top-6 left-6">
                    <div className={`flex items-center space-x-2 ${eventTypes[event.type].color} text-black px-4 py-2 rounded-full`}>
                      {(() => {
                        const TypeIcon = eventTypes[event.type].icon;
                        return <TypeIcon className="h-4 w-4" />;
                      })()}
                      <span className="font-bold text-sm">{event.type}</span>
                    </div>
                  </div>

                  {/* Prize Pool */}
                  {event.prizePool && (
                    <div className="absolute top-6 right-6 bg-[#00FF9D] text-black px-4 py-2 rounded-full font-bold text-sm">
                      {event.prizePool}
                    </div>
                  )}
                </div>
                
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-[#00C2FF] transition-colors font-['Space_Grotesk']">
                    {event.title}
                  </h3>
                  
                  <p className="text-[#B0B0C0] leading-relaxed mb-6">
                    {event.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-3 text-[#B0B0C0]">
                      <Calendar className="h-5 w-5 text-[#00C2FF]" />
                      <span>{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-[#B0B0C0]">
                      <Clock className="h-5 w-5 text-[#FF4F91]" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-[#B0B0C0]">
                      <MapPin className="h-5 w-5 text-[#00FF9D]" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-[#B0B0C0]">
                      <Users className="h-5 w-5 text-[#FFBE0B]" />
                      <span>
                        {event.participants} / {event.maxParticipants} participants
                      </span>
                    </div>
                  </div>
                  
                  <button className="bg-gradient-to-r from-[#00C2FF] to-[#FF4F91] px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform">
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Other Events */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.filter(event => !event.featured).map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-2xl bg-[#2A2A3C]/30 backdrop-blur-sm border border-[#2A2A3C] hover:border-[#00C2FF]/50 hover:bg-[#2A2A3C]/50 transition-all duration-500"
            >
              {/* Event Image */}
              <div className="relative overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A2A3C]/50 to-transparent" />
                
                {/* Event Type Badge */}
                <div className="absolute top-4 left-4">
                  <div className={`flex items-center space-x-1 ${eventTypes[event.type].color} text-black px-3 py-1 rounded-full`}>
                    {(() => {
                      const TypeIcon = eventTypes[event.type].icon;
                      return <TypeIcon className="h-3 w-3" />;
                    })()}
                    <span className="font-bold text-xs">{event.type}</span>
                  </div>
                </div>

                {/* Prize Pool */}
                {event.prizePool && (
                  <div className="absolute top-4 right-4 bg-[#00FF9D] text-black px-2 py-1 rounded-full font-bold text-xs">
                    {event.prizePool}
                  </div>
                )}
              </div>

              {/* Event Info */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#00C2FF] transition-colors line-clamp-2">
                  {event.title}
                </h3>
                
                <p className="text-[#B0B0C0] text-sm leading-relaxed mb-4 line-clamp-2">
                  {event.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-[#B0B0C0] text-sm">
                    <Calendar className="h-4 w-4 text-[#00C2FF]" />
                    <span>{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-[#B0B0C0] text-sm">
                    <Clock className="h-4 w-4 text-[#FF4F91]" />
                    <span>{event.time}</span>
                  </div>
                  {event.maxParticipants && (
                    <div className="flex items-center space-x-2 text-[#B0B0C0] text-sm">
                      <Users className="h-4 w-4 text-[#FFBE0B]" />
                      <span>{event.participants} / {event.maxParticipants}</span>
                    </div>
                  )}
                </div>
                
                <button className="w-full border border-[#2A2A3C] hover:border-[#00C2FF] bg-[#2A2A3C]/50 hover:bg-[#00C2FF]/10 px-4 py-3 rounded-xl font-semibold text-white transition-all duration-300">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Event Calendar CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-[#2A2A3C]/50 to-[#3A3A4C]/50 backdrop-blur-sm rounded-2xl p-8 border border-[#2A2A3C]">
            <h3 className="text-2xl font-bold text-white mb-4">Never Miss an Event</h3>
            <p className="text-[#B0B0C0] mb-6">Subscribe to our event calendar and get notified about upcoming community activities, tournaments, and exclusive experiences.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-[#00C2FF] to-[#FF4F91] px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                View Full Calendar
              </button>
              <button className="border border-[#2A2A3C] hover:border-[#00C2FF] px-8 py-3 rounded-full font-semibold transition-colors">
                Enable Notifications
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;