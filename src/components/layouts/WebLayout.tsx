"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const WebLayout: React.FC = () => {
    return (
        <>
            <section>
                {/* Overlay for text contrast */}

                <main className="relative w-full bg-cover bg-center h-auto md:h-screen" style={{ backgroundImage: "url('/images/logo/heroImg.jpg')" }}>
                    <div className="absolute inset-0 bg-black bg-opacity-40"></div>

                    {/* Hero Content Container */}
                    <div className="relative z-10 container mx-auto px-6 py-4 md:py-8 text-left text-white">
                        {/* Heading and Subheading */}
                        <div className="flex flex-col tracking-[.15em] items-start space-y-4 md:space-y-4">
                            <motion.h1
                                className="text-4xl tracking-[.15em] md:text-5xl font-bold "
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                            >
                                <span className="text-white tracking-[.25em] mb-4 text-base md:2xl">END-TO-END SERVICE PROVIDER</span>
                                <br />
                                <span className="text-[#00B4C5] mb-4">INNOVATIVE</span> <br />
                                <span className="text-white mb-4">HEALTHCARE</span><br />
                                <span className="text-white">TECHNOLOGY</span>
                            </motion.h1>
                        </div>

                        {/* Paragraph Description */}
                        <div className="mt-6 max-w-3xl">
                            <motion.p
                                className="text-lg md:text-xl font-light"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 1.2 }}
                            >
                                Our company is deeply committed to applying our expertise and industry knowledge to provide truly innovative and meaningful solutions
                                that meet our client's needs and help them succeed. We prioritize patient-centered care to ensure the best possible outcome.

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
                                LEARN MORE
                            </motion.a>
                        </div>
                    </div>
                </main>
                {/* <div className="absolute inset-0 bg-black bg-opacity-40"></div> */}
                <div className="bg-gray-100 flex md:justify-end  items-start ">
                    <div className="w-full md:w-1/2  p-6 text-left">
                        <div className="flex flex-col  items-start space-y-4 md:space-y-4">
                            <motion.h1
                                className="text-4xl  md:text-5xl font-bold  "
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                            >
                                <span className="text-[#023550] tracking-[.10em] mb-4 text-base md:2xl">ABOUT RMT</span>
                                <br />
                                <span className="text-[#023550] mb-4">Innovating Ideas,</span> <br />
                                <span className="text-[#023550] mb-4">Accelerating Success</span><br />
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
                                As a cross-functional service provider we provide cost-effective and time-efficient R&D services to creative minds like Physicians ,
                                Medical device manufactures and healthcare reserchers who want to realize their ingenious ideas into market-ready products in an accelerated process.

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
                                LEARN MORE
                            </motion.a>
                        </div>
                    </div>
                </div>



                <div className="bg-[#E5EAED] flex justify-center items-center py-12">
                    <div className="w-full px-6">
                        {/* Services Heading */}
                        <h2 className="text-4xl font-bold text-center text-[#023550] mb-8">
                            Our Services
                        </h2>

                        {/* Services Cards */}
                        <div className="flex justify-center items-center flex-wrap gap-12">
                            {/* Service Card 1 */}
                            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center w-[18rem] min-h-[16rem]">
                                <div className="mb-4 w-16 h-16 relative">
                                    <Image
                                        src="/logo1.png"
                                        alt="Service 1"
                                        width={64}
                                        height={64}
                                        className="object-contain"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold text-[#02B3C6]">
                                    Product Design & Engineering
                                </h3>
                            </div>

                            {/* Service Card 2 */}
                            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center w-[18rem] min-h-[16rem]">
                                <div className="mb-4 w-16 h-16 relative">
                                    <Image
                                        src="/logo2.png"
                                        alt="Service 2"
                                        width={64}
                                        height={64}
                                        className="object-contain"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold text-[#02B3C6]">
                                    Software & Artificial Intelligence
                                </h3>
                            </div>

                            {/* Service Card 3 */}
                            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center w-[18rem] min-h-[16rem]">
                                <div className="mb-4 w-16 h-16 relative">
                                    <Image
                                        src="/logo3.png"
                                        alt="Service 3"
                                        width={64}
                                        height={64}
                                        className="object-contain"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold text-[#02B3C6]">
                                    Regulatory Affairs & Quality Management
                                </h3>
                            </div>

                            {/* Service Card 4 */}
                            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center w-[18rem] min-h-[16rem]">
                                <div className="mb-4 w-16 h-16 relative">
                                    <Image
                                        src="/logo4.png"
                                        alt="Service 4"
                                        width={64}
                                        height={64}
                                        className="object-contain"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold text-[#02B3C6]">
                                    Quality Testing
                                </h3>
                            </div>

                            {/* Service Card 5 */}
                            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center w-[18rem] min-h-[16rem]">
                                <div className="mb-4 w-16 h-16 relative">
                                    <Image
                                        src="/logo5.png"
                                        alt="Service 5"
                                        width={64}
                                        height={64}
                                        className="object-contain"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold text-[#02B3C6]">
                                    Manufacturing Consultancy
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Capailites section  */}

                <div
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
                                    Our team leverages cutting-edge technology and years of expertise to
                                    deliver exceptional results tailored to your unique challenges. With a
                                    focus on innovation, collaboration, and adaptability, we ensure every
                                    solution aligns with your strategic goals. Explore the five core
                                    capabilities that make us your trusted partner in progress.
                                </p>

                                {/* List of Headings */}
                                <div className="space-y-4 text-[#023550]">
                                    <div className="border-b-2 border-[#C5C5C5] pb-2">
                                        <h4 className="text-xl font-semibold">ACTIVE MEDICAL DEVICES</h4>
                                    </div>
                                    <div className="border-b-2 border-[#C5C5C5] pb-2">
                                        <h4 className="text-xl font-semibold">NON-ACTIVE MEDICAL DEVICES</h4>
                                    </div>
                                    <div className="border-b-2 border-[#C5C5C5] pb-2">
                                        <h4 className="text-xl font-semibold">BIOMATERIALS & DRUG SYNTHESIS</h4>
                                    </div>
                                    <div className="border-b-2 border-[#C5C5C5] pb-2">
                                        <h4 className="text-xl font-semibold">AI-DRIVEN MEDICAL DEVICES</h4>
                                    </div>
                                    <div className="border-b-2 border-[#C5C5C5] pb-2">
                                        <h4 className="text-xl font-semibold">SOFTWARES AS A MEDICAL DEVICE(SaMD)</h4>
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
                </div>








            </section>


        </>
    );
};

export default WebLayout;
