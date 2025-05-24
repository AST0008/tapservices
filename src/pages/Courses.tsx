"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Courses = () => {
  return (
    <>
      <Navbar />

      <div className="bg-white mt-10 py-6 text-gray-800 px-4 sm:px-6 lg:px-8">
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
              Courses
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="show"
              variants={fadeInUp}
              className="text-base sm:text-lg max-w-3xl mx-auto"
            >
              Join us to get started with the different types of courses.
            </motion.p>
          </div>
        </section>

        {/* DOT Supervisor Training Program Section with Image */}
        <motion.section
          initial="hidden"
          animate="show"
          variants={fadeInUp}
          className="max-w-7xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        >
          <div>
            <h2 className="text-3xl font-bold text-orange-600 mb-6">
              DOT Supervisor Training Program
            </h2>

            <p className="text-gray-700 mb-6 max-w-xl">
              Tapservices is introducing its own software, which makes it simple
              to complete the training and obtain a certificate. You might be
              asking why you must do this training. To help supervisors of
              DOT-regulated personnel recognise why, here are 7 compelling
              reasons:
            </p>

            <ul className="list-disc list-inside text-gray-700 space-y-2 max-w-xl mb-12">
              {[
                "Supervisor's responsibility in establishing a drug-free workplace.",
                "The supervisor needs to comprehend a number of observations.",
                "Observable indicators of alcohol abuse.",
                "Observable indications of drug abuse.",
                "How to get in touch with an employee in this case.",
                "Whether or not to test.",
                "How to carry out tests.",
              ].map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold mb-4">
              Enroll Now For The Training
            </h3>

            <div className="flex justify-center">
         
          </div>

            <p className="mb-8 max-w-xl text-gray-700">
              Contact us by using this simple form and we will guide you further
            </p>

          </div>

          {/* Image next to the text */}
          <img
              src="/truck3.jpeg"
              alt="DOT Supervisor Training"
              className="rounded-lg shadow-lg max-w-full h-auto object-cover"
              style={{ maxHeight: "400px", width: "100%" }}
            />
        </motion.section>
        
            <CTA />
      </div>

      <Footer />
    </>
  );
};

export default Courses;
