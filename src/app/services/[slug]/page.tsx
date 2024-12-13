"use client";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { ourServicesData } from "@/data/ourServicesData";
import { FaChevronUp } from "react-icons/fa";

interface ServiceSubProps {
  title: string;
  description: string;
  index: number;
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  image: string;
}

const ServiceSub: React.FC<ServiceSubProps> = ({
  title,
  description,
  index,
  activeIndex,
  setActiveIndex,
}) => {
  const isOpen = activeIndex === index;

  const toggleAccordion = () => {
    setActiveIndex(isOpen ? -1 : index);
  };

  return (
    <div className="rkit-accordion-item border rounded-lg shadow-md my-4">
      <div
        className="rkit-accordion-header flex justify-start items-center cursor-pointer py-4 px-4 bg-thLightBlue rounded-lg"
        onClick={toggleAccordion}
      >
        <span className="text-gray-900 flex-1">{title}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }} // Rotate the arrow based on isOpen state
          transition={{ duration: 0.3 }}
          className="ml-2"
        >
          <FaChevronUp className="text-gray-900" />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="rkit-accordion-content px-4 bg-white rounded-b-lg"
      >
        {isOpen && <p className="text-gray-600 py-2">{description}</p>}
      </motion.div>
    </div>
  );
};

export default function ServiceDetail() {
  const params = useParams();
  const slug = params.slug;

  // Find the service
  const service = ourServicesData.find((service) => service.slug === slug);

  // Initialize states
  const [activeIndex, setActiveIndex] = useState(0);

  // Render fallback if service is not found
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
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <motion.div
          className="relative z-10 text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-2xl md:text-4xl font-bold tracking-widest">
            {service.title}
          </h1>
          <p className="mt-4 text-lg md:text-xl font-medium">
            <span className="text-thLightBlue">Home</span> /{" "}
            <span>Services</span> / <span>{service.title}</span>
          </p>
        </motion.div>
      </section>

      <section id="service-details" className="py-12 px-4 md:px-12">
        {service.serviceSub.map((serviceSub) => (
          <div key={serviceSub.id}>
            <h3 className="text-2xl md:text-4xl text-center text-thLightBlue font-semibold tracking-widest">
              {serviceSub.title}
            </h3>
            <p className="my-6">{serviceSub.description}</p>

            <div className="md:mb-16 flex flex-col md:flex-row items-start gap-6 md:gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="w-full md:w-1/2"
              >
                <div className="rkit-accordion border border-thLightBlue rounded-lg p-8">
                  {serviceSub.accordion?.map((item, index) => (
                    <ServiceSub
                      key={index}
                      index={index}
                      title={item.title}
                      description={item.description}
                      activeIndex={activeIndex}
                      setActiveIndex={setActiveIndex}
                      image={item.image}
                    />
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="w-full grid grid-cols-2 md:grid-cols-2 gap-4"
              >
                {serviceSub.accordion?.map((item, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={1500}
                      height={1500}
                      className="w-full h-60 cursor-pointer object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
