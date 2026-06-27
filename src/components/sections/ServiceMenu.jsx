import React from 'react';
import { motion } from 'framer-motion';
import { Battery, Smartphone, Wrench, Droplets, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

const services = [
  {
    icon: <Battery className="w-6 h-6 text-blue-400" />,
    title: 'Ganti Baterai',
    description: 'Baterai original, proses cepat bisa ditunggu.'
  },
  {
    icon: <Smartphone className="w-6 h-6 text-purple-400" />,
    title: 'Ganti LCD / Kaca',
    description: 'Layar retak atau bergaris? Kembali mulus seperti baru.'
  },
  {
    icon: <Droplets className="w-6 h-6 text-blue-300" />,
    title: 'Water Damage',
    description: 'Kemasukan air? Teknisi kami siap menyelamatkan datamu.'
  },
  {
    icon: <Wrench className="w-6 h-6 text-gray-400" />,
    title: 'Mati Total / Logic Board',
    description: 'Pengecekan mendalam untuk kerusakan mesin berat.'
  }
];

export function ServiceMenu() {
  return (
    <section className="relative w-full min-h-screen py-24 bg-pure-black overflow-hidden border-t border-white/5 flex items-center">
      
      {/* 3D Teardown Background Model (Hidden on Mobile for Performance) */}
      <div className="absolute inset-0 z-0 h-full w-full hidden md:flex items-center justify-center">
        <model-viewer 
          alt="3D Teardown Model" 
          src="/iPhone-12-Teardown.glb" 
          ar 
          shadow-intensity="1" 
          camera-controls 
          touch-action="pan-y"
          interaction-prompt="none"
          auto-rotate
          rotation-per-second="10deg"
          disable-zoom
          autoplay
          animation-name="*"
          camera-orbit="-20deg 75deg 250%"
          min-camera-orbit="auto auto 250%"
          max-camera-orbit="auto auto 250%"
          style={{ width: '100%', height: '100%', backgroundColor: 'transparent', outline: 'none' }}
        ></model-viewer>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pointer-events-none">
        <div className="w-full lg:w-1/2">
          
          {/* Left Column: Menu Service */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="pointer-events-auto"
          >
            <h2 className="text-sm uppercase tracking-widest text-blue-400 font-semibold mb-3">
              izy repair
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 drop-shadow-lg">
              Layanan Servis Terpercaya.
            </h3>
            <p className="text-gray-300 text-lg mb-10 max-w-lg drop-shadow-md">
              Selain menjual iPhone termurah se-Malang Raya, izy store juga punya layanan servis profesional. Dari ganti baterai sampai kerusakan mesin, biar kami yang urus.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {services.map((service, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-6 rounded-3xl backdrop-blur-sm bg-black/40 border border-white/10 hover:bg-black/60 hover:border-white/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-4 border border-white/5">
                    {service.icon}
                  </div>
                  <h4 className="text-white font-semibold text-lg mb-2">{service.title}</h4>
                  <p className="text-gray-300 text-sm">{service.description}</p>
                </motion.div>
              ))}
            </div>

            <Button size="lg" className="group backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 text-white">
              Konsultasi Kerusakan Sekarang
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
          </motion.div>

        </div>
      </div>

      {/* No helper text needed since it's background only */}
    </section>
  );
}
