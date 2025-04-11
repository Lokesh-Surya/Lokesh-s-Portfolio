
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AvatarImage } from "@/components/ui/avatar";

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
      {/* Background with modern gradient */}
      <div className="absolute inset-0 modern-gradient-bg opacity-10 z-0"></div>
      
      {/* Background gradient effects */}
      <div className="absolute -top-40 right-0 w-[600px] h-[600px] bg-blue-400/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-20 w-[500px] h-[500px] bg-indigo-400/30 rounded-full blur-3xl"></div>
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-violet-400/20 rounded-full blur-2xl"></div>
      <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-blue-300/20 rounded-full blur-xl"></div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile image */}
          <div className="flex justify-center mb-10 animate-fade-in" style={{ animationDelay: "0.05s" }}>
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 blur-sm animate-pulse-glow"></div>
              <Avatar className="h-40 w-40 border-4 border-white shadow-2xl">
                <AvatarImage
                  src="/IMG_9914.jpg"
                  alt="Lokesh"
                  className="object-cover"
                />
                <AvatarFallback className="text-5xl bg-gradient-to-br from-blue-400 to-primary text-white">
                  L
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
          
          {/* "I'm Lokesh" text */}
          <div className="text-center">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-3 animate-fade-in section-title-gradient" style={{ animationDelay: "0.1s" }}>
              I'm <span className="font-extrabold">Lokesh.</span>
            </h2>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Digital Transformation <span className="section-title-gradient">Engineer</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.3s" }}>
              Innovating at the intersection of technology, business, and design to drive meaningful change and digital excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-lg px-8 py-6 hover:shadow-lg hover:shadow-blue-500/20">
                <a href="https://www.linkedin.com/in/connectwithlokesh/"
                target="_blank" 
                rel="noopener noreferrer">
                  Connect<ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full text-lg px-8 py-6 border-2 hover:border-blue-500 transition-all">
                <a href="#about">Learn More</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Modern scroll indicator */}
      {showScrollIndicator && (
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-sm text-gray-500 mb-2 font-medium">Discover More</span>
          <div className="h-12 w-12 rounded-full flex items-center justify-center border-2 border-blue-500/50">
            <ChevronDown className="h-6 w-6 text-blue-500" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
