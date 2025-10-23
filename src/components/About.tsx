import { Card } from "@/components/ui/card";
import { Award } from "lucide-react";

const About = () => {
  const certifications = [
    {
      title: "Google Cloud Computing Foundations Certificate",
      issuer: "Google",
      date: "2025"
    },
    {
      title: "AWS Cloud Quest: Cloud Practitioner",
      issuer: "AWS",
      date: "2025"
    },
    {
      title: "OCI 2025 Certified Generative AI Professional",
      issuer: "Oracle",
      date: "2025"
    },
    {
      title: "Cisco CCNA: Routing and Switching ",
      issuer: "Cisco",
      date: "2020"
    },
    {
      title: "Cisco: Introduction to Cybersecurity",
      issuer: "Cisco",
      date: "2020"
    },
    {
      title: "Data Fundamentals",
      issuer: "IBM",
      date: "2025"
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and achievements
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <Card key={index} className="p-4 hover:shadow-lg transition-shadow duration-300">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-1">{cert.title}</h3>
              <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              <p className="text-xs text-muted-foreground mt-1">{cert.date}</p>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
        </div>
      </div>
    </section>
  );
};

export default About;
