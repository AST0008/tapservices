"use client";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const DotClearinghouse = () => {
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
              DOT Clearinghouse
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
          className="max-w-5xl mx-auto my-12 space-y-8 text-gray-700"
        >
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-orange-600">
              DOT Clearinghouse Services
            </h2>
            <ul className="list-disc list-inside ml-4">
              <li>Yearly inquiries</li>
              <li>Reporting of violations</li>
              <li>Medical Review Officer (MRO) services</li>
              <li>Driver Clearinghouse provider support</li>
              <li>Clearinghouse registration assistance</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-orange-600">
              Who Must Register?
            </h2>
            <p>
              While not all drivers need to register with the FMCSA
              Clearinghouse, it is mandatory in the following cases:
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>
                To access and view electronic records stored in the
                Clearinghouse.
              </li>
              <li>
                To allow an employer to submit a query — especially
                pre-employment checks.
              </li>
              <li>
                To authorize full queries when a limited query indicates a
                record exists.
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-orange-600">
              Why It Matters
            </h2>
            <p>
              Drivers who fail to register or grant access to required queries
              risk losing their eligibility to operate under the FMCSA
              regulations. Our team can guide you through Clearinghouse
              registration and compliance requirements to ensure uninterrupted
              employment and legal operation.
            </p>
          </div>

          <p className="mt-10">
            Stay compliant with DOT Clearinghouse rules — let us help you
            navigate every step.
          </p>
        </motion.section>

        <CTA />
      </div>

      <Footer />
    </>
  );
};

export default DotClearinghouse;
