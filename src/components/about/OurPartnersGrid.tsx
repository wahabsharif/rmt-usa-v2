"use client";

import React from "react";
import { ourPartnersData } from "@/data/ourPartnersData";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const OurPartnersGrid: React.FC = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="items-center">
        {/* Left Section: Title and Description */}
        <div className="text-center my-6">
          <h2 className="text-3xl md:text-5xl my-4 font-bold text-thLightBlue">
            Our Strategic Partners
          </h2>
          <p className="text-lg text-gray-600">
            We collaborate with industry-leading organizations to drive
            innovation and deliver top-notch solutions. Together, we achieve
            greater success.
          </p>
        </div>

        {/* Right Section: Partner Logos Grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 mt-8 md:mt-0">
          {ourPartnersData.map((partner, index) => (
            <motion.div
              key={index}
              rel="noopener noreferrer"
              className="flex justify-center cursor-pointer items-center bg-gray-100 p-2 rounded-lg shadow-md"
              whileHover={{ scale: 1.1, rotate: 2 }}
              transition={{ duration: 0.3 }}
            >
              <Link href={partner.link} target="_blank">
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={1000}
                  height={1000}
                  className="w-28 object-contain"
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurPartnersGrid;
