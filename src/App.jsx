import React, { useEffect, useState, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import CustomCursor from './components/ui/CustomCursor';
import Sidebar from './components/layout/Sidebar';
import MobileNav from './components/layout/MobileNav';
import Hero from './components/sections/CanvasHero';
import WorkSlider from './components/sections/WorkSlider';
import AgencyStory from './components/sections/AgencyStory';
import ProductionTiers from './components/sections/ProductionTiers';
import Footer from './components/sections/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import instagramQR from './assets/Insta.jpeg';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showInstaQR, setShowInstaQR] = useState(false);
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const handleNavigate = (sectionId) => {
    if (sectionId === activeSection || isTransitioning) return;

    setIsTransitioning(true);

    // Wait for the "Expand" phase of the transition (matching Sidebar animation timing)
    setTimeout(() => {
      setActiveSection(sectionId);
      if (lenisRef.current) {
        lenisRef.current.scrollTo(0, { immediate: true });
      }

      // Wait for the "Retract" phase to complete
      setTimeout(() => {
        setIsTransitioning(false);
      }, 1000);
    }, 800);
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'hero': return <Hero onNavigate={handleNavigate} onOpenInstaQR={() => setShowInstaQR(true)} />;
      case 'work': return <WorkSlider onOpenInstaQR={() => setShowInstaQR(true)} />;
      case 'about': return <AgencyStory onOpenInstaQR={() => setShowInstaQR(true)} />;
      case 'skills': return <ProductionTiers onOpenInstaQR={() => setShowInstaQR(true)} />;
      case 'contact': return <Footer onOpenInstaQR={() => setShowInstaQR(true)} />;
      default: return <Hero onNavigate={handleNavigate} onOpenInstaQR={() => setShowInstaQR(true)} />;
    }
  };

  return (
    <main className="min-h-screen relative bg-brand-cream pr-0 lg:pr-64">
      <CustomCursor />

      {/* Persistent Branding Navigation */}
      <div className="fixed top-8 left-6 md:left-12 z-[150] flex flex-col gap-4 mix-blend-difference text-white pointer-events-none">
        <motion.button
          onClick={() => handleNavigate('hero')}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="pointer-events-auto flex flex-col items-start group"
        >
          <span className="font-playfair italic text-3xl md:text-4xl tracking-tighter leading-none">
            devby<span className="text-white">Yuki</span>
          </span>
          <div className="h-px w-0 group-hover:w-full bg-white transition-all duration-500 mt-1" />
        </motion.button>
      </div>


      {/* Desktop Sidebar - Hidden on Mobile */}

      <div className="hidden lg:block">
        <Sidebar
          onNavigate={handleNavigate}
          activeSection={activeSection}
          isTransitioning={isTransitioning}
        />
      </div>

      {/* Mobile Navigation - Visible on Mobile */}
      <MobileNav
        onNavigate={handleNavigate}
        activeSection={activeSection}
      />

      <div className="w-full relative min-h-screen">
        {renderSection()}
      </div>

      {/* Instagram QR Modal */}
      <AnimatePresence>
        {showInstaQR && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-8"
          >
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowInstaQR(false)}
              className="absolute inset-0 bg-brand-dark/80 backdrop-blur-xl cursor-crosshair" 
            />
            
            {/* Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-[400px] bg-white p-6 md:p-8 rounded-[2rem] shadow-2xl overflow-hidden"
            >
              {/* Close Button */}
              <button 
                onClick={() => setShowInstaQR(false)}
                className="absolute top-4 right-4 p-2 text-brand-dark/40 hover:text-brand-dark transition-colors"
                aria-label="Close"
              >
                <X size={24} />
              </button>

              <div className="flex flex-col items-center gap-6">
                <div className="text-center">
                  <h3 className="font-playfair italic text-2xl text-brand-dark mb-1">Let's Connect</h3>
                  <p className="font-body text-[10px] tracking-[0.2em] uppercase text-brand-dark/40">Scan to follow @yukesh_30</p>
                </div>

                <div className="w-full aspect-square relative bg-neutral-50 rounded-2xl overflow-hidden flex items-center justify-center p-2">
                  <img 
                    src={instagramQR} 
                    alt="Instagram QR Code" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}

export default App;
