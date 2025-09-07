import React from 'react';
import { motion } from 'framer-motion';
import { Play, Users, Calendar, Twitch, Youtube, Eye, Clock } from 'lucide-react';

const StreamingSection = () => {
  const liveStreams = [
    {
      id: 1,
      title: 'Valorant Practice Session',
      streamer: 'Phoenix',
      game: 'Valorant',
      viewers: 15420,
      duration: '2:34:12',
      thumbnail: 'https://images.pexels.com/photos/3419736/pexels-photo-3419736.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      platform: 'twitch',
      status: 'live'
    },
    {
      id: 2,
      title: 'Apex Legends Ranked Grind',
      streamer: 'Apex',
      game: 'Apex Legends',
      viewers: 8930,
      duration: '1:45:30',
      thumbnail: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      platform: 'youtube',
      status: 'live'
    }
  ];

  const upcomingStreams = [
    {
      id: 3,
      title: 'Tournament Review & Analysis',
      streamer: 'Coach Marcus',
      game: 'Multi-Game',
      scheduledTime: '2025-01-20T19:00:00Z',
      thumbnail: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      platform: 'twitch',
      status: 'scheduled'
    },
    {
      id: 4,
      title: 'Q&A with Team Captain',
      streamer: 'Storm',
      game: 'League of Legends',
      scheduledTime: '2025-01-21T16:00:00Z',
      thumbnail: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      platform: 'youtube',
      status: 'scheduled'
    }
  ];

  const streamingStats = [
    { label: 'Total Followers', value: '2.5M', icon: Users },
    { label: 'Hours Streamed', value: '15K+', icon: Clock },
    { label: 'Peak Viewers', value: '85K', icon: Eye },
    { label: 'Active Streamers', value: '12', icon: Play }
  ];

  const getPlatformIcon = (platform) => {
    switch (platform) {
      case 'twitch':
        return Twitch;
      case 'youtube':
        return Youtube;
      default:
        return Play;
    }
  };

  const getPlatformColor = (platform) => {
    switch (platform) {
      case 'twitch':
        return 'text-[#9146FF]';
      case 'youtube':
        return 'text-[#FF0000]';
      default:
        return 'text-[#00C2FF]';
    }
  };

  const formatTimeUntil = (dateString) => {
    const targetDate = new Date(dateString);
    const now = new Date();
    const diff = targetDate - now;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours}h ${minutes}m`;
  };

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
            <Play className="h-6 w-6 text-[#00C2FF]" />
            <span className="text-[#00C2FF] font-medium tracking-wider uppercase">Live Streaming</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-['Space_Grotesk'] mb-6">
            <span className="bg-gradient-to-r from-white to-[#B0B0C0] bg-clip-text text-transparent">
              Watch Our
            </span>
            <span className="bg-gradient-to-r from-[#00C2FF] to-[#FF4F91] bg-clip-text text-transparent ml-3">
              Players Live
            </span>
          </h2>
          <p className="text-[#B0B0C0] text-lg max-w-3xl mx-auto leading-relaxed">
            Follow our professional players as they practice, compete, and interact with the community through live streams.
          </p>
        </motion.div>

        {/* Streaming Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {streamingStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="mb-4 flex justify-center">
                <div className="p-4 bg-[#2A2A3C]/50 backdrop-blur-sm rounded-2xl border border-[#2A2A3C] group-hover:border-[#00C2FF]/50 transition-all duration-300">
                  <stat.icon className="h-8 w-8 text-[#00C2FF] group-hover:text-[#FF4F91] transition-colors" />
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 font-['Space_Grotesk']">
                {stat.value}
              </div>
              <div className="text-[#B0B0C0] text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Live Streams */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center justify-between mb-8"
          >
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-[#00FF9D] rounded-full animate-pulse" />
              <h3 className="text-2xl font-bold text-white font-['Space_Grotesk']">
                Live Now
              </h3>
            </div>
            <div className="text-[#B0B0C0] text-sm">
              {liveStreams.length} streams active
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {liveStreams.map((stream, index) => (
              <motion.div
                key={stream.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-2xl bg-[#2A2A3C]/50 backdrop-blur-sm border border-[#00FF9D]/30 hover:border-[#00FF9D] transition-all duration-500"
              >
                {/* Live Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#00FF9D] rounded-full animate-pulse" />
                    <span className="bg-[#00FF9D] text-black px-3 py-1 rounded-full text-xs font-bold">
                      LIVE
                    </span>
                  </div>
                </div>

                {/* Platform & Viewers */}
                <div className="absolute top-4 right-4 z-10 flex items-center space-x-2">
                  <div className="flex items-center space-x-1 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                    <Eye className="h-3 w-3 text-[#B0B0C0]" />
                    <span className="text-[#B0B0C0] text-xs font-medium">
                      {stream.viewers.toLocaleString()}
                    </span>
                  </div>
                  {(() => {
                    const PlatformIcon = getPlatformIcon(stream.platform);
                    return (
                      <div className="p-2 bg-black/50 backdrop-blur-sm rounded-full">
                        <PlatformIcon className={`h-4 w-4 ${getPlatformColor(stream.platform)}`} />
                      </div>
                    );
                  })()}
                </div>

                <div className="relative">
                  <img
                    src={stream.thumbnail}
                    alt={stream.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2A2A3C]/70 to-transparent" />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-gradient-to-r from-[#00C2FF] to-[#FF4F91] w-16 h-16 rounded-full flex items-center justify-center cursor-pointer shadow-2xl">
                      <Play className="h-6 w-6 text-white ml-1" />
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium">
                    {stream.duration}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-lg font-bold text-white group-hover:text-[#00C2FF] transition-colors">
                      {stream.title}
                    </h4>
                  </div>
                  
                  <div className="flex items-center justify-between text-[#B0B0C0] text-sm mb-4">
                    <span>{stream.streamer}</span>
                    <span>{stream.game}</span>
                  </div>

                  <button className="w-full bg-gradient-to-r from-[#00C2FF] to-[#FF4F91] px-6 py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:scale-105 transition-transform">
                    <Play className="h-4 w-4" />
                    <span>Watch Stream</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Upcoming Streams */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-white font-['Space_Grotesk'] flex items-center">
              <Calendar className="h-6 w-6 text-[#00C2FF] mr-3" />
              Upcoming Streams
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {upcomingStreams.map((stream, index) => (
              <motion.div
                key={stream.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-[#2A2A3C]/30 backdrop-blur-sm border border-[#2A2A3C] rounded-xl overflow-hidden hover:border-[#00C2FF]/50 hover:bg-[#2A2A3C]/50 transition-all duration-300"
              >
                <div className="relative">
                  <img
                    src={stream.thumbnail}
                    alt={stream.title}
                    className="w-full h-32 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2A2A3C]/70 to-transparent" />
                  
                  <div className="absolute top-2 right-2">
                    {(() => {
                      const PlatformIcon = getPlatformIcon(stream.platform);
                      return (
                        <div className="p-2 bg-black/50 backdrop-blur-sm rounded-full">
                          <PlatformIcon className={`h-4 w-4 ${getPlatformColor(stream.platform)}`} />
                        </div>
                      );
                    })()}
                  </div>
                </div>

                <div className="p-4">
                  <h4 className="text-white font-semibold mb-2">{stream.title}</h4>
                  
                  <div className="flex items-center justify-between text-[#B0B0C0] text-sm mb-3">
                    <span>{stream.streamer}</span>
                    <span>{stream.game}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-[#00C2FF] text-sm font-medium">
                      Starts in {formatTimeUntil(stream.scheduledTime)}
                    </div>
                    <button className="border border-[#2A2A3C] hover:border-[#00C2FF] bg-[#2A2A3C]/50 hover:bg-[#00C2FF]/10 px-4 py-2 rounded-lg font-semibold text-white text-sm transition-all duration-300">
                      Set Reminder
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StreamingSection;