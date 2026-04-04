import React from 'react';
import { motion } from 'framer-motion';

const AgencyStory = () => {
    const circles = [
        { type: 'image', src: 'https://images.unsplash.com/photo-1522071823991-b9671f903f7f?auto=format&fit=crop&q=80&w=400', color: '#FAF0E6' },
        { type: 'text', content: 'Story First', color: '#82B3A9' },
        { type: 'image', src: 'https://images.unsplash.com/photo-1542744094-11910086396e?auto=format&fit=crop&q=80&w=400', color: '#191919' },
        { type: 'text', content: 'Bold Design', color: '#E77C50' },
        { type: 'image', src: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&fit=crop&q=80&w=400', color: '#D36A83' },
        { type: 'text', content: 'Pure Magic', color: '#F0B343' },
        { type: 'image', src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=400', color: '#FAF0E6' },
        { type: 'text', content: 'We Deliver', color: '#82B3A9' },
    ];

    return (
        <section className="py-24 bg-brand-dark min-h-screen" id="about">
            <div className="section-container">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <h2 className="text-5xl md:text-8xl font-black text-brand-cream mb-8 tracking-[-0.05em]">Not Just<br />An Agency</h2>
                        <p className="text-xl md:text-2xl text-brand-cream/80 max-w-lg mb-8 font-medium">
                            We are a collective of creators, thinkers, and explorers. We don't just build websites; we design digital experiences that resonate with the human heart.
                        </p>
                    </div>
                    
                    <div className="lg:w-1/2 grid grid-cols-2 md:grid-cols-4 gap-4">
                        {circles.map((circle, index) => (
                            <motion.div
                                key={index}
                                initial={{ scale: 0, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="aspect-square rounded-full overflow-hidden flex items-center justify-center p-4 text-center cursor-crosshair group"
                                style={{ backgroundColor: circle.color }}
                            >
                                {circle.type === 'text' ? (
                                    <span className="text-brand-dark font-black text-xl uppercase leading-tight group-hover:scale-110 transition-transform">
                                        {circle.content}
                                    </span>
                                ) : (
                                    <img 
                                        src={circle.src} 
                                        alt="Agency vibe" 
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 scale-125 group-hover:scale-100" 
                                    />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AgencyStory;
