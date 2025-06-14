import { useEffect, useRef } from "react";

const experienceData = [
    {
        role: "Backend Developer",
        company: "Qik Starts",
        period: "May 2025 - Present",
        description:
            "Developed backend services using Node.js, NestJS and MongoDB. Collaborated with backend & AI developers to implement communication services with AI and Whatsapp.",
    },
    {
        role: "Fullstack Developer",
        company: "Koi Studio",
        period: "April 2024 - Present",
        description:
            "Leading development of web applications using React, Node.js and PostgreSQL. Implementing CI/CD workflows and mentoring junior developers.",
    },
    {
        role: "Web Developer",
        company: "Outlier",
        period: "March 2025 - Present",
        description:
            "Built and maintained client websites and e-commerce platforms. Optimized site performance and implemented SEO best practices.",
    },
];

const educationData = [
    {
        title: "Systems Engineering",
        institution: "UTN (Universidad Tecnológica Nacional)",
        period: "Present",
        description:
            "Systems engineering degree with a focus on software development, system design, and project management.",
    },
    {
        title: "Tu Futuro: Soft Skills Program",
        institution: "Forge Foundation",
        period: "April 2025",
        description:
            "Soft skills program focused on communication, teamwork, leadership, and problem-solving.",
    },
    {
        title: "Backend Development",
        institution: "Vortex Academy",
        period: "February 2025",
        description:
            "Backend development bootcamp focusing on Typescript, Node.js, NestJS, PostgreSQL and Prisma ORM.",
    },
    {
        title: "QA Manual Testing",
        institution: "CoderHouse",
        period: "November 2024",
        description:
            "In-depth course on manual testing, use cases, test plans, reports, API testing and documentation.",
    },
    {
        title: "Web UI Bootcamp",
        institution: "Globant",
        period: "September 2024",
        description:
            "Intensive course covering advanced JavaScript concepts, design patterns, and performance optimization.",
    },
    {
        title: "Fullstack Development (MERN Stack)",
        institution: "RollingCode School",
        period: "April 2024",
        description:
            "Full-stack web development bootcamp focusing on MongoDB, Express, React, and Node.js.",
    },
];

const TimelineItem = ({
    title,
    subtitle,
    period,
    description,
    index,
}: {
    title: string;
    subtitle: string;
    period: string;
    description: string;
    index: number;
}) => {
    return (
        <div
            className={`mb-8 opacity-0 animate-fade-in flex`}
            style={{ animationDelay: `${index * 200}ms` }}
        >
            <div className="mr-4 relative">
                <div className="w-3 h-3 rounded-full bg-special-red mt-2" />
                {index !== 0 && (
                    <div className="absolute top-0 bottom-0 left-1.5 -translate-x-1/2 w-0.5 h-full bg-white/10" />
                )}
            </div>
            <div>
                <h4 className="text-lg font-radio font-semibold text-gradient mb-1">
                    {title}
                </h4>
                <p className="text-sm text-special-red font-medium mb-1">
                    {subtitle} | {period}
                </p>
                <p className="text-sm text-white/70">{description}</p>
            </div>
        </div>
    );
};

const ExperienceSection = () => {
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
        <section id="experience" className="py-20 md:py-28 relative">
            <div className="absolute top-1/4 left-0 w-72 h-72 bg-special-red/5 rounded-full filter blur-[80px]" />

            <div className="container px-4 md:px-6 mx-auto" ref={sectionRef}>
                <div className="text-center mb-16 opacity-0 animate-fade-in">
                    <h2 className="font-radio text-3xl md:text-4xl font-bold text-gradient tracking-tight">
                        Experience & Education
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                    <div>
                        <h3 className="font-radio text-2xl font-semibold mb-8 text-gradient-red opacity-0 animate-fade-in">
                            Work Experience
                        </h3>
                        <div className="relative">
                            {experienceData.map((item, index) => (
                                <TimelineItem
                                    key={index}
                                    title={item.role}
                                    subtitle={item.company}
                                    period={item.period}
                                    description={item.description}
                                    index={index}
                                />
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="font-radio text-2xl font-semibold mb-8 text-gradient-red opacity-0 animate-fade-in">
                            Education
                        </h3>
                        <div className="relative">
                            {educationData.map((item, index) => (
                                <TimelineItem
                                    key={index}
                                    title={item.title}
                                    subtitle={item.institution}
                                    period={item.period}
                                    description={item.description}
                                    index={index}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
