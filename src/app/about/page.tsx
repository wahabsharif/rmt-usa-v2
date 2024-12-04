import AboutCompany from "@/components/about/AboutCompany";
import Banner from "@/components/about/Banner";
import MeetTeam from "@/components/about/MeetTeam";
import React from "react";

const AboutUsPage: React.FC = () => {
  return (
   <>
   <Banner/>
   <AboutCompany/>
   <MeetTeam/>
   </>
  );
};

export default AboutUsPage;
