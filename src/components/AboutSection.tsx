import { useEffect, useRef } from "react";
import { SpinningText } from "./magicui/spinning-text";

const AboutSection = () => {
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
        <section
            id="about"
            className="py-20 md:py-28 relative overflow-hidden"
            ref={sectionRef}
        >
            <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-special-red/5 rounded-full filter blur-[80px]" />

            <div className="container px-4 md:px-6 mx-auto flex justify-center items-center">
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
                    {/* Image with glow effect */}
                    <div
                        className="w-48 h-48 md:w-64 md:h-64 relative opacity-0 animate-fade-in"
                        style={{ animationDelay: "200ms" }}
                    >
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-special-red/20 to-transparent animate-float" />
                        <div className="hidden md:block relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <SpinningText radius={13} className="font-semibold">
                                Joaquin * Medina * dev *
                            </SpinningText>
                        </div>
                        <div className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <SpinningText radius={10} className="font-semibold">
                                Joaquin * Medina * dev *
                            </SpinningText>
                        </div>
                        <div className="absolute inset-2 rounded-full glass-morph glow-effect overflow-hidden">
                            <img
                                src="/images/profesional.png"
                                alt="Joaquín Medina"
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>
                    </div>

                    {/* About Content */}
                    <div
                        className="max-w-2xl opacity-0 animate-fade-in"
                        style={{ animationDelay: "400ms" }}
                    >
                        <h2 className="font-radio text-3xl md:text-4xl font-bold mb-6 text-gradient tracking-tight">
                            About Me
                        </h2>

                        <div className="space-y-4 text-white/80">
                            <p>
                                I'm a passionate Fullstack Web Developer with a
                                strong focus on creating beautiful, performant
                                web applications. With 5+ years of experience in
                                both frontend and backend development, I enjoy
                                tackling complex problems and turning ideas into
                                reality.
                            </p>

                            <p>
                                My journey began with a deep curiosity for how
                                things work on the web. Today, I specialize in
                                React, Node.js, and various modern frameworks to
                                deliver scalable solutions. I'm always exploring
                                new technologies and approaches to stay at the
                                forefront of web development.
                            </p>

                            <p>
                                When I'm not coding, you'll find me contributing
                                to open source projects, participating in tech
                                communities, or sharing my knowledge through
                                mentorship and writing.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
