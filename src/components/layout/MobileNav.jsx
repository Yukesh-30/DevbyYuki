import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MobileNav = ({ onNavigate, activeSection }) => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Work', color: 'bg-brand-teal', id: 'work', num: '01' },
        { name: 'About', color: 'bg-brand-pink', id: 'about', num: '02' },
        { name: 'Skills', color: 'bg-brand-orange', id: 'skills', num: '03' },
        { name: 'Contact', color: 'bg-brand-yellow', id: 'contact', num: '04' },
    ];

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleItemClick = (id) => {
        setIsOpen(false);
        onNavigate(id);
    };

    return (
        <div className="lg:hidden">
            {/* Mobile Header - Fixed at Top */}
            <header className={`fixed top-0 inset-x-0 px-4 flex items-start justify-end z-[110] pointer-events-none transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
                {!isOpen && (
                    <button 
                        onClick={toggleMenu}
                        className="pointer-events-auto h-20 w-20 flex items-center justify-center bg-black text-white font-display font-bold text-[10px] tracking-widest uppercase transition-all hover:bg-neutral-900 active:scale-95"
                    >
                        MENU
                    </button>
                )}
            </header>

            {/* Menu Header (Visible only when open) */}
            <AnimatePresence>
                {isOpen && (
                    <div className="fixed top-0 inset-x-0 h-24 px-6 flex items-center justify-end z-[120] pointer-events-none">
                        <button 
                            onClick={toggleMenu}
                            className="pointer-events-auto font-display font-bold text-xs tracking-widest text-white uppercase drop-shadow-md"
                        >
                            CLOSE
                        </button>
                    </div>
                )}
            </AnimatePresence>

            {/* Full Screen Staggered Dropdown Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 1.2, delay: 0.2 } }}
                        className="fixed inset-0 z-[100] flex"
                    >
                        {navItems.map((item, index) => (
                            <motion.div
                                key={item.id}
                                variants={{
                                    initial: { y: '-100%' },
                                    animate: { y: 0 },
                                    exit: { y: '-100%' }
                                }}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                transition={{ 
                                    duration: 1.2, // Slower, heavier feel
                                    ease: [0.76, 0, 0.24, 1],
                                    delay: index * 0.1 
                                }}
                                onClick={() => handleItemClick(item.id)}
                                className={`h-full flex-1 ${item.color} flex flex-col items-center justify-end pb-24 cursor-pointer relative group -mr-[1px]`}
                            >
                                <span className="[writing-mode:vertical-lr] rotate-180 font-display font-black text-3xl md:text-5xl lg:text-7xl text-white/50 group-hover:text-white uppercase transition-all duration-300 tracking-[-0.05em] whitespace-nowrap">
                                    ({item.num}) {item.name}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default MobileNav;
