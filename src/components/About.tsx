
import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Quote, Award, Lightbulb, Rocket, Layers } from "lucide-react";

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
      className="section-padding bg-gradient-to-b from-white to-blue-50 opacity-0"
    >
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">About Me</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main content card */}
          <div 
            className="lg:col-span-12 opacity-0"
            ref={el => cardRefs.current[0] = el}
          >
            <Card className="overflow-hidden bg-white/80 backdrop-blur-sm border-none shadow-xl p-8 rounded-2xl">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
                
                <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8">
                  Digital Transformation Engineer
                </h3>
                
                <div className="space-y-6 text-gray-700 relative z-10">
                  <p className="text-xl leading-relaxed">
                    With over <span className="font-semibold text-blue-600">3.5 years</span> of experience leading innovation at the intersection of engineering and digital technology, I specialize in helping organizations in energy, oil & gas, and chemical industries evolve into intelligent, data-driven operations.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
                    <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 shadow-sm border border-blue-100 flex flex-col items-center text-center hover:transform hover:scale-105 transition-all">
                      <div className="p-3 bg-blue-100 rounded-full mb-4">
                        <Lightbulb className="h-6 w-6 text-blue-600" />
                      </div>
                      <h4 className="font-semibold text-lg mb-2">Innovation Focus</h4>
                      <p className="text-gray-600">Spearheading digital transformation across multiple industries</p>
                    </div>
                    
                    <div className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-blue-50 shadow-sm border border-purple-100 flex flex-col items-center text-center hover:transform hover:scale-105 transition-all">
                      <div className="p-3 bg-purple-100 rounded-full mb-4">
                        <Rocket className="h-6 w-6 text-purple-600" />
                      </div>
                      <h4 className="font-semibold text-lg mb-2">Technical Expertise</h4>
                      <p className="text-gray-600">Digital Twins, predictive maintenance, and asset integrity frameworks</p>
                    </div>
                    
                    <div className="p-6 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 shadow-sm border border-indigo-100 flex flex-col items-center text-center hover:transform hover:scale-105 transition-all">
                      <div className="p-3 bg-indigo-100 rounded-full mb-4">
                        <Layers className="h-6 w-6 text-indigo-600" />
                      </div>
                      <h4 className="font-semibold text-lg mb-2">Industry Impact</h4>
                      <p className="text-gray-600">Collaborations with leading oil & gas, energy, and chemical majors</p>
                    </div>
                  </div>
                  
                  <div className="p-6 border-l-4 border-blue-500 bg-blue-50 rounded-r-xl">
                    <p className="text-xl">
                      My journey began in mechanical engineering, but my passion for solving complex industrial challenges using smart systems led me to the world of digital transformation.
                    </p>
                  </div>
                  
                  <p className="text-xl leading-relaxed">
                    From developing <span className="font-semibold text-purple-600">Digital Twins</span> to architecting <span className="font-semibold text-purple-600">predictive maintenance workflows</span> and asset integrity frameworks, I blend technical expertise with strategic vision to drive measurable impact.
                  </p>
                  
                  <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl border border-blue-100">
                    <Award className="h-10 w-10 text-blue-500 flex-shrink-0" />
                    <p className="text-xl font-medium">
                      I'm deeply passionate about exploring how emerging technologies like <span className="text-blue-600 font-semibold">AI, ML, and Blockchain</span> can be harnessed to create smarter, safer, and more sustainable industrial ecosystems.
                    </p>
                  </div>
                  
                  <p className="text-xl leading-relaxed">
                    I believe digital transformation isn't just about implementing technology - it's about reimagining workflows, empowering people, and building a culture of continuous improvement.
                  </p>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Quote card */}
          <div 
            className="lg:col-span-12 opacity-0"
            ref={el => cardRefs.current[1] = el}
          >
            <Card className="overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white border-none shadow-xl p-8 rounded-2xl">
              <div className="flex items-center gap-6">
                <div className="bg-white/20 p-4 rounded-full">
                  <Quote className="h-10 w-10 text-white" />
                </div>
                <p className="text-2xl md:text-3xl font-medium italic">
                  "True transformation starts when technology, people, and process converge with purpose."
                </p>
              </div>
            </Card>
          </div>
          
          {/* Resume button */}
          <div 
            className="lg:col-span-12 flex justify-center mt-8 opacity-0"
            ref={el => cardRefs.current[2] = el}
          >
            <a 
              href="https://docs.google.com/document/d/1QTISbXtpqeexV_zfbLG5H_rfQ8hsbpLook7a1ocdE9U/edit?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all p-7" size="lg">
                Download Resume
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
