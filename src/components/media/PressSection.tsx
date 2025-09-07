import React from 'react';
import { motion } from 'framer-motion';
import { Newspaper, ExternalLink, Calendar, User } from 'lucide-react';

const PressSection = () => {
  const pressArticles = [
    {
      id: 1,
      title: 'CrissCross Esports Dominates Global Championship',
      outlet: 'ESPN Esports',
      author: 'Sarah Johnson',
      date: '2025-01-18',
      excerpt: 'CrissCross Esports continues their winning streak with a dominant performance at the Global Championship, securing their third consecutive title.',
      image: 'https://images.pexels.com/photos/3419736/pexels-photo-3419736.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      url: '#',
      featured: true
    },
    {
      id: 2,
      title: 'The Rise of Professional Esports Organizations',
      outlet: 'TechCrunch',
      author: 'Mike Chen',
      date: '2025-01-15',
      excerpt: 'How organizations like CrissCross are revolutionizing the esports industry with professional management and player development.',
      image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop',
      url: '#',
      featured: false
    },
    {
      id: 3,
      title: 'Esports Investment Reaches New Heights',
      outlet: 'Forbes',
      author: 'Jennifer Liu',
      date: '2025-01-12',
      excerpt: 'Major brands are investing heavily in esports partnerships, with CrissCross leading the charge in professional gaming.',
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop',
      url: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Player Development in Modern Esports',
      outlet: 'GameInformer',
      author: 'Alex Rodriguez',
      date: '2025-01-10',
      excerpt: 'CrissCross Esports sets the standard for player development and mental health support in competitive gaming.',
      image: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop',
      url: '#',
      featured: false
    }
  ];

  const pressKits = [
    {
      title: 'Brand Assets & Logos',
      description: 'High-resolution logos, brand guidelines, and visual assets',
      fileSize: '25 MB',
      format: 'ZIP'
    },
    {
      title: 'Team Photos & Headshots',
      description: 'Professional photos of players and management team',
      fileSize: '180 MB',
      format: 'ZIP'
    },
    {
      title: 'Tournament Statistics',
      description: 'Comprehensive performance data and match statistics',
      fileSize: '5 MB',
      format: 'PDF'
    },
    {
      title: 'Company Fact Sheet',
      description: 'Key information, achievements, and company milestones',
      fileSize: '2 MB',
      format: 'PDF'
    }
  ];

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
            <Newspaper className="h-6 w-6 text-[#00C2FF]" />
            <span className="text-[#00C2FF] font-medium tracking-wider uppercase">Press Coverage</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-['Space_Grotesk'] mb-6">
            <span className="bg-gradient-to-r from-white to-[#B0B0C0] bg-clip-text text-transparent">
              In the
            </span>
            <span className="bg-gradient-to-r from-[#00C2FF] to-[#FF4F91] bg-clip-text text-transparent ml-3">
              Spotlight
            </span>
          </h2>
          <p className="text-[#B0B0C0] text-lg max-w-3xl mx-auto leading-relaxed">
            See what the media is saying about CrissCross Esports and our impact on the gaming industry.
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
          {pressArticles.filter(article => article.featured).map((article) => (
            <div key={article.id} className="group relative overflow-hidden rounded-3xl bg-[#2A2A3C]/50 backdrop-blur-sm border border-[#2A2A3C] hover:border-[#00C2FF]/50 transition-all duration-500">
              <div className="lg:flex">
                <div className="lg:w-1/2 relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-64 lg:h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1F1F2E]/20 to-transparent" />
                </div>
                
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 text-[#B0B0C0] text-sm mb-4">
                    <span className="text-[#00C2FF] font-semibold">{article.outlet}</span>
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(article.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-[#00C2FF] transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-[#B0B0C0] leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                  
                  <a
                    href={article.url}
                    className="inline-flex items-center space-x-2 text-[#00C2FF] hover:text-[#FF4F91] font-semibold group/link"
                  >
                    <span>Read Full Article</span>
                    <ExternalLink className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Press Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {pressArticles.filter(article => !article.featured).map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-2xl bg-[#2A2A3C]/30 backdrop-blur-sm border border-[#2A2A3C] hover:border-[#00C2FF]/50 hover:bg-[#2A2A3C]/50 transition-all duration-500"
            >
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A2A3C]/50 to-transparent" />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between text-[#B0B0C0] text-xs mb-3">
                  <span className="text-[#00C2FF] font-semibold">{article.outlet}</span>
                  <span>{new Date(article.date).toLocaleDateString()}</span>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#00C2FF] transition-colors line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-[#B0B0C0] text-sm leading-relaxed mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-[#B0B0C0] text-xs">
                    <User className="h-3 w-3" />
                    <span>{article.author}</span>
                  </div>
                  
                  <a
                    href={article.url}
                    className="inline-flex items-center space-x-1 text-[#00C2FF] hover:text-[#FF4F91] text-sm font-semibold group/link"
                  >
                    <span>Read</span>
                    <ExternalLink className="h-3 w-3 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Press Kit Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#2A2A3C]/50 to-[#3A3A4C]/50 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-[#2A2A3C]"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4 font-['Space_Grotesk']">
              Press Resources
            </h3>
            <p className="text-[#B0B0C0] text-lg max-w-3xl mx-auto leading-relaxed">
              Download high-quality assets, photos, and information for your coverage of CrissCross Esports.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pressKits.map((kit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-[#1F1F2E]/50 rounded-xl p-6 border border-[#2A2A3C] hover:border-[#00C2FF]/50 transition-all duration-300 text-center"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#00C2FF] to-[#FF4F91] rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Newspaper className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">{kit.title}</h4>
                  <p className="text-[#B0B0C0] text-sm mb-4">{kit.description}</p>
                </div>
                
                <div className="flex items-center justify-between text-[#B0B0C0] text-xs mb-4">
                  <span>{kit.fileSize}</span>
                  <span>{kit.format}</span>
                </div>
                
                <button className="w-full bg-[#2A2A3C]/50 hover:bg-[#2A2A3C] border border-[#2A2A3C] hover:border-[#00C2FF]/50 px-4 py-2 rounded-lg text-[#B0B0C0] hover:text-white font-semibold text-sm transition-all duration-300">
                  Download
                </button>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-[#B0B0C0] mb-6">
              Need additional resources or have media inquiries?
            </p>
            <button className="bg-gradient-to-r from-[#00C2FF] to-[#FF4F91] px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
              Contact Press Team
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PressSection;