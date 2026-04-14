import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import playfulImg from '../../assets/playful.png';
import premiumImg from '../../assets/premium.png';
import creativeThinkerImg from '../../assets/creative_thinker.png';
// NOTE: Make sure to save the requested image as flower_head.jpg in the assets folder!
import flowerHeadImg from '../../assets/Home.jpg';
import SweetCandies from './SweetCandies';
import MinimalFooter from '../layout/MinimalFooter';

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
    <div className={`absolute top-0 left-0 w-full flex flex-col items-start justify-start pt-28 md:pt-16 px-6 md:px-12 ${slide.color}`}>
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
          className={`relative overflow-hidden flex items-center justify-center transition-all duration-1000 ease-[0.16,1,0.3,1] ${phase >= 2 ? 'w-0 mx-0 opacity-0' : `mx-1 md:mx-2 ${slide.gapWidth}`
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

const CanvasHero = ({ onNavigate, onOpenInstaQR }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-minimal');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-brand-cream">
      <section className="relative w-full min-h-screen bg-brand-cream">

      {/* Dynamic Slide Container Sequence */}
      <AnimatePresence mode="wait">
        <SlideItem
          key={slides[currentIndex].id}
          slide={slides[currentIndex]}
          onComplete={handleNextSlide}
        />
      </AnimatePresence>

      {/* DESKTOP VERSION: Complex absolute-positioned layout */}
       <motion.div
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
         className="hidden md:flex absolute top-[16vw] left-24 z-50 text-brand-orange flex-col items-start gap-2"
       >
         <div className="flex flex-col md:flex-row md:items-baseline md:gap-8">
           <h2 className="text-[8vw] font-playfair font-light leading-none tracking-tight pointer-events-none">
             yukesh
           </h2>
 
           <div className="flex items-center gap-6">
             <div className="text-3xl font-betania font-light tracking-tight opacity-70 mb-0 pointer-events-none min-w-[320px]">
             </div>
             
             <img 
               src={flowerHeadImg} 
               alt="Hero Illustration" 
               className="h-[350px] w-auto object-contain border border-brand-orange/40 aspect-square ml-4 transform translate-y-8"
             />
           </div>
         </div>
 
         <div className="flex flex-col gap-4 max-w-2xl -mt-32 relative z-10">
           <motion.p 
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 0.8, x: 0 }}
             transition={{ duration: 1.2, delay: 1.2 }}
             className="text-2xl font-betania italic leading-relaxed font-light tracking-wide text-black py-2 border-l-2 border-brand-dark/30 pl-6"
           >
             "Code with purpose, design with heart, <br />
             and capture the world with kindness."
           </motion.p>
 
           <motion.button
             whileHover={{ scale: 1.05, x: 10 }}
             whileTap={{ scale: 0.95 }}
             onClick={scrollToContact}
             className="group flex items-center gap-3 mt-4 w-fit px-6 py-2.5 bg-brand-orange border border-brand-orange text-brand-dark font-betania text-xl hover:bg-transparent hover:border-brand-dark/40 transition-all duration-500 rounded-full"
           >
             <span>Let's Chat</span>
             <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
             </svg>
           </motion.button>
         </div>
       </motion.div>

       {/* MOBILE VERSION: Simple vertical stack for clean UI */}
       <motion.div
         initial={{ opacity: 0, y: 30 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 1, delay: 0.5 }}
         className="flex md:hidden relative z-40 flex-col items-center px-6 pt-56 pb-20 w-full text-center gap-12"
       >
           <img 
            src={flowerHeadImg} 
            alt="Hero Illustration" 
            className="w-[85vw] h-auto object-contain"
          />

          <div className="flex flex-col items-center gap-4">
            <h2 className="text-6xl font-playfair font-light text-brand-orange leading-none tracking-tight">
              yukesh
            </h2>
            
            <p className="text-lg font-betania italic leading-relaxed font-light text-black px-4 pt-4 border-t border-brand-dark/10">
              "Code with purpose, design with heart, and capture the world with kindness."
            </p>

            <button
              onClick={scrollToContact}
              className="flex items-center gap-3 mt-6 px-8 py-3 bg-brand-orange text-brand-dark font-betania text-lg rounded-full active:scale-95 transition-transform"
            >
              <span>Let's Chat</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
       </motion.div>
      </section>

      {/* Sweet Candies Section */}
      <SweetCandies />
      <MinimalFooter onOpenInstaQR={onOpenInstaQR} />
    </div>
  );
};

export default CanvasHero;
