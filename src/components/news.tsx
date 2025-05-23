
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const News = () => {
  return (
    <section id="news" className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
            Company's <span className="text-orange-500">News</span>
          </h2>
          <p className="text-lg text-gray-600">
            Stay up-to-date with the latest industry news, company updates, and trucking permit insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* News Card 1 */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden rounded-xl">
            <div className="h-48 bg-gray-200">
              <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-orange-500 opacity-20"></div>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10">
                  <path d="M6 12H18M4 22H20C21.1046 22 22 21.1046 22 20V10C22 9.48521 21.8171 8.96859 21.4832 8.5776L21 8M4 22C2.89543 22 2 21.1046 2 20V10C2 9.48521 2.18293 8.96859 2.51677 8.5776L6.8507 2.77253C7.1834 2.31386 7.70815 2.02304 8.27669 2.00094L15.7233 2.00094C16.2918 2.02304 16.8166 2.31386 17.1493 2.77253L21.4832 8.5776C21.8171 8.96859 22 9.48521 22 10V10.5M4 22H3M21 22H20M11 14V22M13 22V14" 
                    stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <CardHeader className="pt-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-500">June 15, 2023</span>
                <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs rounded-full">Industry</span>
              </div>
              <CardTitle className="text-xl font-bold text-gray-900">Freight Payment and Auditing Services</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                The trucking industry continues to evolve with new regulations. Learn how our freight payment and auditing services can help your business stay ahead.
              </p>
              <Button variant="ghost" className="text-orange-500 hover:text-orange-600 hover:bg-orange-50 p-0">
                Read More &rarr;
              </Button>
            </CardContent>
          </Card>

          {/* News Card 2 */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden rounded-xl">
            <div className="h-48 bg-gray-200">
              <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-orange-500 opacity-20"></div>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10">
                  <path d="M9 12H15M3 9H5M3 15H5M3 12H5M19 9H21M19 15H21M19 12H21M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V6.5C15 7.88071 13.8807 9 12.5 9H11.5C10.1193 9 9 7.88071 9 6.5V5ZM9 19C9 20.1046 9.89543 21 11 21H13C14.1046 21 15 20.1046 15 19V17.5C15 16.1193 13.8807 15 12.5 15H11.5C10.1193 15 9 16.1193 9 17.5V19Z" 
                    stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <CardHeader className="pt-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-500">May 28, 2023</span>
                <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs rounded-full">Updates</span>
              </div>
              <CardTitle className="text-xl font-bold text-gray-900">Freight Payment and Auditing Services</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                We've updated our freight payment and auditing services to include new features that make tracking and managing your payments easier than ever.
              </p>
              <Button variant="ghost" className="text-orange-500 hover:text-orange-600 hover:bg-orange-50 p-0">
                Read More &rarr;
              </Button>
            </CardContent>
          </Card>

          {/* News Card 3 */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden rounded-xl">
            <div className="h-48 bg-gray-200">
              <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-orange-500 opacity-20"></div>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10">
                  <path d="M9 11L12 14L22 4M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" 
                    stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <CardHeader className="pt-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-500">April 10, 2023</span>
                <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs rounded-full">Guide</span>
              </div>
              <CardTitle className="text-xl font-bold text-gray-900">Freight Payment and Auditing Services</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                A comprehensive guide to understanding freight payment and auditing services, and how they can benefit your trucking company.
              </p>
              <Button variant="ghost" className="text-orange-500 hover:text-orange-600 hover:bg-orange-50 p-0">
                Read More &rarr;
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button className="bg-gray-100 hover:bg-gray-200 text-gray-900 px-8 py-3 rounded-lg">
            View All News
          </Button>
        </div>
      </div>
    </section>
  );
};

export default News;
