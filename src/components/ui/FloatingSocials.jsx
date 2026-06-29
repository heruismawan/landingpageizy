import React from 'react';
import { MessageCircle } from 'lucide-react';

const InstagramIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const TikTokIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
  </svg>
);

export const FloatingSocials = () => {
  return (
    <div className="fixed right-4 bottom-4 md:right-6 md:bottom-6 z-50 flex flex-col gap-2 md:gap-3">
      <a 
        href="https://wa.me/6281999094111" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.5)] group"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-5 h-5 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
      </a>
      <a 
        href="https://www.instagram.com/izystore.official?igsh=azRhZ2JwMjYwZjlt" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.5)] group"
        aria-label="Instagram"
      >
        <InstagramIcon className="w-5 h-5 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
      </a>
      <a 
        href="https://www.tiktok.com/@izy_store?_r=1&_t=ZS-97cdhzYmDq8" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.5)] group"
        aria-label="TikTok"
      >
        <TikTokIcon className="w-5 h-5 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
      </a>
    </div>
  );
};
