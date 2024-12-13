"use client";

import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion

const Banner: React.FC = () => {
  return (
    <section
      className="relative w-full bg-cover bg-center min-h-screen flex items-center justify-center text-center"
      style={{
        backgroundImage: "url('/images/about/Banner1.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-white"
        initial={{ opacity: 0, y: 50 }} // Initial state: fade in and move up
        animate={{ opacity: 1, y: 0 }}  // Final state: fully visible at original position
        transition={{ duration: 1 }}    // Animation duration
      >
        {/* About Us Heading */}
        <h1 className="text-4xl md:text-6xl font-bold">Services</h1>

        {/* Breadcrumb */}
        <p className="mt-4 text-lg md:text-xl font-medium">
          <span className="text-thLightBlue">Home</span> / <span>Services</span>
        </p>
      </motion.div>
    </section>
  );
};

export default Banner;
