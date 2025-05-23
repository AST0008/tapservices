
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
            Our <span className="text-orange-500">Goodness</span>
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive trucking permit solutions to keep your business moving forward and in full compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow rounded-xl overflow-hidden bg-white h-full">
            <div className="h-2 bg-orange-500"></div>
            <CardHeader className="pt-8 pb-4">
              <div className="mb-4 inline-block p-3 bg-orange-100 rounded-lg">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12H15M3 9H5M3 15H5M3 12H5M19 9H21M19 15H21M19 12H21M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V6.5C15 7.88071 13.8807 9 12.5 9H11.5C10.1193 9 9 7.88071 9 6.5V5ZM9 19C9 20.1046 9.89543 21 11 21H13C14.1046 21 15 20.1046 15 19V17.5C15 16.1193 13.8807 15 12.5 15H11.5C10.1193 15 9 16.1193 9 17.5V19Z" 
                    stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900">Manage Trucking Permits</CardTitle>
              <CardDescription className="text-gray-600">
                Streamline your permit acquisition and management
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                The FMCSA, the Federal Carrier Motor Safety Administration, is in charge of issuing US DOT numbers. We handle the entire process for you, making it simple to stay compliant with federal regulations.
              </p>
            </CardContent>
          </Card>

          {/* Card 2 */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow rounded-xl overflow-hidden bg-white h-full">
            <div className="h-2 bg-orange-500"></div>
            <CardHeader className="pt-8 pb-4">
              <div className="mb-4 inline-block p-3 bg-orange-100 rounded-lg">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 12V22H4V12M22 7H2V12H22V7ZM12 22V7M12 7H16.2C17.8802 7 18.7202 7 19.362 6.673C19.9265 6.3854 20.3854 5.92648 20.673 5.36204C21 4.72020 21 3.88023 21 2.2V2H3V2.2C3 3.88023 3 4.72020 3.32699 5.36204C3.61458 5.92648 4.07348 6.3854 4.63803 6.673C5.27984 7 6.11983 7 7.8 7H12Z" 
                    stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900">DOT Clearinghouse</CardTitle>
              <CardDescription className="text-gray-600">
                Manage your DOT Clearinghouse requirements effortlessly
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Motorists in specific categories must register to access their stored electronic data. We streamline the registration process and help you maintain compliance with DOT Clearinghouse regulations.
              </p>
            </CardContent>
          </Card>

          {/* Card 3 */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow rounded-xl overflow-hidden bg-white h-full">
            <div className="h-2 bg-orange-500"></div>
            <CardHeader className="pt-8 pb-4">
              <div className="mb-4 inline-block p-3 bg-orange-100 rounded-lg">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 11L12 14L22 4M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" 
                    stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900">DOT Audit Support</CardTitle>
              <CardDescription className="text-gray-600">
                Expert guidance through DOT audits and compliance reviews
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Support for failing safety audits, corrective action plans, and navigating DOT documentation. Our team of experts will guide you through the audit process and help ensure you meet all requirements.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
