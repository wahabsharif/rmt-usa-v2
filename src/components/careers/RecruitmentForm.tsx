"use client";
import React, { useState } from "react";

const RecruitmentForm: React.FC<{ selectedJobTitle?: string }> = ({
  selectedJobTitle,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    jobOptions: selectedJobTitle || "", // Initialize with the selected job title
    cv: null as File | null,
    coverLetter: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setFormData({
      ...formData,
      cv: file,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-8 rounded-2xl shadow-xl mt-10 border border-gray-200">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Revive Medical Technologies Recruitment Form
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 text-sm mb-2">
              Full Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-gray-700 text-sm mb-2">
              Phone Number:
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 text-sm mb-2">
              Email Address:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300"
            />
          </div>

          <div>
            <label
              htmlFor="jobOptions"
              className="block text-gray-700 text-sm mb-2"
            >
              Applying for:
            </label>
            <input
              type="text"
              id="jobOptions"
              name="jobOptions"
              value={selectedJobTitle || formData.jobOptions}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-500 cursor-not-allowed focus:outline-none"
              readOnly
            />
          </div>

          <div>
            <label htmlFor="cv" className="block text-gray-700 text-sm mb-2">
              Upload CV (PDF, DOCX):
            </label>
            <input
              type="file"
              id="cv"
              name="cv"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300"
            />
          </div>

          <div>
            <label
              htmlFor="coverLetter"
              className="block text-gray-700 text-sm mb-2"
            >
              Cover Letter:
            </label>
            <textarea
              id="coverLetter"
              name="coverLetter"
              rows={4}
              value={formData.coverLetter}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300"
            ></textarea>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-400 transition duration-300"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default RecruitmentForm;
