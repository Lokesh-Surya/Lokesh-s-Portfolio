
import { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Award } from "lucide-react";

const Certifications = () => {
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-123456",
      skills: ["Cloud Architecture", "AWS", "Infrastructure"]
    },
    {
      name: "Microsoft Certified: Azure Solutions Architect Expert",
      issuer: "Microsoft",
      date: "2022",
      credentialId: "MSFT-789012",
      skills: ["Azure", "Cloud Solutions", "Enterprise Architecture"]
    },
    {
      name: "Certified Scrum Master (CSM)",
      issuer: "Scrum Alliance",
      date: "2021",
      credentialId: "CSM-345678",
      skills: ["Agile", "Scrum", "Project Management"]
    },
    {
      name: "Google Professional Cloud Architect",
      issuer: "Google Cloud",
      date: "2022",
      credentialId: "GCP-901234",
      skills: ["GCP", "Cloud Solutions", "System Design"]
    },
    {
      name: "Certified Digital Transformation Professional",
      issuer: "Digital Transformation Institute",
      date: "2023",
      credentialId: "DTI-567890",
      skills: ["Digital Strategy", "Change Management", "Innovation"]
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
    <section id="certifications" ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden">
      {/* Modern background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/30 via-white to-blue-50/40"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-indigo-200/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-3">Professional Qualifications</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 section-title-gradient">
            Certifications
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional qualifications that validate expertise in digital transformation and technology leadership
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <Card 
              key={`cert-${index}`}
              className={`overflow-hidden rounded-3xl glass-morphism border-none shadow-xl hover:shadow-2xl transition-all duration-500 ${animated ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-gradient-to-br from-blue-400/5 to-indigo-400/5 blur-xl"></div>
              
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg flex-shrink-0">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">{cert.name}</h3>
                    <p className="text-gray-600">{cert.issuer} • {cert.date}</p>
                  </div>
                </div>
                
                <div className="pl-16">
                  <p className="text-xs text-gray-500 mb-4 font-mono">ID: {cert.credentialId}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, i) => (
                      <Badge 
                        key={`skill-${i}`} 
                        className="bg-blue-50 text-blue-700 hover:bg-blue-100 px-2.5 py-1"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
