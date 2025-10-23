import { Card } from "@/components/ui/card";
// Non è più necessaria l'icona Award se si usano i loghi specifici
// import { Award } from "lucide-react";

// Importa i loghi direttamente
import googleLogo from '/logos/google.png';
import awsLogo from '/logos/aws.png';
import oracleLogo from '/logos/oracle.png';
import ciscoLogo from '/logos/cisco.png';
import ibmLogo from '/logos/ibm.png';

const About = () => {
  const certifications = [
    {
      title: "Google Cloud Computing Foundations Certificate",
      issuer: "Google",
      date: "2025",
      logo: googleLogo
    },
    {
      title: "AWS Cloud Quest: Cloud Practitioner",
      issuer: "AWS",
      date: "2025",
      logo: awsLogo
    },
    {
      title: "OCI 2025 Certified Generative AI Professional",
      issuer: "Oracle",
      date: "2025",
      logo: oracleLogo
    },
    {
      title: "Cisco CCNA: Routing and Switching ",
      issuer: "Cisco",
      date: "2020",
      logo: ciscoLogo
    },
    {
      title: "Cisco: Introduction to Cybersecurity",
      issuer: "Cisco",
      date: "2020",
      logo: ciscoLogo
    },
    {
      title: "Data Fundamentals",
      issuer: "IBM",
      date: "2025",
      logo: ibmLogo
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
            <Card key={index} className="p-4 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
              <img src={cert.logo} alt={`${cert.issuer} logo`} className="w-10 h-10 object-contain mb-3" />
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
