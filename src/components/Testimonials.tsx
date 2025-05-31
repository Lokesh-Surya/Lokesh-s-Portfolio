import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, User, Calendar, Building } from "lucide-react";

const feedbackRecords = [
  {
    id: 1,
    feedbackType: "Project Excellence",
    content: "Lokesh led our company's digital transformation initiative with exceptional vision and technical expertise. He has a unique ability to translate complex technical concepts into business value.",
    reviewer: "Sarah Johnson",
    position: "CIO",
    company: "Global Enterprises Inc.",
    rating: 5,
    date: "March 2024",
    projectImpact: "40% efficiency increase"
  },
  {
    id: 2,
    feedbackType: "Strategic Leadership",
    content: "Working with Lokesh was transformative for our organization. His strategic approach to digital innovation helped us achieve remarkable results within just 6 months.",
    reviewer: "Michael Chen",
    position: "CEO",
    company: "TechFuture Solutions",
    rating: 5,
    date: "February 2024",
    projectImpact: "6-month digital transformation"
  },
  {
    id: 3,
    feedbackType: "Technical Innovation",
    content: "Lokesh's expertise in enterprise architecture and digital strategy was invaluable to our digital transformation journey. He consistently delivered beyond expectations.",
    reviewer: "Priya Sharma",
    position: "Head of Innovation",
    company: "NextGen Systems",
    rating: 5,
    date: "January 2024",
    projectImpact: "Enterprise architecture redesign"
  },
  {
    id: 4,
    feedbackType: "Solution Architecture",
    content: "The blockchain solution Lokesh designed for our supply chain has completely revolutionized our operations, increasing transparency and reducing verification times significantly.",
    reviewer: "David Thompson",
    position: "COO",
    company: "Global Logistics Partners",
    rating: 5,
    date: "December 2023",
    projectImpact: "85% verification time reduction"
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  
  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % feedbackRecords.length);
  };
  
  const handlePrevious = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + feedbackRecords.length) % feedbackRecords.length);
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
    <section id="testimonials" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">Client Feedback Records</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>
        
        <div className="max-w-4xl mx-auto">
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
              {feedbackRecords.map((record) => (
                <Card 
                  key={record.id} 
                  className="min-w-full bg-white border-l-4 border-l-primary shadow-xl"
                >
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start mb-4">
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        {record.feedbackType}
                      </Badge>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-1" />
                        {record.date}
                      </div>
                    </div>
                    <div className="flex mb-2">
                      {Array.from({ length: record.rating }).map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <blockquote className="text-lg italic mb-6 text-gray-700 leading-relaxed">
                      "{record.content}"
                    </blockquote>
                    
                    <div className="border-t pt-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                            <User className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <p className="font-semibold text-lg text-gray-900">{record.reviewer}</p>
                            <p className="text-gray-600">{record.position}</p>
                            <div className="flex items-center mt-1">
                              <Building className="h-4 w-4 mr-1 text-gray-400" />
                              <span className="text-sm text-gray-500">{record.company}</span>
                            </div>
                          </div>
                        </div>
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          {record.projectImpact}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
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
            {feedbackRecords.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeIndex === index ? 'bg-primary' : 'bg-gray-300'
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to feedback record ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
