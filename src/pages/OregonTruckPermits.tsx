"use client";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const OregonTruckPermits = () => {
  return (
    <>
      <Navbar />

      <div className="bg-white mt-10 py-8 text-gray-800 px-4 sm:px-6 lg:px-8">
        {/* HERO SECTION */}
        <section
          className="relative py-24 sm:py-32 bg-cover bg-center bg-no-repeat rounded-lg shadow-lg"
          style={{ backgroundImage: "url('/truck-2.jpg')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>

          <div className="relative max-w-5xl mx-auto text-center text-white px-4">
            <motion.h1
              initial="hidden"
              animate="show"
              variants={fadeInUp}
              className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight"
            >
              Oregon Truck Permits
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="show"
              variants={fadeInUp}
              className="text-base sm:text-lg max-w-3xl mx-auto"
            >
              Meet the amazing team behind this project and find out more about
              how we work.
            </motion.p>
            <motion.p
              initial="hidden"
              animate="show"
              variants={fadeInUp}
              className="mt-2 text-sm text-gray-300"
            >
              We offer these services in California & Indiana.
            </motion.p>
          </div>
        </section>

        {/* CONTENT SECTION */}
        <motion.section
          initial="hidden"
          animate="show"
          variants={fadeInUp}
          className="max-w-5xl mx-auto my-12 space-y-10 text-gray-700"
        >
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-orange-600">
              Oregon Road Tax & Trip Permits
            </h2>
            <p>
              Oregon imposes a state-level road tax that depends on your
              vehicle's weight. If your truck and load exceed a combined weight
              of 26,001 lbs, a trip permit is mandatory to enter Oregon.
            </p>
            <p>
              Each trip permit is valid for 10 days and includes a fuel permit.
              For assistance, call our customer service team at{" "}
              <strong>559 721 4467</strong>.
            </p>
            <p>We ensure the process is fast, secure, and hassle-free.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-orange-600">
              Tap Truck Permit & Services
            </h2>
            <p>
              Navigating state and federal trucking regulations can be complex.
              We’ve served the transportation industry for over 10 years,
              helping drivers and businesses with:
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>Truck permits</li>
              <li>Corporate filings</li>
              <li>Fuel tax reporting</li>
              <li>Driver’s license services</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-orange-600">
              Oregon Truck Permits
            </h2>
            <p>
              All commercial truckers operating in or through Oregon, whether
              intrastate or interstate, are required to obtain Oregon Truck
              Permits. The law views deliverers as owners, not lessees, making
              permits mandatory.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-orange-600">
              ICC MC Authority
            </h2>
            <p>
              Companies engaged in transporting passengers or federally
              regulated goods in interstate commerce need ICC MC Authority. This
              includes for-hire carriers, brokers, and more.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-orange-600">
              Oregon Permit Registration Requirements
            </h2>
            <ul className="list-disc list-inside ml-4">
              <li>USDOT number (we can help you apply)</li>
              <li>Driver’s full legal name</li>
              <li>Travel dates and routes/miles</li>
              <li>Vehicle details including VIN, type, year, and odometer</li>
              <li>Commodities being transported</li>
              <li>Ownership/lease documentation</li>
              <li>Cab Card and apportioned registration</li>
              <li>Payment via Visa/MasterCard</li>
              <li>Email or fax for receiving permits</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-orange-600">
              Oregon PUC Permit
            </h2>
            <p>
              The Oregon Public Utilities Commission (PUC) permit, regulated by
              the Oregon Department of Transportation, is required for vehicles
              with a gross weight between 26,000 and 80,000 lbs.
            </p>
            <p>
              Heavier vehicles incur higher tax rates, so accuracy in weight
              reporting is critical.
            </p>
          </div>

          <p className="pt-6">
            Our experts are ready to help you obtain the right permits and keep
            you compliant. Get in touch today!
          </p>
        </motion.section>

        <CTA />
      </div>

      <Footer />
    </>
  );
};

export default OregonTruckPermits;
