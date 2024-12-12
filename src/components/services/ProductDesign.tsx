"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const ProductDesign = () => {
  return (
    <section
      id="product-design"
      className="md:mb-16 flex flex-col md:flex-row items-start gap-6 md:gap-12 px-4 py-4 md:py-10 pt-12 md:px-12"
    >
      {/* Left Side - Image */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex-shrink-0 w-full md:w-1/2"
      >
        <Image
          src="/images/services/product-design.jpg"
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
          Design & <br /> Fabrication
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-gray-600 text-base leading-relaxed md:max-w-md"
        >
          We provide a standardized design development approach to our clients where we
          adhere to strict design control protocols. We offer a complete design development
          solution for medical devices which also includes 2D, 3D, and even PCB Designing.
          Our clients remain part of the entire designing process, working hand-in-hand to
          get the best possible design output.
        </motion.p>
      </div>
    </section>
  );
};

export default ProductDesign;
