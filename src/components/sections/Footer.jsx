import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="py-24 bg-brand-orange text-brand-dark" id="contact">
            <div className="section-container">
                <div className="flex flex-col md:flex-row items-center justify-between gap-16 mb-24">
                    <h2 className="text-6xl md:text-[12rem] font-black leading-none uppercase -ml-4 tracking-[-0.06em]">
                        Let's<br />Chat
                    </h2>
                    
                    <div className="flex flex-col gap-8 md:text-right">
                        <div>
                            <p className="text-xl font-black uppercase mb-2">Email us</p>
                            <a href="mailto:hello@devbyyuki.com" className="text-3xl md:text-5xl font-black border-b-4 border-brand-dark pb-2 hover:text-brand-cream transition-colors duration-300">
                                hello@devyuki.com
                            </a>
                        </div>
                        
                        <div>
                            <p className="text-xl font-black uppercase mb-2">Location</p>
                            <p className="text-3xl md:text-5xl font-black">
                                Tokyo, Japan<br />
                                Shibuya District
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-brand-dark">
                    <p className="font-bold uppercase tracking-widest mb-4 md:mb-0">
                        © 2026 DevByYuki. All rights reserved.
                    </p>
                    <div className="flex gap-8 uppercase font-black text-sm">
                        <a href="#" className="hover:opacity-50 transition-opacity">Instagram</a>
                        <a href="#" className="hover:opacity-50 transition-opacity">LinkedIn</a>
                        <a href="#" className="hover:opacity-50 transition-opacity">Twitter</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
