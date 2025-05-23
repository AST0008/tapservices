
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                <div className="aspect-[4/3] bg-gray-200 w-full">
                  <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                    <div className="text-center px-8">
                      <div className="inline-block mb-4">
                        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 12H18M4 22H20C21.1046 22 22 21.1046 22 20V10C22 9.48521 21.8171 8.96859 21.4832 8.5776L21 8M4 22C2.89543 22 2 21.1046 2 20V10C2 9.48521 2.18293 8.96859 2.51677 8.5776L6.8507 2.77253C7.1834 2.31386 7.70815 2.02304 8.27669 2.00094L15.7233 2.00094C16.2918 2.02304 16.8166 2.31386 17.1493 2.77253L21.4832 8.5776C21.8171 8.96859 22 9.48521 22 10V10.5M4 22H3M21 22H20M11 14V22M13 22V14" 
                            stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <h4 className="text-white text-3xl font-bold mb-2">Permit Management</h4>
                      <p className="text-gray-300">Our comprehensive trucking permit solutions simplify compliance for your fleet.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 rounded-full bg-orange-100 -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-orange-50 -z-10"></div>
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
              About <span className="text-orange-500">Us</span>
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Welcome To Tapservices — the biggest trucking permits business, serving more than 5000 customers nationwide over the last ten years. Our team of experts is dedicated to helping trucking companies navigate the complex world of permits and compliance.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              We understand the challenges trucking companies face when it comes to staying compliant with federal and state regulations. That's why we've built a service that takes the hassle out of permit management, allowing you to focus on what matters most—running your business.
            </p>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-lg px-8 py-3 text-lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
