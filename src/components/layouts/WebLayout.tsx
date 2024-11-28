"use client";

import React from "react";
import { motion } from "framer-motion";

const WebLayout: React.FC = () => {
  return (
    <section className="relative w-full bg-cover bg-center h-[80vh] md:h-screen" style={{ backgroundImage: "url('/images/hero-background.jpg')" }}>
      {/* Overlay for text contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Hero Content Container */}
      <div className="relative z-10 container mx-auto px-6 py-4 md:py-8 text-left text-white">
        {/* Heading and Subheading */}
        <div className="flex flex-col items-start space-y-4 md:space-y-4">
          <motion.h1
            className="text-4xl md:text-5xl font-bold tracking-tight leading-tight"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-white text-base md:2xl">END-TO-END SERVICE PROVIDER</span>
            <br />
            <span className="text-[#00B4C5]">INNOVATIVE</span> <br />
            <span className="text-white">HEALTHCARE</span><br />
            <span className="text-white">TECHNOLOGY</span>
          </motion.h1>
        </div>

        {/* Paragraph Description */}
        <div className="mt-6 max-w-xl">
          <motion.p
            className="text-lg md:text-xl font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            We are a leading service provider offering innovative solutions in healthcare and technology. Our team is dedicated to pushing boundaries and achieving excellence in every aspect of our work.
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
            Get Started
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default WebLayout;
