
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper to switch tab inside Innovation section
  const switchInnovationTab = (tabValue: string) => {
    document.getElementById('innovation')?.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      const tabButton = document.querySelector(`[value="${tabValue}"]`) as HTMLButtonElement;
      tabButton?.click();
    }, 300);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 shadow-md backdrop-blur-md' : 'bg-white'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="text-xl font-bold flex items-center gap-2">
            <img 
              src="/lovable-uploads/e314e7b9-593c-45cf-bfb6-1487ea07f56a.png" 
              alt="Lokesh Logo" 
              className="h-8 w-8 rounded-full"
            />
            <span className="h-2 w-2 rounded-full bg-primary"></span>
          </a>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink href="#home" className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink href="#about" className={navigationMenuTriggerStyle()}>
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Innovation</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[200px]">
                    {/* Patent first */}
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          href="#patent"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          onClick={(e) => {
                            e.preventDefault();
                            switchInnovationTab("patent");
                          }}
                        >
                          <div className="text-sm font-medium leading-none">Patent</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Intellectual property
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>

                    {/* Research second */}
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          href="#research"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          onClick={(e) => {
                            e.preventDefault();
                            switchInnovationTab("research");
                          }}
                        >
                          <div className="text-sm font-medium leading-none">Research</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Academic publications
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>

                    {/* Projects third */}
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          href="#projects"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          onClick={(e) => {
                            e.preventDefault();
                            switchInnovationTab("projects");
                          }}
                        >
                          <div className="text-sm font-medium leading-none">Projects</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Technical projects
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink href="#certifications" className={navigationMenuTriggerStyle()}>
                  Certifications
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink href="#skills" className={navigationMenuTriggerStyle()}>
                  Skills
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink href="#feedback" className={navigationMenuTriggerStyle()}>
                  Feedback
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Button asChild size="sm" className="rounded-full bg-primary/90 hover:bg-primary">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container py-4 px-4 flex flex-col space-y-4">
            <a href="#home" className="text-sm font-medium py-2 text-gray-800 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Home
            </a>
            <a href="#about" className="text-sm font-medium py-2 text-gray-800 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
              About
            </a>
            <div className="border-t border-gray-200 py-2">
              <p className="flex items-center text-sm font-medium text-gray-700 mb-2">
                Innovation <ChevronDown className="ml-1 h-3 w-3" />
              </p>
              <div className="pl-4 flex flex-col space-y-2">
                {/* Patent first */}
                <a
                  href="#patent"
                  className="text-sm text-gray-700 hover:text-primary transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    switchInnovationTab("patent");
                  }}
                >
                  Patent
                </a>

                {/* Research second */}
                <a
                  href="#research"
                  className="text-sm text-gray-700 hover:text-primary transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    switchInnovationTab("research");
                  }}
                >
                  Research
                </a>

                {/* Projects third */}
                <a
                  href="#projects"
                  className="text-sm text-gray-700 hover:text-primary transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    switchInnovationTab("projects");
                  }}
                >
                  Projects
                </a>
              </div>
            </div>
            <a href="#certifications" className="text-sm font-medium py-2 text-gray-800 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Certifications
            </a>
            <a href="#skills" className="text-sm font-medium py-2 text-gray-800 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Skills
            </a>
            <a href="#feedback" className="text-sm font-medium py-2 text-gray-800 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Feedback
            </a>
            <a href="#contact" className="text-sm font-medium py-2 text-gray-800 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </a>

            <Button className="mt-2 rounded-full" size="sm">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
