
import { useState, useEffect } from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content: "Lokesh led our company's digital transformation initiative with exceptional vision and technical expertise. He has a unique ability to translate complex technical concepts into business value.",
    name: "Sarah Johnson",
    position: "CIO, Global Enterprises Inc.",
    company: "Global Enterprises Inc.",
    rating: 5
  },
  {
    id: 2,
    content: "Working with Lokesh was transformative for our organization. His strategic approach to digital innovation helped us achieve a 40% increase in operational efficiency within just 6 months.",
    name: "Michael Chen",
    position: "CEO",
    company: "TechFuture Solutions",
    rating: 5
  },
  {
    id: 3,
    content: "Lokesh's expertise in enterprise architecture and digital strategy was invaluable to our digital transformation journey. He consistently delivered beyond expectations.",
    name: "Priya Sharma",
    position: "Head of Innovation",
    company: "NextGen Systems",
    rating: 5
  },
  {
    id: 4,
    content: "The blockchain solution Lokesh designed for our supply chain has completely revolutionized our operations, increasing transparency and reducing verification times by 85%.",
    name: "David Thompson",
    position: "COO",
    company: "Global Logistics Partners",
    rating: 5
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  
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

  return (
    <section id="testimonials" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">Testimonials</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>
        
        <div className="max-w-3xl mx-auto">
          <div 
            className="relative overflow-hidden" 
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <Card 
                  key={testimonial.id} 
                  className="min-w-full bg-white border-none shadow-lg"
                >
                  <CardContent className="pt-6 pb-2">
                    <div className="flex mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-lg italic mb-6">"{testimonial.content}"</p>
                  </CardContent>
                  <CardFooter className="flex flex-col items-start">
                    <p className="font-semibold text-lg">{testimonial.name}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-600">{testimonial.position}</span>
                      <span className="text-gray-400">•</span>
                      <Badge variant="outline">{testimonial.company}</Badge>
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
                className="rounded-full bg-white shadow-md"
                onClick={handlePrevious}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-white shadow-md"
                onClick={handleNext}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeIndex === index ? 'bg-primary' : 'bg-gray-300'
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
