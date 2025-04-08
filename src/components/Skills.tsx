
import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Laptop, Target, Users } from "lucide-react";

const Skills = () => {
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const skillCategories = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Digital Strategy",
      description: "Translating business goals into comprehensive digital roadmaps",
      skills: [
        "Digital Transformation", 
        "Innovation Strategy",
        "Technology Roadmapping",
        "Business Process Redesign",
        "Enterprise Architecture",
        "Digital Maturity Assessment"
      ]
    },
    {
      icon: <Laptop className="h-8 w-8 text-primary" />,
      title: "Technical",
      description: "Advanced technical competencies and technology implementation",
      skills: [
        "AI/ML Implementation", 
        "Cloud Architecture", 
        "Data Analytics",
        "Cybersecurity",
        "IoT Solutions",
        "API Integration",
        "Blockchain",
        "DevOps"
      ]
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Leadership",
      description: "Guiding teams and stakeholders through digital change",
      skills: [
        "Change Management", 
        "Team Leadership", 
        "Stakeholder Management",
        "Project Management",
        "Cross-functional Collaboration",
        "Training & Enablement",
        "Strategic Communication"
      ]
    }
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setAnimated(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="section-padding bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">Skills</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Combining strategic vision with technical expertise to orchestrate successful digital transformation initiatives
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={`category-${index}`}
              className={`overflow-hidden hover-card ${animated ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="h-2 bg-primary"></div>
              <CardContent className="pt-6 pb-0">
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="p-3 bg-blue-50 rounded-full mb-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                  <p className="text-gray-600 text-sm">{category.description}</p>
                </div>
                
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, i) => (
                    <Badge 
                      key={`skill-${i}`} 
                      variant="outline"
                      className={`transition-all ${animated ? 'opacity-100' : 'opacity-0'}`}
                      style={{ transitionDelay: `${(index * 200) + (i * 100)}ms` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-center pt-6 pb-6">
                <div className="h-1 w-12 bg-blue-100 rounded-full"></div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
