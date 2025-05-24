"use client";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/navbar";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const faqs = [
  {
    q: "What is a truck permit?",
    a: "A truck permit is a legal document that allows a commercial vehicle to operate on public roads. The permit is required by law to ensure that the vehicle meets safety standards and is properly registered.",
  },
  {
    q: "What types of truck permits are there?",
    a: "There are several types of truck permits, including oversize/overweight permits, temporary operating permits, trip permits, fuel permits, and IRP (International Registration Plan) permits. The type of permit required will depend on the specific needs of the vehicle and the journey it will be making.",
  },
  {
    q: "How do I apply?",
    a: "The process for applying for a truck permit varies by state and by the type of permit needed. Generally, you will need to provide information about your vehicle, including its size and weight, and the purpose of your trip. You may also need to provide proof of insurance and pay a fee. Many states offer online applications for certain types of permits.",
  },
  {
    q: "How long does it take to get a truck permit?",
    a: "The processing time for a truck permit can vary depending on the type of permit and the state where you are applying. Some permits can be obtained instantly online, while others may take several days or even weeks to process.",
  },
  {
    q: "What if I don’t have a permit?",
    a: "Operating a commercial vehicle without the proper permits can result in fines, impoundment of the vehicle, and other penalties. Additionally, it can put you and others on the road at risk if your vehicle is not properly registered or if it exceeds size or weight limits.",
  },
  {
    q: "How long are truck permits valid for?",
    a: "The validity period for truck permits varies depending on the type of permit and the state where it was issued. Some permits may be valid for a single trip or for a specific time period, while others may be valid for a longer period of time or until the vehicle's registration expires. It's important to check the expiration date of your permit and make sure it is renewed before it expires to avoid any penalties or issues while operating your vehicle.",
  },
];

const AboutPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (i) => {
    setActiveIndex(activeIndex === i ? null : i);
  };

  const answerVariants = {
    hidden: { opacity: 0, height: 0, transition: { duration: 0.3 } },
    visible: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
  };

  const arrowVariants = {
    collapsed: { rotate: 0 },
    expanded: { rotate: 180 },
  };

  return (
    <>
      <Navbar />
      <div className="bg-white mt-10 py-6 text-gray-800">
        {/* HERO SECTION */}
        <section
          className="relative py-32 bg-cover bg-center bg-no-repeat text-white"
          style={{ backgroundImage: "url('/truck-2.jpg')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          <div className="relative max-w-5xl mx-auto text-center px-4 z-10">
            <motion.h1
              initial="hidden"
              animate="show"
              variants={fadeInUp}
              className="text-5xl font-extrabold mb-4"
            >
              About Tapservices
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="show"
              variants={fadeInUp}
              className="text-lg max-w-2xl mx-auto"
            >
              Empowering over 5000+ US transport businesses with fast, reliable,
              and professional trucking services.
            </motion.p>
          </div>
        </section>

        {/* HISTORY SECTION */}
        <section className="py-16 px-4 max-w-5xl mx-auto">
          <motion.div initial="hidden" animate="show" variants={fadeInUp}>
            {[
              "With his expertise in day-to-day knowledge of fuel tax reporting, trucker permits, business files, and authorities across the United States, Mr. Himanshu founded Tap Truck Permits & Services a few years ago.",
              "Tap Truck Permits & Services has helped over 5000 transport businesses in the US.",
              "We support owner-operators, small trucking companies, and larger fleets with everything they need to stay compliant and efficient.",
            ].map((para, i) => (
              <p key={i} className="mb-4 text-lg leading-relaxed">
                {para}
              </p>
            ))}
          </motion.div>
        </section>

        {/* SPECIAL FEATURES */}
        <section className="bg-gray-800 py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-300">
              What Makes Us Special
            </h2>
            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  title: "Trusted Franchise",
                  text: "A reputable franchise offering high-quality services across the board.",
                  img: "/images/trusted.png",
                },
                {
                  title: "Customer Support",
                  text: "Friendly, 24/7 support that’s always ready to assist you.",
                  img: "/images/support.png",
                },
                {
                  title: "Reliability & Punctuality",
                  text: "Our hallmark—on-time delivery, every time.",
                  img: "/images/reliability.png",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="show"
                  variants={fadeInUp}
                  viewport={{ once: true }}
                  className="p-6 bg-white rounded-xl shadow-lg text-center"
                >
                  {/* <img
                    src={item.img}
                    alt={item.title}
                    className="h-20 mx-auto mb-4"
                  /> */}
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-gray-600 mt-2">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* METRICS */}
        {/* <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Key Metrics</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-3xl font-bold text-orange-600">
              {[
                "15 States",
                "110+ Clients",
                "240+ Projects",
                "2340 Permits",
              ].map((metric, i) => (
                <motion.div
                  key={i}
                  className="bg-gray-50 p-6 rounded shadow"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  {metric}
                </motion.div>
              ))}
            </div>
          </div>
        </section> */}

        {/* SERVICES */}
        <section className="bg-gray-50 py-20 px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-extrabold text-orange-500 mb-6">
                Why Choose Tapservices
              </h2>
              <ul className="space-y-4">
                {[
                  "Manage Trucking Permits",
                  "DOT Drug And Alcohol Testing",
                  "DOT Audit Support",
                  "DOT Clearinghouse",
                  "Open New Trucking Company",
                  "Trailer Leasing Services",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start space-x-3 text-gray-700 text-lg"
                  >
                    <CheckCircleIcon className="w-6 h-6 text-orange-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="/whyChooseUs.avif"
                alt="Why Choose Us"
                className="w-full max-w-md rounded-xl shadow-lg object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* TEAM SECTION */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Meet the Team</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  name: "Mr. Himanshu",
                  role: "Founder & CEO",
                  img: "/images/himanshu.jpg",
                },
                {
                  name: "Kevin Mash",
                  role: "Head Operations",
                  img: "/images/kevin.jpg",
                },
                {
                  name: "Mike Douglas",
                  role: "Support Lead",
                  img: "/images/mike.jpg",
                },
              ].map((member, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="show"
                  variants={fadeInUp}
                  className="bg-white p-6 shadow rounded-xl"
                >
                  {/* <img
                    src={member.img}
                    alt={member.name}
                    className="rounded-full w-24 h-24 mx-auto mb-4"
                  /> */}
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        {/* <section className="bg-orange-500 text-white py-16 text-center">
          <motion.div initial="hidden" animate="show" variants={fadeInUp}>
            <h2 className="text-3xl font-bold mb-4">Request a Free Quote</h2>
            <p className="text-lg mb-6">Tap the button below to get started.</p>
            <button className="bg-white text-orange-500 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100 transition">
              Get a Quote
            </button>
          </motion.div>
        </section> */}

        <CTA />

        {/* CLIENTS */}
        {/* <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold">Some of Our Clients</h2>
            <div className="flex justify-center gap-6 mt-6 flex-wrap">
         
              {[
                "/images/client1.png",
                "/images/client2.png",
                "/images/client3.png",
              ].map((logo, i) => (
                <img
                  key={i}
                  src={logo}
                  alt={`Client ${i + 1}`}
                  className="h-16 object-contain"
                />
              ))}
            </div>
          </div>
        </section> */}

        {/* FAQ SECTION */}

        <section className="bg-gray-100 py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">FAQs</h2>
            <div className="space-y-6">
              {faqs.map(({ q, a }, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl shadow-md p-5 cursor-pointer"
                  onClick={() => toggleIndex(i)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") toggleIndex(i);
                  }}
                >
                  <div className="flex justify-between items-center font-semibold text-lg text-gray-800">
                    <h3>{q}</h3>
                    <motion.svg
                      className="w-5 h-5 text-orange-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      variants={arrowVariants}
                      initial="collapsed"
                      animate={activeIndex === i ? "expanded" : "collapsed"}
                      transition={{ duration: 0.3 }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </motion.svg>
                  </div>

                  <AnimatePresence initial={false}>
                    {activeIndex === i && (
                      <motion.p
                        className="mt-3 text-gray-700 overflow-hidden"
                        variants={answerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                      >
                        {a}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
