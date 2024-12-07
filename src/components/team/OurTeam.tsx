"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLinkedin } from "react-icons/fa"; // Import LinkedIn icon

const directors = [

    {
        name: "Dr. Murtaza Najabat Ali",
        title: "CEO & Co-Founder",
        imageUrl: "/images/team/team7.jpg", // Placeholder image URL
        linkedinUrl: "https://www.linkedin.com/in/muhammad-fareed-khan-suri",
    },
    {
        name: "Ali Asghar",
        title: "Company Secratary",
        imageUrl: "/images/team/team8.jpg", // Placeholder image URL
        linkedinUrl: "https://www.linkedin.com/in/prof-dr-murtaza-najabat-ali-ceng-uk-fimeche-pe-55a4469",
    },
    {
        name: "M. Hafeez Khan",
        title: "Manager Supply Chain",
        imageUrl: "/images/team/team9.jpeg", // Placeholder image URL
        linkedinUrl: "https://www.linkedin.com/in/adnan-qureshi-9144b458",
    },
    {
        name: "Haris Ali",
        title: "Design & Fabrication Specialist",
        imageUrl: "/images/team/team10.jpg", // Placeholder image URL
        linkedinUrl: "https://www.linkedin.com/in/shahid-rafiq-0a336732",
    },
    {
        name: "Ammad Ahmed",
        title: "Technology Specialist",
        imageUrl: "/images/team/team11.jpg", // Placeholder image URL
        linkedinUrl: "https://www.linkedin.com/in/danish-bhatti",
    },
    {
        name: "M. Talha",
        title: "Embedded Systems & Software Engineer",
        imageUrl: "/images/team/team12.jpg", // Placeholder image URL
        linkedinUrl: "https://www.linkedin.com/in/danish-bhatti",
    },
    {
        name: "Ibraheem Raza",
        title: "Embedded Systems & Electronics Engineer",
        imageUrl: "/images/team/team13.jpg", // Placeholder image URL
        linkedinUrl: "https://www.linkedin.com/in/danish-bhatti",
    },
    {
        name: "Zunaira Qureshi",
        title: "Biomaterials Specialist",
        imageUrl: "/images/team/team14.jpg", // Placeholder image URL
        linkedinUrl: "https://www.linkedin.com/in/danish-bhatti",
    },
    {
        name: "M.Hassan",
        title: "Design Engineer",
        imageUrl: "/images/team/team15.jpg", // Placeholder image URL
        linkedinUrl: "https://www.linkedin.com/in/danish-bhatti",
    },
    {
        name: "Usama Zafar",
        title: "Manager Trainee Officer",
        imageUrl: "/images/team/team16.jpg", // Placeholder image URL
        linkedinUrl: "https://www.linkedin.com/in/danish-bhatti",
    },
    {
        name: "Maria Rashid",
        title: "Assistant Manager Coord",
        imageUrl: "/images/team/team17.jpg", // Placeholder image URL
        linkedinUrl: "https://www.linkedin.com/in/danish-bhatti",
    },
    {
        name: "Sonia Saleem",
        title: "Manager HR",
        imageUrl: "/images/team/team18.jpg", // Placeholder image URL
        linkedinUrl: "https://www.linkedin.com/in/danish-bhatti",
    },
    {
        name: "M. Asad Tariq",
        title: "Admin assistant",
        imageUrl: "/images/team/team19.jpg", // Placeholder image URL
        linkedinUrl: "https://www.linkedin.com/in/danish-bhatti",
    },
];

const OurTeam: React.FC = () => {
    return (
        <section className="bg-gray-200">
            <div className="container mx-auto px-6 py-10 my-10">
                {/* Heading for Our Leadership */}
                <h2 className="text-4xl font-bold text-center text-thLightBlue mb-6">
                    OUR TEAM
                </h2>

                {/* Meet Our Directors */}
                <h3 className="text-2xl text-center text-black mb-8 md:mb-20">
                    Meet Our Professionals
                </h3>

                {/* Directors Grid */}
                <div className="flex flex-col md:flex-row justify-center flex-wrap gap-10 md:gap-20 ">
                    {directors.map((director, index) => (
                        <div
                            key={index}
                            className="text-center bg-white  shadow-md rounded-lg w-full max-w-xs" // Set card width and center
                        >
                            {/* Director Image */}
                            <div className="my-6">
                                <Image
                                    src={director.imageUrl}
                                    alt={director.name}
                                    width={200}
                                    height={200}
                                    className="w-40 h-40 rounded-full mx-auto"
                                />
                            </div>

                            {/* Director Name */}
                            <h4 className="text-xl font-bold mb-2 text-gray-800">{director.name}</h4>

                            {/* Director Title */}
                            <p className="text-gray-600 uppercase  mb-4">{director.title}</p>

                            {/* Director Description */}


                            {/* LinkedIn Icon */}
                            <Link
                                href={director.linkedinUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600  hover:text-blue-800"
                            >
                                <FaLinkedin className="inline-block mb-6 text-2xl" />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurTeam;
