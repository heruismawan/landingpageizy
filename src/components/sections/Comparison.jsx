import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check } from 'lucide-react';
import { Button } from '../ui/Button';

const PHONES = [
  { id: '16pro', name: 'iPhone 16 Pro', chip: 'A18 Pro', camera: '48MP Pro', battery: '27 jam', screen: '6.3" ProMotion', price: 'Rp 20.999.000' },
  { id: '16', name: 'iPhone 16', chip: 'A18', camera: '48MP Advanced', battery: '22 jam', screen: '6.1" OLED', price: 'Rp 16.499.000' },
  { id: '15pro', name: 'iPhone 15 Pro', chip: 'A17 Pro', camera: '48MP Pro', battery: '23 jam', screen: '6.1" ProMotion', price: 'Rp 18.999.000' },
  { id: '15', name: 'iPhone 15', chip: 'A16 Bionic', camera: '48MP Advanced', battery: '20 jam', screen: '6.1" OLED', price: 'Rp 13.999.000' }
];

export function Comparison() {
  const [model1, setModel1] = useState(PHONES[0]);
  const [model2, setModel2] = useState(PHONES[1]);
  
  const [openDropdown, setOpenDropdown] = useState(null); // 1 or 2

  const handleSelect = (slot, phone) => {
    if (slot === 1) setModel1(phone);
    else setModel2(phone);
    setOpenDropdown(null);
  };

  const PhoneColumn = ({ model, slot }) => (
    <div className="flex flex-col items-center w-full max-w-xs relative">
      <div className="w-32 h-40 bg-gradient-to-b from-gray-800 to-black rounded-3xl border-2 border-gray-700 shadow-2xl mb-8 flex items-center justify-center">
         <span className="text-white/20 font-bold text-lg">{model.name}</span>
      </div>
      
      {/* Dropdown Selector */}
      <div className="relative w-full mb-12">
        <button 
          onClick={() => setOpenDropdown(openDropdown === slot ? null : slot)}
          className="w-full flex items-center justify-between px-4 py-3 glassmorphism-dark rounded-xl text-white font-medium hover:bg-white/5 transition-colors"
        >
          {model.name}
          <ChevronDown size={20} className={`transition-transform ${openDropdown === slot ? 'rotate-180' : ''}`} />
        </button>
        
        <AnimatePresence>
          {openDropdown === slot && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 right-0 mt-2 p-2 glassmorphism-dark border border-white/10 rounded-xl z-30 flex flex-col gap-1 shadow-2xl"
            >
              {PHONES.map(phone => (
                <button
                  key={phone.id}
                  onClick={() => handleSelect(slot, phone)}
                  className="flex items-center justify-between px-3 py-2 text-left text-sm text-white hover:bg-white/10 rounded-lg transition-colors"
                >
                  {phone.name}
                  {model.id === phone.id && <Check size={16} className="text-blue-glow" />}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex flex-col w-full gap-8">
        <div className="flex flex-col items-center text-center">
          <span className="text-sm text-gray-400 mb-1">Mulai dari</span>
          <span className="text-xl font-bold text-white">{model.price}</span>
          <Button size="sm" variant="primary" className="mt-4 w-full">Beli</Button>
        </div>

        <div className="w-full h-px bg-white/10 my-4" />

        <div className="flex flex-col items-center text-center gap-6">
          <div>
            <span className="text-2xl font-bold text-white block mb-1">{model.screen}</span>
            <span className="text-sm text-gray-400">Layar Super Retina XDR</span>
          </div>
          <div>
            <span className="text-2xl font-bold text-white block mb-1">{model.chip}</span>
            <span className="text-sm text-gray-400">Chip</span>
          </div>
          <div>
            <span className="text-2xl font-bold text-white block mb-1">{model.camera}</span>
            <span className="text-sm text-gray-400">Sistem Kamera</span>
          </div>
          <div>
            <span className="text-2xl font-bold text-white block mb-1">{model.battery}</span>
            <span className="text-sm text-gray-400">Pemutaran video hingga</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-32 px-4 bg-pure-black relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tighter">
            Pilih iPhone yang <br className="hidden md:block"/> tepat untuk Anda.
          </h2>
          <p className="text-xl text-gray-400">Bandingkan fitur dan temukan mana yang paling pas.</p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-start gap-12 md:gap-24 relative">
           <PhoneColumn model={model1} slot={1} />
           
           <div className="hidden md:block absolute top-1/4 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2" />
           
           <PhoneColumn model={model2} slot={2} />
        </div>
      </div>
    </section>
  );
}
