"use client";

import React from "react";
import { motion } from "framer-motion";

function AboutRMT() {
  return (
    <section className="bg-gray-100 flex md:justify-end  items-start ">
      <div className="w-full md:w-1/2  p-6 text-left">
        <div className="flex flex-col  items-start space-y-4 md:space-y-4">
          <motion.h1
            className="text-4xl  md:text-5xl font-bold  "
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-[#023550] tracking-[.10em] mb-4 text-base md:2xl">
              About RMT
            </span>
            <br />
            <span className="text-[#023550] mb-4">Innovating Ideas,</span>{" "}
            <br />
            <span className="text-[#023550] mb-4">Accelerating Success</span>
            <br />
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
            As a cross-functional service provider we provide cost-effective and
            time-efficient R&D services to creative minds like Physicians ,
            Medical device manufactures and healthcare reserchers who want to
            realize their ingenious ideas into market-ready products in an
            accelerated process.
          </motion.p>
        </div>

        {/* Call-to-Action Button */}
        <div className="mt-8">
          <motion.a
            href="#"
            className="inline-block bg-thLightBlue text-white font-semibold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out hover:bg-[#0098a1]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            LEARN MORE
          </motion.a>
        </div>
      </div>
    </section>
  );
}

export default AboutRMT;
