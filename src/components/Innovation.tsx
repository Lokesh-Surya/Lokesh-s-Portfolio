
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const Innovation = () => {
  return (
    <section id="innovation" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">Innovation</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>

        <Tabs defaultValue="research" className="w-full">
          <TabsList className="w-full max-w-md mx-auto grid grid-cols-3 mb-12">
            <TabsTrigger value="research">Research</TabsTrigger>
            <TabsTrigger value="patent">Patent</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
          </TabsList>

          {/* Research Section */}
          <TabsContent value="research" className="animate-slide-in">
            <div id="research" className="space-y-12">
              {/* Research Item 1 */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-blue-50 flex items-center justify-center p-8">
                    <div className="text-center">
                      <Badge className="mb-2">Published 2021</Badge>
                      <h3 className="text-xl font-semibold">IOP Conference Series: Earth and Environmental Science</h3>
                      <a 
                        href="https://iopscience.iop.org/article/10.1088/1755-1315/850/1/012038" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary text-sm mt-3 hover:underline"
                      >
                        Read Paper <ExternalLink className="ml-1 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                  <div className="p-8 md:w-2/3">
                    <div className="uppercase tracking-wide text-sm text-primary font-semibold">Research Paper</div>
                    <h3 className="block mt-1 text-lg font-medium">Effect of solidity on the dynamic behaviour of the Darrieus turbine with leading-edge protuberance</h3>
                    <p className="mt-2 text-gray-600">
                      This research explores the dynamic behavior of straight-type Darrieus turbines with leading-edge protuberance under varying solidity and tip speed ratios, identifying optimal blade configurations to mitigate vortex-induced and buffeting vibrations.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Badge variant="outline">Sustainable Technology</Badge>
                      <Badge variant="outline">Wind Energy</Badge>
                      <Badge variant="outline">Vertical Axis Wind Turbine</Badge>
                    </div>
                  </div>
                </div>
              </div>

              {/* Research Item 2 */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-blue-50 flex items-center justify-center p-8">
                    <div className="text-center">
                      <Badge className="mb-2">Published 2020</Badge>
                      <h3 className="text-xl font-semibold">Indian Engineering Congress</h3>
                      <a 
                        href="https://www.ieindia.org/webui/ajax/Downloads/WebUI_PDF/IEC/IEC_35.pdf"
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center text-primary text-sm mt-3 hover:underline"
                      >
                        Read Paper <ExternalLink className="ml-1 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                  <div className="p-8 md:w-2/3">
                    <div className="uppercase tracking-wide text-sm text-primary font-semibold">Research Paper</div>
                    <h3 className="block mt-1 text-lg font-medium">Aerodynamic characteristics of grooved rotating circular cylinder</h3>
                    <p className="mt-2 text-gray-600">
                      This research explores the aerodynamic effects of grooves on a rotating circular cylinder in uniform flow, revealing significant drag reduction and lift enhancement across varying groove and spin ratios through numerical simulations.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Badge variant="outline">Performance Improvement</Badge>
                      <Badge variant="outline">Drag Reduction</Badge>
                      <Badge variant="outline">Lift Enhancement</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Patent Section */}
          <TabsContent value="patent" className="animate-slide-in">
            <div id="patent" className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <Badge className="mb-2">Filed 2021 • Granted 2022</Badge>
                    <h3 className="text-2xl font-bold">Vertical Axis Wind Turbine</h3>
                  </div>
                  <Badge variant="secondary" className="text-lg">Design No: 343102-001</Badge>
                </div>
                
                <p className="text-gray-600 mb-8">
                  Design patent for an innovative vertical axis wind turbine featuring leading-edge protuberances to enhance aerodynamic performance and improve energy capture efficiency.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {/* Patent Diagram 1 */}
                  <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                    <img 
                      src="/isometric-view1.jpg" 
                      alt="Patent Diagram 1" 
                      className="object-contain w-full h-full"
                    />
                  </div>
                  
                  {/* Patent Diagram 2 */}
                  <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                    <img 
                      src="/top-view1.jpg" 
                      alt="Patent Diagram 2" 
                      className="object-contain w-full h-full"
                    />
                  </div>
                  
                  {/* Patent Diagram 3 */}
                  <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                    <img 
                      src="/front-view1.jpg" 
                      alt="Patent Diagram 3" 
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Renewable Energy</Badge>
                  <Badge variant="outline">Sustainability Design</Badge>
                  <Badge variant="outline">Vertical Axis Wind Turbine</Badge>
                  <Badge variant="outline">Leading Edge Protuberance</Badge>
                </div>
                
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-500">
                    This patented design is currently undergoing further research for potential implementation in commercial applications.
                  </p>
                  <a 
                    href="https://drive.google.com/file/d/1B0G62yVw1w5RHAn7xAEYxhS4Vn6C72vQ/view?usp=drive_link"
                    target="_blank" 
                    rel="noopener noreferrer"  
                    className="inline-flex items-center text-primary hover:underline"
                  >
                    View Patent <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Projects Section (previously Startups) */}
          <TabsContent value="projects" className="animate-slide-in">
            <div id="projects" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project 1 */}
              <Card className="hover-card">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">AI-Powered Project Intelligence Platform</CardTitle>
                    <Badge>2025</Badge>
                  </div>
                  <CardDescription>Freelance</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <p>
                    Built a smart project management tool that automates planning, status updates, and risk forecasting using natural language inputs and AI predictions.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between items-center pt-2">
                  <div className="flex gap-2">
                    <Badge variant="outline">Automated Scheduling</Badge>
                    <Badge variant="outline">Risk Prediction</Badge>
                  </div>
                  {/* <a href="#" className="inline-flex items-center text-primary text-sm">
                    Learn more <ArrowUpRight className="ml-1 h-4 w-4" />
                  </a> */}
                </CardFooter>
              </Card>

              {/* Project 2 */}
              <Card className="hover-card">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">Real-Time Project Health Monitoring Tool</CardTitle>
                    <Badge>2024</Badge>
                  </div>
                  <CardDescription>Freelance</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <p>
                    An industrial-grade dashboard that connects with PM tools and field sensors to assess execution health in real-time.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between items-center pt-2">
                  <div className="flex gap-2">
                    <Badge variant="outline">KPI Visualization</Badge>
                    <Badge variant="outline">Early Issue Detection</Badge>
                  </div>
                  {/* <a href="#" className="inline-flex items-center text-primary text-sm">
                    Learn more <ArrowUpRight className="ml-1 h-4 w-4" />
                  </a> */}
                </CardFooter>
              </Card>

              {/* Project 3 */}
              <Card className="hover-card">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">Predictive Resource Allocation System</CardTitle>
                    <Badge>2024</Badge>
                  </div>
                  <CardDescription>Freelance</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <p>
                    Built a system that predicts optimal team allocation across multiple parallel projects using machine learning on historical velocity, task complexity, and availability.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between items-center pt-2">
                  <div className="flex gap-2">
                    <Badge variant="outline">Optimized Staffing</Badge>
                    <Badge variant="outline">Resource Forecasting</Badge>
                  </div>
                  {/* <a href="#" className="inline-flex items-center text-primary text-sm">
                    Learn more <ArrowUpRight className="ml-1 h-4 w-4" />
                  </a> */}
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Innovation;
