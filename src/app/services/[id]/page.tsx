"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { ourServicesData } from "@/data/ourServicesData";

interface AccordionItemProps {
  title: string;
  content: string;
  index: number;
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>; // Function to update the active index
}

// Services data

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  index,
  activeIndex,
  setActiveIndex,
}) => {
  const isOpen = activeIndex === index;

  const toggleAccordion = () => {
    setActiveIndex(isOpen ? -1 : index);
  };
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <div className="rkit-accordion-item border rounded-lg shadow-md my-4">
      <div
        className="rkit-accordion-header flex justify-start items-center cursor-pointer py-4 px-4 bg-thLightBlue rounded-lg"
        onClick={toggleAccordion}
      >
        <span className="text-gray-900">{title}</span>
      </div>

      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="rkit-accordion-content px-4 bg-white rounded-b-lg"
      >
        {isOpen && <p className="text-gray-600 py-2">{content}</p>}
      </motion.div>
    </div>
  );
};

export default function ServiceDetail() {
  const params = useParams();
  const id = params.id;

  const service = ourServicesData.find((service) => service.id === id);

  if (!service) {
    return <p>Service not found</p>;
  }


  return (
    <div>
      <section
        className="relative w-full bg-cover bg-center h-96 flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('/images/about/Banner1.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <motion.div
          className="relative z-10 text-white"
          initial={{ opacity: 0, y: 50 }} // Initial state (invisible, shifted down)
          animate={{ opacity: 1, y: 0 }} // Final state (visible, back to original position)
          transition={{ duration: 1 }} // Duration of the animation
        >
          {/* About Us Heading */}
          <h1 className="text-2xl md:text-4xl font-bold tracking-widest">
            {service.title}
          </h1>

          {/* Breadcrumb */}
          <p className="mt-4 text-lg md:text-xl font-medium">
            <span className="text-thLightBlue">Home</span> /{" "}
            <span>Services</span> / <span>{service.title}</span>
          </p>
        </motion.div>
      </section>

      {/* Service Details with Accordion */}
      <section id="service-details" className="py-12 px-4 md:px-12">
        <div className="mb-8">
          <h3 className="text-xl md:text-2xl text-thLightBlue font-semibold tracking-widest">
            {service.title}
          </h3>
        </div>
        <div className="md:mb-16 flex flex-col md:flex-row items-start gap-6 md:gap-12">
          {/* Left Side - Accordion */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2"
          >
            <div className="rkit-accordion border border-thLightBlue rounded-lg p-8">
              {service.accordion.map((item, index) => (
                <AccordionItem
                  key={index}
                  index={index}
                  title={item.title}
                  content={item.content}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                />
              ))}
            </div>
          </motion.div>

          {/* Right Side - Image & Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="max-w-xl w-full md:w-1/2 rounded overflow-hidden shadow-lg"
          >
            <Image
              src={service.bgImage}
              alt={service.title}
              width={500}
              height={500}
              className="w-full object-cover h-64"
            />
            <div className="px-6 py-4">
              <p className="text-gray-700 text-base">{service.description}</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
