import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const TopBar: React.FC = () => {
  return (
    <header className="bg-gray-100 text-sm text-gray-600 border-b-2 border-gray-600 ">
      <div className="container mx-auto px-4 py-2 flex justify-end items-center">
        <div className="flex space-x-6">
          <div className="flex items-center space-x-2">
            <div className="bg-thLightBlue p-2 rounded-full">
              <FaEnvelope className="text-white" />
            </div>
            <a
              href="mailto:info@rmt-usa.com"
              className="text-sm md:text-base font-bold text-[#2E2E2E] hover:text-thLightBlue"
            >
              info@rmt-usa.com
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <div className="bg-thLightBlue p-2 rounded-full">
              <FaPhone className="text-white" />
            </div>
            <a
              href="tel:+9251123456789"
              className="text-sm md:text-base font-bold text-[#2E2E2E] hover:text-thLightBlue"
            >
              +92-51-123456789
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <div className="bg-thLightBlue p-2 rounded-full">
              <FaMapMarkerAlt className="text-white" />
            </div>
            <span className="text-sm text-[#2E2E2E] md:text-base font-bold">
              Florida, US
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
