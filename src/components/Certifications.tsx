import { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

const Certifications = () => {
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-123456",
      skills: ["Cloud Architecture", "AWS", "Infrastructure"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=80&h=80&fit=crop"
    },
    {
      name: "Microsoft Certified: Azure Solutions Architect Expert",
      issuer: "Microsoft",
      date: "2022",
      credentialId: "MSFT-789012",
      skills: ["Azure", "Cloud Solutions", "Enterprise Architecture"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=80&h=80&fit=crop"
    },
    {
      name: "Certified Scrum Master (CSM)",
      issuer: "Scrum Alliance",
      date: "2021",
      credentialId: "CSM-345678",
      skills: ["Agile", "Scrum", "Project Management"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=80&h=80&fit=crop"
    },
    {
      name: "Google Professional Cloud Architect",
      issuer: "Google Cloud",
      date: "2022",
      credentialId: "GCP-901234",
      skills: ["GCP", "Cloud Solutions", "System Design"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=80&h=80&fit=crop"
    },
    {
      name: "Certified Digital Transformation Professional",
      issuer: "Digital Transformation Institute",
      date: "2023",
      credentialId: "DTI-567890",
      skills: ["Digital Strategy", "Change Management", "Innovation"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=80&h=80&fit=crop"
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
    <section id="certifications" ref={sectionRef} className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">Certifications</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Professional qualifications that validate expertise in digital transformation and technology leadership
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card 
              key={`cert-${index}`}
              className={`overflow-hidden hover-card ${animated ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <div className="w-16 h-16 rounded-lg bg-gray-100 overflow-hidden mr-4 flex-shrink-0">
                    <img 
                      src={cert.image} 
                      alt={cert.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      <h3 className="font-bold text-lg">{cert.name}</h3>
                    </div>
                    <p className="text-gray-600 text-sm">{cert.issuer} • {cert.date}</p>
                  </div>
                </div>
                
                <p className="text-xs text-gray-500 mb-3">Credential ID: {cert.credentialId}</p>
                
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, i) => (
                    <Badge 
                      key={`skill-${i}`} 
                      variant="secondary"
                      className="bg-blue-50 text-blue-700 hover:bg-blue-100"
                    >
                      {skill}
                    </Badge>
                  ))}
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
