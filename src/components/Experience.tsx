import { Card } from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";

const Experience = () => {
  const workExperiences = [
    {
      title: "Research Intern",
      company: "Università degli Studi Roma Tre",
      period: "2024 - 2024",
      description: "Curricular internship"
    },
    {
      title: "IT Infrastructure Manager ",
      company: "S.T.EUR",
      period: "2022 - 2022",
      description: "Network Implementation"
    },
    {
      title: "PCTO: Fideuram Intesa San Paolo",
      company: "Fideuram",
      period: "2018 - 2020",
      description: "Stage"
    }
  ];

  const education = [
    {
      degree: "Master's Degree",
      institution: "Università degli Studi Roma Tre",
      period: "2024 - Present",
      description: "Curriculum: AI & ML"

    },
    {
      degree: "Bachelor's Degree, Computer Engineering",
      institution: "Università degli Studi Roma Tre",
      period: "2020 - 2024",
      description: "Computer Engineering"
    },
    {
      degree: "Diploma",
      institution: "ITC Vincenzo Arangio Ruiz",
      period: "2015 - 2020",
      description: "Computer Technical "
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Education</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional and educational journey
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-teal-500" />
              </div>
              <h3 className="text-2xl font-bold">Experience</h3>
            </div>
            <div className="space-y-4">
              {workExperiences.map((exp, index) => (
                <Card key={index} className="p-5 hover:shadow-lg transition-shadow duration-300">
                  <h4 className="text-lg font-semibold mb-1">{exp.title}</h4>
                  <p className="text-sm text-teal-500 font-medium mb-2">{exp.company}</p>
                  <p className="text-xs text-muted-foreground mb-3">{exp.period}</p>
                  <p className="text-sm text-muted-foreground">{exp.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card key={index} className="p-5 hover:shadow-lg transition-shadow duration-300">
                  <h4 className="text-lg font-semibold mb-1">{edu.degree}</h4>
                  <p className="text-sm text-accent font-medium mb-2">{edu.institution}</p>
                  <p className="text-xs text-muted-foreground mb-3">{edu.period}</p>
                  <p className="text-sm text-muted-foreground">{edu.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
