import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';

const catalog = [
  {
    id: 1,
    name: 'iPhone 17 Pro Max',
    desc: 'Titanium. A19 Pro. Kamera 48MP tercanggih.',
    fullDesc: 'Desain revolusioner dengan ketahanan ekstra. Dilengkapi dengan sistem kamera tercanggih yang pernah ada, memberikan hasil foto layaknya profesional.',
    price: 'Mulai Rp 24.999.000',
    image: '/17 pm.jpeg',
    glowColor: 'bg-amber-700/40',
    title: 'TITANIUM'
  },
  {
    id: 2,
    name: 'iPhone 15',
    desc: 'Performa buas, desain elegan.',
    fullDesc: 'Kamera utama 48MP yang menakjubkan. Dynamic Island. Desain aluminium dengan kaca berwarna di seluruh bagian.',
    price: 'Mulai Rp 19.499.000',
    image: '/15 basic.jpeg',
    glowColor: 'bg-pink-500/40',
    title: 'DYNAMIC'
  },
  {
    id: 3,
    name: 'iPhone 14 Pro Max',
    desc: 'Pilihan cerdas, harga bersahabat.',
    fullDesc: 'Layar Super Retina XDR dengan ProMotion. A16 Bionic, chip ponsel pintar tangguh yang tetap sangat andal untuk segala kebutuhan.',
    price: 'Mulai Rp 11.999.000',
    image: '/14 pm.jpeg',
    glowColor: 'bg-purple-600/40',
    title: 'PRO POWER'
  }
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 800 : -800,
    rotateY: direction > 0 ? -45 : 45,
    scale: 0.8,
    opacity: 0,
    z: -300
  }),
  center: {
    x: 0,
    rotateY: 0,
    scale: 1,
    opacity: 1,
    z: 0
  },
  exit: (direction) => ({
    x: direction < 0 ? 800 : -800,
    rotateY: direction < 0 ? -45 : 45,
    scale: 0.8,
    opacity: 0,
    z: -300
  })
};

// Swipe helper for drag interactions
const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export function BentoCatalog() {
  const [[page, direction], setPage] = useState([0, 0]);

  const activeIndex = Math.abs(page % catalog.length);
  const activeItem = catalog[activeIndex];

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden flex flex-col items-center justify-center pt-24 pb-32 z-20 perspective-[2000px]">
      
      {/* Dynamic Background Glow */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={activeItem.glowColor}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full blur-[150px] mix-blend-screen pointer-events-none ${activeItem.glowColor}`}
        />
      </AnimatePresence>

      {/* Massive Background Typography */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.h1
            key={activeItem.title}
            initial={{ y: 100, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -100, opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-[18vw] font-black text-white/5 whitespace-nowrap tracking-tighter"
          >
            {activeItem.title}
          </motion.h1>
        </AnimatePresence>
      </div>

      {/* Header */}
      <div className="absolute top-12 left-0 w-full px-8 flex justify-between items-end z-30">
        <div>
          <h2 className="text-sm uppercase tracking-widest text-blue-400 font-semibold mb-2">
            katalog produk
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white">
            Pilih Kekuatanmu.
          </h3>
        </div>
      </div>

      {/* 3D Carousel Stage */}
      <div className="relative w-full max-w-sm aspect-[9/16] perspective-[1200px] z-30 mt-[-5vh]">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.4 },
              rotateY: { type: "spring", stiffness: 200, damping: 30 }
            }}
            className="absolute inset-0 rounded-3xl overflow-hidden border border-white/20 shadow-[0_0_50px_rgba(0,0,0,0.8)] cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          >
            <img 
              src={activeItem.image} 
              alt={activeItem.name} 
              className="w-full h-full object-cover pointer-events-none"
            />
            {/* Inner Shadow to make it pop */}
            <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.6)] pointer-events-none" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={() => paginate(-1)}
        className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/5 hover:bg-white/20 text-white backdrop-blur-md border border-white/10 transition-all z-40 hidden md:block"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button 
        onClick={() => paginate(1)}
        className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/5 hover:bg-white/20 text-white backdrop-blur-md border border-white/10 transition-all z-40 hidden md:block"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      {/* Details Glass Card */}
      <motion.div 
        key={`details-${activeItem.id}`}
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6, type: 'spring' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[95%] max-w-4xl bg-zinc-900/60 backdrop-blur-3xl border border-white/10 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-40"
      >
        <div className="flex-1 mb-6 md:mb-0 md:mr-8 text-center md:text-left">
          <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-3">
            {activeItem.name}
          </h3>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            {activeItem.fullDesc}
          </p>
        </div>
        
        <div className="flex flex-col items-center md:items-end shrink-0 w-full md:w-auto">
          <p className="text-sm text-gray-400 mb-1">Harga Spesial</p>
          <p className="text-2xl md:text-3xl font-bold text-white mb-4">{activeItem.price}</p>
          <button className="flex items-center justify-center w-full md:w-auto gap-3 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 hover:scale-105 transition-all shadow-lg shadow-white/10">
            <ShoppingCart className="w-5 h-5" /> Pesan Sekarang
          </button>
        </div>
      </motion.div>

    </section>
  );
}
