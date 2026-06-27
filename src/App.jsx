import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/ui/Navbar'
import { Hero } from './components/sections/Hero'
import { BentoCatalog } from './components/sections/BentoCatalog'
import { ServiceMenu } from './components/sections/ServiceMenu'
import { Comparison } from './components/sections/Comparison'
import { MobileAppLayout } from './components/mobile/MobileAppLayout'
import Lenis from 'lenis'

function LandingPage() {
  useEffect(() => {
    // Initialize smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className="min-h-screen bg-pure-black text-white selection:bg-blue-glow selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <BentoCatalog />
        <ServiceMenu />
        <Comparison />
        
        {/* Footer Placeholder */}
        <footer className="py-12 border-t border-white/10 text-center text-gray-500">
           <p>izystore 2026. Apple Store of the Future concept.</p>
        </footer>
      </main>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/mobile/*" element={<MobileAppLayout />} />
    </Routes>
  )
}

export default App
