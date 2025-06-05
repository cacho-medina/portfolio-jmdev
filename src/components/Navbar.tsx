import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled ? "py-3 neo-blur" : "py-6 bg-transparent"
            }`}
        >
            <div className="container mx-auto flex items-center justify-between px-4">
                <div className="flex items-center">
                    <span className="text-lg font-radio font-bold text-gradient-red tracking-tighter">
                        JM
                    </span>
                </div>

                <div className="hidden md:flex space-x-6">
                    <NavLink href="#home">Home</NavLink>
                    <NavLink href="#about">About</NavLink>
                    <NavLink href="#projects">Projects</NavLink>
                    <NavLink href="#skills">Skills</NavLink>
                    <NavLink href="#experience">Experience</NavLink>
                    <NavLink href="#contact">Contact</NavLink>
                </div>

                <div className="md:hidden">
                    <Button variant="ghost" size="icon">
                        <span className="text-2xl">☰</span>
                    </Button>
                </div>
            </div>
        </nav>
    );
};

type NavLinkProps = {
    href: string;
    children: React.ReactNode;
};

const NavLink = ({ href, children }: NavLinkProps) => {
    return (
        <a
            href={href}
            className="relative text-sm text-white/80 hover:text-white transition-colors after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-full after:h-0.5 after:scale-x-0 hover:after:scale-x-100 after:bg-special-red after:origin-bottom-right after:transition-transform after:duration-300"
        >
            {children}
        </a>
    );
};

export default Navbar;
