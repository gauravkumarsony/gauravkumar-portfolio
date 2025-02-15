
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center py-32">
      <div className="container px-4">
        <div className="text-center space-y-8 animate-fade-down">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Welcome to My Digital Space
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              A hub for computer science education, project showcases, and professional insights.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group">
              Explore Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              Read Blog
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
        <div className="relative aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-5" />
      </div>
    </section>
  );
};

export default Hero;
