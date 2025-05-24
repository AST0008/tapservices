"use client";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const DotAuditSupport = () => {
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
              DOT Audit Support
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
              Facing a DOT Compliance Rating?
            </h2>
            <p>
              If you’ve received a <strong>"Conditional"</strong> or{" "}
              <strong>"Unsatisfactory"</strong> rating in a safety audit or
              compliance assessment, it’s understandable to feel overwhelmed.
              These ratings require a carefully crafted{" "}
              <strong>corrective action plan</strong> to maintain your
              operations and satisfy DOT regulations.
            </p>
            <p>
              The process is complex, and attempting it alone can be risky. Our
              experienced compliance specialists will guide you through every
              stage — identifying issues, designing your action plan, and
              ensuring proper implementation.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-orange-600">
              Why Work With Us?
            </h2>
            <ul className="list-disc list-inside ml-4">
              <li>We speak the DOT's language — literally and legally.</li>
              <li>
                High success rate in getting corrective action plans approved.
              </li>
              <li>Over a decade of audit and compliance experience.</li>
              <li>
                Fast, efficient support to help you get back on track quickly.
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-orange-600">
              New Entrant Safety Audit
            </h2>
            <p>
              The <strong>New Entrant Program</strong> is administered by the
              FMCSA and targets businesses that operate across state lines. New
              carriers are required to undergo a{" "}
              <strong>New Entrant Safety Audit</strong> within their first 18
              months.
            </p>
            <p>
              We’ll help you prepare and pass your audit by ensuring that all
              compliance documentation and safety procedures are properly in
              place before your evaluation.
            </p>
          </div>

          <p className="mt-10">
            Don’t leave your audit success to chance. Contact us today for
            professional DOT audit support.
          </p>
        </motion.section>

        <CTA />
      </div>

      <Footer />
    </>
  );
};

export default DotAuditSupport;
