import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 relative">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col items-center">
                    {/* Logo and social links */}
                    <div className="mb-8 flex flex-col items-center">
                        <span className="font-radio text-2xl font-bold text-gradient-red tracking-tight mb-4">
                            JM
                        </span>

                        <div className="flex space-x-4">
                            <SocialLink
                                href="https://github.com/cacho-medina"
                                icon={<Github className="h-5 w-5" />}
                            />
                            <SocialLink
                                href="https://www.linkedin.com/in/joaquin-medina22"
                                icon={<Linkedin className="h-5 w-5" />}
                            />
                            <SocialLink
                                href="mailto:joaquinmedinadev0@gmail.com"
                                icon={<Mail className="h-5 w-5" />}
                            />
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-8">
                        <FooterLink href="#home">Home</FooterLink>
                        <FooterLink href="#about">About</FooterLink>
                        <FooterLink href="#projects">Projects</FooterLink>
                        <FooterLink href="#skills">Skills</FooterLink>
                        <FooterLink href="#experience">Experience</FooterLink>
                        <FooterLink href="#contact">Contact</FooterLink>
                    </div>

                    {/* Copyright */}
                    <div className="text-sm text-white/60">
                        <p>
                            © {currentYear} Joaquín Medina. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

interface SocialLinkProps {
    href: string;
    icon: React.ReactNode;
}

const SocialLink = ({ href, icon }: SocialLinkProps) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full glass-morph hover:glow-effect transition-all duration-300"
            aria-label="Social Media"
        >
            {icon}
        </a>
    );
};

interface FooterLinkProps {
    href: string;
    children: React.ReactNode;
}

const FooterLink = ({ href, children }: FooterLinkProps) => {
    return (
        <a
            href={href}
            className="text-sm text-white/70 hover:text-white transition-colors duration-200"
        >
            {children}
        </a>
    );
};

export default Footer;
