
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { client } from '@/lib/sanity';
import { Skeleton } from "@/components/ui/skeleton";

interface BlogPost {
  _id: string;
  title: string;
  description: string;
  publishedAt: string;
  category: string;
}

const BlogSection = () => {
  const { data: posts, isLoading } = useQuery({
    queryKey: ['blogPosts'],
    queryFn: async () => {
      const query = `*[_type == "post"] | order(publishedAt desc) [0...3] {
        _id,
        title,
        description,
        publishedAt,
        category
      }`;
      return client.fetch<BlogPost[]>(query);
    },
  });

  if (isLoading) {
    return (
      <section className="py-24 bg-muted/50">
        <div className="container px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((index) => (
              <Card key={index}>
                <CardHeader>
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-6 w-full mt-2" />
                  <Skeleton className="h-4 w-full mt-2" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-4 w-24" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="py-24 bg-muted/50">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Latest Blog Posts</h2>
          <p className="mt-4 text-muted-foreground">Insights and tutorials on computer science and development.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts?.map((post, index) => (
            <Card key={post._id} className="animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader>
                <div className="text-sm text-muted-foreground">
                  {post.category} • {new Date(post.publishedAt).toLocaleDateString()}
                </div>
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
