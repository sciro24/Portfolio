import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration and admin dashboard",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Task Management App",
      description: "Collaborative task manager with real-time updates and team features",
      tags: ["TypeScript", "React", "Supabase", "Tailwind"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Portfolio Generator",
      description: "Tool to automatically generate beautiful portfolios from GitHub data",
      tags: ["Next.js", "API", "Vercel", "CSS"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather tracking with forecasts and interactive maps",
      tags: ["React", "OpenWeather API", "Charts", "PWA"],
      github: "https://github.com",
      demo: "https://demo.com"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects showcasing my skills and experience
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{project.title}</span>
                  <div className="flex gap-2">
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                       className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button size="icon" variant="ghost">
                        <Github className="w-4 h-4" />
                      </Button>
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer"
                       className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button size="icon" variant="ghost">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </a>
                  </div>
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
