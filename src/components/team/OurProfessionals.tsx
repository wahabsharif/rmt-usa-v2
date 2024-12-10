"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { professionals } from "@/data/teamsData";

const OurProfessionals: React.FC = () => {
  return (
    <section>
      <div className="container mx-auto px-6 py-16">
        {/* Heading for Our professionalship */}
        <h2 className="text-4xl font-bold text-center text-thLightBlue mb-2">
          OUR professionalsHIP
        </h2>

        {/* Meet Our professionals */}
        <h3 className="text-2xl text-center text-black mb-8 md:mb-20">
          Meet Our professionals
        </h3>

        {/* professionals Grid */}
        <div className="flex flex-col md:flex-row justify-center flex-wrap gap-10 md:gap-20">
          {professionals.map((professional, index) => (
            <div
              key={index}
              className="relative bg-white shadow-md rounded-lg overflow-hidden w-full md:max-w-xs group"
            >
              {/* professional Background Image */}
              <div className="relative w-full h-96 overflow-hidden">
                <Image
                  src={professional.imageUrl}
                  alt={professional.name}
                  layout="fill"
                  objectFit="cover"
                  className="absolute top-0 left-0 transition-transform duration-500 transform group-hover:scale-110"
                />
              </div>

              {/* professional Details */}
              <div className="p-4 text-center bg-white">
                <h4 className="text-xl font-bold mb-2 text-gray-800">
                  {professional.name}
                </h4>
                <p className="text-gray-600 mb-4">{professional.title}</p>

                {/* LinkedIn Icon */}
                <Link
                  href={professional.linkedinUrl}
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

export default OurProfessionals;
