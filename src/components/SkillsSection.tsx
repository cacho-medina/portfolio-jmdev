import { useEffect, useRef } from "react";
import { TechSlider } from "./custom/TechSlider";

const SkillsSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate-fade-in");
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section id="skills" className="py-20 md:py-28 relative">
            <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-special-red/5 rounded-full filter blur-[80px]" />

            <div className="px-4 md:px-6" ref={sectionRef}>
                <div className="text-center mb-12 opacity-0 animate-fade-in">
                    <h2 className="font-radio text-3xl md:text-4xl font-bold text-gradient tracking-tight">
                        Technical Skills
                    </h2>
                    <p className="mt-4 text-white/70 max-w-2xl mx-auto">
                        Languages, frameworks and tools I've worked with
                        extensively.
                    </p>
                </div>

                <div className="mb-12">
                    <TechSlider />
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
