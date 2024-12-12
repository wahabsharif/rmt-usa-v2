// components/Services.js
import Link from "next/link";

const services = [
  {
    title: "Product Design & Engineering",
    description:
      "We provide a standardized design development approach to our clients where we adhere to strict design control protocols. We offer a complete design development solution for medical devices which also includes 2D, 3D and even PCB Designing. Our clients remain part of the entire designing process, working hand-in-hand to get best possible design output.",
    link: "/services#product-design",
    animation: "slideInLeft",
    bgImage: "/images/services/services1.jpg",
  },
  {
    title: "Embedded System Development",
    description:
      "In today’s rapidly evolving healthcare landscape, innovation is key, and embedded system development plays a pivotal role in the creation of cutting-edge medical devices. At Revive Medical Technologies, we are at the forefront of this technological revolution, harnessing the power of embedded systems to develop innovative, life-saving solutions that make a real difference in the healthcare industry",
    link: "/services#regulatory-affairs",
    animation: "slideInLeft",
    bgImage: "/images/services/embeded-system.jpg",
  },
  {
    title: "Biomaterial & Drug Synthesis",
    description:
      "Our Biomaterials and Drug Synthesis division is dedicated to harnessing the potential of biomaterials for a myriad of healthcare applications. Whether it's related to customized coatings and surface modifications of medical devices or the refinement of targeted drug delivery mechanisms, we stand at the forefront of innovation. Through a meticulous blend of scientific expertise and technological prowess, we strive to elevate medical treatments to unprecedented levels of efficacy and safety.",
    link: "/services#manufacturing",
    animation: "slideInLeft",
    bgImage: "/images/services/biomaterial-drug.webp",
  },
  {
    title: "Software Development",
    description:
      "Innovative software solutions are the driving force behind the enhancement of patient care, process optimization, and industry transformation in the ever-evolving healthcare landscape. At Revive Medical Technologies Inc., we are pioneers in developing cutting-edge healthcare software solutions that span critical areas.",
    link: "/services#software-development",
    animation: "slideInUp",
    bgImage: "/images/services/software-development.jpg",
  },
  {
    title: "Quality Testing",
    description:
      "Rigorous quality testing is paramount in ensuring the safety and efficacy of biomaterials, medical devices, and software solutions. At Revive Medical Technologies Inc., we are committed to providing comprehensive quality testing services that adhere to the highest industry standards. Our state-of-the-art facilities and experienced team utilize advanced testing methodologies to evaluate the performance, biocompatibility, and reliability of your products, ensuring they meet regulatory requirements and deliver optimal outcomes for patients.",
    link: "/services#quality-testing",
    animation: "slideInUp",
    bgImage: "/images/services/services2.webp",
  },


];

const Banner = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="flex justify-center items-center flex-wrap gap-8 place-items-center">
          {services.map((service, index) => (
            <Link href={service.link} key={index}>
              <div
                className={`relative w-full md:max-w-xs lg:max-w-sm bg-gradient-to-tr from-white to-gray-100 group hover:from-thLightBlue hover:to-thDarkBlue hover:text-gray-100 p-6 border border-thLightBlue rounded-lg shadow-md animate__animated animate__${service.animation} cursor-pointer flex flex-col h-full`}
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-70 rounded-lg"
                  style={{
                    backgroundImage: `url(${service.bgImage})`,
                    transition: "opacity 0.3s ease-in-out",
                  }}
                ></div>
                {/* Overlay for darker effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-50 rounded-lg transition-opacity duration-300"></div>
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold mb-4 group-hover:text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-200 mb-6 line-clamp-4 overflow-hidden text-ellipsis">
                    {service.description}
                  </p>
                  <div className="border-t border-thLightBlue mb-4"></div>
                  <span className="text-thDarkBlue group-hover:text-white  flex items-center">
                    Learn More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="ml-2 w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;
