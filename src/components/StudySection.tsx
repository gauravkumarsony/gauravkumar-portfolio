
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, Video, FileText } from "lucide-react";

const StudySection = () => {
  const materials = [
    {
      title: "Lecture Videos",
      description: "Watch comprehensive video lectures on various CS topics.",
      icon: Video,
    },
    {
      title: "Study Notes",
      description: "Access detailed PDF notes and study materials.",
      icon: FileText,
    },
    {
      title: "Reading Materials",
      description: "Curated reading lists and reference materials.",
      icon: Book,
    },
  ];

  return (
    <section id="study" className="py-24">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Study Materials</h2>
          <p className="mt-4 text-muted-foreground">Comprehensive resources for computer science students.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {materials.map((material, index) => (
            <Card key={index} className="animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 p-3 mb-4">
                  <material.icon className="h-full w-full text-primary" />
                </div>
                <CardTitle>{material.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{material.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudySection;
