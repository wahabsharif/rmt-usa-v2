"use client";
import Link from "next/link";
import React from "react";
import { FaLinkedin } from "react-icons/fa"; // Import LinkedIn icon

const directors = [
  {
    name: "Dr. Muhammad Fareed Suri",
    title: "FOUNDING DIRECTOR",
    imageUrl: "/images/team/team3.jpg", // Placeholder image URL
    linkedinUrl: "https://www.linkedin.com/in/muhammad-fareed-khan-suri",
  },
  {
    name: "Dr. Murtaza Najabat ALi",
    title: "CEO & CO-FOUNDER",
    imageUrl: "/images/team/team4.png", // Placeholder image URL
    linkedinUrl: "https://www.linkedin.com/in/prof-dr-murtaza-najabat-ali-ceng-uk-fimeche-pe-55a4469",
  },
  {
    name: "Dr. Adnan Qureshi",
    title: "FOUNDING DIRECTOR",
    imageUrl: "/images/team/team5.jpg", // Placeholder image URL
    linkedinUrl: "https://www.linkedin.com/in/adnan-qureshi-9144b458",
  },
  {
    name: "Dr. Shahid Rafiq",
    title: "FOUNDING DIRECTOR",
    imageUrl: "/images/team/team6.jpg", // Placeholder image URL
    linkedinUrl: "https://www.linkedin.com/in/shahid-rafiq-0a336732",
  },
  {
    name: "Dr. Danish Bhatti",
    title: "FOUNDING DIRECTOR",
    imageUrl: "/images/team/team7.jpg", // Placeholder image URL
    linkedinUrl: "https://www.linkedin.com/in/danish-bhatti",
  },
];

const OurLeadership: React.FC = () => {
  return (
    <section>
      <div className="container mx-auto px-6">
        {/* Heading for Our Leadership */}
        <h2 className="text-4xl font-bold text-center text-thLightBlue mb-6">
          OUR LEADERSHIP
        </h2>
        
        {/* Meet Our Directors */}
        <h3 className="text-2xl text-center text-black mb-8 md:mb-20">
          Meet Our Directors
        </h3>

        {/* Directors Grid */}
        <div className="flex flex-col md:flex-row justify-center flex-wrap gap-10 md:gap-20 ">
          {directors.map((director, index) => (
            <div
              key={index}
              className="text-center bg-white  shadow-md rounded-lg w-full max-w-xs" // Set card width and center
            >
              {/* Director Image */}
              <div className="my-6">
                <img
                  src={director.imageUrl}
                  alt={director.name}
                  className="w-40 h-40 rounded-full mx-auto"
                />
              </div>

              {/* Director Name */}
              <h4 className="text-xl font-bold mb-2 text-gray-800">{director.name}</h4>

              {/* Director Title */}
              <p className="text-gray-600 mb-4">{director.title}</p>

              {/* Director Description */}
              

              {/* LinkedIn Icon */}
              <Link
                href={director.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600  hover:text-blue-800"
              >
                <FaLinkedin className="inline-block mb-6 text-2xl" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurLeadership;
