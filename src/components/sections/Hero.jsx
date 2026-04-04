import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative min-h-screen py-24 flex flex-col justify-center overflow-hidden">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative z-10"
                >
                    <h1 className="text-7xl md:text-[10rem] font-display font-black leading-[0.8] mb-8 tracking-[-0.05em]">
                        People<br />
                        <span className="text-brand-orange">First</span><br />
                        Creative.
                    </h1>
                </motion.div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
                    <motion.div 
                        initial={{ scale: 1.2, opacity: 0 }}
                        animate={{ scale: 1, opacity: 0.1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="absolute top-1/4 right-0 w-1/3 aspect-square bg-brand-pink rounded-full blur-[120px]" 
                    />
                    <motion.div 
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 0.15 }}
                        transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
                        className="absolute bottom-1/4 left-0 w-1/2 aspect-square bg-brand-teal rounded-full blur-[150px]" 
                    />
                </div>

                <div className="flex flex-col md:flex-row items-end justify-between mt-12 gap-12">
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="max-w-md text-xl md:text-2xl font-medium"
                    >
                        We build brands that breathe, products that pop, and experiences that stick. No fluff, just fire.
                    </motion.p>
                    
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-brand-dark text-brand-cream font-bold rounded-full text-lg uppercase tracking-widest hover:bg-brand-orange transition-colors duration-300"
                    >
                        Start a project
                    </motion.button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
