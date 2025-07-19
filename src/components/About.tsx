
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
            <h3 className="text-2xl font-bold text-gradient mb-6">Lokesh Umapathi</h3>
            
            <div className="space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed">
                As a <span className="text-gradient font-bold">PMP®</span> <span className="text-black font-bold">certified</span> <span className="text-gradient font-bold">Project Manager</span> and an <span className="text-gradient font-bold">Intelligent</span> <span className="text-black font-bold">Reliability & Asset Integrity</span> <span className="text-gradient font-bold">Expert</span> with extensive experience in spearheading multi-site digital transformation initiatives for leading global <span className="text-black font-semibold">energy, oil & gas, and chemical companies</span> across <span className="text-black font-semibold">North America, Europe, and India</span>, enhancing operational resilience and asset performance.
              </p>
              
              <div className="border-l-4 border-primary pl-6 py-2">
                <p className="text-lg">
                  My credentials, including <span className="text-gradient font-bold">Project Management Professional (PMP®)</span>, <span className="text-gradient font-bold">Certified Maintenance and Reliability Professional (CMRP®)</span>, <span className="text-black font-semibold">Six Sigma Green Belt (SSGB)</span>, and <span className="text-black font-semibold">Theory of Constraints (TOC)</span>, underpin my expertise in managing all facets of the project lifecycle, from scope and budget to quality and proactive risk mitigation. I utilize <span className="text-black font-semibold">Agile and Waterfall frameworks</span> and foster cross-functional collaboration for major <span className="text-gradient font-bold">Fortune 500</span> clients like <span className="text-gradient font-bold">PHILLIPS 66, SHELL PLC, and CELANESE</span>.
                </p>
              </div>
              
              <p className="text-lg leading-relaxed">
                Combining <span className="text-black font-semibold">strategic vision with hands-on execution</span>, I lead teams to solve <span className="text-black font-semibold">complex industrial challenges</span>, translating high-level business objectives into granular technical execution while ensuring alignment with <span className="text-black font-semibold">business objectives and regulatory standards</span>.
              </p>
              
              <p className="text-lg leading-relaxed">
                Passionate about <span className="text-gradient font-bold">emerging technologies</span>, I champion the adoption of <span className="text-gradient font-bold">AI, Machine Learning, and automation</span> to drive <span className="text-black font-semibold">predictive maintenance, digital twins</span>, and other advanced frameworks.
              </p>
              
              <div className="flex items-center space-x-3 pl-4 border-l-4 border-blue-300">
                <p className="text-lg font-medium">
                  I have a proven track record of implementing <span className="text-black font-semibold">process improvements</span>, identifying <span className="text-black font-semibold">bottlenecks</span>, and enhancing <span className="text-gradient font-bold">operational excellence</span>, consistently delivering <span className="text-black font-semibold">high-quality features and measurable results</span>.
                </p>
              </div>
              
              <p className="text-lg leading-relaxed">
                I believe <span className="text-gradient font-bold">digital transformation</span> isn't just about implementing technology—it's about <span className="text-black font-semibold">reimagining workflows, empowering people, and building a culture of continuous improvement</span>.
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
