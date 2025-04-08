
import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
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
    <section id="about" ref={sectionRef} className="section-padding bg-white opacity-0">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">About Me</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <p className="text-lg">
              With over 10 years of experience in digital transformation, I help organizations navigate the complex landscape of technology adoption and business process optimization.
            </p>
            <p>
              My expertise spans across enterprise architecture, change management, and innovation strategy. I combine technical knowledge with a deep understanding of business operations to deliver solutions that drive growth and efficiency.
            </p>
            <p>
              I am passionate about emerging technologies like AI, IoT, and blockchain, and how they can be leveraged to create sustainable competitive advantages for organizations.
            </p>
            
            <Card className="p-6 bg-blue-50 border-none">
              <p className="italic">
                "Digital transformation is not just about technology—it's about people, processes, and creating a culture of continuous innovation."
              </p>
            </Card>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-xl overflow-hidden shadow-xl">
              {/* Placeholder for profile image */}
              <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <svg className="w-32 h-32 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-lg bg-primary"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-lg border-2 border-primary"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
