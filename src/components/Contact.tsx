
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Globe } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/yourusername",
      icon: Github,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourusername",
      icon: Linkedin,
    },
    {
      name: "Email",
      url: "mailto:your.email@example.com",
      icon: Mail,
    },
    {
      name: "Website",
      url: "https://yourwebsite.com",
      icon: Globe,
    },
  ];

  return (
    <section id="contact" className="py-24 bg-muted/50">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About Me</h2>
            <p className="mt-4 text-muted-foreground">
              Hello! I'm John Doe, a passionate computer science educator and software developer.
            </p>
          </div>

          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="prose max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  With over 5 years of experience in software development and education, 
                  I'm dedicated to making complex computer science concepts accessible to everyone. 
                  My work focuses on creating comprehensive educational content and building 
                  innovative software solutions.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Feel free to reach out for collaborations, questions, or just to say hello!
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((link) => (
              <Button
                key={link.name}
                variant="outline"
                className="gap-2"
                asChild
              >
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  <link.icon className="h-4 w-4" />
                  {link.name}
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
