
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Lightbulb, FileText, Code, Shield, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Innovation = () => {
  const [activeTab, setActiveTab] = useState("research");

  return (
    <section id="innovation" className="py-24 md:py-32 relative overflow-hidden">
      {/* White theme background effects with reduced intensity */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-blue-50/30 -z-10"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-blue-100/20 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-indigo-100/20 blur-3xl -z-10"></div>
      <div className="absolute top-1/3 left-1/2 w-48 h-48 rounded-full bg-purple-100/20 blur-2xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-blue-400"></div>
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-medium">INNOVATION & RESEARCH</span>
            <div className="h-[1px] w-12 bg-gradient-to-r from-blue-400 to-transparent"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center section-title-gradient">Innovation Portfolio</h2>
          <p className="text-lg md:text-xl text-center text-gray-600 max-w-3xl mx-auto">
            A showcase of cutting-edge research, patents, and transformative projects
          </p>
        </div>

        {/* Custom Tab Navigation - Lighter theme */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="grid grid-cols-3 gap-3 p-1.5 bg-gray-100/70 backdrop-blur-lg rounded-xl">
            <button
              onClick={() => setActiveTab("research")}
              className={`py-3 px-5 rounded-lg font-medium transition-all ${
                activeTab === "research"
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                  : "text-gray-600 hover:text-gray-900"
              }`}
              id="research-tab"
              aria-selected={activeTab === "research"}
            >
              <div className="flex flex-col items-center gap-1">
                <FileText className="h-5 w-5" />
                <span>Research</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab("patent")}
              className={`py-3 px-5 rounded-lg font-medium transition-all ${
                activeTab === "patent"
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                  : "text-gray-600 hover:text-gray-900"
              }`}
              id="patent-tab"
              aria-selected={activeTab === "patent"}
            >
              <div className="flex flex-col items-center gap-1">
                <Shield className="h-5 w-5" />
                <span>Patent</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab("projects")}
              className={`py-3 px-5 rounded-lg font-medium transition-all ${
                activeTab === "projects"
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                  : "text-gray-600 hover:text-gray-900"
              }`}
              id="projects-tab"
              aria-selected={activeTab === "projects"}
            >
              <div className="flex flex-col items-center gap-1">
                <Code className="h-5 w-5" />
                <span>Projects</span>
              </div>
            </button>
          </div>
        </div>

        {/* Research Tab Content - White theme */}
        <div className={`transition-all duration-500 ${activeTab === "research" ? "opacity-100" : "hidden opacity-0"}`} id="research">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Research Item 1 */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-300 to-indigo-300 rounded-xl opacity-40 blur-sm group-hover:opacity-60 transition-all"></div>
              <div className="relative p-1 bg-white rounded-xl h-full overflow-hidden">
                <div className="bg-white shadow-sm rounded-lg p-8 h-full">
                  <div className="flex justify-between items-start mb-6">
                    <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">Published 2022</Badge>
                    <Lightbulb className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-blue-700 transition-colors">Enhancing Enterprise Agility Through Integrated Digital Transformation Frameworks</h3>
                  <p className="text-gray-600 mb-6">
                    This research explores how organizations can develop integrated frameworks for digital transformation that enhance operational agility while maintaining strategic alignment.
                  </p>
                  <div className="mb-6">
                    <p className="text-sm text-gray-500 mb-1">Published in:</p>
                    <p className="text-gray-800 font-medium">Journal of Digital Transformation</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="border-blue-300 text-blue-700">Digital Strategy</Badge>
                    <Badge variant="outline" className="border-blue-300 text-blue-700">Enterprise Architecture</Badge>
                    <Badge variant="outline" className="border-blue-300 text-blue-700">Organizational Change</Badge>
                  </div>
                  <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 group p-0">
                    <span className="flex items-center">
                      Read Paper <ExternalLink className="ml-1 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </Button>
                </div>
              </div>
            </div>

            {/* Research Item 2 */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-300 to-purple-300 rounded-xl opacity-40 blur-sm group-hover:opacity-60 transition-all"></div>
              <div className="relative p-1 bg-white rounded-xl h-full overflow-hidden">
                <div className="bg-white shadow-sm rounded-lg p-8 h-full">
                  <div className="flex justify-between items-start mb-6">
                    <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200">Published 2020</Badge>
                    <Lightbulb className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-purple-700 transition-colors">AI-Driven Decision Support Systems for Strategic Business Transformation</h3>
                  <p className="text-gray-600 mb-6">
                    This study examines the implementation of AI-based decision support systems in strategic business transformation initiatives, with a focus on measuring ROI and organizational impact.
                  </p>
                  <div className="mb-6">
                    <p className="text-sm text-gray-500 mb-1">Published in:</p>
                    <p className="text-gray-800 font-medium">International Journal of AI Applications</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="border-purple-300 text-purple-700">Artificial Intelligence</Badge>
                    <Badge variant="outline" className="border-purple-300 text-purple-700">Decision Support</Badge>
                    <Badge variant="outline" className="border-purple-300 text-purple-700">ROI Measurement</Badge>
                  </div>
                  <Button variant="ghost" size="sm" className="text-purple-600 hover:text-purple-700 hover:bg-purple-50 group p-0">
                    <span className="flex items-center">
                      Read Paper <ExternalLink className="ml-1 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Patent Tab Content - White theme */}
        <div className={`transition-all duration-500 ${activeTab === "patent" ? "opacity-100" : "hidden opacity-0"}`} id="patent">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 rounded-2xl opacity-40 blur-md"></div>
            <div className="relative bg-white/95 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-100 shadow-lg">
              <div className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                  <div>
                    <Badge className="mb-4 bg-indigo-100 text-indigo-700 hover:bg-indigo-200">Filed 2019 • Granted 2021</Badge>
                    <h3 className="text-3xl font-bold text-gray-800 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Distributed Ledger System for Digital Identity Verification</h3>
                  </div>
                  <Badge variant="secondary" className="text-lg bg-gray-100 text-gray-700">US 10,984,469</Badge>
                </div>
                
                <p className="text-gray-600 text-lg mb-10">
                  A system and method for secure digital identity verification using distributed ledger technology. This invention provides a tamper-proof and privacy-preserving framework for managing digital identities across multiple platforms and applications.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                  {/* Patent Diagram 1 */}
                  <div className="bg-white shadow-sm rounded-xl p-6 aspect-square flex flex-col items-center justify-center border border-gray-100">
                    <div className="w-24 h-24 rounded-full bg-indigo-50 flex items-center justify-center mb-4">
                      <svg className="w-12 h-12 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Distributed Architecture</h4>
                    <p className="text-gray-600 text-center">Decentralized identity verification across multiple nodes</p>
                  </div>
                  
                  {/* Patent Diagram 2 */}
                  <div className="bg-white shadow-sm rounded-xl p-6 aspect-square flex flex-col items-center justify-center border border-gray-100">
                    <div className="w-24 h-24 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                      <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Consensus Protocol</h4>
                    <p className="text-gray-600 text-center">Secure validation mechanism for identity assertions</p>
                  </div>
                  
                  {/* Patent Diagram 3 */}
                  <div className="bg-white shadow-sm rounded-xl p-6 aspect-square flex flex-col items-center justify-center border border-gray-100">
                    <div className="w-24 h-24 rounded-full bg-purple-50 flex items-center justify-center mb-4">
                      <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Privacy Controls</h4>
                    <p className="text-gray-600 text-center">User-controlled disclosure of identity attributes</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  <Badge variant="outline" className="px-4 py-2 border-blue-300 text-blue-700">Blockchain</Badge>
                  <Badge variant="outline" className="px-4 py-2 border-blue-300 text-blue-700">Digital Identity</Badge>
                  <Badge variant="outline" className="px-4 py-2 border-blue-300 text-blue-700">Privacy</Badge>
                  <Badge variant="outline" className="px-4 py-2 border-blue-300 text-blue-700">Security</Badge>
                </div>
                
                <div className="flex items-center gap-2 text-gray-600">
                  <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                  </svg>
                  <span>This patent has been cited by over 20 subsequent patent applications and is currently being implemented in commercial applications.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Tab Content - White theme */}
        <div className={`transition-all duration-500 ${activeTab === "projects" ? "opacity-100" : "hidden opacity-0"}`} id="projects">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project 1 */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-300 to-indigo-400 rounded-xl opacity-40 blur-sm group-hover:opacity-60 transition-all"></div>
              <div className="relative bg-white shadow-md rounded-xl overflow-hidden h-full border border-gray-100">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/30 rounded-bl-full blur-xl"></div>
                <div className="p-8 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-6">
                    <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">2019</Badge>
                    <Code className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-800 group-hover:text-blue-700 transition-colors">AI Assistant Platform</h3>
                  <p className="text-gray-700 mb-2">Project Lead</p>
                  <p className="text-gray-600 mb-8 flex-grow">
                    Developed an AI-powered virtual assistant platform that provides personalized support for customer service across multiple industries.
                  </p>
                  <div className="mt-auto">
                    <div className="flex gap-2 mb-4">
                      <Badge variant="outline" className="border-blue-300 text-blue-700">AI</Badge>
                      <Badge variant="outline" className="border-blue-300 text-blue-700">NLP</Badge>
                    </div>
                    <Button asChild variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 group p-0">
                      <a href="#" className="inline-flex items-center">
                        View Project <ArrowUpRight className="ml-1 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-indigo-300 to-purple-400 rounded-xl opacity-40 blur-sm group-hover:opacity-60 transition-all"></div>
              <div className="relative bg-white shadow-md rounded-xl overflow-hidden h-full border border-gray-100">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-100/30 rounded-bl-full blur-xl"></div>
                <div className="p-8 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-6">
                    <Badge className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200">2018</Badge>
                    <Code className="h-5 w-5 text-indigo-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-800 group-hover:text-indigo-700 transition-colors">Smart City Dashboard</h3>
                  <p className="text-gray-700 mb-2">Technical Architect</p>
                  <p className="text-gray-600 mb-8 flex-grow">
                    Designed and implemented a comprehensive smart city monitoring dashboard that integrates data from multiple IoT sources for real-time decision making.
                  </p>
                  <div className="mt-auto">
                    <div className="flex gap-2 mb-4">
                      <Badge variant="outline" className="border-indigo-300 text-indigo-700">IoT</Badge>
                      <Badge variant="outline" className="border-indigo-300 text-indigo-700">Data Visualization</Badge>
                    </div>
                    <Button asChild variant="ghost" size="sm" className="text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 group p-0">
                      <a href="#" className="inline-flex items-center">
                        View Project <ArrowUpRight className="ml-1 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-purple-300 to-pink-400 rounded-xl opacity-40 blur-sm group-hover:opacity-60 transition-all"></div>
              <div className="relative bg-white shadow-md rounded-xl overflow-hidden h-full border border-gray-100">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100/30 rounded-bl-full blur-xl"></div>
                <div className="p-8 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-6">
                    <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200">2017</Badge>
                    <Code className="h-5 w-5 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-800 group-hover:text-purple-700 transition-colors">FinTech Payment Solution</h3>
                  <p className="text-gray-700 mb-2">Solution Architect</p>
                  <p className="text-gray-600 mb-8 flex-grow">
                    Created a secure, scalable payment processing system that handles millions of transactions monthly with advanced fraud detection capabilities.
                  </p>
                  <div className="mt-auto">
                    <div className="flex gap-2 mb-4">
                      <Badge variant="outline" className="border-purple-300 text-purple-700">FinTech</Badge>
                      <Badge variant="outline" className="border-purple-300 text-purple-700">Security</Badge>
                    </div>
                    <Button asChild variant="ghost" size="sm" className="text-purple-600 hover:text-purple-700 hover:bg-purple-50 group p-0">
                      <a href="#" className="inline-flex items-center">
                        View Project <ArrowUpRight className="ml-1 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Innovation;
