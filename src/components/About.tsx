
import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Quote, Award, Lightbulb, Rocket, Layers, Download } from "lucide-react";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            entry.target.classList.remove("opacity-0");
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });
    
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef} 
      className="py-24 md:py-32 relative overflow-hidden opacity-0"
    >
      {/* Modern background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50/50"></div>
      <div className="absolute top-0 right-0 w-full h-full">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-indigo-200/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-3">About Me</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 section-title-gradient">
            Digital Transformation Engineer
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 gap-12">
          {/* Main content card */}
          <div 
            className="opacity-0"
            ref={el => cardRefs.current[0] = el}
          >
            <Card className="glass-morphism border-none shadow-2xl p-8 md:p-12 rounded-3xl">
              <div className="space-y-10">
                <div className="space-y-6 text-gray-700 relative z-10">
                  <p className="text-2xl md:text-3xl leading-relaxed font-light">
                    With over <span className="font-bold text-blue-600">3.5 years</span> of experience leading innovation at the intersection of engineering and digital technology, I specialize in helping organizations in energy, oil & gas, and chemical industries evolve into intelligent, data-driven operations.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-14">
                    <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100/50 shadow-lg border border-blue-100 flex flex-col items-center text-center hover:transform hover:scale-105 transition-all duration-500">
                      <div className="p-4 bg-blue-100 rounded-2xl mb-6 shadow-inner">
                        <Lightbulb className="h-8 w-8 text-blue-600" />
                      </div>
                      <h4 className="font-semibold text-xl mb-3">Innovation Focus</h4>
                      <p className="text-gray-700">Spearheading digital transformation across multiple industries</p>
                    </div>
                    
                    <div className="p-8 rounded-2xl bg-gradient-to-br from-indigo-50 to-indigo-100/50 shadow-lg border border-indigo-100 flex flex-col items-center text-center hover:transform hover:scale-105 transition-all duration-500">
                      <div className="p-4 bg-indigo-100 rounded-2xl mb-6 shadow-inner">
                        <Rocket className="h-8 w-8 text-indigo-600" />
                      </div>
                      <h4 className="font-semibold text-xl mb-3">Technical Expertise</h4>
                      <p className="text-gray-700">Digital Twins, predictive maintenance, and asset integrity frameworks</p>
                    </div>
                    
                    <div className="p-8 rounded-2xl bg-gradient-to-br from-violet-50 to-violet-100/50 shadow-lg border border-violet-100 flex flex-col items-center text-center hover:transform hover:scale-105 transition-all duration-500">
                      <div className="p-4 bg-violet-100 rounded-2xl mb-6 shadow-inner">
                        <Layers className="h-8 w-8 text-violet-600" />
                      </div>
                      <h4 className="font-semibold text-xl mb-3">Industry Impact</h4>
                      <p className="text-gray-700">Collaborations with leading oil & gas, energy, and chemical majors</p>
                    </div>
                  </div>
                  
                  <div className="p-8 border-l-4 border-blue-500 bg-blue-50 rounded-r-xl shadow-md">
                    <p className="text-2xl">
                      My journey began in mechanical engineering, but my passion for solving complex industrial challenges using smart systems led me to the world of digital transformation.
                    </p>
                  </div>
                  
                  <p className="text-xl md:text-2xl leading-relaxed">
                    From developing <span className="font-semibold text-indigo-600">Digital Twins</span> to architecting <span className="font-semibold text-indigo-600">predictive maintenance workflows</span> and asset integrity frameworks, I blend technical expertise with strategic vision to drive measurable impact.
                  </p>
                  
                  <div className="flex items-center gap-6 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 shadow-md">
                    <Award className="h-12 w-12 text-blue-500 flex-shrink-0" />
                    <p className="text-xl md:text-2xl font-medium">
                      I'm deeply passionate about exploring how emerging technologies like <span className="text-indigo-600 font-bold">AI, ML, and Blockchain</span> can be harnessed to create smarter, safer, and more sustainable industrial ecosystems.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Quote card */}
          <div 
            className="opacity-0"
            ref={el => cardRefs.current[1] = el}
          >
            <Card className="overflow-hidden modern-gradient-bg text-white border-none shadow-2xl p-8 md:p-12 rounded-3xl">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="bg-white/20 p-6 rounded-2xl backdrop-blur-sm">
                  <Quote className="h-16 w-16 text-white" />
                </div>
                <p className="text-2xl md:text-4xl font-medium italic">
                  "True transformation starts when technology, people, and process converge with purpose."
                </p>
              </div>
            </Card>
          </div>
          
          {/* Resume button */}
          <div 
            className="flex justify-center mt-8 opacity-0"
            ref={el => cardRefs.current[2] = el}
          >
            <a 
              href="https://docs.google.com/document/d/1QTISbXtpqeexV_zfbLG5H_rfQ8hsbpLook7a1ocdE9U/edit?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all p-8 text-lg font-medium shadow-lg hover:shadow-xl hover:shadow-blue-500/20" size="lg">
                <Download className="mr-3 h-5 w-5" />
                Download Resume
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
