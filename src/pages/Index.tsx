import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LanguageToggle from "@/components/LanguageToggle";

const Index = () => {
  return (
    <div className="min-h-screen">
      <LanguageToggle />
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
