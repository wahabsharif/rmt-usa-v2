import Image from "next/image";
import React from "react";

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
          {/* Service Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center w-[18rem] min-h-[16rem]">
            <div className="mb-4 w-16 h-16 relative">
              <Image
                src="/logo1.png"
                alt="Service 1"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-[#02B3C6]">
              Product Design & Engineering
            </h3>
          </div>

          {/* Service Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center w-[18rem] min-h-[16rem]">
            <div className="mb-4 w-16 h-16 relative">
              <Image
                src="/logo2.png"
                alt="Service 2"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-[#02B3C6]">
              Software & Artificial Intelligence
            </h3>
          </div>

          {/* Service Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center w-[18rem] min-h-[16rem]">
            <div className="mb-4 w-16 h-16 relative">
              <Image
                src="/logo3.png"
                alt="Service 3"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-[#02B3C6]">
              Regulatory Affairs & Quality Management
            </h3>
          </div>

          {/* Service Card 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center w-[18rem] min-h-[16rem]">
            <div className="mb-4 w-16 h-16 relative">
              <Image
                src="/logo4.png"
                alt="Service 4"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-[#02B3C6]">
              Quality Testing
            </h3>
          </div>

          {/* Service Card 5 */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center w-[18rem] min-h-[16rem]">
            <div className="mb-4 w-16 h-16 relative">
              <Image
                src="/logo5.png"
                alt="Service 5"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-[#02B3C6]">
              Manufacturing Consultancy
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurServices;
