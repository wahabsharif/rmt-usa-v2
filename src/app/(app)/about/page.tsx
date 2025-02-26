import AboutCompany from "@/components/about/AboutCompany";
import AboutCompanyServices from "@/components/about/AboutCompanyServices";
import AboutUsTwo from "@/components/about/AboutUsTwo";
import CeoMessage from "@/components/about/CeoMessage";
import GoogleMap from "@/components/common/GoogleMap";
import PageBanner from "@/components/common/PageBanner";
import Feature from "@/components/about/Feature";
import React from "react";
import { generateMetadata } from "@/data/metaData";
import type { Metadata } from "next";
import { PartnersMarquee } from "@/components/home/PartnersMarquee";

export const metadata: Metadata = generateMetadata({
  pageTitle: "About",
});
const AboutUsPage: React.FC = () => {
  return (
    <>
      <PageBanner />
      <CeoMessage />
      <AboutCompanyServices />
      <AboutCompany />
      <Feature />
      <AboutUsTwo />
      <PartnersMarquee />
      <GoogleMap />
    </>
  );
};

export default AboutUsPage;
