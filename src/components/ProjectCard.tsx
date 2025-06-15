import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Link } from "lucide-react";

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
            className="relative group overflow-hidden rounded-xl glass-morph transition-all duration-500 hover:glow-effect h-[450px]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Project background image with overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/80 to-transparent" />
            </div>

            {/* Project content */}
            <div className="relative z-10 flex flex-col justify-end h-full p-6">
                {/* Project title */}
                <h3 className="font-radio text-2xl font-bold mb-3 text-white">
                    {title}
                </h3>

                {/* Project description */}
                <p className="text-sm text-white/70 mb-4">{description}</p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                    {tech.map((item, index) => (
                        <span
                            key={index}
                            className="px-2 py-1 text-xs rounded-full bg-white/10 border border-white/20 text-white/80"
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
                            className="glass-morph border-white/20 hover:border-white/40"
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
                            className="glass-morph bg-special-red/20 hover:bg-special-red/30 border-special-red/30 hover:border-special-red/50"
                        >
                            <a
                                href={demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center text-white"
                            >
                                <Link className="mr-1 h-4 w-4" />
                                Demo
                            </a>
                        </Button>
                    )}
                </div>
            </div>

            {/* Glow borders */}
            <div
                className={`absolute inset-0 border border-special-red/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
            />

            {/* Glow corners */}
            <div
                className={`absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-special-red rounded-tl-xl transition-opacity duration-500 ${
                    isHovered ? "opacity-100" : "opacity-0"
                }`}
            />
            <div
                className={`absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-special-red rounded-br-xl transition-opacity duration-500 ${
                    isHovered ? "opacity-100" : "opacity-0"
                }`}
            />
        </div>
    );
};

export default ProjectCard;
