import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import skillsImg from '../../assets/Skills.jpg';
import MinimalFooter from '../layout/MinimalFooter';

const MarqueeRow = ({ skills, direction = 'left', speed = 30 }) => {
    return (
        <div className="flex overflow-hidden whitespace-nowrap py-12 border-y border-brand-cream/5">
            <motion.div
                initial={{ x: direction === 'left' ? 0 : "-50%" }}
                animate={{ x: direction === 'left' ? "-50%" : 0 }}
                transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
                className="flex gap-12 md:gap-24 px-4 items-center"
            >
                {[...skills, ...skills].map((skill, index) => (
                    <div key={index} className="flex flex-col items-center gap-4 group min-w-[120px] md:min-w-[180px]">
                        <div className="relative h-16 md:h-20 w-16 md:w-20 flex items-center justify-center">
                            <img 
                                src={skill.icon} 
                                alt={skill.name} 
                                className="h-full w-auto grayscale-0 opacity-100 md:grayscale md:opacity-40 md:group-hover:grayscale-0 md:group-hover:opacity-100 transition-all duration-500 hover:scale-110 pointer-events-none"
                            />
                        </div>
                        <span className="text-[10px] md:text-xs font-betania tracking-[0.2em] uppercase opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 text-brand-orange text-center whitespace-nowrap">
                            {skill.name}
                        </span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

const ProductionTiers = () => {
    const sectionRef = useRef(null);
    
    const frontendSkills = [
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" },
        { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" }
    ];

    const backendSkills = [
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
        { name: "Spring", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
        { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" }
    ];

    return (
        <div className="w-full bg-[#0a0a0a]">
            <section className="w-full bg-[#0a0a0a] min-h-screen relative py-24 md:py-32" id="skills" ref={sectionRef}>
                {/* Topic Header: Skills */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-24 text-center px-6"
                >
                    <h3 className="text-brand-cream text-6xl md:text-8xl font-playfair italic leading-none">Skills</h3>
                </motion.div>

                <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-start px-6 md:px-12 lg:px-24">
                    
                    {/* Left Side: Artwork (Sticky) */}
                    <div className="lg:w-2/5 w-full lg:sticky top-32 mb-16 lg:mb-0 flex justify-center lg:justify-start">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="relative w-full max-w-[400px] aspect-[3/4] overflow-hidden  shadow-[0_0_50px_rgba(255,107,0,0.1)] border border-white/5"
                        >
                            <img 
                                src={skillsImg} 
                                alt="Skills Illustration" 
                                className="w-full h-full object-cover grayscale-0 md:grayscale md:hover:grayscale-0 transition-all duration-1000"
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                        </motion.div>
                    </div>

                    {/* Right Side: Skill Marquees */}
                    <div className="lg:w-3/5 w-full space-y-24 lg:pl-20">
                        
                        {/* Frontend Category */}
                        <div className="space-y-12">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-6"
                            >
                                <span className="text-brand-orange font-betania text-xl tracking-[0.3em] uppercase">Frontend</span>
                                <div className="h-px flex-1 bg-brand-orange/20" />
                            </motion.div>
                            
                            <div className="relative -mx-6 md:-mx-12 lg:-mx-24">
                                <MarqueeRow skills={frontendSkills} direction="left" speed={25} />
                            </div>
                        </div>

                        {/* Backend & DB Category */}
                        <div className="space-y-12">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="flex items-center gap-6"
                            >
                                <span className="text-brand-orange font-betania text-xl tracking-[0.3em] uppercase">Backend / DB</span>
                                <div className="h-px flex-1 bg-brand-orange/20" />
                            </motion.div>

                            <div className="relative -mx-6 md:-mx-12 lg:-mx-24">
                                <MarqueeRow skills={backendSkills} direction="right" speed={35} />
                            </div>
                        </div>

                        {/* Closing Note */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 0.6 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="text-brand-cream/60 font-playfair text-xl md:text-2xl italic leading-relaxed pt-12"
                        >
                            "Continuously evolving, learning new stacks,<br /> 
                            and optimizing for performance and scalability."
                        </motion.p>
                    </div>
                </div>
            </section>
            
            {/* Footer Wrapper */}
            <div className="w-full relative z-10 bg-brand-cream">
                <MinimalFooter />
            </div>
        </div>
    );
};

export default ProductionTiers;
