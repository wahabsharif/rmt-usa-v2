"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Banner: React.FC = () => {
  return (
    <section>
      <main
        className="relative w-full bg-cover bg-center min-h-screen md:h-screen"
        style={{ backgroundImage: "url('images/home/sec-banner-image.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Hero Content Container */}
        <div className="relative z-10 container mx-auto px-6 py-4 md:py-8 text-left text-white">
          {/* Heading and Subheading */}
          <div className="flex flex-col tracking-[.15em] items-start space-y-4 md:space-y-4">
            <motion.h1
              className="text-4xl tracking-[.15em] md:text-5xl font-bold leading-tight"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <span className="text-white tracking-[.25em] mb-[2px] text-base md:2xl">
                END-TO-END SERVICE PROVIDER
              </span>
              <br />
              <span className="text-[#00B4C5] mb-[2px]">INNOVATIVE</span> <br />
              <span className="text-white mb-[2px]">HEALTHCARE</span>
              <br />
              <span className="text-white">TECHNOLOGY</span>
            </motion.h1>
          </div>

          {/* Paragraph Description */}
          <div className="mt-6 max-w-3xl">
            <motion.p
              className="text-lg md:text-xl font-light"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              Our company is deeply committed to applying our expertise and
              industry knowledge to provide truly innovative and meaningful
              solutions that meet our client&apos;s needs and help them succeed.
              We prioritize patient-centered care to ensure the best possible
              outcome.
            </motion.p>
          </div>

          {/* Call-to-Action Button */}
          <div className="mt-8">
            <motion.a
              href="#"
              className="inline-block bg-[#00B4C5] text-white font-semibold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out hover:bg-[#0098a1]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              LEARN MORE
            </motion.a>
          </div>
        </div>
      </main>
      {/* <div className="absolute inset-0 bg-black bg-opacity-40"></div> */}
      <div className="bg-gray-100 flex justify-end h-screen items-start ">
        <div className="w-1/2  p-6 text-left">
          <div className="flex flex-col tracking-[.15em] items-start space-y-4 md:space-y-4">
            <motion.h1
              className="text-4xl tracking-[.15em] md:text-5xl font-bold leading-tight"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <span className="text-[#023550] tracking-[.25em] mb-4 text-base md:2xl">
                ABOUT RMT
              </span>
              <br />
              <span className="text-[#00B4C5] mb-4">
                Innovating Ideas,
              </span>{" "}
              <br />
              <span className="text-[#023550] mb-4">Accelerating Success</span>
              <br />
              <span className="text-[#023550]">TECHNOLOGY</span>
            </motion.h1>
          </div>

          {/* Paragraph Description */}
          <div className="mt-6 max-w-3xl">
            <motion.p
              className="text-lg text-[#023550] md:text-xl font-light"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              As a cross-functional service provider we provide cost-effective
              and time-efficient R&D services to creative minds like Physicians
              , Medical device manufactures and healthcare reserchers who want
              to realize their ingenious ideas into market-ready products in an
              accelerated process.
            </motion.p>
          </div>

          {/* Call-to-Action Button */}
          <div className="mt-8">
            <motion.a
              href="#"
              className="inline-block bg-[#00B4C5] text-white font-semibold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out hover:bg-[#0098a1]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              LEARN MORE
            </motion.a>
          </div>
        </div>
      </div>

      <div className="bg-[#E5EAED] flex justify-center items-center py-12">
        <div className="w-full px-6">
          {/* Services Heading */}
          <h2 className="text-4xl font-bold text-center text-[#023550] mb-8">
            Our Services
          </h2>

          {/* Services Cards */}
          <div className="flex justify-center items-center flex-wrap gap-12">
            {/* Service Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center w-[18rem]">
              <div className="mb-4 w-16 h-16 relative">
                <Image
                  src="/logo1.png" // Assuming logo images are in the public directory
                  alt="Service 1"
                  width={64} // Image size (same as w-16)
                  height={64} // Image size (same as h-16)
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#02B3C6]">
                Product Design & Engineering
              </h3>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center w-[18rem]">
              <div className="mb-4 w-16 h-16 relative">
                <Image
                  src="/logo2.png" // Assuming logo images are in the public directory
                  alt="Service 2"
                  width={64} // Image size (same as w-16)
                  height={64} // Image size (same as h-16)
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#02B3C6]">
                Software & Artifical Intelligence
              </h3>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center w-[18rem]">
              <div className="mb-4 w-16 h-16 relative">
                <Image
                  src="/logo3.png" // Assuming logo images are in the public directory
                  alt="Service 3"
                  width={64} // Image size (same as w-16)
                  height={64} // Image size (same as h-16)
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#02B3C6]">
                Regulatory Affairs & Quality Management
              </h3>
            </div>

            {/* Service Card 4 */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center w-[18rem]">
              <div className="mb-4 w-16 h-16 relative">
                <Image
                  src="/logo4.png" // Assuming logo images are in the public directory
                  alt="Service 4"
                  width={64} // Image size (same as w-16)
                  height={64} // Image size (same as h-16)
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#02B3C6]">
                Quality Testing
              </h3>
            </div>

            {/* Service Card 5 */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center w-[18rem]">
              <div className="mb-4 w-16 h-16 relative">
                <Image
                  src="/logo5.png" // Assuming logo images are in the public directory
                  alt="Service 5"
                  width={64} // Image size (same as w-16)
                  height={64} // Image size (same as h-16)
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#02B3C6]">
                Manufacturing Consultancy
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
