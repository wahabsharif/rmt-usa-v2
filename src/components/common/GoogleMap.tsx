"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

function GoogleMap() {
  type Tab = "headquarter" | "satelliteOffice";
  const [activeTab, setActiveTab] = useState<Tab>("headquarter");

  const maps = {
    headquarter: {
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.7403350159775!2d-81.29262682578872!3d28.36669909610513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88dd89b6a6b3e301%3A0x5ec4cb93ba410e95!2sGuideWell%20Innovation%20Center!5e0!3m2!1sen!2s!4v1732873113996!5m2!1sen!2s",
      title: "US Office",
    },
    satelliteOffice: {
      src: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3326.173939657459!2d73.092313!3d33.522863!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c3be14889cd4efd%3A0xb20676eb67d56ad5!2sRevive%20Medical%20Technologies!5e0!3m2!1sen!2s!4v1735281285211!5m2!1sen!2s",
      title: "Pakistan Office",
    },
  };

  return (
    <div>
      {/* Tabs */}
      <div className="flex justify-center my-4 space-x-2">
        <button
          className={`px-5 py-2 uppercase cursor-pointer border border-gray-300 rounded-full ${
            activeTab === "headquarter"
              ? "bg-thDarkBlue text-white"
              : "bg-gray-100 text-black"
          }`}
          onClick={() => setActiveTab("headquarter")}
        >
          HeadOffice
        </button>
        <button
          className={`px-5 py-2 uppercase cursor-pointer border border-gray-300 rounded-full ${
            activeTab === "satelliteOffice"
              ? "bg-thDarkBlue text-white"
              : "bg-gray-100 text-black"
          }`}
          onClick={() => setActiveTab("satelliteOffice")}
        >
          offshore (R&D Facility)
        </button>
      </div>

      {/* Map */}
      <div className="relative filter grayscale overflow-hidden h-[400px]">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="absolute w-full h-full"
        >
          <iframe
            src={maps[activeTab].src}
            className="w-full h-full border-none"
            loading="lazy"
            title={maps[activeTab].title}
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
}

export default GoogleMap;
