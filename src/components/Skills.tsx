
import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Laptop, Target, Users } from "lucide-react";

const Skills = () => {
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const skillCategories = [
    {
      icon: <Target className="h-8 w-8 text-white" />,
      title: "Digital Strategy",
      description: "Translating business goals into comprehensive digital roadmaps",
      gradient: "from-blue-600 to-indigo-600",
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
      icon: <Laptop className="h-8 w-8 text-white" />,
      title: "Technical",
      description: "Advanced technical competencies and technology implementation",
      gradient: "from-indigo-600 to-purple-600",
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
      icon: <Users className="h-8 w-8 text-white" />,
      title: "Leadership",
      description: "Guiding teams and stakeholders through digital change",
      gradient: "from-purple-600 to-pink-500",
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
    <section id="skills" ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden">
      {/* Modern background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/20 to-indigo-50/30"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-40 left-20 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-indigo-200/30 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block py-1 px-3 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-3">My Expertise</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 section-title-gradient">
            Professional Skills
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Combining strategic vision with technical expertise to orchestrate successful digital transformation initiatives
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
          {skillCategories.map((category, index) => (
            <Card 
              key={`category-${index}`}
              className={`overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border-none ${animated ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`h-3 bg-gradient-to-r ${category.gradient}`}></div>
              <CardContent className="pt-10 pb-6 px-8">
                <div className="flex flex-col items-center text-center mb-8">
                  <div className={`p-4 bg-gradient-to-r ${category.gradient} rounded-2xl mb-6 shadow-lg`}>
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{category.title}</h3>
                  <p className="text-gray-600">{category.description}</p>
                </div>
                
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, i) => (
                    <Badge 
                      key={`skill-${i}`} 
                      className={`bg-white shadow-sm border transition-all px-3 py-1.5 text-sm font-medium ${animated ? 'opacity-100' : 'opacity-0'}`}
                      style={{ 
                        transitionDelay: `${(index * 200) + (i * 100)}ms`,
                        borderImage: `linear-gradient(to right, var(--gradient-from-${category.gradient.split(' ')[1].replace('to-', '')}), var(--gradient-to-${category.gradient.split(' ')[2]}))`,
                        borderImageSlice: 1
                      }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-center pt-4 pb-8">
                <div className="h-1 w-16 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full"></div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
