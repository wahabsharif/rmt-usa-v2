// GetStartedBanner.tsx
import React from "react";

const GetStartedBanner: React.FC = () => {
  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url(/images/home/get-started-banner.png)" }}
    >
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="text-center text-white px-6">
          <h2 className="text-6xl text-thLightBlue font-bold mb-4">
            Get Started
          </h2>
          <p className="text-4xl font-bold">
            Begin Your Medical Innovation Journey with a
          </p>
          <p className="text-4xl  font-bold text-thLightBlue">
            Commitment to Professional Excellence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GetStartedBanner;
