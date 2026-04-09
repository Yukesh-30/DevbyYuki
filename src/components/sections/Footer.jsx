import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
    const heyRef = useRef(null);
    const sectionRef = useRef(null);
    const formRef = useRef(null);
    const isFormInView = useInView(formRef, { once: true, margin: '-80px' });

    // Scroll progress for the "Hey" section — triggers as it enters viewport
    const { scrollYProgress } = useScroll({
        target: heyRef,
        offset: ['start end', 'end start'],
    });

    // Each colored "Hey" layer shifts by a different amount creating parallax stacking
    const yLayer1 = useTransform(scrollYProgress, [0, 1], [120, -80]);  // teal – slowest
    const yLayer2 = useTransform(scrollYProgress, [0, 1], [90, -60]);   // pink
    const yLayer3 = useTransform(scrollYProgress, [0, 1], [60, -40]);   // orange
    const yLayer4 = useTransform(scrollYProgress, [0, 1], [30, -20]);   // yellow – faster

    // Spring smoothing
    const spring = { stiffness: 60, damping: 20 };
    const yS1 = useSpring(yLayer1, spring);
    const yS2 = useSpring(yLayer2, spring);
    const yS3 = useSpring(yLayer3, spring);
    const yS4 = useSpring(yLayer4, spring);

    const socialLinks = [
        {
            name: 'WhatsApp',
            icon: (
                <div className="w-6 h-6 bg-brand-teal rounded-sm flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.557 4.123 1.528 5.858L.057 23.6a.5.5 0 0 0 .623.603l5.898-1.549A11.955 11.955 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.693-.515-5.228-1.409l-.374-.222-3.878 1.018 1.034-3.773-.242-.386A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" /></svg>
                </div>
            ),
        },
        {
            name: 'Email',
            icon: (
                <div className="w-6 h-6 bg-brand-pink rounded-sm flex items-center justify-center text-white text-[10px] font-black">@</div>
            ),
        },
        {
            name: 'Instagram',
            icon: (
                <div className="w-6 h-6 bg-brand-dark rounded-sm flex items-center justify-center">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                </div>
            ),
        },
        {
            name: 'LinkedIn',
            icon: (
                <div className="w-6 h-6 bg-brand-dark rounded-sm flex items-center justify-center">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
                    </svg>
                </div>
            ),
        },
    ];

    return (
        <section ref={sectionRef} className="bg-brand-cream text-brand-dark relative overflow-hidden" id="contact">



            <div className="section-container pt-24 pb-0">

                {/* ── MAIN CONTACT GRID ── */}
                <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12 lg:gap-0 mb-20 items-start">

                    {/* LEFT – Heading + contact info */}
                    <div className="flex flex-col pr-0 lg:pr-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                            className="text-[clamp(2.5rem,5.5vw,5.5rem)] font-oswald font-black leading-[0.9] mb-14 tracking-[-0.04em] text-brand-dark normal-case"
                        >
                            Let's build<br />something worth<br />stopping for.
                        </motion.h2>

                        {/* Contact rows */}
                        {[
                            {
                                icon: (
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg>
                                ),
                                text: '7550251977',
                            },
                            {
                                icon: (
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                                    </svg>
                                ),
                                text: 'yukeshdhamu20@gmail.com',
                            },
                            {
                                icon: (
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10" /><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                                    </svg>
                                ),
                                text: 'No.6, Lokasurya Nagar, Sholavaram, Chennai-600067',
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -24 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }}
                                className="flex items-center gap-5 mb-3"
                            >
                                <div className="w-14 h-14 bg-brand-dark flex-shrink-0 flex items-center justify-center">
                                    {item.icon}
                                </div>
                                <span className="font-body font-black font-normal text-lg tracking-tight">{item.text}</span>
                            </motion.div>
                        ))}
                    </div>

                    {/* RIGHT – Form */}
                    <motion.div
                        ref={formRef}
                        initial={{ opacity: 0, y: 32 }}
                        animate={isFormInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        className="bg-[#EDE3D3] p-8 md:p-12"
                    >
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8" onSubmit={(e) => e.preventDefault()}>
                            {[
                                { label: 'Name:', placeholder: 'Enter your full name', type: 'text', col: 1 },
                                { label: 'Company:', placeholder: "Enter your company's name", type: 'text', col: 1 },
                                { label: 'Email:', placeholder: 'Enter your email address', type: 'email', col: 1 },
                                { label: 'Phone:', placeholder: 'Enter your phone number', type: 'tel', col: 1 },
                            ].map((field, i) => (
                                <div key={i} className="flex flex-col gap-2">
                                    <label className="font-oswald font-black text-lg tracking-tight normal-case">{field.label}</label>
                                    <input
                                        type={field.type}
                                        placeholder={field.placeholder}
                                        className="bg-[#DDD3C0] px-5 py-4 outline-none placeholder:text-brand-dark/40 text-sm font-semibold text-brand-dark focus:ring-2 focus:ring-brand-dark/20 transition-all"
                                    />
                                </div>
                            ))}

                            <div className="flex flex-col gap-2 md:col-span-2">
                                <label className="font-oswald font-black text-lg tracking-tight normal-case">How did you hear about us?</label>
                                <div className="relative">
                                    <select className="w-full bg-[#DDD3C0] px-5 py-4 outline-none appearance-none text-sm font-semibold text-brand-dark/60 focus:ring-2 focus:ring-brand-dark/20 transition-all cursor-pointer">
                                        <option value="">Select one...</option>
                                        <option>Awwwards</option>
                                        <option>Social Media</option>
                                        <option>Referral</option>
                                        <option>Google Search</option>
                                        <option>Friend / Colleague</option>
                                    </select>
                                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                                        <svg width="11" height="7" viewBox="0 0 12 8" fill="none">
                                            <path d="M1 1L6 6L11 1" stroke="#191919" strokeWidth="2.5" strokeLinecap="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-2 md:col-span-2">
                                <label className="font-oswald font-black text-lg tracking-tight normal-case">Tell us about your project:</label>
                                <textarea
                                    placeholder="What do we need to know about the project?"
                                    rows={5}
                                    className="bg-[#DDD3C0] px-5 py-4 outline-none placeholder:text-brand-dark/40 text-sm font-semibold text-brand-dark resize-none focus:ring-2 focus:ring-brand-dark/20 transition-all"
                                />
                            </div>

                            <div className="md:col-span-2 flex justify-center mt-2">
                                <motion.button
                                    whileHover={{ scale: 1.04 }}
                                    whileTap={{ scale: 0.97 }}
                                    className="px-14 py-5 border-[2.5px] border-brand-dark rounded-full font-display font-black text-base tracking-tight hover:bg-brand-dark hover:text-brand-cream transition-colors duration-300 normal-case"
                                >
                                    Send message
                                </motion.button>
                            </div>
                        </form>
                    </motion.div>
                </div>



            </div>

            {/* ── HEY ANIMATION + SOCIALS ── */}
            <div
                ref={heyRef}
                className="section-container -mt-20 lg:-mt-20 mb-10 pt-12 pb-20 border-b border-brand-dark/15 overflow-visible"
            >
                {/* ── Mobile: stack vertically | Desktop: side-by-side ── */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-0 lg:gap-12">

                    {/* Row 1: Hey + let's chat */}
                    <div className="flex flex-row items-end gap-3 lg:gap-6">

                        {/* Hey stack — explicit height so absolute layers don't bleed */}
                        <div
                            className="relative flex-shrink-0"
                            style={{
                                fontSize: 'clamp(4.5rem, 10vw, 11rem)', lineHeight: 1,
                                height: 'clamp(4.5rem, 10vw, 11rem)'
                            }}
                        >
                            {/* Teal – deepest */}
                            <motion.span style={{ y: yS1 }}
                                className="absolute inset-0 font-display font-black text-brand-teal select-none"
                                aria-hidden="true">Hey</motion.span>
                            {/* Pink */}
                            <motion.span style={{ y: yS2 }}
                                className="absolute inset-0 font-display font-black text-brand-pink select-none"
                                aria-hidden="true">Hey</motion.span>
                            {/* Orange */}
                            <motion.span style={{ y: yS3 }}
                                className="absolute inset-0 font-display font-black text-brand-orange select-none"
                                aria-hidden="true">Hey</motion.span>
                            {/* Yellow */}
                            <motion.span style={{ y: yS4 }}
                                className="absolute inset-0 font-display font-black text-brand-yellow select-none"
                                aria-hidden="true">Hey</motion.span>
                            {/* Black top layer */}
                            <span className="relative z-10 font-display font-black text-brand-dark">Hey</span>
                        </div>

                        {/* let's chat ↗ */}
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

                    {/* Social links — below on mobile, right side on desktop */}
                    <div className="grid grid-cols-2 gap-x-8 gap-y-4 mt-20 lg:mt-0 lg:self-end lg:translate-y-6 lg:pb-4 shrink-0">
                        {socialLinks.map((link, i) => (
                            <motion.a
                                key={link.name}
                                href="#"
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

export default Footer;
