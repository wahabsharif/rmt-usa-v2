"use client";

import Image from "next/image";
import React from "react";
import { AiOutlineRight } from "react-icons/ai"; // Import the right arrow icon
import { motion } from "framer-motion"; // Import framer-motion

const Banner: React.FC = () => {
  return (
    <section
      className="relative w-full bg-cover bg-center min-h-screen flex items-start justify-between text-center px-4 md:px-16"
      style={{
        backgroundImage: "url('/images/services/services-banner.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-center py-16">
        {/* Left Side - Heading (Our Services) */}
        <motion.div
          className="w-full md:w-1/2 text-white mb-8 md:mb-0"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-2x mb-4 md:text-3xl font-bold tracking-wide leading-tight">
            Our Services
          </h1>
          <p className="text-lg md:text-xl font-light max-w-md mx-auto">
            Discover our wide range of services that meet the highest standards in product design, engineering, quality testing, and more.
          </p>
        </motion.div>

        {/* Right Side - Service Headings */}
        <div className="w-full md:w-1/2 text-white flex flex-col items-start">
          {/* Service 1 */}
          <motion.div
            className="flex items-center mb-16 space-x-4 hover:text-thLightBlue transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-white p-2 rounded-full flex items-center justify-center">
              <Image
                src={"/images/icons/arrow-bullet.png"}
                alt="arrow-bullet"
                width={1000}
                height={1000}
                className="w-6"
              />
            </div>
            <h2 className="text-xl md:text-2xl font-semibold">Product Design & Engineering</h2>
          </motion.div>

          {/* Service 2 */}
          <motion.div
            className="flex items-center mb-16 space-x-4 hover:text-thLightBlue transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-white p-2 rounded-full flex items-center justify-center">
              <Image
                src={"/images/icons/arrow-bullet.png"}
                alt="arrow-bullet"
                width={1000}
                height={1000}
                className="w-6"
              />
            </div>
            <h2 className="text-xl md:text-2xl font-semibold">Quality Testing</h2>
          </motion.div>

          {/* Service 3 */}
          <motion.div
            className="flex items-center mb-16 space-x-4 hover:text-thLightBlue transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="bg-white p-2 rounded-full flex items-center justify-center">
              <Image
                src={"/images/icons/arrow-bullet.png"}
                alt="arrow-bullet"
                width={1000}
                height={1000}
                className="w-6"
              />
            </div>
            <h2 className="text-xl md:text-2xl font-semibold">Regulatory Affairs & Quality Management</h2>
          </motion.div>

          {/* Service 4 */}
          <motion.div
            className="flex items-center mb-16 space-x-4 hover:text-thLightBlue transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="bg-white p-2 rounded-full flex items-center justify-center">
              <Image
                src={"/images/icons/arrow-bullet.png"}
                alt="arrow-bullet"
                width={1000}
                height={1000}
                className="w-6"
              />
            </div>
            <h2 className="text-xl md:text-2xl font-semibold">Manufacturing Consultancy</h2>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
