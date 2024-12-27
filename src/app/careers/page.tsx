import CareersIntro from "@/components/careers/CareersIntro";
import CurrentOpeningCareers from "@/components/careers/CurrentOpeningCareers";
import PageBanner from "@/components/common/PageBanner";
import React from "react";
import { generateMetadata } from "@/data/metaData";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  pageTitle: "Careers",
});
export default function CareersPage() {
  return (
    <>
      <PageBanner />
      <CareersIntro />
      <CurrentOpeningCareers />
    </>
  );
}
