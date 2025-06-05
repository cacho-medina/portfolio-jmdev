import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        >
            {/* Background glow effects */}
            <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-special-red/10 rounded-full filter blur-[100px]" />
            <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-special-red/10 rounded-full filter blur-[100px]" />

            <div className="container px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
                    {/* Thin blue line above headline */}
                    <div
                        className={`h-0.5 w-16 bg-special-red mb-4 transition-all duration-1000 delay-100 ${
                            isLoaded
                                ? "opacity-100"
                                : "opacity-0 transform -translate-y-8"
                        }`}
                    />

                    {/* Headline */}
                    <h1
                        className={`font-radio text-4xl md:text-6xl lg:text-7xl font-bold text-gradient tracking-tight transition-all duration-1000 delay-200 ${
                            isLoaded
                                ? "opacity-100"
                                : "opacity-0 transform -translate-y-8"
                        }`}
                    >
                        Hi, I'm{" "}
                        <span className="text-gradient-red">
                            Joaquín Medina
                        </span>
                    </h1>

                    {/* Subheadline */}
                    <p
                        className={`text-xl md:text-2xl text-white/80 max-w-2xl transition-all duration-1000 delay-300 ${
                            isLoaded
                                ? "opacity-100"
                                : "opacity-0 transform -translate-y-8"
                        }`}
                    >
                        Fullstack Web Developer — I build fast, scalable and
                        creative web solutions.
                    </p>

                    {/* CTA Buttons */}
                    <div
                        className={`flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-6 pt-8 transition-all duration-1000 delay-500 ${
                            isLoaded
                                ? "opacity-100"
                                : "opacity-0 transform -translate-y-8"
                        }`}
                    >
                        <Button
                            size="lg"
                            variant="special"
                            className="glass-morph group hover:glow-effect border-special-red/20 hover:border-special-red/40 transition-all duration-300 text-white/90 hover:text-white px-8"
                        >
                            <a
                                href="#projects"
                                className="flex items-center h-full"
                            >
                                See My Projects
                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                            </a>
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="glass-morph border-white/10 hover:border-white/20 transition-all duration-300"
                        >
                            Download CV
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
