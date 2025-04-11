
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
import { ChevronDown, Menu, X } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect for header
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

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'glass-morphism backdrop-blur-xl py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <a href="#hero" className="text-xl font-bold flex items-center gap-3">
            <div className="relative">
              <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 blur-sm ${isScrolled ? 'animate-pulse' : ''}`}></div>
              <Avatar className="h-10 w-10 bg-gradient-to-br from-blue-600 to-indigo-600 border-2 border-white">
                <AvatarFallback className="text-white font-bold">L</AvatarFallback>
              </Avatar>
            </div>
            <span className={`font-extrabold text-2xl transition-all ${isScrolled ? 'text-gray-800' : 'text-gray-800'}`}>
              Lokesh
            </span>
          </a>
          
          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="gap-1">
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#about"
                  className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-white/10 text-gray-800 font-medium")}
                >
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#startups"
                  className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-white/10 text-gray-800 font-medium")}
                >
                  Startups
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-white/10 text-gray-800 font-medium">
                  Innovation
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 w-[300px] glass-morphism rounded-xl">
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          href="#research"
                          className="block select-none space-y-1 rounded-lg p-4 leading-none no-underline outline-none transition-colors hover:bg-blue-50"
                        >
                          <div className="text-lg font-medium leading-none mb-1 text-blue-600">Research</div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                            Academic publications
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          href="#patent"
                          className="block select-none space-y-1 rounded-lg p-4 leading-none no-underline outline-none transition-colors hover:bg-blue-50"
                        >
                          <div className="text-lg font-medium leading-none mb-1 text-indigo-600">Patent</div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                            Intellectual property
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          href="#projects"
                          className="block select-none space-y-1 rounded-lg p-4 leading-none no-underline outline-none transition-colors hover:bg-blue-50"
                        >
                          <div className="text-lg font-medium leading-none mb-1 text-purple-600">Projects</div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                            Technical projects
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#certifications"
                  className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-white/10 text-gray-800 font-medium")}
                >
                  Certifications
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#skills"
                  className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-white/10 text-gray-800 font-medium")}
                >
                  Skills
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#testimonials"
                  className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-white/10 text-gray-800 font-medium")}
                >
                  Testimonials
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          {/* Contact Button */}
          <div className="hidden md:block">
            <Button asChild size="sm" className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:shadow-lg hover:shadow-blue-500/20 transition-all text-white">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-800 hover:text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-7 w-7" />
            ) : (
              <Menu className="h-7 w-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-morphism backdrop-blur-xl shadow-2xl">
          <div className="container py-6 px-6 flex flex-col space-y-6">
            <a href="#about" className="text-lg font-medium py-3 text-gray-800 hover:text-blue-600 transition-colors" onClick={() => setMobileMenuOpen(false)}>
              About
            </a>
            <a href="#startups" className="text-lg font-medium py-3 text-gray-800 hover:text-blue-600 transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Startups
            </a>
            <div className="border-t border-gray-200 py-3">
              <p className="flex items-center text-lg font-medium text-gray-700 mb-3">
                Innovation <ChevronDown className="ml-2 h-4 w-4" />
              </p>
              <div className="pl-4 flex flex-col space-y-3">
                <a href="#research" className="text-base text-gray-700 hover:text-blue-600 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                  Research
                </a>
                <a href="#patent" className="text-base text-gray-700 hover:text-blue-600 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                  Patent
                </a>
                <a href="#projects" className="text-base text-gray-700 hover:text-blue-600 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                  Projects
                </a>
              </div>
            </div>
            <a href="#certifications" className="text-lg font-medium py-3 text-gray-800 hover:text-blue-600 transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Certifications
            </a>
            <a href="#skills" className="text-lg font-medium py-3 text-gray-800 hover:text-blue-600 transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Skills
            </a>
            <a href="#testimonials" className="text-lg font-medium py-3 text-gray-800 hover:text-blue-600 transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Testimonials
            </a>
            <a href="#contact" className="text-lg font-medium py-3 text-gray-800 hover:text-blue-600 transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </a>
            
            <Button asChild className="mt-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600">
              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact Me</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
