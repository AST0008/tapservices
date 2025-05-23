
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-r from-orange-500 to-orange-600 relative overflow-hidden">
      {/* Decorative Shapes */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Interested in working with Tapservices?
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-orange-50">
            Let's discuss how we can help you streamline your trucking permit process and keep your business compliant.
          </p>
          <Button className="bg-white text-orange-500 hover:bg-orange-50 hover:text-orange-600 px-8 py-6 text-lg rounded-xl shadow-lg transition-all duration-300 font-semibold">
            Schedule a Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
