
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import BlogSection from "@/components/BlogSection";
import StudySection from "@/components/StudySection";

const Index = () => {
  return (
    <div className="relative overflow-hidden">
      <Navigation />
      <main>
        <Hero />
        <BlogSection />
        <StudySection />
      </main>
    </div>
  );
};

export default Index;
