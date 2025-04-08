
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";

const Hero = () => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  
  // Function to check if we're at the bottom of the viewport
  useEffect(() => {
    const handleScroll = () => {
      // Hide the scroll indicator once the user has scrolled a bit
      if (window.scrollY > 100) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Text Content - Left Side */}
          <div className="md:w-1/2 text-center md:text-left">
            {/* "I'm Lokesh" text */}
            <h2 className="text-2xl md:text-3xl font-medium mb-2 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              I'm <span className="text-gradient font-bold">Lokesh</span>
            </h2>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Digital Transformation <span className="text-gradient">Engineer</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              Innovating at the intersection of technology, business, and design to drive meaningful change and digital excellence.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button asChild size="lg" className="rounded-full">
                <a href="#contact">Get in Touch <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <a href="#about">Learn More</a>
              </Button>
            </div>
          </div>
          
          {/* Image Placeholder - Right Side */}
          <div className="md:w-1/2 flex justify-center md:justify-end animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-xl overflow-hidden bg-gradient-to-br from-primary/10 to-blue-400/20 border border-white/20 shadow-lg">
              {/* Placeholder image - replace src with your actual image when available */}
              <div className="absolute inset-0 flex items-center justify-center text-primary/40">
                <Avatar className="w-full h-full bg-transparent">
                  <div className="w-full h-full flex items-center justify-center text-7xl font-light">
                    L
                  </div>
                </Avatar>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator with animation - only shown when at the top */}
      {showScrollIndicator && (
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-sm text-gray-500 mb-2">Scroll Down</span>
          <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      )}
    </section>
  );
};

export default Hero;
