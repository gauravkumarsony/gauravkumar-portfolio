
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, Video, FileText, Download } from "lucide-react";
import { client } from '@/lib/sanity';
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

interface StudyMaterial {
  _id: string;
  title: string;
  description: string;
  type: 'video' | 'pdf' | 'reading';
  fileUrl?: string;
  videoUrl?: string;
}

const StudySection = () => {
  const { data: materials, isLoading } = useQuery({
    queryKey: ['studyMaterials'],
    queryFn: async () => {
      const query = `*[_type == "studyMaterial"] {
        _id,
        title,
        description,
        type,
        "fileUrl": file.asset->url,
        videoUrl
      }`;
      return client.fetch<StudyMaterial[]>(query);
    },
  });

  const getIcon = (type: string) => {
    switch (type) {
      case 'video':
        return Video;
      case 'pdf':
        return FileText;
      default:
        return Book;
    }
  };

  if (isLoading) {
    return (
      <section className="py-24">
        <div className="container px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((index) => (
              <Card key={index}>
                <CardHeader>
                  <Skeleton className="h-12 w-12 rounded-lg" />
                  <Skeleton className="h-6 w-full mt-4" />
                  <Skeleton className="h-4 w-full mt-2" />
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="study" className="py-24">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Study Materials</h2>
          <p className="mt-4 text-muted-foreground">Comprehensive resources for computer science students.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {materials?.map((material, index) => {
            const Icon = getIcon(material.type);
            return (
              <Card key={material._id} className="animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 p-3 mb-4">
                    <Icon className="h-full w-full text-primary" />
                  </div>
                  <CardTitle>{material.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{material.description}</p>
                  {material.type === 'video' && material.videoUrl && (
                    <Button variant="outline" className="w-full" asChild>
                      <a href={material.videoUrl} target="_blank" rel="noopener noreferrer">
                        <Video className="mr-2 h-4 w-4" />
                        Watch Video
                      </a>
                    </Button>
                  )}
                  {material.type === 'pdf' && material.fileUrl && (
                    <Button variant="outline" className="w-full" asChild>
                      <a href={material.fileUrl} target="_blank" rel="noopener noreferrer">
                        <Download className="mr-2 h-4 w-4" />
                        Download PDF
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            )})}
        </div>
      </div>
    </section>
  );
};

export default StudySection;
