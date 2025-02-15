
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const BlogSection = () => {
  const posts = [
    {
      title: "Understanding Data Structures",
      description: "A comprehensive guide to fundamental data structures in computer science.",
      date: "Mar 1, 2024",
      category: "Computer Science",
    },
    {
      title: "Mastering Algorithms",
      description: "Deep dive into essential algorithms every programmer should know.",
      date: "Feb 28, 2024",
      category: "Programming",
    },
    {
      title: "Web Development Best Practices",
      description: "Learn modern web development techniques and practices.",
      date: "Feb 27, 2024",
      category: "Web Development",
    },
  ];

  return (
    <section id="blog" className="py-24 bg-muted/50">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Latest Blog Posts</h2>
          <p className="mt-4 text-muted-foreground">Insights and tutorials on computer science and development.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <Card key={index} className="animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader>
                <div className="text-sm text-muted-foreground">{post.category} • {post.date}</div>
                <CardTitle className="mt-2">{post.title}</CardTitle>
                <CardDescription>{post.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <a href="#" className="text-sm font-medium text-primary hover:underline">
                  Read more →
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
