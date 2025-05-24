"use client";
import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import { FaCheckCircle } from "react-icons/fa";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ServiceItem = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mt-6">
    <h3 className="text-xl font-semibold text-orange-600 flex items-center gap-2">
      <FaCheckCircle className="text-green-600" /> {title}
    </h3>
    <p className="text-gray-700 mt-2">{children}</p>
  </div>
);

const ManagePermits = () => {
  return (
    <>
      <Navbar />

      <div className="bg-white mt-10 py-8 text-gray-800 px-4 sm:px-6 lg:px-8">
        {/* HERO SECTION */}
        <section
          className="relative py-24 sm:py-32 bg-cover bg-center bg-no-repeat rounded-lg shadow-xl overflow-hidden"
          style={{ backgroundImage: "url('/truck-2.jpg')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>

          <div className="relative max-w-5xl mx-auto text-center text-white px-4">
            <motion.h1
              initial="hidden"
              animate="show"
              variants={fadeInUp}
              className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight"
            >
              Manage Trucking Permits
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="show"
              variants={fadeInUp}
              className="text-base sm:text-lg max-w-3xl mx-auto"
            >
              Meet the amazing team behind this project and learn how we make trucking compliance seamless across states.
            </motion.p>
          </div>
        </section>

        {/* CONTENT SECTION */}
        <motion.section
          initial="hidden"
          animate="show"
          variants={fadeInUp}
          className="max-w-6xl mx-auto my-16 space-y-12"
        >
          <div>
            <p className="text-lg font-medium text-center">
              We offer our services in <strong className="text-orange-600">California</strong> &{" "}
              <strong className="text-orange-600">Indiana</strong>
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4 border-b pb-2 border-gray-200">Federal & State Permits</h2>

              <ServiceItem title="US DOT">
                The FMCSA issues US DOT numbers for commercial carriers. Required for hazardous material transport, vehicles 10,001+ lbs,
                or those carrying 8+ passengers. We’ll handle all paperwork and registration for you.
              </ServiceItem>

              <ServiceItem title="MCS 150 Update">
                Required every 2 years—even if nothing changes—to keep your DOT number active. Avoid suspension and fines by letting us file for you.
              </ServiceItem>

              <ServiceItem title="ICC MC Authority">
                Required for interstate commerce involving passengers or regulated cargo. We help you apply under the right category:
                broker, for-hire, etc.
              </ServiceItem>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4 border-b pb-2 border-gray-200">State Specific Permits</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <ServiceItem title="NY HUT">
                    Mandatory for certain commercial vehicles in NY. Toll-paid Thruway sections excluded. Tax is based on vehicle weight and filing method.
                  </ServiceItem>

                  <ServiceItem title="Kentucky KYU">
                    Required for vehicles 60,000+ lbs. Includes quarterly mileage tax reporting. We guide you through registration and submission.
                  </ServiceItem>

                  <ServiceItem title="New Mexico WDT">
                    Applies to 26,000+ lb vehicles. We ensure accurate quarterly mileage reports and handle all permit filings.
                  </ServiceItem>

                  <ServiceItem title="KYU Liquor Transport Permits">
                    Required by Kentucky ABC to transport alcohol. One call to us and we’ll handle your entire application.
                  </ServiceItem>
                </div>

                <div>
                  <ServiceItem title="Oregon Fuel Permit">
                    Required for vehicles 8,000+ lbs or self-propelled fixed-load trucks. Includes a bond process, but we manage the entire procedure for you.
                  </ServiceItem>

                  <ServiceItem title="Quarterly IFTA Filing">
                    We calculate your multi-state fuel usage and file your IFTA tax accurately and on time. Deadline: end of the month after the quarter ends.
                  </ServiceItem>

                  <ServiceItem title="VIN Verification">
                    Uncover truck history before buying. Avoid hidden issues with comprehensive VIN checks and title validation.
                  </ServiceItem>

                  <ServiceItem title="ARB & CARB Compliance">
                    CARB certificate and ARB number assistance for diesel trucks over 14,001 lbs in California. Stay emission-compliant.
                  </ServiceItem>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center pt-8">
            <p className="text-lg font-medium">Need help with any permit?</p>
            <p>Contact us now to stay compliant and stress-free.</p>
          </div>
        </motion.section>

        <CTA />
      </div>

      <Footer />
    </>
  );
};

export default ManagePermits;
