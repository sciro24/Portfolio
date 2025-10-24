import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Cancer Treatment ML",
      description: "Personalized Medicine: Redefining Cancer Treatment ",
      tags: ["Python", "ML", "Jupyter"],
      github: "https://github.com/sciro24/Cancer_Treatment_ML",
    },
    {
      title: "EEG Emotion Art Generator",
      description: "EEG Emotion Classification and Artistic Generation Integration ",
      tags: ["Python", "Jupyter", "Colab", "TensorFlow", "Keras"],
      github: "https://github.com/sciro24/EEG_Emotion_Art_Generator",
  
    },
    {
      title: "Kathara Networks IDC",
      description: "Kathará lab exercises developed for the Internet and Data Centers course at Roma Tre University.",
      tags: ["Kathara", "Networking", "Shell", "Docker"],
      github: "https://github.com/sciro24/Kathara_Networks_IDC",
    },
    {
      title: "SmellTrigger VR",
      description: "Immersive VR Project with Aromatic Diffusion",
      tags: ["VR", "Meta", "Unity", "Meta Quest"],
      github: "https://github.com/sciro24/SmellTrigger_VR",
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my GitHub projects, showcasing my skills and experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{project.title}</span>
                  <div className="flex gap-2">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Button size="icon" variant="ghost">
                        <Github className="w-4 h-4" />
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
