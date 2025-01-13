"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image"; // Import the Next.js Image component
import { motion } from "framer-motion";

const CeoMessage: React.FC = () => {
  return (
    <section className="py-6 md:py-16 px-6 md:px-4">
      {/* Flex container to split the layout */}
      <div className="flex flex-col md:flex-row justify-center items-start">
        {/* Left Side: Image */}
        <div className="relative w-full md:w-[40%] h-60 md:h-[600px]">
          <Image
            src="/images/team/dr-murtaza-najabat-ali-ceo-msg.webp"
            alt="Picture of the RMT CEO"
            width={1000}
            height={1000}
            className="object-cover rounded-lg h-[90%]"
          />
        </div>

        {/* Right Side: Content */}
        <div className="flex flex-col justify-center items-start py-4 md:py-2 text-gray-800 md:px-6 w-full md:w-1/2">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-thLightBlue">
              CEO Message
            </h2>
          </motion.div>

          {/* Description */}
          <p className="mt-2 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
            “At Revive Medical Technologies, our mission is clear: to advance
            the healthcare sector through relentless innovation and dedicated
            research and development. Our goal is to make exceptional healthcare
            accessible to everyone. With a background of over two decades in
            teaching and mentoring, I am passionate about empowering young minds
            to embrace problem-solving and tackle real-world challenges.
            Bridging the gap between industry and academia is a cornerstone of
            our philosophy at Revive. Being a biomedical engineer myself I
            deeply understand the complexities and challenges that healthcare
            professionals face, and simply strive to ease these processes by
            providing them with a streamlined end-to-end solution. Together, we
            can create a future where the best possible healthcare is within
            everyone&apos;s reach.”
          </p>

          {/* Doctor Details */}
          <div className="mt-6">
            <h3 className="text-2xl md:text-3xl font-bold">
              Dr. Murtaza Najabat ALi
            </h3>
            <p className="text-lg md:text-xl">CEO & CO-FOUNDER</p>
          </div>

          <div className="my-4">
            <Link
              href={"/team"}
              className="mt-8 px-6 py-3 text-lg bg-thLightBlue text-white font-semibold rounded-full transition ease-in-out shadow-md hover:bg-thDarkBlue focus:outline-none"
            >
              Meet Our Team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CeoMessage;
