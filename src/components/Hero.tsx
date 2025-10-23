import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background -z-10" />
      
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Hi, I'm <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Diego</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            AI/ML Engineer
          </p>
        </div>
        
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
           MSc Student in AI & ML (LM-32) | Focused on integrating machine learning with networked and cloud-based infrastructures to enhance system intelligence. 
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center pt-4">
          <Button variant="hero" size="lg" asChild>
            <a href="#projects">View Projects</a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
          <Button variant="hero" size="lg" asChild>
              <a href="/Portfolio/cv.pdf" download>
                <FileText className="w-5 h-5" />
                Download CV
              </a>
          </Button>
        </div>
        
        <div className="flex gap-4 justify-center pt-8">
          <a href="https://github.com/sciro24" target="_blank" rel="noopener noreferrer" 
             className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/diego-scirocco/" target="_blank" rel="noopener noreferrer"
             className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:diego.scirocco@gmail.com"
             className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
