"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic"; // Import dynamic from Next.js
import { ourPartnersData } from "@/data/ourPartnersData";
import Image from "next/image";

// Dynamically import react-slick to disable SSR
const Slider = dynamic(() => import("react-slick"), { ssr: false });

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurPartners: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const settings = {
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  if (!isClient) return null;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-center py-4 text-5xl text-thDarkBlue font-semibold">
        Our Strategic Partners
      </h2>
      <section>
        <Slider {...settings} className="">
          {ourPartnersData.map((partner, index) => (
            <div key={index} className="slide flex justify-center items-center">
              <Image
                src={partner.src}
                alt={partner.alt}
                width={1000}
                height={1000}
                className="w-32"
              />
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
};

export default OurPartners;
