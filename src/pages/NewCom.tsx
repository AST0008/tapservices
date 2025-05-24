"use client";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const StartTruckingCompany = () => {
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
              Start Your Trucking Company
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="show"
              variants={fadeInUp}
              className="text-base sm:text-lg max-w-3xl mx-auto"
            >
              We'll handle the paperwork while you focus on driving success.
            </motion.p>
          </div>
        </section>

        {/* Main Content */}
        <motion.section
          initial="hidden"
          animate="show"
          variants={fadeInUp}
          className="max-w-7xl mx-auto mt-12 mb-12 grid grid-cols-1 md:grid-cols-1 gap-10 items-start"
        >
          <div className="space-y-6 text-gray-700 text-justify">
            <h2 className="text-3xl font-bold text-orange-600">
              Open New Trucking Company
            </h2>

            <p>
              With brilliance and speed, we are opening a tonne of new
              businesses every day. Customers have the option of starting their
              own trucking businesses in person or over the phone. We manage all
              the permits, US DOT drug and alcohol tests, and FMCSA audit
              support, and it only takes us 4-6 hours to start a new firm for
              our clients.
            </p>

            <p>
              One of the U.S. businesses with the most regulations is trucking,
              and establishing a trucking business necessitates the filing of
              various documents. The personnel at Tap Truck Permit & Services is
              fully aware of the paperwork and licences (in-cab permits, decals,
              plates, etc.) that must be submitted in order to launch your
              trucking business.
            </p>

            <h3 className="text-2xl font-semibold mt-6">
              How to Start A Trucking Business
            </h3>
            <p>
              Although starting your own trucking business may first appear
              challenging, there are long-term financial benefits and room for
              growth. It takes a little time, skill, and patience to apply for a
              permit. The tiresome responsibilities of dealing with the state
              and federal organisations required to obtain your authority,
              permits, and plates will be handled by Tap Truck Permit &
              Services.
            </p>

            <p>
              Choosing the type of legal entity you wish to be is the first
              thing you must do. operate under your name or as a corporation, an
              LLC, or a DBA.
            </p>

            <ul className="list-disc list-inside space-y-2">
              <li>What name do you intend to give your trucking business?</li>
              <li>Do you already possess a trailer and truck?</li>
              <li>Do you have a CDL?</li>
              <li>Have you had any experience?​</li>
              <li>
                Do you have the initial investment necessary to launch this
                business?
              </li>
              <li>
                Are you able to finish the registration and permitting process
                with the necessary time and experience?
              </li>
              <li>
                Do you have the time to submit documents to state and federal
                agencies on a quarterly and annual basis?
              </li>
            </ul>

            <p>
              Truckers who are leaving a trucking firm or leased driver
              agreement typically have an advantage over new or inexperienced
              truckers. Given that they had prior solo driving experience, this
              is definitely accurate.
            </p>

            <p>
              Your ability to run a trucking business or be an owner-operator
              will depend on how you answered the questions above if you are new
              to trucking.
            </p>

            <p>
              You must therefore register the name of your trucking firm in your
              state of residency after you have decided on it. In some areas,
              this can be completed in just one day, while in others it may take
              many weeks. You must obtain a Federal Identification Number for
              your business.
            </p>

            <p className="font-semibold bg-red-800 text-gray-200">
              IMPORTANT Information: Your social security number should not be
              used as your Federal ID number. Using your social security number
              might lead to identity theft.
            </p>

            <p>
              The following step is acquiring your FMCSA Authority, DOT Number,
              Unified Carrier Registration (UCR), International Fuel Tax
              Agreement (IFTA), and any further trucking licences you might
              require, most notably those from the states that demand them.
            </p>

            <p>
              It may take around 15 working days to complete all the paperwork
              and receive the allotted plates. The staff at Tap Truck Permit &
              Services do all in their power to expedite your paperwork; but,
              when dealing with governmental organizations, issues might crop up
              and delays can happen.
            </p>

            <p className="font-semibold text-orange-600">
              There will be many concerns and risks associated with starting a
              trucking business if the appropriate licenses, plates, or cab
              cards are not obtained. If you don't comply, you could face
              hundreds of dollars in fines. Allow the knowledgeable personnel at
              Tap Truck Permit & Services to fully comply with state and federal
              regulations for your tractor-trailer.
            </p>
          </div>
        </motion.section>

        <CTA />
      </div>

      <Footer />
    </>
  );
};

export default StartTruckingCompany;
