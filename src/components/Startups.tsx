import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Rocket, Globe, Shield, Zap, Users, Monitor, PieChart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Startups = () => {
  return (
    <section id="startups" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 -z-10"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl opacity-70 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-indigo-200/30 to-blue-200/30 rounded-full blur-3xl opacity-60 -z-10"></div>
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-green-100/40 rounded-full blur-xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-blue-500"></div>
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-medium">MY VENTURES</span>
            <div className="h-[1px] w-12 bg-gradient-to-r from-blue-500 to-transparent"></div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center section-title-gradient">Transformative Startups</h2>
          <p className="text-lg md:text-xl text-center text-gray-600 max-w-3xl mx-auto">
            Pioneering ventures at the intersection of technology and innovation, designed to create lasting impact
          </p>
        </div>

        <div className="grid gap-12 mb-16">
          {/* Main startup - Greenome */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 rounded-3xl blur-md opacity-60 group-hover:opacity-80 transition duration-1000"></div>
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden hover-card">
              <div className="grid md:grid-cols-2">
                <div className="p-10 md:p-12 flex flex-col justify-center">
                  <Badge className="w-fit mb-5 bg-green-100 text-green-800 hover:bg-green-200">2023-Present</Badge>
                  <h3 className="text-3xl md:text-4xl font-bold mb-5 bg-gradient-to-r from-green-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">Greenome</h3>
                  <h4 className="text-xl mb-4 text-gray-700">Founder & CTO</h4>
                  <p className="text-gray-600 text-lg mb-7">
                    Building a climate tech platform designed to create carbon-aware global citizens through carbon footprint analysis, 
                    sustainability education, and gamified learning experiences that promote eco-friendly habits.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    <Badge variant="outline" className="px-4 py-1.5 border-green-400 text-green-700 bg-green-50">Green Technology</Badge>
                    <Badge variant="outline" className="px-4 py-1.5 border-blue-400 text-blue-700 bg-blue-50">Carbon Offset</Badge>
                    <Badge variant="outline" className="px-4 py-1.5 border-indigo-400 text-indigo-700 bg-indigo-50">Sustainability Education</Badge>
                  </div>
                  <Button asChild variant="outline" className="w-fit group border-2 rounded-full px-6 py-5 hover:bg-gradient-to-r hover:from-green-600 hover:to-blue-600 hover:text-white hover:border-transparent transition-all">
                    <a href="https://www.greenome.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-lg">
                      Explore Project 
                      <ArrowUpRight className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                  </Button>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-blue-50 p-10 md:p-12 flex flex-col justify-center">
                  <div className="glass-morphism w-full h-full rounded-xl flex flex-col justify-center p-8 shadow-sm">
                    <div className="mb-8 flex justify-center">
                      <div className="relative">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-blue-400 blur-sm animate-pulse"></div>
                        <div className="relative h-20 w-20 rounded-full bg-white flex items-center justify-center">
                          <Globe className="h-10 w-10 text-green-600" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center mb-10">
                      <h4 className="text-2xl font-bold mb-2 text-gray-800">Global Impact</h4>
                      <div className="flex items-center justify-center gap-3 mb-3">
                        <div className="h-3 w-3 rounded-full bg-green-500"></div>
                        <p className="text-gray-600">Active in <span className="font-bold">12+</span> countries</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="bg-white/80 rounded-xl p-4 shadow-sm">
                        <div className="flex justify-center mb-2">
                          <Users className="h-6 w-6 text-blue-600" />
                        </div>
                        <p className="text-2xl font-bold text-center">25K+</p>
                        <p className="text-xs text-gray-500 text-center">Active Users</p>
                      </div>
                      <div className="bg-white/80 rounded-xl p-4 shadow-sm">
                        <div className="flex justify-center mb-2">
                          <PieChart className="h-6 w-6 text-indigo-600" />
                        </div>
                        <p className="text-2xl font-bold text-center">48%</p>
                        <p className="text-xs text-gray-500 text-center">ROI</p>
                      </div>
                      <div className="bg-white/80 rounded-xl p-4 shadow-sm">
                        <div className="flex justify-center mb-2">
                          <Monitor className="h-6 w-6 text-purple-600" />
                        </div>
                        <p className="text-2xl font-bold text-center">3.2M</p>
                        <p className="text-xs text-gray-500 text-center">Revenue</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-center items-center">
                      <div className="bg-green-50 rounded-full px-4 py-1.5 inline-flex items-center gap-1.5">
                        <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-sm text-green-700">18 Team Members</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Other startups - Modern card grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* BlockChain Solutions */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-3xl blur-md opacity-60 group-hover:opacity-80 transition duration-1000"></div>
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="grid md:grid-cols-5">
                  <div className="md:col-span-3 p-8 flex flex-col justify-center">
                    <Badge className="w-fit mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">2018-2020</Badge>
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">BlockChain Solutions</h3>
                    <p className="text-gray-600 text-lg mb-5">
                      A blockchain-based supply chain verification platform that ensures 
                      transparency and traceability for global enterprises.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      <Badge variant="outline" className="px-3 py-1 border-blue-400 text-blue-700 bg-blue-50">Blockchain</Badge>
                      <Badge variant="outline" className="px-3 py-1 border-cyan-400 text-cyan-700 bg-cyan-50">Supply Chain</Badge>
                    </div>
                    <Button asChild variant="ghost" className="w-fit group p-0 hover:bg-transparent">
                      <a href="#" className="inline-flex items-center text-blue-700 font-medium">
                        View details <ArrowUpRight className="ml-1 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </a>
                    </Button>
                  </div>
                  <div className="md:col-span-2 bg-gradient-to-br from-blue-50 to-cyan-50 p-8 flex items-center justify-center">
                    <div className="w-full h-full flex flex-col justify-center items-center">
                      <div className="mb-5">
                        <div className="relative">
                          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 blur-sm animate-pulse"></div>
                          <div className="relative h-16 w-16 rounded-full bg-white flex items-center justify-center">
                            <Shield className="h-8 w-8 text-blue-600" />
                          </div>
                        </div>
                      </div>
                      <h4 className="text-xl font-bold mb-1 text-center">Fraud Reduction</h4>
                      <p className="text-3xl font-bold text-center text-blue-700 mb-3">37%</p>
                      <div className="bg-blue-100 rounded-full px-4 py-1.5 inline-flex items-center">
                        <span className="text-sm text-blue-700">1.8M Users</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* IoT Innovate */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-amber-400 rounded-3xl blur-md opacity-60 group-hover:opacity-80 transition duration-1000"></div>
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="grid md:grid-cols-5">
                  <div className="md:col-span-3 p-8 flex flex-col justify-center">
                    <Badge className="w-fit mb-4 bg-amber-100 text-amber-800 hover:bg-amber-200">2016-2018</Badge>
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">IoT Innovate</h3>
                    <p className="text-gray-600 text-lg mb-5">
                      An IoT solution for industrial environments that reduces energy consumption 
                      through smart monitoring and predictive maintenance.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      <Badge variant="outline" className="px-3 py-1 border-amber-400 text-amber-700 bg-amber-50">IoT</Badge>
                      <Badge variant="outline" className="px-3 py-1 border-orange-400 text-orange-700 bg-orange-50">Energy</Badge>
                    </div>
                    <Button asChild variant="ghost" className="w-fit group p-0 hover:bg-transparent">
                      <a href="#" className="inline-flex items-center text-amber-700 font-medium">
                        View details <ArrowUpRight className="ml-1 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </a>
                    </Button>
                  </div>
                  <div className="md:col-span-2 bg-gradient-to-br from-amber-50 to-orange-50 p-8 flex items-center justify-center">
                    <div className="w-full h-full flex flex-col justify-center items-center">
                      <div className="mb-5">
                        <div className="relative">
                          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 blur-sm animate-pulse"></div>
                          <div className="relative h-16 w-16 rounded-full bg-white flex items-center justify-center">
                            <Zap className="h-8 w-8 text-amber-600" />
                          </div>
                        </div>
                      </div>
                      <h4 className="text-xl font-bold mb-1 text-center">Energy Savings</h4>
                      <p className="text-3xl font-bold text-center text-amber-700 mb-3">28%</p>
                      <div className="bg-amber-100 rounded-full px-4 py-1.5 inline-flex items-center">
                        <span className="text-sm text-amber-700">56K Devices</span>
                      </div>
                    </div>
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

export default Startups;
