"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import contactInfoData from "@/data/contactInfoData";
import Link from "next/link";

const ContactInfo: React.FC = () => {
  return (
    <div className="flex flex-col items-center space-y-6 px-4">
      {contactInfoData.map((info, index) => (
        <motion.div
          key={index}
          className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2 text-lg md:text-2xl font-semibold text-thRed">
              <span className="text-2xl md:text-6xl">
                {React.createElement(info.icon)}
              </span>
              <span>{info.title}</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaPhone className="text-gray-600" />
              <Link
                href={`tel:${info.phone}`}
                className="hover:text-blue-500 hover:underline"
              >
                {info.phone}
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-gray-600" />
              <Link
                href={`mailto:${info.email}`}
                className="hover:text-blue-500 hover:underline"
              >
                {info.email}
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-gray-600" />
              <Link
                href={info.locationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 hover:underline"
              >
                {info.location}
              </Link>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ContactInfo;
