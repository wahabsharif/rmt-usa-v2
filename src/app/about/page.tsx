import AboutCompany from "@/components/about/AboutCompany";
import AboutCompanyServices from "@/components/about/AboutCompanyServices";
import AboutUsTwo from "@/components/about/AboutUsTwo";
import MeetTeam from "@/components/about/MeetTeam";
import GoogleMap from "@/components/common/GoogleMap";
import PageBanner from "@/components/common/PageBanner";
import Feature from "@/components/about/Feature";
import React from "react";

const AboutUsPage: React.FC = () => {
  return (
    <>
      <PageBanner />
      <AboutCompany />
      <MeetTeam />
      <AboutCompanyServices />
      <Feature />
      <AboutUsTwo />
      <GoogleMap />
    </>
  );
};

export default AboutUsPage;
