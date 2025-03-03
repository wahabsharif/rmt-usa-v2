"use client";
import React, { useEffect } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import Link from "next/link";

const AboutUsTwo = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], ["0%", "100%"]);
  useEffect(() => {
    const unsubscribe = scrollY.onChange(() => {});
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <section className="relative h-screen w-full">
      {/* Parallax Background */}
      <motion.div
        style={{
          transform: `translateY(${y})`,
          backgroundImage: `url('/images/home/building-picture.png')`,
        }}
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
      ></motion.div>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

      {/* Content */}
      <div className="relative flex flex-col justify-center items-center h-full px-8">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-7xl text-thLightBlue font-bold text-center"
        >
          Revive <br />
          <span className="text-white">Medical Technologies Inc. </span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-8 px-6 py-3 text-lg bg-thLightBlue text-white font-semibold rounded-full transition ease-in-out shadow-md hover:bg-thDarkBlue focus:outline-none"
        >
          <Link href={"/about"}>Learn More</Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsTwo;
