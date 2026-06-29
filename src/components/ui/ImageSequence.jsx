import React, { useEffect, useRef, useState } from 'react';
import { useMotionValueEvent } from 'framer-motion';

export function ImageSequence({ progress, frameCount = 192 }) {
  const [frameIndex, setFrameIndex] = useState(0);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const step = isMobile ? 3 : 1; // Load every 3rd frame on mobile
    const loadedImages = [];
    
    for (let i = 1; i <= frameCount; i += step) {
      const img = new Image();
      const frameNum = i.toString().padStart(3, '0');
      // Preload images into browser cache
      img.src = `/15pmfix/ezgif-frame-${frameNum}.jpg`;
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, [frameCount]);

  useMotionValueEvent(progress, "change", (latest) => {
    // Map scroll progress (0 to 1) to frame index
    const maxIndex = images.length > 0 ? images.length - 1 : frameCount - 1;
    const index = Math.max(0, Math.min(maxIndex, Math.round(latest * maxIndex)));
    setFrameIndex(index);
  });

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {images.length > 0 && (
        <div className="relative w-full max-w-5xl aspect-video flex items-center justify-center">
          <img 
            src={images[frameIndex]?.src} 
            alt="iPhone Sequence"
            className="w-full h-full object-contain mix-blend-screen"
          />
          {/* Vignette to blend the edges into the black background */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#000000_70%)] pointer-events-none" />
        </div>
      )}
    </div>
  );
}
