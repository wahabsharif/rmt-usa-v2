"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

// Define types for the accordion item
interface AccordionItemProps {
  title: string;
  content: string;
  index: number;
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  index,
  activeIndex,
  setActiveIndex,
}) => {
  const isOpen = activeIndex === index; // Check if the current item is open

  const toggleAccordion = () => {
    setActiveIndex(isOpen ? -1 : index); // Close if it's already open, otherwise open
  };

  return (
    <div className="rkit-accordion-item border rounded-lg shadow-md my-4">
      <div
        className="rkit-accordion-header flex justify-start items-center  cursor-pointer py-4 gap-8 px-4 bg-thLightBlue rounded-lg"
        onClick={toggleAccordion}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="ml-2 w-4 h-4"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <span className="rkit-accordion__title text-gray-900">{title}</span>
        <div className="rkit-accordion__icon">
          <i
            aria-hidden="true"
            className={`rtmicon rtmicon-arrow-${isOpen ? "down" : "right"}`}
          ></i>
        </div>
      </div>

      {/* Accordion content with animation */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="rkit-accordion-content px-4 bg-white rounded-b-lg"
      >
        {isOpen && (
          <p className="rkit-accordion__content text-gray-600 py-2">
            {content}
          </p>
        )}
      </motion.div>
    </div>
  );
};

// Define type for the BiomaterialSynthesis component data
interface Service {
  title: string;
  content: string;
}

const BiomaterialSynthesis: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(-1); // Active accordion item index
  const services: Service[] = [
    {
      title: "Pharmaceutical Formulations & Coatings",
      content:
        "Our Pharmaceutical Formulations division integrates pharmaceutical sciences, chemistry, and biotechnology to provide tailored pharmaceutical formulations. We specialize in the development of advanced coatings engineered to optimize biocompatibility, device functionality, and performance across various therapeutic areas, such as oncology, cardiology, neurology, and infectious diseases.",
    },
    {
      title: "Drug Development & delivery systems",
      content:
        "At RMT, we leverage cutting-edge techniques and computational approaches, to conduct rigorous research to identify and optimize novel therapeutic molecules. Our team specialize in designing and optimizing advanced delivery platforms such as microspheres, liposomes and nanoparticles to enhance the efficacy and safety of pharmaceutical products.",
    },
    {
      title: "Testing Services",
      content:
        "Our Testing Services division is committed to ensuring the safety, efficacy, and quality of medical products through rigorous testing protocols. Our comprehensive suite of testing services includes: Quality Testing Sterilization Validation Shelf-life Testing Microbiological Testing",
    },
  ];

  return (
    <section id="manufacturing" className="py-12 px-4 md:px-12">
      <div className="md:mb-16 flex flex-col md:flex-row items-start gap-6 md:gap-12">
        {/* Left Side - Accordion */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2"
        >
          <div className="mb-8">
            <h3 className="text-xl md:text-2xl text-thLightBlue font-semibold tracking-widest">
              Biomaterial & Drug Synthesis
            </h3>
          </div>
          <div className="rkit-accordion border border-thLightBlue rounded-lg p-8">
            {services.map((service, index) => (
              <AccordionItem
                key={index}
                index={index}
                title={service.title}
                content={service.content}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
            ))}
          </div>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-xl w-1/2 rounded overflow-hidden shadow-lg"
        >
          <Image
            src="/images/services/biomaterial.webp"
            alt="Product Design & Engineering"
            width={500}
            height={500}
            className="w-full object-cover h-64"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              Biomaterial & Drug Synthesis
            </div>
            <p className="text-gray-700 text-base">
              Our Biomaterials and Drug Synthesis division is dedicated to
              harnessing the potential of biomaterials for a myriad of
              healthcare applications. Whether it&apos;s related to customized
              coatings and surface modifications of medical devices or the
              refinement of targeted drug delivery mechanisms, we stand at the
              forefront of innovation. Through a meticulous blend of scientific
              expertise and technological prowess, we strive to elevate medical
              treatments to unprecedented levels of efficacy and safety.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BiomaterialSynthesis;
