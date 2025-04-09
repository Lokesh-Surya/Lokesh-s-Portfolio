
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Rocket, Globe, Users, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Startups = () => {
  return (
    <section id="startups" className="section-padding relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white -z-10"></div>
      <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-blue-100 rounded-full blur-3xl opacity-50 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-50 rounded-full blur-3xl opacity-60 -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-blue-50 rounded-full mb-4">
            <Rocket className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">My Startups</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-center text-gray-600 max-w-2xl">
            Innovative ventures transforming industries through cutting-edge technology solutions
          </p>
        </div>

        <div className="grid gap-8 lg:gap-16">
          {/* Main startup feature */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover-card">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <Badge className="w-fit mb-4">2020-Present</Badge>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">TechSynergy</h3>
                <p className="text-gray-600 mb-6">
                  As Founder & CTO, I lead the development of an AI-powered platform that revolutionizes 
                  enterprise workflows through predictive analytics and automated decision-making processes, 
                  helping organizations achieve operational excellence.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="outline">Artificial Intelligence</Badge>
                  <Badge variant="outline">SaaS Platform</Badge>
                  <Badge variant="outline">Enterprise Solutions</Badge>
                </div>
                <Button asChild variant="outline" size="sm" className="w-fit">
                  <a href="#" className="inline-flex items-center">
                    Learn more <ArrowUpRight className="ml-1 h-4 w-4" />
                  </a>
                </Button>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 md:p-10 flex flex-col justify-center items-center">
                <div className="bg-white/80 w-full h-full rounded-xl flex flex-col justify-center items-center p-6 shadow-sm">
                  <div className="flex justify-center items-center mb-4">
                    <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center">
                      <Globe className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div className="text-center">
                    <h4 className="font-bold mb-2">Global Impact</h4>
                    <p className="text-sm text-gray-500 mb-4">Deployed across 12+ countries</p>
                    
                    <div className="flex items-center justify-center gap-1 mb-4">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      <p className="text-xs text-gray-600">Active Users</p>
                      <span className="text-sm font-bold ml-1">25K+</span>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="p-2 bg-blue-50 rounded">
                        <p className="text-sm font-bold">48%</p>
                        <p className="text-xs text-gray-500">ROI</p>
                      </div>
                      <div className="p-2 bg-blue-50 rounded">
                        <p className="text-sm font-bold">3.2M</p>
                        <p className="text-xs text-gray-500">Revenue</p>
                      </div>
                      <div className="p-2 bg-blue-50 rounded">
                        <p className="text-sm font-bold">18</p>
                        <p className="text-xs text-gray-500">Team</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Other startups */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* BlockChain Solutions */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover-card">
              <div className="grid md:grid-cols-2">
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <Badge className="w-fit mb-4">2018-2020</Badge>
                  <h3 className="text-xl md:text-2xl font-bold mb-3">BlockChain Solutions</h3>
                  <p className="text-gray-600 mb-4">
                    Led the development of a blockchain-based supply chain verification platform that ensures 
                    transparency and traceability for global enterprises, reducing fraud and improving efficiency.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">Blockchain</Badge>
                    <Badge variant="outline">Supply Chain</Badge>
                  </div>
                  <Button asChild variant="outline" size="sm" className="w-fit">
                    <a href="#" className="inline-flex items-center">
                      Learn more <ArrowUpRight className="ml-1 h-4 w-4" />
                    </a>
                  </Button>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 md:p-8 flex flex-col justify-center items-center">
                  <div className="bg-white/80 w-full h-full rounded-xl flex flex-col justify-center items-center p-5 shadow-sm">
                    <div className="flex justify-center items-center mb-4">
                      <div className="h-14 w-14 rounded-full bg-green-100 flex items-center justify-center">
                        <Shield className="h-7 w-7 text-green-600" />
                      </div>
                    </div>
                    <div className="text-center">
                      <h4 className="font-bold mb-2">Security Impact</h4>
                      <p className="text-sm text-gray-500 mb-4">Trusted by 8+ industries</p>
                      
                      <div className="flex items-center justify-center gap-1 mb-4">
                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                        <p className="text-xs text-gray-600">Fraud Reduction</p>
                        <span className="text-sm font-bold ml-1">37%</span>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div className="p-2 bg-green-50 rounded">
                          <p className="text-sm font-bold">42%</p>
                          <p className="text-xs text-gray-500">Cost</p>
                        </div>
                        <div className="p-2 bg-green-50 rounded">
                          <p className="text-sm font-bold">1.8M</p>
                          <p className="text-xs text-gray-500">Users</p>
                        </div>
                        <div className="p-2 bg-green-50 rounded">
                          <p className="text-sm font-bold">12</p>
                          <p className="text-xs text-gray-500">Team</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* IoT Innovate */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover-card">
              <div className="grid md:grid-cols-2">
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <Badge className="w-fit mb-4">2016-2018</Badge>
                  <h3 className="text-xl md:text-2xl font-bold mb-3">IoT Innovate</h3>
                  <p className="text-gray-600 mb-4">
                    Developed an IoT solution for industrial environments that reduced energy consumption 
                    and maintenance costs through smart monitoring and predictive maintenance algorithms.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">IoT</Badge>
                    <Badge variant="outline">Energy</Badge>
                  </div>
                  <Button asChild variant="outline" size="sm" className="w-fit">
                    <a href="#" className="inline-flex items-center">
                      Learn more <ArrowUpRight className="ml-1 h-4 w-4" />
                    </a>
                  </Button>
                </div>
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 md:p-8 flex flex-col justify-center items-center">
                  <div className="bg-white/80 w-full h-full rounded-xl flex flex-col justify-center items-center p-5 shadow-sm">
                    <div className="flex justify-center items-center mb-4">
                      <div className="h-14 w-14 rounded-full bg-yellow-100 flex items-center justify-center">
                        <Zap className="h-7 w-7 text-yellow-600" />
                      </div>
                    </div>
                    <div className="text-center">
                      <h4 className="font-bold mb-2">Energy Savings</h4>
                      <p className="text-sm text-gray-500 mb-4">Deployed in 30+ facilities</p>
                      
                      <div className="flex items-center justify-center gap-1 mb-4">
                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                        <p className="text-xs text-gray-600">Energy Reduction</p>
                        <span className="text-sm font-bold ml-1">28%</span>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div className="p-2 bg-yellow-50 rounded">
                          <p className="text-sm font-bold">42%</p>
                          <p className="text-xs text-gray-500">Cost</p>
                        </div>
                        <div className="p-2 bg-yellow-50 rounded">
                          <p className="text-sm font-bold">56K</p>
                          <p className="text-xs text-gray-500">Devices</p>
                        </div>
                        <div className="p-2 bg-yellow-50 rounded">
                          <p className="text-sm font-bold">9</p>
                          <p className="text-xs text-gray-500">Team</p>
                        </div>
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
