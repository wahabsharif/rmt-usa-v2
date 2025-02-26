"use client";

import React, { useState } from "react";

const Subscribe: React.FC = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full p-6 bg-thLightBlue">
      {/* Text Section */}
      <div className="text-center mb-4">
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

      {/* Input Section */}
      {!submitted && (
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md flex items-center justify-center"
        >
          <div className="relative w-full">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:ring-2 focus:ring-thLightBlue focus:outline-none"
            />
            <button
              type="submit"
              className="absolute right-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-thDarkBlue text-white font-medium rounded-full shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-thLightBlue transition ease-in-out duration-300"
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
