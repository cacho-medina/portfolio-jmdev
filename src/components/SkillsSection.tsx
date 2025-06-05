import { useEffect, useRef } from "react";
import { TechSlider } from "./custom/TechSlider";

const skillsData = {
    Frontend: [
        "React",
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Redux",
        "React Query",
        "HTML/CSS",
        "JavaScript",
    ],
    Backend: [
        "Node.js",
        "Express",
        "NestJS",
        "GraphQL",
        "REST APIs",
        "WebSockets",
        "Django",
        "Laravel",
    ],
    Databases: [
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "Firebase",
        "MySQL",
        "Prisma",
    ],
    Tools: [
        "Git",
        "Docker",
        "AWS",
        "CI/CD",
        "Vercel",
        "Netlify",
        "Postman",
        "Jest",
    ],
};

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
                {/* 
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
                    {Object.entries(skillsData).map(
                        ([category, skills], catIndex) => (
                            <div
                                key={category}
                                className="opacity-0 animate-fade-in"
                                style={{
                                    animationDelay: `${(catIndex + 1) * 200}ms`,
                                }}
                            >
                                <div className="glass-morph rounded-xl p-6">
                                    <h3 className="font-radio text-xl text-center font-semibold mb-4 text-gradient-red">
                                        {category}
                                    </h3>

                                    <div className="flex flex-wrap gap-2">
                                        {skills.map((skill, index) => (
                                            <span
                                                key={index}
                                                className={`
                        px-3 py-2 text-sm rounded-full 
                        bg-white/5 border border-white/10 text-white/80
                        hover:bg-white/10 hover:text-white transition-colors duration-300
                      `}
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )
                    )}
                </div> */}
            </div>
        </section>
    );
};

export default SkillsSection;
