
import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Quote, User } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content: "Lokesh led our company's digital transformation initiative with exceptional vision and technical expertise. He has a unique ability to translate complex technical concepts into business value.",
    name: "Sarah Johnson",
    position: "CIO",
    company: "Global Enterprises Inc.",
    rating: 5,
    avatar: "SJ"
  },
  {
    id: 2,
    content: "Working with Lokesh was transformative for our organization. His strategic approach to digital innovation helped us achieve a 40% increase in operational efficiency within just 6 months.",
    name: "Michael Chen",
    position: "CEO",
    company: "TechFuture Solutions",
    rating: 5,
    avatar: "MC"
  },
  {
    id: 3,
    content: "Lokesh's expertise in enterprise architecture and digital strategy was invaluable to our digital transformation journey. He consistently delivered beyond expectations.",
    name: "Priya Sharma",
    position: "Head of Innovation",
    company: "NextGen Systems",
    rating: 5,
    avatar: "PS"
  },
  {
    id: 4,
    content: "The blockchain solution Lokesh designed for our supply chain has completely revolutionized our operations, increasing transparency and reducing verification times by 85%.",
    name: "David Thompson",
    position: "COO",
    company: "Global Logistics Partners",
    rating: 5,
    avatar: "DT"
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const handlePrevious = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  // Handle touch events for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrevious();
    }
  };
  
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            entry.target.classList.remove("opacity-0");
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });
    
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section id="testimonials" ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden opacity-0">
      {/* Modern background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-white to-blue-50/50"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-indigo-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-purple-200/30 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-3">Testimonials</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 section-title-gradient">
            Client Feedback
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from industry leaders about their experiences working with me on digital transformation initiatives.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div 
            className="relative overflow-hidden rounded-3xl"
            ref={el => cardRefs.current[0] = el}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <Card 
                  key={testimonial.id} 
                  className="min-w-full glass-morphism border-none shadow-2xl"
                >
                  <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br from-blue-400/10 to-indigo-400/10 blur-2xl"></div>
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-gradient-to-br from-indigo-400/10 to-purple-400/10 blur-2xl"></div>
                  
                  <div className="absolute top-6 right-6">
                    <Quote className="h-24 w-24 text-indigo-100 rotate-180" />
                  </div>
                  
                  <CardContent className="pt-14 pb-8 px-10">
                    <div className="flex mb-8">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-7 w-7 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-2xl md:text-3xl leading-relaxed font-medium text-gray-800 mb-10 relative z-10">
                      "{testimonial.content}"
                    </p>
                  </CardContent>
                  
                  <CardFooter className="px-10 pb-14 flex items-center gap-6">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 h-16 w-16 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-bold text-2xl">{testimonial.name}</p>
                      <div className="flex flex-wrap items-center gap-2 mt-1">
                        <span className="text-gray-700 text-lg">{testimonial.position}</span>
                        <span className="text-gray-400 hidden md:inline">•</span>
                        <Badge 
                          variant="outline"
                          className="bg-white/80 backdrop-blur-sm border-indigo-200 text-indigo-700 px-3 py-1 text-sm"
                        >
                          {testimonial.company}
                        </Badge>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            {/* Navigation controls */}
            <div className="absolute top-1/2 left-0 right-0 -mt-6 flex justify-between px-4">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full glass-morphism shadow-lg border-none hover:bg-blue-50 transition-all h-14 w-14"
                onClick={handlePrevious}
              >
                <ChevronLeft className="h-7 w-7 text-indigo-600" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full glass-morphism shadow-lg border-none hover:bg-blue-50 transition-all h-14 w-14"
                onClick={handleNext}
              >
                <ChevronRight className="h-7 w-7 text-indigo-600" />
              </Button>
            </div>
          </div>
          
          {/* Modern indicators */}
          <div 
            className="flex justify-center mt-10 gap-4"
            ref={el => cardRefs.current[1] = el}
          >
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-12 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index ? 
                  'bg-gradient-to-r from-blue-500 to-indigo-500 shadow-md scale-110' : 
                  'bg-gray-300 hover:bg-gray-400'
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
