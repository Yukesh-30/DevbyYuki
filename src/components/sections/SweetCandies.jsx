import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';

const CARDS = [
  {
    id: 1,
    client: "Project One",
    rating: 5,
    quote: "Do and die",
    bgColor: "#E6A5C1", 
    textColor: "#2D1B22",
    images: [img1, img1, img1, img1]
  },
  {
    id: 2,
    client: "Project Two",
    rating: 5,
    quote: "The way to build billion-dollar companies is to first build something people love",
    bgColor: "#7FB5B5", 
    textColor: "#1A2E2E",
    images: [img2, img2, img2, img2]
  },
  {
    id: 3,
    client: "Project Three",
    rating: 5,
    quote: "If the eagles don't fly for four days, it doesn't mean the sky belongs to the pigeons.",
    bgColor: "#D4A373", 
    textColor: "#3A2A1A",
    images: [img3, img3, img3, img3]
  },
  {
    id: 4,
    client: "Project Four",
    rating: 5,
    quote: "If you define the problem correctly, you almost have the solution.",
    bgColor: "#CEC2B1", 
    textColor: "#2D261F",
    images: [img4, img4, img4, img4]
  }
];

const SweetCandies = () => {
  const [cards, setCards] = useState(CARDS);
  const [isAnimating, setIsAnimating] = useState(false);

  const moveNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    // Move the first card to the end of the stack
    setCards((prev) => {
      const [first, ...rest] = prev;
      return [...rest, first];
    });

    setTimeout(() => setIsAnimating(false), 2200);
  };

  const movePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    // Move the last card to the beginning of the stack
    setCards((prev) => {
      const last = prev[prev.length - 1];
      const rest = prev.slice(0, -1);
      return [last, ...rest];
    });

    setTimeout(() => setIsAnimating(false), 2200);
  };

  return (
    <section className="relative w-full pt-10 pb-12 px-6 md:px-24 bg-brand-cream overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Topic Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h3 className="text-brand-dark text-5xl md:text-7xl font-playfair italic">Sweet Candies</h3>
        </motion.div>

        {/* Card Stack Container */}
        <div className="relative w-full max-w-4xl h-[450px] md:h-[480px] flex items-center justify-center">
          <AnimatePresence mode="popLayout">
            {cards.map((card, index) => {
              const isTop = index === 0;
              const isSecond = index === 1;
              const isThird = index === 2;
              
              return (
                <motion.div
                  key={card.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 50 }}
                  animate={{
                    opacity: 1,
                    scale: 1 - index * 0.05,
                    y: index * -20,
                    zIndex: cards.length - index,
                  }}
                  exit={{ 
                    opacity: 0, 
                    y: 100, 
                    scale: 0.8,
                    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 40,
                    damping: 20,
                    mass: 1.5,
                    duration: 2.2,
                    ease: [0.32, 0.72, 0, 1]
                  }}
                  style={{
                    backgroundColor: card.bgColor,
                    color: card.textColor,
                  }}
                  className={`absolute w-full h-[400px] md:h-[430px] p-6 md:p-10 flex flex-col md:flex-row gap-4 md:gap-8 shadow-2xl pointer-events-auto cursor-default overflow-hidden rounded-3xl`}
                >
                  {/* Left Side: Text */}
                  <div className="flex-1 flex flex-col justify-center">
                    <div>
                      <h4 className="text-2xl md:text-3xl font-playfair leading-tight">
                        "{card.quote}"
                      </h4>
                    </div>
                  </div>

                  {/* Right Side: Image */}
                  <div className="flex-1 h-32 md:h-full w-full min-h-0">
                    <img src={card.images[0]} alt="Work" className="w-full h-full object-cover shadow-lg " />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <div className="flex gap-4 mt-8 md:mt-20 relative z-20">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={movePrev}
            className="w-12 h-12 bg-[#1a1a1a] border border-white/10 flex items-center justify-center text-white hover:bg-brand-orange hover:text-brand-dark transition-colors duration-300 rounded-lg"
          >
            <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={moveNext}
            className="w-12 h-12 bg-[#1a1a1a] border border-white/10 flex items-center justify-center text-white hover:bg-brand-orange hover:text-brand-dark transition-colors duration-300 rounded-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.button>
        </div>

      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
          <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-brand-orange/30 blur-[120px] rounded-full" />
          <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-[#E6A5C1]/20 blur-[150px] rounded-full" />
      </div>
    </section>
  );
};

export default SweetCandies;
