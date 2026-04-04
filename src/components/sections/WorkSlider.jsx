import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '../../data/mockData';

gsap.registerPlugin(ScrollTrigger);

const WorkSlider = () => {
    const sliderRef = useRef(null);

    useEffect(() => {
        const slider = sliderRef.current;
        const totalWidth = slider.scrollWidth;
        const windowWidth = window.innerWidth;

        gsap.to(slider, {
            x: -(totalWidth - windowWidth + 240), // Adjusting for padding
            ease: "none",
            scrollTrigger: {
                trigger: slider,
                start: "top center",
                end: () => `+=${totalWidth}`,
                scrub: 1,
                pin: true,
                invalidateOnRefresh: true,
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <section className="py-24 bg-brand-dark text-brand-cream overflow-hidden" id="work">
            <div className="section-container mb-24">
                <h2 className="text-5xl md:text-8xl font-black mb-8 tracking-[-0.05em] font-display">Selected<br />Projects</h2>
            </div>
            
            <div ref={sliderRef} className="flex gap-12 px-24 h-[60vh] flex-nowrap">
                {projects.map((project) => (
                    <div 
                        key={project.id} 
                        className="flex-shrink-0 w-[400px] md:w-[600px] h-full relative group cursor-pointer overflow-hidden rounded-2xl"
                    >
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                        />
                        <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h3 className="text-3xl font-display font-black">{project.title}</h3>
                            <p className="text-brand-cream/60">{project.category}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WorkSlider;
