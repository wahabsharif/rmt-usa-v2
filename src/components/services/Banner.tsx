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
    title: "Quality Testing",
    description:
      "Rigorous quality testing is paramount in ensuring the safety and efficacy of biomaterials, medical devices, and software solutions. At Revive Medical Technologies Inc., we are committed to providing comprehensive quality testing services that adhere to the highest industry standards. Our state-of-the-art facilities and experienced team utilize advanced testing methodologies to evaluate the performance, biocompatibility, and reliability of your products, ensuring they meet regulatory requirements and deliver optimal outcomes for patients.",
    link: "/services#quality-testing",
    animation: "slideInUp",
    bgImage: "/images/services/services2.webp",
  },
  {
    title: "Regulatory Affairs & Quality Management",
    description:
      "At RMT, we not only create medical-grade products but also help bring them to reality through comprehensive regulatory support. From the preparation of technical files to ensuring Quality Management System (QMS) compliance, we help you navigate through the complex regulatory landscape to accelerate the commercialization of your product.",
    link: "/services#regulatory-affairs",
    animation: "slideInUp",
    bgImage: "/images/services/services3.webp",
  },
  {
    title: "Manufacturing Consultancy",
    description:
      "We offer advanced solutions for establishing stent and PTCA balloon catheter production and testing lines, Our services include comprehensive installation and training, technical support for plant commissioning, and regulatory compliance assistance for both products and facilities. Additionally, we manufacture selected machines in-house, enhancing automation and ensuring superior results.",
    link: "/services#manufacturing",
    animation: "slideInUp",
    bgImage: "/images/services/services4.webp",
  },
];

const Banner = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Link href={service.link} key={index}>
              <div
                className={`relative bg-gradient-to-tr from-white to-gray-100 group hover:from-thLightBlue hover:to-thDarkBlue hover:text-gray-100 p-6 border border-thLightBlue rounded-lg shadow-md animate__animated animate__${service.animation} cursor-pointer flex flex-col h-full`}
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
