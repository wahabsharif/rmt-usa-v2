import CareersIntro from "@/components/careers/CareersIntro";
import CurrentOpeningCareers from "@/components/careers/CurrentOpeningCareers";
import PageBanner from "@/components/common/PageBanner";
import React from "react";

export default function CareersPage() {
  return (
    <>
      <PageBanner />
      <CareersIntro />
      <CurrentOpeningCareers />
    </>
  );
}
