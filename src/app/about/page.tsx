import AboutCompany from "@/components/about/AboutCompany";
import AboutCompanyServices from "@/components/about/AboutCompanyServices";
import AboutUsTwo from "@/components/about/AboutUsTwo";
import Banner from "@/components/about/Banner";
import MeetTeam from "@/components/about/MeetTeam";
import Feature from "@/components/Feature";
import React from "react";

const AboutUsPage: React.FC = () => {
  return (
    <>
      <Banner />
      <AboutCompany />
      <MeetTeam />
      <AboutCompanyServices />
      <AboutUsTwo />
      <Feature />
    </>
  );
};

export default AboutUsPage;
