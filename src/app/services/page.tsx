import PageBanner from "@/components/common/PageBanner";
import ServicesGrid from "@/components/services/ServicesGid";
import React from "react";
import { generateMetadata } from "@/data/metaData";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  pageTitle: "Our Services",
});
const Services: React.FC = () => {
  return (
    <>
      <PageBanner />
      <ServicesGrid />
    </>
  );
};

export default Services;
