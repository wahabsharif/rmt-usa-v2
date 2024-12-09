"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaShieldAlt,
  FaCheckCircle,
  FaHeadset,
  FaUsers,
} from "react-icons/fa"; // Importing more relevant icons

const values = [
  {
    icon: <FaLightbulb />, // Icon for Innovation (Lightbulb)
    title: "Innovation",
    description:
      "We foster a culture of continuous innovation to drive progress in healthcare.",
  },
  {
    icon: <FaShieldAlt />, // Icon for Integrity (Shield)
    title: "Integrity",
    description:
      "We operate with honesty, ethics, and transparency in all our interactions.",
  },
  {
    icon: null, // Icon for Our Values (Users or Community)
    title: "Our Values",
    subtitle: "The Epitome of Innovation",
  },
  {
    icon: <FaUsers />, // Icon for Collaboration (Handshake or Helping Hands)
    title: "Collaboration",
    description: "We believe in the power of teamwork to achieve our mission.",
  },
  {
    icon: <FaCheckCircle />, // Icon for Quality (Check Circle)
    title: "Quality",
    description:
      "We uphold the highest standards in all our products and services.",
  },
  {
    icon: <FaHeadset />, // Icon for Customer-Centric (Headset)
    title: "Customer-Centric",
    description: "Our customers' needs are at the forefront of all that we do.",
  },
];

const OurTeamValues: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 + index * 0.2 }}
              className={`p-6 border-[1px] border-gray-300 ${
                index < 3 ? "border-b-0 border-r-0 " : "" // Add bottom border for cards in first row
              } ${index >= 3 ? "border-t border-l-0" : ""}${
                index === 3 ? "border-l-[1px]" : ""
              } ${
                index === 2
                  ? "border-t-0 border-r-0 border-l-[1px]" // Special case for the third card
                  : ""
              }`}
            >
              {/* Icon and Content */}
              {value.icon && (
                <div className="text-5xl text-thLightBlue mb-4">
                  {value.icon} {/* Render the icon directly */}
                </div>
              )}
              {value.title && (
                <h3
                  className={`text-xl font-bold  ${
                    index === 2 ? "text-thLightBlue" : "text-gray-800"
                  }`}
                >
                  {value.title}
                </h3>
              )}
              {value.subtitle && (
                <p
                  className={`mt-2 font-bold text-black ${
                    index === 2 ? "text-3xl" : ""
                  }`}
                >
                  {value.subtitle}
                </p>
              )}
              {value.description && (
                <p className="mt-2 text-gray-600">{value.description}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeamValues;
