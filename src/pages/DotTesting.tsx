"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const DotTesting = () => {
  return (
    <>
      <Navbar />

      <div className="bg-white mt-10 py-8 text-gray-800 px-4 sm:px-6 lg:px-8">
        {/* HERO SECTION */}
        <section
          className="relative py-24 sm:py-32 bg-cover bg-center bg-no-repeat rounded-lg shadow-lg"
          style={{ backgroundImage: "url('/trucks-hero.png')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>

          <div className="relative max-w-5xl mx-auto text-center text-white px-4">
            <motion.h1
              initial="hidden"
              animate="show"
              variants={fadeInUp}
              className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight"
            >
              DOT Drug and Alcohol Testing
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
          <p>
            We offer these services <strong>across the United States</strong>.
          </p>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-orange-600">
              Drug & Alcohol Testing Programs
            </h2>
            <ul className="list-disc list-inside ml-4">
              <li>Pre-Employment Drug Testing</li>
              <li>Breath Alcohol Testing Services</li>
              <li>Randomized & Post-Accident Testing</li>
              <li>Reasonable Cause & Observational Testing</li>
              <li>Return-to-Duty & Follow-Up Testing</li>
              <li>DOT Reasonable Suspicion Training for Supervisors</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-orange-600">
              Driver Qualification Management
            </h2>
            <p>
              Juggling paperwork or multiple providers is no longer efficient.
              We streamline the process by managing screening and generating
              compliant driver qualification files from your application data.
            </p>
            <p>
              Our system enables centralized control over MVR, safety
              performance history, medical certificates, and more — all in one
              place.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-orange-600">
              Why Is This Testing Mandatory?
            </h2>
            <p>
              The <strong>Omnibus Transportation Employee Testing Act</strong>{" "}
              was enacted in 1991 to improve safety in the transportation
              industry. This law mandated drug and alcohol testing for employees
              in safety-sensitive positions.
            </p>
            <p>
              Employees providing transportation services are held to high
              standards. Substance use during duty not only jeopardizes their
              safety but also endangers passengers, pedestrians, and fellow
              drivers.
            </p>
          </div>

          <p className="mt-10">
            Reach out to us to set up a custom DOT drug and alcohol testing
            program tailored for your fleet.
          </p>
        </motion.section>

        <CTA />
      </div>

      <Footer />
    </>
  );
};

export default DotTesting;
