import React from 'react';
import { motion } from 'framer-motion';
import { developerProjects, freelanceProjects } from '../../data/mockData';
import MinimalFooter from '../layout/MinimalFooter';

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group relative w-full aspect-[3/4] overflow-hidden bg-[#151515] rounded-xl border border-white/5"
        >
            <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover md:grayscale grayscale-0 transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
            />
            
            {/* Overlay */}
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black via-black/80 to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-500 p-5 md:p-8 flex flex-col justify-end">
                <div className="transform translate-y-0 md:translate-y-4 group-hover:translate-y-0 transition-transform duration-500 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">

                    <p className="text-brand-orange font-betania text-[9px] md:text-[10px] tracking-[0.3em] uppercase mb-2">{project.category}</p>
                    <h3 className="text-white text-xl md:text-2xl font-playfair italic mb-2 md:mb-3">{project.title}</h3>
                    <p className="text-white/60 text-[10px] md:text-xs font-playfair leading-relaxed mb-4 md:mb-6 max-w-sm">
                        {project.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                        {project.tags.map((tag, i) => (
                            <span key={i} className="px-2 md:px-3 py-0.5 md:py-1 bg-white/10 backdrop-blur-md rounded-full text-[8px] md:text-[10px] text-white/80 font-betania tracking-widest uppercase">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

        </motion.div>
    );
};

const WorkSection = ({ title, projects, subtitle }) => (
    <div className="mb-24 md:mb-40">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 md:mb-16">
            <div>
                <motion.p 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-brand-orange font-betania text-xs tracking-[0.5em] uppercase mb-3"
                >
                    {subtitle}
                </motion.p>
                <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-brand-cream text-4xl md:text-6xl font-playfair italic"
                >
                    {title}
                </motion.h3>
            </div>
            <div className="hidden md:block h-px flex-1 bg-brand-cream/10 mx-8 md:mx-12 mb-5" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
            ))}
        </div>
    </div>
);


const WorkSlider = ({ onOpenInstaQR }) => {
    return (
        <div className="w-full bg-[#0a0a0a]">
            <section className="bg-[#0a0a0a] min-h-screen pt-32 pb-12" id="work">
                <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24">
                    
                    {/* Main Header */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mb-32 text-center"
                    >
                        <h2 className="text-brand-cream text-7xl md:text-[10rem] font-playfair italic leading-none opacity-10">Selected Works</h2>
                    </motion.div>

                    {/* Developer Projects */}
                    <WorkSection 
                        title="Developer" 
                        subtitle="Engineering & Architecture" 
                        projects={developerProjects} 
                    />

                    {/* Freelance Projects */}
                    <WorkSection 
                        title="Freelance" 
                        subtitle="Creative & Experimental" 
                        projects={freelanceProjects} 
                    />

                </div>
            </section>
            
            <MinimalFooter onOpenInstaQR={onOpenInstaQR} />
        </div>
    );
};

export default WorkSlider;
