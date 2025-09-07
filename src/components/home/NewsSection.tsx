import React from 'react';
import { motion } from 'framer-motion';
import { Clock, User, ArrowRight, Bookmark } from 'lucide-react';

const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: 'CrissCross Apex Squad Wins Global Championship',
      excerpt: 'Our Apex Legends team dominates the international tournament with a flawless victory, securing their third consecutive championship title.',
      image: 'https://images.pexels.com/photos/3419736/pexels-photo-3419736.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      author: 'Sarah Chen',
      date: '2 hours ago',
      category: 'Tournament',
      featured: true
    },
    {
      id: 2,
      title: 'New Valorant Roster Announcement',
      excerpt: 'Introducing our enhanced Valorant lineup with two new professional players joining the championship squad.',
      image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      author: 'Marcus Thompson',
      date: '6 hours ago',
      category: 'Team News',
      featured: false
    },
    {
      id: 3,
      title: 'Partnership with Global Gaming Sponsors',
      excerpt: 'CrissCross Esports announces major sponsorship deals with leading gaming hardware and energy drink brands.',
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      author: 'Alex Rivera',
      date: '1 day ago',
      category: 'Business',
      featured: false
    },
    {
      id: 4,
      title: 'Community Tournament Series Launch',
      excerpt: 'Join our monthly community tournaments with prize pools and chances to be scouted by our professional teams.',
      image: 'https://images.pexels.com/photos/3419736/pexels-photo-3419736.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      author: 'Emma Wilson',
      date: '2 days ago',
      category: 'Community',
      featured: false
    }
  ];

  const categoryColors = {
    'Tournament': 'text-[#00FF9D] bg-[#00FF9D]/20',
    'Team News': 'text-[#00C2FF] bg-[#00C2FF]/20',
    'Business': 'text-[#FF4F91] bg-[#FF4F91]/20',
    'Community': 'text-[#FFBE0B] bg-[#FFBE0B]/20'
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
            <Bookmark className="h-6 w-6 text-[#00C2FF]" />
            <span className="text-[#00C2FF] font-medium tracking-wider uppercase">Latest News</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-['Space_Grotesk'] mb-6">
            <span className="bg-gradient-to-r from-white to-[#B0B0C0] bg-clip-text text-transparent">
              Esports
            </span>
            <span className="bg-gradient-to-r from-[#00C2FF] to-[#FF4F91] bg-clip-text text-transparent ml-3">
              Updates
            </span>
          </h2>
          <p className="text-[#B0B0C0] text-lg max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest news, match results, and announcements from CrissCross Esports.
          </p>
        </motion.div>

        {/* Featured Article */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          {news.filter(article => article.featured).map((article) => (
            <div key={article.id} className="group relative overflow-hidden rounded-3xl bg-[#2A2A3C]/50 backdrop-blur-sm border border-[#2A2A3C] hover:border-[#00C2FF]/50 transition-all duration-500">
              <div className="lg:flex">
                <div className="lg:w-1/2 relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-64 lg:h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1F1F2E]/20 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-6 left-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${categoryColors[article.category]}`}>
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 text-[#B0B0C0] text-sm mb-4">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>{article.date}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-[#00C2FF] transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-[#B0B0C0] leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                  
                  <button className="inline-flex items-center space-x-2 text-[#00C2FF] hover:text-[#FF4F91] font-semibold group/button">
                    <span>Read Full Story</span>
                    <ArrowRight className="h-4 w-4 group-hover/button:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Regular Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.filter(article => !article.featured).map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl bg-[#2A2A3C]/30 backdrop-blur-sm border border-[#2A2A3C] hover:border-[#00C2FF]/50 hover:bg-[#2A2A3C]/50 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A2A3C]/50 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-bold ${categoryColors[article.category]}`}>
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center space-x-4 text-[#B0B0C0] text-xs mb-3">
                  <div className="flex items-center space-x-1">
                    <User className="h-3 w-3" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{article.date}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#00C2FF] transition-colors line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-[#B0B0C0] text-sm leading-relaxed mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <button className="inline-flex items-center space-x-1 text-[#00C2FF] hover:text-[#FF4F91] text-sm font-semibold group/button">
                  <span>Read More</span>
                  <ArrowRight className="h-3 w-3 group-hover/button:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All News CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-[#2A2A3C]/30 to-[#3A3A4C]/30 backdrop-blur-sm rounded-2xl p-8 border border-[#2A2A3C]">
            <h3 className="text-2xl font-bold text-white mb-4">Stay in the Game</h3>
            <p className="text-[#B0B0C0] mb-6">Get the latest esports news, match updates, and exclusive content delivered to your inbox.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-[#00C2FF] to-[#FF4F91] px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                View All News
              </button>
              <button className="border border-[#2A2A3C] hover:border-[#00C2FF] px-8 py-3 rounded-full font-semibold transition-colors">
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsSection;