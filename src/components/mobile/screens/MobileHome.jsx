import React from 'react';
import { Bell, ChevronRight, Apple } from 'lucide-react';
import { motion } from 'framer-motion';

export function MobileHome() {
  const categories = ['iPhone', 'Mac', 'iPad', 'Watch', 'AirPods'];
  const featuredProducts = [
    { name: 'iPhone 17 Pro', price: 'Mulai Rp 20.999.000', image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=500&auto=format&fit=crop' },
    { name: 'MacBook Air M3', price: 'Mulai Rp 18.999.000', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=500&auto=format&fit=crop' }
  ];

  return (
    <div className="flex flex-col min-h-full bg-pure-black pt-12 sm:pt-16 pb-6 px-5">
      {/* Header */}
      <header className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-gray-400 text-sm font-medium mb-1">Selamat datang di</h2>
          <div className="flex items-center gap-1">
            <Apple size={20} className="text-white" />
            <h1 className="text-2xl font-semibold text-white tracking-tight">izystore</h1>
          </div>
        </div>
        <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center relative">
          <Bell size={20} className="text-white" />
          <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-blue-500 rounded-full"></span>
        </button>
      </header>

      {/* Hero Banner */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative w-full h-48 rounded-3xl overflow-hidden mb-8"
      >
        <img 
          src="https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=800&auto=format&fit=crop" 
          alt="Apple Event"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-5">
          <span className="text-blue-400 text-xs font-semibold tracking-wider uppercase mb-1">Baru</span>
          <h3 className="text-white text-xl font-medium leading-tight">Era Baru Apple Intelligence.</h3>
        </div>
      </motion.div>

      {/* Categories */}
      <div className="mb-8">
        <div className="flex justify-between items-end mb-4">
          <h3 className="text-lg font-medium text-white">Kategori</h3>
          <a href="#" className="text-sm text-blue-500 font-medium">Lihat Semua</a>
        </div>
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
          {categories.map((cat, i) => (
            <button key={i} className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 whitespace-nowrap hover:bg-white/10 transition-colors">
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <div>
        <h3 className="text-lg font-medium text-white mb-4">Paling Diminati</h3>
        <div className="grid grid-cols-2 gap-4">
          {featuredProducts.map((product, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 mb-4 relative">
                <img src={product.image} alt={product.name} className="w-full h-full object-contain drop-shadow-2xl rounded-lg" />
              </div>
              <h4 className="text-sm font-medium text-white mb-1">{product.name}</h4>
              <p className="text-xs text-gray-400">{product.price}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
    </div>
  );
}
