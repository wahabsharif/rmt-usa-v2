"use client";

import React from "react";

const Banner: React.FC = () => {
  return (
    <section
      className="relative w-full bg-cover bg-center h-auto md:h-screen flex items-center justify-center text-center"
      style={{
        backgroundImage: "url('/images/about/Banner1.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-white">
        {/* About Us Heading */}
        <h1 className="text-4xl md:text-6xl font-bold">ABOUT US</h1>

        {/* Breadcrumb */}
        <p className="mt-4 text-lg md:text-xl font-medium">
          <span className="text-thLightBlue">Home</span> / <span>About Us</span>
        </p>
      </div>
    </section>
  );
};

export default Banner;
