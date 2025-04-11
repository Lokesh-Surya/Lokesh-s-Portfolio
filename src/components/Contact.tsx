
import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Modern background */}
      <div className="absolute inset-0 modern-gradient-bg opacity-[0.03]"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute -top-40 left-20 w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-[400px] h-[400px] bg-indigo-200/30 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-3">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 section-title-gradient">
            Contact Me
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to discuss digital transformation opportunities? Let's connect.
          </p>
        </div>
        
        <div className="grid md:grid-cols-5 gap-10">
          {/* Contact Info */}
          <div className="md:col-span-2 space-y-8">
            <h3 className="text-3xl font-bold mb-8 section-title-gradient">Let's Connect</h3>
            <p className="text-xl text-gray-600 mb-10">
              Ready to transform your business with innovative digital solutions? Feel free to reach out and let's discuss how we can create impact together.
            </p>
            
            <div className="space-y-8">
              <Card className="glass-morphism border-none shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="flex items-center gap-6 p-6">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 rounded-2xl shadow-lg">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Email</p>
                    <p className="font-medium text-lg">lokesh@example.com</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="glass-morphism border-none shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="flex items-center gap-6 p-6">
                  <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4 rounded-2xl shadow-lg">
                    <Phone className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Phone</p>
                    <p className="font-medium text-lg">+1 (555) 123-4567</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="glass-morphism border-none shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="flex items-center gap-6 p-6">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-2xl shadow-lg">
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Location</p>
                    <p className="font-medium text-lg">San Francisco, CA</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="md:col-span-3">
            <Card className="glass-morphism border-none shadow-2xl rounded-3xl overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
              <CardContent className="p-8 md:p-10">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label htmlFor="name" className="text-sm font-medium block text-gray-700">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="rounded-xl border-gray-200 focus:ring-blue-500 focus:border-blue-500 h-12"
                      />
                    </div>
                    
                    <div className="space-y-3">
                      <label htmlFor="email" className="text-sm font-medium block text-gray-700">
                        Your Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john.doe@example.com"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="rounded-xl border-gray-200 focus:ring-blue-500 focus:border-blue-500 h-12"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <label htmlFor="subject" className="text-sm font-medium block text-gray-700">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="How can I help you?"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="rounded-xl border-gray-200 focus:ring-blue-500 focus:border-blue-500 h-12"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <label htmlFor="message" className="text-sm font-medium block text-gray-700">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Write your message here..."
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="rounded-xl border-gray-200 focus:ring-blue-500 focus:border-blue-500 resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:shadow-blue-500/20"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
