"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaPhone } from "react-icons/fa";
import Link from "next/link";

const AboutCompany: React.FC = () => {
  return (
    <section className="bg-gray-100 flex flex-col md:flex-row items-start">
      {/* Left Section with Two Images */}
      <div className="w-full md:w-1/2 flex justify-end items-end p-6 space-y-6 gap-8">
        {/* <div className="space-y-4"> */}
        <motion.img
          src="/images/about/About2.jpg"
          alt="Image 2"
          className="w-full md:w-[16rem]  shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <motion.img
          src="/images/about/About1.jpg"
          alt="Image 1"
          className="w-full md:w-[18rem]  shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />

        {/* </div> */}
      </div>

      {/* Right Section with Content */}
      <div className="w-full md:w-1/2 p-6 text-left space-y-8">
        {/* Heading */}
        <motion.h1
          className="text-lg md:text-md tracking-widest text-gray-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          ABOUT COMPANY
        </motion.h1>

        {/* Subheadings */}
        <div className="relative">
          {/* High-Sensitive Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-thLightBlue">
              High Sensitive
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
              Bionic Prosthesis
            </h3>
          </motion.div>

          {/* Overlayed CEO Message */}
          <h2 className="absolute top-0 left-[10%] transform -translate-x-1/3 -translate-y-1/2 text-lg mb-2 uppercase tracking-widest bg-white p-2 inline-block shadow-3xl rounded-lg z-10">
            about rmt
          </h2>
        </div>



        {/* Subheading with Paragraph */}
        <motion.h4
          className="text-xl md:text-2xl font-semibold text-gray-800"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          The field where technology meets humanity
        </motion.h4>

        <motion.p
          className="text-lg md:text-xl text-gray-600"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Prosthetics is a rapidly advancing field of biomedical engineering
          that focuses on the design, development, and fabrication of artificial
          limbs and other devices that can help people with physical
          disabilities.
        </motion.p>

        {/* Call-to-Action Button and Phone */}
        <motion.div
          className="flex items-center space-x-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          {/* More Info Button with Arrow */}
          <Link
            href="#"
            className="inline-block text-sm bg-thLightBlue text-black  py-3 px-8 rounded-full md:text-lg transition duration-300 ease-in-out hover:bg-[#0098a1] flex items-center space-x-2"
          >
            <span>More Info</span>
            {/* Right Arrow Icon */}
            <FaArrowRight className="text-gray-900 text-sm" />
          </Link>

          {/* Phone Icon with Light Blue Background */}
          <div className="flex items-center text-gray-800 space-x-2">
            <div className="bg-thLightBlue text-white rounded-full p-2 flex items-center justify-center">
              <FaPhone className="text-lg" />
            </div>
            <span>8-800-10-500-25</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutCompany;
