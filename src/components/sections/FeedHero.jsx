import React from 'react';
import { motion } from 'framer-motion';
import mockupPortrait from '../../assets/mockup_portrait.png';

const LetterWithImage = ({ letter, imageUrl }) => {
  return (
    <span className="relative inline-block align-middle">
      <span className="opacity-0">{letter}</span>
      <span className="absolute inset-0 flex items-center justify-center">
        <motion.div 
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            duration: 0.8, 
            ease: [0.16, 1, 0.3, 1],
            delay: 0.5
          }}
          className="w-[0.9em] h-[0.9em] rounded-full overflow-hidden border-[0.05em] border-brand-dark"
        >
          <img 
            src={imageUrl} 
            alt="Portrait" 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </span>
    </span>
  );
};

const FeedHero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1], // Custom power ease
      },
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-brand-cream overflow-hidden">
      <div className="section-container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-0"
        >
          {/* First Line: People first */}
          <motion.div variants={itemVariants} className="flex items-baseline flex-wrap">
            <h1 className="text-[12vw] md:text-[10vw] font-display leading-[0.85] tracking-[-0.04em] uppercase">
              Pe<span><LetterWithImage letter="o" imageUrl={mockupPortrait} /></span>ple 
              <span className="ml-[0.2em]">first</span>
            </h1>
          </motion.div>

          {/* Second Line: production */}
          <motion.div variants={itemVariants}>
            <h1 className="text-[12vw] md:text-[10vw] font-display leading-[0.85] tracking-[-0.04em] uppercase">
              production
            </h1>
          </motion.div>

          {/* Third Line: partners */}
          <motion.div variants={itemVariants}>
            <h1 className="text-[12vw] md:text-[10vw] font-display leading-[0.85] tracking-[-0.04em] uppercase">
              partners
            </h1>
          </motion.div>
        </motion.div>

        {/* Subtext and Bottom elements */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-16 max-w-2xl"
        >
          <p className="text-xl md:text-2xl font-medium leading-relaxed opacity-80">
            Full service creative agency that provides a one stop shop for all social media content needs.
          </p>
          
          <div className="mt-10 flex gap-6 items-center">
            <button className="px-10 py-5 bg-brand-orange text-white font-bold rounded-full text-lg uppercase tracking-wider hover:bg-brand-dark transition-all duration-300 transform hover:scale-105">
              Let's chat
            </button>
            
            <div className="hidden md:flex flex-col">
              <span className="text-xs uppercase tracking-widest font-bold opacity-50 mb-1">Based in</span>
              <span className="text-sm font-bold">New York City</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Accents (Subtle) */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-orange/5 -z-0 pointer-events-none" />
    </section>
  );
};

export default FeedHero;
