"use client";

import Link from "next/link";
import React from "react";

const MeetTeam: React.FC = () => {
  return (
    <section
      className="relative w-full bg-cover bg-center h-auto md:h-screen py-16 px-6 md:px-4"
      style={{
        backgroundImage: "url('/images/about/About3.png')",
        backgroundColor: "rgba(255, 255, 255, 0.5)", // White background with transparency
        backgroundBlendMode: "overlay", // Overlay white background over the image
      }}
    >
      {/* Container for layout */}
      <div className="flex justify-end items-center h-full relative">
        {/* Content */}
        <div className="relative z-10 max-w-4xl text-gray-800 bg-white bg-opacity-80 p-6 rounded-lg md:p-10">
          {/* Section Heading */}
          <div className="mb-8 text-left">
            <h2 className="text-lg mb-2 uppercase tracking-widest">
              MEET OUR TEAM
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold text-thLightBlue">
              Our Qualified Doctors
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mt-2">
              On Guard of Your Health
            </h2>
            <h2 className="text-2xl md:text-3xl font-semibold mt-2">
              and Comfort
            </h2>
          </div>

          {/* Description */}
          <p className="mt-4 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
            “Prosthetics biomedicine is not just about creating replacement
            limbs. It’s about enabling people to reclaim their abilities and
            pursue their passions.”
          </p>

          {/* Doctor Details */}
          <div className="mt-12">
            <h3 className="text-2xl md:text-3xl font-bold">Leonardo Martens</h3>
            <p className="text-lg md:text-xl">Head Physician</p>
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

export default MeetTeam;
