"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { currentOpeningData } from "@/data/currentOpeningData";
import RecruitmentForm from "./RecruitmentForm";

interface JobOpening {
  id: number;
  title: string;
  location: string;
  jobDescription: string;
}

const CurrentOpeningCareers = () => {
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);

  useEffect(() => {
    if (selectedJob) {
      // Disable body scroll when modal is open
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable body scroll when modal is closed
      document.body.style.overflow = "";
    }
    // Clean up on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedJob]);

  const handleCardClick = (job: JobOpening) => {
    setSelectedJob(job);
  };

  const closeModal = () => {
    setSelectedJob(null);
  };

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 md:mb-12">
          Current Job Openings
        </h2>
        <div className="w-full max-w-5xl container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16">
            {currentOpeningData.map((job: JobOpening, index: number) => (
              <div
                key={job.id}
                onClick={() => handleCardClick(job)}
                className="relative bg-gradient-to-tr from-white to-gray-100 group hover:from-thLightBlue hover:to-thDarkBlue hover:text-gray-100 p-6 border border-thLightBlue rounded-lg shadow-md cursor-pointer flex flex-col h-full"
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.2,
                  }}
                  className="relative z-10"
                >
                  <h3 className="text-lg font-semibold mb-4 group-hover:text-white">
                    {job.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-200 mb-6 line-clamp-4 overflow-hidden text-ellipsis">
                    {job.jobDescription}
                  </p>
                  <div className="border-t border-thLightBlue mb-4"></div>
                  <span className="text-thDarkBlue group-hover:text-white flex items-center">
                    {job.location}
                  </span>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-grow my-5 text-center justify-center items-center">
          <h4 className="font-bold text-3xl my-2">
            Don’t see a role that fits you?
          </h4>
          <p className="text-xl md:px-20">
            We’re always on the lookout for talented individuals. Feel free to
            send us your resume and tell us how you can make an impact at Revive
            Medical Technologies Inc. Submit your Resume/CV to hr@rmt-usa.com
          </p>
        </div>
      </div>

      {selectedJob && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="rounded-lg max-w-3xl w-full bg-white shadow-lg p-6 relative">
            <button
              onClick={closeModal}
              className="absolute top-10 right-16 text-3xl font-bold text-gray-700 hover:text-gray-900"
            >
              &times;
            </button>
            <div className="max-h-[80vh] overflow-y-auto">
              <RecruitmentForm selectedJobTitle={selectedJob.title} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CurrentOpeningCareers;
