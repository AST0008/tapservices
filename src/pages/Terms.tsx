import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useEffect, useState } from "react";

const Terms = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" }); // Instant scroll on initial render
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="min-h-screen">
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-gray-800 to-black text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}

      <Navbar />
      <main className="pt-20">
        <div className="container px-4 mx-auto py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Terms and Conditions
            </h1>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  1. Agreement to Terms
                </h2>
                <p>
                  By accessing and using Tapservices, you accept and agree to be
                  bound by the terms and provision of this agreement. If you do
                  not agree to abide by the above, please do not use this
                  service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  2. Services Description
                </h2>
                <p>
                  Tapservices INC provides trucking permit services, DOT
                  clearinghouse support, audit assistance, and related
                  compliance services. We help trucking companies and
                  independent operators maintain compliance with federal and
                  state regulations.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  3. User Responsibilities
                </h2>
                <p>
                  Users are responsible for providing accurate and complete
                  information when requesting services. You agree to cooperate
                  with our team and provide necessary documentation in a timely
                  manner.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  4. Payment Terms
                </h2>
                <p>
                  Payment for services is due according to the terms specified
                  in your service agreement. We accept various payment methods
                  and will provide invoices for all services rendered.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  5. Limitation of Liability
                </h2>
                <p>
                  Tapservices INC shall not be liable for any indirect,
                  incidental, special, consequential, or punitive damages,
                  including without limitation, loss of profits, data, use,
                  goodwill, or other intangible losses.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  6. Governing Law
                </h2>
                <p>
                  These terms shall be interpreted and governed in accordance
                  with the laws of the United States and the state of Texas,
                  without regard to its conflict of law provisions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  7. Changes to Terms
                </h2>
                <p>
                  We reserve the right to modify these terms at any time.
                  Changes will be effective immediately upon posting. Your
                  continued use of our services constitutes acceptance of any
                  changes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  8. Contact Information
                </h2>
                <p>
                  If you have any questions about these Terms and Conditions,
                  please contact us at:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mt-4">
                  <p>
                    <strong>Email:</strong> 1tap@tapservicesusa.com
                  </p>
                  <p>
                    <strong>Phone:</strong> +1 559-721-4467
                  </p>
                  <p>
                    <strong>Address:</strong> 6163 Alluvial Ave, Fresno, CA
                    93722, USA
                  </p>
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

export default Terms;
