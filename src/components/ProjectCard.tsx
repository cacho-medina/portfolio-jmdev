import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Code2, Github } from "lucide-react";

export type ProjectProps = {
    title: string;
    description: string;
    tech: string[];
    image: string;
    demoUrl?: string;
    githubUrl?: string;
};

const ProjectCard = ({
    title,
    description,
    tech,
    image,
    demoUrl,
    githubUrl,
}: ProjectProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative group overflow-hidden rounded-xl glass-morph transition-all duration-500 hover:glow-effect"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Project background image */}
            <div className="relative h-60 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent opacity-80" />
            </div>

            {/* Project content */}
            <div className="p-6">
                {/* Project title */}
                <h3 className="font-radio text-xl font-bold mb-3 text-gradient">
                    {title}
                </h3>

                {/* Project description */}
                <p className="text-sm text-white/70 mb-4">{description}</p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                    {tech.map((item, index) => (
                        <span
                            key={index}
                            className="px-2 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-white/60"
                        >
                            {item}
                        </span>
                    ))}
                </div>

                {/* Project links */}
                <div className="flex items-center space-x-3">
                    {githubUrl && (
                        <Button
                            size="sm"
                            variant="outline"
                            className="glass-morph border-white/10 hover:border-white/20"
                        >
                            <a
                                href={githubUrl}
                                className="flex items-center"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Github className="mr-1 h-4 w-4" />
                                <span>Code</span>
                            </a>
                        </Button>
                    )}

                    {demoUrl && (
                        <Button
                            size="sm"
                            className="glass-morph bg-special-red/10 hover:bg-special-red/20 border-special-red/20 hover:border-special-red/40"
                        >
                            <a
                                href={demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center text-white"
                            >
                                <Code2 className="mr-1 h-4 w-4" />
                                Demo
                            </a>
                        </Button>
                    )}
                </div>
            </div>

            {/* Glow corners */}
            <div
                className={`absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-special-red rounded-tl-xl transition-opacity duration-500 ${
                    isHovered ? "opacity-100" : "opacity-0"
                }`}
            />
            <div
                className={`absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-special-red rounded-br-xl transition-opacity duration-500 ${
                    isHovered ? "opacity-100" : "opacity-0"
                }`}
            />
        </div>
    );
};

export default ProjectCard;
