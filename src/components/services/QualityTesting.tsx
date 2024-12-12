"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const QualityTesting = () => {
  return (
    <section
      id="quality-testing"
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
          src="/images/services/quality-testing.jpg"
          alt="Product Design & Engineering"
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
          Quality Testing
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-gray-600 text-base leading-relaxed"
        >
          Rigorous quality testing is paramount in ensuring the safety and efficacy of
          biomaterials, medical devices, and software solutions. At Revive Medical
          Technologies Inc., we are committed to providing comprehensive quality testing
          services that adhere to the highest industry standards. Our state-of-the-art
          facilities and experienced team utilize advanced testing methodologies to
          evaluate the performance, biocompatibility, and reliability of your products,
          ensuring they meet regulatory requirements and deliver optimal outcomes for
          patients.
        </motion.p>
      </div>
    </section>
  );
};

export default QualityTesting;
