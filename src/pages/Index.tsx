import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { CircleShadow } from "@/components/CircleShadow";

const Index = () => {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <div className="mb-8">
                <CircleShadow />
            </div>
            <ProjectsSection />
            <SkillsSection />
            <ExperienceSection />
            <ContactSection />
            <Footer />
        </>
    );
};

export default Index;
