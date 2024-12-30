"use client";
import React from "react";
import { motion } from "framer-motion";

const ContactForm: React.FC = () => {
  return (
    <div className="flex justify-center items-center px-4">
      <motion.div
        className="bg-white shadow-md rounded-lg p-8 max-w-lg w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl text-thDarkBlue font-extrabold text-center uppercase tracking-widest mb-6">
          Contact Us
        </h2>
        <form className="space-y-4">
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="w-full">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-full focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Your first name"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-full focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Your last name"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="w-full">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-full focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Your email address"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-full focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Your phone number"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-xl focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Your message"
            />
          </div>
          <motion.button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-full shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactForm;
