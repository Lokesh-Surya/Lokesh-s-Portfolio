
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, User, Calendar, Building } from "lucide-react";

const feedbackRecords = [
  {
    id: 1,
    feedbackType: "AI Project Delivery",
    content: "Lokesh delivered a cutting-edge AI-powered project management platform that far exceeded our expectations. His ability to blend deep technical knowledge with user-centric design helped us automate project planning, reporting, and risk forecasting seamlessly. His work significantly enhanced decision-making across our teams.",
    reviewer: "Yuvaraj Premlal",
    position: "Founder",
    company: "Project Perfect",
    rating: 5,
    date: "Jan 2025",
    projectImpact: "Reduced manual reporting effort by 60% and improved planning accuracy by 35%"
  },
  {
    id: 2,
    feedbackType: "Technical Leadership & Initiative",
    content: "Lokesh demonstrated strong initiative and perseverance in reviving and enhancing the PTC ThingWorx platform. His technical expertise and proactive involvement were critical in building a reusable asset performance solution integrated with the CNIUM model. Beyond development, Lokesh took ownership in aligning technical execution with project goals, ensuring timely delivery and stakeholder alignment. His leadership made a lasting impact on the project's success.",
    reviewer: "Biju Varughese",
    position: "Leadership",
    company: "Accenture",
    rating: 5,
    date: "Dec 2024",
    projectImpact: "Accelerated asset delivery and enhanced platform reuse across multiple engagements"
  },
  {
    id: 3,
    feedbackType: "Team Collaboration & Innovation",
    content: "Lokesh’s deep technical acumen, collaborative mindset, and proactive approach significantly contributed to both client delivery and internal innovation. His ability to learn and apply emerging technologies to real-world challenges, while actively supporting his team, made him a standout contributor across multiple high-impact projects. His professionalism and dedication were consistently recognized by both peers and clients.",
    reviewer: "Gururaj Kanchagar",
    position: "Senior Manager",
    company: "Accenture",
    rating: 5,
    date: "Aug 2024",
    projectImpact: "Strengthened client trust and drove innovation in asset development initiatives"
  },
  {
    id: 4,
    feedbackType: "Project Ownership & Mentorship",
    content: "Lokesh quickly became a key contributor to the AIMI Bayway project, leading several critical deliverables with precision and ownership. His ability to mentor team members, collaborate effectively with onshore stakeholders, and introduce innovative solutions to streamline handover processes significantly enhanced team performance and project efficiency. His work has been consistently recognized and appreciated by both peers and leadership.",
    reviewer: "Abhimanyu Singh Rathore",
    position: "Management Consultant Manager",
    company: "Accenture",
    rating: 5,
    date: "Mar 2024",
    projectImpact: "Improved handover efficiency and elevated team productivity through mentorship and innovation"
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
    <section id="feedback" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">Feedback Records</h2>
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
