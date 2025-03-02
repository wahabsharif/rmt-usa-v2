"use client";
import React from "react";

const ContactInfo: React.FC = () => {
  return (
    <div className="flex flex-col space-y-6 p-6 w-full">
      <div className="text-thDarkBlue tracking-wide font-bold capitalize text-5xl">
        <h2>We&apos;re Here To help</h2>
        <h2>You on your journey</h2>
      </div>
      <div className="text-thGray text-lg mt-4">
        <p className="text-lg capitalize">
          Want to learn more about cherries medical group? our support team is
          ready to help
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
