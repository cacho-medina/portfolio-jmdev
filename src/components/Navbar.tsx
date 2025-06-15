import { useState, useEffect } from "react";
import { ArrowRightCircle, Github, Linkedin, Mail, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        {
            name: "Home",
            href: "/#home",
        },
        {
            name: "Projects",
            href: "/#projects",
        },
        {
            name: "About",
            href: "/#about",
        },
        {
            name: "Skills",
            href: "/#skills",
        },
        {
            name: "Experience",
            href: "/#experience",
        },
    ];

    return (
        <header
            className={`fixed top-3.5 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 rounded-full ${
                isScrolled
                    ? "h-14 backdrop-blur-xl scale-95 w-[95%] max-w-3xl border"
                    : "h-14 w-full md:container md:mx-auto"
            }`}
        >
            <div className="mx-auto h-full px-6">
                <nav className="flex items-center justify-between h-full">
                    <div className="hidden w-full md:flex items-center justify-between gap-6">
                        <div className="flex items-center w-1/12">
                            <a href="/#home">
                                <span className="text-lg font-radio font-bold text-gradient-red tracking-tighter">
                                    JM
                                </span>
                            </a>
                        </div>
                        <div className="flex items-center gap-6">
                            {navItems.map((item) => (
                                <NavigationLink
                                    href={item.href}
                                    key={item.name}
                                >
                                    {item.name}
                                </NavigationLink>
                            ))}
                        </div>
                        <a href="/#contact">
                            <Button
                                size="sm"
                                className="glass-morph rounded-full flex items-center gap-2 group hover:glow-effect hover:bg-special-red text-white transition-all duration-300"
                            >
                                Contact
                                <ArrowRightCircle className="w-4 h-4 group-hover:-rotate-45 transition-all duration-300" />
                            </Button>
                        </a>
                    </div>

                    <div className="md:hidden flex items-center justify-between gap-2 w-full">
                        <div className="flex items-center w-1/12">
                            <a href="/#home">
                                <span className="text-lg font-radio font-bold text-gradient-red tracking-tighter">
                                    JM
                                </span>
                            </a>
                        </div>
                        <Sheet
                            open={isMobileMenuOpen}
                            onOpenChange={setIsMobileMenuOpen}
                        >
                            <SheetTrigger asChild>
                                <Menu className="size-6 text-koi-orange" />
                            </SheetTrigger>
                            <SheetContent className="bg-special-black">
                                <div className="flex flex-col gap-4 mt-8">
                                    {navItems.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="text-lg text-muted-foreground hover:text-foreground transition-colors"
                                            onClick={() => {
                                                setIsMobileMenuOpen(false);
                                            }}
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                    <a href="/#contact">
                                        <Button
                                            onClick={() => {
                                                setIsMobileMenuOpen(false);
                                            }}
                                            size="sm"
                                            className="bg-special-red rounded-2xl text-white flex items-center gap-2 group hover:bg-special-red/50 transition-all duration-300"
                                        >
                                            Contact
                                            <ArrowRightCircle className="w-4 h-4 group-hover:-rotate-45 transition-all duration-300" />
                                        </Button>
                                    </a>

                                    <div className="flex items-center gap-2 mt-4">
                                        <a
                                            href="https://github.com/cacho-medina"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 rounded-full glass-morph hover:glow-effect transition-all duration-300"
                                            aria-label="Social Media"
                                        >
                                            <Github className="h-5 w-5" />
                                        </a>
                                        <a
                                            href="https://www.linkedin.com/in/joaquin-medina22"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 rounded-full glass-morph hover:glow-effect transition-all duration-300"
                                            aria-label="Social Media"
                                        >
                                            <Linkedin className="h-5 w-5" />
                                        </a>
                                        <a
                                            href="mailto:joaquinmedinadev0@gmail.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 rounded-full glass-morph hover:glow-effect transition-all duration-300"
                                            aria-label="Social Media"
                                        >
                                            <Mail className="h-5 w-5" />
                                        </a>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </nav>
            </div>
        </header>
    );
};

type NavigationLinkProps = {
    href: string;
    children: React.ReactNode;
};

const NavigationLink = ({ href, children }: NavigationLinkProps) => {
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
