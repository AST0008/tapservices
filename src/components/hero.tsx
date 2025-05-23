
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-32 pb-16 hero-gradient">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0 lg:pr-10 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900">
              Nationwide Trucking Permits Made <span className="text-orange-500">Easy</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Helping over 5000 truckers stay compliant for 10+ years.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 rounded-xl font-semibold text-lg">
                Get Started
              </Button>
              <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50 px-8 py-6 rounded-xl font-semibold text-lg">
                Contact Us
              </Button>
            </div>
          </div>

          {/* Right Content - Dashboard Illustration */}
          <div className="w-full lg:w-1/2 opacity-0 animate-scale-in" style={{ animationDelay: '0.6s' }}>
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-orange-500 rounded-full opacity-20"></div>
              <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-orange-500 rounded-full opacity-20"></div>
              
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 p-1">
                <div className="bg-gray-50 rounded-xl p-6 relative">
                  {/* Mock Dashboard Header */}
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <h3 className="font-bold text-lg text-gray-800">Permit Dashboard</h3>
                      <p className="text-gray-500 text-sm">Your permits at a glance</p>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-8 h-8 bg-orange-100 rounded-md flex items-center justify-center">
                        <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                      </div>
                      <div className="w-8 h-8 bg-gray-200 rounded-md"></div>
                    </div>
                  </div>
                  
                  {/* Mock Charts and Data */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="text-sm font-medium text-gray-500 mb-2">Active Permits</h4>
                      <div className="text-2xl font-bold text-gray-800">24</div>
                      <div className="h-2 bg-gray-200 rounded-full mt-2">
                        <div className="h-2 bg-orange-500 rounded-full w-3/4"></div>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="text-sm font-medium text-gray-500 mb-2">Expiring Soon</h4>
                      <div className="text-2xl font-bold text-gray-800">3</div>
                      <div className="h-2 bg-gray-200 rounded-full mt-2">
                        <div className="h-2 bg-orange-500 rounded-full w-1/4"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Mock Table */}
                  <div className="bg-white rounded-lg shadow-sm p-4">
                    <h4 className="font-medium text-gray-800 mb-3">Recent Permits</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center pb-2 border-b">
                        <div>
                          <div className="font-medium">IFTA Q2 2023</div>
                          <div className="text-xs text-gray-500">Expires: Aug 31, 2023</div>
                        </div>
                        <div className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Active</div>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b">
                        <div>
                          <div className="font-medium">Oversize Load FL-283</div>
                          <div className="text-xs text-gray-500">Expires: Jul 15, 2023</div>
                        </div>
                        <div className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">Pending</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-medium">UCR Registration</div>
                          <div className="text-xs text-gray-500">Expires: Dec 31, 2023</div>
                        </div>
                        <div className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Active</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
