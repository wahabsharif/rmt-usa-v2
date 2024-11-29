"use client";

import React, { useState } from "react";

const Subscribe: React.FC = () => {
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
    <div className="flex flex-col sm:flex-row items-center justify-center p-6 bg-thLightBlue w-full">
      {/* Left Side - Text */}
      <div className="w-1/2 text-right mx-4">
        <h2 className="text-2xl font-extrabold text-gray-800 capitalize">
          Subscribe Now
        </h2>
        <p className="text-white text-2xl font-extrabold">To Our Newsletter</p>
        {submitted && (
          <div className="text-green-600 font-medium mt-4">
            Thank you for subscribing! 🎉
          </div>
        )}
      </div>

      {/* Right Side - Input and Button */}
      {!submitted && (
        <form onSubmit={handleSubmit} className="w-1/2 flex items-center">
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
      )}
    </div>
  );
};

export default Subscribe;
