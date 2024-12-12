import Image from "next/image";

const QualityTesting = () => {
    return (
        <section
            id="quality-testing"
            className="mb-16 flex flex-col md:flex-row-reverse items-start gap-6 md:gap-12 px-4 py-10 md:px-12"
        >
            {/* Left Side - Image */}
            <div className="flex-shrink-0 w-full md:w-1/2">
                <Image
                    src="/images/services/quality-testing.jpg" // Replace with your image URL
                    alt="Product Design & Engineering"
                    width={500}
                    height={500}
                    className="rounded-lg shadow-lg w-full object-cover h-64 md:h-[400px]"
                />
            </div>

            {/* Right Side - Content */}
            <div className="w-full md:w-1/2">
                <h2 className="text-2xl md:text-5xl font-bold text-thLightBlue mb-6 md:pt-8">
                    Quality Testing
                </h2>
                <p className="text-gray-600 text-base leading-relaxed">
                    Rigorous quality testing is paramount in ensuring the safety and
                    efficacy of biomaterials, medical devices, and software solutions. At
                    Revive Medical Technologies Inc., we are committed to providing
                    comprehensive quality testing services that adhere to the highest
                    industry standards. Our state-of-the-art facilities and experienced
                    team utilize advanced testing methodologies to evaluate the
                    performance, biocompatibility, and reliability of your products,
                    ensuring they meet regulatory requirements and deliver optimal
                    outcomes for patients.
                </p>
            </div>
        </section>
    );
};

export default QualityTesting;
