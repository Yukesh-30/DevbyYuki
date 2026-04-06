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

const Typewriter = ({ texts, speed = 150, delayBetween = 2000 }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const text = texts[currentTextIndex];
    let timer;

    if (isDeleting) {
      if (currentText === '') {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      } else {
        timer = setTimeout(() => {
          setCurrentText(text.substring(0, currentText.length - 1));
        }, speed / 2);
      }
    } else {
      if (currentText === text) {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, delayBetween);
      } else {
        timer = setTimeout(() => {
          setCurrentText(text.substring(0, currentText.length + 1));
        }, speed);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTextIndex, texts, speed, delayBetween]);

  return (
    <span className="inline-flex items-center">
      {currentText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        className="ml-1 w-[2px] h-[0.8em] bg-current"
      />
    </span>
  );
};

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
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
        className="absolute top-[22vw] md:top-[18vw] left-6 md:left-12 pointer-events-none z-50 text-brand-orange flex flex-col md:flex-row md:items-baseline gap-4 md:gap-8"
      >
        <h2 className="text-[12vw] md:text-[8vw] font-playfair font-light leading-none tracking-tight">
          yukesh
        </h2>
        
        <div className="text-xl md:text-3xl font-betania font-light tracking-tight opacity-70 mb-2 md:mb-0">
          <Typewriter 
            texts={["Software Developer", "Photographer", "Designer"]} 
            speed={100}
            delayBetween={2500}
          />
        </div>
      </motion.div>    </section>
  );
};

export default CanvasHero;
