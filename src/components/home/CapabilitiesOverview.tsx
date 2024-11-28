"use client";

import React from "react";
import { motion } from "framer-motion";

function CapabilitiesOverview() {
  return (
    <section
      className="relative bg-gray-100  bg-cover bg-center py-12"
      style={{
        backgroundImage: "url('/images/logo/capabilities.jpg')", // Replace with your image path
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="flex flex-col space-y-1">
            {/* Primary Heading */}
            <h2 className="text-4xl font-bold text-[#023550] leading-tight text-center sm:text-left">
              Capabilities Overview
            </h2>

            {/* Secondary Heading */}
            <h3 className="text-4xl font-bold text-[#02B3C6] leading-tight text-center sm:text-left">
              Empowering Innovation, <br />
              Delivering <span className="text-[#023550]">Excellence</span>
            </h3>
          </div>

          {/* Right Column */}
          <div className="text-[#C5C5C5] space-y-8">
            {/* Description */}
            <p className="text-lg leading-relaxed">
              Our team leverages cutting-edge technology and years of expertise
              to deliver exceptional results tailored to your unique challenges.
              With a focus on innovation, collaboration, and adaptability, we
              ensure every solution aligns with your strategic goals. Explore
              the five core capabilities that make us your trusted partner in
              progress.
            </p>

            {/* List of Headings */}
            <div className="space-y-4 text-[#023550]">
              <div className="border-b-2 border-[#C5C5C5] pb-2">
                <h4 className="text-xl font-semibold">
                  ACTIVE MEDICAL DEVICES
                </h4>
              </div>
              <div className="border-b-2 border-[#C5C5C5] pb-2">
                <h4 className="text-xl font-semibold">
                  NON-ACTIVE MEDICAL DEVICES
                </h4>
              </div>
              <div className="border-b-2 border-[#C5C5C5] pb-2">
                <h4 className="text-xl font-semibold">
                  BIOMATERIALS & DRUG SYNTHESIS
                </h4>
              </div>
              <div className="border-b-2 border-[#C5C5C5] pb-2">
                <h4 className="text-xl font-semibold">
                  AI-DRIVEN MEDICAL DEVICES
                </h4>
              </div>
              <div className="border-b-2 border-[#C5C5C5] pb-2">
                <h4 className="text-xl font-semibold">
                  SOFTWARES AS A MEDICAL DEVICE(SaMD)
                </h4>
              </div>
            </div>

            <div className="mt-12">
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
      </div>
    </section>
  );
}

export default CapabilitiesOverview;
