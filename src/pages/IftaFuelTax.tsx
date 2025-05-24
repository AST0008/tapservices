"use client";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const IftaFuelTax = () => {
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
              IFTA Fuel Tax
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
              IFTA Fuel Tax Returns
            </h2>
            <p>
              The International Fuel Tax Agreement (IFTA) is a pact between U.S.
              states and Canadian provinces that simplifies reporting of fuel
              use by motor carriers operating across multiple jurisdictions.
            </p>
            <p>
              It allows a carrier registered in one jurisdiction to report fuel
              use in all IFTA jurisdictions under a single license. It saves
              time, effort, and redundant paperwork across state lines.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-orange-600">
              How to Submit an IFTA Return
            </h2>
            <p>
              Quarterly IFTA Fuel Tax Returns must be submitted by licensed
              carriers. Accuracy and timeliness are crucial, and failing to file
              on time may lead to significant penalties.
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>IFTA returns are filed quarterly</li>
              <li>Late or incorrect filing can lead to IRS fines</li>
              <li>
                Expertise in trucking, tax rates, and compliance is critical
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-orange-600">
              IFTA Quarterly Filing
            </h2>
            <p>
              Every licensed carrier must file an IFTA return for each quarter.
              Typically, these quarters are Jan-Mar, Apr-Jun, Jul-Sep, and
              Oct-Dec.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-orange-600">
              IFTA Decals & Permits
            </h2>
            <p>
              To obtain an IFTA permit, you must formally apply with the
              required documentation. Simply enrolling in a program doesn’t
              guarantee a permit unless your vehicle meets the standards.
            </p>
            <p>
              Programs such as NRMC can assist with permit acquisition and
              compliance.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-orange-600">
              Penalties for Non-Compliance
            </h2>
            <p>
              Failure to file within two months after the due date may result in
              suspension of your IFTA license and fines from the IRS.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-orange-600">
              IFTA Eligibility Criteria
            </h2>
            <ul className="list-disc list-inside ml-4">
              <li>Vehicles with two axles and GVW over 26,000 lbs</li>
              <li>Vehicles with three or more axles (regardless of weight)</li>
              <li>Combined GVW exceeding 26,000 lbs</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-orange-600">
              Additional Permits
            </h2>
            <p>We also assist with related truck permits including:</p>
            <ul className="list-disc list-inside ml-4">
              <li>Oregon permits</li>
              <li>Kentucky KYU and spirits transport</li>
              <li>VIN verification</li>
              <li>ARB & CARB compliance certificates</li>
            </ul>
          </div>

          <p className="pt-6">
            Our team is here to simplify your IFTA filings and compliance. Get
            in touch today to avoid fines and stay on the road!
          </p>
        </motion.section>

        <CTA />
      </div>

      <Footer />
    </>
  );
};

export default IftaFuelTax;
