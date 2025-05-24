
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Services from "@/components/services";
import Statistics  from "@/components/statistics";
import Testimonials from "@/components/testimonials";
import News from "@/components/news";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

const Index = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Statistics  />
        <Testimonials />
        <News />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
