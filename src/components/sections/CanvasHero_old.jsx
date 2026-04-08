import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import playfulImg from '../../assets/playful.png';
import premiumImg from '../../assets/premium.png';
import creativeThinkerImg from '../../assets/creative_thinker.png';

const slides = [
  {
    id: 'playful',
    text1: 'Play',
    text2: 'ful',
    image: playfulImg,
    color: 'text-brand-dark',
    gapWidth: 'w-[15vw] md:w-[12vw]',
    gapHeight: 'h-[15vw] md:h-[12vw]', // gentle corners
    rounded: 'rounded-[20px]',
    isO: false
  },
  {
    id: 'creative',
    text1: 'Creative',
    text2: 'Soul',
    image: creativeThinkerImg,
    color: 'text-brand-dark',
    fontSize: 'text-[10vw] md:text-[8vw]', 
    gapWidth: 'w-[8vw] md:w-[6vw]',
    gapHeight: 'h-[18vw] md:h-[15vw]', 
    isO: false
  },
  {
    id: 'premium',
    text1: 'Premium!',
    text2: '',
    image: premiumImg,
    color: 'text-brand-dark',
    fontSize: 'text-[14vw] md:text-[12vw]',
    gapWidth: 'w-[18vw] md:w-[14vw]',
    gapHeight: 'h-[14vw] md:h-[11vw]',
    isO: false
  }
];

const SlideItem = ({ slide, onComplete }) => {
  const [phase, setPhase] = useState(0);


  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 800);
    const t2 = setTimeout(() => setPhase(2), 3300);
    const t3 = setTimeout(() => setPhase(3), 4100);
    const t4 = setTimeout(() => onComplete(), 5100);

    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, [onComplete]);

  return (
    <div className={`absolute top-0 left-0 w-full flex flex-col items-start justify-start pt-10 md:pt-16 px-6 md:px-12 ${slide.color}`}>
      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{
          opacity: phase < 3 ? 1 : 0,
          scale: phase < 3 ? 1 : 1.05
        }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        className={`flex items-center ${slide.fontSize || 'text-[16vw] md:text-[14vw]'} font-display leading-[0.85] tracking-[-0.04em] whitespace-nowrap drop-shadow-sm`}
      >
        <span>{slide.text1}</span>

        <div
          className={`relative overflow-hidden flex items-center justify-center transition-all duration-1000 ease-[0.16,1,0.3,1] ${
            phase >= 2 ? 'w-0 mx-0 opacity-0' : `mx-1 md:mx-2 ${slide.gapWidth}`
          } ${slide.gapHeight} ${slide.rounded || ''}`}
        >
          <motion.img
            src={slide.image}
            initial={{ opacity: 0, scale: 1.5, y: '50%' }}
            animate={{
              opacity: phase === 1 ? 1 : 0,
              scale: phase === 1 ? 1 : (phase >= 2 ? 0.8 : 1.5),
              y: phase === 1 ? '0%' : (phase >= 2 ? '-20%' : '50%')
            }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className={`w-full h-full object-contain ${slide.rounded}`}
          />
        </div>

        <span>{slide.text2}</span>
      </motion.h1>
    </div>
  );
};

const CanvasHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative w-full h-screen bg-brand-cream overflow-hidden">

      {/* Dynamic Slide Container Sequence */}
      <AnimatePresence mode="wait">
        <SlideItem
          key={slides[currentIndex].id}
          slide={slides[currentIndex]}
          onComplete={handleNextSlide}
        />
      </AnimatePresence>

      {/* Final Branding Text anchored gracefully at the bottom */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
        className="absolute bottom-10 md:bottom-20 left-6 md:left-12 flex flex-col pointer-events-auto z-50"
      >
        <h2 className="text-[12vw] md:text-[8vw] lg:text-[7vw] font-display leading-[0.85] tracking-[-0.04em] uppercase max-w-4xl text-brand-orange mix-blend-multiply">
          production<br className="hidden md:block" /> partners
        </h2>

        <div className="mt-8 flex flex-col md:flex-row md:items-start md:gap-10">
          <p className="text-lg md:text-2xl font-medium leading-relaxed max-w-xl opacity-80 text-brand-dark">
            Full service creative agency that provides a one stop shop for all social media content needs.
          </p>
          <div className="mt-6 md:mt-0">
            <button className="px-10 py-5 bg-brand-dark text-white font-bold rounded-full text-sm md:text-lg uppercase tracking-wider hover:bg-brand-orange transition-all duration-300 transform hover:-translate-y-1 w-fit shadow-xl">
              Let's chat
            </button>
          </div>
        </div>
      </motion.div>

    </section>
  );
};

export default CanvasHero;
