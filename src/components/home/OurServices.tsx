import Image from "next/image";
import React from "react";
import { homeServicesData } from "@/data/homeServices";

function OurServices() {
  return (
    <section className="bg-[#E5EAED] flex justify-center items-center py-12">
      <div className="w-full px-6 max-w-5xl">
        {/* Services Heading */}
        <h2 className="text-4xl font-bold text-center text-[#023550] mb-8">
          Our Services
        </h2>

        {/* Services Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center">
          {homeServicesData.map((service) => (
            <div
              key={service.id}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center w-[18rem] min-h-[16rem]"
            >
              <div className="mb-4 w-24 h-24 relative">
                <Image
                  src={service.icon}
                  alt={service.alt}
                  width={500}
                  height={500}
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl font-semibold text-[#02B3C6]">
                {service.title}
              </h3>
            </div>
          ))}
          {/* Empty div to balance the grid if needed */}
          {homeServicesData.length % 3 === 2 && (
            <div className="hidden lg:block"></div>
          )}
        </div>
      </div>
    </section>
  );
}

export default OurServices;
