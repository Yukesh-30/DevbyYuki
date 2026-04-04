import React, { useEffect, useState, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import CustomCursor from './components/ui/CustomCursor';
import Sidebar from './components/layout/Sidebar';
import Hero from './components/sections/Hero';
import WorkSlider from './components/sections/WorkSlider';
import AgencyStory from './components/sections/AgencyStory';
import ProductionTiers from './components/sections/ProductionTiers';
import Footer from './components/sections/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isTransitioning, setIsTransitioning] = useState(false);
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
      case 'hero': return <Hero />;
      case 'work': return <WorkSlider />;
      case 'about': return <AgencyStory />;
      case 'services': return <ProductionTiers />;
      case 'contact': return <Footer />;
      default: return <Hero />;
    }
  };

  return (
    <main className="min-h-screen relative overflow-hidden bg-brand-cream pr-32 md:pr-48 lg:pr-64">
      <CustomCursor />
      
      <div className="w-full relative min-h-screen">
        {renderSection()}
      </div>

      <Sidebar 
        onNavigate={handleNavigate} 
        activeSection={activeSection} 
        isTransitioning={isTransitioning}
      />
    </main>
  );
}

export default App;
