
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Lokesh</h3>
            <p className="text-gray-400 mb-4">
              Empowering organizations through strategic digital transformation and innovative solutions.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/20 hover:text-primary">
                <Mail className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/20 hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/20 hover:text-primary">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/20 hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-primary transition-colors">About Me</a>
              </li>
              <li>
                <a href="#startups" className="text-gray-400 hover:text-primary transition-colors">Startups</a>
              </li>
              <li>
                <a href="#research" className="text-gray-400 hover:text-primary transition-colors">Research</a>
              </li>
              <li>
                <a href="#patent" className="text-gray-400 hover:text-primary transition-colors">Patent</a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-primary transition-colors">Skills</a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <address className="not-italic text-gray-400">
              <p className="mb-2">San Francisco, CA</p>
              <p className="mb-2">lokesh@example.com</p>
              <p>+1 (555) 123-4567</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Lokesh | Digital Transformation Engineer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
