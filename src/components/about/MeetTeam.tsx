"use client";

import React from "react";

const MeetTeam: React.FC = () => {
    return (
        <section
            className="relative w-full bg-cover bg-center h-auto md:h-screen py-16 px-6 md:px-4 flex"
            style={{
                backgroundImage: "url('/images/about/About3.png')",
                backgroundColor: "rgb(207 221 225 / 60%)", // #00B4C5 with 60% opacity
            }}

        >
            {/* Background Image Section (Left side) */}
            <div className="w-1/2 bg-cover bg-center h-full"></div>

            {/* Content Section (Right side) */}
            <div className="relative z-10 w-full md:w-1/2 text-gray-800">
                {/* Section Heading */}
                <div className="mb-8 text-left">
                    <h2 className="text-xl mb-2 uppercase tracking-widest">
                        MEET OUR TEAM
                    </h2>
                    <h1 className="text-4xl md:text-5xl font-bold text-thLightBlue">
                        Our Qualified Doctors
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-semibold mt-2">
                        On Guard of Your Health
                    </h2>
                    <h2 className="text-2xl md:text-3xl font-semibold mt-2">
                        and Comfort
                    </h2>
                </div>

                {/* Description */}
                <p className="mt-4 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
                    “Prosthetics biomedicine is not just about creating replacement limbs.
                    It’s about enabling people to reclaim their abilities and pursue
                    their passions.”
                </p>

                {/* Doctor Details */}
                <div className="mt-12">
                    <h3 className="text-2xl md:text-3xl font-bold">
                        Leonardo Martens
                    </h3>
                    <p className="text-lg md:text-xl">Head Physician</p>
                </div>
            </div>
        </section>
    );
};

export default MeetTeam;
