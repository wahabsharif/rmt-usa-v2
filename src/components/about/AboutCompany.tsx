"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaPhone, FaArrowRight } from "react-icons/fa";

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
            <div className="w-full md:w-1/2 p-6 text-left space-y-6">
                {/* Heading */}
                <motion.h1
                    className="text-xl md:text-lg font-med text-gray-800"
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
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
                        High Sensitive
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-gray-800">
                        Bionic Prosthesis
                    </h3>
                </motion.div>

                {/* Subheading with Paragraph */}
                <motion.h4
                    className="text-xl md:text-xl font-semibold text-gray-800"
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
                    <a
                        href="#"
                        className="inline-block bg-[#00B4C5] text-white font-semibold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out hover:bg-[#0098a1] flex items-center space-x-2"
                    >
                        <span>More Info</span>
                        <FaArrowRight className="text-white" />
                    </a>
                    <div
                        className="flex items-center text-gray-800  p-4 rounded-lg"
                    >
                        <div className="bg-[#00B4C5] p-2 mr-2 rounded-full">
                            <FaPhone className="text-white" />
                        </div>
                        <a href="tel:8-800-10-500-25" className="text-gray-800">
                            8-800-10-500-25
                        </a>
                    </div>

                </motion.div>
            </div>
        </section>
    );
};

export default AboutCompany;
