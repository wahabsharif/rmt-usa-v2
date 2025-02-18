"use client";
import { BoxReveal } from "./box-reveal";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function DrMurtaza() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b md:p-4 p-2 from-gray-100 to-gray-300 px-6">
      <div className="bg-white shadow-lg rounded-xl max-w-3xl p-2 md:px-6 text-center flex flex-col items-center">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <Image
            src="/images/dr-murtaza.jpg" // Replace with actual image path
            alt="Dr. Murtaza Najabat Ali"
            width={1000}
            height={1000}
            className="rounded-lg shadow-md"
            priority
          />
        </motion.div>

        <BoxReveal boxColor={"#013550"} duration={0.5}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl md:text-5xl font-bold text-gray-900"
          >
            Prof. Dr. Murtaza Najabat Ali
            <span className="text-[#013550]">.</span>
          </motion.p>
        </BoxReveal>

        <BoxReveal boxColor={"#013550"} duration={0.5}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 text-sm md:text-xl font-medium text-gray-700"
          >
            Global innovator and{" "}
            <span className="text-[#013550] font-semibold">
              prominent national biomedical technologist
            </span>
          </motion.h2>
        </BoxReveal>

        <div className="mt-6 text-justify space-y-6 text-gray-800">
          {[
            `Dr. Murtaza Najabat Ali, a visionary leader and pioneer in medical
            technology, driving innovation in healthcare solutions. As CEO and
            Co-Founder of Revive Medical Technologies Inc., Dr. Murtaza brings
            20+ years of expertise in Medical Device R&D, production, IP
            development, and technology transfer.`,

            `His notable achievements include serving as the Founding Director of
            the Medical Devices Development Center (MDDC) and as the Founding
            CEO of Pakistan's first state-owned cardiovascular device
            industry. These accomplishments demonstrate his dedication to
            advancing medical technology and improving healthcare outcomes.`,

            `Dr. Murtaza's outstanding contributions have been recognized
            through numerous awards and honors. He has received the National
            Development Award from the Government of Pakistan, the Presidential
            Award, and the Excellence Award from the Pakistan Engineering
            Council (PEC). Additionally, he has been honored as a COMSTECH
            Distinguished Scholar for his efforts in capacity building in OIC
            member states.`,

            `As a prolific innovator, Dr. Murtaza has developed 23 patents, 25
            prototypes, and 5 DRAP-approved medical devices. His research has
            been published in over 50 papers, and he has secured more than $10
            million in funding. These achievements showcase his commitment to
            advancing medical technology and improving patient care.`,

            `Dr. Murtaza is a Fellow of the Institution of Mechanical Engineers
            (IMechE) and an expert member of DRAP. His professional affiliations
            demonstrate his expertise and leadership in the field of medical
            technology.`,

            `At RMT, Dr. Murtaza is actively addressing a global challenge within
            the healthcare industry: the fragmentation of the medical device
            innovation process. Currently, transforming a health technology idea
            into a market-ready product entails a multifaceted process that is
            time-consuming and expensive.`,

            `To address this issue, RMT has devised a disruptive solution by
            providing turnkey services for any type of health technology or
            medical technology idea. RMT offers a comprehensive platform that
            facilitates the conversion of an idea into a market-ready product.`,

            `This enables numerous individuals with an idea or intellectual
            property to not only visualise their products into functional
            prototypes but also initiate pilot production and obtain the
            necessary regulatory approvals to launch their products into
            markets. All of this is accomplished at a fraction of the time and
            cost while maintaining the highest quality and compliance with
            international standards.`,
          ].map((text, index) => (
            <BoxReveal key={index} boxColor={"#013550"} duration={0.5}>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="leading-relaxed text-xs md:text-lg hover:text-[#013550] transition-all duration-300"
              >
                {text}
              </motion.p>
            </BoxReveal>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <Link href={"/"}>
            <Image
              src="/images/logo/rmt-usa-logo.png" // Replace with actual image path
              alt="Dr. Murtaza Najabat Ali"
              width={1000}
              height={1000}
              className="mt-5 w-32 md:w-56"
              priority
            />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
