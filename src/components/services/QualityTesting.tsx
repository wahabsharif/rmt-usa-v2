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

// Define type for the QualityTesting component data
interface Service {
  title: string;
  content: string;
}

const QualityTesting: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(-1); // Active accordion item index
  const services: Service[] = [
    {
      title: "Quality Plan",
      content:
        "A quality plan usually covers the processes and quality elements which are applicable over the specific case. It further includes internal and external requirements may not be necessary for the specific case but are included to ensure acceptability from external elements like end-user, local market norms, local regulatory bodies, etc. Quality Plan is also dependent upon how well the QMS documentation can support it.",
    },
    {
      title: "Bench Testing",
      content:
        "Testing of products-under development in a simulated environment with aid of specialized equipment, tools and software, opens avenues for evaluating different performance and safety attributes which can be expressed qualitatively and quantitatively. We offer specialized bench testing solutions focused on testing our client’s under-development products.",
    },
    {
      title: "Simulation",
      content:
        "It is the imitation of the operation of a real-world process or system over time. Simulations require the use of models; the model represents the key characteristics or behaviors of the selected system or process, whereas the simulation represents the evolution of the model over time. We provide advanced computation modelling (e.g., Finite Element Analysis) to simulate working conditions to predict behavior of an under-development product.",
    },
    {
      title: "Visual Inspection",
      content:
        "We offer services for Visual Inspection which is a globally employed quality inspection technique. Our team of highly skilled and experienced scientists and engineers’ using high quality visual inspection technology like high-magnification digital microscopes can visually detect the smallest defects or irregularities in a product which may have an impact on the product’s performance or safety.",
    },
  ];

  return (
    <section id="quality-testing" className="py-12 px-4 md:px-12">
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
              Quality Testing
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
            src="/images/services/services2.webp"
            alt="Product Design & Engineering"
            width={500}
            height={500}
            className="w-full object-cover h-64"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Design & Fabrication</div>
            <p className="text-gray-700 text-base">
              We provide a standardized design development approach to our
              clients where we adhere to strict design control protocols. We
              offer a complete design development solution for medical devices
              which also includes 2D, 3D and even PCB Designing. Our clients
              remain part of the entire designing process, working hand-in-hand
              to get the best possible design output.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QualityTesting;
