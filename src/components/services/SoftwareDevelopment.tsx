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
                className="rkit-accordion-header flex justify-start items-center  cursor-pointer py-4 gap-2 md:gap-8 px-0 md:px-4 bg-thLightBlue rounded-lg"
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

const SoftwareDevelopment: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number>(-1); // Active accordion item index
    const services: Service[] = [
        {
            title: "AI/ML",
            content:
                "We leverage the power of Artificial Intelligence and Machine Learning to create intelligent medical solutions. Our team can design and develop custom algorithms for tasks like medical image analysis, diagnostics, and personalized treatment planning. We develop both, generative AI and traditional AI based solutions, followed by statistical analysis and data science.",
        },
        {
            title: "DevOps",
            content:
                "Our experts ensure continuous integration, delivery, and optimized deployment of web applications, enabling rapid development and updates. By leveraging automated testing, monitoring, and efficient collaboration tools, we ensure high-quality code and seamless integration across development and operations. Our approach enhances scalability, reduces time-to-market while maintaining reliability",
        },
        {
            title: "Customized Application Development",
            content:
                "Our skilled developers bring medical software vision to life. We specialize in building secure, scalable, and user-friendly applications that meet the specific needs of the healthcare industry whether it be Web Application, Desktop Application or Mobile Application.",
        },
        {
            title: "SQA",
            content:
                "We guarantee the quality and reliability of your medical software through comprehensive Software Quality Assurance (SQA) services. Our SQA team meticulously tests applications to ensure they function flawlessly and meet regulatory standards. We specialize in STLC of both, Software-as-Medical-Device (SaMD) and Software-in-Medical-Device (SiMD). From static testing to system-level testing and cybersecurity testing, we offer end-to-end SQA.",
        },
    ];

    return (
        <section id="software-development" className="py-12 px-4 md:px-12">
            <div className="md:mb-16 flex flex-col md:flex-row-reverse items-start gap-6 md:gap-12">
                {/* Left Side - Accordion */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="w-full md:w-1/2"
                >
                    <div className="mb-8">
                        <h3 className="text-xl md:text-2xl text-thLightBlue font-semibold tracking-widest">
                            Software Development
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
                    className="max-w-xl w-full md:w-1/2 rounded overflow-hidden shadow-lg"
                >
                    <Image
                        src="/images/services/software-development.jpg"
                        alt="Product Design & Engineering"
                        width={500}
                        height={500}
                        className="w-full object-cover h-64"
                    />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Software Development</div>
                        <p className="text-gray-700 text-base">
                            Innovative software solutions are the driving force behind the enhancement of patient care, process optimization, and industry transformation in the ever-evolving healthcare landscape. At Revive Medical Technologies Inc., we are pioneers in developing cutting-edge healthcare software solutions that span critical areas.

                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SoftwareDevelopment;
