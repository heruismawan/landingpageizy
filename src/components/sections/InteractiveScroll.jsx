import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function InteractiveScroll() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Animations mapped to scroll progress
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.5, 1]);
  const opacityText1 = useTransform(scrollYProgress, [0, 0.2, 0.4], [1, 1, 0]);
  const opacityText2 = useTransform(scrollYProgress, [0.4, 0.6, 0.8], [0, 1, 0]);
  const opacityText3 = useTransform(scrollYProgress, [0.8, 0.9, 1], [0, 1, 1]);

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-pure-black">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-pure-black via-titanium-dark/20 to-pure-black" />

        {/* Central Element (representing the phone core/chip) */}
        <motion.div 
          style={{ scale }}
          className="relative z-10 w-64 h-64 md:w-96 md:h-96"
        >
           <div className="absolute inset-0 bg-gradient-to-br from-titanium-silver to-titanium-dark rounded-3xl opacity-20 blur-xl" />
           <div className="w-full h-full glassmorphism-dark rounded-3xl border-2 border-white/10 flex items-center justify-center p-8">
              <div className="w-full h-full bg-black rounded-2xl border border-gray-800 flex items-center justify-center shadow-[inset_0_0_50px_rgba(255,255,255,0.05)] relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:250%_250%,100%_100%] animate-[shimmer_3s_infinite_linear]" />
                <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-500 font-mono tracking-widest z-10">
                  A18 PRO
                </span>
              </div>
           </div>
        </motion.div>

        {/* Text Overlays */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none px-4 text-center">
          
          <motion.div style={{ opacity: opacityText1 }} className="absolute">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-4">
              Kekuatan <br/><span className="text-titanium-silver">yang tak tertandingi.</span>
            </h2>
          </motion.div>

          <motion.div style={{ opacity: opacityText2 }} className="absolute">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-4">
              Didesain untuk <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Apple Intelligence.</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-xl mx-auto">
              Chipset tercanggih yang pernah ada di smartphone. 
              Mendefinisikan ulang kecepatan dan efisiensi baterai.
            </p>
          </motion.div>

          <motion.div style={{ opacity: opacityText3 }} className="absolute">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-4">
              <span className="text-gold-accent">Lompatan</span> generasi.
            </h2>
            <div className="flex gap-8 mt-8 justify-center">
               <div className="flex flex-col items-center">
                  <span className="text-5xl font-bold text-white mb-2">20%</span>
                  <span className="text-sm text-gray-400 uppercase tracking-widest">Lebih Cepat</span>
               </div>
               <div className="w-px h-16 bg-white/20" />
               <div className="flex flex-col items-center">
                  <span className="text-5xl font-bold text-white mb-2">2x</span>
                  <span className="text-sm text-gray-400 uppercase tracking-widest">Ray Tracing</span>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
