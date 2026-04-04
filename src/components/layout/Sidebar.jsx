import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Sidebar = ({ onNavigate, activeSection, isTransitioning }) => {
    const navItems = [
        { name: 'Work', color: 'bg-brand-teal', id: 'work', num: '01' },
        { name: 'About', color: 'bg-brand-pink', id: 'about', num: '02' },
        { name: 'Services', color: 'bg-brand-orange', id: 'services', num: '03' },
        { name: 'Contact', color: 'bg-brand-yellow', id: 'contact', num: '04' },
    ];

    const sidebarWidths = {
        base: '128px',
        md: '192px',
        lg: '256px'
    };

    return (
        <motion.aside 
            animate={{ 
                width: isTransitioning ? '100vw' : undefined,
            }}
            transition={{ 
                duration: 0.8, 
                ease: [0.76, 0, 0.24, 1] 
            }}
            className="fixed right-0 top-0 h-screen w-32 md:w-48 lg:w-64 hidden lg:flex z-[100] overflow-hidden shadow-[-10px_0_30px_rgba(0,0,0,0.1)]"
        >
            {navItems.map((item, index) => (
                <motion.div
                    key={item.id}
                    onClick={() => onNavigate(item.id)}
                    layout // Core Framer feature for smooth width transition
                    animate={{ 
                        flex: 1, // Uniform width for all bars
                        x: 0
                    }}
                    transition={{ 
                        duration: 0.8, 
                        ease: [0.76, 0, 0.24, 1],
                        delay: isTransitioning ? index * 0.05 : 0 // Stagger expansion
                    }}
                    className={`h-full relative flex flex-col items-center justify-end pb-24 lg:pb-32 cursor-pointer transition-colors duration-500 ${item.color} group`}
                >
                    {/* Text content - Hidden during expansion for cleaner wipe */}
                    <motion.div
                        animate={{ 
                            opacity: isTransitioning ? 0 : 1,
                            scale: isTransitioning ? 0.8 : 1
                        }}
                        className="flex flex-col items-center"
                    >
                        <span 
                            className={`[writing-mode:vertical-lr] rotate-180 font-display font-black text-2xl md:text-4xl lg:text-5xl uppercase tracking-[-0.06em] whitespace-nowrap ${
                                activeSection === item.id ? 'text-white' : 'text-white/40 group-hover:text-white'
                            }`}
                        >
                            ({item.num}) {item.name}
                        </span>
                    </motion.div>

                    {/* Subtle border between bars */}
                    <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-black/5" />
                </motion.div>
            ))}
        </motion.aside>
    );
};

export default Sidebar;
