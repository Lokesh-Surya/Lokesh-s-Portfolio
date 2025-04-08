
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 shadow-md backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between h-20 px-4">
        <a href="#hero" className="text-xl font-bold text-primary">
          Lokesh
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </a>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-sm font-medium flex items-center">
                Innovation <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <a href="#startups" className="w-full">Startups</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="#research" className="w-full">Research</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="#patent" className="w-full">Patent</a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <a href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
            Skills
          </a>
          <a href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">
            Testimonials
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-500 hover:text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container py-4 px-4 flex flex-col space-y-4">
            <a href="#about" className="text-sm font-medium py-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
              About
            </a>
            <div className="border-t border-gray-100 py-2">
              <p className="text-sm font-medium text-gray-500 mb-2">Innovation</p>
              <div className="pl-4 flex flex-col space-y-2">
                <a href="#startups" className="text-sm hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                  Startups
                </a>
                <a href="#research" className="text-sm hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                  Research
                </a>
                <a href="#patent" className="text-sm hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                  Patent
                </a>
              </div>
            </div>
            <a href="#skills" className="text-sm font-medium py-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Skills
            </a>
            <a href="#testimonials" className="text-sm font-medium py-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Testimonials
            </a>
            <a href="#contact" className="text-sm font-medium py-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
