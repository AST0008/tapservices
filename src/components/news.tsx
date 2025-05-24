import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const News = () => {
  return (
    <section
      id="news"
      className="py-24 bg-gradient-to-br from-white to-orange-50"
    >
      <div className="container px-6 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-4xl font-extrabold mb-4 text-gray-900">
            Have a <span className="text-orange-500">Question?</span> Let’s Get
            You Answers!
          </h2>
          <p className="text-lg text-gray-600">
            We understand trucking paperwork can be confusing. That’s why we’re
            here to help!
          </p>
        </div>

        <Card className="max-w-4xl mx-auto shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-gray-800">
              Common Questions We Can Help With
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-gray-700 text-base leading-relaxed">
            <p>If you have questions about:</p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>Truck registration, permits, or renewals</li>
              <li>DOT compliance</li>
              <li>IFTA or IRP filings</li>
              <li>Any other trucking documentation</li>
            </ul>
            <p>
              Feel free to reach out. Submit your query below and our expert
              team will respond within <strong>24 hours</strong>.
            </p>
          </CardContent>
        </Card>

        {/* <div className="text-center mt-10">
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full shadow-lg transition duration-300"
          >
            Submit a Query
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default News;
