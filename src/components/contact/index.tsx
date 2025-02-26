import React from "react";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

function ContactSection() {
  return (
    <section className="px-4 py-8">
      <div className="mb-6 flex justify-center items-center">
        <h3 className="text-thLightBlue text-xl md:text-4xl font-bold tracking-wider uppercase text-center">
          Get In Touch With Us
        </h3>
      </div>
      <div className="flex flex-col md:flex-row md:space-x-6">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <ContactInfo />
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
