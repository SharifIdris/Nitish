import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Star, Heart, ShoppingCart } from 'lucide-react';

const MerchSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Apparel', 'Accessories', 'Gaming Gear', 'Collectibles'];

  const products = [
    {
      id: 1,
      name: 'CrissCross Team Jersey',
      category: 'Apparel',
      price: 79.99,
      originalPrice: 99.99,
      image: 'https://images.pexels.com/photos/3419736/pexels-photo-3419736.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      rating: 4.8,
      reviews: 324,
      bestseller: true,
      sale: true
    },
    {
      id: 2,
      name: 'Gaming Mouse Pad',
      category: 'Gaming Gear',
      price: 29.99,
      image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      rating: 4.9,
      reviews: 156,
      bestseller: false,
      sale: false
    },
    {
      id: 3,
      name: 'Team Logo Hoodie',
      category: 'Apparel',
      price: 59.99,
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      rating: 4.7,
      reviews: 89,
      bestseller: false,
      sale: false
    },
    {
      id: 4,
      name: 'Championship Trophy Replica',
      category: 'Collectibles',
      price: 149.99,
      image: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      rating: 5.0,
      reviews: 45,
      bestseller: false,
      sale: false
    },
    {
      id: 5,
      name: 'Team Cap',
      category: 'Accessories',
      price: 24.99,
      image: 'https://images.pexels.com/photos/3419736/pexels-photo-3419736.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      rating: 4.6,
      reviews: 203,
      bestseller: true,
      sale: false
    },
    {
      id: 6,
      name: 'Gaming Keyboard',
      category: 'Gaming Gear',
      price: 199.99,
      originalPrice: 249.99,
      image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      rating: 4.9,
      reviews: 78,
      bestseller: false,
      sale: true
    }
  ];

  const filteredProducts = products.filter(
    product => selectedCategory === 'All' || product.category === selectedCategory
  );

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
            <ShoppingBag className="h-6 w-6 text-[#00C2FF]" />
            <span className="text-[#00C2FF] font-medium tracking-wider uppercase">Merchandise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-['Space_Grotesk'] mb-6">
            <span className="bg-gradient-to-r from-white to-[#B0B0C0] bg-clip-text text-transparent">
              Official
            </span>
            <span className="bg-gradient-to-r from-[#00C2FF] to-[#FF4F91] bg-clip-text text-transparent ml-3">
              Merchandise
            </span>
          </h2>
          <p className="text-[#B0B0C0] text-lg max-w-3xl mx-auto leading-relaxed">
            Show your support with official CrissCross Esports merchandise. From team jerseys to gaming gear, 
            represent your favorite esports organization in style.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
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

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-2xl bg-[#2A2A3C]/30 backdrop-blur-sm border border-[#2A2A3C] hover:border-[#00C2FF]/50 hover:bg-[#2A2A3C]/50 transition-all duration-500"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A2A3C]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col space-y-2">
                  {product.bestseller && (
                    <span className="bg-[#00FF9D] text-black px-3 py-1 rounded-full text-xs font-bold">
                      BESTSELLER
                    </span>
                  )}
                  {product.sale && (
                    <span className="bg-[#FF4F91] text-white px-3 py-1 rounded-full text-xs font-bold">
                      SALE
                    </span>
                  )}
                </div>

                {/* Wishlist Button */}
                <button className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[#FF4F91]/20">
                  <Heart className="h-4 w-4 text-white hover:text-[#FF4F91] transition-colors" />
                </button>

                {/* Quick Add to Cart */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-full bg-gradient-to-r from-[#00C2FF] to-[#FF4F91] px-4 py-2 rounded-xl font-semibold text-white flex items-center justify-center space-x-2 hover:scale-105 transition-transform">
                    <ShoppingCart className="h-4 w-4" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[#00C2FF] text-sm font-medium">{product.category}</span>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-[#FFBE0B] fill-current" />
                    <span className="text-[#B0B0C0] text-sm">{product.rating}</span>
                    <span className="text-[#B0B0C0] text-sm">({product.reviews})</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#00C2FF] transition-colors">
                  {product.name}
                </h3>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-white">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-[#B0B0C0] text-sm line-through">${product.originalPrice}</span>
                    )}
                  </div>
                  
                  <button className="p-2 bg-[#2A2A3C]/50 hover:bg-[#2A2A3C] border border-[#2A2A3C] hover:border-[#00C2FF] rounded-lg transition-all duration-300">
                    <ShoppingCart className="h-4 w-4 text-[#B0B0C0] hover:text-[#00C2FF] transition-colors" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Store CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-[#2A2A3C]/50 to-[#3A3A4C]/50 backdrop-blur-sm rounded-2xl p-8 border border-[#2A2A3C]">
            <h3 className="text-2xl font-bold text-white mb-4">Visit Our Full Store</h3>
            <p className="text-[#B0B0C0] mb-6">Explore our complete collection of merchandise, limited edition items, and exclusive team gear.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-[#00C2FF] to-[#FF4F91] px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                Shop All Products
              </button>
              <button className="border border-[#2A2A3C] hover:border-[#00C2FF] px-8 py-3 rounded-full font-semibold transition-colors">
                Join VIP Program
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MerchSection;