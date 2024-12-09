"use client";

import React from "react";
import Image from "next/image";

const clientLogos = [
  { src: "/images/team/ClientLogo1.png", alt: "Client Teo" },
  { src: "/images/team/ClientLogo2.png", alt: "Client Heinz Schade" },
  { src: "/images/team/ClientLogo3.png", alt: "Client Neureveal" },
  { src: "/images/team/ClientLogo4.png", alt: "Client Andramed" },
];

const OurTeamClients: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-lg mb-2 text-gray-500">Our Clients</p>
          <h2 className="text-4xl font-bold text-gray-800">
            Clients from <span className="text-thLightBlue">All Over the World</span>
          </h2>
        </div>

        {/* Client Logos */}
        <div className="grid grid-cols-2 md:grid-cols-4  ">
          {clientLogos.map((logo, index) => (
            <div
              key={index}
              className="group relative p-4 bg-white shadow-md border  transition-transform transform hover:scale-105"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={200}
                height={120}
                className="object-contain mx-auto"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeamClients;
