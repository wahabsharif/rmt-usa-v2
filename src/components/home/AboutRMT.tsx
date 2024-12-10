"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function AboutRMT() {
  return (
    <section className="bg-gray-100 min-h-screen flex items-stretch flex-col md:flex-row md:justify-center items-start pt-24 pb-10 px-6">
      <div className="w-full md:max-w-sm  md:mb-0 flex justify-end items-center relative h-[490px]">
        {/* First Image */}
        <Image
          src="/images/home/rmt_img.jpg"
          alt="Picture of the rmt"
          // layout="responsive"
          width={300}
          height={800}
          className="rounded-lg  shadow-xl w-80 h-[450px]"
        />

        {/* Second Image */}
        <div className="absolute top-0 md:top-16 left-24 md:left-10 transform translate-x-[-50%] translate-y-[-50%] bg-gray-100 p-2 rounded-lg">
          <Image
            src="/images/home/rmt_img.jpg"
            alt="Overlay Picture"
            // layout="intrinsic"
            width={250}
            height={500}
            className="shadow-lg rounded-lg"
          />
        </div>
      </div>

      <div className="w-full md:w-1/2 p-6 text-left flex flex-col justify-center items-start space-y-6">
        <motion.h1
          className="text-2xl md:text-5xl font-bold text-[#023550] tracking-[.10em] mb-2"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="block text-base md:text-2xl uppercase mb-2">
            About RMT
          </span>
          <span className="text-[#023550] mb-2">Innovating Ideas,</span>
          <span className="text-[#023550] mb-2">Accelerating Success</span>
        </motion.h1>

        {/* Description Paragraph */}
        <motion.p
          className="text-lg text-[#023550] md:text-xl font-light max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          As a cross-functional service provider, we offer cost-effective and
          time-efficient R&D services to creative minds like physicians, medical
          device manufacturers, and healthcare researchers who want to turn
          their ideas into market-ready products in an accelerated process.
        </motion.p>

        {/* Call-to-Action Button */}
        <motion.a
          href="#"
          className="inline-block bg-thLightBlue text-white font-semibold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out hover:bg-[#0098a1] mt-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          LEARN MORE
        </motion.a>
      </div>
    </section>
  );
}

export default AboutRMT;
