import AboutCompany from "@/components/about/AboutCompany";
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
      <AboutUsTwo />
      <Feature />
    </>
  );
};

export default AboutUsPage;
