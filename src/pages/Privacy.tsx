import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useEffect, useState } from "react";

const Privacy = () => {
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
              Privacy Policy
            </h1>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
              <p>
                This Privacy Policy (“Policy”) governs the manner in which Tap
                services Inc (“Company,” “we,” “us,” or “our”) collects, uses,
                maintains, and discloses information collected from individuals
                (“User,” “you,” or “your”) who interact with our services,
                including, but not limited to, use of our website, communication
                channels, and transactions with the Company. By using our
                services, you acknowledge that you have read, understood, and
                agree to the terms of this Policy.
              </p>

              <section>
                <h2>1. Introduction</h2>
                <p>
                  Tap services Inc is committed to protecting your privacy and
                  safeguarding the personal information you provide. This Policy
                  outlines the types of personal information we collect, the
                  purposes for which we use it, the measures we take to protect
                  it, and your rights concerning such information.
                </p>
              </section>

              <section>
                <h2>2. Types of Information Collected</h2>
                <ul>
                  <li>
                    <strong>Personally Identifiable Information (PII):</strong>{" "}
                    This includes, but is not limited to, your full name, email
                    address, telephone number, and mailing address.
                  </li>
                  <li>
                    <strong>Transaction and Service Information:</strong>{" "}
                    Information relating to the services you request, purchase,
                    or inquire about, including payment details, permit
                    requests, and other service-specific data.
                  </li>
                  <li>
                    <strong>Communication Preferences:</strong> Your consent
                    preferences regarding communication methods such as SMS,
                    email, or phone calls.
                  </li>
                </ul>
              </section>

              <section>
                <h2>3. Method of Information Collection</h2>
                <ul>
                  <li>
                    <strong>Direct Submission:</strong> Information you
                    voluntarily provide through online forms, email
                    communication, phone calls, or face-to-face interactions
                    with Company representatives.
                  </li>
                  <li>
                    <strong>Third-Party Sources:</strong> The Company may
                    collect information from third-party service providers,
                    partners, or publicly available sources where applicable and
                    lawful.
                  </li>
                </ul>
              </section>

              <section>
                <h2>4. Purpose of Data Collection</h2>
                <ul>
                  <li>
                    To provide and administer the services requested by you,
                    including, but not limited to, truck permits and related
                    services.
                  </li>
                  <li>
                    To communicate with you regarding your account, service
                    updates, promotional offers, and any changes to our terms
                    and policies.
                  </li>
                  <li>
                    To improve our service offerings and website functionality
                    through data analysis and usage trends.
                  </li>
                  <li>
                    To comply with any legal obligations, regulations, or
                    requests from law enforcement or governmental authorities.
                  </li>
                </ul>
              </section>

              <section>
                <h2>5. Data Security Measures</h2>
                <p>
                  We implement appropriate technical, administrative, and
                  physical security measures designed to protect your personal
                  information from unauthorized access, disclosure, alteration,
                  or destruction. While we strive to protect your personal data,
                  no security system is impenetrable, and we cannot guarantee
                  the absolute security of any information transmitted or stored
                  by the Company.
                </p>
              </section>

              <section>
                <h2>6. Data Sharing</h2>
                <p>
                  The Company does not sell or rent your personal information to
                  third parties for marketing purposes. Your personal
                  information may only be shared under the following
                  circumstances:
                </p>
                <ul>
                  <li>
                    <strong>Service Providers:</strong> We may disclose personal
                    information to trusted third-party service providers who
                    assist us in operating our business or providing services to
                    you. These third parties are bound by confidentiality
                    agreements and are prohibited from using your information
                    for any purpose other than fulfilling their contractual
                    obligations to the Company.
                  </li>
                  <li>
                    <strong>Legal Compliance:</strong> We may disclose personal
                    information where required by law, regulation, legal
                    process, or in response to lawful requests by governmental
                    authorities.
                  </li>
                  <li>
                    <strong>Business Transfers:</strong> In the event of a
                    merger, acquisition, bankruptcy, or sale of all or part of
                    our assets, personal information may be transferred as part
                    of that transaction.
                  </li>
                </ul>
                <p>
                  <strong>Important Notice:</strong> SMS opt-in consent or phone
                  numbers collected for SMS communication purposes will NOT be
                  shared with any third party for marketing or unrelated
                  purposes.
                </p>
              </section>

              <section>
                <h2>7. User Rights</h2>
                <ul>
                  <li>
                    <strong>Access:</strong> You have the right to request
                    access to the personal information we hold about you,
                    subject to applicable legal exceptions.
                  </li>
                  <li>
                    <strong>Correction:</strong> You have the right to request
                    correction or rectification of any inaccuracies in your
                    personal information.
                  </li>
                  <li>
                    <strong>Deletion:</strong> You have the right to request the
                    deletion of your personal data, subject to legal or
                    contractual retention requirements.
                  </li>
                  <li>
                    <strong>Objection/Restriction:</strong> You have the right
                    to object to or request a restriction on the processing of
                    your personal data under certain circumstances.
                  </li>
                  <li>
                    <strong>Opt-Out:</strong> You have the right to opt out of
                    receiving marketing communications from us at any time by
                    following the opt-out instructions provided in such
                    communications or by contacting us directly.
                  </li>
                </ul>
              </section>

              <section>
                <h2>8. Retention of Data</h2>
                <p>
                  The Company retains personal information for as long as
                  necessary to fulfill the purposes for which it was collected,
                  as outlined in this Policy, or as required by applicable law.
                  Once the information is no longer necessary for those
                  purposes, we will securely dispose of it.
                </p>
              </section>

              <section>
                <h2>9. Modifications to the Policy</h2>
                <p>
                  We reserve the right to modify or update this Privacy Policy
                  at any time, without prior notice, to reflect changes in our
                  practices or legal requirements. Any changes to this Policy
                  will become effective upon posting the updated version on our
                  website, with the effective date indicated at the top of the
                  Policy.
                </p>
              </section>

              <section>
                <h2>10. Contact Information</h2>
                <p>
                  If you have any questions, concerns, or requests regarding
                  this Privacy Policy or the handling of your personal
                  information, please contact us at:
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

export default Privacy;
