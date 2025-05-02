
import { useEffect, useRef } from 'react';

const experienceData = [
  {
    role: "Fullstack Developer",
    company: "Koi Studio",
    period: "April 2024 - Present",
    description: "Leading development of web applications using React, Node.js and PostgreSQL. Implementing CI/CD workflows and mentoring junior developers."
  },
  {
    role: "Frontend Developer",
    company: "Tech Innovations",
    period: "May 2022 - March 2024",
    description: "Developed responsive web applications using React, Redux and TypeScript. Collaborated with UX/UI designers to implement pixel-perfect interfaces."
  },
  {
    role: "Web Developer",
    company: "Digital Solutions",
    period: "January 2021 - April 2022",
    description: "Built and maintained client websites and e-commerce platforms. Optimized site performance and implemented SEO best practices."
  }
];

const educationData = [
  {
    title: "MERN Stack Development",
    institution: "RollingCode",
    period: "2023",
    description: "Full-stack web development bootcamp focusing on MongoDB, Express, React, and Node.js."
  },
  {
    title: "Advanced JavaScript",
    institution: "Globant Academy",
    period: "2022",
    description: "Intensive course covering advanced JavaScript concepts, design patterns, and performance optimization."
  },
  {
    title: "Frontend Development",
    institution: "Vortex Academy",
    period: "2021",
    description: "Comprehensive training in modern frontend technologies and frameworks."
  },
  {
    title: "React & Redux",
    institution: "CoderHouse",
    period: "2020",
    description: "In-depth course on React ecosystem including state management with Redux."
  },
  {
    title: "Web Development",
    institution: "UTN (Universidad Tecnológica Nacional)",
    period: "2019-2020",
    description: "Certification program covering full-stack web development fundamentals."
  }
];

const TimelineItem = ({ 
  title, 
  subtitle, 
  period, 
  description, 
  index 
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
        <div className="w-3 h-3 rounded-full bg-primary mt-2" />
        {index !== 0 && <div className="absolute top-0 bottom-0 left-1.5 -translate-x-1/2 w-0.5 h-full bg-white/10" />}
      </div>
      <div>
        <h4 className="text-lg font-radio font-semibold text-gradient mb-1">{title}</h4>
        <p className="text-sm text-primary font-medium mb-1">{subtitle} | {period}</p>
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
          entry.target.classList.add('animate-fade-in');
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
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-purple-500/5 rounded-full filter blur-[80px]" />
      
      <div className="container px-4 md:px-6 mx-auto" ref={sectionRef}>
        <div className="text-center mb-16 opacity-0 animate-fade-in">
          <h2 className="font-radio text-3xl md:text-4xl font-bold text-gradient tracking-tight">
            Experience & Education
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h3 className="font-radio text-2xl font-semibold mb-8 text-gradient-blue opacity-0 animate-fade-in">Work Experience</h3>
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
            <h3 className="font-radio text-2xl font-semibold mb-8 text-gradient-blue opacity-0 animate-fade-in">Education</h3>
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
