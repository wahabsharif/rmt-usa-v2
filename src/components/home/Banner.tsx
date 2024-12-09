"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Banner: React.FC = () => {
  return (
    <header className="relative w-full h-auto md:h-screen">
      {/* Optimized Background Image */}
      <Image
        src="/images/home/home-banner.webp"
        alt="A visually striking banner representing innovative healthcare technology"
        layout="fill"
        objectFit="cover"
        priority
        className="-z-10"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 py-4 md:py-8 text-left text-white">
        {/* Heading and Subheading */}
        <div className="flex flex-col tracking-[.15em] items-start space-y-4 md:space-y-4">
          <motion.h1
            className="text-4xl tracking-[.15em] md:text-5xl font-bold"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-white tracking-[.25em] mb-4 text-base md:text-2xl">
              END-TO-END SERVICE PROVIDER
            </span>
            <br />
            <span className="text-thLightBlue mb-4 italic font-extrabold">
              INNOVATIVE
            </span>
            <br />
            <span className="text-white mb-4 italic font-extrabold">
              HEALTHCARE
            </span>
            <br />
            <span className="text-white italic font-extrabold">TECHNOLOGY</span>
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
            aria-label="Learn more about our innovative healthcare technology"
            className="inline-block bg-thLightBlue text-white font-semibold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out hover:bg-[#0098a1]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            LEARN MORE
          </motion.a>
        </div>
      </div>
    </header>
  );
};

export default Banner;
