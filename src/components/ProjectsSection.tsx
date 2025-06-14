import { useEffect, useRef } from "react";
import ProjectCard, { ProjectProps } from "./ProjectCard";

const projectsData: ProjectProps[] = [
    {
        title: "LuxBuy E-commerce",
        description:
            "A fully responsive e-commerce platform with cart functionality, payment processing, and admin dashboard.",
        tech: ["React", "Node.js", "MongoDB", "Stripe"],
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        demoUrl: "https://demo-ecommerce.com",
        githubUrl: "https://github.com/joaquinmedina",
    },
    {
        title: "Travel Discovery App",
        description:
            "Interactive travel app that helps users discover destinations based on preferences and budget constraints.",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        demoUrl: "https://travel-app-demo.com",
        githubUrl: "https://github.com/joaquinmedina",
    },
    {
        title: "AI Task Manager",
        description:
            "Productivity tool that uses machine learning to prioritize and organize tasks for optimal workflow.",
        tech: ["React", "Express", "PostgreSQL", "TensorFlow.js"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        demoUrl: "https://ai-tasks.demo.com",
        githubUrl: "https://github.com/joaquinmedina",
    },
    {
        title: "Rolling Hotel",
        description:
            "Analytics dashboard that tracks performance across multiple social media platforms in one interface.",
        tech: ["Vue.js", "Firebase", "Chart.js", "Vuetify"],
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        demoUrl: "https://social-metrics.demo.com",
        githubUrl: "https://github.com/joaquinmedina",
    },
    {
        title: "Management System",
        description:
            "Analytics dashboard that tracks performance across multiple social media platforms in one interface.",
        tech: ["Vue.js", "Firebase", "Chart.js", "Vuetify"],
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        demoUrl: "https://social-metrics.demo.com",
        githubUrl: "https://github.com/joaquinmedina",
    },
    {
        title: "Koi ERP",
        description:
            "Analytics dashboard that tracks performance across multiple social media platforms in one interface.",
        tech: ["Vue.js", "Firebase", "Chart.js", "Vuetify"],
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        demoUrl: "https://social-metrics.demo.com",
        githubUrl: "https://github.com/joaquinmedina",
    },
];

const ProjectsSection = () => {
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
        <section id="projects" className="py-20 md:py-28 relative">
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-special-red/5 rounded-full filter blur-[100px]" />

            <div className="container px-4 md:px-6 mx-auto" ref={sectionRef}>
                <div className="text-center mb-12 opacity-0 animate-fade-in">
                    <h2 className="font-radio text-3xl md:text-4xl font-bold text-gradient tracking-tight">
                        Featured Projects
                    </h2>
                    <p className="mt-4 text-white/70 max-w-2xl mx-auto">
                        A selection of my recent work spanning various
                        technologies and industries.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                    {projectsData.map((project, index) => (
                        <div
                            key={index}
                            className="opacity-0 animate-fade-in"
                            style={{ animationDelay: `${(index + 1) * 200}ms` }}
                        >
                            <ProjectCard {...project} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
