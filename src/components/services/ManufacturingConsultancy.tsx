"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const ManufacturingConsultancy = () => {
  return (
    <section
      id="manufacturing"
      className="md:mb-16 flex flex-col md:flex-row-reverse items-start gap-6 md:gap-12 px-4 py-4 md:py-10 md:px-12"
    >
      {/* Left Side - Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex-shrink-0 w-full md:w-1/2"
      >
        <Image
          src="/images/services/manufacturing.jpg"
          alt="Manufacturing Consultancy"
          width={500}
          height={500}
          className="rounded-lg shadow-lg w-full object-cover h-64 md:h-[400px]"
        />
      </motion.div>

      {/* Right Side - Content */}
      <div className="w-full md:w-1/2">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-2xl md:text-5xl font-bold text-thLightBlue mb-6 md:pt-8"
        >
          Manufacturing & Process Technology
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-gray-600 text-base leading-relaxed"
        >
          We offer advanced solutions for establishing stent and PTCA balloon catheter
          production and testing lines, Our services include comprehensive installation and
          training, technical support for plant commissioning, and regulatory compliance
          assistance for both products and facilities. Additionally, we manufacture selected
          machines in-house, enhancing automation and ensuring superior results.
        </motion.p>
      </div>
    </section>
  );
};

export default ManufacturingConsultancy;
