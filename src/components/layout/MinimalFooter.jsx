import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const MinimalFooter = ({ onOpenInstaQR }) => {
    const heyRef = useRef(null);

    // Scroll progress for the "Hey" section
    const { scrollYProgress } = useScroll({
        target: heyRef,
        offset: ['start end', 'end start'],
    });

    // Parallax logic for "Hey" layers
    const yLayer1 = useTransform(scrollYProgress, [0, 1], [100, -60]);
    const yLayer2 = useTransform(scrollYProgress, [0, 1], [75, -45]);
    const yLayer3 = useTransform(scrollYProgress, [0, 1], [50, -30]);
    const yLayer4 = useTransform(scrollYProgress, [0, 1], [25, -15]);

    const spring = { stiffness: 60, damping: 20 };
    const yS1 = useSpring(yLayer1, spring);
    const yS2 = useSpring(yLayer2, spring);
    const yS3 = useSpring(yLayer3, spring);
    const yS4 = useSpring(yLayer4, spring);

    const socialLinks = [
        {
            name: 'WhatsApp',
            href: 'https://wa.me/917550251977',
            icon: (
                <div className="w-6 h-6 bg-brand-teal rounded-sm flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.557 4.123 1.528 5.858L.057 23.6a.5.5 0 0 0 .623.603l5.898-1.549A11.955 11.955 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.693-.515-5.228-1.409l-.374-.222-3.878 1.018 1.034-3.773-.242-.386A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" /></svg>
                </div>
            ),
        },
        {
            name: 'Email',
            href: 'mailto:yukeshdhamu20@gmail.com',
            icon: (
                <div className="w-6 h-6 bg-brand-pink rounded-sm flex items-center justify-center text-white text-[10px] font-black">@</div>
            ),
        },
        {
            name: 'GitHub',
            href: 'https://github.com/Yukesh-30',
            icon: (
                <div className="w-6 h-6 bg-brand-dark rounded-sm flex items-center justify-center">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                </div>
            ),
        },
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/in/yukesh-d-293235305',
            icon: (
                <div className="w-6 h-6 bg-brand-dark rounded-sm flex items-center justify-center">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
                    </svg>
                </div>
            ),
        },
        {
            name: 'Instagram',
            href: 'https://www.instagram.com/yukesh_30?igsh=MXcyMTJ5cTN4Nmd2Yg==',
            icon: (
                <div className="w-6 h-6 bg-brand-dark rounded-sm flex items-center justify-center">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                </div>
            ),
        },
    ];


    return (
        <section id="contact-minimal" className="bg-brand-cream text-brand-dark relative overflow-hidden pt-0 pb-16 scroll-mt-20">
            <div
                ref={heyRef}
                className="section-container pt-12 pb-20 border-b border-brand-dark/15 overflow-visible"
            >
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12 lg:gap-24">

                    {/* Hey + let's chat */}
                    <div className="flex flex-row items-end gap-3 lg:gap-6">
                        <div
                            className="relative flex-shrink-0"
                            style={{
                                fontSize: 'clamp(4.5rem, 10vw, 11rem)', lineHeight: 1,
                                height: 'clamp(4.5rem, 10vw, 11rem)'
                            }}
                        >
                            <motion.span style={{ y: yS1 }}
                                className="absolute inset-0 font-display font-black text-brand-teal select-none"
                                aria-hidden="true">Hey</motion.span>
                            <motion.span style={{ y: yS2 }}
                                className="absolute inset-0 font-display font-black text-brand-pink select-none"
                                aria-hidden="true">Hey</motion.span>
                            <motion.span style={{ y: yS3 }}
                                className="absolute inset-0 font-display font-black text-brand-orange select-none"
                                aria-hidden="true">Hey</motion.span>
                            <motion.span style={{ y: yS4 }}
                                className="absolute inset-0 font-display font-black text-brand-yellow select-none"
                                aria-hidden="true">Hey</motion.span>
                            <span className="relative z-10 font-display font-black text-brand-dark">Hey</span>
                        </div>

                        <div className="relative z-20 mb-1 lg:mb-2">
                            <span
                                className="font-display font-black text-brand-dark normal-case flex items-center gap-1 whitespace-nowrap"
                                style={{ fontSize: 'clamp(1.4rem, 3.5vw, 4rem)' }}
                            >
                                let's chat
                                <ArrowUpRight
                                    style={{ width: 'clamp(1.1rem, 2.5vw, 3rem)', height: 'clamp(1.1rem, 2.5vw, 3rem)' }}
                                    strokeWidth={3.5}
                                />
                            </span>
                        </div>
                    </div>

                    {/* Social links */}
                    <div className="grid grid-cols-2 gap-x-8 gap-y-4 mt-12 lg:mt-0 lg:self-end lg:translate-y-6 lg:pb-4 shrink-0">
                        {socialLinks.map((link, i) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                target="_blank"
                                rel="noreferrer"
                                onClick={(e) => {
                                    if (link.name === 'Instagram') {
                                        e.preventDefault();
                                        onOpenInstaQR();
                                    }
                                }}
                                initial={{ opacity: 0, x: 16 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.07, duration: 0.35 }}
                                whileHover={{ opacity: 0.5 }}
                                className="flex items-center gap-2 font-display font-black text-base lg:text-lg tracking-tight whitespace-nowrap normal-case"
                            >
                                {link.name} {link.icon}
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>



        </section>
    );
};

export default MinimalFooter;
