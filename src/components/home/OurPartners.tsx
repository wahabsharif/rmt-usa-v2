"use client";

import React from "react";
import { ourPartnersData } from "@/data/ourPartnersData";
import Image from "next/image";

const OurPartners: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-center py-4 text-5xl text-thDarkBlue font-semibold">
        Our Strategic Partners
      </h2>
      <section className="overflow-hidden">
        <div className="flex items-center space-x-4 animate-marquee whitespace-nowrap">
          {ourPartnersData.map((partner, index) => (
            <div
              key={index}
              className="flex justify-center items-center shrink-0 px-4"
            >
              <Image
                src={partner.src}
                alt={partner.alt}
                width={1000}
                height={1000}
                className="w-32"
              />
            </div>
          ))}
          {/* Duplicate items for infinite loop effect */}
          {ourPartnersData.map((partner, index) => (
            <div
              key={`duplicate-${index}`}
              className="flex justify-center items-center shrink-0 px-4"
            >
              <Image
                src={partner.src}
                alt={partner.alt}
                width={1000}
                height={1000}
                className="w-32"
              />
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 10s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default OurPartners;
