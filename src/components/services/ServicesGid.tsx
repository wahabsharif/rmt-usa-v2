// components/Services.js
"use client";
import Link from "next/link";
import { motion } from "framer-motion"; // Import Framer Motion
import { FiArrowRight } from "react-icons/fi"; // Import React Icon
import { ourServicesData } from "@/data/ourServicesData";

const ServicesGrid = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 md:mb-12">
          Our Services
        </h2>
        <div className="w-full max-w-5xl container mx-auto">
          <div className="flex justify-center items-center flex-wrap gap-8 md:gap-16 place-items-center">
            {ourServicesData.map((service, index) => (
              <Link href={`/services/${service.slug}`} key={service.id}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }} // Initial state
                  animate={{ opacity: 1, y: 0 }} // Final state
                  transition={{
                    duration: 0.5,
                    delay: index * 0.2, // Stagger animations
                  }}
                  className="relative w-full md:max-w-xs lg:max-w-md bg-gradient-to-tr from-white to-gray-100 group hover:from-thLightBlue hover:to-thDarkBlue hover:text-gray-100 p-6 border border-thLightBlue rounded-lg shadow-md cursor-pointer flex flex-col h-full"
                >
                  {/* Background image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-70 rounded-lg"
                    style={{
                      backgroundImage: `url(${service.image})`,
                      transition: "opacity 0.3s ease-in-out",
                    }}
                  ></div>
                  {/* Overlay for darker effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-50 rounded-lg transition-opacity duration-300"></div>
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-lg font-semibold mb-4 group-hover:text-white">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-200 mb-6 line-clamp-4 overflow-hidden text-ellipsis">
                      {service.description}
                    </p>
                    <div className="border-t border-thLightBlue mb-4"></div>
                    <span className="text-thDarkBlue group-hover:text-white flex items-center">
                      Learn More
                      <FiArrowRight className="ml-2 w-4 h-4" />
                    </span>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
