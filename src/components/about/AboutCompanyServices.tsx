"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaPhone, FaArrowRight } from "react-icons/fa";

const AboutCompanyServices: React.FC = () => {
    return (
        <section className="bg-white flex flex-col md:flex-row items-start justify-center mx-auto  py-16 px-6 md:px-20 gap-x-8">
            {/* Left Section with Content */}
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

                <motion.div initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}>

                    <div className="border-b-[1px] border-gray-500 pt-8">
                        <div className="flex gap-4">
                            <h3 className="font-bold text-xl text-[#00B4C5]">01</h3>
                            <h3 className="text-gray-800 font-bold text-xl">High Comfort</h3>
                        </div>
                        <p className="py-4">A prosthetic device is not just a piece of hardware, it's a symbol of resilience.</p>
                    </div>
                    <div className="border-b-[1px] border-gray-500 pt-8">
                        <div className="flex gap-4">
                            <h3 className="font-bold text-xl text-[#00B4C5]">02</h3>
                            <h3 className="text-gray-800 font-bold text-xl">Lifetime Support</h3>
                        </div>
                        <p className="py-4">Prosthetics is a field where science and humanity work hand in hand to change lives.</p>
                    </div>
                    <div className="border-b-[1px] border-gray-500 pt-8">
                        <div className="flex gap-4">
                            <h3 className="font-bold text-xl text-[#00B4C5]">03</h3>
                            <h3 className="text-gray-800 font-bold text-xl">Eco materials</h3>
                        </div>
                        <p className="py-4">With prosthetics, we are not just restoring physical abilities, we are restoring confidence and hope.</p>
                    </div>

                </motion.div>





            </div>

            {/* Right Section with Image */}
            <div className="w-full md:w-1/3 flex justify-center items-center p-6 space-y-6">
                <motion.img
                    src="/images/about/About3.jpg"
                    alt="Image 1"
                    className="w-full md:w-[18rem] shadow-lg"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                />
            </div>
        </section>
    );
};

export default AboutCompanyServices;
