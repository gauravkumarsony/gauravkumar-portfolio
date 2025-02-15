
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Blog = () => {
  const posts = [
    {
      title: "Understanding Data Structures",
      description: "A comprehensive guide to fundamental data structures in computer science.",
      date: "Mar 1, 2024",
      category: "Computer Science",
      content: "Data structures are fundamental building blocks in computer science...",
    },
    {
      title: "Mastering Algorithms",
      description: "Deep dive into essential algorithms every programmer should know.",
      date: "Feb 28, 2024",
      category: "Programming",
      content: "Understanding algorithms is crucial for solving complex problems...",
    },
    {
      title: "Web Development Best Practices",
      description: "Learn modern web development techniques and practices.",
      date: "Feb 27, 2024",
      category: "Web Development",
      content: "Modern web development requires understanding of various technologies...",
    },
  ];

  return (
    <div className="relative overflow-hidden min-h-screen">
      <Navigation />
      <main className="pt-24">
        <section className="py-12">
          <div className="container px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Blog Posts</h1>
              <p className="mt-4 text-muted-foreground">
                Exploring topics in computer science, programming, and web development
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, index) => (
                <Card key={index} className="animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardHeader>
                    <div className="text-sm text-muted-foreground">
                      {post.category} • {post.date}
                    </div>
                    <CardTitle className="mt-2">{post.title}</CardTitle>
                    <CardDescription>{post.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {post.content.substring(0, 100)}...
                    </p>
                    <a href="#" className="text-sm font-medium text-primary hover:underline">
                      Read more →
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Blog;
