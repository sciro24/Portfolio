import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
        </p>
        
        <Card className="p-8">
          <div className="grid md:grid-cols-2 gap-6">
            <a href="mailto:diego.scirocco@gmail.com" 
               className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted transition-colors">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold">Email</h3>
                <p className="text-sm text-muted-foreground">diego.scirocco@gmail.com</p>
              </div>
            </a>
            
            <a href="https://github.com/sciro24" target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted transition-colors">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Github className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold">GitHub</h3>
                <p className="text-sm text-muted-foreground">@sciro24</p>
              </div>
            </a>
            
            <a href="https://www.linkedin.com/in/diego-scirocco/" target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted transition-colors">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Linkedin className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold">LinkedIn</h3>
                <p className="text-sm text-muted-foreground">Diego Scirocco</p>
              </div>
            </a>
            
            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted transition-colors">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold">Resume</h3>
                <p className="text-sm text-muted-foreground">Download CV</p>
              </div>
            </a>
          </div>
        </Card>
        
        <div className="mt-12">
          <Button variant="hero" size="lg" asChild>
            <a href="mailto:diego.scirocco@gmail.com">Send Me a Message</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
