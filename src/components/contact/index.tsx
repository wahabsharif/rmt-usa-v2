import React from "react";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

function ContactSection() {
  return (
    <section className="px-4 py-8">
      <div className="flex flex-col md:flex-row md:space-x-6">
        <div className="w-full md:w-1/2 flex ">
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
