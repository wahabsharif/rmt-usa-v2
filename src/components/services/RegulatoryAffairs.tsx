import Image from "next/image";

const RegulatoryAffairs = () => {
    return (
        <section
            id="regulatory-affairs"
            className="mb-16 flex flex-col md:flex-row items-start gap-6 md:gap-12 px-4 py-10 md:px-12"
        >
            {/* Left Side - Image */}
            <div className="flex-shrink-0 w-full md:w-1/2">
                <Image
                    src="/images/services/regulatory-image.jpg" // Replace with your image URL
                    alt="Product Design & Engineering"
                    width={500}
                    height={500}
                    className="rounded-lg shadow-lg w-full object-cover h-64 md:h-[400px]"
                />
            </div>

            {/* Right Side - Content */}
            <div className="w-full md:w-1/2">
                <h2 className="text-2xl md:text-5xl font-bold text-thLightBlue mb-6 md:pt-8">
                    Regulatory Services
                </h2>
                <p className="text-gray-600 text-base leading-relaxed">
                    At RMT, we not only create medical-grade products but also help bring them to reality through comprehensive regulatory support. From the preparation of technical files to ensuring Quality Management System (QMS) compliance, we help you navigate through the complex regulatory landscape to accelerate the commercialization of your product.

                </p>
            </div>
        </section>
    );
};

export default RegulatoryAffairs;
