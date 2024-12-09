"use client";
import React from "react";
import Image from "next/image";

const teamFacilityImages = [
    {
        src: "/images/team/Facility1.jpg",
        alt: "Facility Image 1",
    },
    {
        src: "/images/team/Facility2.jpg",
        alt: "Facility Image 2",
    },
    {
        src: "/images/team/Facility3.jpg",
        alt: "Facility Image 3",
    },
    {
        src: "/images/team/Facility4.jpg",
        alt: "Facility Image 4",
    },

    {
        src: "/images/team/Facility5.jpg",
        alt: "Facility Image 1",
    },
    {
        src: "/images/team/Facility6.jpg",
        alt: "Facility Image 2",
    },
    {
        src: "/images/team/Facility7.jpg",
        alt: "Facility Image 3",
    },
    {
        src: "/images/team/Facility8.jpg",
        alt: "Facility Image 4",
    },
    {
        src: "/images/team/Facility9.jpg",
        alt: "Facility Image 1",
    },
    {
        src: "/images/team/Facility10.jpg",
        alt: "Facility Image 2",
    },
    //   {
    //     src: "/images/team/Facility11.jpg",
    //     alt: "Facility Image 3",
    //   },
    {
        src: "/images/team/Facility13.jpg",
        alt: "Facility Image 4",
    },
    {
        src: "/images/team/Facility14.jpg",
        alt: "Facility Image 1",
    },
    {
        src: "/images/team/Facility15.jpg",
        alt: "Facility Image 2",
    },
    {
        src: "/images/team/Facility16.png",
        alt: "Facility Image 3",
    },
    {
        src: "/images/team/Facility17.png",
        alt: "Facility Image 4",
    },
    //   {
    //     src: "/images/team/Facility18.png",
    //     alt: "Facility Image 4",
    //   },
    // Add more images as needed
];

const OurTeamFacility: React.FC = () => {
    return (
        <section className="bg-gray-100 py-20">
            <div className="container mx-auto px-6">
                {/* Section Title */}
                <h2 className="text-5xl font-extrabold text-thDarkBlue mb-8 leading-tight text-start">
                Visit our <span className="text-thLightBlue">State of</span>  <br />
                    <span className="text-gray-600">the Art Facility</span>
                </h2>


                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {teamFacilityImages.map((image, index) => (
                        <div
                            key={index}
                            className="relative group overflow-hidden rounded-sm"
                        >
                            {/* Image */}
                            <div className="relative overflow-hidden">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    width={400}
                                    height={300}
                                    className="rounded-sm  shadow-lg transition-transform duration-500 ease-in-out transform group-hover:scale-125"
                                />
                            </div>
                            {/* Overlay (Optional for hover effect) */}
                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity rounded-sm"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurTeamFacility;
