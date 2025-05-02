
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-blue-500/5 rounded-full filter blur-[100px]" />
      
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-radio text-3xl md:text-4xl font-bold text-gradient tracking-tight mb-4">
            Let's Connect
          </h2>
          <p className="text-white/70 max-w-xl mx-auto">
            Have a project in mind or just want to say hello? Feel free to reach out!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="glass-morph bg-white/5 border-white/10 focus:border-primary/50 w-full"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="glass-morph bg-white/5 border-white/10 focus:border-primary/50 w-full"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="glass-morph bg-white/5 border-white/10 focus:border-primary/50 min-h-[120px]"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="glass-morph border-primary/20 hover:border-primary/40 w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="glass-morph rounded-xl p-6">
              <h3 className="font-radio text-xl font-semibold mb-6 text-gradient">Contact Information</h3>
              
              <div className="space-y-4">
                <a 
                  href="mailto:hello@joaquinmedina.com" 
                  className="flex items-center text-white/80 hover:text-white transition-colors"
                >
                  <Mail className="h-5 w-5 mr-3 text-primary" />
                  <span>hello@joaquinmedina.com</span>
                </a>
                
                <a 
                  href="https://linkedin.com/in/joaquinmedina" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-white/80 hover:text-white transition-colors"
                >
                  <Linkedin className="h-5 w-5 mr-3 text-primary" />
                  <span>linkedin.com/in/joaquinmedina</span>
                </a>
                
                <a 
                  href="https://github.com/joaquinmedina" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-white/80 hover:text-white transition-colors"
                >
                  <Github className="h-5 w-5 mr-3 text-primary" />
                  <span>github.com/joaquinmedina</span>
                </a>
              </div>
            </div>
            
            <div className="glass-morph rounded-xl p-6">
              <h3 className="font-radio text-xl font-semibold mb-4 text-gradient">Location</h3>
              <p className="text-white/80">Based in Buenos Aires, Argentina</p>
              <p className="mt-2 text-white/80">Available for remote work worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
