"use client";

import React from "react";
import { motion } from "framer-motion";
import featureData from "@/data/featureData";
import Image from "next/image";

const Feature: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featureData.map((feature) => (
          <motion.div
            key={feature.id}
            className="bg-white cursor-pointer shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="text-4xl mb-4 flex justify-center items-center"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src={feature.icon}
                alt={feature.title}
                width={500}
                height={500}
                className="w-20"
                priority // Add priority to load the image faster
              />
            </motion.div>

            <h3 className="text-lg font-semibold">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
