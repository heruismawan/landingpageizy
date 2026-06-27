import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MobileHome } from './screens/MobileHome';
import { MobileBottomNav } from './MobileBottomNav';

export function MobileAppLayout() {
  return (
    <div className="min-h-screen bg-[#050505] flex justify-center items-center font-sans text-white">
      {/* Phone Frame Container */}
      <div className="relative w-full max-w-[430px] h-[100dvh] bg-pure-black overflow-hidden sm:rounded-[3rem] sm:h-[932px] sm:border-[8px] sm:border-gray-900 shadow-2xl flex flex-col">
        
        {/* Dynamic Island / Notch Placeholder (Visible on Desktop) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-3xl z-50 hidden sm:block"></div>
        
        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto pb-20 no-scrollbar relative">
          <Routes>
            <Route path="/" element={<MobileHome />} />
          </Routes>
        </div>

        {/* Bottom Navigation */}
        <MobileBottomNav />
      </div>
    </div>
  );
}
