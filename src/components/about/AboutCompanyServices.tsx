"use client";

import React from "react";
import { motion } from "framer-motion";
const AboutCompanyServices: React.FC = () => {
  return (
    <section className="bg-white flex flex-col md:flex-row items-start justify-center mx-auto py-10 px-2 md:px-10 gap-x-8">
      {/* Left Section with Content */}
      
      <div className="w-full md:w-1/2 p-6 text-left space-y-6">
        {/* Heading */}
        <motion.h1
          className="text-xl md:text-lg font-medium tracking-widest text-gray-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          ABOUT COMPANY
        </motion.h1>

        {/* Subheadings */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#00B4C5]">
            Motor Skills
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-gray-800">
            Guarantee You
          </h3>
          <h3 className="text-3xl md:text-5xl font-bold text-gray-800">
            a Comfortable Life
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="border-b-2 my-5 border-gray-500 pt-8">
            <div className="flex gap-4">
              <h3 className="font-bold text-xl text-[#00B4C5] py-2">01</h3>
              <h3 className="text-gray-800 font-bold text-xl inline-block shadow-3xl rounded-lg p-2">Our Vision</h3>
            </div>
            <p className="py-4">
              A prosthetic device is not just a piece of hardware, it&apos;s a
              symbol of resilience.
            </p>
          </div>
          <div className="border-b-2 my-5 border-gray-500 pt-8">
            <div className="flex gap-4">
              <h3 className="font-bold text-xl text-[#00B4C5] py-2">02</h3>
              <h3 className="text-gray-800 font-bold text-xl shadow-3xl rounded-lg p-2">Our Mission</h3>
            </div>
            <p className="py-4">
              Prosthetics is a field where science and humanity work hand in
              hand to change lives.
            </p>
          </div>
          <div className="border-b-2 my-5 border-gray-500 pt-8">
            <div className="flex gap-4">
              <h3 className="font-bold text-xl text-[#00B4C5] py-2">03</h3>
              <h3 className="text-gray-800 font-bold text-xl shadow-3xl rounded-lg p-2">Eco materials</h3>
            </div>
            <p className="py-4">
              With prosthetics, we are not just restoring physical abilities, we
              are restoring confidence and hope.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Right Section with Image */}
      <div className="w-full flex justify-center items-center">
        <motion.img
          src="/images/about/About3.jpg"
          alt="Image 1"
          className="w-full md:w-[600px] shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />
      </div>
    </section>
  );
};

export default AboutCompanyServices;
