import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '../ui/Button';
import { ChevronRight, Play } from 'lucide-react';
import gsap from 'gsap';
import { ImageSequence } from '../ui/ImageSequence';

const PHONES = [
  { id: '14pro', name: 'iPhone 14 Pro', image: '/14 pro.jpg', rotate: -20, xOffset: -160, yOffset: 40, zIndex: 10, delay: 0.8 },
  { id: '15', name: 'iPhone 15', image: '/15 b.jpg', rotate: -8, xOffset: -50, yOffset: 10, zIndex: 20, delay: 1.0 },
  { id: '16', name: 'iPhone 16', image: '/16 b.jpg', rotate: 8, xOffset: 50, yOffset: 10, zIndex: 30, delay: 1.2 },
  { id: '17pm', name: 'iPhone 17 Pro Max', image: '/17 pm.jpg', rotate: 20, xOffset: 160, yOffset: 40, zIndex: 40, delay: 1.4 },
];

export function Hero() {
  const heroRef = useRef(null);
  const particlesRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const sequenceProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const sequenceOpacity = useTransform(scrollYProgress, [0.8, 1], [1, 0.2]);
  const sequenceScale = useTransform(scrollYProgress, [0.8, 1], [1, 0.95]);
  const sequenceFilter = useTransform(scrollYProgress, [0.8, 1], ["blur(0px)", "blur(12px)"]);

  // Create simple particle field
  useEffect(() => {
    if (!particlesRef.current) return;

    const particles = Array.from({ length: 50 }).map(() => {
      const el = document.createElement('div');
      el.className = 'absolute rounded-full bg-white';
      el.style.width = Math.random() * 3 + 'px';
      el.style.height = el.style.width;
      el.style.left = Math.random() * 100 + '%';
      el.style.top = Math.random() * 100 + '%';
      el.style.opacity = Math.random() * 0.5 + 0.1;
      return el;
    });

    particles.forEach(p => particlesRef.current?.appendChild(p));

    // Animate particles
    particles.forEach(p => {
      gsap.to(p, {
        y: -100 - Math.random() * 100,
        x: (Math.random() - 0.5) * 50,
        opacity: 0,
        duration: Math.random() * 3 + 2,
        repeat: -1,
        ease: 'none',
        delay: Math.random() * 2
      });
    });

    return () => {
      if (particlesRef.current) {
        particlesRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-[220vh] flex flex-col items-center justify-start overflow-clip pt-32"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="fixed inset-0 bg-pure-black" />
        <div className="fixed top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-glow/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="fixed bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px] mix-blend-screen" />
        <div ref={particlesRef} className="fixed inset-0 opacity-50" />
      </div>

      {/* Hero Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 flex flex-col items-center text-center px-4 sticky top-32"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 mb-4 drop-shadow-2xl">
            Cari iPhone Termurah <br /> Se-Malang Raya?
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-lg md:text-2xl font-medium text-titanium-silver mb-8 drop-shadow-lg">
            Terpercaya, 100% Original. <span className="text-white font-bold">izy store</span> aja.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button size="lg" className="group">
            Beli Sekarang
            <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Button>
          <Button variant="glass" size="lg" className="group">
            <Play className="mr-2 group-hover:scale-110 transition-transform" size={20} />
            Katalog Lengkap
          </Button>
        </motion.div>
      </motion.div>

      {/* Hero Image Sequence Background */}
      <motion.div 
        style={{ opacity: sequenceOpacity, scale: useTransform(scrollYProgress, [0, 1], [1.1, 0.9]), filter: sequenceFilter }}
        className="fixed inset-0 z-0 pointer-events-none flex items-center justify-center bg-pure-black"
      >
        <motion.div 
          className="relative w-full h-full flex items-center justify-center mt-24 md:mt-0"
          initial={{ y: 50, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <ImageSequence progress={sequenceProgress} frameCount={240} />
        </motion.div>
      </motion.div>
    </section>
  );
}