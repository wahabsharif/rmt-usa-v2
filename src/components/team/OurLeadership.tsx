"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { leaders } from "@/data/teamsData";

const OurLeadership: React.FC = () => {
  return (
    <section>
      <div className="container mx-auto px-6 py-16">
        {/* Heading for Our Leadership */}
        <h2 className="text-4xl font-bold text-center text-thLightBlue mb-2">
          OUR LEADERSHIP
        </h2>

        {/* Meet Our leaders */}
        <h3 className="text-2xl text-center text-black mb-8 md:mb-20">
          Meet Our leaders
        </h3>

        {/* leaders Grid */}
        <div className="flex flex-col md:flex-row justify-center flex-wrap gap-10 md:gap-20">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="relative bg-white shadow-md rounded-lg overflow-hidden w-full max-w-md md:max-w-xs group"
            >
              {/* leader Background Image */}
              <div className="relative w-full h-96 overflow-hidden">
                <Image
                  src={leader.imageUrl}
                  alt={leader.name}
                  priority
                  width={1000}
                  height={1000}
                  className="absolute object-cover w-[100%] h-[100%] top-0 left-0 transition-transform duration-500 transform group-hover:scale-110"
                />
              </div>

              {/* leader Details */}
              <div className="p-4 text-center bg-white">
                <h4 className="text-xl uppercase font-bold mb-2 text-gray-800">
                  {leader.name}
                </h4>
                <p className="text-gray-600 uppercase mb-4">{leader.title}</p>

                {/* LinkedIn Icon */}
                <Link
                  href={leader.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  <FaLinkedin className="inline-block text-2xl" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurLeadership;
