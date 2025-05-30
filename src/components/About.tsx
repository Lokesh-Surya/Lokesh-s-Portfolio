
import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Quote } from "lucide-react";

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
    <section id="about" ref={sectionRef} className="section-padding bg-gradient-to-b from-white to-blue-50 opacity-0">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">About Me</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>
        
        <div className="space-y-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 transform hover:-translate-y-1 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-gradient mb-6">Digital Transformation Engineer</h3>
            
            <div className="space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed">
                I drive <span className="font-semibold text-primary">innovation and operational excellence</span> across North America, Europe, and India by partnering with leading global energy, oil & gas, and chemical companies to deliver complex, multi-site digital transformation projects that enable intelligent, data-driven operations.
              </p>
              
              <div className="border-l-4 border-primary pl-6 py-2">
                <p className="text-lg">
                  Leveraging a strong foundation in engineering and digital technology, I lead cross-functional teams to solve complex industrial challenges through smart, scalable solutions that improve asset integrity, safety, and operational efficiency.
                </p>
              </div>
              
              <p className="text-lg leading-relaxed">
                From developing <span className="font-semibold">Digital Twins</span> to architecting <span className="font-semibold">predictive maintenance workflows</span> and asset integrity frameworks, I blend technical expertise with strategic vision to drive measurable impact.
              </p>
              
              <p className="text-lg leading-relaxed">
                I've worked with some of the world's leading oil & gas, energy, and chemical majors - spearheading multi-site asset integrity projects, automating legacy data migration, and crafting AR-powered dashboards that enhance real-time decision-making on the ground.
              </p>
              
              <div className="flex items-center space-x-3 pl-4 border-l-4 border-blue-300">
                <p className="text-lg font-medium">
                  I'm deeply passionate about exploring how emerging technologies like <span className="text-primary font-semibold">AI, ML, and Blockchain</span> can be harnessed to create smarter, safer, and more sustainable industrial ecosystems.
                </p>
              </div>
              
              <p className="text-lg leading-relaxed">
                I believe digital transformation isn't just about implementing technology - it's about reimagining workflows, empowering people, and building a culture of continuous improvement.
              </p>
            </div>
          </div>
          
          <Card className="p-8 bg-blue-50 border-none shadow-md hover:shadow-lg transition-all">
            <div className="flex items-start">
              <Quote className="text-primary h-10 w-10 mr-4 flex-shrink-0" />
              <p className="italic text-xl font-medium text-gray-700">
                "True transformation starts when technology, people, and process converge with purpose."
              </p>
            </div>
          </Card>
          
          <div className="flex justify-center mt-8">
            <a 
              href="https://drive.google.com/file/d/1rEhdiNBV1QF8XhHnWdHUm1MafELIHGey/view?usp=drive_link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button className="rounded-full" size="lg">
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
