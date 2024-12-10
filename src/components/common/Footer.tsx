"use client";
import React, { useState } from "react";
import { footerData } from "@/data/footerData";
import Link from "next/link";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa"; // Import phone icon from react-icons

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear(); // Get the current year
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Simulate a subscription process
      setSubmitted(true);
      setEmail("");
    }
  };
  return (
    <footer className="mt-10">
      <div className="w-full py-10 pl-10 text-white bg-thDarkBlue grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Column 1: Logo and Paragraph */}
        <div className="space-y-4">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/images/logo/rmt-usa-logo.png"
              alt="Logo"
              width={1000}
              height={1000}
              priority
              className="w-32"
            />
          </Link>

          {/* Description */}
          <p className="text-sm">{footerData.description}</p>

          {/* Phone number with icon */}
          <div className="flex items-center space-x-2 text-sm">
            <div className="p-2 bg-thLightBlue rounded-full">
              <FaPhoneAlt className="text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold">
                {footerData.phoneNumber}
              </span>
              <span className="text-thLightBlue text-lg font-bold">
                Round-the-clock
              </span>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            {footerData.socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-thLightBlue hover:text-white transition ease-in-out"
              >
                <link.icon className="text-2xl" />
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Links */}
        <div>
          <h3 className="text-2xl font-bold mb-4 tracking-wide">Links</h3>
          <ul className="space-y-2">
            {footerData.links.map((link, index) => (
              <li key={index}>
                <Link href={link.href} className="hover:text-gray-400">
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Column 3: Subscription Form */}
        <div className="bg-thLightBlue backdrop-blur-md rounded-l-xl shadow-lg p-3 transition ease-in-out">
          <div className="text-left mx-4">
            <h2 className="text-2xl font-extrabold text-gray-800 capitalize">
              Subscribe Now
            </h2>
            <p className="text-white text-2xl font-extrabold">
              To Our Newsletter
            </p>
            {submitted && (
              <div className="text-green-600 font-medium mt-4">
                Thank you for subscribing! 🎉
              </div>
            )}
          </div>
          {/* Right Side - Input and Button */}
          {!submitted && (
            <form onSubmit={handleSubmit} className="flex items-center my-10">
              <div className="relative w-full max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-thDarkBlue text-white font-medium rounded-full shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out duration-3"
                >
                  Subscribe
                </button>
              </div>
            </form>
          )}{" "}
        </div>
      </div>

      <div className="text-xs md:text-sm container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col md:flex-row items-center md:space-x-2">
          <span>
            Copyright © {currentYear}{" "}
            <Link href="/" className="text-thRed font-semibold">
              Revive Medical Technologies Inc.
            </Link>
          </span>
          <span className="hidden md:block">|</span>
          <span className="flex items-center space-x-1">
            <span>Powered By</span>
            <Link
              href={"https://envbyte.com/"}
              target="_blank"
              className="flex items-center"
            >
              <Image
                src={"/images/logo/env-byte-landscape-logo.svg"}
                alt="Powered By Env Byte"
                width={1000}
                height={1000}
                className="w-12 h-12 md:w-16 md:h-16 mx-2"
              />
            </Link>
          </span>
        </div>

        {/* Navigation Links Section */}
        <div className="flex flex-wrap justify-center md:justify-end space-x-4">
          <Link
            href="#privacy"
            className="text-gray-400 hover:text-white transition"
          >
            Privacy Policy
          </Link>
          <Link
            href="#terms"
            className="text-gray-400 hover:text-white transition"
          >
            Terms of Service
          </Link>
          <Link
            href="#contact"
            className="text-gray-400 hover:text-white transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
