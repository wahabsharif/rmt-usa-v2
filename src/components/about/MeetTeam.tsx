"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image"; // Import the Next.js Image component

const MeetTeam: React.FC = () => {
  return (
    <section className="py-16 px-6 md:px-4">
      {/* Flex container to split the layout */}
      <div className="flex flex-col md:flex-row justify-center items-start">
        {/* Left Side: Image */}
        <div className="relative w-full md:w-[40%] h-60 md:h-72">
          <Image
            src="/images/about/ceo.jpeg"
            alt="Picture of the RMT CEO"
            fill
            objectFit="cover"
            layout="fill"
            className="object-cover rounded-lg"
          />
        </div>

        {/* Right Side: Content */}
        <div className="flex flex-col justify-center items-start py-2 text-gray-800 px-6 w-full md:w-1/2">
          {/* Section Heading */}
          <div className="text-left">
            <h2 className="text-lg mb-2 uppercase tracking-widest bg-white p-2 inline-block shadow-3xl rounded-lg">
              CEO Message
            </h2>

            {/* <h1 className="text-4xl md:text-5xl font-bold text-thLightBlue">
              Our Qualified Doctors
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mt-2">
              On Guard of Your Health
            </h2>
            <h2 className="text-2xl md:text-3xl font-semibold mt-2">
              and Comfort
            </h2> */}
          </div>

          {/* Description */}
          <p className="mt-2 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
            “Prosthetics biomedicine is not just about creating replacement
            limbs. It’s about enabling people to reclaim their abilities and
            pursue their passions.”
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

export default MeetTeam;
