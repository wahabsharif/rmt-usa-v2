import React from "react";
import Image from "next/image";

const TeamAbout: React.FC = () => {
    return (
        <section className="container mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row items-start gap-4 md:gap-12">
                {/* Left Side - Image */}
                <div className="flex-shrink-0 w-full md:w-1/2">
                    <Image
                        src="/images/team/team2.png" // Replace with the correct image path
                        alt="About the Team"
                        width={500}
                        height={500}
                        className="w-full h-auto object-cover"
                    />
                </div>

                {/* Right Side - Content */}
                <div className="w-full md:w-1/2 space-y-6">
                    {/* About Us Section */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">About Us</h2>
                        <p className="mt-2 text-gray-600">
                            Revive Medical Technologies Inc. (RMT) is a U.S. based company with its Satellite office and a unique R&D facility in Pakistan. As a cross-functional service provider we provide cost and time efficient R&D services to creative minds like Physicians, Medical device manufacturers and healthcare researchers who want to realize their ingenious ideas into market-ready products in an accelerated process. Our mission is to catalyze healthcare advancement by cultivating an environment that turns creative ideas into practical solutions. By having our state-of-art R&D facility and Technical/development staff in Pakistan, we offer reliable and robust technological solutions to our customers across the globe.
                        </p>
                    </div>

                    {/* Second Heading and Paragraph */}
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800">
                            Our Vision
                        </h3>
                        <p className="mt-2 text-gray-600">
                            Today, at Revive Medical Technologies Inc, we stand at the forefront of healthcare technology innovation, driven by a passion to transform ideas into reality. Our journey began with a vision to bridge the gap between groundbreaking concepts and successful commercialization. Our vision is be recognized by our global clients as the most trusted partner for medical device research and development.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamAbout;
