import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Clock, User, Calendar, Tag, ArrowRight } from 'lucide-react';
import Seo from '../components/Seo';
import { useSanityData } from '../hooks/useSanity';
import { queries, urlFor } from '../lib/sanity';
import { BlogPost } from '../schemas';

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { data: blogPosts, loading, error } = useSanityData<BlogPost[]>(queries.blog);

  const categories = ['All', 'Gaming Tips', 'Industry News', 'Player Insights', 'Technology', 'Strategy Guides'];

  const filteredPosts = blogPosts?.filter(
    post => selectedCategory === 'All' || post.category === selectedCategory
  ) || [];

  const featuredPost = blogPosts?.find(post => post.featured);
  const regularPosts = blogPosts?.filter(post => !post.featured) || [];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#1F1F2E] flex items-center justify-center">
        <div className="text-[#B0B0C0]">Loading blog posts...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#1F1F2E] flex items-center justify-center">
        <div className="text-[#FF4F91]">Error loading blog: {error}</div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Seo
        title="Blog - CrissCross Esports"
        description="Stay updated with the latest gaming insights, strategy guides, industry news, and player tips from CrissCross Esports professionals."
        url="https://crisscross.gg/blog"
        tags={['blog', 'gaming tips', 'esports insights', 'strategy guides', 'industry news', 'player advice']}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: 'url(https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1F1F2E]/95 via-[#1F1F2E]/85 to-[#1F1F2E]/95" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center space-x-2 mb-6">
                <BookOpen className="h-8 w-8 text-[#00C2FF]" />
                <span className="text-[#00C2FF] font-medium tracking-wider uppercase text-lg">Blog</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold font-['Space_Grotesk'] mb-8 leading-tight">
                <span className="bg-gradient-to-r from-white via-[#00C2FF] to-[#FF4F91] bg-clip-text text-transparent">
                  Gaming Insights
                </span>
                <br />
                <span className="text-white">
                  & Strategy
                </span>
              </h1>
              
              <p className="text-[#B0B0C0] text-xl max-w-4xl mx-auto leading-relaxed">
                Discover the latest gaming strategies, industry insights, and professional tips 
                from our championship-winning players and expert analysts.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-[#252538]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-[#00C2FF] to-[#FF4F91] text-white'
                    : 'bg-[#2A2A3C]/50 text-[#B0B0C0] hover:bg-[#2A2A3C] hover:text-white border border-[#2A2A3C] hover:border-[#00C2FF]/50'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-20 bg-[#1F1F2E]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl bg-[#2A2A3C]/50 backdrop-blur-sm border border-[#2A2A3C] hover:border-[#00C2FF]/50 transition-all duration-500"
            >
              <div className="lg:flex">
                <div className="lg:w-1/2 relative overflow-hidden">
                  <img
                    src={featuredPost.image ? urlFor(featuredPost.image).width(800).height(400).url() : 'https://images.pexels.com/photos/3419736/pexels-photo-3419736.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'}
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-[#00C2FF] text-white px-4 py-2 rounded-full text-sm font-bold">
                      FEATURED
                    </span>
                  </div>
                </div>
                
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 text-[#B0B0C0] text-sm mb-4">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(featuredPost.publishedAt)}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>{featuredPost.readTime} min read</span>
                    </div>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-white mb-4 group-hover:text-[#00C2FF] transition-colors">
                    {featuredPost.title}
                  </h2>
                  
                  <p className="text-[#B0B0C0] leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center space-x-4 mb-6">
                    <span className="bg-[#FF4F91]/20 text-[#FF4F91] px-3 py-1 rounded-full text-sm font-medium">
                      {featuredPost.category}
                    </span>
                    {featuredPost.tags?.slice(0, 2).map((tag, index) => (
                      <span key={index} className="bg-[#2A2A3C] text-[#B0B0C0] px-3 py-1 rounded-full text-sm">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <button className="inline-flex items-center space-x-2 text-[#00C2FF] hover:text-[#FF4F91] font-semibold group/button">
                    <span>Read Full Article</span>
                    <ArrowRight className="h-4 w-4 group-hover/button:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-20 bg-[#252538]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post._id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-2xl bg-[#2A2A3C]/30 backdrop-blur-sm border border-[#2A2A3C] hover:border-[#00C2FF]/50 hover:bg-[#2A2A3C]/50 transition-all duration-500"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image ? urlFor(post.image).width(600).height(300).url() : 'https://images.pexels.com/photos/3419736/pexels-photo-3419736.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop'}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#00C2FF]/20 backdrop-blur-sm text-[#00C2FF] px-3 py-1 rounded-full text-xs font-bold">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-4 text-[#B0B0C0] text-xs mb-3">
                    <div className="flex items-center space-x-1">
                      <User className="h-3 w-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{formatDate(post.publishedAt)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}m</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#00C2FF] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-[#B0B0C0] text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      {post.tags?.slice(0, 2).map((tag, tagIndex) => (
                        <span key={tagIndex} className="flex items-center space-x-1 text-[#B0B0C0] text-xs">
                          <Tag className="h-3 w-3" />
                          <span>{tag}</span>
                        </span>
                      ))}
                    </div>
                    
                    <button className="inline-flex items-center space-x-1 text-[#00C2FF] hover:text-[#FF4F91] text-sm font-semibold group/button">
                      <span>Read</span>
                      <ArrowRight className="h-3 w-3 group-hover/button:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default BlogPage;