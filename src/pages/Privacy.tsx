
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <div className="container px-4 mx-auto py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
              
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
                <p>
                  We collect information you provide directly to us, such as when you create an account, request services, 
                  or contact us for support. This may include your name, email address, phone number, company information, 
                  and details about your trucking operations.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process your permit applications and compliance requests</li>
                  <li>Communicate with you about our services</li>
                  <li>Ensure compliance with federal and state regulations</li>
                  <li>Provide customer support and respond to your inquiries</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Information Sharing</h2>
                <p>
                  We may share your information with government agencies as required for permit processing and compliance purposes. 
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
                  except as described in this policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Security</h2>
                <p>
                  We implement appropriate security measures to protect your personal information against unauthorized access, 
                  alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic 
                  storage is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Retention</h2>
                <p>
                  We retain your personal information for as long as necessary to provide our services and comply with 
                  legal obligations. We may retain certain information for legitimate business purposes or as required by law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Your Rights</h2>
                <p>You have the right to:</p>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  <li>Access and update your personal information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Request a copy of your personal information</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Cookies and Tracking</h2>
                <p>
                  Our website uses cookies and similar tracking technologies to enhance your experience, analyze usage, 
                  and assist with our marketing efforts. You can control cookie settings through your browser preferences.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any significant changes 
                  by posting the new policy on our website and updating the "Last updated" date below.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mt-4">
                  <p><strong>Email:</strong> privacy@tapservices.com</p>
                  <p><strong>Phone:</strong> 1-800-PERMITS (1-800-737-6487)</p>
                  <p><strong>Address:</strong> 123 Trucking Way, Houston, TX 77001, USA</p>
                </div>
              </section>

              <div className="text-sm text-gray-500 mt-12 pt-8 border-t">
                <p>Last updated: {new Date().toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
