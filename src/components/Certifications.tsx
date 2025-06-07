import { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, ExternalLink } from "lucide-react";

const Certifications = () => {
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const certifications = [
    {
      name: "Project Managment Professional (PMP)",
      issuer: "Project Managment Institute (PMI)",
      date: "2025",
      credentialId: "4113366",
      skills: ["Project Management", "Predictive", "Agile", "Hybrid"],
      image: "/blob.png",
      certificateUrl: "https://drive.google.com/file/d/1iqgwxpll5gn-I81cmqlAQzYqLsDZsoGQ/view?usp=drive_link"
    },
    {
      name: "Certified Maintenance & Reliability Professional (CMRP)",
      issuer: "Society for Maintenance & Reliability Professionals (SMRP)",
      date: "2025",
      credentialId: "13362",
      skills: ["CMMS", "Business Management", "Organization & Leadership", "Manufacturing Process Reliability"],
      image: "/CMRP.png",
      certificateUrl: "https://drive.google.com/file/d/1xo1jCKEjf5HtHz8jfF0lUOLBwHg45ULF/view?usp=drive_link"
    },
    {
      name: "Six Sigma Green Belt Specialization",
      issuer: "Kennesaw State University, Coursera",
      date: "2024",
      credentialId: "NIL",
      skills: ["Team Management", "Quality Improvement", "Process Capability", "Process Improvement"],
      image: "/Green-Belt.png",
      certificateUrl: "#" // Will be conditionally excluded below
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

                <div className="flex flex-wrap gap-2 mb-4">
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

                {cert.certificateUrl && cert.certificateUrl !== "#" && (
                  <a
                    href={cert.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full flex justify-center"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Certificate
                    </Button>
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
