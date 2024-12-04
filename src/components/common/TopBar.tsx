import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const TopBar: React.FC = () => {
  return (
    <header className="bg-gray-100 text-sm text-gray-600 border-b-2 border-gray-600">
      <div className="container mx-auto px-4 py-2">
        {/* Grid layout for responsiveness */}
        <div className="grid grid-cols-1 md:flex md:justify-end items-start gap-y-2 md:gap-6">
          {/* Email */}
          <div className="flex items-start space-x-2 justify-start">
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

          {/* Location */}
          <div className="flex items-start space-x-2 justify-start">
            <div className="bg-thLightBlue p-2 rounded-full">
              <FaMapMarkerAlt className="text-white" />
            </div>
            <span className="text-sm md:text-base font-bold text-[#2E2E2E]">
              Florida, US
            </span>
          </div>

          {/* Phone */}
          <div className="flex items-start space-x-2 justify-start md:justify-start md:ml-auto">
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
        </div>
      </div>
    </header>
  );
};

export default TopBar;
