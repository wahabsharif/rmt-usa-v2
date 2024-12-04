// Features.tsx
import React from "react";
import { featuresData } from "@/data/featuresData";
import Image from "next/image";

const Features: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 px-4 md:px-16 py-8">
      {/* Left Side Content */}
      <div className="md:w-1/2">
        <h2 className="text-4xl font-extrabold text-center text-thLightBlue mb-4">
          Why Choose Us?
        </h2>
        <ul className="space-y-6">
          {featuresData.map((feature, index) => (
            <li key={index} className="flex items-start gap-4">
              <div>
                <Image
                  src={"/images/icons/arrow-bullet.png"}
                  alt="arrow-bullet"
                  width={1000}
                  height={1000}
                  className="w-10"
                />
              </div>
              <div className="text-thDarkBlue">
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="border-b border-3">{feature.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Side Image */}
      <div className="md:w-1/2">
        <Image
          src="/images/home/features-image.png"
          alt="Features Illustration"
          className="shadow-md w-[400px]"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
};

export default Features;
