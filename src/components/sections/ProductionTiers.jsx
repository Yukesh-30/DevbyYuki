import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../../data/mockData';

const ProductionTiers = () => {
    return (
        <section className="py-24 bg-brand-cream" id="services">
            <div className="section-container">
                <h2 className="text-5xl md:text-8xl font-black mb-16 tracking-[-0.05em]">The<br />Process</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.tier}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="relative group p-8 min-h-[400px] flex flex-col justify-between overflow-hidden"
                            style={{ 
                                backgroundColor: service.color,
                                clipPath: index % 2 === 0 
                                    ? "polygon(0 0, 100% 10%, 100% 100%, 0 90%)" 
                                    : "polygon(0 10%, 100% 0, 100% 90%, 0 100%)"
                            }}
                        >
                            <h3 className="text-3xl md:text-4xl font-black text-brand-dark mb-4">
                                {service.tier}
                            </h3>
                            
                            <ul className="space-y-4">
                                {service.features.map((feature, i) => (
                                    <li key={i} className="text-xl font-bold flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-brand-dark rounded-full" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            
                            <div className="mt-8">
                                <motion.button
                                    whileHover={{ x: 10 }}
                                    className="flex items-center gap-4 text-xl font-black uppercase"
                                >
                                    Learn More 
                                    <span className="text-3xl">→</span>
                                </motion.button>
                            </div>

                            {/* Background Number */}
                            <span className="absolute -bottom-10 -right-10 text-[12rem] font-black opacity-10 leading-none pointer-events-none">
                                0{index + 1}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductionTiers;
