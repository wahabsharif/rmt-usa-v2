"use client";
import React, { useEffect } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

const OurTeamImpact: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], ["0%", "100%"]);

  useEffect(() => {
    const unsubscribe = scrollY.onChange((value) => {
      console.log("Scroll Y:", value);
    });
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <section className="relative h-screen w-full">
      {/* Parallax Background */}
      <motion.div
        style={{
          transform: `translateY(${y})`,
          backgroundImage: `url('/images/about/parallax_02.jpg')`, // Change the background image path as needed
        }}
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
      ></motion.div>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

      {/* Content */}
      <div className="relative flex flex-col justify-start items-start h-full px-8 py-16 text-left text-white">
        {/* Section Title */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-lg font-semibold md:px-6 text-thLightBlue"
        >
          Our Impact
        </motion.p>
        
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-4xl font-bold text-white md:px-6 mt-4"
        >
          Best Medical Innovation Services <br /> Guaranteed
        </motion.h2>

        {/* Impact Metrics */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {/* Impact 1: Years Experience */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col items-start p-6 "
          >
            <div className="mb-4 text-5xl font-bold text-thLightBlue">
              <span className="text-6xl">20</span>+
            </div>
            <h3 className="text-xl font-semibold text-white">Years Experience</h3>
          </motion.div>

          {/* Impact 2: R&D Projects */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col items-start p-6 "
          >
            <div className="mb-4 text-5xl font-bold text-thLightBlue">
              <span className="text-6xl">40</span>+
            </div>
            <h3 className="text-xl font-semibold text-white">R & D Projects</h3>
          </motion.div>

          {/* Impact 3: Employees */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col items-start p-6 "
          >
            <div className="mb-4 text-5xl font-bold text-thLightBlue">
              <span className="text-6xl">25</span>+
            </div>
            <h3 className="text-xl font-semibold text-white">Employees</h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurTeamImpact;
