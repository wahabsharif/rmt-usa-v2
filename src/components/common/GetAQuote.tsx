"use client";
import React, { useState } from "react";

const GetAQuote: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* Button to open modal */}
      <button
        onClick={openModal}
        className="px-6 py-2 bg-thLightBlue text-white font-semibold rounded-full shadow-lg"
      >
        Get A Quote
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 backdrop-blur-lg bg-opacity-50 flex z-50 justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-xl max-w-lg w-full">
            <h2 className="text-xl font-semibold mb-4 tracking-widest text-thRed">
              Quotation
            </h2>
            <h3 className="text-3xl text-center font-semibold mb-4 tracking-widest text-gray-600">
              Get a Free Estimation and Quotation
            </h3>
            <p className="mb-4">
              Discover the Value of Your Project with Our Free Estimation and
              Quotation Service! Obtain an accurate assessment and detailed
              pricing without any cost.
            </p>

            {/* Scrollable content */}
            <div className="overflow-y-auto max-h-80 mb-4">
              <form>
                {/* Company Information */}
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-gray-700 mb-2">
                    Company Information
                  </h4>
                  <input
                    type="text"
                    id="companyName"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your company name"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    id="contactPerson"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter the contact person's name"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your phone number"
                  />
                </div>

                {/* Project Information */}
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-gray-700 mb-2">
                    Project Information
                  </h4>
                  <input
                    type="text"
                    id="projectName"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your project name"
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    id="projectDescription"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter project description"
                    rows={4}
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    id="projectInfo"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Provide any additional project information"
                    rows={4}
                  />
                </div>
              </form>
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={closeModal}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-full"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-thDarkBlue text-white rounded-full"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GetAQuote;
