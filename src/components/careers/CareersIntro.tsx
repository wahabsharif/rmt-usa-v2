"use client";
import { motion } from "framer-motion";
import Image from "next/image";
const CareersIntro = () => {
  return (
    <section className="max-w-6xl mx-auto py-12 px-4">
      {/* Top Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mb-8"
      >
        <Image
          src="/images/careers/careers-intro-image.jpg"
          alt="Careers Intro"
          width={1000}
          height={1000}
          className="w-full h-96 rounded-lg object-cover shadow-xl"
        />
      </motion.div>

      {/* Tags */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="flex space-x-4 mb-6"
      >
        <span className="bg-blue-500 text-white py-1 px-3 rounded-full text-sm">
          Innovation
        </span>
        <span className="bg-green-500 text-white py-1 px-3 rounded-full text-sm">
          Growth
        </span>
        <span className="bg-yellow-500 text-white py-1 px-3 rounded-full text-sm">
          Teamwork
        </span>
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="text-3xl font-bold text-gray-800 mb-4"
      >
        Join Our Team | Revive Medical Technologies Inc.
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="text-lg text-gray-600 mb-6"
      >
        At Revive Medical Technologies Inc., we are dedicated to leveraging the
        power of innovation, collaboration, and creativity. Our team is leading
        the way in the medical technology sector, developing groundbreaking
        solutions that have a real and lasting impact. If you&apos;re passionate
        about advancing healthcare and eager to contribute to meaningful change,
        we would be excited to have you join us.
      </motion.p>

      {/* Additional Heading */}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="text-2xl font-semibold text-gray-800 mb-4"
      >
        Why Work with Us?
      </motion.h2>

      {/* Bullet Points */}
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="list-disc pl-6 text-lg text-gray-600 space-y-2"
      >
        <li>
          Innovative Environment: Join a team of forward-thinkers constantly
          pushing the boundaries of what&apos;s possible in medical technology.
        </li>
        <li>
          Professional Growth: We are committed to your development through
          ongoing learning opportunities, mentoring, and career advancement.
        </li>
        <li>
          Collaborative Culture: Collaboration is the core of our success. Be
          part of a team where your ideas matter and your contributions are
          celebrated.
        </li>
        <li>
          Work-Life Balance: We prioritize a healthy work-life balance,
          recognizing that it fuels both creativity and productivity.
        </li>
        <li>
          Remote Opportunities: Enjoy the flexibility of remote work, enabling
          you to contribute from anywhere around the globe.
        </li>
        <li>
          Collaborate with cross-functional teams to develop innovative
          solutions.
        </li>
        <li>Participate in the design and implementation of key projects.</li>
        <li>
          Engage with clients and stakeholders to understand their needs and
          challenges.
        </li>
        <li>
          Stay informed about industry trends and technology advancements.
        </li>
        <li>Contribute to an inclusive and creative team culture.</li>
      </motion.ul>
    </section>
  );
};

export default CareersIntro;
