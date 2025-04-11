
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Twitter, ChevronRight, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Logo and Info */}
          <div>
            <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Lokesh</h3>
            <p className="text-gray-300 mb-8 text-lg">
              Empowering organizations through strategic digital transformation and innovative solutions.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="group">
                <div className="h-12 w-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-blue-500/20 hover:border-blue-500/50 transition-all">
                  <Mail className="h-5 w-5 text-gray-300 group-hover:text-blue-400" />
                </div>
              </a>
              <a href="#" className="group">
                <div className="h-12 w-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-blue-500/20 hover:border-blue-500/50 transition-all">
                  <Linkedin className="h-5 w-5 text-gray-300 group-hover:text-blue-400" />
                </div>
              </a>
              <a href="#" className="group">
                <div className="h-12 w-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-blue-500/20 hover:border-blue-500/50 transition-all">
                  <Github className="h-5 w-5 text-gray-300 group-hover:text-blue-400" />
                </div>
              </a>
              <a href="#" className="group">
                <div className="h-12 w-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-blue-500/20 hover:border-blue-500/50 transition-all">
                  <Twitter className="h-5 w-5 text-gray-300 group-hover:text-blue-400" />
                </div>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-8 text-white/90">Navigation</h4>
            <ul className="space-y-4">
              <li>
                <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group">
                  <ChevronRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                  About Me
                </a>
              </li>
              <li>
                <a href="#startups" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group">
                  <ChevronRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                  Startups
                </a>
              </li>
              <li>
                <a href="#research" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group">
                  <ChevronRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                  Research
                </a>
              </li>
              <li>
                <a href="#patent" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group">
                  <ChevronRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                  Patent
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group">
                  <ChevronRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                  Projects
                </a>
              </li>
              <li>
                <a href="#certifications" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group">
                  <ChevronRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                  Certifications
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group">
                  <ChevronRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                  Skills
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-8 text-white/90">Contact</h4>
            <address className="not-italic text-gray-300 space-y-6">
              <p className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-blue-400 flex-shrink-0 mt-1" />
                <span>San Francisco, CA</span>
              </p>
              <p className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-blue-400 flex-shrink-0" />
                <span>lokesh@example.com</span>
              </p>
              <p className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-blue-400 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-10 mt-10 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Lokesh | Digital Transformation Engineer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
