import Image from "next/image";

const ManufacturingConsultancy = () => {
    return (
        <section
            id="manufacturing"
            className="md:mb-16 flex flex-col md:flex-row-reverse items-start gap-6 md:gap-12 px-4 py-4 md:py-10  md:px-12"
        >
            {/* Left Side - Image */}
            <div className="flex-shrink-0 w-full md:w-1/2">
                <Image
                    src="/images/services/manufacturing.jpg" // Replace with your image URL
                    alt="Manufacturing Consultancy"
                    width={500}
                    height={500}
                    className="rounded-lg shadow-lg w-full object-cover h-64 md:h-[400px]"
                />
            </div>

            {/* Right Side - Content */}
            <div className="w-full md:w-1/2">
                <h2 className="text-2xl md:text-5xl font-bold text-thLightBlue mb-6 md:pt-8">
                Manufacturing & Process Technology
                </h2>
                <p className="text-gray-600 text-base leading-relaxed">
                We offer advanced solutions for establishing stent and PTCA balloon catheter production and testing lines, Our services include comprehensive installation and training, technical support for plant commissioning, and regulatory compliance assistance for both products and facilities. Additionally, we manufacture selected machines in-house, enhancing automation and ensuring superior results.

                </p>
            </div>
        </section>
    );
};

export default ManufacturingConsultancy;
