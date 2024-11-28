import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const TopBar: React.FC = () => {
    return (
        <header className="bg-gray-100 text-sm text-gray-600 mb-1">
            <div className="container mx-auto px-4 py-2 flex justify-end items-center">
                <div className="flex space-x-6">
                    <div className="flex items-center space-x-2">
                        <div className="bg-[#00B4C5] p-2 rounded-full">
                            <FaEnvelope className="text-white" />
                        </div>
                        <a href="mailto:info@rmt-usa.com" className="text-sm md:text-base font-bold text-[#2E2E2E] hover:text-[#00B4C5]">
                            info@rmt-usa.com
                        </a>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="bg-[#00B4C5] p-2 rounded-full">
                            <FaPhone className="text-white" />
                        </div>
                        <a href="tel:+9251123456789" className="text-sm md:text-base font-bold text-[#2E2E2E] hover:text-[#00B4C5]">
                            +92-51-123456789
                        </a>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="bg-[#00B4C5] p-2 rounded-full">
                            <FaMapMarkerAlt className="text-white" />
                        </div>
                        <span className="text-sm text-[#2E2E2E] md:text-base font-bold">Florida, US</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default TopBar;
