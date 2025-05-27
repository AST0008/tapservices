import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Checkbox } from "@/components/ui/checkbox";

const CTA = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    terms: false,
  });
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const endpoint =
      "https://script.google.com/macros/s/AKfycbw1HvfYd2fMP5tTvAgmF9Yr8PW6t592YFupKOmbiFaKOEwaDtTuIQw_M1sBZf9Z-dt1dA/exec";

    try {
      await fetch("https://sheetdb.io/api/v1/mzxhmjoh04avh", {
        method: "POST",
        body: JSON.stringify({ data: [formData] }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
        terms: false,
      });
    } catch (error) {
      toast({
        title: "Error",
        description:
          "There was an issue submitting your message. Try again later.",
      });
      console.error("Submission error:", error);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-r from-orange-500 to-orange-600 relative overflow-hidden"
    >
      {/* Decorative Shapes */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full translate-x-1/3 translate-y-1/3"></div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center text-white mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Interested in working with Tapservices Inc.?
            </h2>
            <p className="text-xl md:text-2xl mb-10 text-orange-50">
              Let's discuss how we can help you streamline your trucking permit
              process and keep your business compliant.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - CTA */}
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-6">Ready to get started?</h3>
              <p className="text-lg mb-8 text-orange-50">
                Join over 5000 truckers who trust Tapservices for their permit
                needs. Get started today with a free consultation.
              </p>
              <Button className="bg-white text-orange-500 hover:bg-orange-50 hover:text-orange-600 px-8 py-6 text-lg rounded-xl shadow-lg transition-all duration-300 font-semibold">
                Schedule a Free Consultation
              </Button>
            </div>

            {/* Right side - Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Us
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(555) 123-4567"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Company Name
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your company"
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your trucking permit needs..."
                    rows={4}
                    className="w-full"
                  />
                </div>
                <div>
                  <Checkbox
                    id="terms"
                    required
                    className="w-4 h-4 mr-2"
                    checked={formData.terms}
                    onCheckedChange={(checked: boolean) =>
                      setFormData({ ...formData, terms: checked })
                    }
                    name="terms"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-700">
                    By clicking this I agree to receive SMS from Tapservices
                    Inc. You can reply STOP to opt-out at any time. Tapservices
                    will use the data provided in accordance with{" "}
                    {/* <a
                      href="/terms"
                      className="text-orange-500 hover:text-orange-600"
                    >
                      Terms of Service
                    </a>{" "}
                    and{" "} */}
                    <a
                      href="/privacy"
                      className="text-orange-500 hover:text-orange-600"
                    >
                      Privacy Policy
                    </a>
                  </label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
