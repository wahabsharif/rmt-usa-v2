import GoogleMap from "@/components/common/GoogleMap";
import PageBanner from "@/components/common/PageBanner";
import ContactSection from "@/components/contact";
import React from "react";
import { generateMetadata } from "@/data/metaData";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  pageTitle: "Contact Us",
});
export default function ContactPage() {
  return (
    <>
      <PageBanner />
      <ContactSection />
      <GoogleMap />
    </>
  );
}
