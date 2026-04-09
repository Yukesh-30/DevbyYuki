import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const Counter = ({ to, duration = 4 }) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (inView) {
            animate(count, to, { duration, ease: [0.16, 1, 0.3, 1] });
        }
    }, [inView, to, duration, count]);

    return <motion.span ref={ref}>{rounded}</motion.span>;
};
const GithubIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
);

const LinkedinIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

const InstagramIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
);
import MinimalFooter from '../layout/MinimalFooter';
import aboutImg from '../../assets/About.jpg';

const AgencyStory = () => {
    return (
        <div className="w-full bg-[#0a0a0a] min-h-screen relative pt-16" id="about">
            {/* Header: Centered Title */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-10 text-center"
            >
                <h3 className="text-brand-cream text-5xl md:text-7xl font-playfair italic">About Me</h3>
            </motion.div>

            <section className="flex flex-col lg:flex-row w-full min-h-screen items-start">
                {/* Left Side: Image Container (45%) */}
                <div className="lg:w-[45%] w-full lg:sticky top-0 lg:h-screen flex items-center justify-center p-6 md:p-10">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="relative w-full max-w-[95%] aspect-[4/5] lg:aspect-auto h-auto max-h-[80vh] flex items-center justify-center overflow-hidden shadow-2xl border border-white/5"
                    >
                        <img 
                            src={aboutImg} 
                            alt="About Yukesh" 
                            className="w-full h-full object-contain pointer-events-none"
                        />
                    </motion.div>
                </div>

                {/* Right Side: Scrollable Content (55%) */}
                <div className="lg:w-[55%] w-full px-6 py-6 md:px-12 lg:px-20 lg:py-16 flex flex-col justify-start">
                    
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-brand-orange text-lg font-betania tracking-[0.2em] uppercase mb-4">Professional Bio</h2>
                        <h3 className="text-4xl md:text-6xl font-playfair mb-10 text-brand-cream">
                            Engineering with <span className="italic text-brand-orange/90">Purpose</span>
                        </h3>
                        
                        <div className="space-y-6 text-lg md:text-[22px] text-brand-cream/70 font-light leading-relaxed font-playfair tracking-wide text-justify">
                            <p>
                                I am a Computer Science student at <span className="text-brand-orange font-medium">SSN College of Engineering</span> with a deep-seated passion for engineering <span className="text-brand-orange/90">scalable, reliable, and user-centric digital solutions</span>. While my expertise spans the <span className="text-brand-orange/80">full stack</span>, my core strength lies in <span className="text-brand-orange font-medium">backend architecture</span>, where I focus on building robust systems using clean design principles. From developing <span className="text-brand-orange/80">AI-driven learning platforms</span> to optimizing supply chains through predictive modeling, I thrive on turning complex problem statements into functional, high-impact applications.
                            </p>
                            <p>
                                As a proven problem solver with over <span className="text-brand-orange font-medium"><Counter to={350} />+ LeetCode challenges</span> conquered, I approach every project with a focus on algorithmic efficiency and architectural integrity. Beyond writing code, I am an active leader in the tech community, serving as a <span className="text-brand-orange/90 font-medium">Technical Core Member for GDG SSN</span> and leading design initiatives for major technical symposiums. Whether I am collaborating on open-source projects or winning <span className="text-brand-orange font-medium">national hackathons</span>, my goal is always the same: to build smarter, more efficient technology that solves real-world challenges.
                            </p>
                        </div>
                    </motion.div>

                    {/* Thematic Separator / Quote */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="my-16 md:my-24 py-8 border-l-2 border-brand-orange pl-6 md:pl-10 relative"
                    >
                        <span className="absolute -top-10 -left-4 text-7xl text-brand-orange/10 font-serif leading-none">"</span>
                        <p className="text-xl md:text-2xl font-betania text-brand-orange italic leading-normal tracking-wide">
                            True engineering isn't just about writing code that works; it's about architecting systems that endure and evolving them to meet the challenges of tomorrow.
                        </p>
                    </motion.div>



                    {/* Socials */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="flex flex-col gap-6 pt-16 border-t border-brand-cream/10"
                    >
                        <span className="text-brand-cream/50 text-sm font-betania uppercase tracking-widest">Connect</span>
                        <div className="flex items-center gap-6">
                            <a href="https://github.com" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full border border-brand-cream/20 flex items-center justify-center text-brand-cream hover:bg-brand-orange hover:text-brand-dark hover:border-brand-orange transition-all duration-500 hover:scale-110">
                                <GithubIcon className="w-6 h-6" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full border border-brand-cream/20 flex items-center justify-center text-brand-cream hover:bg-brand-orange hover:text-brand-dark hover:border-brand-orange transition-all duration-500 hover:scale-110">
                                <LinkedinIcon className="w-6 h-6" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full border border-brand-cream/20 flex items-center justify-center text-brand-cream hover:bg-brand-orange hover:text-brand-dark hover:border-brand-orange transition-all duration-500 hover:scale-110">
                                <InstagramIcon className="w-6 h-6" />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Footer Wrapper - To ensure the dark theme transitions properly to footer if needed */}
            <div className="w-full relative z-10 bg-brand-cream">
                <MinimalFooter />
            </div>
        </div>
    );
};

export default AgencyStory;
