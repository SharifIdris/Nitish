import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Trophy, Users, Heart } from 'lucide-react';

const FanZone = () => {
  const fanContent = [
    {
      id: 1,
      type: 'photo',
      user: 'GamerGirl2024',
      content: 'My CrissCross setup is finally complete! 🎮',
      image: 'https://images.pexels.com/photos/3419736/pexels-photo-3419736.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      likes: 234,
      comments: 18,
      timeAgo: '2 hours ago'
    },
    {
      id: 2,
      type: 'achievement',
      user: 'ProPlayer99',
      content: 'Just hit Diamond rank wearing my CrissCross jersey! 💎',
      image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      likes: 567,
      comments: 43,
      timeAgo: '5 hours ago'
    },
    {
      id: 3,
      type: 'fanart',
      user: 'ArtisticAce',
      content: 'Drew my favorite CrissCross player! Hope you like it ✨',
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      likes: 892,
      comments: 76,
      timeAgo: '1 day ago'
    },
    {
      id: 4,
      type: 'cosplay',
      user: 'CosplayQueen',
      content: 'CrissCross team cosplay at the convention! 🎭',
      image: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      likes: 1234,
      comments: 89,
      timeAgo: '2 days ago'
    }
  ];

  const getContentIcon = (type) => {
    switch (type) {
      case 'photo':
        return Camera;
      case 'achievement':
        return Trophy;
      case 'fanart':
        return Heart;
      case 'cosplay':
        return Users;
      default:
        return Camera;
    }
  };

  const getContentColor = (type) => {
    switch (type) {
      case 'photo':
        return 'text-[#00C2FF]';
      case 'achievement':
        return 'text-[#00FF9D]';
      case 'fanart':
        return 'text-[#FF4F91]';
      case 'cosplay':
        return 'text-[#FFBE0B]';
      default:
        return 'text-[#00C2FF]';
    }
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
            <Heart className="h-6 w-6 text-[#00C2FF]" />
            <span className="text-[#00C2FF] font-medium tracking-wider uppercase">Fan Zone</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-['Space_Grotesk'] mb-6">
            <span className="bg-gradient-to-r from-white to-[#B0B0C0] bg-clip-text text-transparent">
              Community
            </span>
            <span className="bg-gradient-to-r from-[#00C2FF] to-[#FF4F91] bg-clip-text text-transparent ml-3">
              Spotlight
            </span>
          </h2>
          <p className="text-[#B0B0C0] text-lg max-w-3xl mx-auto leading-relaxed">
            Celebrating our amazing community! Share your setups, achievements, fan art, and show your CrissCross pride.
          </p>
        </motion.div>

        {/* Fan Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {fanContent.map((content, index) => (
            <motion.div
              key={content.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-2xl bg-[#2A2A3C]/50 backdrop-blur-sm border border-[#2A2A3C] hover:border-[#00C2FF]/50 transition-all duration-500"
            >
              {/* Content Image */}
              <div className="relative overflow-hidden">
                <img
                  src={content.image}
                  alt={content.content}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A2A3C]/70 to-transparent" />
                
                {/* Content Type Badge */}
                <div className="absolute top-4 left-4">
                  {(() => {
                    const ContentIcon = getContentIcon(content.type);
                    return (
                      <div className={`p-2 bg-black/50 backdrop-blur-sm rounded-full ${getContentColor(content.type)}`}>
                        <ContentIcon className="h-4 w-4" />
                      </div>
                    );
                  })()}
                </div>

                {/* Engagement Stats */}
                <div className="absolute bottom-4 right-4 flex items-center space-x-4 text-white text-sm">
                  <div className="flex items-center space-x-1">
                    <Heart className="h-4 w-4" />
                    <span>{content.likes}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{content.comments}</span>
                  </div>
                </div>
              </div>

              {/* Content Info */}
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#00C2FF] to-[#FF4F91] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {content.user.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{content.user}</h4>
                    <p className="text-[#B0B0C0] text-sm">{content.timeAgo}</p>
                  </div>
                </div>
                
                <p className="text-[#B0B0C0] leading-relaxed mb-4">
                  {content.content}
                </p>
                
                <div className="flex items-center justify-between">
                  <button className="flex items-center space-x-2 text-[#B0B0C0] hover:text-[#FF4F91] transition-colors">
                    <Heart className="h-4 w-4" />
                    <span className="text-sm">Like</span>
                  </button>
                  <button className="flex items-center space-x-2 text-[#B0B0C0] hover:text-[#00C2FF] transition-colors">
                    <Users className="h-4 w-4" />
                    <span className="text-sm">Comment</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Submit Content CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#2A2A3C]/50 to-[#3A3A4C]/50 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-[#2A2A3C] text-center"
        >
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-white mb-4 font-['Space_Grotesk']">
              Share Your CrissCross Moment
            </h3>
            <p className="text-[#B0B0C0] text-lg max-w-3xl mx-auto leading-relaxed">
              Got an awesome setup, achievement, or fan creation? Share it with the community and get featured in our Fan Zone!
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {[
              { icon: Camera, label: 'Setup Photos', color: 'from-[#00C2FF] to-[#0099CC]' },
              { icon: Trophy, label: 'Achievements', color: 'from-[#00FF9D] to-[#00CC7A]' },
              { icon: Heart, label: 'Fan Art', color: 'from-[#FF4F91] to-[#CC3E73]' },
              { icon: Users, label: 'Cosplay', color: 'from-[#FFBE0B] to-[#F59E0B]' }
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-3`}>
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <p className="text-[#B0B0C0] text-sm font-medium">{category.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-[#00C2FF] to-[#FF4F91] px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform">
              Submit Your Content
            </button>
            <button className="border border-[#2A2A3C] hover:border-[#00C2FF] px-8 py-4 rounded-full font-semibold text-lg transition-colors">
              View Submission Guidelines
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FanZone;