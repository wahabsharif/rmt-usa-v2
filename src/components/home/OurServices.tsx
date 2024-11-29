import Image from "next/image";
import React from "react";
import { ourServicesData } from "@/data/ourServicesData";

function OurServices() {
  return (
    <section className="bg-[#E5EAED] flex justify-center items-center py-12">
      <div className="w-full px-6">
        {/* Services Heading */}
        <h2 className="text-4xl font-bold text-center text-[#023550] mb-8">
          Our Services
        </h2>

        {/* Services Cards */}
        <div className="flex justify-center items-center flex-wrap gap-12">
          {ourServicesData.map((service) => (
            <div
              key={service.id}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center w-[18rem] min-h-[16rem]"
            >
              <div className="mb-4 w-16 h-16 relative">
                <Image
                  src={service.icon}
                  alt={service.alt}
                  width={64}
                  height={64}
                  className="object-contain grayscale"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#02B3C6]">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurServices;
