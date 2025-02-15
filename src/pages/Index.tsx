
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import BlogSection from "@/components/BlogSection";
import StudySection from "@/components/StudySection";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="relative overflow-hidden">
      <Navigation />
      <main>
        <Hero />
        <BlogSection />
        <StudySection />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
