import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { Button } from '../ui/Button';

export const WhatsAppCTA = () => {
  const handleWhatsAppClick = () => {
    // Replace with actual WhatsApp number when available
    window.open('https://wa.me/6281999094111', '_blank');
  };

  return (
    <section id="hubungi" className="py-24 relative overflow-hidden bg-pure-black border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-b from-white/10 to-transparent border border-white/10 rounded-3xl p-12 md:p-20 backdrop-blur-md relative overflow-hidden"
        >
          {/* Subtle glow effect behind the box */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-green-500/20 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative z-10">
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8 text-green-400">
              <MessageCircle className="w-10 h-10" />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-white">
              Masih Bingung?
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Jangan ragu untuk bertanya! Konsultasikan kebutuhan produk Apple kamu langsung dengan tim ahli kami via WhatsApp. Kami siap membantu kapan saja.
            </p>
            
            <button 
              onClick={handleWhatsAppClick}
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]"
            >
              <MessageCircle className="w-5 h-5" />
              Tanya-tanya ke WA Aja
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
