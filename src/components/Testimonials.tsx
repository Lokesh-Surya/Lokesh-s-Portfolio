
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

  // Generate initials for avatar
  const getInitials = (name: string) => {
    return name.split(' ').map(word => word[0]).join('');
  };

  return (
    <section id="testimonials" ref={sectionRef} className="section-padding bg-gradient-to-b from-gray-50 to-white opacity-0">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Client Testimonials
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-6 max-w-xl mx-auto text-lg">
            Hear from industry leaders about their experiences working with me on digital transformation initiatives.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div 
            className="relative overflow-hidden rounded-2xl"
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
                  className="min-w-full border-none shadow-xl bg-gradient-to-br from-white to-blue-50"
                >
                  <div className="absolute top-6 right-6">
                    <Quote className="h-20 w-20 text-blue-100 rotate-180" />
                  </div>
                  
                  <CardContent className="pt-10 pb-6 px-8">
                    <div className="flex mb-6">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-xl md:text-2xl leading-relaxed font-medium text-gray-700 mb-8 relative z-10">
                      "{testimonial.content}"
                    </p>
                  </CardContent>
                  
                  <CardFooter className="px-8 pb-10 flex items-center gap-4">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-14 w-14 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-bold text-xl">{testimonial.name}</p>
                      <div className="flex flex-wrap items-center gap-2 mt-1">
                        <span className="text-gray-700">{testimonial.position}</span>
                        <span className="text-gray-400 hidden md:inline">•</span>
                        <Badge variant="outline" className="bg-white shadow-sm">
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
                className="rounded-full bg-white shadow-md border-none hover:bg-blue-50 transition-all"
                onClick={handlePrevious}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-white shadow-md border-none hover:bg-blue-50 transition-all"
                onClick={handleNext}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>
          
          {/* Indicators */}
          <div 
            className="flex justify-center mt-8 gap-3"
            ref={el => cardRefs.current[1] = el}
          >
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  activeIndex === index ? 
                  'bg-gradient-to-r from-blue-500 to-purple-500 shadow-md scale-110' : 
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
