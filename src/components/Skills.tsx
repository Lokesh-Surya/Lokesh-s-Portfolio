
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect, useRef } from "react";

const Skills = () => {
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const technicalSkills = [
    { name: "Digital Strategy", value: 95 },
    { name: "Enterprise Architecture", value: 90 },
    { name: "Data Analytics", value: 85 },
    { name: "AI Implementation", value: 80 },
    { name: "Cloud Infrastructure", value: 75 }
  ];
  
  const managementSkills = [
    { name: "Project Management", value: 90 },
    { name: "Change Management", value: 85 },
    { name: "Team Leadership", value: 95 },
    { name: "Business Analysis", value: 80 },
    { name: "Stakeholder Management", value: 90 }
  ];
  
  const technologies = [
    "AI/ML", "Cloud Computing", "Blockchain", "IoT", "Big Data", 
    "DevOps", "Microservices", "Agile", "RPA", "UI/UX", "API Integration",
    "Cybersecurity"
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
    <section id="skills" ref={sectionRef} className="section-padding">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">Skills</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <h3 className="text-xl font-bold mb-6">Technical Expertise</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={`tech-${index}`}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.value}%</span>
                  </div>
                  <Progress 
                    value={animated ? skill.value : 0} 
                    className="h-2 transition-all duration-1000" 
                    style={{ transitionDelay: `${index * 100}ms` }}
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Management Skills */}
          <div>
            <h3 className="text-xl font-bold mb-6">Management Skills</h3>
            <div className="space-y-6">
              {managementSkills.map((skill, index) => (
                <div key={`mgmt-${index}`}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.value}%</span>
                  </div>
                  <Progress 
                    value={animated ? skill.value : 0} 
                    className="h-2 transition-all duration-1000" 
                    style={{ transitionDelay: `${(index + 5) * 100}ms` }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Technologies */}
        <Card className="mt-12">
          <CardContent className="pt-6">
            <h3 className="text-xl font-bold mb-6">Technologies & Frameworks</h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <Badge 
                  key={`tech-${index}`} 
                  variant="secondary" 
                  className={`text-sm py-2 px-3 ${animated ? 'opacity-100' : 'opacity-0'}`}
                  style={{ transition: 'opacity 0.5s ease', transitionDelay: `${index * 50}ms` }}
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
