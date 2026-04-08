import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CARDS = [
  {
    id: 1,
    client: "Sugar Bliss",
    rating: 5,
    quote: "The brand identity captured the essence of our candies perfectly. It's sweet, vibrant, and exactly what we needed.",
    bgColor: "#E6A5C1", // Soft Pink
    textColor: "#2D1B22",
    images: [
      "https://images.unsplash.com/photo-1581798459219-318e76aecc7b?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1528498033373-3c6c08e93d79?auto=format&fit=crop&q=80&w=400"
    ]
  },
  {
    id: 2,
    client: "Candy Craft",
    rating: 5,
    quote: "Professionalism meets creativity. Our sales doubled after the new website launch. Truly a sweet experience!",
    bgColor: "#7FB5B5", // Muted Teal
    textColor: "#1A2E2E",
    images: [
      "https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1575224300306-1b8da5bb0e62?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1470468969717-61d5d54fd036?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1582211594533-268f4f1ed07a?auto=format&fit=crop&q=80&w=400"
    ]
  },
  {
    id: 3,
    client: "Sweet Treats Co.",
    rating: 5,
    quote: "They understood our vision from day one. The visuals are so crisp you can almost taste the sugar.",
    bgColor: "#D4A373", // Caramel/Orange
    textColor: "#3A2A1A",
    images: [
      "https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1548685913-fe6678babe8d?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1499195333224-3ce974eecfb4?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&q=80&w=400"
    ]
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
        <div className="relative w-full max-w-4xl h-[380px] md:h-[480px] flex items-center justify-center">
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
                  className={`absolute w-full h-[330px] md:h-[430px] p-6 md:p-10 flex flex-col md:flex-row gap-8 shadow-2xl pointer-events-auto cursor-default overflow-hidden`}
                >
                  {/* Left Side: Text */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-xl md:text-2xl font-betania mb-2">{card.client}</p>
                      <div className="flex gap-1 mb-8">
                        {[...Array(card.rating)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <h4 className="text-2xl md:text-3xl font-playfair leading-tight">
                        "{card.quote}"
                      </h4>
                    </div>
                  </div>

                  {/* Right Side: Image Grid */}
                  <div className="flex-1 grid grid-cols-2 gap-4 h-full">
                    <div className="space-y-4">
                       <img src={card.images[0]} alt="Work 1" className="w-full h-[60%] object-cover rounded-2xl shadow-lg" />
                       <img src={card.images[1]} alt="Work 2" className="w-full h-[35%] object-cover rounded-2xl shadow-lg" />
                    </div>
                    <div className="space-y-4 pt-8">
                       <img src={card.images[2]} alt="Work 3" className="w-full h-[35%] object-cover rounded-2xl shadow-lg" />
                       <img src={card.images[3]} alt="Work 4" className="w-full h-[60%] object-cover rounded-2xl shadow-lg" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <div className="flex gap-4 -mt-48 md:mt-20">
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
