import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, BadgeDollarSign, Gift, ArrowRight } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Bawa Perangkat Lama',
    desc: 'Bawa iPhone lama kamu ke toko kami atau diskusikan kondisinya via chat untuk pengecekan awal.',
    icon: Smartphone,
    color: 'from-blue-500 to-cyan-400'
  },
  {
    id: 2,
    title: 'Dapat Penawaran Terbaik',
    desc: 'Kami akan memberikan estimasi harga tertinggi sesuai dengan kondisi fisik dan performa perangkatmu.',
    icon: BadgeDollarSign,
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 3,
    title: 'Bawa Pulang iPhone Baru',
    desc: 'Gunakan nilai tukar tambah sebagai potongan harga langsung untuk iPhone impianmu yang baru.',
    icon: Gift,
    color: 'from-orange-500 to-yellow-500'
  }
];

export const TradeIn = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/6281999094111', '_blank');
  };

  return (
    <section id="tradein" className="py-32 px-6 bg-pure-black relative z-10 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-glow/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter"
          >
            Tukar Tambah Lebih Mudah <br className="hidden md:block"/> & Menguntungkan.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Jadikan iPhone lamamu bernilai tinggi. Upgrade ke model terbaru tanpa harus bayar harga penuh.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 relative">
          {/* Connector Line for Desktop */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent -z-10" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex flex-col items-center text-center group"
              >
                <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${step.color} p-[1px] mb-8 group-hover:-translate-y-2 transition-transform duration-300 shadow-2xl`}>
                  <div className="w-full h-full bg-pure-black rounded-3xl flex items-center justify-center">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center"
        >
          <button 
            onClick={handleWhatsAppClick}
            className="inline-flex items-center gap-3 bg-white text-black hover:bg-gray-200 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.2)] group"
          >
            Cek Estimasi Harga via WA
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
