import GoogleMap from "@/components/common/GoogleMap";
import PageBanner from "@/components/common/PageBanner";
import ContactSection from "@/components/contact";
import React from "react";

export default function ContactPage() {
  return (
    <>
      <PageBanner />
      <ContactSection />
      <GoogleMap />
    </>
  );
}
