
import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 md:order-1">
            <div className="aspect-square rounded-xl overflow-hidden shadow-xl bg-gradient-to-br from-blue-100 to-blue-200">
              {/* Placeholder for profile image */}
              <div className="w-full h-full relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src="/public/IMG_9915.jpg" // or wherever your image is placed
                    alt="Lokesh"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute bottom-4 right-4 bg-white/30 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-medium">
                  Lokesh
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-lg bg-primary"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-lg border-2 border-primary"></div>
          </div>
          
          <div className="space-y-6 order-1 md:order-2">
            <p></p>
            <h3 className="text-2xl font-bold">Digital Transformation Engineer</h3>
            <div className="space-y-4">
              <p>
              With over 3.5 years of experience leading innovation at the intersection of engineering and digital technology, I specialize in helping organizations in energy, oil & gas, and chemical industries evolve into intelligent, data-driven operations.
              </p>
              <p>
              My journey began in mechanical engineering, but my passion for solving complex industrial challenges using smart systems led me to the world of digital transformation. From developing Digital Twins to architecting predictive maintenance workflows and asset integrity frameworks, I blend technical expertise with strategic vision to drive measurable impact.
              </p>
              <p>
              I’ve worked with some of the world’s leading oil & gas, energy, and chemical majors - spearheading multi-site asset integrity projects, automating legacy data migration, and crafting AR-powered dashboards that enhance real-time decision-making on the ground.
              </p>
              <p>
              I'm deeply passionate about exploring how emerging technologies like AI, ML, and Blockchain can be harnessed to create smarter, safer, and more sustainable industrial ecosystems.
              </p>
              <p>
              I believe digital transformation isn't just about implementing technology - it's about reimagining workflows, empowering people, and building a culture of continuous improvement.
              </p>
            </div>
            
            <Card className="p-6 bg-blue-50 border-none">
              <p className="italic">
              "True transformation starts when technology, people, and process converge with purpose."
              </p>
            </Card>
            
            <a 
              href="https://docs.google.com/document/d/1QTISbXtpqeexV_zfbLG5H_rfQ8hsbpLook7a1ocdE9U/edit?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="mt-4 rounded-full" size="lg">
                Download Resume
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
