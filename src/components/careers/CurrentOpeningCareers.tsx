"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { currentOpeningData } from "@/data/currentOpeningData";

interface JobOpening {
  id: number;
  title: string;
  location: string;
  jobDescription: string;
}

const CurrentOpeningCareers = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 md:mb-12">
          Current Job Openings
        </h2>
        <div className="w-full max-w-5xl container mx-auto">
          <div className="flex justify-center items-center flex-wrap gap-8 md:gap-16 place-items-center">
            {currentOpeningData.map((job: JobOpening, index: number) => (
              <Link href={`#`} key={job.id}>
                {/* <Link href={`/careers/${job.id}`} key={job.id}> */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.2,
                  }}
                  className="relative w-full md:max-w-xs lg:max-w-md bg-gradient-to-tr from-white to-gray-100 group hover:from-thLightBlue hover:to-thDarkBlue hover:text-gray-100 p-6 border border-thLightBlue rounded-lg shadow-md cursor-pointer flex flex-col h-full"
                >
                  {/* Content */}
                  <div className="relative z-10">
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
                  </div>
                </motion.div>
              </Link>
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
    </section>
  );
};

export default CurrentOpeningCareers;
